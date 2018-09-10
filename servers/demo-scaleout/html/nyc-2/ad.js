if (Enabler.isInitialized()) {
	enablerInitHandler();
} else {
	Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
}

function enablerInitHandler() {

}

//If true, start function.  If false, listen for PAGE_LOADED.
if (Enabler.isPageLoaded()) {
	pageLoadedHandler();
} else {
	Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED,pageLoadedHandler);
}

function pageLoadedHandler() {
	// Load in additional assets or add animation/video
	document.getElementById('bg-exit').addEventListener('click', bgExitHandler, false);
    an1();
}
	
//If true, start function.  If false, listen for VISIBLE.
if (Enabler.isVisible()) {
	adVisibilityHandler();
} else {
Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, adVisibilityHandler);
}

function adVisibilityHandler() {
	// Load in additional assets or start with animation/video
}

function bgExitHandler(e) {
	Enabler.exit('Background Exit');
}

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('q $1y(g){7(g.18&&g.18==1)8 h=g;t 7(1z(g).19(/^#([^$]+)$/i)){8 h=1A.1B(K.$1+\'\');7(!h)9 Q}t 9 Q;7(W(h.6)!=\'X\'&&h.6){h.6.R();9 h};h.1C=0.1;h.6={};h.6.4=[];h.6.C=0;7(W(h.L)!=\'X\')1a{1b h.L}1c(1d){h.L=Q}8 k={\'1e|1f|1D|1E|1g|1h|1F|1G|1H|1i|1j\':\'1I\',\'1J\':\'1K\',\'E\':\'\'};8 l=!!1L.1M.19(/1N/1O);8 m={1k:S,H:5,D:\'\'};8 n={E:q(a,b){a=u(a);7(z(a)){7(l){8 c=(T K(\'1l\\\\s*\\\\(E\\\\s*=\\\\s*(\\\\d+)\\\\)\')).Y(h.v.1m+\'\');7(c)9 u(c[1]);t 9 1}t{9 Z.1P((h.v.E?1Q(h.v.E):1)*S)}}t{a=Z.1R(S,Z.1S(0,a));7(l){h.v.1T=1;h.v.1m=\'1l(E=\'+a+\');\'}t{h.v.E=a/S}}},\'1i\':q(a,b){a=u(a);8 x=0,y=0;8 c=(T K(\'^(-?\\\\d+)[^\\\\d\\\\-]+(-?\\\\d+)\')).Y(h.v.U+\'\');7(c){x=u(c[1]);y=u(c[2])}7(z(a))9 x;t{h.v.U=a+b+\' \'+y+b}},\'1j\':q(a,b){a=u(a);8 x=0,y=0;8 c=(T K(\'^(-?\\\\d+)[^\\\\d\\\\-]+(-?\\\\d+)\')).Y(h.v.U+\'\');7(c){x=u(c[1]);y=u(c[2])}7(z(a))9 y;t{h.v.U=x+b+\' \'+a+b}}};8 o={1g:q(){9 u(h.1U)},1h:q(){9 u(h.1V)},1e:q(){8 a=0;A(8 b=h;b;b=b.1n)a+=u(b.1W);9 a},1f:q(){8 a=0;A(8 b=h;b;b=b.1n)a+=u(b.1X);9 a}};h.1o=q(){3.6.R();9 3};h.1p=q(a,b){7(h.6.4[3.6.C].I)9 3;8 b=u(b);3.6.4[z(b)?3.6.C:b].10=a;9 3};h.1q=q(c){8 d=3.6.C;7(3.6.4[d].I)9 3;A(8 p 1r m){7(!c[p])c[p]=m[p]};7(!c.D){A(8 e 1r k)7((T K(e,\'i\').1Y(c.r))){c.D=k[e];1Z}};c.J=(c.J&&c.J.B)?c.J:q(){};c.M=(c.M&&c.M.B)?c.M:q(){};7(!3.6[c.r]){7(n[c.r])3.6[c.r]=n[c.r];t{8 f=3;3.6[c.r]=q(a,b){7(W(a)==\'X\')9 u(f.v[c.r]);t f.v[c.r]=u(a)+b}}};7(z(c.F)){7(z(3.6[c.r]()))7(o[c.r])c.F=o[c.r]();t c.F=0;t c.F=3.6[c.r]()}c.11=c.F;3.6[c.r](c.F,c.D);3.6.4[d].w.20(c);9 3};h.1s=q(a,b,c){8 d=h.6.C;7(3.6.4[d].I){9 3}1t(q(){7(h.6.4[d].I)9 h;h.6.4[d].I=12;7(h.6.4[d].N>0)9 h;h.6.4[d].13=(a&&a.B)?a:q(){};h.6.4[d].1u=(c&&c.B)?c:q(){};7(!z(b))h.6.4[d].V=b;A(8 i=0;i<h.6.4[d].w.G;i++){h.6.4[d].w[i].J.B(h);h.6.O(d,i)}},h.6.4[d].10);9 3};h.1v=q(a,b){3.6.4[!z(b)?b:3.6.C].14=a;9 3};h.1w=q(a){3.6.4[!z(a)?a:3.6.C].15=12;9 3};h.1x=q(){A(8 i=0;i<3.6.4.G;i++){A(8 j=0;j<3.6.4[i].w.G;j++){8 a=3.6.4[i].w[j];7(z(a.11))3.6[a.r](\'\',\'\');t 3.6[a.r](a.11,a.D)}}8 b=[\'6\',\'1p\',\'1q\',\'1o\',\'1s\',\'1v\',\'1w\',\'1x\'];A(8 i=0;i<b.G;i++)1a{1b 3[b[i]]}1c(1d){3[b[i]]=Q}3.L=12};h.6.R=q(){8 a=3.4.G;3.C=a;3.4[a]={};3.4[a].V=1;3.4[a].15=16;3.4[a].w=[];3.4[a].N=0;3.4[a].P=0;3.4[a].10=0;3.4[a].14=16;3.4[a].I=16;3.4[a].13=q(){};9 3};h.6.O=q(a,b){7(!3.4[a]||3.4[a].15||h.L)9;8 c=3.4[a].w[b];8 d=3[c.r]();7((c.H>0&&d+c.H<=c.17)||(c.H<0&&d+c.H>=c.17)){7(!3.4[a].14)3[c.r](d+c.H,c.D);8 e=3;1t(q(){7(e.O)e.O(a,b)},c.1k)}t{3[c.r](c.17,c.D);3.4[a].N++;c.M.B(h);7(3.4[a].w.G==3.4[a].N){3.4[a].N=0;3.4[a].P++;3.4[a].1u.B(h,3.4[a].P);7(3.4[a].P<3.4[a].V||3.4[a].V==-1){A(8 i=0;i<3.4[a].w.G;i++){3[c.r](c.F,3.4[a].w[i].D);3.4[a].w[i].J.B(h,3.4[a].P);3.O(a,i)}}t{3.4[a].13.B(h)}}}};h.6.R();9 h}',62,125,'|||this|sets||_fx|if|var|return|||||||||||||||||function|type||else|parseInt|style|_queue|||isNaN|for|call|_currSet|unit|opacity|from|length|step|_isrunning|onstart|RegExp|_fxTerminated|onfinish|_effectsDone|_process|_loopsDone|null|_addSet|100|new|backgroundPosition|_loops|typeof|undefined|exec|Math|_holdTime|_initial|true|_onfinal|_paused|_stoped|false|to|nodeType|match|try|delete|catch|err|left|top|width|height|backgroundx|backgroundy|delay|alpha|filter|offsetParent|fxAddSet|fxHold|fxAdd|in|fxRun|setTimeout|_onloop|fxPause|fxStop|fxReset|fx|String|document|getElementById|fxVersion|right|bottom|margin|padding|spacing|px|font|pt|navigator|userAgent|MSIE|ig|round|parseFloat|min|max|zoom|offsetWidth|offsetHeight|offsetLeft|offsetTop|test|break|push'.split('|'),0,{}))

var fadein = {
	type : 'opacity',
	to : 100,
	step : 2,
	delay : 1
};
var fadeout = {
	type : 'opacity',
	to : 0,
	step : -2,
	delay : 1
};

var taglineInTop = {
	type : 'top',
	to : 32,
	step : 1,
	delay : 2
};
var taglineOutBottom = {
	type : 'top',
	from : 32,
	to : 90,
	step : 1,
	delay : 2
};

var endTagInTop = {
	type : 'top',
	to : 11,
	step : 1,
	delay : 2
};
var endTagOutBottom = {
	type : 'top',
	from : 11,
	to : 90,
	step : 1,
	delay : 2
};
var ctaInRight = {
	type : 'left',
	to : 618,
	step : -3,
	delay : 1
};

var timeoutId;

var timeoutId;
var tagline1 = new Image();
tagline1.src = "tagline1.gif";

function an1() {
	var ip5 = document.getElementById('ip5');
	var logo = document.getElementById('logo');
	$fx(logo).fxAdd(fadein).fxRun(null, 0);
	$fx(ip5).fxAdd(fadein).fxRun(pause1, 0);
}

function pause1() {
	timeoutId = window.setTimeout(an2, 650);
}

function an2() {
	var tagline1 = document.getElementById('tagline1');
	$fx(tagline1).fxAdd(taglineInTop).fxRun(pause2, 0);
}
function pause2() {
	timeoutId = window.setTimeout(an2exit, 2200);
}
function an2exit() {
	var tagline1 = document.getElementById('tagline1');
	$fx(tagline1).fxAdd(taglineOutBottom).fxRun(pause3, 0);

}
function pause3() {
	timeoutId = window.setTimeout(an3, 400);
}
function an3() {
	var tagline2 = document.getElementById('tagline2');
	$fx(tagline2).fxAdd(taglineInTop).fxRun(pause4, 0);
}
function pause4() {
	timeoutId = window.setTimeout(an3exit, 2200);
}
function an3exit() {
	var tagline2 = document.getElementById('tagline2');
	$fx(tagline2).fxAdd(taglineOutBottom).fxRun(pause5, 0);
}
function pause5() {
	timeoutId = window.setTimeout(an4, 400);
}

function an4() {
	var tagline3 = document.getElementById('tagline3');
	$fx(tagline3).fxAdd(endTagInTop).fxRun(pause6, 0);
}

function pause6() {
	timeoutId = window.setTimeout(cta, 700);
}

function cta() {
	var cta = document.getElementById('cta');
	$fx(cta).fxAdd(fadein).fxRun(pause7, 0);
}

function pause7() {
	timeoutId = window.setTimeout(legal, 400);
}

function legal() {
	var legal = document.getElementById('legal');
	$fx(legal).fxAdd(fadein).fxRun(null, 0);
}
