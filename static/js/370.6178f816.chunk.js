"use strict";(self.webpackChunkproject_42_front=self.webpackChunkproject_42_front||[]).push([[370],{8087:function(n,e,i){i.d(e,{By:function(){return t},JS:function(){return r},Vc:function(){return o}});var t=function(n){return n.pets.pets},r=function(n){return n.pets.isResponseSuccessful},o=function(n){return n.pets.isLoading}},1648:function(n,e,i){i.d(e,{Z:function(){return C}});var t,r,o,a,s,l=i(9439),d=i(168),p=i(6444),x=i(1087),c=p.ZP.svg(t||(t=(0,d.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: var(--cl-background);\n  fill: transparent;\n"]))),h=(0,p.iv)(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  padding: 0;\n  width: 129px;\n  height: 40px;\n  letter-spacing: 0.04em;\n  font-weight: 700;\n  cursor: pointer;\n\n  border: 2px solid var(--cl-blue-link);\n  border-radius: 40px;\n  color: var(--cl-background);\n  background-color: var(--cl-blue-link);\n\n  transition: background-color var(--animat), border-color var(--animat);\n\n  &:hover,\n  &:focus {\n    color: var(--cl-blue-link);\n    background-color: var(--cl-almost-white);\n\n    svg {\n      stroke: var(--cl-blue-link);\n    }\n  }\n"]))),u=(0,p.ZP)(x.OL)(o||(o=(0,d.Z)(["\n  ","\n"])),h),m=p.ZP.button(a||(a=(0,d.Z)(["\n  ","\n"])),h),g=p.ZP.div(s||(s=(0,d.Z)(["\n  display: flex;\n  gap: 18px;\n"]))),f=i(7689),b=i(9434),j=i(3439),w=i(5877),Z=i(2791),v=i(4878),y=i(944),k=i(7005),P=i(184),C=function(){var n=(0,f.TH)(),e=(0,b.v9)(w.HC),i=(0,Z.useState)(!1),t=(0,l.Z)(i,2),r=t[0],o=t[1];return(0,P.jsx)(P.Fragment,{children:e?(0,P.jsxs)(u,{to:"/add-pet",state:{from:n},children:["Add Pet",(0,P.jsx)(c,{children:(0,P.jsx)("use",{href:j.Z+"#plus-small"})})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(m,{type:"button",onClick:function(){o(!0)},children:["Add Pet",(0,P.jsx)(c,{children:(0,P.jsx)("use",{href:j.Z+"#plus-small"})})]}),r&&(0,P.jsx)(v.h,{onClose:function(){o((function(n){return!n}))},children:(0,P.jsxs)(y.hz,{children:[(0,P.jsx)(y.i8,{children:"Please log in or register to use this functionality."}),(0,P.jsxs)(g,{children:[(0,P.jsx)(x.OL,{to:"/login",children:(0,P.jsxs)(k.oo,{children:["Log IN",(0,P.jsx)(k.aJ,{width:21,height:24,children:(0,P.jsx)("use",{href:j.Z+"#pawprint"})})]})}),(0,P.jsx)(x.OL,{to:"/register",children:(0,P.jsx)(k.vQ,{children:"Registration"})})]})]})})]})})}},4878:function(n,e,i){i.d(e,{h:function(){return b}});var t,r,o,a,s,l=i(2791),d=i(168),p=i(6444),x=p.ZP.div(t||(t=(0,d.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 100vw;\n  height: 100vh;\n\n  background-color: rgba(43, 43, 43, 0.6);\n  z-index: 1200;\n"]))),c=p.ZP.div(r||(r=(0,d.Z)(["\n  position: relative;\n  width: 280px;\n  max-height: 590px; //\u043d\u0430\u0439\u043c\u0435\u043d\u0448\u0430 \u0432\u0438\u0441\u043e\u0442\u0430 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443\n  overflow-y: auto;\n  overflow-x: hidden;\n  \n  background-color: var(--cl-almost-white);\n  box-shadow: var(--shadow-default);\n  border-radius: 20px;\n\n  @media (min-width: 768px) {\n    width: ",";\n    border-radius: 40px;\n  }\n"])),(function(n){return n.width?"681px":"608px"})),h=p.ZP.div(o||(o=(0,d.Z)(["\n  height: 100%;\n"]))),u=p.ZP.button(a||(a=(0,d.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n\n  padding: 0;\n\n  background-color: var(--cl-almost-white);\n  color: var(--cl-blue-link);\n  border: none;\n\n  cursor: pointer;\n\n  transition: transform var(--animat);\n\n  @media (min-width: 768px) {\n    top: 29px;\n    right: 29px;\n  }\n\n  &:hover,\n  &:active,\n  &:focus {\n    transform: scale(1.2);\n  }\n"]))),m=p.ZP.svg(s||(s=(0,d.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: currentColor;\n"]))),g=i(3439),f=i(184),b=function(n){var e=n.children,i=n.onClose,t=n.width;return(0,l.useEffect)((function(){var n=function(n){"Escape"===n.code&&i()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",function(){document.body.style.overflow="visible",window.removeEventListener("keydown",n)}}),[i]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(x,{onClick:function(n){n.target===n.currentTarget&&i()},children:(0,f.jsxs)(c,{width:t?t="true":void 0,children:[(0,f.jsx)(u,{type:"button","apia-label":"close",onClick:i,children:(0,f.jsx)(m,{children:(0,f.jsx)("use",{href:g.Z+"#cross-small"})})}),(0,f.jsx)(h,{children:e})]})})})}},944:function(n,e,i){i.d(e,{SB:function(){return x},hz:function(){return p},i8:function(){return c},md:function(){return u},zx:function(){return h}});var t,r,o,a,s,l=i(168),d=i(6444),p=d.ZP.div(t||(t=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  align-items: center;\n  padding: 68px 0 60px;\n\n  font-style: normal;\n  letter-spacing: 0.04em;\n  color: var(--cl-black);\n\n  @media (min-width: 768px) {\n    padding: 60px 0 60px;\n  }\n"]))),x=d.ZP.h4(r||(r=(0,l.Z)(["\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 33px;\n\n  padding: 0;\n  margin-top: 0px;\n  margin-bottom: 24px;\n\n  @media (min-width: 768px) {\n    font-size: 36px;\n    line-height: 49px;\n    margin-bottom: 40px;\n  }\n"]))),c=d.ZP.p(o||(o=(0,l.Z)(["\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 22px;\n  text-align: center;\n\n  margin-bottom: 40px;\n\n  @media (min-width: 768px) {\n    font-size: 24px;\n    line-height: 33px;\n    margin-bottom: 48px;\n  }\n"]))),h=d.ZP.button(a||(a=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n\n  padding: 0;\n  width: 248px;\n  height: 40px;\n\n  letter-spacing: 0.04em;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 22px;\n\n  border: 2px solid var(--animat);\n  border-radius: 40px;\n  color: var(--cl-background);\n  background: var(--cl-blue-link);\n\n  cursor: pointer;\n\n  &:hover,\n  &:active,\n  &:focus {\n    background: var(--gr-blue);\n  }\n"]))),u=d.ZP.svg(s||(s=(0,l.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: currentColor;\n  fill: transparent;\n"])))},3370:function(n,e,i){i.r(e),i.d(e,{default:function(){return Ce}});var t,r,o,a,s,l,d,p,x,c,h,u,m,g,f,b,j,w,Z,v,y,k,P,C,z,S,B,F,L,R,_,E,U,N,I,O,A,Y,q,D,H,J,M,T,V,$,G,Q,X,K,W=i(5861),nn=i(9439),en=i(4687),tn=i.n(en),rn=i(5705),on=i(6727),an=i(2791),sn=i(9434),ln=i(5877),dn=i(8447),pn=i(3439),xn=i(4878),cn=i(168),hn=i(6444),un=hn.ZP.div(t||(t=(0,cn.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  align-items: center;\n\n  padding: 77px 0 60px;\n\n  font-style: normal;\n  letter-spacing: 0.04em;\n  color: var(--cl-black);\n\n  @media (min-width: 768px) {\n    padding: 108px 0 108px;\n  }\n"]))),mn=hn.ZP.h4(r||(r=(0,cn.Z)(["\n  font-size: 24px;\n  line-height: 33px;\n  font-weight: 500;\n\n  padding-bottom: 48px;\n\n  @media (min-width: 768px) {\n    font-weight: 700;\n    font-size: 36px;\n    line-height: 49px;\n    padding-bottom: 48px;\n  }\n"]))),gn=hn.ZP.div(o||(o=(0,cn.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    gap: 17px;\n  }\n"]))),fn=hn.ZP.button(a||(a=(0,cn.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n\n  width: 256px;\n  height: 40px;\n  padding: 0;\n\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 22px;\n  letter-spacing: 0.04em;\n\n  border: 2px solid var(--cl-blue-link);\n  border-radius: 40px;\n  color: var(--cl-blue-link);\n  background: transparent;\n  \n  cursor: pointer;\n\n  @media (min-width: 768px) {\n    width: 129px;\n  }\n\n  transition: background var(--animat), background-color var(--animat);\n\n  &:hover,\n  &:active,\n  &:focus {\n    color: var(--cl-background);\n    background: var(--gr-blue);\n    border: var(--gr-blue);\n  }\n"]))),bn=(0,hn.ZP)(fn)(s||(s=(0,cn.Z)(["\n  border: 2px solid var(--animat);\n  color: var(--cl-background);\n  background: var(--cl-blue-link);\n\n  transition: none;\n\n  &:hover,\n  &:active,\n  &:focus {\n    background: var(--gr-blue);\n  }\n"]))),jn=hn.ZP.svg(l||(l=(0,cn.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: currentColor;\n  fill: transparent;\n"]))),wn=hn.ZP.svg(d||(d=(0,cn.Z)(["\n  stroke: var(--cl-blue-link);\n  fill: transparent;\n"]))),Zn=hn.ZP.button(p||(p=(0,cn.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n\n  width: 98px;\n  height: 30px;\n\n  font-weight: 500;\n  font-family: 'Manrope';\n  font-size: 16px;\n\n  border: none;\n  background-color: transparent;\n"]))),vn=i(7689),yn=i(184),kn=function(){var n=(0,an.useState)(!1),e=(0,nn.Z)(n,2),i=e[0],t=e[1],r=(0,sn.I0)(),o=function(){t((function(n){return!n}))};return(0,sn.v9)(ln.HC)?(0,yn.jsxs)(yn.Fragment,{children:[i&&(0,yn.jsx)(xn.h,{onClose:o,children:(0,yn.jsxs)(un,{children:[(0,yn.jsx)(mn,{children:"Already leaving?"}),(0,yn.jsxs)(gn,{children:[(0,yn.jsx)(fn,{type:"button","aria-label":"cancel",onClick:o,children:"Cancel"}),(0,yn.jsxs)(bn,{type:"button","aria-label":"yes",onClick:function(){r((0,dn.ni)())},children:["Yes",(0,yn.jsx)(jn,{children:(0,yn.jsx)("use",{href:pn.Z+"#logout"})})]})]})]})}),(0,yn.jsxs)(Zn,{type:"button",onClick:o,children:[(0,yn.jsx)(wn,{children:(0,yn.jsx)("use",{href:pn.Z+"#logout"})}),"LogOut"]})]}):(0,yn.jsx)(vn.Fg,{to:"/",replace:!0})},Pn=i(1087),Cn=i(8087),zn=i(1271),Sn=hn.ZP.div(x||(x=(0,cn.Z)(["\n  position: relative;\n  padding: 16px 20px 40px 20px;\n  width: 280px;\n  background-color: var(--cl-almost-white);\n  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);\n  border-radius: 20px;\n\n  @media screen and (min-width: 768px) {\n    display: flex;\n    width: 703px;\n    padding: 20px;\n    border-radius: 40px;\n  }\n  @media (min-width: 1280px) {\n    display: flex;\n    width: 821px;\n  }\n"]))),Bn=hn.ZP.img(c||(c=(0,cn.Z)(["\n  background-color: gray;\n  margin-bottom: 20px;\n  width: 240px;\n  height: 240px;\n  border-radius: 20px;\n\n  @media screen and (min-width: 768px) {\n    width: 128px;\n    height: 128px;\n    margin-right: 20px;\n    margin-bottom: 0;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 161px;\n    height: 161px;\n    margin-right: 32px;\n    border-radius: 40px;\n  }\n"]))),Fn=hn.ZP.div(h||(h=(0,cn.Z)(["\n  max-width: 280px;\n\n  @media screen and (min-width: 768px) {\n    max-width: 515px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    max-width: 580px;\n  }\n"]))),Ln=hn.ZP.p(u||(u=(0,cn.Z)(["\n  margin-bottom: 12px;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.36;\n  letter-spacing: 0.04em;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 16px;\n  }\n  @media screen and (min-width: 1280px) {\n    margin-bottom: 12px;\n    font-size: 16px;\n    line-height: 1.38;\n  }\n"]))),Rn=hn.ZP.p(m||(m=(0,cn.Z)(["\n  margin-bottom: 12px;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.36;\n  letter-spacing: 0.04em;\n\n  @media screen and (min-width: 1280px) {\n    margin-bottom: 16px;\n    font-size: 16px;\n  }\n"]))),_n=hn.ZP.p(g||(g=(0,cn.Z)(["\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.36;\n  letter-spacing: 0.04em;\n\n  @media screen and (min-width: 768px) {\n    line-height: 1.57;\n  }\n  @media screen and (min-width: 1280px) {\n    font-size: 16px;\n    line-height: 1.38;\n  }\n"]))),En=hn.ZP.span(f||(f=(0,cn.Z)(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.36;\n  letter-spacing: 0.04em;\n  width: 240px;\n\n  @media screen and (min-width: 1280px) {\n    font-size: 16px;\n  }\n"]))),Un=hn.ZP.span(b||(b=(0,cn.Z)(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.36;\n  letter-spacing: 0.04em;\n  width: 240px;\n  align-items: center;\n\n  @media screen and (min-width: 768px) {\n    line-height: 1.57;\n  }\n  @media screen and (min-width: 1280px) {\n    font-size: 16px;\n  }\n"]))),Nn=hn.ZP.button(j||(j=(0,cn.Z)(["\n  position: absolute;\n  top: 272px;\n  right: 16px;\n  width: 24px;\n  height: 24px;\n  border: none;\n  background-color: var(--cl-almost-white);\n  cursor: pointer;\n\n  @media screen and (min-width: 768px) {\n    top: 20px;\n    right: 20px;\n  }\n"]))),In=hn.ZP.svg(w||(w=(0,cn.Z)(["\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  top: 0;\n  right: 0;\n  stroke: var(--cl-blue-link);\n  fill: transparent;\n\n  @media screen and (min-width: 768px) {\n    top: 0;\n    right: 0;\n  }\n"]))),On=hn.ZP.div(Z||(Z=(0,cn.Z)(["\n  padding: 60px 5px 60px 5px;\n  color: var(--cl-black);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-wrap: wrap;\n  letter-spacing: -0.01em;\n"]))),An=hn.ZP.h1(v||(v=(0,cn.Z)(["\n  font-weight: 700;\n  font-size: 28px;\n  text-align: center;\n  line-height: 1.36;\n  padding: 0;\n  margin: 0px;\n  margin-bottom: 40px;\n"]))),Yn=hn.ZP.p(y||(y=(0,cn.Z)(["\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.38;\n  text-align: center;\n  margin-bottom: 48px;\n"]))),qn=hn.ZP.span(k||(k=(0,cn.Z)(["\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.38;\n  text-align: center;\n"]))),Dn=hn.ZP.div(P||(P=(0,cn.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 17px;\n"]))),Hn=hn.ZP.button(C||(C=(0,cn.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  padding: 0;\n  width: 120px;\n  height: 40px;\n  letter-spacing: 0.04em;\n  font-weight: 700;\n  cursor: pointer;\n\n  border: 2px solid var(--cl-blue-link);\n  border-radius: 40px;\n  color: var(--cl-blue-link);\n  background-color: var(--cl-background);\n\n  transition: background-color var(--animat), color var(--animat),\n    border-color var(--animat);\n\n  &:hover {\n    background-color: var(--cl-blue-link);\n    color: var(--cl-background);\n  }\n  @media screen and (min-width: 768px) {\n    width: 129px;\n  }\n"]))),Jn=hn.ZP.svg(z||(z=(0,cn.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: currentColor;\n  fill: transparent;\n"]))),Mn=function(n){var e=n.item,i=e._id,t=e.name,r=e.imageURL,o=e.birthday,a=e.breed,s=e.comments,l=(0,sn.I0)(),d=(0,an.useState)(!1),p=(0,nn.Z)(d,2),x=p[0],c=p[1],h=function(){c((function(n){return!n}))};return(0,yn.jsxs)(Sn,{children:[x&&(0,yn.jsx)(xn.h,{onClose:h,children:(0,yn.jsxs)(On,{children:[(0,yn.jsx)(An,{children:"Delete your pet?"}),(0,yn.jsxs)(Yn,{children:["Are you sure want to delete a ",(0,yn.jsxs)(qn,{children:["\u201c",t,"?\u201d"]}),(0,yn.jsx)("br",{}),"You can`t undo this action."]}),(0,yn.jsxs)(Dn,{children:[(0,yn.jsx)(Hn,{type:"button",onClick:h,children:"Cancel"}),(0,yn.jsxs)(Hn,{type:"button",onClick:function(){l((0,zn.on)(i)),c(!1)},children:["Yes",(0,yn.jsx)(Jn,{children:(0,yn.jsx)("use",{href:pn.Z+"#trash"})})]})]})]})}),(0,yn.jsxs)("div",{children:[(0,yn.jsx)(Bn,{src:r,alt:t,width:"240",height:"240"}),(0,yn.jsx)(Nn,{type:"button",onClick:h,children:(0,yn.jsx)(In,{children:(0,yn.jsx)("use",{href:pn.Z+"#trash"})})})]}),(0,yn.jsxs)(Fn,{children:[(0,yn.jsxs)(Ln,{children:["Name: ",(0,yn.jsx)(En,{children:t})]}),(0,yn.jsxs)(Ln,{children:["Date of birth: ",(0,yn.jsx)(En,{children:o})]}),(0,yn.jsxs)(Rn,{children:["Breed: ",(0,yn.jsx)(En,{children:a})]}),(0,yn.jsxs)(_n,{children:["Comments: \xa0",(0,yn.jsx)(Un,{children:s})]})]})]})},Tn=hn.ZP.ul(S||(S=(0,cn.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nflex-direction: column;\ngap: 20px;\n"]))),Vn=function(){var n=(0,sn.v9)(Cn.By),e=(0,sn.I0)();return(0,an.useEffect)((function(){e((0,zn.nx)())}),[e]),(0,yn.jsx)(Tn,{children:n.map((function(n){return(0,yn.jsx)("li",{children:(0,yn.jsx)(Mn,{item:n})},n._id)}))})},$n=hn.ZP.div(B||(B=(0,cn.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 280px;\n  margin: auto;\n  margin-bottom: 24px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 20px;\n    width: 703px;\n    margin-bottom: 20px;\n  }\n  @media screen and (min-width: 1280px) {\n    margin-bottom: 20px;\n    width: 821px;\n  }\n"]))),Gn=hn.ZP.h2(F||(F=(0,cn.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.36;\n\n  @media screen and (min-width: 768px) {\n    font-size: 28px;\n  }\n"]))),Qn=i(1648),Xn=function(){var n=(0,an.useState)(!0),e=(0,nn.Z)(n,2),i=e[0],t=e[1];return(0,yn.jsx)(yn.Fragment,{children:i&&(0,yn.jsxs)("div",{children:[(0,yn.jsxs)($n,{children:[(0,yn.jsx)(Gn,{children:"My Pets:"}),(0,yn.jsx)(Qn.Z,{onClick:function(){t(!1)},children:(0,yn.jsx)(Pn.rU,{to:"/add-pet",children:"add"})})]}),(0,yn.jsx)(Vn,{})]})})},Kn=i(944),Wn=function(){var n=(0,an.useState)(!1),e=(0,nn.Z)(n,2),i=e[0],t=e[1],r=function(){t((function(n){return!n}))};return(0,yn.jsx)(yn.Fragment,{children:!i&&(0,yn.jsx)(xn.h,{onClose:r,children:(0,yn.jsxs)(Kn.hz,{children:[(0,yn.jsx)(Kn.SB,{children:"Congrats!"}),(0,yn.jsx)(Kn.i8,{children:"You`re registration is success"}),(0,yn.jsxs)(Kn.zx,{type:"button","aria-label":"go to profile",onClick:r,children:["Go to profile",(0,yn.jsx)(Kn.md,{children:(0,yn.jsx)("use",{href:pn.Z+"#pawprint"})})]})]})})})},ne=hn.ZP.div(L||(L=(0,cn.Z)(["\n  padding: 20px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: 0 auto;\n\n  @media screen and (min-width: 767px) {\n    padding: 32px;\n    width: 768px;\n  }\n  @media screen and (min-width: 991px) {\n    flex-direction: row;\n    padding: 30px, 16px, 30px, 16px;\n    width: 1280px;\n  }\n"]))),ee=hn.ZP.div(R||(R=(0,cn.Z)(["\n  margin: 0 auto;\n\n  @media screen and (min-width: 767px) {\n    margin: 0;\n  }\n"]))),ie=hn.ZP.h2(_||(_=(0,cn.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 27px;\n  margin-bottom: 18px;\n  @media screen and (min-width: 767px) {\n    margin-bottom: 24px;\n    font-weight: 500;\n    font-size: 28px;\n    line-height: 38px;\n  }\n"]))),te=(0,hn.ZP)(rn.l0)(E||(E=(0,cn.Z)(["\n  position: relative;\n  width: 280px;\n  height: 517px;\n  padding: 20px 8px 25px;\n\n  background-color: var(--cl-almost-white);\n\n  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);\n  border-radius: 20px;\n  /* margin: 0 auto; */\n  /* margin: 0 auto; */\n  margin-bottom: 40px;\n\n  @media screen and (min-width: 767px) {\n    width: 704px;\n    height: 268px;\n    padding: 20px 20px;\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    gap: 71px;\n  }\n\n  @media screen and (min-width: 991px) {\n    width: 395px;\n    height: 520px;\n    padding: 20px 24px 16px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 25px;\n    margin-right: 32px;\n  }\n"]))),re=hn.ZP.div(U||(U=(0,cn.Z)(["\ndisplay: flex;\n\nalign-items: center;\njustify-content: center;\n\nwidth: 182px;\n  height: 182px;\n  margin-bottom: 14px;\n\n  border-radius: 40px;\n"]))),oe=hn.ZP.img(N||(N=(0,cn.Z)(["\nheight: 100%;\n  border-radius: 40px;\n"]))),ae=hn.ZP.svg(I||(I=(0,cn.Z)(["\n  margin-right: 8px;\n  width: 24px;\n  height: 24px;\n  stroke: var(--cl-blue-link);\n  fill: transparent;\n"]))),se=(0,hn.ZP)(rn.gN)(O||(O=(0,cn.Z)(["\n  width: 96px;\n  visibility: hidden;\n"]))),le=hn.ZP.div(A||(A=(0,cn.Z)(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 96px;\n  height: 28px;\n  border: none;\n  background-color: transparent;\n"]))),de=hn.ZP.p(Y||(Y=(0,cn.Z)(["\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 22px;\n"]))),pe=hn.ZP.button(q||(q=(0,cn.Z)(["\n  position: absolute;\n  right: 15px;\n  border: none;\n  background-color: transparent;\n\n  @media screen and (min-width: 767px) {\n    position: absolute;\n    right: 0px;\n    left: 0px;\n  }\n  @media screen and (min-width: 991px) {\n    position: absolute;\n\n    left: 315px;\n  }\n"]))),xe=(0,hn.ZP)(rn.gN)(D||(D=(0,cn.Z)(["\n  padding: 6px 12px;\n  width: 190px;\n  height: 28px;\n\n  background-color: var(--cl-almost-white);\n  border: 1px solid #54adff;\n  border-radius: 20px;\n  cursor: pointer;\n\n  font-weight: 400;\n  font-size: 12px;\n  &: focus {\n    outline: none;\n  }\n\n  @media screen and (min-width: 767px) {\n    padding: 6px 12px;\n    width: 255px;\n    height: 32px;\n    cursor: pointer;\n    &: focus {\n      outline: none;\n    }\n    }\n\n  }\n"]))),ce=hn.ZP.label(H||(H=(0,cn.Z)(["\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 19px;\n\n  @media screen and (min-width: 991px) {\n    font-size: 18px;\n    line-height: 25px;\n  }\n"]))),he=hn.ZP.div(J||(J=(0,cn.Z)(["\n  display: flex;\n\n  align-items: center;\n  justify-content: space-between;\n  margin: 12px auto;\n\n  @media screen and (min-width: 767px) {\n    margin: 8px auto;\n    width: 355px;\n    height: 32px;\n  }\n  \n  }\n"]))),ue=(0,hn.ZP)(rn.Bc)(M||(M=(0,cn.Z)(["\n  position: absolute;\n  right: 30px;\n\n  bottom: 227px;\n  font-weight: 400;\n  font-size: 9px;\n  line-height: 14px;\n  color: #da1414;\n\n  @media screen and (min-width: 767px) {\n    position: absolute;\n    right: 50px;\n    bottom: 215px;\n    font-size: 10px;\n  }\n\n  @media screen and (min-width: 991px) {\n    position: absolute;\n    right: 50px;\n    bottom: 215px;\n    font-size: 10px;\n  }\n"]))),me=(0,hn.ZP)(rn.Bc)(T||(T=(0,cn.Z)(["\n  position: absolute;\n  right: 30px;\n  bottom: 187px;\n  font-weight: 400;\n  font-size: 9px;\n  line-height: 14px;\n  color: #da1414;\n\n  @media screen and (min-width: 767px) {\n    position: absolute;\n    right: 50px;\n    bottom: 215px;\n    font-size: 10px;\n  }\n\n  @media screen and (min-width: 991px) {\n    position: absolute;\n    right: 50px;\n    bottom: 175px;\n    font-size: 10px;\n  }\n"]))),ge=(0,hn.ZP)(rn.Bc)(V||(V=(0,cn.Z)(["\n  position: absolute;\n  right: 25px;\n  bottom: 108px;\n  font-weight: 400;\n  font-size: 9px;\n  line-height: 14px;\n  color: #da1414;\n\n  @media screen and (min-width: 767px) {\n    position: absolute;\n    right: 50px;\n    bottom: 215px;\n\n  }\n\n  @media screen and (min-width: 991px) {\n    position: absolute;\n    right: 40px;\n    bottom: 93px;\n\n  }\n"]))),fe=(0,hn.ZP)(rn.Bc)($||($=(0,cn.Z)(["\n  position: absolute;\n  right: 25px;\n  bottom: 65px;\n  font-weight: 400;\n  font-size: 9px;\n  line-height: 14px;\n  color: #da1414;\n\n  @media screen and (min-width: 767px) {\n    position: absolute;\n    right: 50px;\n    bottom: 215px;\n  }\n\n  @media screen and (min-width: 991px) {\n    position: absolute;\n    right: 40px;\n    bottom: 44px;\n\n  }\n"]))),be=hn.ZP.svg(G||(G=(0,cn.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: var(--cl-green);\n  fill: transparent;\n"]))),je=hn.ZP.svg(Q||(Q=(0,cn.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: var(--cl-blue-link);\n  fill: var(--cl-blue-link);\n"]))),we=hn.ZP.div(X||(X=(0,cn.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"]))),Ze=hn.ZP.svg(K||(K=(0,cn.Z)(["\n  width: 182px;\n  height: 182px;\n  fill: transparent;\n"]))),ve=on.Ry().shape({name:on.Z_().min(3).max(16,"length must be less then 15").required(),email:on.Z_().matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,"please enter a valid email").email("invalid e-mail").required(),birthday:on.hT("please enter a valid date 00.00.0000").nullable(),phone:on.Z_().matches(/^\+380\d{9}$/,"enter phone number in format +380").nullable(),city:on.Z_().min(3).max(16,"length must be less then 16").nullable()}),ye=function(){return(0,yn.jsxs)(le,{children:[(0,yn.jsx)(ae,{children:(0,yn.jsx)("use",{href:pn.Z+"#camera"})}),(0,yn.jsx)(de,{children:"Edit photo"})]})},ke=function(){return(0,yn.jsxs)(le,{children:[(0,yn.jsx)(ae,{children:(0,yn.jsx)("use",{href:pn.Z+"#check"})}),(0,yn.jsx)(de,{children:"Confirm"})]})},Pe=function(){var n=(0,sn.v9)(ln.XR),e=(0,an.useState)(n),i=(0,nn.Z)(e,2),t=i[0],r=i[1],o=(0,sn.I0)(),a=(0,an.useState)(ye),s=(0,nn.Z)(a,2),l=s[0],d=s[1],p=(0,sn.v9)(ln.dy);console.log(p);var x=p.avatarURL,c=p.name,h=p.email,u=p.phone,m=p.birthday,g=p.city,f=(0,an.useState)(x),b=(0,nn.Z)(f,2),j=b[0],w=b[1],Z=(0,an.useState)(x),v=(0,nn.Z)(Z,2),y=v[0],k=v[1],P=(0,an.useState)(!1),C=(0,nn.Z)(P,2),z=C[0],S=C[1],B=(0,an.useState)(!1),F=(0,nn.Z)(B,2),L=F[0],R=F[1],_=(0,an.useState)(!1),E=(0,nn.Z)(_,2),U=E[0],N=E[1],I=(0,an.useState)(!1),O=(0,nn.Z)(I,2),A=O[0],Y=O[1],q=(0,an.useState)(!1),D=(0,nn.Z)(q,2),H=D[0],J=D[1],M=function(n){var e=n.target.files[0],i=URL.createObjectURL(e);k(i),w(e)},T=new FormData,V=function(){var n=(0,W.Z)(tn().mark((function n(e){return tn().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j&&T.append("avatarURL",j),e.name&&T.append("name",e.name),e.email&&T.append("email",e.email),e.phone&&T.append("phone",e.phone),e.city&&T.append("city",e.city),e.birthday&&T.append("birthday",e.birthday),n.next=8,o((0,dn.Nq)(T));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,yn.jsxs)(ne,{children:[t&&(0,yn.jsx)("div",{onClick:function(){r(!1)},children:(0,yn.jsx)(Wn,{})}),(0,yn.jsxs)(ee,{children:[(0,yn.jsx)(ie,{children:"My information:"}),(0,yn.jsx)(rn.J9,{enableReinitialize:!0,initialValues:{avatarURL:x,name:c,email:h,phone:u,birthday:m,city:g},validationSchema:ve,onSubmit:V,children:function(n){var e=n.values,i=n.errors,t=(n.touched,n.handleSubmit),r=n.handleChange,o=n.handleBlur;return(0,yn.jsxs)(te,{autoComplete:"off",children:[(0,yn.jsxs)(we,{htmlFor:"avatar",children:[(0,yn.jsx)(re,{children:y?(0,yn.jsx)(oe,{src:y,alt:"Photo user"}):(0,yn.jsx)(Ze,{children:(0,yn.jsx)("use",{href:pn.Z+"#photodefault"})})}),(0,yn.jsxs)("label",{onClick:function(){return d(ke)},onSubmit:t,children:[l,(0,yn.jsx)(se,{id:"avatar",type:"file",name:"avatar",onBlur:o,onChange:M,accept:"image/*,.png,.jpg,.gif,.web"})]})]}),(0,yn.jsxs)("div",{children:[(0,yn.jsxs)(he,{htmlFor:"name",children:[(0,yn.jsx)(ce,{children:"Name: "}),z?(0,yn.jsx)(xe,{type:"text",name:"name",id:"name",value:e.name,onChange:r,onBlur:o,errors:i.name}):(0,yn.jsx)(xe,{type:"text",name:"name",id:"name",value:e.name,errors:i.name,onBlur:o}),z?(0,yn.jsx)(pe,{type:"submit",onClick:function(){return S(!1)},onSubmit:t,children:(0,yn.jsx)(be,{children:(0,yn.jsx)("use",{href:pn.Z+"#check"})})}):(0,yn.jsx)(pe,{type:"button",onClick:function(){return S(!0)},children:(0,yn.jsx)(je,{children:(0,yn.jsx)("use",{href:pn.Z+"#edit"})})}),(0,yn.jsx)(ue,{name:"name",component:"div"})]}),(0,yn.jsxs)(he,{htmlFor:"email",children:[(0,yn.jsx)(ce,{children:"Email: "}),L?(0,yn.jsx)(xe,{type:"email",name:"email",id:"email",value:e.email,errors:i.email,onChange:r,onBlur:o}):(0,yn.jsx)(xe,{type:"email",name:"email",id:"email",value:e.email,errors:i.email,onBlur:o}),L?(0,yn.jsx)(pe,{type:"submit",onClick:function(){return R(!1)},onSubmit:t,children:(0,yn.jsx)(be,{children:(0,yn.jsx)("use",{href:pn.Z+"#check"})})}):(0,yn.jsx)(pe,{type:"button",onClick:function(){return R(!0)},children:(0,yn.jsx)(je,{children:(0,yn.jsx)("use",{href:pn.Z+"#edit"})})}),(0,yn.jsx)(me,{name:"email",component:"div"})]}),(0,yn.jsxs)(he,{htmlFor:"birthday",children:[(0,yn.jsx)(ce,{children:"Birthday: "}),U?(0,yn.jsx)(xe,{type:"date",name:"birthday",id:"birthday",value:e.birthday,errors:i.birthday,onChange:r,onBlur:o}):(0,yn.jsx)(xe,{type:"date",name:"birthday",id:"birthday",value:e.birthday,errors:i.birthday,onBlur:o}),U?(0,yn.jsx)(pe,{type:"submit",onClick:function(){return N(!1)},onSubmit:t,children:(0,yn.jsx)(be,{children:(0,yn.jsx)("use",{href:pn.Z+"#check"})})}):(0,yn.jsx)(pe,{type:"button",onClick:function(){return N(!0)},children:(0,yn.jsx)(je,{children:(0,yn.jsx)("use",{href:pn.Z+"#edit"})})})]}),(0,yn.jsxs)(he,{htmlFor:"phone",children:[(0,yn.jsx)(ce,{children:"Phone: "}),A?(0,yn.jsx)(xe,{type:"tel",name:"phone",id:"phone",value:e.phone,errors:i.phone,onChange:r,onBlur:o}):(0,yn.jsx)(xe,{type:"tel",name:"phone",id:"phone",value:e.phone,errors:i.phone,placeholder:"+380000000000",onBlur:o}),A?(0,yn.jsx)(pe,{type:"submit",onClick:function(){return Y(!1)},onSubmit:t,children:(0,yn.jsx)(be,{children:(0,yn.jsx)("use",{href:pn.Z+"#check"})})}):(0,yn.jsx)(pe,{type:"button",onClick:function(){return Y(!0)},children:(0,yn.jsx)(je,{children:(0,yn.jsx)("use",{href:pn.Z+"#edit"})})}),(0,yn.jsx)(ge,{name:"phone",component:"div"})]}),(0,yn.jsxs)(he,{htmlFor:"city",children:[(0,yn.jsx)(ce,{children:"City: "}),H?(0,yn.jsx)(xe,{type:"text",name:"city",id:"city",value:e.city,errors:i.city,onChange:r,onBlur:o}):(0,yn.jsx)(xe,{type:"text",name:"city",id:"city",value:e.city,errors:i.city,onBlur:o,placeholder:"Lviv"}),H?(0,yn.jsx)(pe,{type:"submit",onClick:function(){return J(!1)},onSubmit:t,children:(0,yn.jsx)(be,{children:(0,yn.jsx)("use",{href:pn.Z+"#check"})})}):(0,yn.jsx)(pe,{type:"button",onClick:function(){return J(!0)},children:(0,yn.jsx)(je,{children:(0,yn.jsx)("use",{href:pn.Z+"#edit"})})}),(0,yn.jsx)(fe,{name:"city",component:"div"})]}),(0,yn.jsx)(kn,{})]})]})}})]}),(0,yn.jsx)(Xn,{})]})},Ce=function(){return(0,yn.jsx)(yn.Fragment,{children:(0,yn.jsx)(Pe,{})})}}}]);
//# sourceMappingURL=370.6178f816.chunk.js.map