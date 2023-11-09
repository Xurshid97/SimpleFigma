import React from 'react'
import Navbar from './Navbar'
import UserCard from './UserCard'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <>
        <Navbar />
        <Outlet />
        <UserCard />
    </>
  )
}

export default Home