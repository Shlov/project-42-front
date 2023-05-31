"use strict";(self.webpackChunkproject_42_front=self.webpackChunkproject_42_front||[]).push([[115],{1997:function(e,n,t){t.d(n,{BD:function(){return s},KG:function(){return a},bn:function(){return o},ot:function(){return c},r7:function(){return i},uT:function(){return r}});var i=function(e){return e.notices.items},r=function(e){return e.notices.item},a=function(e){return e.notices.isLoadNotices},o=function(e){return e.notices.isLoadNotice},s=function(e){return e.notices.isResponseSuccessful},c=function(e){return e.notices.pagination}},8087:function(e,n,t){t.d(n,{By:function(){return i},JS:function(){return r},Vc:function(){return a}});var i=function(e){return e.pets.pets},r=function(e){return e.pets.isResponseSuccessful},a=function(e){return e.pets.isLoading}},7115:function(e,n,t){t.r(n),t.d(n,{default:function(){return Ue}});var i,r,a,o,s,c,l,d,p,u,h,m,x,g,f,v,b,y,j,Z,w,k,C,P,q,z,T,N,F,B,S,D,A,L,_,R=t(3433),O=t(9439),$=t(2791),I=t(9434),M=t(7689),U=t(5705),V=t(3756),Y=t(1271),J=t(1997),K=t(8087),G=t(6727),H=(0,G.Ry)().shape({category:(0,G.Z_)().oneOf(["your-pet","sell","lost/found","in good hands"]),name:(0,G.Z_)().required("Name is required").min(2,"Name must be at least 2 characters").max(16,"Name must be at most 16 characters").matches(/^([a-zA-Z\u0430-\u044f\u0410-\u042f\u0451\u0401\u0451\u0401\u0407\u0457\u0406\u0456\u0490\u0491\u0404\u0454\s]+)$/,"Name must contain only letters"),date:(0,G.Z_)().required("Date is required").matches(/^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/,"Date must be in the format DD.MM.YYYY").test("birthday","Invalid birthday",(function(e){var n=new Date(e.replace(/(\d+).(\d+).(\d+)/,"$3/$2/$1")),t=Date.parse(n),i=Date.now()-t;return!(i<0||i>946728e7||isNaN(t))})),breed:(0,G.Z_)().min(2,"Breed must be at least 2 characters").max(16,"Breed must be at most 16 characters").required("Breed is required"),avatar:(0,G.nK)().required("File is required").test("fileSize","File size must not exceed 3MB",(function(e){return e.size<=3145728})),sex:(0,G.Z_)().when("category",{is:function(e){return["sell","lost/found","in good hands"].includes(e)},then:(0,G.Z_)().required("Sex is required").oneOf(["male","female"],'Please select either "male" or "female"')}),location:(0,G.Z_)().matches(/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/,"Invalid location format. Please use city names only.").min(2,"City name must be at least 2 characters").required("Location is required"),price:(0,G.Rx)().min(0,"Price must be a positive number").integer("Price must be an integer").required("Price is required"),comments:(0,G.Z_)().min(8,"Comments must be at least 8 characters").max(120,"Comments must be at most 120 characters").required("Comments are required"),title:(0,G.Z_)().min(3,"Title must be at least 3 characters").max(30,"Title must be at most 30 characters").required("Title is required")}),E=t(168),Q=t(6444),W=t(1087),X=(0,Q.iv)(i||(i=(0,E.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  color: var(--cl-blue-link);\n  background-color: transparent;\n  border: none;\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: calc(22 / 16);\n  height: 22px;\n"]))),ee=(0,Q.ZP)(W.rU)(r||(r=(0,E.Z)(["\n  ","\n  padding: 20px 0px;\n"])),X),ne=Q.ZP.button(a||(a=(0,E.Z)(["\n  ","\n"])),X),te=t(3439),ie=t(184),re=function(e){var n=e.isLink,t=e.buttonText,i=e.to,r=e.handleClick,a=e.type;return n?(0,ie.jsxs)(ee,{to:i,onClick:r,children:[(0,ie.jsx)("svg",{width:24,height:24,children:(0,ie.jsx)("use",{href:te.Z+"#arrow-left"})}),t]}):(0,ie.jsxs)(ne,{onClick:r,type:a,children:[(0,ie.jsx)("svg",{width:24,height:24,children:(0,ie.jsx)("use",{href:te.Z+"#arrow-left"})}),t]})},ae=Q.ZP.div(o||(o=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 12px;\n  margin-bottom: 91px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 137px;\n  }\n"]))),oe=(0,Q.ZP)(U.gN)(s||(s=(0,E.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n"]))),se=Q.ZP.label(c||(c=(0,E.Z)(["\n  width: fit-content;\n  position: relative;\n  padding: 8px 16px;\n  cursor: pointer;\n  border-radius: 40px;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: calc(19 / 14);\n  letter-spacing: 0.04em;\n  color: var(--cl-blue-link);\n  background-color: var(--cl-blue-light);\n\n  transition: background-color var(--animat), color var(--animat);\n\n  &:hover,\n  &:focus,\n  ",":checked + & {\n    background-color: var(--cl-blue-link);\n    color: var(--cl-background);\n  }\n"])),oe),ce=Q.ZP.div(l||(l=(0,E.Z)(["\n  color: var(--cl-red);\n  margin-top: 4px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: calc(16 / 12);\n"]))),le=Q.ZP.button(d||(d=(0,E.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  background-color: var(--cl-blue-link);\n  min-width: 248px;\n  padding: 9px 0;\n  border: none;\n\n  font-weight: 700;\n  font-size: 16px;\n  line-height: calc(22 / 16);\n  letter-spacing: 0.04em;\n  color: var(--cl-background);\n  border-radius: 40px;\n\n  cursor: pointer;\n"]))),de=Q.ZP.svg(p||(p=(0,E.Z)(["\n  fill: var(--cl-background);\n"]))),pe=Q.ZP.div(u||(u=(0,E.Z)(["\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    gap: 24px;\n  }\n"]))),ue=function(e){var n,t,i=e.onNext,r=e.onSelectCategory,a=e.selectedCategory,o=(0,M.TH)(),s=(0,$.useRef)(null!==(n=null===(t=o.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/"),c=(0,$.useState)(!1),l=(0,O.Z)(c,2),d=l[0],p=l[1],u=function(e){var n=e.target.value;r(n)};return(0,ie.jsxs)(ie.Fragment,{children:[(0,ie.jsxs)(ae,{children:[(0,ie.jsx)(oe,{type:"radio",name:"category",value:"your-pet",id:"your-pet",checked:"your-pet"===a,onChange:u}),(0,ie.jsx)(se,{htmlFor:"your-pet",children:"your pet"}),(0,ie.jsx)(oe,{type:"radio",name:"category",value:"sell",id:"sell",checked:"sell"===a,onChange:u}),(0,ie.jsx)(se,{htmlFor:"sell",children:"sell"}),(0,ie.jsx)(oe,{type:"radio",name:"category",value:"lost/found",id:"lost/found",checked:"lost/found"===a,onChange:u}),(0,ie.jsx)(se,{htmlFor:"lost/found",children:"lost/found"}),(0,ie.jsx)(oe,{type:"radio",name:"category",value:"in good hands",id:"in good hands",checked:"in good hands"===a,onChange:u}),(0,ie.jsx)(se,{htmlFor:"in good hands",children:"in good hands"}),!a&&d&&(0,ie.jsx)(ce,{children:"Please choose a category"})]}),(0,ie.jsxs)(pe,{children:[(0,ie.jsx)(re,{to:s.current,buttonText:"Cancel",isLink:!0}),(0,ie.jsxs)(le,{type:"button",onClick:function(){p(!0),a&&i()},children:["Next",(0,ie.jsx)(de,{width:24,height:24,children:(0,ie.jsx)("use",{href:te.Z+"#pawprint"})})]})]})]})},he=function(e){var n=e.buttonText,t=e.type,i=e.onClick,r=e.disabled;return(0,ie.jsxs)(le,{type:t,onClick:i,disabled:r,children:[n,(0,ie.jsx)(de,{width:24,height:24,children:(0,ie.jsx)("use",{href:te.Z+"#pawprint"})})]})},me=Q.ZP.label(h||(h=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n\n  font-weight: 500;\n  font-size: 14px;\n  line-height: calc(19 / 14);\n  color: var(--cl-black);\n\n  @media screen and (min-width: 768px) {\n    gap: 8px;\n    font-size: 20px;\n    line-height: calc(26 / 20);\n  }\n"]))),xe=(0,Q.iv)(m||(m=(0,E.Z)(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: 0.04em;\n  border-radius: 40px;\n  padding: 10px 16px;\n  color: var(--cl-gray);\n\n  border: 1px solid\n    ",";\n  outline: var(--cl-blue-link);\n  outline: var(--cl-blue-link);\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"])),(function(e){return e.errors?"var(--cl-red)":"var(--cl-blue-link)"})),ge=(0,Q.iv)(x||(x=(0,E.Z)(["\n  color: var(--cl-red);\n  margin-top: 4px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: calc(16 / 12);\n"]))),fe=Q.ZP.div(g||(g=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 44px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 40px;\n  }\n"]))),ve=Q.ZP.div(f||(f=(0,E.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n\n  @media screen and (min-width: 768px) {\n    &:not(:last-child) {\n      margin-bottom: 24px;\n    }\n  }\n"]))),be=(0,Q.ZP)(U.gN)(v||(v=(0,E.Z)(["\n  ","\n"])),xe),ye=(0,Q.ZP)(U.Bc)(b||(b=(0,E.Z)(["\n  ","\n"])),ge),je=function(e){var n=e.onBack,t=e.onNext,i=e.selectedCategory,r=(0,U.u6)(),a=r.values,o=r.setTouched,s=r.touched,c=r.errors,l=(0,$.useCallback)((function(){var e={};return"your-pet"!==i&&(a.title||(e.title="Title is required")),a.name||(e.name="Name is required"),a.date||(e.date="Date of birth is required"),a.breed?a.breed.length<2?e.breed="Breed must be at least 2 characters":a.breed.length>16&&(e.breed="Breed must be at most 16 characters"):e.breed="Breed is required",e}),[i,a]);return(0,ie.jsxs)(ie.Fragment,{children:[(0,ie.jsxs)(fe,{children:["your-pet"!==i&&(0,ie.jsxs)(ve,{children:[(0,ie.jsxs)(me,{children:["Title of add",(0,ie.jsx)(be,{type:"text",name:"title",placeholder:"Type title",errors:s.title&&c.title})]}),(0,ie.jsx)(ye,{name:"title",component:"div"})]}),(0,ie.jsxs)(ve,{children:[(0,ie.jsxs)(me,{children:["Pet\u2019s name",(0,ie.jsx)(be,{type:"text",name:"name",placeholder:"Type name pet",errors:s.name&&c.name})]}),(0,ie.jsx)(ye,{name:"name",component:"div"})]}),(0,ie.jsxs)(ve,{children:[(0,ie.jsxs)(me,{children:["Date of birth",(0,ie.jsx)(be,{type:"text",name:"date",placeholder:"Type date of birth",errors:s.date&&c.date})]}),(0,ie.jsx)(ye,{name:"date",component:"div"})]}),(0,ie.jsxs)(ve,{children:[(0,ie.jsxs)(me,{children:["Breed",(0,ie.jsx)(be,{type:"text",name:"breed",placeholder:"Type breed",errors:s.breed&&c.breed})]}),(0,ie.jsx)(ye,{name:"breed",component:"div"})]})]}),(0,ie.jsxs)(pe,{children:[(0,ie.jsx)(re,{type:"button",buttonText:"Back",handleClick:n,isLink:!1}),(0,ie.jsx)(he,{type:"button",onClick:function(){o({title:!0,name:!0,date:!0,breed:!0});var e=l();0===Object.keys(e).length&&t()},buttonText:"Next"})]})]})},Ze=t(5243),we=Q.ZP.div(y||(y=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-bottom: 24px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 60px;\n    ",";\n  }\n"])),(function(e){return"your-pet"!==e.selectedCategory?"flex-direction: row; column-gap: 45px":""})),ke=Q.ZP.div(j||(j=(0,E.Z)(["\n  display: flex;\n  gap: 16px;\n\n  ","\n\n  @media screen and (min-width: 768px) {\n    ",";\n  }\n"])),(function(e){return"your-pet"!==e.selectedCategory?"flex-direction: column;":""}),(function(e){return"your-pet"!==e.selectedCategory?"row-gap: 45px;":""})),Ce=Q.ZP.div(Z||(Z=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  @media screen and (min-width: 768px) {\n    gap: 24px;\n  }\n"]))),Pe=Q.ZP.p(w||(w=(0,E.Z)(["\n  font-weight: 500;\n  font-size: 14px;\n  line-height: calc(19 / 14);\n  margin-bottom: 8px;\n  color: var(--cl-black);\n\n  @media screen and (min-width: 768px) {\n    font-size: 20px;\n    line-height: calc(26 / 20);\n  }\n"]))),qe=Q.ZP.div(k||(k=(0,E.Z)(["\n  display: flex;\n  gap: 16px;\n  align-items: center;\n"]))),ze=(0,Q.ZP)(U.gN)(C||(C=(0,E.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n"]))),Te=Q.ZP.label(P||(P=(0,E.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 12px;\n\n  cursor: pointer;\n\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.5;\n  letter-spacing: 0.04em;\n  color: var(--cl-gray);\n\n  transition: color var(--animat);\n\n  &:hover,\n  &:focus,\n  ",":checked + & {\n    color: var(--cl-green);\n  }\n\n  & svg {\n    stroke: ",";\n  }\n"])),ze,(function(e){switch(e.htmlFor){case"female":return"var(--cl-red)";case"male":return"var(--cl-blue-link)";default:return"inherit"}})),Ne=Q.ZP.label(q||(q=(0,E.Z)(["\n  font-weight: 500;\n  font-size: 14px;\n  line-height: calc(19 / 14);\n  color: var(--cl-black);\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 16px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 20px;\n    line-height: calc(26 / 20);\n\n    ","\n  }\n"])),(function(e){return"your-pet"!==e.selectedCategory?"flex-direction: column; gap: 8px":""})),Fe=Q.ZP.div(z||(z=(0,E.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  overflow: hidden;\n  object-position: center;\n  object-fit: cover;\n\n  & img {\n    width: 112px;\n    height: 112px;\n    border-radius: 20px;\n\n    @media screen and (min-width: 768px) {\n      width: 182px;\n      height: 182px;\n    }\n  }\n"]))),Be=Q.ZP.input(T||(T=(0,E.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n"]))),Se=(0,Q.ZP)(U.gN)(N||(N=(0,E.Z)(["\n  ","\n"])),xe),De=(0,Q.ZP)(U.gN)(F||(F=(0,E.Z)(["\n  ","\n  resize: none;\n  height: 92px;\n\n  border-radius: 20px;\n\n  @media screen and (min-width: 768px) {\n    height: 79px;\n    width: 395px;\n\n    ","\n  }\n"])),xe,(function(e){var n=e.category;return"in good hands"===n||"lost/found"===n?"height: 182px":""})),Ae=(0,Q.ZP)(U.Bc)(B||(B=(0,E.Z)(["\n  ","\n"])),ge),Le=Q.ZP.div(S||(S=(0,E.Z)(["\n  ","\n"])),ge),_e=function(e){var n=e.onBack,t=e.selectedCategory,i=e.handleSubmit,r=(0,U.u6)(),a=r.values,o=r.setTouched,s=r.touched,c=r.errors,l=r.setFieldValue,d=(0,$.useState)(!1),p=(0,O.Z)(d,2),u=p[0],h=p[1],m=(0,I.v9)(J.KG),x=(0,I.v9)(K.Vc),g=(0,$.useCallback)((function(){var e={};return"your-pet"!==t&&(a.sex||(e.sex="Please select a sex"),a.location||(e.location="Location is required")),"sell"===t&&(a.price||(e.price="Price is required")),a.avatar||(e.avatar="Avatar is required"),a.comments?a.comments.length<8?e.comments="Comments must be at least 8 characters":a.comments.length>120&&(e.comments="Comments must be at most 120 characters"):e.comments="Comments are required",e}),[t,a]),f=g();return(0,ie.jsxs)(ie.Fragment,{children:[(0,ie.jsxs)(we,{selectedCategory:t,children:[(0,ie.jsxs)(ke,{selectedCategory:t,children:["your-pet"!==t&&(0,ie.jsxs)("div",{children:[(0,ie.jsx)(Pe,{children:"The sex"}),(0,ie.jsxs)(qe,{children:[(0,ie.jsx)(ze,{id:"female",type:"radio",name:"sex",value:"female",checked:"female"===a.sex}),(0,ie.jsxs)(Te,{htmlFor:"female",children:[(0,ie.jsx)("svg",{width:24,height:24,children:(0,ie.jsx)("use",{href:te.Z+"#female"})}),"Female"]}),(0,ie.jsx)(ze,{id:"male",type:"radio",name:"sex",value:"male",checked:"male"===a.sex}),(0,ie.jsxs)(Te,{htmlFor:"male",children:[(0,ie.jsx)("svg",{width:24,height:24,children:(0,ie.jsx)("use",{href:te.Z+"#male"})}),"Male"]})]}),f.sex&&u&&(0,ie.jsx)(Le,{children:f.sex})]}),(0,ie.jsxs)(Ne,{selectedCategory:t,children:["Load the pet\u2019s image:",(0,ie.jsxs)(Fe,{children:[a.avatar?(0,ie.jsx)("img",{src:URL.createObjectURL(a.avatar),alt:"Pet's avatar",width:"182",height:"182"}):(0,ie.jsx)("svg",{width:182,height:182,children:(0,ie.jsx)("use",{href:te.Z+"#defaultAvatar"})}),(0,ie.jsx)(Be,{accept:"'image/png', 'image/jpg', 'image/jpeg'",name:"avatar",type:"file",onChange:function(e){l("avatar",e.target.files[0])},errors:s.avatar&&c.avatar})]}),(0,ie.jsx)(Ae,{name:"avatar",component:"div"})]})]}),(0,ie.jsxs)(Ce,{children:["your-pet"!==t&&(0,ie.jsxs)("div",{children:[(0,ie.jsxs)(me,{children:["Location",(0,ie.jsx)(Se,{type:"text",name:"location",placeholder:"Type of location",errors:s.location&&c.location})]}),(0,ie.jsx)(Ae,{name:"location",component:"div"})]}),"sell"===t&&(0,ie.jsxs)("div",{children:[(0,ie.jsxs)(me,{children:["Price",(0,ie.jsx)(Se,{type:"number",min:"0",name:"price",placeholder:"Type of price",errors:s.price&&c.price})]}),(0,ie.jsx)(Ae,{name:"price",component:"div"})]}),(0,ie.jsxs)("div",{children:[(0,ie.jsxs)(me,{children:["Comments",(0,ie.jsx)(De,{name:"comments",placeholder:"Type comments",component:"textarea",category:t,errors:s.comments&&c.comments})]}),(0,ie.jsx)(Ae,{name:"comments",component:"div",className:"error-message"})]})]})]}),m||x?(0,ie.jsx)(Ze.gy,{height:"80",width:"80",color:"#54ADFF",ariaLabel:"tail-spin-loading",radius:"1",visible:!0,wrapperStyle:{display:"flex",justifyContent:"center",alignItems:"center"}}):(0,ie.jsxs)(pe,{children:[(0,ie.jsx)(re,{type:"button",buttonText:"Back",handleClick:n,isLink:!1}),(0,ie.jsx)(he,{type:"submit",onClick:function(){o({sex:!0,location:!0,price:!0,avatar:!0,comments:!0}),h(!0),0===Object.keys(f).length&&i(a)},buttonText:"Done"})]})]})},Re=Q.ZP.div(D||(D=(0,E.Z)(["\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 20px;\n  width: 280px;\n  min-height: 496px;\n  padding: 20px 8px 17px;\n  background-color: var(--cl-almost-white);\n  box-shadow: var(--shadow-default);\n  border-radius: 40px;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 60px;\n    width: fit-content;\n    min-height: 542px;\n    padding: 20px 32px;\n\n    ","\n  }\n"])),(function(e){var n=e.step;return 1===n||2===n?"width: 458px":""})),Oe=Q.ZP.h1(A||(A=(0,E.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n  line-height: calc(27 / 20);\n  padding-left: 20px;\n  margin-bottom: 24px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 28px;\n    line-height: calc(38 / 28);\n    padding-left: 32px;\n  }\n"]))),$e=Q.ZP.ul(L||(L=(0,E.Z)(["\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  font-size: 10px;\n  line-height: calc(14 / 10);\n  gap: 11px;\n  margin-bottom: 24px;\n  color: var(--cl-gray);\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    line-height: calc(26 / 16);\n    margin-bottom: 40px;\n  }\n"]))),Ie=Q.ZP.li(_||(_=(0,E.Z)(["\n  position: relative;\n  padding-bottom: 20px;\n  flex-basis: calc((100% - 22px) / 3);\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n\n    width: 100%;\n    height: 8px;\n\n    background-color: var(--cl-blue-light);\n    border-radius: 8px;\n  }\n\n  &.active {\n    color: var(--cl-blue-link); /* Style for the active step */\n  }\n\n  &.active::after {\n    background-color: var(--cl-blue-link);\n  }\n\n  &.completed {\n    color: var(--cl-green); /* Style for the completed step */\n  }\n\n  &.completed::after {\n    background-color: var(--cl-green);\n  }\n"]))),Me=function(){var e=(0,I.I0)(),n=(0,I.v9)(J.BD),t=(0,I.v9)(K.JS),i=(0,$.useState)(1),r=(0,O.Z)(i,2),a=r[0],o=r[1],s=(0,$.useState)(""),c=(0,O.Z)(s,2),l=c[0],d=c[1],p=(0,$.useState)([]),u=(0,O.Z)(p,2),h=u[0],m=u[1],x={category:l,name:"",date:"",breed:"",avatar:"",sex:"",location:"",price:"",comments:"",title:""},g={1:"Add pet",2:{"your-pet":"Add my pet",sell:"Add pet for sell","lost/found":"Add lost or found pet","in good hands":"Add pet for adoption"},3:{"your-pet":"Add my pet",sell:"Add pet for sell","lost/found":"Add lost or found pet","in good hands":"Add pet for adoption"}},f=function(e){d(e)},v="string"===typeof g[a]?g[a]:"",b=a>1&&g[a][l]||v,y=function(){m([].concat((0,R.Z)(h),[a])),o((function(e){return e+1}))},j=function(){o((function(e){return e-1}))},Z=function(n){var t=new FormData;t.append("name",n.name),t.append("birthday",n.date),t.append("breed",n.breed),t.append("imageURL",n.avatar),t.append("comments",n.comments),"your-pet"!==l?(t.append("categories","in good hands"===l?"in good hands":l),t.append("title",n.title),t.append("sex",n.sex),t.append("place",n.location),"sell"===x.category&&t.append("price",n.price),e((0,V.Fy)({formData:t}))):e((0,Y.Ns)({formData:t}))};if(n)return(0,ie.jsx)(M.Fg,{to:"/notices"});if(t)return(0,ie.jsx)(M.Fg,{to:"/user"});var w=function(e){switch(e){case 1:return(0,ie.jsx)(ue,{onNext:y,onSelectCategory:f,selectedCategory:l});case 2:return(0,ie.jsx)(je,{onBack:j,onNext:y,selectedCategory:l});case 3:return(0,ie.jsx)(_e,{onBack:j,selectedCategory:l,handleSubmit:Z});default:return null}};return(0,ie.jsxs)(Re,{step:a,children:[(0,ie.jsx)(Oe,{children:b}),(0,ie.jsx)($e,{children:["Choose Option","Personal Details","More Info"].map((function(e,n){return(0,ie.jsx)(Ie,{className:a===n+1?"active":h.includes(n+1)?"completed":"",children:e},n)}))}),(0,ie.jsx)(U.J9,{initialValues:x,validationSchema:H,children:function(){return(0,ie.jsx)(U.l0,{children:w(a)})}})]})},Ue=function(){return(0,ie.jsx)("div",{children:(0,ie.jsx)(Me,{})})}}}]);
//# sourceMappingURL=115.7085708a.chunk.js.map