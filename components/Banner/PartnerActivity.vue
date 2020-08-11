<template>
    <div class="flashtalk-wrap container main-banner">
        <div class="btns">
            <a class="apply-try now" href="/partner" target="_blank" rel="nofollow">
                立即参与
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class extends Vue {
    @Prop({ default: () => ({}) }) banner: any;
}
</script>

<style lang="scss" scoped>
.flashtalk-wrap.main-banner {
    text-align: center;
    padding-top: 68px;
    position: relative;
    height: 100%;

    .btns {
        font-size: 0;
        margin-top: 38px;
        display: flex;
        justify-content: center;
        width: 100%;
        position: absolute;
        bottom: 70px;
        a {
            font-family: 'Source Han Sans CN';
        }
    }
    .apply-try.now {
        margin-top: 0;
        width: 168px;
        height: 48px;
        line-height: 46px;
        font-size: 18px;
        border: 0;
        background: linear-gradient(90deg, rgba(0, 195, 255, 1) 23%, rgba(255, 17, 229, 1) 87%);
        border-radius: 10px;

        &:hover {
            color: #fff;
            box-shadow: 0px 10px 29px 1px rgba(232, 78, 225, 0.4);
        }
    }
}
@media screen and (max-width: 1000px) {
    .flashtalk-wrap.main-banner {
        padding-top: 1.08rem;
        .btns {
            font-size: 0;
            bottom: 0.9rem;
        }
        .apply-try.now {
            margin-top: 0;
            width: 1.68rem;
            height: 0.48rem;
            line-height: 0.48rem;
            font-size: 0.24rem;
            border-radius: 0.05rem;
        }
    }
}
</style>
