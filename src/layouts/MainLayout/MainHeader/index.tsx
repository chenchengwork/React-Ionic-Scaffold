import React from 'react';
import css from 'styled-jsx/css';
import { NavBar } from 'antd-mobile';
import { NavBarProps } from 'antd-mobile/lib/nav-bar/PropsType'
import { mainHeaderHeight } from '../theme';
import { theme } from "@/theme";

interface MainHeaderProps{
    navBarProps?: NavBarProps;
}

const MainHeader: React.FC<MainHeaderProps> = ({children,navBarProps}) => {
    const { className, styles } = getStyle(mainHeaderHeight);

    return (
        // @ts-ignore
        <NavBar
            className={`${className} main-header`}
            mode="light"
            style={{backgroundColor: theme.navBarBgColor}}
            {...navBarProps}
        >
            {children}
            {styles}
        </NavBar>
    )
};

MainHeader.defaultProps = {
    navBarProps: {}
};

export default MainHeader;

const getStyle = (mainHeaderHeight: number) => {

    //language=SCSS
    return css.resolve`
        .main-header{
            position: fixed;
            z-index: 9999;
            top: 0px;
            width: 100%;
            height: ${mainHeaderHeight}px;
        }
    `;
};
