<template>
    <div class="scene-container">
        <h1>多行业多场景适用，全平台适配</h1>
        <div class="scene-pc">
            <div v-swiper:soluSwiper="soluSwiperOption" class="solu-swiper">
                <div slot="pagination" class="solu-swiper-pagination swiper-pagination-bullets"></div>

                <div class="swiper-wrapper">
                    <div v-for="(solution, sK) in scenes" :key="sK" class="swiper-slide">
                        <section class="slide-item">
                            <div class="slide-content scene-banner">
                                <img :src="solution.pic" class="pic" />
                                <img :src="solution.pic" class="pic-m" />
                                <article class="solution-desc">
                                    <h3 class="title">{{ solution.title }}</h3>
                                    <div class="hr"></div>
                                    <p class="desc-content">
                                        {{ solution.desc }}<br /><br />
                                        {{ solution.scene }}
                                    </p>
                                    <!-- <a href="/" class="detail-link">了解详情 -&gt;</a> -->
                                </article>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        <div class="scene-m">
            <div v-swiper:soluThumbsM="soluThumbsOptionM" class="solu-thumbs">
                <div class="swiper-wrapper">
                    <section v-for="(solution, sK) in scenes" :key="sK" class="swiper-slide">
                        <span :class="'icon ' + solution.id"></span><span class="title">{{ solution.title }}</span>
                    </section>
                </div>
            </div>

            <div v-swiper:soluSwiperM="soluSwiperOptionM" class="solu-swiper">
                <div class="swiper-wrapper">
                    <div v-for="(solution, sK) in scenes" :key="sK" class="swiper-slide">
                        <section class="slide-item">
                            <div class="slide-content scene-banner">
                                <img :src="solution.pic" class="pic" />
                                <img :src="solution.pic" class="pic-m" />
                                <article class="solution-desc">
                                    <h3 class="title">{{ solution.title }}</h3>
                                    <div class="hr"></div>
                                    <p class="desc-content">
                                        {{ solution.desc }}<br />
                                        {{ solution.scene }}
                                    </p>
                                    <!-- <a href="/" class="detail-link">了解详情 -&gt;</a> -->
                                </article>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// import { Swiper } from 'vue-awesome-swiper'

let vm: any = null;
declare const $: any;

// let window: any
@Component({
    props: {
        scenes: {
            type: Array,
            default: null,
        },
    },
})
export default class Scene extends Vue {
    navSlideWidth: any;
    clientWidth: any;
    navWidth = 0;
    soluSwiperOption = {
        slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: true,
        effect: 'fade',
        // loop: true,
        // slidesPerView: 'auto',
        // loopedSlides: 5,
        // centeredSlides: true,
        // spaceBetween: 30,
        // slidesOffsetBefore: 20,
        // slidesOffsetAfter: 30,
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false
        // },
        // effect: 'coverflow',
        // slidesPerView: 'auto',
        // centeredSlides: true,
        // coverflowEffect: {
        //   rotate: 30,
        //   stretch: 10,
        //   depth: 60,
        //   modifier: 2,
        //   slideShadows: false
        // },
        // autoplay: true,
        // watchSlidesProgress: true,
        // watchSlidesVisibility: true,
        pagination: {
            el: '.solu-swiper-pagination',
            clickable: true,
            renderBullet: function(index: number, className: string) {
                // console.log(this)
                return `<div class="swiper-pagination-item ${className}"><span class="icon ${vm.scenes[index].id}"></span><span class="title">${vm.scenes[index].title}</span></div>`;
            },
        },
    };
    soluSwiperOptionM = {
        slidesPerView: 'auto',
        spaceBetween: 10,
        speed: 600,
        centeredSlides: true,
    };
    soluThumbsOptionM = {
        slidesPerView: 'auto',
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        // on: {
        //   init: function() {
        //     const that = this as typeof Swiper
        //     vm.navSlideWidth = parseInt(that.slides.eq(0).css('width'))
        //     // vm.navSlideWidth = parseInt(
        //     //   that.slides[0] && that.slides[0].clientWidth
        //     // )
        //     vm.clientWidth = parseInt(that.$wrapperEl.css('width'))
        //     for (let i = 0; i < that.slides.length; i++) {
        //       console.log(parseInt(that.slides.eq(i).css('width')))
        //       vm.navWidth += parseInt(that.slides.eq(i).css('width'))
        //     }
        //     console.log('that', that, vm.navSlideWidth, vm.clientWidth, vm.navWidth)
        //   }
        // }
        // slideToClickedSlide: true
        // centeredSlides: true
        // watchSlidesVisibility: true,
        // watchSlidesProgress: true,
        // slidesPerView: 'auto',
        // spaceBetween: 10
    };
    created() {
        vm = this;
    }
    mounted() {
        // console.log('mount', vm.soluSwiper, vm.soluThumbs)
        // console.log('w', window)
        this.$nextTick(() => {
            if (vm.soluSwiperM && vm.soluThumbsM) {
                vm.soluSwiperM.thumbs.swiper = vm.soluThumbsM;
                vm.soluSwiperM.thumbs.update();
                vm.soluSwiperM.thumbs.init();
                vm.soluSwiperM.on('transitionStart', function() {
                    vm.navSlideWidth = parseInt(vm.soluThumbsM.slides.eq(0).css('width'));
                    vm.clientWidth = parseInt(vm.soluThumbsM.$wrapperEl.css('width'));
                    let navWidth = 0;
                    for (let i = 0; i < vm.soluThumbsM.slides.length; i++) {
                        console.log(parseInt(vm.soluThumbsM.slides.eq(i).css('width')));
                        navWidth += parseInt(vm.soluThumbsM.slides.eq(i).css('width'));
                    }
                    console.log('that', vm.soluThumbsM, vm.navSlideWidth, vm.clientWidth, navWidth);
                    const activeIndex = vm.soluSwiperM.activeIndex;
                    console.log('activeIndex', activeIndex, vm.soluThumbsM);
                    const navActiveSlideLeft = vm.soluThumbsM.slides.length
                        ? vm.soluThumbsM.slides[activeIndex].offsetLeft
                        : 0;
                    vm.soluThumbsM.setTransition(300);
                    if (navActiveSlideLeft < (vm.clientWidth - vm.navSlideWidth) / 2) {
                        vm.soluThumbsM.setTranslate(0);
                    } else if (navActiveSlideLeft > navWidth - (vm.navSlideWidth + vm.clientWidth) / 2) {
                        vm.soluThumbsM.setTranslate(vm.clientWidth - navWidth);
                    } else {
                        vm.soluThumbsM.setTranslate((vm.clientWidth - vm.navSlideWidth) / 2 - navActiveSlideLeft);
                    }
                });
            }
            $('.solu-swiper-pagination .swiper-pagination-item').hover(function() {
                // @ts-ignore
                $(this).click();
            });
        });
        // console.log(vm.soluSwiper, vm.soluThumbs)
    }
}
</script>
<style lang="scss">
.scene-container {
    max-width: 1200px;
    margin: 0 auto;
    height: 730px;
    font-size: 34px;
    color: #222;
    text-align: center;
    padding-top: 79px;
    padding-left: 60px;
    padding-right: 60px;
    h1 {
        margin-bottom: 66px;
    }
    .scene-pc {
        // visibility: visible;
        display: block;
    }
    .scene-m {
        // visibility: hidden;
        display: none;
    }
}
.solu-swiper-pagination {
    height: 94px;
    padding: 0 63px;
    display: flex;
    justify-content: space-between;
    .swiper-pagination-item {
        width: 97px;
        height: 100%;
        margin: 0 !important;
        opacity: 1;
        border-radius: 0;
        background-color: transparent;
        text-align: center;
        // border-bottom: 3px solid transparent;
        position: relative;
        /*display: flex;*/
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
            width: 40px;
            height: 40px;
            margin: 0 auto 14px;
            &.live {
                background: url(../../assets/img/icons/solution/live.png);
                background-size: 100%;
            }
            &.edu {
                background: url(../../assets/img/icons/solution/edu.png);
                background-size: 100%;
            }
            &.meeting {
                background: url(../../assets/img/icons/solution/meeting.png);
                background-size: 100%;
            }
            &.dr {
                background: url(../../assets/img/icons/solution/dr.png);
                background-size: 100%;
            }
            &.game {
                background: url(../../assets/img/icons/solution/game.png);
                background-size: 100%;
            }
            &.social {
                background: url(../../assets/img/icons/solution/social.png);
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
                &.live {
                    background: url(../../assets/img/icons/solution/live-active.png);
                    background-size: 100%;
                }
                &.edu {
                    background: url(../../assets/img/icons/solution/edu-active.png);
                    background-size: 100%;
                }
                &.meeting {
                    background: url(../../assets/img/icons/solution/meeting-active.png);
                    background-size: 100%;
                }
                &.dr {
                    background: url(../../assets/img/icons/solution/dr-active.png);
                    background-size: 100%;
                }
                &.game {
                    background: url(../../assets/img/icons/solution/game-active.png);
                    background-size: 100%;
                }
                &.social {
                    background: url(../../assets/img/icons/solution/social-active.png);
                    background-size: 100%;
                }
            }
        }
    }
}

.solu-thumbs {
    // visibility: hidden;
    //   bottom: 0 !important;
    //   top: 0px;
    padding: 0 63px;
    z-index: 2;
    .swiper-wrapper {
        // display: flex;
        // justify-content: space-between;
        height: 94px;
    }

    .swiper-slide {
        position: relative;
        max-width: 110px;
        height: 100%;
        margin: 0;
        margin-right: 100px;
        border-radius: 0;
        background-color: transparent;
        text-align: center;
        .icon {
            display: block;
            width: 40px;
            height: 40px;
            margin: 0 auto 14px;
            &.live {
                background: url(../../assets/img/icons/solution/live.png);
                background-size: 100%;
            }
            &.edu {
                background: url(../../assets/img/icons/solution/edu.png);
                background-size: 100%;
            }
            &.meeting {
                background: url(../../assets/img/icons/solution/meeting.png);
                background-size: 100%;
            }
            &.dr {
                background: url(../../assets/img/icons/solution/dr.png);
                background-size: 100%;
            }
            &.game {
                background: url(../../assets/img/icons/solution/game.png);
                background-size: 100%;
            }
            &.social {
                background: url(../../assets/img/icons/solution/social.png);
                background-size: 100%;
            }
        }
        .title {
            font-size: 14px;
            color: #8f8f8f;
            vertical-align: top;
        }
        &.swiper-slide-thumb-active {
            border-bottom: 3px solid #0044ff;
            .title {
                color: #0044ff;
            }
            .icon {
                &.live {
                    background: url(../../assets/img/icons/solution/live-active.png);
                    background-size: 100%;
                }
                &.edu {
                    background: url(../../assets/img/icons/solution/edu-active.png);
                    background-size: 100%;
                }
                &.meeting {
                    background: url(../../assets/img/icons/solution/meeting-active.png);
                    background-size: 100%;
                }
                &.dr {
                    background: url(../../assets/img/icons/solution/dr-active.png);
                    background-size: 100%;
                }
                &.game {
                    background: url(../../assets/img/icons/solution/game-active.png);
                    background-size: 100%;
                }
                &.social {
                    background: url(../../assets/img/icons/solution/social-active.png);
                    background-size: 100%;
                }
            }
        }
    }
}
.solu-swiper {
    // margin-top: -94px;
    .swiper-slide {
        .pic,
        .solution-desc {
            margin-top: 60px;
            opacity: 0;
            transition: all 0.5s ease-in;
        }
        &.swiper-slide-active {
            .pic,
            .solution-desc {
                margin-top: 0;
                opacity: 1;
            }
            box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.08);
        }
    }
}
.scene-banner {
    width: 100%;
    height: 376px;
    /* margin-top: 87px; */
    display: -webkit-box;
    display: flex;
    padding: 38px 70px;
    background-color: #fff;
    border-radius: 4px;

    .pic {
        display: inline-block;
        width: 520px;
        height: 300px;
    }
    .pic-m {
        display: none;
    }
    .solution-desc {
        display: inline-block;
        width: 420px;
        padding-top: 22px;
        padding-left: 60px;
        text-align: left;

        .title {
            font-size: 18px;
            color: #222;
            margin: 0;
        }

        .hr {
            margin-top: 23px;
            margin-bottom: 21px;
            width: 24px;
            height: 2px;
            background-color: #666d83;
        }

        .desc-content {
            font-size: 14px;
            color: #666;
            line-height: 2;
        }

        .detail-link {
            display: inline-block;
            margin-top: 37px;
            font-size: 14px;
            color: #666;
        }
    }
}
@media screen and (max-width: 1000px) {
    //   .container {
    //     max-width: none !important;
    //   }
    .scene-container {
        padding: 0;
        padding-top: 0.79rem !important;
        height: 10.89rem;
        max-width: none;
        background-color: #fafafb !important;
        h1 {
            font-size: 0.4rem;
            color: #333;
            margin-bottom: 0.4rem;
        }
        .scene-pc {
            // visibility: hidden;
            display: none;
        }
        .scene-m {
            // visibility: visible;
            display: block;
        }
    }
    .solu-swiper {
        // margin-top: -94px;
        // overflow: auto;
        // margin-bottom: 0.8rem;
        .swiper-slide {
            .solution-desc {
                transition: none;
            }
        }
    }
    .scene-banner {
        width: 100%;
        max-width: 6.3rem;
        margin: 0 auto;
        display: inline-block;
        height: 7.7rem;
        /* margin-top: 87px; */
        display: -webkit-box;
        display: flex;
        flex-direction: column;
        padding: 0.5rem 0.2rem 0;
        background-color: #fff;
        box-shadow: 0 0.03rem 0.16rem 0 rgba(0, 0, 0, 0.08);
        border-radius: 0.08rem;
        .pic {
            display: none;
        }
        .pic-m {
            display: inline-block;
            width: 5.9rem;
            height: 3.49rem;
        }

        .solution-desc {
            display: block;
            width: 100%;
            padding-top: 0.3rem;
            padding-left: 0.22rem;
            padding-right: 0.22rem;
            text-align: left;

            .title {
                font-size: 0.32rem;
                color: #333;
                margin: 0;
            }

            .hr {
                display: none;
            }

            .desc-content {
                margin-top: 0.23rem;
                font-size: 0.24rem;
                color: #808080;
                line-height: 1.5;
            }

            .detail-link {
                display: block;
                margin-top: 0.34rem;
                font-size: 0.26rem;
                color: #0044ff;
                float: right;
                &::after {
                    content: '';
                    clear: both;
                    display: block;
                    height: 0;
                }
            }
        }
    }
    .solu-thumbs {
        visibility: visible;
        // bottom: 0 !important;
        // top: 0px;
        // display: flex;
        // flex-wrap: nowrap;
        // justify-content: space-between;
        // padding: 0 0.3rem;
        padding: 0;
        // min-width: 6rem;
        // overflow: hidden;
        // width: 13rem;
        width: 100%;
        .swiper-wrapper {
            height: 0.8rem;
        }
        .swiper-slide {
            //   position: relative;
            max-width: 1.8rem;
            // width: 1.8rem;
            height: 100%;
            margin: 0;
            border-radius: 0;
            background-color: transparent;
            padding: 0 0.3rem;
            // display: flex;
            // align-items: center;
            // text-align: center;
            //   display: flex;
            //   align-items: center;
            .icon {
                display: inline-block;
                width: 0.4rem;
                height: 0.4rem;
                margin-right: 0.13rem;
                vertical-align: middle;
                margin-bottom: 0;
                &.live {
                    background: url(../../assets/img/icons/solution/live.png);
                    background-size: 100%;
                }
                &.edu {
                    background: url(../../assets/img/icons/solution/edu.png);
                    background-size: 100%;
                }
                &.meeting {
                    background: url(../../assets/img/icons/solution/meeting.png);
                    background-size: 100%;
                }
                &.dr {
                    background: url(../../assets/img/icons/solution/dr.png);
                    background-size: 100%;
                }
                &.game {
                    background: url(../../assets/img/icons/solution/game.png);
                    background-size: 100%;
                }
                &.social {
                    background: url(../../assets/img/icons/solution/social.png);
                    background-size: 100%;
                }
            }
            .title {
                font-size: 0.3rem;
                color: #666;
                width: 0.52rem;
                vertical-align: middle;
                white-space: nowrap;
            }
            &.swiper-slide-thumb-active {
                border: none;
                // &::after {
                //   position: absolute;
                //   display: inline-block;
                //   content: '';
                //   width: 100%;
                //   height: 3px;
                //   left: 50%;
                //   transform: translateX(-50%);
                //   bottom: -3px;
                //   z-index: 11;
                //   background-color: #0044ff;
                // }
                .title {
                    color: #0044ff;
                }
                .icon {
                    &.live {
                        background: url(../../assets/img/icons/solution/live-active.png);
                        background-size: 100%;
                    }
                    &.edu {
                        background: url(../../assets/img/icons/solution/edu-active.png);
                        background-size: 100%;
                    }
                    &.meeting {
                        background: url(../../assets/img/icons/solution/meeting-active.png);
                        background-size: 100%;
                    }
                    &.dr {
                        background: url(../../assets/img/icons/solution/dr-active.png);
                        background-size: 100%;
                    }
                    &.game {
                        background: url(../../assets/img/icons/solution/game-active.png);
                        background-size: 100%;
                    }
                    &.social {
                        background: url(../../assets/img/icons/solution/social-active.png);
                        background-size: 100%;
                    }
                }
            }
        }
    }
    .solu-swiper-pagination {
        display: none;
    }
    .solu-swiper {
        margin-top: 0;
        .swiper-wrapper {
            width: auto;
            flex-wrap: nowrap;
            padding: 0.2rem 0;
        }
        .swiper-slide {
            width: 6.3rem;
            .solution-desc {
                margin-top: 0;
                opacity: 1;
            }
            .slide-item {
                transform: scaleY(0.93);
                transition: all 0.3s linear;
            }
            &.swiper-slide-active {
                .slide-item {
                    transform: scaleY(1);
                }
            }
        }
    }
}
</style>
