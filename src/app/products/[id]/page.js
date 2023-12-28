// "use client";
import React from 'react';

const DetailsPage = async({params}) => {
    const res = await fetch(`http://localhost:5000/products/${params.id}`);
    const product = await res.json();
    return (
        <div>
            <h1 className='text-4xl text-center'>Post details page</h1>
            <div key={product.product_id} className="card  bg-gray-100 shadow-xl w-[70%] my-5 mx-auto">
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p>{product.description}</p>
                            <p>Price:${product.price}</p>
                         
                            
                        </div>
                    </div>
        </div>
    );
};

export default DetailsPage;