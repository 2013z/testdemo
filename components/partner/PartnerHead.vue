<template>
    <header :class="{ head: true, 'no-locale': $route.path !== '/' }">
        <div class="container header-wrapper">
            <div class="head-left">
                <a href="/" class="icon-logo"></a>
                <div class="m-locale__lang">
                    <span>中文站</span>
                    <div class="m-locale__downdrop j-drop_target z-hover">
                        <div class="m-locale__menu">
                            <a class="m-locale__link" href="/">中文站</a>
                            <a class="m-locale__link" href="/en">English</a>
                        </div>
                    </div>
                </div>
                <nav class="nav-wrapper">
                    <ul class="menu">
                        <li class="menu-item category" data-listnum="3">
                            <a class="menu-item-title no-cursor" href="javascript:void(0)" title="产品">产品</a>
                            <div class="sub-menu">
                                <div class="category-wrapper">
                                    <div class="category-title">PaaS产品</div>
                                    <ul class="subitem-wrapper">
                                        <li class="interaction-live">
                                            <a
                                                href="/html/product/interaction-live.html"
                                                class="new"
                                                title="互动视频直播"
                                            >
                                                <h2>互动视频直播</h2>
                                                <p>多主播连麦互动，小程序和APP互通连麦</p>
                                            </a>
                                        </li>
                                        <li class="realtime-video">
                                            <a href="/html/product/realtime-video.html" title="实时视频">
                                                <h2>实时视频</h2>
                                                <p>32人视频，可扩展，适合社交和教育场景</p>
                                            </a>
                                        </li>
                                        <li class="realtime-voice">
                                            <a href="/html/product/realtime-voice.html" title="实时语音">
                                                <h2>实时语音</h2>
                                                <p>多人至百万人语音，适合社交和游戏场景</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="category-wrapper">
                                    <div class="category-title">视频会议</div>
                                    <ul class="subitem-wrapper">
                                        <li class="talk-wrapper">
                                            <a href="https://www.talkline.cn" title="talkline">
                                                <div class="talk-line"></div>
                                                <p>适合企业和个人使用的视频会议软件</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="menu-item horizontal">
                            <a class="menu-item-title no-cursor" href="javascript:void(0)" title="解决方案">解决方案</a>
                            <div class="sub-menu">
                                <ul class="subitem-wrapper clearfix">
                                    <li>
                                        <a href="/html/solution/live-solution.html" class="new" title="互动直播">
                                            <h2>互动直播</h2>
                                            <p>支持小程序连麦直播，小程序和APP互通连麦</p>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/html/solution/edu-solution.html" title="教育">
                                            <h2>教育</h2>
                                            <p>从互动小班到万人大班，中美跨境更流畅</p>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/html/solution/social-solution.html" title="社交">
                                            <h2>社交</h2>
                                            <p>从双人密聊或视频群聊，最自然的社交方式</p>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/html/solution/meeting-solution.html" title="会议">
                                            <h2>会议</h2>
                                            <p>不用去会议室的视频会议，同样高清流畅</p>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/html/solution/games-solution.html" title="游戏">
                                            <h2>游戏</h2>
                                            <p>真正懂游戏的低能耗高稳定语音方案</p>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/html/solution/finance-solution.html" title="金融">
                                            <h2>金融</h2>
                                            <p>视频见证和视频双录等安全合规要求的信心选择</p>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/html/solution/miniprogram.html" title="小程序直播">
                                            <h2>小程序直播</h2>
                                            <p>提供SaaS系统和PaaS插件，打通微信生态，低开发量快速上线</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/html/solution/wawaji-h5.html" title="娃娃机H5">
                                            <h2>娃娃机H5</h2>
                                            <p>400ms延迟，兼容微信，媲美原生APP</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item horizontal usecase">
                            <a class="menu-item-title no-cursor" href="/usecase" title="案例">案例</a>
                        </li>
                        <li v-if="infomationShow" class="menu-item horizontal infomation">
                            <a
                                class="menu-item-title no-cursor"
                                href="https://shop.zego.im/"
                                rel="nofollow"
                                title="信息平台"
                            >
                                信息平台
                            </a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-item-title no-cursor" href="javascript:void(0)" title="技术优势">技术优势</a>
                            <div class="sub-menu">
                                <ul class="subitem-wrapper">
                                    <li>
                                        <a href="/html/testing-report/" title="测试报告">
                                            <h2>测试报告</h2>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a class="menu-item-title no-cursor" href="javascript:void(0)" title="了解即构">了解即构</a>
                            <div class="sub-menu">
                                <ul class="subitem-wrapper">
                                    <li>
                                        <a href="/html/about/about-zego.html" title="关于即构">
                                            <h2>关于即构</h2>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.zego.im/article/category/媒体报道/" title="媒体报道">
                                            <h2>媒体报道</h2>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.zego.im/article/category/技术进展/" title="技术进展">
                                            <h2>技术进展</h2>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item developer-center">
                            <a class="menu-item-title no-cursor" href="javascript:void(0)" title="开发者中心"
                                >开发者中心</a
                            >
                            <div class="sub-menu">
                                <!-- <div class="category-wrapper"> -->
                                <div class="">
                                    <!-- <div class="category-title">SDK集成</div> -->
                                    <ul class="subitem-wrapper">
                                        <li>
                                            <a href="https://doc-zh.zego.im/redirect" title="文档中心">
                                                <h2>文档中心</h2>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://doc-zh.zego.im/zh/api?doc=Express_Video_SDK_API~Java"
                                                title="客户端API"
                                            >
                                                客户端API
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://doc-zh.zego.im/zh/1287.html" title="服务端API">
                                                服务端API
                                            </a>
                                        </li>
                                        <li v-if="docUpdateObj.content">
                                            <a
                                                href="javascript:;"
                                                title="文档中心"
                                                class="new"
                                                @click="viewUpdatedDetail"
                                            >
                                                <h2>新功能上线</h2>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <!-- <div class="category-wrapper">
                                    <div class="category-title">视频会议</div>
                                    <ul class="subitem-wrapper">
                                        <li class="talk-wrapper">
                                            <a href="https://www.talkline.cn" title="talkline">
                                                <div class="talk-line"></div>
                                                <p>适合企业和个人使用的视频会议软件</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div> -->
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="admin-console clearfix">
                <!-- 隐藏搜索 -->
                <!-- <div class="action-btn"></div> -->
                <a
                    href="https://console.zego.im/account"
                    class="opr-btn keeped login-btn"
                    :class="{ none: loginStatus === 'login' }"
                    target="_blank"
                    >登录控制台</a
                >
                <a
                    href="https://console.zego.im/account/register"
                    class="opr-btn keeped register-btn"
                    :class="{ none: loginStatus === 'login' }"
                    target="_blank"
                    >立即注册</a
                >
                <div :class="{ 'account-wrapper': true, none: loginStatus === 'logout' }">
                    <div class="account-text">
                        <p>{{ email }}</p>
                    </div>
                    <ul class="account-menu">
                        <li>
                            <a href="https://console.zego.im/account/userinfo" target="_blank">用户资料</a>
                        </li>
                        <li>
                            <a href="https://console.zego.im/account/security" target="_blank">账号安全</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" class="logout" @click="logout">退出账号</a>
                        </li>
                    </ul>
                </div>
                <a
                    href="https://console.zego.im"
                    class="opr-btn enter-btn"
                    :class="{ none: loginStatus === 'logout' }"
                    target="_blank"
                    >进入控制台</a
                >
            </div>
        </div>
        <!-- 移动端导航 -->
        <div class="m-header-wrapper">
            <div class="nav-head" :class="{ 'nav-show': navActive }">
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
                        href="https://console.zego.im/account/register"
                        class="opr-btn keeped  register-btn"
                        :class="{ none: loginStatus === 'login' }"
                        target="_blank"
                        >立即注册</a
                    >
                    <a
                        href="https://console.zego.im/account"
                        class="opr-btn keeped  login-btn"
                        :class="{ none: loginStatus === 'login' }"
                        target="_blank"
                        >登录控制台</a
                    >
                    <div :class="{ 'account-wrapper': true, none: loginStatus === 'logout' }">
                        <div class="account-text">
                            <p>
                                账号：<span>{{ email }}</span>
                            </p>
                        </div>
                        <ul class="account-menu">
                            <li>
                                <a href="javascript:void(0)" class="logout" target="_blank" @click="logout">退出</a>
                            </li>
                        </ul>
                    </div>
                    <a
                        href="https://console.zego.im"
                        class="opr-btn none enter-btn"
                        :class="{ none: loginStatus === 'logout' }"
                        target="_blank"
                        >进入控制台</a
                    >
                </div>
                <ul class="menu">
                    <li
                        :class="{
                            'menu-item': true,
                            category: true,
                            active: activeIndex === 0,
                        }"
                    >
                        <a class="menu-item-title" href="javascript:void(0)" title="产品" @click="handleMenu(0)"
                            >产品</a
                        >
                        <div class="sub-menu">
                            <div class="category-wrapper">
                                <div class="category-title">PaaS产品</div>
                                <ul class="subitem-wrapper">
                                    <li class="interaction-live">
                                        <a href="/html/product/interaction-live.html" class="new-m" title="互动视频直播"
                                            >互动视频直播</a
                                        >
                                    </li>
                                    <li class="realtime-video">
                                        <a href="/html/product/realtime-video.html" title="实时视频">实时视频</a>
                                    </li>
                                    <li class="realtime-voice">
                                        <a href="/html/product/realtime-voice.html" title="实时语音">实时语音</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="category-wrapper">
                                <div class="category-title">视频会议</div>
                                <ul class="subitem-wrapper">
                                    <li class="talk-line">
                                        <a href="https://www.talkline.cn" title="talkline"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li
                        :class="{
                            'menu-item': true,
                            active: activeIndex === 1,
                        }"
                    >
                        <a class="menu-item-title" href="javascript:void(0)" title="解决方案" @click="handleMenu(1)"
                            >解决方案</a
                        >
                        <div class="sub-menu">
                            <ul class="subitem-wrapper">
                                <li>
                                    <a href="/html/solution/live-solution.html" class="new-m" title="互动直播"
                                        >互动直播</a
                                    >
                                </li>
                                <li>
                                    <a href="/html/solution/miniprogram.html" title="小程序直播">小程序直播</a>
                                </li>
                                <li>
                                    <a href="/html/solution/wawaji-h5.html" title="娃娃机H5">娃娃机H5</a>
                                </li>
                                <li>
                                    <a href="/html/solution/games-solution.html" title="游戏">游戏</a>
                                </li>
                                <li>
                                    <a href="/html/solution/social-solution.html" title="社交">社交</a>
                                </li>
                                <li>
                                    <a href="/html/solution/edu-solution.html" title="教育">教育</a>
                                </li>
                                <li>
                                    <a href="/html/solution/meeting-solution.html" title="会议">会议</a>
                                </li>
                                <li>
                                    <a href="/html/solution/finance-solution.html" title="金融">金融</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li
                        :class="{
                            'menu-item': true,
                            active: activeIndex === 2,
                        }"
                    >
                        <a class="menu-item-title" href="/usecase" title="案例" @click="handleMenu(2)">案例</a>
                    </li>
                    <li
                        :class="{
                            'menu-item': true,
                            active: activeIndex === 2,
                        }"
                    >
                        <a class="menu-item-title" href="javascript:void(0)" title="技术优势" @click="handleMenu(2)"
                            >技术优势</a
                        >
                        <div class="sub-menu">
                            <ul class="subitem-wrapper">
                                <li>
                                    <a href="/html/testing-report/" title="测试报告">测试报告</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li
                        :class="{
                            'menu-item': true,
                            active: activeIndex === 3,
                        }"
                    >
                        <a class="menu-item-title" href="javascript:void(0)" title="了解即构" @click="handleMenu(3)"
                            >了解即构</a
                        >
                        <div class="sub-menu">
                            <ul class="subitem-wrapper">
                                <li>
                                    <a href="/html/about/about-zego.html" title="关于即构">关于即构</a>
                                </li>
                                <li>
                                    <a href="https://www.zego.im/article/category/媒体报道/" title="媒体报道"
                                        >媒体报道</a
                                    >
                                </li>
                                <li>
                                    <a href="https://www.zego.im/article/category/技术进展/" title="技术进展"
                                        >技术进展</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li
                        :class="{
                            'menu-item': true,
                            'developer-center': true,
                            active: activeIndex === 4,
                        }"
                    >
                        <a class="menu-item-title" href="javascript:void(0)" title="开发者中心" @click="handleMenu(4)"
                            >开发者中心</a
                        >
                        <div class="sub-menu">
                            <div class="category-wrapper">
                                <div class="category-title">PaaS产品</div>
                                <ul class="subitem-wrapper">
                                    <li>
                                        <a href="https://doc-zh.zego.im/redirect" title="文档中心">
                                            文档中心
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://doc-zh.zego.im/zh/api?doc=Express_Video_SDK_API~Java"
                                            title="客户端API"
                                        >
                                            客户端API
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://doc-zh.zego.im/zh/1287.html" title="服务端API">
                                            服务端API
                                        </a>
                                    </li>
                                    <li v-if="docUpdateObj.content">
                                        <a
                                            href="javascript:;"
                                            title="文档中心"
                                            class="new-m"
                                            @click="viewUpdatedDetail"
                                        >
                                            新功能上线
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <!-- <div class="category-wrapper">
                                <div class="category-title">视频会议</div>
                                <ul class="subitem-wrapper">
                                    <li class="talk-line">
                                        <a href="https://www.talkline.cn" title="talkline"></a>
                                    </li>
                                </ul>
                            </div> -->
                        </div>
                    </li>
                </ul>
                <div class="z-lan">
                    <a class="z-locale__link" :class="{ 'link-active': $route.path === '/' }" href="/">中文站</a>
                    <span class="divider"></span>
                    <a class="z-locale__link" :class="{ 'link-active': $route.path === '/en' }" href="/en">English</a>
                </div>
            </div>
        </div>
        <div :class="{ mask: true, active: navActive }"></div>
    </header>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import axios from 'axios';
import { Route } from 'vue-router';

interface WithRoute {
    $route: Route;
}
declare const $: any;
@Component({})
export default class ZHeader extends Vue implements WithRoute {
    $route!: Route;
    language = '中文站';
    theme = '';
    loginStatus = 'logout';
    mobile = '';
    email = '';
    navActive = false;
    activeIndex = -1;
    winW = 0;
    infomationShow = false;
    docUpdateObj = {
        content: '',
        id: -1,
    };
    docUrl = 'https://doc-zh.zego.im';
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
    dealMenu() {
        this.winW = window.innerWidth;
        // console.log(this.winW);显示窗口显示区扽宽度，没必要打印，调试完注释掉
        // const that = this
        if (this.winW < 1000) {
            // 顶部导航菜单点击效果
            // $('.m-header-wrapper .nav-btn')
            //   .off('click')
            //   .on('click', function() {
            //     // @ts-ignore
            //     $(this).toggleClass('active')
            //     const ht = $('.header-top')
            //     ht.toggleClass('active-m')
            //     if (ht.hasClass('active-m')) {
            //       $('.m-header-wrapper .nav-wrapper').fadeIn(300)
            //       $('.header-top .mask').fadeIn(500)
            //     } else {
            //       $('.m-header-wrapper .nav-wrapper').fadeOut(300)
            //       $('.header-top .mask').fadeOut(500)
            //       $('.m-header-wrapper .sub-menu').slideUp(500)
            //       $('.m-header-wrapper .menu-item').removeClass('active')
            //     }
            //     that.showNav()
            //   })
        }
    }
    async showInfomation() {
        let infoShow = false;
        try {
            const { data } = await axios.get('https://storage.zego.im/official/info.json');
            // console.log('infoShow', data);
            infoShow = data.info;
        } catch (err) {
            console.log('err: ', err);
            infoShow = false;
        }
        // @ts-ignore
        // console.log('city11', window.city);
        // @ts-ignore
        if (infoShow && window.city && (window.city.includes('深圳') || window.city.includes('广州'))) {
            this.infomationShow = true;
        }
    }
    mounted() {
        this.showInfomation();
        this.getUserInfo();
        // this.loginStatus = 'login'
        this.dealMenu();
        // console.log(this.$route);  打印出当前路由信息
        if (
            this.$route.path === '/en' ||
            (this.$route.path.indexOf('/usecase') > -1 && this.$route.path.indexOf('.html') > -1)
        ) {
            this.theme = 'light';
        } else {
            this.handleScroll();
            window.addEventListener('scroll', this.handleScroll.bind(this), {
                passive: true,
            });
        }

        // 文档更新通知
        this.loadDocUpdateInfo();
    }

    loadDocUpdateInfo() {
        const script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.src = `${this.docUrl}/updateInfo.js`;
        document.body.appendChild(script);

        script.onload = () => {
            this.checkUpdateInfo((window as any).docLastUpdateInfo);
        };
    }
    checkUpdateInfo({ id, content, updateTime }: { id: number; content: string; updateTime: number }) {
        const idStr = id + '';
        const now = Date.now();
        const timePass = now - updateTime < 7 * 24 * 60 * 60 * 1000;
        const unRead = localStorage.getItem('docUpdateId') !== idStr;
        const contentDiff = localStorage.getItem('docUpdateContent') !== content;
        if (content && timePass && (unRead || contentDiff)) {
            this.docUpdateObj = {
                content,
                id,
            };
        }
    }

    viewUpdatedDetail() {
        const idStr = this.docUpdateObj.id + '';
        window.location.href = `/zh/${idStr}.html`;
        localStorage.setItem('docUpdateId', idStr);
        localStorage.setItem('docUpdateContent', this.docUpdateObj.content);
        localStorage.removeItem('docUpdateViewed');
    }

    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>
<style scoped lang="scss">
$primary-color: #0044ff;
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
    background-color: rgba(10, 16, 67, 1);
    // background: #fff;
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
                    font-size: 14px;
                    font-family: 'PingFangSC-Light';
                    line-height: 68px;
                    position: relative;
                    cursor: pointer;
                    &.no-cursor {
                        cursor: default;
                    }
                }
                .sub-menu {
                    overflow: hidden;
                    position: absolute;
                    left: 50%;
                    top: 68px;
                    width: 145px;
                    margin-left: -72px;
                    background: #fff;
                    max-height: 0px;
                    z-index: 9999;
                    transition: max-height 0.2s ease-in;
                    .subitem-wrapper {
                        border: 1px solid #e5e5e5;
                        border-top: none;
                        text-align: center;
                        li {
                            display: block;
                            height: 43px;
                            a {
                                position: relative;
                                display: block;
                                height: 100%;
                                color: #666;
                                line-height: 43px;
                                cursor: pointer;
                                h2 {
                                    position: relative;
                                    display: inline-block;
                                    margin-bottom: 7px;
                                    line-height: 1;
                                }
                                p {
                                    color: #999;
                                    font-size: 12px;
                                    line-height: 17px;
                                }
                                &:hover {
                                    background: #fff;
                                    color: $primary-color;
                                    h2 {
                                        color: $primary-color;
                                    }
                                    p {
                                        color: #666;
                                    }
                                }
                                &.new {
                                    h2 {
                                        &:after {
                                            content: '';
                                            position: absolute;
                                            top: 0;
                                            right: -43px;
                                            width: 37px;
                                            height: 16px;
                                            background: url(../../assets/img/nav/new.png) no-repeat;
                                            background-size: 100%;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                &.horizontal {
                    position: static;
                    &[data-listnum='3'] {
                        .sub-menu {
                            width: 721px;
                        }
                    }
                    .sub-menu {
                        width: 960px;
                        left: 258px;
                        .subitem-wrapper {
                            padding: 31px 0 0;
                            text-align: left;
                            li {
                                position: relative;
                                float: left;
                                width: 238px;
                                height: 60px;
                                margin: 0 0 36px 1px;
                                &:before {
                                    content: '';
                                    position: absolute;
                                    top: 50%;
                                    left: -1px;
                                    width: 1px;
                                    height: 60px;
                                    background: #e3e3e7;
                                    transform: translate3d(0, -50%, 0);
                                }
                                &:nth-child(4n + 1) {
                                    margin: 0 0 36px 0;
                                    &:before {
                                        display: none;
                                    }
                                }
                                a {
                                    padding: 0 35px;
                                    line-height: 1;
                                    h2 {
                                        font-size: 16px;
                                    }
                                }
                            }
                        }
                    }
                }
                &.category {
                    .sub-menu {
                        width: 294px;
                        .category-wrapper {
                            .category-title {
                                height: 30px;
                                line-height: 30px;
                                font-size: 12px;
                                color: #666;
                                padding-left: 15px;
                                background-color: #f4f4f4;
                                border-left: 1px solid #e5e5e5;
                                border-right: 1px solid #e5e5e5;
                            }
                            .subitem-wrapper {
                                border-bottom: none;
                                li {
                                    padding-top: 19px;
                                    padding-left: 29px;
                                    text-align: left;
                                    height: 78px;
                                    a {
                                        line-height: 1;
                                        h2 {
                                            font-size: 16px;
                                            color: #666;
                                            margin-bottom: 10px;
                                        }
                                        .talk-line {
                                            margin-bottom: 9px;
                                            width: 94px;
                                            height: 22px;
                                            background: url(../../assets/img/nav/talkLine.png);
                                            background-size: 100% 100%;
                                        }
                                        &:hover {
                                            color: $primary-color;
                                            h2 {
                                                color: $primary-color;
                                            }
                                        }
                                    }
                                    &.talk-wrapper {
                                        padding-top: 18px;
                                        height: 82px;
                                        border-bottom: 1px solid #e5e5e5;
                                    }
                                    &:not(:last-child) {
                                        border-bottom: 1px solid #e6e6e6;
                                    }
                                }
                            }
                        }
                    }
                }
                &.developer-center {
                    .sub-menu {
                        // width: 180px;
                        width: 143px;
                        // margin-left: -90px;
                        margin-left: -72px;
                        .category-wrapper {
                            .category-title {
                                height: 30px;
                                line-height: 30px;
                                font-size: 12px;
                                color: #666;
                                padding-left: 15px;
                                background-color: #f4f4f4;
                                border-left: 1px solid #e5e5e5;
                                border-right: 1px solid #e5e5e5;
                            }
                            .subitem-wrapper {
                                border-bottom: none;
                                li {
                                    // padding-top: 19px;
                                    padding-left: 29px;
                                    text-align: left;
                                }
                            }
                        }
                    }
                }
                &:hover {
                    // box-shadow: inset 0 -2px $primary-color;
                    .sub-menu {
                        max-height: 400px;
                        border-bottom: 1px solid #e5e5e5;
                    }
                    & > a {
                        color: $primary-color;
                        &::after {
                            position: absolute;
                            content: '';
                            bottom: -26px;
                            left: 50%;
                            transform: translateX(-50%);
                            display: block;
                            width: 0;
                            height: 0;
                            border: 10px solid transparent;
                            border-bottom: 10px solid #fff;
                        }
                    }
                }
                &.usecase,
                &.infomation {
                    &:hover {
                        & > a {
                            cursor: pointer;
                            &::after {
                                display: none;
                            }
                        }
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
    color: #fff;
    line-height: 68px;
    height: 100%;
    padding: 0 0 0 18px;
    width: 79px;
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
                color: #222;
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
        // border: 1px solid $primary-color;
        border: 0;
        line-height: 30px;
        border-radius: 2px;
        cursor: pointer;
    }
    .register-btn {
        color: #fff;
        background: $primary-color;
        &:hover {
            color: #fff;
            background: #003de5;
        }
    }
    .enter-btn {
        color: #fff;
    }
    .login-btn {
        color: #fff;
        margin-right: 12px;
        border: 1px solid transparent;
        &:hover {
            font-size: 14px;
            border-radius: 2px;
            // border: 1px solid #fff;
            opacity: 0.7;
        }
    }
    .account-wrapper {
        position: relative;
        float: left;
        margin-right: 10px;
        .account-text {
            display: inline-block;
            width: 118px;
            height: 68px;
            line-height: 68px;
            color: #fff;
            cursor: pointer;
            p {
                position: relative;
                overflow: hidden;
                padding-right: 16px;
                text-overflow: ellipsis;
                white-space: nowrap;
                &:after {
                    content: '';
                    display: inline-block;
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
            }
            &.isActive p:after {
                margin-top: -3px;
                transform: rotateZ(180deg);
            }
        }
        .account-menu {
            position: absolute;
            top: 48px;
            left: -21px;
            width: 143px;
            max-height: 0;
            overflow: hidden;
            border-top: 0;
            text-align: center;
            -webkit-transition: max-height 0.3s ease-out;
            -moz-transition: max-height 0.3s ease-out;
            -ms-transition: max-height 0.3s ease-out;
            -o-transition: max-height 0.3s ease-out;
            transition: max-height 0.3s ease-out;
            &::before {
                content: '';
                display: block;
                width: 0;
                height: 0;
                border: 10px solid transparent;
                border-bottom-color: #fff;
                margin: 0 auto;
            }
            li {
                a {
                    display: block;
                    height: 42px;
                    color: #666;
                    line-height: 42px;
                    background: #fff;
                }
            }
        }
        &:hover {
            .account-menu {
                max-height: 146px;
            }
        }
    }
}
.head-light {
    background: #fff;
    box-shadow: inset 0 -1px #e5e5e5;
    .m-locale__lang {
        color: #222;
        .m-locale__downdrop {
            &::before {
                visibility: hidden;
            }
        }
        &::after {
            border-top-color: #222;
        }
    }
    .header-wrapper .nav-wrapper .menu .menu-item a {
        color: #222;
        &::after {
            visibility: hidden;
        }
    }
    .admin-console .account-wrapper {
        .account-text {
            color: #222;

            p {
                &::after {
                    border-top-color: #222;
                }
            }
        }
        .account-menu {
            &::before {
                visibility: hidden;
            }
        }
    }
    .login-btn {
        color: #222;
        margin-right: 12px;
        border: 1px solid transparent;
        &:hover {
            color: $primary-color;
            font-size: 14px;
            border-radius: 2px;
            // border: 1px solid $primary-color;
            // opacity: 0.7;
        }
    }
    .icon-logo {
        width: 123px;
        height: 22px;
        background: url(../../assets/img/nav/h-logo.png) no-repeat;
        background-size: 100%;
    }
    .enter-btn {
        color: #222;
    }
}
.no-locale {
    .m-locale__lang {
        display: none;
    }
    .nav-wrapper {
        margin-left: 101px;
    }
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
            &.active {
                display: block;
            }
        }
        .m-header-wrapper {
            display: block;
            position: relative;
            width: 100%;
            height: auto;
            // background: #fff;
            z-index: 1000;
            .nav-head {
                position: relative;
                height: 1.08rem;
                line-height: 1.08rem;
                display: flex;
                align-items: center;
                // background: #fff;
                // box-shadow: inset 0 -1px #e5e5e5;
                appearance: none;
                .logo {
                    position: relative;
                    display: block;
                    width: 1.92rem;
                    height: 0.36rem;
                    margin-left: 0.35rem;
                    background: url(../../assets/img/nav/h-logo-m.png) center no-repeat;
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
                        border-bottom: 0.03rem solid #fff;
                        width: 0.4rem;
                        margin: 0.045rem 0;
                        background: #fff;
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
                        opacity: 0.5;
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
                            // opacity: 0.5;
                        }
                        &:before {
                            transform: rotate(45deg);
                        }
                        &:after {
                            transform: rotate(-45deg);
                        }
                    }
                }
                &.nav-show {
                    background-color: #fff;
                    .logo {
                        background: url(../../assets/img/nav/hb-logo-m.png) center no-repeat;
                        background-size: 100%;
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
                    border: 1px solid $primary-color;
                    color: $primary-color;
                    font-size: 0.28rem;
                    line-height: 0.72rem;
                    text-align: center;
                }
                .register-btn {
                    margin-right: 0.26rem;
                    color: #fff;
                    background: $primary-color;
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
                                color: $primary-color;
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
                // padding-bottom: 0.6rem;
                background-color: #fff;
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
                            color: #666;
                            font-size: 0.28rem;
                            line-height: 0.91rem;
                            &.no-arrow:after {
                                display: none;
                            }
                            &:after {
                                content: '';
                                position: absolute;
                                top: 50%;
                                right: 0.35rem;
                                width: 0.19rem;
                                height: 0.18rem;
                                margin-top: -0.05rem;
                                background: url(../../assets/img/nav/nav-arrow.png) center no-repeat;
                                background-size: 100%;
                                transform: rotate(0deg);
                                transition: all 0.4s linear;
                            }
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
                        &.developer-center,
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
                        color: #222;
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
    .head-light {
        .m-header-wrapper .nav-head {
            background-color: #fff;
            box-shadow: inset 0 -1px #e5e5e5;
            .logo {
                background: url(../../assets/img/nav/hb-logo-m.png) center no-repeat;
                background-size: 100%;
            }
        }
        .m-header-wrapper .nav-head .nav-btn span {
            border-color: #999;
            background-color: #999;
        }
        .close {
            &:before,
            &:after {
                content: '';
                position: absolute;
                height: 2px;
                width: 100%;
                top: 50%;
                left: 0;
                margin-top: -1px;
                background: #999 !important;
            }
        }
    }
    .container {
        max-width: none;
    }
    .head {
        height: 1rem;
        .nav-wrapper {
            display: none;
        }
        .admin-console {
            display: none;
        }
        .icon-logo {
            display: inline-block;
            width: 1.92rem;
            height: 0.36rem;
            background: url(../../assets/img/nav/m-logo.png) 50%/100% no-repeat;
        }
    }
    .no-locale {
        .m-locale__lang {
            display: none;
        }
        .nav-wrapper {
            margin-left: 0;
        }
    }
}
</style>
