import React from 'react'
import Header from '../components/Header'
import BlogCard from '../components/BlogCard'
import FeatureCard from '../components/FeatureCard'
import Newsletter from '../components/Newsletter'
import PopUp from '../components/PopUp'

const HomePage = () => {
  return (
    <div>
        <Header />
        <PopUp />
        <BlogCard />
        <FeatureCard />
        <Newsletter />
    </div>
  )
}

export default HomePage