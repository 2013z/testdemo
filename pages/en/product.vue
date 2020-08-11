<template>
    <div class="foreign-container">
        <div v-for="(item, index) in products" :key="item.id" :class="{ 'bg-gray-light': index % 2 === 1 }">
            <div class="container module scene">
                <div class="scene-item" :class="{ right: index % 2 === 1 }">
                    <img class="scene-item-cover" :src="item.src" />
                    <img class="scene-item-cover mobile" :src="item.srcM" />
                    <div class="scene-item-content">
                        <div class="scene-item-title">{{ item.title }}</div>
                        <div class="scene-item-desc">{{ item.desc }}</div>
                        <a href="https://doc-en.zego.im/en/693.html" target="_blank" class="scene-item-btn">
                            learn more
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <EnBottomBgLink />
        <EnService />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import EnBottomBgLink from '~/components/en/EnBottomBgLink.vue';
import EnBanner from '~/components/en/EnBanner.vue';
import EnCaseCustomer from '~/components/en/case/EnCaseCustomer.vue';
import EnService from '~/components/en/EnService.vue';
import ClickOutside from 'vue-click-outside';

@Component({
    name: 'product',
    directives: { ClickOutside },
    components: { EnBottomBgLink, EnBanner, EnCaseCustomer, EnService },
})
export default class ProductIndex extends Vue {
    asyncData() {
        const contents = require('~/assets/json/en-product.json');
        const { products } = contents;
        products.forEach((item: any) => {
            item.src = require(`~/assets/img/en/products/pic/${item.cover}.png`);
            item.srcM = require(`~/assets/img/en/products/pic/${item.cover}-m.png`);
        });
        return {
            products,
        };
    }
    head() {
        return {
            title: 'Product - Zego',
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
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/en-third-common.scss';
.scene {
    padding-left: 85px;
    padding-right: 85px;
    &-item {
        position: relative;
        // margin-bottom: 95px;
        &-cover {
            width: 55%;
            &.mobile {
                display: none;
            }
        }
        &-content {
            text-align: left;
            position: absolute;
            right: 0;
            width: 400px;
            top: 50%;
            transform: translateY(-50%);
        }
        &-title {
            position: relative;
            font-size: 24px;
            font-weight: 500;
            color: #222;
            // padding-bottom: 20px;
            margin-bottom: 20px;
            // &::after {
            //     content: '';
            //     width: 2em;
            //     height: 2px;
            //     background-color: #222;
            //     position: absolute;
            //     bottom: 0;
            //     left: 0;
            // }
        }
        &-desc {
            font-size: 16px;
            font-weight: 500;
            color: #696f80;
        }
        &-btn {
            margin-top: 50px;
            width: 143px;
            text-align: center;
            height: 32px;
            line-height: 32px;
            font-size: 16px;
            color: #fff;
            background-color: #fff;
            background: rgba(0, 85, 254, 1);
            border-radius: 4px;
            display: inline-block;
        }
        &.right {
            text-align: right;
            .scene-item-content {
                right: auto;
                left: 0;
            }
        }
    }
}
@media screen and (max-width: 1000px) {
    .scene {
        padding-left: 0;
        padding-right: 0;
        &-item {
            // margin-bottom: 1rem;
            &-cover {
                width: 100%;
                display: none;
                &.mobile {
                    display: block;
                }
            }
            &-content {
                position: static;
                width: 100%;
                transform: none;
                text-align: center;
            }
            &-title {
                margin-top: 0.2rem;
                font-size: 0.4rem;
                // padding-bottom: 0.3rem;
                margin-bottom: 0.3rem;
                // &::after {
                //     left: 50%;
                //     right: auto;
                //     transform: translateX(-50%);
                // }
            }
            &-desc {
                font-size: 0.28rem;
                font-weight: 500;
                color: #696f80;
            }
            &-btn {
                margin-top: 0.5rem;
                width: 2.86rem;
                height: 0.64rem;
                line-height: 0.64rem;
                font-size: 0.28rem;
            }
        }
    }
}
</style>
