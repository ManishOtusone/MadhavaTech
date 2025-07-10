import React from 'react';
import { Navbar } from '../Components/Navbar';
import heroBg from '../assets/Hero-Section.png';
import section from "../assets/Section-1.png";
import item1 from '../assets/Ellipse.png';
import item2 from '../assets/Icon Security.png';
import item3 from '../assets/Icon Idea.png';
import item4 from '../assets/Icon Persons.png';
import Cards from '../Components/Cards';
import Bg from '../assets/Hero-Section.png';
import dart from "../assets/Archery.png";
import bulb from "../assets/bulb.png";
import valueImg from "../assets/value.png";
import { Footer } from '../Components/Footer';

const Home = () => {
  const cardsData = [
    {
      icon: item1,
      title: 'MobileApp Development',
      description:
        'With the shift towards mobile devices like tablets and smartphones, businesses—both new and established—are tapping into this growing market. This surge has propelled the mobile application industry forward at a rapid pace.'
    },
    {
      icon: item2,
      title: 'Web Development',
      description:
        'Modern businesses rely on web platforms to engage customers. Our web solutions offer performance, scalability, and excellent design to elevate your brand and services.'
    },
    {
      icon: item3,
      title: 'Graphic Design',
      description:
        'Visual identity is crucial. We design stunning graphics that communicate your brand message effectively, leaving a lasting impression.'
    },
    {
      icon: item4,
      title: 'E-commerce Application',
      description:
        'We build seamless, user-friendly online stores with integrated payment systems, inventory management, and responsive design to help you grow online.'
    }
  ];

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <div
        className="h-[603.36px] w-full text-white flex flex-col items-start justify-center px-10 text-left bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <h1 className="text-4xl font-bold leading-snug drop-shadow-md">
          Building Smart, Scalable Solutions<br />For Modern Business
        </h1>
        <h3 className="text-xl mt-4 font-light drop-shadow-md">
          Innovation that works for you
        </h3>

        <button className="mt-6 px-6 py-3 bg-cyan-600 rounded-lg text-white font-medium hover:bg-cyan-700 transition duration-300">
          Get in touch
        </button>
      </div>

      {/* Section 1 */}
      <div className="py-10 px-4 bg-white">
        <div className="text-center mb-8">
          <span className="text-cyan-800 text-3xl font-bold">How We Work</span>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 px-8 py-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="text-center">
              <div className="text-lg font-semibold text-cyan-800">
                Your<span className="font-bold">Company</span>
              </div>
              <div className="text-gray-600 text-sm">Your Slogan Here</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-20">
          <div>
            <h2 className="text-2xl font-semibold text-cyan-900 mb-4 leading-relaxed">
              Where Strategy Meets <br /> Imagination
            </h2>

            <p className="text-gray-700 mb-4">
              Empowering Digital Innovation – With <strong>Madhava</strong>
            </p>

            <p className="text-gray-700 mb-4 text-justify">
              At Madhava, we understand the cutting-edge technologies that are shaping the future of business. As a pioneering force in software development, Madhava delivers end-to-end services in:
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>iOS & Android Mobile App Development</li>
              <li>Website Design & Development</li>
              <li>Digital Marketing & Brand Growth Solutions</li>
            </ul>

            <button className="mt-4 px-6 py-3 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 transition duration-300">
              Get in Touch
            </button>
          </div>

          <div>
            <img src={section} alt="Section Illustration" className="w-full h-auto rounded" />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-[#F4F4F4] py-10 px-4">
        <div className="text-center text-[#265982] font-bold mb-8">
          <h3 className="text-2xl">Key Features</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {['Competitive Price', 'Growth Strategy', 'Quality Products'].map((title, i) => (
            <div key={i} className="bg-[#3EABBF] text-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-center mb-4">{title}</h4>
              <p className="text-justify leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid at, porro placeat dolorum nemo neque.
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Section 3 */}
      <div className="bg-white px-6 pt-10 pb-10 relative z-0">
        <div className="bg-[#3EABBF] pt-8 pb-48 px-6 rounded-md relative min-h-[400px] z-0">
          <div className="text-white max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
            <div className="space-y-4 max-w-3xl">
              <span className="text-sm uppercase tracking-widest text-white/90">Services</span>
              <h2 className="text-3xl md:text-4xl font-bold">What do we offer</h2>
              <p className="text-sm leading-relaxed">
                Welcome to <strong>[Your Company Name]</strong>, where we’re dedicated to providing<br />
                exceptional solutions tailored to your needs. Here's a glimpse of what we offer.
              </p>
            </div>
            <div className="mt-6 md:mt-2 md:ml-10">
              <button className="bg-white text-[#3EABBF] px-5 py-2 text-sm rounded-md font-medium shadow hover:bg-gray-100 transition-all duration-300">
                See more
              </button>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="w-full px-4 sm:px-6 md:px-8 mt-0 md:-mt-48 relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardsData.map((card, index) => (
              <div key={index} className="w-full flex justify-center">
                <Cards {...card} />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div
          className="mt-20 h-auto w-full text-white bg-cover bg-center flex flex-col items-center justify-center px-6 py-10"
          style={{ backgroundImage: `url(${Bg})` }}
        >
          <h1 className="text-4xl font-bold mb-8">Testimonials</h1>

          <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
            {[1, 2].map((_, i) => (
              <div key={i} className="rounded-lg p-4 text-black w-full md:w-1/2">
                <div className="rounded-full bg-[#C4C4C4] w-16 h-16 mb-4"></div>
                <p className="text-sm leading-relaxed text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum atque...
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-[100px] px-4 md:px-20 text-center">
          <h1 className="text-3xl font-bold text-black mb-6">Welcome To Madhava</h1>

          <p className="text-[#808080] text-[16px] md:text-base leading-relaxed mb-12 text-justify">
            We at OTUSONE understand the state-of-the-business-art technologies that define the future and can
            serve as an efficient services transformation catalyst for the clients! OTUSONE is a groundbreaking
            firm in the realm of software development with our dedicated deliverance of iOS and Android mobile
            application development, website development, and digital marketing-related solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ img: dart, title: "Our Mission" }, { img: bulb, title: "Our Vision" }, { img: valueImg, title: "Our Values" }].map((card, i) => (
              <div key={i} className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition">
                <div className="flex justify-center mb-4">
                  <img src={card.img} alt={card.title} className="w-70 h-70 object-contain" />
                </div>
                <h2 className="text-xl font-semibold mb-2 text-center">{card.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  The main purpose of any website or mobile App is to attract new visitors. We provide creative
                  solutions that help generate business from your product.
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#265982] rounded-lg flex flex-col md:flex-row justify-between items-center p-6 md:p-10 gap-6 text-white m-[50px]">
            <div className="bg-white w-full md:w-1/4 h-24 rounded-lg"></div>

            <div className="text-center md:text-left flex-1">
              <p className="font-semibold text-lg">
                Lorem ipsum is simply <br />
                dummy text of the printing <br />
                and typesetting industry.
              </p>
            </div>

            <div>
              <button className="bg-[#51AEC5] text-white px-6 py-2 rounded-md font-medium hover:bg-[#4298af] transition-all">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
