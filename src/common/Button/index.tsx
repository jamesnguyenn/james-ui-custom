import React from 'react'
import "../styles/Button/index.css"
interface ButtonProps {
    type: 'default' | 'dashed' | 'text' | 'link',
    style?: React.CSSProperties,
    children?: React.ReactElement | string,
    className?: string,
    disabled?: boolean
}

const Button = (props: ButtonProps) => {
    return (
        <button disabled={props?.disabled} style={props?.style} className={`${"button-custom_wrapper"} ${props?.className ? props?.className : ""} ${props.type === "dashed" ? "dashed" : props.type === "text" ? "text" : props.type === "link" ? "link" : "default"}`}>
            <span>
                {props?.children}
            </span>
        </button >
    )
}

export default Button;