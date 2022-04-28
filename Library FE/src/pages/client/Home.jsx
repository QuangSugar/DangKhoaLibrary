import React from 'react'
import Banner from '../../components/Home/Banner'
import BookLatest from '../../components/Home/BookLatest'
import Category from '../../components/Home/Category'

const Home = () => {
  return (
    <>
     <Banner/>
     {/* <Category/> */}
     <BookLatest/>
    </>
  )
}

export default Home