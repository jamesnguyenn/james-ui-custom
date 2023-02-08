import HeaderMobile from '@/components/HeaderMobile'
import HeaderWeb from '@/components/HeaderWeb'
import { useResize } from '@/hooks'
import React from 'react'
import classes from './Header.module.css'
interface Props { }

const Header = (props: Props) => {
    const { width, height } = useResize()
    return (
        <header className={classes.headerWrapper}>
            <div className={classes.headerContainer}>
                {
                    width <= 1023 ? <HeaderMobile /> : <HeaderWeb />
                }
            </div>
        </header>
    )
}

export default Header