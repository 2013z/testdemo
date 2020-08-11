<template>
    <div>
        <div>测试自定义layout</div>
        <nuxt />
        <div>测试自定义layout</div>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class mylayout extends Vue {}
</script>

<style lang="scss"></style>
