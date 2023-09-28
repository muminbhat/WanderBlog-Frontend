import React, { useEffect, useState } from 'react';
import { Label, Select } from 'flowbite-react';
import axios from 'axios';
import dp from '../assets/dp.jpg';
import { Link } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";
const swal = require('sweetalert2');

const BlogList = () => {
  const [blog, setBlog] = useState([]);   //Fetching All Blogs
  const [loading, setLoading] = useState([]);  //Show Preloader on component until it loads
  const [cat, setCat] = useState([]); //Fetch Categories
  const [category, setCategory] = useState(""); //Fetch New Data Based on Category Selected

  // Trigger Update Category
  const updateCategory = (newCategory) => {
    if(newCategory==="All") {
      setCategory("")
    } else {
    setCategory(newCategory);
  } }

  // Fetch All Blogs
  const fetchBlog = async () => {
      setLoading(true)
      try {
        let apiUrl = "";

        if (category) {
          apiUrl = `http://127.0.0.1:8000/api/blogs/category/${category}/`
        } else {
          apiUrl = 'https://wander-blog-backend.vercel.app/api/blogs/all/'
        }
        const res = await axios.get(apiUrl);
        setBlog(res.data);
        console.log(res.data); // Log the data
        setLoading(false)
      } catch (err) {
        console.error('Error fetching data:', err); // Log any errors
        swal.fire({
          title: 'Something Went Wrong',
          icon: "error",
          toast: true,
          timer: 6000,
          position: 'top-right',
          timerProgressBar: false,
          showConfirmButton: false,
        });
        setLoading(false)
      }
    }
  
  //Fetch All Categories
  useEffect(() => {
    const fetchcat = async () => {
      try {
        const res = await axios.get('https://wander-blog-backend.vercel.app/api/blogs/categories/all/')
        setCat(res.data)
        console.log(res.data)
      } catch (err){
        console.log('An error occured while fetching the data: ', err)
      }
    };
    fetchcat();
  }, []);


useEffect(() => {
  setBlog([]);
  fetchBlog();
}, [category])



// DOM START
  if (loading) {
    return (
<div className="flex items-center justify-center h-screen">
  <HashLoader color="#0e7490" />
</div>
      )
  } else {

  return (
    <>
     <h2 onClick={""} className="mt-5 text-2xl font-bold md:text-4xl md:leading-tight dark:text-white text-center">
              Explore Latest Blogs
            </h2>

      {/* Category Block */}
      <div>
          <div className="max-w-xs mx-auto p-5" id="select">
            <div className="mb-1 block text-center">
              <Label htmlFor="categories" value="Categories" />
            </div>
            <Select id="Categories" required onChange={(e) => updateCategory(e.target.value)}>
              <option disabled>{category}</option>
            {cat.map((category) => (
              <option key={category.id} value={category.name}>{category.name}</option>
            ))}
            </Select>
          </div>
    </div>

    {/* Search Block */}

      {/* Card Blog */}
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
}
export default BlogList;
