<template>
    <div v-swiper:mySwiper="swiperOption" class="swiperWrap">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../../assets/img/nav/activity/mobile/client1x.png" />
            </div>
            <div class="swiper-slide">
                <img src="../../assets/img/nav/activity/mobile/client2x.png" />
            </div>
            <div class="swiper-slide">
                <img src="../../assets/img/nav/activity/mobile/client3x.png" />
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            swiperOption: {
                loop: true,
                slidesPerView: 'auto',
                centeredSlides: true,
                useCSS3Transforms: false,
                paginationClickable: true,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    // dynamicBullets: true,
                },
                on: {
                    slideChange() {
                        console.log('onSlideChangeEnd', this);
                    },
                    tap() {
                        console.log('onTap', this);
                    },
                },
            },
        };
    },
    mounted() {},
};
</script>
<style lang="scss" scoped>
.swiperWrap {
    // border: 1px solid red;
    .swiper-slide {
        // border: 1px solid green;
        img {
            width: 315px;
            height: 352px;
            z-index: 1000;
        }
    }
}
</style>
