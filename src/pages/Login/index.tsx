import React, { useState } from "react";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { InputItem, Button } from "antd-mobile";
import prompt from "@/utils/prompt";
import EnumRouter from "@/constants/EnumRouter";
import { login } from '@/services/api/common';

const Login: React.FC<RouteComponentProps> = ({history}) => {
	const [ phone,  setPhone ] = useState("");
	const [ password,  setPassword ] = useState("");

	const handleLogin = () => {
		if(!phone.trim()) return prompt.error("手机号不能为空");
		if(!password.trim()) return prompt.error("密码不能为空");

		login(phone, password).then(() => {
			prompt.info("登录成功");

			history.push(EnumRouter.tab1);
		}).catch((e) => {
			prompt.error(e.msg);
		})
	};

	return (
		<div className="login">
			<div style={{width:"100%"}}>
				<InputItem
					placeholder="请输入手机号"
					value={phone}
					onChange={(value) => setPhone(value)}
				>手机号</InputItem>

				<InputItem
					placeholder="请输入密码"
					type="password"
					value={password}
					onChange={(value) => setPassword(value)}
				>密码</InputItem>

				<Button type="primary" style={{marginTop: 5}} onClick={handleLogin}>登录</Button>
			</div>

			{/*language=SCSS*/}
			<style jsx>{`
				.login{
					display: flex;
					align-items: center;
					width: 100%;
					height: 100%;
				}
			`}</style>

		</div>
	)
};


export default withRouter(Login);
