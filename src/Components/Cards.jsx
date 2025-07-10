import React from 'react';

const Cards = ({ icon, title, description }) => {
    return (
        <div className="bg-white pt-3 rounded-lg shadow-md w-full max-w-sm space-y-4">
            {/* Icon */}
            <div className="flex justify-center">
                <div className="bg-gray-300 rounded-full w-24 h-24 flex items-center justify-center overflow-hidden">
                    <img src={icon} alt={title} className="w-full h-full object-cover rounded-full" />
                </div>
            </div>

            {/* Title */}
            <div className="text-center mt-4">
                <h4 className="text-[#3EABBF] font-medium text-lg leading-tight">
                    {title.split(' ').map((word, index) => (
                        <React.Fragment key={index}>
                            {word}
                            {index !== title.split(' ').length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </h4>
            </div>

            {/* Description */}
            <p className="font-roboto font-normal text-sm leading-relaxed text-justify text-gray-700 px-6 pb-6">
                {description}
            </p>
        </div>
    );
};

export default Cards;
