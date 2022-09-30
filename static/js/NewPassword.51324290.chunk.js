"use strict";(self.webpackChunkhw14=self.webpackChunkhw14||[]).push([[508],{3837:function(s,r,o){o.r(r),o.d(r,{default:function(){return j}});var e=o(1413),n=o(885),a=o(2791),t=o(9569),i=o(3710),d=o(1898),c=o(9365),l=o(3287),w=o(8254),p=o(3811),u=o(5705),m=o(7689),f=o(3806),h=o(1411),x={formContainer:"NewPassword_formContainer__MyQbc",title:"NewPassword_title__Zg6lJ",input:"NewPassword_input__vPqxG",link:"NewPassword_link__zikY3",btn:"NewPassword_btn__xqrVB",instructionsText:"NewPassword_instructionsText__hh7tg",error:"NewPassword_error__2D-81",inputBlock:"NewPassword_inputBlock__zPezJ"},P=o(3299),_=o(184),j=function(){var s=(0,f.TL)(),r=(0,f.CG)((function(s){return s.newPassword.isCreated})),o=(0,f.CG)((function(s){return s.login.isLoggedIn})),j=(0,a.useState)(!1),Z=(0,n.Z)(j,2),N=Z[0],C=Z[1],k=(0,a.useState)(!1),g=(0,n.Z)(k,2),y=g[0],v=g[1],b=(0,m.UO)(),S=(0,u.TA)({initialValues:{password:"",confirmPassword:""},validate:function(s){var r={};return s.password?s.password.length<=7&&(r.password="Password must be more than 7 characters..."):r.password="Required",s.confirmPassword?s.confirmPassword!==s.password&&(r.confirmPassword="The password and confirmation password do not match"):r.confirmPassword="Required",r},onSubmit:function(r){s((0,P.P)(r.password,b.token?b.token:""))}}),T=function(s){s.preventDefault()};return r?(0,_.jsx)(m.Fg,{to:"/login/"}):o?(0,_.jsx)(m.Fg,{to:"/profile/"}):(0,_.jsx)("div",{className:x.wrapper,children:(0,_.jsxs)("form",{className:x.formContainer,onSubmit:S.handleSubmit,children:[(0,_.jsx)("div",{className:x.title,children:"Create new password"}),(0,_.jsx)("div",{className:x.instructionsText,children:"Create new password and we will send you further instructions to email"}),(0,_.jsxs)(d.Z,{className:x.inputBlock,variant:"standard",children:[(0,_.jsx)(c.Z,{color:"secondary",children:"Password"}),(0,_.jsx)(l.Z,(0,e.Z)((0,e.Z)({id:"password",type:N?"text":"password",placeholder:"Password",className:x.input,color:"secondary"},S.getFieldProps("password")),{},{autoComplete:"on",endAdornment:(0,_.jsx)(w.Z,{position:"end",children:(0,_.jsx)(p.Z,{onClick:function(){C(!N)},onMouseDown:T,color:"primary",children:N?(0,_.jsx)(t.Z,{}):(0,_.jsx)(i.Z,{})})})})),S.errors.password&&S.touched.password&&(0,_.jsx)("div",{className:x.error,children:S.errors.password})]}),(0,_.jsxs)(d.Z,{className:x.inputBlock,variant:"standard",children:[(0,_.jsx)(c.Z,{color:"secondary",children:"Confirm password"}),(0,_.jsx)(l.Z,(0,e.Z)((0,e.Z)({id:"confirmPassword",type:y?"text":"password",placeholder:"Confirm password",className:x.input,color:"secondary"},S.getFieldProps("confirmPassword")),{},{autoComplete:"on",endAdornment:(0,_.jsx)(w.Z,{position:"end",children:(0,_.jsx)(p.Z,{onClick:function(){v(!y)},onMouseDown:T,color:"primary",children:y?(0,_.jsx)(t.Z,{}):(0,_.jsx)(i.Z,{})})})})),S.errors.confirmPassword&&S.touched.confirmPassword&&(0,_.jsx)("div",{className:x.error,children:S.errors.confirmPassword})]}),(0,_.jsx)(h.Z,{style:{fontFamily:"Montserrat",fontStyle:"normal",fontWeight:500,fontSize:"16px",lineHeight:"20px",letterSpacing:"0.01em"},type:"submit",children:"Create new password"})]})})}}}]);
//# sourceMappingURL=NewPassword.51324290.chunk.js.map