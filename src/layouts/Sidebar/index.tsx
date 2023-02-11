
import axios from 'axios';
import React from 'react'
import classes from "./SideBar.module.css";
import { Button } from "../../common"
import { ISidebarChild, ISidebarParent } from '@/interface/Sidebar';

interface Props {
    sideBarMenuData: ISidebarParent[]
}

const SideBar = (props: Props) => {
    const { sideBarMenuData } = props
    return (
        <ul className={classes.sideBarWrapper}>
            {sideBarMenuData && sideBarMenuData.length > 0 && sideBarMenuData?.map((menuParent: ISidebarParent) => {
                return <li key={menuParent?.id} className={classes.menuParentWrapper}>
                    <h2 className={classes.menuParentTitle}>{menuParent?.title}</h2>
                    <ul className={classes.menuChildWrapper}>
                        {menuParent?.children && menuParent?.children.length > 0 && menuParent?.children.map((menuChild: ISidebarChild) => {
                            return <li key={menuChild?.id} className={classes.menuChildItem}>
                                <h3 className={classes.menuChildTitle}>{menuChild?.title}</h3>
                            </li>
                        })}
                    </ul>
                </li>
            })}
        </ul>
    )
}



export default SideBar