
import axios from 'axios';
import React from 'react'
import classes from "./SideBar.module.css";
import { Button } from "../../common"
import { ISidebarChild, ISidebarParent } from '@/interface/Sidebar';
import Link from 'next/link';
import { useResize } from '@/hooks';
import { useRouter } from "next/router";
interface Props {
    sideBarMenuData: any[],
    isMobile: boolean
}

const SideBar = (props: Props) => {
    const { sideBarMenuData, isMobile } = props
    console.log("🚀 ~ sideBarMenuData", sideBarMenuData)
    const router = useRouter();
    return (
        <>
            {isMobile ? <ul className={classes.sideBarWrapper}>
                {sideBarMenuData && sideBarMenuData.length > 0 && sideBarMenuData?.map((menuParent: ISidebarParent) => {
                    return <li key={menuParent?.id} className={classes.menuParentWrapper}>
                        <h2 className={classes.menuParentTitle}>{menuParent?.title}</h2>
                        <div style={{ height: "1px", backgroundColor: "rgba(5, 5, 5, 0.06)", margin: "0px 40px" }}></div>
                        <ul className={classes.menuChildWrapper}>
                            {menuParent?.children && menuParent?.children.length > 0 && menuParent?.children.map((menuChild: ISidebarChild) => {
                                return <Link key={menuChild?.id} href={menuChild?.page ? menuChild?.page : "/error"}><li className={`${classes.menuChildItem} ${router.pathname === menuChild?.page ? classes.menuChildItemActive : ""} ${router.pathname === "/" && menuChild?.page === "/getting-started/installation" ? classes.menuChildItemActive : ""}`}>
                                    <h3 className={classes.menuChildTitle}>{menuChild?.title}</h3>
                                </li>
                                </Link>
                            })}
                        </ul>
                    </li>
                })}
            </ul> : null}
        </>

    )
}



export default SideBar