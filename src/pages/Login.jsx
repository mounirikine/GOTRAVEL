import React from 'react'
import beachvid from "../assets/hero.mp4";


const Login = () => {
  return (




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
    
    <div className="bg-white pb-10 px-10 rounded shadow-md  lg:w-[60%] h-[50%]">
    <h1 className="text-2xl md:text-3xl lg:text-4xl text-black text-center mb-6">
          <span className="logo_font">GO</span>TRAVEL
        </h1>
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Log in
        </button>
      </form>
    </div>

    </div>
</section>
  )
}

export default Login