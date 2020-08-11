<template>
    <!-- 移动端适配 -->
    <div class="container_m">
        <div class="contain_wrapper">
            <div class="banner">
                <div class="plan"></div>
                <el-button class="tuijian" type="text" @click="outergVisible = true">
                    立即推荐
                </el-button>
                <!-- 推荐表单start -->
                <el-dialog title="" :visible.sync="outergVisible" class="form_m1" :close-on-click-modal="false">
                    <div class="dialogtitle">填写您的信息<br />方便联系您发放奖品</div>
                    <el-form
                        ref="formData"
                        :model="inviteForm"
                        :rules="rules"
                        label-width="49px"
                        :hide-required-asterisk="true"
                    >
                        <div class="formNameOrPhone">
                            姓名
                        </div>
                        <el-form-item prop="name">
                            <el-input v-model="inviteForm.name" placeholder="请输入您的姓名"></el-input>
                        </el-form-item>
                        <div class="formNameOrPhone">
                            电话
                        </div>
                        <el-form-item prop="phone">
                            <el-input v-model="inviteForm.phone" placeholder="请输入您的电话" maxlength="11"></el-input>
                        </el-form-item>
                    </el-form>
                    <!-- <el-button type="submit" class="next" :disabled="!canSubmit" @click="joinNext('formData');"
                                >{{ nextStep }}
                            </el-button> -->
                    <el-button
                        type="submit"
                        class="next"
                        :disabled="!canSubmit"
                        :loading="submitting"
                        @click="joinNext('formData')"
                        >{{ nextStep }}
                    </el-button>
                    <div class="closeDialog1" :visible.sync="outergVisible" @click="closeDialog1()">
                        <img src="../../assets/img/partner/mobile/close_icon.png" alt="" />
                    </div>
                </el-dialog>

                <el-dialog
                    v-if="innerVisible"
                    class="form_m2"
                    :visible.sync="innerVisible"
                    append-to-body
                    :close-on-click-modal="false"
                >
                    <div id="dialogTitle2" class="dialogTitle2">
                        选择邀请方式
                    </div>
                    <el-tabs v-model="activeName" type="card">
                        <el-tab-pane label="分享专属海报" name="first" class="shareurl">
                            <div v-if="posterDataUrl" ref="posterImage" class="ypl-flex">
                                <div id="poster" style="position: relative">
                                    <!-- <div class="posterBox">
                                            <img
                                                class="poster-bg"
                                                src="../../assets/img/partner/mobile/poster.jpg"
                                                alt="邀请海报背景"
                                            />
                                            <vue-qr
                                                text="https://www.zego.im/activity"
                                                :size="450"
                                                class="code"
                                            ></vue-qr>
                                        </div> -->
                                    <img class="poster-bg" :src="posterDataUrl" alt="邀请海报背景" />
                                </div>
                            </div>
                            <div v-if="isMounted" class="save">
                                <el-button v-if="!isIOSOrWx()" @click="savePoster()">立即保存</el-button>
                                <div v-else class="notIOS">长按海报保存</div>
                            </div>
                            <div class="closeDialog2" :visible.sync="innerVisible" @click="closeDialog2()">
                                <img src="../../assets/img/partner/mobile/close_icon.png" alt="" />
                            </div>
                            <!-- <div class="partnerLink">
                                    <span class="link">链接</span>
                                    <span class="linkContent">{{ shareUrl }}</span>
                                </div>
                                <el-button :class="['copyurl', copyState && 'is-success']" @click="copyShareUrl">{{
                                    copyState ? '复制成功，快去分享吧!' : '复制专属链接'
                                }}</el-button> -->
                        </el-tab-pane>
                        <el-tab-pane label="填写好友资料" name="second" class="materials">
                            <el-form
                                ref="friendsData"
                                :model="friendsForm"
                                :rules="rules"
                                label-width="55px"
                                class="friendInfo"
                            >
                                <div class="commonCol">
                                    姓名
                                </div>
                                <el-form-item prop="Name">
                                    <el-input
                                        v-model="friendsForm.Name"
                                        placeholder="请输入好友姓名"
                                        class="friendsName common"
                                    ></el-input>
                                </el-form-item>
                                <div class="commonCol">电话</div>
                                <el-form-item prop="Phone">
                                    <el-input
                                        v-model="friendsForm.Phone"
                                        placeholder="请输入好友电话"
                                        maxlength="11"
                                        class="friendsPhone common"
                                    ></el-input>
                                </el-form-item>
                                <div class="commonCol">公司</div>
                                <el-form-item prop="company">
                                    <el-input
                                        v-model="friendsForm.company"
                                        placeholder="请输入好友公司"
                                        class="friendsCompany common"
                                    ></el-input>
                                </el-form-item>
                                <div class="commonCol">城市</div>
                                <el-form-item prop="city">
                                    <el-input
                                        v-model="friendsForm.city"
                                        placeholder="请输入好友城市"
                                        class="friendsCity common"
                                    ></el-input>
                                </el-form-item>
                                <div class="wechatOrPhone">
                                    <div class="choice">
                                        <el-form-item prop="contact" class="emailForm">
                                            <el-select v-model="friendsForm.contact" :popper-append-to-body="false">
                                                <el-option
                                                    v-for="item in options"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value"
                                                >
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                        <div class="arrowdown">
                                            <img src="../../assets/img/partner/mobile/arrowdown.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="choiceValue">
                                        <el-form-item v-if="friendsForm.contact === 'wechat'" prop="wechat">
                                            <el-input
                                                v-model="friendsForm.wechat"
                                                placeholder="请输入好友微信"
                                            ></el-input>
                                        </el-form-item>
                                        <el-form-item v-if="friendsForm.contact === 'email'" prop="email">
                                            <el-input
                                                v-model="friendsForm.email"
                                                placeholder="请输入好友邮箱"
                                            ></el-input>
                                        </el-form-item>
                                    </div>
                                </div>
                            </el-form>
                            <el-button type="submit" class="tijiao" :disabled="!Submit" @click="refer('friendsData')">
                                提交
                            </el-button>
                            <div class="closeDialog22" :visible.sync="innerVisible" @click="closeDialog2()">
                                <img src="../../assets/img/partner/mobile/close_icon.png" alt="" />
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </el-dialog>
                <el-dialog class="form_m3" :visible.sync="successVisible" append-to-body>
                    <div class="success">
                        <img src="../../assets/img/partner/mobile/successIcon.png" alt="" />
                    </div>
                    <div class="consultText"><span>提交成功</span><br /><span>您可添加工作人员咨询进展</span></div>
                    <div class="consultCode">
                        <img src="../../assets/img/partner/pc/consult2.png" alt="" />
                    </div>
                    <div class="closeDialog3" :visible.sync="successVisible" @click="closeDialog3()">
                        <img src="../../assets/img/partner/mobile/close_icon.png" alt="" />
                    </div>
                </el-dialog>
            </div>
            <div class="content">
                <div class="background">
                    <!-- 推荐有礼 -->
                    <div class="recommend">
                        <div class="recommend_title"></div>
                        <div class="recommend_content"></div>
                    </div>
                    <!-- 成为合伙人 -->
                    <div class="partner">
                        <div class="partner_title"></div>
                        <div class="partner_content">
                            <div class="btns">
                                <el-button @click="outergVisible = true"
                                    >立即推荐<img src="../../assets/img/nav/activity/iconRight.png" alt=""
                                /></el-button>

                                <el-button class="isCode" @click="dialogVisible = true">扫码咨询 </el-button>
                                <el-dialog
                                    :visible.sync="dialogVisible"
                                    :close-on-click-modal="true"
                                    @close="dialogVisible = false"
                                >
                                    <img src="../../assets/img/partner/mobile/xcode_mobile2.png" alt="" />
                                </el-dialog>
                            </div>
                        </div>
                    </div>
                    <!-- 朋友推荐 -->
                    <div class="friends">
                        <div class="friends_title"></div>
                        <div class="friends_cloudserver"></div>
                        <div class="friendsApp">
                            <img src="../../assets/img/partner/mobile/friendsApp2x.png" alt="" />
                            <img src="../../assets/img/partner/mobile/consultCode.png" class="consult-code" alt="" />
                            <div class="swiper">
                                <div v-swiper:SceneSwiper="swiperSceneOption" class="swiperWrap">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <img src="../../assets/img/partner/mobile/scene1.png" />
                                            <span class="swiperTitle">秀场直播</span>
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="../../assets/img/partner/mobile/scene2.png" />
                                            <span class="swiperTitle">语聊房</span>
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="../../assets/img/partner/mobile/scene3.png" />
                                            <span class="swiperTitle">视频会议</span>
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="../../assets/img/partner/mobile/scene4.png" />
                                            <span class="swiperTitle">语音电话</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-pagination swiper-pagination-bullets">
                                    <!-- <div :class="title">秀场直播</div>
                                    <div :class="title">语聊房</div>
                                    <div :class="title">视频会议</div>
                                    <div :class="title">语音电话</div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 客户案例 -->
                    <div class="usercaseTitle">
                        <!-- 客户案例 -->
                        <img src="../../assets/img/nav/activity/mobile/usercase2.png" alt="" />
                    </div>
                    <div class="usercase">
                        <div class="caseContent">
                            <div v-swiper:clientSwiper="swiperClientOption" class="swiperWrap">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <img src="../../assets/img/nav/activity/mobile/client1x.png" />
                                    </div>
                                    <div class="swiper-slide">
                                        <img src="../../assets/img/nav/activity/mobile/client2x.png" />
                                    </div>
                                    <div class="swiper-slide">
                                        <img src="../../assets/img/nav/activity/mobile/client3x.png" />
                                    </div>
                                </div>
                                <div class="swiper-pagination swiper-pagination-bullets"></div>
                            </div>
                            <div class="slide1"></div>
                            <div class="slide2"></div>
                        </div>
                    </div>
                    <!-- 活动细则 -->
                    <div class="details">
                        <div class="activity_detail">
                            <div class="introduce">活动细则及说明</div>
                            <div class="detail">
                                <span
                                    >1.即构PaaS音视频云服务，覆盖互动视频直播、实时视频、实时语音等产品和白板、文件共享、IM等插件</span
                                >
                                <span
                                    >2.现金奖励将于好友签约上线后的1个月内发放；单个好友累计消费达到5万元，加赠金额将于第4个月月初发放；年底惊喜大礼将于次年1月发放</span
                                >
                                <span>3.本活动最终解释权归即构科技所有</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PosterCanvas v-if="invitedId" :qr-url="`/activity?invitedId=${invitedId}`"></PosterCanvas>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import axios from 'axios';
import copy from 'copy-to-clipboard';
// import html2canvas from 'html2caconst ';

// import { qrcanvas } from 'qrcanvas';
// import Canvas2Image from 'canvas2image';
// import canvas from '../../components/partner/canvas.vue';
import swiperCpt from '../../components/activity/swiperCpt.vue';
import PosterCanvas from './PosterCanvas.vue';
const FileSaver = require('file-saver');

const phoneReg = /^1[3-9]\d{9}$/;

// console.log(process.env, 111);
// debugger;

const baseRequestUrl = 'https://doc.zego.im';
// const baseRequestUrl = 'http://192.168.8.203:3006';

interface WithRoute {
    $route: Route;
}
declare const $: any;
@Component({
    layout: 'blank',
    components: {
        swiperCpt,
        PosterCanvas,
    },
})
export default class partner extends Vue {
    dialogVisible = false;
    $message: any;
    isMounted = false;
    nextStep = '下一步';
    copyState = 0;
    shareUrl = '';
    outergVisible = false;
    innerVisible = false;
    successVisible = false;
    slideActiveIndex = 0;
    submitting = false;
    invitedId = '';
    activeName = 'first';
    imgUrl = '';
    posterDataUrl = '';
    options = [
        {
            value: 'wechat',
            label: '微信',
        },
        {
            value: 'email',
            label: '邮箱',
        },
    ];
    value = '';
    swiperSceneOption = {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        useCSS3Transforms: false,
        paginationClickable: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            // dynamicBullets: true,
            clickable: true,
        },
        on: {
            slideChange() {
                console.log('onSlideChangeEnd', this);
            },
            tap() {
                console.log('onTap', this);
            },
        },
    };
    swiperClientOption = {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        useCSS3Transforms: false,
        paginationClickable: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            // dynamicBullets: true,
        },
        on: {
            slideChange() {
                console.log('onSlideChangeEnd', this);
            },
            tap() {
                console.log('onTap', this);
            },
        },
    };
    inviteForm = {
        name: '',
        phone: '',
    };
    friendsForm = {
        Name: '',
        Phone: '',
        company: '',
        city: '',
        email: '',
        contact: 'wechat',
    };
    rules = {
        name: [
            { required: true, message: '不能为空', trigger: 'blur' },
            // { pattern: /^[\u4E00-\u9FA5]+$/, message: '用户名只能为中文', trigger: 'blur' },
        ],
        phone: [
            { required: true, message: '手机号码不能为空', trigger: 'blur' },
            { pattern: phoneReg, message: '请输入正确的手机号码', trigger: 'blur' },
        ],
        Name: [
            { required: true, message: '不能为空', trigger: 'blur' },
            // { pattern: /^[\u4E00-\u9FA5]+$/, message: '用户名只能为中文', trigger: 'blur' },
        ],
        Phone: [
            { required: true, message: '手机号码不能为空', trigger: 'blur' },
            { pattern: phoneReg, message: '请输入正确的手机号码', trigger: 'blur' },
            { trigger: 'change', validator: this.validatePhoneExisted },
        ],
    };
    downloadData = {
        url: 'https://www.zego.im/activity',
    };
    $route: any;
    $html2canvas: any;
    get canSubmit() {
        const { name, phone } = this.inviteForm;
        return name && phone;
    }
    get Submit() {
        const { Name, Phone } = this.friendsForm;
        return Name && Phone;
    }

    @Watch('outergVisible')
    handleOutergVisibleChange(val: boolean) {
        if (val) this.invitedId = '';
        if (!val) {
            this.activeName = 'first';
            this.inviteForm = {
                name: '',
                phone: '',
            };
            (this.$refs.formData as any).clearValidate();
        }
    }

    @Watch('innerVisible')
    handleInnerVisibleChange(val: boolean) {
        if (!val) {
            this.activeName = 'first';
            this.friendsForm = {
                Name: '',
                Phone: '',
                company: '',
                city: '',
                email: '',
                contact: '微信',
            };
            (this.$refs.friendsData as any).clearValidate();
        }
    }

    mounted() {
        this.isMounted = true;
    }

    // 推荐人填写信息接口调用
    joinNext() {
        if (this.submitting) return;
        (this.$refs.formData as any).validate((valid: any) => {
            if (valid) {
                this.submitting = true;
                // this.$Message.success('保存成功!');
                console.log('推荐人信息有效!');
                axios({
                    method: 'post',
                    // url: 'https://doc.zego.im/data/setInviter',
                    url: `${baseRequestUrl}/data/setInviter`,
                    data: {
                        name: this.inviteForm.name,
                        phone: this.inviteForm.phone,
                    },
                })
                    .then(response => {
                        console.log('成功调用');

                        // const nextDialog = window.document.getElementsByClassName('form2');
                        // nextDialog.style.display = 'block';
                        // this.submitting = false;
                        // alert('下一步');
                        const invitedId = response.data.data[0].id;
                        this.invitedId = invitedId;
                        this.shareUrl = `${location.origin}/activity?invitedId=${invitedId}`;
                        console.log(invitedId);
                        return response;
                    })
                    .catch(error => {
                        this.submitting = false;
                        console.log(error);
                    });
            }
        });
    }

    // 复制链接
    copyShareUrl() {
        copy(this.shareUrl);
        this.copyState = 1;
    }

    // 保存被推荐人信息
    refer() {
        (this.$refs.friendsData as any).validate((valid: any) => {
            if (valid) {
                console.log('保存推荐人信息success!');
                axios({
                    method: 'post',
                    // url: 'https://doc.zego.im/data/setInvitedPerson',
                    url: `${baseRequestUrl}/data/setInvitedPerson`,
                    data: {
                        name: this.friendsForm.Name,
                        phone: this.friendsForm.Phone,
                        company: this.friendsForm.company,
                        city: this.friendsForm.city,
                        email: this.friendsForm.email,
                        // wechat: this.friendsForm.wechat,
                        inviterId: this.invitedId,
                    },
                })
                    .then(response => {
                        console.log('成功调用第二个接口');
                        // console.log(this.friendsForm.Name);
                        // console.log(response.data.data[0].id);
                        // this.submitting = false;
                        this.successVisible = true;
                        this.innerVisible = false;
                        return response;
                    })
                    .catch(error => {
                        // this.submitting = false;
                        console.log('调用第二个接口失败了');
                        console.log(error.code);
                    });
            }
        });
    }
    // 校验被推荐人手机号是否已被推荐
    validatePhoneExisted(rule: any, value: any, callback: any) {
        if (phoneReg.test(value)) {
            // http://192.168.8.203:3006/official
            // https://doc.zego.im/data
            axios.get(`${baseRequestUrl}/data/checkInvitedPhone?phone=${value}`).then((res: any) => {
                if (res.data.existed) {
                    // this.$message({
                    //     showClose: true,
                    //     //     message: '此用户已被推荐',
                    //     //     type: 'success',
                    //     //     duration: 0,
                    // });
                    // debugger;
                    return callback(new Error('此用户已被推荐'));
                }
                callback();
            });
        }
    }
    // 判断移动端是ios(wx)还是android
    isIOSOrWx() {
        const ua = navigator.userAgent.toLowerCase();
        return ua.match(/MicroMessenger/i) || ua.match(/(iPhone|iPad|iPod|iOS)/i);
    }
    // 生成专属海报二维码
    savePoster() {
        try {
            const isFileSaverSupported = !!new Blob();
            console.log(isFileSaverSupported);
            FileSaver.saveAs(this.posterDataUrl, 'poster.png');
        } catch (e) {
            alert('保存失败，请长按上图保存');
        }
    }

    // savePoster() {

    // }
    // 关闭弹窗
    closeDialog1() {
        this.outergVisible = false;
        // this.innerVisible = true;
    }
    closeDialog2() {
        this.innerVisible = false;
    }
    closeDialog3() {
        this.successVisible = false;
    }
}
</script>
<style lang="scss" scoped>
.container_m {
    // display: block;
    .contain_wrapper {
        .banner {
            height: 6.2rem;
            margin-top: 1rem;
            background: url('../../assets/img/partner/mobile/banner2.png') no-repeat;
            // background-position: 50%;
            background-size: cover;
            background-position-x: center;
            position: relative;
            .el-button {
                display: block;
                width: 2.4rem;
                height: 0.66rem;
                background: linear-gradient(90deg, rgba(53, 193, 251, 1) 23%, rgba(251, 65, 223, 1) 87%);
                border-radius: 0.1rem;
                border: 0;
                padding: 0;
                font-size: 0.3rem;
                font-weight: bold;
                color: rgba(255, 255, 255, 1);
                outline: none;
                position: absolute;
                bottom: 0.9rem;
                left: 50%;
                transform: translate(-50%, 0%);
                &:hover {
                    background: linear-gradient(90deg, rgba(53, 193, 251, 1) 23%, rgba(251, 65, 223, 1) 87%);
                    box-shadow: 0px 10px 29px 1px rgba(232, 78, 225, 0.4);
                }
            }
            .form_m1 {
                /deep/.el-dialog {
                    width: 6.3rem;
                    border-radius: 0.3rem;
                    height: 7.23rem;
                    margin: 0 !important;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    .el-dialog__header {
                        display: none;
                    }
                    .el-dialog__body {
                        padding: 0;
                        .dialogtitle {
                            font-size: 0.4rem;
                            font-weight: bold;
                            line-height: 0.6rem;
                            color: rgba(51, 51, 51, 1);
                            text-align: center;
                            padding-top: 0.49rem;
                            margin-bottom: 0.56rem;
                        }
                        .el-form {
                            width: 4.86rem;
                            // height: 102px;
                            margin: 0 auto;
                            .formNameOrPhone {
                                font-size: 0.28rem;
                                font-weight: 400;
                                color: rgba(40, 40, 40, 1);
                            }
                            .el-form-item__content {
                                margin-left: 0 !important;
                            }

                            .el-form-item:nth-child(2) {
                                margin-top: 0.23rem;
                                margin-bottom: 0.4rem;
                            }
                            .el-form-item:nth-child(4) {
                                margin-top: 0.24rem;
                                margin-bottom: 0.59rem;
                            }
                            .el-form-item {
                                .el-form-item__label {
                                    // padding-right: 21px;
                                }
                                .el-input {
                                    width: 4.86rem;
                                    height: 0.72rem;

                                    .el-input__inner {
                                        height: 0.72rem;
                                        width: 100%;
                                        // padding-left: 20px;
                                        background: rgba(245, 245, 245, 1);
                                        border-radius: 0.1rem;
                                        // border: none;
                                        border: 0.01rem solid transparent;
                                        padding-top: 0.2rem;
                                        padding-bottom: 0.2rem;
                                        line-height: 0.4rem;
                                    }
                                }
                                &.is-error {
                                    .el-form-item__content {
                                        .el-input__inner {
                                            background: rgba(245, 235, 233, 1);
                                            border: 1px solid rgba(230, 110, 87, 1) !important;
                                        }
                                    }
                                }
                            }
                        }
                        .next {
                            position: relative;
                            width: 4.86rem;
                            height: 0.72rem;
                            // background:rgba(149, 192, 250, 1);
                            border-radius: 0.1rem;
                            font-size: 0.28rem;
                            font-weight: 400;
                            color: rgba(255, 255, 255, 1);
                            bottom: 0rem;
                            background: rgba(0, 68, 255, 1);
                            // border: 0.01rem solid rgba(149, 192, 250, 1);
                            &:disabled {
                                background-color: rgba(149, 192, 250, 1);
                            }
                            &:hover {
                                background: rgba(22, 65, 220, 1);
                                box-shadow: none;
                                border: 0.01rem solid rgba(22, 65, 220, 1);
                            }
                        }
                        .closeDialog1 {
                            width: 0.5rem;
                            height: 0.5rem;
                            margin: 0 auto;
                            img {
                                width: 0.5rem;
                                height: 0.5rem;
                                margin-top: 1.1rem;
                            }
                        }
                    }
                }
                /deep/.el-input__inner {
                    &:focus {
                        border: 1px solid rgba(0, 68, 255, 1) !important;
                    }
                }
            }
        }
        .content {
            background: rgba(10, 16, 67, 1);
            .background {
                .recommend {
                    .recommend_title {
                        width: 3.02rem;
                        height: 1.21rem;
                        margin: 0 auto;
                        background: url('../../assets/img/partner/mobile/recommend_title2.png') no-repeat;
                        background-size: 100%;
                        background-position-y: 0.79rem;
                    }
                    .recommend_content {
                        width: 6.9rem;
                        height: 10.9rem;
                        margin: 0 auto;
                        background: url('../../assets/img/partner/mobile/recommend_content2.png') no-repeat;
                        background-size: 100%;
                        background-position-y: 0.5rem;
                    }
                }
                .partner {
                    .partner_title {
                        width: 3.46rem;
                        height: 1.42rem;
                        margin: 0 auto;
                        background: url('../../assets/img/partner/mobile/partner_title2.png') no-repeat;
                        background-size: 100%;
                        background-position-y: 1rem;
                    }
                    .partner_content {
                        width: 6.9rem;
                        height: 11.78rem;
                        margin: 0 auto;
                        background: url('../../assets/img/partner/mobile/partner_content2.png') no-repeat;
                        background-size: 100%;
                        background-position-y: 0.5rem;
                        position: relative;
                        .btns {
                            position: absolute;
                            width: 4.5rem;
                            height: 0.66rem;
                            margin: 0 auto;
                            left: 1.2rem;
                            bottom: 0.8rem;
                            .el-button:nth-child(1) {
                                width: 2rem;
                                height: 0.66rem;
                                background: linear-gradient(
                                    150deg,
                                    rgba(255, 131, 67, 1) 0%,
                                    rgba(255, 104, 62, 1) 100%
                                );
                                border-radius: 0.14rem;
                                padding: 0;
                                border: 0;
                                font-size: 0.28rem;
                                font-weight: 600;
                                color: rgba(255, 255, 255, 1);
                                text-align: center;
                                outline: none;
                                margin-right: 0.4rem;
                                box-sizing: border-box;
                                img {
                                    display: inline-block;
                                    width: 0.2rem;
                                    height: 0.18rem;
                                    margin-left: 0.09rem;
                                }
                            }
                            .el-button:nth-child(2) {
                                width: 2rem;
                                height: 0.66rem;
                                background: rgba(255, 255, 255, 1);
                                border: 1px solid rgba(234, 104, 66, 1);
                                border-radius: 0.14rem;
                                padding: 0;
                                font-size: 0.28rem;
                                font-weight: 600;
                                color: rgba(234, 103, 66, 1);
                                outline: none;
                                margin: 0;
                                box-sizing: border-box;
                            }
                            /deep/.el-dialog {
                                border-radius: 15px;
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                width: 3.2rem;
                                height: 3.2rem;
                                margin: 0 !important;
                                transform: translate(-50%, -50%);
                            }
                            /deep/.el-dialog__body {
                                width: 3.2rem;
                                height: 3.2rem;
                                padding: 0 !important;

                                img {
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            /deep/.el-dialog__header {
                                display: none;
                                .el-dialog__headerbtn i::before {
                                    content: '';
                                }
                            }
                            .el-button {
                                img {
                                    display: none;
                                }
                            }
                        }
                    }
                }
                .friends {
                    .friends_title {
                        width: 5.19rem;
                        height: 1.42rem;
                        margin: 0 auto;
                        background: url('../../assets/img/partner/mobile/frineds_title2.png') no-repeat;
                        background-size: 100%;
                        background-position-y: 1rem;
                    }
                    .friends_cloudserver {
                        width: 6.9rem;
                        height: 8.9rem;
                        margin: 0 auto;
                        background: url('../../assets/img/partner/mobile/friends_server2.png') no-repeat;
                        background-size: 100%;
                        background-position-y: 0.5rem;
                    }
                    .friendsApp {
                        width: 6.9rem;
                        height: 17.15rem;
                        margin: 0 auto;
                        margin-top: 0.3rem;
                        position: relative;
                        img {
                            width: 6.9rem;
                            height: 17.15rem;
                        }
                        .consult-code {
                            width: 2.01rem;
                            height: 2.01rem;
                            position: absolute;
                            bottom: 1.91rem;
                            left: 50%;
                            transform: translate(-50%, 0);
                        }
                        // background: url('../../assets/img/partner/mobile/friendsApp2.png') no-repeat;
                        // background-size: 100%;
                        // background-position-y: 0.3rem;
                        position: relative;
                        .swiper {
                            width: 5.7rem;
                            height: 3.6rem;
                            margin: 0 auto;
                            position: absolute;
                            top: 1.41rem;
                            left: 50%;
                            transform: translate(-50%, 0);

                            .swiperWrap {
                                // border: 1px solid red;
                                position: relative;
                                .swiper-slide {
                                    // border: 1px solid green;
                                    img {
                                        display: inline-block;
                                        width: 5.7rem;
                                        height: 3.6rem;
                                        margin: 0 auto;
                                        z-index: 1000;
                                        border-bottom: 1px solid rgba(200, 200, 200, 1);
                                    }
                                    .swiperTitle {
                                        font-size: 0.36rem;
                                        font-weight: 400;
                                        color: rgba(28, 28, 28, 1);
                                        display: inline-block;
                                        margin-top: 0.51rem;
                                        margin-left: 50%;
                                        transform: translate(-50%, 0);
                                    }
                                }
                            }
                            /deep/.swiper-pagination {
                                position: relative !important;
                                margin: 0 auto;
                                margin-top: 0.4rem;
                                .swiper-pagination-bullet {
                                    width: 0.12rem;
                                    height: 0.12rem;
                                    border-radius: 50%;
                                    margin-right: 0.14rem;
                                    &:nth-child(4) {
                                        margin-right: 0rem;
                                    }
                                }
                                .swiper-pagination-bullet-active {
                                    background: rgba(48, 52, 161, 1);
                                }
                            }
                        }
                    }
                }
                .usercaseTitle {
                    width: 3.22rem;
                    // height: 21px;
                    margin: 0 auto;
                    padding-top: 0.99rem;
                    padding-bottom: 0.5rem;
                    img {
                        width: 100%;
                    }
                }
                .usercase {
                    height: 11.6rem;
                    width: 6.9rem;
                    margin: 0 auto;
                    background: url('../../assets/img/nav/activity/mobile/onlineEdu.png') no-repeat;
                    background-position: center center;
                    background-size: cover;
                    position: relative;
                    .caseContent {
                        width: 100%;
                        height: 7.5rem;
                        background-color: #fff;
                        position: absolute;
                        top: 3.2rem;
                        /deep/ {
                            .swiper-container {
                                height: 7.9rem;
                                .swiper-wrapper {
                                    .swiper-slide {
                                        text-align: center;
                                        img {
                                            // position: absolute;
                                            width: 6.3rem;
                                            height: 7rem;
                                            // left: 0px;
                                            // top: 0px;
                                        }
                                    }
                                }
                            }

                            .swiper-pagination {
                                bottom: 30px;
                                background-color: red;
                                .swiper-pagination-bullet {
                                    width: 24px;
                                    height: 4px;
                                    border-radius: 0;
                                    background: rgba(214, 214, 214, 1);
                                    opacity: 1;
                                    margin: 0 6px;
                                }
                                .swiper-pagination-bullet-active {
                                    background: rgba(48, 52, 161, 1);
                                }
                            }
                        }
                        /deep/.swiper-pagination {
                            background: #fff;
                            bottom: 0px;
                        }
                        img {
                            display: inline-block;
                            width: 615px;
                            height: 352px;
                            position: absolute;
                            top: 10px;
                            left: 11px;
                        }

                        .srcoll-container {
                            overflow-x: auto;
                            height: 244px;
                            height: 100%;

                            .slide-container {
                                width: 2400px;
                                display: flex;
                            }
                        }
                    }
                }
                .details {
                    .activity_detail {
                        color: #fff;
                        .introduce {
                            font-size: 0.32rem;
                            font-weight: 600;
                            margin-top: 0.98rem;
                            margin-bottom: 0.48rem;
                            margin-left: 50%;
                            transform: translate(-50%, 0);
                            text-align: center;
                        }
                        .detail {
                            font-size: 0.22rem;
                            font-weight: 400;
                            color: rgba(179, 179, 179, 1);
                            width: 6.4rem;
                            margin-left: 0.6rem;
                            text-align: left;
                            span {
                                display: inline-block;
                                margin-bottom: 0.26rem;
                                line-height: 0.36rem;
                                &:nth-child(3) {
                                    margin-bottom: 1rem;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
.form_m2 {
    z-index: 20000 !important;
    /deep/.el-dialog {
        width: 6.3rem;
        height: auto;
        margin: 0 !important;
        border-radius: 0.3rem;
        box-shadow: 0px 0.1rem 0.29rem 0.01rem rgba(0, 0, 0, 0.1);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .el-dialog__header {
            display: none;
        }
        .el-dialog__body {
            padding: 0.59rem 0.72rem 0 0.72rem;
            position: relative;
            .dialogTitle2 {
                font-size: 0.4rem;
                color: rgba(51, 51, 51, 1);
                font-weight: bold;
                width: 2.5rem;
                height: 0.4rem;
                margin: 0 auto;
                margin-bottom: 0.39rem;
            }
            .el-tabs--card {
                .el-tabs__header {
                    width: 4.46rem;
                    height: 0.84rem;
                    margin: 0 auto;
                    margin-bottom: 0.4rem;
                    background: rgba(240, 240, 240, 1);
                    border-radius: 0.12rem;
                    padding: 0.04rem;
                    // border-bottom: 1px solid black;

                    .el-tabs__nav-wrap {
                        margin-bottom: 0;
                        height: 0.76rem;
                        // color: rgba(102, 102, 102, 1);
                        .el-tabs__nav-scroll {
                            height: 0.76rem;
                            .el-tabs__nav {
                                border: 0;
                                .el-tabs__item {
                                    width: 2.19rem;
                                    height: 0.76rem;
                                    text-align: center;
                                    font-weight: 400;
                                    color: rgba(102, 102, 102, 1);
                                    border-radius: 0.08rem;
                                    padding: 0;
                                }
                                .is-active {
                                    width: 2.19rem;
                                    height: 0.76rem;
                                    border: 0;
                                    text-align: center;
                                    // margin-top: 2px;
                                    font-size: 0.28rem;
                                    font-weight: bold;
                                    border-radius: 0.08rem;
                                    color: rgba(51, 51, 51, 1);
                                    background-color: #fff;
                                }
                            }
                        }
                    }
                }
                .el-tabs__content {
                    .shareurl {
                        #poster {
                            width: 4rem;
                            // height: 6.56rem;
                            margin: 0 auto;
                            margin-bottom: 0.4rem;

                            .poster-bg {
                                display: block;
                                width: 4rem;
                                // height: 6.56rem;
                                border-radius: 0.14rem;
                            }
                            .code {
                                width: 0.54rem;
                                height: 0.54rem;
                                position: absolute;
                                left: 0.52rem;
                                bottom: 0.06rem;
                            }
                        }
                        .save {
                            width: 2rem;
                            height: 0.66rem;
                            margin: 0 auto;
                            margin-bottom: 0.7rem;
                            .el-button {
                                width: 2rem;
                                height: 0.66rem;
                                background: linear-gradient(
                                    150deg,
                                    rgba(235, 124, 67, 1) 0%,
                                    rgba(234, 103, 66, 1) 100%
                                );
                                box-shadow: 0 0.08rem 0.2rem 0px rgba(235, 121, 67, 0.4);
                                border-radius: 0.1rem;
                                outline: 0;
                                border: 0;
                                padding: 0;
                                font-size: 0.28rem;
                                font-weight: 400;
                                color: rgba(255, 255, 255, 1);
                            }
                            .notIOS {
                                font-size: 0.28rem;
                                font-weight: 400;
                                color: rgba(51, 51, 51, 1);
                                text-align: center;
                            }
                        }
                        .closeDialog2 {
                            width: 0.5rem;
                            height: 0.5rem;
                            margin: 0 auto;
                            position: fixed;
                            left: 50%;
                            transform: translate(-50%, 0);
                            // top: 10.7rem;
                            top: 11.8rem;
                            img {
                                width: 0.5rem;
                                height: 0.5rem;
                            }
                        }
                    }

                    .materials {
                        .friendInfo {
                            width: 4.86rem;
                            margin: 0 auto;
                            .commonCol {
                                margin-bottom: 0.24rem;
                            }
                            .el-form-item {
                                width: 4.86rem;
                                height: 0.72rem;
                                border-radius: 0.1rem;
                                margin-bottom: 0.4rem !important;
                                background-color: rgba(245, 245, 245, 1);
                                // padding-left: 0.32rem;
                                .el-form-item__content {
                                    line-height: 0;
                                    margin-left: 0 !important;
                                }
                                &.is-error {
                                    margin-bottom: 6px;
                                    .el-form-item__content {
                                        // margin-bottom: 20px;
                                        .el-input__inner {
                                            background: rgba(245, 235, 233, 1);
                                            border: 1px solid rgba(230, 110, 87, 1) !important;
                                        }
                                    }
                                }
                                &:nth-child(8) {
                                    margin-bottom: 0.15rem !important;
                                }
                            }

                            /deep/.el-input__inner {
                                &:focus {
                                    border: 0.01rem solid rgba(0, 68, 255, 1) !important;
                                }
                            }
                            .el-form-item__error {
                                font-size: 0.22rem !important;
                            }
                            .el-form-item__content {
                                height: 0.72rem;
                            }
                            .el-form-item.is-required:not(.is-no-asterisk) > .el-form-item__label {
                                &::before {
                                    display: none;
                                }
                                &::after {
                                    content: '*';
                                    color: #f56c6c;
                                    margin-left: 1px;
                                }
                            }

                            .row2 {
                                width: 4.86rem;

                                margin: 0 auto;
                                .el-form-item__label {
                                    text-align: left !important;
                                }
                                /deep/.el-input__inner {
                                    &:focus {
                                        border: 1px solid rgba(0, 68, 255, 1) !important;
                                    }
                                }
                            }

                            .common {
                                width: 4.86rem;
                                height: 0.72rem;
                                // background: rgba(245, 245, 245, 1);
                                border-radius: 4px;
                                .el-input__inner {
                                    width: 4.86rem;
                                    height: 0.72rem;
                                    padding-right: 0;
                                    background: rgba(245, 245, 245, 1);
                                    border-radius: 0.1rem;
                                    border: rgba(245, 245, 245, 1);
                                    border: 0.01rem solid transparent;
                                    padding-left: 0.32rem;
                                    line-height: 0.4rem;
                                    padding-top: 0.2rem;
                                    padding-bottom: 0.2rem;
                                }
                            }
                            .wechatOrPhone {
                                .choice {
                                    font-size: 0.28rem;
                                    font-weight: 400;
                                    color: rgba(40, 40, 40, 1);
                                    position: relative;
                                    .el-form-item {
                                        width: 0.8rem;
                                        height: 0.4rem;
                                        border: 0;
                                        margin-bottom: 0.22rem !important;
                                        .el-form-item__content {
                                            .el-select {
                                                position: relative;
                                                .el-input {
                                                    .el-input__inner {
                                                        padding: 0 !important;
                                                        border: 0 !important;
                                                        &:focus {
                                                            border: none !important;
                                                        }
                                                    }
                                                    .el-input__suffix {
                                                        display: none;
                                                        right: -0.17rem;
                                                        .el-select__caret {
                                                            color: rgba(40, 40, 40, 1);
                                                        }
                                                    }
                                                }
                                                .el-select-dropdown {
                                                    position: absolute !important;
                                                    left: 0 !important;
                                                    top: 0.3rem !important;
                                                    // margin-left: -0.72rem !important;
                                                    // margin-top: -2.1rem !important;
                                                    width: 1.6rem;
                                                    // height: 1.64rem;
                                                    .el-select-dropdown__list {
                                                        padding: 0.2rem 0;
                                                        text-align: center;
                                                    }
                                                    .popper__arrow {
                                                        left: 35px !important;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    .arrowdown {
                                        width: 0.15rem;
                                        height: 0.09rem;
                                        position: absolute;
                                        left: 0.72rem;
                                        top: 0.2rem;
                                        img {
                                            width: 0.15rem;
                                            height: 0.09rem;
                                        }
                                    }
                                }
                                // .choice {
                                //     height: 0.28rem;
                                //     margin-bottom: 0.22rem;
                                //     .emailForm {
                                //         background-color: #fff;
                                //         height: 0.28rem;
                                //         margin-bottom: 0rem !important;
                                //         .el-form-item__content {
                                //             margin-left: 0 !important;
                                //             .el-select {
                                //                 position: relative;
                                //                 .el-select-dropdown {
                                //                     position: absolute;
                                //                     width: 1.6rem !important;
                                //                     height: 1.84rem !important;
                                //                     background: rgba(255, 255, 255, 1);
                                //                     box-shadow: 0 0.05rem 0.2rem 0 rgba(0, 0, 0, 0.1) !important;
                                //                     border-radius: 0.06rem !important;
                                //                     left: 1rem !important;
                                //                     bottom: 0 !important;
                                //                     border: none;
                                //                     margin-left: -24px !important;
                                //                     margin-top: 0px !important;

                                //                     .el-select-dropdown__list {
                                //                         padding: 14px 0 10px 0;
                                //                     }
                                //                     .el-scrollbar__bar {
                                //                         display: none;
                                //                     }
                                //                     .el-select-dropdown__item {
                                //                         width: 80px;
                                //                         height: 34px;
                                //                         text-align: center;
                                //                         &:hover {
                                //                             background: rgba(240, 243, 250, 1);
                                //                             color: rgba(23, 66, 245, 1);
                                //                         }
                                //                     }
                                //                     .el-select-dropdown__item.selected {
                                //                         color: rgba(23, 66, 245, 1);
                                //                     }
                                //                 }
                                //                 .el-input {
                                //                     .el-input__inner {
                                //                         width: 0.56rem;
                                //                         height: 0.28rem;
                                //                         padding: 0;
                                //                         border: none;
                                //                     }
                                //                     .el-input__suffix {
                                //                         right: -17px;
                                //                         top: 13px;
                                //                         .el-select__caret {
                                //                             color: #313131;
                                //                         }
                                //                     }
                                //                 }
                                //             }
                                //         }
                                //     }
                                // }
                                .choiceValue {
                                    width: 4.86rem;
                                    height: 0.72rem;
                                    background: rgba(245, 245, 245, 1);
                                    border-radius: 0.1rem;
                                    margin-top: 0.3rem;
                                    .el-form-item {
                                        height: 0.72rem;
                                        margin-bottom: 0px !important;
                                        /deep/.el-input__inner {
                                            &:focus {
                                                border: 1px solid rgba(0, 68, 255, 1) !important;
                                            }
                                        }
                                        .el-form-item__content {
                                            height: 0.72rem;
                                            margin-left: 0 !important;
                                            background: rgba(245, 245, 245, 1);
                                            border-radius: 0.1rem;
                                            .el-input__inner {
                                                background: rgba(245, 245, 245, 1);
                                                border-radius: 0.1rem;
                                                border: 1px solid transparent;
                                                line-height: 0.4rem;
                                                padding-top: 0.2rem;
                                                padding-bottom: 0.2rem;
                                            }
                                        }
                                    }
                                }
                            }
                            .el-form-item__error {
                                font-size: 0.22rem !important;
                            }
                        }
                        .tijiao {
                            display: block;
                            width: 4.86rem;
                            height: 0.72rem;
                            margin: 0 auto;
                            border-radius: 0.1rem;
                            font-size: 0.28rem;
                            font-weight: 400;
                            color: rgba(255, 255, 255, 1);
                            margin-top: 0.6rem;
                            margin-bottom: 0.8rem;
                            background: rgba(0, 68, 255, 1);
                            outline: none;
                            border: 0;
                            &:disabled {
                                background-color: rgba(149, 192, 250, 1);
                            }
                            &:hover {
                                background: rgba(22, 65, 220, 1);
                                box-shadow: none;
                            }
                        }
                        .closeDialog22 {
                            width: 0.5rem;
                            height: 0.5rem;
                            margin: 0 auto;
                            position: fixed;
                            left: 50%;
                            transform: translate(-50%, 0);
                            // top: 10.7rem;
                            bottom: -0.8rem;
                            img {
                                width: 0.5rem;
                                height: 0.5rem;
                            }
                        }
                    }
                    .el-tab-pane {
                        .partnerLink {
                            width: 500px;
                            height: 40px;
                            line-height: 40px;
                            margin: 0 auto;
                            background: rgba(240, 243, 250, 1);
                            border-radius: 4px;
                            font-size: 14px;
                            padding-left: 30px;
                            overflow: hidden;
                            .link {
                                font-weight: 400;
                                text-align: left;
                                color: rgba(153, 153, 153, 1);
                            }
                            .linkContent {
                                color: rgba(102, 102, 102, 1);
                            }
                        }
                        .copyurl {
                            width: 140px;
                            display: block;
                            height: 40px;
                            margin: 0 auto;
                            background: rgba(0, 68, 255, 1);
                            border-radius: 6px;
                            font-size: 14px;
                            font-weight: 400;
                            color: rgba(255, 255, 255, 1);
                            border: 0;
                            margin-top: 40px;
                            margin-bottom: 50px;
                            outline: none;
                            padding: 13px 0 13px 0;
                            &:hover {
                                box-shadow: none;
                                background: rgba(22, 65, 220, 1);
                            }
                            &:active {
                                background-color: rgba(110, 220, 209, 1);
                            }
                        }
                        .copyurl.is-success {
                            width: 170px;
                            background: rgba(110, 220, 209, 1);
                        }
                    }
                }
            }
            .el-tabs--card > .el-tabs__header {
                border-bottom: 0 !important;
            }
            .el-tabs--card > .el-tabs__header .el-tabs__item {
                border-left: 0 !important;
            }
        }
    }
}
.form_m3 {
    /deep/.el-dialog {
        width: 6.3rem;
        height: 6.98rem;
        margin: 0 auto;
        margin: 0 !important;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 0.3rem;
        .el-dialog__header {
            display: none;
        }
        .el-dialog__body {
            padding: 0.6rem 0 0.8rem 0;
            .success {
                width: 1rem;
                height: 1rem;
                margin: 0 auto;
                margin-bottom: 0.4rem;
                img {
                    width: 1rem;
                    height: 1rem;
                }
            }
            .consultText {
                width: 4.8rem;
                margin: 0 auto;
                font-size: 0.4rem;
                text-align: center;
                font-weight: bold;
                color: rgba(51, 51, 51, 1);
                line-height: 0.6rem;
            }
            .consultCode {
                width: 2.78rem;
                height: 2.78rem;
                margin: 0 auto;
                margin-bottom: 0.8rem;
                margin-top: 0.2rem;
                img {
                    width: 2.78rem;
                    height: 2.78rem;
                }
            }
            .closeDialog3 {
                width: 0.5rem;
                height: 0.5rem;
                margin: 0 auto;
                img {
                    width: 0.5rem;
                    height: 0.5rem;
                    margin-top: 0.3rem;
                }
            }
        }
    }
}
</style>
