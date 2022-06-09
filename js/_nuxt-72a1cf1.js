(window.webpackJsonp=window.webpackJsonp||[]).push([[194,42],{446:function(e){e.exports=JSON.parse('{"a":"https://hydra.bot","b":{"home":{"short":"Hydra Bot","title":"Hydra - The Perfect Discord Bot","description":"Hydra is the only Discord bot you\'ll ever need! Invite Hydra today and start listening to your favorite tunes together with your friends or community!"},"commands":{"short":"Hydra\'s Commands","title":"Hydra\'s Commands - A detailed documentation","description":"Explore Hydra\'s extensive capabilities and learn more about specific commands. Get detailed information via dynamically browsing through our feature-rich command categories."},"premium":{"short":"Hydra Premium","title":"Hydra Premium - Spice up your Discord server","description":"Subscribe to one of our Hydra Premium plans now and start benefiting of it immediately after upgrading your favorite Discord servers!"},"reaction_roles":{"short":"Reaction Roles","title":"Reaction Roles with Hydra on Discord","description":"Use Hydra to create and maintain interactive Discord messages for your community with ease!"},"articles":{"short":"Hydra Articles","title":"Hydra Articles - Highly helpful posts","description":"Browse through our collection of interesting help articles and find an answer to every single question of yours in order to get the most out of Hydra!"},"guilds":{"short":"Your Servers","title":"Your Servers - Manage your servers from everywhere","description":"All of your Discord servers at one place - manageable and configurable from everywhere. Customize Hydra tailored to your needs."},"guild":{"short":"Your Server","title":"Your Server - Manage your server from everywhere","description":"Manage your Discord server and configure it to your needs here. Customize Hydra in order to improve your listening experience on your Discord server."},"invite":{"short":"Invite Hydra","title":"Invite Hydra now and start listening to your favorite songs","description":"Get access to Hydra\'s extensive list of features, its intuitive ease of use and the best possible quality today - just invite it to your Discord server and convince yourself!"},"login":{"short":"Hydra Login","title":"Hydra Login - The key to your dashboard","description":"Log into your personal Hydra dashboard from wherever you are. After authenticating you\'ll be able to manage things like your Discord servers and Hydra Premium subscription."},"privacy":{"short":"Privacy at Hydra","title":"Privacy at Hydra - We\'re taking it serious","description":"Your privacy is something we\'re very serious about. Data is a valuable good and should be treated right. Read about how we handle privacy at Hydra."},"terms":{"short":"Terms of Service","title":"Hydra\'s Terms of Service","description":"These are the Terms of Service every user of Hydra has to comply with. It\'s recommended to read through before starting to use the service."}}}')},663:function(e,t,r){"use strict";r.r(t);r(88);var o={props:{title:{type:String,required:!0,default:"N/A"},description:{type:String,required:!0,default:"N/A"},author:{type:Object,required:!0,default:function(){}},createdAt:{type:String,required:!0,default:"N/A"},tags:{type:String,required:!0,default:"N/A"},readingTime:{type:String,required:!0,default:"N/A"},path:{type:String,required:!0,default:"N/A"}},methods:{preview:function(e){var t=e.split(" ");return t.length>32?"".concat(t.splice(0,32).join(" "),"..."):e}}},n=r(12),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nuxt-link",{staticClass:"flex flex-col flex-grow sm:flex-row max-w-screen-xl my-2 mx-2 last:mb-2 bg-gray-darker rounded-lg shadow transition-all transform duration-150 ease-in-out hover:-translate-y-1",attrs:{to:e.path}},[r("div",{staticClass:"flex flex-col w-full p-4"},[r("h2",{staticClass:"text-xl lg:text-2xl font-bold"},[e._v("\n      "+e._s(e.title)+"\n    ")]),e._v(" "),r("p",{staticClass:"text-lg lg:text-xl opacity-75 mt-4"},[e._v("\n      "+e._s(e.preview(e.description))+"\n    ")]),e._v(" "),r("div",{staticClass:"flex-grow"}),e._v(" "),r("div",{staticClass:"flex flex-row items-center mt-4 mx-2"},[r("p",{staticClass:"md:text-xl"},[e._v("\n        "+e._s(e.readingTime)+"\n      ")]),e._v(" "),r("p",{staticClass:"md:text-xl mx-2"},[e._v("\n        ·\n      ")]),e._v(" "),r("p",{staticClass:"opacity-75 md:text-xl"},[e._v("\n        "+e._s(new Date(e.createdAt).toLocaleDateString("en-US"))+"\n      ")])]),e._v(" "),r("div",{staticClass:"flex flex-wrap my-2"},e._l(e.tags.split("|"),(function(t){return r("p",{key:t,staticClass:"bg-gray-dark text-lg px-2 m-1 rounded-lg select-none"},[e._v("\n        "+e._s(t)+"\n      ")])})),0)])])}),[],!1,null,null,null);t.default=component.exports},903:function(e,t,r){"use strict";r.r(t);var o=r(3),meta=(r(17),r(13),r(446)),n=meta.b.articles,l=n.short,title=n.title,d=n.description,c={auth:!1,asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,t.next=3,r("articles").sortBy("createdAt","desc").fetch();case 3:return o=t.sent,n=o.filter((function(article){return article.featured})).sort((function(a,b){return a.index-b.index})),o=o.filter((function(article){return!article.featured})),t.abrupt("return",{articles:o,featured:n});case 7:case"end":return t.stop()}}),t)})))()},head:function(){return{title:title,meta:[{hid:"description",name:"description",content:d},{hid:"og:title",property:"og:title",content:title},{hid:"og:site_name",property:"og:site_name",content:l},{hid:"og:url",property:"og:url",content:"".concat(meta.a).concat(this.$route.path)},{hid:"og:description",property:"og:description",content:d}],link:[{rel:"canonical",href:"".concat(meta.a).concat(this.$route.path)}]}}},y=c,f=r(12),component=Object(f.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"root"},[r("div",{staticClass:"wrapper pt-32"},[r("div",{staticClass:"content"},[r("h2",{staticClass:"text-4xl md:text-6xl font-bold mt-4 mx-2"},[e._v("\n          Featured Articles\n        ")]),e._v(" "),r("div",{staticClass:"flex max-w-screen-xl"},[r("div",{staticClass:"grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 xl:grid-cols-3"},e._l(e.featured,(function(article){return r("article-preview",e._b({key:article.title},"article-preview",article,!1))})),1)])])]),e._v(" "),r("div",{staticClass:"wrapper pt-16 pb-4"},[r("div",{staticClass:"content"},[r("h2",{staticClass:"text-4xl md:text-6xl font-bold mt-4 mx-2"},[e._v("\n          All Articles\n        ")]),e._v(" "),r("div",{staticClass:"flex max-w-screen-xl"},[r("div",{staticClass:"grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 xl:grid-cols-3"},e._l(e.articles,(function(article){return r("article-preview",e._b({key:article.title},"article-preview",article,!1))})),1)])])])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ArticlePreview:r(663).default})}}]);