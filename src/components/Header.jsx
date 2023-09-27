import React from "react";
import heromockup from '../assets/heromockup.svg'
const Header = () => {
  return (
    <section className="bg-white dark:bg-gray-900 p-5">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Our New <span style={{color: '#0E7490'}}>Android App</span> is Live Now!
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            We understand that life is on the move, and so is your reading. Our
            app is meticulously designed to provide you with a seamless and
            enjoyable reading experience right on your mobile device.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Download Now!
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src={heromockup}
            alt="mockup"
          />
        </div>
      </div>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
      
    </section>
  );
};

export default Header;
