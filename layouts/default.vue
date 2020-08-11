<template>
    <div id="app" :class="{ 'no-pad': $route.name === 'CN-id' }">
        <template>
            <en-header v-if="$route.path && $route.path.indexOf('en') >= 0" />
            <z-header v-else />
        </template>

        <nuxt />
        <template>
            <en-footer v-if="$route.path && $route.path.indexOf('en') >= 0" />
            <z-footer v-else />
        </template>
        <template>
            nuxt从入门到入土
        </template>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Route } from 'vue-router';
import EnHeader from '../components/en/EnHeader.vue';
import EnFooter from '../components/en/EnFooter.vue';
import ZHeader from '../components/ZHeader.vue';
import ZFooter from '../components/ZFooter.vue';
interface WithRoute {
    $route: Route;
}
declare const $: any;
@Component({
    components: {
        ZHeader,
        ZFooter,
        EnHeader,
        EnFooter,
    },
})
export default class Default extends Vue implements WithRoute {
    $route!: Route;
    mounted() {
        // console.log('route', this.$route);  当前路由信息
        // console.log(location);
        if (location.href.indexOf('#office-footer') > -1) {
            // console.log($('#office-footer').offset().top);
            const top = $('#office-footer').offset().top;
            $('html,body').animate(
                {
                    scrollTop: top,
                },
                300,
                'swing',
            );
        }
    }
}
</script>

<style lang="scss"></style>
