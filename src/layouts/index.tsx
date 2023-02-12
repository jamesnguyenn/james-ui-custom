import { useResize } from '@/hooks'
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
  const { width, height } = useResize()
  return (

    <>
      <Header />
      <div className={classes.bodyWrapper}>
        <div className={classes.bodyContainer} >
          <SideBar sideBarMenuData={sideBarMenuData} isMobile={width >= 1024} />
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