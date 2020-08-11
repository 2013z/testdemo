<template>
    <div class="foreign-container">
        <EnBanner
            class="customer-banner"
            :button-text-color="customer.color"
            :style="{
                backgroundColor: customer.bgColor,
                backgroundImage: `url(${customer.bgBanner})`,
            }"
        >
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div class="banner-content" v-html="customer.bannerContent"></div>
            <div slot="bg" class="bg-img">
                <img :src="customer.logo" />
            </div>
        </EnBanner>

        <div class="container module">
            <h1>Client Proflie</h1>
            <b-row class="proflie no-gutters">
                <b-col cols="12" lg="8">
                    <p v-for="(p, index) in customer.client.proflie" :key="index">{{ p }}</p>
                    <img class="poster" :src="customer.poster" />
                </b-col>
                <b-col cols="12" lg="4">
                    <div class="details">
                        <div class="details-box">
                            <div class="details-box-item">
                                <div class="title" :class="customer.titleClass">{{ customer.title }}</div>
                                <div
                                    v-for="(detail, index) in customer.client.details"
                                    :key="index"
                                    class="summary-item"
                                >
                                    <!-- eslint-disable-next-line vue/no-v-html -->
                                    <div class="summary-item-content" v-html="detail.content"></div>
                                    <div class="summary-item-name">{{ detail.name }}</div>
                                </div>
                            </div>
                            <div class="details-box-item">
                                <div class="subtitle">Products Used</div>
                                <div class="product-item">
                                    <img class="product-item-icon" src="~/assets/img/en/case/customer/icon-video.png" />
                                    Zego Video Solution
                                </div>
                                <div class="product-item">
                                    <img class="product-item-icon" src="~/assets/img/en/case/customer/icon-live.png" />
                                    Zego Live Streaming
                                </div>
                            </div>
                            <div class="details-box-item">
                                <div class="try-btn" @click="tryUs">
                                    Try it now
                                </div>
                            </div>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>

        <div class="bg-gray-light">
            <div class="container module">
                <h1 class="mb-small">Business Challenge</h1>
                <p v-for="(p, index) in customer.challenge" :key="index">{{ p }}</p>
            </div>
        </div>

        <div class="blue-ball-container">
            <div class="container module solution" :class="{ flex: customer.solution.hasImg }">
                <div class="left-part">
                    <h1 class="mb-small">Case Solution</h1>
                    <p v-for="(p, index) in customer.solution.text" :key="index">{{ p }}</p>
                </div>
                <img v-if="customer.solution.hasImg" class="solution-img" :src="customer.solution.img" />
            </div>
        </div>

        <div v-if="customer.provide && customer.provide.length > 0" class="container module">
            <h1 class="mb-small">Provide the Value</h1>
            <p v-for="(p, index) in customer.provide" :key="index">{{ p }}</p>
        </div>

        <div v-if="customer.values && customer.values.length > 0" class="container module">
            <h1 class="mb-small">Business Value</h1>
            <p v-for="(p, index) in customer.values" :key="index">{{ p }}</p>
        </div>

        <div v-if="customer.scenario && customer.scenario.length > 0" class="container module">
            <h1>SCENES</h1>
            <div class="scenarios">
                <div v-for="(scenario, index) in customer.scenario" :key="index" class="scenarios-item">
                    <img class="icon" :src="scenario.icon" alt="" />
                    <div class="title">{{ scenario.title }}</div>
                    <div class="desc">{{ scenario.desc }}</div>
                </div>
            </div>
        </div>

        <div class="bg-gray-light">
            <div class="container module price">
                <h1>Flexible Pricing For Video</h1>
                <b-row align-h="around">
                    <b-col cols="12" lg="4" class="price-item">
                        <img class="price-item-icon" src="~/assets/img/en/case/customer/icon-pay.png" alt="" />
                        <div class="price-item-title">Pay-as-you-go</div>
                        <p class="price-item-desc">
                            Pay-as-you-go,with zero upfront cost
                        </p>
                    </b-col>
                    <b-col cols="12" lg="4" class="price-item">
                        <img class="price-item-icon" src="~/assets/img/en/case/customer/icon-cost.png" alt="" />
                        <div class="price-item-title">Zero upfront cost</div>
                        <p class="price-item-desc">
                            Start for free
                        </p>
                    </b-col>
                    <b-col cols="12" lg="4" class="price-item">
                        <img class="price-item-icon" src="~/assets/img/en/case/customer/icon-free.png" alt="" />
                        <div class="price-item-title">10,000minutes</div>
                        <p class="price-item-desc">
                            First 10,000 minutes per month for free
                        </p>
                    </b-col>
                </b-row>
                <div class="price-btns">
                    <a class="price-btns-item" target="_blank" href="https://doc-en.zego.im/en/693.html">
                        Learn more
                    </a>
                    <EnTalkToExpert class="price-btns-item">
                        <div class="price-btns-item-text">
                            Talk to an Expert
                        </div>
                    </EnTalkToExpert>
                </div>
            </div>
        </div>

        <EnBottomBgLink />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import EnBottomBgLink from '~/components/en/EnBottomBgLink.vue';
import EnBanner from '~/components/en/EnBanner.vue';
import EnTalkToExpert from '~/components/en/EnTalkToExpert.vue';
import ClickOutside from 'vue-click-outside';

@Component({
    name: 'case-index',
    directives: { ClickOutside },
    components: { EnBottomBgLink, EnBanner, EnTalkToExpert },
})
export default class CaseIndex extends Vue {
    asyncData({ params }: any) {
        const { customers } = require('~/assets/json/en-case-customer.json');
        const customer = customers.find((item: any) => item.id === params.id);
        if (customer) {
            customer.bgBanner = require(`~/assets/img/en/case/customer/${customer.id}/bg-banner.png`);
            customer.logo = require(`~/assets/img/en/case/customer/${customer.id}/logo.png`);
            customer.poster = require(`~/assets/img/en/case/customer/${customer.id}/poster.png`);
            if (customer.solution.hasImg) {
                customer.solution.img = require(`~/assets/img/en/case/customer/${customer.id}/solution.png`);
            }
            if (customer.scenario) {
                customer.scenario.forEach((item: any) => {
                    item.icon = require(`~/assets/img/en/case/customer/${item.icon}`);
                });
            }
        }
        return {
            customer,
        };
    }
    head() {
        return {
            title: 'Live Steaming Solutions- Zego',
            meta: [
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'Live Steaming',
                },
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Dual-stream live broadcast, multi-player connected microphone, voice live, interactive mini-games, rich mode to meet the various needs of entertainment live broadcast.',
                },
            ],
            htmlAttrs: {
                lang: 'en',
            },
        };
    }
    tryUs() {
        window.open('https://console.zego.im/acount/register');
    }
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/en-third-common.scss';

.no-gutters {
    @include gutter(0);
}

.customer-banner {
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
}
.banner-content {
    width: 532px;
    font-weight: bold;
    color: #fff;
    font-size: 40px;
    max-width: 100%;
    line-height: 1.2;
}
.bg-img {
    position: absolute;
    right: 10px;
    top: 50%;
    z-index: 0;
    transform: translateY(-50%);
    // img {
    //     width: 100%;
    // }
}
@media screen and (max-width: 1000px) {
    .banner-content {
        font-size: 0.4rem;
        padding: 0 0 0;
    }
    .bg-img {
        position: static;
        // opacity: 0.3;
        width: 80%;
        margin: 1rem auto;
        // left: 10%;
        // top: auto;
        // bottom: 0.4rem;
        transform: none;
        img {
            width: 100%;
        }
    }
}

.proflie {
    .poster {
        width: 100%;
    }
    p {
        font-weight: 400;
        margin-bottom: 2em;
    }
    .details {
        padding-left: 72px;
        &-box {
            text-align: center;
            box-shadow: 0px 5px 30px 0px rgba(9, 17, 40, 0.08);
            &-item {
                padding: 22px 48px;
                border-bottom: 2px solid #d7d7d7;
                &:last-child {
                    border-bottom: none;
                }
                .title {
                    font-size: 40px;
                    color: #fff;
                    background-color: #0336f3;
                    &.small {
                        line-height: 60px;
                        font-size: 27px;
                    }
                }
                .subtitle {
                    font-size: 18px;
                    color: #666;
                }
                .summary-item {
                    margin-top: 30px;
                    &-content {
                        font-size: 40px;
                        font-weight: 500;
                        color: #0336f3;
                        line-height: 1;
                        text-transform: uppercase;
                    }
                    &-name {
                        font-size: 16px;
                        font-weight: 500;
                        color: #666;
                    }
                }
                .try-btn {
                    text-align: center;
                    width: 100%;
                    font-size: 16px;
                    color: #fff;
                    font-weight: 500;
                    height: 40px;
                    line-height: 40px;
                    background-color: #0336f3;
                    border-radius: 4px;
                    cursor: pointer;
                }
                .product-item {
                    margin-top: 15px;
                    font-size: 16px;
                    font-weight: 500;
                    color: #666;
                    &-icon {
                        width: 35px;
                        margin-right: 18px;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 1000px) {
    .proflie {
        .details {
            margin-top: 0.4rem;
            padding-left: 0;
            &-box {
                &-item {
                    border-width: 1px;
                    padding: 0.3rem 0.7rem;
                    .title {
                        font-size: 0.54rem;
                        &.small {
                            line-height: 0.81rem;
                            font-size: 0.54rem;
                        }
                    }
                    .subtitle {
                        font-size: 0.32rem;
                        color: #666;
                    }
                    .summary-item {
                        margin-top: 0.6rem;
                        &-content {
                            font-size: 0.54rem;
                        }
                        &-name {
                            font-size: 0.28rem;
                        }
                    }
                    .try-btn {
                        font-size: 0.28rem;
                    }
                    .product-item {
                        margin-top: 0.3rem;
                        font-size: 0.28rem;
                        &-icon {
                            width: 0.7rem;
                            margin-right: 0.36rem;
                            vertical-align: middle;
                        }
                    }
                }
            }
        }
    }
}

.blue-ball-container {
    position: relative;
    background-color: #0336f3;
    overflow: hidden;
    .module {
        position: relative;
        z-index: 1;
        h1 {
            color: #fff;
        }
    }
    .solution.flex {
        display: flex;
        align-items: center;
        h1 {
            text-align: left;
        }
        .left-part {
            width: 500px;
            margin-right: 105px;
        }
        .solution-img {
            flex: 1;
        }
    }
    p {
        font-size: 16px;
        font-weight: 500;
        color: #fff;
    }
    &::before {
        position: absolute;
        left: 0;
        top: 0;
        transform: translate(-35%, -60%);
        content: '';
        width: 500px;
        height: 500px;
        border-radius: 50%;
        background: linear-gradient(to right, rgba(0, 85, 254, 0.22), rgba(255, 255, 255, 0.22));
    }
    &::after {
        position: absolute;
        right: 0;
        bottom: 0;
        transform: translate(30%, 55%);
        content: '';
        width: 360px;
        height: 360px;
        border-radius: 50%;
        background: linear-gradient(to bottom, rgba(0, 85, 254, 0.22), rgba(255, 255, 255, 0.22));
    }
}

@media screen and (max-width: 1000px) {
    .blue-ball-container {
        .module {
            h1 {
                margin-bottom: 0.6rem;
            }
        }
        p {
            font-size: 0.28rem;
        }
        &::before {
            width: 2.8rem;
            height: 2.8rem;
        }
        &::after {
            width: 1.6rem;
            height: 1.6rem;
        }
        .solution.flex {
            display: block;
            .left-part {
                width: 100%;
                margin-right: 0;
            }
            .solution-img {
                width: 100%;
                margin-top: 0.4rem;
            }
        }
    }
}

.price {
    &-item {
        width: 280px;
        flex: none;
        text-align: center;
        &-icon {
            width: 120px;
            height: 75px;
        }
        &-title {
            font-size: 30px;
            color: #222;
            font-weight: 500;
        }
        &-desc {
            width: 80%;
            margin: 1em auto;
        }
    }
    &-btns {
        font-size: 0;
        margin-top: 64px;
        text-align: center;
        &-item {
            display: inline-block;
            width: 237px;
            height: 40px;
            line-height: 40px;
            color: #fff;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            background-color: #0336f3;
            border-radius: 4px;
            &:first-child {
                margin-right: 130px;
            }
            &-text {
                color: #fff;
                font-size: 16px;
                font-weight: 500;
            }
        }
    }
}

@media screen and (max-width: 1000px) {
    .price {
        /deep/ .expert .z-popuper {
            margin-left: -4.9rem;
        }
        &-item {
            width: 100%;
            margin-top: 0.6rem;
            &-icon {
                width: 2.4rem;
                height: 1.5rem;
            }
            &-title {
                font-size: 0.46rem;
            }
        }
        &-btns {
            margin-top: 0.6rem;
            &-item {
                width: 45%;
                height: 40px;
                line-height: 40px;
                font-size: 0.28rem;
                &:first-child {
                    margin-right: 10%;
                }
            }
            &-text {
                font-size: 0.28rem;
            }
        }
    }
}

.scenarios {
    text-align: center;
    &-item {
        color: #696f80;
        width: 320px;
        margin: 0 15px;
        box-shadow: 0px 5px 30px 0px rgba(9, 17, 40, 0.08);
        background-color: #fff;
        display: inline-block;
        text-align: center;
        padding: 35px;
        .icon {
            height: 35px;
            width: 35px;
        }
        .title {
            font-size: 18px;
            margin: 25px 0;
        }
        .desc {
            text-align: left;
            font-size: 16px;
        }
    }
}
@media screen and (max-width: 1000px) {
    .scenarios {
        text-align: center;
        &-item {
            width: 100%;
            margin: 0;
            margin-bottom: 0.3rem;
            padding: 0.7rem;
            .icon {
                height: 0.7rem;
                width: 0.7rem;
            }
            .title {
                font-size: 0.32rem;
                margin: 0.25rem 0;
            }
            .desc {
                text-align: left;
                font-size: 0.28rem;
            }
        }
    }
}
</style>
