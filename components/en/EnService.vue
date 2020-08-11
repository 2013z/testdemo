<template>
    <div class="service-contact">
        <a href="./contact">
            <img class="service-icon" src="~/assets/img/en/contact/service.png" />
        </a>
        <div id="P_totop" class="totop" @click="totop">
            <img src="~/assets/img/en/contact/icon-top.png" />
        </div>
    </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
    name: 'EnService',
})
export default class EnService extends Vue {
    created() {
        if (process.browser) {
            window.$(window).on('scroll', this.checkScroll);
        }
    }
    destroyed() {
        if (process.browser) {
            window.$(window).off('scroll', this.checkScroll);
        }
    }
    checkScroll() {
        const nowScrollTop = window.$(window).scrollTop();
        if (nowScrollTop > 100) {
            window.$('#P_totop').addClass('show');
        } else {
            window.$('#P_totop').removeClass('show');
        }
    }
    totop() {
        window.$('html,body').animate({ scrollTop: 0 }, 500);
    }
}
</script>

<style lang="scss">
.service-contact {
    text-align: center;
    position: fixed;
    left: calc(50% + 650px);
    bottom: 100px;
    width: 84px;
    background-color: #0055fe;
    border-radius: 84px;
    box-shadow: 3px 5px 19px 2px rgba(182, 190, 199, 0.46);
    .service-icon {
        width: 120%;
        margin-left: -10%;
        margin-top: -46px;
        padding-bottom: 10px;
        cursor: pointer;
    }
    .totop {
        cursor: pointer;
        width: 80%;
        margin: 0 auto;
        border-top: 1px dashed #fff;
        display: none;
        img {
            width: 50%;
            margin: 10px auto 0;
        }
        &.show {
            display: block;
        }
    }
}
@media screen and (max-width: 1000px) {
    .service-contact {
        left: auto;
        right: 0.5rem;
        bottom: 1rem;
        width: 1rem;
        border-radius: 1rem;
        .service-icon {
            margin-top: -0.5rem;
            padding-bottom: 0.1rem;
        }
        .totop {
            width: 80%;
            img {
                margin: 0.2rem auto 0;
            }
        }
    }
}
</style>
