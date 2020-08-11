<template>
    <div class="container_pc">
        <div class="contain_wrapper">
            <div class="banner">
                <div class="plan"></div>
                <el-button type="text" @click="outergVisible = true">
                    立即推荐
                </el-button>
                <!-- 推荐表单start -->
                <el-dialog title="" :visible.sync="outergVisible" class="form1">
                    <!-- 被邀请表单弹窗 -->
                    <el-dialog class="form2" :visible.sync="innerVisible" append-to-body>
                        <el-dialog class="form3" :visible.sync="successVisible" append-to-body>
                            <div class="consult">
                                <img src="../../assets/img/partner/pc/consult2.png" alt="" />
                            </div>
                            <div class="success">
                                <img src="../../assets/img/partner/pc/success2.png" alt="" />
                                <span>提交成功，您可添加工作人员咨询进展</span>
                            </div>
                        </el-dialog>
                        <div class="dialogTitle2">
                            选择邀请方式
                        </div>
                        <el-tabs v-model="activeName" type="card">
                            <el-tab-pane label="分享专属链接发给好友" name="first" class="shareurl">
                                <div class="partnerLink">
                                    <span class="link">链接</span>
                                    <span class="linkContent">{{ shareUrl }}</span>
                                </div>
                                <el-button :class="['copyurl', copyState && 'is-success']" @click="copyShareUrl">{{
                                    copyState ? '复制成功，快去分享吧!' : '复制专属链接'
                                }}</el-button>
                            </el-tab-pane>
                            <el-tab-pane label="填写好友资料" name="second" class="materials">
                                <el-form
                                    ref="friendsData"
                                    :model="friendsForm"
                                    :rules="rules"
                                    label-width="55px"
                                    class="friendInfo"
                                >
                                    <div class="row1">
                                        <div class="col1">
                                            <el-form-item label="姓名" prop="Name">
                                                <el-input
                                                    v-model="friendsForm.Name"
                                                    placeholder="请输入好友姓名"
                                                    class="friendsName common"
                                                ></el-input>
                                            </el-form-item>
                                        </div>
                                        <div class="col2">
                                            <el-form-item label="电话" prop="Phone">
                                                <el-input
                                                    v-model="friendsForm.Phone"
                                                    placeholder="请输入好友电话"
                                                    maxlength="11"
                                                    class="friendsPhone common"
                                                ></el-input>
                                            </el-form-item>
                                        </div>
                                    </div>
                                    <div class="row2">
                                        <div class="col3">
                                            <el-form-item label="公司" prop="company">
                                                <el-input
                                                    v-model="friendsForm.company"
                                                    placeholder="请输入好友公司"
                                                    class="friendsCompany common"
                                                ></el-input>
                                            </el-form-item>
                                        </div>
                                        <div class="col4">
                                            <el-form-item label="城市" prop="city">
                                                <el-input
                                                    v-model="friendsForm.city"
                                                    placeholder="请输入好友城市"
                                                    class="friendsCity common"
                                                ></el-input>
                                            </el-form-item>
                                        </div>
                                    </div>
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
                                            <!-- <div class="arrowupIcon">
                                                        <img src="../../assets/img/partner/pc/icon.png" alt="" />
                                                    </div> -->
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
                                <el-button
                                    type="submit"
                                    class="tijiao"
                                    :disabled="!Submit"
                                    @click="refer('friendsData')"
                                >
                                    提交
                                </el-button>
                            </el-tab-pane>
                        </el-tabs>
                    </el-dialog>
                    <!-- 邀请表单弹窗 -->
                    <div class="dialogtitle">
                        填写您的信息，方便联系您发放奖品
                    </div>
                    <el-form
                        ref="formData"
                        :model="inviteForm"
                        :rules="rules"
                        label-width="49px"
                        hide-required-asterisk="true"
                    >
                        <el-form-item label="姓名" prop="name">
                            <el-input v-model="inviteForm.name" placeholder="请输入您的姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="电话" prop="phone">
                            <el-input v-model="inviteForm.phone" placeholder="请输入您的电话" maxlength="11"></el-input>
                        </el-form-item>
                    </el-form>
                    <!-- <el-button type="submit" class="next" :disabled="!canSubmit" @click="joinNext('formData');"
                                >{{ nextStep }}
                            </el-button> -->
                    <el-button type="submit" class="next" :disabled="!canSubmit" @click="joinNext('formData')"
                        >{{ nextStep }}
                    </el-button>
                </el-dialog>
                <!-- 选择邀请方式弹窗end -->
                <!-- 3.提交成功 start  -->
                <!-- <el-dialog title="" :visible.sync="dialogVisible" class="form3">
                            <div class="consult">
                                <img src="../../assets/img/partner/pc/consult2.png" alt="" />
                            </div>
                            <div class="success">
                                <img src="../../assets/img/partner/pc/success2.png" alt="" />
                                <span>提交成功，您可添加工作人员咨询进展</span>
                            </div>
                        </el-dialog> -->
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
                                <el-button class="isCode"
                                    >扫码咨询
                                    <img src="../../assets/img/partner/pc/xcode2.png" class="xcode" alt="" />
                                </el-button>
                                <!-- <div class="dis">
                                        这里是二维码
                                    </div> -->
                            </div>
                        </div>
                    </div>
                    <!-- 朋友推荐 -->
                    <div class="friends">
                        <div class="friends_title"></div>
                        <div class="friends_cloudserver"></div>
                        <div class="friendsApp"></div>
                    </div>
                    <!-- 客户案例 -->
                    <div class="usercaseTitle">
                        <!-- 客户案例 -->
                        <img src="../../assets/img/nav/activity/usercase2.png" alt="" />
                    </div>
                    <div class="usercase">
                        <div class="title">
                            <img class="Client" src="../../assets/img/nav/activity/client2.png" alt="" />
                        </div>
                        <div class="caseContent">
                            <div v-swiper:mySwiper="swiperOption">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <img src="../../assets/img/nav/activity/clientPage2x.png" />
                                    </div>
                                    <div class="swiper-slide">
                                        <img src="../../assets/img/nav/activity/clientPage2xx.png" />
                                    </div>
                                </div>
                                <div class="swiper-pagination1"></div>
                            </div>
                            <div class="slide"></div>
                            <div class="slide2"></div>
                        </div>
                    </div>
                    <!-- 活动细则 -->
                    <!-- <div class="details">
                                <div class="activity_detail">
                                    <div class="introduce">活动细则及说明</div>
                                    <div class="detail">
                                        1.推荐的商机，仅针对即构PaaS产品<br />
                                        2.推荐的商机需为新线索，若是即构已有商机或重复商机，则不能领取奖励<br />
                                        3.商机有效，指被推荐的商机用户由即构商务在30天内判定为有效客户；商机成单，指被推荐的商机客户成功签约并产生消费<br />
                                        4.符合活动规则的奖励，将于7个工作日内发放<br />
                                        5.本活动最终解释权归即构科技所有<br />
                                    </div>
                                </div>
                            </div> -->
                </div>
                <!-- 活动细则 -->
                <div class="details">
                    <div class="activity_detail">
                        <div class="introduce">活动细则及说明</div>
                        <div class="detail">
                            1.即构PaaS音视频云服务，覆盖互动视频直播、实时视频、实时语音等产品和白板、文件共享、IM等插件<br />
                            2.现金奖励将于好友签约上线后的1个月内发放；单个好友累计消费达到5万元，加赠金额将于第4个月月初发放；年底惊喜大礼将于次年1月发放<br />
                            3.本活动最终解释权归即构科技所有<br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import axios from 'axios';
import copy from 'copy-to-clipboard';
// import axios from 'axios';
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
        // PartnerContainer,
        // PartnerContainerMobile,
    },
})
export default class partner extends Vue {
    $message: any;
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

    swiperOption = {
        pagination: {
            // loop: true,
            // initialSlide: 0,
            grabCursor: true,
            el: '.swiper-pagination1',
            clickable: true,
            type: 'bullets',
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
    $route: any;
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
                contact: 'wechat',
            };
            (this.$refs.friendsData as any).clearValidate();
        }
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
                        this.submitting = false;
                        // alert('下一步');
                        const invitedId = response.data.data[0].id;
                        this.invitedId = invitedId;
                        this.shareUrl = `${location.origin}/activity?invitedId=${invitedId}`;
                        console.log(invitedId);

                        this.innerVisible = true;
                        this.outergVisible = false;
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
}
</script>
<style lang="scss" scoped>
.container_pc {
    .contain_wrapper {
        .banner {
            height: 640px;
            margin-top: 68px;
            background: url('../../assets/img/partner/pc/banner.png') no-repeat;
            // background-position: 50%;
            background-size: auto 100%;
            background-position-x: center;
            background-color: #090d19;
            position: relative;
            .plan {
                width: 800px;
                height: 422px;
                position: relative;
                margin: 0 auto;
                z-index: 1000;
                background: url('../../assets/img/partner/pc/title2x.png') no-repeat;
                background-position-y: 92px;
                background-position-x: center;
                background-size: 100%;
            }
            .el-button {
                display: block;
                width: 210px;
                height: 60px;
                background: linear-gradient(90deg, rgba(53, 193, 251, 1) 23%, rgba(251, 65, 223, 1) 87%);
                border-radius: 10px;
                margin: 0 auto;
                border: 0;
                padding: 0;
                font-size: 24px;
                font-weight: bold;
                color: rgba(255, 255, 255, 1);
                margin-top: 58px;
                outline: none;
                &:hover {
                    background: linear-gradient(90deg, rgba(53, 193, 251, 1) 23%, rgba(251, 65, 223, 1) 87%);
                    box-shadow: 0px 10px 29px 1px rgba(232, 78, 225, 0.4);
                }
            }
            .form1 {
                // display: none;
                // margin-top: 19vh;
                /deep/.el-dialog {
                    width: 660px;
                    border-radius: 10px;
                    height: 340px;
                    margin: 0 !important;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    .el-dialog__header {
                    }
                    .el-dialog__body {
                        padding: 0;
                        .dialogtitle {
                            font-size: 20px;
                            font-weight: bold;
                            color: rgba(51, 51, 51, 1);
                            text-align: center;
                            margin-top: 19px;
                            margin-bottom: 40px;
                        }
                        .el-form {
                            width: 432px;
                            // height: 102px;
                            margin: 0 auto;

                            .el-form-item:nth-child(1) {
                                margin-bottom: 30px;
                            }
                            .el-form-item:nth-child(2) {
                                margin-bottom: 40px;
                            }
                            .el-form-item {
                                .el-form-item__label {
                                    padding-right: 21px;
                                }
                                .el-input {
                                    width: 383px;
                                    height: 36px;
                                    .el-input__inner {
                                        height: 36px;
                                        width: 100%;
                                        padding-left: 20px;
                                        background: rgba(245, 245, 245, 1);
                                        border-radius: 6px;
                                        // border: none;
                                        border: 1px solid transparent;
                                        padding-top: 6px;
                                        padding-bottom: 6px;
                                        line-height: 22px;
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
                            width: 140px;
                            height: 40px;
                            // background: rgba(149, 192, 250, 1);
                            border-radius: 6px;
                            font-size: 14px;
                            font-weight: 400;
                            color: rgba(255, 255, 255, 1);
                            margin-top: 46px;
                            background: rgba(0, 68, 255, 1);
                            &:disabled {
                                background-color: rgba(149, 192, 250, 1);
                            }
                            &:hover {
                                background: rgba(22, 65, 220, 1);
                                box-shadow: none;
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
            background-color: #080d3b;
            z-index: 20;
            .background {
                height: 2940px;
                // 3136px
                background: url('../../assets/img/partner/pc/BAC2x.png') no-repeat center;
                background-size: auto 100%;
                z-index: 1000;
                .recommend {
                    .recommend_title {
                        width: 322px;
                        height: 121px;
                        margin: 0 auto;
                        background: url('../../assets/img/partner/pc/recommend_title2x.png') no-repeat;
                        background-size: 100%;
                        background-position-y: 79px;
                    }
                    .recommend_content {
                        width: 1200px;
                        height: 376px;
                        margin: 0 auto;
                        background: url('../../assets/img/partner/pc/recommend_content2.png') no-repeat;
                        background-size: 100%;
                        background-position-y: 50px;
                    }
                }
                .partner {
                    .partner_title {
                        width: 366px;
                        height: 121px;
                        margin: 0 auto;
                        background: url('../../assets/img/partner/pc/partner_title2x.png') no-repeat;
                        background-size: 100%;
                        background-position-y: 79px;
                    }
                    .partner_content {
                        width: 1200px;
                        height: 432px;
                        margin: 0 auto;
                        background: url('../../assets/img/partner/pc/partner_content2.png') no-repeat;
                        background-size: 100%;
                        background-position-y: 50px;
                        border-radius: 10px;
                        position: relative;
                        .btns {
                            position: absolute;
                            // width: 340px;
                            width: 345px;
                            height: 50px;
                            margin: 0 auto;
                            top: 332px;
                            left: 430px;
                            .el-button:nth-child(1) {
                                width: 160px;
                                height: 50px;
                                background: linear-gradient(
                                    150deg,
                                    rgba(255, 131, 67, 1) 0%,
                                    rgba(255, 104, 62, 1) 100%
                                );
                                border-radius: 10px;
                                padding: 0;
                                border: 0;
                                font-size: 20px;
                                font-weight: 600;
                                color: rgba(255, 255, 255, 1);
                                line-height: 34px;
                                text-align: center;
                                outline: none;
                                margin-right: 34px;
                                box-sizing: border-box;
                                &:hover {
                                    background: linear-gradient(
                                        150deg,
                                        rgba(255, 131, 67, 1) 0%,
                                        rgba(255, 104, 62, 1) 100%
                                    );
                                    box-shadow: 0px 6px 19px 1px rgba(234, 107, 66, 0.4);
                                }
                                img {
                                    margin-left: 8px;
                                }
                            }
                            .el-button:nth-child(2) {
                                width: 140px;
                                height: 50px;
                                background: rgba(255, 255, 255, 1);
                                border: 1px solid rgba(234, 104, 66, 1);
                                border-radius: 10px;
                                padding: 0;
                                font-size: 20px;
                                font-weight: 600;
                                color: rgba(234, 103, 66, 1);
                                line-height: 34px;
                                outline: none;
                                margin: 0;
                                box-sizing: border-box;
                                // .dis {
                                //     width: 100px;
                                //     height: 100px;
                                //     background-color: red;
                                //     display: none;
                                // }
                                // &:hover {
                                //     .dis {
                                //         width: 100px;
                                //         height: 100px;
                                //         background-color: red;
                                //         display: block;
                                //     }
                                // }
                            }
                            .isCode {
                                position: relative;
                                .xcode {
                                    position: absolute;
                                    top: -142px;
                                    left: -6px;
                                    width: 150px;
                                    height: 156px;
                                    display: none;
                                }
                                &:hover {
                                    .xcode {
                                        display: block;
                                        // box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.06);
                                        z-index: 1000;
                                    }
                                }
                            }
                        }
                    }
                }
                .friends {
                    .friends_title {
                        width: 539px;
                        height: 121px;
                        margin: 0 auto;
                        background: url('../../assets/img/partner/pc/frineds_title2x.png') no-repeat;
                        background-size: 100%;
                        background-position-y: 79px;
                    }
                    .friends_cloudserver {
                        width: 1200px;
                        height: 370px;
                        margin: 0 auto;
                        background: url('../../assets/img/partner/pc/friends_server2x.png') no-repeat;
                        background-size: 100%;
                        background-position-y: 50px;
                    }
                    .friendsApp {
                        width: 1200px;
                        height: 722px;
                        margin: 0 auto;
                        background: url('../../assets/img/partner/pc/friendsApp2.png') no-repeat;
                        background-size: 100%;
                        background-position-y: 20px;
                    }
                }
                .usercaseTitle {
                    width: 322px;
                    height: 171px;
                    vertical-align: middle;
                    text-align: center;
                    margin: 0 auto;
                    img {
                        width: 322px;
                        height: 42px;
                        position: relative;
                        // left: 50%;
                        top: 79px;
                    }
                }
                .usercase {
                    // 客户案例
                    width: 1200px;
                    height: 460px;
                    margin: 0 auto;
                    .title {
                        height: 70px;
                        .Client {
                            width: 1200px;
                            height: 70px;
                        }
                    }
                    .caseContent {
                        height: 390px;
                        background-color: #fff;
                        position: relative;
                        border-radius: 0px 0px 10px 10px;
                        /deep/ {
                            .swiper-container {
                                height: 390px;
                            }

                            .swiper-pagination1 {
                                bottom: 41px;
                                position: absolute;
                                text-align: center;

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
                        img {
                            display: inline-block;
                            width: 1038px;
                            height: 244px;
                            position: absolute;
                            top: 50px;
                            left: 81px;
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
                // .details {
                //     width: 100%;
                //     height: 305px;
                //     background: #080d3b;
                //     margin-top: 89px;
                //     .activity_detail {
                //         width: 1200px;
                //         height: 305px;
                //         color: #fff;
                //         margin: 0 auto;
                //         padding-top: 10px;
                //         .introduce {
                //             font-size: 22px;
                //             font-weight: 600;
                //             float: left;
                //             margin-left: 90px;
                //         }
                //         .detail {
                //             width: 851px;
                //             font-size: 13px;
                //             font-weight: 400;
                //             line-height: 24px;
                //             color: #fff;
                //             opacity: 0.8;
                //             margin-left: 300px;
                //         }
                //     }
                // }
            }
            .details {
                width: 100%;
                height: 222px;
                background: #080d3b;
                // margin-top: 89px;
                .activity_detail {
                    width: 1200px;
                    height: 222px;
                    color: #fff;
                    margin: 0 auto;
                    padding-top: 10px;
                    .introduce {
                        font-size: 22px;
                        font-weight: 600;
                        float: left;
                        margin-left: 90px;
                    }
                    .detail {
                        width: 851px;
                        font-size: 13px;
                        font-weight: 400;
                        line-height: 24px;
                        color: #fff;
                        opacity: 0.8;
                        margin-left: 300px;
                    }
                }
            }
        }
    }
}
.form2 {
    // display: none;
    // margin-top: 19vh;

    /deep/.el-dialog {
        width: 660px;
        border-radius: 10px;
        // height: 340px;
        margin: 0 !important;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .el-dialog__header {
        }
        .el-dialog__body {
            padding: 0;
            .dialogTitle2 {
                font-size: 20px;
                font-weight: bold;
                color: rgba(51, 51, 51, 1);
                text-align: center;
                margin-top: 19px;
                margin-bottom: 30px;
            }
            .el-tabs--card {
                .el-tabs__header {
                    width: 362px;
                    height: 42px;
                    margin: 0 auto;
                    margin-bottom: 30px;
                    background: rgba(240, 240, 240, 1);
                    border-radius: 6px;
                    // border-bottom: 1px solid black;

                    .el-tabs__nav-wrap {
                        margin-bottom: 0;
                        height: 42px;
                        // color: rgba(102, 102, 102, 1);
                        .el-tabs__nav-scroll {
                            height: 42px;
                            padding: 2px;
                            .el-tabs__nav {
                                border: 0;
                                .el-tabs__item {
                                    width: 178px;
                                    text-align: center;
                                    font-weight: 400;
                                    color: rgba(102, 102, 102, 1);
                                    border-radius: 4px;
                                }
                                .is-active {
                                    width: 180px;
                                    height: 38px;
                                    border: 0;
                                    // margin-top: 2px;
                                    font-size: 14px;
                                    font-weight: bold;
                                    color: rgba(51, 51, 51, 1);
                                    background-color: #fff;
                                }
                            }
                        }
                    }
                }
                .el-tabs__content {
                    .materials {
                        .friendInfo {
                            width: 540px;
                            // height: 148px;
                            margin: 0 auto;
                            .row1 {
                                width: 540px;
                                // height: 36px;
                                margin: 0 auto;
                                margin-bottom: 20px;
                                .el-form-item__label {
                                    text-align: left !important;
                                }
                                /deep/.el-input__inner {
                                    &:focus {
                                        border: 1px solid rgba(0, 68, 255, 1) !important;
                                    }
                                }
                                .el-form-item {
                                    margin-bottom: 0;
                                    .el-form-item__content {
                                        margin-bottom: 0 !important;
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
                                }
                                .el-form-item__error {
                                    font-size: 12px !important;
                                }
                                .col1 {
                                    height: 36px;
                                    display: inline-block;
                                    // float: left;
                                    margin-right: 16px;
                                    .el-form-item__content {
                                        height: 36px;
                                        margin-bottom: 20px;
                                    }
                                }
                                .col2 {
                                    // height: 36px;
                                    display: inline-block;
                                    // float: left;
                                    .el-form-item__content {
                                        height: 36px;
                                        margin-bottom: 20px;
                                    }
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
                            }
                            .row2 {
                                width: 540px;
                                height: 36px;
                                margin: 0 auto;
                                margin-bottom: 20px;
                                .el-form-item__label {
                                    text-align: left !important;
                                }
                                /deep/.el-input__inner {
                                    &:focus {
                                        border: 1px solid rgba(0, 68, 255, 1) !important;
                                    }
                                }
                                .col3 {
                                    height: 36px;
                                    float: left;
                                    margin-right: 20px;
                                }
                                .col4 {
                                    height: 36px;
                                    float: left;
                                }
                            }
                            .el-form-item__label {
                                width: 50px !important;
                                height: 36px;
                                padding-right: 10px;
                            }
                            .el-form-item {
                                // width: 260px;
                                // height: 36px;
                                margin-bottom: 20px;
                                .el-form-item__content {
                                    margin-left: 50px !important;
                                }
                            }
                            .common {
                                width: 200px;
                                height: 36px;
                                // background: rgba(245, 245, 245, 1);
                                border-radius: 4px;
                                .el-input__inner {
                                    width: 200px;
                                    height: 36px;
                                    background: rgba(245, 245, 245, 1);
                                    border-radius: 4px;
                                    border: rgba(245, 245, 245, 1);
                                    border: 1px solid transparent;
                                    padding-top: 6px;
                                    padding-bottom: 6px;
                                    line-height: 22px;
                                }
                            }
                            .wechatOrPhone {
                                height: 36px;
                                // margin-bottom: 40px;
                                .choice {
                                    width: 50px;
                                    height: 36px;
                                    border: none;
                                    float: left;
                                    position: relative;
                                    .emailForm {
                                        .el-form-item__content {
                                            width: 50px;
                                            height: 36px;
                                            margin-left: 0 !important;
                                            .el-select {
                                                position: relative;
                                                // .is-focus {
                                                //     position: relative;
                                                // }
                                                .el-select-dropdown {
                                                    position: absolute;
                                                    width: 80px !important;
                                                    height: 92px !important;
                                                    background: rgba(255, 255, 255, 1);
                                                    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.1) !important;
                                                    border-radius: 6px !important;
                                                    left: 62px !important;
                                                    top: 324px !important;
                                                    border: none;
                                                    margin-left: -24px !important;
                                                    margin-top: 0px !important;

                                                    .el-select-dropdown__list {
                                                        padding: 10px 0 10px 0;
                                                    }
                                                    .el-scrollbar__bar {
                                                        display: none;
                                                    }
                                                    .el-select-dropdown__item {
                                                        width: 80px;
                                                        height: 34px;
                                                        text-align: center;
                                                        &:hover {
                                                            background: rgba(240, 243, 250, 1);
                                                            color: rgba(23, 66, 245, 1);
                                                        }
                                                    }
                                                    .el-select-dropdown__item.selected {
                                                        color: rgba(23, 66, 245, 1);
                                                        font-weight: 400;
                                                    }
                                                }
                                                .el-input {
                                                    .el-input__inner {
                                                        width: 50px;
                                                        height: 36px;
                                                        padding: 0;
                                                        border: none;
                                                    }
                                                    .el-input__suffix {
                                                        // top: 31px;
                                                        right: 0px;
                                                        .el-select__caret {
                                                            color: #313131;
                                                        }
                                                        // .el-icon-arrow-up {
                                                        //     // display: none;
                                                        //     width: 8px;
                                                        //     height: 6px;
                                                        //     &:before {
                                                        //         width: 8px;
                                                        //         height: 6px;
                                                        //         content: url('../../assets/img/partner/pc/icon.png') 8px
                                                        //             6px;
                                                        //     }
                                                        // }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    // .arrowupIcon {
                                    //     width: 8px;
                                    //     height: 6px;
                                    //     position: absolute;
                                    //     top: 16px;
                                    //     left: 31px;
                                    //     transition: transform 0.3s;
                                    //     transform: rotate(180deg);
                                    //     img {
                                    //         display: block;
                                    //         width: 8px;
                                    //         height: 6px;
                                    //     }
                                    //     &:active {
                                    //         transform: rotate(0deg);
                                    //     }
                                    // }
                                }
                                .choiceValue {
                                    float: left;
                                    width: 470px;
                                    height: 36px;
                                    background: rgba(245, 245, 245, 1);
                                    border-radius: 4px;
                                    .el-form-item {
                                        height: 36px;
                                        margin-bottom: 0px !important;
                                        /deep/.el-input__inner {
                                            &:focus {
                                                border: 1px solid rgba(0, 68, 255, 1) !important;
                                            }
                                        }
                                        .el-form-item__content {
                                            height: 36px;
                                            margin-left: 0 !important;
                                            background: rgba(245, 245, 245, 1);
                                            border-radius: 4px;
                                            .el-input__inner {
                                                background: rgba(245, 245, 245, 1);
                                                border-radius: 4px;
                                                border: 0;
                                                border: 1px solid transparent;
                                                padding-top: 6px;
                                                padding-bottom: 6px;
                                                line-height: 22px;
                                            }
                                        }
                                    }
                                }
                            }
                            .el-form-item__error {
                                font-size: 12px !important;
                            }
                        }
                        .tijiao {
                            display: block;
                            width: 140px;
                            height: 40px;
                            margin: 0 auto;
                            border-radius: 6px;
                            font-size: 14px;
                            font-weight: 400;
                            color: rgba(255, 255, 255, 1);
                            margin-top: 40px;
                            margin-bottom: 43px;
                            background: rgba(0, 68, 255, 1);
                            border: none;
                            &:disabled {
                                background-color: rgba(149, 192, 250, 1);
                            }
                            &:hover {
                                background: rgba(22, 65, 220, 1);
                                box-shadow: none;
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
                .el-tabs__item {
                    border-bottom: none !important;
                    border-left: none;
                }
            }
        }
    }
}
.form3 {
    // margin-top: 19vh;

    /deep/.el-dialog {
        width: 660px;
        height: 340px;
        border-radius: 10px;
        margin: 0 !important;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .el-dialog__body {
            padding: 0;
            font-size: 20px;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
            .consult {
                width: 138px;
                height: 138px;
                margin: 0 auto;
                margin-top: 50px;
                img {
                    width: 138px;
                    height: 138px;
                }
            }
            .success {
                width: 374px;
                height: 24px;
                line-height: 24px;
                margin: 0 auto;
                margin-top: 31px;
                padding-bottom: 92px;
                img {
                    display: block;
                    width: 24px;
                    height: 24px;
                    float: left;
                    margin-right: 9px;
                }
                span {
                    display: inline-block;
                    height: 24px;
                    line-height: 24px;
                }
            }
        }
    }
}
.el-select-dropdown {
    width: 80px !important;
    height: 88px !important;
    background: rgba(255, 255, 255, 1) !important;
    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.1) !important;
    border-radius: 6px;
}
</style>
