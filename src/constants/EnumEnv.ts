const rootPath = "/";

const EnumEnv = {
    rootPath,                                      // 根路由前缀
    apiDomain: "https://42.159.87.75:8102",                                 // api域名
    apiPrefix: '/dp/',                                // api前缀
    intl: {
        lang: 'zh',                                 // 语言
        timeZoneOffset: 8 * 60,                     // 时区偏差, 单位分钟
    },
    respCode:{
        apiSuccessCode: "success",                          // 请求成功响应code
        errorCode: "error",                                 // 请求失败响应code
        noLoginCode: "110",                                 // 未登录的code
        invalidParamCode: "invalid_param",                  // 参数校验失败code
    },
    login: {
        isStartLoginCheck: true,                        // 是否开启登录验证
        cookieKey: "JSESSIONID",                          // 登录验证的cookie
        defaultRedirectUrl: rootPath + "tab1",        // 默认跳转页面
        loginUrl: rootPath + "login",                   // 登录页面路由
    }
};

export default EnumEnv;
