import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dp from '../assets/dp.jpg';
import Categories from '../components/Categories';
import Search from '../components/Search';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get('https://wander-blog-backend.vercel.app/api/blogs/all/');
        setBlog(res.data);
        console.log(res.data); // Log the data
      } catch (err) {
        console.error('Error fetching data:', err); // Log any errors
      }
    };
    fetchBlog();
  }, []);

  return (
    <>
     <h2 className="mt-5 text-2xl font-bold md:text-4xl md:leading-tight dark:text-white text-center">
              Explore Latest Blogs
            </h2>
      {/* Card Blog */}
      <Categories />
      <Search />
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Card */}
          {blog.map((blogEntry) => (
            <div key={blogEntry.id}>
              <Link className="group relative block" to={"/blogs/" + blogEntry.slug}>
                <div className="flex-shrink-0 relative w-full rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                  <img
                    className="w-full h-full absolute top-0 left-0 object-cover"
                    src={blogEntry.image}
                    alt="Image Description"
                  />
                </div>
                <div className="absolute top-0 inset-x-0 z-10">
                  <div className="p-4 flex flex-col h-full sm:p-6">
                    {/* Avatar */}
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full"
                          src={dp}
                          alt="Image Description"
                        />
                      </div>
                      <div className="ml-2.5 sm:ml-4">
                        <h4 className="font-semibold text-white">{blogEntry.author}</h4>
                        <p className="text-xs text-white/[.8]">{blogEntry.publish_time}</p>
                      </div>
                      <div className='className="text-white absolute right-2.5 bottom-5.5 bg-green-300 bg-opacity-30 hover:bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-300 dark:hover:bg-opacity-50 dark:bg-opacity-30 dark:focus:ring-green-30"'>
                        {blogEntry.category.name}
                      </div>
                    </div>
                    {/* End Avatar */}
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 z-10">
                  <div className="flex flex-col h-full p-4 sm:p-6">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                    {blogEntry.title}
                    </h3>
                    <p className="mt-2 text-white/[.8]">
                    {blogEntry.info.slice(0, 100)+ ' ...'}                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* End Grid */}
      </div>
      {/* End Card Blog */}
    </>
  );
};

export default BlogList;
