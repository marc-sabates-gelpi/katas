// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__32774 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__32775 = null;
var count__32776 = (0);
var i__32777 = (0);
while(true){
if((i__32777 < count__32776)){
var vec__32778 = cljs.core._nth.call(null,chunk__32775,i__32777);
var effect_key = cljs.core.nth.call(null,vec__32778,(0),null);
var effect_value = cljs.core.nth.call(null,vec__32778,(1),null);
var temp__4655__auto___32784 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___32784)){
var effect_fn_32785 = temp__4655__auto___32784;
effect_fn_32785.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__32786 = seq__32774;
var G__32787 = chunk__32775;
var G__32788 = count__32776;
var G__32789 = (i__32777 + (1));
seq__32774 = G__32786;
chunk__32775 = G__32787;
count__32776 = G__32788;
i__32777 = G__32789;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32774);
if(temp__4657__auto__){
var seq__32774__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32774__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__32774__$1);
var G__32790 = cljs.core.chunk_rest.call(null,seq__32774__$1);
var G__32791 = c__29262__auto__;
var G__32792 = cljs.core.count.call(null,c__29262__auto__);
var G__32793 = (0);
seq__32774 = G__32790;
chunk__32775 = G__32791;
count__32776 = G__32792;
i__32777 = G__32793;
continue;
} else {
var vec__32781 = cljs.core.first.call(null,seq__32774__$1);
var effect_key = cljs.core.nth.call(null,vec__32781,(0),null);
var effect_value = cljs.core.nth.call(null,vec__32781,(1),null);
var temp__4655__auto___32794 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___32794)){
var effect_fn_32795 = temp__4655__auto___32794;
effect_fn_32795.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__32796 = cljs.core.next.call(null,seq__32774__$1);
var G__32797 = null;
var G__32798 = (0);
var G__32799 = (0);
seq__32774 = G__32796;
chunk__32775 = G__32797;
count__32776 = G__32798;
i__32777 = G__32799;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__32800 = cljs.core.seq.call(null,value);
var chunk__32801 = null;
var count__32802 = (0);
var i__32803 = (0);
while(true){
if((i__32803 < count__32802)){
var map__32804 = cljs.core._nth.call(null,chunk__32801,i__32803);
var map__32804__$1 = ((((!((map__32804 == null)))?((((map__32804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32804.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32804):map__32804);
var effect = map__32804__$1;
var ms = cljs.core.get.call(null,map__32804__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__32804__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__32800,chunk__32801,count__32802,i__32803,map__32804,map__32804__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__32800,chunk__32801,count__32802,i__32803,map__32804,map__32804__$1,effect,ms,dispatch))
,ms);
}

var G__32808 = seq__32800;
var G__32809 = chunk__32801;
var G__32810 = count__32802;
var G__32811 = (i__32803 + (1));
seq__32800 = G__32808;
chunk__32801 = G__32809;
count__32802 = G__32810;
i__32803 = G__32811;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32800);
if(temp__4657__auto__){
var seq__32800__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32800__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__32800__$1);
var G__32812 = cljs.core.chunk_rest.call(null,seq__32800__$1);
var G__32813 = c__29262__auto__;
var G__32814 = cljs.core.count.call(null,c__29262__auto__);
var G__32815 = (0);
seq__32800 = G__32812;
chunk__32801 = G__32813;
count__32802 = G__32814;
i__32803 = G__32815;
continue;
} else {
var map__32806 = cljs.core.first.call(null,seq__32800__$1);
var map__32806__$1 = ((((!((map__32806 == null)))?((((map__32806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32806):map__32806);
var effect = map__32806__$1;
var ms = cljs.core.get.call(null,map__32806__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__32806__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__32800,chunk__32801,count__32802,i__32803,map__32806,map__32806__$1,effect,ms,dispatch,seq__32800__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__32800,chunk__32801,count__32802,i__32803,map__32806,map__32806__$1,effect,ms,dispatch,seq__32800__$1,temp__4657__auto__))
,ms);
}

var G__32816 = cljs.core.next.call(null,seq__32800__$1);
var G__32817 = null;
var G__32818 = (0);
var G__32819 = (0);
seq__32800 = G__32816;
chunk__32801 = G__32817;
count__32802 = G__32818;
i__32803 = G__32819;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__32820 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__32821 = null;
var count__32822 = (0);
var i__32823 = (0);
while(true){
if((i__32823 < count__32822)){
var event = cljs.core._nth.call(null,chunk__32821,i__32823);
re_frame.router.dispatch.call(null,event);

var G__32824 = seq__32820;
var G__32825 = chunk__32821;
var G__32826 = count__32822;
var G__32827 = (i__32823 + (1));
seq__32820 = G__32824;
chunk__32821 = G__32825;
count__32822 = G__32826;
i__32823 = G__32827;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32820);
if(temp__4657__auto__){
var seq__32820__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32820__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__32820__$1);
var G__32828 = cljs.core.chunk_rest.call(null,seq__32820__$1);
var G__32829 = c__29262__auto__;
var G__32830 = cljs.core.count.call(null,c__29262__auto__);
var G__32831 = (0);
seq__32820 = G__32828;
chunk__32821 = G__32829;
count__32822 = G__32830;
i__32823 = G__32831;
continue;
} else {
var event = cljs.core.first.call(null,seq__32820__$1);
re_frame.router.dispatch.call(null,event);

var G__32832 = cljs.core.next.call(null,seq__32820__$1);
var G__32833 = null;
var G__32834 = (0);
var G__32835 = (0);
seq__32820 = G__32832;
chunk__32821 = G__32833;
count__32822 = G__32834;
i__32823 = G__32835;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__32836 = cljs.core.seq.call(null,value);
var chunk__32837 = null;
var count__32838 = (0);
var i__32839 = (0);
while(true){
if((i__32839 < count__32838)){
var event = cljs.core._nth.call(null,chunk__32837,i__32839);
clear_event.call(null,event);

var G__32840 = seq__32836;
var G__32841 = chunk__32837;
var G__32842 = count__32838;
var G__32843 = (i__32839 + (1));
seq__32836 = G__32840;
chunk__32837 = G__32841;
count__32838 = G__32842;
i__32839 = G__32843;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32836);
if(temp__4657__auto__){
var seq__32836__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32836__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__32836__$1);
var G__32844 = cljs.core.chunk_rest.call(null,seq__32836__$1);
var G__32845 = c__29262__auto__;
var G__32846 = cljs.core.count.call(null,c__29262__auto__);
var G__32847 = (0);
seq__32836 = G__32844;
chunk__32837 = G__32845;
count__32838 = G__32846;
i__32839 = G__32847;
continue;
} else {
var event = cljs.core.first.call(null,seq__32836__$1);
clear_event.call(null,event);

var G__32848 = cljs.core.next.call(null,seq__32836__$1);
var G__32849 = null;
var G__32850 = (0);
var G__32851 = (0);
seq__32836 = G__32848;
chunk__32837 = G__32849;
count__32838 = G__32850;
i__32839 = G__32851;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1504733870581
