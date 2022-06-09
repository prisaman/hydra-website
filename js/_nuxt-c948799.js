(window.webpackJsonp=window.webpackJsonp||[]).push([[199,89,91,112,135],{446:function(e){e.exports=JSON.parse('{"a":"https://hydra.bot","b":{"home":{"short":"Hydra Bot","title":"Hydra - The Perfect Discord Bot","description":"Hydra is the only Discord bot you\'ll ever need! Invite Hydra today and start listening to your favorite tunes together with your friends or community!"},"commands":{"short":"Hydra\'s Commands","title":"Hydra\'s Commands - A detailed documentation","description":"Explore Hydra\'s extensive capabilities and learn more about specific commands. Get detailed information via dynamically browsing through our feature-rich command categories."},"premium":{"short":"Hydra Premium","title":"Hydra Premium - Spice up your Discord server","description":"Subscribe to one of our Hydra Premium plans now and start benefiting of it immediately after upgrading your favorite Discord servers!"},"reaction_roles":{"short":"Reaction Roles","title":"Reaction Roles with Hydra on Discord","description":"Use Hydra to create and maintain interactive Discord messages for your community with ease!"},"articles":{"short":"Hydra Articles","title":"Hydra Articles - Highly helpful posts","description":"Browse through our collection of interesting help articles and find an answer to every single question of yours in order to get the most out of Hydra!"},"guilds":{"short":"Your Servers","title":"Your Servers - Manage your servers from everywhere","description":"All of your Discord servers at one place - manageable and configurable from everywhere. Customize Hydra tailored to your needs."},"guild":{"short":"Your Server","title":"Your Server - Manage your server from everywhere","description":"Manage your Discord server and configure it to your needs here. Customize Hydra in order to improve your listening experience on your Discord server."},"invite":{"short":"Invite Hydra","title":"Invite Hydra now and start listening to your favorite songs","description":"Get access to Hydra\'s extensive list of features, its intuitive ease of use and the best possible quality today - just invite it to your Discord server and convince yourself!"},"login":{"short":"Hydra Login","title":"Hydra Login - The key to your dashboard","description":"Log into your personal Hydra dashboard from wherever you are. After authenticating you\'ll be able to manage things like your Discord servers and Hydra Premium subscription."},"privacy":{"short":"Privacy at Hydra","title":"Privacy at Hydra - We\'re taking it serious","description":"Your privacy is something we\'re very serious about. Data is a valuable good and should be treated right. Read about how we handle privacy at Hydra."},"terms":{"short":"Terms of Service","title":"Hydra\'s Terms of Service","description":"These are the Terms of Service every user of Hydra has to comply with. It\'s recommended to read through before starting to use the service."}}}')},492:function(e){e.exports=JSON.parse('[{"display":"No Reaction Roles Limits","plans":[true,false],"modal":"premium/ReactionRolesComparison.vue"},{"display":"Global Volume Control","plans":[true,false]},{"display":"24/7 Playback","plans":[true,false]},{"display":"Auto Play","plans":[true,false]},{"display":"Audio Effects","plans":[true,false]},{"display":"Access To More Hydras","plans":[true,false]},{"display":"Unlimited Saved Playlists","details":true,"plans":[true,true]},{"display":"Release Vote Locks","details":true,"plans":[true,true]}]')},634:function(e){e.exports=JSON.parse('[{"illustration":"dashboard","title":"Web dashboard","description":"With Hydra\'s extensive web dashboard you\'re able to comfortably customize Hydra on the web without having to remember any commands or syntaxes!","url":"/guilds","button":"Customize now"},{"illustration":"reaction-roles","title":"Reaction Roles","description":"Create interactive messages with our easy-to-use yet powerful reaction roles editor! Let your server members assign themselves roles and more with the latest features Discord has to offer!","url":"/reaction-roles","button":"Tell me more","isNew":true},{"illustration":"message-builder","title":"Message Builder","description":"This feature allows you to create fancy custom messages with embeds and buttons, and collaborate with other server admins without having to delete and rewrite everything if someone else wrote it!","url":"/guilds","button":"Try out","isNew":true},{"illustration":"commands","title":"Feature-rich command list","description":"Hydra offers you a much more feature-rich command list than the average Discord bot! You can get more information on the commands page!","url":"/commands","button":"View commands"},{"illustration":"languages","title":"Multilingual with 20+ languages","description":"You can use Hydra in nearly any language you want! We\'re including most spoken languages from around the globe including English, Chinese, French, Spanish, Polish, Russian and more! You can even help us translating if your language is not available yet!","url":"/crowdin","button":"Help translating","blank":true},{"illustration":"channel","title":"Unique song request channel","description":"When setting up Hydra to be used via a custom player you\'ll be able to control the bot from a unique song request channel!","url":"/invite","button":"Set up now"},{"illustration":"platforms","title":"Wide range of platforms","description":"Hydra allows you to use a wide range of platforms to cover all of your interests!"},{"illustration":"infrastructure","title":"Industry standard infrastructure","description":"In order to ensure a 99.9% availability we\'re using industry standard solutions to scale Hydra around the whole world. By putting huge efforts into this we can offer a smooth and stable service!"}]')},635:function(e,t,r){e.exports=r.p+"img/38ff5d9.svg"},636:function(e,t,r){e.exports=r.p+"img/7549ed4.svg"},686:function(e,t,r){"use strict";r.r(t);var o=r(634),n={data:function(){return{features:o}}},l=r(12),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content pt-24 lg:pt-48"},e._l(e.features,(function(t){return r("lazy-feature",e._b({key:t.title},"lazy-feature",t,!1))})),1)}),[],!1,null,null,null);t.default=component.exports},687:function(e,t,r){"use strict";r.r(t);var o=r(492),n={data:function(){return{comparison:o}},mounted:function(){this.$ScrollTrigger.create({trigger:this.$refs.feature,animation:this.$gsap.fromTo(this.$refs.feature,{autoAlpha:0,y:100},{duration:1,autoAlpha:1,y:0}),once:!0})}},l=r(12),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"feature",staticClass:"content items-center px-8 xl:px-0"},[o("div",{staticClass:"flex flex-col lg:grid grid-cols-2 gap-12 lg:gap-16"},[o("div",{staticClass:"flex self-center flex-col bg-gray-darker shadow-lg rounded-lg p-4 gap-1 w-full"},e._l(e.comparison,(function(t,r){return o("div",{key:"part-"+r,staticClass:"flex justify-between items-center flex-grow bg-opacity-0 bg-gray-dark hover:bg-opacity-50 px-2 py-1 rounded-lg transition"},[o("p",{staticClass:"text-lg text-opacity-75"},[e._v("\n          "+e._s(t.display)+"\n        ")]),e._v(" "),o("fa",{staticClass:"text-base text-green-base w-4 mr-1",attrs:{icon:"check"}})],1)})),0),e._v(" "),o("div",{staticClass:"flex flex-col items-start"},[o("img",{staticClass:"h-24",attrs:{src:r(635),alt:"People having fun",draggable:"false",loading:"lazy"}}),e._v(" "),o("h2",{staticClass:"text-3xl md:text-4xl lg:text-5xl font-bold mt-6"},[e._v("\n        You would like even more features?\n      ")]),e._v(" "),o("p",{staticClass:"text-lg xl:text-xl mt-2 xl:mt-4 opacity-75"},[e._v("\n        When subscribing to one of our premium plans you'll gain access to even more awesome features which will massively improve your experience on Discord!\n      ")]),e._v(" "),o("nuxt-link",{staticClass:"btn btn-xl mt-4",attrs:{to:"/premium"}},[e._v("\n        Check out Premium\n      ")])],1)])])}),[],!1,null,null,null);t.default=component.exports},688:function(e,t,r){"use strict";r.r(t);var o={mounted:function(){this.$ScrollTrigger.create({trigger:this.$refs.feature,animation:this.$gsap.fromTo(this.$refs.feature,{autoAlpha:0,y:100},{duration:1,autoAlpha:1,y:0}),once:!0})}},n=r(12),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"feature",staticClass:"content items-center px-8 xl:px-0"},[o("img",{staticClass:"h-64 mb-8",attrs:{src:r(636),alt:"Access to the whole universe",draggable:"false",loading:"lazy"}}),e._v(" "),o("h2",{staticClass:"text-4xl md:text-5xl lg:text-6xl text-center font-bold"},[e._v("\n    Ready to Get Started?\n  ")]),e._v(" "),o("p",{staticClass:"text-xl xl:text-2xl text-center mt-2 xl:mt-4 opacity-75 max-w-xl"},[e._v("\n    Invite Hydra from your dashboard now and start enjoying the best features available on Discord!\n  ")]),e._v(" "),o("nuxt-link",{staticClass:"btn btn-xl flex items-center gap-2 mt-4",attrs:{to:"/dashboard"}},[e._v("\n    Invite Now\n    "),o("fa",{staticClass:"text-sm",attrs:{icon:"chevron-right"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports},704:function(e,t,r){"use strict";r.r(t);var o=r(12),component=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content space-y-6"},[e._m(0),e._v(" "),r("div",{staticClass:"flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-8 sm:px-0"},[r("nuxt-link",{staticClass:"btn btn-2xl w-full sm:w-40",attrs:{to:"/invite"}},[e._v("\n      Invite\n    ")]),e._v(" "),r("nuxt-link",{staticClass:"btn btn-2xl w-full sm:w-40 text-gray-darker bg-gray-lightest",attrs:{to:"/support"}},[e._v("\n      Support\n    ")])],1)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col items-center px-8 xl:px-0 space-y-4"},[r("h1",{staticClass:"text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight text-center"},[e._v("\n      The Perfect Discord Bot.\n    ")]),e._v(" "),r("h2",{staticClass:"text-2xl 2xl:text-3xl text-center opacity-75"},[e._v("\n      Hydra is the only Discord bot you'll ever need!\n    ")])])}],!1,null,null,null);t.default=component.exports},919:function(e,t,r){"use strict";r.r(t);var meta=r(446),o=meta.b.home,n=o.short,title=o.title,l=o.description,c={head:function(){return{title:title,meta:[{hid:"description",name:"description",content:l},{hid:"og:title",property:"og:title",content:title},{hid:"og:site_name",property:"og:site_name",content:n},{hid:"og:url",property:"og:url",content:"".concat(meta.a).concat(this.$route.path)},{hid:"og:description",property:"og:description",content:l}],link:[{rel:"canonical",href:"".concat(meta.a).concat(this.$route.path)}]}}},d=r(12),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"root"},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"wrapper pt-32 lg:pt-48 pb-12 lg:pb-28"},[r("intro")],1)]),e._v(" "),r("div",{staticClass:"wrapper bg-gray-darker"},[r("div",{staticClass:"wrapper"},[r("features")],1)]),e._v(" "),r("div",{staticClass:"wrapper"},[r("div",{staticClass:"wrapper py-16"},[r("premium-cta")],1)]),e._v(" "),r("div",{staticClass:"wrapper bg-gray-darker"},[r("div",{staticClass:"wrapper py-16"},[r("get-started-cta")],1)])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Intro:r(704).default,Features:r(686).default,PremiumCta:r(687).default,GetStartedCta:r(688).default})}}]);