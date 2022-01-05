"use strict";(self.webpackChunkec_admin_webui=self.webpackChunkec_admin_webui||[]).push([[157],{2157:function(e,s,t){t.r(s),t.d(s,{default:function(){return d}});var a=t(7762),l=t(5671),n=t(3144),o=t(9340),i=t(5716),c=t(2791),r=t(184),d=function(e){(0,o.Z)(t,e);var s=(0,i.Z)(t);function t(e){var a;return(0,l.Z)(this,t),(a=s.call(this,e)).state={gateway:"",selectedGateway:"",gateways:[],healthLink:"",session:{sessionId:"",id:"",bindId:"",targetId:"",groupId:""},superConnection:{serverId:"",id:"",targetId:"",groupId:"",timeCreated:"",ip:"",lastPong:""},connection:{bindId:"",clientConfiguration:"",id:"",bindId2:"",targetId:"",groupId:"",timeCreated:"",allocations:"",totalAllocations:"",frees:"",heapAlloc:"",heapInUse:"",heapReleased:"",heapObjects:"",report:"",lastUsage:"",lastReport:""},gatewayDetails:{mode:"",environment:"",gatewayPort:"",zone:"",serviceUrl:"",token:"",host:"",os:""},showSession:!1,showConnection:!1,showSuperConnection:!1},a}return(0,n.Z)(t,[{key:"componentDidMount",value:function(){var e=this,s=JSON.parse(sessionStorage.getItem("gatewayDetails"));this.setState({gateways:s,selectedGateway:s[this.props.tableindx].gatewayId}),setTimeout((function(){e.fetchHealthStatus()}),500)}},{key:"handleChange",value:function(e){var s=e.target.id;if("session"===s){var t=this.state.showSession;this.setState({showSession:!t})}if("superConnection"===s){var a=this.state.showSuperConnection;this.setState({showSuperConnection:!a})}if("connections"===s){var l=this.state.showConnection;this.setState({showConnection:!l})}}},{key:"fetchHealthStatus",value:function(){var e=this,s=(this.state.selectedGateway,this.state.gateways,Object.assign({},this.state.superConnection)),t=Object.assign({},this.state.connection),l=Object.assign({},this.state.gatewayDetails);fetch("https://jsonplaceholder.typicode.com/todos/1").then((function(n){200===n.status&&n.json().then((function(n){if(e.props.showGlobalMessage(!0,!0,"Please wait","custom-success"),(n=[{sessionId:"0idLmsMk8e",id:"Q7rfHI",bindId:"db6Wt2ReXF",targetId:"Q7rfHI",groupId:"wabtec-gecars-qadasdsa"}]).length>0){var o,i=(0,a.Z)(n);try{for(i.s();!(o=i.n()).done;){var c=o.value;n.sessionId=c.sessionId,n.id=c.id,n.bindId=c.bindId,n.targetId=c.targetId,n.groupId=c.groupId}}catch(r){i.e(r)}finally{i.f()}e.setState({session:n})}fetch("https://jsonplaceholder.typicode.com/todos/1").then((function(n){200===n.status&&n.json().then((function(n){if((n=[{serverId:"OGhEuE",id:"OGhEuE",targetId:"value",groupId:"smartshop-prod",timeCreated:"2019-11-13T22:05:38.101993815Z",ip:"10.72.1.16:61368",lastPong:"0001-01-01T00:00:00Z"}]).length>0){var o,i=(0,a.Z)(n);try{for(i.s();!(o=i.n()).done;){var c=o.value;s.serverId=c.serverId,s.id=c.id,s.targetId=c.targetId,s.groupId=c.groupId,s.timeCreated=c.timeCreated,s.ip=c.ip,s.lastPong=c.lastPong}}catch(r){i.e(r)}finally{i.f()}e.setState({superConnection:s})}fetch("https://jsonplaceholder.typicode.com/todos/1").then((function(s){200===s.status&&(s.json().then((function(s){if((s=[{bindId:"DstAet",clientConfiguration:"value",id:"087ADA",bindId2:"0074C5",targetId:"OGhEuE",groupId:"smartshop-prod",timeCreated:"2019-11-13T22:05:38.101993815Z",allocations:"2903776",totalAllocations:"25007624",frees:"394315",heapAlloc:"2903776",heapInUse:"5185536",heapReleased:"60203008",heapObjects:"20224",report:"value",lastUsage:"987",lastReport:"0001-01-01T00:00:00Z"}]).length>0){var l,n=(0,a.Z)(s);try{for(n.s();!(l=n.n()).done;){var o=l.value;t.bindId=o.bindId,t.clientConfiguration=o.clientConfiguration,t.id=o.id,t.bindId2=o.bindId2,t.targetId=o.targetId,t.groupId=o.groupId,t.timeCreated=o.timeCreated,t.allocations=o.allocations,t.totalAllocations=o.totalAllocations,t.frees=o.frees,t.heapAlloc=o.heapAlloc,t.heapInUse=o.heapInUse,t.heapReleased=o.heapReleased,t.heapObjects=o.heapObjects,t.report=o.report,t.lastUsage=o.lastUsage,t.lastReport=o.lastReport}}catch(r){n.e(r)}finally{n.f()}e.setState({connection:t})}})),fetch("https://jsonplaceholder.typicode.com/todos/1").then((function(s){200===s.status&&s.json().then((function(s){if((s=[{mode:"GATEWAY",environment:"AWS",gatewayPort:"8080",zone:"",serviceUrl:"https://ec-agent-portal-1x.com",token:"none",host:"ws://asda/agent",os:"linux"}]).length>0){var t,n=(0,a.Z)(s);try{for(n.s();!(t=n.n()).done;){var o=t.value;l.mode=o.mode,l.environment=o.environment,l.gatewayPort=o.gatewayPort,l.zone=o.zone,l.serviceUrl=o.serviceUrl,l.token=o.token,l.host=o.host,l.os=o.os}}catch(r){n.e(r)}finally{n.f()}e.setState({gatewayDetails:l}),e.props.hideGlobalMessage()}}))})))}))}))}))}))})).catch((function(s){console.log(s),e.props.showGlobalMessage(!0,!0,"Error","custom-danger");var t=e;setTimeout((function(){t.props.hideGlobalMessage()}),2e3)}))}},{key:"handleGatewayselection",value:function(e){var s=e.target.value;this.setState({selectedGateway:s})}},{key:"gatewayOperations",value:function(e,s){console.log(e,s)}},{key:"render",value:function(){var e=this;return(0,r.jsx)("div",{className:"Monitorhealthstatus",children:(0,r.jsxs)("div",{className:"card mt-2",children:[(0,r.jsx)("div",{className:"row insidedata",children:(0,r.jsx)("form",{children:(0,r.jsx)("div",{className:"form-row",children:(0,r.jsx)("div",{className:"col-sm-12 text-left",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-sm-4 border-bottom text-center",children:[(0,r.jsx)("label",{children:"GATEWAYID - \xa0"})," ",(0,r.jsxs)("b",{children:[" ",this.state.selectedGateway]})]}),(0,r.jsx)("div",{className:"col-sm-8",children:(0,r.jsxs)("div",{className:"row ops-btn",children:[this.props.permissions.accesses.monitor.subMenus.healthStatus.isUser?null:(0,r.jsx)("button",{type:"button",id:"restart-gateway-btn",disabled:""===this.state.selectedGateway,className:"btn customize-view-btn btn-sm",onClick:function(){e.gatewayOperations(e.state.selectedGateway,"restart")},children:"Restart Gateway"}),this.props.permissions.accesses.monitor.subMenus.healthStatus.isUser?(0,r.jsx)("button",{type:"button",id:"access-gateway-btn",disabled:""===this.state.selectedGateway,className:"btn customize-view-btn btn-sm",onClick:function(){e.gatewayOperations(e.state.selectedGateway,"access")},children:"Access Gateway"}):null]})})]})})})})}),(0,r.jsxs)("div",{className:"row insidedata",children:[(0,r.jsxs)("ul",{className:"nav nav-tabs",id:"myTab",role:"tablist",children:[(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{className:"nav-link active",id:"sessions-tab"+this.props.tableindx,"data-toggle":"tab",href:"#sessions"+this.props.tableindx,role:"tab","aria-controls":"sessions","aria-selected":"true",children:"SESSIONS"})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{className:"nav-link",id:"superconnections-tab"+this.props.tableindx,"data-toggle":"tab",href:"#superconnections"+this.props.tableindx,role:"tab","aria-controls":"superconnections","aria-selected":"false",children:"SUPER CONNECTIONS"})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{className:"nav-link",id:"contact-tab"+this.props.tableindx,"data-toggle":"tab",href:"#contact"+this.props.tableindx,role:"tab","aria-controls":"contact","aria-selected":"false",children:"CLIENT POOL"})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{className:"nav-link",id:"details-tab"+this.props.tableindx,"data-toggle":"tab",href:"#details"+this.props.tableindx,role:"tab","aria-controls":"details","aria-selected":"false",children:"GATEWAY DETAILS"})})]}),(0,r.jsxs)("div",{className:"tab-content",id:"myTabContent",style:{textAlign:"center"},children:[(0,r.jsxs)("div",{className:"tab-pane fade show active",id:"sessions"+this.props.tableindx,role:"tabpanel","aria-labelledby":"sessions-tab"+this.props.tableindx,children:[(0,r.jsx)("br",{}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-sm-5 "}),(0,r.jsx)("div",{className:"col-sm-2 text-center",children:(0,r.jsxs)("select",{className:"form-control form-control-sm health-status-select",id:"selectedSession",name:"selectedSession",onChange:function(s){e.handleGatewayselection(s)},children:[(0,r.jsx)("option",{value:"",children:"Select SessionId"}),(0,r.jsx)("option",{value:"0idLmsMk8e",children:"0idLmsMk8e"})]})})]}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{className:"row",style:{textAlign:"center"},children:[(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Session ID:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.session.sessionId})]}),(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Group ID:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.session.groupId})]})]}),(0,r.jsxs)("div",{className:"row",style:{textAlign:"center"},children:[(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Bind ID:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.session.bindId})]}),(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Target ID:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.session.targetId})]})]}),(0,r.jsx)("div",{className:"row",style:{textAlign:"center"},children:(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Server config ID:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.session.id})]})})]}),(0,r.jsxs)("div",{className:"tab-pane fade",id:"superconnections"+this.props.tableindx,role:"tabpanel","aria-labelledby":"superconnections-tab"+this.props.tableindx,children:[(0,r.jsx)("br",{}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-sm-5 "}),(0,r.jsx)("div",{className:"col-sm-2 text-center",children:(0,r.jsxs)("select",{className:"form-control form-control-sm health-status-select",id:"selectedConnection",name:"selectedConnection",onChange:function(s){e.handleGatewayselection(s)},children:[(0,r.jsx)("option",{value:"",children:"Select ServerID"}),(0,r.jsx)("option",{value:"0idLmsMk8e",children:"0idLmsMk8e"})]})})]}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Server ID:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.superConnection.serverId})]}),(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Time created:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.superConnection.timeCreated})]})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"ID:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.superConnection.id})]}),(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Group ID:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.superConnection.groupId})]})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Target ID:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.superConnection.targetId})]}),(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"IP:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.superConnection.ip})]})]}),(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Last Pong:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.superConnection.lastPong})]})})]}),(0,r.jsxs)("div",{className:"tab-pane fade",id:"contact"+this.props.tableindx,role:"tabpanel","aria-labelledby":"contact-tab"+this.props.tableindx,children:[" ",(0,r.jsx)("br",{}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-sm-5 "}),(0,r.jsx)("div",{className:"col-sm-2 text-center",children:(0,r.jsxs)("select",{className:"form-control form-control-sm health-status-select",id:"selectedClientId",name:"selectedClientId",onChange:function(s){e.handleGatewayselection(s)},children:[(0,r.jsx)("option",{value:"",children:"Select ClientId"}),(0,r.jsx)("option",{value:"0idLmsMk8e",children:"0idLmsMk8e"})]})})]}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-sm-4",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Bind ID:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.connection.bindId})]}),(0,r.jsxs)("div",{className:"col-sm-4",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Client configuration:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.connection.clientConfiguration})]}),(0,r.jsxs)("div",{className:"col-sm-4",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"ID:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.connection.id})]})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-sm-4",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Frees:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.connection.frees})]}),(0,r.jsxs)("div",{className:"col-sm-4",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Target ID:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.connection.targetId})]}),(0,r.jsxs)("div",{className:"col-sm-4",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Group ID:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.connection.groupId})]})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-sm-4",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Time created:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.connection.timeCreated})]}),(0,r.jsxs)("div",{className:"col-sm-4",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Allocations:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.connection.allocations})]}),(0,r.jsxs)("div",{className:"col-sm-4",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Total Allocations:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.connection.totalAllocations})]})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-sm-4",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Heap Alloc:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.connection.heapAlloc})]}),(0,r.jsxs)("div",{className:"col-sm-4",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Heap in use:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.connection.heapInUse})]}),(0,r.jsxs)("div",{className:"col-sm-4",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Heap released:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.connection.heapReleased})]})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-sm-4",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Heap Objects:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.connection.heapObjects})]}),(0,r.jsxs)("div",{className:"col-sm-4",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Report:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.connection.report})]}),(0,r.jsxs)("div",{className:"col-sm-4",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Last usage:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.connection.lastUsage})]})]})]}),(0,r.jsxs)("div",{className:"tab-pane fade show",id:"details"+this.props.tableindx,role:"tabpanel","aria-labelledby":"details-tab"+this.props.tableindx,children:[(0,r.jsx)("br",{}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-sm-4",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Mode:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.gatewayDetails.mode})]}),(0,r.jsxs)("div",{className:"col-sm-4",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Environment:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.gatewayDetails.environment})]}),(0,r.jsxs)("div",{className:"col-sm-4",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Gateway Port:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.gatewayDetails.gatewayPort})]})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-sm-4",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Zone:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.gatewayDetails.zone})]}),(0,r.jsxs)("div",{className:"col-sm-4",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"serviceUrl:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.gatewayDetails.serviceUrl})]}),(0,r.jsxs)("div",{className:"col-sm-4",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Host:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.gatewayDetails.host})]})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-sm-4",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"Token:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.gatewayDetails.token})]}),(0,r.jsxs)("div",{className:"col-sm-4",children:[(0,r.jsx)("small",{className:"font-weight-bold",children:"OS:"}),(0,r.jsx)("small",{className:"font-weight-normal theme-color",children:this.state.gatewayDetails.os})]})]})]})]})]})]})})}}]),t}(c.Component)}}]);
//# sourceMappingURL=157.09666e92.chunk.js.map