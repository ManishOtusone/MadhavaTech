import React from 'react';

const Banner = ({ image, heading, para }) => {
    return (
        <div
            className="w-full h-[250px] md:h-[325px] relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
        >
            {/* Gradient Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(90deg, #165A8A 0%, rgba(22, 90, 138, 0.49) 47%, rgba(22, 90, 138, 0) 100%)",
                }}
            ></div>

            {/* Content Area */}
            <div className="relative max-w-4xl w-full z-10 px-4 md:px-6 py-10 md:py-24">
                <div
                    className="flex flex-col items-start gap-3 text-left p-3 rounded-md mt-20 ml-10  "
                    style={{
                        background:
                            "linear-gradient(90deg, #165A8A 0%, rgba(22, 90, 138, 0.49) 47%, rgba(22, 90, 138, 0) 100%)",
                    }}
                >
                    {/* Bullet + Small Title */}
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#F57E24]"></div>
                        <h2 className="text-sm font-semibold text-white">{heading}</h2>
                    </div>

                    {/* Big Subtitle */}
                    <p className="text-xl md:text-4xl font-bold text-white">{para}</p>
                </div>
            </div>
        </div>
    );
};

export default Banner