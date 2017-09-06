// Compiled by ClojureScript 1.9.908 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__31574,handler){
var map__31575 = p__31574;
var map__31575__$1 = ((((!((map__31575 == null)))?((((map__31575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31575.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31575):map__31575);
var uri = cljs.core.get.call(null,map__31575__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__31575__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__31575__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__31575__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__31575__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__31575__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__31575__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__31575,map__31575__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__31573_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__31573_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__31575,map__31575__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___31587 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___31587)){
var response_type_31588 = temp__4657__auto___31587;
this$__$1.responseType = cljs.core.name.call(null,response_type_31588);
} else {
}

var seq__31577_31589 = cljs.core.seq.call(null,headers);
var chunk__31578_31590 = null;
var count__31579_31591 = (0);
var i__31580_31592 = (0);
while(true){
if((i__31580_31592 < count__31579_31591)){
var vec__31581_31593 = cljs.core._nth.call(null,chunk__31578_31590,i__31580_31592);
var k_31594 = cljs.core.nth.call(null,vec__31581_31593,(0),null);
var v_31595 = cljs.core.nth.call(null,vec__31581_31593,(1),null);
this$__$1.setRequestHeader(k_31594,v_31595);

var G__31596 = seq__31577_31589;
var G__31597 = chunk__31578_31590;
var G__31598 = count__31579_31591;
var G__31599 = (i__31580_31592 + (1));
seq__31577_31589 = G__31596;
chunk__31578_31590 = G__31597;
count__31579_31591 = G__31598;
i__31580_31592 = G__31599;
continue;
} else {
var temp__4657__auto___31600 = cljs.core.seq.call(null,seq__31577_31589);
if(temp__4657__auto___31600){
var seq__31577_31601__$1 = temp__4657__auto___31600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31577_31601__$1)){
var c__29262__auto___31602 = cljs.core.chunk_first.call(null,seq__31577_31601__$1);
var G__31603 = cljs.core.chunk_rest.call(null,seq__31577_31601__$1);
var G__31604 = c__29262__auto___31602;
var G__31605 = cljs.core.count.call(null,c__29262__auto___31602);
var G__31606 = (0);
seq__31577_31589 = G__31603;
chunk__31578_31590 = G__31604;
count__31579_31591 = G__31605;
i__31580_31592 = G__31606;
continue;
} else {
var vec__31584_31607 = cljs.core.first.call(null,seq__31577_31601__$1);
var k_31608 = cljs.core.nth.call(null,vec__31584_31607,(0),null);
var v_31609 = cljs.core.nth.call(null,vec__31584_31607,(1),null);
this$__$1.setRequestHeader(k_31608,v_31609);

var G__31610 = cljs.core.next.call(null,seq__31577_31601__$1);
var G__31611 = null;
var G__31612 = (0);
var G__31613 = (0);
seq__31577_31589 = G__31610;
chunk__31578_31590 = G__31611;
count__31579_31591 = G__31612;
i__31580_31592 = G__31613;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__28423__auto__ = body;
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1504733865561
