(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{577:function(t,n,e){var content=e(794);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(28).default)("3ff412e8",content,!0,{sourceMap:!1})},784:function(t,n,e){var map={"./channel.svg":785,"./commands.svg":786,"./dashboard.svg":787,"./infrastructure.svg":788,"./languages.svg":789,"./message-builder.svg":790,"./platforms.svg":791,"./reaction-roles.svg":792};function l(t){var n=r(t);return e(n)}function r(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}l.keys=function(){return Object.keys(map)},l.resolve=r,t.exports=l,l.id=784},785:function(t,n,e){t.exports=e.p+"img/6540ccd.svg"},786:function(t,n,e){t.exports=e.p+"img/d9c92f5.svg"},787:function(t,n,e){t.exports=e.p+"img/73885ed.svg"},788:function(t,n,e){t.exports=e.p+"img/6dd5ad1.svg"},789:function(t,n,e){t.exports=e.p+"img/19f3c81.svg"},790:function(t,n,e){t.exports=e.p+"img/d43bdda.svg"},791:function(t,n,e){t.exports=e.p+"img/b81a9f8.svg"},792:function(t,n,e){t.exports=e.p+"img/ade310b.svg"},793:function(t,n,e){"use strict";e(577)},794:function(t,n,e){var l=e(27)((function(i){return i[1]}));l.push([t.i,"/*purgecss start ignore*/\n.image-alignment:nth-child(odd) div[data-v-3ebc0315]{\n  grid-column:7/13\n}\n.image-alignment:nth-child(odd) img[data-v-3ebc0315]{\n  grid-column:1/6\n}\n.image-alignment:nth-child(2n) div[data-v-3ebc0315]{\n  grid-column:1/7\n}\n.image-alignment:nth-child(2n) img[data-v-3ebc0315]{\n  grid-column:8/13\n}\n\n/*purgecss end ignore*/",""]),l.locals={},t.exports=l},853:function(t,n,e){"use strict";e.r(n);var l={props:{illustration:{type:String,default:null},title:{type:String,default:null},description:{type:String,default:null},url:{type:String,default:null},button:{type:String,default:null},isNew:{type:Boolean,default:!1}},mounted(){this.$ScrollTrigger.create({trigger:this.$refs.feature,animation:this.$gsap.fromTo(this.$refs.feature,{autoAlpha:0,y:100},{duration:1,autoAlpha:1,y:0}),once:!0})}},r=(e(793),e(10)),component=Object(r.a)(l,(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("div",{ref:"feature",staticClass:"flex flex-col lg:grid grid-flow-row-dense grid-cols-12 gap-4 pb-32 lg:pb-48 image-alignment px-4 md:px-8 2xl:px-0"},[l("img",{staticClass:"max-w-screen-sm lg:w-full",attrs:{src:e(784)("./"+t.illustration+".svg"),alt:t.title,draggable:"false",loading:"lazy"}}),t._v(" "),l("div",{staticClass:"flex flex-col items-start justify-center mt-8 lg:mt-0"},[l("div",{staticClass:"flex items-center gap-3"},[l("h2",{staticClass:"text-4xl font-bold"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t.isNew?l("span",{staticClass:"flex"},[l("span",{staticClass:"flex text-xs tracking-wider font-bold uppercase bg-blue-base opacity-90 shadow py-1 px-2 rounded-xl"},[t._v("\n          New\n        ")])]):t._e()]),t._v(" "),l("p",{staticClass:"text-xl mt-2 opacity-75"},[t._v("\n      "+t._s(t.description)+"\n    ")]),t._v(" "),t.url?l("nuxt-link",{staticClass:"btn btn-xl mt-4",attrs:{to:t.url}},[t._v("\n      "+t._s(t.button)+"\n    ")]):t._e()],1)])}),[],!1,null,"3ebc0315",null);n.default=component.exports}}]);