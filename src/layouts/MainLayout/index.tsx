import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { TabBar } from 'antd-mobile';
import AppIcon from '@/components/AppIcon';
import { getMenus } from './menuUtil';
import { theme } from "@/theme";

export {default as MainContent } from './MainContent';
export {default as MainHeader } from './MainHeader';

const MainLayout: React.FC<RouteComponentProps> = (props) => {
    const menus = getMenus();

    return (
        <div className="main-layout">
            <TabBar
                // unselectedTintColor="#949494"
                unselectedTintColor={theme.navNoSelectedColor}
                tintColor={theme.navSelectedColor}
                barTintColor={theme.navBarBgColor}
                hidden={false}
            >
                {menus.map((item) => {
                    const isSelected = (Array.isArray(item.url) ? item.url[0] : [item.url]).includes(props.match.path);
                    const currentSelectedTab = Array.isArray(item.url) ? item.url[0] : item.url;

                    return (
                        <TabBar.Item
                            title={item.label}
                            key={currentSelectedTab}
                            icon={<AppIcon appType={item.icon.appType} type={item.icon.iconType} />}
                            selectedIcon={<AppIcon appType={item.icon.appType} type={item.icon.iconType} />}
                            selected={isSelected}
                            // badge={1}
                            onPress={() => {
                                props.history.push(currentSelectedTab)
                            }}
                        >
                            {isSelected && props.children}
                        </TabBar.Item>
                    )
                })}
            </TabBar>
            {/*language=SCSS*/}
            <style jsx>{`
                .main-layout{
                    position: fixed;
                    width: 100%;
                    height: 100%;
                    overflow: auto;
                }
            `}</style>
        </div>
    )
};

export default withRouter(MainLayout);
