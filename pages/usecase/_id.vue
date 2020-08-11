<template>
    <div class="case-container">
        <header class="case-head container">
            <a class="title" href="/usecase">案例 </a><span class="arrow-right"></span
            ><span class="company">{{ usecase.user }}</span>
        </header>
        <div class="img-wrapper">
            <img :src="usecase.srcImg" alt="haoweilai" class="case-img" />
        </div>
        <main class="case-content container">
            <header class="company-intro content">
                <div class="abbr">
                    <h1>{{ usecase.user }}</h1>
                    <span class="industry">{{ usecase.industryText }}</span>
                </div>
                <div class="desc">{{ usecase.companyIntroduction }}</div>
            </header>
            <section class="challenge content">
                <h2 class="title divider">业务挑战</h2>
                <div class="desc">
                    <p v-for="(item, iK) in usecase.challenge" :key="iK">
                        {{ item.text }}
                    </p>
                </div>
            </section>
            <section class="solution content">
                <h2 class="title divider">解决方案</h2>
                <div class="desc">
                    <p v-for="(item, iK) in usecase.solution" :key="iK">
                        {{ item.text }}
                    </p>
                </div>
            </section>
            <section class="value content">
                <h2 class="title divider">客户价值</h2>
                <div class="desc">
                    <p>{{ usecase.value }}</p>
                </div>
            </section>
            <!-- <section class="pic content">
        <img src="../../assets/img/case/pic/huajiao.png" alt="huajiao" />
      </section> -->
        </main>
        <section class="recent">
            <div class="content">
                <h2 class="title">相关案例</h2>
                <div class="recent-content recent-conent-pc">
                    <section v-for="(recent, cK) in relates" :key="cK" class="case-item">
                        <div class="case-img-wrapper">
                            <img :src="recent.srcImg" alt="" />
                        </div>
                        <div class="name">{{ recent.user }}</div>
                        <a :href="recent.link">了解案例详情</a>
                    </section>
                </div>
                <div class="scroll-wrapper">
                    <div class="recent-wrapper">
                        <div class="recent-content-m">
                            <section v-for="(recent, cK) in relates" :key="cK" class="case-item">
                                <div class="case-img-wrapper">
                                    <img :src="recent.srcImg" alt="" />
                                </div>
                                <div class="name">{{ recent.user }}</div>
                                <a :href="recent.link">了解案例详情</a>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// function asnycData_pro({
//   store,
//   error,
//   payload
// }: {
//   params: any
//   store: any
//   error: any
//   payload: any
// }) {
//   try {
//     // console.log('payload',payload);
//     // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
//     const [beforeItem, currenItem, nextItem] = getAdjacentItem(
//       payload.sorts.split('_').map((i: number) => i * 1),
//       payload.menu
//     )
//   } catch (e) {}
// }
function asnycDataDev({ params }: any) {
    // console.log(params)
    const id = params.id ? params.id.replace('.html', '') : '';
    const contents = require('../../assets/json/case.json');
    const { usecases } = contents;
    const usecase = usecases.find((item: any) => item.id === id);
    usecase.srcImg = require(`../../assets/img/case/icons/${usecase.id}.png`);
    const relates = usecase.relate.map((item: any) => {
        const findUsecase = usecases.find((u: any) => u.id === item);
        return {
            id: findUsecase.id,
            user: findUsecase.user,
            srcImg: require(`../../assets/img/case/icons/${findUsecase.id}.png`),
            link: `/usecase/${findUsecase.id}.html`,
        };
    });
    // console.log(relates)
    return {
        relates,
        usecase,
    };
}
@Component({
    asyncData({ params }: any) {
        let result: any = null;
        try {
            if (process && process.env && process.env.env === 'dev') {
                result = asnycDataDev({ params });
            } else {
                result = asnycDataDev({ params });
            }
        } catch (e) {
            console.error('asyncData fail:', e);
            // console.error("result", result);
        }
        // console.log(params, result)
        // const id = params.id ? params.id.replace('.html', '') : ''
        // const contents = require('../../assets/json/case.json')
        // const { usecases } = contents
        // const usecase = usecases.find((item: any) => item.id === id)
        // console.log('usecase', usecase)
        // return {
        //   usecase
        // }
        return result;
    },
})
export default class MyContentBody extends Vue {
    // usecase: any = {}
    // recents: any
    recents = [
        {
            user: '花椒直播',
            id: 'huajiao',
            link: '',
        },
        {
            user: 'LiveMe',
            id: 'liveme',
            link: '',
        },
        {
            user: '希沃',
            id: 'xiwo',
            link: '',
        },
    ];
}
</script>
<style lang="scss" scoped>
.case-container {
    background-color: #fff;
    padding-top: 68px;
}
.content {
    max-width: 840px;
    margin: 0 auto;
    padding-bottom: 44px;
    margin-top: 44px;
    border-bottom: 1px solid #f4f4f4;
}
.case-head {
    margin-top: 12px;
    height: 48px;
    line-height: 48px;
    font-size: 14px;
    display: flex;
    align-items: center;
    .title {
        color: #222;
        font-size: 14px;
        margin-right: 15px;
    }
    .arrow-right {
        width: 5px;
        height: 9px;
        margin-right: 15px;
        background: url(../../assets/img/case/arrow-right.png);
        background-size: 100%;
    }
    .company {
        font-size: 14px;
        color: #999;
    }
}
.img-wrapper {
    width: 100%;
    height: 168px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
}
.case-img {
    height: 100%;
}
.case-content {
}
.company-intro {
    // height: 198px;
    box-shadow: 0px 16px 38px 0px rgba(0, 0, 0, 0.08), 0px -3px 5px 0px rgba(0, 0, 0, 0.02);
    border-radius: 8px;
    box-sizing: border-box;
    padding: 44px;
    display: flex;
    .abbr {
        width: 186px;
        display: flex;
        flex-direction: column;
        h1 {
            display: inline-block;
            margin-bottom: 28px;
            font-size: 32px;
            color: #222;
            line-height: 1;
            font-weight: 500;
            font-family: PingFang SC;
        }
        .industry {
            font-size: 12px;
            color: #999;
        }
    }
    .desc {
        flex: 1;
        font-size: 14px;
        color: #666;
        line-height: 24px;
    }
}
.title {
    font-size: 24px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(34, 34, 34, 1);
}
p {
    color: #666;
    line-height: 26px;
    margin-bottom: 19px;
    &:last-child {
        margin-bottom: 0;
    }
}
.challenge {
    margin-top: 63px;
    .desc {
        margin-top: 42px;
    }
}
.solution {
    // margin-top: 94px;
    .desc {
        margin-top: 36px;
    }
}
.value {
    // margin-top: 91px;
    .desc {
        margin-top: 24px;
    }
}
.pic {
    img {
        width: 100%;
        height: 526px;
    }
}
.recent {
    // margin-top: 83px;
    h2 {
        font-size: 20px;
        margin-bottom: 24px;
    }
}
.recent-content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
    .case-item {
        width: 264px;
        height: 208px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(245, 245, 245, 1);
        border-radius: 8px;
        .case-img-wrapper {
            // display: inline-block;
            margin: 16px 0 11px;
            width: 100%;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px 0;
        }
        img {
            width: 70%;
        }
        .name {
            font-size: 20px;
            color: #222;
            text-align: center;
        }
        a {
            margin-top: 17px;
            display: block;
            text-align: center;
            color: #0044ff;
        }
    }
}
.recent-wrapper {
    display: none;
}

@media screen and (max-width: 1000px) {
    .case-container {
        background-color: #fff;
        padding-top: 1.68rem;
    }
    .content {
        max-width: 6.3rem;
        margin: 0 auto;
    }
    .case-head {
        display: none;
    }
    .case-img {
        // width: 100%;

        // height: 1.68rem;
    }
    .img-wrapper {
        height: 1.68rem;
        padding: 0;
    }
    .case-content {
    }
    .company-intro {
        height: auto;
        box-shadow: none;
        border-radius: 0;
        box-sizing: border-box;
        padding: 0.6rem 0 0;

        display: flex;
        flex-direction: column;
        .abbr {
            width: 186px;
            display: flex;
            flex-direction: column-reverse;
            h1 {
                display: inline-block;
                margin-bottom: 0.5rem;
                font-size: 0.48rem;
                color: #222;
                line-height: 1;
                font-weight: 500;
                font-family: PingFang SC;
            }
            .industry {
                color: #b8bbc4;
                margin-bottom: 0.35rem;
            }
        }
        .desc {
            flex: 1;
            font-size: 0.28rem;
            color: #666;
            line-height: 0.48rem;
            // border-bottom: 0.02rem solid #f4f4f4;
            border-bottom: 0;
            padding-bottom: 0.73rem;
        }
    }
    .title {
        font-size: 0.4rem;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(34, 34, 34, 1);
    }
    p {
        color: #666;
        font-size: 0.28rem;
        line-height: 0.48rem;
        margin-bottom: 0.5rem;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .divider {
        position: relative;
        padding-bottom: 0.28rem;
        &::after {
            content: '';
            position: absolute;
            display: block;
            bottom: 0;
            width: 0.44rem;
            height: 0.08rem;
            background-color: #0044ff;
        }
    }
    .challenge {
        margin-top: 0.8rem;
        .desc {
            margin-top: 0.24rem;
        }
    }
    .solution {
        margin-top: 0.8rem;
        .desc {
            margin-top: 0.24rem;
        }
    }
    .value {
        margin-top: 0.86rem;
        border-bottom: 0;
        .desc {
            margin-top: 0.24rem;
        }
    }
    .pic {
        padding-bottom: 0.8rem;
        img {
            width: 100%;
            height: 3.93rem;
        }
    }
    .recent {
        background: #fafafb;
        margin-top: 0;
        height: 5.94rem;
        padding-top: 0.8rem;
        overflow: hidden;
        .content {
            max-width: none;
        }
        h2 {
            font-size: 20px;
            margin-bottom: 0;
            padding-left: 0.6rem;
        }
    }
    .recent-conent-pc {
        display: none;
    }
    .scroll-wrapper {
        height: 4.56rem;
        // margin-left: 0.38rem;
        // overflow: hidden;
    }
    .recent-wrapper {
        display: block;
        height: 4.56rem;
        padding: 0.6rem 0 0.8rem;
        overflow: hidden;
        overflow-x: auto;
        overflow-y: hidden;
    }
    .recent-content-m {
        white-space: nowrap;
        // overflow-x: scroll;
        // overflow-y: hidden;
        .case-item {
            display: inline-block;
            width: 4.4rem;
            height: 3.36rem;
            background: rgba(255, 255, 255, 1);
            // border: 1px solid rgba(245, 245, 245, 1);
            border: 0;
            box-shadow: 0px 3.5px 13.5px 0px rgba(0, 0, 0, 0.05), 0px -1px 1px 0px rgba(0, 0, 0, 0.02);
            border-radius: 0.08rem;
            margin-right: 0.44rem;
            // margin: 0 0.22rem;
            .case-img-wrapper {
                width: 100%;
                height: 1.68rem;
                margin: 0.28rem 0 0;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            img {
                display: inline-block;
                // width: 100%;
                height: 80%;
                // height: 1rem;
            }
            .name {
                font-size: 0.28rem;
                color: #222;
                text-align: center;
            }
            a {
                margin-top: 0.23rem;
                display: block;
                text-align: center;
                color: #0044ff;
            }
            &:first-child {
                margin-left: 0.6rem;
            }
            &:last-child {
                margin-right: 0.6rem;
            }
        }
    }
}
</style>
