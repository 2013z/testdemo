<template>
    <div class="en-footer-container">
        <div class="container foot-pc">
            <div class="footer-left">
                <div class="icon icon-logo"></div>
                <p class="copyright">
                    <a href="http://www.beian.miit.gov.cn" target="_blank"
                        >Copyright © 2018-2020 ZEGO. All Rights Reserved.</a
                    >
                </p>
            </div>
            <div class="contact">
                <div class="mail"><a href="mailto:glogal@zego.im">Mail：global@zego.im</a></div>
                <div class="tel">Tel：+8615603389167</div>
            </div>
        </div>
        <div class="container foot-m">
            <div class="icon icon-logo"></div>
            <div class="contact">
                <div class="mail"><a href="mailto:glogal@zego.im">Mail：global@zego.im</a></div>
                <div class="tel">Tel：+8615603389167</div>
            </div>
            <p class="copyright">
                <a href="http://www.beian.miit.gov.cn" target="_blank"
                    >Copyright © 2018-2020 ZEGO. All Rights Reserved.</a
                >
            </p>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({})
export default class EnFooter extends Vue {}
</script>
<style lang="scss" scoped>
* {
    font-family: 'Roboto', 'PingFang SC', 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑',
        Arial, sans-serif;
}
.en-footer-container {
    width: 100%;
    height: 120px;
    background: rgba(22, 28, 40, 1);
    padding: 36px 0;
    .foot-pc {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .foot-m {
        display: none;
    }
    .icon-logo {
        width: 142px;
        height: 26px;
        background: url(../../assets/img/nav/f-logo.png);
        background-size: 100%;
    }
    .copyright {
        margin-top: 12px;
        a {
            font-size: 14px;
            color: #9094a2;
        }
    }
    .contact {
        font-size: 16px;
        color: #adb4cc;
        display: flex;
        .mail {
            margin-right: 30px;
            a {
                color: #adb4cc;
                text-decoration: none;
            }
        }
    }
}
@media screen and (max-width: 1000px) {
    .en-footer-container {
        width: 100%;
        height: 3.54rem;
        background: rgba(22, 28, 40, 1);
        padding: 0.6rem 0;
        .foot-m {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
        .foot-pc {
            display: none;
        }
        .icon-logo {
            width: 2.3rem;
            height: 0.41rem;
            background: url(../../assets/img/nav/f-logo-m.png);
            background-size: 100%;
        }
        .copyright {
            margin-top: 0;
            a {
                font-size: 0.24rem;
                color: #9094a2;
            }
        }
        .contact {
            margin-top: 0.43rem;
            margin-bottom: 0.52rem;
            font-size: 0.28rem;
            color: #adb4cc;
            display: flex;
            flex-direction: column;
            .mail {
                margin-bottom: 0.22rem;
                margin-right: 0;
            }
        }
    }
}
</style>
