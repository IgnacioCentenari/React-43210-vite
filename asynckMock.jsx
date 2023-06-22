const products = [
    {
        id: '1',
        name: 'Remera Doggy - By le Fleur*',
        price: 60 ,
        category: 'Remera',
        img: '/img/remeraDoggy.jpg',
        stock: 20,
        description: 'Remera doggy, hecha en Italia con las mejores telas del mercado. Diseñado por Tyler Okonma'
    },
    {
        id: '2',
        name: 'Remera Pie - By le Fleur*',
        price: 60 ,
        category: 'Remera',
        img: '/img/remeraPie.jpg',
        stock: 10,
        description: 'Remera Pie, hecha en Italia con las mejores telas del mercado. Diseñado por Tyler Okonma'
    },
    {
        id: '3',
        name: 'Remera Strawberry - By le Fleur*',
        price: 60 ,
        category: 'Remera',
        img: '/img/remeraStrawberry.jpg',
        stock: 5,
        description: 'Remera Strawberry, hecha en Italia con las mejores telas del mercado. Diseñado por Tyler Okonma'
    },
    {
        id: '4',
        name: 'Campera de cuero "Bronco" - By le Fleur*',
        price: 300 ,
        category: 'Campera',
        img: '/img/camperaBronco.jpg',
        stock: 1,
        description: 'Campera de cuero, hecha en Italia con las mejores telas del mercado. Diseñado por Tyler Okonma'
    },
    {
        id: '5',
        name: 'Campera de cuero "Call Me" - Green',
        price: 150 ,
        category: 'Campera',
        img: '/img/camperaCallMeGreen.jpg',
        stock: 5,
        description: 'Campera de cuero, hecha en Italia con las mejores telas del mercado. Diseñado por Tyler Okonma'
    },
    {
        id: '6',
        name: 'Campera de cuero "Call Me" - Cream',
        price: 150 ,
        category: 'Campera',
        img: '/img/camperaCallMeCream.jpg',
        stock: 5,
        description: 'Campera de cuero, hecha en Italia con las mejores telas del mercado. Diseñado por Tyler Okonma'
    },
    {
        id: '7',
        name: 'Campera Puffer "Rico" - Brown',
        price: 125 ,
        category: 'Campera',
        img: '/img/camperaPufferRicoBrown.jpg',
        stock: 5,
        description: 'Campera estilo puffer, hecha en Italia con las mejores telas del mercado. Diseñado por Tyler Okonma'
    },
    {
        id: '8',
        name: 'Campera Puffer "Rico" - Orange',
        price: 125 ,
        category: 'Campera',
        img: '/img/camperaPufferRicoOrange.jpg',
        stock: 5,
        description: 'Campera estilo puffer, hecha en Italia con las mejores telas del mercado. Diseñado por Tyler Okonma'
    },
    {
        id: '9',
        name: 'Lentes "Sunseeker"',
        price: 50 ,
        category: 'Accesorios',
        img: '/img/lentesSunseeker.jpg',
        stock: 5,
        description: 'Lentes creados y diseñado por Tyler Okonma'
    },
    {
        id: '10',
        name: 'Lentes "Bel-Air"',
        price: 75 ,
        category: 'Accesorios',
        img: '/img/lentesBelAir.jpg',
        stock: 5,
        description: 'Lentes creados y diseñado por Tyler Okonma'
    },
    {
        id: '11',
        name: 'Lentes "Tortoise"',
        price: 100 ,
        category: 'Accesorios',
        img: '/img/lentesTortoise.jpg',
        stock: 5,
        description: 'Lentes creados y diseñado por Tyler Okonma'
    },
    {
        id: '12',
        name: 'Pañuelo Wavy - Red',
        price: 25 ,
        category: 'Accesorios',
        img: '/img/pañueloWavyRed.jpg',
        stock: 10,
        description: 'Pañuelo "Wavy", hecho en Italia con las mejores telas del mercado. Diseñado por Tyler Okonma'
    },
    {
        id: '13',
        name: 'Pañuelo Wavy - Mint',
        price: 25 ,
        category: 'Accesorios',
        img: '/img/pañueloWavyMint.jpg',
        stock: 10,
        description: 'Pañuelo "Wavy", hecho en Italia con las mejores telas del mercado. Diseñado por Tyler Okonma'
    },
    {
        id: '14',
        name: 'Pañuelo Wavy - Blue',
        price: 25 ,
        category: 'Accesorios',
        img: '/img/pañueloWavyBlue.jpg',
        stock: 10,
        description: 'Pañuelo "Wavy", hecho en Italia con las mejores telas del mercado. Diseñado por Tyler Okonma'
    },
    {
        id: '15',
        name: 'Pocket shorts - Wavy Blue',
        price: 50 ,
        category: 'Pantalones',
        img: '/img/pocketShortsWavyBlue.jpg',
        stock: 10,
        description: 'Pantalon estilo "Pocket short", hecho en Italia con las mejores telas del mercado. Diseñado por Tyler Okonma'
    },
    {
        id: '16',
        name: 'Shorts - "Khaki"',
        price: 75 ,
        category: 'Pantalones',
        img: '/img/shortsKhaki.jpg',
        stock: 5,
        description: 'Pantalon estilo "Khaki", hecho en Italia con las mejores telas del mercado. Diseñado por Tyler Okonma'
    },
    {
        id: '17',
        name: 'Loafer "Tassel" - Brown',
        price: 125 ,
        category: 'Zapatos',
        img: '/img/loaferTasselBrown.jpg',
        stock: 5,
        description: 'Zapatos estilo "Loafer". Diseñado por Tyler Okonma'
    },
    {
        id: '18',
        name: 'Loafer "Tassel" - Blue',
        price: 125 ,
        category: 'Zapatos',
        img: '/img/loaferTasselBlue.jpg',
        stock: 5,
        description: 'Zapatos estilo "Loafer". Diseñado por Tyler Okonma'
    },
    {
        id: '19',
        name: 'Remera Polo "Wavy red" - By le Fleur*',
        price: 80 ,
        category: 'Remera',
        img: '/img/RemeraPoloWavyRed.jpg',
        stock: 5,
        description: 'Remera estilo "Polo", hecha en Italia con las mejores telas del mercado. Diseñado por Tyler Okonma'
    },
    {
        id: '20',
        name: 'Remera Polo "Wavy Green" - By le Fleur*',
        price: 80 ,
        category: 'Remera',
        img: '/img/RemeraPoloWavyGreen.jpg',
        stock: 5,
        description: 'Remera estilo "Polo", hecha en Italia con las mejores telas del mercado. Diseñado por Tyler Okonma'
    },
    {
        id: '21',
        name: 'WorkWear pants "Brown" - By le Fleur*',
        price: 100 ,
        category: 'Pantalones',
        img: '/img/WorkWearPantsBrown.jpg',
        stock: 2,
        description: 'Pantalon estilo "workwear", hecho en Italia con las mejores telas del mercado. Diseñado por Tyler Okonma'
    },
    {
        id: '22',
        name: 'College Shorts - "Blue"',
        price: 50 ,
        category: 'Pantalones',
        img: '/img/collegeShortBlue.jpg',
        stock: 10,
        description: 'Pantalon estilo "College", hecho en Italia con las mejores telas del mercado. Diseñado por Tyler Okonma'
    },
    {
        id: '23',
        name: 'Multi Shorts - "Black"',
        price: 35 ,
        category: 'Pantalones',
        img: '/img/MultiShortsBlack.jpg',
        stock: 20,
        description: 'Pantalon estilo "Multi", hecho en Italia con las mejores telas del mercado. Diseñado por Tyler Okonma'
    },
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}