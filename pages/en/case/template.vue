<template>
    <div class="foreign-container">
        <EnBanner>
            <div class="banner-content">
                Dual-stream live broadcast, multi-player connected microphone, voice live, interactive mini-games, rich
                mode to meet the various needs of entertainment live broadcast.
            </div>
            <div class="bg-img">
                <img src="../../../assets/img/en/case/detail/bg-banner.png" />
            </div>
        </EnBanner>

        <b-container class="container module">
            <h1>typical customers</h1>
            <EnCaseCustomer />
        </b-container>

        <EnBottomBgLink />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import ClickOutside from 'vue-click-outside';
import EnBottomBgLink from '../../../components/en/EnBottomBgLink.vue';
import EnBanner from '../../../components/en/EnBanner.vue';
import EnCaseCustomer from '../../../components/en/case/EnCaseCustomer.vue';

@Component({
    name: 'case-index',
    directives: { ClickOutside },
    components: { EnBottomBgLink, EnBanner, EnCaseCustomer },
})
export default class CaseIndex extends Vue {
    asyncData() {
        const contents = {
            scene: [
                {
                    id: 1,
                    title: 'Live Steaming',
                    cover: 'scene-live.png',
                    desc:
                        'Perfectly supporting for multiple live streaming formats such as dual-stream live streaming, multi-player connected, voice live, interactive mini-games, etc.. Various forms to meet the various needs of entertainment and game live streaming.',
                    url: '',
                },
                {
                    id: 2,
                    title: 'Chat Room',
                    cover: 'scene-chat.png',
                    desc:
                        'Supplying Both speed mode and high-definition mode for team-game playing scene. Also supply interactive mode and broadcast mode for entertainment scene. NO delay for either speed or entertainment.',
                    url: '',
                },
                {
                    id: 3,
                    title: 'KTV',
                    cover: 'scene-ktv.png',
                    desc:
                        'Plentiful methods for KTV , take turns solo, single-player MV, two-player MV, and multi-player chorus, truly experience for KTV entertainment.',
                    url: '',
                },
                {
                    id: 4,
                    title: 'Education',
                    cover: 'scene-education.png',
                    desc:
                        'Multi-ways Connect modules solve the pain of big classroom or small group teaching, and ultra-low latency technology solves the real-time communication efficiency of 1-on-1 video consultation.',
                    url: '',
                },
                {
                    id: 5,
                    title: 'Retail',
                    cover: 'scene-retail.png',
                    desc:
                        '300ms ultra-low latency technology  solves the requirement of the real-time bidding and lucky draw. Supporting a  clear and fluent live e-commerce broadcast effects in complex network environment.',
                    url: '',
                },
            ],
            stories: ['1-1', '1-2', '1-3', '1-4', '1-5', '2-1', '2-2', '2-3', '2-4', '2-5'],
        }; // require('../../../assets/json/en-case-home.json');
        const { scene, stories } = contents;
        scene.forEach((item: any) => {
            item.cover = require(`../../../assets/img/en/case/scene/${item.cover}`);
        });
        stories.forEach((url: String, i: number) => {
            stories[i] = require(`../../../assets/img/en/stories/${url}.png`);
        });
        return {
            contents,
            scene,
            stories,
        };
    }
    head() {
        return {
            title: 'Solutions & Cases Home - Zego',
            meta: [
                {
                    name: 'keywords',
                    content: 'Zego',
                },
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Zego Technology audio and video intertactive commmunication one-to-one voice chat,one-to-many voice chat live interactive video streaming one-to-many real-team audio streaming',
                },
            ],
            htmlAttrs: {
                lang: 'en',
            },
        };
    }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/css/en-third-common.scss';

.banner-content {
    width: 532px;
    padding-top: 95px;
    font-weight: bold;
    color: #fff;
    font-size: 25px;
    position: relative;
    z-index: 1;
    max-width: 100%;
}
.bg-img {
    width: 559px;
    position: absolute;
    right: 10px;
    bottom: 10px;
    z-index: 0;
    img {
        width: 100%;
    }
}
@media screen and (max-width: 1000px) {
    .banner-content {
        font-size: 0.4rem;
        padding: 1rem 0 0;
    }
    .bg-img {
        opacity: 0.3;
        width: 80%;
        left: 10%;
        bottom: 0.4rem;
    }
}
</style>
