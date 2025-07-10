import React from 'react';

export const ServiceCards = ({ img, heading, para }) => {
    return (
        <div className="flex flex-col h-full rounded-xl p-5 bg-white shadow-sm hover:shadow-lg transition duration-300 border border-gray-100">
            <img
                src={img}
                alt={heading}
                className="rounded-md w-full h-48 object-cover mb-4"
            />

            <h3 className="text-lg sm:text-xl font-bold  text-gray-800 mb-2 text-center">
                {heading}
            </h3>

            <p className="text-gray-600 text-sm text-justify leading-relaxed flex-grow">
                {para}
            </p>
        </div>

    );
};
