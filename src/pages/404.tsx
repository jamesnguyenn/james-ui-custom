import React, { useEffect, useState } from 'react';
const MatrixParallax: any = require("react-matrix-parallax");

interface Props { }

function ErrorPage({ }: Props) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <React.Fragment>
            {
                (mounted) ?
                    <MatrixParallax color="#00AA00" backgroundColor="rgba(0,0,0,1)">
                        <div style={{ fontSize: "1.7rem" }}>
                            <h2>404</h2>
                            <h5 style={{ maxWidth: "100vw" }}>Page Not Found</h5>
                        </div>
                    </MatrixParallax>
                    : <>
                        <div></div></>

            }

        </React.Fragment>
    )
}

export default ErrorPage