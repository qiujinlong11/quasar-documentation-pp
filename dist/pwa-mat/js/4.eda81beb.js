(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{XL2A:function(e,a,t){"use strict";var n=t("gfzn"),l=t.n(n);l.a},gXJQ:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-page",{staticClass:"row"},[t("q-scroll-area",{staticClass:"col no-padding",attrs:{id:"content"}},[t("q-list",[t("q-list-header",[e._v(e._s(e.$t("settings.general._")))]),t("q-item",[t("q-item-side",{attrs:{icon:"language"}}),t("q-item-main",[t("q-select",{attrs:{"stack-label":e.$t("settings.general.language._"),options:e.general.language.options},on:{input:e.setLanguage},model:{value:e.general.language.default,callback:function(a){e.$set(e.general.language,"default",a)},expression:"general.language.default"}})],1)],1),t("q-item-separator")],1)],1)],1)},l=[];n._withStripped=!0;var s={name:"Settings",data:function(){return{general:{language:{default:this.$q.localStorage.get.item("setting.language"),options:[{image:"statics/flags/united-states-of-america.png",label:"English (US)",value:"en"},{image:"statics/flags/brazil.png",label:"Português (BR)",value:"pt"}]}}}},methods:{setLanguage:function(e){this.$q.localStorage.set("setting.language",e),this.$i18n.locale=e}}},g=s,i=(t("XL2A"),t("KHd+")),u=Object(i["a"])(g,n,l,!1,null,null,null);a["default"]=u.exports},gfzn:function(e,a,t){}}]);