(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{200:function(e,t,n){"use strict";n.r(t);var r={name:"CreateAccount",data:function(){return{email:"",password:"",error:""}},methods:{createAccount:function(){var e=this;this.$store.dispatch("user/createAccount",{email:this.email,password:this.password}).then((function(){e.$router.push("/")})).catch((function(t){e.error=t}))}}},o=n(23),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n  "+e._s(e.error)+"\n  "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v("\n  "+e._s(e.email)+"\n  "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v("\n  "+e._s(e.password)+"\n  "),n("button",{on:{click:e.createAccount}},[e._v("Create Account")])])}),[],!1,null,"2e14ac22",null);t.default=component.exports}}]);