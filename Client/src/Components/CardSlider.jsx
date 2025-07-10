import React, { useState } from 'react';

export const CardSlider = ({ image }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const cardData = [
        {
            image,
            title: 'App Development',

        },
        {
            image,
            title: 'Web Development',

        },
        {
            image,
            title: 'UI/UX Design',

        },
        {
            image,
            title: 'Digital Marketing',

        },
    ];

    return (
        <div className="w-full px-4 py-10 overflow-x-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center items-stretch">

                {cardData.map((card, index) => {
                    const titleParts = card.title.split(" ");

                    return (
                        <div
                            key={index}
                            className={`bg-[#F1F1F1] rounded-lg shadow-md p-4 flex flex-col justify-between w-72 h-full min-h-[480px] transition-transform duration-300 ease-in-out
    ${index === activeIndex ? 'scale-105 shadow-lg' : ''}
  `}
                        >
                            <div>
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-52 object-cover rounded-[14px] mb-4 flex-shrink-0"
                                />

                                <h3 className="text-left text-2xl leading-snug font-bold ">
                                    {titleParts.length > 1
                                        ? (
                                            <>
                                                {titleParts[0]}<br />
                                                {titleParts.slice(1).join(' ')}
                                            </>
                                        )
                                        : card.title
                                    }
                                </h3>


                            </div>

                            <button className=" bg-[#F57E24] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#e26b12] transition transform hover:scale-105">
                                See More
                            </button>
                        </div>

                    );
                })}
            </div>

            <div className="flex justify-center mt-6 gap-2">
                {cardData.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${index === activeIndex ? 'bg-[#000000]' : 'bg-gray-400'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};
