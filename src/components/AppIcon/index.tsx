import React from 'react';
import { Icon } from 'antd-mobile';
import { IconProps } from 'antd-mobile/lib/icon';
import CustomIcon from "./CustomIcon";

interface AppIconProps extends IconProps{
	appType?: "antd" | "custom";
}

const AppIcon: React.FC<AppIconProps> = ({appType,...restProps}) => {
	// @ts-ignore
	return appType === "antd" ? <Icon {...restProps} /> : <CustomIcon {...restProps} />
};

AppIcon.defaultProps = {
	appType: "custom",
};

export default AppIcon;
