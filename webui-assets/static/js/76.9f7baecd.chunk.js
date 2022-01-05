"use strict";(self.webpackChunkec_admin_webui=self.webpackChunkec_admin_webui||[]).push([[76,762],{4076:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var s=a(2982),i=a(7762),n=a(5671),r=a(3144),o=a(9340),l=a(5716),u=a(2791),c=a(8890),d=a.n(c),p=a(8215),b=a(184),h=function(e){(0,o.Z)(a,e);var t=(0,l.Z)(a);function a(e){var s;return(0,n.Z)(this,a),(s=t.call(this,e)).state={tableData:[],newTableData:[],viewTable:!0,editItemData:{},searchString:"",showTableInit:!1},s}return(0,r.Z)(a,[{key:"componentDidMount",value:function(){this.handleDataTable(!1)}},{key:"handleDataTable",value:function(e){var t=this,a=[];fetch("https://reqres.in/api/users/2",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+this.props.authToken}}).then((function(s){if(200===s.status){var n=[{timestamp:"12/19/2020 T19:00:00",noOfGateway:"2",status:"pending"},{timestamp:"02/20/2021 T10:00:00",noOfGateway:"2",status:"Success"}];if(null===n&&(n=[]),n.length>0){var r,o=(0,i.Z)(n);try{for(o.s();!(r=o.n()).done;){var l=r.value;a.push(l)}}catch(u){o.e(u)}finally{o.f()}}t.generateTableStructure(a,e),t.setState({tableData:a})}else t.props.showGlobalMessage(!0,!0,"Please try after sometime","custom-danger"),setTimeout((function(){t.props.hideGlobalMessage()}),2e3)})).catch((function(e){console.log(e),t.props.showGlobalMessage(!0,!0,"Please try after sometime","custom-danger"),setTimeout((function(){t.props.hideGlobalMessage()}),2e3)}))}},{key:"initTable",value:function(e,t){var a;a=d()("#subscriptionupgradeTableDiv")[0].offsetWidth-200,d()("#"+e).DataTable({dom:'rt<"bottom"lp>',bSort:!0,scrollX:!0,language:{paginate:{previous:"<",next:">"}},createdRow:function(e,t,s){for(var i=0;i<t.length;i++)d()("td:eq("+i+")",e).css("min-width",a/t.length+"px")},pageLength:5,stateSave:t,destroy:!0,fnDrawCallback:function(e){e.aiDisplay.length<=5?d()(".dataTables_paginate").hide():d()(".dataTables_paginate").show()}}),d()(".bottom").addClass("row"),d()(".dataTables_length").addClass("col-sm-6"),d()(".dataTables_paginate").addClass("col-sm-6")}},{key:"generateTableStructure",value:function(e,t){var a,s=this,n=e,r=[],o=(0,i.Z)(n);try{for(o.s();!(a=o.n()).done;){var l=a.value,u={};u.timestamp=l.timestamp,u.noOfGateway=l.noOfGateway,u.status=l.status,r.push(u)}}catch(c){o.e(c)}finally{o.f()}this.setState({newTableData:r,showTableInit:!0}),setTimeout((function(){s.initTable("subscriptionupgradeTable",t)}),100)}},{key:"showHideTableTdData",value:function(e,t){var a=(0,s.Z)(this.state.newTableData),i=Object.assign({},a[e]);if("subscriptionId"===t){var n=i.subscriptionId;i.subscriptionId=i.subscriptionIdHidden,i.subscriptionIdHidden=n,i.subscriptionIdHiddenFlag=!i.subscriptionIdHiddenFlag,a[e]=i}else if("serviceUri"===t){var r=i.serviceUri;i.serviceUri=i.serviceUriHidden,i.serviceUriHidden=r,i.serviceUriHiddenFlag=!i.serviceUriHiddenFlag,a[e]=i}else if("subscriptionName"===t){var o=i.subscriptionName;i.subscriptionName=i.subscriptionNameHidden,i.subscriptionNameHidden=o,i.subscriptionNameHiddenFlag=!i.subscriptionNameHiddenFlag,a[e]=i}else if("uaaUrl"===t){var l=i.uaaUrl;i.uaaUrl=i.uaaUrlHidden,i.uaaUrlHidden=l,i.uaaUrlHiddenFlag=!i.uaaUrlHiddenFlag,a[e]=i}this.setState({newTableData:a})}},{key:"filterByValue",value:function(e,t){for(var a=[],s=0;s<e.length;s++)(e[s].timestamp.includes(t.toLowerCase())||e[s].noOfGateway.includes(t.toLowerCase())||e[s].status.toLowerCase().includes(t.toLowerCase()))&&a.push(e[s]);return a}},{key:"destroyDataTable",value:function(e){d()("#"+e).DataTable().destroy()}},{key:"filterData",value:function(e){var t=this;this.destroyDataTable("subscriptionupgradeTable");var a=e.target.value.trim(),n=e.target.value,r=(0,s.Z)(this.state.tableData),o=[],l=[];o=""!==a?this.filterByValue(r,a):r;var u,c=(0,i.Z)(o);try{for(c.s();!(u=c.n()).done;){var d=u.value,p={};p.timestamp=d.timestamp,p.noOfGateway=d.noOfGateway,p.status=d.status,l.push(p)}}catch(b){c.e(b)}finally{c.f()}this.setState({newTableData:l,searchString:n}),setTimeout((function(){t.initTable("subscriptionupgradeTable",!1)}),0)}},{key:"edit",value:function(e){var t=Object.assign({},e);t.subscriptionIdHiddenFlag&&(t.subscriptionId=t.subscriptionIdHidden),t.serviceUriHiddenFlag&&(t.serviceUri=t.serviceUriHidden),t.subscriptionNameHiddenFlag&&(t.subscriptionName=t.subscriptionNameHidden),t.uaaUrlHiddenFlag&&(t.uaaUrl=t.uaaUrlHidden),this.destroyDataTable("subscriptionupgradeTable"),this.setState({editItemData:t,viewTable:!1})}},{key:"removeDataTableRow",value:function(e,t){d()("#"+e).DataTable().row("#"+e+"TbodyTr_"+t).remove().draw(!1)}},{key:"deleteData",value:function(e,t){var a=this;if(window.confirm("Are you sure you want to delete")){var s=e.subscriptionId;e.subscriptionIdHiddenFlag&&(s=e.subscriptionIdHidden),this.props.showGlobalMessage(!0,!0,"Please Wait....","custom-success"),fetch(this.props.baseUrl+"/deleteSubscription?subscriptionID="+s,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+this.props.authToken}}).then((function(e){if(200===e.status)e.json().then((function(e){if("ok"===e.errorStatus.status){a.props.showGlobalMessage(!1,!0,"Record deleted successfuly","custom-success"),a.removeDataTableRow("subscriptionupgradeTable",t);var s=a;setTimeout((function(){s.props.hideGlobalMessage()}),2e3)}else a.props.showGlobalMessage(!0,!0,e.errorStatus.statusMsg,"custom-danger"),setTimeout((function(){a.props.hideGlobalMessage()}),2e3)}));else{a.props.showGlobalMessage(!0,!0,"Please try after sometime","custom-danger");var s=a;setTimeout((function(){s.props.hideGlobalMessage()}),2e3)}})).catch((function(e){console.log(e),a.props.showGlobalMessage(!0,!0,"Please try after sometime","custom-danger"),setTimeout((function(){a.props.hideGlobalMessage()}),2e3)}))}}},{key:"changeView",value:function(){var e=this;this.setState({viewTable:!0}),setTimeout((function(){e.initTable("subscriptionupgradeTable",!0)}),0)}},{key:"render",value:function(){var e=this;return(0,b.jsx)("div",{children:(0,b.jsx)("div",{className:"row Subscriptionupgrade",children:(0,b.jsxs)("div",{className:"col-md-12",children:[(0,b.jsx)("div",{className:"row mt-2",children:(0,b.jsxs)("div",{className:"col-sm-6 text-left",children:[(0,b.jsx)("div",{className:"d-inline",children:(0,b.jsxs)("button",{type:"button",className:"btn btn-sm btn-outline-secondary disabled",children:[(0,b.jsx)("i",{className:"fa fa-filter"}),"FILTER"]})}),(0,b.jsx)("div",{className:"d-inline p-2",children:(0,b.jsx)("input",{type:"text",value:this.state.searchString,className:"d-inline form-control form-control-sm search-field",onChange:function(t){e.filterData(t)}})})]})}),(0,b.jsx)("div",{className:"centered-div",children:(0,b.jsx)("div",{id:"subscriptionupgradeTableDiv",children:this.state.showTableInit?this.state.newTableData.length>0?(0,b.jsxs)("table",{id:"subscriptionupgradeTable",className:"table text-center",children:[(0,b.jsx)("thead",{children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{children:"Timestamp"}),(0,b.jsx)("th",{children:"No. Of Gateways"}),(0,b.jsx)("th",{children:"Status"}),(0,b.jsx)("th",{children:"Actions"})]})}),(0,b.jsx)("tbody",{children:this.state.newTableData.map((function(t,a){return(0,b.jsxs)("tr",{id:"subscriptionupgradeTableTbodyTr_"+a,children:[(0,b.jsx)("td",{children:t.timestamp}),(0,b.jsx)("td",{children:t.noOfGateway}),(0,b.jsx)("td",{children:t.status}),(0,b.jsx)("td",{children:(0,b.jsx)("span",{className:"action-img",children:(0,b.jsx)("i",{onClick:e.edit.bind(e,t),className:"fa fa-eye cursor-pointer",title:"View"})})})]},"subscriptionupgradeTableTbodyTr_"+a)}))})]}):(0,b.jsx)("div",{className:"row mt-2",children:(0,b.jsx)("div",{className:"col-md-12",children:(0,b.jsx)("div",{className:"alert alert-success",role:"alert",children:"No record found!"})})}):(0,b.jsx)("p",{className:"text-center loader-icon",children:(0,b.jsx)("img",{alt:"loading",src:p.Z})})})})]})})})}}]),a}(u.Component)},907:function(e,t,a){function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,s=new Array(t);a<t;a++)s[a]=e[a];return s}a.d(t,{Z:function(){return s}})},7762:function(e,t,a){a.d(t,{Z:function(){return i}});var s=a(181);function i(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=(0,s.Z)(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,l=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){l=!0,r=e},f:function(){try{o||null==a.return||a.return()}finally{if(l)throw r}}}}},2982:function(e,t,a){a.d(t,{Z:function(){return n}});var s=a(907);var i=a(181);function n(e){return function(e){if(Array.isArray(e))return(0,s.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,i.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},181:function(e,t,a){a.d(t,{Z:function(){return i}});var s=a(907);function i(e,t){if(e){if("string"===typeof e)return(0,s.Z)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?(0,s.Z)(e,t):void 0}}}}]);
//# sourceMappingURL=76.9f7baecd.chunk.js.map