<template>
    <header class="head">
        <div class="container header-wrapper">
            <div class="head-left">
                <a href="/en" class="icon-logo"></a>
                <div class="m-locale__lang">
                    <span>English</span>
                    <div class="m-locale__downdrop j-drop_target z-hover">
                        <div class="m-locale__menu">
                            <a class="m-locale__link" href="/">中文站</a>
                            <a class="m-locale__link" href="/en">English</a>
                        </div>
                    </div>
                </div>
                <nav v-show="navShow" id="nav" class="nav-wrapper">
                    <ul class="menu">
                        <li class="menu-item">
                            <a class="menu-item-title" href="/en/product" title="Products">Products</a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-item-title" href="https://doc-en.zego.im/" title="">Developer</a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-item-title" href="/en/case" title="Solutions & Cases">Solutions & Cases</a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-item-title" href="/en/contact" title="Contact Us">Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="admin-console clearfix">
                <!-- 隐藏搜索 -->
                <!-- <div class="action-btn"></div> -->
                <a href="https://doc-ghost.zego.im" class="opr-btn keeped login-btn">Blog</a>
                <a
                    href="https://console.zego.im/account/login?lang=en"
                    class="opr-btn keeped login-btn"
                    :class="{ none: loginStatus === 'login' }"
                    target="_blank"
                    >Sign in</a
                >
                <a
                    href="https://console.zego.im/account/register?lang=en"
                    class="opr-btn keeped register-btn"
                    :class="{ none: loginStatus === 'login' }"
                    target="_blank"
                    >Sign up</a
                >
                <div :class="{ 'account-wrapper': true, none: loginStatus === 'logout' }">
                    <div class="account-text">
                        <p>{{ email }}</p>
                    </div>
                    <ul class="account-menu">
                        <li>
                            <a href="https://console.zego.im/profile/userinfo?lang=en" target="_blank">User Profile</a>
                        </li>
                        <li>
                            <a href="https://console.zego.im/profile/security?lang=en" target="_blank">Security</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" class="logout" @click="logout">Logout</a>
                        </li>
                    </ul>
                </div>
                <a
                    href="https://console.zego.im"
                    class="opr-btn enter-btn"
                    :class="{ none: loginStatus === 'logout' }"
                    target="_blank"
                    >console</a
                >
            </div>
        </div>
        <!-- 移动端导航 -->
        <div class="m-header-wrapper">
            <div class="nav-head">
                <a class="logo" href="/"></a>
                <a href="javascript:void(0)" :class="{ 'nav-btn': true, active: navActive }" @click="showNav">
                    <span></span>
                    <span></span>
                    <span></span>
                    <em class="close"></em>
                </a>
            </div>
            <div :class="{ 'nav-wrapper': true, showNav: navActive }">
                <!-- 移动端控制台入口 -->
                <div class="m-admin-console clearfix">
                    <a
                        href="https://console.zego.im/account/register?lang=en"
                        class="opr-btn keeped  register-btn"
                        :class="{ none: loginStatus === 'login' }"
                        target="_blank"
                        >Sign up</a
                    >
                    <a
                        href="https://console.zego.im/account/login?lang=en"
                        class="opr-btn keeped  login-btn"
                        :class="{ none: loginStatus === 'login' }"
                        target="_blank"
                        >Sign in</a
                    >
                    <div :class="{ 'account-wrapper': true, none: loginStatus === 'logout' }">
                        <div class="account-text">
                            <p>
                                Account：<span>{{ email }}</span>
                            </p>
                        </div>
                        <ul class="account-menu">
                            <li>
                                <a href="javascript:void(0)" onclick="return false;" class="logout">Logout</a>
                            </li>
                        </ul>
                    </div>
                    <a href="https://console.zego.im?lang=en" class="opr-btn none enter-btn" target="_blank">console</a>
                </div>
                <ul id="nav-m" class="menu">
                    <li class="menu-item">
                        <a class="menu-item-title" href="/en/product" title="Products">Products</a>
                    </li>
                    <li class="menu-item">
                        <a class="menu-item-title" href="https://doc-en.zego.im/" title="">Developer</a>
                    </li>
                    <li class="menu-item">
                        <a class="menu-item-title" href="/en/case" title="Solutions & Cases">Solutions & Cases</a>
                    </li>
                    <li>
                        <a class="menu-item-title" href="/en/contact" title="Contact Us">Contact Us</a>
                    </li>
                    <!-- <li class="menu-item">
                        <a class="menu-item-title" href="#" title="Blog">Blog</a>
                    </li> -->
                    <!-- <li
                        :class="{
                            'menu-item': true,
                            category: true,
                            active: activeIndex === 0,
                        }"
                    >
                        <a class="menu-item-title" href="#products" title="Products" @click="handleMenu(0)">Products</a>
                    </li>
                    <li
                        :class="{
                            'menu-item': true,
                            active: activeIndex === 1,
                        }"
                    >
                        <a class="menu-item-title" href="#why" title="Why ZEGO" @click="handleMenu(1)">Why ZEGO</a>
                    </li>
                    <li
                        :class="{
                            'menu-item': true,
                            active: activeIndex === 2,
                        }"
                    >
                        <a class="menu-item-title" href="#access" title="Access Demo" @click="handleMenu(2)"
                            >Access Demo</a
                        >
                    </li>
                    <li
                        :class="{
                            'menu-item': true,
                            active: activeIndex === 3,
                        }"
                    >
                        <a class="menu-item-title" href="#customers" title="Customers" @click="handleMenu(3)"
                            >Customers</a
                        >
                    </li>
                    <li
                        :class="{
                            'menu-item': true,
                            active: activeIndex === 4,
                        }"
                    >
                        <a class="menu-item-title no-arrow" href="#contact" title="Contact Us" @click="handleMenu(4)"
                            >Contact Us</a
                        >
                    </li> -->
                </ul>
                <div class="z-lan">
                    <a class="z-locale__link" :class="{ 'link-active': $route.path === '/' }" href="/">中文站</a>
                    <span class="divider"></span>
                    <a class="z-locale__link" :class="{ 'link-active': $route.path === '/en' }" href="/en">English</a>
                </div>
            </div>
        </div>
        <!-- <div class="mask"></div> -->
    </header>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import axios from 'axios';

interface WithRoute {
    $route: Route;
}
declare const $: any;
@Component({})
export default class EnHeader extends Vue {
    $route!: Route;
    theme = '';
    loginStatus = 'logout';
    mobile = '';
    email = '';
    navActive = false;
    activeIndex = -1;
    winW = 0;

    get navShow() {
        // this.$route.path.indexOf('en/hospital') < 0;
        return true;
    }

    handleScroll() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 0) {
            this.theme = 'light';
        } else {
            this.theme = '';
        }
    }
    handleMenu(index: number) {
        if (this.activeIndex === index) {
            this.activeIndex = -1;
        } else {
            this.activeIndex = index;
        }
    }
    async getUserInfo() {
        const loginType: any = await axios.get('https://consoledev.zego.im/v1/account/account-info', {
            withCredentials: true,
        });
        console.log('login = ', loginType);
        if (loginType.data.code === 401) {
            this.loginStatus = 'logout';
        } else if (loginType.data.code === 200) {
            this.loginStatus = 'login';
            const {
                data: { mobile, email },
            } = loginType.data;
            this.mobile = mobile;
            this.email = email;
        }
        console.log(this.loginStatus, this.email);
    }
    async logout() {
        const res = await axios.post('https://consoledev.zego.im/site/logout', null, {
            withCredentials: true,
        });
        console.log('res = ', res);
        if (res.data.code === 200) {
            this.loginStatus = 'logout';
        } else {
            alert('退出失败!');
        }
    }
    showNav() {
        this.navActive = !this.navActive;
    }
    clickPoint() {
        const that = this;
        $('#nav a, #nav-m a').click(function(e: any) {
            e.preventDefault();
            const currObj = $(
                "[id='" +
                    // @ts-ignore
                    $(this)
                        .attr('href')
                        .replace(/#/, '') +
                    "']",
            );
            const offsetTop = currObj.offset().top - 88;
            $('html,body').animate(
                {
                    scrollTop: offsetTop,
                },
                300,
                'swing',
            );
            that.showNav();
        });
    }
    mounted() {
        this.getUserInfo();
        // this.clickPoint();
        // window.addEventListener('scroll', this.handleScroll.bind(this))
    }
}
</script>
<style scoped lang="scss">
$primary-color: #0044ff;
* {
    font-family: 'Roboto', 'PingFang SC', 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑',
        Arial, sans-serif;
}
.container {
    max-width: 1200px;
    margin: auto;
    padding: 0;
}
.head {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 68px;
    z-index: 9996;
    display: flex;
    background: #0a1043;
    // box-shadow: inset 0 -1px #e5e5e5;
}
.header-wrapper {
    display: flex;
    justify-content: space-between;
    // align-items: center;
    height: 100%;
    .nav-wrapper {
        float: left;
        margin-left: 22px;
        .menu {
            float: left;
            .menu-item {
                position: relative;
                float: left;
                margin-right: 30px;
                padding: 0 6px;
                a {
                    color: #fff;
                    font-weight: 500;
                    font-size: 16px;
                    font-family: 'Roboto';
                    line-height: 60px;
                    cursor: pointer;
                    &.no-cursor {
                        cursor: default;
                    }
                }
                &.horizontal {
                    position: static;
                    &[data-listnum='3'] {
                        .sub-menu {
                            width: 721px;
                        }
                    }
                }
                &:hover {
                    a {
                        color: #0044ff;
                    }
                }
            }
        }
    }
}
.head-left {
    display: flex;
    align-items: center;
    position: relative;
}
.m-locale__lang {
    position: relative;
    color: #ffffff;
    line-height: 68px;
    height: 100%;
    padding: 0 0 0 18px;
    font-weight: 500;
    &::after {
        content: '';
        display: inline-block;
        *display: inline-block;
        *zoom: 1;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 5px 3px;
        border-color: transparent;
        border-top-color: #fff;
        vertical-align: middle;
        margin-top: 5px;
        margin-left: 8px;
    }
    &:hover {
        color: $primary-color;
        &::after {
            border-top-color: $primary-color;
        }
        .m-locale__downdrop {
            visibility: visible;
            z-index: 3;
            width: 145px;
            max-height: 128px;
            -webkit-transition: max-height 0.3s ease-out;
            -moz-transition: max-height 0.3s ease-out;
            -ms-transition: max-height 0.3s ease-out;
            -o-transition: max-height 0.3s ease-out;
            transition: max-height 0.3s ease-out;
        }
    }
    .m-locale__downdrop {
        position: absolute;
        top: 48px;
        left: 50%;
        margin-left: -72px;
        visibility: hidden;
        max-height: 0;
        overflow: hidden;
        box-shadow: 0 8px 16px 0 rgba(122, 148, 204, 0.1);
        &::before {
            content: '';
            display: block;
            visibility: hidden;
            width: 0;
            height: 0;
            border: 10px solid transparent;
            border-bottom-color: #fff;
            margin: 0 auto;
        }
        .m-locale__menu {
            background-color: #fff;
            width: 100%;
            font-size: 0;
            padding: 10px 0;
            box-sizing: border-box;
            .m-locale__link {
                font-size: 12px;
                color: black;
                display: block;
                line-height: 44px;
                text-align: center;
                -webkit-transition: 0.3s ease-out;
                -moz-transition: 0.3s ease-out;
                -ms-transition: 0.3s ease-out;
                -o-transition: 0.3s ease-out;
                transition: 0.3s ease-out;
                &:hover {
                    color: #0044ff;
                }
            }
        }
    }
}
.icon-logo {
    width: 123px;
    height: 22px;
    background: url(../../assets/img/nav/hw-logo.png) no-repeat;
    background-size: 100%;
}

// 控制台入口
.admin-console {
    position: relative;
    float: right;
    // 隐藏搜索
    .action-btn {
        float: left;
        width: 17px;
        height: 60px;
        margin-right: 20px;
        background: url(../../assets/img/nav/icon-search.png) center no-repeat;
        background-size: 100%;
        cursor: pointer;
        &:hover {
            background: url(../../assets/img/nav/icon-search-active.png) center no-repeat;
            background-size: 100%;
        }
        &.search-mode {
            background: url(../../assets/img/nav/icon-cha.png) center no-repeat;
            background-size: 100%;
            &:hover {
                background: url(../../assets/img/nav/icon-cha-active.png) center no-repeat;
                background-size: 100%;
            }
        }
    }
    .opr-btn {
        float: left;
        height: 30px;
        margin-top: 19px;
        padding: 0 14px;
        // border: 1px solid #0044ff;
        border: 0;
        line-height: 30px;
        border-radius: 4px;
        cursor: pointer;
    }
    .register-btn {
        color: #fff;
        background: #0044ff;
        &:hover {
            color: #fff;
            background: #0044ff;
        }
    }
    .login-btn {
        color: #fff;
        margin-right: 12px;
        border: 1px solid transparent;
        &:hover {
            color: #0044ff;
            font-size: 14px;
            border-radius: 2px;
            border: 1px solid #0044ff;
        }
    }
    .enter-btn {
        // border: 1px solid #0044ff;
        color: #fff;
        background-color: #0044ff;
        font-size: 16px;
        font-weight: 500;
        &:hover {
            background-color: #003de5;
        }
    }
    .account-wrapper {
        position: relative;
        float: left;
        margin-right: 22px;
        .account-text {
            display: inline-block;
            width: 106px;
            height: 68px;
            line-height: 68px;
            cursor: pointer;
            p {
                position: relative;
                overflow: hidden;
                padding-right: 16px;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #fff;
                margin-top: 3px;
                &:after {
                    content: '';
                    position: absolute;
                    top: 46%;
                    right: 0;
                    width: 0;
                    height: 0;
                    border-color: #fff transparent transparent;
                    border-style: solid;
                    border-width: 4px 3px;
                    vertical-align: middle;
                    // width: 8px;
                    // height: 5px;
                    // background: url(../../assets/img/nav/icon-arrow.png) center no-repeat;
                    // transform: translateY(-50%);
                }
            }
            &.isActive p:after {
                margin-top: -3px;
                transform: rotateZ(180deg);
            }
        }
        .account-menu {
            // display: none;
            position: absolute;
            top: 67px;
            left: -21px;
            width: 143px;
            max-height: 0;
            overflow: hidden;
            // border: 1px solid #e5e5e5;
            border-top: 0;
            text-align: center;
            -webkit-transition: max-height 0.3s ease-out;
            -moz-transition: max-height 0.3s ease-out;
            -ms-transition: max-height 0.3s ease-out;
            -o-transition: max-height 0.3s ease-out;
            transition: max-height 0.3s ease-out;
            li {
                a {
                    display: block;
                    height: 42px;
                    // color: #fff;
                    color: #333;
                    line-height: 42px;
                    background: #fff;
                    &:hover {
                        color: #0044ff;
                    }
                }
            }
        }
        &:hover {
            .account-menu {
                max-height: 143px;
            }
        }
    }
}
.head-light {
    background: #fff;
}
.m-header-wrapper {
    display: none;
}
@media screen and (max-width: 1000px) {
    .header-placeholder {
        padding-top: 0;
    }
    .head {
        height: auto;
        .header-wrapper {
            display: none;
        }
        .mask {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            background: rgba(0, 0, 0, 0.4);
            z-index: -1;
        }
        .m-header-wrapper {
            display: block;
            position: relative;
            width: 100%;
            height: auto;
            background: #fff;
            z-index: 1000;
            .nav-head {
                position: relative;
                height: 1.08rem;
                background: #fff;
                box-shadow: inset 0 -1px #e5e5e5;
                appearance: none;
                .logo {
                    position: relative;
                    display: block;
                    width: 2.5rem;
                    height: 100%;
                    margin-left: 0.35rem;
                    background: url(../../assets/img/nav/h-logo.png) center no-repeat;
                    background-size: 100%;
                    cursor: pointer;
                    z-index: 1;
                }
                .nav-btn {
                    position: absolute;
                    right: 0.35rem;
                    top: 50%;
                    width: 0.4rem;
                    height: 0.4rem;
                    margin-top: -0.2rem;
                    z-index: 1;
                    &.active {
                        span {
                            transform: scale(0);
                        }
                        .close {
                            transform: scale(1);
                        }
                    }
                    span,
                    .close {
                        transition: all 0.5s linear;
                    }
                    span {
                        float: left;
                        border-bottom: 0.03rem solid #999;
                        width: 0.4rem;
                        margin: 0.045rem 0;
                        background: #999;
                        transform: scale(1);
                    }
                    .close {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        overflow: hidden;
                        width: 0.42rem;
                        height: 0.42rem;
                        margin: -0.21rem 0 0 -0.21rem;
                        transform: scale(0);
                        &:before,
                        &:after {
                            content: '';
                            position: absolute;
                            height: 2px;
                            width: 100%;
                            top: 50%;
                            left: 0;
                            margin-top: -1px;
                            background: #999;
                        }
                        &:before {
                            transform: rotate(45deg);
                        }
                        &:after {
                            transform: rotate(-45deg);
                        }
                    }
                }
            }
            // 移动端控制台入口
            .m-admin-console {
                position: relative;
                margin: 0 0.32rem;
                background: #fff;
                .opr-btn {
                    float: left;
                    height: 0.72rem;
                    width: 3.2rem;
                    margin: 0.43rem 0;
                    padding: 0 0.14rem;
                    border: 1px solid #0044ff;
                    color: #0044ff;
                    font-size: 0.28rem;
                    line-height: 0.72rem;
                    text-align: center;
                }
                .register-btn {
                    margin-right: 0.26rem;
                    color: #fff;
                    background: #0044ff;
                }
                .enter-btn {
                    width: 100%;
                    margin: 0.34rem 0 0.41rem;
                }
                .account-wrapper {
                    position: relative;
                    padding: 0.43rem 0;
                    .account-text {
                        display: inline-block;
                        width: 4.5rem;
                        height: 0.28rem;
                        p {
                            position: relative;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            line-height: 1.2;
                        }
                    }
                    .account-menu {
                        float: right;
                        li {
                            a {
                                display: block;
                                color: #0044ff;
                                font-size: 0.28rem;
                            }
                        }
                    }
                }
            }
            .nav-wrapper {
                display: none;
                position: relative;
                z-index: 101;
                height: calc(100vh - 1.08rem);
                // padding-bottom: 0.2rem;
                .menu {
                    width: 100%;
                    background: #fff;
                    z-index: 9996;
                    .menu-item {
                        border-top: 1px solid #e6e6e6;
                        .menu-item-title {
                            position: relative;
                            display: block;
                            height: 0.91rem;
                            padding: 0 0.3rem;
                            color: #fff;
                            font-weight: 500;
                            font-size: 0.28rem;
                            line-height: 0.91rem;
                            &.no-arrow:after {
                                display: none;
                            }
                            // &:after {
                            //   content: '';
                            //   position: absolute;
                            //   top: 50%;
                            //   right: 0.35rem;
                            //   width: 0.19rem;
                            //   height: 0.1rem;
                            //   margin-top: -0.05rem;
                            //   background: url(../../assets/img/nav/nav-arrow.png) center
                            //     no-repeat;
                            //   background-size: 100%;
                            //   transform: rotate(0deg);
                            //   transition: all 0.4s linear;
                            // }
                        }
                        &.active {
                            .menu-item-title {
                                &:after {
                                    transform: rotate(-180deg);
                                }
                            }
                            .sub-menu {
                                display: block;
                            }
                        }
                        .sub-menu {
                            display: none;
                            .subitem-wrapper {
                                li {
                                    border-top: 1px solid #e6e6e6;
                                    background: #fafafa;
                                    &:first-child {
                                        border-top: none;
                                    }
                                    a {
                                        position: relative;
                                        height: 0.81rem;
                                        padding: 0 0.33rem;
                                        color: #666;
                                        font-size: 0.26rem;
                                        line-height: 0.81rem;
                                        &.new-m:after {
                                            content: '';
                                            position: absolute;
                                            top: 1px;
                                            right: -0.27rem;
                                            width: 0.52rem;
                                            height: 0.22rem;
                                            background: url(../../assets/img/nav/new.png) no-repeat;
                                            background-size: 100%;
                                        }
                                    }
                                }
                            }
                        }
                        &.category {
                            .sub-menu {
                                .category-wrapper {
                                    .category-title {
                                        height: 0.6rem;
                                        line-height: 0.6rem;
                                        background-color: #f0f0f0;
                                        padding: 0 0.3rem;
                                    }
                                    .subitem-wrapper {
                                        li {
                                            a {
                                                padding-left: 0.6rem;
                                            }
                                        }
                                        .talk-line {
                                            height: 0.8rem;
                                            line-height: 0.8rem;
                                            padding-left: 0.6rem;
                                            a {
                                                display: inline-block;
                                                width: 1.46rem;
                                                height: 0.34rem;
                                                vertical-align: middle;
                                                background: url(../../assets/img/nav/m-talkLine.png);
                                                background-size: 100%;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                .z-lan {
                    position: absolute;
                    bottom: 0.6rem;
                    left: 50%;
                    transform: translateX(-50%);
                    font-size: 0;
                    .divider {
                        display: inline-block;
                        width: 1px;
                        height: 0.2rem;
                        background-color: #ccccd3;
                        margin: 0 0.32rem;
                    }
                    .z-locale__link {
                        font-size: 0.28rem;
                        color: #ffffff;
                        cursor: pointer;
                        &.link-active {
                            color: #0044ff;
                        }
                    }
                }
            }
            .showNav {
                display: block;
            }
        }
    }
}
</style>
