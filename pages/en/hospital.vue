<template>
    <div>
        <div class="foreign-container">
            <div class="banner-container">
                <b-container style="position: relative;height: 100%">
                    <div class="banner-content">
                        Real-Time Audio and Video Application for Hospital & Medical Institutions. 5000 Minutes Stable
                        and High-Quality Communication for FREE!
                    </div>
                    <div class="bg-img">
                        <img src="~/assets/img/hosbitap/bg-banner.png" alt="" srcset="" />
                    </div>
                </b-container>
            </div>
            <b-container class="main-container">
                <b-row no-gutters align-h="between">
                    <b-col lg="6" cols="12" class="left-part">
                        <p class="fs-18 color-black">
                            ZEGO is Offering to Support Online Medical Consultation During the COVID-19 Pandemic
                        </p>
                        <p class="fs-14 color-gray">
                            In response to the current COVID-19 pandemic, ZEGO is offering an Online Medical
                            Consultation solution to help hospitals and healthcare providers deliver healthcare services
                            to their patients remotely, which helps prevent the spread of the disease among healthcare
                            workers and patients.
                        </p>
                        <p class="fs-14 color-black">
                            The solution we provide perfectly supports the needs of telehealth service providers, such
                            as:
                        </p>
                        <b-row class="gutter-15 shadow-box">
                            <b-col lg="4" cols="12">
                                <div class="icon-item">
                                    <img class="icon" src="~/assets/img/hosbitap/icon-m-talk.png" alt="" />
                                    <div class="text">1-on-1 video consultation</div>
                                </div>
                            </b-col>
                            <b-col lg="4" cols="12">
                                <div class="icon-item">
                                    <img class="icon" src="~/assets/img/hosbitap/icon-police.png" alt="" />
                                    <div class="text">Multi-doctor video consultation</div>
                                </div>
                            </b-col>
                            <b-col lg="4" cols="12">
                                <div class="icon-item">
                                    <img class="icon" src="~/assets/img/hosbitap/icon-protact.png" alt="" />
                                    <div class="text">Data security and privacy protection</div>
                                </div>
                            </b-col>
                        </b-row>
                        <p class="fs-14 color-black">
                            By optimizing each and every step throughout the whole live streaming process, ZEGO is able
                            to deliver high-quality audio and video with ultra-low latency, providing users a perfect
                            communication experience:
                        </p>
                        <ul class="detail-list">
                            <li>
                                <span class="text"
                                    >Multiple data centers and global network allow users to access the system through
                                    nearby nodes.</span
                                >
                            </li>
                            <li>
                                <span class="text"
                                    >Intelligent dispatching system always connects users to the best network
                                    resources.</span
                                >
                            </li>
                            <li>
                                <span class="text"
                                    >Optimized first frame loading strategy allows video playback to start
                                    instantly.</span
                                >
                            </li>
                            <li>
                                <span class="text"
                                    >Our independently-developed transmission protocol achieves the best trade-off
                                    between latency and smoothness and adapts to different network environments.</span
                                >
                            </li>
                        </ul>
                        <p class="fs-14 color-gray fw-normal">
                            In an effort to support the global fight against COVID-19, ZEGO will provide 10,000 minutes
                            of service free of charge to all healthcare providers and platforms that will use our
                            solution. We also have a team of technical experts to support you whenever you need
                            assistance.
                        </p>
                        <p class="fs-14 color-gray fw-normal">
                            To contact us, please fill out the form below. We will get back to you shortly.
                        </p>
                    </b-col>
                    <b-col lg="6" cols="12" class="right-part">
                        <img class="top-img" src="~/assets/img/hosbitap/pop-banner.png" alt="" />
                        <b-form v-if="!submitSuccess" class="form">
                            <b-form-group
                                v-for="(contactItem, rK) in contents.contact"
                                id="contactItem.id"
                                :key="rK"
                                :label="contactItem.label"
                                label-for="input-name"
                                class="form-item-row"
                            >
                                <b-form-input
                                    :id="contactItem.id"
                                    v-model="contactItem.value"
                                    :type="contactItem.type"
                                    :placeholder="contactItem.placeholder"
                                    class="form-item-input"
                                    :class="['form-item-input', contactItem.id]"
                                    @blur="blurCheck(contactItem)"
                                ></b-form-input>
                                <b-dropdown
                                    v-if="contactItem.id === 'phone'"
                                    class="arrow-dropdown"
                                    :text="'+' + currentData.dialCode"
                                >
                                    <b-dropdown-item
                                        v-for="(item, index) in frontCountriesArray"
                                        :key="item.id"
                                        href="#"
                                        :class="{ divider: frontCountriesArray.length - 1 === index }"
                                        @click="
                                            setCountry(item);
                                            blurCheck(contactItem);
                                        "
                                        >{{ item.name }} +{{ item.dialCode }}
                                    </b-dropdown-item>
                                    <b-dropdown-item
                                        v-for="item in countriesArray"
                                        :key="item.id"
                                        href="#"
                                        @click="
                                            setCountry(item);
                                            blurCheck(contactItem);
                                        "
                                        >{{ item.name }} +{{ item.dialCode }}
                                    </b-dropdown-item>
                                </b-dropdown>
                                <div v-if="contactItem.error" class="form-item-info error">{{ contactItem.error }}</div>
                            </b-form-group>
                            <b-button class="btn-submit" pill variant="primary" @click="submitMessage"
                                >Send Message</b-button
                            >
                        </b-form>
                        <div v-else>
                            <h3 class="thank">Thank you</h3>
                            <p class="receive">We have received your message.</p>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
            <EnBottomBgLink />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'nuxt-property-decorator';
import axios from 'axios';
import EnBottomBgLink from '~/components/en/EnBottomBgLink.vue';
import { isValidNumber } from 'libphonenumber-js/custom';
// @ts-ignore
import metadata from 'libphonenumber-js/metadata.full.json';
// @ts-ignore
import countries from '../../assets/js/countryList.js';
// eslint-disable-next-line no-useless-escape
const regEmail = /^[\w-\.]+@[\w-]+(\.[\w-]+)+$/;

@Component({
    name: 'hospital',
    components: { EnBottomBgLink },
})
export default class Hospital extends Vue {
    contents: any;
    message = '+8613826446667';
    currentCode = 'hk';
    hideSubMenu = true;
    submitSuccess = false;
    emailValidateError = false;
    phoneValidateError = false;
    toFront = [];
    frontCountriesArray: any = {};
    asyncData() {
        const contents = require('../../assets/json/foregin.json');
        return {
            contents,
        };
    }
    head() {
        return {
            title:
                "ZEGO-ZEGO Technology is one of the world's leading professional real-time audio and video communications services provider",
            // 'ZEGO- Here comes the 5th anniversary showroom live streaming pricing packages',
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
            htmlAttrs: {
                lang: 'en',
            },
        };
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
    get currentData() {
        // @ts-ignore
        return countries[this.currentCode];
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
    blurCheck(item: any) {
        console.log('blurCheck', item);
        if (item.value === '') {
            item.error = 'The field is required.';
            return;
        }
        if (item.id === 'email') {
            if (item.value && !regEmail.test(item.value)) {
                item.error = item.ierror;
                this.emailValidateError = true;
            } else {
                item.error = '';
                this.emailValidateError = false;
            }
        }
        if (item.id === 'phone') {
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
        if (['company', 'name'].indexOf(item.id) > -1) {
            if (item.value) {
                item.error = '';
            }
        }
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
}
</script>
<style lang="scss" scoped>
* {
    line-height: 1.5;
    font-family: Roboto, 'PingFang SC', Helvetica Neue, Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑',
        Arial, sans-serif;
    overflow-wrap: break-word;
    word-break: break-word;
    word-break: hyphenate;
    hyphens: auto;
}
p {
    margin: 1em 0;
}
.color-black {
    color: #222;
}
.color-gray {
    color: #666;
}
.fs-18 {
    font-size: 18px;
}
.fs-14 {
    font-size: 14px;
}
.fw-normal {
    font-weight: normal;
}
.gutter-15 {
    margin-left: -7.5px;
    margin-right: -7.5px;
    [class^='col-'] {
        padding-left: 7.5px;
        padding-right: 7.5px;
    }
}
.row.no-gutters {
    margin-right: 0;
    margin-left: 0;
}
.banner-container {
    width: 100%;
    height: 500px;
    overflow: hidden;
    background: linear-gradient(90deg, rgba(0, 85, 254, 1) 0%, rgba(4, 51, 243, 1) 99%);
    .banner-content {
        width: 532px;
        padding-top: 141px;
        font-weight: bold;
        color: #fff;
        font-size: 30px;
        position: relative;
        z-index: 1;
        max-width: 100%;
    }
    .bg-img {
        width: 528px;
        background-size: cover;
        position: absolute;
        right: 102px;
        bottom: -58px;
        z-index: 0;
        img {
            width: 100%;
        }
    }
}
.main-container {
    margin: 50px auto 80px;
}
.foreign-container {
    margin-top: 68px;
}
.left-part {
    font-weight: 500;
}
.shadow-box {
    margin-bottom: 30px;
    .icon-item {
        height: 145px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 5px 30px 0px rgba(9, 17, 40, 0.08);
        border-radius: 2px;
        text-align: center;
        padding: 20px;
        .icon {
            width: 55px;
            height: 55px;
        }
        .text {
            margin-top: 10px;
            font-size: 14px;
            font-weight: 500;
            color: #666;
        }
    }
}
.detail-list {
    font-weight: 400;
    background-color: #fff;
    box-shadow: 0px 5px 30px 0px rgba(9, 17, 40, 0.08);
    padding: 30px 36px;
    color: #0044ff;
    font-size: 12px;
    margin-top: 30px;
    margin-bottom: 30px;
    li {
        margin-bottom: 5px;
        list-style: disc;
    }
    .text {
        color: #666;
        font-size: 14px;
    }
}
.right-part {
    padding-left: 84px;
    .top-img {
        margin-left: -42px;
        margin-top: -15px;
        width: calc(100% + 42px);
    }
    .form {
        font-size: 14px;
        color: #222;
        background-color: #fff;
        padding: 35px;
        box-shadow: 0px 5px 30px 0px rgba(9, 17, 40, 0.08);
        border-radius: 2px;
        &-item {
            &-row {
                position: relative;
                font-size: 14px;
                font-weight: 500;
                color: #222;
                margin-bottom: 40px;
            }
            &-input {
                border: none;
                outline: none;
                box-shadow: none;
                border-bottom: 1px solid #e6e6e6;
                border-radius: 0;
                padding: 0;
                &.phone {
                    padding-left: 76px;
                }
                &::placeholder {
                    color: #e0e0e0;
                }
                &:focus {
                    border-color: #222;
                }
            }
            &-info {
                position: absolute;
                top: 65px;
                &.error {
                    color: #ec3323;
                }
            }
        }
        .btn-submit {
            width: 70%;
            margin: 15px 15% 0;
            background-color: #0433f3;
            color: #fff;
            outline: none;
        }
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
/deep/ .arrow-dropdown {
    position: absolute;
    left: 0;
    top: 30px;
    .btn-secondary {
        background-color: transparent;
        color: #222;
        font-size: 14px;
        font-weight: 500;
        border: none;
        padding: 0;
        &:focus,
        &.focus,
        &:active,
        &:hover,
        &.hover {
            border: none;
            outline: none;
            box-shadow: none !important;
            background-color: transparent;
        }
        &.dropdown-toggle {
            &::after {
                margin-left: 4px;
                margin-top: 2px;
                width: 14px;
                height: 9px;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAASCAYAAABIB77kAAACW0lEQVRIS62UT2gTQRTG3zdFQ4rSQ/HWY8GTZymk4O6bHBqo/9AglF4EhfReVGiFoqLovbm0p1KQUlQaiIfM7B5aFKE3b+KxniSHoCSk4D6ZkJTtmjSrdU6zO+99v5k3bz5QbOzt7Z3P5XI/4v9OMw/D8JzneT/jGuh9GGPuA1hRSk17nvf1NCCXG4bhZBRFuyKypLVe7+l1gMaYxwSsuDmIHOwKM3/7V2gYhhNRFIVCNAkiIaJlZn7W0TfGXCfg7TFxkc8iMp3P5xt/C63VamMAdgm4FM9VwDXf93cgIrDWrhFwN1HroN1uFwqFQjsttFqtZjKZTFWI/MQB1pn5HgDplHRra2tkfHz8jRBdTUB36vX6zWKx+GsYNK3GUdNUKpXRbDZrCJhKQMvMvDAMaK1dFaJSIvdDs9nMz87ONo81Te9jUP1B9JSZlwdBrbVPhGgpTR8cnbAX3O2wj0I0kdjtAjOXk1BrbUmIVhOxB0qpKc/zDpLxfwBdQBAEF0VkV4guHCWIuHu8o7Xejr3dW0T0moCRWMm+i0hOa/2lX0X6ArvQy1EUBQSMxqCHAGaYObDW+iLynoCzsfWmUsr3ff/ToPIPBLoEa+2MiLxLiDYAlESkTMBYfDNKqRu+71dParATgS7RGDMHYEM6JtR/ODcRkXmt9eawbh4KdAK1IFiEyMuBYiIPtNaD12OJqYDd8j4Xood9uu4FMz8adrK+7/CkpK4FbhAwF7u3TWaed5b134FOcH9//0yj0dh2FggiZ3u3i8XiYVqYi0td0p5o1wJftVqtxbhlpYX+Bmt8ByKBkug3AAAAAElFTkSuQmCC);
                background-size: cover;
                border: none;
                vertical-align: baseline;
            }
        }
    }

    &.show > .btn-secondary {
        &.dropdown-toggle {
            border: none;
        }
    }
}
/deep/ .right-part {
    .dropdown-menu {
        max-height: 400px;
        overflow: auto;
        .divider {
            border-bottom: 1px solid #ccc;
        }
    }
}

@media (min-width: 1200px) {
    .container,
    .container-sm,
    .container-md,
    .container-lg,
    .container-xl {
        max-width: 1200px;
    }
}
@media screen and (max-width: 1000px) {
    /deep/ .form-control {
        font-size: 0.28rem;
    }
    .container {
        max-width: 6.3rem;
    }
    .main-container {
        margin: 0.6rem auto;
    }
    .foreign-container {
        margin-top: 1.08rem;
    }
    .banner-container {
        height: auto;
        .banner-content {
            font-size: 0.6rem;
            padding: 1rem 0;
        }
        .bg-img {
            opacity: 0.3;
            width: 80%;
            left: 10%;
            bottom: -0.8rem;
        }
    }

    .right-part {
        padding-left: 0;
        .top-img {
            width: 100%;
            margin-left: 0;
            margin-top: 0;
        }
        .btn-submit {
            width: 100%;
            margin: 10px;
            padding: 0.105rem 0.21rem;
            font-size: 0.28rem;
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
    }

    .shadow-box {
        .icon-item {
            margin-bottom: 10px;
            height: auto;
        }
    }

    .form {
        &-item {
            &-input {
                height: 0.88rem;
                margin-bottom: 1rem;
            }
        }
    }

    /deep/ .right-part {
        .dropdown-menu {
            min-width: 2.8rem;
            max-width: 4.9rem;
            padding: 0.14rem 0;
            margin: 0.035rem 0 0;
            font-size: 0.28rem;
            border-radius: 0.07rem;
            max-height: 4rem;
            overflow: auto;
        }
        .dropdown-item {
            padding: 0.07rem 0.42rem;
        }
    }
}
</style>
