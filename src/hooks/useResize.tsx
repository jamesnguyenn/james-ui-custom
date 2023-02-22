import React, { useEffect, useLayoutEffect, useState } from 'react'
interface Props {
    element?: HTMLElement
}
export function useResize(props?: Props) {
    const [width, setWidth] = useState<number>(0)
    const [height, setHeight] = useState<number>(0);
    const [elementRef, setElementRef] = useState<HTMLElement | null>(null);

    useLayoutEffect(() => {
        if (props?.element) {
            setElementRef(props?.element)
        } else {
            setElementRef(document.body)
        }
    }, [props?.element])

    useLayoutEffect(() => {
        if (elementRef) {
            setWidth(elementRef.clientWidth)
            setHeight(elementRef.clientHeight)
            window.addEventListener("resize", onResizeBrowser);
            return () => {
                window.removeEventListener("resize", onResizeBrowser)
            }
        }

    }, [elementRef])

    const onResizeBrowser = function () {
        const newWidth = elementRef?.clientWidth;
        const newHeight = elementRef?.clientHeight;
        setWidth(newWidth || 0)
        setHeight(newHeight || 0)
    }
    return { width, height }
}

