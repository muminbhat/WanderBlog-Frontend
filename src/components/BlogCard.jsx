import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import dp from "../assets/dp.jpg";
import HashLoader from "react-spinners/HashLoader";

const swal = require("sweetalert2");

const BlogCard = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState([false]);

  useEffect(() => {
    setLoading(true);
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          "https://wander-blog-backend.vercel.app/api/blogs/featured/"
        );
        setBlog(res.data);
        console.log(res.data); // Log the data
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err); // Log any errors
        swal.fire({
          title: "Something Went Wrong",
          icon: "error",
          toast: true,
          timer: 6000,
          position: "top-right",
          timerProgressBar: false,
          showConfirmButton: false,
        });
        setLoading(false);
      }
    };
    fetchBlog();
  }, []);
    return (
      <>
        <>
          {/* Card Blog */}

          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Title */}
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
              <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                Latest Trending Blogs
              </h2>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Explore All Our Engaging and Informative Blog Posts, Unveiling a
                Treasure Trove of Insights, Tips, and Stories Await Your
                Discovery.
              </p>
              <Link
                to="/blog-list/"
                className="mt-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Explore All Blogs
              </Link>
            </div>
            {/* End Title */}
            {/* Grid */}
            {loading ? (
                      <div className="flex items-center justify-center">
                      <HashLoader color="#0e7490" />
                    </div>) :(

                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card */}
              {blog.map((blogEntry) => (
                <div key={blogEntry.id}>
                  <Link
                    className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
                    to={"/blogs/" + blogEntry.slug}
                  >
                    <div className="aspect-w-16 aspect-h-11">
                      <p className="text-white relative -bottom-9 left-3 bg-opacity-100 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-emerald-500	 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                        {blogEntry.category.name}
                      </p>
                      <img
                        className="w-full object-cover rounded-xl"
                        src={blogEntry.image}
                        alt="Image Description"
                      />
                    </div>
                    <div className="my-6">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                        {blogEntry.title}
                      </h3>
                      <p className="mt-5 text-gray-600 dark:text-gray-400">
                        {blogEntry.info.slice(0, 70) + "  ..."}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center gap-x-3">
                      <img
                        className="w-8 h-8 rounded-full"
                        src={dp}
                        alt="Image Description"
                        />
                      <div>
                        <p className="text-gray-400 text-xs dark:text-gray-400">
                          {blogEntry.read_time + " mins read"}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
              {/* End Card */}
            </div>
          )
          }
          </div>
        </>
      </>
    );
  }
export default BlogCard;
