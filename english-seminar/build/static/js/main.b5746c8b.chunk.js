(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(44)},42:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),s=a.n(i),o=a(3),c=a(5),l=a(4),u=a(6),d=a(7),f=a(11),m=a(2),h=a.n(m),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).buttonRef=r.a.createRef(),a.ballRef=r.a.createRef(),a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){h()({targets:this.buttonRef.current}),h()({targets:this.ballRef.current,translateY:["-350%","300%"],translateX:["-50%","-50%"],opacity:[1,0],loop:!0,duration:800,direction:"alternate",easing:"easeInCubic"})}},{key:"render",value:function(){var e=this.props,t=e.state,a=e.dark;return r.a.createElement("div",{className:"scroll-button "+t+(a?" dark":""),ref:this.buttonRef,onClick:this.handleClick.bind(this)},r.a.createElement("div",{className:"ball",ref:this.ballRef}))}},{key:"handleClick",value:function(e){this.props.onClick&&this.props.onClick()}}]),t}(r.a.Component),g=a(13),v=a.n(g),R=a(16),y=a(45),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).render=function(){return r.a.createElement("div",{className:"thesis-component",style:{height:a.props.currentProng?"100vh":"auto"},ref:a.props.reference},r.a.createElement("div",{className:"caption",ref:a.captionRef},r.a.createElement("span",{className:"emphasis"},"Both"),r.a.createElement("span",null," characters provide the same function in "),r.a.createElement("span",{className:"emphasis"},"both"),r.a.createElement("span",null," plays.")),r.a.createElement("div",{className:"prongs-container",ref:a.prongsContainerRef},r.a.createElement("div",{className:"prong",ref:a.consulterProngRef},r.a.createElement(y.a,{to:{pathname:"/consulters",state:{shouldUpdate:!0}}},"The ",r.a.createElement("span",{className:"emphasis"},"Consulter"))),r.a.createElement("div",{className:"prong",ref:a.mediatorProngRef},r.a.createElement(y.a,{to:{pathname:"/mediators",state:{shouldUpdate:!0}}},"The ",r.a.createElement("span",{className:"emphasis"},"Mediator"))),r.a.createElement("div",{className:"prong",ref:a.commentatorProngRef},r.a.createElement(y.a,{to:{pathname:"/commentators",state:{shouldUpdate:!0}}},"The ",r.a.createElement("span",{className:"emphasis"},"Commentator")))))},a.captionRef=r.a.createRef(),a.consulterProngRef=r.a.createRef(),a.commentatorProngRef=r.a.createRef(),a.mediatorProngRef=r.a.createRef(),a.prongsContainerRef=r.a.createRef(),a.commentatorSplashRef=r.a.createRef(),a.state={shouldSwitchPage:!1},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(R.a)(v.a.mark(function e(){var t,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("scrolling"!==this.props.scrollState){e.next=9;break}t=window.innerWidth-this.commentatorProngRef.current.offsetLeft+20,a=this.consulterProngRef.current.offsetLeft+this.consulterProngRef.current.offsetWidth+20,h()({targets:this.captionRef.current,opacity:0,duration:0}),h()({targets:this.commentatorProngRef.current,translateX:[0,t],translateY:[0,-200],duration:0}),h()({targets:this.mediatorProngRef.current,opacity:0,duration:0}),h()({targets:this.consulterProngRef.current,translateX:[0,-a],translateY:[0,200],duration:0}),e.next=16;break;case 9:if("scrolled"!==this.props.scrollState){e.next=16;break}return e.next=12,this.animateCaptionText();case 12:e.sent,h()({targets:this.commentatorProngRef.current,translateX:0,translateY:0,duration:1e3}),h()({targets:this.mediatorProngRef.current,opacity:1,duration:1e3}),h()({targets:this.consulterProngRef.current,translateX:0,translateY:0,duration:1e3});case 16:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){if(this.state.shouldSwitchPage)return h.a.timeline().add({targets:this.commentatorSplashRef.current,translateX:-window.innerWidth,duration:5e3,easing:"easeInQuad",delay:100}).add({targets:this.commentatorSplashRef.current,opacity:[1,0],duration:2e3,easing:"easeInQuad",offset:"-=2000"}),void h()({targets:void 0,opacity:[1,0],duration:0})}},{key:"animateCaptionText",value:function(){var e=Object(R.a)(v.a.mark(function e(){var t,a,n,r,i,s,o;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=["Both"," characters provide the same role in ","both"," plays."],(a=this.captionRef.current).style.opacity=1,n=a.getElementsByTagName("span"),r=0,i=[],s=function(e){var a=t[e];n[e].innerHTML="";for(var s=function(t){var s=r++,o=new Promise(function(r,i){return setTimeout(function(){n[e].innerHTML+=a[t],r("Good")},100*s)});i.push(o)},o=0;o<a.length;o++)s(o)},o=0;o<n.length;o++)s(o);return e.next=10,Promise.all(i);case 10:return e.abrupt("return",!0);case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"animationsFinished",value:function(){this.setState({shouldSwitchPage:!0})}}]),t}(r.a.Component);var E=function(){this.animationsManager=new w,this.mount=function(){window.addEventListener("scroll",a),a()},this.unmount=function(){window.removeEventListener("scroll",a)};var e=[],t=this;function a(a){t.onScroll(a),t.animationsManager.updateAnimationsFor(e)}this.onScroll=function(e){};var n=0;this.add=function(t){var a=n+++""+Date.now();return this.animationsManager.animatables[a]=t,e.push(a),this}};function w(){this.animatables={},this.updateAnimationsFor=function(e){var t=!0,a=!1,n=void 0;try{for(var r,i=e[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var s=r.value,o=this.animatables[s],c=this.animatables[s].target.current?this.animatables[s].target.current:this.animatables[s].target;if(Object.keys(c).includes("current"))break;var l=c.offsetTop,u=l-window.innerHeight;u=u<0?0:u,l=l>document.body.clientHeight-window.innerHeight?document.body.clientHeight-window.innerHeight:l;var d=(window.pageYOffset-u)/(l-u+c.offsetHeight);for(var f in c.style.transform="",o.keyframes)if(2==o.keyframes[f].length){var m=o.keyframes[f][0],h=o.keyframes[f][1];this.updateKeyframe(c,f,m,h,d)}}}catch(p){a=!0,n=p}finally{try{t||null==i.return||i.return()}finally{if(a)throw n}}},this.updateKeyframe=function(t,a,n,r,i){var s="";if(isNaN(n)){if("err"==(s=e(n)))return new ErrorEvent("Extension Error");n=parseInt(n.slice(0,-s.length))}if(isNaN(r)){if("err"==(s=e(r)))return new ErrorEvent("Extension Error");r=parseInt(r.slice(0,-s.length))}i>1&&(i=1),i<0&&(i=0);var o=(r-n)*i+n;"opacity"===a&&(t.style.opacity=o);for(var c=["rotate","rotateX","rotateY","translateX","translateY","scale","scaleX","scaleY"],l=0;l<c.length;l++){if(a===c[l]){var u=s;u||"translateX"!==a&&"translateY"!==a||(u="px"),t.style.transform+=a+"("+o+u}}};var e=function(e){var t="";if(0==e.length)return"Err";for(var a=e.length-1;a>=0;a--)if(e.charCodeAt(a)<48||e.charCodeAt(a)>57){if(a<e.length-3)return"Err";t=e[a]+t}return t}}var O=a(9),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).prevScrollPos=0,a.updateScrollState=function(e){a.state.scrollState!==e&&a.setState({scrollState:e})},a.state={presentationStarted:!1,scrollState:"noscroll"},a.water=new E,a.water.onScroll=a.handleScroll.bind(Object(f.a)(Object(f.a)(a))),a.titleRef=r.a.createRef(),a.subtitleRef=r.a.createRef(),a.water.add({target:a.titleRef,keyframes:{opacity:[1,.37],translateY:[0,window.innerHeight/2]}}).add({target:a.subtitleRef,keyframes:{opacity:[.37,1],translateY:[0,3*window.innerHeight/4]}}),a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.water.mount()}},{key:"componentWillUnmount",value:function(){this.water.unmount()}},{key:"render",value:function(){var e=this;this.state.presentationStarted;return r.a.createElement("div",{className:"landing-page"},this.props.navigationBar,r.a.createElement("div",{className:"title",ref:this.titleRef},"The Chorus and the Fool"),r.a.createElement("div",{className:"sub-title",ref:this.subtitleRef},"In Oedipus the King and King Lear"),r.a.createElement(O.Transition,{in:"noscroll"===this.state.scrollState,timeout:1e3},function(t){return r.a.createElement("div",{className:"start-button "+t,onClick:e.startPresentation.bind(e)},"Start Presentation")}),r.a.createElement(O.Transition,{in:"scrolling"===this.state.scrollState,timeout:1e3},function(t){return r.a.createElement(p,{state:t,onClick:function(){return e.leaveHomeScreen()}})}),r.a.createElement(b,{onChooseProng:function(t){return e.onChooseProng(t)},currentProng:this.state.currentProng,scrollState:this.state.scrollState}))}},{key:"handleScroll",value:function(e){this.prevScrollPos<window.pageYOffset?"noscroll"===this.state.scrollState?this.setState({scrollState:"scrolling"}):"scrolling"===this.state.scrollState&&window.pageYOffset>=2*window.innerHeight/3&&this.setState({scrollState:"scrolled"}):"scrolled"===this.state.scrollState&&window.pageYOffset<=window.innerHeight/2?this.setState({scrollState:"scrolling"}):"scrolling"===this.state.scrollState&&window.pageYOffset<=20&&this.setState({scrollState:"noscroll"}),this.prevScrollPos=window.pageYOffset}},{key:"componentDidUpdate",value:function(){"Commentator"===this.state.currentProng&&this.state.firstUpdate&&window.scroll({top:window.innerHeight,behavior:"smooth"})}},{key:"startPresentation",value:function(){window.scrollTo({top:.6*window.innerHeight,behavior:"smooth"}),this.setState({presentationStarted:!0})}},{key:"leaveHomeScreen",value:function(){var e=this;window.scrollTo({top:1.6*window.innerHeight,behavior:"smooth"}),this.updateScrollState("scrolling"),setTimeout(function(){e.updateScrollState("scrolled")},500)}}]),t}(r.a.Component),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).render=function(){var e="";return"exited"===a.props.state?e=" hidden":"entering"===a.props.state?e=" entering":"entered"===a.props.state&&(e=" entering entered"),r.a.createElement("div",{className:"commentator-splash-page",ref:a.props.reference},r.a.createElement("div",{className:"commentator"+e,ref:a.titleRef},"The ",r.a.createElement("span",{className:"emphasis"},"Commentator")),r.a.createElement("div",{className:"comic-relief"+e,ref:a.comicReliefRef},"Comic Relief"),r.a.createElement("div",{className:"humor"+e,ref:a.humorRef},"Humor"),r.a.createElement("div",{className:"always-something-say"+e,ref:a.alwaysSayRef},"Always has something to say"),r.a.createElement("div",{className:"voices-opinion"+e,ref:a.voicesOpinionRef},"Voices opinion no matter what"),r.a.createElement("div",{className:"peanut-gallery"+e,ref:a.peanutRef},"The Peanut Gallery"),r.a.createElement("div",{className:"usually-contradicts"+e,ref:a.contradictsRef},"Usually contradicts the authority"),r.a.createElement("div",{className:"never-ending-commentary"+e,ref:a.commentaryRef},"Never ending commentary"),r.a.createElement("div",{className:"no-authority"+e,ref:a.noAuthorityRef},"No Authority"),r.a.createElement("div",{className:"often-unheard"+e,ref:a.unheardRef},"Often go unheard"))},a.comicReliefRef=r.a.createRef(),a.humorRef=r.a.createRef(),a.alwaysSayRef=r.a.createRef(),a.voicesOpinionRef=r.a.createRef(),a.peanutRef=r.a.createRef(),a.contradictsRef=r.a.createRef(),a.commentaryRef=r.a.createRef(),a.noAuthorityRef=r.a.createRef(),a.unheardRef=r.a.createRef(),a.titleRef=r.a.createRef(),a.state={animated:!1},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;if("entered"===this.props.state&&!this.props.isAnimated){var t=h.a.timeline();h()({targets:this.titleRef.current,opacity:[0,1],delay:0,duration:1e3}),t.add({targets:this.alwaysSayRef.current,scale:[.1,1],translateX:[-window.innerWidth/2,0],opacity:[0,1],easing:"easeInOutQuad",offset:0,duration:3e3}).add({targets:this.comicReliefRef.current,duration:5e3,translateX:[-500,0],rotate:[90,90],easing:"easeInOutQuad",offset:0}).add({targets:this.humorRef.current,translateX:[window.innerWidth,0],rotateX:[360,0],duration:3500,easing:"easeInOutQuad",offset:0}).add({targets:this.commentaryRef.current,translateX:[-2*window.innerWidth,0],duration:6e3,offset:0,easing:"easeInQuad"}).add({targets:this.contradictsRef.current,translateX:[1e3,0],duration:5e3,offset:0,easing:"easeOutQuad"}).add({targets:this.noAuthorityRef.current,translateY:[-500,0],rotate:[-90,-90],duration:5e3,easing:"easeOutQuad",offset:0}).add({targets:this.unheardRef.current,translateX:[500,0],scale:[.5,1],easing:"easeInCubic",duration:3e3,offset:0}).add({targets:this.voicesOpinionRef.current,translateY:[500,0],opacity:[0,1],easing:"easeInOutQuad",duration:5e3,offset:0}).add({targets:this.peanutRef.current,translateX:[-500,0],translateY:[150,0],duration:6e3,offset:0,easing:"easeInOutQuad"}),t.finished.then(function(){e.animationsFinished()})}}},{key:"animationsFinished",value:function(){var e=this;this.setState({animated:!0},function(){e.props.animationsFinished()})}}]),t}(r.a.Component),k=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).pageRefs=[];for(var n=3*e.subprongs.length+2,i=0;i<n;i++)a.pageRefs.push(r.a.createRef());return a.state={count:n,currentPage:0},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"transitionPage",value:function(e){var t=this.state,a=t.count,n=t.currentPage;this.setState({currentPage:n+1<a?n+1:n})}},{key:"componentDidUpdate",value:function(){for(var e=0,t=this.state.currentPage;t>=0;t--)this.pageRefs[t].current.style.zIndex=100-e++,this.pageRefs[t].current.style.height="100vh";for(var a=this.state.count;a>this.state.count;a--)this.pageRefs[a].current.style.zIndex=100-e++,this.pageRefs[a].current.style.height="100vh"}},{key:"render",value:function(){var e=this,t=this.props.subprongs;return console.log(this.props.state),r.a.createElement("div",{className:"evidence-page "+this.props.state},r.a.createElement("div",{className:"evidence-landing",ref:this.pageRefs[0]},r.a.createElement("div",{className:"evidence-title"},"Evidence"),r.a.createElement(p,{onClick:function(){return e.transitionPage(0)}})),t.map(function(t,a){return r.a.createElement("div",{key:a},r.a.createElement("div",{className:"subprong-container evidence-container",ref:e.pageRefs[3*a+1]},r.a.createElement("div",{className:"subprong-title"},t.title),r.a.createElement(p,{onClick:function(){return e.transitionPage(3*a+1)},dark:!0})),r.a.createElement("div",{className:"quote-container blue evidence-container",ref:e.pageRefs[3*a+2]},r.a.createElement("div",{className:"quote-symbol"},"\u201c"),r.a.createElement("div",{className:"quote-lines"},r.a.createElement("div",{className:"inline-quote"},r.a.createElement("div",{className:"rectangle"}),r.a.createElement("div",{className:"quote-content"},t.quoteOedipus)),r.a.createElement("div",{className:"quote-author"},t.quoteOedipusAuthor)),r.a.createElement(p,{onClick:function(){return e.transitionPage(3*a+2)}})),r.a.createElement("div",{className:"quote-container red evidence-container",ref:e.pageRefs[3*a+3]},r.a.createElement("div",{className:"quote-symbol"},"\u201c"),r.a.createElement("div",{className:"quote-lines"},r.a.createElement("div",{className:"inline-quote"},r.a.createElement("div",{className:"rectangle"}),r.a.createElement("div",{className:"quote-content"},t.quoteLear)),r.a.createElement("div",{className:"quote-author"},t.quoteLearAuthor)),r.a.createElement(p,{onClick:function(){return e.transitionPage(3*a+3)}})))}),r.a.createElement(b,{reference:this.pageRefs[this.state.count-1]}))}}]),t}(r.a.Component),A={Consulter:[{title:"Subprong 1",quoteOedipus:"Quote here",quoteOedipusAuthor:"(Sophocles #)",quoteLear:"Lear quote",quoteLearAuthor:"(Act.Scene.Lines)"},{title:"Subprong 2",quoteOedipus:"Quote here",quoteOedipusAuthor:"(Sophocles #)",quoteLear:"Lear quote",quoteLearAuthor:"(Act.Scene.Lines)"},{title:"Subprong 3",quoteOedipus:"Quote here",quoteOedipusAuthor:"(Sophocles #)",quoteLear:"Lear quote",quoteLearAuthor:"(Act.Scene.Lines)"}],Mediator:[{title:"Subprong 1",quoteOedipus:"Quote here",quoteOedipusAuthor:"(Sophocles #)",quoteLear:"Lear quote",quoteLearAuthor:"(Act.Scene.Lines)"},{title:"Subprong 2",quoteOedipus:"Quote here",quoteOedipusAuthor:"(Sophocles #)",quoteLear:"Lear quote",quoteLearAuthor:"(Act.Scene.Lines)"},{title:"Subprong 3",quoteOedipus:"Quote here",quoteOedipusAuthor:"(Sophocles #)",quoteLear:"Lear quote",quoteLearAuthor:"(Act.Scene.Lines)"}],Commentator:[{title:"The Peanut Gallery",quoteOedipus:"Quote here",quoteOedipusAuthor:"(Sophocles #)",quoteLear:"Lear quote",quoteLearAuthor:"(Act.Scene.Lines)"},{title:"Subprong 2",quoteOedipus:"Quote here",quoteOedipusAuthor:"(Sophocles #)",quoteLear:"Lear quote",quoteLearAuthor:"(Act.Scene.Lines)"},{title:"Subprong 3",quoteOedipus:"Quote here",quoteOedipusAuthor:"(Sophocles #)",quoteLear:"Lear quote",quoteLearAuthor:"(Act.Scene.Lines)"}]},j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).commentatorSplashRef=r.a.createRef(),a.state={isAnimated:!1},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(){this.state.isAnimated&&(console.log("Is animated"),h()({targets:this.commentatorSplashRef.current,translateX:-window.innerWidth/2,opacity:[1,0],duration:4e3,easing:"easeInOutQuad"}))}},{key:"render",value:function(){var e=this;return console.log(this.state.isAnimated),r.a.createElement("div",{className:"commentator-page"},this.props.navigationBar,r.a.createElement(O.Transition,{in:!this.state.isAnimated,timeout:4e3},function(t){return r.a.createElement(N,{state:t,shouldAnimate:!e.state.isAnimated,animationsFinished:e.animationsFinished.bind(e),reference:e.commentatorSplashRef})}),r.a.createElement(O.Transition,{in:this.state.isAnimated,timeout:4e3},function(e){return r.a.createElement(k,{subprongs:A.Commentator,state:e})}))}},{key:"animationsFinished",value:function(){this.setState({isAnimated:!0}),console.log("Finished")}}]),t}(r.a.Component),q=(r.a.Component,function(e){return r.a.createElement("div",{className:e.className},r.a.createElement(y.a,{to:e.link},e.title))}),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).resizeListener=function(){a.setState({width:window.innerWidth})},a.state={width:window.innerWidth},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resizeListener)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeListener)}},{key:"render",value:function(){var e=this;return this.state.width>=800?r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-items"},this.props.navItems.map(function(t,a){var n="nav-item";return a===e.props.selected&&(n+=" selected"),e.props.lightBar||(n+=" dark"),r.a.createElement(q,{key:a,title:t.name,className:n,selected:e.props.selected===a,link:t.link})}))):r.a.createElement("nav",null,r.a.createElement(C,{navItems:this.props.navItems,colorState:this.props.lightBar?"light":"dark"}))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).default="default",a.expanded="expanded",a.firstLoad=!0,a.last=a.default,a.toggleHamburger=function(){a.setState({hamburgerState:a.state.hamburgerState===a.default?a.expanded:a.default})},a.state={hamburgerState:a.default},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state.hamburgerState===this.default?"nav-hidden":"animated bounceInDown nav-shown";this.firstLoad&&(t="nav-hidden",this.firstLoad=!1);var a=this.state.hamburgerState===this.default?"hidden":"",n=this.state.hamburgerState===this.default?"":"open";this.last=this.state.hamburgerState;this.state.hamburgerState,this.default;return r.a.createElement("div",{className:"mobile-nav-container"},r.a.createElement("div",{id:"nav-icon",className:n,onClick:this.toggleHamburger},r.a.createElement("span",{className:this.props.colorState}),r.a.createElement("span",{className:this.props.colorState}),r.a.createElement("span",{className:this.props.colorState}),r.a.createElement("span",{className:this.props.colorState})),r.a.createElement("div",{className:"mobile-nav-items-container "+t},this.props.navItems.map(function(t,n){return r.a.createElement("div",{key:n,className:a},r.a.createElement(y.a,{to:t.link,onClick:function(t){return e.toggleHamburger}},t.name))})))}}]),t}(n.Component),P=a(47),I=a(46),X=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).render=function(){var e="";return"exited"===a.props.state?e=" hidden":"entering"===a.props.state?e=" entering":"entered"===a.props.state&&(e=" entering entered"),r.a.createElement("div",{className:"mediator-splash-page",ref:a.props.reference},r.a.createElement("div",{className:"mediator"+e,ref:a.titleRef},"The ",r.a.createElement("span",{className:"emphasis"},"Mediator")),r.a.createElement("div",{className:"middleman"+e,ref:a.comicReliefRef},"Middle Man"),r.a.createElement("div",{className:"peace-maker"+e,ref:a.humorRef},"Peace Maker"),r.a.createElement("div",{className:"speaks-truth"+e,ref:a.alwaysSayRef},"Speaks the Truth"),r.a.createElement("div",{className:"in-between"+e,ref:a.voicesOpinionRef},"The In-Between"),r.a.createElement("div",{className:"voice-of-society"+e,ref:a.peanutRef},"Voice Of Society"),r.a.createElement("div",{className:"different-views"+e,ref:a.contradictsRef},"Represent Different ",r.a.createElement("br",null),"Points of View"),r.a.createElement("div",{className:"introduce"+e,ref:a.commentaryRef},"Introduce"),r.a.createElement("div",{className:"bridge"+e,ref:a.noAuthorityRef},"Bridge"),r.a.createElement("div",{className:"speak-cant"+e,ref:a.unheardRef},"Speak for those who can't"),r.a.createElement("div",{className:"open-up"+e,ref:a.openUpRef},"Open up conversation"),r.a.createElement("div",{className:"link-between"+e,ref:a.linkBetweenRef},"Link ",r.a.createElement("br",null),"between the poor and ",r.a.createElement("br",null)," Royalty"))},a.comicReliefRef=r.a.createRef(),a.humorRef=r.a.createRef(),a.alwaysSayRef=r.a.createRef(),a.voicesOpinionRef=r.a.createRef(),a.peanutRef=r.a.createRef(),a.contradictsRef=r.a.createRef(),a.commentaryRef=r.a.createRef(),a.noAuthorityRef=r.a.createRef(),a.unheardRef=r.a.createRef(),a.titleRef=r.a.createRef(),a.openUpRef=r.a.createRef(),a.linkBetweenRef=r.a.createRef(),a.state={animated:!1},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;if("entered"===this.props.state&&!this.props.isAnimated){var t=h.a.timeline();h()({targets:this.titleRef.current,opacity:[0,1],delay:0,duration:1e3}),t.add({targets:this.alwaysSayRef.current,scale:[.1,1],translateX:[-window.innerWidth/2,0],opacity:[0,1],easing:"easeInOutQuad",offset:0,duration:3e3}).add({targets:this.comicReliefRef.current,duration:5e3,translateX:[-500,0],rotate:[-90,-90],easing:"easeInOutQuad",offset:0}).add({targets:this.humorRef.current,translateX:[window.innerWidth,0],rotateX:[360,0],duration:3500,easing:"easeInOutQuad",offset:0}).add({targets:this.commentaryRef.current,translateX:[500,0],rotate:[-359,0],duration:5e3,offset:0}).add({targets:this.contradictsRef.current,translateX:[1e3,0],duration:5e3,offset:0,easing:"easeOutQuad"}).add({targets:this.noAuthorityRef.current,translateY:[-500,0],rotate:[-90,-90],duration:5e3,easing:"easeOutQuad",offset:0}).add({targets:this.unheardRef.current,translateX:[500,0],scale:[.5,1],easing:"easeInCubic",duration:3e3,offset:0}).add({targets:this.voicesOpinionRef.current,translateY:[-500,0],opacity:[0,1],easing:"easeInOutQuad",duration:5e3,offset:0}).add({targets:this.peanutRef.current,translateX:[-500,0],translateY:[150,0],duration:6e3,offset:0,easing:"easeInOutQuad"}).add({targets:this.openUpRef.current,translateY:[500,0],opacity:[0,1],easing:"easeInOutQuad",duration:5e3,offset:0}).add({targets:this.linkBetweenRef.current,translateX:[500,0],translateY:[-150,0],duration:6e3,offset:0,easing:"easeInOutQuad"}),t.finished.then(function(){e.animationsFinished()})}}},{key:"animationsFinished",value:function(){var e=this;this.setState({animated:!0},function(){e.props.animationsFinished()})}}]),t}(r.a.Component),Q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).commentatorSplashRef=r.a.createRef(),a.state={isAnimated:!1},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(){this.state.isAnimated&&(console.log("Is animated"),h()({targets:this.commentatorSplashRef.current,translateX:-window.innerWidth/2,opacity:[1,0],duration:4e3,easing:"easeInOutQuad"}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"commentator-page"},this.props.navigationBar,r.a.createElement(O.Transition,{in:!this.state.isAnimated,timeout:4e3},function(t){return r.a.createElement(X,{state:t,shouldAnimate:!e.state.isAnimated,animationsFinished:e.animationsFinished.bind(e),reference:e.commentatorSplashRef})}),r.a.createElement(O.Transition,{in:this.state.isAnimated,timeout:4e3},function(e){return r.a.createElement(k,{subprongs:A.Mediator,state:e})}))}},{key:"animationsFinished",value:function(){this.setState({isAnimated:!0}),console.log("Finished")}}]),t}(r.a.Component),T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).render=function(){var e="";return"exited"===a.props.state?e=" hidden":"entering"===a.props.state?e=" entering":"entered"===a.props.state&&(e=" entering entered"),r.a.createElement("div",{className:"consulter-splash-page",ref:a.props.reference},r.a.createElement("div",{className:"consulter"+e,ref:a.titleRef},"The ",r.a.createElement("span",{className:"emphasis"},"Consulter")),r.a.createElement("div",{className:"paradox-wise"+e,ref:a.comicReliefRef},"Paradoxically Wise"),r.a.createElement("div",{className:"wise"+e,ref:a.humorRef},"Wise"),r.a.createElement("div",{className:"points-faults"+e,ref:a.pointsFaultsRef},"Points Out Faults"),r.a.createElement("div",{className:"protective"+e,ref:a.alwaysSayRef},"Protective"),r.a.createElement("div",{className:"loyal"+e,ref:a.voicesOpinionRef},"Loyal"),r.a.createElement("div",{className:"mentor"+e,ref:a.peanutRef},"Mentor"),r.a.createElement("div",{className:"honest"+e,ref:a.contradictsRef},"Honest"),r.a.createElement("div",{className:"cooperative"+e,ref:a.cooperativeRef},"Cooperative"),r.a.createElement("div",{className:"knowledgable"+e,ref:a.commentaryRef},"Knowledgable Insight"),r.a.createElement("div",{className:"advocate"+e,ref:a.noAuthorityRef},"King's Advocate"),r.a.createElement("div",{className:"states-obvious"+e,ref:a.unheardRef},"States the obvious"))},a.comicReliefRef=r.a.createRef(),a.humorRef=r.a.createRef(),a.alwaysSayRef=r.a.createRef(),a.voicesOpinionRef=r.a.createRef(),a.peanutRef=r.a.createRef(),a.contradictsRef=r.a.createRef(),a.commentaryRef=r.a.createRef(),a.noAuthorityRef=r.a.createRef(),a.unheardRef=r.a.createRef(),a.titleRef=r.a.createRef(),a.pointsFaultsRef=r.a.createRef(),a.cooperativeRef=r.a.createRef(),a.state={animated:!1},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;if("entered"===this.props.state&&!this.props.isAnimated){var t=h.a.timeline();h()({targets:this.titleRef.current,opacity:[0,1],delay:0,duration:1e3}),t.add({targets:this.alwaysSayRef.current,scale:[.1,1],translateX:[-window.innerWidth/2,0],opacity:[0,1],easing:"easeInOutQuad",offset:0,duration:3e3}).add({targets:this.comicReliefRef.current,duration:5e3,translateX:[-500,0],rotate:[-90,-90],easing:"easeInOutQuad",offset:0}).add({targets:this.humorRef.current,translateX:[window.innerWidth,0],rotateX:[360,0],duration:3500,easing:"easeInOutQuad",offset:0}).add({targets:this.commentaryRef.current,translateX:[-2*window.innerWidth,0],duration:3e3,offset:0,easing:"easeInQuad"}).add({targets:this.contradictsRef.current,translateX:[1e3,0],duration:5e3,offset:0,easing:"easeOutQuad"}).add({targets:this.noAuthorityRef.current,translateY:[-500,0],duration:5e3,easing:"easeOutQuad",offset:0}).add({targets:this.unheardRef.current,translateX:[500,0],scale:[.5,1],rotate:[-90,-90],easing:"easeInCubic",duration:3e3,offset:0}).add({targets:this.voicesOpinionRef.current,translateY:[500,0],opacity:[0,1],easing:"easeInOutQuad",duration:5e3,offset:0}).add({targets:this.peanutRef.current,translateX:[-window.innerWidth,0],translateY:[150,0],duration:6e3,offset:0,easing:"easeInOutQuad"}).add({targets:this.pointsFaultsRef.current,translateX:[-500,0],translateY:[150,0],rotate:[-90,-90],duration:3e3,offset:0}).add({targets:this.cooperativeRef.current,translateX:[500,0],translateY:[150,0],duration:3e3,offset:0}),t.finished.then(function(){e.animationsFinished()})}}},{key:"animationsFinished",value:function(){var e=this;this.setState({animated:!0},function(){e.props.animationsFinished()})}}]),t}(r.a.Component),Y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).commentatorSplashRef=r.a.createRef(),a.state={isAnimated:!1},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(){this.state.isAnimated&&(console.log("Is animated"),h()({targets:this.commentatorSplashRef.current,translateX:-window.innerWidth/2,opacity:[1,0],duration:4e3,easing:"easeInOutQuad"}))}},{key:"render",value:function(){var e=this;return console.log(this.state.isAnimated),r.a.createElement("div",{className:"commentator-page"},this.props.navigationBar,r.a.createElement(O.Transition,{in:!this.state.isAnimated,timeout:4e3},function(t){return r.a.createElement(T,{state:t,shouldAnimate:!e.state.isAnimated,animationsFinished:e.animationsFinished.bind(e),reference:e.commentatorSplashRef})}),r.a.createElement(O.Transition,{in:this.state.isAnimated,timeout:4e3},function(e){return r.a.createElement(k,{subprongs:A.Consulter,state:e})}))}},{key:"animationsFinished",value:function(){this.setState({isAnimated:!0}),console.log("Finished")}}]),t}(r.a.Component),F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).render=function(){return r.a.createElement(P.a,null,r.a.createElement("div",null,r.a.createElement(I.a,{exact:!0,path:"/",component:function(){return r.a.createElement("div",null,r.a.createElement(S,{navigationBar:a.getNavBar(0,!0),updateScrollState:function(e){return a.updateScrollState(e)},beganScrolling:"noscroll"!==a.state.scrollState}))}}),r.a.createElement(I.a,{exact:!0,path:"/commentators",component:function(){return r.a.createElement(j,{navigationBar:a.getNavBar(3,!1)})}}),r.a.createElement(I.a,{exact:!0,path:"/mediators",component:function(){return r.a.createElement(Q,{navigationBar:a.getNavBar(2,!1)})}}),r.a.createElement(I.a,{exact:!0,path:"/consulters",component:function(){return r.a.createElement(Y,{navigationBar:a.getNavBar(2,!1)})}})))},a.navItems=[{name:"Home",link:"/"},{name:"The Consulters",link:"/consulters"},{name:"The Mediators",link:"/mediators"},{name:"The Commentators",link:"/commentators"}],a.getNavBar=function(e,t){return r.a.createElement(L,{navItems:a.navItems,selected:e,lightBar:t})},a.state={currentProng:null,firstUpdate:!0,scrollState:"noscroll",showingEvidence:!1},a}return Object(u.a)(t,e),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(42);s.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.b5746c8b.chunk.js.map