
import axios from 'axios';
import React from 'react'
import classes from "./SideBar.module.css";
import { Button } from "../../common"
import { ISidebarChild, ISidebarParent } from '@/interface/Sidebar';
import Link from 'next/link';
import { useResize } from '@/hooks';

interface Props {
    sideBarMenuData: ISidebarParent[]
}

const SideBar = (props: Props) => {
    const { sideBarMenuData } = props
    const { width, height } = useResize()
    return (
        <>
            {width >= 1024 ? <ul className={classes.sideBarWrapper}>
                {sideBarMenuData && sideBarMenuData.length > 0 && sideBarMenuData?.map((menuParent: ISidebarParent) => {
                    return <li key={menuParent?.id} className={classes.menuParentWrapper}>
                        <h2 className={classes.menuParentTitle}>{menuParent?.title}</h2>
                        <ul className={classes.menuChildWrapper}>
                            {menuParent?.children && menuParent?.children.length > 0 && menuParent?.children.map((menuChild: ISidebarChild) => {
                                return <li key={menuChild?.id} className={classes.menuChildItem}>
                                    <Link href={menuChild?.page ? menuChild?.page : ""} >
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