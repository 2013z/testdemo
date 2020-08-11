<template>
    <div>
        前端 从入门到入土
        <z-my-com></z-my-com>
    </div>
</template>

<script lang="ts">
// 首页中都<nuxt />对应components在.nuxt/components/nuxt.js里面

// 装饰器相当于java中的注解，不过只是语法糖
// 使用nuxt装饰器
// import { Vue, Component } from 'nuxt-property-decorator';
// 使用vue装饰器
import { Vue, Component, Emit, Watch, Prop } from 'vue-property-decorator';
import { Route } from 'vue-router';
import ZMyCom from '../../components/my/ZMyCom.vue';
interface WithRoute {
    $route: Route;
}
declare const $: any;
@Component({
    layout: 'mylayout', // 在App.vue文件中，Nuxt默认会处理不设置layout的布局，
    // layout: 'blank',
    components: { ZMyCom },
})
export default class Test extends Vue implements WithRoute {
    // 继承vue 实例化 对应的路由
    // ！号的作用说告诉ts这里一定有值
    $route!: Route;
    //  没有data 直接属性字段
    //    data(){
    //    }

    //  如果要支持ts语法，必须指明script
    //  myname: string = 'alibaba'; lang="ts"
    name: string = 'alibaba';
    age: number = 16;

    // 计算属性
    get Name() {
        return this.name;
    }
    get Age() {
        return this.age;
    }
    // 监听器
    @Watch('name')
    onAge(newVal: number, oldVal: number) {
        console.log('onAge', newVal, oldVal);
    }
    // 组件传值
    @Prop(Number) money!: number; // 传递制定数据类型
    @Prop([String, Number, Boolean]) mixTarget!: string | number | boolean; // 传递可筛选数据类型
    @Prop({ default: () => ({}) }) isNullObj: any; // 传递任意数据类型

    // 监听器 - 驼峰转化
    @Emit('handleClick')
    handleClick(handle: object) {
        // console 加强版 consola
        console.log(handle);
    }
    @Emit('handleMove')
    handleMove(handle: object) {
        console.log(handle);
    }

    // 剩余的@Provice和@Inject项目中暂时没有看到有用过

    // 页面加载前的数据提取
    asyncData() {
        const home = require('~/assets/json/home.json');
        console.log('home', home);
        return {
            home,
        };
    }
    // 支持es6
    // async asyncData(){
    //    const home = await axios.get('/test');
    //    return {
    //        home
    //    }
    // }
    // 支持options + cb
    // async asyncData({ options }, cb){
    //    const home = await axios.get('/test');
    //    return {
    //        home
    //    }
    // }

    // test
    mounted() {
        this.$on('handle-click', (e: object) => {
            console.log('e', e);
        });
        this.handleClick({ name: this.name });
    }
}
</script>

<style scoped lang="scss">
@mixin p {
    font-size: 16px;
    font-weight: bold;
    color: #999;
}
div[abc='1'] {
    @include p;
}
</style>
