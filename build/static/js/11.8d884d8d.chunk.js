(this["webpackJsonpec-admin-webui"]=this["webpackJsonpec-admin-webui"]||[]).push([[11],{55:function(e,s,a){e.exports=a.p+"static/media/dashboard_icon.6be7f00d.svg"},56:function(e,s,a){e.exports=a.p+"static/media/maintain_icon.cc95f992.svg"},57:function(e,s,a){e.exports=a.p+"static/media/monitor_icon.e1cc9434.svg"},58:function(e,s,a){e.exports=a.p+"static/media/report_icon.0aa31174.svg"},59:function(e,s,a){e.exports=a.p+"static/media/settings_icon.9c176efa.svg"},60:function(e,s,a){e.exports=a.p+"static/media/support_icon.2ae45f44.svg"},85:function(e,s,a){"use strict";a.r(s),a.d(s,"default",(function(){return f}));var i=a(2),n=a(3),t=a(5),r=a(4),c=a(0),p=a.n(c),o=a(55),l=a.n(o),m=a(56),u=a.n(m),d=a(57),h=a.n(d),w=a(58),b=a.n(w),v=a(59),E=a.n(v),g=a(60),N=a.n(g),f=function(e){Object(t.a)(a,e);var s=Object(r.a)(a);function a(e){return Object(i.a)(this,a),s.call(this,e)}return Object(n.a)(a,[{key:"render",value:function(){return p.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},p.a.createElement("a",{className:"navbar-brand pb-2",href:"#"},"\xa0"),p.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},p.a.createElement("span",{className:"navbar-toggler-icon"})),p.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},p.a.createElement("ul",{className:"navbar-nav lower-navbar"},this.props.permissions.accesses&&this.props.permissions.accesses.dashboard.haveAccess?p.a.createElement("li",{className:"Dashboard"===this.props.currentView?"nav-item active":"nav-item"},p.a.createElement("a",{id:"nav-dashboard",className:"nav-link",href:"#",onClick:this.props.clickEve.bind(this,"Dashboard")},p.a.createElement("img",{src:l.a,alt:"nav-dashboard"}),"Dashboard ",p.a.createElement("span",{className:"sr-only"},"(current)"))):null,this.props.permissions.accesses&&this.props.permissions.accesses.maintain.haveAccess?p.a.createElement("li",{id:"nav-maintain",className:"Maintain"===this.props.currentView||"Maintainagentcreate"===this.props.currentView||"Maintainagentupgrade"===this.props.currentView||"Maintainagentview"===this.props.currentView||"Requestcreate"===this.props.currentView||"RequestUpgrade"===this.props.currentView||"RequestView"===this.props.currentView||"LicenseCreate"===this.props.currentView||"LicenseView"===this.props.currentView||"LicenseUpgrade"===this.props.currentView||"Groupcreate"===this.props.currentView||"Groupupgrade"===this.props.currentView||"GroupView"===this.props.currentView?"nav-item dropdown active":"nav-item dropdown"},p.a.createElement("a",{className:"nav-link",href:"#",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},p.a.createElement("img",{src:u.a,alt:"nav-maintain"}),"Maintain"),p.a.createElement("ul",{className:"Maintain"===this.props.currentView||"Maintainagentcreate"===this.props.currentView||"Maintainagentupgrade"===this.props.currentView||"Maintainagentview"===this.props.currentView||"Requestcreate"===this.props.currentView||"RequestUpgrade"===this.props.currentView||"RequestView"===this.props.currentView||"LicenseCreate"===this.props.currentView||"LicenseView"===this.props.currentView||"LicenseUpgrade"===this.props.currentView||"Groupcreate"===this.props.currentView||"Groupupgrade"===this.props.currentView||"GroupView"===this.props.currentView?"dropdown-menu":"dropdown-menu hide","aria-labelledby":"navbarDropdownMenuLink"},this.props.permissions.accesses.maintain.subMenus.subscriptions.view||this.props.permissions.accesses.maintain.subMenus.subscriptions.create||this.props.permissions.accesses.maintain.subMenus.subscriptions.edit||this.props.permissions.accesses.maintain.subMenus.subscriptions.delete?p.a.createElement("li",{className:"dropdown-submenu"},p.a.createElement("a",{id:"nav-subscription",className:"dropdown-item",href:"#"},"License"),p.a.createElement("ul",{className:"dropdown-menu"},this.props.permissions.accesses.maintain.subMenus.subscriptions.create?p.a.createElement("li",null,p.a.createElement("a",{id:"nav-subscription-create",className:"dropdown-item",onClick:this.props.clickEve.bind(this,"LicenseCreate"),href:"#"},"Create")):null,this.props.permissions.accesses.maintain.subMenus.subscriptions.edit||this.props.permissions.accesses.maintain.subMenus.subscriptions.delete?p.a.createElement("li",null,p.a.createElement("a",{id:"nav-subscription-update-disable",className:"dropdown-item",onClick:this.props.clickEve.bind(this,"LicenseUpgrade"),href:"#"},"Update/Delete")):null,this.props.permissions.accesses.maintain.subMenus.subscriptions.view?p.a.createElement("li",null,p.a.createElement("a",{id:"nav-subscription-view-disable",className:"dropdown-item",onClick:this.props.clickEve.bind(this,"LicenseView"),href:"#"},"View")):null)):null,this.props.permissions.accesses.maintain.subMenus.groups.view||this.props.permissions.accesses.maintain.subMenus.groups.create||this.props.permissions.accesses.maintain.subMenus.groups.edit||this.props.permissions.accesses.maintain.subMenus.groups.delete?p.a.createElement("li",{className:"dropdown-submenu"},p.a.createElement("a",{id:"nav-group",className:"dropdown-item",href:"#"},"Groups"),p.a.createElement("ul",{className:"dropdown-menu"},this.props.permissions.accesses.maintain.subMenus.groups.create?p.a.createElement("li",null,p.a.createElement("a",{id:"nav-group-create",className:"dropdown-item",onClick:this.props.clickEve.bind(this,"Groupcreate"),href:"#"},"Create")):null,this.props.permissions.accesses.maintain.subMenus.groups.edit||this.props.permissions.accesses.maintain.subMenus.groups.delete?p.a.createElement("li",null,p.a.createElement("a",{id:"nav-group-view-delete",className:"dropdown-item",onClick:this.props.clickEve.bind(this,"Groupupgrade"),href:"#"},"Update/Delete")):null,this.props.permissions.accesses.maintain.subMenus.groups.view?p.a.createElement("li",null,p.a.createElement("a",{id:"nav-group-view-delete",className:"dropdown-item",onClick:this.props.clickEve.bind(this,"GroupView"),href:"#"},"View")):null)):null,this.props.permissions.accesses.maintain.subMenus.agents.create?p.a.createElement("li",{className:"dropdown-submenu"},p.a.createElement("a",{id:"nav-agent",className:"dropdown-item",href:"#"},"Launch Scripts"),p.a.createElement("ul",{className:"dropdown-menu"},this.props.permissions.accesses.maintain.subMenus.agents.create?p.a.createElement("li",null,p.a.createElement("a",{id:"nav-agent-create",className:"dropdown-item",onClick:this.props.clickEve.bind(this,"Maintainagentcreate"),href:"#"},"Create")):null,p.a.createElement("li",null,p.a.createElement("a",{id:"nav-agent-update-disable",className:"dropdown-item",onClick:this.props.clickEve.bind(this,"Maintainagentupgrade"),href:"#"},"View")))):null,this.props.permissions.accesses.maintain.subMenus.watchers.view||this.props.permissions.accesses.maintain.subMenus.watchers.create||this.props.permissions.accesses.maintain.subMenus.watchers.edit||this.props.permissions.accesses.maintain.subMenus.watchers.delete?p.a.createElement("li",{className:"dropdown-submenu"},p.a.createElement("a",{className:"dropdown-item",href:"#"},"Requests"),p.a.createElement("ul",{className:"dropdown-menu"},this.props.permissions.accesses.maintain.subMenus.watchers.create?p.a.createElement("li",null,p.a.createElement("a",{className:"dropdown-item",onClick:this.props.clickEve.bind(this,"Requestcreate"),href:"#"},"Create")):null,this.props.permissions.accesses.maintain.subMenus.watchers.edit||this.props.permissions.accesses.maintain.subMenus.watchers.delete?p.a.createElement("li",null,p.a.createElement("a",{className:"dropdown-item",onClick:this.props.clickEve.bind(this,"RequestUpgrade"),href:"#"},"Update/Disable")):null,this.props.permissions.accesses.maintain.subMenus.watchers.view?p.a.createElement("li",null,p.a.createElement("a",{className:"dropdown-item",onClick:this.props.clickEve.bind(this,"RequestView"),href:"#"},"View")):null)):null,this.props.permissions.accesses.maintain.subMenus.watchers.view||this.props.permissions.accesses.maintain.subMenus.watchers.create||this.props.permissions.accesses.maintain.subMenus.watchers.edit||this.props.permissions.accesses.maintain.subMenus.watchers.delete?p.a.createElement("li",{className:"dropdown-submenu"},p.a.createElement("a",{className:"dropdown-item",href:"#"},"Subscription"),p.a.createElement("ul",{className:"dropdown-menu"},this.props.permissions.accesses.maintain.subMenus.watchers.create?p.a.createElement("li",null,p.a.createElement("a",{className:"dropdown-item",onClick:this.props.clickEve.bind(this,"SubscriptionAdd"),href:"#"},"Add")):null)):null)):null,this.props.permissions.accesses&&this.props.permissions.accesses.monitor.haveAccess?p.a.createElement("li",{id:"nav-monitor",className:"Notification"===this.props.currentView||"Alert"===this.props.currentView||"View"===this.props.currentView?"nav-item dropdown active":"nav-item dropdown"},p.a.createElement("a",{className:"nav-link",href:"#",id:"navbarDropdownMenuLink1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},p.a.createElement("img",{src:h.a,alt:"nav-monitor"}),"Monitor"),p.a.createElement("ul",{className:"Notification"===this.props.currentView||"Alert"===this.props.currentView||"View"===this.props.currentView?"dropdown-menu":"dropdown-menu hide","aria-labelledby":"navbarDropdownMenuLink1"},this.props.permissions.accesses.monitor.subMenus.notifications.view?p.a.createElement("li",null,p.a.createElement("a",{id:"nav-notification",className:"dropdown-item",onClick:this.props.clickEve.bind(this,"Notification"),href:"#"},"Events")):null,this.props.permissions.accesses.monitor.subMenus.healthStatus.view?p.a.createElement("li",null,p.a.createElement("a",{id:"nav-healthStatus",className:"dropdown-item",onClick:this.props.clickEve.bind(this,"View"),href:"#"},"Health Operations")):null)):null,this.props.permissions.accesses&&this.props.permissions.accesses.reports.haveAccess?p.a.createElement("li",{className:"Report"===this.props.currentView?"nav-item active":"nav-item"},p.a.createElement("a",{className:"nav-link",href:"#",onClick:this.props.clickEve.bind(this,"Report")},p.a.createElement("img",{src:b.a,alt:"nav-report"}),"Report")):null,this.props.permissions.accesses&&this.props.permissions.accesses.settings.haveAccess?p.a.createElement("li",{className:"Usermanagement"===this.props.currentView||"WebHooks"===this.props.currentView||"UserProfile"===this.props.currentView?"nav-item dropdown active":"nav-item dropdown"},p.a.createElement("a",{className:"nav-link",href:"#",id:"navbarDropdownMenuLink2","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},p.a.createElement("img",{src:E.a,alt:"nav-settings"}),"Settings"),p.a.createElement("ul",{className:"Usermanagement"===this.props.currentView||"WebHooks"===this.props.currentView||"UserProfile"===this.props.currentView?"dropdown-menu":"dropdown-menu hide","aria-labelledby":"navbarDropdownMenuLink2"},p.a.createElement("li",null,p.a.createElement("a",{className:"dropdown-item",onClick:this.props.clickEve.bind(this,"WebHooks"),href:"#"},"Webhooks")),p.a.createElement("li",null,p.a.createElement("a",{className:"dropdown-item",onClick:this.props.clickEve.bind(this,"UserProfile"),href:"#"},"User Profile")))):null,this.props.permissions.accesses&&this.props.permissions.accesses.support.haveAccess?p.a.createElement("li",{className:"Support"===this.props.currentView?"nav-item active":"nav-item"},p.a.createElement("a",{className:"nav-link",href:"#",onClick:this.props.clickEve.bind(this,"Support")},p.a.createElement("img",{src:N.a,alt:"nav-support"}),"Support")):null)))}}]),a}(p.a.Component)}}]);
//# sourceMappingURL=11.8d884d8d.chunk.js.map