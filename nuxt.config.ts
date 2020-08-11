import NuxtConfiguration from '@nuxt/config';
import { NuxtRouteConfig } from '@nuxt/config/types/router';
import webpack from 'webpack';

// 注：使用基于config的nuxt, 该配置会对vue生效，即示例：this.$axios.get()生效
// 服务端部署问题：
// 1. 运行完build后，将.nuxt static nuxt.config.js package.json 传到对应到服务器dir下面，然后使用pm2去开启进程守护
// 2. pm2 start npm --name "package内部到pro-name" --run start

const config: NuxtConfiguration = {
    mode: 'universal',
    server: {
        host: '0.0.0.0', // default: localhost,
        port: 3000, // default: 3000
    },
    /*
     ** Headers of the page
     */
    head: {
        title: 'ZEGO即构科技-为全球提供稳定高质的实时音视频云服务',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no',
            },
            {
                name: 'format-detection',
                content: 'telephone=189-3893-7493, email=market@zego.im',
            },
            { name: 'renderer', content: 'webkit' },
            {
                name: 'keywords',
                content: 'ZEGO,即构科技,音视频,视频通话,语音通话,互动直播',
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'ZEGO即构科技是前QQ总经理创立的实时语音视频云服务提供商：跨平台为APP、网站及小程序提供音视频通话、互动直播等解决方案，不限行业！',
            },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v2' },
            {
                rel: 'apple-touch-icon-precomposed',
                sizes: '72x72',
                href: '/apple-touch-icon-72-precomposed.png',
            },
            {
                rel: 'apple-touch-icon-precomposed',
                sizes: '57x57',
                href: '/apple-touch-icon-57-precomposed.png',
            },
            {
                rel: 'apple-touch-icon-precomposed',
                sizes: '144x144',
                href: '/apple-touch-icon-144-precomposed.png',
            },
            {
                rel: 'apple-touch-icon-precomposed',
                sizes: '114x114',
                href: '/apple-touch-icon-114-precomposed.png',
            },
        ],
        script: [
            {
                src: '/respond.js',
                async: false,
                defer: false,
                type: 'text/javascript',
            },
            // {
            //   src: '/jquery-1.11.3.min.js',
            //   async: true,
            //   defer: false,
            //   type: 'text/javascript'
            // },
            {
                src: '/baidu-statistics.js',
                async: false,
                defer: false,
                type: 'text/javascript',
            },
            {
                src: 'https://pv.sohu.com/cityjson?ie=utf-8',
                async: false,
                defer: false,
                type: 'text/javascript',
            },
            {
                src: 'https://www.googletagmanager.com/gtag/js?id=UA-144922806-1',
                type: 'text/javascript',
            },
            {
                src: '/google-analysis.js',
                type: 'text/javascript',
            },
        ],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
        'element-ui/lib/theme-chalk/index.css',
        'swiper/dist/css/swiper.css',
        '~assets/css/reset.css',
        '~assets/css/animate.css',
        '~assets/css/common.scss',
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        // { src: '~plugins/jquery-1.11.3.min.js', ssr: false },
        // { src: '~plugins/menuToggle.js', ssr: false },
        { src: '~plugins/element-ui.js', ssr: true },
        { src: '~/plugins/swiper.js', ssr: false },
        { src: '~/plugins/clickboard.js', ssr: false },
        { src: '@/plugins/route', ssr: true },
        { src: '@/plugins/vue-qr.js', ssr: false },
        { src: '~plugins/vue-canvas-poster.js', ssr: false },
        // { src: '~/plugins/swiper.min.js', ssr: false }
    ],
    // some nuxt config...
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org/docs/
        'bootstrap-vue/nuxt',
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        // '@nuxtjs/pwa',
        '@nuxtjs/eslint-module',
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        // 自带axios配置
        withCredentials: true,
        proxy: true,
    },

    // 代理配置
    proxy: {
        '/api': {
            target: 'http://test',
            pathRewrite: {
                '^/api/': '/',
                changeOrigin: true,
            },
        },
    },

    router: {
        extendRoutes(routes: NuxtRouteConfig[]) {
            for (let i = 0; i < routes.length; i++) {
                const route: any = routes[i];
                // 将这里路由的test匹配去掉，则nuxt会生成对应的/test路由文件
                if (route.component.match(/\/_c/) || route.component.match(/\/test/)) {
                    // if (route.component.match(/\/_c/)) {
                    routes.splice(i, 1);
                    i -= 1;
                }
            }
        },
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        // extend(
        //   config: WebpackConfiguration,
        //   ctx: {
        //     isDev: boolean
        //     isClient: boolean
        //     isServer: boolean
        //     loaders: NuxtConfigurationLoaders
        //   }
        // ) {
        //   // console.log(config, ctx)
        // }
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                'window.$': 'jquery',
            }),
        ],
    },
    generate: {
        fallback: true,
        interval: 1500,
        // dir: 'static_dist',
        subFolders: false,
        routes() {
            // 路由配置信息,两种影射值都可以用
            // return
            const useCase = [
                'yingkezhibo',
                'haoweilai',
                'kugouktv',
                'yiqijiaoyukeji',
                'haidiangongshangju',
                'uplive',
                'huajiao',
                'liveme',
                'xiwo',
            ].map(item => {
                return '/usecase/' + item;
            });
            const enCase = [
                // 'en/case/index',
                'en/case/detail',
                'en/case/customer/liveme',
                'en/case/customer/uplive',
                'en/case/customer/xmly',
            ];
            const myCase = ['mytest'];
            return [...useCase, ...enCase];
        },
    },
};

export default config;
