<template>
    <div class="activity-box">
        <EnActHeader />
        <EnActContainer />
        <!-- <zContainerMobile />
        <actFooter /> -->
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Route } from 'vue-router';
import EnActHeader from '../../../components/activityEn/EnActHeader.vue';
import EnActContainer from '../../../components/activityEn/EnActContainer.vue';

interface WithRoute {
    $route: Route;
}
declare const $: any;
@Component({
    layout: 'blank',
    components: {
        EnActHeader,
        EnActContainer,
    },
})
export default class Activity extends Vue {
    head() {
        return {
            title: 'ZEGO- Here comes the 5th anniversary showroom live streaming pricing packages',
            meta: [{ name: 'google-site-verification', content: 'T7_s0Zvla3m07TW7_S9NI8Xiue6HCuyrR1mLlIS9IW4' }],
        };
    }
}
</script>
<style lang="scss" scoped></style>
