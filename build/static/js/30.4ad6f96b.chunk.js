(this["webpackJsonpec-admin-webui"]=this["webpackJsonpec-admin-webui"]||[]).push([[30],{88:function(e,o,t){"use strict";t.r(o),t.d(o,"default",(function(){return f}));var i=t(2),n=t(3),a=t(5),c=t(4),s=t(0),r=t.n(s),u=t(1),k=t.n(u),f=function(e){Object(a.a)(t,e);var o=Object(c.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=o.call(this,e)).state={cookieNotificationKey:"readCookieNotification"},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){"Y"!==this.getCookie(this.state.cookieNotificationKey)&&this.showCookieInfo()}},{key:"showCookieInfo",value:function(){setTimeout((function(){k()("cookieConsent").fadeIn(200)}),4e3)}},{key:"hideCookieInfo",value:function(){k()("#cookieConsent").fadeOut(200)}},{key:"readCookieNotification",value:function(e){document.cookie=this.state.cookieNotificationKey+"=Y",this.hideCookieInfo()}},{key:"readCookieNotificationIgnore",value:function(){this.hideCookieInfo()}},{key:"getCookie",value:function(e){for(var o=e+"=",t=decodeURIComponent(document.cookie).split(";"),i=0;i<t.length;i++){for(var n=t[i];" "===n.charAt(0);)n=n.substring(1);if(0===n.indexOf(o))return n.substring(o.length,n.length)}return"N"}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"cookieConsent"},r.a.createElement("div",{id:"closeCookieConsent",onClick:function(o){e.readCookieNotificationIgnore(o)}},"x"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-8"},"Enterpise Connect uses cookies to store information on your computer. Some are essential to make our site work; others help us improve the user experience. By using the site, you consent to the placement of these cookies."),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("a",{className:"cookieConsentOK",onClick:function(o){e.readCookieNotification(o)}},"That's Fine"))))}}]),t}(r.a.Component)}}]);
//# sourceMappingURL=30.4ad6f96b.chunk.js.map