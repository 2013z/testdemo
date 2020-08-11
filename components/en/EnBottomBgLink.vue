<template>
    <div class="bg">
        <a href="https://console.zego.im/account/register?lang=en" target="_blank" class="link">
            Start Your Free Trial Now
        </a>
    </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
    name: 'EnBottomBgLink',
})
export default class EnBottomBgLink extends Vue {}
</script>

<style lang="scss">
.bg {
    height: 200px;
    padding-top: 70px;
    background: url(../../assets/img/common/bg-bottom.png);
    .link {
        display: block;
        margin: 0 auto;
        width: 278px;
        height: 60px;
        line-height: 60px;
        background: #fff;
        box-shadow: 0 5px 30px 0 rgba(9, 17, 40, 0.08);
        border-radius: 4px;
        color: #04f;
        text-align: center;
        font-size: 20px;
        text-decoration: none;
    }
}
@media screen and (max-width: 1000px) {
    .bg {
        .link {
            width: 5.2rem;
            height: 0.88rem;
            font-size: 0.32rem;
            line-height: 0.88rem;
            background: #fff;
            box-shadow: 0 0.05rem 0.3rem 0 rgba(9, 17, 40, 0.08);
            border-radius: 0.04rem;
            font-weight: 500;
        }
    }
}
</style>
