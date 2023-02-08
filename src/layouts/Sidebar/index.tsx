
import axios from 'axios';
import React from 'react'
import classes from "./SideBar.module.css";


interface Props {
    sideBarMenuData: any
}

const SideBar = (props: Props) => {
    const { sideBarMenuData } = props
    return (
        <div className={classes.sideBarWrapper}></div>
    )
}



export default SideBar