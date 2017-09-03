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
var seq__31148 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__31149 = null;
var count__31150 = (0);
var i__31151 = (0);
while(true){
if((i__31151 < count__31150)){
var vec__31152 = cljs.core._nth.call(null,chunk__31149,i__31151);
var effect_key = cljs.core.nth.call(null,vec__31152,(0),null);
var effect_value = cljs.core.nth.call(null,vec__31152,(1),null);
var temp__4655__auto___31158 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___31158)){
var effect_fn_31159 = temp__4655__auto___31158;
effect_fn_31159.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__31160 = seq__31148;
var G__31161 = chunk__31149;
var G__31162 = count__31150;
var G__31163 = (i__31151 + (1));
seq__31148 = G__31160;
chunk__31149 = G__31161;
count__31150 = G__31162;
i__31151 = G__31163;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31148);
if(temp__4657__auto__){
var seq__31148__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31148__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__31148__$1);
var G__31164 = cljs.core.chunk_rest.call(null,seq__31148__$1);
var G__31165 = c__29125__auto__;
var G__31166 = cljs.core.count.call(null,c__29125__auto__);
var G__31167 = (0);
seq__31148 = G__31164;
chunk__31149 = G__31165;
count__31150 = G__31166;
i__31151 = G__31167;
continue;
} else {
var vec__31155 = cljs.core.first.call(null,seq__31148__$1);
var effect_key = cljs.core.nth.call(null,vec__31155,(0),null);
var effect_value = cljs.core.nth.call(null,vec__31155,(1),null);
var temp__4655__auto___31168 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___31168)){
var effect_fn_31169 = temp__4655__auto___31168;
effect_fn_31169.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__31170 = cljs.core.next.call(null,seq__31148__$1);
var G__31171 = null;
var G__31172 = (0);
var G__31173 = (0);
seq__31148 = G__31170;
chunk__31149 = G__31171;
count__31150 = G__31172;
i__31151 = G__31173;
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
var seq__31174 = cljs.core.seq.call(null,value);
var chunk__31175 = null;
var count__31176 = (0);
var i__31177 = (0);
while(true){
if((i__31177 < count__31176)){
var map__31178 = cljs.core._nth.call(null,chunk__31175,i__31177);
var map__31178__$1 = ((((!((map__31178 == null)))?((((map__31178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31178.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31178):map__31178);
var effect = map__31178__$1;
var ms = cljs.core.get.call(null,map__31178__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__31178__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__31174,chunk__31175,count__31176,i__31177,map__31178,map__31178__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__31174,chunk__31175,count__31176,i__31177,map__31178,map__31178__$1,effect,ms,dispatch))
,ms);
}

var G__31182 = seq__31174;
var G__31183 = chunk__31175;
var G__31184 = count__31176;
var G__31185 = (i__31177 + (1));
seq__31174 = G__31182;
chunk__31175 = G__31183;
count__31176 = G__31184;
i__31177 = G__31185;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31174);
if(temp__4657__auto__){
var seq__31174__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31174__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__31174__$1);
var G__31186 = cljs.core.chunk_rest.call(null,seq__31174__$1);
var G__31187 = c__29125__auto__;
var G__31188 = cljs.core.count.call(null,c__29125__auto__);
var G__31189 = (0);
seq__31174 = G__31186;
chunk__31175 = G__31187;
count__31176 = G__31188;
i__31177 = G__31189;
continue;
} else {
var map__31180 = cljs.core.first.call(null,seq__31174__$1);
var map__31180__$1 = ((((!((map__31180 == null)))?((((map__31180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31180):map__31180);
var effect = map__31180__$1;
var ms = cljs.core.get.call(null,map__31180__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__31180__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__31174,chunk__31175,count__31176,i__31177,map__31180,map__31180__$1,effect,ms,dispatch,seq__31174__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__31174,chunk__31175,count__31176,i__31177,map__31180,map__31180__$1,effect,ms,dispatch,seq__31174__$1,temp__4657__auto__))
,ms);
}

var G__31190 = cljs.core.next.call(null,seq__31174__$1);
var G__31191 = null;
var G__31192 = (0);
var G__31193 = (0);
seq__31174 = G__31190;
chunk__31175 = G__31191;
count__31176 = G__31192;
i__31177 = G__31193;
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
var seq__31194 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__31195 = null;
var count__31196 = (0);
var i__31197 = (0);
while(true){
if((i__31197 < count__31196)){
var event = cljs.core._nth.call(null,chunk__31195,i__31197);
re_frame.router.dispatch.call(null,event);

var G__31198 = seq__31194;
var G__31199 = chunk__31195;
var G__31200 = count__31196;
var G__31201 = (i__31197 + (1));
seq__31194 = G__31198;
chunk__31195 = G__31199;
count__31196 = G__31200;
i__31197 = G__31201;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31194);
if(temp__4657__auto__){
var seq__31194__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31194__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__31194__$1);
var G__31202 = cljs.core.chunk_rest.call(null,seq__31194__$1);
var G__31203 = c__29125__auto__;
var G__31204 = cljs.core.count.call(null,c__29125__auto__);
var G__31205 = (0);
seq__31194 = G__31202;
chunk__31195 = G__31203;
count__31196 = G__31204;
i__31197 = G__31205;
continue;
} else {
var event = cljs.core.first.call(null,seq__31194__$1);
re_frame.router.dispatch.call(null,event);

var G__31206 = cljs.core.next.call(null,seq__31194__$1);
var G__31207 = null;
var G__31208 = (0);
var G__31209 = (0);
seq__31194 = G__31206;
chunk__31195 = G__31207;
count__31196 = G__31208;
i__31197 = G__31209;
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
var seq__31210 = cljs.core.seq.call(null,value);
var chunk__31211 = null;
var count__31212 = (0);
var i__31213 = (0);
while(true){
if((i__31213 < count__31212)){
var event = cljs.core._nth.call(null,chunk__31211,i__31213);
clear_event.call(null,event);

var G__31214 = seq__31210;
var G__31215 = chunk__31211;
var G__31216 = count__31212;
var G__31217 = (i__31213 + (1));
seq__31210 = G__31214;
chunk__31211 = G__31215;
count__31212 = G__31216;
i__31213 = G__31217;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31210);
if(temp__4657__auto__){
var seq__31210__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31210__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__31210__$1);
var G__31218 = cljs.core.chunk_rest.call(null,seq__31210__$1);
var G__31219 = c__29125__auto__;
var G__31220 = cljs.core.count.call(null,c__29125__auto__);
var G__31221 = (0);
seq__31210 = G__31218;
chunk__31211 = G__31219;
count__31212 = G__31220;
i__31213 = G__31221;
continue;
} else {
var event = cljs.core.first.call(null,seq__31210__$1);
clear_event.call(null,event);

var G__31222 = cljs.core.next.call(null,seq__31210__$1);
var G__31223 = null;
var G__31224 = (0);
var G__31225 = (0);
seq__31210 = G__31222;
chunk__31211 = G__31223;
count__31212 = G__31224;
i__31213 = G__31225;
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

//# sourceMappingURL=fx.js.map?rel=1504451407910
