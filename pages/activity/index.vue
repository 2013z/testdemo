<template>
    <div class="activity-box">
        <zHeader />
        <ZContainer />
        <zContainerMobile />
        <actFooter />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Route } from 'vue-router';
import axios from 'axios';
import ZHeader from '../../components/activity/ZHeader.vue';
import actFooter from '../../components/activity/actFooter.vue';
// import zContainer from './zContainer.vue';
import ZContainer from '../../components/activity/ZContainer.vue';
import zContainerMobile from '../../components/activity/zContainerMobile.vue';
// import ZFooter from '../../components/ZFooter.vue';

interface WithRoute {
    $route: Route;
}
const baseRequestUrl = 'https://doc.zego.im';
// const baseRequestUrl = 'http://192.168.8.203:3006';
declare const $: any;
@Component({
    layout: 'blank',
    components: {
        ZHeader,
        // ZFooter,
        actFooter,
        ZContainer,
        zContainerMobile,
    },
})
export default class Activity extends Vue {
    $route: any;

    mounted() {
        const id = this.$route.query.invitedId;

        axios.get(`${baseRequestUrl}/data/recordIpInfos?id=${id}`).then((res: any) => {
            console.log(res);
        });
    }
}
</script>
<style lang="scss" scoped>
/deep/ {
    .container_mobile {
        display: none;
    }
    .container_pc {
        display: block;
    }

    @media screen and (max-width: 1000px) {
        .container_mobile {
            display: block;
        }
        .container_pc {
            display: none;
        }
    }
    .footer {
        background-color: #151a5d;
    }
}
</style>
