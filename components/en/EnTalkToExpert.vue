<template>
    <div class="expert-btn">
        <div class="btn expert expert-pc">
            <slot></slot>
            <div class="z-popuper">
                <section class="z-popuper-content">
                    <div class="z-contact-item">
                        <span class="icon email"></span>
                        <span class="contact-text">global@zego.im</span>
                    </div>
                    <div class="z-contact-item">
                        <span class="icon wechat"></span>
                        <span class="contact-text">{{ message }}</span>
                    </div>
                </section>
            </div>
        </div>
        <div v-click-outside="hideQR" :class="{ show: isQRShow }" class="btn expert expert-m" @click="showQR">
            <slot></slot>
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
                    <div class="z-contact-item wechat">
                        <span class="icon wechat"></span>
                        <a href="javascript:void(0);" onclick="return false;" class="contact-right">
                            <div class="contact-name">
                                <span>WhatsApp</span>
                                <span class="contact-text">{{ message }}</span>
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
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import ClickOutside from 'vue-click-outside';

@Component({
    name: 'EnTalkToExpert',
    directives: { ClickOutside },
})
export default class EnTalkToExpert extends Vue {
    isQRShow = false;
    message = '+8613826446667';
    showQR() {
        this.isQRShow = true;
    }
    hideQR() {
        console.log('hideQR');
        this.isQRShow = false;
    }
    onCopy() {
        console.log('copy');
    }
    onError() {
        console.log('error');
    }
}
</script>

<style lang="scss" scoped>
.expert-btn {
    display: inline-block;
}
.btn {
    font-size: 18px;
    cursor: pointer;
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
        left: 60%;
        margin-left: -130px;
        width: 220px;
        height: 114px;
        visibility: hidden;
        z-index: 2;
        .z-popuper-content {
            width: 100%;
            height: 98px;
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
                color: #222;
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
    width: 100%;
    display: inline-block;
}
.expert-m {
    display: none;
}
@media screen and(max-width: 1000px) {
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
            height: 2.95rem;
            visibility: hidden;
            .z-popuper-content {
                width: 100%;
                height: 2.68rem;
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
                    border-bottom: 1px solid #f1f1f1;
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
</style>
