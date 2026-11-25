(function(){
var d=document,r=d.documentElement;r.classList.add('js');
var RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(RM)r.classList.add('rm');
setTimeout(function(){r.classList.add('ready')},RM?0:1750);
addEventListener('load',function(){setTimeout(function(){r.classList.add('ready')},2600)});
var cc={ink:'#15233F',acc:'#E2552F',bg:'#F3F4F6'};
var nv=d.querySelector('nav');d.querySelector('.mb').onclick=function(){nv.classList.toggle('open')};d.querySelectorAll('.lk a').forEach(function(a){a.addEventListener('click',function(){nv.classList.remove('open')})});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
d.querySelectorAll('.rv,.tri div').forEach(function(el){io.observe(el)});
var bar=d.getElementById('pb'),hd=d.querySelector('header'),px=[].slice.call(d.querySelectorAll('[data-px]')),tk=false;
function onS(){var y=scrollY,h=r.scrollHeight-innerHeight;bar.style.transform='scaleX('+(h>0?y/h:0)+')';hd.classList.toggle('sm',y>40||!!hd.dataset.solid);if(!RM)px.forEach(function(el){var rc=el.parentNode.getBoundingClientRect();el.style.transform='translate3d(0,'+(rc.top*-0.12)+'px,0)'});tk=false}
addEventListener('scroll',function(){if(!tk){tk=true;requestAnimationFrame(onS)}},{passive:true});onS();

if(d.getElementById('cv')){
var cv=d.getElementById('cv'),ctx=cv.getContext('2d'),hero=d.getElementById('top'),hc=d.getElementById('hc');
var W=0,H=0,mx=-9999,my=0,vis=true,pxm=0,pym=0,lx=-1,ly=0;
var L=[{k:1,gm:1,a:1,r:.14,s:120,p:30,sd:0}];
var S=[[]];
function size(){var rc=cv.getBoundingClientRect(),k=Math.min(devicePixelRatio||1,2);cv.width=rc.width*k;cv.height=rc.height*k;ctx.setTransform(k,0,0,k,0,0);W=rc.width;H=rc.height;if(RM)frame(0)}
function setM(e){var rc=hero.getBoundingClientRect();mx=e.clientX-rc.left;my=e.clientY-rc.top}
hero.addEventListener('pointermove',setM);
hero.addEventListener('pointerdown',setM);
hero.addEventListener('pointerleave',function(){mx=-9999});
new IntersectionObserver(function(es){vis=es[0].isIntersecting}).observe(hero);
function frame(ts){
 var t=ts/1000;
 if(vis&&W){
  ctx.clearRect(0,0,W,H);
  var has=mx>-9000,tgx=has?Math.max(-.5,Math.min(.5,(mx-W/2)/W)):0,tgy=has?Math.max(-.5,Math.min(.5,my/H-.5)):0;
  pxm+=(tgx-pxm)*.06;pym+=(tgy-pym)*.06;if(lx<0){lx=W*.5;ly=H*.46}lx+=((has?mx:W*.5)-lx)*.08;ly+=((has?my:H*.46)-ly)*.08;hero.style.setProperty('--lx',lx+'px');hero.style.setProperty('--ly',ly+'px');
  var base0=H*0.49,maxH=H*0.22,gf=W<600?20:32;
  ctx.lineCap='round';
  for(var l=0;l<L.length;l++){
   var Y=L[l],gap=gf*Y.gm,n=Math.floor(W/gap)+2,x0=(W-(n-1)*gap)/2,sh=-pxm*Y.p,base=base0-(1-Y.k)*H*0.09+pym*Y.p*0.4,lw=gap*0.36;
   if(S[l].length!==n){S[l]=[];for(var z=0;z<n;z++)S[l].push(0)}
   for(var i=0;i<n;i++){
    var x=x0+i*gap+sh,u=i/(n-1),env=Math.sin(u*Math.PI);
    var hh=Math.sin(i*12.9898+Y.sd)*43758.5453;hh=hh-Math.floor(hh);var tp=Math.min(1,u*7,(1-u)*7);var rest=(0.12+0.88*(0.55*hh+0.45*Math.abs(Math.sin(i*0.45+1.3))))*(0.25+0.75*tp);
    var dd=x-mx,bo=has?Math.exp(-(dd*dd)/(2*Y.s*Y.s)):0;
    S[l][i]+=(bo-S[l][i])*Y.r;
    var s=S[l][i],h=Math.max(3,Math.min(base-110,maxH*Y.k*(rest+s*0.55+s*0.06*Math.sin(t*7+i*.6))));
    var lit=Math.exp(-((x-lx)*(x-lx))/(2*240*240));ctx.globalAlpha=Y.a*(0.2+0.8*Math.min(1,lit+s));
    ctx.strokeStyle=cc.bg;ctx.lineWidth=lw;
    ctx.beginPath();ctx.moveTo(x,base-h);ctx.lineTo(x,base);ctx.stroke();
    ctx.strokeStyle=cc.acc;ctx.lineWidth=Math.max(1,lw*0.43);ctx.globalAlpha=Y.a*(0.25+0.75*Math.min(1,lit+s));
    ctx.beginPath();ctx.moveTo(x,base+lw*1.4);ctx.lineTo(x,base+lw*1.4+h*0.5);ctx.stroke();
   }
  }
  ctx.globalAlpha=1;
  if(!RM)hc.style.transform='translate3d('+(-pxm*14)+'px,'+(-pym*8)+'px,0)';
 }
 if(!RM)requestAnimationFrame(frame)
}
size();addEventListener('resize',size);
if(!RM)requestAnimationFrame(frame);
}

if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!RM){
 var cu=d.getElementById('cur'),x=-100,y=-100,tx=-100,ty=-100;cu.style.display='block';
 addEventListener('pointermove',function(e){tx=e.clientX;ty=e.clientY});
 (function lp(){x+=(tx-x)*.18;y+=(ty-y)*.18;cu.style.transform='translate3d('+x+'px,'+y+'px,0) translate(-50%,-50%)';requestAnimationFrame(lp)})();
 d.querySelectorAll('a,button,.cd,input,textarea').forEach(function(el){el.addEventListener('pointerenter',function(){cu.classList.add('big')});el.addEventListener('pointerleave',function(){cu.classList.remove('big')})});
}
var f=d.getElementById('f');
if(f){f.addEventListener('submit',function(e){
 e.preventDefault();
 var st=d.getElementById('st'),btn=f.querySelector('button[type=submit]'),ep=(window.ROOTIVE||{}).formEndpoint||'';
 if(!ep||ep.indexOf('YOUR_FORM_ID')>-1){st.textContent=f.dataset.pending;return}
 st.textContent=f.dataset.sending;btn.disabled=true;
 fetch(ep,{method:'POST',body:new FormData(f),headers:{'Accept':'application/json'}}).then(function(r){
  if(!r.ok)throw new Error('x');f.reset();st.textContent=f.dataset.ok;
 }).catch(function(){st.textContent=f.dataset.err}).then(function(){btn.disabled=false});
});}
})();
