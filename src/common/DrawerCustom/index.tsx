import React from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css';

interface DrawerCustomProps {
    isVisibleDrawer: boolean;
    handleCloseDrawer: () => void;
    direction?: "left" | "right" | "top" | "bottom";
    children(): React.ReactNode;
    lockBackgroundScroll?: boolean;
    overlayColor?: string;
}
function DrawerCustom(props: DrawerCustomProps) {
    const { isVisibleDrawer, handleCloseDrawer, direction = 'left', children, lockBackgroundScroll = false, overlayColor = "rgb(0, 0, 0) " } = props
    return (
        <Drawer
            open={isVisibleDrawer}
            onClose={handleCloseDrawer}
            direction={direction}
            lockBackgroundScroll={lockBackgroundScroll}
            overlayColor={overlayColor}

        >
            {children()}
        </Drawer>
    )
}

export default DrawerCustom