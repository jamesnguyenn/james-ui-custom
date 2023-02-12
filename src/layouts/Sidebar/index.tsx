
import axios from 'axios';
import React from 'react'
import classes from "./SideBar.module.css";
import { Button } from "../../common"
import { ISidebarChild, ISidebarParent } from '@/interface/Sidebar';
import Link from 'next/link';
import { useResize } from '@/hooks';

interface Props {
    sideBarMenuData: any[]
}

const SideBar = (props: Props) => {
    const { sideBarMenuData } = props
    console.log("🚀 ~ sideBarMenuData", sideBarMenuData)
    const { width, height } = useResize()
    return (
        <>
            {width >= 1024 ? <ul className={classes.sideBarWrapper}>
                {sideBarMenuData && sideBarMenuData.length > 0 && sideBarMenuData?.map((menuParent: ISidebarParent) => {
                    return <li key={menuParent?.id} className={classes.menuParentWrapper}>
                        <h2 className={classes.menuParentTitle}>{menuParent?.title}</h2>
                        <div style={{ height: "1px", backgroundColor: "rgba(5, 5, 5, 0.06)", margin: "0px 40px" }}></div>
                        <ul className={classes.menuChildWrapper}>
                            {menuParent?.children && menuParent?.children.length > 0 && menuParent?.children.map((menuChild: ISidebarChild) => {
                                return <li key={menuChild?.id} className={classes.menuChildItem}>
                                    <Link href={menuChild?.page ? menuChild?.page : "/error"} >
                                        <h3 className={classes.menuChildTitle}>{menuChild?.title}</h3>
                                    </Link>
                                </li>
                            })}
                        </ul>
                    </li>
                })}
            </ul> : null}
        </>

    )
}



export default SideBar