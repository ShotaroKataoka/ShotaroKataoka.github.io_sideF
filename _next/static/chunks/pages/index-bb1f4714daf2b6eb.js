(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4186)}])},5585:function(t,n,r){"use strict";r.d(n,{_:function(){return Y}});var e=r(5944),i=r(7294),o=r(4776),c=r(2293),a=r(7948),l=r(155),u=r(6886),Z=r(8298),h=r(7357),d=r(8462),f=r(891),s=r(7720),p=r(3946),v=r(7107),m=r(7594),g=r(9334),b=r(326),y=r(6638),_=r(5449),x=r(5084),w=r(4020),k=r(8005),P=r(802),S=r(4871),X=r(9317),O=r(7957),B=r(449),j=r(1523),A=r(2962),T=r(9661),C=r(5861),E=function(t){var n=t.author_name,r=t.author_description;return(0,e.BX)(h.Z,{width:"100%",children:[(0,e.BX)(u.ZP,{container:!0,children:[(0,e.tZ)(u.ZP,{item:!0,xs:4.8}),(0,e.tZ)(u.ZP,{item:!0,xs:2.2,children:(0,e.tZ)(p.Z,{href:"/profile",children:(0,e.tZ)(T.Z,{alt:n,src:"/static/images/avatar/avatar.jpg",sx:{width:32,height:32}})})}),(0,e.tZ)(u.ZP,{item:!0,xs:5})]}),(0,e.tZ)(C.Z,{variant:"h5",sx:{m:0,p:0,textAlign:"center"},children:n}),(0,e.tZ)(C.Z,{variant:"body2",sx:{m:0,p:0,textAlign:"center"},children:r})]})};function I(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function N(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function D(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var e,i,o=[],c=!0,a=!1;try{for(r=r.call(t);!(c=(e=r.next()).done)&&(o.push(e.value),!n||o.length!==n);c=!0);}catch(l){a=!0,i=l}finally{try{c||null==r.return||r.return()}finally{if(a)throw i}}return o}}(t,n)||function(t,n){if(!t)return;if("string"===typeof t)return I(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return I(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var W="left";function F(t){var n=t.profile,r=t.slug,o="";o=void 0===r?"https://github.com/ShotaroKataoka/githubio-blog-dev/issues":"https://github.com/ShotaroKataoka/githubio-blog-dev/issues/".concat(r);var c,a=n.author_name,l=n.author_description,u=n.root_url,Z=n.sns,m=D(i.useState({top:!1,left:!1,bottom:!1,right:!1}),2),g=m[0],_=m[1],x=function(t,n){return function(r){(!r||"keydown"!==r.type||"Tab"!==r.key&&"Shift"!==r.key)&&_(function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},e=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),e.forEach((function(n){N(t,n,r[n])}))}return t}({},g,N({},t,n)))}};return(0,e.tZ)("div",{children:(0,e.BX)(i.Fragment,{children:[(0,e.tZ)(p.Z,{onClick:x(W,!0),sx:{margin:0,padding:0},"aria-label":"Open Sidebar",children:(0,e.tZ)(b.Z,{})}),(0,e.tZ)(v.Z,{anchor:W,open:g.left,onClose:x(W,!1),onOpen:x(W,!0),children:(c=W,(0,e.BX)(h.Z,{sx:{width:"top"===c||"bottom"===c?"auto":250},role:"presentation",onClick:x(c,!1),onKeyDown:x(c,!1),children:[(0,e.BX)(d.Z,{children:[(0,e.tZ)(f.ZP,{children:(0,e.tZ)(E,{author_name:a,author_description:l})}),(0,e.tZ)(s.Z,{}),(0,e.tZ)(K,{text:"Home",href:"".concat(u,"/"),children:(0,e.tZ)(y.Z,{})}),(0,e.tZ)(K,{text:"Articles",href:"".concat(u,"/article/list"),children:(0,e.tZ)(j.Z,{})}),(0,e.tZ)(K,{text:"Tags",href:"".concat(u,"/article/tags"),children:(0,e.tZ)(B.Z,{})}),(0,e.tZ)(K,{text:"Works",href:"".concat(u,"/works"),children:(0,e.tZ)(A.Z,{})}),(0,e.tZ)(K,{text:"Edit page",href:o,children:(0,e.tZ)(O.Z,{})})]}),(0,e.tZ)(s.Z,{}),(0,e.tZ)(G,{sns_list:Z})]}))})]},W)})}var K=function(t){var n=t.children,r=t.text,i=t.href;return""===i||""===r?(0,e.tZ)("div",{}):(null===i||void 0===i?void 0:i.startsWith("#"))||(null===i||void 0===i?void 0:i.startsWith("/"))||(null===i||void 0===i?void 0:i.includes("shotarokataoka.github.io"))?(0,e.BX)(f.ZP,{button:!0,component:"a",href:i,children:[(0,e.tZ)(m.Z,{children:n}),(0,e.tZ)(g.Z,{primary:r})]},r):(0,e.BX)(f.ZP,{button:!0,component:"a",href:i,target:"_blank",rel:"noopener",children:[(0,e.tZ)(m.Z,{children:n}),(0,e.tZ)(g.Z,{primary:r})]},r)},G=function(t){var n=t.sns_list;return(0,e.tZ)(d.Z,{children:n.map((function(t){return(0,e.tZ)(K,{text:t.name,href:t.url,children:(n=t.name,"GitHub"===n?(0,e.tZ)(_.Z,{}):"Twitter"===n?(0,e.tZ)(x.Z,{}):"Facebook"===n?(0,e.tZ)(P.Z,{}):"LinkedIn"===n?(0,e.tZ)(k.Z,{}):"Instagram"===n?(0,e.tZ)(w.Z,{}):"YouTube"===n?(0,e.tZ)(S.Z,{}):(0,e.tZ)(X.Z,{}))},t.name);var n}))})},H=r(4345);function J(t){var n=t.children,r=(0,Z.Z)({target:void 0});return(0,e.tZ)(o.Z,{appear:!1,direction:"down",in:!r,children:n})}function V(t){var n=t.children;return(0,e.tZ)(i.Fragment,{children:(0,e.tZ)(J,{children:(0,e.tZ)(c.Z,{color:"inherit",elevation:0,children:(0,e.tZ)(a.Z,{maxWidth:"sm",children:n})})})})}var Y=function(t){var n=t.profile,r=t.slug;return(0,e.tZ)(V,{children:(0,e.tZ)(l.Z,{children:(0,e.BX)(u.ZP,{container:!0,children:[(0,e.tZ)(u.ZP,{item:!0,xs:2,children:(0,e.tZ)(F,{profile:n,slug:r})}),(0,e.tZ)(u.ZP,{item:!0,xs:10,children:(0,e.tZ)(H.n,{profile:n})})]})})})}},7255:function(t,n,r){"use strict";r.d(n,{J:function(){return c}});var e=r(5944),i=r(7357),o=r(7948),c=function(t){var n=t.children;return(0,e.tZ)(i.Z,{sx:{my:7,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,e.tZ)(o.Z,{maxWidth:"sm",children:n})})}},4345:function(t,n,r){"use strict";r.d(n,{V:function(){return c},n:function(){return a}});var e=r(5944),i=r(5861),o=r(7720),c=function(t){var n=t.title;return(0,e.BX)("div",{children:[(0,e.tZ)(i.Z,{variant:"h1",align:"center",sx:{pb:2},children:n}),(0,e.tZ)(o.Z,{})]})},a=function(t){var n=t.profile.blog_title;return(0,e.tZ)(i.Z,{variant:"h3",component:"a",display:"inline",color:"inherit",href:"/",sx:{textDecoration:"none",boxShadow:"none"},children:n})}},4186:function(t,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return u}});var e=r(5944),i=r(797),o=r(9008),c=r(5585),a=r(7255),l=r(4345),u=!0;n.default=function(t){var n=t.profile;return(0,e.BX)("div",{children:[(0,e.BX)(o.default,{children:[(0,e.tZ)("title",{children:"Tags | ".concat(n.blog_title)}),(0,e.tZ)("meta",{name:"description",content:"".concat(n.blog_title," tag list")}),(0,e.tZ)("link",{rel:"icon",href:"/static/favicon.ico"})]}),(0,e.tZ)(c._,{profile:n}),(0,e.tZ)(a.J,{children:(0,e.BX)("div",{children:[(0,e.tZ)("main",{children:(0,e.tZ)(l.V,{title:"Top"})}),(0,e.tZ)("footer",{children:(0,e.tZ)(i.Z,{profile:n})})]})})]})}},797:function(t,n,r){"use strict";r.d(n,{Z:function(){return a}});var e=r(5944),i=r(5861),o=r(122),c=r(7357);function a(t){var n=t.profile,r=n.copylight_name,a=n.copylight_url;return(0,e.tZ)(c.Z,{sx:{mt:"2rem"},children:(0,e.BX)(i.Z,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",(0,e.tZ)(o.Z,{color:"inherit",href:a,target:"_blank",rel:"noopener",children:r})," ",(new Date).getFullYear(),"."]})})}}},function(t){t.O(0,[118,774,888,179],(function(){return n=5301,t(t.s=n);var n}));var n=t.O();_N_E=n}]);