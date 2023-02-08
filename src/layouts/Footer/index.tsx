import React from 'react'
import classes from "./Footer.module.css"
interface Props { }

const Footer = (props: Props) => {
    return (
        <footer className={classes.footerWrapper}>@JamesDev - 2023</footer>
    )
}

export default Footer