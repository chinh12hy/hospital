// const path = require('path');

// const version = process.env.VUE_APP_VERSION;
// const theme = process.env.VUE_APP_THEME;

// vue.config.js
module.exports = {
    // outputDir: path.resolve(__dirname, `./${theme}-${version}`),
    pwa: {
        iconPaths: {
            favicon16: `public/icons/favicon-16x16.png`,
            favicon32: `public/icons/favicon-32x32.png`,
        },
    },
    css: {
        loaderOptions: {
            // less: {
            //     javascriptEnabled: true,
            // },
        },
    },
    // transpileDependencies: [
    //     /\/node_modules\/vue-echarts\//,
    //     /\/node_modules\/resize-detector\//,
    // ],
    configureWebpack: (config) => {
        // eslint-disable-next-line no-param-reassign
        config.output.globalObject = 'this';
    },
    chainWebpack: (config) => {
        config.module
            .rule('vue')
            .test(/\.vue$/)
            .use('iview-loader')
            .loader('iview-loader')
            .options({
                prefix: false,
            });
    },
};
