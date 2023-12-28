
// "use client";

import React from 'react';
import { Link } from 'react-router-dom';
const ProductPage = async () => {

    const res = await fetch("http://localhost:5000/products");
    const products = await res.json();

    return (
        <div className='w-full'>
            <h1 className='text-2xl'>Total products:{products.length}</h1>
            {
                products.map((product) => (
                    <div key={product.product_id} className="card  bg-gray-100 shadow-xl w-[70%] my-5 mx-auto">
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p>{product.description}</p>
                            <p>Price:${product.price}</p>
                         
                           
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ProductPage;