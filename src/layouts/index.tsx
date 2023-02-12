import React from 'react'
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
          <div className={classes.mainContainer}>
            {children}
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  )
}




export default MainLayout