import React from 'react'

const ListRendering2 = () => {
    const products = [
        {
            id: 101,
            name: "Wireless Mouse",
            price: 25.99,
            category: "Electronics",
            inStock: true,
        },
        {
            id: 102,
            name: "Mechanical Keyboard",
            price: 89.49,
            category: "Electronics",
            inStock: true,
        },
        {
            id: 103,
            name: "Yoga Mat",
            price: 19.99,
            category: "Fitness",
            inStock: false,
        },
        {
            id: 104,
            name: "Coffee Maker",
            price: 45.0,
            category: "Kitchen",
            inStock: true,
        },
        {
            id: 105,
            name: "Running Shoes",
            price: 120.0,
            category: "Apparel",
            inStock: true,
        },
        {
            id: 106,
            name: "Bluetooth Headphones",
            price: 55.0,
            category: "Electronics",
            inStock: false,
        },
        {
            id: 107,
            name: "Stainless Steel Bottle",
            price: 15.75,
            category: "Home",
            inStock: true,
        },
        {
            id: 108,
            name: "Desk Lamp",
            price: 30.25,
            category: "Home",
            inStock: true,
        },
        {
            id: 109,
            name: "Resistance Bands",
            price: 12.99,
            category: "Fitness",
            inStock: true,
        },
        {
            id: 110,
            name: "Chef's Knife",
            price: 65.0,
            category: "Kitchen",
            inStock: false,
        },
    ];


    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Products Detail </h1>

            <div style={{
                display: "grid", gridTemplateColumns: "repeat(3,)"
            }}>
                {products.map((product, index) => {
                    return <React.Fragment key={index}>
                        <h2 >Product Name :{product.name}</h2>
                        <h3 >Product Price:{product.price}</h3>
                        <p >product category:{product.category}</p>
                        <p >product status:{String(product.inStock)} </p>
                    </React.Fragment>
                })}
            </div>
        </div>
    )
}

export default ListRendering2