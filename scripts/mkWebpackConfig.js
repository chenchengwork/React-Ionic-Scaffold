const path = require("path");
const { assemble, pipe, depend } = require("webpack-pipe");
// 入口配置
const entry = (config) => depend.merge({
    entry:{
        app: ["./src"],
    }
}, config);


// 输出配置
const output = (config) => depend.merge({
    output:{
        publicPath: "/public/",
        path: depend.tool.resolveAppPath("public/build"),
    }
}, config);


const resolve = (config) => depend.merge({
    resolve: {
        "modules": [
            "web_modules",
        ],
        alias: {
            "@": path.resolve(__dirname, '../src/'),
        },
        extensions: [ '.tsx', '.ts', '.js', ".jsx" ],
    }
}, config);


/**
 * babel支持国际化配置
 * @param config
 * @return {*}
 */
const intl =  (config) => {
    config.module.rules = config.module.rules.map(rule => {
        if (rule.loader === "babel-loader"){
            // 使用的babel插件是: babel-plugin-react-intl
            rule.options.cacheDirectory = false; // 保证提取的信息是最新的
            rule.options.plugins.push(['react-intl', {"messagesDir": "./i18n-messages"}]);

            return rule;
        }

        return rule;
    });

    return config;
};


const styledJsx = (config) => {
    config.module.rules = config.module.rules.map(rule => {
        if (rule.loader === "babel-loader"){
            // styled-jsx
            rule.options.plugins.push([
                "styled-jsx/babel",
                {
                    "vendorPrefixes": true,     // 为css自动添加前缀
                    "plugins": [
                        ["styled-jsx-plugin-sass",{sassOptions: {}}]
                    ]
                }
            ]);
            return rule;
        }

        return rule;
    });

    return config;
};

/**
 * 加载antd mobile的主题
 */
const themeAntdMobile = (config) => {
    config.module.rules = config.module.rules.map(rule => {
        (Array.isArray(rule.use) ? rule.use : []).forEach(item => {
            if (item.loader === "less-loader"){
                item.options = {
                    ...rule.use.options,
                    modifyVars: require("./theme")
                };

                return item;
            }
        })
        return rule;
    });

    return config;
};

const customIcon = (config) => {
    const iconPath = path.resolve(__dirname,'../src/components/AppIcon/icon');
    config = depend.merge({
        module:{
            rules:[
                {
                    test: /.svg$/,
                    loader: 'svg-sprite-loader',
                    include:[iconPath],
                    options: {
                        // extract: true,
                        // spriteFilename: svgPath => `sprite${svgPath.substr(-4)}`
                    }
                }
            ]
        }
    }, config);

    config.module.rules = config.module.rules.map(item => {
        if(Array.isArray(item.use) && item.use[0].loader == "url-loader"){
            if(item.use[0].options && item.use[0].options.minetype == "image/svg+xml"){
                item.exclude = [path.resolve(__dirname, iconPath)]
                return item;
            }
        }

        return item;
    });

    return config;
}

/**
 * 组装webpack config
 * @return {*}
 */
module.exports = (pipeNodes = []) => {
    const config = assemble([
        ...pipeNodes,
        styledJsx,
        themeAntdMobile,
        customIcon,
        pipe.base,
        pipe.staticResource,
        pipe.css,
        pipe.scss,
        pipe.babelAntdMobile,
        pipe.babelTsReact,

        pipe.miniCssExtractPlugin,
        pipe.provideReactPlugin,
        pipe.webpackbarPlugin,

        resolve,
        output,
        entry,
    ]);

    return config;
};
