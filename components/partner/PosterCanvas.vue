<template>
    <vue-canvas-poster :painting="painting" @success="success" @fail="fail"></vue-canvas-poster>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class PosterCanvas extends Vue {
    @Prop({ default: '' }) qrUrl!: string;

    get painting() {
        return {
            width: '500px',
            height: '889px',
            views: [
                {
                    type: 'image',
                    url: require('../../assets/img/partner/mobile/poster.jpg'),
                    css: {
                        top: '0px',
                        left: '0px',
                        // borderRadius: '40px',
                        width: '500px',
                        height: '889px',
                    },
                },
                {
                    type: 'qrcode',
                    content: location.origin + this.qrUrl,
                    css: {
                        bottom: '20px',
                        left: '70px',
                        background: '#fff',
                        color: '#000',
                        width: '67px',
                        height: '67px',
                        // borderRadius: '0',
                        borderWidth: '5px',
                        borderColor: '#fff',
                    },
                },
            ],
        };
    }

    success(src: string) {
        const $parent = this.$parent as any;
        $parent.posterDataUrl = src;
        $parent.submitting = false;
        $parent.innerVisible = true;
        $parent.outergVisible = false;
    }
    fail() {
        const $parent = this.$parent as any;
        $parent.submitting = false;
        alert('生成海报失败，请重试');
    }
}
</script>
<style lang="scss" scoped>
.scene-plan-id {
}
</style>
