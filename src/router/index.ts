import transformRouter from './transformRouter';
import EnumRouter from '@/constants/EnumRouter';

/**
 * 定义路由
 * @type {*[]}
 * 说明:
 *  {
         uri: "/",                                          // 该字段必填
         component: import("./components/CodeEditor"),      // 该字段必填
         storeKeys: "mobx的状态对象key",                      // 该字段可选
         props: "传入组件的props"                             // 该字段可选, 必须是对象
         isMainLayout: true,                                // 该字段可选, 是否开启MainLayout布局, 默认是true
     }
 */
const routes = [
    {
        uri: EnumRouter.login,
        component: import("@/pages/Login"),
        isMainLayout: false,
        stores: {}
    },

    {
        uri: EnumRouter.tab1,
        component: import("@/pages/Tab1"),
        stores: {}
    },

    {
        uri: EnumRouter.tab2,
        component: import("@/pages/Tab2"),
        stores: {}
    },

    {
        uri: EnumRouter.tab3,
        component: import("@/pages/Tab3"),
        stores: {}
    },
];

export default transformRouter(routes);
