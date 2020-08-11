<template>
    <div v-swiper:bannerSwiper="bannerSwiper" class="banner-swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide banner">
                <div class="banner-main container">
                    <slot name="bg"></slot>
                    <div class="banner-content-container">
                        <slot></slot>
                        <div class="opr">
                            <a
                                class="btn try"
                                :style="{
                                    color: buttonTextColor,
                                }"
                                href="https://console.zego.im/acount/register"
                                target="_blank"
                                >Try it now</a
                            >
                            <EnTalkToExpert>
                                <a class="text" href="mailto:global@zego.im">Talk to expert</a>
                            </EnTalkToExpert>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import ClickOutside from 'vue-click-outside';
import EnTalkToExpert from './EnTalkToExpert.vue';

@Component({
    name: 'EnBanner',
    directives: { ClickOutside },
    components: {
        EnTalkToExpert,
    },
    props: {
        bannerSwiper: {
            type: Object,
            default: () => {
                return {
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    spaceBetween: 0,
                    autoplay: {
                        delay: 8000,
                        disableOnInteraction: false,
                        waitForTransition: false,
                    },
                };
            },
        },
        bgImgStyle: {
            type: Object,
            default: () => {},
        },
        buttonTextColor: String,
    },
})
export default class EnBanner extends Vue {
    isQRShow = false;
    message = '+8613826446667';
    showQR() {
        this.isQRShow = true;
    }
    hideQR() {
        console.log('hideQR');
        this.isQRShow = false;
    }
    tryUs() {
        window.open('https://console.zego.im/acount/register');
    }
    onCopy() {
        console.log('copy');
    }
    onError() {
        console.log('error');
    }
}
</script>

<style lang="scss">
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
.banner {
    width: 100%;
    height: 500px;
    &-swiper {
        background: linear-gradient(90deg, rgba(0, 85, 254, 1) 0%, rgba(4, 51, 243, 1) 99%);
    }
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
    &-content-container {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        z-index: 1;
    }
}
.banner-main {
    position: relative;
    height: 100%;
}
.opr {
    margin-top: 43px;
    font-size: 0;
    position: relative;
    z-index: 1;
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
}
@media screen and(max-width: 1000px) {
    .container {
        max-width: 6.3rem;
    }
    .banner {
        width: 100%;
        height: auto;
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
        &-content-container {
            position: static;
            transform: none;
        }
    }
    .banner-swiper-pagination {
        bottom: 0.18rem;
    }
    .banner-main {
        padding-bottom: 1rem;
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
    }
}
</style>
