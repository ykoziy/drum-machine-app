(this["webpackJsonpdrum-machine-app"]=this["webpackJsonpdrum-machine-app"]||[]).push([[0],{16:function(e,t,a){e.exports=a(27)},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),l=a(1),o=a(10),i=(a(26),a(5)),c=a(6),p=a(8),m=a(7),u=Object(l.b)((function(e){return{power:e.power}}),(function(e){return{switchPower:function(){return e({type:"SWITCH_POWER"})}}}))((function(e){var t=e.power,a=e.switchPower;return r.a.createElement("div",{className:"head"},r.a.createElement("div",{className:"head-text"},r.a.createElement("h1",null,"Drum Machine")),r.a.createElement("div",{className:"pwr-btn-container"},r.a.createElement("button",{className:"pwr-btn ".concat(t?"on":null),onClick:a},r.a.createElement("i",{className:"far fa-dot-circle"}))))})),h=function(e){return r.a.createElement("div",{className:"drum-machine"},e.left,e.right)},d=["Hip Hop Kit","80s Drums"],S=[{key:"Q",title:"Thud Rumy",url:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Dirty%20Hip%20Hop%20Kit/84[kb]dirty-hh-ThudRumy_KIK.wav.mp3"},{key:"W",title:"Slam SN",url:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Dirty%20Hip%20Hop%20Kit/96[kb]dirty-hh-Slam_SN.wav.mp3"},{key:"E",title:"Stanky BK",url:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Dirty%20Hip%20Hop%20Kit/104[kb]dirty-hh-Stanky_BK.wav.mp3"},{key:"A",title:"Tims SN",url:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Dirty%20Hip%20Hop%20Kit/72[kb]dirty-hh-Tims_SN.wav.mp3"},{key:"S",title:"Kane KIK",url:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Dirty%20Hip%20Hop%20Kit/55[kb]dirty-hh-Kane_KIK.wav.mp3"},{key:"D",title:"Old School SN",url:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Dirty%20Hip%20Hop%20Kit/59[kb]dirty-hh-OlSchool_SN.wav.mp3"},{key:"Z",title:"Trick CL",url:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Dirty%20Hip%20Hop%20Kit/87[kb]dirty-hh-Trick_CL.wav.mp3"},{key:"X",title:"Go Brooklyn SN",url:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Dirty%20Hip%20Hop%20Kit/98[kb]dirty-hh-GoBrooklyn_SN.wav.mp3"},{key:"C",title:"Edgy SN",url:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Dirty%20Hip%20Hop%20Kit/107[kb]dirty-hh-Edgy_SN.wav.mp3"}],k=[{key:"Q",title:"Beat Drum 1",url:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/8[kb]80s-Bdrum1.aif.mp3"},{key:"W",title:"Cowbell",url:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/14[kb]80s-COWBELL1.aif.mp3"},{key:"E",title:"Tamb 1",url:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/20[kb]80s-TAMB1.aif.mp3"},{key:"A",title:"Tom 1",url:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/15[kb]80s-TOM1.aif.mp3"},{key:"S",title:"Tom 2",url:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/15[kb]80s-TOM2.aif.mp3"},{key:"D",title:"Tom 3",url:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/22[kb]80s-TOM3.aif.mp3"},{key:"Z",title:"Tom 5",url:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/15[kb]80s-TOM5.aif.mp3"},{key:"X",title:"HH Close 2",url:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/5[kb]80s-HHCLOSE2.aif.mp3"},{key:"C",title:"Crash 1",url:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/83[kb]80s-CRASH1.aif.mp3"}],v=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleClick=function(e){var t=e.currentTarget.querySelector("audio");n.playAudio(t),n.props.onClick(e.target.id)},n.handleKeyPress=function(e){var t=n.props,a=t.text,r=t.power,s=t.soundName;if(a.toLowerCase()===e.key.toLowerCase()&&r){var l=document.getElementById(a);n.playAudio(l),n.pressDrumPad(),n.props.onClick(s)}},n.state={padClass:""},n}return Object(c.a)(a,[{key:"playAudio",value:function(e){e.volume=this.props.volume,e.currentTime=0,e.play()}},{key:"switchButtonState",value:function(){""===this.state.padClass?this.setState({padClass:"active"}):this.setState({padClass:""})}},{key:"pressDrumPad",value:function(){var e=this;this.props.power&&(this.switchButtonState(),setTimeout((function(){return e.switchButtonState()}),100))}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this,t=this.props,a=t.text,n=t.soundName,s=t.url,l=t.power,o="drum-pad ".concat(this.state.padClass),i=!l;return r.a.createElement("button",{disabled:i,className:o,id:n,onClick:function(t){return e.handleClick(t)}},r.a.createElement("audio",{className:"clip",id:a,src:s}),a)}}]),a}(n.Component),E=Object(l.b)((function(e){return{power:e.power,volumeVal:e.volumeVal,bankName:e.bankName}}),(function(e){return{pressPad:function(t){return e(function(e){return{type:"PRESS_PAD",padName:e}}(t))}}}))((function(e){var t=e.power,a=e.volumeVal,n=e.bankName,s=e.pressPad,l=n===d[0]?S:k;return r.a.createElement("div",{className:"button-panel"},l.map((function(e,n){return r.a.createElement(v,{key:"btn-"+n,text:e.key,soundName:e.title,url:e.url,volume:a,power:t,onClick:s})})))})),f=function(e){return r.a.createElement("div",{className:"control-panel"},e.children)},b=function(e){return Math.round(100*e)},w=Object(l.b)((function(e){return{power:e.power,volumeVal:e.volumeVal,padName:e.padName,bankName:e.bankName}}))((function(e){var t=e.power,a=e.volumeVal,n=e.padName,s=e.bankName,l="Volume: ".concat(b(a),"%");return r.a.createElement("div",{className:"screen",style:t?{background:"#509bd3"}:{background:"#232323"}},r.a.createElement("div",{className:"screen-info"},r.a.createElement("p",{className:"display"},t?n:"")),r.a.createElement("div",{className:"mode-info"},r.a.createElement("p",null,t?s:"")),r.a.createElement("div",{className:"volume-info"},r.a.createElement("p",null,t?l:"")))})),y=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).changeBank=function(){var e=n.props,t=e.bankName,a=e.switchBank;a(t===d[0]?d[1]:d[0])},n.handleClick=function(){n.props.power&&("left"===n.state.floating?n.setState({floating:"right"}):n.setState({floating:"left"})),n.changeBank()},n.state={floating:"left"},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"switch-container"},r.a.createElement("p",null,"Bank "),r.a.createElement("div",{className:"switch",onClick:this.handleClick},r.a.createElement("div",{className:"sw-inner",style:{float:this.state.floating}})))}}]),a}(n.Component),N=Object(l.b)((function(e){return{power:e.power,bankName:e.bankName}}),(function(e){return{switchBank:function(t){return e(function(e){return{type:"SWITCH_BANK",bankName:e}}(t))}}}))(y),g=Object(l.b)((function(e){return{power:e.power,volumeVal:e.volumeVal}}),(function(e){return{adjustVolume:function(t){return e({type:"ADJUST_VOLUME",volume:t.target.value})}}}))((function(e){var t=e.power,a=e.volumeVal,n=e.adjustVolume;return r.a.createElement("div",{className:"volume"},r.a.createElement("i",{className:"fas fa-volume-down"}),r.a.createElement("input",{type:"range",min:"0",max:"100",className:"slider",id:"volume-range",value:b(a),onChange:t?n:void 0}),r.a.createElement("i",{className:"fas fa-volume-up"}))})),T=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"drum-container"},r.a.createElement(u,null),r.a.createElement(h,{left:r.a.createElement(E,null),right:r.a.createElement(f,null,r.a.createElement(w,null),r.a.createElement(N,null),r.a.createElement(g,null))}))}}]),a}(n.Component),H=a(3);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=Object(o.b)((function(e,t){switch(t.type){case"SWITCH_POWER":return Object(H.a)(Object(H.a)({},e),{},{power:!e.power,padName:""});case"ADJUST_VOLUME":return Object(H.a)(Object(H.a)({},e),{},{volumeVal:t.volume/100});case"PRESS_PAD":return Object(H.a)(Object(H.a)({},e),{},{padName:t.padName});case"SWITCH_BANK":return Object(H.a)(Object(H.a)({},e),{},{bankName:t.bankName,padName:""});default:return e}}),{power:!0,volumeVal:.5,padName:"",bankName:"Hip Hop Kit"});Object(s.render)(r.a.createElement(l.a,{store:D},r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.3cc658c4.chunk.js.map