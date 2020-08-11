declare const $: any;

declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}
// 解决二维码插件不能声明
declare module 'vue-qr';
declare module 'canvas2image';
declare module 'qrcode';
declare module 'vue-click-outside' {
    const vueOutsidea: any;
    export default vueOutsidea;
}
declare module 'vue-awesome-swiper' {
    const Swiper: any;
    export { Swiper };
}

// 解决element-ui 和nuxt冲突bug
declare module 'vue/types/vue' {
    import { ElLoadingComponent, LoadingServiceOptions, ElLoading } from 'element-ui/types/loading';

    interface Vue {
        /** If you do not have a specific DOM node to attach the Loading directive, or if you simply prefer not to use Loading as a directive, you can call this service with some configs to open a Loading instance. */
        $loading(options: LoadingServiceOptions): ElLoadingComponent | any;
    }
}
