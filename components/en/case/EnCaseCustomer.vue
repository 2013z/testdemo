<template>
    <b-row class="gutter-64">
        <b-col v-for="item in list" :key="item.id" lg="4" cols="12">
            <div class="customer-item">
                <img class="icon" :src="item.cover" />
                <div class="title">{{ item.title }}</div>
                <div class="text">{{ item.desc }}</div>
                <a :href="'/en/case/customer/' + item.id" class="customer-item-btn">learn more</a>
            </div>
        </b-col>
    </b-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
    name: 'EnCaseCustomer',
    props: {
        list: {
            type: Array,
            default: () => [],
        },
    },
})
export default class EnCaseCustomer extends Vue {}
</script>

<style lang="scss">
@mixin gutter($padding) {
    margin-left: -$padding / 2;
    margin-right: -$padding / 2;
    [class^='col-'] {
        padding-left: $padding / 2;
        padding-right: $padding / 2;
    }
}

.gutter-64 {
    @include gutter(64px);
}
.customer-item {
    padding: 40px 20px 50px;
    box-shadow: 0px 5px 30px 0px rgba(9, 17, 40, 0.08);
    border-radius: 2px;
    text-align: center;
    .icon {
        width: 130px;
        height: 130px;
    }
    .title {
        margin-top: 10px;
        font-size: 36px;
        font-weight: 500;
    }
    .text {
        margin-top: 10px;
        font-size: 16px;
        font-weight: 500;
        color: #696f80;
    }
    &-btn {
        margin-top: 30px;
        width: 143px;
        text-align: center;
        height: 32px;
        line-height: 32px;
        font-size: 16px;
        color: #fff;
        // background: #999;
        background: rgba(0, 85, 254, 1);
        border-radius: 4px;
        display: inline-block;
        &:hover {
            color: #fff;
        }
    }
    &:hover {
        .customer-item-btn {
            background: rgba(0, 85, 254, 1);
        }
    }
}
@media screen and (max-width: 1000px) {
    .customer-item {
        margin-bottom: 0.4rem;
        .icon {
            width: 1.7rem;
            height: 1.7rem;
        }
        .title {
            font-size: 0.48rem;
        }
        .text {
            margin-top: 0.2rem;
            font-size: 0.28rem;
        }
        &-btn {
            margin-top: 0.3rem;
            width: 2.86rem;
            height: 0.64rem;
            line-height: 0.64rem;
            font-size: 0.28rem;
            background: rgba(0, 85, 254, 1);
        }
    }
}
</style>
