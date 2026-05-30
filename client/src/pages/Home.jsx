import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffer from '../components/ExclusiveOffer'
import Testimonial from '../components/Testimonial'
import Newslatter from '../components/Newslatter'
import RecommendedHotels from '../components/RecommendedHotels'
import RecommendedHospitality from '../components/RecommendedHospitality'
import BranchSelector from '../components/BranchSelector'

const Home = () => {
    return (
        <>
            <Hero />
            <BranchSelector />
            <RecommendedHotels />
            <RecommendedHospitality />
            <FeaturedDestination />
            <ExclusiveOffer />
            <Testimonial />
            <Newslatter />

        </>
    )
}

export default Home