(self.webpackChunkproject_42_front=self.webpackChunkproject_42_front||[]).push([[870],{1997:function(n,e,t){"use strict";t.d(e,{BD:function(){return c},KG:function(){return o},bn:function(){return a},eL:function(){return d},ot:function(){return s},r7:function(){return r},uT:function(){return i}});var r=function(n){return n.notices.items},i=function(n){return n.notices.item},o=function(n){return n.notices.isLoadNotices},a=function(n){return n.notices.isLoadNotice},c=function(n){return n.notices.isResponseSuccessful},s=function(n){return n.notices.pagination},d=function(n){return n.notices.futurePage}},9874:function(n,e,t){"use strict";t.d(e,{Z:function(){return c}});var r,i=t(168),o=t(6444).ZP.h1(r||(r=(0,i.Z)(["\n  text-align: center;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: calc(33 / 24);\n  margin-bottom: 24px;\n  margin-top: 45px;\n\n  @media (min-width: 768px) {\n    font-weight: 700;\n    font-size: 48px;\n    line-height: 66px;\n    margin-bottom: 40px;\n  }\n\n  @media (min-width: 1024px) {\n    font-size: 48px;\n    line-height: 66px;\n    margin-bottom: 60px;\n    margin-top: 70px;\n  }\n"]))),a=t(184),c=function(n){var e=n.content;return(0,a.jsx)(o,{children:e})}},1018:function(){},7913:function(n,e,t){"use strict";t.d(e,{t:function(){return v}});var r,i,o,a,c,s=t(168),d=t(6444),l=d.ZP.div(r||(r=(0,s.Z)(["\n  display: flex;\n"]))),u=d.ZP.div(i||(i=(0,s.Z)(["\n  user-select: none;\n  padding: 8.5px 15px;\n  margin: 48px auto;\n  @media (min-width: 768px) {\n    margin: 60px auto;\n  }\n\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n\n  background-color: ",";\n  box-shadow: var(--shadow-default);\n  border-radius: 45px;\n\n"])),(function(n){return"day"===n.theme?"var(--cl-background)":"#111"})),p=d.ZP.button(o||(o=(0,s.Z)(["\n  width: 35px;\n  height: 35px;\n  border: ",";\n  /* border: 1px solid red; */\n  border-radius: 17.5px;\n  cursor:  ",";\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 15px;\n  text-align: center;\n  background-color: ",";\n  color: var(--cl-blue-light);\n  fill: ",";\n  stroke: ",";\n\n  &:hover {\n    background-color: ",";\n    color: var(--cl-background) ;\n    fill: ",";\n    stroke: ",";\n    border: "," ;\n  }\n"])),(function(n){return n.disabledBtn?"1px solid var(--cl-gray)":"1px solid var(--cl-blue-light)"}),(function(n){return n.disabledBtn?"not-allowed":"pointer"}),(function(n){return"day"===n.theme?"var(--cl-background)":"#111"}),(function(n){return"day"===n.theme?"var(--cl-background)":"#111"}),(function(n){return n.disabledBtn?"var(--cl-gray)":"var(--cl-blue-link)"}),(function(n){return n.disabledBtn?"var(--cl-background)":"var(--cl-blue-link)"}),(function(n){return n.disabledBtn?"var(--cl-background)":"var(--cl-blue-link)"}),(function(n){return n.disabledBtn?"var(--cl-gray)":"var(--cl-background)"}),(function(n){return n.disabledBtn?"1px solid var(--cl-gray)":"none"})),h=d.ZP.button(a||(a=(0,s.Z)(["\n  width: 35px;\n  height: 35px;\n  border: 1px solid var(--cl-blue-light);\n  /* border: 1px solid red; */\n  border-radius: 17.5px;\n  cursor:  not-allowed;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 15px;\n  text-align: center;\n\n  background-color: var(--cl-blue-link);\n  color: var(--cl-background) ;\n  fill: var(--cl-blue-link);\n  stroke: var(--cl-background);\n\n"]))),x=d.ZP.svg(c||(c=(0,s.Z)(["\n  height: 16px;\n  width: 16px;\n\n  transform: rotate(90deg);\n  display: block;\n  fill: inherit;\n  stroke: inherit;\n  stroke-width:1.5;\n  stroke-linecap:round;\n  stroke-linejoin:round;\n"]))),f=t(3439),g=t(9434),m=t(1997),b=t(2898),w=t(184),v=function(){var n=(0,g.I0)(),e=(0,g.v9)(m.ot),t=e.limit,r=e.numberNotices,i=e.page,o=(0,g.v9)((function(n){return n.main.theme})),a=function(e){var o=Number(i)+e,a=Math.ceil(r/t);if(o>0&&a>=o)return n((0,b.Rc)(o));n((0,b.Rc)(1))},c=function(e){n((0,b.Rc)(e))},s=Math.ceil(r/t),d=Number(i),v=Array.from({length:s},(function(n,e){return e+1}));return(0,w.jsx)(l,{children:(0,w.jsxs)(u,{theme:o,children:[(0,w.jsx)(p,{disabledBtn:1===d,onClick:function(){return a(-1)},theme:o,children:(0,w.jsx)(x,{children:(0,w.jsx)("use",{href:f.Z+"#chevron-down"})})}),function(n,e){if(n<6)return v.map((function(n){return n===e?(0,w.jsx)(h,{disabled:!0,onClick:function(){return c(n)},children:n},n):(0,w.jsx)(p,{onClick:function(){return c(n)},theme:o,children:n},n)}))}(s,d),(0,w.jsx)(p,{disabledBtn:d===s,onClick:function(){return a(1)},theme:o,children:(0,w.jsx)(x,{children:(0,w.jsx)("use",{href:f.Z+"#chevron-up"})})})]})})}},6870:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return ln}});var r,i,o,a,c,s,d,l,u,p,h,x,f,g,m,b,w,v=t(1413),Z=t(3433),j=t(9439),k=t(5861),y=t(4687),P=t.n(y),F=t(2791),S=t(4137),C=t(168),B=t(6444),z=B.ZP.form(r||(r=(0,C.Z)(["\n  position: relative;\n  width: 280px;\n  margin-bottom: 44px;\n  margin-right: auto;\n  margin-left: auto;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 62px;\n    width: 492px;\n  }\n  @media screen and (min-width: 1024px) {\n    width: 608px;\n    margin-bottom: 82px;\n  }\n"]))),D=B.ZP.input(i||(i=(0,C.Z)(["\n  width: 100%;\n  height: 44px;\n  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);\n  border-radius: 40px;\n  border: 1px solid transparent;\n  padding: 8px 20px;\n  box-sizing: border-box;\n  outline: none;\n  &::placeholder {\n    font-size: 14px;\n  }\n  @media screen and (min-width: 768px) {\n    width: 492px;\n  }\n  @media screen and (min-width: 1024px) {\n    width: 608px;\n    &::placeholder {\n      font-size: 20px;\n    }\n  }\n"]))),N=B.ZP.div(o||(o=(0,C.Z)(["\n  position: absolute;\n  right: 18px;\n  top: 50%;\n  transform: translateY(-50%);\n  gap: 12px;\n  display: flex;\n\n"]))),R=B.ZP.button(a||(a=(0,C.Z)(["\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  border: none;\n  transition: color 250ms linear;\n  cursor: pointer;\n  color: '#757575';\n  svg {\n    color: #111111;\n    transition: transform 250ms ease-in-out, border 250ms ease-in-out;\n  }\n  svg:hover {\n    color: #757575;\n  }\n  @media screen and (min-width: 768px) {\n    right: 20px;\n  }\n  @media screen and (min-width: 1280px) {\n  }\n"]))),_=B.ZP.svg(c||(c=(0,C.Z)(["\n\n  display: block;\n  fill: var(--cl-blue-light);\n  stroke: var(--cl-blue-link);\n  stroke-width:1.5;\n  stroke-linecap:round;\n  stroke-linejoin:round;\n\n"]))),A=t(3439),E=t(184),L=function(n){var e=n.searchQuery,t=n.onClick;return(0,E.jsxs)(N,{children:[(0,E.jsx)(R,{type:"submit",children:(0,E.jsx)(_,{width:"24",height:"24",children:(0,E.jsx)("use",{href:A.Z+"#search"})})}),""!==e&&(0,E.jsx)(R,{type:"button",color:"#FFC107",fill:"#757575",hovercolor:"#F43F5E",onClick:t,children:(0,E.jsx)(_,{width:"24",height:"24",children:(0,E.jsx)("use",{href:A.Z+"#cross-small"})})})]})},M=function(n){var e=n.onSubmit,t=(0,F.useState)(""),r=(0,j.Z)(t,2),i=r[0],o=r[1],a=function(n){n.preventDefault(),e(i)};return(0,E.jsxs)(z,{onSubmit:function(n){return a(n)},children:[(0,E.jsx)(D,{placeholder:"Search",type:"text",name:"searchQuery",value:i,onChange:function(n){return function(n){o(n.target.value.toLowerCase())}(n)}}),(0,E.jsx)(L,{onClick:function(){o(""),e("")},searchQuery:i})]})},I=t(5218),Q=t(9874),T=t(9434),O=B.ZP.ul(s||(s=(0,C.Z)(["\n  margin: 0 auto;\n  margin-bottom: 40px;\n  display: grid;\n  row-gap: 44px;\n  width: 100%;\n  /* @media screen and (min-width: 768px) and (max-width: 1279.99px) {\n    width: 280px;\n  } */\n  @media screen and (min-width: 768px) {\n    display: flex;\n    flex-wrap: wrap;\n    column-gap: 32px;\n    row-gap: 46px;\n    margin-bottom: 60px;\n  }\n  @media screen and (min-width: 1280px) {\n    column-gap: 31px;\n    row-gap: 46px;\n  }\n"]))),G=B.ZP.li(d||(d=(0,C.Z)(["\n  width: 100%;\n  position: relative;\n  border-radius: 20px;\n  background-color: ",";\n  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);\n  &::before {\n    content: '';\n    position: absolute;\n    top: -20px;\n    left: 0;\n    width: 100%;\n    height: 8px;\n    border-radius: 4px;\n    background-color: #54ADFF;\n    background: linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%);\n    @media screen and (min-width: 768px) {\n      top: -22px;\n    }\n  }\n  @media screen and (min-width: 768px) {\n    flex-basis: calc((100% - 32px) / 2);\n  }\n  @media screen and (min-width: 1280px) {\n    flex-basis: calc((100% - 2 * 31px) / 3);\n  }\n"])),(function(n){return"day"===n.theme?"#FDF7F2":"111"})),K=B.ZP.div(l||(l=(0,C.Z)(["\n  overflow: hidden;\n  border-radius: 20px;\n  width: 100%;\n  height: 252px;\n"]))),U=B.ZP.img(u||(u=(0,C.Z)(["\n  display: block;\n  object-fit: cover;\n  height: 100%;\n  width: 100%;\n"]))),W=((0,B.ZP)(U)(p||(p=(0,C.Z)(["\n  background-image: url('images/icon-pawprint/icons.svg');\n  width: 280px;\n  height: 252px;\n  fill: #54adff;\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n  @media screen and (min-width: 768px) {\n    width: 395px;\n  }\n"]))),B.ZP.div(h||(h=(0,C.Z)(["\n  padding: 16px 12px 12px 12px;\n"])))),Y=B.ZP.h2(x||(x=(0,C.Z)(["\n  margin-left: 0;\n  margin-bottom: 16px;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 1.37;\n  letter-spacing: -0.01em;\n  overflow: hidden;\n  height: 66px;\n"]))),q=B.ZP.p(f||(f=(0,C.Z)(["\n  font-weight: 400;\n  line-height: 1.37;\n  height: 154px;\n  margin-bottom: 40px;\n  @media screen and (min-width: 768px) {\n    height: 132px;\n  }\n  @media screen and (min-width: 1280px) {\n    height: 110px;\n  }\n"]))),H=B.ZP.div(g||(g=(0,C.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),J=B.ZP.p(m||(m=(0,C.Z)(["\n  font-weight: 400;\n  line-height: 1.37;\n  color: #888888;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n"]))),V=B.ZP.a(b||(b=(0,C.Z)(["\n  padding: 0;\n  line-height: 1.37;\n  color: #54ADFF;\n  transition: transform 250ms ease-in-out, border 250ms ease-in-out;\n  &:hover,\n  &:focus {\n    color: #888888;\n  }\n"]))),X=function(n,e){return n.length>e?"".concat(n.slice(0,e),"..."):n},$=function(n){return n.split("T")[0].split("-").reverse().join("/")},nn=function(n){var e=n.news,t=(0,T.v9)((function(n){return n.main.theme}));return(0,E.jsx)(O,{children:e.map((function(n){var e=n.id,r=n.imgUrl,i=n.title,o=n.text,a=n.date,c=n.url;return(0,E.jsxs)(G,{theme:t,children:[(0,E.jsx)(K,{children:(0,E.jsx)(U,{src:r,alt:i,width:"280"})}),(0,E.jsxs)(W,{children:[(0,E.jsx)(Y,{children:X(i,40)}),(0,E.jsx)(q,{children:X(o,160)}),(0,E.jsxs)(H,{children:[(0,E.jsx)(J,{children:$(a)}),(0,E.jsx)(V,{href:c,target:"_blank",rel:"noreferrer noopener",children:"Read more"})]})]})]},e)}))})},en=t(7913),tn=t(1018),rn=function(){return(0,E.jsxs)(tn.Section,{children:[(0,E.jsx)(tn.Title,{children:"Ooops:( Such news not found"}),(0,E.jsx)(tn.Wrap,{})]})},on=B.ZP.div(w||(w=(0,C.Z)(["\n  margin: 0 auto;\n  padding: 0 20px;\n\n  @media screen and (min-width: 320px) and (max-width: 767.99px) {\n    width: 320px;\n  }\n\n  @media screen and (min-width: 768px) and (max-width: 1279.99px) {\n    width: 768px;\n    padding: 0 32px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 1280px;\n    padding: 0 16px;\n  }\n"]))),an=t(1087),cn=t(1243),sn=function(){var n=(0,k.Z)(P().mark((function n(e){var t;return P().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),n.prev=1,n.next=4,cn.Z.get("/news",{params:e});case 4:return t=n.sent,console.log(t),n.abrupt("return",t.data);case 9:return n.prev=9,n.t0=n.catch(1),n.abrupt("return",console.log(n.t0.massage));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}(),dn=function(){var n=(0,F.useState)(""),e=(0,j.Z)(n,2),t=e[0],r=e[1],i=(0,F.useState)([]),o=(0,j.Z)(i,2),a=o[0],c=o[1],s=(0,F.useState)(1),d=(0,j.Z)(s,2),l=d[0],u=d[1],p=(0,F.useState)(!1),h=(0,j.Z)(p,2),x=h[0],f=h[1],g=(0,F.useState)(!1),m=(0,j.Z)(g,2),b=m[0],w=m[1],y=(0,F.useState)(0),C=(0,j.Z)(y,2),B=C[0],z=C[1],D=(0,an.lr)(),N=(0,j.Z)(D,2),R=N[0],_=N[1],A=(0,F.useMemo)((function(){return Object.fromEntries((0,Z.Z)(R))}),[R]);(0,F.useEffect)((function(){f(!0);var n=function(){var n=(0,k.Z)(P().mark((function n(e){var t,r,i,o;return P().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.search,r=e.page,i=e.limit,n.prev=1,n.next=4,sn({search:t,page:r,limit:i});case 4:o=n.sent,c(o.data),z(Math.ceil(o.total/i)),n.next=14;break;case 9:n.prev=9,n.t0=n.catch(1),w(!0),console.log(n.t0),I.Am.error(n.t0.massage);case 14:return n.prev=14,f(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[1,9,14,17]])})));return function(e){return n.apply(this,arguments)}}();n(t?{search:t,page:l,limit:6}:{page:l,limit:6})}),[t,l,6]);return(0,E.jsxs)(on,{children:[(0,E.jsx)(Q.Z,{content:"News"}),x&&(0,E.jsx)(S.a,{}),b&&!a.length&&(0,E.jsx)(rn,{}),(0,E.jsx)(M,{onSubmit:function(n){_(""!==n?{search:n}:{}),r(n),u(1)}}),a.length>0&&(0,E.jsx)(nn,{news:a}),B>1&&(0,E.jsx)(en.t,{currentPage:l,totalPages:B,onPageChange:function(n){_((0,v.Z)((0,v.Z)({},A),{},{page:n})),u(n)}})]})},ln=function(){return(0,E.jsx)(dn,{})}}}]);
//# sourceMappingURL=870.2fb37db2.chunk.js.map