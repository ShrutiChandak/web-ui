(this["webpackJsonpec-admin-webui"]=this["webpackJsonpec-admin-webui"]||[]).push([[0],{48:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var s=a(10),l=a(35),n=a(2),o=a(3),c=a(5),m=a(4),i=a(0),r=a.n(i),d=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={gateway:"",selectedGateway:"",gateways:[],healthLink:"",session:{sessionId:"",id:"",bindId:"",targetId:"",groupId:""},superConnection:{serverId:"",id:"",targetId:"",groupId:"",timeCreated:"",ip:"",lastPong:""},connection:{bindId:"",clientConfiguration:"",id:"",bindId2:"",targetId:"",groupId:"",timeCreated:"",allocations:"",totalAllocations:"",frees:"",heapAlloc:"",heapInUse:"",heapReleased:"",heapObjects:"",report:"",lastUsage:"",lastReport:""},gatewayDetails:{mode:"",environment:"",gatewayPort:"",zone:"",serviceUrl:"",token:"",host:"",os:""},showSession:!1,showConnection:!1,showSuperConnection:!1},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(sessionStorage.getItem("gatewayDetails"));this.setState({gateways:t,selectedGateway:t[this.props.tableindx].gatewayId}),setTimeout((function(){e.fetchHealthStatus()}),500)}},{key:"handleChange",value:function(e){var t=e.target.id;if("session"===t){var a=this.state.showSession;this.setState({showSession:!a})}if("superConnection"===t){var s=this.state.showSuperConnection;this.setState({showSuperConnection:!s})}if("connections"===t){var l=this.state.showConnection;this.setState({showConnection:!l})}}},{key:"fetchHealthStatus",value:function(){var e=this,t=this.state.selectedGateway,a=(this.state.gateways.find((function(e){return e.gatewayId===t})),Object.assign({},this.state.superConnection)),s=Object.assign({},this.state.connection),n=Object.assign({},this.state.gatewayDetails);fetch("https://jsonplaceholder.typicode.com/todos/1").then((function(t){200===t.status&&t.json().then((function(t){if(e.props.showGlobalMessage(!0,!0,"Please wait","custom-success"),(t=[{sessionId:"0idLmsMk8e",id:"Q7rfHI",bindId:"db6Wt2ReXF",targetId:"Q7rfHI",groupId:"wabtec-gecars-qadasdsa"}]).length>0){var o,c=Object(l.a)(t);try{for(c.s();!(o=c.n()).done;){var m=o.value;t.sessionId=m.sessionId,t.id=m.id,t.bindId=m.bindId,t.targetId=m.targetId,t.groupId=m.groupId}}catch(i){c.e(i)}finally{c.f()}e.setState({session:t})}fetch("https://jsonplaceholder.typicode.com/todos/1").then((function(t){200===t.status&&t.json().then((function(t){if((t=[{serverId:"OGhEuE",id:"OGhEuE",targetId:"value",groupId:"smartshop-prod",timeCreated:"2019-11-13T22:05:38.101993815Z",ip:"10.72.1.16:61368",lastPong:"0001-01-01T00:00:00Z"}]).length>0){var o,c=Object(l.a)(t);try{for(c.s();!(o=c.n()).done;){var m=o.value;a.serverId=m.serverId,a.id=m.id,a.targetId=m.targetId,a.groupId=m.groupId,a.timeCreated=m.timeCreated,a.ip=m.ip,a.lastPong=m.lastPong}}catch(i){c.e(i)}finally{c.f()}e.setState({superConnection:a})}fetch("https://jsonplaceholder.typicode.com/todos/1").then((function(t){200===t.status&&(t.json().then((function(t){if((t=[{bindId:"DstAet",clientConfiguration:"value",id:"087ADA",bindId2:"0074C5",targetId:"OGhEuE",groupId:"smartshop-prod",timeCreated:"2019-11-13T22:05:38.101993815Z",allocations:"2903776",totalAllocations:"25007624",frees:"394315",heapAlloc:"2903776",heapInUse:"5185536",heapReleased:"60203008",heapObjects:"20224",report:"value",lastUsage:"987",lastReport:"0001-01-01T00:00:00Z"}]).length>0){var a,n=Object(l.a)(t);try{for(n.s();!(a=n.n()).done;){var o=a.value;s.bindId=o.bindId,s.clientConfiguration=o.clientConfiguration,s.id=o.id,s.bindId2=o.bindId2,s.targetId=o.targetId,s.groupId=o.groupId,s.timeCreated=o.timeCreated,s.allocations=o.allocations,s.totalAllocations=o.totalAllocations,s.frees=o.frees,s.heapAlloc=o.heapAlloc,s.heapInUse=o.heapInUse,s.heapReleased=o.heapReleased,s.heapObjects=o.heapObjects,s.report=o.report,s.lastUsage=o.lastUsage,s.lastReport=o.lastReport}}catch(i){n.e(i)}finally{n.f()}e.setState({connection:s})}})),fetch("https://jsonplaceholder.typicode.com/todos/1").then((function(t){200===t.status&&t.json().then((function(t){if((t=[{mode:"GATEWAY",environment:"AWS",gatewayPort:"8080",zone:"",serviceUrl:"https://ec-agent-portal-1x.com",token:"none",host:"ws://asda/agent",os:"linux"}]).length>0){var a,s=Object(l.a)(t);try{for(s.s();!(a=s.n()).done;){var o=a.value;n.mode=o.mode,n.environment=o.environment,n.gatewayPort=o.gatewayPort,n.zone=o.zone,n.serviceUrl=o.serviceUrl,n.token=o.token,n.host=o.host,n.os=o.os}}catch(i){s.e(i)}finally{s.f()}e.setState({gatewayDetails:n}),e.props.hideGlobalMessage()}}))})))}))}))}))}))})).catch((function(t){console.log(t),e.props.showGlobalMessage(!0,!0,"Error","custom-danger");var a=e;setTimeout((function(){a.props.hideGlobalMessage()}),2e3)}))}},{key:"handleGatewayselection",value:function(e){var t=e.target.value;this.setState({selectedGateway:t})}},{key:"gatewayOperations",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){var e,t,a,l=this;return r.a.createElement("div",{className:"Monitorhealthstatus"},r.a.createElement("div",{className:"card mt-2"},r.a.createElement("div",{className:"row insidedata"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col-sm-12 text-left"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4 border-bottom text-center"},r.a.createElement("label",null,"GATEWAYID - \xa0")," ",r.a.createElement("b",null," ",this.state.selectedGateway)),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("div",{className:"row ops-btn"},this.props.permissions.accesses.monitor.subMenus.healthStatus.isUser?null:r.a.createElement("button",{type:"button",id:"restart-gateway-btn",disabled:""===this.state.selectedGateway,className:"btn customize-view-btn btn-sm",onClick:function(){l.gatewayOperations(l.state.selectedGateway,"restart")}},"Restart Gateway"),this.props.permissions.accesses.monitor.subMenus.healthStatus.isUser?r.a.createElement("button",{type:"button",id:"access-gateway-btn",disabled:""===this.state.selectedGateway,className:"btn customize-view-btn btn-sm",onClick:function(){l.gatewayOperations(l.state.selectedGateway,"access")}},"Access Gateway"):null))))))),r.a.createElement("div",{className:"row insidedata"},r.a.createElement("ul",{className:"nav nav-tabs",id:"myTab",role:"tablist"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",id:"sessions-tab"+this.props.tableindx,"data-toggle":"tab",href:"#sessions"+this.props.tableindx,role:"tab","aria-controls":"sessions","aria-selected":"true"},"SESSIONS")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",id:"superconnections-tab"+this.props.tableindx,"data-toggle":"tab",href:"#superconnections"+this.props.tableindx,role:"tab","aria-controls":"superconnections","aria-selected":"false"},"SUPER CONNECTIONS")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",id:"contact-tab"+this.props.tableindx,"data-toggle":"tab",href:"#contact"+this.props.tableindx,role:"tab","aria-controls":"contact","aria-selected":"false"},"CLIENT POOL")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",id:"details-tab"+this.props.tableindx,"data-toggle":"tab",href:"#details"+this.props.tableindx,role:"tab","aria-controls":"details","aria-selected":"false"},"GATEWAY DETAILS"))),r.a.createElement("div",{className:"tab-content",id:"myTabContent",style:{textAlign:"center"}},r.a.createElement("div",{className:"tab-pane fade show active",id:"sessions"+this.props.tableindx,role:"tabpanel","aria-labelledby":"sessions-tab"+this.props.tableindx},r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-5 "}),r.a.createElement("div",{className:"col-sm-2 text-center"},r.a.createElement("select",(e={className:"form-control form-control-sm",id:"selectedSession",name:"selectedSession"},Object(s.a)(e,"className","health-status-select"),Object(s.a)(e,"onChange",(function(e){l.handleGatewayselection(e)})),e),r.a.createElement("option",{value:""},"Select SessionId"),r.a.createElement("option",{value:"0idLmsMk8e"},"0idLmsMk8e")))),r.a.createElement("br",null),r.a.createElement("div",{className:"row",style:{textAlign:"center"}},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("small",{className:"font-weight-bold"},"Session ID:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.session.sessionId)),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("small",{className:"font-weight-bold"},"Group ID:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.session.groupId))),r.a.createElement("div",{className:"row",style:{textAlign:"center"}},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("small",{className:"font-weight-bold"},"Bind ID:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.session.bindId)),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("small",{className:"font-weight-bold"},"Target ID:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.session.targetId))),r.a.createElement("div",{className:"row",style:{textAlign:"center"}},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("small",{className:"font-weight-bold"},"Server config ID:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.session.id)))),r.a.createElement("div",{className:"tab-pane fade",id:"superconnections"+this.props.tableindx,role:"tabpanel","aria-labelledby":"superconnections-tab"+this.props.tableindx},r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-5 "}),r.a.createElement("div",{className:"col-sm-2 text-center"},r.a.createElement("select",(t={className:"form-control form-control-sm",id:"selectedConnection",name:"selectedConnection"},Object(s.a)(t,"className","health-status-select"),Object(s.a)(t,"onChange",(function(e){l.handleGatewayselection(e)})),t),r.a.createElement("option",{value:""},"Select ServerID"),r.a.createElement("option",{value:"0idLmsMk8e"},"0idLmsMk8e")))),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("small",{className:"font-weight-bold"},"Server ID:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.superConnection.serverId)),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("small",{className:"font-weight-bold"},"Time created:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.superConnection.timeCreated))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("small",{className:"font-weight-bold"},"ID:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.superConnection.id)),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("small",{className:"font-weight-bold"},"Group ID:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.superConnection.groupId))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("small",{className:"font-weight-bold"},"Target ID:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.superConnection.targetId)),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("small",{className:"font-weight-bold"},"IP:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.superConnection.ip))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("small",{className:"font-weight-bold"},"Last Pong:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.superConnection.lastPong)))),r.a.createElement("div",{className:"tab-pane fade",id:"contact"+this.props.tableindx,role:"tabpanel","aria-labelledby":"contact-tab"+this.props.tableindx}," ",r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-5 "}),r.a.createElement("div",{className:"col-sm-2 text-center"},r.a.createElement("select",(a={className:"form-control form-control-sm",id:"selectedClientId",name:"selectedClientId"},Object(s.a)(a,"className","health-status-select"),Object(s.a)(a,"onChange",(function(e){l.handleGatewayselection(e)})),a),r.a.createElement("option",{value:""},"Select ClientId"),r.a.createElement("option",{value:"0idLmsMk8e"},"0idLmsMk8e")))),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("small",{className:"font-weight-bold"},"Bind ID:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.connection.bindId)),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("small",{className:"font-weight-bold"},"Client configuration:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.connection.clientConfiguration)),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("small",{className:"font-weight-bold"},"ID:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.connection.id))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("small",{className:"font-weight-bold"},"Frees:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.connection.frees)),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("small",{className:"font-weight-bold"},"Target ID:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.connection.targetId)),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("small",{className:"font-weight-bold"},"Group ID:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.connection.groupId))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("small",{className:"font-weight-bold"},"Time created:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.connection.timeCreated)),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("small",{className:"font-weight-bold"},"Allocations:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.connection.allocations)),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("small",{className:"font-weight-bold"},"Total Allocations:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.connection.totalAllocations))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("small",{className:"font-weight-bold"},"Heap Alloc:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.connection.heapAlloc)),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("small",{className:"font-weight-bold"},"Heap in use:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.connection.heapInUse)),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("small",{className:"font-weight-bold"},"Heap released:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.connection.heapReleased))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("small",{className:"font-weight-bold"},"Heap Objects:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.connection.heapObjects)),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("small",{className:"font-weight-bold"},"Report:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.connection.report)),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("small",{className:"font-weight-bold"},"Last usage:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.connection.lastUsage)))),r.a.createElement("div",{className:"tab-pane fade show",id:"details"+this.props.tableindx,role:"tabpanel","aria-labelledby":"details-tab"+this.props.tableindx},r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("small",{className:"font-weight-bold"},"Mode:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.gatewayDetails.mode)),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("small",{className:"font-weight-bold"},"Environment:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.gatewayDetails.environment)),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("small",{className:"font-weight-bold"},"Gateway Port:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.gatewayDetails.gatewayPort))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("small",{className:"font-weight-bold"},"Zone:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.gatewayDetails.zone)),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("small",{className:"font-weight-bold"},"serviceUrl:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.gatewayDetails.serviceUrl)),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("small",{className:"font-weight-bold"},"Host:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.gatewayDetails.host))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("small",{className:"font-weight-bold"},"Token:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.gatewayDetails.token)),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("small",{className:"font-weight-bold"},"OS:"),r.a.createElement("small",{className:"font-weight-normal theme-color"},this.state.gatewayDetails.os))))))))}}]),a}(r.a.Component)}}]);
//# sourceMappingURL=0.13a6ace6.chunk.js.map