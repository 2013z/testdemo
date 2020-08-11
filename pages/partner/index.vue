<template>
    <div class="partner-box">
        <PartnerHead />
        <PartnerContainer />
        <PartnerContainerMobile />

        <actFooter />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Route } from 'vue-router';
import PartnerHead from '../../components/partner/PartnerHead.vue';
import PartnerContainer from '../../components/partner/PartnerContainer.vue';
import actFooter from '../../components/activity/actFooter.vue';
import PartnerContainerMobile from '../../components/partner/PartnerContainerMobile.vue';
interface WithRoute {
    $route: Route;
}
declare const $: any;
@Component({
    layout: 'blank',
    components: {
        PartnerHead,
        PartnerContainer,
        actFooter,
        PartnerContainerMobile,
    },
})
export default class partner extends Vue {}
</script>
<style lang="scss" scoped>
/deep/ {
    .container_m {
        display: none;
    }
    .container_pc {
        display: block;
    }

    @media screen and (max-width: 1000px) {
        .container_m {
            display: block;
        }
        .container_pc {
            display: none;
        }
    }
}
</style>
