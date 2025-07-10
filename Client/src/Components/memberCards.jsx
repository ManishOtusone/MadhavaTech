import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faPinterestP,
    faDribbble,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export const MemberCard = ({ img, name, role }) => {
    return (
        <div className="relative w-full max-w-xs m-10 ml-3">
            {/* Image */}
            <div className="w-full h-64 rounded-t-lg">
                <img
                    src={img}
                    alt={name}
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Overlay Content */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 w-[90%] bg-white shadow-lg rounded-lg px-3 py-2  text-left">
                <div className="flex justify-start space-x-4 text-sm mb-2">
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faPinterestP} />
                    <FontAwesomeIcon icon={faDribbble} />
                    <FontAwesomeIcon icon={faInstagram} />
                </div>

                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-gray-500 text-sm">{role}</p>
            </div>
        </div>
    );
};
