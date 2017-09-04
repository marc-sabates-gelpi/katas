// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32614 = arguments.length;
switch (G__32614) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async32615 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32615 = (function (f,blockable,meta32616){
this.f = f;
this.blockable = blockable;
this.meta32616 = meta32616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32617,meta32616__$1){
var self__ = this;
var _32617__$1 = this;
return (new cljs.core.async.t_cljs$core$async32615(self__.f,self__.blockable,meta32616__$1));
});

cljs.core.async.t_cljs$core$async32615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32617){
var self__ = this;
var _32617__$1 = this;
return self__.meta32616;
});

cljs.core.async.t_cljs$core$async32615.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32615.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32615.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32615.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32616","meta32616",1078555521,null)], null);
});

cljs.core.async.t_cljs$core$async32615.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32615";

cljs.core.async.t_cljs$core$async32615.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async32615");
});

cljs.core.async.__GT_t_cljs$core$async32615 = (function cljs$core$async$__GT_t_cljs$core$async32615(f__$1,blockable__$1,meta32616){
return (new cljs.core.async.t_cljs$core$async32615(f__$1,blockable__$1,meta32616));
});

}

return (new cljs.core.async.t_cljs$core$async32615(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32621 = arguments.length;
switch (G__32621) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32624 = arguments.length;
switch (G__32624) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32627 = arguments.length;
switch (G__32627) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32629 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32629);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32629,ret){
return (function (){
return fn1.call(null,val_32629);
});})(val_32629,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32631 = arguments.length;
switch (G__32631) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__29231__auto___32633 = n;
var x_32634 = (0);
while(true){
if((x_32634 < n__29231__auto___32633)){
(a[x_32634] = (0));

var G__32635 = (x_32634 + (1));
x_32634 = G__32635;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__32636 = (i + (1));
i = G__32636;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32637 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32637 = (function (flag,meta32638){
this.flag = flag;
this.meta32638 = meta32638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32639,meta32638__$1){
var self__ = this;
var _32639__$1 = this;
return (new cljs.core.async.t_cljs$core$async32637(self__.flag,meta32638__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32637.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32639){
var self__ = this;
var _32639__$1 = this;
return self__.meta32638;
});})(flag))
;

cljs.core.async.t_cljs$core$async32637.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32637.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32637.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32637.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32637.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32638","meta32638",-1033984365,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32637.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32637";

cljs.core.async.t_cljs$core$async32637.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async32637");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32637 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32637(flag__$1,meta32638){
return (new cljs.core.async.t_cljs$core$async32637(flag__$1,meta32638));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32637(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32640 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32640 = (function (flag,cb,meta32641){
this.flag = flag;
this.cb = cb;
this.meta32641 = meta32641;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32642,meta32641__$1){
var self__ = this;
var _32642__$1 = this;
return (new cljs.core.async.t_cljs$core$async32640(self__.flag,self__.cb,meta32641__$1));
});

cljs.core.async.t_cljs$core$async32640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32642){
var self__ = this;
var _32642__$1 = this;
return self__.meta32641;
});

cljs.core.async.t_cljs$core$async32640.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32640.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32640.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32640.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32640.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32641","meta32641",1441791765,null)], null);
});

cljs.core.async.t_cljs$core$async32640.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32640.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32640";

cljs.core.async.t_cljs$core$async32640.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async32640");
});

cljs.core.async.__GT_t_cljs$core$async32640 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32640(flag__$1,cb__$1,meta32641){
return (new cljs.core.async.t_cljs$core$async32640(flag__$1,cb__$1,meta32641));
});

}

return (new cljs.core.async.t_cljs$core$async32640(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32643_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32643_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32644_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32644_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28286__auto__ = wport;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32645 = (i + (1));
i = G__32645;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28286__auto__ = ret;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28274__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28274__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28274__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__29462__auto__ = [];
var len__29455__auto___32651 = arguments.length;
var i__29456__auto___32652 = (0);
while(true){
if((i__29456__auto___32652 < len__29455__auto___32651)){
args__29462__auto__.push((arguments[i__29456__auto___32652]));

var G__32653 = (i__29456__auto___32652 + (1));
i__29456__auto___32652 = G__32653;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32648){
var map__32649 = p__32648;
var map__32649__$1 = ((((!((map__32649 == null)))?((((map__32649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32649.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32649):map__32649);
var opts = map__32649__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32646){
var G__32647 = cljs.core.first.call(null,seq32646);
var seq32646__$1 = cljs.core.next.call(null,seq32646);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32647,seq32646__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32655 = arguments.length;
switch (G__32655) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32568__auto___32701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto___32701){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto___32701){
return (function (state_32679){
var state_val_32680 = (state_32679[(1)]);
if((state_val_32680 === (7))){
var inst_32675 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32681_32702 = state_32679__$1;
(statearr_32681_32702[(2)] = inst_32675);

(statearr_32681_32702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (1))){
var state_32679__$1 = state_32679;
var statearr_32682_32703 = state_32679__$1;
(statearr_32682_32703[(2)] = null);

(statearr_32682_32703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (4))){
var inst_32658 = (state_32679[(7)]);
var inst_32658__$1 = (state_32679[(2)]);
var inst_32659 = (inst_32658__$1 == null);
var state_32679__$1 = (function (){var statearr_32683 = state_32679;
(statearr_32683[(7)] = inst_32658__$1);

return statearr_32683;
})();
if(cljs.core.truth_(inst_32659)){
var statearr_32684_32704 = state_32679__$1;
(statearr_32684_32704[(1)] = (5));

} else {
var statearr_32685_32705 = state_32679__$1;
(statearr_32685_32705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (13))){
var state_32679__$1 = state_32679;
var statearr_32686_32706 = state_32679__$1;
(statearr_32686_32706[(2)] = null);

(statearr_32686_32706[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (6))){
var inst_32658 = (state_32679[(7)]);
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32679__$1,(11),to,inst_32658);
} else {
if((state_val_32680 === (3))){
var inst_32677 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32679__$1,inst_32677);
} else {
if((state_val_32680 === (12))){
var state_32679__$1 = state_32679;
var statearr_32687_32707 = state_32679__$1;
(statearr_32687_32707[(2)] = null);

(statearr_32687_32707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (2))){
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32679__$1,(4),from);
} else {
if((state_val_32680 === (11))){
var inst_32668 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
if(cljs.core.truth_(inst_32668)){
var statearr_32688_32708 = state_32679__$1;
(statearr_32688_32708[(1)] = (12));

} else {
var statearr_32689_32709 = state_32679__$1;
(statearr_32689_32709[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (9))){
var state_32679__$1 = state_32679;
var statearr_32690_32710 = state_32679__$1;
(statearr_32690_32710[(2)] = null);

(statearr_32690_32710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (5))){
var state_32679__$1 = state_32679;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32691_32711 = state_32679__$1;
(statearr_32691_32711[(1)] = (8));

} else {
var statearr_32692_32712 = state_32679__$1;
(statearr_32692_32712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (14))){
var inst_32673 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32693_32713 = state_32679__$1;
(statearr_32693_32713[(2)] = inst_32673);

(statearr_32693_32713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (10))){
var inst_32665 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32694_32714 = state_32679__$1;
(statearr_32694_32714[(2)] = inst_32665);

(statearr_32694_32714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (8))){
var inst_32662 = cljs.core.async.close_BANG_.call(null,to);
var state_32679__$1 = state_32679;
var statearr_32695_32715 = state_32679__$1;
(statearr_32695_32715[(2)] = inst_32662);

(statearr_32695_32715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32568__auto___32701))
;
return ((function (switch__32480__auto__,c__32568__auto___32701){
return (function() {
var cljs$core$async$state_machine__32481__auto__ = null;
var cljs$core$async$state_machine__32481__auto____0 = (function (){
var statearr_32696 = [null,null,null,null,null,null,null,null];
(statearr_32696[(0)] = cljs$core$async$state_machine__32481__auto__);

(statearr_32696[(1)] = (1));

return statearr_32696;
});
var cljs$core$async$state_machine__32481__auto____1 = (function (state_32679){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_32679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e32697){if((e32697 instanceof Object)){
var ex__32484__auto__ = e32697;
var statearr_32698_32716 = state_32679;
(statearr_32698_32716[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32717 = state_32679;
state_32679 = G__32717;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
cljs$core$async$state_machine__32481__auto__ = function(state_32679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32481__auto____1.call(this,state_32679);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32481__auto____0;
cljs$core$async$state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32481__auto____1;
return cljs$core$async$state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto___32701))
})();
var state__32570__auto__ = (function (){var statearr_32699 = f__32569__auto__.call(null);
(statearr_32699[(6)] = c__32568__auto___32701);

return statearr_32699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto___32701))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__32718){
var vec__32719 = p__32718;
var v = cljs.core.nth.call(null,vec__32719,(0),null);
var p = cljs.core.nth.call(null,vec__32719,(1),null);
var job = vec__32719;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32568__auto___32890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto___32890,res,vec__32719,v,p,job,jobs,results){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto___32890,res,vec__32719,v,p,job,jobs,results){
return (function (state_32726){
var state_val_32727 = (state_32726[(1)]);
if((state_val_32727 === (1))){
var state_32726__$1 = state_32726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32726__$1,(2),res,v);
} else {
if((state_val_32727 === (2))){
var inst_32723 = (state_32726[(2)]);
var inst_32724 = cljs.core.async.close_BANG_.call(null,res);
var state_32726__$1 = (function (){var statearr_32728 = state_32726;
(statearr_32728[(7)] = inst_32723);

return statearr_32728;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32726__$1,inst_32724);
} else {
return null;
}
}
});})(c__32568__auto___32890,res,vec__32719,v,p,job,jobs,results))
;
return ((function (switch__32480__auto__,c__32568__auto___32890,res,vec__32719,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____0 = (function (){
var statearr_32729 = [null,null,null,null,null,null,null,null];
(statearr_32729[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__);

(statearr_32729[(1)] = (1));

return statearr_32729;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____1 = (function (state_32726){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_32726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e32730){if((e32730 instanceof Object)){
var ex__32484__auto__ = e32730;
var statearr_32731_32891 = state_32726;
(statearr_32731_32891[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32892 = state_32726;
state_32726 = G__32892;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__ = function(state_32726){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____1.call(this,state_32726);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto___32890,res,vec__32719,v,p,job,jobs,results))
})();
var state__32570__auto__ = (function (){var statearr_32732 = f__32569__auto__.call(null);
(statearr_32732[(6)] = c__32568__auto___32890);

return statearr_32732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto___32890,res,vec__32719,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32733){
var vec__32734 = p__32733;
var v = cljs.core.nth.call(null,vec__32734,(0),null);
var p = cljs.core.nth.call(null,vec__32734,(1),null);
var job = vec__32734;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__29231__auto___32893 = n;
var __32894 = (0);
while(true){
if((__32894 < n__29231__auto___32893)){
var G__32737_32895 = type;
var G__32737_32896__$1 = (((G__32737_32895 instanceof cljs.core.Keyword))?G__32737_32895.fqn:null);
switch (G__32737_32896__$1) {
case "compute":
var c__32568__auto___32898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32894,c__32568__auto___32898,G__32737_32895,G__32737_32896__$1,n__29231__auto___32893,jobs,results,process,async){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (__32894,c__32568__auto___32898,G__32737_32895,G__32737_32896__$1,n__29231__auto___32893,jobs,results,process,async){
return (function (state_32750){
var state_val_32751 = (state_32750[(1)]);
if((state_val_32751 === (1))){
var state_32750__$1 = state_32750;
var statearr_32752_32899 = state_32750__$1;
(statearr_32752_32899[(2)] = null);

(statearr_32752_32899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (2))){
var state_32750__$1 = state_32750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32750__$1,(4),jobs);
} else {
if((state_val_32751 === (3))){
var inst_32748 = (state_32750[(2)]);
var state_32750__$1 = state_32750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32750__$1,inst_32748);
} else {
if((state_val_32751 === (4))){
var inst_32740 = (state_32750[(2)]);
var inst_32741 = process.call(null,inst_32740);
var state_32750__$1 = state_32750;
if(cljs.core.truth_(inst_32741)){
var statearr_32753_32900 = state_32750__$1;
(statearr_32753_32900[(1)] = (5));

} else {
var statearr_32754_32901 = state_32750__$1;
(statearr_32754_32901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (5))){
var state_32750__$1 = state_32750;
var statearr_32755_32902 = state_32750__$1;
(statearr_32755_32902[(2)] = null);

(statearr_32755_32902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (6))){
var state_32750__$1 = state_32750;
var statearr_32756_32903 = state_32750__$1;
(statearr_32756_32903[(2)] = null);

(statearr_32756_32903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (7))){
var inst_32746 = (state_32750[(2)]);
var state_32750__$1 = state_32750;
var statearr_32757_32904 = state_32750__$1;
(statearr_32757_32904[(2)] = inst_32746);

(statearr_32757_32904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32894,c__32568__auto___32898,G__32737_32895,G__32737_32896__$1,n__29231__auto___32893,jobs,results,process,async))
;
return ((function (__32894,switch__32480__auto__,c__32568__auto___32898,G__32737_32895,G__32737_32896__$1,n__29231__auto___32893,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____0 = (function (){
var statearr_32758 = [null,null,null,null,null,null,null];
(statearr_32758[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__);

(statearr_32758[(1)] = (1));

return statearr_32758;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____1 = (function (state_32750){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_32750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e32759){if((e32759 instanceof Object)){
var ex__32484__auto__ = e32759;
var statearr_32760_32905 = state_32750;
(statearr_32760_32905[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32906 = state_32750;
state_32750 = G__32906;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__ = function(state_32750){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____1.call(this,state_32750);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__;
})()
;})(__32894,switch__32480__auto__,c__32568__auto___32898,G__32737_32895,G__32737_32896__$1,n__29231__auto___32893,jobs,results,process,async))
})();
var state__32570__auto__ = (function (){var statearr_32761 = f__32569__auto__.call(null);
(statearr_32761[(6)] = c__32568__auto___32898);

return statearr_32761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(__32894,c__32568__auto___32898,G__32737_32895,G__32737_32896__$1,n__29231__auto___32893,jobs,results,process,async))
);


break;
case "async":
var c__32568__auto___32907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32894,c__32568__auto___32907,G__32737_32895,G__32737_32896__$1,n__29231__auto___32893,jobs,results,process,async){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (__32894,c__32568__auto___32907,G__32737_32895,G__32737_32896__$1,n__29231__auto___32893,jobs,results,process,async){
return (function (state_32774){
var state_val_32775 = (state_32774[(1)]);
if((state_val_32775 === (1))){
var state_32774__$1 = state_32774;
var statearr_32776_32908 = state_32774__$1;
(statearr_32776_32908[(2)] = null);

(statearr_32776_32908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32775 === (2))){
var state_32774__$1 = state_32774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32774__$1,(4),jobs);
} else {
if((state_val_32775 === (3))){
var inst_32772 = (state_32774[(2)]);
var state_32774__$1 = state_32774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32774__$1,inst_32772);
} else {
if((state_val_32775 === (4))){
var inst_32764 = (state_32774[(2)]);
var inst_32765 = async.call(null,inst_32764);
var state_32774__$1 = state_32774;
if(cljs.core.truth_(inst_32765)){
var statearr_32777_32909 = state_32774__$1;
(statearr_32777_32909[(1)] = (5));

} else {
var statearr_32778_32910 = state_32774__$1;
(statearr_32778_32910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32775 === (5))){
var state_32774__$1 = state_32774;
var statearr_32779_32911 = state_32774__$1;
(statearr_32779_32911[(2)] = null);

(statearr_32779_32911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32775 === (6))){
var state_32774__$1 = state_32774;
var statearr_32780_32912 = state_32774__$1;
(statearr_32780_32912[(2)] = null);

(statearr_32780_32912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32775 === (7))){
var inst_32770 = (state_32774[(2)]);
var state_32774__$1 = state_32774;
var statearr_32781_32913 = state_32774__$1;
(statearr_32781_32913[(2)] = inst_32770);

(statearr_32781_32913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32894,c__32568__auto___32907,G__32737_32895,G__32737_32896__$1,n__29231__auto___32893,jobs,results,process,async))
;
return ((function (__32894,switch__32480__auto__,c__32568__auto___32907,G__32737_32895,G__32737_32896__$1,n__29231__auto___32893,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____0 = (function (){
var statearr_32782 = [null,null,null,null,null,null,null];
(statearr_32782[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__);

(statearr_32782[(1)] = (1));

return statearr_32782;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____1 = (function (state_32774){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_32774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e32783){if((e32783 instanceof Object)){
var ex__32484__auto__ = e32783;
var statearr_32784_32914 = state_32774;
(statearr_32784_32914[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32915 = state_32774;
state_32774 = G__32915;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__ = function(state_32774){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____1.call(this,state_32774);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__;
})()
;})(__32894,switch__32480__auto__,c__32568__auto___32907,G__32737_32895,G__32737_32896__$1,n__29231__auto___32893,jobs,results,process,async))
})();
var state__32570__auto__ = (function (){var statearr_32785 = f__32569__auto__.call(null);
(statearr_32785[(6)] = c__32568__auto___32907);

return statearr_32785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(__32894,c__32568__auto___32907,G__32737_32895,G__32737_32896__$1,n__29231__auto___32893,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32737_32896__$1)].join('')));

}

var G__32916 = (__32894 + (1));
__32894 = G__32916;
continue;
} else {
}
break;
}

var c__32568__auto___32917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto___32917,jobs,results,process,async){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto___32917,jobs,results,process,async){
return (function (state_32807){
var state_val_32808 = (state_32807[(1)]);
if((state_val_32808 === (1))){
var state_32807__$1 = state_32807;
var statearr_32809_32918 = state_32807__$1;
(statearr_32809_32918[(2)] = null);

(statearr_32809_32918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (2))){
var state_32807__$1 = state_32807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32807__$1,(4),from);
} else {
if((state_val_32808 === (3))){
var inst_32805 = (state_32807[(2)]);
var state_32807__$1 = state_32807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32807__$1,inst_32805);
} else {
if((state_val_32808 === (4))){
var inst_32788 = (state_32807[(7)]);
var inst_32788__$1 = (state_32807[(2)]);
var inst_32789 = (inst_32788__$1 == null);
var state_32807__$1 = (function (){var statearr_32810 = state_32807;
(statearr_32810[(7)] = inst_32788__$1);

return statearr_32810;
})();
if(cljs.core.truth_(inst_32789)){
var statearr_32811_32919 = state_32807__$1;
(statearr_32811_32919[(1)] = (5));

} else {
var statearr_32812_32920 = state_32807__$1;
(statearr_32812_32920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (5))){
var inst_32791 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32807__$1 = state_32807;
var statearr_32813_32921 = state_32807__$1;
(statearr_32813_32921[(2)] = inst_32791);

(statearr_32813_32921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (6))){
var inst_32793 = (state_32807[(8)]);
var inst_32788 = (state_32807[(7)]);
var inst_32793__$1 = cljs.core.async.chan.call(null,(1));
var inst_32794 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32795 = [inst_32788,inst_32793__$1];
var inst_32796 = (new cljs.core.PersistentVector(null,2,(5),inst_32794,inst_32795,null));
var state_32807__$1 = (function (){var statearr_32814 = state_32807;
(statearr_32814[(8)] = inst_32793__$1);

return statearr_32814;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32807__$1,(8),jobs,inst_32796);
} else {
if((state_val_32808 === (7))){
var inst_32803 = (state_32807[(2)]);
var state_32807__$1 = state_32807;
var statearr_32815_32922 = state_32807__$1;
(statearr_32815_32922[(2)] = inst_32803);

(statearr_32815_32922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (8))){
var inst_32793 = (state_32807[(8)]);
var inst_32798 = (state_32807[(2)]);
var state_32807__$1 = (function (){var statearr_32816 = state_32807;
(statearr_32816[(9)] = inst_32798);

return statearr_32816;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32807__$1,(9),results,inst_32793);
} else {
if((state_val_32808 === (9))){
var inst_32800 = (state_32807[(2)]);
var state_32807__$1 = (function (){var statearr_32817 = state_32807;
(statearr_32817[(10)] = inst_32800);

return statearr_32817;
})();
var statearr_32818_32923 = state_32807__$1;
(statearr_32818_32923[(2)] = null);

(statearr_32818_32923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__32568__auto___32917,jobs,results,process,async))
;
return ((function (switch__32480__auto__,c__32568__auto___32917,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____0 = (function (){
var statearr_32819 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32819[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__);

(statearr_32819[(1)] = (1));

return statearr_32819;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____1 = (function (state_32807){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_32807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e32820){if((e32820 instanceof Object)){
var ex__32484__auto__ = e32820;
var statearr_32821_32924 = state_32807;
(statearr_32821_32924[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32925 = state_32807;
state_32807 = G__32925;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__ = function(state_32807){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____1.call(this,state_32807);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto___32917,jobs,results,process,async))
})();
var state__32570__auto__ = (function (){var statearr_32822 = f__32569__auto__.call(null);
(statearr_32822[(6)] = c__32568__auto___32917);

return statearr_32822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto___32917,jobs,results,process,async))
);


var c__32568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto__,jobs,results,process,async){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto__,jobs,results,process,async){
return (function (state_32860){
var state_val_32861 = (state_32860[(1)]);
if((state_val_32861 === (7))){
var inst_32856 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
var statearr_32862_32926 = state_32860__$1;
(statearr_32862_32926[(2)] = inst_32856);

(statearr_32862_32926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (20))){
var state_32860__$1 = state_32860;
var statearr_32863_32927 = state_32860__$1;
(statearr_32863_32927[(2)] = null);

(statearr_32863_32927[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (1))){
var state_32860__$1 = state_32860;
var statearr_32864_32928 = state_32860__$1;
(statearr_32864_32928[(2)] = null);

(statearr_32864_32928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (4))){
var inst_32825 = (state_32860[(7)]);
var inst_32825__$1 = (state_32860[(2)]);
var inst_32826 = (inst_32825__$1 == null);
var state_32860__$1 = (function (){var statearr_32865 = state_32860;
(statearr_32865[(7)] = inst_32825__$1);

return statearr_32865;
})();
if(cljs.core.truth_(inst_32826)){
var statearr_32866_32929 = state_32860__$1;
(statearr_32866_32929[(1)] = (5));

} else {
var statearr_32867_32930 = state_32860__$1;
(statearr_32867_32930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (15))){
var inst_32838 = (state_32860[(8)]);
var state_32860__$1 = state_32860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32860__$1,(18),to,inst_32838);
} else {
if((state_val_32861 === (21))){
var inst_32851 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
var statearr_32868_32931 = state_32860__$1;
(statearr_32868_32931[(2)] = inst_32851);

(statearr_32868_32931[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (13))){
var inst_32853 = (state_32860[(2)]);
var state_32860__$1 = (function (){var statearr_32869 = state_32860;
(statearr_32869[(9)] = inst_32853);

return statearr_32869;
})();
var statearr_32870_32932 = state_32860__$1;
(statearr_32870_32932[(2)] = null);

(statearr_32870_32932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (6))){
var inst_32825 = (state_32860[(7)]);
var state_32860__$1 = state_32860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32860__$1,(11),inst_32825);
} else {
if((state_val_32861 === (17))){
var inst_32846 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
if(cljs.core.truth_(inst_32846)){
var statearr_32871_32933 = state_32860__$1;
(statearr_32871_32933[(1)] = (19));

} else {
var statearr_32872_32934 = state_32860__$1;
(statearr_32872_32934[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (3))){
var inst_32858 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32860__$1,inst_32858);
} else {
if((state_val_32861 === (12))){
var inst_32835 = (state_32860[(10)]);
var state_32860__$1 = state_32860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32860__$1,(14),inst_32835);
} else {
if((state_val_32861 === (2))){
var state_32860__$1 = state_32860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32860__$1,(4),results);
} else {
if((state_val_32861 === (19))){
var state_32860__$1 = state_32860;
var statearr_32873_32935 = state_32860__$1;
(statearr_32873_32935[(2)] = null);

(statearr_32873_32935[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (11))){
var inst_32835 = (state_32860[(2)]);
var state_32860__$1 = (function (){var statearr_32874 = state_32860;
(statearr_32874[(10)] = inst_32835);

return statearr_32874;
})();
var statearr_32875_32936 = state_32860__$1;
(statearr_32875_32936[(2)] = null);

(statearr_32875_32936[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (9))){
var state_32860__$1 = state_32860;
var statearr_32876_32937 = state_32860__$1;
(statearr_32876_32937[(2)] = null);

(statearr_32876_32937[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (5))){
var state_32860__$1 = state_32860;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32877_32938 = state_32860__$1;
(statearr_32877_32938[(1)] = (8));

} else {
var statearr_32878_32939 = state_32860__$1;
(statearr_32878_32939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (14))){
var inst_32838 = (state_32860[(8)]);
var inst_32840 = (state_32860[(11)]);
var inst_32838__$1 = (state_32860[(2)]);
var inst_32839 = (inst_32838__$1 == null);
var inst_32840__$1 = cljs.core.not.call(null,inst_32839);
var state_32860__$1 = (function (){var statearr_32879 = state_32860;
(statearr_32879[(8)] = inst_32838__$1);

(statearr_32879[(11)] = inst_32840__$1);

return statearr_32879;
})();
if(inst_32840__$1){
var statearr_32880_32940 = state_32860__$1;
(statearr_32880_32940[(1)] = (15));

} else {
var statearr_32881_32941 = state_32860__$1;
(statearr_32881_32941[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (16))){
var inst_32840 = (state_32860[(11)]);
var state_32860__$1 = state_32860;
var statearr_32882_32942 = state_32860__$1;
(statearr_32882_32942[(2)] = inst_32840);

(statearr_32882_32942[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (10))){
var inst_32832 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
var statearr_32883_32943 = state_32860__$1;
(statearr_32883_32943[(2)] = inst_32832);

(statearr_32883_32943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (18))){
var inst_32843 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
var statearr_32884_32944 = state_32860__$1;
(statearr_32884_32944[(2)] = inst_32843);

(statearr_32884_32944[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (8))){
var inst_32829 = cljs.core.async.close_BANG_.call(null,to);
var state_32860__$1 = state_32860;
var statearr_32885_32945 = state_32860__$1;
(statearr_32885_32945[(2)] = inst_32829);

(statearr_32885_32945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32568__auto__,jobs,results,process,async))
;
return ((function (switch__32480__auto__,c__32568__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____0 = (function (){
var statearr_32886 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32886[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__);

(statearr_32886[(1)] = (1));

return statearr_32886;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____1 = (function (state_32860){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_32860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e32887){if((e32887 instanceof Object)){
var ex__32484__auto__ = e32887;
var statearr_32888_32946 = state_32860;
(statearr_32888_32946[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32947 = state_32860;
state_32860 = G__32947;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__ = function(state_32860){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____1.call(this,state_32860);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32481__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto__,jobs,results,process,async))
})();
var state__32570__auto__ = (function (){var statearr_32889 = f__32569__auto__.call(null);
(statearr_32889[(6)] = c__32568__auto__);

return statearr_32889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto__,jobs,results,process,async))
);

return c__32568__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32949 = arguments.length;
switch (G__32949) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32952 = arguments.length;
switch (G__32952) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32955 = arguments.length;
switch (G__32955) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32568__auto___33004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto___33004,tc,fc){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto___33004,tc,fc){
return (function (state_32981){
var state_val_32982 = (state_32981[(1)]);
if((state_val_32982 === (7))){
var inst_32977 = (state_32981[(2)]);
var state_32981__$1 = state_32981;
var statearr_32983_33005 = state_32981__$1;
(statearr_32983_33005[(2)] = inst_32977);

(statearr_32983_33005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (1))){
var state_32981__$1 = state_32981;
var statearr_32984_33006 = state_32981__$1;
(statearr_32984_33006[(2)] = null);

(statearr_32984_33006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (4))){
var inst_32958 = (state_32981[(7)]);
var inst_32958__$1 = (state_32981[(2)]);
var inst_32959 = (inst_32958__$1 == null);
var state_32981__$1 = (function (){var statearr_32985 = state_32981;
(statearr_32985[(7)] = inst_32958__$1);

return statearr_32985;
})();
if(cljs.core.truth_(inst_32959)){
var statearr_32986_33007 = state_32981__$1;
(statearr_32986_33007[(1)] = (5));

} else {
var statearr_32987_33008 = state_32981__$1;
(statearr_32987_33008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (13))){
var state_32981__$1 = state_32981;
var statearr_32988_33009 = state_32981__$1;
(statearr_32988_33009[(2)] = null);

(statearr_32988_33009[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (6))){
var inst_32958 = (state_32981[(7)]);
var inst_32964 = p.call(null,inst_32958);
var state_32981__$1 = state_32981;
if(cljs.core.truth_(inst_32964)){
var statearr_32989_33010 = state_32981__$1;
(statearr_32989_33010[(1)] = (9));

} else {
var statearr_32990_33011 = state_32981__$1;
(statearr_32990_33011[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (3))){
var inst_32979 = (state_32981[(2)]);
var state_32981__$1 = state_32981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32981__$1,inst_32979);
} else {
if((state_val_32982 === (12))){
var state_32981__$1 = state_32981;
var statearr_32991_33012 = state_32981__$1;
(statearr_32991_33012[(2)] = null);

(statearr_32991_33012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (2))){
var state_32981__$1 = state_32981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32981__$1,(4),ch);
} else {
if((state_val_32982 === (11))){
var inst_32958 = (state_32981[(7)]);
var inst_32968 = (state_32981[(2)]);
var state_32981__$1 = state_32981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32981__$1,(8),inst_32968,inst_32958);
} else {
if((state_val_32982 === (9))){
var state_32981__$1 = state_32981;
var statearr_32992_33013 = state_32981__$1;
(statearr_32992_33013[(2)] = tc);

(statearr_32992_33013[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (5))){
var inst_32961 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32962 = cljs.core.async.close_BANG_.call(null,fc);
var state_32981__$1 = (function (){var statearr_32993 = state_32981;
(statearr_32993[(8)] = inst_32961);

return statearr_32993;
})();
var statearr_32994_33014 = state_32981__$1;
(statearr_32994_33014[(2)] = inst_32962);

(statearr_32994_33014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (14))){
var inst_32975 = (state_32981[(2)]);
var state_32981__$1 = state_32981;
var statearr_32995_33015 = state_32981__$1;
(statearr_32995_33015[(2)] = inst_32975);

(statearr_32995_33015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (10))){
var state_32981__$1 = state_32981;
var statearr_32996_33016 = state_32981__$1;
(statearr_32996_33016[(2)] = fc);

(statearr_32996_33016[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (8))){
var inst_32970 = (state_32981[(2)]);
var state_32981__$1 = state_32981;
if(cljs.core.truth_(inst_32970)){
var statearr_32997_33017 = state_32981__$1;
(statearr_32997_33017[(1)] = (12));

} else {
var statearr_32998_33018 = state_32981__$1;
(statearr_32998_33018[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32568__auto___33004,tc,fc))
;
return ((function (switch__32480__auto__,c__32568__auto___33004,tc,fc){
return (function() {
var cljs$core$async$state_machine__32481__auto__ = null;
var cljs$core$async$state_machine__32481__auto____0 = (function (){
var statearr_32999 = [null,null,null,null,null,null,null,null,null];
(statearr_32999[(0)] = cljs$core$async$state_machine__32481__auto__);

(statearr_32999[(1)] = (1));

return statearr_32999;
});
var cljs$core$async$state_machine__32481__auto____1 = (function (state_32981){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_32981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e33000){if((e33000 instanceof Object)){
var ex__32484__auto__ = e33000;
var statearr_33001_33019 = state_32981;
(statearr_33001_33019[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33020 = state_32981;
state_32981 = G__33020;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
cljs$core$async$state_machine__32481__auto__ = function(state_32981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32481__auto____1.call(this,state_32981);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32481__auto____0;
cljs$core$async$state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32481__auto____1;
return cljs$core$async$state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto___33004,tc,fc))
})();
var state__32570__auto__ = (function (){var statearr_33002 = f__32569__auto__.call(null);
(statearr_33002[(6)] = c__32568__auto___33004);

return statearr_33002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto___33004,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto__){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto__){
return (function (state_33041){
var state_val_33042 = (state_33041[(1)]);
if((state_val_33042 === (7))){
var inst_33037 = (state_33041[(2)]);
var state_33041__$1 = state_33041;
var statearr_33043_33061 = state_33041__$1;
(statearr_33043_33061[(2)] = inst_33037);

(statearr_33043_33061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33042 === (1))){
var inst_33021 = init;
var state_33041__$1 = (function (){var statearr_33044 = state_33041;
(statearr_33044[(7)] = inst_33021);

return statearr_33044;
})();
var statearr_33045_33062 = state_33041__$1;
(statearr_33045_33062[(2)] = null);

(statearr_33045_33062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33042 === (4))){
var inst_33024 = (state_33041[(8)]);
var inst_33024__$1 = (state_33041[(2)]);
var inst_33025 = (inst_33024__$1 == null);
var state_33041__$1 = (function (){var statearr_33046 = state_33041;
(statearr_33046[(8)] = inst_33024__$1);

return statearr_33046;
})();
if(cljs.core.truth_(inst_33025)){
var statearr_33047_33063 = state_33041__$1;
(statearr_33047_33063[(1)] = (5));

} else {
var statearr_33048_33064 = state_33041__$1;
(statearr_33048_33064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33042 === (6))){
var inst_33028 = (state_33041[(9)]);
var inst_33024 = (state_33041[(8)]);
var inst_33021 = (state_33041[(7)]);
var inst_33028__$1 = f.call(null,inst_33021,inst_33024);
var inst_33029 = cljs.core.reduced_QMARK_.call(null,inst_33028__$1);
var state_33041__$1 = (function (){var statearr_33049 = state_33041;
(statearr_33049[(9)] = inst_33028__$1);

return statearr_33049;
})();
if(inst_33029){
var statearr_33050_33065 = state_33041__$1;
(statearr_33050_33065[(1)] = (8));

} else {
var statearr_33051_33066 = state_33041__$1;
(statearr_33051_33066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33042 === (3))){
var inst_33039 = (state_33041[(2)]);
var state_33041__$1 = state_33041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33041__$1,inst_33039);
} else {
if((state_val_33042 === (2))){
var state_33041__$1 = state_33041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33041__$1,(4),ch);
} else {
if((state_val_33042 === (9))){
var inst_33028 = (state_33041[(9)]);
var inst_33021 = inst_33028;
var state_33041__$1 = (function (){var statearr_33052 = state_33041;
(statearr_33052[(7)] = inst_33021);

return statearr_33052;
})();
var statearr_33053_33067 = state_33041__$1;
(statearr_33053_33067[(2)] = null);

(statearr_33053_33067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33042 === (5))){
var inst_33021 = (state_33041[(7)]);
var state_33041__$1 = state_33041;
var statearr_33054_33068 = state_33041__$1;
(statearr_33054_33068[(2)] = inst_33021);

(statearr_33054_33068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33042 === (10))){
var inst_33035 = (state_33041[(2)]);
var state_33041__$1 = state_33041;
var statearr_33055_33069 = state_33041__$1;
(statearr_33055_33069[(2)] = inst_33035);

(statearr_33055_33069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33042 === (8))){
var inst_33028 = (state_33041[(9)]);
var inst_33031 = cljs.core.deref.call(null,inst_33028);
var state_33041__$1 = state_33041;
var statearr_33056_33070 = state_33041__$1;
(statearr_33056_33070[(2)] = inst_33031);

(statearr_33056_33070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__32568__auto__))
;
return ((function (switch__32480__auto__,c__32568__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32481__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32481__auto____0 = (function (){
var statearr_33057 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33057[(0)] = cljs$core$async$reduce_$_state_machine__32481__auto__);

(statearr_33057[(1)] = (1));

return statearr_33057;
});
var cljs$core$async$reduce_$_state_machine__32481__auto____1 = (function (state_33041){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_33041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e33058){if((e33058 instanceof Object)){
var ex__32484__auto__ = e33058;
var statearr_33059_33071 = state_33041;
(statearr_33059_33071[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33072 = state_33041;
state_33041 = G__33072;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32481__auto__ = function(state_33041){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32481__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32481__auto____1.call(this,state_33041);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32481__auto____0;
cljs$core$async$reduce_$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32481__auto____1;
return cljs$core$async$reduce_$_state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto__))
})();
var state__32570__auto__ = (function (){var statearr_33060 = f__32569__auto__.call(null);
(statearr_33060[(6)] = c__32568__auto__);

return statearr_33060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto__))
);

return c__32568__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto__,f__$1){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto__,f__$1){
return (function (state_33078){
var state_val_33079 = (state_33078[(1)]);
if((state_val_33079 === (1))){
var inst_33073 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33078__$1 = state_33078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33078__$1,(2),inst_33073);
} else {
if((state_val_33079 === (2))){
var inst_33075 = (state_33078[(2)]);
var inst_33076 = f__$1.call(null,inst_33075);
var state_33078__$1 = state_33078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33078__$1,inst_33076);
} else {
return null;
}
}
});})(c__32568__auto__,f__$1))
;
return ((function (switch__32480__auto__,c__32568__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32481__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32481__auto____0 = (function (){
var statearr_33080 = [null,null,null,null,null,null,null];
(statearr_33080[(0)] = cljs$core$async$transduce_$_state_machine__32481__auto__);

(statearr_33080[(1)] = (1));

return statearr_33080;
});
var cljs$core$async$transduce_$_state_machine__32481__auto____1 = (function (state_33078){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_33078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e33081){if((e33081 instanceof Object)){
var ex__32484__auto__ = e33081;
var statearr_33082_33084 = state_33078;
(statearr_33082_33084[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33085 = state_33078;
state_33078 = G__33085;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32481__auto__ = function(state_33078){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32481__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32481__auto____1.call(this,state_33078);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32481__auto____0;
cljs$core$async$transduce_$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32481__auto____1;
return cljs$core$async$transduce_$_state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto__,f__$1))
})();
var state__32570__auto__ = (function (){var statearr_33083 = f__32569__auto__.call(null);
(statearr_33083[(6)] = c__32568__auto__);

return statearr_33083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto__,f__$1))
);

return c__32568__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33087 = arguments.length;
switch (G__33087) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto__){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto__){
return (function (state_33112){
var state_val_33113 = (state_33112[(1)]);
if((state_val_33113 === (7))){
var inst_33094 = (state_33112[(2)]);
var state_33112__$1 = state_33112;
var statearr_33114_33135 = state_33112__$1;
(statearr_33114_33135[(2)] = inst_33094);

(statearr_33114_33135[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33113 === (1))){
var inst_33088 = cljs.core.seq.call(null,coll);
var inst_33089 = inst_33088;
var state_33112__$1 = (function (){var statearr_33115 = state_33112;
(statearr_33115[(7)] = inst_33089);

return statearr_33115;
})();
var statearr_33116_33136 = state_33112__$1;
(statearr_33116_33136[(2)] = null);

(statearr_33116_33136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33113 === (4))){
var inst_33089 = (state_33112[(7)]);
var inst_33092 = cljs.core.first.call(null,inst_33089);
var state_33112__$1 = state_33112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33112__$1,(7),ch,inst_33092);
} else {
if((state_val_33113 === (13))){
var inst_33106 = (state_33112[(2)]);
var state_33112__$1 = state_33112;
var statearr_33117_33137 = state_33112__$1;
(statearr_33117_33137[(2)] = inst_33106);

(statearr_33117_33137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33113 === (6))){
var inst_33097 = (state_33112[(2)]);
var state_33112__$1 = state_33112;
if(cljs.core.truth_(inst_33097)){
var statearr_33118_33138 = state_33112__$1;
(statearr_33118_33138[(1)] = (8));

} else {
var statearr_33119_33139 = state_33112__$1;
(statearr_33119_33139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33113 === (3))){
var inst_33110 = (state_33112[(2)]);
var state_33112__$1 = state_33112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33112__$1,inst_33110);
} else {
if((state_val_33113 === (12))){
var state_33112__$1 = state_33112;
var statearr_33120_33140 = state_33112__$1;
(statearr_33120_33140[(2)] = null);

(statearr_33120_33140[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33113 === (2))){
var inst_33089 = (state_33112[(7)]);
var state_33112__$1 = state_33112;
if(cljs.core.truth_(inst_33089)){
var statearr_33121_33141 = state_33112__$1;
(statearr_33121_33141[(1)] = (4));

} else {
var statearr_33122_33142 = state_33112__$1;
(statearr_33122_33142[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33113 === (11))){
var inst_33103 = cljs.core.async.close_BANG_.call(null,ch);
var state_33112__$1 = state_33112;
var statearr_33123_33143 = state_33112__$1;
(statearr_33123_33143[(2)] = inst_33103);

(statearr_33123_33143[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33113 === (9))){
var state_33112__$1 = state_33112;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33124_33144 = state_33112__$1;
(statearr_33124_33144[(1)] = (11));

} else {
var statearr_33125_33145 = state_33112__$1;
(statearr_33125_33145[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33113 === (5))){
var inst_33089 = (state_33112[(7)]);
var state_33112__$1 = state_33112;
var statearr_33126_33146 = state_33112__$1;
(statearr_33126_33146[(2)] = inst_33089);

(statearr_33126_33146[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33113 === (10))){
var inst_33108 = (state_33112[(2)]);
var state_33112__$1 = state_33112;
var statearr_33127_33147 = state_33112__$1;
(statearr_33127_33147[(2)] = inst_33108);

(statearr_33127_33147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33113 === (8))){
var inst_33089 = (state_33112[(7)]);
var inst_33099 = cljs.core.next.call(null,inst_33089);
var inst_33089__$1 = inst_33099;
var state_33112__$1 = (function (){var statearr_33128 = state_33112;
(statearr_33128[(7)] = inst_33089__$1);

return statearr_33128;
})();
var statearr_33129_33148 = state_33112__$1;
(statearr_33129_33148[(2)] = null);

(statearr_33129_33148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32568__auto__))
;
return ((function (switch__32480__auto__,c__32568__auto__){
return (function() {
var cljs$core$async$state_machine__32481__auto__ = null;
var cljs$core$async$state_machine__32481__auto____0 = (function (){
var statearr_33130 = [null,null,null,null,null,null,null,null];
(statearr_33130[(0)] = cljs$core$async$state_machine__32481__auto__);

(statearr_33130[(1)] = (1));

return statearr_33130;
});
var cljs$core$async$state_machine__32481__auto____1 = (function (state_33112){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_33112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e33131){if((e33131 instanceof Object)){
var ex__32484__auto__ = e33131;
var statearr_33132_33149 = state_33112;
(statearr_33132_33149[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33150 = state_33112;
state_33112 = G__33150;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
cljs$core$async$state_machine__32481__auto__ = function(state_33112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32481__auto____1.call(this,state_33112);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32481__auto____0;
cljs$core$async$state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32481__auto____1;
return cljs$core$async$state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto__))
})();
var state__32570__auto__ = (function (){var statearr_33133 = f__32569__auto__.call(null);
(statearr_33133[(6)] = c__32568__auto__);

return statearr_33133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto__))
);

return c__32568__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__28969__auto__ = (((_ == null))?null:_);
var m__28970__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,_);
} else {
var m__28970__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28970__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,ch);
} else {
var m__28970__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m);
} else {
var m__28970__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33151 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33151 = (function (ch,cs,meta33152){
this.ch = ch;
this.cs = cs;
this.meta33152 = meta33152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33153,meta33152__$1){
var self__ = this;
var _33153__$1 = this;
return (new cljs.core.async.t_cljs$core$async33151(self__.ch,self__.cs,meta33152__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33151.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33153){
var self__ = this;
var _33153__$1 = this;
return self__.meta33152;
});})(cs))
;

cljs.core.async.t_cljs$core$async33151.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33151.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33151.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33151.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33151.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33151.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33151.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33152","meta33152",375422336,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33151.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33151.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33151";

cljs.core.async.t_cljs$core$async33151.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async33151");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33151 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33151(ch__$1,cs__$1,meta33152){
return (new cljs.core.async.t_cljs$core$async33151(ch__$1,cs__$1,meta33152));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33151(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__32568__auto___33373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto___33373,cs,m,dchan,dctr,done){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto___33373,cs,m,dchan,dctr,done){
return (function (state_33288){
var state_val_33289 = (state_33288[(1)]);
if((state_val_33289 === (7))){
var inst_33284 = (state_33288[(2)]);
var state_33288__$1 = state_33288;
var statearr_33290_33374 = state_33288__$1;
(statearr_33290_33374[(2)] = inst_33284);

(statearr_33290_33374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (20))){
var inst_33187 = (state_33288[(7)]);
var inst_33199 = cljs.core.first.call(null,inst_33187);
var inst_33200 = cljs.core.nth.call(null,inst_33199,(0),null);
var inst_33201 = cljs.core.nth.call(null,inst_33199,(1),null);
var state_33288__$1 = (function (){var statearr_33291 = state_33288;
(statearr_33291[(8)] = inst_33200);

return statearr_33291;
})();
if(cljs.core.truth_(inst_33201)){
var statearr_33292_33375 = state_33288__$1;
(statearr_33292_33375[(1)] = (22));

} else {
var statearr_33293_33376 = state_33288__$1;
(statearr_33293_33376[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (27))){
var inst_33236 = (state_33288[(9)]);
var inst_33229 = (state_33288[(10)]);
var inst_33231 = (state_33288[(11)]);
var inst_33156 = (state_33288[(12)]);
var inst_33236__$1 = cljs.core._nth.call(null,inst_33229,inst_33231);
var inst_33237 = cljs.core.async.put_BANG_.call(null,inst_33236__$1,inst_33156,done);
var state_33288__$1 = (function (){var statearr_33294 = state_33288;
(statearr_33294[(9)] = inst_33236__$1);

return statearr_33294;
})();
if(cljs.core.truth_(inst_33237)){
var statearr_33295_33377 = state_33288__$1;
(statearr_33295_33377[(1)] = (30));

} else {
var statearr_33296_33378 = state_33288__$1;
(statearr_33296_33378[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (1))){
var state_33288__$1 = state_33288;
var statearr_33297_33379 = state_33288__$1;
(statearr_33297_33379[(2)] = null);

(statearr_33297_33379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (24))){
var inst_33187 = (state_33288[(7)]);
var inst_33206 = (state_33288[(2)]);
var inst_33207 = cljs.core.next.call(null,inst_33187);
var inst_33165 = inst_33207;
var inst_33166 = null;
var inst_33167 = (0);
var inst_33168 = (0);
var state_33288__$1 = (function (){var statearr_33298 = state_33288;
(statearr_33298[(13)] = inst_33165);

(statearr_33298[(14)] = inst_33167);

(statearr_33298[(15)] = inst_33168);

(statearr_33298[(16)] = inst_33166);

(statearr_33298[(17)] = inst_33206);

return statearr_33298;
})();
var statearr_33299_33380 = state_33288__$1;
(statearr_33299_33380[(2)] = null);

(statearr_33299_33380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (39))){
var state_33288__$1 = state_33288;
var statearr_33303_33381 = state_33288__$1;
(statearr_33303_33381[(2)] = null);

(statearr_33303_33381[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (4))){
var inst_33156 = (state_33288[(12)]);
var inst_33156__$1 = (state_33288[(2)]);
var inst_33157 = (inst_33156__$1 == null);
var state_33288__$1 = (function (){var statearr_33304 = state_33288;
(statearr_33304[(12)] = inst_33156__$1);

return statearr_33304;
})();
if(cljs.core.truth_(inst_33157)){
var statearr_33305_33382 = state_33288__$1;
(statearr_33305_33382[(1)] = (5));

} else {
var statearr_33306_33383 = state_33288__$1;
(statearr_33306_33383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (15))){
var inst_33165 = (state_33288[(13)]);
var inst_33167 = (state_33288[(14)]);
var inst_33168 = (state_33288[(15)]);
var inst_33166 = (state_33288[(16)]);
var inst_33183 = (state_33288[(2)]);
var inst_33184 = (inst_33168 + (1));
var tmp33300 = inst_33165;
var tmp33301 = inst_33167;
var tmp33302 = inst_33166;
var inst_33165__$1 = tmp33300;
var inst_33166__$1 = tmp33302;
var inst_33167__$1 = tmp33301;
var inst_33168__$1 = inst_33184;
var state_33288__$1 = (function (){var statearr_33307 = state_33288;
(statearr_33307[(18)] = inst_33183);

(statearr_33307[(13)] = inst_33165__$1);

(statearr_33307[(14)] = inst_33167__$1);

(statearr_33307[(15)] = inst_33168__$1);

(statearr_33307[(16)] = inst_33166__$1);

return statearr_33307;
})();
var statearr_33308_33384 = state_33288__$1;
(statearr_33308_33384[(2)] = null);

(statearr_33308_33384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (21))){
var inst_33210 = (state_33288[(2)]);
var state_33288__$1 = state_33288;
var statearr_33312_33385 = state_33288__$1;
(statearr_33312_33385[(2)] = inst_33210);

(statearr_33312_33385[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (31))){
var inst_33236 = (state_33288[(9)]);
var inst_33240 = done.call(null,null);
var inst_33241 = cljs.core.async.untap_STAR_.call(null,m,inst_33236);
var state_33288__$1 = (function (){var statearr_33313 = state_33288;
(statearr_33313[(19)] = inst_33240);

return statearr_33313;
})();
var statearr_33314_33386 = state_33288__$1;
(statearr_33314_33386[(2)] = inst_33241);

(statearr_33314_33386[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (32))){
var inst_33229 = (state_33288[(10)]);
var inst_33230 = (state_33288[(20)]);
var inst_33228 = (state_33288[(21)]);
var inst_33231 = (state_33288[(11)]);
var inst_33243 = (state_33288[(2)]);
var inst_33244 = (inst_33231 + (1));
var tmp33309 = inst_33229;
var tmp33310 = inst_33230;
var tmp33311 = inst_33228;
var inst_33228__$1 = tmp33311;
var inst_33229__$1 = tmp33309;
var inst_33230__$1 = tmp33310;
var inst_33231__$1 = inst_33244;
var state_33288__$1 = (function (){var statearr_33315 = state_33288;
(statearr_33315[(10)] = inst_33229__$1);

(statearr_33315[(20)] = inst_33230__$1);

(statearr_33315[(21)] = inst_33228__$1);

(statearr_33315[(11)] = inst_33231__$1);

(statearr_33315[(22)] = inst_33243);

return statearr_33315;
})();
var statearr_33316_33387 = state_33288__$1;
(statearr_33316_33387[(2)] = null);

(statearr_33316_33387[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (40))){
var inst_33256 = (state_33288[(23)]);
var inst_33260 = done.call(null,null);
var inst_33261 = cljs.core.async.untap_STAR_.call(null,m,inst_33256);
var state_33288__$1 = (function (){var statearr_33317 = state_33288;
(statearr_33317[(24)] = inst_33260);

return statearr_33317;
})();
var statearr_33318_33388 = state_33288__$1;
(statearr_33318_33388[(2)] = inst_33261);

(statearr_33318_33388[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (33))){
var inst_33247 = (state_33288[(25)]);
var inst_33249 = cljs.core.chunked_seq_QMARK_.call(null,inst_33247);
var state_33288__$1 = state_33288;
if(inst_33249){
var statearr_33319_33389 = state_33288__$1;
(statearr_33319_33389[(1)] = (36));

} else {
var statearr_33320_33390 = state_33288__$1;
(statearr_33320_33390[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (13))){
var inst_33177 = (state_33288[(26)]);
var inst_33180 = cljs.core.async.close_BANG_.call(null,inst_33177);
var state_33288__$1 = state_33288;
var statearr_33321_33391 = state_33288__$1;
(statearr_33321_33391[(2)] = inst_33180);

(statearr_33321_33391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (22))){
var inst_33200 = (state_33288[(8)]);
var inst_33203 = cljs.core.async.close_BANG_.call(null,inst_33200);
var state_33288__$1 = state_33288;
var statearr_33322_33392 = state_33288__$1;
(statearr_33322_33392[(2)] = inst_33203);

(statearr_33322_33392[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (36))){
var inst_33247 = (state_33288[(25)]);
var inst_33251 = cljs.core.chunk_first.call(null,inst_33247);
var inst_33252 = cljs.core.chunk_rest.call(null,inst_33247);
var inst_33253 = cljs.core.count.call(null,inst_33251);
var inst_33228 = inst_33252;
var inst_33229 = inst_33251;
var inst_33230 = inst_33253;
var inst_33231 = (0);
var state_33288__$1 = (function (){var statearr_33323 = state_33288;
(statearr_33323[(10)] = inst_33229);

(statearr_33323[(20)] = inst_33230);

(statearr_33323[(21)] = inst_33228);

(statearr_33323[(11)] = inst_33231);

return statearr_33323;
})();
var statearr_33324_33393 = state_33288__$1;
(statearr_33324_33393[(2)] = null);

(statearr_33324_33393[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (41))){
var inst_33247 = (state_33288[(25)]);
var inst_33263 = (state_33288[(2)]);
var inst_33264 = cljs.core.next.call(null,inst_33247);
var inst_33228 = inst_33264;
var inst_33229 = null;
var inst_33230 = (0);
var inst_33231 = (0);
var state_33288__$1 = (function (){var statearr_33325 = state_33288;
(statearr_33325[(27)] = inst_33263);

(statearr_33325[(10)] = inst_33229);

(statearr_33325[(20)] = inst_33230);

(statearr_33325[(21)] = inst_33228);

(statearr_33325[(11)] = inst_33231);

return statearr_33325;
})();
var statearr_33326_33394 = state_33288__$1;
(statearr_33326_33394[(2)] = null);

(statearr_33326_33394[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (43))){
var state_33288__$1 = state_33288;
var statearr_33327_33395 = state_33288__$1;
(statearr_33327_33395[(2)] = null);

(statearr_33327_33395[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (29))){
var inst_33272 = (state_33288[(2)]);
var state_33288__$1 = state_33288;
var statearr_33328_33396 = state_33288__$1;
(statearr_33328_33396[(2)] = inst_33272);

(statearr_33328_33396[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (44))){
var inst_33281 = (state_33288[(2)]);
var state_33288__$1 = (function (){var statearr_33329 = state_33288;
(statearr_33329[(28)] = inst_33281);

return statearr_33329;
})();
var statearr_33330_33397 = state_33288__$1;
(statearr_33330_33397[(2)] = null);

(statearr_33330_33397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (6))){
var inst_33220 = (state_33288[(29)]);
var inst_33219 = cljs.core.deref.call(null,cs);
var inst_33220__$1 = cljs.core.keys.call(null,inst_33219);
var inst_33221 = cljs.core.count.call(null,inst_33220__$1);
var inst_33222 = cljs.core.reset_BANG_.call(null,dctr,inst_33221);
var inst_33227 = cljs.core.seq.call(null,inst_33220__$1);
var inst_33228 = inst_33227;
var inst_33229 = null;
var inst_33230 = (0);
var inst_33231 = (0);
var state_33288__$1 = (function (){var statearr_33331 = state_33288;
(statearr_33331[(10)] = inst_33229);

(statearr_33331[(20)] = inst_33230);

(statearr_33331[(21)] = inst_33228);

(statearr_33331[(11)] = inst_33231);

(statearr_33331[(30)] = inst_33222);

(statearr_33331[(29)] = inst_33220__$1);

return statearr_33331;
})();
var statearr_33332_33398 = state_33288__$1;
(statearr_33332_33398[(2)] = null);

(statearr_33332_33398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (28))){
var inst_33228 = (state_33288[(21)]);
var inst_33247 = (state_33288[(25)]);
var inst_33247__$1 = cljs.core.seq.call(null,inst_33228);
var state_33288__$1 = (function (){var statearr_33333 = state_33288;
(statearr_33333[(25)] = inst_33247__$1);

return statearr_33333;
})();
if(inst_33247__$1){
var statearr_33334_33399 = state_33288__$1;
(statearr_33334_33399[(1)] = (33));

} else {
var statearr_33335_33400 = state_33288__$1;
(statearr_33335_33400[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (25))){
var inst_33230 = (state_33288[(20)]);
var inst_33231 = (state_33288[(11)]);
var inst_33233 = (inst_33231 < inst_33230);
var inst_33234 = inst_33233;
var state_33288__$1 = state_33288;
if(cljs.core.truth_(inst_33234)){
var statearr_33336_33401 = state_33288__$1;
(statearr_33336_33401[(1)] = (27));

} else {
var statearr_33337_33402 = state_33288__$1;
(statearr_33337_33402[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (34))){
var state_33288__$1 = state_33288;
var statearr_33338_33403 = state_33288__$1;
(statearr_33338_33403[(2)] = null);

(statearr_33338_33403[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (17))){
var state_33288__$1 = state_33288;
var statearr_33339_33404 = state_33288__$1;
(statearr_33339_33404[(2)] = null);

(statearr_33339_33404[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (3))){
var inst_33286 = (state_33288[(2)]);
var state_33288__$1 = state_33288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33288__$1,inst_33286);
} else {
if((state_val_33289 === (12))){
var inst_33215 = (state_33288[(2)]);
var state_33288__$1 = state_33288;
var statearr_33340_33405 = state_33288__$1;
(statearr_33340_33405[(2)] = inst_33215);

(statearr_33340_33405[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (2))){
var state_33288__$1 = state_33288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33288__$1,(4),ch);
} else {
if((state_val_33289 === (23))){
var state_33288__$1 = state_33288;
var statearr_33341_33406 = state_33288__$1;
(statearr_33341_33406[(2)] = null);

(statearr_33341_33406[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (35))){
var inst_33270 = (state_33288[(2)]);
var state_33288__$1 = state_33288;
var statearr_33342_33407 = state_33288__$1;
(statearr_33342_33407[(2)] = inst_33270);

(statearr_33342_33407[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (19))){
var inst_33187 = (state_33288[(7)]);
var inst_33191 = cljs.core.chunk_first.call(null,inst_33187);
var inst_33192 = cljs.core.chunk_rest.call(null,inst_33187);
var inst_33193 = cljs.core.count.call(null,inst_33191);
var inst_33165 = inst_33192;
var inst_33166 = inst_33191;
var inst_33167 = inst_33193;
var inst_33168 = (0);
var state_33288__$1 = (function (){var statearr_33343 = state_33288;
(statearr_33343[(13)] = inst_33165);

(statearr_33343[(14)] = inst_33167);

(statearr_33343[(15)] = inst_33168);

(statearr_33343[(16)] = inst_33166);

return statearr_33343;
})();
var statearr_33344_33408 = state_33288__$1;
(statearr_33344_33408[(2)] = null);

(statearr_33344_33408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (11))){
var inst_33165 = (state_33288[(13)]);
var inst_33187 = (state_33288[(7)]);
var inst_33187__$1 = cljs.core.seq.call(null,inst_33165);
var state_33288__$1 = (function (){var statearr_33345 = state_33288;
(statearr_33345[(7)] = inst_33187__$1);

return statearr_33345;
})();
if(inst_33187__$1){
var statearr_33346_33409 = state_33288__$1;
(statearr_33346_33409[(1)] = (16));

} else {
var statearr_33347_33410 = state_33288__$1;
(statearr_33347_33410[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (9))){
var inst_33217 = (state_33288[(2)]);
var state_33288__$1 = state_33288;
var statearr_33348_33411 = state_33288__$1;
(statearr_33348_33411[(2)] = inst_33217);

(statearr_33348_33411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (5))){
var inst_33163 = cljs.core.deref.call(null,cs);
var inst_33164 = cljs.core.seq.call(null,inst_33163);
var inst_33165 = inst_33164;
var inst_33166 = null;
var inst_33167 = (0);
var inst_33168 = (0);
var state_33288__$1 = (function (){var statearr_33349 = state_33288;
(statearr_33349[(13)] = inst_33165);

(statearr_33349[(14)] = inst_33167);

(statearr_33349[(15)] = inst_33168);

(statearr_33349[(16)] = inst_33166);

return statearr_33349;
})();
var statearr_33350_33412 = state_33288__$1;
(statearr_33350_33412[(2)] = null);

(statearr_33350_33412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (14))){
var state_33288__$1 = state_33288;
var statearr_33351_33413 = state_33288__$1;
(statearr_33351_33413[(2)] = null);

(statearr_33351_33413[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (45))){
var inst_33278 = (state_33288[(2)]);
var state_33288__$1 = state_33288;
var statearr_33352_33414 = state_33288__$1;
(statearr_33352_33414[(2)] = inst_33278);

(statearr_33352_33414[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (26))){
var inst_33220 = (state_33288[(29)]);
var inst_33274 = (state_33288[(2)]);
var inst_33275 = cljs.core.seq.call(null,inst_33220);
var state_33288__$1 = (function (){var statearr_33353 = state_33288;
(statearr_33353[(31)] = inst_33274);

return statearr_33353;
})();
if(inst_33275){
var statearr_33354_33415 = state_33288__$1;
(statearr_33354_33415[(1)] = (42));

} else {
var statearr_33355_33416 = state_33288__$1;
(statearr_33355_33416[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (16))){
var inst_33187 = (state_33288[(7)]);
var inst_33189 = cljs.core.chunked_seq_QMARK_.call(null,inst_33187);
var state_33288__$1 = state_33288;
if(inst_33189){
var statearr_33356_33417 = state_33288__$1;
(statearr_33356_33417[(1)] = (19));

} else {
var statearr_33357_33418 = state_33288__$1;
(statearr_33357_33418[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (38))){
var inst_33267 = (state_33288[(2)]);
var state_33288__$1 = state_33288;
var statearr_33358_33419 = state_33288__$1;
(statearr_33358_33419[(2)] = inst_33267);

(statearr_33358_33419[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (30))){
var state_33288__$1 = state_33288;
var statearr_33359_33420 = state_33288__$1;
(statearr_33359_33420[(2)] = null);

(statearr_33359_33420[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (10))){
var inst_33168 = (state_33288[(15)]);
var inst_33166 = (state_33288[(16)]);
var inst_33176 = cljs.core._nth.call(null,inst_33166,inst_33168);
var inst_33177 = cljs.core.nth.call(null,inst_33176,(0),null);
var inst_33178 = cljs.core.nth.call(null,inst_33176,(1),null);
var state_33288__$1 = (function (){var statearr_33360 = state_33288;
(statearr_33360[(26)] = inst_33177);

return statearr_33360;
})();
if(cljs.core.truth_(inst_33178)){
var statearr_33361_33421 = state_33288__$1;
(statearr_33361_33421[(1)] = (13));

} else {
var statearr_33362_33422 = state_33288__$1;
(statearr_33362_33422[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (18))){
var inst_33213 = (state_33288[(2)]);
var state_33288__$1 = state_33288;
var statearr_33363_33423 = state_33288__$1;
(statearr_33363_33423[(2)] = inst_33213);

(statearr_33363_33423[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (42))){
var state_33288__$1 = state_33288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33288__$1,(45),dchan);
} else {
if((state_val_33289 === (37))){
var inst_33256 = (state_33288[(23)]);
var inst_33247 = (state_33288[(25)]);
var inst_33156 = (state_33288[(12)]);
var inst_33256__$1 = cljs.core.first.call(null,inst_33247);
var inst_33257 = cljs.core.async.put_BANG_.call(null,inst_33256__$1,inst_33156,done);
var state_33288__$1 = (function (){var statearr_33364 = state_33288;
(statearr_33364[(23)] = inst_33256__$1);

return statearr_33364;
})();
if(cljs.core.truth_(inst_33257)){
var statearr_33365_33424 = state_33288__$1;
(statearr_33365_33424[(1)] = (39));

} else {
var statearr_33366_33425 = state_33288__$1;
(statearr_33366_33425[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33289 === (8))){
var inst_33167 = (state_33288[(14)]);
var inst_33168 = (state_33288[(15)]);
var inst_33170 = (inst_33168 < inst_33167);
var inst_33171 = inst_33170;
var state_33288__$1 = state_33288;
if(cljs.core.truth_(inst_33171)){
var statearr_33367_33426 = state_33288__$1;
(statearr_33367_33426[(1)] = (10));

} else {
var statearr_33368_33427 = state_33288__$1;
(statearr_33368_33427[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32568__auto___33373,cs,m,dchan,dctr,done))
;
return ((function (switch__32480__auto__,c__32568__auto___33373,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32481__auto__ = null;
var cljs$core$async$mult_$_state_machine__32481__auto____0 = (function (){
var statearr_33369 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33369[(0)] = cljs$core$async$mult_$_state_machine__32481__auto__);

(statearr_33369[(1)] = (1));

return statearr_33369;
});
var cljs$core$async$mult_$_state_machine__32481__auto____1 = (function (state_33288){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_33288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e33370){if((e33370 instanceof Object)){
var ex__32484__auto__ = e33370;
var statearr_33371_33428 = state_33288;
(statearr_33371_33428[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33429 = state_33288;
state_33288 = G__33429;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32481__auto__ = function(state_33288){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32481__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32481__auto____1.call(this,state_33288);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32481__auto____0;
cljs$core$async$mult_$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32481__auto____1;
return cljs$core$async$mult_$_state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto___33373,cs,m,dchan,dctr,done))
})();
var state__32570__auto__ = (function (){var statearr_33372 = f__32569__auto__.call(null);
(statearr_33372[(6)] = c__32568__auto___33373);

return statearr_33372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto___33373,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33431 = arguments.length;
switch (G__33431) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,ch);
} else {
var m__28970__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,ch);
} else {
var m__28970__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m);
} else {
var m__28970__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,state_map);
} else {
var m__28970__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,mode);
} else {
var m__28970__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29462__auto__ = [];
var len__29455__auto___33443 = arguments.length;
var i__29456__auto___33444 = (0);
while(true){
if((i__29456__auto___33444 < len__29455__auto___33443)){
args__29462__auto__.push((arguments[i__29456__auto___33444]));

var G__33445 = (i__29456__auto___33444 + (1));
i__29456__auto___33444 = G__33445;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((3) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29463__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33437){
var map__33438 = p__33437;
var map__33438__$1 = ((((!((map__33438 == null)))?((((map__33438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33438):map__33438);
var opts = map__33438__$1;
var statearr_33440_33446 = state;
(statearr_33440_33446[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__33438,map__33438__$1,opts){
return (function (val){
var statearr_33441_33447 = state;
(statearr_33441_33447[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33438,map__33438__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_33442_33448 = state;
(statearr_33442_33448[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33433){
var G__33434 = cljs.core.first.call(null,seq33433);
var seq33433__$1 = cljs.core.next.call(null,seq33433);
var G__33435 = cljs.core.first.call(null,seq33433__$1);
var seq33433__$2 = cljs.core.next.call(null,seq33433__$1);
var G__33436 = cljs.core.first.call(null,seq33433__$2);
var seq33433__$3 = cljs.core.next.call(null,seq33433__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33434,G__33435,G__33436,seq33433__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33449 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33449 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta33450){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta33450 = meta33450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33451,meta33450__$1){
var self__ = this;
var _33451__$1 = this;
return (new cljs.core.async.t_cljs$core$async33449(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta33450__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33449.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33451){
var self__ = this;
var _33451__$1 = this;
return self__.meta33450;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33449.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33449.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33449.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33449.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33449.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33449.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33449.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33449.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33449.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta33450","meta33450",-1723182053,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33449.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33449";

cljs.core.async.t_cljs$core$async33449.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async33449");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33449 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33449(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33450){
return (new cljs.core.async.t_cljs$core$async33449(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33450));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33449(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32568__auto___33613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto___33613,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto___33613,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33553){
var state_val_33554 = (state_33553[(1)]);
if((state_val_33554 === (7))){
var inst_33468 = (state_33553[(2)]);
var state_33553__$1 = state_33553;
var statearr_33555_33614 = state_33553__$1;
(statearr_33555_33614[(2)] = inst_33468);

(statearr_33555_33614[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (20))){
var inst_33480 = (state_33553[(7)]);
var state_33553__$1 = state_33553;
var statearr_33556_33615 = state_33553__$1;
(statearr_33556_33615[(2)] = inst_33480);

(statearr_33556_33615[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (27))){
var state_33553__$1 = state_33553;
var statearr_33557_33616 = state_33553__$1;
(statearr_33557_33616[(2)] = null);

(statearr_33557_33616[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (1))){
var inst_33455 = (state_33553[(8)]);
var inst_33455__$1 = calc_state.call(null);
var inst_33457 = (inst_33455__$1 == null);
var inst_33458 = cljs.core.not.call(null,inst_33457);
var state_33553__$1 = (function (){var statearr_33558 = state_33553;
(statearr_33558[(8)] = inst_33455__$1);

return statearr_33558;
})();
if(inst_33458){
var statearr_33559_33617 = state_33553__$1;
(statearr_33559_33617[(1)] = (2));

} else {
var statearr_33560_33618 = state_33553__$1;
(statearr_33560_33618[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (24))){
var inst_33513 = (state_33553[(9)]);
var inst_33527 = (state_33553[(10)]);
var inst_33504 = (state_33553[(11)]);
var inst_33527__$1 = inst_33504.call(null,inst_33513);
var state_33553__$1 = (function (){var statearr_33561 = state_33553;
(statearr_33561[(10)] = inst_33527__$1);

return statearr_33561;
})();
if(cljs.core.truth_(inst_33527__$1)){
var statearr_33562_33619 = state_33553__$1;
(statearr_33562_33619[(1)] = (29));

} else {
var statearr_33563_33620 = state_33553__$1;
(statearr_33563_33620[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (4))){
var inst_33471 = (state_33553[(2)]);
var state_33553__$1 = state_33553;
if(cljs.core.truth_(inst_33471)){
var statearr_33564_33621 = state_33553__$1;
(statearr_33564_33621[(1)] = (8));

} else {
var statearr_33565_33622 = state_33553__$1;
(statearr_33565_33622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (15))){
var inst_33498 = (state_33553[(2)]);
var state_33553__$1 = state_33553;
if(cljs.core.truth_(inst_33498)){
var statearr_33566_33623 = state_33553__$1;
(statearr_33566_33623[(1)] = (19));

} else {
var statearr_33567_33624 = state_33553__$1;
(statearr_33567_33624[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (21))){
var inst_33503 = (state_33553[(12)]);
var inst_33503__$1 = (state_33553[(2)]);
var inst_33504 = cljs.core.get.call(null,inst_33503__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33505 = cljs.core.get.call(null,inst_33503__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33506 = cljs.core.get.call(null,inst_33503__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33553__$1 = (function (){var statearr_33568 = state_33553;
(statearr_33568[(13)] = inst_33505);

(statearr_33568[(11)] = inst_33504);

(statearr_33568[(12)] = inst_33503__$1);

return statearr_33568;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33553__$1,(22),inst_33506);
} else {
if((state_val_33554 === (31))){
var inst_33535 = (state_33553[(2)]);
var state_33553__$1 = state_33553;
if(cljs.core.truth_(inst_33535)){
var statearr_33569_33625 = state_33553__$1;
(statearr_33569_33625[(1)] = (32));

} else {
var statearr_33570_33626 = state_33553__$1;
(statearr_33570_33626[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (32))){
var inst_33512 = (state_33553[(14)]);
var state_33553__$1 = state_33553;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33553__$1,(35),out,inst_33512);
} else {
if((state_val_33554 === (33))){
var inst_33503 = (state_33553[(12)]);
var inst_33480 = inst_33503;
var state_33553__$1 = (function (){var statearr_33571 = state_33553;
(statearr_33571[(7)] = inst_33480);

return statearr_33571;
})();
var statearr_33572_33627 = state_33553__$1;
(statearr_33572_33627[(2)] = null);

(statearr_33572_33627[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (13))){
var inst_33480 = (state_33553[(7)]);
var inst_33487 = inst_33480.cljs$lang$protocol_mask$partition0$;
var inst_33488 = (inst_33487 & (64));
var inst_33489 = inst_33480.cljs$core$ISeq$;
var inst_33490 = (cljs.core.PROTOCOL_SENTINEL === inst_33489);
var inst_33491 = (inst_33488) || (inst_33490);
var state_33553__$1 = state_33553;
if(cljs.core.truth_(inst_33491)){
var statearr_33573_33628 = state_33553__$1;
(statearr_33573_33628[(1)] = (16));

} else {
var statearr_33574_33629 = state_33553__$1;
(statearr_33574_33629[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (22))){
var inst_33512 = (state_33553[(14)]);
var inst_33513 = (state_33553[(9)]);
var inst_33511 = (state_33553[(2)]);
var inst_33512__$1 = cljs.core.nth.call(null,inst_33511,(0),null);
var inst_33513__$1 = cljs.core.nth.call(null,inst_33511,(1),null);
var inst_33514 = (inst_33512__$1 == null);
var inst_33515 = cljs.core._EQ_.call(null,inst_33513__$1,change);
var inst_33516 = (inst_33514) || (inst_33515);
var state_33553__$1 = (function (){var statearr_33575 = state_33553;
(statearr_33575[(14)] = inst_33512__$1);

(statearr_33575[(9)] = inst_33513__$1);

return statearr_33575;
})();
if(cljs.core.truth_(inst_33516)){
var statearr_33576_33630 = state_33553__$1;
(statearr_33576_33630[(1)] = (23));

} else {
var statearr_33577_33631 = state_33553__$1;
(statearr_33577_33631[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (36))){
var inst_33503 = (state_33553[(12)]);
var inst_33480 = inst_33503;
var state_33553__$1 = (function (){var statearr_33578 = state_33553;
(statearr_33578[(7)] = inst_33480);

return statearr_33578;
})();
var statearr_33579_33632 = state_33553__$1;
(statearr_33579_33632[(2)] = null);

(statearr_33579_33632[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (29))){
var inst_33527 = (state_33553[(10)]);
var state_33553__$1 = state_33553;
var statearr_33580_33633 = state_33553__$1;
(statearr_33580_33633[(2)] = inst_33527);

(statearr_33580_33633[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (6))){
var state_33553__$1 = state_33553;
var statearr_33581_33634 = state_33553__$1;
(statearr_33581_33634[(2)] = false);

(statearr_33581_33634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (28))){
var inst_33523 = (state_33553[(2)]);
var inst_33524 = calc_state.call(null);
var inst_33480 = inst_33524;
var state_33553__$1 = (function (){var statearr_33582 = state_33553;
(statearr_33582[(7)] = inst_33480);

(statearr_33582[(15)] = inst_33523);

return statearr_33582;
})();
var statearr_33583_33635 = state_33553__$1;
(statearr_33583_33635[(2)] = null);

(statearr_33583_33635[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (25))){
var inst_33549 = (state_33553[(2)]);
var state_33553__$1 = state_33553;
var statearr_33584_33636 = state_33553__$1;
(statearr_33584_33636[(2)] = inst_33549);

(statearr_33584_33636[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (34))){
var inst_33547 = (state_33553[(2)]);
var state_33553__$1 = state_33553;
var statearr_33585_33637 = state_33553__$1;
(statearr_33585_33637[(2)] = inst_33547);

(statearr_33585_33637[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (17))){
var state_33553__$1 = state_33553;
var statearr_33586_33638 = state_33553__$1;
(statearr_33586_33638[(2)] = false);

(statearr_33586_33638[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (3))){
var state_33553__$1 = state_33553;
var statearr_33587_33639 = state_33553__$1;
(statearr_33587_33639[(2)] = false);

(statearr_33587_33639[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (12))){
var inst_33551 = (state_33553[(2)]);
var state_33553__$1 = state_33553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33553__$1,inst_33551);
} else {
if((state_val_33554 === (2))){
var inst_33455 = (state_33553[(8)]);
var inst_33460 = inst_33455.cljs$lang$protocol_mask$partition0$;
var inst_33461 = (inst_33460 & (64));
var inst_33462 = inst_33455.cljs$core$ISeq$;
var inst_33463 = (cljs.core.PROTOCOL_SENTINEL === inst_33462);
var inst_33464 = (inst_33461) || (inst_33463);
var state_33553__$1 = state_33553;
if(cljs.core.truth_(inst_33464)){
var statearr_33588_33640 = state_33553__$1;
(statearr_33588_33640[(1)] = (5));

} else {
var statearr_33589_33641 = state_33553__$1;
(statearr_33589_33641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (23))){
var inst_33512 = (state_33553[(14)]);
var inst_33518 = (inst_33512 == null);
var state_33553__$1 = state_33553;
if(cljs.core.truth_(inst_33518)){
var statearr_33590_33642 = state_33553__$1;
(statearr_33590_33642[(1)] = (26));

} else {
var statearr_33591_33643 = state_33553__$1;
(statearr_33591_33643[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (35))){
var inst_33538 = (state_33553[(2)]);
var state_33553__$1 = state_33553;
if(cljs.core.truth_(inst_33538)){
var statearr_33592_33644 = state_33553__$1;
(statearr_33592_33644[(1)] = (36));

} else {
var statearr_33593_33645 = state_33553__$1;
(statearr_33593_33645[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (19))){
var inst_33480 = (state_33553[(7)]);
var inst_33500 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33480);
var state_33553__$1 = state_33553;
var statearr_33594_33646 = state_33553__$1;
(statearr_33594_33646[(2)] = inst_33500);

(statearr_33594_33646[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (11))){
var inst_33480 = (state_33553[(7)]);
var inst_33484 = (inst_33480 == null);
var inst_33485 = cljs.core.not.call(null,inst_33484);
var state_33553__$1 = state_33553;
if(inst_33485){
var statearr_33595_33647 = state_33553__$1;
(statearr_33595_33647[(1)] = (13));

} else {
var statearr_33596_33648 = state_33553__$1;
(statearr_33596_33648[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (9))){
var inst_33455 = (state_33553[(8)]);
var state_33553__$1 = state_33553;
var statearr_33597_33649 = state_33553__$1;
(statearr_33597_33649[(2)] = inst_33455);

(statearr_33597_33649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (5))){
var state_33553__$1 = state_33553;
var statearr_33598_33650 = state_33553__$1;
(statearr_33598_33650[(2)] = true);

(statearr_33598_33650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (14))){
var state_33553__$1 = state_33553;
var statearr_33599_33651 = state_33553__$1;
(statearr_33599_33651[(2)] = false);

(statearr_33599_33651[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (26))){
var inst_33513 = (state_33553[(9)]);
var inst_33520 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33513);
var state_33553__$1 = state_33553;
var statearr_33600_33652 = state_33553__$1;
(statearr_33600_33652[(2)] = inst_33520);

(statearr_33600_33652[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (16))){
var state_33553__$1 = state_33553;
var statearr_33601_33653 = state_33553__$1;
(statearr_33601_33653[(2)] = true);

(statearr_33601_33653[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (38))){
var inst_33543 = (state_33553[(2)]);
var state_33553__$1 = state_33553;
var statearr_33602_33654 = state_33553__$1;
(statearr_33602_33654[(2)] = inst_33543);

(statearr_33602_33654[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (30))){
var inst_33513 = (state_33553[(9)]);
var inst_33505 = (state_33553[(13)]);
var inst_33504 = (state_33553[(11)]);
var inst_33530 = cljs.core.empty_QMARK_.call(null,inst_33504);
var inst_33531 = inst_33505.call(null,inst_33513);
var inst_33532 = cljs.core.not.call(null,inst_33531);
var inst_33533 = (inst_33530) && (inst_33532);
var state_33553__$1 = state_33553;
var statearr_33603_33655 = state_33553__$1;
(statearr_33603_33655[(2)] = inst_33533);

(statearr_33603_33655[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (10))){
var inst_33455 = (state_33553[(8)]);
var inst_33476 = (state_33553[(2)]);
var inst_33477 = cljs.core.get.call(null,inst_33476,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33478 = cljs.core.get.call(null,inst_33476,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33479 = cljs.core.get.call(null,inst_33476,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33480 = inst_33455;
var state_33553__$1 = (function (){var statearr_33604 = state_33553;
(statearr_33604[(7)] = inst_33480);

(statearr_33604[(16)] = inst_33479);

(statearr_33604[(17)] = inst_33477);

(statearr_33604[(18)] = inst_33478);

return statearr_33604;
})();
var statearr_33605_33656 = state_33553__$1;
(statearr_33605_33656[(2)] = null);

(statearr_33605_33656[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (18))){
var inst_33495 = (state_33553[(2)]);
var state_33553__$1 = state_33553;
var statearr_33606_33657 = state_33553__$1;
(statearr_33606_33657[(2)] = inst_33495);

(statearr_33606_33657[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (37))){
var state_33553__$1 = state_33553;
var statearr_33607_33658 = state_33553__$1;
(statearr_33607_33658[(2)] = null);

(statearr_33607_33658[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (8))){
var inst_33455 = (state_33553[(8)]);
var inst_33473 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33455);
var state_33553__$1 = state_33553;
var statearr_33608_33659 = state_33553__$1;
(statearr_33608_33659[(2)] = inst_33473);

(statearr_33608_33659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32568__auto___33613,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32480__auto__,c__32568__auto___33613,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32481__auto__ = null;
var cljs$core$async$mix_$_state_machine__32481__auto____0 = (function (){
var statearr_33609 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33609[(0)] = cljs$core$async$mix_$_state_machine__32481__auto__);

(statearr_33609[(1)] = (1));

return statearr_33609;
});
var cljs$core$async$mix_$_state_machine__32481__auto____1 = (function (state_33553){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_33553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e33610){if((e33610 instanceof Object)){
var ex__32484__auto__ = e33610;
var statearr_33611_33660 = state_33553;
(statearr_33611_33660[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33661 = state_33553;
state_33553 = G__33661;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32481__auto__ = function(state_33553){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32481__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32481__auto____1.call(this,state_33553);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32481__auto____0;
cljs$core$async$mix_$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32481__auto____1;
return cljs$core$async$mix_$_state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto___33613,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32570__auto__ = (function (){var statearr_33612 = f__32569__auto__.call(null);
(statearr_33612[(6)] = c__32568__auto___33613);

return statearr_33612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto___33613,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28969__auto__ = (((p == null))?null:p);
var m__28970__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28970__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28969__auto__ = (((p == null))?null:p);
var m__28970__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,p,v,ch);
} else {
var m__28970__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33663 = arguments.length;
switch (G__33663) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28969__auto__ = (((p == null))?null:p);
var m__28970__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,p);
} else {
var m__28970__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28969__auto__ = (((p == null))?null:p);
var m__28970__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,p,v);
} else {
var m__28970__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33667 = arguments.length;
switch (G__33667) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28286__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28286__auto__,mults){
return (function (p1__33665_SHARP_){
if(cljs.core.truth_(p1__33665_SHARP_.call(null,topic))){
return p1__33665_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33665_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28286__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33668 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33668 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33669){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33669 = meta33669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33670,meta33669__$1){
var self__ = this;
var _33670__$1 = this;
return (new cljs.core.async.t_cljs$core$async33668(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33669__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33668.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33670){
var self__ = this;
var _33670__$1 = this;
return self__.meta33669;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33668.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33668.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33668.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33668.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33668.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33668.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33668.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33668.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33669","meta33669",-910467561,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33668.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33668.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33668";

cljs.core.async.t_cljs$core$async33668.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async33668");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33668 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33668(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33669){
return (new cljs.core.async.t_cljs$core$async33668(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33669));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33668(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32568__auto___33788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto___33788,mults,ensure_mult,p){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto___33788,mults,ensure_mult,p){
return (function (state_33742){
var state_val_33743 = (state_33742[(1)]);
if((state_val_33743 === (7))){
var inst_33738 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
var statearr_33744_33789 = state_33742__$1;
(statearr_33744_33789[(2)] = inst_33738);

(statearr_33744_33789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (20))){
var state_33742__$1 = state_33742;
var statearr_33745_33790 = state_33742__$1;
(statearr_33745_33790[(2)] = null);

(statearr_33745_33790[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (1))){
var state_33742__$1 = state_33742;
var statearr_33746_33791 = state_33742__$1;
(statearr_33746_33791[(2)] = null);

(statearr_33746_33791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (24))){
var inst_33721 = (state_33742[(7)]);
var inst_33730 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33721);
var state_33742__$1 = state_33742;
var statearr_33747_33792 = state_33742__$1;
(statearr_33747_33792[(2)] = inst_33730);

(statearr_33747_33792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (4))){
var inst_33673 = (state_33742[(8)]);
var inst_33673__$1 = (state_33742[(2)]);
var inst_33674 = (inst_33673__$1 == null);
var state_33742__$1 = (function (){var statearr_33748 = state_33742;
(statearr_33748[(8)] = inst_33673__$1);

return statearr_33748;
})();
if(cljs.core.truth_(inst_33674)){
var statearr_33749_33793 = state_33742__$1;
(statearr_33749_33793[(1)] = (5));

} else {
var statearr_33750_33794 = state_33742__$1;
(statearr_33750_33794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (15))){
var inst_33715 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
var statearr_33751_33795 = state_33742__$1;
(statearr_33751_33795[(2)] = inst_33715);

(statearr_33751_33795[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (21))){
var inst_33735 = (state_33742[(2)]);
var state_33742__$1 = (function (){var statearr_33752 = state_33742;
(statearr_33752[(9)] = inst_33735);

return statearr_33752;
})();
var statearr_33753_33796 = state_33742__$1;
(statearr_33753_33796[(2)] = null);

(statearr_33753_33796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (13))){
var inst_33697 = (state_33742[(10)]);
var inst_33699 = cljs.core.chunked_seq_QMARK_.call(null,inst_33697);
var state_33742__$1 = state_33742;
if(inst_33699){
var statearr_33754_33797 = state_33742__$1;
(statearr_33754_33797[(1)] = (16));

} else {
var statearr_33755_33798 = state_33742__$1;
(statearr_33755_33798[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (22))){
var inst_33727 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
if(cljs.core.truth_(inst_33727)){
var statearr_33756_33799 = state_33742__$1;
(statearr_33756_33799[(1)] = (23));

} else {
var statearr_33757_33800 = state_33742__$1;
(statearr_33757_33800[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (6))){
var inst_33723 = (state_33742[(11)]);
var inst_33673 = (state_33742[(8)]);
var inst_33721 = (state_33742[(7)]);
var inst_33721__$1 = topic_fn.call(null,inst_33673);
var inst_33722 = cljs.core.deref.call(null,mults);
var inst_33723__$1 = cljs.core.get.call(null,inst_33722,inst_33721__$1);
var state_33742__$1 = (function (){var statearr_33758 = state_33742;
(statearr_33758[(11)] = inst_33723__$1);

(statearr_33758[(7)] = inst_33721__$1);

return statearr_33758;
})();
if(cljs.core.truth_(inst_33723__$1)){
var statearr_33759_33801 = state_33742__$1;
(statearr_33759_33801[(1)] = (19));

} else {
var statearr_33760_33802 = state_33742__$1;
(statearr_33760_33802[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (25))){
var inst_33732 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
var statearr_33761_33803 = state_33742__$1;
(statearr_33761_33803[(2)] = inst_33732);

(statearr_33761_33803[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (17))){
var inst_33697 = (state_33742[(10)]);
var inst_33706 = cljs.core.first.call(null,inst_33697);
var inst_33707 = cljs.core.async.muxch_STAR_.call(null,inst_33706);
var inst_33708 = cljs.core.async.close_BANG_.call(null,inst_33707);
var inst_33709 = cljs.core.next.call(null,inst_33697);
var inst_33683 = inst_33709;
var inst_33684 = null;
var inst_33685 = (0);
var inst_33686 = (0);
var state_33742__$1 = (function (){var statearr_33762 = state_33742;
(statearr_33762[(12)] = inst_33708);

(statearr_33762[(13)] = inst_33685);

(statearr_33762[(14)] = inst_33686);

(statearr_33762[(15)] = inst_33683);

(statearr_33762[(16)] = inst_33684);

return statearr_33762;
})();
var statearr_33763_33804 = state_33742__$1;
(statearr_33763_33804[(2)] = null);

(statearr_33763_33804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (3))){
var inst_33740 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33742__$1,inst_33740);
} else {
if((state_val_33743 === (12))){
var inst_33717 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
var statearr_33764_33805 = state_33742__$1;
(statearr_33764_33805[(2)] = inst_33717);

(statearr_33764_33805[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (2))){
var state_33742__$1 = state_33742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33742__$1,(4),ch);
} else {
if((state_val_33743 === (23))){
var state_33742__$1 = state_33742;
var statearr_33765_33806 = state_33742__$1;
(statearr_33765_33806[(2)] = null);

(statearr_33765_33806[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (19))){
var inst_33723 = (state_33742[(11)]);
var inst_33673 = (state_33742[(8)]);
var inst_33725 = cljs.core.async.muxch_STAR_.call(null,inst_33723);
var state_33742__$1 = state_33742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33742__$1,(22),inst_33725,inst_33673);
} else {
if((state_val_33743 === (11))){
var inst_33683 = (state_33742[(15)]);
var inst_33697 = (state_33742[(10)]);
var inst_33697__$1 = cljs.core.seq.call(null,inst_33683);
var state_33742__$1 = (function (){var statearr_33766 = state_33742;
(statearr_33766[(10)] = inst_33697__$1);

return statearr_33766;
})();
if(inst_33697__$1){
var statearr_33767_33807 = state_33742__$1;
(statearr_33767_33807[(1)] = (13));

} else {
var statearr_33768_33808 = state_33742__$1;
(statearr_33768_33808[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (9))){
var inst_33719 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
var statearr_33769_33809 = state_33742__$1;
(statearr_33769_33809[(2)] = inst_33719);

(statearr_33769_33809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (5))){
var inst_33680 = cljs.core.deref.call(null,mults);
var inst_33681 = cljs.core.vals.call(null,inst_33680);
var inst_33682 = cljs.core.seq.call(null,inst_33681);
var inst_33683 = inst_33682;
var inst_33684 = null;
var inst_33685 = (0);
var inst_33686 = (0);
var state_33742__$1 = (function (){var statearr_33770 = state_33742;
(statearr_33770[(13)] = inst_33685);

(statearr_33770[(14)] = inst_33686);

(statearr_33770[(15)] = inst_33683);

(statearr_33770[(16)] = inst_33684);

return statearr_33770;
})();
var statearr_33771_33810 = state_33742__$1;
(statearr_33771_33810[(2)] = null);

(statearr_33771_33810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (14))){
var state_33742__$1 = state_33742;
var statearr_33775_33811 = state_33742__$1;
(statearr_33775_33811[(2)] = null);

(statearr_33775_33811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (16))){
var inst_33697 = (state_33742[(10)]);
var inst_33701 = cljs.core.chunk_first.call(null,inst_33697);
var inst_33702 = cljs.core.chunk_rest.call(null,inst_33697);
var inst_33703 = cljs.core.count.call(null,inst_33701);
var inst_33683 = inst_33702;
var inst_33684 = inst_33701;
var inst_33685 = inst_33703;
var inst_33686 = (0);
var state_33742__$1 = (function (){var statearr_33776 = state_33742;
(statearr_33776[(13)] = inst_33685);

(statearr_33776[(14)] = inst_33686);

(statearr_33776[(15)] = inst_33683);

(statearr_33776[(16)] = inst_33684);

return statearr_33776;
})();
var statearr_33777_33812 = state_33742__$1;
(statearr_33777_33812[(2)] = null);

(statearr_33777_33812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (10))){
var inst_33685 = (state_33742[(13)]);
var inst_33686 = (state_33742[(14)]);
var inst_33683 = (state_33742[(15)]);
var inst_33684 = (state_33742[(16)]);
var inst_33691 = cljs.core._nth.call(null,inst_33684,inst_33686);
var inst_33692 = cljs.core.async.muxch_STAR_.call(null,inst_33691);
var inst_33693 = cljs.core.async.close_BANG_.call(null,inst_33692);
var inst_33694 = (inst_33686 + (1));
var tmp33772 = inst_33685;
var tmp33773 = inst_33683;
var tmp33774 = inst_33684;
var inst_33683__$1 = tmp33773;
var inst_33684__$1 = tmp33774;
var inst_33685__$1 = tmp33772;
var inst_33686__$1 = inst_33694;
var state_33742__$1 = (function (){var statearr_33778 = state_33742;
(statearr_33778[(17)] = inst_33693);

(statearr_33778[(13)] = inst_33685__$1);

(statearr_33778[(14)] = inst_33686__$1);

(statearr_33778[(15)] = inst_33683__$1);

(statearr_33778[(16)] = inst_33684__$1);

return statearr_33778;
})();
var statearr_33779_33813 = state_33742__$1;
(statearr_33779_33813[(2)] = null);

(statearr_33779_33813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (18))){
var inst_33712 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
var statearr_33780_33814 = state_33742__$1;
(statearr_33780_33814[(2)] = inst_33712);

(statearr_33780_33814[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (8))){
var inst_33685 = (state_33742[(13)]);
var inst_33686 = (state_33742[(14)]);
var inst_33688 = (inst_33686 < inst_33685);
var inst_33689 = inst_33688;
var state_33742__$1 = state_33742;
if(cljs.core.truth_(inst_33689)){
var statearr_33781_33815 = state_33742__$1;
(statearr_33781_33815[(1)] = (10));

} else {
var statearr_33782_33816 = state_33742__$1;
(statearr_33782_33816[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32568__auto___33788,mults,ensure_mult,p))
;
return ((function (switch__32480__auto__,c__32568__auto___33788,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32481__auto__ = null;
var cljs$core$async$state_machine__32481__auto____0 = (function (){
var statearr_33783 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33783[(0)] = cljs$core$async$state_machine__32481__auto__);

(statearr_33783[(1)] = (1));

return statearr_33783;
});
var cljs$core$async$state_machine__32481__auto____1 = (function (state_33742){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_33742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e33784){if((e33784 instanceof Object)){
var ex__32484__auto__ = e33784;
var statearr_33785_33817 = state_33742;
(statearr_33785_33817[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33818 = state_33742;
state_33742 = G__33818;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
cljs$core$async$state_machine__32481__auto__ = function(state_33742){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32481__auto____1.call(this,state_33742);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32481__auto____0;
cljs$core$async$state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32481__auto____1;
return cljs$core$async$state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto___33788,mults,ensure_mult,p))
})();
var state__32570__auto__ = (function (){var statearr_33786 = f__32569__auto__.call(null);
(statearr_33786[(6)] = c__32568__auto___33788);

return statearr_33786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto___33788,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33820 = arguments.length;
switch (G__33820) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33823 = arguments.length;
switch (G__33823) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33826 = arguments.length;
switch (G__33826) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__32568__auto___33893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto___33893,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto___33893,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33865){
var state_val_33866 = (state_33865[(1)]);
if((state_val_33866 === (7))){
var state_33865__$1 = state_33865;
var statearr_33867_33894 = state_33865__$1;
(statearr_33867_33894[(2)] = null);

(statearr_33867_33894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (1))){
var state_33865__$1 = state_33865;
var statearr_33868_33895 = state_33865__$1;
(statearr_33868_33895[(2)] = null);

(statearr_33868_33895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (4))){
var inst_33829 = (state_33865[(7)]);
var inst_33831 = (inst_33829 < cnt);
var state_33865__$1 = state_33865;
if(cljs.core.truth_(inst_33831)){
var statearr_33869_33896 = state_33865__$1;
(statearr_33869_33896[(1)] = (6));

} else {
var statearr_33870_33897 = state_33865__$1;
(statearr_33870_33897[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (15))){
var inst_33861 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33871_33898 = state_33865__$1;
(statearr_33871_33898[(2)] = inst_33861);

(statearr_33871_33898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (13))){
var inst_33854 = cljs.core.async.close_BANG_.call(null,out);
var state_33865__$1 = state_33865;
var statearr_33872_33899 = state_33865__$1;
(statearr_33872_33899[(2)] = inst_33854);

(statearr_33872_33899[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (6))){
var state_33865__$1 = state_33865;
var statearr_33873_33900 = state_33865__$1;
(statearr_33873_33900[(2)] = null);

(statearr_33873_33900[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (3))){
var inst_33863 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33865__$1,inst_33863);
} else {
if((state_val_33866 === (12))){
var inst_33851 = (state_33865[(8)]);
var inst_33851__$1 = (state_33865[(2)]);
var inst_33852 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33851__$1);
var state_33865__$1 = (function (){var statearr_33874 = state_33865;
(statearr_33874[(8)] = inst_33851__$1);

return statearr_33874;
})();
if(cljs.core.truth_(inst_33852)){
var statearr_33875_33901 = state_33865__$1;
(statearr_33875_33901[(1)] = (13));

} else {
var statearr_33876_33902 = state_33865__$1;
(statearr_33876_33902[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (2))){
var inst_33828 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33829 = (0);
var state_33865__$1 = (function (){var statearr_33877 = state_33865;
(statearr_33877[(7)] = inst_33829);

(statearr_33877[(9)] = inst_33828);

return statearr_33877;
})();
var statearr_33878_33903 = state_33865__$1;
(statearr_33878_33903[(2)] = null);

(statearr_33878_33903[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (11))){
var inst_33829 = (state_33865[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33865,(10),Object,null,(9));
var inst_33838 = chs__$1.call(null,inst_33829);
var inst_33839 = done.call(null,inst_33829);
var inst_33840 = cljs.core.async.take_BANG_.call(null,inst_33838,inst_33839);
var state_33865__$1 = state_33865;
var statearr_33879_33904 = state_33865__$1;
(statearr_33879_33904[(2)] = inst_33840);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33865__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (9))){
var inst_33829 = (state_33865[(7)]);
var inst_33842 = (state_33865[(2)]);
var inst_33843 = (inst_33829 + (1));
var inst_33829__$1 = inst_33843;
var state_33865__$1 = (function (){var statearr_33880 = state_33865;
(statearr_33880[(7)] = inst_33829__$1);

(statearr_33880[(10)] = inst_33842);

return statearr_33880;
})();
var statearr_33881_33905 = state_33865__$1;
(statearr_33881_33905[(2)] = null);

(statearr_33881_33905[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (5))){
var inst_33849 = (state_33865[(2)]);
var state_33865__$1 = (function (){var statearr_33882 = state_33865;
(statearr_33882[(11)] = inst_33849);

return statearr_33882;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33865__$1,(12),dchan);
} else {
if((state_val_33866 === (14))){
var inst_33851 = (state_33865[(8)]);
var inst_33856 = cljs.core.apply.call(null,f,inst_33851);
var state_33865__$1 = state_33865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33865__$1,(16),out,inst_33856);
} else {
if((state_val_33866 === (16))){
var inst_33858 = (state_33865[(2)]);
var state_33865__$1 = (function (){var statearr_33883 = state_33865;
(statearr_33883[(12)] = inst_33858);

return statearr_33883;
})();
var statearr_33884_33906 = state_33865__$1;
(statearr_33884_33906[(2)] = null);

(statearr_33884_33906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (10))){
var inst_33833 = (state_33865[(2)]);
var inst_33834 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33865__$1 = (function (){var statearr_33885 = state_33865;
(statearr_33885[(13)] = inst_33833);

return statearr_33885;
})();
var statearr_33886_33907 = state_33865__$1;
(statearr_33886_33907[(2)] = inst_33834);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33865__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (8))){
var inst_33847 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33887_33908 = state_33865__$1;
(statearr_33887_33908[(2)] = inst_33847);

(statearr_33887_33908[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32568__auto___33893,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32480__auto__,c__32568__auto___33893,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32481__auto__ = null;
var cljs$core$async$state_machine__32481__auto____0 = (function (){
var statearr_33888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33888[(0)] = cljs$core$async$state_machine__32481__auto__);

(statearr_33888[(1)] = (1));

return statearr_33888;
});
var cljs$core$async$state_machine__32481__auto____1 = (function (state_33865){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_33865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e33889){if((e33889 instanceof Object)){
var ex__32484__auto__ = e33889;
var statearr_33890_33909 = state_33865;
(statearr_33890_33909[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33910 = state_33865;
state_33865 = G__33910;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
cljs$core$async$state_machine__32481__auto__ = function(state_33865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32481__auto____1.call(this,state_33865);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32481__auto____0;
cljs$core$async$state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32481__auto____1;
return cljs$core$async$state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto___33893,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32570__auto__ = (function (){var statearr_33891 = f__32569__auto__.call(null);
(statearr_33891[(6)] = c__32568__auto___33893);

return statearr_33891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto___33893,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33913 = arguments.length;
switch (G__33913) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32568__auto___33967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto___33967,out){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto___33967,out){
return (function (state_33945){
var state_val_33946 = (state_33945[(1)]);
if((state_val_33946 === (7))){
var inst_33924 = (state_33945[(7)]);
var inst_33925 = (state_33945[(8)]);
var inst_33924__$1 = (state_33945[(2)]);
var inst_33925__$1 = cljs.core.nth.call(null,inst_33924__$1,(0),null);
var inst_33926 = cljs.core.nth.call(null,inst_33924__$1,(1),null);
var inst_33927 = (inst_33925__$1 == null);
var state_33945__$1 = (function (){var statearr_33947 = state_33945;
(statearr_33947[(7)] = inst_33924__$1);

(statearr_33947[(9)] = inst_33926);

(statearr_33947[(8)] = inst_33925__$1);

return statearr_33947;
})();
if(cljs.core.truth_(inst_33927)){
var statearr_33948_33968 = state_33945__$1;
(statearr_33948_33968[(1)] = (8));

} else {
var statearr_33949_33969 = state_33945__$1;
(statearr_33949_33969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (1))){
var inst_33914 = cljs.core.vec.call(null,chs);
var inst_33915 = inst_33914;
var state_33945__$1 = (function (){var statearr_33950 = state_33945;
(statearr_33950[(10)] = inst_33915);

return statearr_33950;
})();
var statearr_33951_33970 = state_33945__$1;
(statearr_33951_33970[(2)] = null);

(statearr_33951_33970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (4))){
var inst_33915 = (state_33945[(10)]);
var state_33945__$1 = state_33945;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33945__$1,(7),inst_33915);
} else {
if((state_val_33946 === (6))){
var inst_33941 = (state_33945[(2)]);
var state_33945__$1 = state_33945;
var statearr_33952_33971 = state_33945__$1;
(statearr_33952_33971[(2)] = inst_33941);

(statearr_33952_33971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (3))){
var inst_33943 = (state_33945[(2)]);
var state_33945__$1 = state_33945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33945__$1,inst_33943);
} else {
if((state_val_33946 === (2))){
var inst_33915 = (state_33945[(10)]);
var inst_33917 = cljs.core.count.call(null,inst_33915);
var inst_33918 = (inst_33917 > (0));
var state_33945__$1 = state_33945;
if(cljs.core.truth_(inst_33918)){
var statearr_33954_33972 = state_33945__$1;
(statearr_33954_33972[(1)] = (4));

} else {
var statearr_33955_33973 = state_33945__$1;
(statearr_33955_33973[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (11))){
var inst_33915 = (state_33945[(10)]);
var inst_33934 = (state_33945[(2)]);
var tmp33953 = inst_33915;
var inst_33915__$1 = tmp33953;
var state_33945__$1 = (function (){var statearr_33956 = state_33945;
(statearr_33956[(11)] = inst_33934);

(statearr_33956[(10)] = inst_33915__$1);

return statearr_33956;
})();
var statearr_33957_33974 = state_33945__$1;
(statearr_33957_33974[(2)] = null);

(statearr_33957_33974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (9))){
var inst_33925 = (state_33945[(8)]);
var state_33945__$1 = state_33945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33945__$1,(11),out,inst_33925);
} else {
if((state_val_33946 === (5))){
var inst_33939 = cljs.core.async.close_BANG_.call(null,out);
var state_33945__$1 = state_33945;
var statearr_33958_33975 = state_33945__$1;
(statearr_33958_33975[(2)] = inst_33939);

(statearr_33958_33975[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (10))){
var inst_33937 = (state_33945[(2)]);
var state_33945__$1 = state_33945;
var statearr_33959_33976 = state_33945__$1;
(statearr_33959_33976[(2)] = inst_33937);

(statearr_33959_33976[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (8))){
var inst_33924 = (state_33945[(7)]);
var inst_33926 = (state_33945[(9)]);
var inst_33915 = (state_33945[(10)]);
var inst_33925 = (state_33945[(8)]);
var inst_33929 = (function (){var cs = inst_33915;
var vec__33920 = inst_33924;
var v = inst_33925;
var c = inst_33926;
return ((function (cs,vec__33920,v,c,inst_33924,inst_33926,inst_33915,inst_33925,state_val_33946,c__32568__auto___33967,out){
return (function (p1__33911_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33911_SHARP_);
});
;})(cs,vec__33920,v,c,inst_33924,inst_33926,inst_33915,inst_33925,state_val_33946,c__32568__auto___33967,out))
})();
var inst_33930 = cljs.core.filterv.call(null,inst_33929,inst_33915);
var inst_33915__$1 = inst_33930;
var state_33945__$1 = (function (){var statearr_33960 = state_33945;
(statearr_33960[(10)] = inst_33915__$1);

return statearr_33960;
})();
var statearr_33961_33977 = state_33945__$1;
(statearr_33961_33977[(2)] = null);

(statearr_33961_33977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32568__auto___33967,out))
;
return ((function (switch__32480__auto__,c__32568__auto___33967,out){
return (function() {
var cljs$core$async$state_machine__32481__auto__ = null;
var cljs$core$async$state_machine__32481__auto____0 = (function (){
var statearr_33962 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33962[(0)] = cljs$core$async$state_machine__32481__auto__);

(statearr_33962[(1)] = (1));

return statearr_33962;
});
var cljs$core$async$state_machine__32481__auto____1 = (function (state_33945){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_33945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e33963){if((e33963 instanceof Object)){
var ex__32484__auto__ = e33963;
var statearr_33964_33978 = state_33945;
(statearr_33964_33978[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33979 = state_33945;
state_33945 = G__33979;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
cljs$core$async$state_machine__32481__auto__ = function(state_33945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32481__auto____1.call(this,state_33945);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32481__auto____0;
cljs$core$async$state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32481__auto____1;
return cljs$core$async$state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto___33967,out))
})();
var state__32570__auto__ = (function (){var statearr_33965 = f__32569__auto__.call(null);
(statearr_33965[(6)] = c__32568__auto___33967);

return statearr_33965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto___33967,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33981 = arguments.length;
switch (G__33981) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32568__auto___34026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto___34026,out){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto___34026,out){
return (function (state_34005){
var state_val_34006 = (state_34005[(1)]);
if((state_val_34006 === (7))){
var inst_33987 = (state_34005[(7)]);
var inst_33987__$1 = (state_34005[(2)]);
var inst_33988 = (inst_33987__$1 == null);
var inst_33989 = cljs.core.not.call(null,inst_33988);
var state_34005__$1 = (function (){var statearr_34007 = state_34005;
(statearr_34007[(7)] = inst_33987__$1);

return statearr_34007;
})();
if(inst_33989){
var statearr_34008_34027 = state_34005__$1;
(statearr_34008_34027[(1)] = (8));

} else {
var statearr_34009_34028 = state_34005__$1;
(statearr_34009_34028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34006 === (1))){
var inst_33982 = (0);
var state_34005__$1 = (function (){var statearr_34010 = state_34005;
(statearr_34010[(8)] = inst_33982);

return statearr_34010;
})();
var statearr_34011_34029 = state_34005__$1;
(statearr_34011_34029[(2)] = null);

(statearr_34011_34029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34006 === (4))){
var state_34005__$1 = state_34005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34005__$1,(7),ch);
} else {
if((state_val_34006 === (6))){
var inst_34000 = (state_34005[(2)]);
var state_34005__$1 = state_34005;
var statearr_34012_34030 = state_34005__$1;
(statearr_34012_34030[(2)] = inst_34000);

(statearr_34012_34030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34006 === (3))){
var inst_34002 = (state_34005[(2)]);
var inst_34003 = cljs.core.async.close_BANG_.call(null,out);
var state_34005__$1 = (function (){var statearr_34013 = state_34005;
(statearr_34013[(9)] = inst_34002);

return statearr_34013;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34005__$1,inst_34003);
} else {
if((state_val_34006 === (2))){
var inst_33982 = (state_34005[(8)]);
var inst_33984 = (inst_33982 < n);
var state_34005__$1 = state_34005;
if(cljs.core.truth_(inst_33984)){
var statearr_34014_34031 = state_34005__$1;
(statearr_34014_34031[(1)] = (4));

} else {
var statearr_34015_34032 = state_34005__$1;
(statearr_34015_34032[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34006 === (11))){
var inst_33982 = (state_34005[(8)]);
var inst_33992 = (state_34005[(2)]);
var inst_33993 = (inst_33982 + (1));
var inst_33982__$1 = inst_33993;
var state_34005__$1 = (function (){var statearr_34016 = state_34005;
(statearr_34016[(8)] = inst_33982__$1);

(statearr_34016[(10)] = inst_33992);

return statearr_34016;
})();
var statearr_34017_34033 = state_34005__$1;
(statearr_34017_34033[(2)] = null);

(statearr_34017_34033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34006 === (9))){
var state_34005__$1 = state_34005;
var statearr_34018_34034 = state_34005__$1;
(statearr_34018_34034[(2)] = null);

(statearr_34018_34034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34006 === (5))){
var state_34005__$1 = state_34005;
var statearr_34019_34035 = state_34005__$1;
(statearr_34019_34035[(2)] = null);

(statearr_34019_34035[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34006 === (10))){
var inst_33997 = (state_34005[(2)]);
var state_34005__$1 = state_34005;
var statearr_34020_34036 = state_34005__$1;
(statearr_34020_34036[(2)] = inst_33997);

(statearr_34020_34036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34006 === (8))){
var inst_33987 = (state_34005[(7)]);
var state_34005__$1 = state_34005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34005__$1,(11),out,inst_33987);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32568__auto___34026,out))
;
return ((function (switch__32480__auto__,c__32568__auto___34026,out){
return (function() {
var cljs$core$async$state_machine__32481__auto__ = null;
var cljs$core$async$state_machine__32481__auto____0 = (function (){
var statearr_34021 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34021[(0)] = cljs$core$async$state_machine__32481__auto__);

(statearr_34021[(1)] = (1));

return statearr_34021;
});
var cljs$core$async$state_machine__32481__auto____1 = (function (state_34005){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_34005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e34022){if((e34022 instanceof Object)){
var ex__32484__auto__ = e34022;
var statearr_34023_34037 = state_34005;
(statearr_34023_34037[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34038 = state_34005;
state_34005 = G__34038;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
cljs$core$async$state_machine__32481__auto__ = function(state_34005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32481__auto____1.call(this,state_34005);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32481__auto____0;
cljs$core$async$state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32481__auto____1;
return cljs$core$async$state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto___34026,out))
})();
var state__32570__auto__ = (function (){var statearr_34024 = f__32569__auto__.call(null);
(statearr_34024[(6)] = c__32568__auto___34026);

return statearr_34024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto___34026,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34040 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34040 = (function (f,ch,meta34041){
this.f = f;
this.ch = ch;
this.meta34041 = meta34041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34042,meta34041__$1){
var self__ = this;
var _34042__$1 = this;
return (new cljs.core.async.t_cljs$core$async34040(self__.f,self__.ch,meta34041__$1));
});

cljs.core.async.t_cljs$core$async34040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34042){
var self__ = this;
var _34042__$1 = this;
return self__.meta34041;
});

cljs.core.async.t_cljs$core$async34040.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34040.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34040.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34040.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34040.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34043 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34043 = (function (f,ch,meta34041,_,fn1,meta34044){
this.f = f;
this.ch = ch;
this.meta34041 = meta34041;
this._ = _;
this.fn1 = fn1;
this.meta34044 = meta34044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34045,meta34044__$1){
var self__ = this;
var _34045__$1 = this;
return (new cljs.core.async.t_cljs$core$async34043(self__.f,self__.ch,self__.meta34041,self__._,self__.fn1,meta34044__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34043.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34045){
var self__ = this;
var _34045__$1 = this;
return self__.meta34044;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34043.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34043.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34043.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34043.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34039_SHARP_){
return f1.call(null,(((p1__34039_SHARP_ == null))?null:self__.f.call(null,p1__34039_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34043.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34041","meta34041",-1984561289,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34040","cljs.core.async/t_cljs$core$async34040",1589360596,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34044","meta34044",1472187434,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34043.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34043.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34043";

cljs.core.async.t_cljs$core$async34043.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async34043");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34043 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34043(f__$1,ch__$1,meta34041__$1,___$2,fn1__$1,meta34044){
return (new cljs.core.async.t_cljs$core$async34043(f__$1,ch__$1,meta34041__$1,___$2,fn1__$1,meta34044));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34043(self__.f,self__.ch,self__.meta34041,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28274__auto__ = ret;
if(cljs.core.truth_(and__28274__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28274__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34040.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34040.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34040.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34041","meta34041",-1984561289,null)], null);
});

cljs.core.async.t_cljs$core$async34040.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34040.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34040";

cljs.core.async.t_cljs$core$async34040.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async34040");
});

cljs.core.async.__GT_t_cljs$core$async34040 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34040(f__$1,ch__$1,meta34041){
return (new cljs.core.async.t_cljs$core$async34040(f__$1,ch__$1,meta34041));
});

}

return (new cljs.core.async.t_cljs$core$async34040(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34046 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34046 = (function (f,ch,meta34047){
this.f = f;
this.ch = ch;
this.meta34047 = meta34047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34048,meta34047__$1){
var self__ = this;
var _34048__$1 = this;
return (new cljs.core.async.t_cljs$core$async34046(self__.f,self__.ch,meta34047__$1));
});

cljs.core.async.t_cljs$core$async34046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34048){
var self__ = this;
var _34048__$1 = this;
return self__.meta34047;
});

cljs.core.async.t_cljs$core$async34046.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34046.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34046.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34046.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34046.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34046.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34046.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34047","meta34047",648671043,null)], null);
});

cljs.core.async.t_cljs$core$async34046.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34046.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34046";

cljs.core.async.t_cljs$core$async34046.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async34046");
});

cljs.core.async.__GT_t_cljs$core$async34046 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34046(f__$1,ch__$1,meta34047){
return (new cljs.core.async.t_cljs$core$async34046(f__$1,ch__$1,meta34047));
});

}

return (new cljs.core.async.t_cljs$core$async34046(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34049 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34049 = (function (p,ch,meta34050){
this.p = p;
this.ch = ch;
this.meta34050 = meta34050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34051,meta34050__$1){
var self__ = this;
var _34051__$1 = this;
return (new cljs.core.async.t_cljs$core$async34049(self__.p,self__.ch,meta34050__$1));
});

cljs.core.async.t_cljs$core$async34049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34051){
var self__ = this;
var _34051__$1 = this;
return self__.meta34050;
});

cljs.core.async.t_cljs$core$async34049.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34049.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34049.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34049.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34049.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34049.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34049.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34049.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34050","meta34050",1850301564,null)], null);
});

cljs.core.async.t_cljs$core$async34049.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34049.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34049";

cljs.core.async.t_cljs$core$async34049.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async34049");
});

cljs.core.async.__GT_t_cljs$core$async34049 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34049(p__$1,ch__$1,meta34050){
return (new cljs.core.async.t_cljs$core$async34049(p__$1,ch__$1,meta34050));
});

}

return (new cljs.core.async.t_cljs$core$async34049(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34053 = arguments.length;
switch (G__34053) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32568__auto___34093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto___34093,out){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto___34093,out){
return (function (state_34074){
var state_val_34075 = (state_34074[(1)]);
if((state_val_34075 === (7))){
var inst_34070 = (state_34074[(2)]);
var state_34074__$1 = state_34074;
var statearr_34076_34094 = state_34074__$1;
(statearr_34076_34094[(2)] = inst_34070);

(statearr_34076_34094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34075 === (1))){
var state_34074__$1 = state_34074;
var statearr_34077_34095 = state_34074__$1;
(statearr_34077_34095[(2)] = null);

(statearr_34077_34095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34075 === (4))){
var inst_34056 = (state_34074[(7)]);
var inst_34056__$1 = (state_34074[(2)]);
var inst_34057 = (inst_34056__$1 == null);
var state_34074__$1 = (function (){var statearr_34078 = state_34074;
(statearr_34078[(7)] = inst_34056__$1);

return statearr_34078;
})();
if(cljs.core.truth_(inst_34057)){
var statearr_34079_34096 = state_34074__$1;
(statearr_34079_34096[(1)] = (5));

} else {
var statearr_34080_34097 = state_34074__$1;
(statearr_34080_34097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34075 === (6))){
var inst_34056 = (state_34074[(7)]);
var inst_34061 = p.call(null,inst_34056);
var state_34074__$1 = state_34074;
if(cljs.core.truth_(inst_34061)){
var statearr_34081_34098 = state_34074__$1;
(statearr_34081_34098[(1)] = (8));

} else {
var statearr_34082_34099 = state_34074__$1;
(statearr_34082_34099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34075 === (3))){
var inst_34072 = (state_34074[(2)]);
var state_34074__$1 = state_34074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34074__$1,inst_34072);
} else {
if((state_val_34075 === (2))){
var state_34074__$1 = state_34074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34074__$1,(4),ch);
} else {
if((state_val_34075 === (11))){
var inst_34064 = (state_34074[(2)]);
var state_34074__$1 = state_34074;
var statearr_34083_34100 = state_34074__$1;
(statearr_34083_34100[(2)] = inst_34064);

(statearr_34083_34100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34075 === (9))){
var state_34074__$1 = state_34074;
var statearr_34084_34101 = state_34074__$1;
(statearr_34084_34101[(2)] = null);

(statearr_34084_34101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34075 === (5))){
var inst_34059 = cljs.core.async.close_BANG_.call(null,out);
var state_34074__$1 = state_34074;
var statearr_34085_34102 = state_34074__$1;
(statearr_34085_34102[(2)] = inst_34059);

(statearr_34085_34102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34075 === (10))){
var inst_34067 = (state_34074[(2)]);
var state_34074__$1 = (function (){var statearr_34086 = state_34074;
(statearr_34086[(8)] = inst_34067);

return statearr_34086;
})();
var statearr_34087_34103 = state_34074__$1;
(statearr_34087_34103[(2)] = null);

(statearr_34087_34103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34075 === (8))){
var inst_34056 = (state_34074[(7)]);
var state_34074__$1 = state_34074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34074__$1,(11),out,inst_34056);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32568__auto___34093,out))
;
return ((function (switch__32480__auto__,c__32568__auto___34093,out){
return (function() {
var cljs$core$async$state_machine__32481__auto__ = null;
var cljs$core$async$state_machine__32481__auto____0 = (function (){
var statearr_34088 = [null,null,null,null,null,null,null,null,null];
(statearr_34088[(0)] = cljs$core$async$state_machine__32481__auto__);

(statearr_34088[(1)] = (1));

return statearr_34088;
});
var cljs$core$async$state_machine__32481__auto____1 = (function (state_34074){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_34074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e34089){if((e34089 instanceof Object)){
var ex__32484__auto__ = e34089;
var statearr_34090_34104 = state_34074;
(statearr_34090_34104[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34105 = state_34074;
state_34074 = G__34105;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
cljs$core$async$state_machine__32481__auto__ = function(state_34074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32481__auto____1.call(this,state_34074);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32481__auto____0;
cljs$core$async$state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32481__auto____1;
return cljs$core$async$state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto___34093,out))
})();
var state__32570__auto__ = (function (){var statearr_34091 = f__32569__auto__.call(null);
(statearr_34091[(6)] = c__32568__auto___34093);

return statearr_34091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto___34093,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34107 = arguments.length;
switch (G__34107) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto__){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto__){
return (function (state_34170){
var state_val_34171 = (state_34170[(1)]);
if((state_val_34171 === (7))){
var inst_34166 = (state_34170[(2)]);
var state_34170__$1 = state_34170;
var statearr_34172_34210 = state_34170__$1;
(statearr_34172_34210[(2)] = inst_34166);

(statearr_34172_34210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (20))){
var inst_34136 = (state_34170[(7)]);
var inst_34147 = (state_34170[(2)]);
var inst_34148 = cljs.core.next.call(null,inst_34136);
var inst_34122 = inst_34148;
var inst_34123 = null;
var inst_34124 = (0);
var inst_34125 = (0);
var state_34170__$1 = (function (){var statearr_34173 = state_34170;
(statearr_34173[(8)] = inst_34122);

(statearr_34173[(9)] = inst_34147);

(statearr_34173[(10)] = inst_34123);

(statearr_34173[(11)] = inst_34124);

(statearr_34173[(12)] = inst_34125);

return statearr_34173;
})();
var statearr_34174_34211 = state_34170__$1;
(statearr_34174_34211[(2)] = null);

(statearr_34174_34211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (1))){
var state_34170__$1 = state_34170;
var statearr_34175_34212 = state_34170__$1;
(statearr_34175_34212[(2)] = null);

(statearr_34175_34212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (4))){
var inst_34111 = (state_34170[(13)]);
var inst_34111__$1 = (state_34170[(2)]);
var inst_34112 = (inst_34111__$1 == null);
var state_34170__$1 = (function (){var statearr_34176 = state_34170;
(statearr_34176[(13)] = inst_34111__$1);

return statearr_34176;
})();
if(cljs.core.truth_(inst_34112)){
var statearr_34177_34213 = state_34170__$1;
(statearr_34177_34213[(1)] = (5));

} else {
var statearr_34178_34214 = state_34170__$1;
(statearr_34178_34214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (15))){
var state_34170__$1 = state_34170;
var statearr_34182_34215 = state_34170__$1;
(statearr_34182_34215[(2)] = null);

(statearr_34182_34215[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (21))){
var state_34170__$1 = state_34170;
var statearr_34183_34216 = state_34170__$1;
(statearr_34183_34216[(2)] = null);

(statearr_34183_34216[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (13))){
var inst_34122 = (state_34170[(8)]);
var inst_34123 = (state_34170[(10)]);
var inst_34124 = (state_34170[(11)]);
var inst_34125 = (state_34170[(12)]);
var inst_34132 = (state_34170[(2)]);
var inst_34133 = (inst_34125 + (1));
var tmp34179 = inst_34122;
var tmp34180 = inst_34123;
var tmp34181 = inst_34124;
var inst_34122__$1 = tmp34179;
var inst_34123__$1 = tmp34180;
var inst_34124__$1 = tmp34181;
var inst_34125__$1 = inst_34133;
var state_34170__$1 = (function (){var statearr_34184 = state_34170;
(statearr_34184[(8)] = inst_34122__$1);

(statearr_34184[(14)] = inst_34132);

(statearr_34184[(10)] = inst_34123__$1);

(statearr_34184[(11)] = inst_34124__$1);

(statearr_34184[(12)] = inst_34125__$1);

return statearr_34184;
})();
var statearr_34185_34217 = state_34170__$1;
(statearr_34185_34217[(2)] = null);

(statearr_34185_34217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (22))){
var state_34170__$1 = state_34170;
var statearr_34186_34218 = state_34170__$1;
(statearr_34186_34218[(2)] = null);

(statearr_34186_34218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (6))){
var inst_34111 = (state_34170[(13)]);
var inst_34120 = f.call(null,inst_34111);
var inst_34121 = cljs.core.seq.call(null,inst_34120);
var inst_34122 = inst_34121;
var inst_34123 = null;
var inst_34124 = (0);
var inst_34125 = (0);
var state_34170__$1 = (function (){var statearr_34187 = state_34170;
(statearr_34187[(8)] = inst_34122);

(statearr_34187[(10)] = inst_34123);

(statearr_34187[(11)] = inst_34124);

(statearr_34187[(12)] = inst_34125);

return statearr_34187;
})();
var statearr_34188_34219 = state_34170__$1;
(statearr_34188_34219[(2)] = null);

(statearr_34188_34219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (17))){
var inst_34136 = (state_34170[(7)]);
var inst_34140 = cljs.core.chunk_first.call(null,inst_34136);
var inst_34141 = cljs.core.chunk_rest.call(null,inst_34136);
var inst_34142 = cljs.core.count.call(null,inst_34140);
var inst_34122 = inst_34141;
var inst_34123 = inst_34140;
var inst_34124 = inst_34142;
var inst_34125 = (0);
var state_34170__$1 = (function (){var statearr_34189 = state_34170;
(statearr_34189[(8)] = inst_34122);

(statearr_34189[(10)] = inst_34123);

(statearr_34189[(11)] = inst_34124);

(statearr_34189[(12)] = inst_34125);

return statearr_34189;
})();
var statearr_34190_34220 = state_34170__$1;
(statearr_34190_34220[(2)] = null);

(statearr_34190_34220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (3))){
var inst_34168 = (state_34170[(2)]);
var state_34170__$1 = state_34170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34170__$1,inst_34168);
} else {
if((state_val_34171 === (12))){
var inst_34156 = (state_34170[(2)]);
var state_34170__$1 = state_34170;
var statearr_34191_34221 = state_34170__$1;
(statearr_34191_34221[(2)] = inst_34156);

(statearr_34191_34221[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (2))){
var state_34170__$1 = state_34170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34170__$1,(4),in$);
} else {
if((state_val_34171 === (23))){
var inst_34164 = (state_34170[(2)]);
var state_34170__$1 = state_34170;
var statearr_34192_34222 = state_34170__$1;
(statearr_34192_34222[(2)] = inst_34164);

(statearr_34192_34222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (19))){
var inst_34151 = (state_34170[(2)]);
var state_34170__$1 = state_34170;
var statearr_34193_34223 = state_34170__$1;
(statearr_34193_34223[(2)] = inst_34151);

(statearr_34193_34223[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (11))){
var inst_34122 = (state_34170[(8)]);
var inst_34136 = (state_34170[(7)]);
var inst_34136__$1 = cljs.core.seq.call(null,inst_34122);
var state_34170__$1 = (function (){var statearr_34194 = state_34170;
(statearr_34194[(7)] = inst_34136__$1);

return statearr_34194;
})();
if(inst_34136__$1){
var statearr_34195_34224 = state_34170__$1;
(statearr_34195_34224[(1)] = (14));

} else {
var statearr_34196_34225 = state_34170__$1;
(statearr_34196_34225[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (9))){
var inst_34158 = (state_34170[(2)]);
var inst_34159 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34170__$1 = (function (){var statearr_34197 = state_34170;
(statearr_34197[(15)] = inst_34158);

return statearr_34197;
})();
if(cljs.core.truth_(inst_34159)){
var statearr_34198_34226 = state_34170__$1;
(statearr_34198_34226[(1)] = (21));

} else {
var statearr_34199_34227 = state_34170__$1;
(statearr_34199_34227[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (5))){
var inst_34114 = cljs.core.async.close_BANG_.call(null,out);
var state_34170__$1 = state_34170;
var statearr_34200_34228 = state_34170__$1;
(statearr_34200_34228[(2)] = inst_34114);

(statearr_34200_34228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (14))){
var inst_34136 = (state_34170[(7)]);
var inst_34138 = cljs.core.chunked_seq_QMARK_.call(null,inst_34136);
var state_34170__$1 = state_34170;
if(inst_34138){
var statearr_34201_34229 = state_34170__$1;
(statearr_34201_34229[(1)] = (17));

} else {
var statearr_34202_34230 = state_34170__$1;
(statearr_34202_34230[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (16))){
var inst_34154 = (state_34170[(2)]);
var state_34170__$1 = state_34170;
var statearr_34203_34231 = state_34170__$1;
(statearr_34203_34231[(2)] = inst_34154);

(statearr_34203_34231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (10))){
var inst_34123 = (state_34170[(10)]);
var inst_34125 = (state_34170[(12)]);
var inst_34130 = cljs.core._nth.call(null,inst_34123,inst_34125);
var state_34170__$1 = state_34170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34170__$1,(13),out,inst_34130);
} else {
if((state_val_34171 === (18))){
var inst_34136 = (state_34170[(7)]);
var inst_34145 = cljs.core.first.call(null,inst_34136);
var state_34170__$1 = state_34170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34170__$1,(20),out,inst_34145);
} else {
if((state_val_34171 === (8))){
var inst_34124 = (state_34170[(11)]);
var inst_34125 = (state_34170[(12)]);
var inst_34127 = (inst_34125 < inst_34124);
var inst_34128 = inst_34127;
var state_34170__$1 = state_34170;
if(cljs.core.truth_(inst_34128)){
var statearr_34204_34232 = state_34170__$1;
(statearr_34204_34232[(1)] = (10));

} else {
var statearr_34205_34233 = state_34170__$1;
(statearr_34205_34233[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32568__auto__))
;
return ((function (switch__32480__auto__,c__32568__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32481__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32481__auto____0 = (function (){
var statearr_34206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34206[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32481__auto__);

(statearr_34206[(1)] = (1));

return statearr_34206;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32481__auto____1 = (function (state_34170){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_34170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e34207){if((e34207 instanceof Object)){
var ex__32484__auto__ = e34207;
var statearr_34208_34234 = state_34170;
(statearr_34208_34234[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34235 = state_34170;
state_34170 = G__34235;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32481__auto__ = function(state_34170){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32481__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32481__auto____1.call(this,state_34170);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32481__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32481__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto__))
})();
var state__32570__auto__ = (function (){var statearr_34209 = f__32569__auto__.call(null);
(statearr_34209[(6)] = c__32568__auto__);

return statearr_34209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto__))
);

return c__32568__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34237 = arguments.length;
switch (G__34237) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34240 = arguments.length;
switch (G__34240) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34243 = arguments.length;
switch (G__34243) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32568__auto___34290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto___34290,out){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto___34290,out){
return (function (state_34267){
var state_val_34268 = (state_34267[(1)]);
if((state_val_34268 === (7))){
var inst_34262 = (state_34267[(2)]);
var state_34267__$1 = state_34267;
var statearr_34269_34291 = state_34267__$1;
(statearr_34269_34291[(2)] = inst_34262);

(statearr_34269_34291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (1))){
var inst_34244 = null;
var state_34267__$1 = (function (){var statearr_34270 = state_34267;
(statearr_34270[(7)] = inst_34244);

return statearr_34270;
})();
var statearr_34271_34292 = state_34267__$1;
(statearr_34271_34292[(2)] = null);

(statearr_34271_34292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (4))){
var inst_34247 = (state_34267[(8)]);
var inst_34247__$1 = (state_34267[(2)]);
var inst_34248 = (inst_34247__$1 == null);
var inst_34249 = cljs.core.not.call(null,inst_34248);
var state_34267__$1 = (function (){var statearr_34272 = state_34267;
(statearr_34272[(8)] = inst_34247__$1);

return statearr_34272;
})();
if(inst_34249){
var statearr_34273_34293 = state_34267__$1;
(statearr_34273_34293[(1)] = (5));

} else {
var statearr_34274_34294 = state_34267__$1;
(statearr_34274_34294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (6))){
var state_34267__$1 = state_34267;
var statearr_34275_34295 = state_34267__$1;
(statearr_34275_34295[(2)] = null);

(statearr_34275_34295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (3))){
var inst_34264 = (state_34267[(2)]);
var inst_34265 = cljs.core.async.close_BANG_.call(null,out);
var state_34267__$1 = (function (){var statearr_34276 = state_34267;
(statearr_34276[(9)] = inst_34264);

return statearr_34276;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34267__$1,inst_34265);
} else {
if((state_val_34268 === (2))){
var state_34267__$1 = state_34267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34267__$1,(4),ch);
} else {
if((state_val_34268 === (11))){
var inst_34247 = (state_34267[(8)]);
var inst_34256 = (state_34267[(2)]);
var inst_34244 = inst_34247;
var state_34267__$1 = (function (){var statearr_34277 = state_34267;
(statearr_34277[(7)] = inst_34244);

(statearr_34277[(10)] = inst_34256);

return statearr_34277;
})();
var statearr_34278_34296 = state_34267__$1;
(statearr_34278_34296[(2)] = null);

(statearr_34278_34296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (9))){
var inst_34247 = (state_34267[(8)]);
var state_34267__$1 = state_34267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34267__$1,(11),out,inst_34247);
} else {
if((state_val_34268 === (5))){
var inst_34244 = (state_34267[(7)]);
var inst_34247 = (state_34267[(8)]);
var inst_34251 = cljs.core._EQ_.call(null,inst_34247,inst_34244);
var state_34267__$1 = state_34267;
if(inst_34251){
var statearr_34280_34297 = state_34267__$1;
(statearr_34280_34297[(1)] = (8));

} else {
var statearr_34281_34298 = state_34267__$1;
(statearr_34281_34298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (10))){
var inst_34259 = (state_34267[(2)]);
var state_34267__$1 = state_34267;
var statearr_34282_34299 = state_34267__$1;
(statearr_34282_34299[(2)] = inst_34259);

(statearr_34282_34299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (8))){
var inst_34244 = (state_34267[(7)]);
var tmp34279 = inst_34244;
var inst_34244__$1 = tmp34279;
var state_34267__$1 = (function (){var statearr_34283 = state_34267;
(statearr_34283[(7)] = inst_34244__$1);

return statearr_34283;
})();
var statearr_34284_34300 = state_34267__$1;
(statearr_34284_34300[(2)] = null);

(statearr_34284_34300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32568__auto___34290,out))
;
return ((function (switch__32480__auto__,c__32568__auto___34290,out){
return (function() {
var cljs$core$async$state_machine__32481__auto__ = null;
var cljs$core$async$state_machine__32481__auto____0 = (function (){
var statearr_34285 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34285[(0)] = cljs$core$async$state_machine__32481__auto__);

(statearr_34285[(1)] = (1));

return statearr_34285;
});
var cljs$core$async$state_machine__32481__auto____1 = (function (state_34267){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_34267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e34286){if((e34286 instanceof Object)){
var ex__32484__auto__ = e34286;
var statearr_34287_34301 = state_34267;
(statearr_34287_34301[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34302 = state_34267;
state_34267 = G__34302;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
cljs$core$async$state_machine__32481__auto__ = function(state_34267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32481__auto____1.call(this,state_34267);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32481__auto____0;
cljs$core$async$state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32481__auto____1;
return cljs$core$async$state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto___34290,out))
})();
var state__32570__auto__ = (function (){var statearr_34288 = f__32569__auto__.call(null);
(statearr_34288[(6)] = c__32568__auto___34290);

return statearr_34288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto___34290,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34304 = arguments.length;
switch (G__34304) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32568__auto___34370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto___34370,out){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto___34370,out){
return (function (state_34342){
var state_val_34343 = (state_34342[(1)]);
if((state_val_34343 === (7))){
var inst_34338 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
var statearr_34344_34371 = state_34342__$1;
(statearr_34344_34371[(2)] = inst_34338);

(statearr_34344_34371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (1))){
var inst_34305 = (new Array(n));
var inst_34306 = inst_34305;
var inst_34307 = (0);
var state_34342__$1 = (function (){var statearr_34345 = state_34342;
(statearr_34345[(7)] = inst_34306);

(statearr_34345[(8)] = inst_34307);

return statearr_34345;
})();
var statearr_34346_34372 = state_34342__$1;
(statearr_34346_34372[(2)] = null);

(statearr_34346_34372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (4))){
var inst_34310 = (state_34342[(9)]);
var inst_34310__$1 = (state_34342[(2)]);
var inst_34311 = (inst_34310__$1 == null);
var inst_34312 = cljs.core.not.call(null,inst_34311);
var state_34342__$1 = (function (){var statearr_34347 = state_34342;
(statearr_34347[(9)] = inst_34310__$1);

return statearr_34347;
})();
if(inst_34312){
var statearr_34348_34373 = state_34342__$1;
(statearr_34348_34373[(1)] = (5));

} else {
var statearr_34349_34374 = state_34342__$1;
(statearr_34349_34374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (15))){
var inst_34332 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
var statearr_34350_34375 = state_34342__$1;
(statearr_34350_34375[(2)] = inst_34332);

(statearr_34350_34375[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (13))){
var state_34342__$1 = state_34342;
var statearr_34351_34376 = state_34342__$1;
(statearr_34351_34376[(2)] = null);

(statearr_34351_34376[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (6))){
var inst_34307 = (state_34342[(8)]);
var inst_34328 = (inst_34307 > (0));
var state_34342__$1 = state_34342;
if(cljs.core.truth_(inst_34328)){
var statearr_34352_34377 = state_34342__$1;
(statearr_34352_34377[(1)] = (12));

} else {
var statearr_34353_34378 = state_34342__$1;
(statearr_34353_34378[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (3))){
var inst_34340 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34342__$1,inst_34340);
} else {
if((state_val_34343 === (12))){
var inst_34306 = (state_34342[(7)]);
var inst_34330 = cljs.core.vec.call(null,inst_34306);
var state_34342__$1 = state_34342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34342__$1,(15),out,inst_34330);
} else {
if((state_val_34343 === (2))){
var state_34342__$1 = state_34342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34342__$1,(4),ch);
} else {
if((state_val_34343 === (11))){
var inst_34322 = (state_34342[(2)]);
var inst_34323 = (new Array(n));
var inst_34306 = inst_34323;
var inst_34307 = (0);
var state_34342__$1 = (function (){var statearr_34354 = state_34342;
(statearr_34354[(7)] = inst_34306);

(statearr_34354[(8)] = inst_34307);

(statearr_34354[(10)] = inst_34322);

return statearr_34354;
})();
var statearr_34355_34379 = state_34342__$1;
(statearr_34355_34379[(2)] = null);

(statearr_34355_34379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (9))){
var inst_34306 = (state_34342[(7)]);
var inst_34320 = cljs.core.vec.call(null,inst_34306);
var state_34342__$1 = state_34342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34342__$1,(11),out,inst_34320);
} else {
if((state_val_34343 === (5))){
var inst_34315 = (state_34342[(11)]);
var inst_34310 = (state_34342[(9)]);
var inst_34306 = (state_34342[(7)]);
var inst_34307 = (state_34342[(8)]);
var inst_34314 = (inst_34306[inst_34307] = inst_34310);
var inst_34315__$1 = (inst_34307 + (1));
var inst_34316 = (inst_34315__$1 < n);
var state_34342__$1 = (function (){var statearr_34356 = state_34342;
(statearr_34356[(11)] = inst_34315__$1);

(statearr_34356[(12)] = inst_34314);

return statearr_34356;
})();
if(cljs.core.truth_(inst_34316)){
var statearr_34357_34380 = state_34342__$1;
(statearr_34357_34380[(1)] = (8));

} else {
var statearr_34358_34381 = state_34342__$1;
(statearr_34358_34381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (14))){
var inst_34335 = (state_34342[(2)]);
var inst_34336 = cljs.core.async.close_BANG_.call(null,out);
var state_34342__$1 = (function (){var statearr_34360 = state_34342;
(statearr_34360[(13)] = inst_34335);

return statearr_34360;
})();
var statearr_34361_34382 = state_34342__$1;
(statearr_34361_34382[(2)] = inst_34336);

(statearr_34361_34382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (10))){
var inst_34326 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
var statearr_34362_34383 = state_34342__$1;
(statearr_34362_34383[(2)] = inst_34326);

(statearr_34362_34383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (8))){
var inst_34315 = (state_34342[(11)]);
var inst_34306 = (state_34342[(7)]);
var tmp34359 = inst_34306;
var inst_34306__$1 = tmp34359;
var inst_34307 = inst_34315;
var state_34342__$1 = (function (){var statearr_34363 = state_34342;
(statearr_34363[(7)] = inst_34306__$1);

(statearr_34363[(8)] = inst_34307);

return statearr_34363;
})();
var statearr_34364_34384 = state_34342__$1;
(statearr_34364_34384[(2)] = null);

(statearr_34364_34384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32568__auto___34370,out))
;
return ((function (switch__32480__auto__,c__32568__auto___34370,out){
return (function() {
var cljs$core$async$state_machine__32481__auto__ = null;
var cljs$core$async$state_machine__32481__auto____0 = (function (){
var statearr_34365 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34365[(0)] = cljs$core$async$state_machine__32481__auto__);

(statearr_34365[(1)] = (1));

return statearr_34365;
});
var cljs$core$async$state_machine__32481__auto____1 = (function (state_34342){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_34342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e34366){if((e34366 instanceof Object)){
var ex__32484__auto__ = e34366;
var statearr_34367_34385 = state_34342;
(statearr_34367_34385[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34386 = state_34342;
state_34342 = G__34386;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
cljs$core$async$state_machine__32481__auto__ = function(state_34342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32481__auto____1.call(this,state_34342);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32481__auto____0;
cljs$core$async$state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32481__auto____1;
return cljs$core$async$state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto___34370,out))
})();
var state__32570__auto__ = (function (){var statearr_34368 = f__32569__auto__.call(null);
(statearr_34368[(6)] = c__32568__auto___34370);

return statearr_34368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto___34370,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34388 = arguments.length;
switch (G__34388) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32568__auto___34458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto___34458,out){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto___34458,out){
return (function (state_34430){
var state_val_34431 = (state_34430[(1)]);
if((state_val_34431 === (7))){
var inst_34426 = (state_34430[(2)]);
var state_34430__$1 = state_34430;
var statearr_34432_34459 = state_34430__$1;
(statearr_34432_34459[(2)] = inst_34426);

(statearr_34432_34459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (1))){
var inst_34389 = [];
var inst_34390 = inst_34389;
var inst_34391 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34430__$1 = (function (){var statearr_34433 = state_34430;
(statearr_34433[(7)] = inst_34391);

(statearr_34433[(8)] = inst_34390);

return statearr_34433;
})();
var statearr_34434_34460 = state_34430__$1;
(statearr_34434_34460[(2)] = null);

(statearr_34434_34460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (4))){
var inst_34394 = (state_34430[(9)]);
var inst_34394__$1 = (state_34430[(2)]);
var inst_34395 = (inst_34394__$1 == null);
var inst_34396 = cljs.core.not.call(null,inst_34395);
var state_34430__$1 = (function (){var statearr_34435 = state_34430;
(statearr_34435[(9)] = inst_34394__$1);

return statearr_34435;
})();
if(inst_34396){
var statearr_34436_34461 = state_34430__$1;
(statearr_34436_34461[(1)] = (5));

} else {
var statearr_34437_34462 = state_34430__$1;
(statearr_34437_34462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (15))){
var inst_34420 = (state_34430[(2)]);
var state_34430__$1 = state_34430;
var statearr_34438_34463 = state_34430__$1;
(statearr_34438_34463[(2)] = inst_34420);

(statearr_34438_34463[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (13))){
var state_34430__$1 = state_34430;
var statearr_34439_34464 = state_34430__$1;
(statearr_34439_34464[(2)] = null);

(statearr_34439_34464[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (6))){
var inst_34390 = (state_34430[(8)]);
var inst_34415 = inst_34390.length;
var inst_34416 = (inst_34415 > (0));
var state_34430__$1 = state_34430;
if(cljs.core.truth_(inst_34416)){
var statearr_34440_34465 = state_34430__$1;
(statearr_34440_34465[(1)] = (12));

} else {
var statearr_34441_34466 = state_34430__$1;
(statearr_34441_34466[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (3))){
var inst_34428 = (state_34430[(2)]);
var state_34430__$1 = state_34430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34430__$1,inst_34428);
} else {
if((state_val_34431 === (12))){
var inst_34390 = (state_34430[(8)]);
var inst_34418 = cljs.core.vec.call(null,inst_34390);
var state_34430__$1 = state_34430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34430__$1,(15),out,inst_34418);
} else {
if((state_val_34431 === (2))){
var state_34430__$1 = state_34430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34430__$1,(4),ch);
} else {
if((state_val_34431 === (11))){
var inst_34398 = (state_34430[(10)]);
var inst_34394 = (state_34430[(9)]);
var inst_34408 = (state_34430[(2)]);
var inst_34409 = [];
var inst_34410 = inst_34409.push(inst_34394);
var inst_34390 = inst_34409;
var inst_34391 = inst_34398;
var state_34430__$1 = (function (){var statearr_34442 = state_34430;
(statearr_34442[(11)] = inst_34410);

(statearr_34442[(7)] = inst_34391);

(statearr_34442[(12)] = inst_34408);

(statearr_34442[(8)] = inst_34390);

return statearr_34442;
})();
var statearr_34443_34467 = state_34430__$1;
(statearr_34443_34467[(2)] = null);

(statearr_34443_34467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (9))){
var inst_34390 = (state_34430[(8)]);
var inst_34406 = cljs.core.vec.call(null,inst_34390);
var state_34430__$1 = state_34430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34430__$1,(11),out,inst_34406);
} else {
if((state_val_34431 === (5))){
var inst_34398 = (state_34430[(10)]);
var inst_34391 = (state_34430[(7)]);
var inst_34394 = (state_34430[(9)]);
var inst_34398__$1 = f.call(null,inst_34394);
var inst_34399 = cljs.core._EQ_.call(null,inst_34398__$1,inst_34391);
var inst_34400 = cljs.core.keyword_identical_QMARK_.call(null,inst_34391,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34401 = (inst_34399) || (inst_34400);
var state_34430__$1 = (function (){var statearr_34444 = state_34430;
(statearr_34444[(10)] = inst_34398__$1);

return statearr_34444;
})();
if(cljs.core.truth_(inst_34401)){
var statearr_34445_34468 = state_34430__$1;
(statearr_34445_34468[(1)] = (8));

} else {
var statearr_34446_34469 = state_34430__$1;
(statearr_34446_34469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (14))){
var inst_34423 = (state_34430[(2)]);
var inst_34424 = cljs.core.async.close_BANG_.call(null,out);
var state_34430__$1 = (function (){var statearr_34448 = state_34430;
(statearr_34448[(13)] = inst_34423);

return statearr_34448;
})();
var statearr_34449_34470 = state_34430__$1;
(statearr_34449_34470[(2)] = inst_34424);

(statearr_34449_34470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (10))){
var inst_34413 = (state_34430[(2)]);
var state_34430__$1 = state_34430;
var statearr_34450_34471 = state_34430__$1;
(statearr_34450_34471[(2)] = inst_34413);

(statearr_34450_34471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (8))){
var inst_34398 = (state_34430[(10)]);
var inst_34390 = (state_34430[(8)]);
var inst_34394 = (state_34430[(9)]);
var inst_34403 = inst_34390.push(inst_34394);
var tmp34447 = inst_34390;
var inst_34390__$1 = tmp34447;
var inst_34391 = inst_34398;
var state_34430__$1 = (function (){var statearr_34451 = state_34430;
(statearr_34451[(7)] = inst_34391);

(statearr_34451[(8)] = inst_34390__$1);

(statearr_34451[(14)] = inst_34403);

return statearr_34451;
})();
var statearr_34452_34472 = state_34430__$1;
(statearr_34452_34472[(2)] = null);

(statearr_34452_34472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32568__auto___34458,out))
;
return ((function (switch__32480__auto__,c__32568__auto___34458,out){
return (function() {
var cljs$core$async$state_machine__32481__auto__ = null;
var cljs$core$async$state_machine__32481__auto____0 = (function (){
var statearr_34453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34453[(0)] = cljs$core$async$state_machine__32481__auto__);

(statearr_34453[(1)] = (1));

return statearr_34453;
});
var cljs$core$async$state_machine__32481__auto____1 = (function (state_34430){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_34430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e34454){if((e34454 instanceof Object)){
var ex__32484__auto__ = e34454;
var statearr_34455_34473 = state_34430;
(statearr_34455_34473[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34474 = state_34430;
state_34430 = G__34474;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
cljs$core$async$state_machine__32481__auto__ = function(state_34430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32481__auto____1.call(this,state_34430);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32481__auto____0;
cljs$core$async$state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32481__auto____1;
return cljs$core$async$state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto___34458,out))
})();
var state__32570__auto__ = (function (){var statearr_34456 = f__32569__auto__.call(null);
(statearr_34456[(6)] = c__32568__auto___34458);

return statearr_34456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto___34458,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1504549420763
