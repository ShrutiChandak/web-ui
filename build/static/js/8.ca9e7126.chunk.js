(this["webpackJsonpec-admin-webui"]=this["webpackJsonpec-admin-webui"]||[]).push([[8,21],{33:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},34:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(33);function o(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},35:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(34);function o(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s,r=!0,l=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return r=e.done,e},e:function(e){l=!0,s=e},f:function(){try{r||null==o.return||o.return()}finally{if(l)throw s}}}}},37:function(e,t,a){e.exports=a.p+"static/media/icon_greensortingdown.7d91f50e.svg"},38:function(e,t,a){e.exports=a.p+"static/media/icondelete_tablemaintainmonitor.ba23f6b1.svg"},39:function(e,t,a){e.exports=a.p+"static/media/iconedit_tablemaintainmonitor.f1791879.svg"},62:function(e,t,a){"use strict";var n,o=new Uint8Array(16);function s(){if(!n&&!(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}var r=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var l=function(e){return"string"===typeof e&&r.test(e)},i=[],c=0;c<256;++c)i.push((c+256).toString(16).substr(1));var m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=(i[e[t+0]]+i[e[t+1]]+i[e[t+2]]+i[e[t+3]]+"-"+i[e[t+4]]+i[e[t+5]]+"-"+i[e[t+6]]+i[e[t+7]]+"-"+i[e[t+8]]+i[e[t+9]]+"-"+i[e[t+10]]+i[e[t+11]]+i[e[t+12]]+i[e[t+13]]+i[e[t+14]]+i[e[t+15]]).toLowerCase();if(!l(a))throw TypeError("Stringified UUID is invalid");return a};t.a=function(e,t,a){var n=(e=e||{}).random||(e.rng||s)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){a=a||0;for(var o=0;o<16;++o)t[a+o]=n[o];return t}return m(n)}},84:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return T}));var n=a(7),o=a(35),s=a(2),r=a(3),l=a(5),i=a(4),c=a(0),m=a.n(c),u=a(62),d=a(1),p=a.n(d),h=a(37),f=a.n(h),v=a(39),b=a.n(v),y=a(38),g=a.n(y),E=a(6),w=a.n(E),T=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={formData:{name:{value:"",dirtyState:!1},eventType:{value:"",dirtyState:!1},endpoint:{value:"",dirtyState:!1},secret:{value:"",dirtyState:!1,type:"password"}},errorsForm:{},formIsValid:!1,showForm:!1,WebHookList:[{name:"",eventType:"",endpoint:""}],edit:!1,editKey:"",showTableInit:!1,newTableData:[]},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"initTable",value:function(e,t){var a;a=p()("#"+e+"Div")[0].offsetWidth-200,p()("#"+e).DataTable({dom:'rt<"bottom"lp>',bSort:!0,scrollX:!0,language:{paginate:{previous:"<",next:">"}},createdRow:function(e,t,n){for(var o=0;o<t.length;o++)p()("td:eq("+o+")",e).css("min-width",a/t.length+"px")},pageLength:5,destroy:!0,fnDrawCallback:function(e){e.aiDisplay.length<=5?p()(".dataTables_paginate").hide():p()(".dataTables_paginate").show()}}),p()(".bottom").addClass("row"),p()(".dataTables_length").addClass("col-sm-6"),p()(".dataTables_paginate").addClass("col-sm-6")}},{key:"fetchData",value:function(){var e=this,t=[];if(null!==sessionStorage.getItem("snapshotData")){var a=JSON.parse(sessionStorage.getItem("snapshotData")),n=[];Object.keys(a).forEach((function(e){n.push(a[e])}));for(var o=0,s=n;o<s.length;o++){var r=s[o];r.parent&&"5e69f043-966d-438f-9421-83fb18272a7d"===r.parent&&t.push(r)}this.generateTableStructure(t,!1),this.setState({WebHookList:t})}else this.props.showGlobalMessage(!0,!0,"Please try after sometime","custom-danger"),this.setState({WebHookList:[{name:"",eventType:"",endpoint:""}]}),setTimeout((function(){e.props.hideGlobalMessage()}),2e3)}},{key:"generateTableStructure",value:function(e,t){var a,n=this,s=e,r=[],l=Object(o.a)(s);try{for(l.s();!(a=l.n()).done;){var i=a.value,c={};c.webhookname=i.webhookname,c.eventType=i.eventType,c.endpoint=i.endpoint,c.secret=i.secret,c.key=i.key,r.push(c)}}catch(m){l.e(m)}finally{l.f()}this.setState({newTableData:r,showTableInit:!0}),setTimeout((function(){n.initTable("webhookTable",!0)}),100)}},{key:"handleFormData",value:function(e){var t=e.target.name,a="checkbox"===e.target.type?e.target.checked:e.target.value,n=Object.assign({},this.state.formData);"eventType"===t?(n.eventType.value=a,n.eventType.dirtyState=!0):"endpoint"===t?(n.endpoint.value=a,n.endpoint.dirtyState=!0):"name"===t?(n.name.value=a,n.name.dirtyState=!0):"secret"===t&&(n.secret.value=a,n.secret.dirtyState=!0),this.setState({formData:n}),this.handleFormValidation()}},{key:"handleFormValidation",value:function(){var e=this.state.formData,t=e.name.value,a=e.name.dirtyState,n=e.endpoint.value,o=e.endpoint.dirtyState,s=e.eventType.value,r=e.eventType.dirtyState,l=e.secret.value,i=e.secret.dirtyState,c=!0,m={};""===t.trim()&&(a&&(m.name="Please enter Name"),c=!1),""===n.trim()&&(o&&(m.endpoint="Please enter Api Endpoint"),c=!1),""===s.trim()&&(r&&(m.eventType="Please enter Event Type"),c=!1),""===l.trim()&&(i&&(m.secret="Please enter Secret"),c=!1),this.setState({formIsValid:c,errorsForm:m})}},{key:"showHideField",value:function(e,t){var a={};"password"===(a=Object.assign({},this.state.formData))[t].type?a[t].type="text":a[t].type="password",this.setState({formData:a})}},{key:"createWebHook",value:function(){var e=this;this.props.showGlobalMessage(!0,!0,"Please wait...","custom-success");var t=Object.assign({},this.state.formData),a={},n=Object(u.a)();a.webhookname=t.name.value,a.eventType=t.eventType.value,a.endpoint=t.endpoint.value,a.secret=btoa(unescape(encodeURIComponent(t.secret.value))),a.parent="5e69f043-966d-438f-9421-83fb18272a7d",a.name="webHook";var o=this.state.edit?"PUT":"POST",s=this.state.edit?"".concat(this.props.baseUrl,"webhook-").concat(this.state.editKey):"".concat(this.props.baseUrl,"webhook-").concat(n);fetch(s,{method:o,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+this.props.authToken},body:JSON.stringify(a)}).then((function(t){localStorage.setItem("prepareData",JSON.stringify(a)),200===t.status?(e.snapshotUpdate(),t.json().then((function(t){"ok"===(t={errorStatus:{status:"ok"}}).errorStatus.status?(e.props.showGlobalMessage(!1,!0,"Record saved successfully","custom-success"),e.state.edit||setTimeout((function(){e.props.hideGlobalMessage();e.setState({formData:{name:{value:"",dirtyState:!1},eventType:{value:"",dirtyState:!1},endpoint:{value:"",dirtyState:!1},secret:{value:"",dirtyState:!1,type:"password"}},formIsValid:!1})}),2e3)):(e.props.showGlobalMessage(!0,!0,t.errorStatus.statusMsg,"custom-danger"),setTimeout((function(){e.props.hideGlobalMessage()}),2e3))}))):(e.props.showGlobalMessage(!0,!0,"Please try after sometime","custom-danger"),setTimeout((function(){e.props.hideGlobalMessage()}),2e3))})).catch((function(t){console.log(t),e.props.showGlobalMessage(!0,!0,"Please try after sometime","custom-danger"),setTimeout((function(){e.props.hideGlobalMessage()}),2e3)}))}},{key:"snapshotUpdate",value:function(){var e=this;fetch(this.props.baseUrl+"snapshot",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+this.props.authToken}}).then((function(t){200===t.status&&t.json().then((function(t){sessionStorage.setItem("snapshotData",JSON.stringify(t)),e.fetchData()}))}))}},{key:"removeDataTableRow",value:function(e,t){p()("#"+e).DataTable().row("#"+e+"TbodyTr_"+t).remove().draw(!1)}},{key:"deleteWebhook",value:function(e,t){var a=this;window.confirm("Are you sure you want to delete")&&(this.props.showGlobalMessage(!0,!0,"Please Wait....","custom-success"),fetch(this.props.baseUrl+e.key,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+this.props.authToken}}).then((function(e){if(200===e.status)e.json().then((function(e){a.props.showGlobalMessage(!1,!0,"Record deleted successfuly","custom-success"),a.removeDataTableRow("webhookTable",t);var n=a;setTimeout((function(){n.props.hideGlobalMessage()}),2e3)}));else{a.props.showGlobalMessage(!0,!0,"Please try after sometime","custom-danger");var n=a;setTimeout((function(){n.props.hideGlobalMessage()}),2e3)}})).catch((function(e){console.log(e),a.props.showGlobalMessage(!0,!0,"Please try after sometime","custom-danger"),setTimeout((function(){a.props.hideGlobalMessage()}),2e3)})))}},{key:"editWebhook",value:function(e){var t=Object(n.a)({},this.state.formData);t.name.value=e.webhookname,t.eventType.value=e.eventType,t.endpoint.value=e.endpoint,t.secret.value=decodeURIComponent(escape(atob(e.secret)));var a=e.key;this.setState({formData:t,edit:!0,showForm:!0,editKey:a})}},{key:"addWebHook",value:function(){var e=Object(n.a)({},this.state.formData);e.name.value="",e.eventType.value="",e.endpoint.value="",e.secret.value="",this.setState({formData:e,edit:!1,showForm:!0,editKey:""})}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"row web-hook"},this.state.showForm?m.a.createElement("div",{className:"col-md-12 mt-2"},m.a.createElement("div",{className:"centered-div"},m.a.createElement("div",{className:"centered-div-header"},m.a.createElement("div",{className:"row WebHooks-header"},m.a.createElement("div",{className:"col-md-12"},m.a.createElement("h6",{id:"WebHooks-title text-blue"},"Web Hooks /",m.a.createElement("span",{className:"text-black"}," Add webhook")))),m.a.createElement("hr",null),m.a.createElement("div",{className:"changeable-form group-form"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-sm-6"},m.a.createElement("div",{className:"col-sm-12 label required"},"NAME",m.a.createElement("img",{alt:"down-arrow",src:f.a})),m.a.createElement("div",{className:"col-sm-12 mb-2"},m.a.createElement("input",{type:"text",className:"form-control form-control-sm",name:"name",value:this.state.formData.name.value,onChange:function(t){e.handleFormData(t)}}),m.a.createElement("small",{className:"text-danger"},this.state.errorsForm.name))),m.a.createElement("div",{className:"col-sm-6"},m.a.createElement("div",{className:"col-sm-12 label required"},"EVENT TYPE",m.a.createElement("img",{alt:"down-arrow",src:f.a})),m.a.createElement("div",{className:"col-sm-12 mb-2"},m.a.createElement("select",{className:"form-control form-control-sm",name:"eventType",value:this.state.formData.eventType.value,onChange:function(t){e.handleFormData(t)}},m.a.createElement("option",{value:""},"Choose a event "),m.a.createElement("option",{value:"Client Agent Restart"},"Client Agent Restart"," "),m.a.createElement("option",{value:"Server Agent Restart"},"Server Agent Restart"),m.a.createElement("option",{value:"Gateway Agent Restart"},"Gateway Agent Restart"),m.a.createElement("option",{value:"Connection Establish"},"Connection Establish")),m.a.createElement("small",{className:"text-danger"},this.state.errorsForm.eventType)))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-sm-6"},m.a.createElement("div",{className:"col-sm-12 label required"},"SECRET",m.a.createElement("img",{alt:"down-arrow",src:f.a}),"password"===this.state.formData.secret.type?m.a.createElement("i",{onClick:function(t){e.showHideField(t,"secret")},className:"fa fa-eye cursor-pointer",title:"Show"}):m.a.createElement("i",{onClick:function(t){e.showHideField(t,"secret")},className:"fa fa-eye-slash cursor-pointer",title:"Hide"})),m.a.createElement("div",{className:"col-sm-12 mb-2"},m.a.createElement("input",{type:this.state.formData.secret.type,autoComplete:"off",className:"form-control form-control-sm",name:"secret",value:this.state.formData.secret.value,onChange:function(t){e.handleFormData(t)}}),m.a.createElement("small",{className:"text-danger"},this.state.errorsForm.secret))),m.a.createElement("div",{className:"col-sm-6"},m.a.createElement("div",{className:"col-sm-12 label required"},"TARGET ENDPOINT",m.a.createElement("img",{alt:"down-arrow",src:f.a})),m.a.createElement("div",{className:"col-sm-12 mb-2"},m.a.createElement("input",{type:"text",className:""===this.state.formData.endpoint.value?"blur form-control form-control-sm":"form-control form-control-sm",name:"endpoint",value:""===this.state.formData.endpoint.value?"https://":this.state.formData.endpoint.value,onChange:function(t){e.handleFormData(t)}}),m.a.createElement("small",{className:"text-danger"},this.state.errorsForm.endpoint)))),m.a.createElement("br",null),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-sm-4"}),m.a.createElement("div",{className:"col-sm-2 mb-2 text-right"},m.a.createElement("button",{id:"create-group-btn",disabled:!this.state.formIsValid,onClick:this.createWebHook.bind(this),className:"btn btn-sm customize-view-btn"},this.state.edit?"UPDATE WEBHOOK":"CREATE WEBHOOKS")," "),m.a.createElement("div",{className:"col-sm-2 mb-2 text-left"},m.a.createElement("button",{id:"create-group-btn",onClick:function(){return e.setState({showForm:!1})},className:"btn btn-sm customize-view-btn"},"BACK"))))))):m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-12 mt-2"},m.a.createElement("div",{className:"centered-div"},m.a.createElement("div",{className:"centered-div-header"},m.a.createElement("div",{className:"row mt-2 mb-2 WebHooks-header"},m.a.createElement("div",{className:"col-md-8"},m.a.createElement("h6",{id:"WebHooks-title"},"Web Hooks",m.a.createElement("small",null," Creating Parameters."))),m.a.createElement("div",{className:"col-md-4 text-right"},m.a.createElement("button",{onClick:function(){return e.addWebHook()},className:"btn btn-sm customize-view-btn"},"Add Webhooks"))),m.a.createElement("hr",null),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-sm-12 text-center",id:"webhookTableDiv"},this.state.showTableInit?this.state.newTableData.length>0?m.a.createElement("table",{id:"webhookTable",className:"table"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"Name"),m.a.createElement("th",null,"Event Type"),m.a.createElement("th",null,"Target Endpoint"),m.a.createElement("th",null,"Actions"))),m.a.createElement("tbody",null,this.state.newTableData.map((function(t,a){return m.a.createElement("tr",{id:"webhookTableTbodyTr_"+a,key:"webhookTableTbodyTr_"+a},m.a.createElement("td",null,t.webhookname," "),m.a.createElement("td",null,t.eventType," "),m.a.createElement("td",null," ",t.endpoint),m.a.createElement("td",null,m.a.createElement("span",{className:"action-img"},m.a.createElement("img",{alt:"edit-icon",title:"Edit",src:b.a,onClick:function(){return e.editWebhook(t)}}),m.a.createElement("img",{onClick:function(){return e.deleteWebhook(t,a)},alt:"delete-icon",title:"Delete",src:g.a}))))})))):m.a.createElement("div",{className:"row mt-2"},m.a.createElement("div",{className:"col-md-12"},m.a.createElement("div",{className:"alert alert-success",role:"alert"},"No record found!"))):m.a.createElement("p",{className:"text-center loader-icon"},m.a.createElement("img",{alt:"loading",src:w.a})))))))))}}]),a}(m.a.Component)}}]);
//# sourceMappingURL=8.ca9e7126.chunk.js.map