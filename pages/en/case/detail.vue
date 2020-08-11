<template>
    <div class="foreign-container">
        <EnBanner>
            <div class="banner-content">
                Dual-stream Live Broadcast, Multi-player Connected Microphone, Voice Live, Interactive Mini-games, Rich
                Mode to Meet The Various Needs of Entertainment Live Broadcast.
            </div>
            <div slot="bg" class="bg-img">
                <img src="../../../assets/img/en/case/detail/bg-banner.png" />
            </div>
        </EnBanner>

        <div class="container slider">
            <div v-swiper:mySwiper="bannerSwiper" class="swiper-container">
                <div class="swiper-wrapper">
                    <div v-for="item in slider" :key="item.id" class="swiper-slide">
                        <img :src="item.cover" alt="" />
                        <div class="title">{{ item.title }}</div>
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>

        <div class="bg-gray-light">
            <div class="container module">
                <h1>CHALLENGES</h1>
                <div class="poster-container">
                    <img class="poster" src="../../../assets/img/en/case/detail/poster.png" alt="" />
                    <div class="text-box left">
                        <div class="title">Delay and freeze</div>
                        <div class="desc">
                            When the user clicks on the video, from clicking the video to the first frame display, and
                            during the playback, the delay is usually severe, which seriously affects the user
                            experience, and causes a very bad impression of singing and dancing talent display.
                        </div>
                    </div>
                    <div class="text-box right">
                        <div class="title">
                            The network status is unstable
                        </div>
                        <div class="desc">
                            Due to various fluctuations in the network status of the entrants and viewers, the live
                            broadcast effect and interactive effect are greatly reduced.
                        </div>
                    </div>
                    <div class="text-box">
                        <div class="title">Single form</div>
                        <div class="desc">
                            Due to the limitation of live broadcast technology and network transmission quality, only a
                            single anchor broadcast mode can be used, making the live broadcast format easily annoying
                            to viewers and reducing user stickiness.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="blue-ball-container">
            <div class="container module">
                <h1>Solutions</h1>
                <p>
                    The business party uses the platform service through the SDK interface. The SDK provides multimedia
                    core functions such as audio and video collection, processing, encoding, decoding, and rendering,
                    and encapsulates functions such as instant media transmission network services, room signaling, and
                    message services.
                </p>
                <p>
                    It also provides rich SDK terminal adaptation solutions, perfect signaling services, and flexible
                    and diverse recording mechanisms to achieve efficient and low-latency mixing and mixing effects.
                </p>
                <p>
                    Eventually, multiple live streaming formats such as dual-stream live streaming, multi-player
                    connected wheat, voice live, interactive mini-games, etc. can be realized, and a variety of modes
                    can meet various needs of entertainment live streaming.
                </p>
            </div>
        </div>

        <div class="bg-gray-light">
            <b-container class="container module">
                <h1>typical customers</h1>
                <EnCaseCustomer :list="customers" />
            </b-container>
        </div>

        <div class="container module">
            <h1 style="text-transform: normal">Provide the Value</h1>
            <p>
                Zego support the connect interactive live broadcast solution, and itis delayed by about 300 milliseconds
                to 400 milliseconds. Anchors can interact with other anchors or viewers in the same frame, and support
                various platforms to promote various innovative gameplay methods at a faster frequency. Achieve flexible
                presentation methods such as two-person or three-person connects; picture-in-picture, vertical screen
                etc.
            </p>
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
export default class CaseDetail extends Vue {
    bannerSwiper = {
        centeredSlides: false,
        // slidesPerView: 3,
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    };
    asyncData() {
        const contents = {
            slider: [
                {
                    id: 1,
                    title: 'Education Live',
                    cover: 'slider-1.png',
                },
                {
                    id: 2,
                    title: 'Live video',
                    cover: 'slider-2.png',
                },
                {
                    id: 3,
                    title: 'Multiplayer live',
                    cover: 'slider-3.png',
                },
            ],
        }; // require('../../../assets/json/en-case-detail.json');
        const { slider } = contents;
        slider.forEach((item: any) => {
            item.cover = require(`../../../assets/img/en/case/detail/${item.cover}`);
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
            slider,
            customers,
        };
    }
    head() {
        return {
            title: 'Solutions & Cases Detail - Zego',
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

.gutter-35 {
    @include gutter(35px);
}

.banner-content {
    width: 532px;
    font-weight: bold;
    color: #fff;
    font-size: 30px;
    position: relative;
    z-index: 1;
    max-width: 100%;
}
.bg-img {
    width: 559px;
    position: absolute;
    right: 10px;
    bottom: 30px;
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

.slider {
    margin-top: 50px;
    margin-bottom: 50px;
    position: relative;
    .swiper-container {
        width: 1050px;
        max-width: 100%;
        margin: 0 auto;
        text-align: center;
        img {
            width: 100%;
        }
        .title {
            margin-top: 40px;
            color: #696f80;
            font-size: 21px;
        }
    }
    .swiper-slide {
        max-width: 100%;
        width: 330px;
    }
}
@media screen and (max-width: 1000px) {
    .slider {
        .swiper-container {
            .title {
                margin-top: 0.4rem;
            }
        }
    }
}

.poster-container {
    position: relative;
    text-align: center;
    .poster {
        width: 640px;
    }
    .text-box {
        width: 350px;
        text-align: left;
        margin: 0 auto;
        margin-top: 20px;
        .title {
            font-size: 24px;
            font-weight: 500;
            color: #222;
            margin-bottom: 10px;
            text-transform: uppercase;
        }
        .desc {
            font-size: 16px;
            color: #696f80;
        }
        &.left,
        &.right {
            position: absolute;
            width: 250px;
            top: 30%;
            transform: translateY(-50%);
        }
        &.left {
            left: 10px;
        }
        &.right {
            right: 10px;
        }
    }
}
@media screen and (max-width: 1000px) {
    .poster-container {
        position: relative;
        text-align: center;
        .poster {
            width: 100%;
        }

        .text-box {
            // text-align: center;
            width: 100%;
            margin-top: 0.6rem;
            .title {
                font-size: 0.32rem;
            }
            .desc {
                font-size: 0.28rem;
            }
            &.left,
            &.right {
                position: static;
                width: 100%;
                transform: none;
            }
        }
    }
}

.blue-ball-container {
    position: relative;
    background-color: #0336f3;
    overflow: hidden;
    .module {
        position: relative;
        z-index: 1;
        h1 {
            color: #fff;
            margin-bottom: 50px;
        }
    }
    p {
        font-size: 16px;
        font-weight: 500;
        color: #fff;
    }
    &::before {
        position: absolute;
        left: 0;
        top: 0;
        transform: translate(-20%, -60%);
        content: '';
        width: 610px;
        height: 610px;
        border-radius: 50%;
        background: linear-gradient(to right, rgba(0, 85, 254, 0.22), rgba(255, 255, 255, 0.22));
    }
    &::after {
        position: absolute;
        right: 0;
        bottom: 0;
        transform: translate(10%, 55%);
        content: '';
        width: 690px;
        height: 690px;
        border-radius: 50%;
        background: linear-gradient(to bottom, rgba(0, 85, 254, 0.22), rgba(255, 255, 255, 0.22));
    }
}

@media screen and (max-width: 1000px) {
    .blue-ball-container {
        .module {
            h1 {
                margin-bottom: 0.6rem;
            }
        }
        p {
            font-size: 0.28rem;
        }
        &::before {
            width: 3rem;
            height: 3rem;
        }
        &::after {
            width: 4rem;
            height: 4rem;
        }
    }
}
</style>
