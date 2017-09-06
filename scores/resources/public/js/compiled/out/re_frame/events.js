// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__32465_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__32465_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__4657__auto___32466 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___32466)){
var not_i_32467 = temp__4657__auto___32466;
if(cljs.core.fn_QMARK_.call(null,not_i_32467)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_32467);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_32467);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_32468 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_32469 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__32413__auto___32482 = re_frame.interop.now.call(null);
var duration__32414__auto___32483 = (end__32413__auto___32482 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__32470_32484 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__32471_32485 = null;
var count__32472_32486 = (0);
var i__32473_32487 = (0);
while(true){
if((i__32473_32487 < count__32472_32486)){
var vec__32474_32488 = cljs.core._nth.call(null,chunk__32471_32485,i__32473_32487);
var k__32415__auto___32489 = cljs.core.nth.call(null,vec__32474_32488,(0),null);
var cb__32416__auto___32490 = cljs.core.nth.call(null,vec__32474_32488,(1),null);
try{cb__32416__auto___32490.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32414__auto___32483,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e32477){if((e32477 instanceof java.lang.Exception)){
var e__32417__auto___32491 = e32477;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32415__auto___32489,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32417__auto___32491);
} else {
throw e32477;

}
}
var G__32492 = seq__32470_32484;
var G__32493 = chunk__32471_32485;
var G__32494 = count__32472_32486;
var G__32495 = (i__32473_32487 + (1));
seq__32470_32484 = G__32492;
chunk__32471_32485 = G__32493;
count__32472_32486 = G__32494;
i__32473_32487 = G__32495;
continue;
} else {
var temp__4657__auto___32496 = cljs.core.seq.call(null,seq__32470_32484);
if(temp__4657__auto___32496){
var seq__32470_32497__$1 = temp__4657__auto___32496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32470_32497__$1)){
var c__29262__auto___32498 = cljs.core.chunk_first.call(null,seq__32470_32497__$1);
var G__32499 = cljs.core.chunk_rest.call(null,seq__32470_32497__$1);
var G__32500 = c__29262__auto___32498;
var G__32501 = cljs.core.count.call(null,c__29262__auto___32498);
var G__32502 = (0);
seq__32470_32484 = G__32499;
chunk__32471_32485 = G__32500;
count__32472_32486 = G__32501;
i__32473_32487 = G__32502;
continue;
} else {
var vec__32478_32503 = cljs.core.first.call(null,seq__32470_32497__$1);
var k__32415__auto___32504 = cljs.core.nth.call(null,vec__32478_32503,(0),null);
var cb__32416__auto___32505 = cljs.core.nth.call(null,vec__32478_32503,(1),null);
try{cb__32416__auto___32505.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32414__auto___32483,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e32481){if((e32481 instanceof java.lang.Exception)){
var e__32417__auto___32506 = e32481;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32415__auto___32504,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32417__auto___32506);
} else {
throw e32481;

}
}
var G__32507 = cljs.core.next.call(null,seq__32470_32497__$1);
var G__32508 = null;
var G__32509 = (0);
var G__32510 = (0);
seq__32470_32484 = G__32507;
chunk__32471_32485 = G__32508;
count__32472_32486 = G__32509;
i__32473_32487 = G__32510;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_32469;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_32468;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1504733868938
