<template>
    <div>
        <div class="container_pc">
            <article class="container-wrapper">
                <!-- 活动主要内容 -->
                <div class="activity_contain">
                    <!-- 周年促banner -->
                    <div class="present"></div>
                    <el-button plain
                        >立即咨询
                        <img src="../../assets/img/nav/activity/Xcode2.png" class="xcode" alt="" />
                    </el-button>
                </div>
                <div class="activity_register">
                    <div class="background">
                        <div class="registerTitle">
                            <!-- 注册有礼 -->
                            <img src="../../assets/img/nav/activity/register2.png" alt="" />
                        </div>
                        <div class="SDK">
                            <img class="sdk" src="../../assets/img/nav/activity/SDK2x.png" alt="" />
                            <a href="https://console.zego.im/account/register">
                                <el-button class="btn_register">
                                    立即注册
                                    <img src="../../assets/img/nav/activity/iconRight.png" alt="" />
                                </el-button>
                            </a>

                            <div class="expressSDK video">
                                <div class="express">Express-Video SDK</div>
                                <div class="interaction">支持超低延迟多人视频/音频互动</div>
                                <div class="videoContent">
                                    <a
                                        href="https://doc-zh.zego.im/zh/2969.html"
                                        target="_blank"
                                        class="common download"
                                        >下载SDK包</a
                                    >
                                    <a
                                        href="https://doc-zh.zego.im/zh/3125.html"
                                        target="_blank"
                                        class="common download"
                                        >下载示例源码</a
                                    >
                                    <a href="https://doc-zh.zego.im/zh/195.html" target="_blank" class="common quick"
                                        >快速集成</a
                                    >
                                    <a href="https://doc-zh.zego.im/zh/1227.html" target="_blank" class="common quick"
                                        >进阶功能集成</a
                                    >
                                </div>
                            </div>
                            <div class="expressSDK audio">
                                <div class="express">Express-Audio SDK</div>
                                <div class="interaction">支持超高音质的多人语音互动</div>
                                <div class="videoContent">
                                    <a
                                        href="https://doc-zh.zego.im/zh/3564.html"
                                        target="_blank"
                                        class="common download"
                                        >下载SDK包</a
                                    >
                                    <a
                                        href="https://doc-zh.zego.im/zh/3583.html"
                                        target="_blank"
                                        class="common download"
                                        >下载示例源码</a
                                    >
                                    <a href="https://doc-zh.zego.im/zh/3575.html" target="_blank" class="common quick"
                                        >快速集成</a
                                    >
                                </div>
                            </div>
                            <div class="gift">
                                <img class="SDKfloat" src="../../assets/img/nav/activity/SDKfloat2.png" alt="" />
                            </div>
                        </div>
                        <div class="rechargeTitle">
                            <!-- 充值有礼 -->
                            <img src="../../assets/img/nav/activity/recharge2.png" alt="" />
                        </div>
                        <div class="cloudServer">
                            <img class="cloudserver" src="../../assets/img/nav/activity/cloudServer2.png" alt="" />
                            <div class="gift">
                                <img class="cloudFloat" src="../../assets/img/nav/activity/cloudFloat2.png" alt="" />
                            </div>
                        </div>
                        <div class="talkline">
                            <img class="talkLine" src="../../assets/img/nav/activity/talkline2.png" alt="" />
                            <a href="https://www.talkline.cn/recharge_activity">
                                <el-button class="join"
                                    >立即参与
                                    <img src="../../assets/img/nav/activity/iconRight.png" alt="" />
                                </el-button>
                            </a>

                            <div class="gift">
                                <img
                                    class="talklineFloat"
                                    src="../../assets/img/nav/activity/talklineFloat2.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div class="usercaseTitle">
                            <!-- 客户案例 -->
                            <img src="../../assets/img/nav/activity/usercase2.png" alt="" />
                        </div>
                        <div class="usercase">
                            <div class="title">
                                <img class="Client" src="../../assets/img/nav/activity/client2.png" alt="" />
                            </div>
                            <div class="caseContent">
                                <div v-swiper:mySwiper="swiperOption">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <img src="../../assets/img/nav/activity/clientPage2x.png" />
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="../../assets/img/nav/activity/clientPage2xx.png" />
                                        </div>
                                    </div>
                                    <div class="swiper-pagination"></div>
                                </div>
                                <div class="slide"></div>
                                <div class="slide2"></div>
                            </div>
                        </div>
                        <div class="activity_detail">
                            <div class="introduce">活动细则及说明</div>
                            <div class="detail">
                                1.“注册有礼”活动面向的是活动期间新注册用户，从注册当月开始至活动截止月，每月赠送20000分钟，按“先音频后视频，分辨率从低到高”的顺序扣除，2020年12月31日24:00前均可使用<br />
                                2.“充值有礼”中的音视频云服务充值特惠仅面向新用户，包括活动期间新注册用户及所有未签约上线用户<br />
                                3.本活动赠送的白板、文件共享、IM等配套功能，仅供签约上线后的前两个月免费使用<br />
                                4.TalkLine视频会议充值特惠，暂不支持iOS端参加<br />
                                5.活动期间，符合活动规则的所有优惠均可同时享受<br />
                                6.活动赠品将在7个工作日内发放，详情可联系即构商务咨询<br />
                                7.注意：充值金额不支持退款<br />
                                8.本活动最终解释权归即构科技所有<br />
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import swiperCpt from './swiperCpt.vue';

@Component({
    components: {
        swiperCpt,
    },
})
export default class ToNew extends Vue {
    dialogVisible = false;
    slideActiveIndex = 0;
    swiperOption = {
        pagination: {
            // loop: true,
            // initialSlide: 0,
            grabCursor: true,
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
        },
        // Some Swiper option/callback...
    };
    // register() {
    //     window.location.href = 'https://console.zego.im/account/register';
    // }
}
</script>
<style lang="scss" scoped>
.container_pc {
    .container-wrapper {
        .activity_contain {
            margin-top: 64px;
            height: 640px;
            background: url(../../assets/img/nav/activity/bannerBGI.png);
            background-position: center;
            background-size: cover;
            position: relative;
            .present {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 880px;
                // height: 330px;
                height: 500px;

                position: relative;
                // top: 92px;
                // left: 555px;
                margin: 0 auto;
                z-index: 1000;
                color: white;
                background: url('../../assets/img/nav/activity/ad.png') no-repeat;
                // background-size: 800px 330px;
                // background-size: cover;
                background-position-y: 92px;
                background-position-x: center;
                // background-size: cover;
            }
            // 根据设备分辨率检测4K高分屏，设置不同的背景图片
            @media only screen and (-webkit-min-device-pixel-ratio: 1.5),
                only screen and (min--moz-device-pixel-ratio: 1.5),
                only screen and (min-device-pixel-ratio: 1.5) {
                .present {
                    background: url('../../assets/img/nav/activity/ad2x.png') no-repeat;
                    background-size: 90%;
                    background-position-y: 92px;
                    background-position-x: center;
                }
            }
            .el-button {
                position: relative;
                // top: 396px;
                // left: 300px;
                // bottom: 93px;
                // left: 42.6%;
                width: 210px;
                height: 60px;
                display: block;
                margin: 0 auto;
                background: linear-gradient(90deg, rgba(53, 193, 251, 1) 23%, rgba(251, 65, 223, 1) 87%);
                border-radius: 10px;
                color: #fff;
                text-align: center;
                border: 0;
                font-size: 24px;
                outline: none;
                .xcode {
                    position: absolute;
                    top: -157px;
                    left: 30px;
                    width: 150px;
                    height: 156px;
                    display: none;
                }
                &:hover {
                    .xcode {
                        display: block;

                        z-index: 1000;
                    }
                }
            }
            .banner {
                // width: 1920px;
                height: 640px;
                position: relative;
                z-index: 10;
            }
        }
        .activity_register {
            // background: #090a2d;
            background: #080d3b;
            z-index: 20;
            // background: url('../../assets/img/nav/activity/background.png');
            // background-position-x: 255px;
            .background {
                z-index: 500;
                // width: 1920px;
                // height: 2080px;
                // margin-top: 255px;
                background: url('../../assets/img/nav/activity/background.png') no-repeat;
                // object-fit: cover;
            }
            .registerTitle {
                width: 322px;
                height: 174px;
                vertical-align: middle;
                text-align: center;
                // display: table-cell;
                margin: 0 auto;
                img {
                    width: 322px;
                    height: 42px;
                    position: relative;
                    // left: 50%;
                    top: 79px;
                }
            }
            .SDK {
                width: 1200px;
                height: 470px;
                vertical-align: middle;
                text-align: center;
                margin: 0 auto;
                position: relative;
                .sdk {
                    width: 1200px;
                    height: 470px;
                }
                .expressSDK {
                    // font-size: 22px;
                    // position: absolute;
                    // left: 812px;
                    // top: 66px;
                    // color: #fff;
                    .common {
                        // position: absolute;
                        // left: 830px;
                        font-size: 14px;
                        font-weight: 400;
                        color: rgba(35, 36, 39, 1);
                        line-height: 20px;
                    }
                }
                .video {
                    .express {
                        font-size: 22px;
                        position: absolute;
                        left: 812px;
                        top: 66px;
                        color: #fff;
                    }
                    .interaction {
                        font-size: 16px;
                        position: absolute;
                        left: 812px;
                        top: 97px;
                        color: #fff;
                    }
                    .videoContent {
                        position: absolute;
                        top: 148px;
                        left: 812px;
                        display: flex;
                        flex-wrap: wrap;

                        .common {
                            width: 140px;
                            height: 32px;
                            line-height: 32px;
                            font-size: 14px;
                            background-size: 16px;
                            text-align: left;
                            padding-left: 24px;

                            &.download {
                                background: url('../../assets/img/nav/activity/download_icon2.png') no-repeat left
                                    center;
                                background-size: 16px 16px;
                            }
                            &.quick {
                                background: url('../../assets/img/nav/activity/link_icon2.png') no-repeat left center;
                                background-size: 16px 16px;
                            }

                            &:nth-child(2n + 1) {
                                margin-right: 20px;
                            }

                            &:hover {
                                color: #005bf9;
                                &.download {
                                    // width: 16px;
                                    // height: 16px;
                                    background-image: url('../../assets/img/nav/activity/download_iconHover2.png');
                                    background-size: 16px 16px;
                                }
                                &.quick {
                                    background: url('../../assets/img/nav/activity/link_icon_hover2.png') no-repeat left
                                        center;
                                    background-size: 16px 16px;
                                }
                            }
                        }
                    }
                }
                .audio {
                    // top: 273px;

                    .express {
                        position: absolute;
                        left: 812px;
                        font-size: 22px;
                        top: 273px;
                        color: #fff;
                    }
                    .interaction {
                        font-size: 16px;
                        position: absolute;
                        left: 812px;
                        top: 302px;
                        color: #fff;
                    }
                    .videoContent {
                        position: absolute;
                        top: 355px;
                        left: 812px;
                        display: flex;
                        flex-wrap: wrap;

                        .common {
                            width: 140px;
                            height: 32px;
                            line-height: 32px;
                            font-size: 14px;
                            text-align: left;
                            padding-left: 24px;
                            &.download {
                                background: url('../../assets/img/nav/activity/download_icon2.png') no-repeat left
                                    center;
                                background-size: 16px 16px;
                            }
                            &.quick {
                                background: url('../../assets/img/nav/activity/link_icon2.png') no-repeat left center;
                                background-size: 16px 16px;
                            }

                            &:nth-child(2n + 1) {
                                margin-right: 20px;
                            }

                            &:hover {
                                color: #005bf9;
                                &.download {
                                    background-image: url('../../assets/img/nav/activity/download_iconHover2.png');
                                }
                                &.quick {
                                    background: url('../../assets/img/nav/activity/link_icon_hover2.png') no-repeat left
                                        center;
                                    background-size: 16px 16px;
                                }
                            }
                        }
                    }
                }
                .gift {
                    position: absolute;
                    width: 85px;
                    height: 85px;
                    top: -3px;
                    left: -3px;
                    .SDKfloat {
                        width: 85px;
                        height: 85px;
                    }
                }
                .btn_register {
                    position: absolute;
                    width: 160px;
                    height: 50px;
                    top: 367px;
                    left: 80px;
                    border: 0;
                    font-size: 20px;
                    color: #fff;
                    font-weight: 600;
                    text-align: center;
                    background: linear-gradient(150deg, rgba(235, 124, 67, 1) 0%, rgba(234, 103, 66, 1) 100%);
                    border-radius: 6px;
                    &:hover {
                        box-shadow: 0px 6px 19px 1px rgba(234, 107, 66, 0.4);
                    }
                }
            }
            .rechargeTitle {
                width: 322px;
                height: 174px;
                vertical-align: middle;
                text-align: center;
                // display: table-cell;
                margin: 0 auto;
                img {
                    width: 322px;
                    height: 42px;
                    position: relative;
                    // left: 50%;
                    top: 79px;
                }
            }
            .cloudServer {
                width: 1200px;
                height: 592px;
                vertical-align: middle;
                text-align: center;
                margin: 0 auto;
                position: relative;
                .cloudserver {
                    width: 1200px;
                    height: 592px;
                }
                .gift {
                    position: absolute;
                    width: 85px;
                    height: 85px;
                    top: -3px;
                    left: -3px;
                    .cloudFloat {
                        width: 85px;
                        height: 85px;
                    }
                }
            }
            .talkline {
                width: 1200px;
                height: 574px;
                vertical-align: middle;
                text-align: center;
                margin: 0 auto;
                margin-top: 23px;
                position: relative;
                .talkLine {
                    width: 1200px;
                    height: 574px;
                }
                img {
                    z-index: 500;
                }
                .join {
                    position: absolute;
                    width: 160px;
                    height: 50px;
                    background: linear-gradient(150deg, rgba(235, 124, 67, 1) 0%, rgba(234, 103, 66, 1) 100%);
                    border-radius: 6px;
                    top: 289px;
                    left: 520px;
                    z-index: 10;
                    border: 0;
                    font-size: 20px;
                    font-family: Microsoft YaHei;
                    // font-weight: 600;
                    color: rgba(255, 255, 255, 1);
                    &:hover {
                        box-shadow: 0px 6px 19px 1px rgba(234, 107, 66, 0.4);
                    }
                }
                .gift {
                    position: absolute;
                    width: 85px;
                    height: 85px;
                    top: -3px;
                    left: -3px;
                    .talklineFloat {
                        width: 85px;
                        height: 85px;
                    }
                }
            }
            .usercaseTitle {
                width: 322px;
                height: 171px;
                vertical-align: middle;
                text-align: center;
                margin: 0 auto;
                img {
                    width: 322px;
                    height: 42px;
                    position: relative;
                    // left: 50%;
                    top: 79px;
                }
            }
            .usercase {
                // 客户案例
                width: 1200px;
                height: 460px;
                margin: 0 auto;
                .title {
                    height: 70px;
                    .Client {
                        width: 1200px;
                        height: 70px;
                    }
                }
                .caseContent {
                    height: 390px;
                    background-color: #fff;
                    position: relative;
                    border-radius: 0px 0px 10px 10px;
                    /deep/ {
                        .swiper-container {
                            height: 390px;
                        }

                        .swiper-pagination {
                            bottom: 36px;

                            .swiper-pagination-bullet {
                                width: 24px;
                                height: 4px;
                                border-radius: 0;
                                background: rgba(214, 214, 214, 1);
                                opacity: 1;
                                margin: 0 6px;
                            }
                            .swiper-pagination-bullet-active {
                                background: rgba(48, 52, 161, 1);
                            }
                        }
                    }
                    img {
                        display: inline-block;
                        width: 1038px;
                        height: 244px;
                        position: absolute;
                        top: 50px;
                        left: 81px;
                    }

                    .srcoll-container {
                        overflow-x: auto;
                        height: 244px;
                        height: 100%;

                        .slide-container {
                            width: 2400px;
                            display: flex;
                        }
                    }
                }
            }
            .activity_detail {
                width: 1200px;
                height: 305px;
                color: #fff;
                margin: 0 auto;
                margin-top: 100px;
                // margin-bottom: 100px;
                .introduce {
                    font-size: 22px;
                    font-weight: 600;
                    float: left;
                    margin-left: 90px;
                }
                .detail {
                    width: 851px;
                    font-size: 13px;
                    font-weight: 400;
                    line-height: 24px;
                    color: #fff;
                    opacity: 0.8;
                    // float: left;
                    margin-left: 300px;
                }
            }
        }
    }
}
</style>
