import React from 'react';
import css from 'styled-jsx/css';
import { WingBlank } from 'antd-mobile';
import { mainHeaderHeight } from '../theme';

interface MainContentProps {
    isShowHeader?: boolean;
}

const MainContent: React.FC<MainContentProps> = ({children, isShowHeader}) => {
    const { className, styles } = getStyle(isShowHeader, mainHeaderHeight);

    return (
        <WingBlank className={`${className} main-content`}>
            {children}
            {styles}
        </WingBlank>
    )
};

MainContent.defaultProps = {
    isShowHeader: false
};

export default MainContent;

const getStyle = (isShowHeader: boolean, mainHeaderHeight: number) => {
    const extraH = 5; // 距离头部的高度
    //language=SCSS
    return css.resolve`
        .main-content{
            margin-top: ${isShowHeader ? mainHeaderHeight + extraH : 0}px;
        }
    `
};
