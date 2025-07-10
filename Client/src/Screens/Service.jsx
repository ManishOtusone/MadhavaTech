import React from 'react';
import { Navbar } from "../Components/Navbar";
import Banner from "../Components/Banner";
import { CardSlider } from '../Components/CardSlider';
import picture from "../assets/ServicePhoto.png";
import imageBox from "../assets/Image-Box.png";
import { ServiceCards } from '../Components/ServiceCards';
import CarRental from "../assets/CarRental.jpg";
import FoodApp from "../assets/FoodApp.jpg";
import DatingApp from "../assets/DatingApp.jpg";
import CarWash from "../assets/CarWash.jpg";
import Ecommerce from "../assets/Ecommerce.jpg";
import OnlineShopping from "../assets/OnlineShopping.jpg";
import CTA from "../assets/CTA.png";
import { Footer } from "../Components/Footer";

export const Service = () => {
    const features = [
        {
            title: "Expertise",
            description: "We offer a team of highly skilled professionals with expertise in various IT domains, ensuring top-notch solutions tailored to your specific needs.",
        },
        {
            title: "Customized Solutions",
            description: "We provide personalized IT solutions designed to address your unique business challenges and goals, ensuring maximum efficiency and effectiveness.",
        },
        {
            title: "Innovation",
            description: "We stay at the forefront of technological advancements, offering innovative solutions that help you stay competitive in your industry.",
        },
        {
            title: "Cost-effectiveness",
            description: "We offer cost-effective IT solutions that deliver maximum value for your investment, helping you optimize your IT budget.",
        },
        {
            title: "Customer-centric Approach",
            description: "We prioritize customer satisfaction and ensure clear communication, responsiveness, and ongoing support throughout our engagement.",
        },
        {
            title: "24/7 Support",
            description: "Our dedicated support team is available 24/7 to address any IT issues or concerns, providing peace of mind and ensuring continuous operations.",
        },
    ];
    return (

        <div className='overflow-x-hidden flex flex-col min-h-screen'>
            <Navbar />

            <main className='flex-1'>
                <Banner
                    image={picture}
                    heading="Our"
                    para="Our Features Service"
                />

                <div className="mt-10">
                    <CardSlider
                        image={imageBox}
                        headinf="App Development"
                    />
                </div>

                {/* Why Choose Section */}
                <div className='px-4 sm:px-8 lg:px-16 py-12'>
                    <div className='text-center'>
                        <h2 className="font-bold text-3xl sm:text-4xl leading-tight">
                            Why Choose OTUSONE LLP for<br /> your Big ideas
                        </h2>
                        <p className='mt-4 text-[#808080]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit tristique volutp</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 bg-[#EBEBEB] rounded-lg p-4 sm:p-5 shadow-sm transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white"
                            >
                                <div className="bg-gray-300 h-[40px] w-[60px] sm:h-[50px] sm:w-[60px] rounded-md mt-1 shrink-0"></div>
                                <div>
                                    <h5 className="text-base sm:text-lg font-semibold">{item.title}</h5>
                                    <p className="text-sm sm:text-[15px] text-gray-600 mt-1 text-justify">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Service Cards Section */}
                <div className="py-12 px-4 sm:px-6 lg:px-16 bg-[#f9f9f9]">
                    <div className="text-center max-w-4xl mx-auto mb-10">
                        <h1 className="text-2xl sm:text-4xl font-bold mb-4">
                            BRINGING YOUR IDEA TO LIFE
                        </h1>
                        <p className="text-[#808080] text-sm sm:text-base">
                            "From concept to creation, we specialize in bringing your ideas to life."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[CarRental, FoodApp, DatingApp, CarWash, Ecommerce, OnlineShopping].map((img, idx) => {
                            const headings = [
                                "Car Rental Services",
                                "Food App",
                                "Dating App",
                                "Car Wash Services",
                                "Ecommerce",
                                "Online Shopping"
                            ];
                            const paras = [
                                "Experience the Freedom of Mobility with Our Premier Car Rental Service. ",
                                "Savor the Convenience of Ordering Food Online. Indulge in a Culinary Adventure from the Comfort of Your Home. ",
                                "Providing Compassionate Care and Expert Medical Services. Your Health and Well-being are Our Priority.",
                                "Reliable Transport Solutions Tailored to Your Needs. Whether it's Commuting, Delivery, or Logistics, We Ensure Safe and Efficient Journeys,",
                                "Empowering Your Online Shopping Experience. Explore a World of Possibilities, Seamless Transactions, and Endless Choices.",
                                "Igniting Minds, Empowering Futures. Our Commitment to Excellence in Education Ensures Every Student Thrives."
                            ];
                            return (
                                <div key={idx} className="p-2 sm:p-4">
                                    <ServiceCards img={img} heading={headings[idx]} para={paras[idx]} />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Section */}
                <div
                    className="text-center text-white py-12 px-6 rounded-lg bg-cover bg-center bg-no-repeat"
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
            </main>

            <Footer />
        </div>
    );
};
