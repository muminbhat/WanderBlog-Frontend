import React from "react";

const FeatureCard = () => {
  return (
    <>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

      <>
        {/* Features */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Title */}
          <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
            <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-200">
              Crafting Code, Creating Value
            </h2>
            <p className="mt-3 text-gray-800 dark:text-gray-200">
              In a fast-paced digital world, innovation is key. Our web
              application development services are driven by cutting-edge
              technology and industry best practices.
            </p>
          </div>
          {/* End Title */}
          {/* Grid */}
          <div className="mx-auto max-w-3xl grid grid-cols-12 gap-6 lg:gap-8">
            {/* Icon Block */}
            <div className="col-span-6 sm:col-span-4 text-center">
              <svg
                className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
              <div className="mt-2 sm:mt-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Responsive
                </h3>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="col-span-6 sm:col-span-4 text-center">
              <svg
                className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z" />
                <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z" />
                <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
              </svg>
              <div className="mt-2 sm:mt-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  UI/UX
                </h3>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="col-span-6 col-start-4 sm:col-span-4 text-center">
              <svg
                className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              <div className="mt-2 sm:mt-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Lifetime Support
                </h3>
              </div>
            </div>
            {/* End Icon Block */}
          </div>
          {/* End Grid */}
          {/* Grid */}
          <div className="mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8">
            <div className="hidden md:block col-span-4 md:col-span-3">
              <img
                className="rounded-xl"
                src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80"
                alt="Image Description"
              />
            </div>
            {/* End Col */}
            <div className="col-span-4 md:col-span-3">
              <img
                className="rounded-xl"
                src="https://images.unsplash.com/photo-1587613991119-fbbe8e90531d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1003&q=80"
                alt="Image Description"
              />
            </div>
            {/* End Col */}
            <div className="col-span-4 md:col-span-3">
              <img
                className="rounded-xl"
                src="https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80"
                alt="Image Description"
              />
            </div>
            {/* End Col */}
            <div className="col-span-4 md:col-span-3">
              <img
                className="rounded-xl"
                src="https://images.unsplash.com/photo-1640622300473-977435c38c04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
                alt="Image Description"
              />
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Features */}
      </>

      <>
        {/* Features */}
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="relative p-6 md:p-16">
            {/* Grid */}
            <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
              <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
                  Your Ideas, MY Code: Creating Web Magic Together.
                </h2>
                {/* Tab Navs */}
                <nav
                  className="grid gap-4 mt-5 md:mt-10"
                  aria-label="Tabs"
                  role="tablist"
                >
                  <button
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 active"
                    id="tabs-with-card-item-1"
                    data-hs-tab="#tabs-with-card-1"
                    aria-controls="tabs-with-card-1"
                    role="tab"
                  >
                    <span className="flex">
                      <svg
                        className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                        <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      </svg>
                      <span className="grow ml-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                          Artificial Intillegence
                        </span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                          Deploy Powerful Deep and Machine Learning Algorithms
                          To Generate Organic Leads.
                        </span>
                      </span>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700"
                    id="tabs-with-card-item-2"
                    data-hs-tab="#tabs-with-card-2"
                    aria-controls="tabs-with-card-2"
                    role="tab"
                  >
                    <span className="flex">
                      <svg
                        className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
                        />
                      </svg>
                      <span className="grow ml-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                          Powerful Administration
                        </span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                          Empowering You To Effortlessly Manage Content, Users,
                          And Settings.
                        </span>
                      </span>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700"
                    id="tabs-with-card-item-3"
                    data-hs-tab="#tabs-with-card-3"
                    aria-controls="tabs-with-card-3"
                    role="tab"
                  >
                    <span className="flex">
                      <svg
                        className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z" />
                      </svg>
                      <span className="grow ml-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                          Seacrh Engine Optimization
                        </span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                          Our websites Are Built With a Strong SEO Foundation,
                          Ensuring Your Web App Ranks #1 Organically.
                        </span>
                      </span>
                    </span>
                  </button>
                </nav>
                {/* End Tab Navs */}
              </div>
              {/* End Col */}
              <div className="lg:col-span-6">
                <div className="relative">
                  {/* Tab Content */}
                  <div>
                    <div
                      id="tabs-with-card-1"
                      role="tabpanel"
                      aria-labelledby="tabs-with-card-item-1"
                    >
                      <img
                        className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                        src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                        alt="Image Description"
                      />
                    </div>
                    <div
                      id="tabs-with-card-2"
                      className="hidden"
                      role="tabpanel"
                      aria-labelledby="tabs-with-card-item-2"
                    >
                      <img
                        className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                        src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                        alt="Image Description"
                      />
                    </div>
                    <div
                      id="tabs-with-card-3"
                      className="hidden"
                      role="tabpanel"
                      aria-labelledby="tabs-with-card-item-3"
                    >
                      <img
                        className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                        src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                        alt="Image Description"
                      />
                    </div>
                  </div>
                  {/* End Tab Content */}
                  {/* SVG Element */}
                  <div className="hidden absolute top-0 right-0 translate-x-20 md:block lg:translate-x-20">
                    <svg
                      className="w-16 h-auto text-orange-500"
                      width={121}
                      height={135}
                      viewBox="0 0 121 135"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                        stroke="currentColor"
                        strokeWidth={10}
                        strokeLinecap="round"
                      />
                      <path
                        d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                        stroke="currentColor"
                        strokeWidth={10}
                        strokeLinecap="round"
                      />
                      <path
                        d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                        stroke="currentColor"
                        strokeWidth={10}
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  {/* End SVG Element */}
                </div>
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
            {/* Background Color */}
            <div className="absolute inset-0 grid grid-cols-12 w-full h-full">
              <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]" />
            </div>
            {/* End Background Color */}
          </div>
        </div>
        {/* End Features */}
      </>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      <>{/* Features */}</>

      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Testing and Quality Assurance{" "}
            </h2>
            <p className="mb-4">
              <span style={{ fontWeight: "bold" }}>User Satisfaction:</span>{" "}
              Quality assurance ensures that your web application functions
              seamlessly, providing an exceptional user experience. Satisfied
              users are more likely to engage and convert.
            </p>
            <p className="mb-4">
              <span style={{ fontWeight: "bold" }}>Bug-Free Operation:</span>{" "}
              Our rigorous testing processes identify and eliminate bugs,
              glitches, and errors, ensuring your website or web app operates
              flawlessly across all platforms and devices.
            </p>
            <p className="mb-4">
              <span style={{ fontWeight: "bold" }}>Performance: </span> We
              optimize your web application for speed and performance,
              delivering lightning-fast loading times and smooth functionality,
              which directly impacts user retention.
            </p>
            <p className="mb-4">
              <span style={{ fontWeight: "bold" }}>
                Scalability & Security:
              </span>{" "}
              Quality assurance extends beyond the initial launch. We ensure
              that your web solution remains scalable, adapting to your growing
              needs without compromising quality. Our quality assurance
              protocols include robust security testing to safeguard against
              potential threats and vulnerabilities.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
    </>
  );
};

export default FeatureCard;
