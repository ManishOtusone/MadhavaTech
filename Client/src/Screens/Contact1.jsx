import React, { useState } from 'react';
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import picture from "../assets/Photo.png";
import picture1 from "../assets/Photo-1.jpg";
import phone from "../assets/phone.png";
import message from "../assets/message.png";
import location from "../assets/location.png";
import Banner from '../Components/Banner';
import { toast } from 'react-toastify';


export const Contact1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: ""
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    const response = await fetch("http://localhost:3000/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),

    });

    const result = await response.json();
    console.log(result);

    if (result.success) {
      toast.success("Form Submitted Succeefully!!");
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: ""
      })
    }
    else {
      toast.error("Failed to submit form");
    }

  };

  return (
    <div className='overflow-x-hidden'>
      <Navbar />

      <Banner
        image={picture}
        heading="Contact us"
        para="Feel Free Reach Us"
      />

      <div className="mx-4 md:mx-20 my-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
            <img src={picture1} alt="Contact Illustration" className="w-full h-auto rounded-lg object-cover" />
          </div>

          {/* Right Side - Info */}
          <div className="w-full md:w-1/2 space-y-6">
            {/* Bullet & Title */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#F57E24] rounded-full"></div>
              <h2 className="text-sm font-medium">Let's Talk</h2>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold">Get in touch with us</h2>

            <p className="text-[#7D7D7D] text-sm md:text-base leading-relaxed">
              Completely synergize resource-taxing relationships via premier niche.<br />
              Dynamically innovate state-of-the-art customer service.
            </p>

            {/* Contact Info Blocks */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-[#F4F4F4] rounded-full p-3 flex items-center justify-center">
                  <img src={phone} alt="Phone Icon" className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-[#7D7D7D] text-sm">Have any question?</h5>
                  <h6 className="text-base font-medium">Free: +91-9877665252</h6>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#F4F4F4] rounded-full p-3 flex items-center justify-center">
                  <img src={message} alt="Message Icon" className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-[#7D7D7D] text-sm">Write email</h5>
                  <h6 className="text-base font-medium">info@email.com</h6>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#F4F4F4] rounded-full p-3 flex items-center justify-center">
                  <img src={location} alt="Location Icon" className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-[#7D7D7D] text-sm">Visit anytime</h5>
                  <h6 className="text-base font-medium">H-00, Sector 63, Noida, UP 201301</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-14 px-4 md:px-0 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-10">
            {/* Heading with bullet */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 bg-[#40DDB6] rounded-full"></div>
              <h2 className="text-sm font-semibold">Contact Us</h2>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl font-bold text-[#000000]">Request A Call Back!</h1>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={submitHandler}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={changeHandler}
              placeholder="Your Name"
              className="bg-[#F8F8F8] border border-gray-300 p-3 rounded outline-none focus:ring-2 focus:ring-[#F57E24]"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              placeholder="Email Address"
              className="bg-[#F8F8F8] border border-gray-300 p-3 rounded outline-none focus:ring-2 focus:ring-[#F57E24]"
              required
            />
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={changeHandler}
              placeholder="Phone Number"
              className="bg-[#F8F8F8] border border-gray-300 p-3 rounded outline-none focus:ring-2 focus:ring-[#F57E24]"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={changeHandler}
              placeholder="Subject"
              className="bg-[#F8F8F8] border border-gray-300 p-3 rounded outline-none focus:ring-2 focus:ring-[#F57E24]"
            />
            <textarea
              placeholder="Message..."
              name="message"
              value={formData.message}
              onChange={changeHandler}
              rows="5"
              className="bg-[#F8F8F8] border border-gray-300 p-3 rounded outline-none focus:ring-2 focus:ring-[#F57E24] md:col-span-2 resize-none"
              required
            ></textarea>
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-[#F57E24] text-white px-8 py-3 rounded-md hover:bg-orange-600 transition font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};
