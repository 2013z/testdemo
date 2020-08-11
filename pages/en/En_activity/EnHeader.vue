<template>
    <div></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Route } from 'vue-router';

interface WithRoute {
    $route: Route;
}
declare const $: any;
@Component({
    components: {},
})
export default class Activity extends Vue implements WithRoute {
    $route!: Route;
    visible = false;
}
</script>
<style lang="scss" scoped></style>
