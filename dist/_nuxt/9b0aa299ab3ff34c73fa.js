(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1124:function(t,e,n){"use strict";n.r(e);var o=n(5),r=n(7),c=n(19),d=n(10),m=n(20),l=n(8),f=n(39),v=n(431),h=n(464),x=n(435),w=[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"./contact"}},[e("img",{staticClass:"service-icon",attrs:{src:n(902)}})])}],y=n(620).a,A=(n(903),n(14)),k=Object(A.a)(y,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"service-contact"},[this._m(0),this._v(" "),e("div",{staticClass:"totop",attrs:{id:"P_totop"},on:{click:this.totop}},[e("img",{attrs:{src:n(901)}})])])},w,!1,null,null,null).exports,O=n(164),C=n.n(O),j=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},E=function(t){function e(){return Object(o.a)(this,e),Object(c.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(r.a)(e,[{key:"asyncData",value:function(){var t=n(905).products;return t.forEach(function(t){t.src=n(906)("./".concat(t.cover,".png")),t.srcM=n(907)("./".concat(t.cover,"-m.png"))}),{products:t}}},{key:"head",value:function(){return{title:"Product - Zego",meta:[{hid:"keywords",name:"keywords",content:"Zego"},{hid:"description",name:"description",content:"Zego Technology audio and video intertactive commmunication one-to-one voice chat,one-to-many voice chat live interactive video streaming one-to-many real-team audio streaming"}],htmlAttrs:{lang:"en"}}}}]),e}(f.Vue),_=E=j([Object(f.Component)({name:"product",directives:{ClickOutside:C.a},components:{EnBottomBgLink:v.a,EnBanner:h.a,EnCaseCustomer:x.a,EnService:k}})],E),z=(n(908),Object(A.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"foreign-container"},[t._l(t.products,function(e,o){return n("div",{key:e.id,class:{"bg-gray-light":o%2==1}},[n("div",{staticClass:"container module scene"},[n("div",{staticClass:"scene-item",class:{right:o%2==1}},[n("img",{staticClass:"scene-item-cover",attrs:{src:e.src}}),t._v(" "),n("img",{staticClass:"scene-item-cover mobile",attrs:{src:e.srcM}}),t._v(" "),n("div",{staticClass:"scene-item-content"},[n("div",{staticClass:"scene-item-title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"scene-item-desc"},[t._v(t._s(e.desc))]),t._v(" "),n("a",{staticClass:"scene-item-btn",attrs:{href:"https://doc-en.zego.im/en/693.html",target:"_blank"}},[t._v("\n                        learn more\n                    ")])])])])])}),t._v(" "),n("EnBottomBgLink"),t._v(" "),n("EnService")],2)},[],!1,null,"fd3206c8",null));e.default=z.exports},427:function(t,e,n){var content=n(434);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("19af057d",content,!0,{sourceMap:!1})},433:function(t,e,n){"use strict";var o=n(427);n.n(o).a},434:function(t,e,n){(t.exports=n(24)(!1)).push([t.i,".gutter-64{margin-left:-32px;margin-right:-32px}.gutter-64 [class^=col-]{padding-left:32px;padding-right:32px}.customer-item{padding:40px 20px 50px;box-shadow:0 5px 30px 0 rgba(9,17,40,.08);border-radius:2px;text-align:center}.customer-item .icon{width:130px;height:130px}.customer-item .title{margin-top:10px;font-size:36px;font-weight:500}.customer-item .text{margin-top:10px;font-size:16px;font-weight:500;color:#696f80}.customer-item-btn{margin-top:30px;width:143px;text-align:center;height:32px;line-height:32px;font-size:16px;color:#fff;background:#0055fe;border-radius:4px;display:inline-block}.customer-item-btn:hover{color:#fff}.customer-item:hover .customer-item-btn{background:#0055fe}@media screen and (max-width:1000px){.customer-item{margin-bottom:.4rem}.customer-item .icon{width:1.7rem;height:1.7rem}.customer-item .title{font-size:.48rem}.customer-item .text{margin-top:.2rem;font-size:.28rem}.customer-item-btn{margin-top:.3rem;width:2.86rem;height:.64rem;line-height:.64rem;font-size:.28rem;background:#0055fe}}",""])},435:function(t,e,n){"use strict";var o=n(5),r=n(19),c=n(10),d=n(20),m=n(8),l=n(39),f=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},v=function(t){function e(){return Object(o.a)(this,e),Object(r.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(d.a)(e,t),e}(l.Vue),h=v=f([Object(l.Component)({name:"EnCaseCustomer",props:{list:{type:Array,default:function(){return[]}}}})],v),x=(n(433),n(14)),component=Object(x.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",{staticClass:"gutter-64"},t._l(t.list,function(e){return n("b-col",{key:e.id,attrs:{lg:"4",cols:"12"}},[n("div",{staticClass:"customer-item"},[n("img",{staticClass:"icon",attrs:{src:e.cover}}),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"text"},[t._v(t._s(e.desc))]),t._v(" "),n("a",{staticClass:"customer-item-btn",attrs:{href:"/en/case/customer/"+e.id}},[t._v("learn more")])])])}),1)},[],!1,null,null,null);e.a=component.exports},473:function(t,e,n){t.exports=n.p+"img/de0448c.png"},474:function(t,e,n){t.exports=n.p+"img/d6439bc.png"},475:function(t,e,n){t.exports=n.p+"img/c2b6376.png"},476:function(t,e,n){t.exports=n.p+"img/5248b18.png"},530:function(t,e,n){t.exports=n.p+"img/c7ae22b.png"},531:function(t,e,n){t.exports=n.p+"img/55f10b0.png"},532:function(t,e,n){t.exports=n.p+"img/6917baf.png"},533:function(t,e,n){t.exports=n.p+"img/80ef6fa.png"},620:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return v});var o,r=n(5),c=n(7),d=n(19),m=n(10),l=n(20),f=n(39),v=Object(f.Component)({name:"EnService"})(o=function(e){function n(){return Object(r.a)(this,n),Object(d.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(l.a)(n,e),Object(c.a)(n,[{key:"created",value:function(){t(window).on("scroll",this.checkScroll)}},{key:"destroyed",value:function(){t(window).off("scroll",this.checkScroll)}},{key:"checkScroll",value:function(){t(window).scrollTop()>100?t("#P_totop").addClass("show"):t("#P_totop").removeClass("show")}},{key:"totop",value:function(){t("html,body").animate({scrollTop:0},500)}}]),n}(f.Vue))||o}).call(this,n(165))},621:function(t,e,n){var content=n(904);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("8c3b793a",content,!0,{sourceMap:!1})},622:function(t,e,n){var content=n(909);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("602362c6",content,!0,{sourceMap:!1})},901:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAABHCAYAAABWB1Q3AAAACXBIWXMAABYlAAAWJQFJUiTwAAADOUlEQVR4Ae2ZMW7bMBSG/xbd4/QCMdwDJIUOEA/u3C7u2k7Jms0dMyZTujpLOydDuztAc4AYbQ8QA7mAnZyABY0n4EEgaYp6j24EfYBg2XoU+ZPvFyn6hTEGmTkB8AfAbc5qcwsdAvgF4AlAH8Bjropf5qoIQA/AdzrfAfAzY91ZhVqRe+z7IYDTbLXb1M1wnBg/wxxtyOHRAwC/A9ez+FU7dXsRXsziV22hVV/6OKRpRw3N1LUNv6hZ5i3NseJoCd3kSx8PVFbcrxqpy+fLuuw1KBtEQ+hXAPsNyr/X8Kt06n4G8E3oXqJ+lRR6QAv1HaH7ifpVKnVLX0qJhLRfpYQ29aUPMb9KpK6kL1080etdI782FSrtSx9/SWyyX5umrrQvfeyTPZJpIlTLlz4+kU2SSE3dDwB+aCtzkOzXFKF9qihHyrpI8uurhIr6EX4Z0qtXCg8R82ev9oNJaeviNLB1solbjTbl3BzbKp3QttEJbRud0LahtQvYpyOFR40tz238P7oVOo+2jU5o2+iEto1OaNsohY7sZkPDY+TpmwGACYBl5f4z+j2G2LZNARw570dbDaMGWx8lI8cWxiSi3NJTlh91uTPGDPg9YvZbeGOPauzTTFm5mTFm7LjvksVUr7uEzgIxhTHmisXec7FaQnmZaSBuQA0qR3bgiYsRGqxbQ+guG6n7iPgiolPqCAXrPEPtUXnq2ofBLp2fR8TPAVw7yjbhmpUtoDS9jOlzVakwBI9zPzXrsWLR647TEFrQ56JSYYg5uzYQaAPPinUbpIUW7HweiKuyYN8lhPI5fd0OaaG8JxeBOBfl6DcVOmEdfqM1ok2ITXMftoPsyuiMXf9SnqT8m7ZNyqXqJmw2HXP7/E9CpaaVuWtakxbK06+u10qhIW9bz71LaJe4R3kji0BcFd4pdR9iUUgLXTFfFDXSkXfKsxCKyipnHIjj8LjY1VQtNIReMq/GvFgXTOjlcxrRFXvqWe9dBWL59VXkS0ASWguGcxod0GjdOdJ4Qr+XD6JjrdGE8jxaNvyM0tM3snYkP9LUoYb2EtCO7BtailVH64Z+f60tEt3fhi2kE9o2OqFtoxPaKgD8A0/CNGXjgpS9AAAAAElFTkSuQmCC"},902:function(t,e,n){t.exports=n.p+"img/6741b85.png"},903:function(t,e,n){"use strict";var o=n(621);n.n(o).a},904:function(t,e,n){(t.exports=n(24)(!1)).push([t.i,".service-contact{text-align:center;position:fixed;left:calc(50% + 650px);bottom:100px;width:84px;background-color:#0055fe;border-radius:84px;box-shadow:3px 5px 19px 2px rgba(182,190,199,.46)}.service-contact .service-icon{width:120%;margin-left:-10%;margin-top:-46px;padding-bottom:10px;cursor:pointer}.service-contact .totop{cursor:pointer;width:80%;margin:0 auto;border-top:1px dashed #fff;display:none}.service-contact .totop img{width:50%;margin:10px auto 0}.service-contact .totop.show{display:block}@media screen and (max-width:1000px){.service-contact{left:auto;right:.5rem;bottom:1rem;width:1rem;border-radius:1rem}.service-contact .service-icon{margin-top:-.5rem;padding-bottom:.1rem}.service-contact .totop{width:80%}.service-contact .totop img{margin:.2rem auto 0}}",""])},905:function(t){t.exports={products:[{id:1,title:"Live Interactive Video Streaming",cover:"video",desc:"It perfectly supports multiple live streaming formats such as dual-stream live streaming, multi-player connected wheat, voice live, interactive mini-games, etc., and a variety of forms to meet the various needs of entertainment and live gaming.",url:""},{id:2,title:"Real-Time Audio Streaming",cover:"audio",desc:"Our Real-time Audio Streaming service supports one-to-one voice chat, one-to-many voice conversation (up to millions of participants), applicable to VoIP phone services, ganging-up in games, internet radio stations and so on.",url:""},{id:3,title:"Audio/Video Recording and Archiving",cover:"record",desc:"Our Audio/Video Recording and Archiving service empowers enterprises with on-premises video witness system that can meet various legal and compliance requirements. It can be used for video witnessing of bank account opening, brokerage account opening, in-person interview and other events.",url:""},{id:4,title:"Voice Chatroom",cover:"chatroom",desc:"Our Voice Chatroom service supports simultaneous speaking in group voice chat, background music and sound effects. It allows users to keep the chat active in the background while switching to other applications.",url:""}]}},906:function(t,e,n){var map={"./audio-m.png":474,"./audio.png":531,"./chatroom-m.png":476,"./chatroom.png":533,"./record-m.png":475,"./record.png":532,"./video-m.png":473,"./video.png":530};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=906},907:function(t,e,n){var map={"./audio-m.png":474,"./chatroom-m.png":476,"./record-m.png":475,"./video-m.png":473};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=907},908:function(t,e,n){"use strict";var o=n(622);n.n(o).a},909:function(t,e,n){(t.exports=n(24)(!1)).push([t.i,'@charset "UTF-8";*[data-v-fd3206c8]{line-height:1.5;font-family:Roboto,PingFang SC,Helvetica Neue,Helvetica,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif;word-wrap:break-word;word-break:break-word;word-break:hyphenate;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}p[data-v-fd3206c8]{margin:1em 0}.color-black[data-v-fd3206c8]{color:#222}.color-gray[data-v-fd3206c8]{color:#666}.bg-gray-light[data-v-fd3206c8]{background-color:#fafafb}.fs-18[data-v-fd3206c8]{font-size:18px}.fs-14[data-v-fd3206c8]{font-size:14px}.fw-normal[data-v-fd3206c8]{font-weight:400}.main-container[data-v-fd3206c8]{margin:50px auto 80px}.foreign-container[data-v-fd3206c8]{margin-top:68px}@media (min-width:1200px){.container[data-v-fd3206c8],.container-lg[data-v-fd3206c8],.container-md[data-v-fd3206c8],.container-sm[data-v-fd3206c8],.container-xl[data-v-fd3206c8]{max-width:1200px}}@media screen and (max-width:1000px){.container[data-v-fd3206c8]{max-width:6.3rem}.main-container[data-v-fd3206c8]{margin:.6rem auto}.foreign-container[data-v-fd3206c8]{margin-top:1.08rem}}.module[data-v-fd3206c8]{padding:70px 0}.module h1[data-v-fd3206c8]{font-weight:500;margin-bottom:70px;font-size:40px;color:#222;text-align:center;text-transform:uppercase}.module h1.mb-small[data-v-fd3206c8]{margin-bottom:35px}.module p[data-v-fd3206c8]{font-size:16px;font-weight:500;color:#696f80}@media screen and (max-width:1000px){.module[data-v-fd3206c8]{padding:.8rem 0}.module h1[data-v-fd3206c8]{margin-bottom:.5rem;font-size:.54rem;color:#222;text-align:center}.module h1.mb-small[data-v-fd3206c8]{margin-bottom:.25rem}.module p[data-v-fd3206c8]{font-size:.28rem}}.scene[data-v-fd3206c8]{padding-left:85px;padding-right:85px}.scene-item[data-v-fd3206c8]{position:relative}.scene-item-cover[data-v-fd3206c8]{width:55%}.scene-item-cover.mobile[data-v-fd3206c8]{display:none}.scene-item-content[data-v-fd3206c8]{text-align:left;position:absolute;right:0;width:400px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.scene-item-title[data-v-fd3206c8]{position:relative;font-size:24px;font-weight:500;color:#222;margin-bottom:20px}.scene-item-desc[data-v-fd3206c8]{font-size:16px;font-weight:500;color:#696f80}.scene-item-btn[data-v-fd3206c8]{margin-top:50px;width:143px;text-align:center;height:32px;line-height:32px;font-size:16px;color:#fff;background-color:#fff;background:#0055fe;border-radius:4px;display:inline-block}.scene-item.right[data-v-fd3206c8]{text-align:right}.scene-item.right .scene-item-content[data-v-fd3206c8]{right:auto;left:0}@media screen and (max-width:1000px){.scene[data-v-fd3206c8]{padding-left:0;padding-right:0}.scene-item-cover[data-v-fd3206c8]{width:100%;display:none}.scene-item-cover.mobile[data-v-fd3206c8]{display:block}.scene-item-content[data-v-fd3206c8]{position:static;width:100%;-webkit-transform:none;transform:none;text-align:center}.scene-item-title[data-v-fd3206c8]{margin-top:.2rem;font-size:.4rem;margin-bottom:.3rem}.scene-item-desc[data-v-fd3206c8]{font-size:.28rem;font-weight:500;color:#696f80}.scene-item-btn[data-v-fd3206c8]{margin-top:.5rem;width:2.86rem;height:.64rem;line-height:.64rem;font-size:.28rem}}',""])}}]);