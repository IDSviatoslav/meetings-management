(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,t,n){e.exports=n(70)},39:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(12),r=n.n(c),o=(n(39),n(3)),i=n(18),u=n(32),s=n.n(u);var m=function(e){var t="http://127.0.0.1:8080",n=Object(a.useState)(),c=Object(o.a)(n,2),r=c[0],u=c[1],m=Object(a.useState)([]),d=Object(o.a)(m,2),E=d[0],p=d[1],f=Object(a.useState)(),h=Object(o.a)(f,2),b=h[0],g=h[1],v=Object(a.useState)(),j=Object(o.a)(v,2),x=j[0],y=j[1],O=Object(a.useState)(),k=Object(o.a)(O,2),I=k[0],T=k[1],C=Object(a.useState)([]),w=Object(o.a)(C,2),S=w[0],M=w[1],z=Object(a.useState)([]),D=Object(o.a)(z,2),A=D[0],G=D[1],B=Object(a.useState)([]),N=Object(o.a)(B,2),V=N[0],W=N[1];Object(a.useEffect)((function(){F(),R(),"CREATE"===e.workMode||"EDIT"===e.workMode&&null!=e.meetingId&&J(e.meetingId)}),[e.workMode]);var R=function(){fetch(t+"/employees",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){M(e)})).catch((function(e){return console.log("Error "+e)}))},F=function(e){fetch(t+"/departments",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){G(e)})).catch((function(e){return console.log("Error "+e)}))},J=function(e){fetch(t+"/meeting/"+e,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){T(e.theme),u(function(e){var t=e.split(" "),n=t[0].split("-"),a=t[1].split(":");return new Date(n[0],n[1]-1,n[2],a[0],a[1])}(e.time)),p(e.participants),g(e.department.id),y(e.organizer),P("dep-select",e.department.name),W(e.department.members),P("org-select",e.organizer.name)})).catch((function(e){return console.log("Error "+e)}))};function P(e,t){document.getElementById(e).value=t}function H(e){var t=new Date(e),n=""+(t.getMonth()+1),a=""+t.getDate(),l=t.getFullYear(),c=""+t.getHours(),r=""+t.getMinutes();return n.length<2&&(n="0"+n),a.length<2&&(a="0"+a),c.length<2&&(c="0"+c),r.length<2&&(r="0"+r),[l,n,a].join("-")+" "+[c,r].join(":")}return l.a.createElement("form",{class:"flexbox-vertical"},l.a.createElement("label",{class:"flexbox-horizontal"},l.a.createElement("label",{class:"bold-text"},"\u0422\u0435\u043c\u0430"),l.a.createElement("input",{type:"text",onChange:function(e){T(e.target.value)},value:I})),l.a.createElement("label",{class:"flexbox-horizontal"},l.a.createElement("label",{class:"bold-text"},"\u0412\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f"),l.a.createElement(s.a,{id:"time-form",value:r,onChange:u})),l.a.createElement("label",{class:"flexbox-horizontal"},l.a.createElement("l1",{class:"bold-text"},"\u041f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435"),l.a.createElement("select",{id:"dep-select",onChange:function(e){var t=e.target.options.selectedIndex;W(A[Object.keys(A)[t-1]].members),g(e.target.options[t].getAttribute("id-key"))}},l.a.createElement("option",{value:"none",selected:!0,disabled:!0,hidden:!0},"\u041f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435"),A.map((function(e){return l.a.createElement("option",{"id-key":e.id}," ",e.name)})))),l.a.createElement("label",{class:"flexbox-horizontal"},l.a.createElement("l1",{class:"bold-text"},"\u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439"),l.a.createElement("select",{id:"org-select",onChange:function(e){var t=e.target.options.selectedIndex,n=e.target.options[t].getAttribute("id-key"),a=S.find((function(e){return e.id==n}));y(a);var l=S.indexOf(a),c=S;-1!==l&&(c.splice(l,1),M(c))}},l.a.createElement("option",{value:"none",selected:!0,disabled:!0,hidden:!0},"\u0420\u0430\u0431\u043e\u0442\u043d\u0438\u043a"),V.map((function(e){return l.a.createElement("option",{"id-key":e.id},e.name)})))),l.a.createElement("div",null,l.a.createElement("l1",{id:"title"},"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438"),l.a.createElement("table",{id:"participants"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u0418\u043c\u044f"),l.a.createElement("th",null,"\u0412\u043e\u0437\u0440\u0430\u0441\u0442"),l.a.createElement("th",null,"\u041f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435")),E.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.age),l.a.createElement("td",null,e.department),l.a.createElement("td",{class:"link",onClick:function(){return function(e){M([].concat(Object(i.a)(S),[e]));var t=E.indexOf(e),n=E;-1!==t&&(n.splice(t,1),p(n))}(e)}},"\u0443\u0434\u0430\u043b\u0438\u0442\u044c"))}))))),l.a.createElement("label",{class:"flexbox-horizontal"},l.a.createElement("l1",{class:"bold-text"},"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a"),l.a.createElement("select",{id:"part-select"},l.a.createElement("option",{value:"none",selected:!0,disabled:!0,hidden:!0},"\u0412\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430"),S.map((function(e){return l.a.createElement("option",{"id-key":e.id}," ",e.name)}))),l.a.createElement("button",{onClick:function(e){if(e.preventDefault(),S.length){var t=function(e){var t=document.getElementById(e),n=t.selectedIndex;return t.options[n].getAttribute("id-key")}("part-select"),n=S.find((function(e){return e.id==t}));p([].concat(Object(i.a)(E),[n]));var a=S.indexOf(n),l=S;-1!==a&&(l.splice(a,1),M(l))}}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")),l.a.createElement("label",null,l.a.createElement("button",{onClick:function(n){n.preventDefault();var a="CREATE"===e.workMode?"POST":"PUT",l=[];if(0!=(null!=I&&null!=r&&null!=b&&null!=x&&null!=E)){E.map((function(e){return l.push(e.id)}));var c={method:a,headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.meetingId,theme:I,time:H(r),departmentId:b,organizerId:x.id,participantIds:l})};fetch(t+"/meeting",c).then((function(e){e.ok||(console.log("fail"),alert(e.json()))})).catch((function(e){return console.log("Error: "+e)}))}else alert("\u041d\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b")}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),l.a.createElement("div",{class:"button-divider"}),l.a.createElement("button",{onClick:function(){return e.ViewMeetings()}},"\u041d\u0430\u0437\u0430\u0434 (\u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c)")))},d=n(33),E=n.n(d);var p=function(e){var t,n,c,r="http://127.0.0.1:8080",i=Object(a.useState)([]),u=Object(o.a)(i,2),s=u[0],m=u[1],d=Object(a.useState)([]),p=Object(o.a)(d,2),f=p[0],h=p[1],b=Object(a.useState)([]),g=Object(o.a)(b,2),v=g[0],j=g[1],x=Object(a.useState)(),y=Object(o.a)(x,2),O=y[0],k=y[1];Object(a.useEffect)((function(){T(),I(),C()}),[]);var I=function(){fetch(r+"/meetings",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){m(e)})).catch((function(e){return console.log("Error "+e)}))},T=function(e){fetch(r+"/departments",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){j(e)})).catch((function(e){return console.log("Error "+e)}))},C=function(e){fetch(r+"/employees",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){h(e)})).catch((function(e){return console.log("Error "+e)}))};function w(e){var t=document.getElementById(e),n=t.selectedIndex;return t.options[n].getAttribute("id-key")}function S(e){var t=new Date(e),n=""+(t.getMonth()+1),a=""+t.getDate(),l=t.getFullYear(),c=""+t.getHours(),r=""+t.getMinutes();return n.length<2&&(n="0"+n),a.length<2&&(a="0"+a),c.length<2&&(c="0"+c),r.length<2&&(r="0"+r),[l,n,a].join("-")+" "+["00","00"].join(":")}return l.a.createElement("form",{class:"flexbox-vertical"},l.a.createElement("div",{class:"flexbox-horizontal"},l.a.createElement("div",{class:"flexbox-vertical"},l.a.createElement("label",{class:"flexbox-horizontal"},l.a.createElement("label",{class:"bold-text"},"\u0422\u0435\u043c\u0430"),l.a.createElement("input",{id:"theme-input",type:"text"})),l.a.createElement("label",{class:"flexbox-horizontal"},l.a.createElement("label",{class:"bold-text"},"\u0412\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f: "),l.a.createElement("div",null,l.a.createElement(E.a,{onChange:k,value:O})))),l.a.createElement("div",{class:"flexbox-vertical"},l.a.createElement("label",{class:"flexbox-horizontal"},l.a.createElement("label",{class:"bold-text"},"\u041f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435"),l.a.createElement("select",{id:"dep-select"},l.a.createElement("option",{value:"none",selected:!0},"\u041f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435"),v.map((function(e){return l.a.createElement("option",{"id-key":e.id}," ",e.name)})))),l.a.createElement("label",{class:"flexbox-horizontal"},l.a.createElement("label",{class:"bold-text"},"\u0421 \u0443\u0447\u0430\u0441\u0442\u0438\u0435\u043c"),l.a.createElement("select",{id:"empl-select"},l.a.createElement("option",{value:"none",selected:!0},"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a"),f.map((function(e){return l.a.createElement("option",{"id-key":e.id}," ",e.shortName)})))))),l.a.createElement("label",null,l.a.createElement("button",{onClick:function(e){e.preventDefault(),c=document.getElementById("theme-input").value,n=w("empl-select"),t=w("dep-select");var a=new URLSearchParams;null!==c&&a.append("theme",c),"undefined"!=typeof O&&null!==O&&(a.append("dateFrom",S(O[0])),a.append("dateTo",S(O[1]))),null!==t&&a.append("departmentId",Number.parseInt(t)),null!==n&&a.append("employeeId",Number.parseInt(n)),fetch(r+"/search?"+a.toString(),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return m(e)})).catch((function(e){return console.log("Error "+e)}))}},"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440"),l.a.createElement("div",{class:"button-divider"}),l.a.createElement("button",null,"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435")),l.a.createElement("div",null,l.a.createElement("table",{id:"meetingTable"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u0412\u0440\u0435\u043c\u044f"),l.a.createElement("th",null,"\u0422\u0435\u043c\u0430"),l.a.createElement("th",null,"\u041f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435"),l.a.createElement("th",null,"\u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439"),l.a.createElement("th",null,"\u0421\u043e\u0441\u0442\u0430\u0432")),s.map((function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.time),l.a.createElement("td",{class:"link",onClick:function(){return e.DisplayMeeting(t.id)}},t.theme),l.a.createElement("td",null,t.department.name),l.a.createElement("td",null,t.organizer.shortName),l.a.createElement("td",null,t.count))}))))),l.a.createElement("label",null,l.a.createElement("button",{onClick:function(){return e.DisplayMeeting()}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0435")))};var f=function(){var e=Object(a.useState)("VIEW"),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),i=Object(o.a)(r,2),u=i[0],s=i[1],d="VIEW"===n?l.a.createElement(p,{DisplayMeeting:function(e){null==e?c("CREATE"):(c("EDIT"),s(e))}}):l.a.createElement(m,{ViewMeetings:function(){c("VIEW")},meetingId:u,workMode:n});return l.a.createElement("div",{className:"wrapper"},d)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.9928c72f.chunk.js.map