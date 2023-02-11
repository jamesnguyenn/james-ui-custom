import React from 'react'
import { classicNameResolver } from 'typescript'
import Footer from './Footer'
import Header from './Header'
import classes from "./MainLayout.module.css"
import SideBar from './Sidebar'
interface Props {
  children: React.ReactNode,
  sideBarMenuData: any
}

function MainLayout({ children, sideBarMenuData, ...props }: Props) {
  return (

    <>
      <Header />
      <div className={classes.bodyWrapper}>
        <div className={classes.bodyContainer} >
          <SideBar sideBarMenuData={sideBarMenuData} />
          {children}
          {/* <Footer /> */}
        </div>
      </div>
    </>
  )
}




export default MainLayout