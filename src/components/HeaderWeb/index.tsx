import Image from 'next/image'
import React, { useMemo, useState } from 'react'
import classes from "./HeaderWeb.module.css"
import logo from "../../../public/images/logo.webp"
import Link from 'next/link'
import { useResize } from '@/hooks'
import DrawerCustom from '@/common/DrawerCustom'
import SideBar from '@/layouts/Sidebar';
import sideBarMenuDataJSON from "../../../data/data-sideBar.json";
interface Props { }

function HeaderWeb({ }: Props) {
    const { width, height } = useResize();
    const [isOpenNav, setIsOpenNav] = useState<boolean>(false)
    const isMobile = useMemo(() => {
        return width <= 767 && width !== 0
    }, [width])
    const isIpad = useMemo(() => {
        return width <= 1023 && width !== 0
    }, [width])
    return (
        <>
            <div className={classes.headerLogoWrapper}>
                <Link href={"/"}>
                    <div className={classes.logo}>
                        <Image src={logo} width={isMobile ? 30 : 50} height={isMobile ? 30 : 50} alt="logo" />
                        <span>Front End Component</span>
                    </div>
                </Link>

            </div>
            <div className={classes.headerNavWrapper}>
                <a href="https://github.com/jamesnguyenn/james-ui-custom" target={"_blank"} rel="noreferrer">
                    <span className={classes.headerNavIcon}>
                        <i className="fa-brands fa-github-alt" />
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/james-nguyen-8157b8179" target={"_blank"} rel="noreferrer">
                    <span className={classes.headerNavIcon}>
                        <i className="fa-brands fa-linkedin" />
                    </span>
                </a>
                <a href="https://www.facebook.com/LaoTo95/" target="_blank" rel="noreferrer">
                    <span className={classes.headerNavIcon}>
                        <i className="fa-brands fa-square-facebook" />
                    </span>
                </a>
                {isIpad && <div className={classes.headerNavIcon} onClick={() => setIsOpenNav(true)}>
                    <i className="fa-solid fa-bars"></i>
                </div>}
                {<DrawerCustom isVisibleDrawer={isOpenNav && width <= 1023} handleCloseDrawer={() => setIsOpenNav(false)} direction='right' >
                    {() => <SideBar sideBarMenuData={sideBarMenuDataJSON?.dataSideBar} isMobile={true} />}
                </DrawerCustom>}
            </div>

        </>
    )
}

export default HeaderWeb