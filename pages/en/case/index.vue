<template>
    <div class="foreign-container">
        <EnBanner>
            <div class="banner-content">
                Excellent Audio & Video Technology, Supports Full-band Voice Processing, Is Compatible with Various
                Mobile Phone Terminals, And Is Good at Adaptively Finding The Best Point Between Delay And Fluent
                Streaming in Poor Network Environments.
            </div>
            <div slot="bg" class="bg-img">
                <img src="../../../assets/img/en/case/banner.png" />
            </div>
        </EnBanner>
        <b-container class="container module">
            <h1>Technology Advantages</h1>
            <b-row align-h="around">
                <b-col lg="4" cols="12">
                    <div class="icon-item">
                        <img src="../../../assets/img/en/case/icon-title-fast.png" alt="" class="icon" />
                        <div class="title">Fast load</div>
                        <div class="text">
                            Multiple data centers and global network allow users to access the system through nearby
                            nodes
                        </div>
                    </div>
                </b-col>
                <b-col lg="4" cols="12">
                    <div class="icon-item">
                        <img src="../../../assets/img/en/case/icon-title-low.png" alt="" class="icon" />
                        <div class="title">Low latency</div>
                        <div class="text">
                            Intelligent dispatching system always connects users to the best network resources.
                        </div>
                    </div>
                </b-col>
                <b-col lg="4" cols="12">
                    <div class="icon-item">
                        <img src="../../../assets/img/en/case/icon-title-optimize.png" alt="" class="icon" />
                        <div class="title">Optimization engine</div>
                        <div class="text">
                            Optimized first frame loading strategy allows video playback to start instantly.
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <div class="bg-gray-light">
            <div class="container module">
                <h1>CHALLENGES</h1>
                <div class="scene">
                    <div
                        v-for="(item, index) in scene"
                        :key="item.id"
                        class="scene-item"
                        :class="{ right: index % 2 === 1 }"
                    >
                        <img class="scene-item-cover" :src="item.cover" />
                        <div class="scene-item-content">
                            <div class="scene-item-title">{{ item.title }}</div>
                            <div class="scene-item-desc">{{ item.desc }}</div>
                            <a href="/en/case/detail" class="scene-item-btn">learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <b-container class="container module">
            <h1>Customer case</h1>
            <EnCaseCustomer :list="customers" />
        </b-container>

        <div class="bg-gray-light">
            <b-container class="stories container module">
                <h1>more stories</h1>
                <b-row class="no-gutters zegocustomer">
                    <b-col v-for="(url, index) in stories" :key="index" cols="6" lg="" class="stories-item">
                        <img class="stories-item-icon" :src="url" />
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <EnBottomBgLink />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import ClickOutside from 'vue-click-outside';
import EnBottomBgLink from '../../../components/en/EnBottomBgLink.vue';
import EnBanner from '../../../components/en/EnBanner.vue';
import EnCaseCustomer from '../../../components/en/case/EnCaseCustomer.vue';

@Component({
    name: 'case-index',
    directives: { ClickOutside },
    components: { EnBottomBgLink, EnBanner, EnCaseCustomer },
})
export default class CaseIndex extends Vue {
    asyncData() {
        const contents = {
            scene: [
                {
                    id: 1,
                    title: 'Live Steaming',
                    cover: 'scene-live.png',
                    desc:
                        'Perfectly supporting for multiple live streaming formats such as dual-stream live streaming, multi-player connected, voice live, interactive mini-games, etc.. Various forms to meet the various needs of entertainment and game live streaming.',
                    url: '',
                },
                {
                    id: 2,
                    title: 'Chat Room',
                    cover: 'scene-chat.png',
                    desc:
                        'Supplying Both speed mode and high-definition mode for team-game playing scene. Also supply interactive mode and broadcast mode for entertainment scene. NO delay for either speed or entertainment.',
                    url: '',
                },
                {
                    id: 3,
                    title: 'KTV',
                    cover: 'scene-ktv.png',
                    desc:
                        'Plentiful methods for KTV , take turns solo, single-player MV, two-player MV, and multi-player chorus, truly experience for KTV entertainment.',
                    url: '',
                },
                {
                    id: 4,
                    title: 'Education',
                    cover: 'scene-education.png',
                    desc:
                        'Multi-ways Connect modules solve the pain of big classroom or small group teaching, and ultra-low latency technology solves the real-time communication efficiency of 1-on-1 video consultation.',
                    url: '',
                },
                {
                    id: 5,
                    title: 'Retail',
                    cover: 'scene-retail.png',
                    desc:
                        '300ms ultra-low latency technology  solves the requirement of the real-time bidding and lucky draw. Supporting a  clear and fluent live e-commerce broadcast effects in complex network environment.',
                    url: '',
                },
            ],
            stories: ['1-1', '1-2', '1-3', '1-4', '1-5', '2-1', '2-3', '2-4', '2-5'],
        }; // require('../../../assets/json/en-case-home.json');
        const { scene, stories } = contents;
        scene.forEach((item: any) => {
            item.cover = require(`../../../assets/img/en/case/scene/${item.cover}`);
        });
        stories.forEach((url: String, i: number) => {
            stories[i] = require(`../../../assets/img/en/stories/${url}.png`);
        });

        const { customers } = {
            customers: [
                {
                    id: 'liveme',
                    title: 'Liveme',
                    desc: 'Support A Social Broadcast Giants Exploit Overseas Market',
                    bgColor: '#4100A1',
                    color: '#4100A1',
                    bannerContent: 'Social Broadcast Giants Exploit Overseas Market',
                    client: {
                        proflie: [
                            'Live.me was launched in April 2016. It was produced by the Chinese company Cheetah and is currently the highest live streaming platform of IOS App Store in the US for both downloads and revenue. Currently, Live.me broadcasts more than 200,000 hours a day, has more than 20 million users, users have given gifts more than 800 million times, and more than 2 billion users have liked them. These numbers are still growing, and there is still much room for growth for live.me.',
                        ],
                        details: [
                            {
                                content: '20,000,000',
                                name: 'Active Users',
                            },
                            {
                                content: '200,000',
                                name: 'Hours Daily Broadcasting',
                            },
                            {
                                content: '2 billion',
                                name: 'Likes by Users',
                            },
                        ],
                    },
                    challenge: [
                        'Viewing videos abroad due to network conditions and other factors will lead to various situations , such as poor definition of video or freeze in live broadcast, which seriously affects the user experience.',
                    ],
                    solution: {
                        text: [
                            'Zego SDK has been improved through multiple versions to optimize a set of automatic adjustment technologies. The network conditions in different regions are different. To ensure fluency, or even adjust the frame rate and resolution. And the desired bit rate of the application, dynamically adjust the bit rate, frame rate, and resolution, and ultimately achieve a smooth viewing user experience.',
                        ],
                        hasImg: true,
                    },
                    provide: [
                        'LiveMe, which takes the United States as the first target market for its products, relies on ZEGO\'s stable services to get the growth of users, making LiveMe the true "Chinese trader" behind American influencers.',
                    ],
                },
                {
                    id: 'uplive',
                    title: 'Uplive',
                    desc: 'Accelerate The Improvement of The Live Broadcast Business for Uplive APP',
                    bgColor: '#844EFD',
                    color: '#8650FF',
                    bannerContent:
                        'Help Uplive to Get the Goals and Accelerate the Improvement of the Commercialize Ability',
                    client: {
                        proflie: [
                            'Uplive is one of the largest pan-entertainment video social platforms in the world, headquartered in Beijing-Asia Innovation Group (AIG). Uplive launched in China in July 2016, and then established branches and joint operations in Taiwan, Hong Kong, Japan, Malaysia, Indonesia, Vietnam, South Korea, Cairo, Morocco, North America and other major regions, with a strong and mature research and development team and The release team, the first launch of Uplive, is the first operating record for iOS and Android in Taiwan, Vietnam, and the Middle East. Used by more than 50 million users worldwide, and more than 100,000 Internet Celebrities worldwide.',
                        ],
                        details: [
                            {
                                content: '50,000,000',
                                name: 'Active Users Worldwide',
                            },
                            {
                                content: '100,000',
                                name: 'Internet Celebrities',
                            },
                            {
                                content: "10 <span class='small' style='font-weight: 500'>BRANCHS</span>",
                                name: 'Around the World',
                            },
                        ],
                    },
                    challenge: [
                        'Viewing videos abroad due to network conditions and other factors will lead to various situations , such as poor definition of video or freeze in live broadcast, which seriously affects the user experience.',
                        '1. Complex international network conditions around the world. Including the complexity of multinational networks and the complexity of country-specific networks. Different multinational operators or network infrastructure can not support , resulting in poor network environment.',
                        '2. There are many types of terminal equipment, and the mobile phone models are complicated, and they need to be technically optimized. Users in quite a few countries and regions use Android phones, with a variety of models and many types, with a low proportion of low-end models. The acoustic design of low-end Android phones is unreasonable, and it is very difficult in terms of echo cancellation and noise suppression.',
                    ],
                    solution: {
                        text: [
                            'Zego’s self-developed audio and video technology has excellent performance in audio and video pre-processing, encoding and decoding, anti-jitter, and real-time transmission, and supports massive global concurrency. Solving the problems of complex international networks means low latency in multinational networks, which is a recognized difficulty.',
                            'Zego’s service based on the public cloud, a large number of domestic and foreign media server nodes are deployed, and domestic and foreign signaling data acceleration networks are constructed to realize the acceleration of signaling data. Real-time media data transmission in multinational networks is achieved through load balancing, nearest access, quality assessment, and dynamic routing.For complex mobile phone types, in order to ensure the user experience, in addition to making full adaptations, it is also necessary to reduce the pressure on the hardware. The construction team has optimized the technology in two aspects.',
                            'For complex mobile phone types, in order to ensure the user experience, in addition to making full adaptations, it is also necessary to reduce the pressure on the hard ware. The construction team has optimized the technology in two aspects.',
                            'First, on the codec, Android models in the whitelist will use GPU hard coding and hard decoding to reduce the pressure on the CPU. Second,  to perform mixing on the server side, mixing multiple audio and video streams into one channel, reducing the pressure of mobile terminal decoding.',
                        ],
                    },
                    provide: [
                        "UPlive is the number one platform of overseas revenue in China. A large amount of revenue comes from the operation of global activities for competition.  ZEGO's stable service guarantees the progress of each event. It helps the platform and Internet Celebrities to increase revenue from a technical level. The number of users has increased significantly worldwide.",
                    ],
                },
                {
                    id: 'xmly',
                    title: 'Himalayan FM',
                    titleClass: ['small'],
                    desc: 'High-definition Voice Broadcast for Interactive Connect Modules',
                    bgColor: '#1656FF',
                    color: '#2C66FF',
                    bannerContent:
                        'Himalayan FM:<br> High-definition voice broadcast that can connected with Interactive',
                    client: {
                        proflie: [
                            'Himalaya FM is a well-known audio sharing platform with a total user size of 480 million. The APP was launched in March 2013. In more than two years, the number of users has exceeded 200 million. It has become the fastest growing and largest online mobile audio sharing platform in China. In 2014, two rounds of high-value financing were completed, laying a solid financial strength for further leading the Chinese audio field. As of December 2015, the total amount of Himalayan audio has exceeded 15 million, and the cumulative number of playbacks in a single day has exceeded 50 million. The market share in the mobile audio industry has reached 73%.',
                        ],
                        details: [
                            {
                                content: '15,000,000',
                                name: 'Voice Programs',
                            },
                            {
                                content: '50,000,000',
                                name: 'plays per Day',
                            },
                            {
                                content: '73%',
                                name: 'market share',
                            },
                        ],
                    },
                    challenge: [
                        'The traditional voice live broadcast and text interaction methods have been unable to meet the interaction between the audiences and the Internet Celebrities. The method has evolved from a one-to-one interaction mode to a chat room mode where people interact with each other by voice. The gameplay also needs to develop from a single radio station and listening broadcast to more online interactive gameplay.',
                        'Compared with ordinary single live broadcast scenarios, voice-linked live broadcast has two big technical difficulties.',
                        'The first is the high latency requirement of the connect scene, which cannot be met by the RTMP protocol suitable for live broadcasting. The second is the higher sound quality requirements for voice live broadcasting. The echo cancellation during connect interaction and the suppression of noise in noisy environments. The volume gain of human voice in near-field and far-field interactions are several major problems in audio processing in real-time speech. Traditional audio processing technology mainly relies on hardware. It is difficult to be compatible with all types of mobile terminals, and the hardware modules are not flexible enough, which can easily lead to distortion of the audio signal and affect the sound quality.',
                    ],
                    solution: {
                        text: [
                            'Zego currently provides Himalaya FM with a multi-person voice link solution and an online KTV solution. The pure self-developed private protocol based on UDP guarantees a stream transmission with a delay of about 200 milliseconds. meanwhile, the method of intelligently smoothing network jitter, forward error correction, and frame loss compensation are used to solve the problem of packet loss in the weak network of the UDP protocol. Experience to ensure low latency and clear and smooth voice calls.',
                            "At the same time, Zego's self-developed 3A algorithm solves the problem of audio processing in the voice scene. Adaptive echo cancellation, automatic adjustment of microphone volume, combined with psychoacoustic models, and improvement of 20dB + signal-to-noise ratio allow users to have high performance in various complex environments Sound quality experience.",
                        ],
                    },
                    values: [
                        '1. More ways of playing games (scenarios show, funny dubbing, singing solo, etc.) derived from the voice of users connecting have increased the fun of live broadcast. Promote the realization of platform traffic and increase competitiveness in the highly competitive live broadcast industry.',
                        '2. At present, the users of audiobook platforms generally do not pay much attention to the anchors. Through the way of anchor live broadcast and audience interaction, it brings a large number of fan users and increases the stickiness of the platform users.',
                        "3. Anchors don't need to buy professional sound card equipment. They can have good sound quality effects only through mobile phones, which lowers the entry threshold for anchors and attracts more anchors to the platform.",
                    ],
                    scenario: [
                        {
                            icon: 'icon-setting-1.png',
                            title: 'Scenario 1',
                            desc: 'Two anchors connect to solo , and the audiences can apply for interaction',
                        },
                        {
                            icon: 'icon-setting-2.png',
                            title: 'Scene 2',
                            desc: 'Multi-anchor enters the room, then turn around to sing, and other team games',
                        },
                    ],
                },
            ],
        }; // require('../../../assets/json/en-case-customer.json');
        customers.forEach((item: any) => {
            item.cover = require(`../../../assets/img/en/case/case-logo-${item.id}.png`);
        });
        return {
            contents,
            scene,
            stories,
            customers,
        };
    }
    head() {
        return {
            title: 'Solutions & Cases Home - Zego',
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
@import '../../../assets/css/en-third-common.scss';

.no-gutters {
    @include gutter(0);
}
.gutter-110 {
    @include gutter(110px);
}

.banner-content {
    width: 532px;
    font-weight: bold;
    color: #fff;
    font-size: 25px;
    position: relative;
    z-index: 1;
    max-width: 100%;
}
.bg-img {
    width: 559px;
    position: absolute;
    right: 10px;
    bottom: 10px;
    z-index: 0;
    img {
        width: 100%;
    }
}
@media screen and (max-width: 1000px) {
    .banner-content {
        font-size: 0.4rem;
        padding: 1rem 0 0;
    }
    .bg-img {
        opacity: 0.3;
        width: 80%;
        left: 10%;
        bottom: 0.4rem;
    }
}

.module {
    padding: 70px 0;
    h1 {
        font-weight: 500;
        margin-bottom: 70px;
        font-size: 40px;
        color: #222;
        text-align: center;
        text-transform: uppercase;
    }
}
@media screen and (max-width: 1000px) {
    .module {
        padding: 0.8rem 0;
        h1 {
            margin-bottom: 0.5rem;
            font-size: 0.54rem;
            color: #222;
            text-align: center;
        }
    }
}
.icon-item {
    text-align: center;
    .icon {
        width: 160px;
        height: 160px;
    }
    .title {
        font-size: 36px;
        font-weight: 500;
    }
    .text {
        margin-top: 10px;
        font-size: 16px;
        font-weight: 500;
        color: #696f80;
    }
}
@media screen and (max-width: 1000px) {
    .icon-item {
        margin-bottom: 0.4rem;
        .icon {
            width: 2rem;
            height: 2rem;
        }
        .title {
            font-size: 0.48rem;
        }
        .text {
            margin-top: 0.2rem;
            font-size: 0.28rem;
        }
    }
}
.scene {
    padding-left: 100px;
    padding-right: 100px;
    &-item {
        position: relative;
        margin-bottom: 95px;
        &-cover {
            width: 480px;
        }
        &-content {
            text-align: left;
            position: absolute;
            right: 0;
            width: 415px;
            top: 50%;
            transform: translateY(-50%);
        }
        &-title {
            position: relative;
            font-size: 36px;
            font-weight: 500;
            color: #222;
            padding-bottom: 20px;
            margin-bottom: 40px;
            &::after {
                content: '';
                width: 2em;
                height: 2px;
                background-color: #222;
                position: absolute;
                bottom: 0;
                left: 0;
            }
        }
        &-desc {
            font-size: 16px;
            font-weight: 500;
            color: #696f80;
        }
        &-btn {
            margin-top: 60px;
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
            margin-bottom: 1rem;
            &-cover {
                width: 100%;
            }
            &-content {
                position: static;
                width: 100%;
                transform: none;
                text-align: center;
            }
            &-title {
                margin-top: 0.2rem;
                font-size: 0.48rem;
                padding-bottom: 0.3rem;
                margin-bottom: 0.6rem;
                &::after {
                    left: 50%;
                    right: auto;
                    transform: translateX(-50%);
                }
            }
            &-desc {
                font-size: 0.28rem;
                font-weight: 500;
                color: #696f80;
            }
            &-btn {
                margin-top: 0.6rem;
                width: 2.86rem;
                height: 0.64rem;
                line-height: 0.64rem;
                font-size: 0.28rem;
            }
        }
    }
}
.stories {
    &-item {
        -webkit-box-flex: 0;
        &.col-lg {
            flex: 0 0 20%;
            max-width: 20%;
            margin-bottom: 20px;
        }
        &-icon {
            width: 100%;
            vertical-align: middle;
        }
    }
}
@media screen and (max-width: 1000px) {
    .stories .gutter-110 {
        @include gutter(15px);
    }
}
.zegocustomer {
    justify-content: center;
}
</style>
