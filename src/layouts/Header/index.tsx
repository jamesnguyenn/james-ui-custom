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
                    <HeaderWeb />
                }
            </div>
        </header>
    )
}

export default Header