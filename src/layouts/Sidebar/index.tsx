import React from 'react'
import classes from "./SideBar.module.css"
interface Props { }

const SideBar = (props: Props) => {
    return (
        <div className={classes.sideBarWrapper}>SideBar</div>
    )
}

export default SideBar