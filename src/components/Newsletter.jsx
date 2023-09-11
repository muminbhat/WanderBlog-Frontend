import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
const swal = require('sweetalert2');

const Newsletter = () => {
  const [formData, setFormData] = useState({
    email: '',
  });

  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Track errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

      const response = await axios.post(
        'http://127.0.0.1:8000/api/newsletter/post/',
        formData
      );
      if(response.status === 201) {
          console.log('Posted data:', response.data);
          setLoading(false); // Stop loading on success
          setError(null); // Clear any previous errors
          navigate("/")
          swal.fire({
                title: "Added Successfully",
                icon: "success",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
          })

      }
    else {
      console.error('Error posting data:', error);
      setError('Failed to subscribe. Please try again.'); // Set error message
      setLoading(false); // Stop loading on error
      swal.fire({
        title: "Try Again Later",
        icon: "error",
        toast: true,
        timer: 6000,
        position: 'top-right',
        timerProgressBar: true,
        showConfirmButton: false,
    })
}
  };

  return (
    <div>
        <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md sm:text-center">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Sign up for our newsletter
        </h2>
        <p className="mx-auto mb-8 max-w-2xl  text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
          Stay up to date with the roadmap progress, announcements and exclusive
          discounts feel free to sign up with your email.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
            <div className="relative w-full">
              <label
                htmlFor="email"
                className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email address
              </label>
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                className="block p-3 pl-9 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter your email"
                id="email"
                required=""
                onChange={handleChange}
                type="email"
                name="email"
                value={formData.email}
              />
            </div>
            <div>
              <button type="submit" disabled={loading}
              className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-black border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
            </div>
          </div>
          <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
            We care about the protection of your data.{" "}
            <a
              href="/"
              className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
            >
              Read our Privacy Policy
            </a>
            .
          </div>
        </form>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Newsletter