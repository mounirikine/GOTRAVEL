import React from 'react'

import beachvid from "../assets/hero.mp4";

import hero from "../assets/beachVid.mp4";


import img1 from "../assets/borabora.jpg";
import img2 from "../assets/borabora2.jpg";
import img3 from "../assets/keywest.jpg";
import img4 from "../assets/maldives.jpg";

// images

import ban1 from "../assets/images/ban1.jpg";
import ban2 from "../assets/images/ban2.jpg";
import ban3 from "../assets/images/ban3.jpg";
import ban4 from "../assets/images/ban4.jpg";
import ban5 from "../assets/images/ban5.jpg";

// pack images

import pac1 from "../assets/images/package-1.jpg";
import pac2 from "../assets/images/package-2.jpg";
import pac3 from "../assets/images/package-3.jpg";
import pac4 from "../assets/images/package-4.jpg";
import pac5 from "../assets/images/package-5.jpg";
import pac6 from "../assets/images/package-6.jpg";

import pub from "../assets/pub.jpg";
import { MdOutlineSurfing } from "react-icons/md";
import { AiFillNotification } from "react-icons/ai";
import { FaCar } from "react-icons/fa";

import { FaRoute } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import { MdOutlineDone } from "react-icons/md";

import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';


import team2 from '../assets/team-2.jpg'
import team3 from '../assets/team-3.jpg'
import team4 from '../assets/team-4.jpg'
import team1 from '../assets/team-1.jpg'

const imageArray = [pac1, pac2, pac3, pac4, pac5, pac6];


const deals = [
  {
    id: 1,
    image: img1,
    title: "Patagonia Wilderness Trek",
    time: "10",
    price: "1.071",
    old_price: "1.599",
  },
  {
    id: 2,
    image: img2,
    title: "Amazon Rainforest Adventure",
    time: "7",
    price: "899",
    old_price: "1.199",
  },
  {
    id: 3,
    image: img3,
    title: "Swiss Alps Ski Retreat",
    time: "8",
    price: "1.499",
    old_price: "1.899",
  },
  {
    id: 4,
    image: img4,
    title: "Safari Expedition in Africa",
    time: "12",
    price: "2.299",
    old_price: "2.999",
  },
  // {
  //   id: 5,
  //   image: 'img5',
  //   title: 'Japanese Cherry Blossom Tour',
  //   time: '9',
  //   price: '1.899',
  //   old_price: '2.299',
  // },
];


const Main = () => {
  return (
    <>
<section className="w-full h-screen relative">
    <video
        className="hero w-full h-full object-cover"
        src={beachvid}
        type="video/mp4"
        autoPlay
        loop
        muted
    ></video>
    <div className="absolute flex items-center justify-center w-full h-full top-0 left-0 px-10 z-50">
        <div className="text-center text-white">
            <h1 className="hero-title text-2xl md:text-4xl lg:text-5xl mb-7 font-bold mb-3">
                <span>UP TO 60% OFF </span> ADVENTURE TRAVEL
            </h1>
            <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold">
                JOIN OVER 40,000 MEMBERS
            </h1>

            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-3">
                Get exclusive access to members only deals on <br /> amazing adventure by email - it's free
            </h3>

            <form className="mt-5">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  class="block w-full p-4 outline-none ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email ..."
                  required
                />
                <button
                  type="submit"
                  class="text-white  lg:w-48 absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  SUBSCRIBE
                </button>
              </div>
            </form>
        </div>
    </div>
</section>


<section className="px-4 lg:px-8 xl:px-20 relative">
    <h1 className="text-center py-6 text-2xl md:text-4xl lg:text-5xl font-bold text-cyan-950">
        Recent Deals
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10">
        {deals.map((item, index) => (
            <div
                key={index}
                className="w-full max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden h-[340px] hover:scale-105 transition duration-75"
            >
                <img
                    src={item.image}
                    alt="Deal"
                    className="h-48 w-full object-cover object-center"
                />
                <div className="px-6 py-4">
                    <h1 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h1>
                    <p className="text-gray-700 text-sm md:text-base">
                        {item.time} days from{" "}
                        <span className="text-red-500 line-through mr-1">
                            ${item.old_price}
                        </span>
                        <span className="text-green-500 font-bold">
                            ${item.price}
                        </span>
                    </p>
                </div>
            </div>
        ))}
    </div>
</section>

<section className="px-4 lg:px-8 xl:px-20">
    <div className="w-full bg-slate-50 mt-10">
        <h1 className="text-center py-6 text-2xl md:text-4xl lg:text-5xl font-bold text-sky-950 mt-4">
            How it Works
        </h1>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center px-4 lg:px-10 py-6 lg:py-10">
            <div className="mb-6 lg:mb-0 text-center">
                <MdOutlineSurfing className="text-6xl mx-auto text-cyan-950" />
                <h2 className="font-bold mt-3 text-lg lg:text-xl">Handpicked Adventures</h2>
                <p className="mt-1 text-center lg:text-left">We search more than 700...</p>
            </div>
            <div className="mb-6 lg:mb-0 text-center">
                <AiFillNotification className="text-6xl mx-auto text-cyan-950" />
                <h2 className="font-bold mt-3 text-lg lg:text-xl">Handpicked Adventures</h2>
                <p className="mt-1 text-center lg:text-left">We search more than 700...</p>
            </div>
            <div className="text-center">
                <FaCar className="text-6xl mx-auto text-cyan-950" />
                <h2 className="font-bold mt-3 text-lg lg:text-xl">Handpicked Adventures</h2>
                <p className="mt-1 text-center lg:text-left">We search more than 700...</p>
            </div>
        </div>

        <img src={pub} alt="publication" className="w-full object-cover" />

        <h1 className="text-center py-6 text-2xl md:text-4xl lg:text-5xl font-bold text-sky-950 mt-4">
            Popular Destinations
        </h1>

        <div className="flex flex-col lg:flex-row items-center px-4 lg:px-10">
            <div className="w-full lg:w-5/12 mb-2 lg:mb-0">
                <img src={ban1} alt="Banner 1" className="w-full h-auto" />
            </div>
            <div className="w-full lg:w-7/12 mb-2 lg:ml-6">
                <h1 className="text-2xl lg:text-4xl font-semibold mb-3">
                    <span>UP TO 60% OFF</span> ADVENTURE TRAVEL
                </h1>
                <h1 className="text-lg lg:text-xl font-semibold">
                    JOIN OVER 40,000 MEMBERS
                </h1>
                <h3 className="font-semibold mt-3">
                    Get exclusive access to members only deals on <br /> amazing
                    adventure by email - it's free
                </h3>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-2 items-center px-4 lg:px-10 mt-4">
            <div className="w-full lg:w-4/12 mb-2 lg:mb-0">
                <img src={ban2} alt="Banner 2" className="w-full h-auto" />
            </div>
            <div className="w-full lg:w-4/12 h-full mb-2 lg:mb-0">
                <img src={ban4} alt="Banner 4" className="w-full h-full object-cover" />
            </div>
            <div className="w-full lg:w-4/12 h-full">
                <img src={ban5} alt="Banner 5" className="w-full h-full object-cover" />
            </div>
        </div>
    </div>
</section>

      <section className="py-16">
        <div className="container pt-5 pb-3 px-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Tours & Travel Services</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="col-lg-4 col-md-6 mb-8 px-10">
              <div className="bg-slate-200 text-center p-8">
                <FaRoute className="mx-auto mb-4 text-5xl text-blue-600" />
                <h5 className="mb-4 text-lg font-semibold">Travel Guide</h5>
                <p className="text-gray-700">
                  Justo sit justo eos amet tempor amet clita amet ipsum eos
                  elitr. Amet lorem est amet labore
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-8 px-10">
              <div className="bg-slate-200 text-center p-8">
                <FaTicketAlt className="mx-auto mb-4 text-5xl text-blue-600" />
                <h5 className="mb-4 text-lg font-semibold">Ticket Booking</h5>
                <p className="text-gray-700">
                  Justo sit justo eos amet tempor amet clita amet ipsum eos
                  elitr. Amet lorem est amet labore
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-8 px-10 ">
              <div className="text-center p-8 bg-slate-200">
                <FaHotel className="mx-auto mb-4 text-5xl text-blue-600" />
                <h5 className="mb-4 text-lg font-semibold">Hotel Booking</h5>
                <p className="text-gray-700">
                  Justo sit justo eos amet tempor amet clita amet ipsum eos
                  elitr. Amet lorem est amet labore
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
<section className="py-16">
<div className="container pt-5 pb-3">
      <div className="text-center mb-8">
        <h6 className="text-primary text-uppercase text-xs tracking-wider">
          Packages
        </h6>
        <h1 className="text-3xl font-bold">Perfect Tour Packages</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-white mb-8 shadow-lg cursor-pointer hover:shadow-2xl rounded-lg p-1"
          >
            <div className="bg-white mb-2">
              <img
                className="w-full h-48 object-cover"
                src={imageArray[index]}
                alt={`pac${index + 1}`}
              />
              <div className="p-4">
                <div className="flex justify-between mb-3">
                  <small className="text-gray-600">
                    <FaMapMarkerAlt className="text-2xl mr-2 text-blue-600" />
                    Thailand
                  </small>
                  <small className="text-gray-600">
                    <FaCalendarAlt className="text-2xl mr-2 text-blue-600" />
                    3 days
                  </small>
                  <small className="text-gray-600">
                    <FaUser className="text-2xl mr-2 text-blue-600" />
                    2 Person
                  </small>
                </div>
                <a
                  className="text-xl font-semibold text-blue-500"
                  href="https://www.free-css.com/free-css-templates"
                >
                  Discover amazing places of the world with us
                </a>
                <div className="border-t mt-4 pt-4">
                  <div className="flex justify-between">
                    <h6 className="text-gray-600 flex">
                      4.5{' '}
                      <FaStar className="text-xl text-orange-600 mr-2" />
                      <small className="text-sm">(250)</small>
                    </h6>
                    <h5 className="text-lg font-semibold">$350</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
</section>


<section className="relative h-[500px] mb-[600px] lg:mb-14  ">
  <video
    className="w-full h-full object-cover"
    src={hero}
    type="video/mp4"
    autoPlay
    loop
    muted
  ></video>
  <div className="absolute px-20 grid  lg:flex gap-3 items-center justify-center w-full h-full top-0 left-0 z-50">
    <div className="w-full lg:w-10/12 xl:w-8/12">
      <div className="mb-5 lg:mb-0">
        <div className="mb-4">
          <h6 className="text-blue-900 uppercase font-semibold text-xl tracking-widest">Mega Offer</h6>
          <h1 className="text-blue-900 font-bold text-2xl md:text-4xl lg:text-5xl">
            <span className="text-white font-bold">30% OFF</span> For Honeymoon
          </h1>
        </div>
        <p className="text-white">
          Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
        </p>
        <ul className="list-inside list-disc  text-white my-0">
          <li className="py-2 flex"><MdOutlineDone className="mr-3 text-orange-400 text-2xl" /> Labore eos amet dolor amet diam</li>
          <li className="py-2 flex"><MdOutlineDone className="mr-3 text-orange-400 text-2xl" /> Etsea et sit dolor amet ipsum</li>
          <li className="py-2 flex"><MdOutlineDone className="mr-3 text-orange-400 text-2xl" /> Diam dolor diam elitripsum vero.</li>
        </ul>
      </div>
    </div>
    <div className="w-full lg:w-10/12 xl:w-4/12">
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-gray-800">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-3 w-full border rounded-md"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-3 w-full border rounded-md"
              placeholder="john@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-3 w-full border rounded-md"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-900 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


<section>
<div className="container py-10 mt-6 ">
      <div className="text-center mb-3 pb-3">
        <h6 className="uppercase text-blue-900 font-bold" style={{ letterSpacing: '5px' }}>
          Guides
        </h6>
        <h1 className=" text-blue-900 font-bold text-4xl">Our Travel Guides</h1>
      </div>
      <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-32  gap-5">
        {/* Guide 1 */}
        <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
          <div className="team-item bg-white mb-4">
            <div className="team-img position-relative overflow-hidden">
              <img className="img-fluid w-100" src={team1} alt="Guide 1" />
              <div className="team-social">
                <a className="btn btn-outline-primary btn-square" href="https://www.free-css.com/free-css-templates">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="https://www.free-css.com/free-css-templates">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="https://www.free-css.com/free-css-templates">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="https://www.free-css.com/free-css-templates">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="text-center py-4">
              <h5 className="text-black font-bold text-2xl ">Guide Name</h5>
              <p className="m-0">Designation</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
          <div className="team-item bg-white mb-4">
            <div className="team-img position-relative overflow-hidden">
              <img className="img-fluid w-100" src={team2} alt="Guide 1" />
              <div className="team-social">
                <a className="btn btn-outline-primary btn-square" href="https://www.free-css.com/free-css-templates">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="https://www.free-css.com/free-css-templates">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="https://www.free-css.com/free-css-templates">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="https://www.free-css.com/free-css-templates">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="text-center py-4">
              <h5 className="text-black font-bold text-2xl">Guide Name</h5>
              <p className="m-0">Designation</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
          <div className="team-item bg-white mb-4">
            <div className="team-img position-relative overflow-hidden">
              <img className="img-fluid w-100" src={team3} alt="Guide 1" />
              <div className="team-social">
                <a className="btn btn-outline-primary btn-square" href="https://www.free-css.com/free-css-templates">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="https://www.free-css.com/free-css-templates">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="https://www.free-css.com/free-css-templates">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="https://www.free-css.com/free-css-templates">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="text-center py-4">
              <h5 className="text-black font-bold text-2xl">Guide Name</h5>
              <p className="m-0">Designation</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
          <div className="team-item bg-white mb-4">
            <div className="team-img position-relative overflow-hidden">
              <img className="img-fluid w-100" src={team4} alt="Guide 1" />
              <div className="team-social">
                <a className="btn btn-outline-primary btn-square" href="https://www.free-css.com/free-css-templates">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="https://www.free-css.com/free-css-templates">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="https://www.free-css.com/free-css-templates">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="https://www.free-css.com/free-css-templates">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="text-center py-4">
              <h5 className="text-black font-bold text-2xl">Guide Name</h5>
              <p className="m-0">Designation</p>
            </div>
          </div>
        </div>

        {/* Repeat the above structure for Guide 2, Guide 3, and Guide 4 */}
      </div>
    </div>
</section>
    
    </>
  )
}

export default Main