(this["webpackJsonpsmartgarden-assets-new"]=this["webpackJsonpsmartgarden-assets-new"]||[]).push([[0],{36:function(e,t,a){},37:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(28),i=a.n(s),r=a(12),l=a(6),o=(a(36),a(9)),u=a(2),d=a(3),b=(a(37),"4fafc201-1fb5-459e-8fcc-c5c9c331914b"),j="c3134125-b92d-479f-a437-2de8cea412e7",m="6bef33fc-dadc-408e-98e9-d6c8cb35e976",O="40a47f70-752b-4598-91ad-748cdbc7958a",f=a(29),h=a.n(f),k=a(17),g=a.n(k),x=a(0),v=null;var p=function(e){var t=e.temperatures,a=e.temperaturesGround,n=e.moistures,s=e.onCancel,i=Object(c.useRef)(null),r=Object(c.useRef)(null);return Object(c.useEffect)((function(){window.smartgarden.changeTitle("Details");v=new h.a(i.current.getContext("2d"),{type:"line",data:{datasets:[{label:"Luft",yAxisID:"y",backgroundColor:"rgba(255, 0, 0, 0.3)",borderColor:"rgba(255, 0, 0, 0.4)"},{label:"Boden",yAxisID:"y",backgroundColor:"rgba(0, 255, 0, 0.3)",borderColor:"rgba(0, 255, 0, 0.4)"},{label:"Feuchtigkeit",yAxisID:"y1",backgroundColor:"rgba(0, 0, 255, 0.3)",borderColor:"rgba(0, 0, 255, 0.4)",fill:!0}]},options:{animation:!1,scales:{y:{type:"linear",display:!0,position:"left",min:-20,max:40,ticks:{callback:function(e,t,a){return"".concat(e," \xb0C")}}},y1:{type:"linear",display:!0,position:"right",min:0,max:100,ticks:{callback:function(e,t,a){return"".concat(e," %")}},grid:{drawOnChartArea:!1}}}}}),g.a.modal(r.current).show()}),[]),Object(c.useEffect)((function(){v.data.labels=t.slice(Math.max(t.length-20,0)).map((function(e,t){return t})),v.data.datasets[0].data=t.slice(Math.max(t.length-20,0)),v.data.datasets[1].data=a.slice(Math.max(a.length-20,0)),v.data.datasets[2].data=n.slice(Math.max(n.length-20,0)),v.update()}),[n,t,a]),Object(x.jsx)("div",{className:"uk-section uk-section-small",children:Object(x.jsxs)("div",{className:"uk-container",children:[Object(x.jsx)("canvas",{style:{height:"60vh"},ref:i}),Object(x.jsx)("div",{className:"uk-margin",children:Object(x.jsx)("button",{className:"uk-button uk-button-default uk-width-1-1",type:"button",onClick:s,children:"Zur\xfcck"})})]})})};var N=function(e){var t=e.temperature,a=e.temperatureGround,c=e.moisture,n=e.watering,s=e.setShowDiagram,i=e.handleValveClick;return Object(x.jsxs)("div",{className:"uk-section uk-section-small",children:[Object(x.jsx)("div",{className:"uk-container",children:Object(x.jsxs)("div",{className:"uk-child-width-1-2 uk-grid-small uk-grid-match uk-text-center","uk-grid":"true",children:[Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"uk-card uk-card-default uk-card-body",children:[Object(x.jsx)("span",{className:"uk-display-block uk-text-large",children:Object(x.jsx)("i",{className:"fas fa-temperature-high"})}),Object(x.jsxs)("span",{className:"uk-h4",children:[t," \xb0C"]})]})}),Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"uk-card uk-card-default uk-card-body",children:[Object(x.jsx)("span",{className:"uk-display-block uk-text-large",children:Object(x.jsx)("i",{className:"fas fa-temperature-high"})}),Object(x.jsxs)("span",{className:"uk-h4",children:[a," \xb0C"]})]})}),Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"uk-card uk-card-default uk-card-body",children:[Object(x.jsx)("span",{className:"uk-display-block uk-text-large",children:Object(x.jsx)("i",{className:"fas fa-water"})}),Object(x.jsxs)("span",{className:"uk-h4",children:[c," %"]})]})}),Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"uk-card uk-card-default uk-card-body",onClick:i,children:[Object(x.jsx)("span",{className:"uk-display-block uk-text-large",children:Object(x.jsx)("i",{className:"fas fa-power-off"})}),Object(x.jsx)("span",{className:"uk-h4",children:"0"===n?"Aus":"An"})]})})]})}),Object(x.jsx)("div",{className:"uk-container uk-margin-top",children:Object(x.jsx)("button",{className:"uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom",onClick:function(){s(!0)},"uk-toggle":"true",children:Object(x.jsxs)("span",{children:[Object(x.jsx)("i",{className:"fas fa-chart-area"})," Details"]})})}),Object(x.jsx)("div",{className:"uk-container",children:Object(x.jsxs)(r.b,{className:"uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom",to:"/watering",children:[Object(x.jsx)("i",{className:"fas fa-hand-holding-water"})," Bew\xe4sserung"]})})]})},w=function(e){return String.fromCharCode.apply(null,new Uint8Array(e))},S=function(e){for(var t=new Uint8Array(e.length),a=0,c=e.length;a<c;a++)t[a]=e.charCodeAt(a);return t.buffer};var y=function(e){var t=e.connected,a=e.device,n=Object(c.useState)(!1),s=Object(u.a)(n,2),i=s[0],r=s[1],l=Object(c.useState)("0"),d=Object(u.a)(l,2),m=d[0],O=d[1],f=Object(c.useState)("0"),h=Object(u.a)(f,2),k=h[0],g=h[1],v=Object(c.useState)("0"),y=Object(u.a)(v,2),C=y[0],_=y[1],D=Object(c.useState)("0"),I=Object(u.a)(D,2),E=I[0],T=I[1],A=Object(c.useState)([]),P=Object(u.a)(A,2),M=P[0],B=P[1],G=Object(c.useState)([]),J=Object(u.a)(G,2),F=J[0],R=J[1],z=Object(c.useState)([]),L=Object(u.a)(z,2),U=L[0],V=L[1];return Object(c.useEffect)((function(){if(t&&null!==a){var e=function(){window.ble.read(a.id,b,"beb5483e-36e1-4688-b7f5-ea07361b26a8",(function(e){O(w(e)),B((function(t){return[].concat(Object(o.a)(t),[w(e)])}))}),(function(){})),window.ble.read(a.id,b,"a10b02a4-3b1c-45b5-a617-5648120f8e4c",(function(e){g(w(e)),R((function(t){return[].concat(Object(o.a)(t),[w(e)])}))}),(function(){})),window.ble.read(a.id,b,"9a0c0611-a48f-4dbc-bde2-31582e606ee5",(function(e){_(w(e)),V((function(t){return[].concat(Object(o.a)(t),[w(e)])}))}),(function(){})),window.ble.read(a.id,b,j,(function(e){T(w(e))}),(function(){}))};e();var c=setInterval(e,3e3);return function(){clearInterval(c)}}}),[t,a]),Object(x.jsxs)(x.Fragment,{children:[t&&!i&&Object(x.jsx)(N,{temperature:m,temperatureGround:k,moisture:C,watering:E,setShowDiagram:r,handleValveClick:function(){"1"===E?window.ble.write(a.id,b,j,S("0"),(function(e){T("0")})):window.ble.write(a.id,b,j,S("1"),(function(e){T("1")}))}}),t&&i&&Object(x.jsx)(p,{temperatures:M,temperaturesGround:F,moistures:U,onCancel:function(){r(!1)}})]})},C=a(11),_=a(5);var D=function(e){var t=e.device,a=Object(c.useState)(null),n=Object(u.a)(a,2),s=n[0],i=n[1],r=Object(c.useState)(null),l=Object(u.a)(r,2),o=l[0],d=l[1],j=Object(c.useState)(null),f=Object(u.a)(j,2),h=f[0],k=f[1],g=Object(c.useState)({dateTime:""|s,location:""|o,flowRate:""|h}),v=Object(u.a)(g,2),p=v[0],N=v[1],y=function(e){N((function(t){return Object(_.a)(Object(_.a)({},t),{},Object(C.a)({},e.target.name,e.target.value))}))};return Object(c.useEffect)((function(){t&&(window.ble.read(t.id,b,"4de76262-8d84-4ba6-bb3a-2f2716a6c28f",(function(e){i(w(e))}),(function(e){console.log(e)})),window.ble.read(t.id,b,m,(function(e){d(w(e))}),(function(e){console.log(e)})),window.ble.read(t.id,b,O,(function(e){k(w(e))}),(function(e){console.log(e)})))}),[t]),Object(c.useEffect)((function(){s&&N((function(e){return Object(_.a)(Object(_.a)({},e),{},{dateTime:s})})),o&&N((function(e){return Object(_.a)(Object(_.a)({},e),{},{location:o})})),h&&N((function(e){return Object(_.a)(Object(_.a)({},e),{},{flowRate:h})}))}),[s,o,h]),Object(x.jsx)("div",{className:"uk-section uk-section-small",children:Object(x.jsx)("div",{className:"uk-container",children:Object(x.jsxs)("form",{className:"uk-form-stacked",onSubmit:function(e){e.preventDefault(),window.ble.write(t.id,b,m,S(p.location),(function(e){})),window.ble.write(t.id,b,O,S(p.flowRate),(function(e){}))},children:[Object(x.jsx)("div",{className:"uk-margin",children:Object(x.jsxs)("div",{className:"uk-card uk-card-default uk-card-small uk-card-body",children:[Object(x.jsx)("label",{className:"uk-form-label uk-text-bold",children:"Datum und Uhrzeit"}),Object(x.jsx)("div",{className:"uk-form-controls uk-margin-small-top",children:Object(x.jsx)("input",{className:"uk-input",type:"date-time",name:"dateTime",disabled:"true",value:p.dateTime})})]})}),Object(x.jsx)("div",{className:"uk-margin",children:Object(x.jsxs)("div",{className:"uk-card uk-card-default uk-card-small uk-card-body",children:[Object(x.jsx)("label",{className:"uk-form-label uk-text-bold",children:"Standort des Ger\xe4ts"}),Object(x.jsx)("div",{className:"uk-form-controls uk-margin-small-top",children:Object(x.jsxs)("div",{className:"uk-inline uk-width-1-1",children:[Object(x.jsx)("button",{type:"button",className:"uk-form-icon uk-form-icon-flip","uk-icon":"icon: location",onClick:function(){navigator.geolocation.getCurrentPosition((function(e){d("".concat(e.coords.latitude,";").concat(e.coords.longitude))}),(function(e){console.log(e)}))}}),Object(x.jsx)("input",{className:"uk-input",type:"text",name:"location",value:p.location,onChange:y})]})})]})}),Object(x.jsx)("div",{className:"uk-margin",children:Object(x.jsxs)("div",{className:"uk-card uk-card-default uk-card-small uk-card-body",children:[Object(x.jsx)("label",{className:"uk-form-label uk-text-bold",children:"Flussrate in Liter/Minute"}),Object(x.jsx)("div",{className:"uk-form-controls uk-margin-small-top",children:Object(x.jsx)("input",{className:"uk-input",type:"text",name:"flowRate",value:p.flowRate,onChange:y})})]})}),Object(x.jsx)("div",{className:"uk-margin",children:Object(x.jsx)("button",{className:"uk-button uk-button-primary uk-width-1-1",type:"submit",children:"Speichern"})})]})})})};a(62);var I=function(e){var t=e.device,a=e.onClick;return Object(x.jsxs)("div",{className:"s-device",onClick:a,children:[Object(x.jsx)("h2",{className:"s-device__name",children:t.name}),Object(x.jsxs)("p",{className:"s-device__info",children:["id: ",t.id," RSSI: ",t.rssi]}),Object(x.jsx)("span",{className:"s-device__icon"}),Object(x.jsx)("span",{className:"s-device__arrow"})]})};a(63);var E=function(){return Object(x.jsxs)("div",{className:"s-loading",children:[Object(x.jsx)("span",{className:"s-loading__circle"}),Object(x.jsx)("span",{className:"s-loading__icon"}),Object(x.jsx)("span",{className:"s-loading__text",children:"Verbinde..."})]})};a(64);var T=function(e){return Object(x.jsxs)("div",{className:"s-loading",children:[Object(x.jsx)("span",{className:"s-loading__circle"}),Object(x.jsx)("span",{className:"s-loading__icon"}),Object(x.jsx)("span",{className:"s-loading__text",children:"Suche Ger\xe4te..."})]})};a(65),a(66);var A=function(){return Object(x.jsxs)("div",{className:"s-not-found",children:[Object(x.jsx)("span",{className:"s-not-found__icon"}),Object(x.jsx)("span",{className:"s-not-found__text",children:"Keine Ger\xe4te gefunden"})]})};var P=function(e){var t=e.isScanning,a=e.scan,n=e.devices,s=e.selectDevice,i=Object(c.useState)(!1),r=Object(u.a)(i,2),l=r[0],o=r[1];return Object(x.jsx)("div",{className:"uk-section uk-section-small",children:Object(x.jsxs)("div",{className:"uk-container",children:[l&&Object(x.jsx)(E,{}),t&&Object(x.jsx)(T,{}),!t&&0===n.length&&Object(x.jsx)(A,{}),n.length>0&&Object(x.jsx)("div",{children:n.map((function(e){return Object(x.jsx)(I,{device:e,onClick:function(){!function(e){window.confirm("M\xf6chtest Du Dich beim n\xe4chsten mal direkt mit diesem Ger\xe4t verbinden?")&&localStorage.setItem("deviceId",JSON.stringify(e)),o(!0),s(e)}(e)}},e.name)}))}),!t&&Object(x.jsx)("button",{className:"uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom",onClick:function(){a()},children:Object(x.jsxs)("span",{children:[Object(x.jsx)("i",{className:"fas fa-redo"})," Erneut suchen"]})})]})})},M=a(23);var B=function(e){for(var t=e.title,a=e.inputs,c=e.location,n=e.onInputChange,s=e.onSubmit,i=e.onCancel,r=e.onDelete,l=[],o=1;o<=60;o++)l.push(Object(x.jsxs)("option",{value:o,children:[o," ",1!==o?"Minuten":"Minute"]},o));var u=c.split(";"),d=u[0],b=u[1],j=new Date(Object(M.getSunrise)(d,b)),m=new Date(Object(M.getSunset)(d,b));return Object(x.jsx)("div",{className:"uk-section uk-section-small",children:Object(x.jsxs)("div",{className:"uk-container",children:[Object(x.jsx)("h3",{className:"uk-heading-line uk-text-center",children:t}),Object(x.jsxs)("form",{onSubmit:s,children:[Object(x.jsx)("div",{className:"uk-margin",children:Object(x.jsx)("div",{className:"uk-card uk-card-default uk-card-small uk-card-body",children:Object(x.jsxs)("div",{className:"uk-margin",children:[Object(x.jsx)("label",{className:"uk-form-label uk-text-bold",children:"Startzeit"}),Object(x.jsxs)("div",{className:"uk-form-controls uk-margin-small-top",children:[Object(x.jsx)("input",{className:"uk-radio",name:"mode",checked:"1"===a.mode,value:"1",onChange:n,type:"radio"})," ","Sonnenaufgang (",j.getHours(),":",j.getMinutes()," ","Uhr)"]}),Object(x.jsxs)("div",{className:"uk-form-controls uk-margin-small-top",children:[Object(x.jsx)("input",{className:"uk-radio",name:"mode",checked:"2"===a.mode,value:"2",onChange:n,type:"radio"})," ","Sonnenuntergang (",m.getHours(),":",m.getMinutes()," ","Uhr)"]}),Object(x.jsxs)("div",{className:"uk-form-controls uk-margin-small-top",children:[Object(x.jsx)("input",{className:"uk-radio",name:"mode",checked:"0"===a.mode,value:"0",onChange:n,type:"radio"})," ","Manuell",Object(x.jsx)("div",{className:"uk-form-controls uk-margin-small-top",children:Object(x.jsx)("input",{className:"uk-input",type:"time",name:"startTime",disabled:"0"!==a.mode,value:a.startTime,onChange:n})})]})]})})}),Object(x.jsx)("div",{className:"uk-margin",children:Object(x.jsxs)("div",{className:"uk-card uk-card-default uk-card-small uk-card-body",children:[Object(x.jsx)("label",{className:"uk-form-label uk-text-bold",children:"Dauer"}),Object(x.jsx)("div",{className:"uk-form-controls uk-margin-small-top",children:Object(x.jsx)("select",{className:"uk-select",name:"duration",value:a.duration,onChange:n,children:l})})]})}),Object(x.jsx)("div",{className:"uk-margin",children:Object(x.jsxs)("div",{className:"uk-card uk-card-default uk-card-small uk-card-body",children:[Object(x.jsx)("label",{className:"uk-form-label uk-text-bold",children:"Interval"}),Object(x.jsx)("div",{className:"uk-form-controls uk-margin-small-top",children:Object(x.jsxs)("select",{className:"uk-select",name:"interval",disabled:"0"!==a.mode,value:a.interval,onChange:n,children:[Object(x.jsx)("option",{value:"0",children:"3 mal t\xe4glich"}),Object(x.jsx)("option",{value:"1",children:"2 mal t\xe4glich"}),Object(x.jsx)("option",{value:"2",children:"1 mal t\xe4glich"}),Object(x.jsx)("option",{value:"3",children:"Alle zwei Tage"}),Object(x.jsx)("option",{value:"4",children:"Alle drei Tage"}),Object(x.jsx)("option",{value:"5",children:"Einmal die Woche"})]})})]})}),Object(x.jsx)("div",{className:"uk-margin",children:Object(x.jsxs)("div",{className:"uk-card uk-card-default uk-card-small uk-card-body",children:[Object(x.jsx)("label",{className:"uk-form-label uk-text-bold",children:"Smarte Bew\xe4sserung"}),Object(x.jsxs)("div",{className:"uk-form-controls uk-margin-small-top",children:[Object(x.jsx)("input",{className:"uk-checkbox",name:"smart",checked:a.smart,onChange:n,type:"checkbox"})," ","Sensoren verwenden"]})]})}),Object(x.jsx)("div",{className:"uk-margin-small",children:Object(x.jsx)("button",{className:"uk-button uk-button-primary uk-width-1-1",type:"submit",children:"Speichern"})}),Object(x.jsx)("div",{className:"uk-margin-small",children:Object(x.jsx)("button",{className:"uk-button uk-button-default uk-width-1-1",type:"button",onClick:i,children:"Zur\xfcck"})}),Object(x.jsx)("div",{className:"uk-margin-small",children:Object(x.jsx)("button",{className:"uk-button uk-button-default uk-width-1-1",type:"button",onClick:r,children:"L\xf6schen"})})]})]})})};a(67);var G=function(e){var t,a,c,n=e.program,s=e.label,i=e.onSelectProgramm,r=e.onSetProgramActive;return Object(x.jsxs)("div",{className:"s-program",onClick:i,children:[Object(x.jsx)("h2",{className:"s-program__name",children:s}),Object(x.jsxs)("p",{className:"s-program__info",children:[(a=n.mode,c=n.startTime,["".concat(c," Uhr"),"Sonnenaufgang","Sonnenuntergang"][a])," - ",n.duration," ","Min. - ",(t=n.interval,["3 mal t\xe4glich","2 mal t\xe4glich","1 mal t\xe4glich","Alle zwei Tage","Alle drei Tage","Einmal die Woche"][t])]}),Object(x.jsx)("span",{className:n.active?"s-program__active":"s-program__inactive",onClick:r}),Object(x.jsx)("span",{className:"s-program__arrow"})]})};a(68);var J=function(){return Object(x.jsxs)("div",{className:"s-program-not-found",children:[Object(x.jsx)("span",{className:"s-program-not-found__icon"}),Object(x.jsx)("span",{className:"s-program-not-found__text",children:"Noch keine Programme gespeichert"})]})};var F=function(e){var t=e.device,a=Object(c.useState)(JSON.parse(localStorage.getItem("programs_".concat(t.id)))||[]),n=Object(u.a)(a,2),s=n[0],i=n[1],r=function(){var e=0;return s.forEach((function(t,a){!0===t.active&&(e=a+1)})),e},l=Object(c.useState)(r()),d=Object(u.a)(l,2),j=d[0],O=d[1],f=Object(c.useState)(!1),h=Object(u.a)(f,2),k=h[0],g=h[1],v=Object(c.useState)(0),p=Object(u.a)(v,2),N=p[0],y=p[1],D=Object(c.useState)(""),I=Object(u.a)(D,2),E=I[0],T=I[1],A=Object(c.useState)(!1),P=Object(u.a)(A,2),M=P[0],F=P[1],R={mode:"0",startTime:"12:00",duration:6,interval:0,smart:0},z=Object(c.useState)(R),L=Object(u.a)(z,2),U=L[0],V=L[1],H=function(){y(0),F(!1),V(R)};return Object(c.useEffect)((function(){window.ble.read(t.id,b,m,(function(e){T(w(e))}),(function(){}))}),[t]),Object(x.jsxs)(c.Fragment,{children:[!(M||N>0)&&Object(x.jsx)("div",{className:"uk-section uk-section-small",children:Object(x.jsxs)("div",{className:"uk-container",children:[s.length>0&&0===j&&Object(x.jsx)("div",{"uk-alert":"true",children:"Es ist noch kein Programm aktiv."}),k&&Object(x.jsx)("div",{className:"uk-margin",children:Object(x.jsxs)("div",{"uk-alert":"true",children:[Object(x.jsx)("p",{children:"Aktives Programm wurde ver\xe4ndert. Die \xc4nderung muss an das Smartgarden Ger\xe4t \xfcbermittelt werden."}),Object(x.jsx)("button",{className:"uk-button uk-button-default uk-width-1-1",type:"button",onClick:function(){var e=s[r()-1];window.ble.write(t.id,b,"20090a72-b78e-4ba9-9df6-705182718eda",S("".concat(e.startTime.replace(":",""),";").concat(60*e.duration,";").concat(e.interval,";").concat(e.smart?"1":"0")),(function(){}),(function(){})),localStorage.setItem("programs_".concat(t.id),JSON.stringify(s)),g(!1)},children:"\xc4nderung Speichern"})]})}),0===s.length&&Object(x.jsx)(J,{}),s.length>0&&s.map((function(e,t){return Object(x.jsx)(G,{program:e,label:"Programm ".concat(t+1),onSelectProgramm:function(){var e;e=t+1,F(!1),y(e),V(s[e-1])},active:t+1===j,onSetProgramActive:function(e){!function(e,t){e.stopPropagation(),O(t),g(!0);var a=Object(o.a)(s);a.forEach((function(e){e.active=!1})),a[t-1].active=!0}(e,t+1)}},t+1)})),Object(x.jsxs)("button",{className:"uk-button uk-button-primary uk-width-1-1 uk-padding-remove-horizontal",type:"button",onClick:function(){F(!0),y(0),V(R)},children:[Object(x.jsx)("span",{"uk-icon":"icon: plus"})," Hinzuf\xfcgen"]})]})}),(M||N>0)&&Object(x.jsx)(B,{title:M?"Neues Programm":"Programm bearbeiten",inputs:U,location:E,onInputChange:function(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value;V((function(a){return Object(_.a)(Object(_.a)({},a),{},Object(C.a)({},e.target.name,t))}))},onCancel:H,onDelete:function(){var e=Object(o.a)(s);e.splice(N-1,1),i(e),localStorage.setItem("programs_".concat(t.id),JSON.stringify(e)),H()},onSubmit:function(e){if(e.preventDefault(),M)i((function(e){return[].concat(Object(o.a)(e),[Object(_.a)({},U)])})),localStorage.setItem("programs_".concat(t.id),JSON.stringify([].concat(Object(o.a)(s),[Object(_.a)({},U)])));else{var a=Object(o.a)(s);a[N-1]=Object(_.a)({},U),i(a),localStorage.setItem("programs_".concat(t.id),JSON.stringify(a)),N===j&&g(!0)}y(0),F(!1),V(R)}})]})},R=a(31),z=a.n(R);a(69);var L=function(){var e=Object(d.f)(),t=Object(d.g)(),a=JSON.parse(localStorage.getItem("deviceId")),n=Object(c.useState)(!0),s=Object(u.a)(n,2),i=s[0],r=s[1],l=Object(c.useState)(!1),j=Object(u.a)(l,2),m=j[0],O=j[1],f=Object(c.useState)(a),h=Object(u.a)(f,2),k=h[0],v=h[1],p=Object(c.useState)([]),N=Object(u.a)(p,2),w=N[0],S=N[1],C=function(){r(!0),S([]),window.ble.scan([b],10,(function(e){S((function(t){return[].concat(Object(o.a)(t),[e])}))}),(function(){})),setTimeout((function(){r(!1)}),1e4)};return Object(c.useEffect)((function(){g.a.use(z.a)})),Object(c.useEffect)((function(){if(t){var e="",a="";switch(t.pathname){case"/home":e="Dashboard",a="dashboard",window.smartgarden.showBottomBar("title",(function(){}),(function(){}));break;case"/watering":e="Bew\xe4sserung",a="watering";break;case"/settings":e="Einstellungen",a="settings";break;default:e="Ger\xe4teauswahl",a="select"}window.smartgarden.changeTitle(e,(function(){}),(function(){})),window.smartgarden.setBottomBarItem(a,(function(){}),(function(){}))}}),[t]),Object(c.useEffect)((function(){k||"/"===t.pathname||e.replace("/")}),[e,k,t]),Object(c.useEffect)((function(){C()}),[]),Object(c.useEffect)((function(){k&&(r(!1),setTimeout((function(){window.ble.connect(k.id,(function(){O(!0),e.replace("/home")}),(function(t){m&&(O(!1),e.replace("/"),alert("Das Ger\xe4t hat die Verbindung beendet."),window.smartgarden.hideBottomBar(),window.ble.disconnect(k.id),C())}))}),100))}),[k,e,m]),Object(x.jsxs)(d.c,{children:[Object(x.jsx)(d.a,{exact:!0,path:"/watering",children:Object(x.jsx)(F,{device:k})}),Object(x.jsx)(d.a,{exact:!0,path:"/settings",children:Object(x.jsx)(D,{device:k})}),Object(x.jsx)(d.a,{exact:!0,path:"/home",children:Object(x.jsx)(y,{device:k,connected:m})}),Object(x.jsx)(d.a,{exact:!0,path:"/",children:Object(x.jsx)(P,{selectDevice:function(e){v(e)},isScanning:i,scan:C,devices:w})})]})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,74)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))},V=Object(l.a)();document.addEventListener("deviceready",(function(){i.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(r.a,{history:V,children:Object(x.jsx)(L,{})})}),document.getElementById("root"))}),!1),window.App={goTo:function(e){switch(e){case"select":window.location.href="#/";break;case"dashboard":window.location.href="#/home";break;case"watering":window.location.href="#/watering";break;case"settings":window.location.href="#/settings";break;default:window.location.href="#/home"}}},U()}},[[73,1,2]]]);
//# sourceMappingURL=main.d0b0fcae.chunk.js.map