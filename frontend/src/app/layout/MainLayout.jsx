import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../../features/product/ui/components/NavBar'

const MainLayout = () => {
  return (
<div>
  <NavBar/>
  
   <Outlet/>
</div>
    
  )
}

export default MainLayout