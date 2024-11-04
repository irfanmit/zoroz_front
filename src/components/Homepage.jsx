import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    const [products, setProducts] = useState([]);

    // Fetch products 
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('http://localhost:8000/api/products'); 
            const data = await response.json();
            setProducts(data);
            console.log("data :", data);
            
            console.log("products : ", products);
            
        };

        fetchProducts();
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Welcome to Our E-Commerce Store</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:shadow-xl hover:scale-105">
                        <Link to={`/product/${product._id}`}>
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold">{product.name}</h2>
                                <p className="text-gray-700 mt-2">${product.price}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Homepage;
