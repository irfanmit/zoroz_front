// src/components/Checkout.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate(); // Initialize navigate for programmatic navigation

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Simulate order processing, then navigate to Payment Success page
        alert(`Order placed for ${name} at ${address}!`);
        navigate('/payment-status'); // Redirect to the Payment Success page
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Checkout</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Address:</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                    <label className="block text-gray-700 font-semibold mb-2">$$$</label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-300"
                    >
                        Place Order
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
