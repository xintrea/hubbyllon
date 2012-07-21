// ==UserScript==
// @name        hubbyllon
// @namespace   hubbyllon
// @include     http://github.com*
// @include     https://github.com/*
// @description I18n for GitHub
// @copyright   Sergey M. Stepanov & hubylonians, 2012
// @version     0.3
// @licence     GPL 3
// ==/UserScript==

// Note: Switch your editor to UTF-8 codepage.

// alert("Welcome to Hubbillon!");

(function(window, undefined ) {
 
  // Set your language
  // "rus" - Russian
  // "deu" - German
  var lang="rus";
 
  // Work only with GitHub.com
  if(location.hostname !== "github.com")
   return;
 
  // Cross bowser support
  var unsafeWindow= this.unsafeWindow;
  (function(){
    var test_scr= document.createElement("script");
    var tid= ("t" + Math.random() + +(new Date())).replace(/\./g, "");
    test_scr.text= "window."+tid+"=true";
    document.querySelector("body").appendChild(test_scr);
    if (typeof(unsafeWindow) == "undefined" || !unsafeWindow[tid]) {
      if (window[tid]) {
        unsafeWindow= window;
      } else {
        var scr= document.createElement("script");
        scr.text= "(" +
          (function() {
            var el= document.createElement('unsafeWindow');
            el.style.display= 'none';
            el.onclick=function(){return window};
            document.body.appendChild(el);
          }).toString() + ")()";
        document.querySelector("body").appendChild(scr);
        this.unsafeWindow= document.querySelector("unsafeWindow").onclick();
        unsafeWindow= window.unsafeWindow;
      };
    }
  })();
 
  // jQuery v1.7.2
  (function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.tex
  G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;
  append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){
  var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k]
  })(window);
 

  // ----------------------------------------
  // Collection of DOM elements for translate
  // ----------------------------------------
  
  el=new Array();
 
  el["top_nav_explore"]=$("ul.top-nav li.explore a"); // <ul class="top-nav"><li class="explore"><a href="https://github.com/explore">Explore</a></li>...
  el["top_nav_gist"]   =$("ul.top-nav li a[href='https://gist.github.com']"); // <ul class="top-nav">...<li><a href="https://gist.github.com">Gist</a></li>...
  el["top_nav_blog"]   =$("ul.top-nav li a[href='/blog']"); // <ul class="top-nav">...<li><a href="/blog">Blog</a></li>...
  el["top_nav_help"]   =$("ul.top-nav li a[href='http://help.github.com']"); // <ul class="top-nav">...<li><a href="http://help.github.com">Help</a></li>...

  el["userbox_new_repo"]        =$("div#userbox ul#user-links li a#new_repo").parent(); 
  el["userbox_notifications"]   =$("div#userbox ul#user-links li a#notifications").parent(); 
  el["userbox_account_settings"]=$("div#userbox ul#user-links li a#account_settings").parent(); 
  el["userbox_logout"]          =$("div#userbox ul#user-links li a#logout").parent(); 

  el["subscribe_news_feed"]=$("ul.pagehead-actions li:first"); // <ul class="pagehead-actions"><li><a class="feed tooltipped leftwards" href="/xintrea.private" original-title="Subscribe to your personalized GitHub Feed">...

  el["news_feed"]    =$("a[href='/']"); // <a href="/" [[class="selected]]">News Feed</a>
  el["your_actions"] =$("a[href='/dashboard/yours']");
  el["pull_requests"]=$("a[href='/dashboard/pulls']");
  el["issues"]       =$("a[href='/dashboard/issues']");

  el["bootcamp_header"]=$("div.bootcamp h1"); // <div class="bootcamp"><h1>GitHub Bootcamp</h1>...
  el["bootcamp_setup_header"]=$("div.bootcamp-body ul li.setup h2"); // <div class="bootcamp-body"><ul><li class="setup"><h2></h2><p></p>...
  el["bootcamp_setup_text"]=$("div.bootcamp-body ul li.setup p"); // <div class="bootcamp-body"><ul><li class="setup"><h2></h2><p></p>...
  el["bootcamp_create_a_repo_header"]=$("div.bootcamp-body ul li.create-a-repo h2"); 
  el["bootcamp_create_a_repo_text"]=$("div.bootcamp-body ul li.create-a-repo p");
  el["bootcamp_fork_a_repo_header"]=$("div.bootcamp-body ul li.fork-a-repo h2"); 
  el["bootcamp_fork_a_repo_text"]=$("div.bootcamp-body ul li.fork-a-repo p");
  el["bootcamp_be_social_header"]=$("div.bootcamp-body ul li.be-social h2"); 
  el["bootcamp_be_social_text"]=$("div.bootcamp-body ul li.be-social p");

  el["dashboard_started_watching"]=$("div.body span");
  
  // Repository page
  el["repo_code"]                   =$("a[highlight='repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches']");
  el["repo_network"]                =$("a[highlight='repo_network']");
  el["repo_pull_requests"]          =$("a[highlight='repo_pulls']");
  el["repo_issues"]                 =$("a[highlight='repo_issues']");
  el["repo_wiki"]                   =$("a[highlight='repo_wiki']");
  el["repo_graphsrepo_contributors"]=$("a[highlight='repo_graphsrepo_contributors']");


  // ------------------
  // Translation phrase
  // ------------------

  tr=new Array();
  
  // Russian
  if(lang=="rus"){

   tr["top_nav_explore"]="Обзор";
   tr["top_nav_gist"]   ="Сущности";
   tr["top_nav_blog"]   ="Блог";
   tr["top_nav_help"]   ="Помощь";

   tr["userbox_new_repo"]        =getReplaceHtml("Create a New Repo", "Создать новый репозитарий", el["userbox_new_repo"] );
   tr["userbox_notifications"]   =getReplaceHtml("Notifications", "Уведомления", el["userbox_notifications"] );
   tr["userbox_account_settings"]=getReplaceHtml("Account Settings", "Настройки аккаунта", el["userbox_account_settings"] );
   tr["userbox_logout"]          =getReplaceHtml("Sign Out", "Выход", el["userbox_logout"] );

   repl=new Array();
   repl["News Feed"]="Лента новостей";
   repl["Subscribe to your personalized GitHub Feed"]="Подпишитесь на персональную ленту RSS-новостей GitHub";
   tr["subscribe_news_feed"]=getReplaceHtml(repl, "Array()", el["subscribe_news_feed"] );

   tr["news_feed"]    ="Лента новостей";
   tr["your_actions"] ="Ваши действия";
   tr["pull_requests"]="Запросы";
   tr["issues"]       ="Задачи";

   repl=new Array();
   repl["GitHub Bootcamp"]          ="Учебная программа GitHub";
   repl["<span>If.*started.</span>"]="<span>Если вы еще новичек, мы создали несколько уроков, чтобы вам было легче начать пользоваться Git.</span>";
   repl["Hide this notice forever"] ="Скрыть и больше не показывать это сообщение";
   tr["bootcamp_header"]            =getReplaceHtml(repl, "Array()", el["bootcamp_header"] );

   tr["bootcamp_setup_header"]        ="Настройка Git";
   tr["bootcamp_setup_text"]          ="Краткое руководство чтобы помочь вам быстрее освоить Git.";
   tr["bootcamp_create_a_repo_header"]="Создание репозитария";
   tr["bootcamp_create_a_repo_text"]  ="Создание места для хранения вашего кода.";
   tr["bootcamp_fork_a_repo_header"]  ="Ветвление репозитариев";
   tr["bootcamp_fork_a_repo_text"]    ="Cоздайте новый проект на основе существующего.";
   tr["bootcamp_be_social_header"]    ="Будьте общительны";
   tr["bootcamp_be_social_text"]      ="Приглашайте друзей.<br>Следите за проектами.";

   tr["dashboard_started_watching"]   =getReplaceHtml("started watching", "начато отслеживание", el["dashboard_started_watching"] );
   
   alert( el["dashboard_started_watching"].text() );

   tr["repo_code"]                   ="Код";
   tr["repo_network"]                ="Связи и ветвления";
   tr["repo_pull_requests"]          =getReplaceHtml("Pull Requests", "Запросы", el["repo_pull_requests"] );
   tr["repo_issues"]                 =getReplaceHtml("Issues", "Задачи", el["repo_issues"] );
   tr["repo_wiki"]                   ="База знаний";
   tr["repo_graphsrepo_contributors"]="Графики";

  }

  // German
  if(lang=="deu"){
   tr["issues"]="Die Aufgaben";
  }
  

  // ---------------------------------
  // Store base english phrase on page
  // ---------------------------------

  basePhrases=new Array();
  for(elementName in el)
   basePhrases[elementName]=el[elementName].html();


  // ------------------------------
  // Translate DOM elements on page
  // ------------------------------
  alert( "Label 1" ); 


  for(elementName in el)
   if(tr[elementName]!==undefined)
    if(el[elementName].length==1) 
     el[elementName].html( tr[elementName] ); // $el["code"].text("c-o-d-e"); 
    else if (el[elementName].length>1)
     el[elementName].each(function(o) {
      alert( "el each for "+elementName+" : "+$(o).html() ); 
      $(o).html( tr[elementName] );
     });

  alert( "Label 2" ); 
    
  function strReplace(searchPattern, replacePattern, text) {
   return text.split(searchPattern).join(replacePattern); // return text.replace(new RegExp(searchPattern,'g'), replacePattern);
  }


  // Return modify HTML code for element
  // If searchPattern and replacePattern is string, run simply replace.
  // If searchPattern is Array(), and replacePattern=="Array()", run multiply replace,
  // and replace data get from searchPattern. The searchPattern structure:
  // searchPattern['regexp1']='replace_string_1'
  // searchPattern['regexpN']='replace_string_N'
  function getReplaceHtml(searchPattern, replacePattern, element) {
    if(element.length) { // element exists

      text=element.html();

     // If simply replace
      if(replacePattern!="Array()")
       return text.split(searchPattern).join(replacePattern);
      else {
        result=text;

        for(searchText in searchPattern) {
          replaceText=searchPattern[searchText];
          result=result.replace(new RegExp(searchText), replaceText);
        }

        return result;
      }
    }

    return "";
  }

})(window);

