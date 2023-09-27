import React from "react";
import dp from "../assets/dp.jpg";
import { Link } from "react-router-dom";

import muminbhat from "../assets/muminbhat.jpg";
import mumin from "../assets/mumin.jpg";
import bhatmumin from "../assets/bhatmumin.jpg";
import mumin_bhat from "../assets/mumin_bhat.jpg";
import wanderblog from "../assets/wanderblog.jpg";
import unearthly from "../assets/unearthly.jpg";
import embrace from "../assets/embrace.jpg";

const AboutPage = () => {
  return (
    <>
      {/* Blog Article */}
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 lg:gap-x-12">
          {/* Content */}
          <div className="lg:col-span-2">
            <div className="py-8 lg:pr-4 lg:pr-8">
              <div className="space-y-5 lg:space-y-8">
                <Link
                  to={"/"}
                  className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-400"
                >
                  <svg
                    className="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                  Back to Home
                </Link>
                <h2 className="text-3xl font-bold lg:text-4xl lg:text-5xl dark:text-white">
                  Mumin Bhat: From Beginnings to Now
                </h2>
                <div className="flex items-center gap-x-5">
                  <a
                    className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-200"
                    href="https://muminbhat.com"
                    target="blank"
                  >
                    muminbhat.com
                  </a>
                  <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                    September 29, 2023
                  </p>
                </div>
                <p className="text-lg text-gray-800 dark:text-gray-200">
                  From being a school dropout to achieving the distinction of
                  becoming The Youngest Certified Ethical Hacker by EC-Council
                  in Jammu & Kashmir, my journey has been nothing short of
                  extraordinary. It all began with a single question that I
                  couldn't shake off during a FaceTime call with a friend.
                </p>
                <h3 className="text-2xl font-semibold dark:text-white">
                  The Spark of Curiosity
                </h3>
                <p className="text-lg text-gray-800 dark:text-gray-200">
                  As the call came in, I couldn't help but wonder: what if the
                  call connected instantly, without requiring me to grant
                  permission? Could technology make it happen seamlessly? This
                  one question sparked my voyage into the world of Information
                  Technology.
                </p>
                <div className="text-center">
                  <div className="grid lg:grid-cols-2 gap-3">
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                      <figure className="relative w-full h-60">
                        <img
                          className="w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                          src={bhatmumin}
                          alt="Mumin Bhat"
                        />
                      </figure>
                      <figure className="relative w-full h-60">
                        <img
                          className="w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                          src={mumin}
                          alt="Mumin Bhat"
                        />
                      </figure>
                    </div>
                    <figure className="relative w-full h-72 sm:h-96 lg:h-full">
                      <img
                        className="w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                        src={muminbhat}
                        alt="Mumin Bhat"
                      />
                    </figure>
                  </div>
                  <span className="mt-3 block text-sm text-center text-gray-500">
                    Discovering Passions
                  </span>
                </div>
                <h3 className="text-2xl font-semibold dark:text-white">
                  Goals Set in Stone
                </h3>
                <p className="text-lg text-gray-800 dark:text-gray-200">
                  Never have a lack of goals – that's my mantra. My sights were
                  set on discovering the answer to my first question. I aspired
                  to create an application that could access a victim's camera
                  and microphone with their consent. While Android addressed
                  this issue in later versions, it still lingers today. The key
                  to security? Avoid installing apps from unknown sources and
                  grant camera access judiciously.
                </p>
                <p className="text-lg text-gray-800 dark:text-gray-200">
                  My journey began with the basics of Information Security, and
                  with each passing day, my curiosity grew. I found myself
                  inching closer to my goal, one day at a time, which will allow
                  individual designers, startups and other small teams a chance
                  to create a culture of openness early on.
                </p>
                <blockquote className="text-center p-4 sm:px-7">
                  <p className="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal dark:text-gray-200">
                    You are a miracle, looking for a place to happen{" "}
                  </p>
                  <p className="mt-5 text-gray-800 dark:text-gray-200">
                    Mumin Bhat{" "}
                  </p>
                </blockquote>
                <figure>
                  <img
                    className="w-full object-cover rounded-xl"
                    src={mumin_bhat}
                    alt="Image Description"
                  />
                  <figcaption className="mt-3 text-sm text-center text-gray-500">
                    You are made of stardust and wished and magical things
                  </figcaption>
                </figure>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold dark:text-white">
                    Continuous improvement{" "}
                  </h3>
                  <p className="text-lg text-gray-800 dark:text-gray-200">
                    As time passed, my quest to answer that initial question
                    unknowingly laid the foundation for a promising career in
                    Information Systems Security. In 2018, after seven months of
                    unwavering dedication and hard work, I cracked the code.
                    Little did I know, this was just the beginning.
                  </p>
                </div>
                <ul className="list-disc list-outside space-y-5 pl-5 text-lg text-gray-800 dark:text-gray-200">
                  <h3 className="text-md font-semibold dark:text-white">
                    Awards & Honors
                  </h3>
                  <li className="pl-2">
                    Youngest Certified Ethical Hacker* in Jammu and Kashmir by
                    EC-Council.
                  </li>
                  <li className="pl-2">
                    One of the Youngest Entrepreneurs hailing from Jammu and
                    Kashmir.
                  </li>
                  <li className="pl-2">
                    Accomplished over 15 projects, collaborating with various
                    entities, including the government forest department.
                  </li>
                </ul>
                <p className="text-lg text-gray-800 dark:text-gray-200">
                  I'm open to new challenges and freelance opportunities.
                  Whether you need a consultant, a developer, or a cybersecurity
                  expert, feel free to reach out. Let's discuss how we can work
                  together to bring your ideas to life and ensure the security
                  of your digital endeavors.
                </p>
                <div className="grid lg:flex lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
                  {/* Badges/Tags */}
                  <div>
                    <a
                      className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
                      href="#"
                    >
                      Plan
                    </a>
                    <a
                      className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
                      href="#"
                    >
                      Web development
                    </a>
                    <a
                      className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
                      href="#"
                    >
                      Free
                    </a>
                    <a
                      className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
                      href="#"
                    >
                      Team
                    </a>
                  </div>
                  {/* End Badges/Tags */}
                  <div className="flex justify-end items-center gap-x-1.5">
                    {/* Button */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Content */}
          {/* Sidebar */}
          <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-slate-800">
            <div className="sticky top-0 left-0 py-8 lg:pl-4 lg:pl-8">
              {/* Avatar Media */}
              <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-gray-700">
                <a className="block flex-shrink-0" href="https://muminbhat.com">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={dp}
                    alt="Mumin Bhat"
                  />
                </a>
                <a className="group grow block" href="https://muminbhat.com">
                  <h5 className="group-hover:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                    Mumin Bhat
                  </h5>
                  <p className="text-sm text-gray-500">Full Stack Developer</p>
                </a>
                <div className="grow">
                  <div className="flex justify-end">
                    <a href="https://www.instagram.com/_.mumin/" target="blank">
                      <button
                        type="button"
                        className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-1.5 rounded-full border border-transparent font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-xs"
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          <path
                            fillRule="evenodd"
                            d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                          />
                        </svg>
                        Follow
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              {/* End Avatar Media */}
              <div className="space-y-6">
                {/* Media */}
                <h2 className="text-md text-black-800 dark:text-gray-200">
                  Discover more of my projects and blog posts!
                </h2>
                <a
                  className="group flex items-center gap-x-6"
                  href="https://wanderblog.vercel.app"
                  target="blank"
                >
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                      Explore, Create, Share and Unleash Your Thoughts with{" "}
                      <span style={{ color: "#0E7490" }}>©WanderBlog</span>
                    </span>
                  </div>
                  <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                    <img
                      className="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
                      src={wanderblog}
                      alt="WanderBlog by Mumin Bhat"
                    />
                  </div>
                </a>
                {/* End Media */}
                {/* Media */}
                <a
                  className="group flex items-center gap-x-6"
                  href="https://wanderblog.vercel.app/blogs/unearthly-whispers"
                >
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                      In the shadowy corners of our world{" "}
                      <span style={{ color: "#7F5B3B" }}>
                        Unearthly Whispers
                      </span>
                    </span>
                  </div>
                  <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                    <img
                      className="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
                      src={unearthly}
                      alt="unearthly by Mumin Bhat"
                    />
                  </div>
                </a>
                {/* End Media */}
                {/* Media */}
                <a
                  className="group flex items-center gap-x-6"
                  href="https://wanderblog.vercel.app/blogs/embrace-the-thrill"
                >
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                      Life, as they say, is a grand adventure.{" "}
                      <span style={{ color: "#960640" }}>
                        Embrace The Thrill
                      </span>
                    </span>
                  </div>
                  <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                    <img
                      className="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
                      src={embrace}
                      alt="Embrace the thrill by Mumin Bhat"
                    />
                  </div>
                </a>
                {/* End Media */}
              </div>
            </div>
          </div>
          {/* End Sidebar */}
        </div>
      </div>
      {/* End Blog Article */}
    </>
  );
};

export default AboutPage;
