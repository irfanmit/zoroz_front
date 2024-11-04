
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Product ID:", id);
        
        const fetchProduct = async () => {
            const response = await fetch(`http://localhost:8000/api/products/${id}`);
            const data = await response.json();
            setProduct(data);
        };

        fetchProduct();
    }, [id]);

    // Function to navigate to the Checkout page
    const handleCheckout = () => {
        navigate('/checkout');
    };

    if (!product) return <div className="text-center text-gray-700">Loading...</div>;

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4 rounded" />
            <p className="text-gray-700 mb-4">{product.description}</p>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">${product.price}</h2>
            <button
                onClick={handleCheckout}
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-300"
            >
                Proceed to Checkout
            </button>
        </div>
    );
};

export default ProductDetail;
