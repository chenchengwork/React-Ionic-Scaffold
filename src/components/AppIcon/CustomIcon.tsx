import React from 'react';
import { Icon } from 'antd-mobile';
import { IconPropsType } from 'antd-mobile/lib/icon/PropsType';
import { nameToType } from './constants'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type SvgProps = Omit<
	React.HTMLProps<SVGSVGElement>,
	'size' | 'type'
>;

interface CustomIconProps extends SvgProps{
	type: string;
	size?: "xxs" | "xs" | "sm" | "md" | "lg";
	color?: string;
	className?: string;
	onClick?: React.MouseEventHandler<SVGSVGElement>;
}

const CustomIcon: React.FC<CustomIconProps> = ({ type, className, size , ...restProps }) => {
	const customType = nameToType[type];
	if(!customType) {
		console.error(`自定义icon type="${type}"在CustomIcon.jsx中未找到`)
		return null;
	}

	return (
		// @ts-ignore
		<svg
			className={`am-icon am-icon-${size} ${className}`}
			{...restProps}
		>
			<use xlinkHref={`#${customType.default.id}`} />   svg-sprite-loader@latest
		</svg>
	);
};

CustomIcon.defaultProps = {
	className: "",
	size: "md",
};

export default CustomIcon;
