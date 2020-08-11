<template>
    <div>
        <div class="container_pc">
            <div class="container_wrapper">
                <div class="banner">
                    <button class="button1" @click="link()">
                        Sign Up Now
                    </button>
                </div>
                <div class="containerpc">
                    <!-- showroom live 开始 -->
                    <div class="live">
                        <div class="liveTitle">
                            <img src="../../assets/img/en/activity/pc/title_showroom2.png" alt="" />
                        </div>

                        <div class="liveContent">
                            <div class="class">
                                <div class="btns">
                                    <button class="btn1 commonBtn" @click="link()">
                                        Sign Up Now
                                    </button>
                                    <button class="btn2 commonBtn" @click="link()">
                                        Sign Up Now
                                    </button>
                                    <button class="btn3 commonBtn" @click="link()">
                                        Sign Up Now
                                    </button>
                                    <button class="btn4 commonBtn" @click="link()">
                                        Sign Up Now
                                    </button>
                                </div>
                            </div>
                            <div class="custom">
                                <button class="btn5" @click="link()">
                                    Sign Up Now
                                </button>
                                <a href="mailto:global@zego.im">
                                    <img class="emailPC" src="../../assets/img/en/activity/pc/email2.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <!--  showroom live 结束  -->

                    <!-- Client Stories 开始 -->
                    <div class="clientStories">
                        <div class="client">
                            <img src="../../assets/img/en/activity/pc/title_client2.png" alt="" />
                        </div>
                        <div class="client_content"></div>
                    </div>
                    <!-- rules开始 -->
                    <div class="rules">
                        <div class="rulesTitle">
                            <img src="../../assets/img/en/activity/pc/rulesTitle2.png" alt="" />
                        </div>
                        <div class="rules_content">
                            <span
                                >1. These special packages apply only to North America, Asia Pacific, and the Middle
                                East. <br />For the Asia Pacific region, different prices apply to different zones:
                                <br />Asia Pacific 1: Hong Kong, Macau, Vietnam, Singapore, Thailand <br />Asia Pacific
                                2: Taiwan, Japan, Korea, Malaysia, Indonesia <br />Asia Pacific 3: India, the
                                Philippines, Australia, and other Asia-Pacific countries.</span
                            >
                            <span>2. This promotion starts from now until September 30th, 2020. </span>
                            <span
                                >3. The special packages listed above are valid for one year from the date of purchase,
                                and the renewal of these packages is not supported. Any outstanding streaming minutes
                                and CDN traffic will be cleared upon expiry.
                            </span>
                            <span
                                >4. Except for special circumstances, these special packages are not eligible for a
                                refund. If a refund must be made due to Force Majeure, please consult with our business
                                staff in advance to make the necessary arrangement. In such a case, you will need to
                                repay the services you have enjoyed using the special packages before getting a refund.
                                For example, you may need to pay at regular prices for the free minutes and storage you
                                have used.
                            </span>
                            <span
                                >5. Should the user have any dishonest and fraudulent conduct during the purchase of
                                these packages and the use of the related services to obtain improper benefits, ZEGO
                                reserves the rights to disqualify the user from this promotion, withdraw the
                                transaction, and pursue legal liabilities of the users who violated the rules.
                            </span>
                            <span>6. By making the purchase, you agree to ZEGO's Terms of Service. </span>
                            <span>7. please refer to Ali-Cloud OSS product. </span>
                        </div>
                    </div>
                    <!-- rules结束 -->
                </div>

                <!-- 海外footer start-->
                <EnFooter />
                <!-- 海外footer end -->
            </div>
        </div>
        <div class="container_m">
            <div class="container_wrapper_m">
                <div class="banner">
                    <button class="buttton1_m" @click="link()">
                        Sign Up Now
                    </button>
                </div>
                <div class="containerMobile">
                    <!-- showroom live 开始 -->
                    <div class="live">
                        <div class="liveTitle">
                            <img src="../../assets/img/en/activity/mobile/title_live2.png" alt="" />
                        </div>
                        <div class="liveContent">
                            <ul class="row1">
                                <li class="basic">
                                    <img src="../../assets/img/en/activity/mobile/basic2.png" alt="" />
                                    <button class="btn_m1 combtn" @click="link()">Sign up Now</button>
                                </li>
                                <li class="standard">
                                    <img src="../../assets/img/en/activity/mobile/standard2.png" alt="" />
                                    <button class="btn_m2 combtn" @click="link()">Sign up Now</button>
                                </li>
                            </ul>
                            <ul class="row2">
                                <li class="advanced">
                                    <img src="../../assets/img/en/activity/mobile/advanced2.png" alt="" />
                                    <button class="btn_m3 combtn" @click="link()">Sign up Now</button>
                                </li>
                                <li class="enterprise">
                                    <img src="../../assets/img/en/activity/mobile/enterprise2.png" alt="" />
                                    <button class="btn_m4 combtn" @click="link()">Sign up Now</button>
                                </li>
                            </ul>
                            <div class="custom">
                                <!-- <img src="../../assets/img/en/activity/mobile/custom2.png" alt="" /> -->
                                <img src="../../assets/img/en/activity/mobile/contact.png" alt="" />
                                <button class="btn_m5 combtn" @click="link()">
                                    Sign Up Now
                                </button>
                                <a href="mailto:global@zego.im">
                                    <img class="email" src="../../assets/img/en/activity/mobile/email2x.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <!--  showroom live 结束  -->

                    <!-- Client Stories 开始 -->
                    <div class="clientStories">
                        <div class="client">
                            <img src="../../assets/img/en/activity/mobile/title_client2.png" alt="" />
                        </div>
                        <div class="client_content"></div>
                    </div>
                    <!-- rules开始 -->
                    <div class="rules">
                        <div class="rulesTitle">
                            <img src="../../assets/img/en/activity/mobile/title_rules2.png" alt="" />
                        </div>
                        <div class="rules_content">
                            <span
                                >1. These special packages apply only to North America, Asia Pacific, and the Middle
                                East. <br />For the Asia Pacific region, different prices apply to different zones:
                                <br />Asia Pacific 1: Hong Kong, Macau, Vietnam, Singapore, Thailand <br />Asia Pacific
                                2: Taiwan, Japan, Korea, Malaysia, Indonesia <br />Asia Pacific 3: India, the
                                Philippines, Australia, and other Asia-Pacific countries.</span
                            >
                            <span>2. This promotion starts from now until September 30th, 2020. </span>
                            <span
                                >3. The special packages listed above are valid for one year from the date of purchase,
                                and the renewal of these packages is not supported. Any outstanding streaming minutes
                                and CDN traffic will be cleared upon expiry.
                            </span>
                            <span
                                >4. Except for special circumstances, these special packages are not eligible for a
                                refund. If a refund must be made due to Force Majeure, please consult with our business
                                staff in advance to make the necessary arrangement. In such a case, you will need to
                                repay the services you have enjoyed using the special packages before getting a refund.
                                For example, you may need to pay at regular prices for the free minutes and storage you
                                have used.
                            </span>
                            <span
                                >5. Should the user have any dishonest and fraudulent conduct during the purchase of
                                these packages and the use of the related services to obtain improper benefits, ZEGO
                                reserves the rights to disqualify the user from this promotion, withdraw the
                                transaction, and pursue legal liabilities of the users who violated the rules.
                            </span>
                            <span>6. By making the purchase, you agree to ZEGO's Terms of Service. </span>
                            <span>7. Please refer to Ali-Cloud OSS product. </span>
                        </div>
                    </div>
                    <!-- rules结束 -->
                </div>

                <!-- 海外footer start-->
                <EnFooter />
                <!-- 海外footer end -->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Route } from 'vue-router';
import EnFooter from '../../components/en/EnFooter.vue';

interface WithRoute {
    $route: Route;
}
declare const $: any;
@Component({
    components: {
        EnFooter,
    },
})
export default class Activity extends Vue implements WithRoute {
    $route!: Route;
    link() {
        window.location.href = 'https://console.zego.im/account/register?lang=en';
    }
}
</script>
<style lang="scss" scoped>
.container_pc {
    display: block;
    .container_wrapper {
        .banner {
            background: url('../../assets/img/en/activity/pc/banner2.png') no-repeat;
            // background-size: 1920px 640px;
            margin-top: 68px;
            height: 640px;
            background-position: center;
            background-size: cover;
            position: relative;
            .button1 {
                border: 0;
                padding: 0;
                width: 313px;
                height: 96px;
                background: linear-gradient(-15deg, rgba(218, 27, 144, 1), rgba(130, 27, 218, 1));
                border: 2px solid rgba(255, 233, 233, 1);
                // border-image: linear-gradient(0deg, rgba(227, 180, 255, 1), rgba(255, 233, 233, 1)) 2 2;

                border-radius: 12px;
                font-size: 36px;
                font-weight: bold;
                color: rgba(255, 255, 255, 1);
                line-height: 30px;
                text-shadow: 0px 4px 8px rgba(211, 22, 74, 0.6);
                position: absolute;
                top: 55%;
                left: 50%;
                -webkit-transform: translate(-50%, 0);
                transform: translate(-50%, 0);
                outline: none;
                padding: 0;
                &:hover {
                    background: linear-gradient(-15deg, rgba(189, 20, 117, 1), rgba(106, 20, 190, 1));
                }
            }
        }
        .containerpc {
            background: url('../../assets/img/en/activity/pc/BAC2.png') center top no-repeat;
            background-size: cover;
            height: 2400px;
        }
        .live {
            .liveTitle {
                height: 36px;
                padding-top: 113px;
                padding-bottom: 59px;
                img {
                    width: 820px;
                    height: 36px;
                    display: block;
                    margin: 0 auto;
                }
            }
            .liveContent {
                height: 943px;
                position: relative;
                .class {
                    width: 1200px;
                    height: 588px;
                    margin: 0 auto;
                    background: url('../../assets/img/en/activity/pc/class-pc.png') no-repeat;
                    background-size: 1200px 588px;
                    background-position: center;
                    margin-bottom: 30px;
                    border-radius: 9px;
                    position: relative;
                    .btns {
                        position: absolute;
                        top: 455px;
                        left: 50px;
                    }
                }
                .custom {
                    width: 1200px;
                    height: 330px;
                    margin: 0 auto;
                    background: url('../../assets/img/en/activity/pc/custom1.png') no-repeat;
                    background-size: 1200px 330px;
                    background-position: center;
                    border-radius: 9px;
                    position: relative;
                    .emailPC {
                        position: absolute;
                        width: 163px;
                        height: 18px;
                        right: 354px;
                        bottom: 38px;
                        // border-bottom: 1px solid #000;
                        // border-bottom: 1px dotted red;
                        // &:after {
                        //     content: '';
                        //     position: absolute;
                        //     left: 0px;
                        //     top: auto;
                        //     bottom: 0;
                        //     right: auto;
                        //     height: 1px;
                        //     width: 163px;
                        //     background-color: #32b66b;
                        // }
                    }
                    .btn5 {
                        width: 187px;
                        height: 52px;
                        border-radius: 4px;
                        font-size: 18px;
                        font-weight: bold;
                        color: rgba(255, 255, 255, 1);
                        line-height: 30px;
                        border: 0;
                        padding: 0;
                        outline: none;
                        z-index: 2000;
                        position: absolute;
                        bottom: 133px;
                        left: 683px;

                        &:hover {
                            box-shadow: none;
                        }
                        background: rgba(0, 43, 255, 1);
                        &:hover {
                            background: rgba(0, 43, 255, 0.7);
                        }
                    }
                }
                .btns {
                    width: 1200px;
                    height: 52px;
                    .commonBtn {
                        width: 187px;
                        height: 52px;
                        border-radius: 4px;
                        font-size: 18px;
                        font-weight: bold;
                        color: rgba(255, 255, 255, 1);
                        line-height: 30px;
                        border: 0;
                        padding: 0;
                        outline: none;
                        z-index: 2000;

                        &:hover {
                            box-shadow: none;
                        }
                    }
                    .btn1 {
                        background: linear-gradient(180deg, rgba(64, 106, 232, 1), rgba(0, 69, 255, 1));
                        box-shadow: 0px 4px 8px 0px rgba(4, 71, 254, 0.4);
                        &:hover {
                            background: linear-gradient(180deg, rgba(57, 94, 208, 1), rgba(1, 63, 229, 1));
                        }
                    }
                    .btn2 {
                        background: linear-gradient(180deg, rgba(41, 184, 255, 1), rgba(42, 167, 255, 1));
                        box-shadow: 0px 4px 8px 0px rgba(42, 169, 255, 0.4);
                        margin-left: 97px;
                        &:hover {
                            background: linear-gradient(180deg, rgba(37, 165, 229, 1), rgba(38, 150, 229, 1));
                        }
                    }
                    .btn3 {
                        background: linear-gradient(180deg, rgba(23, 220, 205, 1), rgba(7, 202, 185, 1));
                        box-shadow: 0px 4px 8px 0px rgba(8, 203, 186, 0.4);
                        margin-left: 97px;
                        &:hover {
                            background: linear-gradient(180deg, rgba(20, 197, 183, 1), rgba(6, 181, 166, 1));
                        }
                    }
                    .btn4 {
                        background: linear-gradient(180deg, rgba(154, 52, 219, 1), rgba(113, 50, 242, 1));
                        box-shadow: 0px 4px 8px 0px rgba(148, 52, 222, 0.4);
                        margin-left: 97px;
                        &:hover {
                            background: linear-gradient(180deg, rgba(137, 47, 198, 1), rgba(102, 45, 216, 1));
                        }
                    }
                }
            }
        }
        .clientStories {
            .client {
                // width: 448px;
                // height: 36px;
                margin-top: 72px;
                margin-bottom: 50px;
                // background-color: #2244dd;
                img {
                    display: block;
                    width: 448px;
                    height: 36px;
                    margin: 0 auto;
                }
            }
            .client_content {
                height: 271px;
                background: url('../../assets/img/en/activity/pc/client_content2x.png') no-repeat;
                background-size: 1200px 271px;
                background-position-x: center;
            }
        }
        .rules {
            .rulesTitle {
                // width: 593px;
                // height: 36px;
                margin-top: 80px;
                margin-bottom: 50px;
                img {
                    display: block;
                    width: 593px;
                    height: 36px;
                    margin: 0 auto;
                }
            }
            .rules_content {
                width: 1200px;
                height: 526px;
                margin: 0 auto;
                background-color: #fff;
                padding: 26px 108px;
                margin-bottom: 150px;
                border-radius: 10px;
                span {
                    display: block;
                    font-size: 16px;
                    font-family: Helvetica Neue;
                    font-weight: 400;
                    color: rgba(10, 10, 54, 1);
                    line-height: 24px;
                    margin-bottom: 12px;
                    word-break: keep-all;
                }
            }
        }
    }
}
.container_m {
    display: none;
}
@media screen and (max-width: 1000px) {
    .container_pc {
        display: none;
    }
    .container_m {
        display: block;
        .container_wrapper_m {
            // width: 100%;
            background: rgba(10, 10, 54, 1);
            .banner {
                // display: flex;
                // flex-direction: column;
                // justify-content: space-between;
                // align-items: center;

                width: 7.5rem;
                height: 6.4rem;
                margin: 0 auto;
                margin-top: 1rem;
                background: url('../../assets/img/en/activity/mobile/banner_m2x.jpg') no-repeat;
                background-position-x: center;
                background-size: cover;
                position: relative;
                overflow: hidden;
                .buttton1_m {
                    position: absolute;
                    // bottom: 25px;
                    // left: 0.5rem;
                    top: 77%;
                    left: 28%;
                    -webkit-transform: translate(-50%, 0);
                    -moz-transform: translate(-50%, 0);
                    transform: translate(-50%, 0);
                    width: 3.13rem;
                    height: 0.96rem;
                    background: linear-gradient(-15deg, rgba(218, 27, 144, 1), rgba(130, 27, 218, 1));
                    border: 0.02rem solid rgba(255, 233, 233, 1);
                    border-radius: 0.12rem;
                    color: #fff;
                    font-size: 0.36rem;
                }
            }
            .containerMobile {
                .live {
                    .liveTitle {
                        padding-top: 0.62rem;
                        padding-bottom: 0.42rem;
                        img {
                            display: block;
                            width: 5.32rem;
                            // height: 32px;
                            margin: 0 auto;
                        }
                    }
                    .liveContent {
                        padding-left: 0.32rem;
                        .combtn {
                            border: 0;
                            padding: 0;
                            width: 2.14rem;
                            height: 0.6rem;
                        }
                        .row1 {
                            // width: 100%
                            height: 5.53rem;
                            display: block;
                            margin: 0 auto;
                            li {
                                float: left;
                                margin-bottom: 14px;
                            }
                            .basic {
                                width: 3.39rem;
                                // height: 277px;
                                margin-right: 0.29rem;
                                position: relative;
                                img {
                                    width: 3.39rem;
                                    // height: 277px;
                                }
                                .btn_m1 {
                                    position: absolute;
                                    background: linear-gradient(180deg, rgba(64, 106, 232, 1), rgba(0, 69, 255, 1));
                                    box-shadow: 0px 2px 4px 0px rgba(4, 71, 254, 0.4);
                                    border-radius: 2px;
                                    left: 0.63rem;
                                    bottom: 0.36rem;
                                    font-size: 0.24rem;
                                    color: #fff;
                                    font-weight: bold;
                                    text-align: center;
                                }
                            }
                            .standard {
                                width: 3.18rem;
                                // height: 277px;
                                position: relative;
                                img {
                                    width: 3.18rem;
                                    // height: 277px;
                                }
                                .btn_m2 {
                                    position: absolute;
                                    background: linear-gradient(180deg, rgba(41, 184, 255, 1), rgba(42, 167, 255, 1));
                                    box-shadow: 0px 2px 4px 0px rgba(4, 71, 254, 0.4);
                                    border-radius: 2px;
                                    left: 0.56rem;
                                    bottom: 0.36rem;
                                    font-size: 0.24rem;
                                    color: #fff;
                                    font-weight: bold;
                                    text-align: center;
                                }
                            }
                        }
                        .row2 {
                            // width: 345px;
                            height: 5.53rem;
                            margin: 0 auto;
                            li {
                                float: left;
                                // margin-top: 14px;
                            }
                            .advanced {
                                width: 3.39rem;
                                // height: 277px;
                                margin-right: 0.28rem;
                                position: relative;
                                img {
                                    width: 3.39rem;
                                    // height: 277px;
                                }
                                .btn_m3 {
                                    position: absolute;
                                    background: linear-gradient(180deg, rgba(23, 220, 205, 1), rgba(7, 202, 185, 1));
                                    box-shadow: 0px 2px 4px 0px rgba(4, 71, 254, 0.4);
                                    border-radius: 2px;
                                    left: 0.62rem;
                                    bottom: 0.4rem;
                                    font-size: 0.24rem;
                                    color: #fff;
                                    // line-height: 30px;
                                    font-weight: bold;
                                    text-align: center;
                                    outline: none;
                                }
                            }
                            .enterprise {
                                width: 3.18rem;
                                // height: 277px;
                                position: relative;
                                img {
                                    width: 3.18rem;
                                    // width: 159px;
                                    // height: 277px;
                                }
                                .btn_m4 {
                                    position: absolute;
                                    background: linear-gradient(180deg, rgba(154, 52, 219, 1), rgba(113, 50, 242, 1));
                                    box-shadow: 0px 2px 4px 0px rgba(4, 71, 254, 0.4);
                                    border-radius: 2px;
                                    left: 0.56rem;
                                    bottom: 0.4rem;
                                    font-size: 0.24rem;
                                    color: #fff;
                                    font-weight: bold;
                                    text-align: center;
                                }
                            }
                        }
                        .custom {
                            width: 6.85rem;
                            // height: 320px;
                            // margin: 0 auto;
                            margin-top: 28px;
                            position: relative;
                            // background: url('../../assets/img/en/activity/mobile/custom2.png') no-repeat;
                            // background-size: 343px 320px;
                            .email {
                                position: absolute;
                                display: block;
                                width: 2.22rem;
                                height: 0.24rem;
                                top: 0.97rem;
                                right: 0.37rem;
                                // border-bottom: 0.01rem solid #000;
                            }
                            img {
                                display: block;
                                width: 6.85rem;
                                height: 6.4rem;
                            }
                            .btn_m5 {
                                position: absolute;
                                background: rgba(0, 43, 255, 1);
                                border-radius: 2px;
                                left: 2.35rem;
                                top: 2.25rem;
                                font-size: 0.24rem;
                                color: #fff;
                                font-weight: bold;
                                text-align: center;
                            }
                        }
                    }
                }
                .clientStories {
                    .client {
                        padding-top: 0.77rem;
                        padding-bottom: 0.31rem;
                        img {
                            display: block;
                            width: 3.36rem;
                            // height: 16px;
                            margin: 0 auto;
                        }
                    }
                    .client_content {
                        height: 7.64rem;
                        background: url('../../assets/img/en/activity/mobile/client_content.png') no-repeat;
                        background-size: 6.88rem 7.64rem;
                        background-position-x: center;
                    }
                }
                .rules {
                    .rulesTitle {
                        padding-top: 0.8rem;
                        padding-bottom: 0.37rem;
                        img {
                            display: block;
                            width: 4.93rem;
                            height: 0.31rem;
                            margin: 0 auto;
                        }
                    }
                    .rules_content {
                        width: 6.86rem;
                        // height: 478px;
                        margin: 0 auto;
                        // padding: 18px 7.5px 8px 7.5px;
                        padding: 0.37rem 0.12rem 0.36rem 0.19rem;
                        background: rgba(250, 250, 251, 1);
                        border-radius: 6px;
                        margin-bottom: 0.44rem;
                        span {
                            display: block;
                            font-size: 0.22rem;
                            font-weight: 400;
                            color: rgba(10, 10, 54, 1);
                            line-height: 0.3rem;
                            word-break: keep-all;
                            margin-bottom: 0.32rem;
                            &:nth-child(7) {
                                margin-bottom: 0;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
