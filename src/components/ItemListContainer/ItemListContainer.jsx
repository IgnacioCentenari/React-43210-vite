import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import { getData, getCategoryData } from "../../services/firebase"

const ItemListContainer = ({ }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    const fetchData = categoryId === undefined ? getData : getCategoryData

    useEffect(() => {
        fetchData(categoryId)
            .then(res => setProducts(res))
    }, [categoryId])

    return (
        <div className="ItemListContainer">
            <h1>Bienvenido a Golf</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer