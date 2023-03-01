(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(9),a=n.n(i),s=n(2),c=n(3),r=n(4),l=n(5),d=n(7),o=n(6),h=n(1),m=n.n(h),f=(n(14),n(15),n(0)),u=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={offset:0,itemShift:0},e.endOfSlides=!1,e.startOfSlides=!0,e.handleScroll=function(t,n,i,a,s,c){var r=e.state,l=r.offset,d=r.itemShift,o=t*n,h=a*n-s*n,m="next"===i?l+o:l-o,f="next"===i?d+t:d-t;f<0&&(f=0),f>a-s&&(f=a-s),c&&(m>h&&e.endOfSlides&&(m=0,e.endOfSlides=!1,e.startOfSlides=!0),m>=h&&!e.endOfSlides&&(m=h,e.endOfSlides=!0),m<0&&e.startOfSlides&&(m=h,e.startOfSlides=!1,e.endOfSlides=!0),m<=0&&!e.startOfSlides&&(m=0,e.startOfSlides=!0)),c||(m>=h&&(m=h),m<0&&(m=0)),e.setState({offset:m,itemShift:f})},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.itemWidth,i=t.frameSize,a=t.images,s=this.state,c=s.offset,r=s.itemShift;c>0&&n!==e.itemWidth&&this.setState({offset:n*r}),i>e.frameSize&&this.handleScroll(0,n,"next",a.length,i,!1)}},{key:"render",value:function(){var e=this,t=this.state,n=t.offset,i=t.itemShift,a=this.props,s=a.images,c=a.itemWidth,r=a.frameSize,l=a.step,d=a.animationDuration,o=a.infinite;return Object(f.jsxs)("div",{className:"Carousel",style:{maxWidth:"".concat(r*c,"px")},children:[Object(f.jsx)("ul",{className:"Carousel__list",style:{right:"".concat(n,"px"),transitionDuration:"".concat(d,"ms")},children:s.map((function(e,t){return Object(f.jsx)("li",{children:Object(f.jsx)("img",{src:e,alt:"slide ".concat(t+1),width:c})},e)}))}),Object(f.jsxs)("div",{className:"containerBtn",children:[Object(f.jsx)("button",{type:"button",className:"button prev",onClick:function(){e.handleScroll(l,c,"prev",s.length,r,o)},disabled:!o&&0===i,children:"\u21da"}),Object(f.jsx)("button",{"data-cy":"next",type:"button",className:"button next",onClick:function(){e.handleScroll(l,c,"next",s.length,r,o)},disabled:!o&&i===s.length-r,children:"\u21db"})]})]})}}]),n}(m.a.Component),j=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:130,frameSize:3,step:3,animationDuration:1e3,infinite:!1},e.handleChange=function(t){e.setState((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(s.a)({},t.target.name,+t.target.value))}))},e.handleChangeInfinite=function(t){e.setState((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(s.a)({},t.target.name,t.target.checked))}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.images,i=t.itemWidth,a=t.frameSize,s=t.step,c=t.animationDuration,r=t.infinite;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",n.length," images"]}),Object(f.jsx)(u,{images:n,itemWidth:i,frameSize:a,step:s,animationDuration:c,infinite:r}),Object(f.jsxs)("div",{className:"form",children:[Object(f.jsxs)("label",{htmlFor:"itemId",children:[Object(f.jsx)("input",{type:"number",min:0,id:"itemId",value:i,name:"itemWidth",onChange:function(t){return e.handleChange(t)}}),Object(f.jsx)("span",{children:"slide width in px"})]}),Object(f.jsxs)("label",{htmlFor:"frameId",children:[Object(f.jsx)("input",{value:a,type:"number",min:1,id:"frameId",name:"frameSize",onChange:function(t){return e.handleChange(t)}}),Object(f.jsx)("span",{children:"slide frame Size"})]}),Object(f.jsxs)("label",{htmlFor:"stepId",children:[Object(f.jsx)("input",{value:s,type:"number",min:1,id:"stepId",name:"step",onChange:function(t){return e.handleChange(t)}}),Object(f.jsx)("span",{children:"slide step"})]}),Object(f.jsxs)("label",{htmlFor:"animationId",children:[Object(f.jsx)("input",{value:c,name:"animationDuration",type:"number",min:0,id:"animationId",onChange:function(t){return e.handleChange(t)}}),Object(f.jsx)("span",{children:"slide animation time"})]}),Object(f.jsxs)("label",{htmlFor:"infinite",children:[Object(f.jsx)("input",{type:"checkbox",name:"infinite",defaultChecked:!1,id:"infinite",onChange:function(t){return e.handleChangeInfinite(t)}}),Object(f.jsx)("span",{children:"infinite slides"})]})]})]})}}]),n}(m.a.Component),b=j;a.a.render(Object(f.jsx)(b,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.25622cb1.chunk.js.map