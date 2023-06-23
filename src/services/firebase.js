import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, orderBy } from "firebase/firestore"
import products from "../data/products"


const firebaseConfig = {
    apiKey: "AIzaSyCPWL-Woe9HLYDxSXmhNEL7ougLBL4aKlg",
    authDomain: "react-coder-3d68c.firebaseapp.com",
    projectId: "react-coder-3d68c",
    storageBucket: "react-coder-3d68c.appspot.com",
    messagingSenderId: "142373513377",
    appId: "1:142373513377:web:b89d54dd0d92eb8d1068e0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const productsCollectionRef = collection(db, "products")

export async function getData() {
    const productsCollectionRef = collection(db, "products");

    const q = query(productsCollectionRef, orderBy("index"))
    const productsSnapshot = await getDocs(productsCollectionRef)
    const arrayDocs = productsSnapshot.docs
    
    const dataDocs = arrayDocs.map((doc) => {
        return { ...doc.data(), id: doc.id }
    } )

    return dataDocs
}

export async function getItemData(idUrl) {
    const docRef = doc(db, "products", idUrl)
    const docSnapshot = await getDoc(docRef)
    return { id: docSnapshot.id, ...docSnapshot.data() }
}

export async function getCategoryData(idCategory) {
    const q = query(productsCollectionRef, where("category", "==", idCategory))

    const productsSnapshot = await getDocs(q)
    const arrayDocs = productsSnapshot.docs
    
    const dataDocs = arrayDocs.map((doc) => {
        return { ...doc.data(), id: doc.id }
    } )

    return dataDocs
}

export async function createOrder(data) {
    const ordersCollectionRef = collection(db, "orders");
    const response = await addDoc(ordersCollectionRef, data);
    return response.id;
}

export async function exportData() {
    const productsCollectionRef = collection(db, "products");

    for (let item of products) {
        item.index = item.id;
        delete item.id;
        const res = await addDoc(productsCollectionRef, item);
    }
}

export async function exportDataWithBatch() {
    const batch = writeBatch(db);

    const collectionRef = collection(db, "products");

    for (let item of products) {
        item.index = item.id;
        delete item.id;

        const docRef = doc(collectionRef);
        batch.set(docRef, item);
    }

    await batch.commit();
    console.log("Items Exportados");
}