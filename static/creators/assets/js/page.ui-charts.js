!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=548)}({548:function(e,t,r){e.exports=r(549)},549:function(e,t,r){"use strict";r.r(t);r(550)},550:function(e,t){!function(){"use strict";var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"line",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n={labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Performance",data:[0,10,5,15,10,20,15,25,20,30,25,40]}]};Charts.create(e,t,r,n)},t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"roundedBar",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n={labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Sales",data:[25,20,30,22,17,10,18,26,28,26,20,32],barThickness:20}]};Charts.create(e,t,r,n)};e("#performanceChart"),e("#performanceAreaChart","area"),t("#ordersChart"),t("#ordersChartSwitch"),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"doughnut",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n={labels:["Desktop","Tablet","Mobile"],datasets:[{data:[60,25,15],hoverBorderColor:settings.colors.white}]};Charts.create(e,t,r,n)}("#devicesChart"),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"radar",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n={labels:["JavaScript","HTML","Flinto","Vue.js","Sketch","Priciple","CSS","Angular"],datasets:[{label:"Experience IQ",data:[30,35,33,32,31,30,28,36],pointHoverBorderColor:settings.colors.accent[400],pointHoverBackgroundColor:settings.colors.white}]};Charts.create(e,t,r,n)}("#topicIqChart"),$('[data-toggle="chart"]:checked').each((function(e,t){Charts.add($(t))}))}()}});