<template>
    <div class="banner">
        <div v-swiper:galleryTop="swiperOptionTop" class="gallery-top">
            <div class="swiper-wrapper">
                <div v-for="(top, tK) in tops" :key="tK" :class="'swiper-slide ' + top.id"></div>
            </div>
        </div>
        <div v-swiper:galleryThumbs="swiperOptionThumbs" class="gallery-thumbs">
            <div class="swiper-wrapper">
                <div v-for="(thumb, tK) in tops" :key="tK" :class="'swiper-slide ' + thumb.id"></div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// import { Swiper } from 'vue-awesome-swiper'
let vm: any = null;
@Component({})
export default class Test extends Vue {
    tops = [{ id: 'slide-1' }, { id: 'slide-2' }, { id: 'slide-3' }, { id: 'slide-4' }, { id: 'slide-5' }];
    thumbs = [{ id: 'slide-1' }, { id: 'slide-2' }, { id: 'slide-3' }, { id: 'slide-4' }, { id: 'slide-5' }];
    swiperOptionTop = {
        spaceBetween: 10,
        slidesPerView: 'auto',
    };
    swiperOptionThumbs = {
        slidesPerView: 3,
        watchSlidesVisibility: true,
        // watchSlidesProgress: true,
        // centeredSlides: true,
    };
    created() {
        vm = this;
        // vm.galleryTop.thumbs.swiper = vm.galleryThumbs
    }
    mounted() {
        console.log(vm);
        this.$nextTick(() => {
            console.log(vm.galleryTop);
            console.log(vm.galleryThumbs);
            vm.galleryTop.thumbs.swiper = vm.galleryThumbs;
            vm.galleryTop.thumbs.update();
            vm.galleryTop.thumbs.init();
            //   vm.galleryTop.controller.control = vm.galleryThumbs
            //   vm.galleryThumbs.controller.control = vm.galleryTop
        });
    }
}
</script>
<style lang="scss">
.swiper-container {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
}
.gallery-top {
    height: 800px;
}
.swiper-slide {
    background-size: cover;
    background-position: center;
}
.gallery-top {
    height: 800px;
}
.gallery-thumbs {
    height: 200px;
    .swiper-slide {
        width: 25%;
        opacity: 0.4;
    }
    .swiper-slide-thumb-active {
        opacity: 1;
    }
}
.swiper-slide {
    background-size: cover;
    background-position: center;

    &.slide-1 {
        background-image: url(http://lorempixel.com/1200/1200/nature/1);
        // background: red;
    }

    &.slide-2 {
        background-image: url(http://lorempixel.com/1200/1200/nature/2);
        // background: green;
    }

    &.slide-3 {
        background-image: url(http://lorempixel.com/1200/1200/nature/3);
        // background: blue;
    }

    &.slide-4 {
        background-image: url(http://lorempixel.com/1200/1200/nature/4);
        // background: yellow;
    }

    &.slide-5 {
        background-image: url(http://lorempixel.com/1200/1200/nature/5);
        // background: gray;
    }
}
</style>
