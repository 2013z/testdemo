<template>
    <div class="index-container">
        <div class="index-banner">
            <section class="banner">
                <div v-swiper:bannerSwiper="bannerSwiperOption" class="banner-swiper">
                    <div class="banner-swiper-pagination swiper-pagination-bullets"></div>
                    <div class="swiper-wrapper">
                        <template v-for="(banner, bK) in banners">
                            <div v-if="!banner.hidden" :key="bK" :class="'swiper-slide ' + banner.id">
                                <section class="slide-item">
                                    <FlashTalk v-if="banner.id === 'flashtalk'" :banner="banner"></FlashTalk>
                                    <PartnerActivity
                                        v-else-if="banner.id === 'partnerActivity'"
                                        class="container main-banner"
                                    ></PartnerActivity>
                                    <div v-else-if="banner.id === 'telecommuting'" class="container main-banner">
                                        <div class="icon">
                                            <span class="icon0"></span>
                                            <!-- <span class="icon1">疫情期间</span> -->
                                            <span class="icon2">共倡远程办公</span>
                                        </div>
                                        <h1 class="title">
                                            {{ banner.title[0] }}<br />
                                            {{ banner.title[1] }}
                                        </h1>
                                        <div class="btns">
                                            <a
                                                class="apply-try now"
                                                href="https://mp.weixin.qq.com/s/zWTtkw29BuarM7m5kj6kQA"
                                                target="_blank"
                                                rel="nofollow"
                                            >
                                                查看详情
                                            </a>
                                            <a
                                                class="apply-try now "
                                                href="https://www.talkline.cn/download"
                                                target="_blank"
                                                rel="nofollow"
                                            >
                                            </a>
                                        </div>
                                        <!-- <div class="word"></div>
                                    <a class="apply-try now" :href="banner.href" target="_blank">
                                        {{ banner.hrefText }}
                                    </a> -->
                                    </div>
                                    <div v-else-if="banner.id === 'xiaoyibang'" class="container main-banner">
                                        <div class="bg-img clearfix"></div>
                                        <div class="icon">
                                            <span class="icon0"></span>
                                            <!-- <span class="icon1">疫情期间</span> -->
                                            <span class="icon2">助力远程艺考</span>
                                        </div>
                                        <h1 class="title">
                                            {{ banner.title[0] }}<br />
                                            {{ banner.title[1] }}
                                        </h1>
                                        <div class="btns">
                                            <a
                                                class="apply-try now"
                                                href="https://mp.weixin.qq.com/s?__biz=MzA3NjE0MjczMQ==&mid=2247483681&idx=1&sn=74d2a1d95dc45a6c228b3bf0c762909e&chksm=9f6480c5a81309d3ad85d925ec504453b4e5b5f3ba8167cc381adf8006e20aafd295ffb2e2ca&mpshare=1&scene=1&srcid=&sharer_sharetime=1580898492200&sharer_shareid=9b06c8bd306efdcccc37fd7d24d90f11&rd2werd=1#wechat_redirect"
                                                target="_blank"
                                                rel="nofollow"
                                            >
                                                查看详情
                                            </a>
                                            <a
                                                class="apply-try now "
                                                href="https://www.xiaoyibang.com/"
                                                target="_blank"
                                                rel="nofollow"
                                            >
                                            </a>
                                        </div>
                                    </div>
                                    <div v-else class="slide-content main-banner container">
                                        <h1 class="b-title-pc">
                                            {{ banner.title[0] }}<br />
                                            {{ banner.title[1] }}
                                        </h1>
                                        <h1 class="b-title-m">
                                            {{ banner.mTitle[0] }}<br />
                                            {{ banner.mTitle[1] }}<br />
                                            {{ banner.mTitle[2] }}
                                        </h1>
                                        <p class="desc">
                                            {{ banner.desc[0] }}<br />
                                            {{ banner.desc[1] }}
                                        </p>
                                        <a class="apply-try" :href="banner.href" target="_blank">
                                            {{ banner.hrefText }}
                                        </a>
                                    </div>
                                </section>
                            </div>
                        </template>
                    </div>
                </div>
            </section>
        </div>
        <div class="index-report">
            <div class="container report-content">
                <div v-swiper:reportSwiperPC="reportSwiperOptionPC" class="report-swiper-pc">
                    <div class="swiper-wrapper">
                        <section v-for="(report, reportKey) in showReports" :key="reportKey" class="swiper-slide">
                            <h3 class="report-title">
                                <a :href="report.link">{{ report.title }}</a>
                            </h3>
                            <div class="report-desc">
                                <span
                                    :class="{
                                        tag: true,
                                        'tag-orange': reportKey % 3 === 0,
                                        'tag-blue': reportKey % 3 === 1,
                                        'tag-purple': reportKey % 3 === 2,
                                    }"
                                    >{{ report.type }}</span
                                >
                                <span class="time">{{ report.time }}</span>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        <div class="report-container container">
            <div v-swiper:reportSwiper="reportSwiperOption" class="report-swiper">
                <div class="swiper-wrapper">
                    <section v-for="(report, reportKey) in showReports" :key="reportKey" class="swiper-slide">
                        <h3 class="report-title ellipsis">
                            <a :href="report.link">{{ report.title }}</a>
                        </h3>
                        <div class="report-desc">
                            <span
                                :class="{
                                    tag: true,
                                    'tag-orange': reportKey === 0,
                                    'tag-blue': reportKey === 1,
                                    'tag-purple': reportKey === 2,
                                }"
                                >{{ report.type }}</span
                            >
                            <span class="time">{{ report.time }}</span>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <scene :scenes="scenes"></scene>
        <div class="technology">
            <div class="tech-advantage">
                <div class="bg"></div>
                <section class="container">
                    <h2 class="advantage-abbr">
                        <span>安全稳定高效开发</span>
                        <p>
                            <a href="https://console.zego.im/account/register" target="_blank">注册</a>
                            /
                            <a href="https://doc-zh.zego.im/zh/2969.html" target="_blank">下载SDK</a>
                            /
                            <a href="https://doc-zh.zego.im/redirect" target="_blank">集成开发</a>
                        </p>
                    </h2>
                    <section class="advantage-detail">
                        <div class="row">
                            <p>
                                <span class="num">20亿<sup>+</sup></span
                                ><br />每日通话时长20亿+分钟
                            </p>
                            <p>
                                <span class="num">4000<sup>+</sup></span
                                ><br />服务超过4000家企业用户
                            </p>
                        </div>
                        <div class="row">
                            <p><span class="num">70%</span><br />弱网下抗丢包</p>
                            <p><span class="num">80ms</span><br />端到端超低延迟</p>
                        </div>
                    </section>
                </section>
            </div>
            <div class="container tech-content">
                <h1 class="tech-text">
                    18年技术积累，保障用户业务稳定运行
                </h1>
                <h1 class="tech-text tech-text-m">18年技术积累，保障用户<br />业务稳定运行</h1>
                <div class="tech-main">
                    <ul class="tech-nav">
                        <li
                            v-for="(tech, techKey) in techs"
                            :key="techKey + '1'"
                            :class="{ 'nav-item': true, active: techActive === techKey }"
                            @mouseover="handleTech(techKey)"
                            @mouseout="handleTech(techKey)"
                        >
                            <article>
                                <img :src="techActive === techKey ? tech.srcActive : tech.src" alt="icon" />
                                <span class="nav-title">{{ tech.title }}</span>
                                <p class="nav-content">
                                    {{ tech.content }}
                                </p>
                            </article>
                        </li>
                    </ul>
                    <div class="tech-relation">
                        <div
                            v-for="(tech, tK) in techs"
                            :id="'rel' + tK"
                            :key="tK + '2'"
                            :ref="'rel' + tK"
                            class="rel-wrapper active"
                        >
                            <div :class="'pic ' + tech.icon"></div>
                            <div class="rel">
                                <span :class="'icon icon-' + tech.icon"></span>
                                <div class="rel-content">
                                    <div class="rel-title">
                                        {{ tech.relTitle }}
                                    </div>
                                    <p class="rel-text">
                                        {{ tech.relText }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tech-main-m">
                    <ul>
                        <li v-for="(tech, tK) in techs" :key="tK" :name="'' + tK">
                            <div
                                :class="{ 'head-wrapper': true, active: activeName === tK }"
                                @click="handleAccordion(tK)"
                            >
                                <header>
                                    <div class="head">
                                        <img :src="activeName === tK ? tech.srcActiveM : tech.srcM" alt="icon" />
                                        <span class="text">{{ tech.title }}</span>
                                    </div>
                                    <p class="content">{{ tech.content }}</p>
                                </header>
                                <div class="arrow">
                                    <img :src="activeName === tK ? arrowUp : arrowDown" alt="arrow" />
                                </div>
                            </div>
                            <div :class="{ panel: true, active: activeName === tK }">
                                <img :src="tech.picM" alt="bg" />
                                <section class="rel">
                                    <header>
                                        <img :src="tech.relIconM" alt="icon" />
                                        <span>{{ tech.relTitle }}</span>
                                    </header>
                                    <p class="content">{{ tech.relText }}</p>
                                </section>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="office-partner" class="partner">
            <h2 class="partner-title">
                为全球4000+企业客户提供服务
            </h2>
            <div class="partner-content">
                <ul v-for="(partnerRow, rowKey) in partners" :key="rowKey" class="partner-row">
                    <li v-for="(partItem, itemKey) in partnerRow" :key="rowKey + itemKey + '1'" class="partner-item">
                        <img :src="partItem.src" alt="" />
                    </li>
                    <li v-for="(partItem, itemKey) in partnerRow" :key="rowKey + itemKey + '2'" class="partner-item">
                        <img :src="partItem.src" alt="" />
                    </li>
                </ul>
            </div>
        </div>
        <!--  五周年首页 活动悬浮图标start -->
        <div v-if="isMounted" class="activity_pc">
            <div class="swiper">
                <div v-swiper:pcSwiper="swiperOption" class="swiperWrapPC">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <a href="./activity"><img src="../assets/img/partner/banner/activity_pc.png"/></a>
                        </div>
                        <div class="swiper-slide">
                            <a href="./partner"><img src="../assets/img/partner/banner/partner_pc.png"/></a>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination-pc swiper-pagination-bullets"></div>
            </div>
        </div>
        <div v-if="isMounted" class="activity_m">
            <div class="swiper">
                <div v-swiper:mSwiper="swiperOption1" class="swiperWrap_m">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <a href="./activity"><img src="../assets/img/partner/banner/activity_m.png"/></a>
                        </div>
                        <div class="swiper-slide">
                            <a href="./partner"><img src="../assets/img/partner/banner/partner_m.png"/></a>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination-m swiper-pagination-bullets-m"></div>
            </div>
        </div>
        <!--五周年首页 活动悬浮图标end  -->
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import axios from 'axios';
import PartnerActivity from '../components/Banner/PartnerActivity.vue';
import Scene from './_c/scene.vue';
import FlashTalk from '~/components/Banner/FlashTalk.vue';
let vm: any = null;
declare const $: any;
// const window: any = {
//     city: '',
// };
@Component({
    components: {
        Scene,
        FlashTalk,
        PartnerActivity,
    },
    asyncData() {
        const contents = require('../assets/json/home.json');
        const { banners, reports, techs, scenes, sceneThumbs, partners } = contents;
        partners.forEach((p: any) => {
            p.forEach((item: any) => {
                // console.log(item);
                item.src = require(`../assets/img/icons/partner/${item.icon}.png`);
            });
        });
        scenes.forEach((scene: any) => {
            scene.pic = require(`../assets/img/bg/solution/${scene.id}.png`);
            scene.picM = require(`../assets/img/bg/solution/${scene.id}-m.png`);
        });
        techs.forEach((tech: any) => {
            tech.src = require(`../assets/img/icons/rel/${tech.icon}.png`);
            tech.srcActive = require(`../assets/img/icons/rel/${tech.icon}-active.png`);
            tech.srcM = require(`../assets/img/icons/rel/${tech.icon}-m.png`);
            tech.srcActiveM = require(`../assets/img/icons/rel/${tech.icon}-active-m.png`);
            tech.picM = require(`../assets/img/bg/tech/${tech.icon}-m.png`);
            tech.relIconM = require(`../assets/img/icons/tech/${tech.icon}-m.png`);
        });
        // console.log(techs);
        // console.log(contents)
        return {
            banners,
            reports,
            techs,
            scenes,
            sceneThumbs,
            partners,
        };
    },
})
export default class Index extends Vue {
    head() {
        return {
            script: [{ src: 'https://log.zego.im:8998/accessTrace.js' }],
        };
    }
    isMounted = false;
    activeName = 0;
    arrowUp = require('../assets/img/icons/common/arrow-up-m.png');
    arrowDown = require('../assets/img/icons/common/arrow-down-m.png');
    // reportTags = {
    //   event: '活动资讯',
    //   product: '产品动态',
    //   service: '服务公告'
    // }

    private name: string = '44';
    banners = [];

    showReports = [];
    techActive = 0;
    bannerSwiperOption = {
        // loop: true,
        slidesPerView: 'auto',
        // watchSlidesVisibility: true,
        centeredSlides: true,
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            waitForTransition: false,
        },
        // autoplay: false,
        pagination: {
            el: '.banner-swiper-pagination',
            clickable: true,
            // renderBullet: function(index: number, className: string) {
            //     // console.log(this)
            //     return `<div class="${className}"><div class="bar"><div class="active-line"></div></div><div class="abbr">${vm.banners[index].abbreviation}</div></div>`;
            // },
        },
        on: {
            slideChange() {
                // console.log('onSlideChangeEnd', this)
            },
            tap() {
                // console.log('onTap', this)
            },
        },
    };
    swiperOption = {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        useCSS3Transforms: false,
        paginationClickable: true,
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination-pc',
            // dynamicBullets: true,
            clickable: true,
        },
    };
    swiperOption1 = {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        useCSS3Transforms: false,
        paginationClickable: true,
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination-m',
            // dynamicBullets: true,
            clickable: true,
        },
    };
    reportSwiperOptionPC = {
        slidesPerView: 3,
        watchSlidesVisibility: true,
        spaceBetween: 60,
        autoplay: false,
    };
    reportSwiperOption = {
        slidesPerView: 2,
        watchSlidesVisibility: true,
        autoplay: false,
    };

    created() {
        vm = this;
        // eslint-disable-next-line no-undef
        // console.log('cip', window.returnCitySN.cip + ',' + window.returnCitySN.cname);
    }

    mounted() {
        this.animate();
        this.getReports();
        this.isMounted = true;
    }

    async getReports() {
        // let infoShow = false;
        // try {
        //     const { data } = await axios.get('https://storage.zego.im/official/info.json');
        //     // console.log('infoShow', data);
        //     infoShow = data.info;
        // } catch (err) {
        //     console.log('err: ', err);
        //     infoShow = false;
        // }
        // @ts-ignore
        // console.log('city11', window.city, infoShow);
        // FIXME: 临时删除即构信息平台banner
        // @ts-ignore
        // if (infoShow && window.city && window.city.indexOf('深圳') > -1) {
        //     const info = {
        //         title: ['即构信息平台'],
        //         mTitle: ['即构信息平台'],
        //         desc: [''],
        //         abbreviation: '稳定高质的实时音视频云服务',
        //         id: 'info',
        //         href: 'https://shop.zego.im/',
        //         hrefText: '了解更多',
        //     };
        //     // @ts-ignore
        //     this.banners.push(info);
        // }
        try {
            const { data } = await axios.get('https://storage.zego.im/official/home.json');
            const { reports } = data;
            // const s = JSON.parse(data);
            // console.log('jsonS', reports);
            this.showReports = reports;
        } catch (err) {
            console.log('err: ', err);
            this.showReports = vm.reports;
        }
    }

    toSolution(banner: any) {
        console.log('toSolution', banner);
        if (banner.id === 'financial') {
            window.open('https://www.zego.im/html/solution/finance-solution.html');
        }
    }

    handleTech(techKey: number) {
        this.techActive = techKey;
        this.animate();
    }

    animate() {
        this.$nextTick(() => {
            vm.techs.forEach((tech: any, key: number) => {
                // const rel: HTMLElement = this.$refs['rel' + key] as HTMLElement
                const rel = document.getElementById('rel' + key) as HTMLElement;
                tech.transform = 50 + (key - this.techActive) * 5;
                let transform;
                if (this.techActive === key) {
                    transform = `transform: translateY(-${tech.transform}%);opacity: 1`;
                } else {
                    transform = `transform: translateY(-${tech.transform}%)`;
                }
                rel.setAttribute('style', transform);
            });
        });
        // $('.banner-swiper.swiper-container').mouseenter(function() {
        //     console.log('mouseenter');
        //     vm.bannerSwiper.autoplay.stop();
        // });
        // $('.banner-swiper.swiper-container').mouseleave(function() {
        //     console.log('mouseleave');
        //     vm.bannerSwiper.autoplay.start();
        // });
    }

    handleAccordion(tK: number) {
        console.log('tk', tK);
        if (this.activeName === tK) {
            this.activeName = -1;
        } else {
            this.activeName = tK;
        }
    }
}
</script>

<style lang="scss">
@import '../assets/css/index-banner.scss';

.index-container {
    background-color: #fafafb;
}

.index-banner {
    margin-top: -68px;
    height: 500px;
}

.banner {
    position: relative;
    display: -webkit-box;
    display: flex;
    margin-top: 68px;
    width: 100%;
    height: 100%;
    /* background-color: rgba(255, 255, 255, 0.14); */
    box-sizing: border-box;

    .banner-swiper {
        width: 100%;
        height: 100%;
    }
}

.swiper-slide {
    &.world {
        background: url(../assets/img/bg/world.png) center no-repeat;
        height: 100%;
        background-size: cover;
    }

    &.financial {
        background: url(../assets/img/bg/financial.png) center no-repeat;
        height: 100%;
        background-size: cover;
    }

    &.talkline {
        background: url(../assets/img/bg/talkline.png) center no-repeat;
        height: 100%;
        background-size: cover;
    }

    &.info {
        background: url(../assets/img/bg/info.jpg) center no-repeat;
        height: 100%;
        background-size: cover;
    }

    &.flashtalk {
        background: url(../assets/img/bg/fiveYearActivity.png) center no-repeat;
        height: 100%;
        background-size: auto 100%;
        background-color: #040111;
    }
    &.partnerActivity {
        background: url(../assets/img/bg/partnerBanner_pc2.png) center no-repeat;
        height: 100%;
        background-size: auto 100%;
        background-color: rgba(4, 1, 17, 1);
    }
    &.telecommuting {
        background: url(../assets/img/bg/telecommuting.jpg) center no-repeat;
        height: 100%;
        background-size: cover;
    }
    &.xiaoyibang {
        background-color: #000058;
        height: 100%;
        background-size: cover;
        .bg-img {
            //   float: right;
            position: absolute;
            right: 0;
            top: 40px;
            width: 729px;
            height: 461px;
            background: url(../assets/img/bg/xiaoyibang.png);
            background-size: 100% 100%;
        }
    }
}

.slide-item {
    width: 100%;
    height: 100%;
}

.main-banner {
    // float: right;
    // display: flex;
    // flex-direction: column;
    text-align: left;
    padding-top: 153px;
    color: #fff;
    font-family: PingFangSC-Light;

    h1 {
        font-size: 38px;
        font-weight: 300;
        line-height: 50px;
        &.b-title-pc {
            display: block;
        }
        &.b-title-m {
            display: none;
        }
    }

    .desc {
        margin-top: 22px;
        width: 460px;
        line-height: 25px;
        // float: right;
    }

    .word {
        width: 534px;
        height: 140px;
        background: url(../assets/img/bg/talkline-word.png) center no-repeat;
        background-size: cover;
    }

    .apply-try {
        display: inline-block;
        margin-top: 32px;
        width: 124px;
        height: 42px;
        line-height: 40px;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        color: #fefefe;
        border-radius: 4px;
        border: 1px solid #f5f8ff;
        cursor: pointer;

        &:hover {
            background: #fff;
            color: #0044ff;
        }
        &.now {
            margin-top: 53px;
        }
    }
}

.telecommuting {
    .main-banner {
        text-align: center;
        padding-top: 134px;
        h1 {
            line-height: 64px;
            font-weight: 600;
            font-size: 44px;
            font-family: 'PingFang SC';
        }
        .icon {
            margin: 0 auto 18px;
            width: 194px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            font-size: 20px;
            background: linear-gradient(-82deg, rgba(249, 97, 22, 1), rgba(255, 59, 54, 1), rgba(240, 42, 38, 1));
            border-radius: 8px;
            padding: 0 7px;
            .icon0 {
                width: 24px;
                height: 24px;
                background: url(../assets/img/bg/tel-pc.png) center no-repeat;
                background-size: 100%;
            }
        }
        .btns {
            font-size: 0;
            margin-top: 38px;
            display: flex;
            justify-content: center;
        }
        .apply-try.now {
            margin-top: 0;
            width: 144px;
            height: 48px;
            line-height: 46px;
            &:nth-child(1) {
                font-size: 18px;
            }
            &:nth-child(2) {
                line-height: 48px;
                // background-color: #fff;
                // color: #333;
                display: inline-block;
                background: url(../assets/img/bg/tel-down.png) center no-repeat;
                background-size: cover;
                margin-left: 32px;
                opacity: 0.9;
                &:hover {
                    opacity: 1;
                    // background: url(../assets/img/bg/tel-down-hover.png) center no-repeat;
                    // background-size: cover;
                    // border: none;
                }
            }
        }
    }
}
.xiaoyibang {
    .main-banner {
        text-align: left;
        padding-top: 134px;
        h1 {
            line-height: 64px;
            font-weight: 600;
            font-size: 38px;
            font-family: 'PingFang SC';
        }
        .icon {
            margin-bottom: 18px;
            width: 194px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            font-size: 20px;
            background: linear-gradient(-82deg, rgba(249, 97, 22, 1), rgba(255, 59, 54, 1), rgba(240, 42, 38, 1));
            border-radius: 8px;
            padding: 0 7px;
            .icon0 {
                width: 24px;
                height: 24px;
                background: url(../assets/img/bg/tel-pc.png) center no-repeat;
                background-size: 100%;
            }
        }
        .btns {
            font-size: 0;
            margin-top: 38px;
            display: flex;
            justify-content: flex-start;
        }
        .apply-try.now {
            margin-top: 0;
            width: 124px;
            height: 42px;
            line-height: 40px;
            &:nth-child(1) {
                font-size: 18px;
            }
            &:nth-child(2) {
                line-height: 48px;
                // background-color: #fff;
                // color: #333;
                display: inline-block;
                background: url(../assets/img/bg/tel-down.png) center no-repeat;
                background-size: cover;
                margin-left: 32px;
                opacity: 0.9;
                &:hover {
                    opacity: 1;
                    // background: url(../assets/img/bg/tel-down-hover.png) center no-repeat;
                    // background-size: cover;
                    // border: none;
                }
            }
        }
    }
}

// .ai-banner {
//   width: 100%;
//   height: 100%;
//   .ai-edu-word {
//     background: url(../assets/img/bg/ai_word.png) 50% no-repeat;
//     background-size: cover;
//   }
// }

// .banner-swiper-pagination {
//     height: 70px;
//     display: flex;

//     /deep/ .swiper-pagination-bullet {
//         // width: 400px;
//         flex: 1;
//         height: 100%;
//         border-radius: 0;
//         opacity: 1;
//         background: rgba(255, 255, 255, 0.14);
//         margin: 0;
//         padding: 21px 60px 0;
//         color: #fff;
//         cursor: pointer;
//         .bar {
//             width: 280px;
//             height: 2px;
//             background-color: rgba(245, 248, 255, 0.3);
//             margin-bottom: 16px;

//             .active-line {
//                 width: 0;
//                 height: 100%;
//                 background-color: #fff;
//             }
//         }

//         .abbr {
//             font-size: 14px;
//             color: #fff;
//         }

//         &.swiper-pagination-bullet-active {
//             background: rgba(255, 255, 255, 0.09);

//             .bar {
//                 .active-line {
//                     width: 100%;
//                     transition: width 8s;
//                 }
//             }
//         }
//     }
// }

.index-report {
    height: 160px;
    background-color: #fff;

    .report-content {
        display: flex;
        // justify-content: space-between;
        // .swiper-wrapper {
        //   justify-content: space-between;
        // }
        section {
            width: 360px;

            &:not(:last-child) {
                margin-right: 60px;
            }
        }

        .report-title {
            margin-top: 31px;
            font-size: 18px;
            font-weight: 400;
            color: #222;
            // line-height: 27px;
            line-height: 1.5;
            min-height: 54px;

            a {
                &:hover {
                    color: #0044ff;
                }
            }
        }

        .report-desc {
            margin-top: 20px;
            font-size: 0;

            .time {
                display: inline-block;
                margin-left: 14px;
                font-size: 14px;
                color: #999;
            }
        }
    }
}

.report-container {
    display: none;
}

.solu-swiper-pagination {
    bottom: 0 !important;
    top: 0px;
    display: flex;
    justify-content: space-between;
    padding: 0 63px;
    height: 94px;

    /deep/ .swiper-pagination-bullet {
        position: relative;
        width: 110px;
        height: 100%;
        margin: 0;
        border-radius: 0;
        background-color: transparent;
        text-align: center;

        .icon {
            display: block;
            width: 40px;
            height: 40px;
            margin: 0 auto 14px;

            &.live {
                background: url(../assets/img/icons/solution/live.png);
                background-size: 100%;
            }

            &.edu {
                background: url(../assets/img/icons/solution/edu.png);
                background-size: 100%;
            }

            &.meeting {
                background: url(../assets/img/icons/solution/meeting.png);
                background-size: 100%;
            }

            &.dr {
                background: url(../assets/img/icons/solution/dr.png);
                background-size: 100%;
            }

            &.game {
                background: url(../assets/img/icons/solution/game.png);
                background-size: 100%;
            }
            &.social {
                background: url(../assets/img/icons/solution/social.png);
                background-size: 100%;
            }
        }

        .title {
            font-size: 14px;
            color: #8f8f8f;
            vertical-align: top;
        }

        &.swiper-pagination-bullet-active {
            &::after {
                position: absolute;
                display: inline-block;
                content: '';
                width: 100%;
                height: 3px;
                left: 50%;
                transform: translateX(-50%);
                bottom: -3px;
                z-index: 11;
                background-color: #0044ff;
            }

            .title {
                color: #0044ff;
            }

            .icon {
                &.live {
                    background: url(../assets/img/icons/solution/live-active.png);
                    background-size: 100%;
                }

                &.edu {
                    background: url(../assets/img/icons/solution/edu-active.png);
                    background-size: 100%;
                }

                &.meeting {
                    background: url(../assets/img/icons/solution/meeting-active.png);
                    background-size: 100%;
                }

                &.dr {
                    background: url(../assets/img/icons/solution/dr-active.png);
                    background-size: 100%;
                }

                &.game {
                    background: url(../assets/img/icons/solution/game-active.png);
                    background-size: 100%;
                }
                &.social {
                    background: url(../assets/img/icons/solution/social-active.png);
                    background-size: 100%;
                }
            }
        }
    }
}

.technology {
    background-color: #fff;

    .tech-advantage {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 252px;
        color: #fff;
        background: linear-gradient(135deg, rgba(0, 96, 254, 1), rgba(0, 78, 232, 1));

        .bg {
            display: block;
            position: absolute;
            pointer-events: none;
            z-index: 0;
            left: 0;
            right: 0;
            bottom: 0;
            height: 147px;
            background-size: cover;
            background: url(../assets/img/bg/advantage.png);
            background-repeat: no-repeat;
            background-position: center;
        }

        // background-attachment: fixed;
        .container {
            height: 100%;
            position: absolute;
            left: 50%;
            transform: translate(-50%);
        }

        .advantage-abbr {
            display: inline-block;
            font-size: 34px;
            margin-top: 91px;
            line-height: 1;

            span {
                display: inline-block;
                line-height: 1;
            }

            p {
                margin-top: 27px;
                font-size: 14px;
                z-index: 11;

                a {
                    color: #fff;
                    border-bottom: 1px solid transparent;

                    &:hover {
                        border-color: #fff;
                    }
                }
            }
        }

        .advantage-detail {
            display: table;
            margin-top: 53px;
            float: right;

            .row {
                display: table-row;
                height: 90px;
            }

            p {
                display: table-cell;
                width: 300px;
                color: rgba(255, 255, 255, 0.8);
            }

            .num {
                display: inline-block;
                font-size: 38px;
                color: #fff;
                margin-bottom: 13px;
            }

            &::after {
                content: '';
                display: block;
                clear: both;
                height: 0;
            }
        }
    }

    .tech-content {
        height: 864px;
        text-align: center;
        padding-top: 80px;

        .tech-text {
            font-size: 34px;
            color: #222;
        }

        .tech-text-m {
            display: none;
        }
    }
}

.tech-main {
    display: -webkit-box;
    display: flex;
    margin-top: 69px;
}

.tech-main-m {
    display: none;
}

.tech-nav {
    width: 500px;
    padding-right: 26px;
    box-sizing: border-box;
    text-align: left;

    .nav-item {
        width: 460px;
        height: 150px;
        padding: 0 44px 0 37px;
        position: relative;

        article {
            padding: 30px 0 31px 0;
        }

        img {
            display: inline-block;
            width: 36px;
            height: 36px;
            margin-right: 19px;
            vertical-align: middle;
        }

        .nav-title {
            font-size: 18px;
            color: #666;
            line-height: 36px;
            vertical-align: middle;
        }

        .nav-content {
            margin-top: 6px;
            font-size: 14px;
            color: #999;
            line-height: 24px;
            word-break: break-word;
        }

        &.active,
        &:hover {
            box-shadow: 0px 5px 18px 0px rgba(0, 0, 0, 0.1);
            border-radius: 4px;

            .nav-title {
                color: #0044ff;
            }

            .nav-content {
                color: #666;
            }

            &:after {
                position: absolute;
                z-index: 1;
                top: 50%;
                // transform: translate(-10px, -50%) rotate(45deg);
                content: '';
                width: 0;
                height: 0;
                border: 10px solid transparent;
                border-left-color: #fff;
                border-bottom-color: #fff;
                // width: 20px;
                // height: 20px;
                // background-color: #fff;
                left: calc(100% + 14px);
                transform: translate(-24px, -50%) rotate(-135deg);
                border-width: 10px;
                box-shadow: -8px 2px 5px 0 rgba(0, 0, 0, 0.03);
            }
        }

        &:nth-of-type(3) {
            height: 160px;
        }
    }
}

.tech-relation {
    position: relative;
    width: 700px;

    .rel-wrapper {
        position: absolute;
        top: 50%;
        opacity: 0;
        box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.08);
        border-radius: 4px;
        -webkit-transition: opacity 0.6s, -webkit-transform 0.6s;
        transition: opacity 0.6s, -webkit-transform 0.6s;
        transition: opacity 0.6s, transform 0.6s;
        transition: opacity 0.6s, transform 0.6s, -webkit-transform 0.6s;
    }

    .pic {
        height: 406px;

        &.engine {
            background: url(../assets/img/bg/tech/engine.png);
            background-size: 100%;
        }

        &.trans {
            background: url(../assets/img/bg/tech/trans.png);
            background-size: 100%;
        }

        &.dev {
            background: url(../assets/img/bg/tech/dev.png);
            background-size: 100%;
        }

        &.adapt {
            background: url(../assets/img/bg/tech/adapt.png);
            background-size: 100%;
        }
    }

    .rel {
        box-sizing: border-box;
        height: 194px;
        padding: 45px 52px;
        display: flex;
        align-items: center;
        background-color: #fff;

        .icon {
            display: inline-block;
            width: 72px;
            height: 72px;
            margin-right: 23px;

            &.icon-engine {
                background: url(../assets/img/icons/tech/engine.png);
                background-size: 100%;
            }

            &.icon-adapt {
                background: url(../assets/img/icons/tech/adapt.png);
                background-size: 100%;
            }

            &.icon-dev {
                background: url(../assets/img/icons/tech/dev.png);
                background-size: 100%;
            }

            &.icon-trans {
                background: url(../assets/img/icons/tech/trans.png);
                background-size: 100%;
            }
        }

        .rel-content {
            position: relative;
            -webkit-box-flex: 1;
            flex: 1;
            text-align: left;
            padding-left: 9px;

            .rel-title {
                font-size: 18px;
                color: #222;
                margin-bottom: 14px;
            }

            .rel-text {
                line-height: 24px;
                background-color: #f5f5f7;
                border-radius: 4px;
                color: #666;
                padding: 11px 22px;
            }

            &:before {
                position: absolute;
                top: 50%;
                left: -9px;
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
                content: '';
                width: 0;
                height: 0;
                border: 9px solid transparent;
                border-right-color: #f5f5f7;
            }
        }
    }
}

$item-space: 54px;
$item-width: 200px;
$item-num: 13;
$start-position: 0px;
$end-position: 0px - $item-num * $item-width - $item-num * $item-space;

@keyframes move {
    0% {
        transform: translateX($start-position);
    }
    100% {
        transform: translateX($end-position);
    }
}

.partner {
    position: relative;
    height: 678px;
    padding-top: 80px;

    .partner-title {
        margin-bottom: 70px;
        font-size: 34px;
        color: #222;
        text-align: center;
    }

    .partner-content {
        position: absolute;
        width: 100%;
        left: 0;
        right: 0;
        overflow: hidden;

        .partner-row {
            height: 86px;
            margin-bottom: 24px;
            width: 100%;
            list-style-type: none;
            white-space: nowrap;
            -webkit-animation: move 150s linear infinite;
            animation: move 150s linear infinite;
            font-size: 0;

            .partner-item {
                display: inline-block;
                width: 200px;
                height: 86px;
                margin-right: 54px;
                overflow: hidden;
                box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);

                img {
                    max-width: 100%;
                    height: 100%;
                    vertical-align: middle;
                }
            }

            &:nth-of-type(2n + 1) {
                padding-left: 80px;
            }
        }
    }
}

.banner {
    .banner-swiper-pagination {
        position: absolute;
        left: 50%;
        width: 1200px;
        transform: translateX(-50%);
        bottom: 20px;
        text-align: center;
        z-index: 10;

        /deep/ .swiper-pagination-bullet {
            background: #fff;
            cursor: pointer;
        }
    }

    .banner-swiper-pagination-m {
        display: none;
    }
}

.tag {
    display: inline-block;
    width: 64px;
    height: 24px;
    line-height: 2;
    text-align: center;
    border-right: 2px;
    font-size: 12px;
    border-radius: 2px;

    &.tag-orange {
        background-color: rgba(255, 128, 3, 0.12);
        color: #ff7700;
    }

    &.tag-blue {
        background-color: rgba(2, 70, 249, 0.12);
        color: #0044ff;
    }

    &.tag-purple {
        background-color: rgba(92, 71, 231, 0.12);
        color: #5c47d7;
    }
}

@media screen and (max-width: 1000px) {
    $item-space: 0.54rem;
    $item-width: 2rem;
    $item-num: 13;
    $start-position: 0;
    $end-position: 0 - $item-num * $item-width - $item-num * $item-space;

    @keyframes move {
        0% {
            transform: translateX($start-position);
        }
        100% {
            transform: translateX($end-position);
        }
    }
    * {
        font-weight: 500;
    }
    .container {
        max-width: 6.8rem;
        margin: auto;
        padding: 0;
    }
    .banner {
        margin-top: 1rem;

        .banner-swiper-pagination {
            bottom: 0.6rem;
            width: 100%;
        }
    }
    .banner-swiper-pagination {
        text-align: center;
        height: auto;
        display: block;

        /deep/ .swiper-pagination-bullet {
            width: 0.4rem;
            height: 0.04rem;
            border-radius: 0;
            margin: 0;
            margin-right: 0.1rem;
            padding: 0;
            color: #fff;
            background: rgba(255, 255, 255, 0.3);

            .bar {
                display: none;
            }

            .abbr {
                display: none;
            }

            &.swiper-pagination-bullet-active {
                background: rgba(255, 255, 255, 1);
            }
        }
    }
    .swiper-slide {
        &.world {
            .slide-item {
                height: 100%;
                background: url(../assets/img/bg/world-m.png) center no-repeat;
                background-size: cover;
            }
        }
        &.financial {
            .slide-item {
                height: 100%;
                background: url(../assets/img/bg/financial-m.png) center no-repeat;
                background-size: cover;
            }
        }
        &.talkline {
            .slide-item {
                height: 100%;
                background: url(../assets/img/bg/talkline-m.png) center no-repeat;
                background-size: cover;
            }
        }
        &.info {
            .slide-item {
                height: 100%;
                background: url(../assets/img/bg/info-m.jpg) center no-repeat;
                background-size: cover;
            }
        }
        &.telecommuting {
            .slide-item {
                height: 100%;
                background: url(../assets/img/bg/telecommuting-m.png) center no-repeat;
                background-size: cover;
            }
        }
        &.flashtalk {
            background: url(../assets/img/bg/fiveYearActivity-m.png) center no-repeat;
            height: 100%;
            background-size: cover;
        }
        &.partnerActivity {
            background: url(../assets/img/bg/partnerBanner_m2.png) center no-repeat;
            height: 100%;
            background-size: auto 100%;
            background-color: rgba(4, 1, 17, 1);
        }
        &.xiaoyibang {
            .slide-item {
                height: 100%;
                background: #000058;
                .bg-img {
                    //   float: right;
                    position: absolute;
                    right: 0;
                    top: 1.78rem;
                    width: 5.6rem;
                    height: 4.1rem;
                    background: url(../assets/img/bg/xiaoyibang-m.png) center no-repeat;
                    background-size: 100% 100%;
                }
            }
        }
    }
    .main-banner {
        // float: right;
        // display: flex;
        // flex-direction: column;
        text-align: left;
        padding-top: 1.73rem;
        color: #fff;
        font-family: PingFangSC-Light;

        h1 {
            font-size: 0.48rem;
            font-weight: 400;
            line-height: 0.72rem;
            &.b-title-pc {
                display: none;
            }
            &.b-title-m {
                display: block;
            }
        }

        .desc {
            display: none;
        }

        .word {
            width: 4.17rem;
            height: 2.13rem;
            background: url(../assets/img/bg/talkline-word-m.png) center no-repeat;
            background-size: cover;
        }
        .apply-try {
            display: inline-block;
            margin-top: 0.43rem;
            width: 1.44rem;
            height: 0.64rem;
            line-height: 0.64rem;
            text-align: center;
            font-size: 0.24rem;
            font-weight: 400;
            color: #fff;
            border-radius: 0.04rem;
            border: 0.02rem solid #fff;
            cursor: pointer;

            &:hover {
                background: #fff;
                color: #0044ff;
            }
            &.now {
                margin-top: 0.43rem;
            }
        }
    }
    .telecommuting {
        .main-banner {
            text-align: left;
            padding-top: 1.45rem;
            h1 {
                line-height: 0.72rem;
                font-weight: 400;
                font-size: 0.48rem;
                font-family: 'PingFang SC';
            }
            .icon {
                margin: 0 0 0.21rem;
                width: 2.56rem;
                height: 0.56rem;
                display: flex;
                align-items: center;
                justify-content: space-around;
                font-size: 0.3rem;
                background: linear-gradient(-82deg, rgba(249, 97, 22, 1), rgba(255, 59, 54, 1), rgba(240, 42, 38, 1));
                border-radius: 0.08rem;
                // padding: 0 7px;
                .icon0 {
                    width: 0.32rem;
                    height: 0.33rem;
                    background: url(../assets/img/bg/tel-m.png) center no-repeat;
                    background-size: 100%;
                }
                // .icon2 {
                //     display: none;
                // }
            }
            .btns {
                font-size: 0;
                margin-top: 0.4rem;
                justify-content: flex-start;
            }
            .apply-try.now {
                margin-top: 0;
                width: 1.44rem;
                height: 0.64rem;
                line-height: 0.62rem;
                &:nth-child(1) {
                    font-size: 0.24rem;
                }
                &:nth-child(2) {
                    line-height: 0.64rem;
                    // background-color: #fff;
                    // color: #333;
                    background: url(../assets/img/bg/tel-down-m.png) center no-repeat;
                    background-size: cover;
                    margin-left: 0.36rem;
                }
            }
        }
    }
    .xiaoyibang {
        .main-banner {
            text-align: left;
            padding-top: 1.45rem;
            h1 {
                position: relative;
                line-height: 0.72rem;
                font-weight: 400;
                font-size: 0.48rem;
                font-family: 'PingFang SC';
            }
            .icon {
                position: relative;
                margin: 0 0 0.21rem;
                width: 2.56rem;
                height: 0.56rem;
                display: flex;
                align-items: center;
                justify-content: space-around;
                font-size: 0.3rem;
                background: linear-gradient(-82deg, rgba(249, 97, 22, 1), rgba(255, 59, 54, 1), rgba(240, 42, 38, 1));
                border-radius: 0.08rem;
                // padding: 0 7px;
                .icon0 {
                    width: 0.32rem;
                    height: 0.33rem;
                    background: url(../assets/img/bg/tel-m.png) center no-repeat;
                    background-size: 100%;
                }
                // .icon2 {
                //     display: none;
                // }
            }
            .btns {
                position: relative;
                font-size: 0;
                margin-top: 0.4rem;
                justify-content: flex-start;
            }
            .apply-try.now {
                margin-top: 0;
                width: 1.44rem;
                height: 0.64rem;
                line-height: 0.62rem;
                &:nth-child(1) {
                    font-size: 0.24rem;
                }
                &:nth-child(2) {
                    line-height: 0.64rem;
                    // background-color: #fff;
                    // color: #333;
                    background: url(../assets/img/bg/tel-down-m.png) center no-repeat;
                    background-size: cover;
                    margin-left: 0.36rem;
                }
            }
        }
    }
    .index-banner {
        margin-top: -1rem;
        height: 5.88rem;
    }
    .index-report {
        display: none;
    }
    .report-container {
        margin-top: -0.3rem;
        z-index: 5;
        display: block;
        max-width: 6.9rem;
        height: 2rem;

        .report-swiper {
            height: 100%;
            background: #fff;
            box-shadow: 0 0.03rem 0.16rem 0 rgba(0, 0, 0, 0.12);
            border-radius: 0.08rem;
        }

        .swiper-wrapper {
            padding: 0 0.1rem;
            height: 100%;

            .swiper-slide {
                min-width: 3.34rem;
                padding: 0.3rem;
            }
        }

        .report-title {
            font-size: 0.28rem;
            line-height: 0.42rem;
            color: #222;
        }

        .report-desc {
            margin-top: 0.21rem;

            .tag {
                display: inline-block;
                // width: 0.76rem;
                // height: 0.28rem;
                width: auto;
                height: auto;
                font-size: 0.14rem;
                white-space: nowrap;
                padding: 0.07rem 0.1rem;
                line-height: 1;
                box-sizing: content-box;
            }

            .time {
                font-size: 0.2rem;
                color: #999;
            }
        }

        .ellipsis {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box; //作为弹性伸缩盒子模型显示。
            -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
            -webkit-line-clamp: 2; //显示的行
        }
    }
    .solu-swiper-pagination {
        bottom: 0 !important;
        top: 0px;
        display: flex;
        flex-wrap: nowrap;
        // justify-content: space-between;
        padding: 0 0.3rem;
        min-width: 6rem;
        overflow: hidden;
        // width: 13rem;
        height: 0.8rem;

        /deep/ .swiper-pagination-bullet {
            position: relative;
            width: 1.12rem;
            height: 100%;
            margin: 0;
            border-radius: 0;
            background-color: transparent;
            margin-right: 0.35rem;
            // text-align: center;
            display: flex;

            .icon {
                display: inline-block;
                width: 0.4rem;
                height: 0.4rem;
                margin-right: 0.13rem;

                &.live {
                    background: url(../assets/img/icons/solution/live.png);
                    background-size: 100%;
                }

                &.edu {
                    background: url(../assets/img/icons/solution/edu.png);
                    background-size: 100%;
                }

                &.meeting {
                    background: url(../assets/img/icons/solution/meeting.png);
                    background-size: 100%;
                }

                &.dr {
                    background: url(../assets/img/icons/solution/dr.png);
                    background-size: 100%;
                }

                &.game {
                    background: url(../assets/img/icons/solution/game.png);
                    background-size: 100%;
                }
                &.social {
                    background: url(../assets/img/icons/solution/social.png);
                    background-size: 100%;
                }
            }

            .title {
                font-size: 0.3rem;
                color: #666;
                width: 0.6rem;
                vertical-align: top;
                white-space: nowrap;
            }

            &.swiper-pagination-bullet-active {
                &::after {
                    position: absolute;
                    display: inline-block;
                    content: '';
                    width: 100%;
                    height: 3px;
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: -3px;
                    z-index: 11;
                    background-color: #0044ff;
                }

                .title {
                    color: #0044ff;
                }

                .icon {
                    &.live {
                        background: url(../assets/img/icons/solution/live-active.png);
                        background-size: 100%;
                    }

                    &.edu {
                        background: url(../assets/img/icons/solution/edu-active.png);
                        background-size: 100%;
                    }

                    &.meeting {
                        background: url(../assets/img/icons/solution/meeting-active.png);
                        background-size: 100%;
                    }

                    &.dr {
                        background: url(../assets/img/icons/solution/dr-active.png);
                        background-size: 100%;
                    }

                    &.game {
                        background: url(../assets/img/icons/solution/game-active.png);
                        background-size: 100%;
                    }

                    &.social {
                        background: url(../assets/img/icons/solution/social-active.png);
                        background-size: 100%;
                    }
                }
            }
        }
    }

    .technology {
        .tech-advantage {
            display: inline-block;
            width: 100%;
            height: 5.34rem;
            color: #fff;
            background-size: cover;
            background: linear-gradient(135deg, rgba(0, 96, 254, 1), rgba(0, 78, 232, 1));

            .bg {
                height: 1.46rem;
                background: url(../assets/img/bg/advantage-m.png);
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            }

            // background-attachment: fixed;
            .container {
                height: 100%;
            }

            .advantage-abbr {
                display: block;
                font-size: 0.4rem;
                margin: 0.8rem auto 0.49rem;
                text-align: center;

                p {
                    display: none;
                }
            }

            .advantage-detail {
                display: table;
                margin-top: 0;
                float: right;

                .row {
                    display: table-row;
                    height: 1.7rem;
                }

                p {
                    display: table-cell;
                    width: 3.36rem;
                    font-size: 0.24rem;
                    padding-top: 0.34rem;
                    padding-left: 0.5rem;
                    color: rgba(255, 255, 255, 0.8);
                    font-weight: 600;
                }

                .num {
                    display: inline-block;
                    font-size: 0.6rem;
                    color: #fff;
                    margin-bottom: 0.22rem;
                    font-weight: 400;
                }

                &::after {
                    content: '';
                    display: block;
                    clear: both;
                    height: 0;
                }
            }
        }

        .tech-content {
            // height: 19rem;
            height: auto;
            text-align: center;
            padding: 0.8rem 0 0.6rem;

            .tech-text {
                display: none;
            }

            .tech-text-m {
                display: block;
                font-size: 0.39rem;
                color: #333;
                line-height: 0.6rem;
            }
        }
    }
    .tech-main {
        display: none;
    }
    .tech-main-m {
        display: block;
        margin-top: 0.5rem;

        li {
            margin-bottom: 0.38rem;
            box-shadow: 0 0.05rem 0.18rem 0 rgba(0, 0, 0, 0.1);
            border-radius: 0px 0px 0.04rem 0.04rem;
        }

        .head-wrapper {
            display: flex;
            align-items: center;
            border: 1px solid rgba(219, 224, 229, 1);
            // border-bottom-color: transparent;
            border-radius: 4px 4px 4px 4px;

            &.active {
                border-radius: 4px 4px 0px 0px;
            }

            header {
                flex: 1;
                display: flex;
                flex-direction: column;
                padding: 0.3rem 0 0.27rem 0.4rem;
            }

            .head {
                display: flex;

                img {
                    display: inline-block;
                    width: 0.56rem;
                    height: 0.56rem;
                    margin-right: 0.15rem;
                }

                .text {
                    font-size: 0.3rem;
                    color: #222;
                    line-height: 0.56rem;
                    font-weight: 400;
                }
            }

            .content {
                margin-top: 0.14rem;
                font-size: 0.24rem;
                line-height: 0.36rem;
                text-align: left;
            }
        }

        .arrow {
            width: 1.06rem;
            cursor: pointer;

            img {
                width: 0.4rem;
                height: 0.4rem;
            }
        }

        .panel {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease-out;
            border-radius: 0 0 4px 4px;
            border-left: 1px solid rgba(219, 224, 229, 1);
            border-left: 1px solid rgba(219, 224, 229, 1);

            img {
                width: auto;
                height: auto;
                max-width: 100%;
                max-height: 100%;
            }

            .rel {
                display: flex;
                flex-direction: column;
                padding: 0.31rem 0.4rem;
                background-color: #fff;
                box-shadow: 0 0.05rem 0.18rem 0 rgba(0, 0, 0, 0.1);
                border-radius: 0 0 0.04rem 0.04rem;

                header {
                    display: flex;
                    align-items: center;
                }

                img {
                    width: 0.54rem;
                    height: 0.54rem;
                    margin-right: 0.25rem;
                }

                .content {
                    margin-top: 0.16rem;
                    font-size: 0.24rem;
                    color: #666;
                    line-height: 1.5;
                    text-align: left;
                }
            }

            &.active {
                max-height: 6.4rem;
                border: 1px solid rgba(219, 224, 229, 1);
                border-top: 0;
            }
        }
    }
    .partner {
        position: relative;
        height: 6.53rem;
        padding-top: 0.8rem;

        .partner-title {
            margin-bottom: 0.59rem;
            font-size: 0.4rem;
            color: #333;
            text-align: center;
        }

        .partner-content {
            position: absolute;
            width: 100%;
            left: 0;
            right: 0;
            overflow: hidden;

            .partner-row {
                height: 0.86rem;
                margin-bottom: 0.24rem;
                width: 100%;
                list-style-type: none;
                white-space: nowrap;
                -webkit-animation: move 70s infinite linear;
                animation: move 70s infinite linear;
                font-size: 0;

                .partner-item {
                    display: inline-block;
                    width: 2rem;
                    height: 0.86rem;
                    margin-right: 0.54rem;
                    overflow: hidden;
                    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
                    /* margin-right: 54px; */
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                &:nth-of-type(2n + 1) {
                    padding-left: 0.8rem;
                }
            }
        }
    }
}
</style>

<style lang="scss" scoped>
.activity_pc {
    display: block;
    width: 118px;
    height: 90px;
    position: fixed;
    bottom: 95px;
    right: 79px;
    z-index: 500;
    img {
        width: 118px;
        height: 90px;
    }
    .swiper {
        /deep/ {
            .swiper-pagination-pc {
                margin-left: 48px;
                .swiper-pagination-bullet {
                    width: 6px;
                    height: 6px;
                    margin-right: 10px;
                    border-radius: 50%;
                    background: rgba(189, 211, 255, 1);
                    opacity: 1;
                }
                .swiper-pagination-bullet-active {
                    background: rgba(59, 111, 255, 1);
                }
            }
        }
    }
}
.activity_m {
    display: none;
}
@media screen and (max-width: 1000px) {
    .activity_pc {
        display: none;
    }
    .activity_m {
        // 移动端活动悬浮图标
        display: block;
        position: fixed;
        width: 1.7rem;
        height: 1.3rem;
        bottom: 1.2rem;
        right: 0.59rem;
        z-index: 500;
        img {
            width: 1.7rem;
            height: 1.3rem;
        }
        .swiper {
            /deep/ {
                .swiper-pagination-m {
                    margin-left: 0.7rem;
                    .swiper-pagination-bullet {
                        width: 0.1rem;
                        height: 0.1rem;
                        margin-right: 0.1rem;
                        border-radius: 50%;
                        background: rgba(189, 211, 255, 1);
                        opacity: 1;
                    }
                    .swiper-pagination-bullet-active {
                        background: rgba(59, 111, 255, 1);
                    }
                }
            }
        }
    }
}
</style>
