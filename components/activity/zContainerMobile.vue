<template>
    <div class="container_mobile">
        <!-- 活动移动端适配 -->
        <article class="container-wrapper">
            <!-- 活动主要内容 -->
            <div class="activity_contain">
                <!-- 周年促banner -->
                <el-button @click="dialogVisible = true">立即咨询 </el-button>
                <el-dialog :visible.sync="dialogVisible" :close-on-click-modal="true" @close="dialogVisible = false">
                    <img src="../../assets/img/nav/activity/mobile/xcode_mobile2x.png" alt="" />
                </el-dialog>
            </div>
            <div class="activity_register">
                <div class="background">
                    <!-- 注册有礼start -->
                    <div class="registerTitle">
                        <img src="../../assets/img/nav/activity/mobile/register2.png" alt="" />
                    </div>
                    <div class="SDK">
                        <div class="sdk_float">
                            <div class="gift">
                                <img class="SDKfloat" src="../../assets/img/nav/activity/mobile/SDKFloat2.png" alt="" />
                            </div>
                            <img class="bg" src="../../assets/img/nav/activity/mobile/SDK-m.png" alt="" />
                        </div>

                        <a class="btn_register_wrap" href="https://console.zego.im/account/register">
                            <el-button class="btn_register">
                                立即注册
                                <img src="../../assets/img/nav/activity/iconRight.png" alt="" />
                            </el-button>
                        </a>
                        <div class="expressSDK video">
                            <div class="express">Express-Video SDK</div>
                            <div class="interaction">支持超低延迟多人视频/音频互动</div>
                            <div class="videoContent">
                                <a href="https://doc-zh.zego.im/zh/2969.html" target="_blank" class="common download"
                                    >下载SDK包</a
                                >
                                <a href="https://doc-zh.zego.im/zh/3125.html" target="_blank" class="common download"
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
                                <a href="https://doc-zh.zego.im/zh/3564.html" target="_blank" class="common download"
                                    >下载SDK包</a
                                >
                                <a href="https://doc-zh.zego.im/zh/3583.html" target="_blank" class="common download"
                                    >下载示例源码</a
                                >
                                <a href="https://doc-zh.zego.im/zh/3575.html" target="_blank" class="common quick"
                                    >快速集成</a
                                >
                            </div>
                        </div>
                    </div>
                    <!-- 注册有礼end -->
                    <!-- 充值有礼 start -->
                    <div class="rechargeTitle">
                        <img src="../../assets/img/nav/activity/mobile/recharge2.png" alt="" />
                    </div>
                    <div class="cloudServer">
                        <div class="cloudServer_float">
                            <!-- 充值有礼悬浮框 -->
                            <div class="gift">
                                <img
                                    class="cloudFloat"
                                    src="../../assets/img/nav/activity/mobile/cloudServerFloat2.png"
                                    alt=""
                                />
                            </div>
                            <div class="bg">
                                <img src="../../assets/img/nav/activity/mobile/cloudServer2.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <!-- 充值有礼 end -->
                    <!-- talkline  start -->
                    <div class="talkline">
                        <div class="talkline_float">
                            <div class="gift">
                                <img
                                    class="talklineFloat"
                                    src="../../assets/img/nav/activity/mobile/talklineFloat2.png"
                                    alt=""
                                />
                            </div>
                            <img class="bg" src="../../assets/img/nav/activity/mobile/talkline2.png" alt="" />
                        </div>
                        <!-- <img class="talkLine" src="../../assets/img/nav/activity/mobile/talkline2.png" alt="" /> -->
                        <a class="join-btn-wrap" href="https://www.talkline.cn/free_use">
                            <el-button class="join"
                                >立即参与
                                <img src="../../assets/img/nav/activity/iconRight.png" alt="" />
                            </el-button>
                        </a>
                    </div>
                    <div class="usercaseTitle">
                        <!-- 客户案例 -->
                        <img src="../../assets/img/nav/activity/mobile/usercase2.png" alt="" />
                    </div>
                    <div class="usercase">
                        <div class="caseContent">
                            <swiperCpt />
                            <!-- <div v-swiper:mySwiper="swiperOption">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <img src="../../assets/img/nav/activity/mobile/client1x.png" />
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="../../assets/img/nav/activity//mobile/client2x.png" />
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="../../assets/img/nav/activity/mobile/client3x.png" />
                                        </div>
                                    </div>
                                    <div class="swiper-pagination"></div>
                                </div> -->
                            <div class="slide"></div>
                            <div class="slide2"></div>
                            <div class="slide3"></div>
                        </div>
                    </div>
                    <div class="activity_detail">
                        <div class="introduce">活动细则及说明</div>
                        <div class="detail">
                            <div class="row">
                                1.“注册有礼”活动面向的是活动期间新注册用户，从注册当月开始至活动截止月，每月赠送20000分钟，按“先音频后视频，分辨率从低到高”的顺序扣除，2020年12月31日24:00前均可使用
                            </div>
                            <div class="row">
                                2.“充值有礼”中的音视频云服务充值特惠仅面向新用户，包括活动期间新注册用户及所有未签约上线用户
                            </div>

                            <div class="row">
                                3.本活动赠送的白板、文件共享、IM等配套功能，仅供签约上线后的前两个月免费使用
                            </div>
                            <div class="row">
                                4.TalkLine视频会议充值特惠，暂不支持iOS端参加
                            </div>
                            <div class="row">
                                5.活动期间，符合活动规则的所有优惠均可同时享受
                            </div>
                            <div class="row">
                                6.活动赠品将在7个工作日内发放，详情可联系即构商务咨询
                            </div>
                            <div class="row">
                                7.注意：充值金额不支持退款
                            </div>
                            <div class="row">
                                8.本活动最终解释权归即构科技所有
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
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
@media screen and (max-width: 1000px) {
    .container_mobile {
        display: block;
        background: #0a1043;
        .container-wrapper {
            .activity_contain {
                // width: 640px;
                height: 7.32rem;
                background: url('../../assets/img/nav/activity/mobile/banner_slice2x.png') no-repeat;
                // background-size: 375px 320px;
                background-position: center bottom;
                background-size: 100%;
                // background-position-y: 30px;
                position: relative;
                /deep/.el-dialog {
                    border-radius: 15px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 3.2rem;
                    height: 3.2rem;
                    margin: 0 !important;
                    transform: translate(-50%, -50%);
                }
                /deep/.el-dialog__body {
                    width: 3.2rem;
                    height: 3.2rem;
                    padding: 0 !important;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                /deep/.el-dialog__header {
                    display: none;
                    .el-dialog__headerbtn i::before {
                        content: '';
                    }
                }
                .el-button {
                    // display: flex;
                    // justify-content: center;
                    // align-items: center;
                    width: 2.4rem;
                    height: 0.66rem;
                    background: linear-gradient(90deg, rgba(53, 193, 251, 1) 23%, rgba(251, 65, 223, 1) 87%);
                    border-radius: 0.1rem;
                    border: 0;
                    font-size: 0.26rem;
                    // line-height: 29px;
                    text-align: center;
                    font-weight: bold;
                    color: rgba(255, 255, 255, 1);
                    position: absolute;
                    bottom: 0.77rem;
                    left: 50%;
                    transform: translate(-50%, 0);
                    outline: none;
                    padding: 0;
                    img {
                        display: none;
                    }
                    // .el-dialog__headerbtn {
                    //     display: none;
                    //     .el-dialog__close {
                    //         display: none;
                    //     }
                    // }
                }
            }
        }
        .activity_register {
            padding: 0 0.3rem;
            .background {
                .registerTitle {
                    width: 3.22rem;
                    // height: 21px;
                    margin: 0 auto;
                    padding-top: 41px;
                    padding-bottom: 26px;
                    img {
                        width: 100%;
                        // height: 21px;
                    }
                }
                .SDK {
                    position: relative;
                    .sdk_float {
                        width: 100%;

                        // height: 671px;
                        // margin: 0 auto;
                        // background-position-x: center;
                        // background-size: 345px 671px;
                        position: relative;
                        .gift {
                            width: 53px;
                            height: 53px;
                            position: absolute;
                            right: -2px;
                            top: -2px;
                            .SDKfloat {
                                width: 53px;
                                height: 53px;
                            }
                        }
                    }

                    .btn_register_wrap {
                        position: absolute;
                        top: 38%;
                        left: 50%;
                        transform: translate(-50%, 0);
                    }
                    .btn_register {
                        width: 2rem;
                        height: 0.66rem;
                        background: linear-gradient(150deg, rgba(235, 124, 67, 1) 0%, rgba(234, 103, 66, 1) 100%);
                        border-radius: 5px;
                        border: 0;
                        padding: 0;
                        font-size: 0.28rem;
                        color: #fff;
                        font-weight: 600;
                        img {
                            width: 10px;
                            height: 10px;
                        }
                    }

                    .bg {
                        width: 100%;
                    }
                    .expressSDK {
                        width: 100%;
                        height: 3.1rem;
                        padding: 0.4rem 0.6rem;
                        .express {
                            height: 0.36rem;
                            font-size: 0.36rem;
                            color: #fff;
                            font-weight: bold;
                            line-height: 0.36rem;
                            // margin-bottom: 10px;
                        }
                        .interaction {
                            font-size: 0.26rem;
                            height: 0.26rem;
                            font-weight: 400;
                            color: rgba(255, 255, 255, 1);
                            line-height: 0.26rem;
                            margin: 0.19rem 0 0.38rem;
                        }
                        .videoContent {
                            width: 100%;
                            padding-top: 0.12rem;
                            // line-height: 30px;
                            display: flex;
                            flex-wrap: wrap;
                            .common {
                                font-size: 0.24rem;
                                width: 2.4rem;
                                display: block;
                                // font-family: PingFang SC;
                                font-weight: 400;
                                height: 0.64rem;
                                line-height: 0.64rem;
                                color: rgba(35, 36, 39, 1);
                                padding-left: 0.46rem;

                                &.download {
                                    background: url('../../assets/img/nav/activity/download_icon2.png') no-repeat left
                                        center;
                                    background-size: 0.32rem;
                                }
                                &.quick {
                                    background: url('../../assets/img/nav/activity/link_icon2.png') no-repeat left
                                        center;
                                    background-size: 0.32rem;
                                }

                                &:nth-child(2n + 1) {
                                    margin-right: 0.3rem;
                                }

                                // &:hover {
                                //     color: #005bf9;
                                //     &.download {
                                //         // width: 16px;
                                //         // height: 16px;
                                //         background-image: url('../../assets/img/nav/activity/download_iconHover2.png');
                                //         background-size: 16px 16px;
                                //     }
                                //     &.quick {
                                //         background: url('../../assets/img/nav/activity/link_icon_hover2.png') no-repeat
                                //             left center;
                                //         background-size: 16px 16px;
                                //     }
                                // }
                            }
                        }
                    }
                    .video {
                        position: absolute;
                        top: 49.5%;
                    }
                    .audio {
                        position: absolute;
                        top: 74%;
                    }
                }
                .rechargeTitle {
                    width: 3.22rem;
                    // height: 21px;
                    margin: 0 auto;
                    padding-top: 40px;
                    padding-bottom: 25px;
                    img {
                        width: 100%;
                    }
                }
                .cloudServer {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .cloudServer_float {
                        width: 100%;
                        position: relative;
                        .bg {
                            width: 100%;
                            img {
                                width: 100%;
                            }
                        }
                        .gift {
                            position: absolute;
                            width: 53px;
                            height: 53px;
                            right: -2px;
                            top: -2px;
                            img {
                                width: 53px;
                                height: 53px;
                            }
                        }
                    }
                }
                .talkline {
                    margin-top: 22px;
                    position: relative;
                    .talkline_float {
                        width: 100%;
                        position: relative;

                        .bg {
                            width: 100%;
                        }
                        .talklineFloat {
                            position: absolute;
                            width: 53px;
                            height: 53px;
                            right: -2px;
                            top: -2px;
                            img {
                                width: 53px;
                                height: 53px;
                            }
                        }
                    }

                    .join-btn-wrap {
                        position: absolute;
                        top: 59.2%;
                        left: 50%;
                        transform: translate(-50%, 0);
                        // left: 38%;
                    }
                    .join {
                        width: 2rem;
                        height: 0.66rem;
                        background: linear-gradient(150deg, rgba(235, 124, 67, 1) 0%, rgba(234, 103, 66, 1) 100%);
                        border-radius: 5px;
                        border: 0;
                        font-size: 0.28rem;
                        font-weight: 600;
                        color: rgba(255, 255, 255, 1);
                        padding: 0;
                        outline: none;
                        img {
                            width: 10px;
                            height: 10px;
                        }
                    }
                }
                .usercaseTitle {
                    width: 3.22rem;
                    // height: 21px;
                    margin: 0 auto;
                    padding-top: 40px;
                    padding-bottom: 25px;
                    img {
                        width: 100%;
                    }
                }
                .usercase {
                    height: 11.6rem;
                    background: url('../../assets/img/nav/activity/mobile/onlineEdu.png') no-repeat;
                    background-position: center center;
                    background-size: cover;
                    position: relative;
                    .caseContent {
                        width: 100%;
                        height: 7.5rem;
                        background-color: #fff;
                        position: absolute;
                        top: 3.2rem;
                        /deep/ {
                            .swiper-container {
                                height: 7.9rem;
                                .swiper-wrapper {
                                    .swiper-slide {
                                        text-align: center;
                                        img {
                                            // position: absolute;
                                            width: 6.3rem;
                                            height: 7rem;
                                            // left: 0px;
                                            // top: 0px;
                                        }
                                    }
                                }
                            }

                            .swiper-pagination {
                                bottom: 30px;
                                background-color: red;
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
                        /deep/.swiper-pagination {
                            background: #fff;
                            bottom: 0px;
                        }
                        img {
                            display: inline-block;
                            width: 615px;
                            height: 352px;
                            position: absolute;
                            top: 10px;
                            left: 11px;
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
                    // display: flex;
                    // justify-content: center;
                    // align-items: center;
                    // width: 306px;
                    padding: 0 0.3rem 0.8rem;
                    .introduce {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 0.32rem;
                        margin: 0 auto;
                        font-size: 0.32rem;
                        font-weight: 600;
                        color: rgba(255, 255, 255, 1);
                        line-height: 0.34rem;
                        margin-top: 0.78rem;
                        margin-bottom: 0.48rem;
                    }
                    .detail {
                        // width: 300px;
                        margin: 0 auto;
                        // font-size: 11px;
                        // text-align: left;
                        // font-weight: 400;
                        // line-height: 18px;
                        // color: rgba(179, 179, 179, 1);
                        word-wrap: break-word;
                        white-space: normal;
                        text-align: justify;
                        .row {
                            margin-left: 0;
                            margin-right: 0;
                        }
                        .row:nth-child(1n + 0) {
                            display: block;
                            font-size: 0.22rem;
                            font-family: Microsoft YaHei;
                            font-weight: 400;
                            color: rgba(179, 179, 179, 1);
                            line-height: 0.36rem;
                            margin-bottom: 0.26rem;
                        }
                        .row:nth-child(8) {
                            margin-bottom: 0px;
                        }
                    }
                }
            }
        }
    }
}
</style>
