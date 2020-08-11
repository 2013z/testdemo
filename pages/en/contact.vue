<template>
    <div class="foreign-container">
        <div class="contact-banner">
            <div class="container" style="position: relative; height: 100%">
                <div class="banner-content">
                    <div class="title">Contact Us Form</div>
                    <div class="subtitle">We’d love to talk to you</div>
                </div>
            </div>
        </div>

        <div class="container module contact-form">
            <!-- <h1 class="mb-small">Contact Us Form</h1>
            <p>
                Need help getting started? Want to learn more about Wowza products an services,or interedted in talking
                to a streaming expert? Send us a message. For technical support, please open a support ticket.
            </p> -->
            <div class="form-box">
                <section class="contact" :class="{ 'is-submit': submitSuccess }">
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
                                        @blur="blurCheck(contactItem)"
                                    />
                                    <div v-if="contactItem.error" class="error">
                                        {{ contactItem.error }}
                                    </div>
                                    <div v-if="contactItem.id === 'phone'" class="">
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
                                                    blurCheck(contactItem);
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
                                                    blurCheck(contactItem);
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
            </div>
        </div>

        <EnBottomBgLink />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'nuxt-property-decorator';
import EnBottomBgLink from '~/components/en/EnBottomBgLink.vue';
import axios from 'axios';
import ClickOutside from 'vue-click-outside';
// import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { isValidNumber } from 'libphonenumber-js/custom';
// @ts-ignore
import metadata from 'libphonenumber-js/metadata.full.json';
// @ts-ignore
import countries from '../../assets/js/countryList.js';
// eslint-disable-next-line no-useless-escape
const regEmail = /^[\w-\.]+@[\w-]+(\.[\w-]+)+$/;

@Component({
    name: 'contact',
    directives: { ClickOutside },
    components: { EnBottomBgLink },
})
export default class Contact extends Vue {
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
            title: 'Contact Us - Zego',
            meta: [
                {
                    hid: 'keywords',
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

    @Watch('toFront')
    frontCountriesArrayChange() {
        const toFrontCodes = {};
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
        // @ts-ignore
        this.toFront.push(String(item.code));
        // this.$emit('excountry', item)
    }
    hide() {
        this.hideSubMenu = true;
    }
    blurCheck(item: any) {
        if (item.value === '') {
            item.error = 'The field is required.';
            return;
        }
        item.error = '';
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
                if (!isValidNumber('+' + this.currentData.dialCode + item.value, metadata)) {
                    item.error = item.ierror;
                    this.phoneValidateError = true;
                } else {
                    item.error = '';
                    this.phoneValidateError = false;
                }
            }
        }
    }

    async submitMessage() {
        let hasError = false;
        for (const key in this.contents.contact) {
            if (!this.contents.contact[key].value) {
                this.contents.contact[key].error = 'The field is required.';
                hasError = true;
            }
        }
        if (hasError || this.emailValidateError || this.phoneValidateError) return;
        try {
            const res = await axios.post('https://doc.zego.im/data/abroadCustomerInfo', {
                name: this.contents.contact.name.value,
                phone: '+' + this.currentData.dialCode + ' ' + this.contents.contact.phone.value,
                company: this.contents.contact.company.value,
                email: this.contents.contact.email.value,
            });

            if (res.data.code === 200) {
                this.submitSuccess = true;
            }
        } catch (error) {
        } finally {
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/en-third-common.scss';
.contact-banner {
    height: 373px;
    background: #ebf3f7 url(../../assets/img/en/contact/banner.png) no-repeat center;
    background-size: auto 100%;
    position: relative;
}
.banner-content {
    font-weight: 500;
    color: #0044ff;
    max-width: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    .title {
        font-size: 60px;
    }
    .subtitle {
        font-size: 30px;
    }
}
@media screen and (max-width: 1000px) {
    .contact-banner {
        height: 3rem;
    }
    .banner-content {
        .title {
            font-size: 0.54rem;
        }
        .subtitle {
            font-size: 0.18rem;
        }
    }
}

.contact-form {
    &.module {
        h1 {
            text-align: left;
            text-transform: none;
        }
    }
    .form-box {
        padding: 70px;
        box-shadow: 0px 5px 30px 0px rgba(9, 17, 40, 0.08);
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
                    margin-right: 200px;
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
        margin: 30px auto 0;
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
    width: 420px;
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
    top: 52px;
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
        margin-top: 7px;
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
@media screen and(max-width: 1000px) {
    .contact-form {
        .form-box {
            padding: 0.7rem;
            margin-top: 0.6rem;
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
            width: 100%;
            height: 0.88rem;
            background: rgba(0, 68, 255, 1);
            border-radius: 0.08rem;
            font-size: 0.28rem;
            color: #fff;
            line-height: 0.88rem;
            margin: 0.3rem auto;
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
        top: 0.8rem;
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
}
</style>
