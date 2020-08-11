<template>
    <footer id="office-footer" :class="{ footer: true, fixed: $route.name == 'download-code' }">
        <div class="footer_pc">
            <!-- PC端fooetr -->
            <div class="footBackground">
                <div class="footer__container container">
                    <div class="footer__introduce">
                        <h3 class="title">
                            <div class="icon icon-logo"></div>
                        </h3>

                        <div class="content">
                            <img class="salecode" src="../../assets/img/nav/activity/sale-code.png" alt="" />
                            <!-- <img src="../../assets/img/nav/foot/sale-code.png" class="sale-img" alt="sale" /> -->
                            <!-- <div class="sale-text">微信扫一扫<br />与售前工程师直接沟通</div> -->
                            <!-- <div class="content">
                            <p>电话/微信：189-3893-7493</p>
                            <p>QQ：3485426954</p>
                            <p>市场合作 ：market@zego.im</p>
                        </div> -->
                        </div>

                        <ul class="menu-list">
                            <!-- <li class="menu-list__item service">
                            微信客服号
                            <div class="qrcode"></div>
                        </li> -->
                            <li class="menu-list__item subscribe">
                                微信订阅号
                                <div class="qrcode"></div>
                            </li>
                            <li class="menu-list__item address">
                                公司地址
                                <div class="qrcode addr">
                                    深圳市南山区佳嘉豪商务大厦13楼
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="footer__info">
                        <div v-for="info of infos" :key="info.id" :class="info.id" class="info-item">
                            <h3 class="title" @click="info.active = !info.active">
                                {{ info.name }}
                                <div :class="info.active ? 'icon-arrow-up' : 'icon-arrow-down'" class="icon"></div>
                            </h3>

                            <ul :class="{ 'menu-list--active': info.active }" class="menu-list">
                                <template v-for="(child, index) of info.children">
                                    <li v-if="child.html" :key="index" class="menu-list__item">
                                        {{ child.html }}
                                    </li>

                                    <li v-else :key="index" class="menu-list__item">
                                        <a :href="child.href">{{ child.text }}</a>
                                    </li>
                                </template>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer__copyright">
                <p class="copyright">
                    即构科技&nbsp;版权所有&nbsp;&nbsp;
                    <a href="http://www.beian.miit.gov.cn" target="_blank">粤ICP备15113647号 </a>&nbsp;&copy;2018-{{
                        new Date().getFullYear() + 1
                    }}
                </p>
            </div>
        </div>
        <div class="footer_m">
            <!-- 移动端footer -->
            <!-- <section class="connection container">
                <img src="../../assets/img/nav/foot/sale-code-m.png" alt="sale" class="sale-img" />
                <div class="sale-text">
                    <div
                        v-clipboard:copy="wx"
                        v-clipboard:success="copyWx"
                        v-clipboard:error="onWxError"
                        style="margin-bottom: 0.18rem;"
                    >
                        添加微信号：<span style="display:inline-flex;font-size:0.24rem;font-weight:600;"
                            >zegoshouqian</span
                        >
                    </div>
                    <div>

                        <span>与售前工程师直接沟通</span>
                    </div>
                </div>
            </section>
            <section class="communication container">
                <ul class="menu-list">
                    <li class="menu-item-wrapper">
                        <div
                            v-click-outside="hide"
                            :class="{
                                'menu-item': true,
                                wechat: true,
                                show: isShowSubscribe,
                            }"
                            @click="showSubscribe"
                        >
                            <span class="icon wechat"></span>
                            <div class="qrcode">
                                <div class="title">“即构科技ZEGO”订阅号</div>
                                <img src="../../assets/img/nav/foot/subscribe.png" alt="subscribe" />
                            </div>
                        </div>
                        <span class="icon-name">微信订阅号</span>
                    </li>
                    <li class="menu-item-wrapper">
                        <div
                            v-clipboard:copy="message"
                            v-clipboard:success="onCopy"
                            v-clipboard:error="onError"
                            :class="{ 'menu-item': true, qq: true, show: isShowQQ }"
                        >
                            <span class="icon qq"></span>
                            <div class="qrcode">
                                <div class="title">QQ 号已复制到剪切板</div>
                                <div class="text">3485426954</div>
                            </div>
                        </div>
                        <span class="icon-name">QQ</span>
                    </li>
                </ul>
            </section> -->
            <section class="copyright container">
                <span class="logo"></span>
                <p>
                    <a href="http://www.beian.miit.gov.cn" target="_blank"
                        >&copy;2018-2020&nbsp;即构科技&nbsp;版权所有&nbsp;&nbsp;粤ICP备15113647号&nbsp;
                    </a>
                </p>
            </section>
        </div>
    </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ClickOutside from 'vue-click-outside';
import { Route } from 'vue-router';

interface WithRoute {
    $route: Route;
}
@Component({
    directives: { ClickOutside },
})
export default class ZFooter extends Vue implements WithRoute {
    $route!: Route;
    isShowSubscribe = false;
    isShowService = false;
    isShowQQ = false;
    message = '3485426954';
    wx = 'zegoshouqian';
    infos = [
        {
            id: 'product',
            name: '产品',
            active: false,
            children: [
                {
                    text: '互动视频',
                    href: 'https://www.zego.im/html/product/interaction-live.html',
                },
                {
                    text: '实时语音',
                    href: 'https://www.zego.im/html/product/realtime-voice.html',
                },
                {
                    text: '语聊房',
                    href: 'javascript:void(0)',
                },
                {
                    text: '视频双录',
                    href: 'javascript:void(0)',
                },
                {
                    text: 'TalkLine',
                    href: 'https://www.talkline.cn',
                },
            ],
        },
        {
            id: 'plan',
            name: '解决方案',
            active: false,
            children: [
                {
                    text: '互动视频',
                    href: 'https://www.zego.im/html/solution/live-solution.html',
                },
                {
                    text: '互动语音',
                    href: 'https://www.zego.im/html/solution/live-solution.html',
                },
                // {
                //   text: '视频电话',
                //   href: 'javascript:void(0)'
                // },
                // {
                //   text: '视频会议',
                //   href: 'https://www.zego.im/html/solution/meeting-solution.html'
                // },
                {
                    text: '金融双录',
                    href: 'javascript:void(0)',
                },
                {
                    text: '在线教育',
                    href: 'https://www.zego.im/html/solution/edu-solution.html',
                },
                {
                    text: '直播出海',
                    href: 'javascript:void(0)',
                },
            ],
        },
        {
            id: 'developer',
            name: '开发者中心',
            active: false,
            children: [
                {
                    text: '文档中心',
                    href: 'https://doc-zh.zego.im/redirect',
                },
                {
                    text: '客户端API',
                    href: 'https://doc-zh.zego.im/zh/api?doc=Express_Video_SDK_API~Java',
                },
                {
                    text: '服务端API',
                    href: 'https://doc-zh.zego.im/zh/1287.html',
                },
                {
                    text: 'FAQ',
                    href: 'https://doc-zh.zego.im/zh/1987.html',
                },
            ],
        },
        {
            id: 'about',
            name: '了解即构',
            active: false,
            children: [
                {
                    text: '关于即构',
                    href: 'https://www.zego.im/html/about/about-zego.html',
                },
                {
                    text: '媒体报道',
                    href: 'https://www.zego.im/article/category/%E5%AA%92%E4%BD%93%E6%8A%A5%E9%81%93',
                },
                {
                    text: '技术进展',
                    href: 'https://www.zego.im/article/category/%E6%8A%80%E6%9C%AF%E8%BF%9B%E5%B1%95',
                },
                {
                    text: '隐私政策',
                    href: 'https://www.zego.im/privacy',
                },
            ],
        },
    ];
    // communications = ['wechat', 'qq', 'book', 'avatar']
    mounted() {
        // console.log('route', this.$route)
    }
    showSubscribe() {
        this.isShowSubscribe = true;
    }
    hide() {
        // console.log('showSubscribe')
        this.isShowSubscribe = false;
    }
    showService() {
        this.isShowService = true;
    }
    hideService() {
        // console.log('showSubscribe')
        this.isShowService = false;
    }
    onCopy() {
        // console.log('copy');
        this.isShowQQ = true;
        setTimeout(() => {
            this.isShowQQ = false;
        }, 2000);
    }
    onError() {
        console.log('error');
    }
    copyWx() {
        console.log('copyWx');
    }
    onWxError() {
        console.log('error');
    }
}
</script>

<style lang="scss" scoped>
.footer_pc {
    height: 412px;
    background: rgba(20, 25, 90, 1);
    // background: #100f48;
}
.footer_m {
    display: none;
}
.footer {
    position: relative;
    // width: 1920px;
    // height: 412px;
    // background-color: #161c28;
    // background: #100f48;

    .footer__pic {
        display: block;
        width: 100%;
        margin: auto;
        height: 330px;
        background: url(../../assets/img/bg/foot.png);
        background-size: cover;
        padding-left: 750px;
        padding-top: 68px;
        h3 {
            font-size: 40px;
            line-height: 1;
            margin-bottom: 22px;
        }
        p {
            font-size: 34px;
            margin-bottom: 68px;
        }
        .apply {
            display: inline-block;
            width: 170px;
            height: 46px;
            background: rgba(0, 68, 255, 1);
            border-radius: 4px;
            color: #fff;
            line-height: 46px;
            text-align: center;
            &:hover,
            &:active {
                background: #002bff;
            }
        }
    }
    .footBackground {
        // width: 1920px;
        height: 336px;
        background: url('../../assets/img/nav/activity/footerBGI.png');
        display: flex;
        justify-content: center;
        width: 100%;
        // background-position: center -400px;
        .footer__container {
            display: flex;
            justify-content: space-between;
            padding-top: 100px;
            padding-bottom: 58px;
            // margin: 70px auto 0;
            // background: url('../../assets/img/nav/activity/footerBGI.png');

            .footer__introduce {
                color: #fff;

                .title {
                    display: flex;
                    align-items: center;
                    font-size: 28px;
                    color: #fff;

                    .icon-logo {
                        width: 142px;
                        height: 26px;
                        background: url(../../assets/img/nav/f-logo.png);
                        background-size: 100%;
                    }
                }

                .content {
                    width: 261px;
                    height: 70px;
                    // background: url(../../assets/img/nav/foot/pre-sale.png);
                    background-size: 100%;
                    margin-top: 30px;
                    margin-bottom: 39px;
                    display: flex;
                    align-items: center;
                    .salecode {
                        width: 261px;
                        height: 80px;
                    }
                    // max-width: 20em;
                    // font-size: 14px;
                    // color: #fff;
                    // opacity: 0.65;
                    // line-height: 24px;
                    // &:hover {
                    //   opacity: 1;
                    // }
                    .sale-img {
                        width: 60px;
                        height: 60px;
                        margin-left: 34px;
                        margin-right: 14px;
                    }
                    .sale-text {
                        font-size: 18px;
                        // font-family: 'Microsoft YaHei';
                        font-weight: 400;
                        color: rgba(34, 34, 34, 1);
                        line-height: 22px;
                    }
                }

                .menu-list {
                    display: flex;

                    .menu-list__item {
                        opacity: 0.65;
                        &.service,
                        &.subscribe,
                        &.address {
                            position: relative;

                            .qrcode {
                                position: absolute;
                                right: 0;
                                bottom: 130%;
                                left: 0;
                                // margin: 0 auto;
                                width: 70px;
                                height: 75px;
                                background-position: center;
                                background-size: contain;
                                background-repeat: no-repeat;
                                visibility: hidden;
                            }

                            &:hover {
                                opacity: 1;
                                .qrcode {
                                    visibility: visible;
                                }
                            }
                        }
                        &.address {
                            .qrcode {
                                transform: translateX(-50%);
                                left: 50%;
                                width: 240px;
                                height: 35px;
                                background: #fff;
                                color: #333;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                border-radius: 5px;
                                &::after {
                                    position: absolute;
                                    content: '';
                                    display: block;
                                    width: 0;
                                    height: 0;
                                    left: 50%;
                                    bottom: -0.39rem;
                                    border: 0.2rem solid transparent;
                                    border-top-color: #fff;
                                }
                            }
                        }
                        &.service {
                            padding-right: 15px;

                            .qrcode {
                                background-image: url('../../assets/img/common/img-service.png');
                            }
                        }

                        &.subscribe {
                            padding-right: 40px;

                            // padding-left: 7px;
                            // border-left: 1px solid currentColor;

                            .qrcode {
                                background-image: url('../../assets/img/common/img-subscribe.png');
                            }
                        }
                    }
                }
            }

            .footer__info {
                display: flex;
                color: #fff;

                div {
                    .title {
                        margin-bottom: 18px;
                        color: #fff;

                        .icon {
                            display: none;
                        }
                    }

                    .menu-list > .menu-list__item {
                        padding-left: 3em;
                        text-indent: -3em;
                        line-height: 1;
                        margin-bottom: 15px;

                        a {
                            color: inherit;
                            opacity: 0.5;
                            &:hover {
                                opacity: 1;
                            }
                        }
                    }
                }

                div + div {
                    margin-left: 60px;
                }
            }
        }
    }

    .footer__copyright {
        height: 76px;
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 37px 0;
        border-top: 1px solid #464646;

        .menu-wrapper {
            display: flex;
            .menu-title {
                color: #fff;
                opacity: 0.65;
            }
        }

        .menu-list {
            display: flex;
            margin-bottom: 13px;

            .menu-list__item {
                min-width: 100px;
                text-align: center;
                color: #fff;

                > a {
                    color: inherit;
                    opacity: 0.65;

                    &:hover {
                        opacity: 1;
                    }
                }
                // &:first-child {
                //     a {
                //         &:hover {
                //             opacity: 0.65;
                //             cursor: inherit;
                //         }
                //     }
                // }
            }

            .menu-list__item + .menu-list__item {
                border-left: 1px solid #999;
            }
        }

        .copyright {
            font-size: 12px;
            color: #fff;
            opacity: 0.4;
            a {
                font-size: 12px;
                color: #fff;
                // opacity: 0.4;
                // &:hover {
                //   opacity: 1;
                // }
            }
        }
    }
}

@media screen and (max-width: 1000px) {
    .container {
        max-width: 6.3rem;
        margin: auto;
        padding: 0;
    }
    .footer {
        // padding-top: 60px;
        background: rgba(21, 26, 93, 1);
    }
    .footer_pc {
        display: none;
    }
    .footer_m {
        display: block;
    }
    .footer_m {
        width: 100%;
        // height: 5.83rem;
        padding: 0.8rem 0;
    }
    .connection {
        background: url(../../assets/img/nav/foot/pre-sale-m.png);
        margin-top: 0.6rem;
        height: 1.38rem;
        border: 1px solid rgba(43, 51, 67, 1);
        border-radius: 0.12rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.18rem;
        color: #222;
        .sale-img {
            width: 1.02rem;
            height: 1.02rem;
            margin-right: 0.13rem;
        }
        .sale-icon {
            width: 0.2rem;
            height: 0.2rem;
        }
        // .connect-item {
        //     flex: 1;
        //     height: 100%;
        //     padding-left: 0.45rem;
        //     display: flex;
        //     align-items: center;
        //     .icon {
        //         display: inline-block;
        //         width: 0.36rem;
        //         height: 0.36rem;
        //     }
        //     .detail {
        //         margin-left: 0.24rem;
        //         .title {
        //             font-size: 0.28rem;
        //             color: #b1bacb;
        //             display: inline-block;
        //             margin-bottom: 0.1rem;
        //         }
        //         .text {
        //             margin-top: 0.19rem;
        //             font-size: 0.24rem;
        //             color: #798499;
        //         }
        //     }
        //     &.phone {
        //         border-right: 1px solid rgba(43, 51, 67, 1);
        //     }
        // }
    }
    .communication {
        margin-top: 0.6rem;
        .menu-list {
            display: flex;
            justify-content: space-between;
            padding: 0 0.62rem;

            .menu-item-wrapper {
                width: 1.2rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                .icon-name {
                    margin-top: 0.17rem;
                    font-size: 0.24rem;
                    color: #5b6476;
                }
            }
            .menu-item {
                width: 0.88rem;
                height: 0.88rem;
                background-color: #1b222f;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                .icon {
                    display: inline-block;
                    width: 0.48rem;
                    height: 0.48rem;
                    &.service {
                        background: url(../../assets/img/nav/foot/w-service.png);
                        background-size: 100%;
                    }
                    &.wechat {
                        background: url(../../assets/img/nav/foot/wechat-m.png);
                        background-size: 100%;
                    }
                    &.qq {
                        background: url(../../assets/img/nav/foot/qq-m.png);
                        background-size: 100%;
                    }
                    &.book {
                        background: url(../../assets/img/nav/foot/book.png);
                        background-size: 100%;
                    }
                    &.avatar {
                        background: url(../../assets/img/nav/foot/avatar.png);
                        background-size: 100%;
                    }
                }
                &.wechat,
                &.service {
                    position: relative;
                    .qrcode {
                        position: absolute;
                        right: 0;
                        bottom: 130%;
                        left: 50%;
                        transform: translate(-50%);
                        margin: 0 auto;
                        width: 3.16rem;
                        height: 3.76rem;
                        background-color: #fff;
                        border-radius: 0.08rem;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        visibility: hidden;
                        .title {
                            font-size: 0.2rem;
                            color: #222;
                            margin: 0.32rem auto 0.23rem;
                            // font-family: 'PingFang SC';
                            letter-spacing: -1px;
                        }
                        img {
                            width: 2.64rem;
                            height: 2.64rem;
                        }
                        // background-image: url(../assets/img/nav/foot/subscribe.png);
                        // background-position: center;
                        // background-size: contain;
                        // background-repeat: no-repeat;
                        &::after {
                            position: absolute;
                            content: '';
                            display: block;
                            width: 0;
                            height: 0;
                            bottom: -0.39rem;
                            border: 0.2rem solid transparent;
                            border-top-color: #fff;
                        }
                    }
                    &.show {
                        .qrcode {
                            visibility: visible;
                        }
                    }
                }
                &.qq {
                    position: relative;
                    .qrcode {
                        position: absolute;
                        right: 0;
                        bottom: 130%;
                        left: 50%;
                        transform: translate(-50%);
                        margin: 0 auto;
                        width: 2.6rem;
                        height: 1.08rem;
                        background-color: #fff;
                        border-radius: 0.08rem;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        visibility: hidden;
                        .title {
                            font-size: 0.2rem;
                            color: #222;
                            margin: 0.32rem auto 0.12rem;
                            // font-family: 'PingFang SC';
                            letter-spacing: -1px;
                        }
                        .text {
                            color: #999;
                            font-size: 0.18rem;
                        }
                        // background-image: url(../assets/img/nav/foot/subscribe.png);
                        // background-position: center;
                        // background-size: contain;
                        // background-repeat: no-repeat;
                        &::after {
                            position: absolute;
                            content: '';
                            display: block;
                            width: 0;
                            height: 0;
                            bottom: -0.39rem;
                            border: 0.2rem solid transparent;
                            border-top-color: #fff;
                        }
                    }
                    &.show {
                        .qrcode {
                            visibility: visible;
                        }
                    }
                }
            }
        }
    }
    .copyright {
        text-align: center;
        .logo {
            position: relative;
            display: inline-block;
            width: 1.84rem;
            height: 0.32rem;
            background: url('../../assets/img/nav/activity/mobile/logo_m2.png') no-repeat;
            background-size: contain;
            &::before {
                position: absolute;
                left: -120%;
                top: 50%;
                content: '';
                width: 1.8rem;
                height: 0.02rem;
                // background-color: #212835;
                background: rgba(63, 70, 167, 1);
            }
            &::after {
                position: absolute;
                left: 120%;
                top: 50%;
                content: '';
                width: 1.8rem;
                height: 0.02rem;
                // background-color: #212835;
                background: rgba(63, 70, 167, 1);
            }
        }
        p {
            margin-top: 0.32rem;
            a {
                font-size: 10px;
                color: rgba(63, 70, 167, 1);
            }
        }
    }
}
</style>
