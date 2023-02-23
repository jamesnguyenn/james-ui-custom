import React from 'react'
import Loading from '../Loading'
import "../styles/Button/index.css"
interface ButtonProps {
    type: 'default' | 'dashed' | 'text' | 'link',
    style?: React.CSSProperties,
    children?: React.ReactElement | string,
    className?: string,
    disabled?: boolean,
    loading?: boolean,
    icon?: React.ReactElement,
    colorLoading?: string,
    scaleLoading?: number,
    handleClick?: Function
}

const Button = (props: ButtonProps) => {
    return (
        <button disabled={props?.disabled} style={props?.style} className={`${"button-custom_wrapper"} ${props?.className ? props?.className : ""} ${props.type === "dashed" ? "dashed" : props.type === "text" ? "text" : props.type === "link" ? "link" : "default"} ${props?.loading ? "loading" : ""}`} onClick={(e: React.MouseEvent<HTMLButtonElement>) => props?.handleClick ? props?.handleClick(e) : null}>
            {props?.loading ? <Loading type="circle" color={props?.colorLoading ?? "#fff"} scaleLoading={props?.scaleLoading ?? 1} /> : null}
            {props?.icon ? <span>{props?.icon}</span> : null}
            {props?.children ? <span>{props?.children}</span> : null}
        </button >
    )
}

export default Button;