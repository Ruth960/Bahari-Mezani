import React from 'react';

export default function OrderProducts() {

    const handlePlaceOrderClick = () => {
        
        const whatsappNumber = '254745846180'; 
        const prefilledMessage = encodeURIComponent("Hi, I'd like to place an order from your website. Can you please help me?");

        // Construct the WhatsApp deep link
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${prefilledMessage}`;

        // Open WhatsApp in a new tab/window
        window.open(whatsappUrl, '_blank');

        console.log('Redirecting to WhatsApp with pre-filled message...');
    };

    return (
        <div className="py-16 mt-20 text-center">
            <h2 className="text-5xl font-extrabold text-[#009dc4] mb-6">Order and Delivery</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
                We serve local retailers, wholesalers, institutions, and export clients with timely
                deliveries and consistent quality. Reach out to place your order or partner with us.
            </p>
            <button
                onClick={handlePlaceOrderClick} // Add the onClick handler here
                className="bg-[#009dc4] hover:bg-[#48bf91] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition duration-300 hover:scale-105"
            >
                Place an Order
            </button>
        </div>
    );
}
