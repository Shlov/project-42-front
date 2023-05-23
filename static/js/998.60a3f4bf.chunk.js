"use strict";(self.webpackChunkproject_42_front=self.webpackChunkproject_42_front||[]).push([[998],{9998:function(e,t,r){r.r(t),r.d(t,{default:function(){return q}});var a,n=r(7762),s=r(1413),o=r(9439),i=r(2791),c=r(5705),l=r(6727),d=r(7689),m=r(168),u=r(6444),p=r(1087),x=(0,u.ZP)(p.rU)(a||(a=(0,m.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n"]))),h=r(3439),f=r(184),g=function(e){var t=e.to,r=e.children;return(0,f.jsxs)(x,{to:t,children:[(0,f.jsx)("svg",{width:24,height:24,children:(0,f.jsx)("use",{href:h.Z+"#arrow-left"})}),r]})},j=function(e){var t,r,a=e.onNext,n=e.onSelectCategory,s=e.selectedCategory,l=(0,d.TH)(),m=(0,i.useRef)(null!==(t=null===(r=l.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/main"),u=(0,i.useState)(!0),p=(0,o.Z)(u,2),x=p[0],h=p[1];(0,i.useEffect)((function(){h(!s)}),[s]);var j=function(e){var t=e.target.value;n(t)};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{children:[(0,f.jsxs)("label",{children:[(0,f.jsx)(c.gN,{type:"radio",name:"category",value:"your-pet",checked:"your-pet"===s,onChange:j}),"your pet"]}),(0,f.jsxs)("label",{children:[(0,f.jsx)(c.gN,{type:"radio",name:"category",value:"sell",checked:"sell"===s,onChange:j}),"sell"]}),(0,f.jsxs)("label",{children:[(0,f.jsx)(c.gN,{type:"radio",name:"category",value:"lost-found",checked:"lost-found"===s,onChange:j}),"lost/found"]}),(0,f.jsxs)("label",{children:[(0,f.jsx)(c.gN,{type:"radio",name:"category",value:"for-free",checked:"for-free"===s,onChange:j}),"in good hands"]}),(0,f.jsx)(c.Bc,{name:"category",component:"div",className:"error-message"})]}),(0,f.jsx)(g,{to:m.current,children:"Cancel"}),(0,f.jsx)("button",{type:"button",onClick:a,disabled:x,children:"Next"})]})},b=function(e){var t=e.onBack,r=e.onNext,a=e.selectedCategory,n=e.setFormValues,l=(0,c.u6)(),d=l.values,m=l.setTouched,u=(0,i.useState)(!0),p=(0,o.Z)(u,2),x=p[0],h=p[1],g=(0,i.useCallback)((function(){var e={};return"your-pet"!==a&&(d.title||(e.title="Title is required")),d.name||(e.name="Name is required"),d.date||(e.date="Date of birth is required"),d.breed?d.breed.length<2?e.breed="Breed must be at least 2 characters":d.breed.length>16&&(e.breed="Breed must be at most 16 characters"):e.breed="Breed is required",e}),[a,d]);return(0,i.useEffect)((function(){var e=g();h(Object.keys(e).length>0)}),[d,a,g]),(0,f.jsxs)(f.Fragment,{children:["your-pet"!==a&&(0,f.jsxs)("div",{children:[(0,f.jsxs)("label",{children:["Title of add",(0,f.jsx)(c.gN,{type:"text",name:"title",placeholder:"Type title"})]}),(0,f.jsx)(c.Bc,{name:"title",component:"div",className:"error-message"})]}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("label",{children:["Pet\u2019s name",(0,f.jsx)(c.gN,{type:"text",name:"name",placeholder:"Type name pet"})]}),(0,f.jsx)(c.Bc,{name:"name",component:"div",className:"error-message"})]}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("label",{children:["Date of birth",(0,f.jsx)(c.gN,{type:"text",name:"date",placeholder:"Type date of birth"})]}),(0,f.jsx)(c.Bc,{name:"date",component:"div",className:"error-message"})]}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("label",{children:["Breed",(0,f.jsx)(c.gN,{type:"text",name:"breed",placeholder:"Type breed"})]}),(0,f.jsx)(c.Bc,{name:"breed",component:"div",className:"error-message"})]}),(0,f.jsx)("button",{type:"button",onClick:t,children:"Back"}),(0,f.jsx)("button",{type:"button",onClick:function(){m({title:!0,name:!0,date:!0,breed:!0});var e=g();0===Object.keys(e).length&&(n((function(e){return(0,s.Z)((0,s.Z)({},e),{},{title:d.title,name:d.name,date:d.date,breed:d.breed})})),r())},disabled:x,children:"Next"})]})},y=function(e){var t=e.form,r=e.field;return(0,f.jsx)("input",{name:r.name,type:"file",accept:"image/*",onChange:function(e){return t.setFieldValue(r.name,e.target.files[0])}})},v=function(e){var t=e.onBack,r=e.selectedCategory,a=e.setFormValues,n=(0,c.u6)(),l=n.values,d=n.setTouched,m=(0,i.useState)(!0),u=(0,o.Z)(m,2),p=u[0],x=u[1],h=(0,i.useCallback)((function(){var e={};return"your-pet"!==r&&(l.sex||(e.sex="Sex is required"),l.location||(e.location="Location is required")),"sell"===r&&(l.price||(e.price="Price is required")),l.avatar||(e.avatar="Avatar is required"),l.comments?l.comments.length<8?e.comments="Comments must be at least 8 characters":l.comments.length>120&&(e.comments="Comments must be at most 120 characters"):e.comments="Comments are required",e}),[r,l]);return(0,i.useEffect)((function(){var e=h();x(Object.keys(e).length>0)}),[l,r,h]),(0,f.jsxs)(f.Fragment,{children:[["sell","lost-found"].includes(r)&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{children:"The sex"}),(0,f.jsxs)("label",{children:["Female",(0,f.jsx)(c.gN,{type:"radio",name:"sex",value:"female"})]}),(0,f.jsxs)("label",{children:["Male",(0,f.jsx)(c.gN,{type:"radio",name:"sex",value:"male"})]}),(0,f.jsx)(c.Bc,{name:"sex",component:"div",className:"error-message"})]}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("label",{children:["Location",(0,f.jsx)(c.gN,{type:"text",name:"location",placeholder:"Type of location"})]}),(0,f.jsx)(c.Bc,{name:"location",component:"div",className:"error-message"})]})]}),"sell"===r&&(0,f.jsxs)("div",{children:[(0,f.jsxs)("label",{children:["Price",(0,f.jsx)(c.gN,{type:"number",min:"0",name:"price",placeholder:"Type of price"})]}),(0,f.jsx)(c.Bc,{name:"price",component:"div",className:"error-message"})]}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("label",{children:["Load the pet\u2019s image:",(0,f.jsx)(c.gN,{name:"avatar",component:y})]}),(0,f.jsx)(c.Bc,{name:"avatar",component:"div",className:"error-message"})]}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("label",{children:["Comments",(0,f.jsx)(c.gN,{name:"comments",rows:"5",placeholder:"Type breed",component:"textarea"})]}),(0,f.jsx)(c.Bc,{name:"comments",component:"div",className:"error-message"})]}),(0,f.jsx)("button",{type:"button",onClick:t,children:"Back"}),(0,f.jsx)("button",{type:"submit",onClick:function(){d({sex:!0,location:!0,price:!0,avatar:!0,comments:!0});var e=h();0===Object.keys(e).length&&a((function(e){return(0,s.Z)((0,s.Z)({},e),{},{sex:l.sex,location:l.location,price:l.price,avatar:l.avatar,comments:l.comments})}))},disabled:p,children:"Done"})]})},N=(0,l.Ry)().shape({category:(0,l.Z_)().oneOf(["your-pet","sell","lost-found","for-free"]),name:(0,l.Z_)().required("Name is required").min(2,"Name must be at least 2 characters").max(16,"Name must be at most 16 characters"),date:(0,l.Z_)().required("Date is required").matches(/^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/,"Date must be in the format DD.MM.YYYY"),breed:(0,l.Z_)().min(2,"Breed must be at least 2 characters").max(16,"Breed must be at most 16 characters").required("Breed is required"),avatar:(0,l.nK)().required("File is required").test("fileSize","File size must not exceed 3MB",(function(e){return e.size<=3145728})),sex:(0,l.Z_)().when("category",{is:function(e){return["sell","lost-found","for-free"].includes(e)},then:(0,l.Z_)().required("Sex is required").oneOf(["male","female"],'Please select either "male" or "female"')}),location:(0,l.Z_)().matches(/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/,"Invalid location format. Please use city names only.").min(2,"City name must be at least 2 characters").required("Location is required"),price:(0,l.Rx)().min(0,"Price must be a positive number").integer("Price must be an integer").required("Price is required"),comments:(0,l.Z_)().min(8,"Comments must be at least 8 characters").max(120,"Comments must be at most 120 characters").required("Comments are required"),title:(0,l.Z_)().min(2,"Title must be at least 2 characters").required("Title is required")}),C=function(){var e=(0,i.useState)(1),t=(0,o.Z)(e,2),r=t[0],a=t[1],l=(0,i.useState)(""),d=(0,o.Z)(l,2),m=d[0],u=d[1],p=(0,i.useState)({category:m,name:"",date:"",breed:"",avatar:"",sex:"",location:"",price:"",comments:"",title:""}),x=(0,o.Z)(p,2),h=x[0],g=x[1];console.log(h);var y={1:"Add pet",2:{"your-pet":"Add my pet",sell:"Add pet for sell","lost-found":"Add lost or found pet","for-free":"Add pet for adoption"},3:{"your-pet":"Add my pet",sell:"Add pet for sell","lost-found":"Add lost or found pet","for-free":"Add pet for adoption"}},C=function(e){u(e),g((function(t){return(0,s.Z)((0,s.Z)({},t),{},{category:e})}))},q="string"===typeof y[r]?y[r]:"",Z=r>1&&y[r][m]||q,k=function(){a((function(e){return e+1}))},B=function(){a((function(e){return e-1}))};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{children:Z}),(0,f.jsx)("ul",{children:["Choose Option","Personal Details","More Info"].map((function(e,t){return(0,f.jsx)("li",{children:e},t)}))}),(0,f.jsx)(c.J9,{initialValues:h,validationSchema:N,onSubmit:function(){var e=new FormData;if(e.append("category",h.category),e.append("name",h.name),e.append("date",h.date),e.append("breed",h.breed),e.append("avatar",h.avatar),e.append("comments",h.comments),"your-pet"!==h.category&&(e.append("title",h.title),e.append("sex",h.sex),e.append("location",h.location),"lost-found"!==h.category&&"for-free"!==h.category)){e.append("price",h.price);var t,r=(0,n.Z)(e.entries());try{for(r.s();!(t=r.n()).done;){var a=t.value;console.log(a[0]+": "+a[1])}}catch(s){r.e(s)}finally{r.f()}h.category}},children:(0,f.jsx)(c.l0,{children:function(e){switch(e){case 1:return(0,f.jsx)(j,{onNext:k,onSelectCategory:C,selectedCategory:m});case 2:return(0,f.jsx)(b,{onBack:B,onNext:k,selectedCategory:m,setFormValues:g});case 3:return(0,f.jsx)(v,{onBack:B,selectedCategory:m,setFormValues:g});default:return null}}(r)})})]})},q=function(){return(0,f.jsx)("div",{children:(0,f.jsx)(C,{})})}}}]);
//# sourceMappingURL=998.60a3f4bf.chunk.js.map