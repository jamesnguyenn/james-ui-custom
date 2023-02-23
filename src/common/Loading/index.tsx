import React from 'react'
import "../styles/Loading/index.css"

export interface Props {
    type: "circle",
    color: string,
    scaleLoading: number,
}

export interface IPropsLoadingCircle {
    color: string,
    height: string,
    width: string
}
const Loading = (props: Props) => {
    const width: string = `15px`;
    const height: string = `15px`;
    switch (props?.type) {
        case "circle":
            return (
                <LoadingCircle color={props?.color} width={width} height={height} />
            )
        default:
            return <></>
    }
}

export default Loading;

const LoadingCircle = ({ color, width, height }: IPropsLoadingCircle) => {
    return <span className='custom-ui-loading-circle' style={{ width, height, borderTop: `1px solid ${color}`, borderLeft: `1px solid ${color}` }} />
}