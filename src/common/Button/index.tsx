import React from 'react'

interface ButtonProps {
    type: 'primary' | 'dashed' | 'text' | 'link',
    style?: React.CSSProperties,
    children?: React.ReactElement | string,
    className?: string
}

const Button = (props: ButtonProps) => {
    return (
        <button style={props?.style} className={"button-ui-custom" + props.className}>
            <span>
                {props?.children}
            </span>
        </button >
    )
}

export default Button;