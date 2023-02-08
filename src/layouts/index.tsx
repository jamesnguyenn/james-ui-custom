import React from 'react'
import { classicNameResolver } from 'typescript'
import Footer from './Footer'
import Header from './Header'
import classes from "./MainLayout.module.css"
import SideBar from './Sidebar'
interface Props {
  children: React.ReactNode
}

function MainLayout({ children }: Props) {
  return (

    <>
      <Header />
      <div className={classes.bodyWrapper}>
        <SideBar />
        {children}
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default MainLayout