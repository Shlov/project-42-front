"use strict";(self.webpackChunkproject_42_front=self.webpackChunkproject_42_front||[]).push([[368],{8447:function(n,e,t){t.d(e,{n$:function(){return p},ni:function(){return u},u5:function(){return s}});var r=t(5861),i=t(4687),o=t.n(i),a=t(1243),c=t(9829);a.Z.defaults.baseURL="";var l=function(n){a.Z.defaults.headers.common.Authorization="Bearer ".concat(n)},s=(0,c.hg)("auth/reg",function(){var n=(0,r.Z)(o().mark((function n(e,t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.post("/register",e);case 3:return r=n.sent,l(r.data.token),n.abrupt("return",r.data);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",t.rejectWithValue(n.t0.message));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}()),p=(0,c.hg)("auth/login",function(){var n=(0,r.Z)(o().mark((function n(e,t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),n.prev=1,n.next=4,a.Z.post("/login",e);case 4:return r=n.sent,l(r.data.token),n.abrupt("return",r.data);case 9:return n.prev=9,n.t0=n.catch(1),n.abrupt("return",t.rejectWithValue(n.t0.message));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e,t){return n.apply(this,arguments)}}()),u=(0,c.hg)("auth/logout",function(){var n=(0,r.Z)(o().mark((function n(e,t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.post("/user/logout");case 3:a.Z.defaults.headers.common.Authorization="",n.next=9;break;case 6:return n.prev=6,n.t0=n.catch(0),n.abrupt("return",t.rejectWithValue(n.t0.message));case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e,t){return n.apply(this,arguments)}}())},4878:function(n,e,t){t.d(e,{h:function(){return b}});var r,i,o,a,c,l=t(2791),s=t(168),p=t(6444),u=p.ZP.div(r||(r=(0,s.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(43, 43, 43, 0.6);\n  z-index: 1200;\n"]))),d=p.ZP.div(i||(i=(0,s.Z)(["\n  position: relative;\n  width: 280px;\n  height: ",";\n  \n  background-color: var(--cl-white);\n  box-shadow: var(--shadow-default);\n  border-radius: 20px;\n\n  @media (min-width: 768px) {\n    width: 608px;\n    height: 354px;\n    border-radius: 40px;\n  }\n"])),(function(n){return n.height})),h=p.ZP.div(o||(o=(0,s.Z)(["\n  height: 100%;\n"]))),x=p.ZP.button(a||(a=(0,s.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n\n  padding: 0;\n  background-color: var(--cl-white);\n  color: var(--cl-blue-link);\n\n  border: none;\n  cursor: pointer;\n\n  transition: transform var(--animat);\n\n  @media (min-width: 768px) {\n    top: 29px;\n    right: 29px;\n  }\n\n  &:hover,\n  &:active,\n  &:focus {\n    transform: scale(1.2);\n  }\n"]))),g=p.ZP.svg(c||(c=(0,s.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: currentColor;\n"]))),f=t(3439),m=t(184),b=function(n){var e=n.children,t=n.onClose,r=n.height;console.log(typeof r),console.log(r);return(0,l.useEffect)((function(){var n=function(n){"Escape"===n.code&&t()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[t]),(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(u,{onClick:function(n){n.target===n.currentTarget&&t()},children:(0,m.jsxs)(d,{size:r,children:[(0,m.jsx)(x,{type:"button","apia-label":"close",onClick:t,children:(0,m.jsx)(g,{children:(0,m.jsx)("use",{href:f.Z+"#cross-small"})})}),(0,m.jsx)(h,{children:e})]})})})}},6368:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r,i,o,a,c,l,s=t(9439),p=t(4878),u=t(2791),d=t(168),h=t(6444),x=h.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  align-items: center;\n  padding: 77px 0 60px;\n\n  font-style: normal;\n  letter-spacing: 0.04em;\n  color: var(--cl-black);\n\n  @media (min-width: 768px) {\n    padding: 108px 0 108px;\n  }\n"]))),g=h.ZP.h4(i||(i=(0,d.Z)(["\n  font-size: 24px;\n  line-height: 33px;\n  font-weight: 500;\n\n  padding-bottom: 48px;\n\n  @media (min-width: 768px) {\n    font-weight: 700;\n    font-size: 36px;\n    line-height: 49px;\n    padding-bottom: 48px;\n  }\n"]))),f=h.ZP.div(o||(o=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    gap: 17px;\n  }\n"]))),m=h.ZP.button(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n\n  padding: 0;\n\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 22px;\n\n  letter-spacing: 0.04em;\n  font-weight: 700;\n\n  border: 2px solid var(--cl-blue-link);\n  border-radius: 40px;\n  color: var(--cl-blue-link);\n  background-color: var(--cl-white);\n  width: 256px;\n  height: 40px;\n  @media (min-width: 768px) {\n    width: 129px;\n  }\n\n  transition: background-color var(--animat), color var(--animat);\n\n  &:hover,\n  &:active,\n  &:focus {\n    background-color: var(--cl-blue-link);\n    color: var(--cl-white);\n  }\n"]))),b=h.ZP.svg(c||(c=(0,d.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: currentColor;\n  fill: transparent;\n"]))),v=h.ZP.button(l||(l=(0,d.Z)(["\n  display: inline-flex;\n  gap: 12px;\n  align-items: center;\n  justify-content: space-between;\n  width: 98px;\n  height: 30px;\n  font-weight: 500;\n  font-family: 'Manrope';\n  font-size: 16px;\n  border: none;\n  background-color: transparent;\n"]))),w=t(9434),Z=t(8447);var j,k,y,C,P,z=t.p+"static/media/logout.8790af7bde245471313fc2a3bdb4b2da.svg",E=t(3439),F=h.ZP.div(j||(j=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  align-items: center;\n  padding: 68px 0 60px;\n\n  font-style: normal;\n  letter-spacing: 0.04em;\n  color: var(--cl-black);\n\n  @media (min-width: 768px) {\n    padding: 60px 0 60px;\n  }\n"]))),L=h.ZP.h4(k||(k=(0,d.Z)(["\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 33px;\n\n  padding: 0;\n  margin-top: 0px;\n  margin-bottom: 24px;\n\n  @media (min-width: 768px) {\n    font-size: 36px;\n    line-height: 49px;\n    margin-bottom: 40px;\n  }\n"]))),_=h.ZP.p(y||(y=(0,d.Z)(["\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 22px;\n  text-align: center;\n\n  margin-bottom: 40px;\n\n  @media (min-width: 768px) {\n    font-size: 24px;\n    line-height: 33px;\n    margin-bottom: 48px;\n  }\n"]))),A=h.ZP.button(C||(C=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  padding: 0;\n  width: 248px;\n  height: 40px;\n  letter-spacing: 0.04em;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 22px;\n\n  border: none;\n  border-radius: 40px;\n  color: var(--cl-white);\n  background: var(--cl-blue-link);\n\n  cursor: pointer;\n\n  /* transition: background var(--animat); */\n\n  &:hover,\n  &:active,\n  &:focus {\n    background: var(--gr-blue);\n  }\n"]))),B=h.ZP.svg(P||(P=(0,d.Z)(["\n  width: 24px;\n  height: 24px;\n  fill: currentColor;\n"]))),V=t(184),W=function(){var n=(0,u.useState)(!1),e=(0,s.Z)(n,2),t=e[0],r=e[1],i=function(){r((function(n){return!n}))};return(0,V.jsxs)(V.Fragment,{children:[t&&(0,V.jsx)(p.h,{onClose:i,height:"287px",children:(0,V.jsxs)(F,{children:[(0,V.jsx)(L,{children:"Congrats!"}),(0,V.jsx)(_,{children:"You`re registration is success"}),(0,V.jsxs)(A,{type:"button","aria-label":"go to profile",onClick:i,children:["Go to profile",(0,V.jsx)(B,{children:(0,V.jsx)("use",{href:E.Z+"#pawprint"})})]})]})}),(0,V.jsx)("button",{type:"button",style:{marginBottom:"200px",backgroundColor:"#CDDC39"},onClick:i,children:"Temporary Open ModalCongrats"})]})},D=function(){var n=(0,u.useState)(!1),e=(0,s.Z)(n,2),t=e[0],r=e[1],i=(0,w.I0)(),o=function(){r((function(n){return!n}))};return(0,V.jsxs)(V.Fragment,{children:[t&&(0,V.jsx)(p.h,{onClose:o,height:"302px",children:(0,V.jsxs)(x,{children:[(0,V.jsx)(g,{children:"Already leaving?"}),(0,V.jsxs)(f,{children:[(0,V.jsx)(m,{type:"button","aria-label":"cancel",onClick:o,children:"Cancel"}),(0,V.jsxs)(m,{type:"button","aria-label":"yes",onClick:function(){console.log("\u041f\u0435\u0440\u0435\u0434\u0430\u0454\u043c\u043e \u0435\u043a\u0448\u043d"),i((0,Z.ni)())},children:["Yes",(0,V.jsx)(b,{children:(0,V.jsx)("use",{href:E.Z+"#logout"})})]})]})]})}),(0,V.jsxs)(v,{type:"button",onClick:o,children:[(0,V.jsx)("img",{src:z,alt:"Button logout"}),"LogOut"]}),(0,V.jsx)(W,{})]})},M=function(){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("h2",{children:"User"}),(0,V.jsx)(D,{})]})}}}]);
//# sourceMappingURL=368.39ca5279.chunk.js.map