(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1126:function(n,t,e){"use strict";e.r(t);var o=e(5),r=e(7),c=e(19),d=e(10),l=e(20),m=e(8),h=e(40),f=function(n,t,e,desc){var o,r=arguments.length,c=r<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,e):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(n,t,e,desc);else for(var i=n.length-1;i>=0;i--)(o=n[i])&&(c=(r<3?o(c):r>3?o(t,e,c):o(t,e))||c);return r>3&&c&&Object.defineProperty(t,e,c),c},x=function(n){function t(){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).apply(this,arguments))).usecases=[],n.industries=["全部","泛娱乐","在线教育","出海","政企"],n.industryActive=0,n.showedUsecases=[],n.filteredUsecases=[],n.showCount=6,n.addCount=6,n.isMobile=!1,n.hasMore=!1,n.partnerSwiperOption={pagination:{el:".partner-swiper-pagination-pc",clickable:!0,renderBullet:function(n,t){return'<div class="swiper-pagination-item '.concat(t,'"></div>')}}},n.partnerSwiperOptionM={pagination:{el:".partner-swiper-pagination-m",clickable:!0,renderBullet:function(n,t){return'<div class="swiper-pagination-item '.concat(t,'"></div>')}}},n}return Object(l.a)(t,n),Object(r.a)(t,[{key:"created",value:function(){}},{key:"mounted",value:function(){this.handleWinSizeChange(),this.filterUsecase(),window.addEventListener("resize",this.handleWinSizeChange.bind(this),{passive:!0})}},{key:"beforeDestroy",value:function(){window.removeEventListener("resize",this.handleWinSizeChange)}},{key:"handleWinSizeChange",value:function(){window.innerWidth<1e3?(this.showCount=6,this.addCount=6,this.isMobile=!0,this.filterUsecase()):(this.showCount=9,this.addCount=9,this.isMobile=!1,this.filterUsecase())}},{key:"filterUsecase",value:function(){this.showCount=this.addCount;var n=this.industries[this.industryActive];this.filteredUsecases=this.usecases.filter(function(t){return"全部"===n||t.industry===n}),this.filteredUsecases.length>this.addCount?this.hasMore=!0:this.hasMore=!1,this.showedUsecases=this.filteredUsecases.slice(0,this.showCount)}},{key:"showMoreCase",value:function(){this.showCount+=6,this.showedUsecases=this.filteredUsecases.slice(0,this.showCount),this.showCount>=this.filteredUsecases.length?this.hasMore=!1:this.hasMore=!0}},{key:"selectIndustry",value:function(n){console.log(n),this.industryActive=n,this.filterUsecase()}},{key:"toUsercase",value:function(n){"undefined"!=typeof window&&window.open("/usecase/".concat(n.id,".html"))}}]),t}(h.Vue),v=x=f([Object(h.Component)({components:{},asyncData:function(){var n=e(545),t=n.usecases,o=n.partners;return o.forEach(function(p){p.forEach(function(n){n.src=e(478)("./".concat(n.icon,".png"))})}),{usecases:t,partners:o}}})],x),w=(e(854),e(14)),component=Object(w.a)(v,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"case-container"},[n._m(0),n._v(" "),e("div",{staticClass:"case-content"},[e("section",{staticClass:"container case-main content-box"},[e("div",{staticClass:"industry-wrapper"},[e("ul",{staticClass:"industry"},n._l(n.industries,function(t,o){return e("li",{key:o,class:{"industry-item":!0,active:n.industryActive===o},on:{click:function(e){return n.selectIndustry(o,t)}}},[e("a",{attrs:{href:"javascript: void(0);"}},[n._v(n._s(t))])])}),0)]),n._v(" "),e("div",{staticClass:"case-wrapper clearfix"},n._l(n.showedUsecases,function(t,o){return e("div",{key:o,staticClass:"case-item-wrapper"},[e("section",{staticClass:"case-item",on:{click:function(e){return n.toUsercase(t)}}},[e("span",{class:"icon "+t.id}),n._v(" "),e("p",{staticClass:"case-val"},[n._v(n._s(t.total))]),n._v(" "),e("a",{staticClass:"case-link",attrs:{href:""}},[n._v("了解案例详情")])])])}),0),n._v(" "),n.hasMore?e("button",{staticClass:"more",on:{click:n.showMoreCase}},[n._v("\n                更多客户案例\n            ")]):n._e()])]),n._v(" "),e("div",{staticClass:"partner"},[e("h2",{staticClass:"partner-title"},[n._v("\n            为全球4000+企业客户提供服务\n        ")]),n._v(" "),e("div",{staticClass:"partner-content partner-pc"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:partnerSwiper",value:n.partnerSwiperOption,expression:"partnerSwiperOption",arg:"partnerSwiper"}],staticClass:"swiper-partner"},[e("div",{staticClass:"swiper-wrapper"},n._l(n.partners,function(t,o){return e("div",{key:o,staticClass:"swiper-slide"},n._l(t,function(n,t){return e("div",{key:t,staticClass:"partner-item"},[e("img",{attrs:{src:n.src,alt:n.icon}})])}),0)}),0),n._v(" "),e("div",{staticClass:"partner-swiper-pagination-pc swiper-pagination-bullets",attrs:{slot:"pagination"},slot:"pagination"})])]),n._v(" "),e("div",{staticClass:"partner-content partner-m"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:partnerSwiperM",value:n.partnerSwiperOptionM,expression:"partnerSwiperOptionM",arg:"partnerSwiperM"}],staticClass:"swiper-partner"},[e("div",{staticClass:"swiper-wrapper"},n._l(n.partners,function(t,o){return e("div",{key:o,staticClass:"swiper-slide"},n._l(t,function(n,t){return e("div",{key:t,staticClass:"partner-item"},[e("img",{attrs:{src:n.src,alt:n.icon}})])}),0)}),0),n._v(" "),e("div",{staticClass:"partner-swiper-pagination-m swiper-pagination-bullets",attrs:{slot:"pagination"},slot:"pagination"})])])])])},[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"case-banner"},[t("section",{staticClass:"container banner"},[t("div",{staticClass:"main-banner content-box"},[t("h1",[this._v("\n                    客户成功案例\n                ")]),this._v(" "),t("p",{staticClass:"desc"},[this._v("\n                    即构为4000+企业提供音视频通信能力\n                ")]),this._v(" "),t("a",{staticClass:"apply-try",attrs:{href:"https://console.zego.im/acount/register",target:"_blank"}},[this._v("\n                    加入他们\n                ")])])])])}],!1,null,"394a9450",null);t.default=component.exports},478:function(n,t,e){var map={"./360.png":546,"./360ertong.png":547,"./aloha.png":548,"./bixin.png":479,"./blued.png":480,"./chucp.png":549,"./famy.png":550,"./feipeibaiyou.png":551,"./finger.png":481,"./gebitongxue.png":552,"./guangzhouyuexiuquzhengfu.png":553,"./haidiangongshangju.png":482,"./haifengjiaoyu.png":483,"./haoweilai.png":484,"./huajiao.png":485,"./iqeq.png":554,"./ivreal.png":486,"./jiayouxueba.png":487,"./jiuxiuzhibo.png":555,"./kingdee.png":488,"./kuaipeilian.png":489,"./kugouktv.png":490,"./kugouzhibo.png":556,"./kuwoyingyue.png":557,"./liujianfang.png":558,"./liveme.png":491,"./lizhi.png":492,"./loopslive.png":559,"./maoyandianying.png":560,"./memezhibo.png":561,"./mico.png":493,"./migu.png":494,"./mitaozhibo.png":562,"./mogolive.png":563,"./momoyouxi.png":564,"./nanchangdaxue.png":495,"./niuguwan.png":565,"./o/360.png":566,"./o/KilaKila.png":567,"./o/kingdee.png":568,"./o/mitaozhibo.png":569,"./o/quhongkeji.png":570,"./o/ttyuyin.png":571,"./o/乐玩游戏.png":572,"./o/乐道.png":573,"./o/南京新视云.png":574,"./o/威屏科技.png":575,"./o/火山小视频.png":576,"./o/狼人杀.png":577,"./o/祖龙娱乐.png":578,"./qingqingjiajiao.png":496,"./qingtingfm.png":579,"./qiqizhibo.png":580,"./quanminzhibo.png":581,"./quhongkeji.png":582,"./shenlanfakao.png":497,"./tanzhoujiaoyu.png":583,"./taqu.png":584,"./ttyuyin.png":498,"./uplive.png":499,"./wondernews.png":585,"./woshiyuyanjia.png":586,"./xiaoaizhibo.png":587,"./ximalaya.png":500,"./xinlangweibo.png":588,"./xiusezhibo.png":589,"./xiwo.png":501,"./yikachelianwang.png":502,"./yingkezhibo.png":503,"./yiqijiaoyukeji.png":504,"./yizhibo.png":590,"./youstar.png":591,"./yuer.png":592,"./yujian.png":505,"./yumeng.png":593,"./zhangmen.png":594,"./zhenaiwang.png":595,"./zhongguodianxin.png":596,"./zhongguoliantong.png":597,"./zhongguopingan.png":506,"./zhongugoyidong.png":598,"./ziyouzhizhan.png":599,"./zuoyebang.png":600};function o(n){var t=r(n);return e(t)}function r(n){if(!e.o(map,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return map[n]}o.keys=function(){return Object.keys(map)},o.resolve=r,n.exports=o,o.id=478},479:function(n,t,e){n.exports=e.p+"img/d2288ae.png"},480:function(n,t,e){n.exports=e.p+"img/6f28268.png"},481:function(n,t,e){n.exports=e.p+"img/6d139bb.png"},482:function(n,t,e){n.exports=e.p+"img/139d72a.png"},483:function(n,t,e){n.exports=e.p+"img/934df67.png"},484:function(n,t,e){n.exports=e.p+"img/a0a0624.png"},485:function(n,t,e){n.exports=e.p+"img/5e6ebec.png"},486:function(n,t,e){n.exports=e.p+"img/9cc3e35.png"},487:function(n,t,e){n.exports=e.p+"img/f8cdab5.png"},488:function(n,t,e){n.exports=e.p+"img/c8dd625.png"},489:function(n,t,e){n.exports=e.p+"img/a03b9fe.png"},490:function(n,t,e){n.exports=e.p+"img/03416b2.png"},491:function(n,t,e){n.exports=e.p+"img/51e0a75.png"},492:function(n,t,e){n.exports=e.p+"img/7dbe8aa.png"},493:function(n,t,e){n.exports=e.p+"img/835fec0.png"},494:function(n,t,e){n.exports=e.p+"img/0151c82.png"},495:function(n,t,e){n.exports=e.p+"img/c792402.png"},496:function(n,t,e){n.exports=e.p+"img/c153e9b.png"},497:function(n,t,e){n.exports=e.p+"img/d6c0892.png"},498:function(n,t,e){n.exports=e.p+"img/f631b00.png"},499:function(n,t,e){n.exports=e.p+"img/f7a5c8d.png"},500:function(n,t,e){n.exports=e.p+"img/485f925.png"},501:function(n,t,e){n.exports=e.p+"img/5bb0358.png"},502:function(n,t,e){n.exports=e.p+"img/7d4c006.png"},503:function(n,t,e){n.exports=e.p+"img/be35913.png"},504:function(n,t,e){n.exports=e.p+"img/8c64376.png"},505:function(n,t,e){n.exports=e.p+"img/b04563f.png"},506:function(n,t,e){n.exports=e.p+"img/b20e7b6.png"},545:function(n){n.exports={usecases:[{id:"yingkezhibo",user:"映客",total:"即构灵活的音视频底层架构，多个开放API接口，支持映客快速上线多人相亲交友、电台聊天室等全新玩法，突破行业发展瓶颈，实现业务升级。",industry:"泛娱乐",industryText:"泛娱乐",companyIntroduction:"映客APP是中国领先的移动端直播平台，以秀场直播、游戏直播为主，用户可以在平台上以多种方式互动，例如赠送虚拟物品、实时聊天、即时讯息或私信沟通及同玩社交游戏，随时随地参与直播。目前，映客已推出秒开、实时美颜及直播对战等多个功能，注册用户数达1.95亿人。",challenge:[{text:"直播行业的竞争趋于白热化，直播产品体验直接影响用户的停留时间，因此，直播技术是否能满足低延迟、高音质、高并发、高稳定的要求成为我们需要解决的问题。"},{text:"秀场直播玩家众多，行业同质化严重，不同平台的技术和内容相差都不大，主播流动性大。需要不断推出新的玩法来吸引主播、吸引用户，提高用户粘性和主播收入。"}],solution:[{text:"在即构音视频技术的支持下，映客的直播产品实现了与用户的实时无损互通，百万级别的高并发下依然能实现低延迟高音质的直播体验。创新的6人连麦互动玩法，打造行业多人互动直播的标杆。"},{text:"即构灵活的音视频底层架构，支持映客快速上线多人相亲交友、电台聊天室等全新互动模式，让平台用户量和活跃度日益攀升，为用户带来多样化的直播互动体验。"},{text:"基于即构优秀的语音前处理能力和音视频流媒体加速传输能力，映客上线了语音社交新产品——麦萌，通过抢唱+AI识别模式，开创了KTV语聊房的新玩法。基于即构开放的前处理接口，麦萌对用户的歌声进行了美化处理和定制开发，提升了用户体验，进一步激活用户活跃度。"}],value:"作为国内在社交娱乐玩法上最具创新力的直播平台，即构支持映客持续不断的推出多种新玩法，从秀场直播、连麦互动直播到语聊房、音乐社交，映客将直播放置在泛娱乐这一大的内容生态中，从依赖打赏分成的单一营收模式扩展到广告、电商、付费订阅等多种模式，突破了行业发展瓶颈，实现业务的升级。",relate:["huajiao","kugouktv","haoweilai"]},{id:"haoweilai",user:"好未来",total:"即构稳定可靠的实时音视频技术，与好未来共同打造了一对一、跨国小班、互动大班、超级小班等多种教学模式，支持好未来不断推出新的教学模式。",industry:"在线教育",industryText:"在线教育",companyIntroduction:"好未来是国内首家在美上市的中小学教育机构，作为一家科技教育公司，好未来以智慧教育和开放平台为主体，构建了智慧教育、教育云、内容及未来教育、K12及综合能力和国际及终身教育五大事业群，旗下共有学而思、学而思网校、爱智康、励步英语等15个业务品牌，并投资了宝宝树、轻轻家教等多家教育机构。目前，旗下业务覆盖全国55个城市，线下学生达到450多万，线上注册用户超过3600多万。",challenge:[{text:"在线教育场景中，音视频传输的质量直接影响了学生和老师的互动教学效果。好未来希望在直播大班、互动小班以及跨国在线小班等多种教学场景中，都能获得高清、稳定、高并发的实时互动视频技术支持，在教学互动中保证多方超低延时音画同步。"},{text:"由于学生和老师分隔屏幕两端，学生只有在互动性强的氛围中，才能更好的实现应用性的学习，如K12类的学生，年龄比较小，自制力比成人更差一些，通过与同学一起学，大家相互交流、相互督促，效果比直接听直播课大不一样。"},{text:"优秀的教师资源匮乏，并且集中在发达城市和地区，教师的影响力有限，在保证互动教学效果的同时，如何让更多学生获得更优质的教学，降低教师成本，是困扰好未来的一个难题。"}],solution:[{text:"即构在线教育解决方案提供音画同步，超低延时的教学视频直播技术，为在线教育平台提供清晰高保真的多人互动双讲效果。"},{text:"即构通过灵活的音视频架构，帮助好未来实现“1个主讲老师 + N个助教老师+几十或几百个小班”的超级小班模式，主讲老师同时面向多个班级的学生讲授教学，助教老师管理多个班级，可以随时进入某个小班查看情况。小班成员能进行连麦互动交流，激发学习兴趣。多房间同步共享音视频教学流，让主讲老师、助教、学生多方获得高清流畅的教学体验。"},{text:"超级小班模式中，千人大班只需少量的主讲老师和助教老师就可实现小班互动教学效果，大幅度降低了教师成本，主讲老师和助教老师精准分工，制定教学流程，将讲课过程的细节标准化，从整体上提升教学质量。"}],value:"即构稳定可靠的实时音视频技术，与好未来共同打造了一对一、跨国小班、互动大班、超级小班等多种教学模式。技术上克服了超高并发和强音视频互动的压力，让师生获得流畅的在线课堂体验。在即构的支持下，好未来不断推出新的教学模式，引领全球在线教育企业持续创新，开拓新的业务线。用科技推动教育进步、促进教育公平。",relate:["xiwo","yiqijiaoyukeji","yingkezhibo"]},{id:"kugouktv",user:"酷狗KTV",total:"酷狗线上KTV主要传递的是用户的歌声，对音质要求高。即构方案在进行语音3A前处理外，还提供混响、变声、立体声功能，让歌声丰满有层次。",industry:"泛娱乐",industryText:"泛娱乐",companyIntroduction:"酷狗KTV是酷狗音乐推出的首款集K歌、交友、角色虚拟于一身的3D音乐类社交应用；通过模拟线下K歌玩法，让用户在线上体验逼真的虚拟卡拉OK乐趣。目前平台推出多人在线K歌、组队K歌、角色扮演、在线交友等多种玩法，打造“K歌+交友”新模式。",challenge:[{text:"在线KTV主要传递的是用户的歌声，在回声抑制、噪声控制、音量增益处理后，还需进行高质量的音频处理，让歌声更好听动人；"},{text:"用户在线下K歌时可以通过显示大屏查看歌词、MV画面，主播直播唱歌或者在线K歌时，歌词、MV画面、音高线、伴奏等信息需要和歌声同步；"},{text:"在探索数字音乐发展新模式的过程中，对产品业务的灵活性和质量有很高的要求，除了能够保障高清流畅的视频及高保真音质效果之外，还需具备全终端适配性。"}],solution:[{text:"即构KTV解决方案具有混响、变声、立体声功能，可实现男声变女声、3D环绕音等特效，让歌声丰满有层次，听众就像置身音乐剧场一般；"},{text:"即构通过流媒体信息同步技术，将歌词、音高线、MV等信息塞入媒体帧中，实现与歌声的实时同步；"},{text:"即构提供全终端完整的音视频解决方案，支持自主性加入特定场景化音视频处理，灵活地与产品功能设计契合。完全自主研发的音视频引擎，可灵活适配各类系统平台，比如：PC、mac、Android、IOS、小程序、H5及linux等各种平台，让酷狗KTV快速的进行产品功能迭代，抢占市场。"}],value:"通过集成即构在线KTV解决方案，酷狗KTV将线下KTV的场景搬到线上，让用户不被K房束缚。即构全终端完整的音视频解决方案，帮助酷狗KTV节省大量的研发时间和成本，极大拉近了想法到产品的距离，开放式的音视频功能模块帮助酷狗快速的实现产品功能场景创新，高质量的音视频服务保障，为酷狗4.5亿用户带来极高的体验。",relate:["huajiao","yingkezhibo","haoweilai"]},{id:"yiqijiaoyukeji",user:"一起教育科技",total:"针对目前在线教育行业教师资源紧张，教师成本高的痛点，即构AI智能课堂解决方案，让一起教育科技实现AI小班课堂的快速落地，节省平台的教师成本。",industry:"在线教育",industryText:"在线教育",companyIntroduction:"一起教育科技的前身是一起作业网，是全球领先的K12智能教育平台。怀着“让学习成为美好体验”的使命，一起教育科技致力于用先进的教育科技、优质的教育内容和持续的教育热情，为K12阶段的学校、家庭、社会教育场景，提供更为高效、美好的产品和体验，开启了智能教育新时代。",challenge:[{text:"在线教育行业教师资源紧张，教师成本占据平台运营成本相当大的比重，如何利用有限的资源获得最大的利润，成为平台竞争力的关键；"},{text:"线上教育由于教师和学生分隔屏幕两端，教师更难掌握每个学生的学习进度。一起教育科技希望通过AI人工智能、大数据分析等技术，让每个学生规划最优学习路径。"}],solution:[{text:"即构AI智能课堂解决方案，帮助一起教育科技将有限的教师资源无限利用，每节课只需教师录制一次，后续就可不断重复使用，有效的降低教师成本；"},{text:"即构AI智能课堂解决方案优质的音视频传输能力，帮助一起教育科技在课堂上加入AI识别技术，智能判断学生的学习情况，实时进行不同的教学反馈，达到因材施教的目的。对于不同进度的学生进行智能分班，让每个学生获得更佳的学习效果。"}],value:"接入即构AI智能课堂解决方案，一起教育科技实现了AI小班课堂的快速落地，帮助平台近乎无限的开课，节省大量的教师成本。通过将互动直播技术与AI识别相结合，用创新技术助推行业变革。",relate:["xiwo","haoweilai","yingkezhibo"]},{id:"haidiangongshangju",user:"海淀工商局",total:"即构携手海淀工商局打造的小程序视频办事平台“海淀工商企航直通中心”，用线上可视化办公，替代原有工作方式，提高多方工作效率。",industry:"政企",industryText:"政府机构",companyIntroduction:"海淀工商分局成立于1980年，地处中关村科技园区核心区。海淀区内有几千家高新企业，多是和消费者密切接触的电商类企业，海淀工商局积极促进投资与消费，提升企业和群众便利化的办事体验，为海淀区创新和发展营造良好的市场生态环境。",challenge:[{text:"海淀区内每年接到消费者投诉居全国前三，工作任务繁重。企业人员办理工商营业执照、处理消费者投诉业务，从资料准备、受理、咨询等，经常办一件事跑一趟，一来二去耽误了不少时间。工商人员也经常要去到现场了解企业需求、处理投诉纠纷。双方频繁来回奔波，身体劳累效率也不高。"}],solution:[{text:"即构携手海淀工商局打造视频办事平台“海淀工商企航直通中心”，通过微信小程序接入即构科技的政务解决方案，实现线上办理备案、网上登记、处理消费者投诉等事务。将原本需要不同部门、企业线下面对面解决的事情搬到线上，通过实时视频通话，几分钟就能处理，大大提高了工作效率。"}],value:"“海淀工商企航直通中心”线上服务平台是政务单位首次使用小程序平台，搭载即构科技政务解决方案，用线上可视化办公，替代原有工作方式，提高多方工作效率。对于传统的政企民生行业来说，该项目的落地，成功开拓了直播技术在传统行业的全新应用场景，对其他政府单位、国企、民生单位具有极大的借鉴意义。",relate:["yingkezhibo","huajiao","haoweilai"]},{id:"uplive",user:"UpLive",total:"即构音视频SDK支持Uplive实现主播同屏PK、多人连麦语音聊室、游戏直播等多种直播创新玩法，助力Uplive快速抢占印度、印度尼西亚等新兴市场。",industry:"出海",industryText:"出海",companyIntroduction:"Uplive是一款直播互动交友APP，2016年7月在中东北非上线以来，快速融合当地文化，深入体验用户习惯，在中东北非国家广受好评，并迅速向全球扩展。目前，Uplive在全球拥有6000万用户，每天有超过10万活跃用户，主播数量超过10万。",challenge:[{text:"与国内直播平台相比，Uplive更强调社交属性，通过礼物、特效、游戏、翻译等功能形成平台整体的差异化。"}],solution:[{text:"即构音视频SDK为Uplive提供全球低延迟稳定流畅的直播连麦技术，支持Uplive实现美女秀场直播、主播同屏PK、多人连麦语音聊室、游戏直播等多种直播Live的玩法。"}],value:"即构助力Uplive以秀场模式打造全球化的精品直播内容。通过直播创新玩法，实现新用户900%的增长，快速抢占印度、印度尼西亚等新兴市场，目前Uplive在全球拥有上亿的用户，月活用户千万以上。",relate:["liveme","yingkezhibo","haoweilai"]},{id:"huajiao",user:"花椒",total:"即构300ms超低延迟连麦互动直播方案，让花椒直播快速推出两人和多人连麦互动直播，优秀的语音前处理技术让主播声音清亮真实，为用户带来优质的体验。",industry:"泛娱乐",industryText:"泛娱乐",companyIntroduction:"花椒直播是国内具有强明星属性的移动社交直播平台，聚焦90/95后生活，鼓励用户进行直播互动和分享。致力于以强技术实力和优质的内容，打造一个具有强明星属性的直播平台。目前已有数百位明星入驻，用户可以通过直播了解明星鲜活接地气的一面。上百档自制直播节目和多种连麦互动玩法，吸引了大量优质用户。",challenge:[{text:"受限于延迟时长，主播只能“独框”直播，不能与其他主播/观众连麦互动，多种创意玩法无法实现；"},{text:"花椒直播致力于打造高质量秀场直播平台，一方面要求平台主播、节目内容优质，另一方面对音质和视频的要求高"}],solution:[{text:"即构连麦互动直播方案延迟大概300-400毫秒，主播可以和其它主播或观众进行“同框”互动，实现两人，或者多人连麦，支持花椒直播以较快的频率推出K歌之王、浴室对战等各种创新的玩法。"},{text:"即构音视频SDK提供优秀的回声消除、噪音抑制、音量增益等语音前处理技术，让主播声音清亮真实，超低延时的连麦技术为用户带来优质的体验。"}],value:"在单主播直播盛行时，通过集成即构连麦互动方案，花椒直播快速上线了连麦互动玩法，在众多直播平台中脱颖而出。即构低延迟、流畅、高音质的语音视频效果，支持花椒直播打造挂件、萌颜、变脸等丰富的交互功能，提高平台竞争力。",relate:["yingkezhibo","kugouktv","haoweilai"]},{id:"liveme",user:"LiveMe",total:"LiveMe平台上汇集了来自全球各个国家的用户，面对复杂的国际网络状况，即构通过自动调节技术，动态调整帧率、码率、分辨率，支持全球海量高并发。",industry:"出海",industryText:"出海",companyIntroduction:"LiveMe是一款出海直播社交APP，2016年4月在美国上线后，多次在美国社交产品畅销榜排行第一，苹果应用商店美国社交产品畅销榜的前五。随后，LiveMe在中国台湾、日韩、东南亚、俄罗斯等地相继上线，覆盖全球超过85个国家和地区，拥有数十万主播，超过1亿用户，是当之无愧的海外直播平台领导者。",challenge:[{text:"在LiveMe进入美国市场前，Instagram、YouTube和Facebook已推出直播产品，但直播并没有成为主流，LiveMe需要创新玩法，吸引网红主播入驻，提升用户数量和活跃度。"},{text:"LiveMe作为泛娱乐出海的典型，来自全球各个国家的主播在平台上进行直播互动，但复杂多变的国际网络状况导致出现画质差、全球登录响应速度慢、网络不稳定等问题，影响当地用户的直播体验。"}],solution:[{text:"在即构连麦技术支持下，LiveMe实现了主播与观众的实时互动，推出多种不同的玩法，比如直播答题、多主播连麦PK、游戏直播、全球直播等，拓展了多种业务功能。"},{text:"为实现LiveMe流畅的跨国全球直播，即构基于公有云铺设了大量国内外媒体服务器节点，构建国内外信令数据加速网络，通过自动调节技术，语音视频引擎动态调整帧率、码率、分辨率，面对不同区域的网络状况，都可实现秒开效果，支持全球海量高并发。"}],value:"在即构音视频技术的支持下，LiveMe在全球领域快速扩张，用户数和用户活跃度持续攀升，成为海外直播平台领导者。通过LiveMe在海外的成功落地，为中国企业出海、落地，并因地制宜实现产品创新与本土化运营提供丰富经验。",relate:["uplive","kugouktv","haoweilai"]},{id:"xiwo",user:"希沃",total:"作为希沃“专递课堂”音视频技术唯一提供方，即构支持希沃实现了1080P的高清教学和100ms超低延迟互动，通过在线教育的方式，助力实现教育公平。",industry:"在线教育",industryText:"在线教育",companyIntroduction:"希沃（seewo）是视睿科技在教育领域的自主品牌，是国内交互智能平板品类首创者。2012年-2018年连续7年蝉联中国交互智能平板行业市占率桂冠，目前全国超过1000个合作服务网点，覆盖719个城市。seewo希沃致力成为教育技术和教育信息化服务领域，最具竞争力的教育信息化应用工具提供商。",challenge:[{text:"希沃互动录播课堂，也叫“专递课堂”和“双师课堂”，采用“1+3+N”的教学模式。即1个设在各区县的中心校的授课教室，同时连接3个听课教室进行教学互动，外加N个旁听教室，听课教室和旁听教室分别设在教育力量薄弱的普通中小学或教学点。在此应用场景下，互动录播课堂面临的严峻挑战有:"},{text:"“专递课堂”要同时做到1080P的多路数据流和高并发；"},{text:"在资源贫瘠和网络不稳定的地区，要求做到极低的延迟和良好的抗网络抖动能力；"},{text:"希沃自身硬件设备是嵌入式Linux系统，硬件资源有限且兼容性要求很高。"}],solution:[{text:"作为希沃专递课堂音视频技术唯一提供方，即构自研的音视频引擎，为希沃“专递课堂”提供了稳定可靠技术支持："},{text:"即构自研的音视频引擎，在音视频前处理、网络自适应、跨平台兼容性方面达到了国际顶尖水平，可实现1080P的高清教学和100ms超低延迟互动；"},{text:"通过即构自研的音视频前向纠错算法、丢帧补偿算法、对抗网络抖动算法，能自适应不同状态的网络，智能抹平网络抖动，对抗网络抖动带来的卡顿；"},{text:"即构为希沃的Linux嵌入式硬件提供了兼容的实时语音视频SDK和云服务，在嵌入式设备有限的CPU资源上，能更高效地运行。"}],value:"即构助力希沃实现“专递课堂”，在全国范围推行，获得了教育局一致好评，提升了希沃的品牌价值；2019年在即构音视频技术的支持下，希沃和联通在广州实验中学实现了全国首个5G+智能教育应用的落地，开创了5G时代在线教育的创新应用；在充分利用希沃录播设备，借助即构实时通讯技术的前提下，通过在线教育的方式，助力实现教育公平。",relate:["yiqijiaoyukeji","haoweilai","yingkezhibo"]}],partners:[[{icon:"yingkezhibo"},{icon:"xinlangweibo"},{icon:"ximalaya"},{icon:"huajiao"},{icon:"migu"},{icon:"maoyandianying"},{icon:"kugouzhibo"},{icon:"kugouktv"},{icon:"liujianfang"},{icon:"haoweilai"},{icon:"yiqijiaoyukeji"},{icon:"zuoyebang"},{icon:"xiwo"},{icon:"zhongguopingan"},{icon:"kingdee"},{icon:"uplive"},{icon:"liveme"},{icon:"lizhi"}],[{icon:"yizhibo"},{icon:"kuwoyingyue"},{icon:"jiuxiuzhibo"},{icon:"chucp"},{icon:"quanminzhibo"},{icon:"haifengjiaoyu"},{icon:"zhangmen"},{icon:"qingqingjiajiao"},{icon:"finger"},{icon:"shenlanfakao"},{icon:"kuaipeilian"},{icon:"360"},{icon:"yikachelianwang"},{icon:"loopslive"},{icon:"aloha"},{icon:"famy"},{icon:"haidiangongshangju"},{icon:"guangzhouyuexiuquzhengfu"}],[{icon:"nanchangdaxue"},{icon:"zhongugoyidong"},{icon:"zhongguoliantong"},{icon:"zhongguodianxin"},{icon:"jiayouxueba"},{icon:"feipeibaiyou"},{icon:"iqeq"},{icon:"ivreal"},{icon:"wondernews"},{icon:"mogolive"},{icon:"youstar"},{icon:"blued"},{icon:"bixin"},{icon:"taqu"},{icon:"quhongkeji"},{icon:"xiusezhibo"},{icon:"momoyouxi"},{icon:"qiqizhibo"}],[{icon:"xiaoaizhibo"},{icon:"ziyouzhizhan"},{icon:"niuguwan"},{icon:"memezhibo"},{icon:"gebitongxue"},{icon:"yuer"},{icon:"yumeng"},{icon:"yujian"}]]}},546:function(n,t,e){n.exports=e.p+"img/484d539.png"},547:function(n,t,e){n.exports=e.p+"img/f106009.png"},548:function(n,t,e){n.exports=e.p+"img/4811602.png"},549:function(n,t,e){n.exports=e.p+"img/a354964.png"},550:function(n,t,e){n.exports=e.p+"img/05bdff4.png"},551:function(n,t,e){n.exports=e.p+"img/e5040cf.png"},552:function(n,t,e){n.exports=e.p+"img/f03eabf.png"},553:function(n,t,e){n.exports=e.p+"img/34be4a8.png"},554:function(n,t,e){n.exports=e.p+"img/b51561a.png"},555:function(n,t,e){n.exports=e.p+"img/867e08e.png"},556:function(n,t,e){n.exports=e.p+"img/b49ec8a.png"},557:function(n,t,e){n.exports=e.p+"img/e052b98.png"},558:function(n,t,e){n.exports=e.p+"img/91d7394.png"},559:function(n,t,e){n.exports=e.p+"img/b55c91e.png"},560:function(n,t,e){n.exports=e.p+"img/ffe7236.png"},561:function(n,t,e){n.exports=e.p+"img/59cfebc.png"},562:function(n,t,e){n.exports=e.p+"img/2e8908b.png"},563:function(n,t,e){n.exports=e.p+"img/0adaa5e.png"},564:function(n,t,e){n.exports=e.p+"img/92c2b90.png"},565:function(n,t,e){n.exports=e.p+"img/34c86fb.png"},566:function(n,t,e){n.exports=e.p+"img/59c3045.png"},567:function(n,t,e){n.exports=e.p+"img/50c65ad.png"},568:function(n,t,e){n.exports=e.p+"img/c8dd625.png"},569:function(n,t,e){n.exports=e.p+"img/1e7ad18.png"},570:function(n,t,e){n.exports=e.p+"img/2eb0956.png"},571:function(n,t,e){n.exports=e.p+"img/f631b00.png"},572:function(n,t,e){n.exports=e.p+"img/5dc3084.png"},573:function(n,t,e){n.exports=e.p+"img/837b6e5.png"},574:function(n,t,e){n.exports=e.p+"img/98d0739.png"},575:function(n,t,e){n.exports=e.p+"img/74fcff1.png"},576:function(n,t,e){n.exports=e.p+"img/d6ca862.png"},577:function(n,t,e){n.exports=e.p+"img/2a13f1a.png"},578:function(n,t,e){n.exports=e.p+"img/b8e5d05.png"},579:function(n,t,e){n.exports=e.p+"img/fbeeb8f.png"},580:function(n,t,e){n.exports=e.p+"img/7c75459.png"},581:function(n,t,e){n.exports=e.p+"img/13aa4e9.png"},582:function(n,t,e){n.exports=e.p+"img/b704f09.png"},583:function(n,t,e){n.exports=e.p+"img/d46f9fc.png"},584:function(n,t,e){n.exports=e.p+"img/1f45f3f.png"},585:function(n,t,e){n.exports=e.p+"img/c06ec67.png"},586:function(n,t,e){n.exports=e.p+"img/0381f50.png"},587:function(n,t,e){n.exports=e.p+"img/4cb98ad.png"},588:function(n,t,e){n.exports=e.p+"img/b4207ab.png"},589:function(n,t,e){n.exports=e.p+"img/92d00c4.png"},590:function(n,t,e){n.exports=e.p+"img/3425cbe.png"},591:function(n,t,e){n.exports=e.p+"img/6ad165d.png"},592:function(n,t,e){n.exports=e.p+"img/9a5964a.png"},593:function(n,t,e){n.exports=e.p+"img/462fff9.png"},594:function(n,t,e){n.exports=e.p+"img/9f8ce4d.png"},595:function(n,t,e){n.exports=e.p+"img/fb66ede.png"},596:function(n,t,e){n.exports=e.p+"img/bed1cce.png"},597:function(n,t,e){n.exports=e.p+"img/46eeb68.png"},598:function(n,t,e){n.exports=e.p+"img/89389b4.png"},599:function(n,t,e){n.exports=e.p+"img/5ecc212.png"},600:function(n,t,e){n.exports=e.p+"img/f487d1e.png"},601:function(n,t,e){var content=e(855);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(25).default)("2ac48b5f",content,!0,{sourceMap:!1})},854:function(n,t,e){"use strict";var o=e(601);e.n(o).a},855:function(n,t,e){t=n.exports=e(24)(!1);var o=e(62),r=o(e(856)),c=o(e(485)),d=o(e(503)),l=o(e(484)),m=o(e(501)),h=o(e(490)),f=o(e(491)),x=o(e(499)),v=o(e(500)),w=o(e(492)),k=o(e(494)),y=o(e(498)),z=o(e(479)),j=o(e(505)),C=o(e(480)),_=o(e(504)),K=o(e(496)),M=o(e(497)),U=o(e(486)),I=o(e(483)),O=o(e(489)),S=o(e(487)),T=o(e(481)),P=o(e(493)),A=o(e(502)),L=o(e(482)),V=o(e(495)),D=o(e(488)),E=o(e(506)),X=o(e(857));t.push([n.i,".case-container[data-v-394a9450]{background-color:#fafafb}.container[data-v-394a9450]{max-width:1200px;margin:auto;padding:0}.case-banner[data-v-394a9450]{margin-top:-68px;height:360px;background-color:#20232d;background:url("+r+') 50% no-repeat;background-size:cover}.banner[data-v-394a9450]{position:relative;display:-webkit-box;display:flex;margin-top:68px;height:100%;box-sizing:border-box}.main-banner[data-v-394a9450]{width:100%;padding-top:137px;color:#fff;font-family:PingFangSC-Light}.main-banner h1[data-v-394a9450]{font-size:34px;font-family:PingFangSC-Regular;font-weight:300}.main-banner .desc[data-v-394a9450]{margin-top:19px;width:460px;line-height:1}.main-banner .apply-try[data-v-394a9450]{display:inline-block;margin-top:32px;width:104px;height:44px;line-height:42px;text-align:center;font-size:14px;font-weight:400;color:#fefefe;border-radius:4px;border:1px solid #f5f8ff}.case-content[data-v-394a9450]{background-color:#fff}.case-content .case-main[data-v-394a9450]{padding-top:32px;max-width:1254px}.case-content .case-main .more[data-v-394a9450]{display:block;width:222px;height:64px;background:#04f;border-radius:8px;font-size:18px;font-family:PingFang SC;font-weight:400;color:#fff;margin:0 auto}.swiper-partner[data-v-394a9450]{width:1200px;margin:0 auto;padding-bottom:30px}.swiper-partner.m[data-v-394a9450]{display:none}.partner[data-v-394a9450]{height:566px;padding-top:80px}.partner .partner-title[data-v-394a9450]{margin-bottom:70px;font-size:34px;color:#222;text-align:center}.partner-content.partner-pc .partner-item[data-v-394a9450]{float:left;width:150px;height:50px;margin-right:50px;margin-bottom:55px;text-align:center}.partner-content.partner-pc .partner-item img[data-v-394a9450]{height:100%}.partner-content.partner-m[data-v-394a9450]{display:none}.partner-swiper-pagination-pc[data-v-394a9450]{text-align:center}.partner-swiper-pagination-pc[data-v-394a9450] .swiper-pagination-item{position:relative;display:inline-block;width:28px;height:4px;margin-right:8px;padding:5px 0;background:transparent;border-radius:0;opacity:1;cursor:pointer}.partner-swiper-pagination-pc[data-v-394a9450] .swiper-pagination-item:before{content:"";position:absolute;left:0;width:28px;height:4px;background:#e6e6e6}.partner-swiper-pagination-pc[data-v-394a9450] .swiper-pagination-item.swiper-pagination-bullet-active:before{background:#04f}.industry[data-v-394a9450]{margin-bottom:24px;height:64px;line-height:64px;font-size:0;text-align:center}.industry .industry-item[data-v-394a9450]{display:inline-block}.industry .industry-item a[data-v-394a9450]{padding:5px 0;font-size:18px;color:#222}.industry .industry-item a[data-v-394a9450]:hover{border-bottom:3px solid #0055fe}.industry .industry-item[data-v-394a9450]:not(:last-child){margin-right:53px}.industry .industry-item.active a[data-v-394a9450]{border-bottom:3px solid #0055fe}.case-wrapper[data-v-394a9450]{display:-webkit-box;display:flex;flex-wrap:wrap;padding-bottom:26px;-webkit-box-pack:start;justify-content:flex-start}.case-wrapper .case-item-wrapper[data-v-394a9450]{padding:0 27px}.case-wrapper .case-item[data-v-394a9450]{position:relative;width:364px;height:300px;padding-top:50px;margin-bottom:54px;border:1px solid #eee;border-radius:8px;-webkit-transition:transform .25s ease,box-shadow .25s ease;transition:transform .25s ease,box-shadow .25s ease}.case-wrapper .case-item .icon[data-v-394a9450]{display:inline-block;width:100%;height:74px}.case-wrapper .case-item .icon.huajiao[data-v-394a9450]{background:url('+c+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.yingkezhibo[data-v-394a9450]{background:url("+d+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.haoweilai[data-v-394a9450]{background:url("+l+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.xiwo[data-v-394a9450]{background:url("+m+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.kugouktv[data-v-394a9450]{background:url("+h+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.liveme[data-v-394a9450]{background:url("+f+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.uplive[data-v-394a9450]{background:url("+x+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.ximalaya[data-v-394a9450]{background:url("+v+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.lizhi[data-v-394a9450]{background:url("+w+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.migu[data-v-394a9450]{background:url("+k+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.ttyuyin[data-v-394a9450]{background:url("+y+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.bixin[data-v-394a9450]{background:url("+z+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.yujian[data-v-394a9450]{background:url("+j+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.blued[data-v-394a9450]{background:url("+C+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.yiqijiaoyukeji[data-v-394a9450]{background:url("+_+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.qingqingjiajiao[data-v-394a9450]{background:url("+K+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.shenlanfakao[data-v-394a9450]{background:url("+M+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.ivreal[data-v-394a9450]{background:url("+U+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.haifengjiaoyu[data-v-394a9450]{background:url("+I+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.kuaipeilian[data-v-394a9450]{background:url("+O+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.jiayouxueba[data-v-394a9450]{background:url("+S+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.finger[data-v-394a9450]{background:url("+T+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.mico[data-v-394a9450]{background:url("+P+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.yikachelianwang[data-v-394a9450]{background:url("+A+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.haidiangongshangju[data-v-394a9450]{background:url("+L+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.nanchangdaxue[data-v-394a9450]{background:url("+V+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.kingdee[data-v-394a9450]{background:url("+D+") no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .icon.zhongguopingan[data-v-394a9450]{background:url("+E+') no-repeat;background-size:contain;background-position:50%}.case-wrapper .case-item .case-val[data-v-394a9450]{padding:26px 48px 0;line-height:25px}.case-wrapper .case-item .case-link[data-v-394a9450]{position:absolute;display:none;width:100%;height:54px;line-height:54px;top:280px;font-size:16px;color:#fff;text-align:center;background-color:#0055fe;border-bottom-left-radius:8px;border-bottom-right-radius:8px}.case-wrapper .case-item[data-v-394a9450]:hover{border:0;box-shadow:0 80px 40px -40px rgba(0,0,0,.3),0 20px 40px 0 rgba(0,0,0,.08);-webkit-transform:translate3d(0,-17px,0);transform:translate3d(0,-17px,0)}.case-wrapper .case-item:hover .case-link[data-v-394a9450]{display:block}.case-wrapper .case-item[data-v-394a9450]:last-child{margin-right:auto}.case-wrapper[data-v-394a9450]:after{content:"";display:block;clear:both}.technology .technology .tech-img[data-v-394a9450]{height:252px}.technology .tech-content[data-v-394a9450]{height:864px;text-align:center}.technology .tech-content .tech-text[data-v-394a9450]{margin-top:80px;font-size:34px;color:#222}.tech-main[data-v-394a9450]{display:-webkit-box;display:flex;margin-top:69px}.tech-nav[data-v-394a9450]{width:500px;padding-right:26px;box-sizing:border-box;text-align:left}.tech-nav .nav-item[data-v-394a9450]{width:460px;height:150px;padding:0 44px 0 37px;position:relative}.tech-nav .nav-item div[data-v-394a9450]{padding:30px 0 31px}.tech-nav .nav-item img[data-v-394a9450]{display:inline-block;width:36px;height:36px;margin-right:19px;vertical-align:middle}.tech-nav .nav-item .nav-title[data-v-394a9450]{font-size:18px;color:#666;line-height:36px;vertical-align:middle}.tech-nav .nav-item .nav-content[data-v-394a9450]{margin-top:6px;font-size:14px;color:#999;line-height:24px}.tech-nav .nav-item[data-v-394a9450]:hover{box-shadow:0 5px 18px 0 rgba(0,0,0,.1);border-radius:4px}.tech-nav .nav-item[data-v-394a9450]:hover:after{position:absolute;left:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);content:"";width:0;height:0;border:14px solid transparent;border-left-color:#fff}.tech-relation[data-v-394a9450]{position:relative;width:700px;padding:50px}.tech-relation .rel-wrapper[data-v-394a9450]{position:absolute;top:52%;opacity:0;-webkit-transition:opacity .6s,-webkit-transform .6s;transition:opacity .6s,-webkit-transform .6s;transition:opacity .6s,transform .6s;transition:opacity .6s,transform .6s,-webkit-transform .6s}.tech-relation .pic[data-v-394a9450]{height:406px}.tech-relation .rel[data-v-394a9450]{padding:45px 52px;display:-webkit-box;display:flex}.tech-relation .rel .icon[data-v-394a9450]{display:inline-block;width:92px;height:92px;margin-right:23px}.tech-relation .rel .icon.icon-live[data-v-394a9450]{background-size:contain;background-position:50%}.tech-relation .rel .rel-content[data-v-394a9450]{position:relative;-webkit-box-flex:1;flex:1;text-align:left;padding-left:9px}.tech-relation .rel .rel-content .rel-title[data-v-394a9450]{font-size:18px;color:#222;margin-bottom:14px}.tech-relation .rel .rel-content .rel-text[data-v-394a9450]{line-height:24px;background-color:#f5f5f7;border-radius:4px;color:#666;padding:11px 22px}.tech-relation .rel .rel-content[data-v-394a9450]:before{position:absolute;top:50%;left:-9px;-webkit-transform:translateY(-50%);transform:translateY(-50%);content:"";width:0;height:0;border:9px solid transparent;border-right-color:#f5f5f7}@-webkit-keyframes move-data-v-394a9450{0%{-webkit-transform:translateX(-100px);transform:translateX(-100px)}to{-webkit-transform:translateX(-2640px);transform:translateX(-2640px)}}@keyframes move-data-v-394a9450{0%{-webkit-transform:translateX(-100px);transform:translateX(-100px)}to{-webkit-transform:translateX(-2640px);transform:translateX(-2640px)}}.banner .partner-swiper-pagination[data-v-394a9450]{position:absolute;bottom:0;z-index:2}.swiper-pagination-bullets.solu-swiper-pagination[data-v-394a9450]{bottom:0!important;top:0;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;padding:0 71px}.tag[data-v-394a9450]{display:inline-block;width:64px;height:24px;line-height:2;text-align:center;border-right:2px;font-size:12px;border-radius:2px}.tag.tag-orange[data-v-394a9450]{background-color:rgba(255,128,3,.12);color:#f70}.tag.tag-blue[data-v-394a9450]{background-color:rgba(2,70,249,.1);color:#04f}@media screen and (max-width:1264px){.case-wrapper[data-v-394a9450]{-webkit-box-pack:center;justify-content:center}.case-wrapper .case-item-wrapper[data-v-394a9450]:last-child:nth-child(2n-1){margin-right:418px}}@media screen and (max-width:1000px){.content-box[data-v-394a9450]{padding-left:.6rem;padding-right:.6rem}.case-banner[data-v-394a9450]{height:4.58rem;background:url('+X+') 50% no-repeat;background-size:cover}.main-banner[data-v-394a9450]{padding-top:1.67rem;color:#fff;font-family:PingFangSC-Light}.main-banner h1[data-v-394a9450]{font-size:.48rem;font-weight:400}.main-banner .desc[data-v-394a9450]{margin-top:.2rem;width:4.25rem;font-size:.24rem;line-height:.28rem}.main-banner .apply-try[data-v-394a9450]{display:inline-block;margin-top:.37rem;width:1.44rem;height:.64rem;line-height:.6rem;text-align:center;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;font-size:.24rem;font-weight:400;color:#fff;border-radius:.08rem;border:.02rem solid #fff}.case-content .case-main[data-v-394a9450]{padding-top:0;padding-bottom:1rem}.case-content .case-main .more[data-v-394a9450]{display:block;width:2.92rem;height:.8rem;border-radius:.08rem;margin:0 auto;background-color:#04f;color:#fff;font-size:.28rem;border:0}.partner[data-v-394a9450]{height:10.74rem;padding-top:1rem}.partner .partner-title[data-v-394a9450]{margin-bottom:70px;font-size:.48rem;color:#222;text-align:center}.partner-swiper-pagination-m[data-v-394a9450]{text-align:center}.partner-swiper-pagination-m[data-v-394a9450] .swiper-pagination-item{position:relative;display:inline-block;width:28px;height:4px;margin-right:8px;padding:5px 0;background:transparent;border-radius:0;opacity:1;cursor:pointer}.partner-swiper-pagination-m[data-v-394a9450] .swiper-pagination-item:before{content:"";position:absolute;left:0;width:28px;height:4px;background:#e6e6e6}.partner-swiper-pagination-m[data-v-394a9450] .swiper-pagination-item.swiper-pagination-bullet-active:before{background:#04f}.swiper-partner[data-v-394a9450]{width:6.9rem;margin:0 auto;padding-bottom:30px}.partner-content.partner-pc[data-v-394a9450],.swiper-partner.m[data-v-394a9450]{display:none}.partner-content.partner-m[data-v-394a9450]{display:block}.partner-content.partner-m .partner-item[data-v-394a9450]{float:left;width:33.3%;height:.9rem;margin-right:0;margin-bottom:.2rem}.partner-content.partner-m .partner-item img[data-v-394a9450]{width:85%}.industry-wrapper[data-v-394a9450]{height:1.08rem;margin-bottom:.24rem}.industry[data-v-394a9450]{height:1.2rem;line-height:1;padding-top:.4rem;padding-bottom:.4rem;font-size:0;text-align:center;overflow-x:auto;overflow-y:hidden;white-space:nowrap;scrollbar-width:none}.industry .industry-item[data-v-394a9450]{display:inline-block}.industry .industry-item a[data-v-394a9450]{padding:0;font-size:.28rem;color:#222;line-height:1;position:relative}.industry .industry-item[data-v-394a9450]:not(:last-child){margin-right:.53rem}.industry .industry-item.active a[data-v-394a9450],.industry .industry-item:hover a[data-v-394a9450]{border-bottom:0}.industry .industry-item.active a[data-v-394a9450]:after,.industry .industry-item:hover a[data-v-394a9450]:after{position:absolute;content:"";display:block;bottom:-.1rem;left:50%;margin-left:-.165rem;width:.33rem;height:.06rem;border-radius:.08rem;background-color:#04f}.case-wrapper .case-item-wrapper[data-v-394a9450]{padding:0}.case-wrapper .case-item-wrapper[data-v-394a9450]:last-child:nth-child(2n-1){margin-right:0}.case-wrapper .case-item[data-v-394a9450]{width:100%;height:auto;padding-top:.72rem;margin-bottom:.54rem;margin-right:0!important;border:0;box-shadow:0 .27rem .54rem 0 rgba(0,0,0,.05),0 -.01rem .05rem 0 rgba(0,0,0,.03);border-radius:.24rem;cursor:pointer}.case-wrapper .case-item .icon[data-v-394a9450]{height:1.08rem}.case-wrapper .case-item .case-val[data-v-394a9450]{padding:.6rem .72rem .72rem;font-size:.28rem;line-height:.42rem}.case-wrapper .case-item[data-v-394a9450]:hover{border:0;box-shadow:0 .27rem .54rem 0 rgba(0,0,0,.05),0 -.01rem .05rem 0 rgba(0,0,0,.03);-webkit-transform:none;transform:none}.case-wrapper .case-item:hover .case-link[data-v-394a9450]{display:none}}',""])},856:function(n,t,e){n.exports=e.p+"img/915a34f.png"},857:function(n,t,e){n.exports=e.p+"img/f28d24a.png"}}]);