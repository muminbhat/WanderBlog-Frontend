import React, { useEffect, useState } from 'react'
import { Label, Select } from 'flowbite-react';
import axios from 'axios';


const Categories = () => {
  const [cat, setCat] = useState([]);
  
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

  return (
    <div>
          <div className="max-w-xs mx-auto p-5" id="select">
            <div className="mb-1 block text-center">
              <Label htmlFor="categories" value="Categories" />
            </div>
            <Select id="Categories" required>
              <option>All</option>
            {cat.map((category) => (
              <option key={category.id}>{category.name}</option>
            ))}
            </Select>
          </div>
    </div>
  );
};

export default Categories;