import React from 'react';

export const CustomerCard = ({ name, des }) => {
    return (
        <div className="bg-grey-200 hover:bg-white rounded-lg p-4 flex items-center shadow-sm hover:shadow-md gap-4 transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="w-12 h-12 bg-gray-300 rounded-md" />
            <div>
                <h3 className="font-semibold mb-2">{name}</h3>
                <p className="text-sm text-gray-600 mt-1">{des}</p>
            </div>
        </div>


    );
};
