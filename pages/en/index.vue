<template>
    <div class="foreign-container">
        <div class="container" style="position: relative">
            <b-alert
                class="hospital-alert"
                variant="warning"
                dismissible
                fade
                :show="showHospitalLink"
                @dismissed="showHospitalLink = false"
            >
                <a href="/en/hospital" target="_blank">ZEGO’s Support Medical Inquiry During COVID-19 for Free!</a>
            </b-alert>
            <!-- 悬浮框上线 -->
            <div class="floatIcon">
                <a href="./en/En_activity"><img src="../../assets/img/en/activity/pc/floatPC2x.png" alt=""/></a>
            </div>
            <div class="floatIcon_m">
                <a href="./en/En_activity"><img src="../../assets/img/en/activity/mobile/float_m2x.png" alt=""/></a>
            </div>
        </div>
        <div v-swiper:bannerSwiper="enbannerSwiperOption" class="banner-swiper">
            <div class="banner-swiper-pagination swiper-pagination-bullets"></div>
            <div class="swiper-wrapper">
                <!-- <div class="swiper-slide banner talkline">
                    <div class="banner-main container">
                        <div class="word"></div>
                        <a class="apply-try" href="http://odfd94gotwlybpa2.mikecrm.com/wwKw3Wx" target="_blank">
                            Register now
                        </a>
                    </div>
                </div> -->
                <div class="swiper-slide activity">
                    <!-- 海外活动页banner -->
                    <div class="banner-main container">
                        <div class="activityBanner">
                            <button class="join" @click="link()">
                                JOIN NOW
                            </button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide banner">
                    <div class="banner-main container">
                        <div class="bg-img clearfix"></div>
                        <h1 class="title">{{ contents.title }}</h1>
                        <h2 class="sub-title">{{ contents.subTitle }}</h2>
                        <div class="opr">
                            <span class="btn try" @click="tryUs">Try it now</span>
                            <div class="btn expert expert-pc">
                                <a class="text" href="mailto:global@zego.im">Talk to expert</a>
                                <div class="z-popuper">
                                    <section class="z-popuper-content">
                                        <div class="z-contact-item">
                                            <span class="icon email"></span>
                                            <span class="contact-text">global@zego.im</span>
                                        </div>
                                        <!-- <div class="z-contact-item">
                                            <span class="icon wechat"></span>
                                            <span class="contact-text">+8613826446667</span>
                                        </div> -->
                                    </section>
                                </div>
                            </div>
                            <div
                                v-click-outside="hideQR"
                                :class="{ show: isQRShow }"
                                class="btn expert expert-m"
                                @click="showQR"
                            >
                                <span class="text">Talk to expert</span>
                                <div class="z-popuper">
                                    <section class="z-popuper-content">
                                        <div class="z-contact-item email">
                                            <span class="icon email"></span>
                                            <a href="mailto:global@zego.im" class="contact-right">
                                                <div class="contact-name">
                                                    <span>E-mail Me</span>
                                                    <span class="contact-text">global@zego.im</span>
                                                </div>
                                                <div class="img"></div>
                                            </a>
                                        </div>
                                        <!-- <div class="z-contact-item wechat">
                                            <span class="icon wechat"></span>
                                            <a href="javascript:void(0);" onclick="return false;" class="contact-right">
                                                <div class="contact-name">
                                                    <span>WhatsApp</span>
                                                    <span class="contact-text">+8613826446667</span>
                                                </div>
                                                <div
                                                    v-clipboard:success="onCopy"
                                                    v-clipboard:copy="message"
                                                    v-clipboard:error="onError"
                                                    class="img"
                                                >
                                                    COPY
                                                </div>
                                            </a>
                                        </div> -->
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="banner-detail">
            <div class="container clearfix">
                <section v-for="(ad, aK) in contents.advantages" :key="aK" class="advantage-item">
                    <span :class="'icon ' + ad.id"></span>
                    <div>
                        <h2>{{ ad.title }}</h2>
                        <h3>{{ ad.subTitle }}</h3>
                    </div>
                </section>
            </div>
        </section>
        <section class="container module products">
            <h1 id="products">Products</h1>
            <div class="product-content product-content-pc">
                <section class="pro-list">
                    <ul>
                        <li
                            v-for="(pro, pK) in contents.products"
                            :key="pK"
                            :class="{ 'pro-item': true, active: productActive === pK }"
                            @mouseout="handleMouseEvent(pK)"
                            @mouseover="handleMouseEvent(pK)"
                        >
                            <div class="pro-item-top">
                                <span :class="'icon ' + pro.id"></span>
                                <h3>{{ pro.title }}</h3>
                            </div>
                            <div class="pro-item-content">{{ pro.desc }}</div>
                        </li>
                    </ul>
                </section>
                <div
                    v-for="(pro, pK) in contents.products"
                    :key="pK"
                    :class="{ 'pro-pic': true, active: productActive === pK }"
                >
                    <section class="pic">
                        <div :class="pro.id"></div>
                    </section>
                </div>
            </div>
            <div class="product-content product-content-m">
                <div v-swiper:productSwiper="productSwiperOption" class="product-swiper">
                    <div slot="pagination" class="product-swiper-pagination swiper-pagination-bullets"></div>

                    <div class="swiper-wrapper">
                        <div v-for="(pro, pK) in contents.products" :key="pK" class="swiper-slide">
                            <section class="slide-item">
                                <h2 class="title">{{ pro.title }}</h2>
                                <p class="desc">{{ pro.desc }}</p>
                                <div :class="'pic ' + pro.id"></div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="module introductions">
            <div class="container">
                <h1 id="why">WHY ZEGO</h1>
                <div class="intro-content">
                    <section v-for="(intro, iK) in contents.introductions" :key="iK" class="intro-list-item">
                        <div :class="'img ' + intro.id"></div>
                        <section class="intro-desc">
                            <h2 class="title">{{ intro.title }}</h2>
                            <ul>
                                <li v-for="(subItem, sK) in intro.children" :key="sK">
                                    {{ subItem }}
                                </li>
                            </ul>
                        </section>
                    </section>
                </div>
            </div>
        </section>
        <section class="container module access">
            <h1 id="access">Service Access Demo</h1>
            <div class="access-content">
                <section v-for="(acc, aK) in contents.access.steps" :key="aK" class="acc-list-item">
                    <div :class="'icon ' + acc.id"></div>
                    <div>
                        <h2 class="title">{{ acc.title }}</h2>
                        <p>{{ acc.desc }}</p>
                    </div>
                </section>
            </div>
            <div :class="{ downloads: true, show: isShow, 'retract-active': isRetract }">
                <a href="javascript:void(0);" onclick="return false;" class="btn" @click="showDownloads"
                    >View Developer Documents</a
                >
                <div class="plat-wrapper">
                    <ul class="platforms">
                        <li
                            v-for="(plat, pK) in contents.access.platforms"
                            :key="pK"
                            :class="'plat-item ' + plat.id + '-p'"
                            @click="openDevlop(plat)"
                        >
                            <span v-if="plat.id !== 'all'" :class="'icon ' + plat.id"></span>
                            <span v-else style="margin-right: 10px;"
                                ><i class="iconfont zg-book-2-fill" style="font-size: 20px;"></i
                            ></span>
                            <span>{{ plat.text }}</span>
                            <a class="mask" :href="plat.link">
                                <!-- <img src="../../assets/img/en/access/arrow-w.png" alt="down" /> -->
                                <span class="eye"><i class="iconfont zg-eye"></i></span>
                                <span class="stay-text">Stay Tuned</span>
                            </a>
                        </li>
                    </ul>
                    <a href="javscript:void(0);" onclick="return false;" class="retract" @click="retract">Retract</a>
                </div>
            </div>
        </section>
        <section class="module stories">
            <div class="container">
                <h1 id="customers">Client Stories</h1>
                <div>
                    <ul>
                        <li v-for="(story, rK) in stories" :key="rK">
                            <img :src="story.src" alt="pic" />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="container module contact" :class="{ 'is-submit': submitSuccess }">
            <h1 id="contact">Contact Us</h1>
            <div v-if="!submitSuccess">
                <form action="">
                    <ul class="contact-list">
                        <li v-for="(contactItem, rK) in contents.contact" :key="rK" :class="contactItem.id">
                            <label :for="contactItem.id">{{ contactItem.label }}</label>
                            <input
                                :id="contactItem.id"
                                v-model="contactItem.value"
                                :type="contactItem.type"
                                :placeholder="contactItem.placeholder"
                                class="custom-input"
                                @input="inputCheck(contactItem)"
                                @blur="blurCheck(contactItem)"
                            />
                            <div v-if="contactItem.error" class="error">
                                {{ contactItem.error }}
                            </div>
                            <div v-if="contactItem.label === '(Area Code)Phone'" class="">
                                <div v-click-outside="hide" class="flag-container">
                                    <div
                                        class="selected-flag"
                                        :title="currentData.dialCode"
                                        @click="hideSubMenu = !hideSubMenu"
                                    >
                                        <div>{{ '+' + currentData.dialCode }}</div>
                                        <div class="iti-arrow"></div>
                                    </div>
                                </div>
                                <ul v-show="!hideSubMenu" class="country-list">
                                    <li
                                        v-for="item in frontCountriesArray"
                                        :key="item.id"
                                        :class="'country ' + (item.code == currentCode ? 'highlight' : '')"
                                        @click="
                                            currentCode = item.code;
                                            hideSubMenu = true;
                                            setCountry(item);
                                        "
                                    >
                                        <span class="country-name">{{ item.name }}</span>
                                        <span class="dial-code">+{{ item.dialCode }}</span>
                                    </li>
                                    <li class="divider"></li>
                                    <li
                                        v-for="item in countriesArray"
                                        :key="item.id"
                                        :class="'country ' + (item.code == currentCode ? 'highlight' : '')"
                                        @click="
                                            currentCode = item.code;
                                            hideSubMenu = true;
                                            setCountry(item);
                                        "
                                    >
                                        <span class="country-name">{{ item.name }}</span>
                                        <span class="dial-code">+{{ item.dialCode }}</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </form>
                <div class="submit-btn" @click="submitMessage">Send Message</div>
            </div>
            <div v-else>
                <h3 class="thank">Thank you</h3>
                <p class="receive">We have received your message.</p>
            </div>
        </section>
        <div class="bg">
            <a href="https://console.zego.im/account/register?lang=en" target="_blank" class="link">
                Start Your Free Trial Now
            </a>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import axios from 'axios';
import ClickOutside from 'vue-click-outside';
// import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { isValidNumber } from 'libphonenumber-js/custom';
// @ts-ignore
import metadata from 'libphonenumber-js/metadata.full.json';
// @ts-ignore
import countries from '../../assets/js/countryList.js';

let vm: any = null;
// eslint-disable-next-line no-useless-escape
const regEmail = /^[\w-\.]+@[\w-]+(\.[\w-]+)+$/;

@Component({
    directives: { ClickOutside },
    asyncData() {
        const contents = require('../../assets/json/foregin.json');
        const { stories } = contents;
        // stories.forEach((item: any) => {
        //   item.forEach((sub: any) => {
        //     sub.src = require(`../../assets/img/en/stories/${sub.icon}.png`)
        //   })
        // })
        stories.forEach((item: any) => {
            item.src = require(`../../assets/img/en/stories/${item.icon}.png`);
            item.srcM = require(`../../assets/img/en/stories/${item.icon}-m.png`);
        });
        return {
            contents,
            stories,
        };
    },
    head() {
        return {
            title:
                "ZEGO-ZEGO Technology is one of the world's leading professional real-time audio and video communications services provider",

            meta: [
                {
                    name: 'keywords',
                    content:
                        'ZEGO Technology audio and video intertactive commmunication one-to-one voice chat,one-to-many voice chat live interactive video streaming one-to-many real-team audio streaming',
                },
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'ZEGO即构科技-为全球提供稳定高质的实时音视频云服务：跨平台为APP、网站及小程序提供音视频通话、互动直播等解决方案，不限行业！',
                },
            ],
            // script: [
            //     {
            //         src: 'https://www.googletagmanager.com/gtag/js?id=UA-144922806-1',
            //         type: 'text/javascript',
            //     },
            //     {
            //         type: 'text/javascript',
            //         innerHTML: ` window.dataLayer = window.dataLayer || [];
            //             function gtag(){dataLayer.push(arguments);}
            //             gtag("js", new Date());

            //             gtag("config", "UA-144922806-1");`,
            //     },
            // ],
            // __dangerouslyDisableSanitizers: ['script'],
        };
    },
})
export default class Index extends Vue {
    showHospitalLink = true;
    contents: any;
    message = '+8613826446667';
    // stories: any
    submitSuccess = false;
    emailValidateError = false;
    phoneValidateError = false;
    productActive = 0;
    isShow = false;
    isRetract = false;
    isQRShow = false;
    currentCode = 'hk';
    // currentData: any
    hideSubMenu = true;
    toFront = [];
    frontCountriesArray: any = {};
    enbannerSwiperOption = {
        // loop: true,
        slidesPerView: 'auto',
        // watchSlidesVisibility: true,
        centeredSlides: true,
        spaceBetween: 0,
        autoplay: {
            delay: 80000,
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
    productSwiperOption = {
        slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: true,
        effect: 'slide',
        pagination: {
            el: '.product-swiper-pagination',
            clickable: true,
            renderBullet: function(index: number, className: string) {
                // console.log(this)
                return `<div class="${className} product-swiper-item"><span class="icon ${vm.contents.products[index].id}"></span></div>`;
            },
        },
    };
    onCopy() {
        console.log('copy');
    }
    onError() {
        console.log('error');
    }
    get currentData() {
        // console.log(countries[this.currentCode])
        // @ts-ignore
        return countries[this.currentCode];
    }
    @Watch('toFront')
    frontCountriesArrayChange() {
        const toFrontCodes = {};
        console.log('toFrontCodes');
        this.toFront.forEach((code: any) => {
            const stringCode = String(code);
            // @ts-ignore
            const needObj = countries[stringCode];

            if (needObj) {
                // @ts-ignore
                toFrontCodes[stringCode] = needObj;
            }
        });
        this.frontCountriesArray = toFrontCodes;
    }
    get countriesArray() {
        const countryCopie = { ...countries };
        this.toFront.forEach(code => {
            delete countryCopie[code];
        });
        return countryCopie;
    }
    setCountry(item: any) {
        this.currentCode = item.code;
        console.log(this.currentCode);
        // @ts-ignore
        this.toFront.push(String(item.code));
        console.log(this.toFront);
        // this.$emit('excountry', item)
    }
    hide(event: any) {
        console.log('hide', event);
        this.hideSubMenu = true;
    }
    showQR() {
        this.isQRShow = true;
    }
    hideQR() {
        console.log('hideQR');
        this.isQRShow = false;
    }
    tryUs() {
        window.open('https://console.zego.im/account/register?lang=en');
    }
    created() {
        console.log(this.contents);
        vm = this;
    }
    mounted() {
        console.log(countries, this.currentCode);
        // this.currentData = countries[this.currentCode]
        // console.log(this.currentData)
    }
    async submitMessage() {
        let hasError = false;
        for (const key in this.contents.contact) {
            console.log(key, this.contents.contact[key]);
            if (!this.contents.contact[key].value) {
                this.contents.contact[key].error = 'The field is required.';
                hasError = true;
            }
        }
        console.log(hasError, this.emailValidateError);
        if (hasError || this.emailValidateError || this.phoneValidateError) return;
        try {
            const res = await axios.post('https://doc.zego.im/data/abroadCustomerInfo', {
                name: this.contents.contact.name.value,
                phone: '+' + this.currentData.dialCode + ' ' + this.contents.contact.phone.value,
                company: this.contents.contact.company.value,
                email: this.contents.contact.email.value,
            });
            console.log('res', res);

            if (res.data.code === 200) {
                this.submitSuccess = true;
            }
        } catch (error) {
        } finally {
            // this.submitting = false
        }
    }
    handleMouseEvent(pK: number) {
        this.productActive = pK;
    }
    showDownloads() {
        this.isRetract = false;
        this.isShow = true;
    }
    retract() {
        console.log('retract');
        this.isRetract = true;
        this.isShow = false;
    }
    openDevlop(plat: any) {
        if (plat.id === 'in') {
            window.open(plat.link);
        }
    }
    inputCheck(item: any) {
        console.log('inputCheck', item);
        // if (['Company', 'Name'].indexOf(item.label) > -1) {
        //     if (item.value) {
        //         item.error = '';
        //     } else {
        //         item.error = 'The field is required.';
        //     }
        // }
        // if (item.label === 'Email') {
        //     if (item.value && !regEmail.test(item.value)) {
        //         item.error = item.ierror;
        //         this.emailValidateError = true;
        //     } else {
        //         item.error = '';
        //         this.emailValidateError = false;
        //     }
        // }
        // if (item.label === '(Area Code)Phone') {
        //     if (item.value.trim()) {
        //         console.log('+' + this.currentData.dialCode + item.value);
        //         if (!isValidNumber('+' + this.currentData.dialCode + item.value, metadata)) {
        //             item.error = item.ierror;
        //             this.phoneValidateError = true;
        //         } else {
        //             item.error = '';
        //             this.phoneValidateError = false;
        //         }
        //     }
        // }
    }
    blurCheck(item: any) {
        console.log('blurCheck', item);
        if (item.value === '') {
            item.error = 'The field is required.';
            return;
        }
        if (item.label === 'Email') {
            if (item.value && !regEmail.test(item.value)) {
                item.error = item.ierror;
                this.emailValidateError = true;
            } else {
                item.error = '';
                this.emailValidateError = false;
            }
        }
        if (item.label === '(Area Code)Phone') {
            if (item.value.trim()) {
                console.log('+' + this.currentData.dialCode + item.value);
                if (!isValidNumber('+' + this.currentData.dialCode + item.value, metadata)) {
                    item.error = item.ierror;
                    this.phoneValidateError = true;
                } else {
                    item.error = '';
                    this.phoneValidateError = false;
                }
            }
        }
        if (['Company', 'Name'].indexOf(item.label) > -1) {
            if (item.value) {
                item.error = '';
            }
        }
    }
    link() {
        window.location.href = './en/En_activity';
    }
}
</script>
<style lang="scss" scoped>
* {
    font-family: 'Roboto', 'PingFang SC', 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑',
        Arial, sans-serif;
    font-weight: 500;
    word-break: break-all;
    word-wrap: break-word;
    // overflow: hidden;
}
.floatIcon {
    position: fixed;
    display: block;
    bottom: 100px;
    right: 40px;
    width: 100px;
    height: 90px;
    z-index: 20000;
    img {
        width: 100px;
        height: 90px;
    }
}
.floatIcon_m {
    display: none;
}
.foreign-container {
    margin-top: 68px;
}
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
.activity {
    width: 100%;
    height: 500px;
    background: url('../../assets/img/en/activity/pc/banner2.png') no-repeat center, #0d0e30;
    // background-position-y: -40px;
    background-size: auto 100%;
    // background-color: red;
    position: relative;
    .join {
        // display: block;
        width: 256px;
        height: 76px;
        background: linear-gradient(-15deg, rgba(218, 26, 143, 1), rgba(130, 26, 217, 1));
        border: 2px solid rgba(255, 233, 233, 1);
        border-radius: 12px;
        font-size: 36px;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 30px;
        text-shadow: 0px 4px 8px rgba(211, 21, 73, 0.6);
        position: absolute;
        left: 50%;
        bottom: 230%;
        transform: translate(-50%, 465%);
        outline: none;
        &:hover {
            background: linear-gradient(-15deg, rgba(189, 19, 117, 1), rgba(105, 19, 189, 1));
        }
    }
}
.banner {
    width: 100%;
    height: 500px;
    background: linear-gradient(90deg, rgba(0, 85, 254, 1) 0%, rgba(4, 51, 243, 1) 99%);
    .title {
        padding-top: 91px;
        width: 714px;
        letter-spacing: -1px;
        font-size: 40px;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 60px;
        word-break: keep-all;
    }
    .sub-title {
        margin-top: 28px;
        font-size: 20px;
        color: rgba(255, 255, 255, 1);
        opacity: 0.8;
        line-height: 1;
    }
    &.talkline {
        background: url(../../assets/img/en/banner/tl.png) center no-repeat;
        height: 500px;
        background-size: cover;
    }
    .word {
        margin-top: 138px;
        width: 650px;
        height: 157px;
        background: url(../../assets/img/en/banner/tl-w.png) center no-repeat;
        background-size: cover;
    }
    .apply-try {
        display: inline-block;
        margin-top: 70px;
        width: 146px;
        height: 42px;
        line-height: 42px;
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
.banner-main {
    //   background: url('../../assets/img/en/dev.png') right top;
    position: relative;
}
.opr {
    margin-top: 43px;
    font-size: 0;
    .btn {
        height: 42px;
        font-size: 18px;
        cursor: pointer;
    }
    .try {
        background: rgba(255, 255, 255, 1);
        border: 2px solid rgba(245, 248, 255, 1);
        border-radius: 4px;
        color: #0337f5;
        padding-left: 20px;
        padding-right: 20px;
        margin-right: 20px;
    }
    .expert {
        padding: 0;
        position: relative;
        user-select: text;
        .text {
            padding: 0 20px;
            height: 100%;
            line-height: 38px;
            display: inline-block;
            background: rgba(255, 255, 255, 0);
            border: 2px solid rgba(245, 248, 255, 1);
            border-radius: 4px;
            color: #fff;
        }
        .z-popuper {
            position: absolute;
            bottom: 100%;
            left: 50%;
            margin-left: -130px;
            width: 260px;
            height: 86px;
            visibility: hidden;
            .z-popuper-content {
                width: 100%;
                height: 70px;
                padding-top: 18px;
                padding-left: 24px;
                background: rgba(255, 255, 255, 1);
                box-shadow: 0px 5px 24px 0px rgba(0, 0, 0, 0.2);
                border-radius: 4px;
            }
            .z-contact-item {
                text-align: left;
                line-height: 28px;
                height: 28px;
                .icon {
                    display: inline-block;
                    width: 28px;
                    height: 28px;
                    vertical-align: middle;
                    &.email {
                        background-image: url(../../assets/img/en/banner/email.png);
                        background-size: 100%;
                    }
                    &.wechat {
                        background-image: url(../../assets/img/en/banner/wechat.png);
                        background-size: 100%;
                    }
                }
                .contact-text {
                    font-size: 16px;
                    vertical-align: middle;
                }
            }
            &::after {
                content: '';
                position: absolute;
                bottom: 2px;
                left: 50%;
                margin-left: -7px;
                border: 7px solid transparent;
                border-top-color: #fff;
            }
        }
        &:hover {
            .z-popuper {
                visibility: visible;
            }
            .text {
                border: 2px solid rgba(245, 248, 255, 0.7);
            }
        }
    }
    .expert-pc {
        display: inline-block;
    }
    .expert-m {
        display: none;
    }
}
.bg-img {
    //   float: right;
    position: absolute;
    right: 0;
    top: 85px;
    width: 494px;
    height: 356px;
    background: url(../../assets/img/en/banner/dev.png);
    background-size: cover;
}
.banner-detail {
    height: 388px;
    background: rgba(250, 250, 251, 1);
    padding: 60px 0 48px;
    .advantage-item {
        float: left;
        width: 400px;
        height: 280px;
        padding: 36px 27px 0 30px;
        .icon {
            display: block;
            width: 52px;
            height: 52px;
            &.cloud {
                background: url(../../assets/img/en/banner/cloud.png);
                background-size: cover;
            }
            &.engine {
                background: url(../../assets/img/en/banner/engine.png);
                background-size: cover;
            }
            &.monitor {
                background: url(../../assets/img/en/banner/monitor.png);
                background-size: cover;
            }
        }
        h2 {
            margin-top: 25px;
            font-size: 20px;
            color: rgba(34, 34, 34, 1);
            line-height: 30px;
            letter-spacing: -1px;
            word-break: break-word;
        }
        h3 {
            margin-top: 15px;
            font-size: 16px;
            color: rgba(105, 111, 128, 1);
            line-height: 24px;
            word-break: break-word;
        }
    }
}
.module {
    padding: 90px 0;
    h1 {
        margin-bottom: 70px;
        font-size: 40px;
        color: #222;
        text-align: center;
    }
}
.products {
}
.product-content {
    display: flex;
    height: 536px;
    .pro-pic {
        position: relative;
        .pic {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.5s ease;
        }
        &.active {
            .pic {
                opacity: 1;
                transform: translateY(0);
            }
        }
    }
    .pic {
        position: absolute;
        width: 720px;
        height: 536px;
        div {
            width: 100%;
            height: 100%;
            &.video {
                background: url(../../assets/img/en/products/pic/video.png);
                background-size: cover;
            }
            &.audio {
                background: url(../../assets/img/en/products/pic/audio.png);
                background-size: cover;
            }
            &.record {
                background: url(../../assets/img/en/products/pic/record.png);
                background-size: cover;
            }
            &.chatroom {
                background: url(../../assets/img/en/products/pic/chatroom.png);
                background-size: cover;
            }
        }
    }
}
.product-content-m {
    display: none;
}
.pro-list {
    width: 440px;
    margin-right: 40px;
    .pro-item {
        height: 80px;
        padding: 20px 24px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(230, 231, 235, 1);
        border-radius: 2px;
        cursor: pointer;
        overflow: hidden;
        transition: height 0.5s ease-in;
        .pro-item-top {
            // padding-top: 20px;
            // padding-left: 24px;
            // padding-bottom: 20px;
            font-size: 0;
            display: flex;
            align-items: center;
        }
        .pro-item-content {
            // padding: 0 28px 21px 84px;
            padding-left: 60px;
            padding-top: 13px;
            line-height: 24px;
            word-break: break-word;
            // display: none;
        }
        .icon {
            display: inline-block;
            width: 40px;
            height: 40px;
            vertical-align: middle;
            // padding-top: 20px;
            &.video {
                background: url(../../assets/img/en/products/video.png);
                background-size: cover;
            }
            &.audio {
                background: url(../../assets/img/en/products/audio.png);
                background-size: cover;
            }
            &.record {
                background: url(../../assets/img/en/products/record.png);
                background-size: cover;
            }
            &.chatroom {
                background: url(../../assets/img/en/products/chatroom.png);
                background-size: cover;
            }
        }
        h3 {
            display: inline-block;
            font-size: 18px;
            margin-left: 20px;
        }
        &:hover {
            border-color: #0044ff;
        }
        &.active {
            box-shadow: 0px 5px 30px 0px rgba(9, 17, 40, 0.08);
            border-radius: 2px;
            height: 254px;
            // height: auto;
            .pro-item-top {
                // padding-bottom: 5px;
            }
            .pro-item-content {
                display: block;
                font-size: 14px;
            }
        }
        &:not(:last-child) {
            margin-bottom: 14px;
        }
    }
}
.introductions {
    background-color: #fafafb;
}
.intro-content {
    .intro-list-item {
        display: flex;
        align-items: center;
        &:not(:last-child) {
            margin-bottom: 70px;
        }
        .img {
            width: 610px;
            height: 390px;
            &.engine {
                background: url(../../assets/img/en/intro/engine.png);
                background-size: 100%;
            }
            &.trans {
                background: url(../../assets/img/en/intro/trans.png);
                background-size: 100%;
            }
            &.adapt {
                background: url(../../assets/img/en/intro/adapt.png);
                background-size: 100%;
            }
        }
        .intro-desc {
            flex: 1;
        }
        &:nth-of-type(2n) {
            flex-direction: row-reverse;
            .intro-desc {
                padding-left: 0px;
                // padding-right: 80px;
            }
        }
    }
}
.intro-desc {
    padding-left: 80px;
    .title {
        font-size: 24px;
        color: #222;
        line-height: 1;
        margin-top: 32px;
        margin-bottom: 22px;
    }
    ul {
        li {
            position: relative;
            padding-left: 20px;
            margin-bottom: 11px;
            color: #666;
            font-size: 16px;
            line-height: 27px;
            word-break: break-word;
            font-weight: 400;
            &::before {
                content: '';
                position: absolute;
                display: block;
                width: 8px;
                height: 8px;
                background-color: #222;
                border-radius: 50%;
                top: 10px;
                left: 0;
            }
        }
    }
}
.access-content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
    .acc-list-item {
        position: relative;
        width: 250px;
        height: 260px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 5px 30px 0px rgba(9, 17, 40, 0.08);
        border-radius: 2px;
        text-align: center;
        padding: 42px 26px 54px;
        .icon {
            display: inline-block;
            width: 40px;
            height: 40px;
            margin-bottom: 22px;
            &.integration {
                background: url(../../assets/img/en/access/integration.png);
                background-size: cover;
            }
            &.login {
                background: url(../../assets/img/en/access/login.png);
                background-size: cover;
            }
            &.push {
                background: url(../../assets/img/en/access/push.png);
                background-size: cover;
            }
            &.pull {
                background: url(../../assets/img/en/access/pull.png);
                background-size: cover;
            }
        }
        .title {
            font-size: 20px;
            color: #222;
            line-height: 1;
            margin-bottom: 15px;
        }
        p {
            font-size: 14px;
            line-height: 24px;
            color: #666;
            word-break: keep-all;
        }
        &:not(:last-child) {
            &::before {
                position: absolute;
                content: '';
                width: 23px;
                height: 18px;
                background: url(../../assets/img/en/access/arrow-right.png);
                background-size: 100%;
                right: -42px;
                top: 50%;
            }
        }
    }
}
.downloads {
    position: relative;
    text-align: center;
    height: 60px;
    .btn {
        display: block;
        position: relative;
        width: 340px;
        height: 60px;
        line-height: 60px;
        padding: 0;
        margin: 0 auto;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(0, 68, 255, 1);
        border-radius: 4px;
        font-size: 20px;
        color: #0044ff;
        visibility: visible;
        transition: all 0.3s ease;
        z-index: 2;
    }
    .plat-wrapper {
        position: absolute;
        width: 100%;
        left: 50%;
        transform: translate(-50%);
        top: -60px;
        visibility: hidden;
        transition: all 0.5s ease 0.3s;
    }
    &.show {
        height: 174px;
        .btn {
            visibility: hidden;
        }
        .plat-wrapper {
            visibility: visible;
            top: 0;
        }
    }
    &.retract-active {
        height: 60px;
        .btn {
            visibility: visible;
            transition: all 0.3s ease 0.5s;
        }
        .plat-wrapper {
            position: absolute;
            top: -60px;
            visibility: hidden;
            transition: all 0.5s ease;
        }
        .retract {
            visibility: hidden;
        }
    }
}
.platforms {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;
    .plat-item {
        position: relative;
        width: 176px;
        height: 84px;
        background: rgba(250, 250, 251, 1);
        border-radius: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
            width: 24px;
            height: 24px;
            margin-right: 10px;
            &.iOS {
                background: url(../../assets/img/en/access/iOS.png);
                background-size: 100%;
            }
            &.Android {
                background: url(../../assets/img/en/access/Android.png);
                background-size: 100%;
            }
            &.Windows {
                background: url(../../assets/img/en/access/Windows.png);
                background-size: 100%;
            }
            &.Web {
                background: url(../../assets/img/en/access/Web.png);
                background-size: 100%;
            }
            &.Linux {
                background: url(../../assets/img/en/access/Linux.png);
                background-size: 100%;
            }
        }
        .mask {
            visibility: hidden;
            position: absolute;
            cursor: pointer;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 68, 255, 0.9);
            box-shadow: 0px 5px 30px 0px rgba(9, 17, 40, 0.08);
            img,
            .eye {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 22px;
                height: 27px;
                .zg-eye {
                    color: #fff;
                    font-size: 28px;
                }
            }
            .stay-text {
                display: inline-block;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                color: #fff;
            }
        }
        &:hover {
            .mask {
                visibility: visible;
            }
        }
        &.all-p,
        &.iOS-p,
        &.Android-p,
        &.Windows-p {
            // &:hover {
            .mask {
                // visibility: visible;
                img,
                .eye {
                    display: block;
                }
                .stay-text {
                    display: none;
                }
            }
            // }
        }
        &.Web-p {
            // &:hover {
            .mask {
                // visibility: visible;
                img,
                .eye {
                    display: none;
                }
                .stay-text {
                    display: block;
                }
            }
            // }
        }

        &.in-p {
            flex-direction: column;
            padding-right: 25px;
            align-items: flex-end;
            cursor: pointer;
            .in {
                // align-self: flex-end;
                width: 24px;
                height: 16px;
                margin-bottom: 5px;
                background: url(../../assets/img/en/access/in.png);
                background-size: 100%;
            }
            .mask {
                visibility: hidden;
            }
            &:hover {
                .in {
                    background: url(../../assets/img/en/access/in-active.png);
                    background-size: 100%;
                }
                span {
                    color: #0044ff;
                }
            }
        }
    }
}
.retract {
    display: block;
    text-align: center;
    font-size: 20px;
    font-family: Roboto;
    font-weight: 400;
    text-decoration: underline;
    color: #222;
    &:hover {
        color: #0044ff;
    }
}
.stories {
    background-color: #fafafb;
    ul {
        text-align: center;
        li {
            display: inline-block;
            width: 220px;
            height: 100px;
            // background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
.contact {
    form {
        display: flex;
        flex-direction: column;
        .contact-list {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            & > li {
                margin-bottom: 40px;
                position: relative;
                label {
                    display: block;
                    margin-bottom: 18px;
                }
                &:nth-child(2n + 1) {
                    margin-right: 120px;
                }
                .error {
                    position: absolute;
                    margin-top: 12px;
                    color: #ec3323;
                }
                &.phone {
                    .custom-input {
                        padding-left: 76px;
                    }
                }
            }
        }
    }
    .submit-btn {
        width: 174px;
        height: 60px;
        background: rgba(0, 68, 255, 1);
        border-radius: 4px;
        font-size: 20px;
        color: #fff;
        line-height: 60px;
        margin: auto;
        text-align: center;
        cursor: pointer;
    }
    .thank {
        font-size: 32px;
        color: #222;
        font-weight: 500;
        line-height: 1;
        margin-bottom: 40px;
    }
    .receive {
        font-size: 20px;
        color: #222;
        font-weight: 400;
        line-height: 1;
    }
}
.custom-input {
    background: none;
    outline: none;
    border: 0;
    width: 540px;
    height: 46px;
    // background: rgba(233, 240, 253, 1);
    border-bottom: 1px solid #e6e6e6;
    &::-webkit-input-placeholder {
        /* WebKit, Blink, Edge */
        color: #e0e0e0;
        font-size: 16px;
    }
    &:-moz-placeholder {
        /* Mozilla Firefox 4 ~ 18 */
        color: #e0e0e0;
        font-size: 16px;
        opacity: 1;
    }
    &::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #e0e0e0;
        font-size: 16px;
        opacity: 1;
    }
    &:-ms-input-placeholder {
        /* Internet Explorer 10 ~ 11 */
        color: #e0e0e0;
        font-size: 16px;
    }
    &::-ms-input-placeholder {
        /* Microsoft Edge */
        color: #e0e0e0;
        font-size: 16px;
    }

    &::placeholder {
        /* 大部分现代浏览器 */
        color: #e0e0e0;
        font-size: 16px;
    }

    &:focus {
        border-color: #171717;
    }
}
.flag-container {
    position: absolute;
    top: 48px;
    .selected-flag {
        z-index: 1;
        position: relative;
        left: 8px;
        // width: 36px;
        height: 100%;
        padding: 0 0 0 2px;
        display: flex;
    }
    .iti-arrow {
        margin-left: 4px;
        margin-top: 2px;
        width: 14px;
        height: 9px;
        background: url(../../assets/img/en/contact/arrow.png);
        background-size: cover;
    }
}
.country-list {
    position: absolute;
    width: 100%;
    height: 400px;
    margin-top: 42px;
    z-index: 2;
    list-style: none;
    text-align: left;
    padding: 0;
    margin: 0 0 0 -1px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    border: 1px solid #ccc;
    white-space: nowrap;
    max-height: 500px;
    overflow-y: scroll;
    .country {
        display: flex;
        height: 40px;
        padding: 5px 10px;
        // justify-content: space-between;
        align-items: center;
        color: #666;
        // .dial-code {
        //   width: 180px;
        //   padding-left: 10px;
        // }
        // .country-name {
        //   flex: 1;
        // }
        &.highlight {
            background-color: rgba(0, 0, 0, 0.05);
        }
    }
    .divider {
        padding-bottom: 5px;
        margin-bottom: 5px;
        border-bottom: 1px solid #ccc;
    }
}
.bg {
    height: 200px;
    padding-top: 70px;
    background: url(../../assets/img/en/bg.png);
    .link {
        display: block;
        margin: 0 auto;
        width: 278px;
        height: 60px;
        line-height: 60px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 5px 30px 0px rgba(9, 17, 40, 0.08);
        border-radius: 4px;
        color: #0044ff;
        text-align: center;
        font-size: 20px;
    }
}
@media screen and(max-width: 1000px) {
    .container {
        max-width: 6.3rem;
    }
    .foreign-container {
        margin-top: 1.08rem;
    }

    // 首页海外入口移动端
    .activity {
        width: 100%;
        height: 8.58rem;
        background: url('../../assets/img/en/activity/mobile/banner_m2.png') no-repeat, #0d0e30;
        background-position-x: center;
        background-size: auto 100%;
        // background-position-x: -318px;
        // background-size: auto 70%;
        position: relative;
        .join {
            // display: block;
            // width: 128px;
            // height: 38px;
            width: 3.58rem;
            height: 1.16rem;
            background: linear-gradient(-15deg, rgba(218, 26, 143, 1), rgba(130, 26, 217, 1));
            border: 0.02rem solid rgba(255, 233, 233, 1);
            border-radius: 0.08rem;
            font-size: 0.56rem;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
            line-height: 0.3rem;
            padding: 0;
            text-shadow: 0px 2px 4px rgba(211, 21, 73, 0.6);
            position: absolute;
            left: 1.7rem;
            bottom: -6.5rem;
            transform: translate(-50%, 0);
        }
    }
    .floatIcon {
        display: none;
    }
    .floatIcon_m {
        display: block;
        position: fixed;
        right: 0.2rem;
        bottom: 0.4rem;
        width: 1.4rem;
        height: 1.3rem;
        z-index: 20000;
        img {
            width: 1.4rem;
            height: 1.3rem;
        }
    }
    .banner {
        width: 100%;
        height: 8.58rem;
        background: linear-gradient(135deg, rgba(0, 96, 254, 1), rgba(4, 51, 243, 1));
        .title {
            padding-top: 1rem;
            width: 100%;
            font-size: 0.6rem;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 0.84rem;
            word-break: break-word;
            letter-spacing: -1px;
        }
        .sub-title {
            margin-top: 0.32rem;
            font-size: 0.28rem;
            color: rgba(255, 255, 255, 1);
            opacity: 0.8;
            line-height: 0.48rem;
        }
        &.talkline {
            background: url(../../assets/img/en/banner/tl-m.png) center no-repeat;
            height: 8.58rem;
            background-size: cover;
        }
        .word {
            margin-top: 1.95rem;
            width: 5.23rem;
            height: 3.23rem;
            background: url(../../assets/img/en/banner/tl-w-m.png) center no-repeat;
            background-size: cover;
        }
        .apply-try {
            display: inline-block;
            margin-top: 0.9rem;
            width: 2.5rem;
            height: 0.8rem;
            line-height: 0.76rem;
            text-align: center;
            font-size: 0.28rem;
            font-weight: 400;
            color: #fff;
            border-radius: 0.04rem;
            border: 0.02rem solid #f5f8ff;
            cursor: pointer;

            &:hover {
                background: #fff;
                color: #0044ff;
            }
        }
    }
    .banner-swiper-pagination {
        bottom: 0.18rem;
    }
    .banner-main {
        //   background: url('../../assets/img/en/dev.png') right top;
        position: relative;
    }
    .opr {
        margin-top: 0.55rem;
        font-size: 0;
        .btn {
            width: 2.5rem;
            padding: 0;
            height: 0.8rem;
            line-height: 0.8rem;
            font-size: 0.28rem;
        }
        .try {
            background: rgba(255, 255, 255, 1);
            border: 0.02rem solid rgba(245, 248, 255, 1);
            border-radius: 0.04rem;
            color: #0337f5;
            margin-right: 0.44rem;
        }
        .expert {
            padding: 0;
            position: relative;
            user-select: text;
            .text {
                width: 100%;
                padding: 0;
                height: 100%;
                line-height: 0.76rem;
                display: inline-block;
                background: rgba(255, 255, 255, 0);
                border: 0.02rem solid rgba(245, 248, 255, 1);
                border-radius: 0.04rem;
                color: #fff;
            }
            .z-popuper {
                position: absolute;
                bottom: 100%;
                left: 50%;
                margin-left: -4.2rem;
                width: 6.3rem;
                height: 1.61rem;
                visibility: hidden;
                .z-popuper-content {
                    width: 100%;
                    height: 1.34rem;
                    padding: 0 0.4rem 0 0.45rem;
                    background: rgba(255, 255, 255, 1);
                    box-shadow: 0px 5px 24px 0px rgba(0, 0, 0, 0.2);
                    border-radius: 4px;
                }
                .z-contact-item {
                    text-align: left;
                    line-height: 1;
                    height: 1.34rem;
                    display: flex;
                    align-items: center;
                    .icon {
                        display: inline-block;
                        width: 0.44rem;
                        height: 0.44rem;
                        margin-right: 0.28rem;
                        vertical-align: middle;
                        &.email {
                            background-image: url(../../assets/img/en/banner/email-m.png);
                            background-size: 100%;
                        }
                        &.wechat {
                            background-image: url(../../assets/img/en/banner/wechat-m.png);
                            background-size: 100%;
                        }
                    }
                    .contact-right {
                        flex: 1;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        .contact-name {
                            display: flex;
                            flex-direction: column;
                            font-size: 0.28rem;
                            color: #222;
                            line-height: 1;
                        }
                    }
                    .contact-text {
                        margin-top: 0.14rem;
                        font-size: 0.24rem;
                        vertical-align: middle;
                        color: #999;
                    }
                    &:first-child {
                        // border-bottom: 1px solid #f1f1f1;
                    }
                    &.email {
                        .img {
                            width: 0.25rem;
                            height: 0.24rem;
                            background: url(../../assets/img/en/banner/copy-m.png) no-repeat;
                            background-size: cover;
                        }
                    }
                    &.wechat {
                        .img {
                            color: #0044ff;
                        }
                    }
                }
                &::after {
                    content: '';
                    position: absolute;
                    bottom: 2px;
                    left: 66%;
                    margin-left: -7px;
                    border: 7px solid transparent;
                    border-top-color: #fff;
                }
                &.show {
                    .z-popuper {
                        visibility: visible;
                    }
                }
            }
            &:hover {
                // .z-popuper {
                //   visibility: visible;
                // }
                .text {
                    border: 0.02rem solid rgba(245, 248, 255, 1);
                }
            }
        }
        .expert-pc {
            display: none;
        }
        .expert-m {
            display: inline-block;
        }
    }
    .bg-img {
        //   float: right;
        position: absolute;
        right: 0;
        top: 4.04rem;
        width: 100%;
        height: 3.94rem;
        background: url(../../assets/img/en/banner/dev-m.png);
        background-size: cover;
        filter: grayscale(1);
        pointer-events: none;
    }
    .banner-detail {
        height: auto;
        background: rgba(250, 250, 251, 1);
        padding: 1rem 0 0.44rem;
        .advantage-item {
            float: left;
            width: 100%;
            height: auto;
            padding: 0;
            display: flex;
            .icon {
                display: inline-block;
                width: 0.64rem;
                height: 0.64rem;
                margin-right: 0.55rem;
                &.cloud {
                    background: url(../../assets/img/en/banner/cloud-m.png);
                    background-size: cover;
                }
                &.engine {
                    background: url(../../assets/img/en/banner/engine-m.png);
                    background-size: cover;
                }
                &.monitor {
                    background: url(../../assets/img/en/banner/monitor-m.png);
                    background-size: cover;
                }
            }
            div {
                flex: 1;
                margin-bottom: 0.6rem;
            }
            h2 {
                margin-top: 0;
                font-size: 0.36rem;
                color: rgba(34, 34, 34, 1);
                line-height: 0.44rem;
                letter-spacing: 0;
                word-break: break-word;
            }
            h3 {
                margin-top: 0.18rem;
                font-size: 0.28rem;
                color: rgba(105, 111, 128, 1);
                line-height: 0.42rem;
                word-break: break-word;
                letter-spacing: 0;
            }
        }
    }
    .module {
        padding: 1rem 0;
        h1 {
            margin-bottom: 0.62rem;
            font-size: 0.54rem;
            color: #222;
            text-align: center;
        }
    }
    .products {
        h1 {
            margin-bottom: 0.44rem;
        }
    }
    .product-content-pc {
        display: none;
    }
    .product-content-m {
        display: block;
        height: auto;
        .slide-item {
            .title {
                font-size: 0.4rem;
                color: #222;
                margin: 0.65rem 0 0.28rem;
            }
            .desc {
                font-size: 0.28rem;
                color: #696f80;
                line-height: 0.42rem;
                font-weight: 400;
                word-break: break-word;
            }
            .pic {
                position: static;
                margin-top: 0.42rem;
                width: 100%;
                height: 4.5rem;
                &.video {
                    background: url(../../assets/img/en/products/pic/video-m.png);
                    background-size: cover;
                }
                &.audio {
                    background: url(../../assets/img/en/products/pic/audio-m.png);
                    background-size: cover;
                }
                &.record {
                    background: url(../../assets/img/en/products/pic/record-m.png);
                    background-size: cover;
                }
                &.chatroom {
                    background: url(../../assets/img/en/products/pic/chatroom-m.png);
                    background-size: cover;
                }
            }
        }
    }
    .product-swiper-pagination {
        height: 1.2rem;
        padding: 0;
        display: flex;
        border-bottom: 2px solid #ececf2;
        align-items: center;
        // justify-content: space-between;
        /deep/ .product-swiper-item {
            flex: 1;
            height: 100%;
            // line-height: 1.2rem;
            margin: 0 !important;
            opacity: 1;
            border-radius: 0;
            background-color: transparent;
            text-align: center;
            // border-bottom: 3px solid transparent;
            position: relative;
            display: flex;
            align-items: center;
            /*flex-direction: column;*/
            &::after {
                position: absolute;
                display: inline-block;
                content: '';
                width: 0;
                height: 3px;
                left: 0;
                // transform: translateX(-50%);
                bottom: -3px;
                z-index: 11;
                background-color: #0044ff;
                transition: all 0.3s ease-in;
            }
            .icon {
                display: block;
                width: 0.44rem;
                height: 0.44rem;
                margin: 0 auto;
                &.video {
                    background: url(../../assets/img/en/products/video-m.png);
                    background-size: 100%;
                }
                &.audio {
                    background: url(../../assets/img/en/products/audio-m.png);
                    background-size: 100%;
                }
                &.record {
                    background: url(../../assets/img/en/products/record-m.png);
                    background-size: 100%;
                }
                &.chatroom {
                    background: url(../../assets/img/en/products/chatroom-m.png);
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
                    width: 100%;
                }
            }
            &.swiper-pagination-bullet-active,
            &:hover {
                .title {
                    color: #0044ff;
                }
                .icon {
                    &.video {
                        background: url(../../assets/img/en/products/video-m-active.png);
                        background-size: 100%;
                    }
                    &.audio {
                        background: url(../../assets/img/en/products/audio-m-active.png);
                        background-size: 100%;
                    }
                    &.record {
                        background: url(../../assets/img/en/products/record-m-active.png);
                        background-size: 100%;
                    }
                    &.chatroom {
                        background: url(../../assets/img/en/products/chatroom-m-active.png);
                        background-size: 100%;
                    }
                }
            }
        }
    }
    .pro-list {
        width: 440px;
        margin-right: 40px;
        .pro-item {
            height: 80px;
            padding: 20px 24px;
            background: rgba(255, 255, 255, 1);
            border: 1px solid rgba(230, 231, 235, 1);
            border-radius: 2px;
            overflow: hidden;
            transition: height 0.5s ease-in;
            .pro-item-top {
                // padding-top: 20px;
                // padding-left: 24px;
                // padding-bottom: 20px;
                font-size: 0;
                display: flex;
                align-items: center;
            }
            .pro-item-content {
                // padding: 0 28px 21px 84px;
                padding-left: 60px;
                padding-top: 12px;
                line-height: 24px;
                word-break: break-word;
                // display: none;
            }
            .icon {
                display: inline-block;
                width: 40px;
                height: 40px;
                vertical-align: middle;
                // padding-top: 20px;
                &.video {
                    background: url(../../assets/img/en/products/video.png);
                    background-size: cover;
                }
                &.audio {
                    background: url(../../assets/img/en/products/audio.png);
                    background-size: cover;
                }
                &.record {
                    background: url(../../assets/img/en/products/record.png);
                    background-size: cover;
                }
                &.chatroom {
                    background: url(../../assets/img/en/products/chatroom.png);
                    background-size: cover;
                }
            }
            h3 {
                display: inline-block;
                font-size: 18px;
                margin-left: 20px;
            }
            &:hover {
                border-color: #0044ff;
            }
            &.active {
                box-shadow: 0px 5px 30px 0px rgba(9, 17, 40, 0.08);
                border-radius: 2px;
                height: 254px;
                // height: auto;
                .pro-item-top {
                    // padding-bottom: 5px;
                }
                .pro-item-content {
                    display: block;
                    font-size: 14px;
                }
            }
            &:not(:last-child) {
                margin-bottom: 14px;
            }
        }
    }
    .introductions {
        background-color: #fafafb;
    }
    .intro-content {
        .intro-list-item {
            display: flex;
            flex-direction: column-reverse !important;
            padding-bottom: 0.64rem;
            border-bottom: 1px solid #ececf2;
            margin-bottom: 0.62rem !important;
            &:last-child {
                border: 0;
                padding-bottom: 0;
                margin-bottom: 0;
            }
            .img {
                width: 100%;
                height: 3.6rem;
                &.engine {
                    background: url(../../assets/img/en/intro/engine-m.png);
                    background-size: 100%;
                }
                &.trans {
                    background: url(../../assets/img/en/intro/trans-m.png);
                    background-size: 100%;
                }
                &.adapt {
                    background: url(../../assets/img/en/intro/adapt-m.png);
                    background-size: 100%;
                }
            }
            .intro-desc {
                flex: 1;
            }
            &:nth-of-type(2n) {
                flex-direction: row-reverse;
                .intro-desc {
                    padding-left: 0;
                }
            }
        }
    }
    .intro-desc {
        padding-left: 0;
        .title {
            font-size: 0.36rem;
            color: #222;
            line-height: 0.44rem;
            margin-top: 0;
            margin-bottom: 22px;
            word-break: keep-all;
        }
        ul {
            margin-bottom: 0.6rem;
            li {
                position: relative;
                padding-left: 20px;
                margin-bottom: 0.17rem;
                color: #696f80;
                font-size: 0.28rem;
                line-height: 0.42rem;
                word-break: break-word;
                &::before {
                    content: '';
                    position: absolute;
                    display: block;
                    width: 0.12rem;
                    height: 0.12rem;
                    background-color: #696f80;
                    border-radius: 50%;
                    top: 0.13rem;
                    left: 0;
                }
            }
        }
    }
    .access-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 0;
        .acc-list-item {
            position: relative;
            width: 100%;
            height: 2.88rem;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0 0.05rem 0.3rem 0 rgba(9, 17, 40, 0.08);
            border-radius: 0.16rem;
            text-align: center;
            padding: 0.55rem;
            margin-bottom: 0.85rem;
            display: flex;
            &:last-child {
                margin-bottom: 0;
            }
            .icon {
                display: inline-block;
                width: 0.54rem;
                height: 0.54rem;
                margin-bottom: 0;
                margin-right: 0.45rem;
                &.integration {
                    background: url(../../assets/img/en/access/integration-m.png);
                    background-size: cover;
                }
                &.login {
                    background: url(../../assets/img/en/access/login-m.png);
                    background-size: cover;
                }
                &.push {
                    background: url(../../assets/img/en/access/push-m.png);
                    background-size: cover;
                }
                &.pull {
                    background: url(../../assets/img/en/access/pull-m.png);
                    background-size: cover;
                }
            }
            div:nth-child(2) {
                flex: 1;
            }
            .title {
                font-size: 0.36rem;
                color: #222;
                line-height: 1;
                margin-bottom: 0.25rem;
                text-align: left;
            }
            p {
                font-size: 0.28rem;
                line-height: 0.42rem;
                color: #666;
                text-align: left;
                font-weight: 400;
            }
            &::before {
                display: none;
            }
            &:not(:last-child) {
                &::after {
                    position: absolute;
                    content: '';
                    display: block;
                    width: 0.54rem;
                    height: 0.54rem;
                    background: url(../../assets/img/en/access/arrow-down.png);
                    background-size: cover;
                    left: 50%;
                    margin-left: -0.27rem;
                    margin-top: 0.14rem;
                    top: 100%;
                }
            }
        }
    }
    .downloads {
        display: none;
        .btn {
            display: block;
            width: 340px;
            height: 60px;
            line-height: 60px;
            padding: 0;
            margin: 0 auto;
            background: rgba(255, 255, 255, 1);
            border: 1px solid rgba(0, 68, 255, 1);
            border-radius: 4px;
            font-size: 20px;
            color: #0044ff;
        }
        &.show {
            .btn {
                display: none;
            }
        }
    }
    .platforms {
        display: flex;
        justify-content: space-between;
        margin-bottom: 70px;
        .plat-item {
            position: relative;
            width: 176px;
            height: 84px;
            background: rgba(250, 250, 251, 1);
            border-radius: 2px;
            display: flex;
            justify-content: center;
            align-items: center;
            .icon {
                width: 24px;
                height: 24px;
                margin-right: 10px;
                &.iOS {
                    background: url(../../assets/img/en/access/iOS.png);
                    background-size: 100%;
                }
                &.Android {
                    background: url(../../assets/img/en/access/Android.png);
                    background-size: 100%;
                }
                &.Windows {
                    background: url(../../assets/img/en/access/Windows.png);
                    background-size: 100%;
                }
                &.Web {
                    background: url(../../assets/img/en/access/Web.png);
                    background-size: 100%;
                }
                &.Linux {
                    background: url(../../assets/img/en/access/Linux.png);
                    background-size: 100%;
                }
            }
            .mask {
                display: none;
                position: absolute;
                cursor: pointer;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 68, 255, 0.9);
                box-shadow: 0px 5px 30px 0px rgba(9, 17, 40, 0.08);
            }
            &:hover {
                .mask {
                    display: block;
                }
            }
        }
    }
    .retract {
        display: block;
        text-align: center;
        font-size: 20px;
        font-family: Roboto;
        font-weight: 400;
        text-decoration: underline;
        color: #222;
        &:hover {
            color: #0044ff;
        }
    }
    .stories {
        background: #fafafb;
        ul {
            text-align: center;
            li {
                display: inline-block;
                width: 2.95rem;
                height: 1.4rem;
                background: transparent;
                border-radius: 0.04rem;
                margin-bottom: 0.2rem;
                img {
                    width: 100%;
                    height: 100%;
                }
                &:nth-of-type(2n + 1) {
                    margin-right: 0.4rem;
                }
            }
        }
    }
    .contact {
        form {
            display: flex;
            flex-direction: column;
            .contact-list {
                display: flex;
                flex-direction: row;
                margin-bottom: 0.54rem;
                & > li {
                    width: 100%;
                    margin-right: 0 !important;
                    margin-bottom: 1rem;
                    &:last-child {
                        margin-bottom: 0;
                    }
                    label {
                        display: block;
                        margin-bottom: 0.12rem;
                    }
                    .error {
                        font-size: 0.28rem;
                        margin-top: 0.18rem;
                    }
                }
            }
        }
        .submit-btn {
            width: 6.3rem;
            height: 0.88rem;
            background: rgba(0, 68, 255, 1);
            border-radius: 0.08rem;
            font-size: 0.28rem;
            color: #fff;
            line-height: 0.88rem;
            margin: auto;
            text-align: center;
            cursor: pointer;
        }
        .thank {
            font-size: 0.54rem;
            color: #222;
            font-weight: 500;
            text-align: center;
            margin-bottom: 0.53rem;
        }
        .receive {
            font-size: 0.28rem;
            color: #666666;
            font-weight: 400;
            word-break: break-word;
            text-align: center;
        }
        &.is-submit {
            #contact {
                display: none;
            }
        }
    }
    .flag-container {
        top: 35px;
    }
    .country-list {
        position: absolute;
        width: 100%;
        height: 4rem;
        margin-top: 42px;
        z-index: 2;
        list-style: none;
        text-align: left;
        padding: 0;
        margin: 0 0 0 -1px;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
        background-color: #fff;
        border: 1px solid #ccc;
        white-space: nowrap;
        max-height: 500px;
        overflow-y: scroll;
        .country {
            display: flex;
            height: 40px;
            // justify-content: space-between;
            align-items: center;
            // .dial-code {
            //   width: 1.8rem;
            //   padding-left: 10px;
            // }
            // .country-name {
            //   flex: 1;
            // }
            &.highlight {
                background-color: rgba(0, 0, 0, 0.05);
            }
        }
    }
    .custom-input {
        background: none;
        outline: none;
        border: 0;
        width: 100%;
        height: 0.88rem;
        // background: rgba(233, 240, 253, 1);
        border-bottom: 1px solid #e6e6e6;
        &::-webkit-input-placeholder {
            /* WebKit, Blink, Edge */
            color: #e0e0e0;
            font-size: 0.28rem;
        }
        &:-moz-placeholder {
            /* Mozilla Firefox 4 ~ 18 */
            color: #e0e0e0;
            font-size: 0.28rem;
            opacity: 1;
        }
        &::-moz-placeholder {
            /* Mozilla Firefox 19+ */
            color: #e0e0e0;
            font-size: 0.28rem;
            opacity: 1;
        }
        &:-ms-input-placeholder {
            /* Internet Explorer 10 ~ 11 */
            color: #e0e0e0;
            font-size: 0.28rem;
        }
        &::-ms-input-placeholder {
            /* Microsoft Edge */
            color: #e0e0e0;
            font-size: 0.28rem;
        }

        &::placeholder {
            /* 大部分现代浏览器 */
            color: #e0e0e0;
            font-size: 0.28rem;
        }
    }
    .bg {
        height: 3.2rem;
        padding-top: 1.16rem;
        .link {
            display: block;
            margin: 0 auto;
            width: 5.2rem;
            height: 0.88rem;
            font-size: 0.32rem;
            line-height: 0.88rem;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0 0.05rem 0.3rem 0 rgba(9, 17, 40, 0.08);
            border-radius: 0.04rem;
            color: #0044ff;
            text-align: center;
            .bg-img {
                position: absolute;
                background: url(../../assets/img/en/bg.png);
                background-size: cover;
            }
        }
    }
}
/deep/ .hospital-alert {
    word-break: break-word;
    position: absolute;
    left: 0;
    top: 10px;
    max-width: calc(100% - 20px);
    z-index: 2;
    .close {
        padding: 7px 10px;
        line-height: 1;
        top: 50%;
        transform: translateY(-50%);
    }
}
@media screen and (max-width: 1000px) {
    /deep/ .hospital-alert {
        padding: (0.75rem * 0.28) (1.25rem * 0.28);
        top: 2px;
        .close {
            font-size: 0.42rem;
        }
    }
}
</style>
