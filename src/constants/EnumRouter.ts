import EnumEnv from '@/constants/EnumEnv';

const to = (route: string) => EnumEnv.rootPath.replace(/\/$/, "") + "/" + route;

/**
 * 路由枚举
 */
const EnumRouter = {
    rootRoute: to(''),		                 // 根路由
    login: to('login'),		                 // 登录
    tab1: to("tab1"),
    tab2: to("tab2"),
    tab3: to("tab3"),
};

export default EnumRouter;
