import { getTitleBrowser } from '@/utils';
import React, { useEffect, useLayoutEffect } from 'react'

interface Props {
    title: string;
    desc?: string;
    children: React.ReactElement
}

const PagesCommon = (props: Props) => {
    useEffect(() => {
        getTitleBrowser(props.title);
    }, [props.title])
    return (
        <div >
            <h1 style={{ marginBottom: "16px" }}>
                {props.title}
            </h1>
            <p style={{ marginBottom: "32px" }}>
                {props.desc}
            </p>
            {props.children}
        </div>
    )
}

export default PagesCommon