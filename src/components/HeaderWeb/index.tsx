import Image from 'next/image'
import React from 'react'
import classes from "./HeaderWeb.module.css"
import logo from "../../../public/images/logo.png"
import Link from 'next/link'
interface Props { }

function HeaderWeb({ }: Props) {
    return (
        <>
            <div className={classes.headerLogoWrapper}>
                <Link href={"/"}>
                    <div className={classes.logo}>
                        <Image src={logo} width={50} height={50} alt="logo" />
                        <span>Front End Component Example</span>
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
            </div>
        </>
    )
}

export default HeaderWeb