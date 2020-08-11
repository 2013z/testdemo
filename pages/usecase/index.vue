<template>
    <div class="case-container">
        <div class="case-banner">
            <section class="container banner">
                <div class="main-banner content-box">
                    <h1>
                        客户成功案例
                    </h1>
                    <p class="desc">
                        即构为4000+企业提供音视频通信能力
                    </p>
                    <a class="apply-try" href="https://console.zego.im/acount/register" target="_blank">
                        加入他们
                    </a>
                </div>
            </section>
        </div>
        <div class="case-content">
            <section class="container case-main content-box">
                <div class="industry-wrapper">
                    <ul class="industry">
                        <li
                            v-for="(industry, iK) in industries"
                            :key="iK"
                            :class="{ 'industry-item': true, active: industryActive === iK }"
                            @click="selectIndustry(iK, industry)"
                        >
                            <a href="javascript: void(0);">{{ industry }}</a>
                        </li>
                    </ul>
                </div>

                <div class="case-wrapper clearfix">
                    <div v-for="(usecase, uK) in showedUsecases" :key="uK" class="case-item-wrapper">
                        <section class="case-item" @click="toUsercase(usecase)">
                            <span :class="'icon ' + usecase.id"></span>
                            <p class="case-val">{{ usecase.total }}</p>
                            <a href="" class="case-link">了解案例详情</a>
                        </section>
                    </div>
                </div>

                <button v-if="hasMore" class="more" @click="showMoreCase">
                    更多客户案例
                </button>
            </section>
        </div>
        <div class="partner">
            <h2 class="partner-title">
                为全球4000+企业客户提供服务
            </h2>
            <div class="partner-content partner-pc">
                <div v-swiper:partnerSwiper="partnerSwiperOption" class="swiper-partner">
                    <div class="swiper-wrapper">
                        <div v-for="(partnerSlide, rK) in partners" :key="rK" class="swiper-slide">
                            <div v-for="(partnerItem, iK) in partnerSlide" :key="iK" class="partner-item">
                                <img :src="partnerItem.src" :alt="partnerItem.icon" />
                            </div>
                        </div>
                    </div>
                    <div slot="pagination" class="partner-swiper-pagination-pc swiper-pagination-bullets"></div>
                </div>
            </div>
            <div class="partner-content partner-m">
                <div v-swiper:partnerSwiperM="partnerSwiperOptionM" class="swiper-partner">
                    <div class="swiper-wrapper">
                        <div v-for="(partnerSlide, rK) in partners" :key="rK" class="swiper-slide">
                            <div v-for="(partnerItem, iK) in partnerSlide" :key="iK" class="partner-item">
                                <img :src="partnerItem.src" :alt="partnerItem.icon" />
                            </div>
                        </div>
                    </div>
                    <div slot="pagination" class="partner-swiper-pagination-m swiper-pagination-bullets"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
    components: {},
    asyncData() {
        const contents = require('../../assets/json/case.json');
        const { usecases, partners } = contents;
        // const industries: any[] = []
        // usecases.forEach((usecase: any) => {
        //   if (industries.indexOf(usecase.industry) === -1) {
        //     industries.push(usecase.industry)
        //   }
        // })
        partners.forEach((p: any) => {
            p.forEach((item: any) => {
                item.src = require(`../../assets/img/case/icons/${item.icon}.png`);
            });
        });
        return {
            // industries: industries,
            usecases: usecases,
            partners,
        };
    },
})
export default class Index extends Vue {
    usecases: any[] = [];
    industries: string[] = ['全部', '泛娱乐', '在线教育', '出海', '政企'];
    industryActive = 0;
    showedUsecases: any = [];
    filteredUsecases: any = [];
    showCount = 6;
    addCount = 6;
    isMobile = false;
    hasMore = false;
    partnerSwiperOption = {
        pagination: {
            el: '.partner-swiper-pagination-pc',
            clickable: true,
            renderBullet: function(index: number, className: string) {
                // console.log(this)
                return `<div class="swiper-pagination-item ${className}"></div>`;
            },
        },
    };
    partnerSwiperOptionM = {
        pagination: {
            el: '.partner-swiper-pagination-m',
            clickable: true,
            renderBullet: function(index: number, className: string) {
                // console.log(this)
                return `<div class="swiper-pagination-item ${className}"></div>`;
            },
        },
    };
    created() {
        // console.log('create ');  create 不需要打印
        // if (this.industries.indexOf('全部') === -1) {
        //   this.industries.unshift('全部')
        // }
        // this.filterUsecase()
    }
    mounted() {
        this.handleWinSizeChange();
        this.filterUsecase();
        window.addEventListener('resize', this.handleWinSizeChange.bind(this), {
            passive: true,
        });
    }
    beforeDestroy() {
        window.removeEventListener('resize', this.handleWinSizeChange);
    }
    handleWinSizeChange() {
        const winW = window.innerWidth;
        // console.log(winW); 窗口页面的宽度  不需要打印出来，供测试用
        if (winW < 1000) {
            this.showCount = 6;
            this.addCount = 6;
            this.isMobile = true;
            this.filterUsecase();
        } else {
            this.showCount = 9;
            this.addCount = 9;
            this.isMobile = false;
            this.filterUsecase();
        }
    }
    filterUsecase() {
        this.showCount = this.addCount;
        const selectIndustry = this.industries[this.industryActive];
        this.filteredUsecases = this.usecases.filter((item: any) => {
            return selectIndustry === '全部' || item.industry === selectIndustry;
        });
        // console.log(this.filteredUsecases);  客户案例不需要打印
        if (this.filteredUsecases.length > this.addCount) {
            this.hasMore = true;
        } else {
            this.hasMore = false;
        }
        // console.log(this.hasMore);判断是否 显示更多案例，默认为false
        this.showedUsecases = this.filteredUsecases.slice(0, this.showCount);
    }
    showMoreCase() {
        this.showCount += 6;
        this.showedUsecases = this.filteredUsecases.slice(0, this.showCount);
        if (this.showCount >= this.filteredUsecases.length) {
            this.hasMore = false;
        } else {
            this.hasMore = true;
        }
    }
    selectIndustry(iK: number) {
        console.log(iK);
        this.industryActive = iK;
        this.filterUsecase();
    }
    toUsercase(usecase: any) {
        if (typeof window !== 'undefined') {
            window.open(`/usecase/${usecase.id}.html`);
        }
    }
}
</script>

<style lang="scss" scoped>
.case-container {
    background-color: #fafafb;
}
.container {
    max-width: 1200px;
    margin: auto;
    padding: 0;
}
.case-banner {
    margin-top: -68px;
    height: 360px;
    background-color: #20232d;
    background: url(../../assets/img/case/usecase_banner.png) center no-repeat;
    background-size: cover;
}
.banner {
    position: relative;
    display: -webkit-box;
    display: flex;
    margin-top: 68px;
    height: 100%;
    /* background-color: rgba(255, 255, 255, 0.14); */
    box-sizing: border-box;
}
.main-banner {
    width: 100%;
    padding-top: 137px;
    color: #fff;
    font-family: PingFangSC-Light;
    h1 {
        font-size: 34px;
        font-family: 'PingFangSC-Regular';
        font-weight: 300;
    }
    .desc {
        margin-top: 19px;
        width: 460px;
        line-height: 1;
    }
    .apply-try {
        display: inline-block;
        margin-top: 32px;
        width: 104px;
        height: 44px;
        line-height: 42px;
        text-align: center;
        font-size: 14px;
        font-weight: 400;
        color: #fefefe;
        border-radius: 4px;
        border: 1px solid #f5f8ff;
    }
}
.case-content {
    background-color: #fff;
    .case-main {
        padding-top: 32px;
        max-width: 1254px;
        .more {
            // display: none;
            display: block;
            width: 222px;
            height: 64px;
            background: rgba(0, 68, 255, 1);
            border-radius: 8px;
            font-size: 18px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #fff;
            margin: 0 auto;
        }
    }
}

.swiper-partner {
    width: 1200px;
    margin: 0 auto;
    padding-bottom: 30px;
    &.m {
        display: none;
    }
}
.partner {
    height: 566px;
    padding-top: 80px;
    .partner-title {
        margin-bottom: 70px;
        font-size: 34px;
        color: #222;
        text-align: center;
    }
}
.partner-content {
    &.partner-pc {
        .partner-item {
            float: left;
            width: 150px;
            height: 50px;
            margin-right: 50px;
            margin-bottom: 55px;
            text-align: center;
            img {
                // width: 100%;
                height: 100%;
            }
        }
    }
    &.partner-m {
        display: none;
    }
}
.partner-swiper-pagination-pc {
    text-align: center;
    /deep/ .swiper-pagination-item {
        position: relative;
        display: inline-block;
        width: 28px;
        height: 4px;
        margin-right: 8px;
        padding: 5px 0;
        background: transparent;
        border-radius: 0;
        opacity: 1;
        cursor: pointer;
        &::before {
            content: '';
            position: absolute;
            left: 0;
            width: 28px;
            height: 4px;
            background: #e6e6e6;
        }
        &.swiper-pagination-bullet-active {
            &::before {
                background: #0044ff;
            }
        }
    }
}
.industry {
    margin-bottom: 24px;
    height: 64px;
    line-height: 64px;
    font-size: 0;
    text-align: center;
    .industry-item {
        display: inline-block;
        a {
            padding: 5px 0;
            font-size: 18px;
            color: #222;
            &:hover {
                border-bottom: 3px solid #0055fe;
            }
        }
        &:not(:last-child) {
            margin-right: 53px;
        }
        &.active {
            a {
                border-bottom: 3px solid #0055fe;
            }
        }
    }
}
.case-wrapper {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 26px;
    justify-content: flex-start;
    // justify-content: space-between;
    // justify-items: start;
    // text-align: center;
    .case-item-wrapper {
        padding: 0 27px;
    }
    .case-item {
        // float: left;
        position: relative;
        width: 364px;
        height: 300px;
        padding-top: 50px;
        margin-bottom: 54px;
        border: 1px solid #eee;
        border-radius: 8px;
        transition: 0.25s ease transform, 0.25s ease box-shadow;
        .icon {
            display: inline-block;
            width: 100%;
            height: 74px;
            &.huajiao {
                background: url(../../assets/img/case/icons/huajiao.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
            &.yingkezhibo {
                background: url(../../assets/img/case/icons/yingkezhibo.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
            &.haoweilai {
                background: url(../../assets/img/case/icons/haoweilai.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
            &.xiwo {
                background: url(../../assets/img/case/icons/xiwo.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
            &.kugouktv {
                background: url(../../assets/img/case/icons/kugouktv.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
            &.liveme {
                background: url(../../assets/img/case/icons/liveme.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
            &.uplive {
                background: url(../../assets/img/case/icons/uplive.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
            &.ximalaya {
                background: url(../../assets/img/case/icons/ximalaya.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
            &.lizhi {
                background: url(../../assets/img/case/icons/lizhi.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
            &.migu {
                background: url(../../assets/img/case/icons/migu.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
            &.ttyuyin {
                background: url(../../assets/img/case/icons/ttyuyin.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
            &.bixin {
                background: url(../../assets/img/case/icons/bixin.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
            &.yujian {
                background: url(../../assets/img/case/icons/yujian.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
            &.blued {
                background: url(../../assets/img/case/icons/blued.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
            &.yiqijiaoyukeji {
                background: url(../../assets/img/case/icons/yiqijiaoyukeji.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
            &.qingqingjiajiao {
                background: url(../../assets/img/case/icons/qingqingjiajiao.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
            &.shenlanfakao {
                background: url(../../assets/img/case/icons/shenlanfakao.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
            &.ivreal {
                background: url(../../assets/img/case/icons/ivreal.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
            &.haifengjiaoyu {
                background: url(../../assets/img/case/icons/haifengjiaoyu.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
            &.kuaipeilian {
                background: url(../../assets/img/case/icons/kuaipeilian.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
            &.jiayouxueba {
                background: url(../../assets/img/case/icons/jiayouxueba.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
            &.finger {
                background: url(../../assets/img/case/icons/finger.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
            &.mico {
                background: url(../../assets/img/case/icons/mico.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
            // &.360 {
            //   background: url(../../assets/img/case/icons/360.png) no-repeat;
            //   background-size: contain;      background-position: center;

            // }
            &.yikachelianwang {
                background: url(../../assets/img/case/icons/yikachelianwang.png) no-repeat;
                background-size: contain;
                background-position: center;
            }

            &.haidiangongshangju {
                background: url(../../assets/img/case/icons/haidiangongshangju.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
            &.nanchangdaxue {
                background: url(../../assets/img/case/icons/nanchangdaxue.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
            &.kingdee {
                background: url(../../assets/img/case/icons/kingdee.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
            &.zhongguopingan {
                background: url(../../assets/img/case/icons/zhongguopingan.png) no-repeat;
                background-size: contain;
                background-position: center;
            }
        }
        .case-val {
            padding: 26px 48px 0 48px;
            line-height: 25px;
        }
        .case-link {
            position: absolute;
            display: none;
            width: 100%;
            height: 54px;
            line-height: 54px;
            top: 280px;
            font-size: 16px;
            color: #fff;
            text-align: center;
            background-color: #0055fe;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
        }
        &:not(:nth-of-type(3n)) {
            // margin-right: 54px;
        }
        &:hover {
            border: 0;
            box-shadow: 0 80px 40px -40px rgba(0, 0, 0, 0.3), 0 20px 40px 0 rgba(0, 0, 0, 0.08);
            transform: translate3d(0, -17px, 0);
            .case-link {
                display: block;
            }
        }
        &:last-child {
            margin-right: auto;
        }
    }
    &:after {
        content: '';
        display: block;
        clear: both;
    }
}

.technology {
    .technology .tech-img {
        height: 252px;
    }
    .tech-content {
        height: 864px;
        text-align: center;
        .tech-text {
            margin-top: 80px;
            font-size: 34px;
            color: #222;
        }
    }
}
.tech-main {
    display: -webkit-box;
    display: flex;
    margin-top: 69px;
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
        div {
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
        }
        &:hover {
            box-shadow: 0px 5px 18px 0px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            &:after {
                position: absolute;
                left: 100%;
                top: 50%;
                transform: translateY(-50%);
                content: '';
                width: 0;
                height: 0;
                border: 14px solid transparent;
                border-left-color: #fff;
            }
        }
    }
}
.tech-relation {
    position: relative;
    width: 700px;
    padding: 50px;
    .rel-wrapper {
        position: absolute;
        top: 52%;
        opacity: 0;
        -webkit-transition: opacity 0.6s, -webkit-transform 0.6s;
        transition: opacity 0.6s, -webkit-transform 0.6s;
        transition: opacity 0.6s, transform 0.6s;
        transition: opacity 0.6s, transform 0.6s, -webkit-transform 0.6s;
    }
    .pic {
        height: 406px;
        &.live {
            // background: url(../../assets/img/bg/live.png);
        }
    }
    .rel {
        padding: 45px 52px;
        display: -webkit-box;
        display: flex;
        .icon {
            display: inline-block;
            width: 92px;
            height: 92px;
            margin-right: 23px;
            &.icon-live {
                // background: url(../../assets/img/icons/rel/live.png);
                background-size: contain;
                background-position: center;
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
$item-num: 10;
$start-position: -100px;
$end-position: -100px - $item-num * $item-width - $item-num * $item-space;

@keyframes move {
    0% {
        transform: translateX($start-position);
    }
    100% {
        transform: translateX($end-position);
    }
}
.banner .partner-swiper-pagination {
    position: absolute;
    bottom: 0;
    z-index: 2;
}
.swiper-pagination-bullets.solu-swiper-pagination {
    bottom: 0 !important;
    top: 0px;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0 71px;
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
        background-color: rgba(2, 70, 249, 0.1);
        color: #0044ff;
    }
}
@media screen and (max-width: 1264px) {
    .case-wrapper {
        justify-content: center;
        .case-item-wrapper {
            &:last-child:nth-child(2n-1) {
                margin-right: 418px;
            }
        }
    }
}
@media screen and (max-width: 1000px) {
    .content-box {
        padding-left: 0.6rem;
        padding-right: 0.6rem;
    }
    .case-banner {
        height: 4.58rem;
        background: url(../../assets/img/case/usecase_banner_mobile.png) center no-repeat;
        background-size: cover;
    }
    .main-banner {
        padding-top: 1.67rem;
        // padding-left: 0.6rem;
        color: #fff;
        font-family: PingFangSC-Light;
        h1 {
            font-size: 0.48rem;
            font-weight: 400;
        }
        .desc {
            margin-top: 0.2rem;
            width: 4.25rem;
            font-size: 0.24rem;
            line-height: 0.28rem;
        }
        .apply-try {
            display: inline-block;
            margin-top: 0.37rem;
            width: 1.44rem;
            height: 0.64rem;
            line-height: 0.6rem;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.24rem;
            font-weight: 400;
            color: #fff;
            border-radius: 0.08rem;
            border: 0.02rem solid #fff;
        }
    }
    .case-content {
        .case-main {
            padding-top: 0;
            padding-bottom: 1rem;
            .more {
                display: block;
                width: 2.92rem;
                height: 0.8rem;
                border-radius: 0.08rem;
                margin: 0 auto;
                background-color: #0044ff;
                color: #fff;
                font-size: 0.28rem;
                border: 0;
            }
        }
    }
    .partner {
        height: 10.74rem;
        padding-top: 1rem;
        .partner-title {
            margin-bottom: 70px;
            font-size: 0.48rem;
            color: #222;
            text-align: center;
        }
    }
    .partner-swiper-pagination-m {
        text-align: center;
        /deep/ .swiper-pagination-item {
            position: relative;
            display: inline-block;
            width: 28px;
            height: 4px;
            margin-right: 8px;
            padding: 5px 0;
            background: transparent;
            border-radius: 0;
            opacity: 1;
            cursor: pointer;
            &::before {
                content: '';
                position: absolute;
                left: 0;
                width: 28px;
                height: 4px;
                background: #e6e6e6;
            }
            &.swiper-pagination-bullet-active {
                &::before {
                    background: #0044ff;
                }
            }
        }
    }
    .swiper-partner {
        width: 6.9rem;
        margin: 0 auto;
        padding-bottom: 30px;
        &.m {
            display: none;
        }
    }
    .partner-content {
        &.partner-pc {
            display: none;
        }
        &.partner-m {
            display: block;
            .partner-item {
                float: left;
                // width: 2.3rem;
                width: 33.3%;
                height: 0.9rem;
                margin-right: 0;
                margin-bottom: 0.2rem;
                img {
                    width: 85%;
                    // height: 100%;
                }
            }
        }
    }
    .industry-wrapper {
        height: 1.08rem;
        // overflow: hidden;
        margin-bottom: 0.24rem;
    }
    .industry {
        height: 1.2rem;
        // line-height: 1.08rem;
        line-height: 1;
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;
        font-size: 0;
        text-align: center;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        scrollbar-width: none;

        .industry-item {
            // float: left;
            display: inline-block;
            a {
                padding: 0;
                font-size: 0.28rem;
                color: #222;
                line-height: 1;
                position: relative;
                // &:hover {
                //   border-bottom: 3px solid #0055fe;
                // }
            }
            &:not(:last-child) {
                margin-right: 0.53rem;
            }
            &:hover,
            &.active {
                a {
                    border-bottom: 0;
                    &::after {
                        position: absolute;
                        content: '';
                        display: block;
                        bottom: -0.1rem;
                        left: 50%;
                        margin-left: -0.165rem;
                        width: 0.33rem;
                        height: 0.06rem;
                        border-radius: 0.08rem;
                        background-color: #0044ff;
                    }
                }
            }
        }
        // &::-webkit-scrollbar {
        //     width: 0px;
        // }
    }
    .case-wrapper {
        .case-item-wrapper {
            padding: 0;
            &:last-child:nth-child(2n-1) {
                margin-right: 0;
            }
        }
        .case-item {
            width: 100%;
            // height: 4.7rem;
            height: auto;
            padding-top: 0.72rem;
            margin-bottom: 0.54rem;
            margin-right: 0 !important;
            border: 0;
            box-shadow: 0 0.27rem 0.54rem 0 rgba(0, 0, 0, 0.05), 0 -0.01rem 0.05rem 0 rgba(0, 0, 0, 0.03);
            border-radius: 0.24rem;
            cursor: pointer;
            .icon {
                height: 1.08rem;
            }
            .case-val {
                padding: 0.6rem 0.72rem 0.72rem;
                font-size: 0.28rem;
                line-height: 0.42rem;
            }
            &:hover {
                border: 0;
                box-shadow: 0 0.27rem 0.54rem 0 rgba(0, 0, 0, 0.05), 0 -0.01rem 0.05rem 0 rgba(0, 0, 0, 0.03);
                transform: none;
                .case-link {
                    display: none;
                }
            }
        }
    }
}
</style>
