
import axios from 'axios';
import React from 'react'
import classes from "./SideBar.module.css";
import { Button } from "james-ui-custom"

interface Props {
    sideBarMenuData: any
}

const SideBar = (props: Props) => {
    const { sideBarMenuData } = props
    return (
        <div className={classes.sideBarWrapper}>
            <Button />
        </div>
    )
}



export default SideBar