import React from 'react'
import Header from '../components/Header'
import BlogCard from '../components/BlogCard'
import Categories from '../components/Categories'

const HomePage = () => {
  return (
    <div>
        <Header />
        <Categories />
        <BlogCard />
    </div>
  )
}

export default HomePage