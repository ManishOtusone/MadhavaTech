import React from 'react';
import { Navbar } from "../Components/Navbar";
import Banner  from "../Components/Banner";
import { Footer } from "../Components/Footer";
import AboutPic from "../assets/About.png";
import dart from "../assets/Archery.png";
import bulb from "../assets/bulb.png";
import value from "../assets/value.png";
import busIcon from "../assets/business-contact-86.png";
import icLayer from "../assets/ic_layers.png";
import chat from "../assets/chat.png";
import timeLapse from "../assets/timelapse.png";
import { MemberCard } from '../Components/memberCards';
import janeCooper from "../assets/janeCooper.jpg"
import simmons from "../assets/simmons.jpg";
import hawkins from "../assets/hawkins.png";
import watson from "../assets/watson.png";
import CTA from "../assets/CTA.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CustomerCard } from '../Components/customerCard';


export const AboutUs = () => {
    return (
        <div className="overflow-x-hidden">
            <Navbar />

            <Banner image={AboutPic} heading="Our" para="About Us" />

            {/* Welcome Section */}
            <div className="m-4 sm:m-10 max-w-6xl mx-auto p-4 sm:p-6">
                <h2 className="text-center font-extrabold text-3xl sm:text-4xl text-[#2E2E2E] leading-relaxed mb-8">
                    Welcome to Madhava
                </h2>

                <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="p-4 flex flex-col justify-between flex-1">
                        <p className="text-gray-700 leading-relaxed mb-6 text-justify text-sm sm:text-base">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text since the 1500s.
                            <br /><br />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has remained essentially unchanged.
                        </p>
                        <button className="bg-[#558CBB] text-white py-3 px-6 rounded-md w-max hover:bg-blue-700 transition">
                            GET IN TOUCH
                        </button>
                    </div>
                    <div className="bg-[#C4C4C4] rounded-md flex-1 min-h-[250px]"></div>
                </div>
            </div>

            {/* Mission / Vision / Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-10 max-w-7xl mx-auto">
                {[
                    {
                        title: "Our Mission",
                        img: dart,
                        desc: "The main purpose of any website or mobile App is to attract new visitors, and therefore choosing the right design is the key to success of any App or Website. We provide creative solutions for building websites and Apps which would help you to generate business from your product."
                    },
                    {
                        title: "Our Vision",
                        img: bulb,
                        desc: "We focus on writing a well documented code which is easy to understand and maintain in future for the better performance of the Web or Mobile Application. We are focused on innovation and creativity to lead the change."
                    },
                    {
                        title: "Our Values",
                        img: value,
                        desc: "Innovation: We embrace creativity and continually seek new ways to solve challenges and drive progress. Integrity: We uphold the highest ethical standards, fostering trust and transparency in all our interactions."
                    }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 shadow-md text-center">
                        <img src={item.img} alt={item.title} className="mx-auto h-56 sm:h-72 object-contain" />
                        <h3 className="text-xl font-bold text-[#2E2E2E] mt-4">{item.title}</h3>
                        <p className="text-sm text-gray-700 leading-relaxed text-justify mt-2">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Why Choose Us */}
            <div className="bg-[#18587A] px-4 py-16 sm:px-10">
                <div className="max-w-4xl mx-auto text-center mb-10">
                    <h5 className="text-[#F64B4B] text-sm font-semibold uppercase mb-2">Why Choose Us</h5>
                    <h3 className="text-white text-2xl sm:text-3xl font-bold leading-snug">
                        People choose us because we <br className="hidden sm:block" />
                        serve the best for everyone
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {[busIcon, icLayer, chat, timeLapse].map((icon, i) => (
                        <div key={i} className="flex gap-4 items-start text-white p-6 rounded-lg">
                            <div className=" p-4 rounded-full h-[80px] w-[80px] flex items-center justify-center">
                                <img
                                    src={icon}
                                    alt={`Icon ${i + 1}`}
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Dedicated Project Manager</h3>
                                <p className="text-sm mt-2 leading-[19px] tracking-[-0.2px] text-justify opacity-70">
                                    With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>


                <hr className="bg-white h-[2px] w-[80%] mx-auto mt-16" />

                <div className="flex flex-col md:flex-row items-center justify-between text-white p-8 mx-4 md:mx-20 mt-10 rounded-lg">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold mb-2">Ready to launch your next project?</h3>
                        <p className="text-sm md:text-base text-white/70">
                            With lots of unique blocks, you can easily build a page without <br />
                            coding. Build your next landing page.
                        </p>
                    </div>
                    <button className="bg-[#3EABBF] text-white px-6 py-2 rounded-md hover:bg-[#349fad] transition duration-300">
                        Get Started a project
                    </button>
                </div>
            </div>

            {/* Team Section */}
            <div className="text-center my-16">
                <h3 className="text-sm font-semibold">Meet Our Team</h3>
                <h2 className="text-2xl md:text-4xl font-bold text-[#2E2E2E] mt-2">Our Expert Members</h2>
                <p className="text-gray-600 mt-4 text-sm md:text-base">
                    Lorem ipsum, dolor sit amet consectetur . Diam<br />
                    vivamus pretium maecenas amet.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 sm:px-12 mb-20">
                <MemberCard img={janeCooper} name="Jane Cooper" role="Developer" />
                <MemberCard img={simmons} name="Brooklyn Simmons" role="Designer" />
                <MemberCard img={hawkins} name="Guy Hawkins" role="Marketer" />
                <MemberCard img={watson} name="Kristin Watson" role="Photographer" />
            </div>

            {/* CTA */}
            <div
                className="text-center text-white py-12 px-6 rounded-lg bg-cover bg-center bg-no-repeat mt-10"
                style={{ backgroundImage: `url(${CTA})` }}
            >
                <h3 className="text-4xl sm:text-6xl font-bold mb-4">Careers at Madhava</h3>
                <p className="text-[#E6E6E6] mb-6 text-sm sm:text-base max-w-2xl mx-auto">
                    We invite you to supercharge your potential. Find what inspires and drives you. Find your spark.
                </p>
                <button className="bg-white text-[#18587A] px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
                    Get Started
                </button>
            </div>

            <div>
                <div className="text-center my-10 px-4 mt-25">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Customer says about Hostingin</h1>
                    <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 px-6 py-10 items-stretch">
                    {/* LEFT SIDE */}
                    <div className="flex flex-col justify-between flex-[0.7] gap-6">
                        <CustomerCard name="Shoo Phar Nhoe" des="Kang Masak" />
                        <CustomerCard name="Shoo Phar Nhoe" des="Kang Masak" />
                        <CustomerCard name="Shoo Phar Nhoe" des="Kang Masak" />
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex-[1.3]">
                        <h3 className="text-2xl font-bold mb-2">Fastest and Trusted!!</h3>
                        <div className="flex text-purple-500 text-xl mb-4">
                            {[...Array(5)].map((_, i) => (
                                <FontAwesomeIcon icon={faStar} key={i} />
                            ))}
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident.
                            <br /><br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>


            </div>
            <div className="flex flex-col md:flex-row items-center justify-between  p-8 mx-4 md:mx-20 mt-10 rounded-md">
                <div className="mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold mb-2">Ready to launch your next project?</h3>
                    <p className="text-sm md:text-base text-black/40">
                        With lots of unique blocks, you can easily build a page without <br />
                        coding. Build your next landing page.
                    </p>
                </div>
                <button className="bg-[#3EABBF] text-white px-6 py-2 rounded-full hover:bg-[#349fad] transition duration-300">
                    Get Started a project
                </button>
            </div>

            <hr className="bg-black/20 h-[1px] w-[80%] mx-auto mt-16" />

            <Footer />

        </div>
    );
};
