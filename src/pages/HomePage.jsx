import React from 'react'
import Header from '../components/Header'
import BlogCard from '../components/BlogCard'
import FeatureCard from '../components/FeatureCard'
import Newsletter from '../components/Newsletter'

const HomePage = () => {
  return (
    <div>
        <Header />
        <BlogCard />
        <FeatureCard />
        <Newsletter />
    </div>
  )
}

export default HomePage