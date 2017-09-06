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
var G__34251 = arguments.length;
switch (G__34251) {
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
if(typeof cljs.core.async.t_cljs$core$async34252 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34252 = (function (f,blockable,meta34253){
this.f = f;
this.blockable = blockable;
this.meta34253 = meta34253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34254,meta34253__$1){
var self__ = this;
var _34254__$1 = this;
return (new cljs.core.async.t_cljs$core$async34252(self__.f,self__.blockable,meta34253__$1));
});

cljs.core.async.t_cljs$core$async34252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34254){
var self__ = this;
var _34254__$1 = this;
return self__.meta34253;
});

cljs.core.async.t_cljs$core$async34252.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34252.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34252.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34252.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34253","meta34253",-265979329,null)], null);
});

cljs.core.async.t_cljs$core$async34252.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34252";

cljs.core.async.t_cljs$core$async34252.cljs$lang$ctorPrWriter = (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async34252");
});

cljs.core.async.__GT_t_cljs$core$async34252 = (function cljs$core$async$__GT_t_cljs$core$async34252(f__$1,blockable__$1,meta34253){
return (new cljs.core.async.t_cljs$core$async34252(f__$1,blockable__$1,meta34253));
});

}

return (new cljs.core.async.t_cljs$core$async34252(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34258 = arguments.length;
switch (G__34258) {
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
var G__34261 = arguments.length;
switch (G__34261) {
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
var G__34264 = arguments.length;
switch (G__34264) {
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
var val_34266 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34266);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34266,ret){
return (function (){
return fn1.call(null,val_34266);
});})(val_34266,ret))
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
var G__34268 = arguments.length;
switch (G__34268) {
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
var n__29368__auto___34270 = n;
var x_34271 = (0);
while(true){
if((x_34271 < n__29368__auto___34270)){
(a[x_34271] = (0));

var G__34272 = (x_34271 + (1));
x_34271 = G__34272;
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

var G__34273 = (i + (1));
i = G__34273;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34274 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34274 = (function (flag,meta34275){
this.flag = flag;
this.meta34275 = meta34275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34276,meta34275__$1){
var self__ = this;
var _34276__$1 = this;
return (new cljs.core.async.t_cljs$core$async34274(self__.flag,meta34275__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34274.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34276){
var self__ = this;
var _34276__$1 = this;
return self__.meta34275;
});})(flag))
;

cljs.core.async.t_cljs$core$async34274.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34274.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34274.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34274.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34274.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34275","meta34275",1353289331,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34274.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34274";

cljs.core.async.t_cljs$core$async34274.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async34274");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34274 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34274(flag__$1,meta34275){
return (new cljs.core.async.t_cljs$core$async34274(flag__$1,meta34275));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34274(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34277 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34277 = (function (flag,cb,meta34278){
this.flag = flag;
this.cb = cb;
this.meta34278 = meta34278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34279,meta34278__$1){
var self__ = this;
var _34279__$1 = this;
return (new cljs.core.async.t_cljs$core$async34277(self__.flag,self__.cb,meta34278__$1));
});

cljs.core.async.t_cljs$core$async34277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34279){
var self__ = this;
var _34279__$1 = this;
return self__.meta34278;
});

cljs.core.async.t_cljs$core$async34277.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34277.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34277.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34277.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34277.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34278","meta34278",1056036992,null)], null);
});

cljs.core.async.t_cljs$core$async34277.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34277.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34277";

cljs.core.async.t_cljs$core$async34277.cljs$lang$ctorPrWriter = (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async34277");
});

cljs.core.async.__GT_t_cljs$core$async34277 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34277(flag__$1,cb__$1,meta34278){
return (new cljs.core.async.t_cljs$core$async34277(flag__$1,cb__$1,meta34278));
});

}

return (new cljs.core.async.t_cljs$core$async34277(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34280_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34280_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34281_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34281_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28423__auto__ = wport;
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34282 = (i + (1));
i = G__34282;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28423__auto__ = ret;
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28411__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28411__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28411__auto__;
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
var args__29599__auto__ = [];
var len__29592__auto___34288 = arguments.length;
var i__29593__auto___34289 = (0);
while(true){
if((i__29593__auto___34289 < len__29592__auto___34288)){
args__29599__auto__.push((arguments[i__29593__auto___34289]));

var G__34290 = (i__29593__auto___34289 + (1));
i__29593__auto___34289 = G__34290;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((1) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29600__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34285){
var map__34286 = p__34285;
var map__34286__$1 = ((((!((map__34286 == null)))?((((map__34286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34286.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34286):map__34286);
var opts = map__34286__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34283){
var G__34284 = cljs.core.first.call(null,seq34283);
var seq34283__$1 = cljs.core.next.call(null,seq34283);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34284,seq34283__$1);
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
var G__34292 = arguments.length;
switch (G__34292) {
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
var c__34205__auto___34338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto___34338){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto___34338){
return (function (state_34316){
var state_val_34317 = (state_34316[(1)]);
if((state_val_34317 === (7))){
var inst_34312 = (state_34316[(2)]);
var state_34316__$1 = state_34316;
var statearr_34318_34339 = state_34316__$1;
(statearr_34318_34339[(2)] = inst_34312);

(statearr_34318_34339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34317 === (1))){
var state_34316__$1 = state_34316;
var statearr_34319_34340 = state_34316__$1;
(statearr_34319_34340[(2)] = null);

(statearr_34319_34340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34317 === (4))){
var inst_34295 = (state_34316[(7)]);
var inst_34295__$1 = (state_34316[(2)]);
var inst_34296 = (inst_34295__$1 == null);
var state_34316__$1 = (function (){var statearr_34320 = state_34316;
(statearr_34320[(7)] = inst_34295__$1);

return statearr_34320;
})();
if(cljs.core.truth_(inst_34296)){
var statearr_34321_34341 = state_34316__$1;
(statearr_34321_34341[(1)] = (5));

} else {
var statearr_34322_34342 = state_34316__$1;
(statearr_34322_34342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34317 === (13))){
var state_34316__$1 = state_34316;
var statearr_34323_34343 = state_34316__$1;
(statearr_34323_34343[(2)] = null);

(statearr_34323_34343[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34317 === (6))){
var inst_34295 = (state_34316[(7)]);
var state_34316__$1 = state_34316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34316__$1,(11),to,inst_34295);
} else {
if((state_val_34317 === (3))){
var inst_34314 = (state_34316[(2)]);
var state_34316__$1 = state_34316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34316__$1,inst_34314);
} else {
if((state_val_34317 === (12))){
var state_34316__$1 = state_34316;
var statearr_34324_34344 = state_34316__$1;
(statearr_34324_34344[(2)] = null);

(statearr_34324_34344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34317 === (2))){
var state_34316__$1 = state_34316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34316__$1,(4),from);
} else {
if((state_val_34317 === (11))){
var inst_34305 = (state_34316[(2)]);
var state_34316__$1 = state_34316;
if(cljs.core.truth_(inst_34305)){
var statearr_34325_34345 = state_34316__$1;
(statearr_34325_34345[(1)] = (12));

} else {
var statearr_34326_34346 = state_34316__$1;
(statearr_34326_34346[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34317 === (9))){
var state_34316__$1 = state_34316;
var statearr_34327_34347 = state_34316__$1;
(statearr_34327_34347[(2)] = null);

(statearr_34327_34347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34317 === (5))){
var state_34316__$1 = state_34316;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34328_34348 = state_34316__$1;
(statearr_34328_34348[(1)] = (8));

} else {
var statearr_34329_34349 = state_34316__$1;
(statearr_34329_34349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34317 === (14))){
var inst_34310 = (state_34316[(2)]);
var state_34316__$1 = state_34316;
var statearr_34330_34350 = state_34316__$1;
(statearr_34330_34350[(2)] = inst_34310);

(statearr_34330_34350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34317 === (10))){
var inst_34302 = (state_34316[(2)]);
var state_34316__$1 = state_34316;
var statearr_34331_34351 = state_34316__$1;
(statearr_34331_34351[(2)] = inst_34302);

(statearr_34331_34351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34317 === (8))){
var inst_34299 = cljs.core.async.close_BANG_.call(null,to);
var state_34316__$1 = state_34316;
var statearr_34332_34352 = state_34316__$1;
(statearr_34332_34352[(2)] = inst_34299);

(statearr_34332_34352[(1)] = (10));


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
});})(c__34205__auto___34338))
;
return ((function (switch__34117__auto__,c__34205__auto___34338){
return (function() {
var cljs$core$async$state_machine__34118__auto__ = null;
var cljs$core$async$state_machine__34118__auto____0 = (function (){
var statearr_34333 = [null,null,null,null,null,null,null,null];
(statearr_34333[(0)] = cljs$core$async$state_machine__34118__auto__);

(statearr_34333[(1)] = (1));

return statearr_34333;
});
var cljs$core$async$state_machine__34118__auto____1 = (function (state_34316){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_34316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e34334){if((e34334 instanceof Object)){
var ex__34121__auto__ = e34334;
var statearr_34335_34353 = state_34316;
(statearr_34335_34353[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34354 = state_34316;
state_34316 = G__34354;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
cljs$core$async$state_machine__34118__auto__ = function(state_34316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34118__auto____1.call(this,state_34316);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34118__auto____0;
cljs$core$async$state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34118__auto____1;
return cljs$core$async$state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto___34338))
})();
var state__34207__auto__ = (function (){var statearr_34336 = f__34206__auto__.call(null);
(statearr_34336[(6)] = c__34205__auto___34338);

return statearr_34336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto___34338))
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
return (function (p__34355){
var vec__34356 = p__34355;
var v = cljs.core.nth.call(null,vec__34356,(0),null);
var p = cljs.core.nth.call(null,vec__34356,(1),null);
var job = vec__34356;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34205__auto___34527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto___34527,res,vec__34356,v,p,job,jobs,results){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto___34527,res,vec__34356,v,p,job,jobs,results){
return (function (state_34363){
var state_val_34364 = (state_34363[(1)]);
if((state_val_34364 === (1))){
var state_34363__$1 = state_34363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34363__$1,(2),res,v);
} else {
if((state_val_34364 === (2))){
var inst_34360 = (state_34363[(2)]);
var inst_34361 = cljs.core.async.close_BANG_.call(null,res);
var state_34363__$1 = (function (){var statearr_34365 = state_34363;
(statearr_34365[(7)] = inst_34360);

return statearr_34365;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34363__$1,inst_34361);
} else {
return null;
}
}
});})(c__34205__auto___34527,res,vec__34356,v,p,job,jobs,results))
;
return ((function (switch__34117__auto__,c__34205__auto___34527,res,vec__34356,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____0 = (function (){
var statearr_34366 = [null,null,null,null,null,null,null,null];
(statearr_34366[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__);

(statearr_34366[(1)] = (1));

return statearr_34366;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____1 = (function (state_34363){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_34363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e34367){if((e34367 instanceof Object)){
var ex__34121__auto__ = e34367;
var statearr_34368_34528 = state_34363;
(statearr_34368_34528[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34529 = state_34363;
state_34363 = G__34529;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__ = function(state_34363){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____1.call(this,state_34363);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto___34527,res,vec__34356,v,p,job,jobs,results))
})();
var state__34207__auto__ = (function (){var statearr_34369 = f__34206__auto__.call(null);
(statearr_34369[(6)] = c__34205__auto___34527);

return statearr_34369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto___34527,res,vec__34356,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34370){
var vec__34371 = p__34370;
var v = cljs.core.nth.call(null,vec__34371,(0),null);
var p = cljs.core.nth.call(null,vec__34371,(1),null);
var job = vec__34371;
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
var n__29368__auto___34530 = n;
var __34531 = (0);
while(true){
if((__34531 < n__29368__auto___34530)){
var G__34374_34532 = type;
var G__34374_34533__$1 = (((G__34374_34532 instanceof cljs.core.Keyword))?G__34374_34532.fqn:null);
switch (G__34374_34533__$1) {
case "compute":
var c__34205__auto___34535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34531,c__34205__auto___34535,G__34374_34532,G__34374_34533__$1,n__29368__auto___34530,jobs,results,process,async){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (__34531,c__34205__auto___34535,G__34374_34532,G__34374_34533__$1,n__29368__auto___34530,jobs,results,process,async){
return (function (state_34387){
var state_val_34388 = (state_34387[(1)]);
if((state_val_34388 === (1))){
var state_34387__$1 = state_34387;
var statearr_34389_34536 = state_34387__$1;
(statearr_34389_34536[(2)] = null);

(statearr_34389_34536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (2))){
var state_34387__$1 = state_34387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34387__$1,(4),jobs);
} else {
if((state_val_34388 === (3))){
var inst_34385 = (state_34387[(2)]);
var state_34387__$1 = state_34387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34387__$1,inst_34385);
} else {
if((state_val_34388 === (4))){
var inst_34377 = (state_34387[(2)]);
var inst_34378 = process.call(null,inst_34377);
var state_34387__$1 = state_34387;
if(cljs.core.truth_(inst_34378)){
var statearr_34390_34537 = state_34387__$1;
(statearr_34390_34537[(1)] = (5));

} else {
var statearr_34391_34538 = state_34387__$1;
(statearr_34391_34538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (5))){
var state_34387__$1 = state_34387;
var statearr_34392_34539 = state_34387__$1;
(statearr_34392_34539[(2)] = null);

(statearr_34392_34539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (6))){
var state_34387__$1 = state_34387;
var statearr_34393_34540 = state_34387__$1;
(statearr_34393_34540[(2)] = null);

(statearr_34393_34540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (7))){
var inst_34383 = (state_34387[(2)]);
var state_34387__$1 = state_34387;
var statearr_34394_34541 = state_34387__$1;
(statearr_34394_34541[(2)] = inst_34383);

(statearr_34394_34541[(1)] = (3));


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
});})(__34531,c__34205__auto___34535,G__34374_34532,G__34374_34533__$1,n__29368__auto___34530,jobs,results,process,async))
;
return ((function (__34531,switch__34117__auto__,c__34205__auto___34535,G__34374_34532,G__34374_34533__$1,n__29368__auto___34530,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____0 = (function (){
var statearr_34395 = [null,null,null,null,null,null,null];
(statearr_34395[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__);

(statearr_34395[(1)] = (1));

return statearr_34395;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____1 = (function (state_34387){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_34387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e34396){if((e34396 instanceof Object)){
var ex__34121__auto__ = e34396;
var statearr_34397_34542 = state_34387;
(statearr_34397_34542[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34543 = state_34387;
state_34387 = G__34543;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__ = function(state_34387){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____1.call(this,state_34387);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__;
})()
;})(__34531,switch__34117__auto__,c__34205__auto___34535,G__34374_34532,G__34374_34533__$1,n__29368__auto___34530,jobs,results,process,async))
})();
var state__34207__auto__ = (function (){var statearr_34398 = f__34206__auto__.call(null);
(statearr_34398[(6)] = c__34205__auto___34535);

return statearr_34398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(__34531,c__34205__auto___34535,G__34374_34532,G__34374_34533__$1,n__29368__auto___34530,jobs,results,process,async))
);


break;
case "async":
var c__34205__auto___34544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34531,c__34205__auto___34544,G__34374_34532,G__34374_34533__$1,n__29368__auto___34530,jobs,results,process,async){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (__34531,c__34205__auto___34544,G__34374_34532,G__34374_34533__$1,n__29368__auto___34530,jobs,results,process,async){
return (function (state_34411){
var state_val_34412 = (state_34411[(1)]);
if((state_val_34412 === (1))){
var state_34411__$1 = state_34411;
var statearr_34413_34545 = state_34411__$1;
(statearr_34413_34545[(2)] = null);

(statearr_34413_34545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (2))){
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34411__$1,(4),jobs);
} else {
if((state_val_34412 === (3))){
var inst_34409 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34411__$1,inst_34409);
} else {
if((state_val_34412 === (4))){
var inst_34401 = (state_34411[(2)]);
var inst_34402 = async.call(null,inst_34401);
var state_34411__$1 = state_34411;
if(cljs.core.truth_(inst_34402)){
var statearr_34414_34546 = state_34411__$1;
(statearr_34414_34546[(1)] = (5));

} else {
var statearr_34415_34547 = state_34411__$1;
(statearr_34415_34547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (5))){
var state_34411__$1 = state_34411;
var statearr_34416_34548 = state_34411__$1;
(statearr_34416_34548[(2)] = null);

(statearr_34416_34548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (6))){
var state_34411__$1 = state_34411;
var statearr_34417_34549 = state_34411__$1;
(statearr_34417_34549[(2)] = null);

(statearr_34417_34549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (7))){
var inst_34407 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34418_34550 = state_34411__$1;
(statearr_34418_34550[(2)] = inst_34407);

(statearr_34418_34550[(1)] = (3));


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
});})(__34531,c__34205__auto___34544,G__34374_34532,G__34374_34533__$1,n__29368__auto___34530,jobs,results,process,async))
;
return ((function (__34531,switch__34117__auto__,c__34205__auto___34544,G__34374_34532,G__34374_34533__$1,n__29368__auto___34530,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____0 = (function (){
var statearr_34419 = [null,null,null,null,null,null,null];
(statearr_34419[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__);

(statearr_34419[(1)] = (1));

return statearr_34419;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____1 = (function (state_34411){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_34411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e34420){if((e34420 instanceof Object)){
var ex__34121__auto__ = e34420;
var statearr_34421_34551 = state_34411;
(statearr_34421_34551[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34552 = state_34411;
state_34411 = G__34552;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__ = function(state_34411){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____1.call(this,state_34411);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__;
})()
;})(__34531,switch__34117__auto__,c__34205__auto___34544,G__34374_34532,G__34374_34533__$1,n__29368__auto___34530,jobs,results,process,async))
})();
var state__34207__auto__ = (function (){var statearr_34422 = f__34206__auto__.call(null);
(statearr_34422[(6)] = c__34205__auto___34544);

return statearr_34422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(__34531,c__34205__auto___34544,G__34374_34532,G__34374_34533__$1,n__29368__auto___34530,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34374_34533__$1)].join('')));

}

var G__34553 = (__34531 + (1));
__34531 = G__34553;
continue;
} else {
}
break;
}

var c__34205__auto___34554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto___34554,jobs,results,process,async){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto___34554,jobs,results,process,async){
return (function (state_34444){
var state_val_34445 = (state_34444[(1)]);
if((state_val_34445 === (1))){
var state_34444__$1 = state_34444;
var statearr_34446_34555 = state_34444__$1;
(statearr_34446_34555[(2)] = null);

(statearr_34446_34555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (2))){
var state_34444__$1 = state_34444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34444__$1,(4),from);
} else {
if((state_val_34445 === (3))){
var inst_34442 = (state_34444[(2)]);
var state_34444__$1 = state_34444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34444__$1,inst_34442);
} else {
if((state_val_34445 === (4))){
var inst_34425 = (state_34444[(7)]);
var inst_34425__$1 = (state_34444[(2)]);
var inst_34426 = (inst_34425__$1 == null);
var state_34444__$1 = (function (){var statearr_34447 = state_34444;
(statearr_34447[(7)] = inst_34425__$1);

return statearr_34447;
})();
if(cljs.core.truth_(inst_34426)){
var statearr_34448_34556 = state_34444__$1;
(statearr_34448_34556[(1)] = (5));

} else {
var statearr_34449_34557 = state_34444__$1;
(statearr_34449_34557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (5))){
var inst_34428 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34444__$1 = state_34444;
var statearr_34450_34558 = state_34444__$1;
(statearr_34450_34558[(2)] = inst_34428);

(statearr_34450_34558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (6))){
var inst_34430 = (state_34444[(8)]);
var inst_34425 = (state_34444[(7)]);
var inst_34430__$1 = cljs.core.async.chan.call(null,(1));
var inst_34431 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34432 = [inst_34425,inst_34430__$1];
var inst_34433 = (new cljs.core.PersistentVector(null,2,(5),inst_34431,inst_34432,null));
var state_34444__$1 = (function (){var statearr_34451 = state_34444;
(statearr_34451[(8)] = inst_34430__$1);

return statearr_34451;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34444__$1,(8),jobs,inst_34433);
} else {
if((state_val_34445 === (7))){
var inst_34440 = (state_34444[(2)]);
var state_34444__$1 = state_34444;
var statearr_34452_34559 = state_34444__$1;
(statearr_34452_34559[(2)] = inst_34440);

(statearr_34452_34559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (8))){
var inst_34430 = (state_34444[(8)]);
var inst_34435 = (state_34444[(2)]);
var state_34444__$1 = (function (){var statearr_34453 = state_34444;
(statearr_34453[(9)] = inst_34435);

return statearr_34453;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34444__$1,(9),results,inst_34430);
} else {
if((state_val_34445 === (9))){
var inst_34437 = (state_34444[(2)]);
var state_34444__$1 = (function (){var statearr_34454 = state_34444;
(statearr_34454[(10)] = inst_34437);

return statearr_34454;
})();
var statearr_34455_34560 = state_34444__$1;
(statearr_34455_34560[(2)] = null);

(statearr_34455_34560[(1)] = (2));


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
});})(c__34205__auto___34554,jobs,results,process,async))
;
return ((function (switch__34117__auto__,c__34205__auto___34554,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____0 = (function (){
var statearr_34456 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__);

(statearr_34456[(1)] = (1));

return statearr_34456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____1 = (function (state_34444){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_34444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e34457){if((e34457 instanceof Object)){
var ex__34121__auto__ = e34457;
var statearr_34458_34561 = state_34444;
(statearr_34458_34561[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34562 = state_34444;
state_34444 = G__34562;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__ = function(state_34444){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____1.call(this,state_34444);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto___34554,jobs,results,process,async))
})();
var state__34207__auto__ = (function (){var statearr_34459 = f__34206__auto__.call(null);
(statearr_34459[(6)] = c__34205__auto___34554);

return statearr_34459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto___34554,jobs,results,process,async))
);


var c__34205__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto__,jobs,results,process,async){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto__,jobs,results,process,async){
return (function (state_34497){
var state_val_34498 = (state_34497[(1)]);
if((state_val_34498 === (7))){
var inst_34493 = (state_34497[(2)]);
var state_34497__$1 = state_34497;
var statearr_34499_34563 = state_34497__$1;
(statearr_34499_34563[(2)] = inst_34493);

(statearr_34499_34563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (20))){
var state_34497__$1 = state_34497;
var statearr_34500_34564 = state_34497__$1;
(statearr_34500_34564[(2)] = null);

(statearr_34500_34564[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (1))){
var state_34497__$1 = state_34497;
var statearr_34501_34565 = state_34497__$1;
(statearr_34501_34565[(2)] = null);

(statearr_34501_34565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (4))){
var inst_34462 = (state_34497[(7)]);
var inst_34462__$1 = (state_34497[(2)]);
var inst_34463 = (inst_34462__$1 == null);
var state_34497__$1 = (function (){var statearr_34502 = state_34497;
(statearr_34502[(7)] = inst_34462__$1);

return statearr_34502;
})();
if(cljs.core.truth_(inst_34463)){
var statearr_34503_34566 = state_34497__$1;
(statearr_34503_34566[(1)] = (5));

} else {
var statearr_34504_34567 = state_34497__$1;
(statearr_34504_34567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (15))){
var inst_34475 = (state_34497[(8)]);
var state_34497__$1 = state_34497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34497__$1,(18),to,inst_34475);
} else {
if((state_val_34498 === (21))){
var inst_34488 = (state_34497[(2)]);
var state_34497__$1 = state_34497;
var statearr_34505_34568 = state_34497__$1;
(statearr_34505_34568[(2)] = inst_34488);

(statearr_34505_34568[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (13))){
var inst_34490 = (state_34497[(2)]);
var state_34497__$1 = (function (){var statearr_34506 = state_34497;
(statearr_34506[(9)] = inst_34490);

return statearr_34506;
})();
var statearr_34507_34569 = state_34497__$1;
(statearr_34507_34569[(2)] = null);

(statearr_34507_34569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (6))){
var inst_34462 = (state_34497[(7)]);
var state_34497__$1 = state_34497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34497__$1,(11),inst_34462);
} else {
if((state_val_34498 === (17))){
var inst_34483 = (state_34497[(2)]);
var state_34497__$1 = state_34497;
if(cljs.core.truth_(inst_34483)){
var statearr_34508_34570 = state_34497__$1;
(statearr_34508_34570[(1)] = (19));

} else {
var statearr_34509_34571 = state_34497__$1;
(statearr_34509_34571[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (3))){
var inst_34495 = (state_34497[(2)]);
var state_34497__$1 = state_34497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34497__$1,inst_34495);
} else {
if((state_val_34498 === (12))){
var inst_34472 = (state_34497[(10)]);
var state_34497__$1 = state_34497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34497__$1,(14),inst_34472);
} else {
if((state_val_34498 === (2))){
var state_34497__$1 = state_34497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34497__$1,(4),results);
} else {
if((state_val_34498 === (19))){
var state_34497__$1 = state_34497;
var statearr_34510_34572 = state_34497__$1;
(statearr_34510_34572[(2)] = null);

(statearr_34510_34572[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (11))){
var inst_34472 = (state_34497[(2)]);
var state_34497__$1 = (function (){var statearr_34511 = state_34497;
(statearr_34511[(10)] = inst_34472);

return statearr_34511;
})();
var statearr_34512_34573 = state_34497__$1;
(statearr_34512_34573[(2)] = null);

(statearr_34512_34573[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (9))){
var state_34497__$1 = state_34497;
var statearr_34513_34574 = state_34497__$1;
(statearr_34513_34574[(2)] = null);

(statearr_34513_34574[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (5))){
var state_34497__$1 = state_34497;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34514_34575 = state_34497__$1;
(statearr_34514_34575[(1)] = (8));

} else {
var statearr_34515_34576 = state_34497__$1;
(statearr_34515_34576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (14))){
var inst_34475 = (state_34497[(8)]);
var inst_34477 = (state_34497[(11)]);
var inst_34475__$1 = (state_34497[(2)]);
var inst_34476 = (inst_34475__$1 == null);
var inst_34477__$1 = cljs.core.not.call(null,inst_34476);
var state_34497__$1 = (function (){var statearr_34516 = state_34497;
(statearr_34516[(8)] = inst_34475__$1);

(statearr_34516[(11)] = inst_34477__$1);

return statearr_34516;
})();
if(inst_34477__$1){
var statearr_34517_34577 = state_34497__$1;
(statearr_34517_34577[(1)] = (15));

} else {
var statearr_34518_34578 = state_34497__$1;
(statearr_34518_34578[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (16))){
var inst_34477 = (state_34497[(11)]);
var state_34497__$1 = state_34497;
var statearr_34519_34579 = state_34497__$1;
(statearr_34519_34579[(2)] = inst_34477);

(statearr_34519_34579[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (10))){
var inst_34469 = (state_34497[(2)]);
var state_34497__$1 = state_34497;
var statearr_34520_34580 = state_34497__$1;
(statearr_34520_34580[(2)] = inst_34469);

(statearr_34520_34580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (18))){
var inst_34480 = (state_34497[(2)]);
var state_34497__$1 = state_34497;
var statearr_34521_34581 = state_34497__$1;
(statearr_34521_34581[(2)] = inst_34480);

(statearr_34521_34581[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (8))){
var inst_34466 = cljs.core.async.close_BANG_.call(null,to);
var state_34497__$1 = state_34497;
var statearr_34522_34582 = state_34497__$1;
(statearr_34522_34582[(2)] = inst_34466);

(statearr_34522_34582[(1)] = (10));


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
});})(c__34205__auto__,jobs,results,process,async))
;
return ((function (switch__34117__auto__,c__34205__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____0 = (function (){
var statearr_34523 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34523[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__);

(statearr_34523[(1)] = (1));

return statearr_34523;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____1 = (function (state_34497){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_34497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e34524){if((e34524 instanceof Object)){
var ex__34121__auto__ = e34524;
var statearr_34525_34583 = state_34497;
(statearr_34525_34583[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34584 = state_34497;
state_34497 = G__34584;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__ = function(state_34497){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____1.call(this,state_34497);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34118__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto__,jobs,results,process,async))
})();
var state__34207__auto__ = (function (){var statearr_34526 = f__34206__auto__.call(null);
(statearr_34526[(6)] = c__34205__auto__);

return statearr_34526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto__,jobs,results,process,async))
);

return c__34205__auto__;
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
var G__34586 = arguments.length;
switch (G__34586) {
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
var G__34589 = arguments.length;
switch (G__34589) {
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
var G__34592 = arguments.length;
switch (G__34592) {
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
var c__34205__auto___34641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto___34641,tc,fc){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto___34641,tc,fc){
return (function (state_34618){
var state_val_34619 = (state_34618[(1)]);
if((state_val_34619 === (7))){
var inst_34614 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
var statearr_34620_34642 = state_34618__$1;
(statearr_34620_34642[(2)] = inst_34614);

(statearr_34620_34642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (1))){
var state_34618__$1 = state_34618;
var statearr_34621_34643 = state_34618__$1;
(statearr_34621_34643[(2)] = null);

(statearr_34621_34643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (4))){
var inst_34595 = (state_34618[(7)]);
var inst_34595__$1 = (state_34618[(2)]);
var inst_34596 = (inst_34595__$1 == null);
var state_34618__$1 = (function (){var statearr_34622 = state_34618;
(statearr_34622[(7)] = inst_34595__$1);

return statearr_34622;
})();
if(cljs.core.truth_(inst_34596)){
var statearr_34623_34644 = state_34618__$1;
(statearr_34623_34644[(1)] = (5));

} else {
var statearr_34624_34645 = state_34618__$1;
(statearr_34624_34645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (13))){
var state_34618__$1 = state_34618;
var statearr_34625_34646 = state_34618__$1;
(statearr_34625_34646[(2)] = null);

(statearr_34625_34646[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (6))){
var inst_34595 = (state_34618[(7)]);
var inst_34601 = p.call(null,inst_34595);
var state_34618__$1 = state_34618;
if(cljs.core.truth_(inst_34601)){
var statearr_34626_34647 = state_34618__$1;
(statearr_34626_34647[(1)] = (9));

} else {
var statearr_34627_34648 = state_34618__$1;
(statearr_34627_34648[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (3))){
var inst_34616 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34618__$1,inst_34616);
} else {
if((state_val_34619 === (12))){
var state_34618__$1 = state_34618;
var statearr_34628_34649 = state_34618__$1;
(statearr_34628_34649[(2)] = null);

(statearr_34628_34649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (2))){
var state_34618__$1 = state_34618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34618__$1,(4),ch);
} else {
if((state_val_34619 === (11))){
var inst_34595 = (state_34618[(7)]);
var inst_34605 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34618__$1,(8),inst_34605,inst_34595);
} else {
if((state_val_34619 === (9))){
var state_34618__$1 = state_34618;
var statearr_34629_34650 = state_34618__$1;
(statearr_34629_34650[(2)] = tc);

(statearr_34629_34650[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (5))){
var inst_34598 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34599 = cljs.core.async.close_BANG_.call(null,fc);
var state_34618__$1 = (function (){var statearr_34630 = state_34618;
(statearr_34630[(8)] = inst_34598);

return statearr_34630;
})();
var statearr_34631_34651 = state_34618__$1;
(statearr_34631_34651[(2)] = inst_34599);

(statearr_34631_34651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (14))){
var inst_34612 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
var statearr_34632_34652 = state_34618__$1;
(statearr_34632_34652[(2)] = inst_34612);

(statearr_34632_34652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (10))){
var state_34618__$1 = state_34618;
var statearr_34633_34653 = state_34618__$1;
(statearr_34633_34653[(2)] = fc);

(statearr_34633_34653[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (8))){
var inst_34607 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
if(cljs.core.truth_(inst_34607)){
var statearr_34634_34654 = state_34618__$1;
(statearr_34634_34654[(1)] = (12));

} else {
var statearr_34635_34655 = state_34618__$1;
(statearr_34635_34655[(1)] = (13));

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
});})(c__34205__auto___34641,tc,fc))
;
return ((function (switch__34117__auto__,c__34205__auto___34641,tc,fc){
return (function() {
var cljs$core$async$state_machine__34118__auto__ = null;
var cljs$core$async$state_machine__34118__auto____0 = (function (){
var statearr_34636 = [null,null,null,null,null,null,null,null,null];
(statearr_34636[(0)] = cljs$core$async$state_machine__34118__auto__);

(statearr_34636[(1)] = (1));

return statearr_34636;
});
var cljs$core$async$state_machine__34118__auto____1 = (function (state_34618){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_34618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e34637){if((e34637 instanceof Object)){
var ex__34121__auto__ = e34637;
var statearr_34638_34656 = state_34618;
(statearr_34638_34656[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34657 = state_34618;
state_34618 = G__34657;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
cljs$core$async$state_machine__34118__auto__ = function(state_34618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34118__auto____1.call(this,state_34618);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34118__auto____0;
cljs$core$async$state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34118__auto____1;
return cljs$core$async$state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto___34641,tc,fc))
})();
var state__34207__auto__ = (function (){var statearr_34639 = f__34206__auto__.call(null);
(statearr_34639[(6)] = c__34205__auto___34641);

return statearr_34639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto___34641,tc,fc))
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
var c__34205__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto__){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto__){
return (function (state_34678){
var state_val_34679 = (state_34678[(1)]);
if((state_val_34679 === (7))){
var inst_34674 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
var statearr_34680_34698 = state_34678__$1;
(statearr_34680_34698[(2)] = inst_34674);

(statearr_34680_34698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (1))){
var inst_34658 = init;
var state_34678__$1 = (function (){var statearr_34681 = state_34678;
(statearr_34681[(7)] = inst_34658);

return statearr_34681;
})();
var statearr_34682_34699 = state_34678__$1;
(statearr_34682_34699[(2)] = null);

(statearr_34682_34699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (4))){
var inst_34661 = (state_34678[(8)]);
var inst_34661__$1 = (state_34678[(2)]);
var inst_34662 = (inst_34661__$1 == null);
var state_34678__$1 = (function (){var statearr_34683 = state_34678;
(statearr_34683[(8)] = inst_34661__$1);

return statearr_34683;
})();
if(cljs.core.truth_(inst_34662)){
var statearr_34684_34700 = state_34678__$1;
(statearr_34684_34700[(1)] = (5));

} else {
var statearr_34685_34701 = state_34678__$1;
(statearr_34685_34701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (6))){
var inst_34665 = (state_34678[(9)]);
var inst_34658 = (state_34678[(7)]);
var inst_34661 = (state_34678[(8)]);
var inst_34665__$1 = f.call(null,inst_34658,inst_34661);
var inst_34666 = cljs.core.reduced_QMARK_.call(null,inst_34665__$1);
var state_34678__$1 = (function (){var statearr_34686 = state_34678;
(statearr_34686[(9)] = inst_34665__$1);

return statearr_34686;
})();
if(inst_34666){
var statearr_34687_34702 = state_34678__$1;
(statearr_34687_34702[(1)] = (8));

} else {
var statearr_34688_34703 = state_34678__$1;
(statearr_34688_34703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (3))){
var inst_34676 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34678__$1,inst_34676);
} else {
if((state_val_34679 === (2))){
var state_34678__$1 = state_34678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34678__$1,(4),ch);
} else {
if((state_val_34679 === (9))){
var inst_34665 = (state_34678[(9)]);
var inst_34658 = inst_34665;
var state_34678__$1 = (function (){var statearr_34689 = state_34678;
(statearr_34689[(7)] = inst_34658);

return statearr_34689;
})();
var statearr_34690_34704 = state_34678__$1;
(statearr_34690_34704[(2)] = null);

(statearr_34690_34704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (5))){
var inst_34658 = (state_34678[(7)]);
var state_34678__$1 = state_34678;
var statearr_34691_34705 = state_34678__$1;
(statearr_34691_34705[(2)] = inst_34658);

(statearr_34691_34705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (10))){
var inst_34672 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
var statearr_34692_34706 = state_34678__$1;
(statearr_34692_34706[(2)] = inst_34672);

(statearr_34692_34706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (8))){
var inst_34665 = (state_34678[(9)]);
var inst_34668 = cljs.core.deref.call(null,inst_34665);
var state_34678__$1 = state_34678;
var statearr_34693_34707 = state_34678__$1;
(statearr_34693_34707[(2)] = inst_34668);

(statearr_34693_34707[(1)] = (10));


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
});})(c__34205__auto__))
;
return ((function (switch__34117__auto__,c__34205__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34118__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34118__auto____0 = (function (){
var statearr_34694 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34694[(0)] = cljs$core$async$reduce_$_state_machine__34118__auto__);

(statearr_34694[(1)] = (1));

return statearr_34694;
});
var cljs$core$async$reduce_$_state_machine__34118__auto____1 = (function (state_34678){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_34678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e34695){if((e34695 instanceof Object)){
var ex__34121__auto__ = e34695;
var statearr_34696_34708 = state_34678;
(statearr_34696_34708[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34709 = state_34678;
state_34678 = G__34709;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34118__auto__ = function(state_34678){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34118__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34118__auto____1.call(this,state_34678);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34118__auto____0;
cljs$core$async$reduce_$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34118__auto____1;
return cljs$core$async$reduce_$_state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto__))
})();
var state__34207__auto__ = (function (){var statearr_34697 = f__34206__auto__.call(null);
(statearr_34697[(6)] = c__34205__auto__);

return statearr_34697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto__))
);

return c__34205__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34205__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto__,f__$1){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto__,f__$1){
return (function (state_34715){
var state_val_34716 = (state_34715[(1)]);
if((state_val_34716 === (1))){
var inst_34710 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34715__$1 = state_34715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34715__$1,(2),inst_34710);
} else {
if((state_val_34716 === (2))){
var inst_34712 = (state_34715[(2)]);
var inst_34713 = f__$1.call(null,inst_34712);
var state_34715__$1 = state_34715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34715__$1,inst_34713);
} else {
return null;
}
}
});})(c__34205__auto__,f__$1))
;
return ((function (switch__34117__auto__,c__34205__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__34118__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34118__auto____0 = (function (){
var statearr_34717 = [null,null,null,null,null,null,null];
(statearr_34717[(0)] = cljs$core$async$transduce_$_state_machine__34118__auto__);

(statearr_34717[(1)] = (1));

return statearr_34717;
});
var cljs$core$async$transduce_$_state_machine__34118__auto____1 = (function (state_34715){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_34715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e34718){if((e34718 instanceof Object)){
var ex__34121__auto__ = e34718;
var statearr_34719_34721 = state_34715;
(statearr_34719_34721[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34722 = state_34715;
state_34715 = G__34722;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34118__auto__ = function(state_34715){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34118__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34118__auto____1.call(this,state_34715);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34118__auto____0;
cljs$core$async$transduce_$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34118__auto____1;
return cljs$core$async$transduce_$_state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto__,f__$1))
})();
var state__34207__auto__ = (function (){var statearr_34720 = f__34206__auto__.call(null);
(statearr_34720[(6)] = c__34205__auto__);

return statearr_34720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto__,f__$1))
);

return c__34205__auto__;
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
var G__34724 = arguments.length;
switch (G__34724) {
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
var c__34205__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto__){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto__){
return (function (state_34749){
var state_val_34750 = (state_34749[(1)]);
if((state_val_34750 === (7))){
var inst_34731 = (state_34749[(2)]);
var state_34749__$1 = state_34749;
var statearr_34751_34772 = state_34749__$1;
(statearr_34751_34772[(2)] = inst_34731);

(statearr_34751_34772[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (1))){
var inst_34725 = cljs.core.seq.call(null,coll);
var inst_34726 = inst_34725;
var state_34749__$1 = (function (){var statearr_34752 = state_34749;
(statearr_34752[(7)] = inst_34726);

return statearr_34752;
})();
var statearr_34753_34773 = state_34749__$1;
(statearr_34753_34773[(2)] = null);

(statearr_34753_34773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (4))){
var inst_34726 = (state_34749[(7)]);
var inst_34729 = cljs.core.first.call(null,inst_34726);
var state_34749__$1 = state_34749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34749__$1,(7),ch,inst_34729);
} else {
if((state_val_34750 === (13))){
var inst_34743 = (state_34749[(2)]);
var state_34749__$1 = state_34749;
var statearr_34754_34774 = state_34749__$1;
(statearr_34754_34774[(2)] = inst_34743);

(statearr_34754_34774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (6))){
var inst_34734 = (state_34749[(2)]);
var state_34749__$1 = state_34749;
if(cljs.core.truth_(inst_34734)){
var statearr_34755_34775 = state_34749__$1;
(statearr_34755_34775[(1)] = (8));

} else {
var statearr_34756_34776 = state_34749__$1;
(statearr_34756_34776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (3))){
var inst_34747 = (state_34749[(2)]);
var state_34749__$1 = state_34749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34749__$1,inst_34747);
} else {
if((state_val_34750 === (12))){
var state_34749__$1 = state_34749;
var statearr_34757_34777 = state_34749__$1;
(statearr_34757_34777[(2)] = null);

(statearr_34757_34777[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (2))){
var inst_34726 = (state_34749[(7)]);
var state_34749__$1 = state_34749;
if(cljs.core.truth_(inst_34726)){
var statearr_34758_34778 = state_34749__$1;
(statearr_34758_34778[(1)] = (4));

} else {
var statearr_34759_34779 = state_34749__$1;
(statearr_34759_34779[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (11))){
var inst_34740 = cljs.core.async.close_BANG_.call(null,ch);
var state_34749__$1 = state_34749;
var statearr_34760_34780 = state_34749__$1;
(statearr_34760_34780[(2)] = inst_34740);

(statearr_34760_34780[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (9))){
var state_34749__$1 = state_34749;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34761_34781 = state_34749__$1;
(statearr_34761_34781[(1)] = (11));

} else {
var statearr_34762_34782 = state_34749__$1;
(statearr_34762_34782[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (5))){
var inst_34726 = (state_34749[(7)]);
var state_34749__$1 = state_34749;
var statearr_34763_34783 = state_34749__$1;
(statearr_34763_34783[(2)] = inst_34726);

(statearr_34763_34783[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (10))){
var inst_34745 = (state_34749[(2)]);
var state_34749__$1 = state_34749;
var statearr_34764_34784 = state_34749__$1;
(statearr_34764_34784[(2)] = inst_34745);

(statearr_34764_34784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (8))){
var inst_34726 = (state_34749[(7)]);
var inst_34736 = cljs.core.next.call(null,inst_34726);
var inst_34726__$1 = inst_34736;
var state_34749__$1 = (function (){var statearr_34765 = state_34749;
(statearr_34765[(7)] = inst_34726__$1);

return statearr_34765;
})();
var statearr_34766_34785 = state_34749__$1;
(statearr_34766_34785[(2)] = null);

(statearr_34766_34785[(1)] = (2));


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
});})(c__34205__auto__))
;
return ((function (switch__34117__auto__,c__34205__auto__){
return (function() {
var cljs$core$async$state_machine__34118__auto__ = null;
var cljs$core$async$state_machine__34118__auto____0 = (function (){
var statearr_34767 = [null,null,null,null,null,null,null,null];
(statearr_34767[(0)] = cljs$core$async$state_machine__34118__auto__);

(statearr_34767[(1)] = (1));

return statearr_34767;
});
var cljs$core$async$state_machine__34118__auto____1 = (function (state_34749){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_34749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e34768){if((e34768 instanceof Object)){
var ex__34121__auto__ = e34768;
var statearr_34769_34786 = state_34749;
(statearr_34769_34786[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34787 = state_34749;
state_34749 = G__34787;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
cljs$core$async$state_machine__34118__auto__ = function(state_34749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34118__auto____1.call(this,state_34749);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34118__auto____0;
cljs$core$async$state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34118__auto____1;
return cljs$core$async$state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto__))
})();
var state__34207__auto__ = (function (){var statearr_34770 = f__34206__auto__.call(null);
(statearr_34770[(6)] = c__34205__auto__);

return statearr_34770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto__))
);

return c__34205__auto__;
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
var x__29106__auto__ = (((_ == null))?null:_);
var m__29107__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,_);
} else {
var m__29107__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,_);
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
var x__29106__auto__ = (((m == null))?null:m);
var m__29107__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__29107__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__29106__auto__ = (((m == null))?null:m);
var m__29107__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,m,ch);
} else {
var m__29107__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,m,ch);
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
var x__29106__auto__ = (((m == null))?null:m);
var m__29107__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,m);
} else {
var m__29107__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async34788 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34788 = (function (ch,cs,meta34789){
this.ch = ch;
this.cs = cs;
this.meta34789 = meta34789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34790,meta34789__$1){
var self__ = this;
var _34790__$1 = this;
return (new cljs.core.async.t_cljs$core$async34788(self__.ch,self__.cs,meta34789__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34788.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34790){
var self__ = this;
var _34790__$1 = this;
return self__.meta34789;
});})(cs))
;

cljs.core.async.t_cljs$core$async34788.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34788.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34788.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34788.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34788.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34788.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34788.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34789","meta34789",-1943253224,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34788.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34788";

cljs.core.async.t_cljs$core$async34788.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async34788");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34788 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34788(ch__$1,cs__$1,meta34789){
return (new cljs.core.async.t_cljs$core$async34788(ch__$1,cs__$1,meta34789));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34788(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34205__auto___35010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto___35010,cs,m,dchan,dctr,done){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto___35010,cs,m,dchan,dctr,done){
return (function (state_34925){
var state_val_34926 = (state_34925[(1)]);
if((state_val_34926 === (7))){
var inst_34921 = (state_34925[(2)]);
var state_34925__$1 = state_34925;
var statearr_34927_35011 = state_34925__$1;
(statearr_34927_35011[(2)] = inst_34921);

(statearr_34927_35011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (20))){
var inst_34824 = (state_34925[(7)]);
var inst_34836 = cljs.core.first.call(null,inst_34824);
var inst_34837 = cljs.core.nth.call(null,inst_34836,(0),null);
var inst_34838 = cljs.core.nth.call(null,inst_34836,(1),null);
var state_34925__$1 = (function (){var statearr_34928 = state_34925;
(statearr_34928[(8)] = inst_34837);

return statearr_34928;
})();
if(cljs.core.truth_(inst_34838)){
var statearr_34929_35012 = state_34925__$1;
(statearr_34929_35012[(1)] = (22));

} else {
var statearr_34930_35013 = state_34925__$1;
(statearr_34930_35013[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (27))){
var inst_34873 = (state_34925[(9)]);
var inst_34793 = (state_34925[(10)]);
var inst_34866 = (state_34925[(11)]);
var inst_34868 = (state_34925[(12)]);
var inst_34873__$1 = cljs.core._nth.call(null,inst_34866,inst_34868);
var inst_34874 = cljs.core.async.put_BANG_.call(null,inst_34873__$1,inst_34793,done);
var state_34925__$1 = (function (){var statearr_34931 = state_34925;
(statearr_34931[(9)] = inst_34873__$1);

return statearr_34931;
})();
if(cljs.core.truth_(inst_34874)){
var statearr_34932_35014 = state_34925__$1;
(statearr_34932_35014[(1)] = (30));

} else {
var statearr_34933_35015 = state_34925__$1;
(statearr_34933_35015[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (1))){
var state_34925__$1 = state_34925;
var statearr_34934_35016 = state_34925__$1;
(statearr_34934_35016[(2)] = null);

(statearr_34934_35016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (24))){
var inst_34824 = (state_34925[(7)]);
var inst_34843 = (state_34925[(2)]);
var inst_34844 = cljs.core.next.call(null,inst_34824);
var inst_34802 = inst_34844;
var inst_34803 = null;
var inst_34804 = (0);
var inst_34805 = (0);
var state_34925__$1 = (function (){var statearr_34935 = state_34925;
(statearr_34935[(13)] = inst_34843);

(statearr_34935[(14)] = inst_34803);

(statearr_34935[(15)] = inst_34804);

(statearr_34935[(16)] = inst_34802);

(statearr_34935[(17)] = inst_34805);

return statearr_34935;
})();
var statearr_34936_35017 = state_34925__$1;
(statearr_34936_35017[(2)] = null);

(statearr_34936_35017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (39))){
var state_34925__$1 = state_34925;
var statearr_34940_35018 = state_34925__$1;
(statearr_34940_35018[(2)] = null);

(statearr_34940_35018[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (4))){
var inst_34793 = (state_34925[(10)]);
var inst_34793__$1 = (state_34925[(2)]);
var inst_34794 = (inst_34793__$1 == null);
var state_34925__$1 = (function (){var statearr_34941 = state_34925;
(statearr_34941[(10)] = inst_34793__$1);

return statearr_34941;
})();
if(cljs.core.truth_(inst_34794)){
var statearr_34942_35019 = state_34925__$1;
(statearr_34942_35019[(1)] = (5));

} else {
var statearr_34943_35020 = state_34925__$1;
(statearr_34943_35020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (15))){
var inst_34803 = (state_34925[(14)]);
var inst_34804 = (state_34925[(15)]);
var inst_34802 = (state_34925[(16)]);
var inst_34805 = (state_34925[(17)]);
var inst_34820 = (state_34925[(2)]);
var inst_34821 = (inst_34805 + (1));
var tmp34937 = inst_34803;
var tmp34938 = inst_34804;
var tmp34939 = inst_34802;
var inst_34802__$1 = tmp34939;
var inst_34803__$1 = tmp34937;
var inst_34804__$1 = tmp34938;
var inst_34805__$1 = inst_34821;
var state_34925__$1 = (function (){var statearr_34944 = state_34925;
(statearr_34944[(14)] = inst_34803__$1);

(statearr_34944[(15)] = inst_34804__$1);

(statearr_34944[(16)] = inst_34802__$1);

(statearr_34944[(17)] = inst_34805__$1);

(statearr_34944[(18)] = inst_34820);

return statearr_34944;
})();
var statearr_34945_35021 = state_34925__$1;
(statearr_34945_35021[(2)] = null);

(statearr_34945_35021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (21))){
var inst_34847 = (state_34925[(2)]);
var state_34925__$1 = state_34925;
var statearr_34949_35022 = state_34925__$1;
(statearr_34949_35022[(2)] = inst_34847);

(statearr_34949_35022[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (31))){
var inst_34873 = (state_34925[(9)]);
var inst_34877 = done.call(null,null);
var inst_34878 = cljs.core.async.untap_STAR_.call(null,m,inst_34873);
var state_34925__$1 = (function (){var statearr_34950 = state_34925;
(statearr_34950[(19)] = inst_34877);

return statearr_34950;
})();
var statearr_34951_35023 = state_34925__$1;
(statearr_34951_35023[(2)] = inst_34878);

(statearr_34951_35023[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (32))){
var inst_34866 = (state_34925[(11)]);
var inst_34865 = (state_34925[(20)]);
var inst_34868 = (state_34925[(12)]);
var inst_34867 = (state_34925[(21)]);
var inst_34880 = (state_34925[(2)]);
var inst_34881 = (inst_34868 + (1));
var tmp34946 = inst_34866;
var tmp34947 = inst_34865;
var tmp34948 = inst_34867;
var inst_34865__$1 = tmp34947;
var inst_34866__$1 = tmp34946;
var inst_34867__$1 = tmp34948;
var inst_34868__$1 = inst_34881;
var state_34925__$1 = (function (){var statearr_34952 = state_34925;
(statearr_34952[(11)] = inst_34866__$1);

(statearr_34952[(20)] = inst_34865__$1);

(statearr_34952[(12)] = inst_34868__$1);

(statearr_34952[(22)] = inst_34880);

(statearr_34952[(21)] = inst_34867__$1);

return statearr_34952;
})();
var statearr_34953_35024 = state_34925__$1;
(statearr_34953_35024[(2)] = null);

(statearr_34953_35024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (40))){
var inst_34893 = (state_34925[(23)]);
var inst_34897 = done.call(null,null);
var inst_34898 = cljs.core.async.untap_STAR_.call(null,m,inst_34893);
var state_34925__$1 = (function (){var statearr_34954 = state_34925;
(statearr_34954[(24)] = inst_34897);

return statearr_34954;
})();
var statearr_34955_35025 = state_34925__$1;
(statearr_34955_35025[(2)] = inst_34898);

(statearr_34955_35025[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (33))){
var inst_34884 = (state_34925[(25)]);
var inst_34886 = cljs.core.chunked_seq_QMARK_.call(null,inst_34884);
var state_34925__$1 = state_34925;
if(inst_34886){
var statearr_34956_35026 = state_34925__$1;
(statearr_34956_35026[(1)] = (36));

} else {
var statearr_34957_35027 = state_34925__$1;
(statearr_34957_35027[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (13))){
var inst_34814 = (state_34925[(26)]);
var inst_34817 = cljs.core.async.close_BANG_.call(null,inst_34814);
var state_34925__$1 = state_34925;
var statearr_34958_35028 = state_34925__$1;
(statearr_34958_35028[(2)] = inst_34817);

(statearr_34958_35028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (22))){
var inst_34837 = (state_34925[(8)]);
var inst_34840 = cljs.core.async.close_BANG_.call(null,inst_34837);
var state_34925__$1 = state_34925;
var statearr_34959_35029 = state_34925__$1;
(statearr_34959_35029[(2)] = inst_34840);

(statearr_34959_35029[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (36))){
var inst_34884 = (state_34925[(25)]);
var inst_34888 = cljs.core.chunk_first.call(null,inst_34884);
var inst_34889 = cljs.core.chunk_rest.call(null,inst_34884);
var inst_34890 = cljs.core.count.call(null,inst_34888);
var inst_34865 = inst_34889;
var inst_34866 = inst_34888;
var inst_34867 = inst_34890;
var inst_34868 = (0);
var state_34925__$1 = (function (){var statearr_34960 = state_34925;
(statearr_34960[(11)] = inst_34866);

(statearr_34960[(20)] = inst_34865);

(statearr_34960[(12)] = inst_34868);

(statearr_34960[(21)] = inst_34867);

return statearr_34960;
})();
var statearr_34961_35030 = state_34925__$1;
(statearr_34961_35030[(2)] = null);

(statearr_34961_35030[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (41))){
var inst_34884 = (state_34925[(25)]);
var inst_34900 = (state_34925[(2)]);
var inst_34901 = cljs.core.next.call(null,inst_34884);
var inst_34865 = inst_34901;
var inst_34866 = null;
var inst_34867 = (0);
var inst_34868 = (0);
var state_34925__$1 = (function (){var statearr_34962 = state_34925;
(statearr_34962[(11)] = inst_34866);

(statearr_34962[(20)] = inst_34865);

(statearr_34962[(27)] = inst_34900);

(statearr_34962[(12)] = inst_34868);

(statearr_34962[(21)] = inst_34867);

return statearr_34962;
})();
var statearr_34963_35031 = state_34925__$1;
(statearr_34963_35031[(2)] = null);

(statearr_34963_35031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (43))){
var state_34925__$1 = state_34925;
var statearr_34964_35032 = state_34925__$1;
(statearr_34964_35032[(2)] = null);

(statearr_34964_35032[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (29))){
var inst_34909 = (state_34925[(2)]);
var state_34925__$1 = state_34925;
var statearr_34965_35033 = state_34925__$1;
(statearr_34965_35033[(2)] = inst_34909);

(statearr_34965_35033[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (44))){
var inst_34918 = (state_34925[(2)]);
var state_34925__$1 = (function (){var statearr_34966 = state_34925;
(statearr_34966[(28)] = inst_34918);

return statearr_34966;
})();
var statearr_34967_35034 = state_34925__$1;
(statearr_34967_35034[(2)] = null);

(statearr_34967_35034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (6))){
var inst_34857 = (state_34925[(29)]);
var inst_34856 = cljs.core.deref.call(null,cs);
var inst_34857__$1 = cljs.core.keys.call(null,inst_34856);
var inst_34858 = cljs.core.count.call(null,inst_34857__$1);
var inst_34859 = cljs.core.reset_BANG_.call(null,dctr,inst_34858);
var inst_34864 = cljs.core.seq.call(null,inst_34857__$1);
var inst_34865 = inst_34864;
var inst_34866 = null;
var inst_34867 = (0);
var inst_34868 = (0);
var state_34925__$1 = (function (){var statearr_34968 = state_34925;
(statearr_34968[(29)] = inst_34857__$1);

(statearr_34968[(11)] = inst_34866);

(statearr_34968[(20)] = inst_34865);

(statearr_34968[(30)] = inst_34859);

(statearr_34968[(12)] = inst_34868);

(statearr_34968[(21)] = inst_34867);

return statearr_34968;
})();
var statearr_34969_35035 = state_34925__$1;
(statearr_34969_35035[(2)] = null);

(statearr_34969_35035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (28))){
var inst_34865 = (state_34925[(20)]);
var inst_34884 = (state_34925[(25)]);
var inst_34884__$1 = cljs.core.seq.call(null,inst_34865);
var state_34925__$1 = (function (){var statearr_34970 = state_34925;
(statearr_34970[(25)] = inst_34884__$1);

return statearr_34970;
})();
if(inst_34884__$1){
var statearr_34971_35036 = state_34925__$1;
(statearr_34971_35036[(1)] = (33));

} else {
var statearr_34972_35037 = state_34925__$1;
(statearr_34972_35037[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (25))){
var inst_34868 = (state_34925[(12)]);
var inst_34867 = (state_34925[(21)]);
var inst_34870 = (inst_34868 < inst_34867);
var inst_34871 = inst_34870;
var state_34925__$1 = state_34925;
if(cljs.core.truth_(inst_34871)){
var statearr_34973_35038 = state_34925__$1;
(statearr_34973_35038[(1)] = (27));

} else {
var statearr_34974_35039 = state_34925__$1;
(statearr_34974_35039[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (34))){
var state_34925__$1 = state_34925;
var statearr_34975_35040 = state_34925__$1;
(statearr_34975_35040[(2)] = null);

(statearr_34975_35040[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (17))){
var state_34925__$1 = state_34925;
var statearr_34976_35041 = state_34925__$1;
(statearr_34976_35041[(2)] = null);

(statearr_34976_35041[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (3))){
var inst_34923 = (state_34925[(2)]);
var state_34925__$1 = state_34925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34925__$1,inst_34923);
} else {
if((state_val_34926 === (12))){
var inst_34852 = (state_34925[(2)]);
var state_34925__$1 = state_34925;
var statearr_34977_35042 = state_34925__$1;
(statearr_34977_35042[(2)] = inst_34852);

(statearr_34977_35042[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (2))){
var state_34925__$1 = state_34925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34925__$1,(4),ch);
} else {
if((state_val_34926 === (23))){
var state_34925__$1 = state_34925;
var statearr_34978_35043 = state_34925__$1;
(statearr_34978_35043[(2)] = null);

(statearr_34978_35043[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (35))){
var inst_34907 = (state_34925[(2)]);
var state_34925__$1 = state_34925;
var statearr_34979_35044 = state_34925__$1;
(statearr_34979_35044[(2)] = inst_34907);

(statearr_34979_35044[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (19))){
var inst_34824 = (state_34925[(7)]);
var inst_34828 = cljs.core.chunk_first.call(null,inst_34824);
var inst_34829 = cljs.core.chunk_rest.call(null,inst_34824);
var inst_34830 = cljs.core.count.call(null,inst_34828);
var inst_34802 = inst_34829;
var inst_34803 = inst_34828;
var inst_34804 = inst_34830;
var inst_34805 = (0);
var state_34925__$1 = (function (){var statearr_34980 = state_34925;
(statearr_34980[(14)] = inst_34803);

(statearr_34980[(15)] = inst_34804);

(statearr_34980[(16)] = inst_34802);

(statearr_34980[(17)] = inst_34805);

return statearr_34980;
})();
var statearr_34981_35045 = state_34925__$1;
(statearr_34981_35045[(2)] = null);

(statearr_34981_35045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (11))){
var inst_34824 = (state_34925[(7)]);
var inst_34802 = (state_34925[(16)]);
var inst_34824__$1 = cljs.core.seq.call(null,inst_34802);
var state_34925__$1 = (function (){var statearr_34982 = state_34925;
(statearr_34982[(7)] = inst_34824__$1);

return statearr_34982;
})();
if(inst_34824__$1){
var statearr_34983_35046 = state_34925__$1;
(statearr_34983_35046[(1)] = (16));

} else {
var statearr_34984_35047 = state_34925__$1;
(statearr_34984_35047[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (9))){
var inst_34854 = (state_34925[(2)]);
var state_34925__$1 = state_34925;
var statearr_34985_35048 = state_34925__$1;
(statearr_34985_35048[(2)] = inst_34854);

(statearr_34985_35048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (5))){
var inst_34800 = cljs.core.deref.call(null,cs);
var inst_34801 = cljs.core.seq.call(null,inst_34800);
var inst_34802 = inst_34801;
var inst_34803 = null;
var inst_34804 = (0);
var inst_34805 = (0);
var state_34925__$1 = (function (){var statearr_34986 = state_34925;
(statearr_34986[(14)] = inst_34803);

(statearr_34986[(15)] = inst_34804);

(statearr_34986[(16)] = inst_34802);

(statearr_34986[(17)] = inst_34805);

return statearr_34986;
})();
var statearr_34987_35049 = state_34925__$1;
(statearr_34987_35049[(2)] = null);

(statearr_34987_35049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (14))){
var state_34925__$1 = state_34925;
var statearr_34988_35050 = state_34925__$1;
(statearr_34988_35050[(2)] = null);

(statearr_34988_35050[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (45))){
var inst_34915 = (state_34925[(2)]);
var state_34925__$1 = state_34925;
var statearr_34989_35051 = state_34925__$1;
(statearr_34989_35051[(2)] = inst_34915);

(statearr_34989_35051[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (26))){
var inst_34857 = (state_34925[(29)]);
var inst_34911 = (state_34925[(2)]);
var inst_34912 = cljs.core.seq.call(null,inst_34857);
var state_34925__$1 = (function (){var statearr_34990 = state_34925;
(statearr_34990[(31)] = inst_34911);

return statearr_34990;
})();
if(inst_34912){
var statearr_34991_35052 = state_34925__$1;
(statearr_34991_35052[(1)] = (42));

} else {
var statearr_34992_35053 = state_34925__$1;
(statearr_34992_35053[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (16))){
var inst_34824 = (state_34925[(7)]);
var inst_34826 = cljs.core.chunked_seq_QMARK_.call(null,inst_34824);
var state_34925__$1 = state_34925;
if(inst_34826){
var statearr_34993_35054 = state_34925__$1;
(statearr_34993_35054[(1)] = (19));

} else {
var statearr_34994_35055 = state_34925__$1;
(statearr_34994_35055[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (38))){
var inst_34904 = (state_34925[(2)]);
var state_34925__$1 = state_34925;
var statearr_34995_35056 = state_34925__$1;
(statearr_34995_35056[(2)] = inst_34904);

(statearr_34995_35056[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (30))){
var state_34925__$1 = state_34925;
var statearr_34996_35057 = state_34925__$1;
(statearr_34996_35057[(2)] = null);

(statearr_34996_35057[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (10))){
var inst_34803 = (state_34925[(14)]);
var inst_34805 = (state_34925[(17)]);
var inst_34813 = cljs.core._nth.call(null,inst_34803,inst_34805);
var inst_34814 = cljs.core.nth.call(null,inst_34813,(0),null);
var inst_34815 = cljs.core.nth.call(null,inst_34813,(1),null);
var state_34925__$1 = (function (){var statearr_34997 = state_34925;
(statearr_34997[(26)] = inst_34814);

return statearr_34997;
})();
if(cljs.core.truth_(inst_34815)){
var statearr_34998_35058 = state_34925__$1;
(statearr_34998_35058[(1)] = (13));

} else {
var statearr_34999_35059 = state_34925__$1;
(statearr_34999_35059[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (18))){
var inst_34850 = (state_34925[(2)]);
var state_34925__$1 = state_34925;
var statearr_35000_35060 = state_34925__$1;
(statearr_35000_35060[(2)] = inst_34850);

(statearr_35000_35060[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (42))){
var state_34925__$1 = state_34925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34925__$1,(45),dchan);
} else {
if((state_val_34926 === (37))){
var inst_34793 = (state_34925[(10)]);
var inst_34893 = (state_34925[(23)]);
var inst_34884 = (state_34925[(25)]);
var inst_34893__$1 = cljs.core.first.call(null,inst_34884);
var inst_34894 = cljs.core.async.put_BANG_.call(null,inst_34893__$1,inst_34793,done);
var state_34925__$1 = (function (){var statearr_35001 = state_34925;
(statearr_35001[(23)] = inst_34893__$1);

return statearr_35001;
})();
if(cljs.core.truth_(inst_34894)){
var statearr_35002_35061 = state_34925__$1;
(statearr_35002_35061[(1)] = (39));

} else {
var statearr_35003_35062 = state_34925__$1;
(statearr_35003_35062[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (8))){
var inst_34804 = (state_34925[(15)]);
var inst_34805 = (state_34925[(17)]);
var inst_34807 = (inst_34805 < inst_34804);
var inst_34808 = inst_34807;
var state_34925__$1 = state_34925;
if(cljs.core.truth_(inst_34808)){
var statearr_35004_35063 = state_34925__$1;
(statearr_35004_35063[(1)] = (10));

} else {
var statearr_35005_35064 = state_34925__$1;
(statearr_35005_35064[(1)] = (11));

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
});})(c__34205__auto___35010,cs,m,dchan,dctr,done))
;
return ((function (switch__34117__auto__,c__34205__auto___35010,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34118__auto__ = null;
var cljs$core$async$mult_$_state_machine__34118__auto____0 = (function (){
var statearr_35006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35006[(0)] = cljs$core$async$mult_$_state_machine__34118__auto__);

(statearr_35006[(1)] = (1));

return statearr_35006;
});
var cljs$core$async$mult_$_state_machine__34118__auto____1 = (function (state_34925){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_34925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e35007){if((e35007 instanceof Object)){
var ex__34121__auto__ = e35007;
var statearr_35008_35065 = state_34925;
(statearr_35008_35065[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35066 = state_34925;
state_34925 = G__35066;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34118__auto__ = function(state_34925){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34118__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34118__auto____1.call(this,state_34925);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34118__auto____0;
cljs$core$async$mult_$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34118__auto____1;
return cljs$core$async$mult_$_state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto___35010,cs,m,dchan,dctr,done))
})();
var state__34207__auto__ = (function (){var statearr_35009 = f__34206__auto__.call(null);
(statearr_35009[(6)] = c__34205__auto___35010);

return statearr_35009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto___35010,cs,m,dchan,dctr,done))
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
var G__35068 = arguments.length;
switch (G__35068) {
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
var x__29106__auto__ = (((m == null))?null:m);
var m__29107__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,m,ch);
} else {
var m__29107__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,m,ch);
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
var x__29106__auto__ = (((m == null))?null:m);
var m__29107__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,m,ch);
} else {
var m__29107__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,m,ch);
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
var x__29106__auto__ = (((m == null))?null:m);
var m__29107__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,m);
} else {
var m__29107__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,m);
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
var x__29106__auto__ = (((m == null))?null:m);
var m__29107__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,m,state_map);
} else {
var m__29107__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,m,state_map);
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
var x__29106__auto__ = (((m == null))?null:m);
var m__29107__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,m,mode);
} else {
var m__29107__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29599__auto__ = [];
var len__29592__auto___35080 = arguments.length;
var i__29593__auto___35081 = (0);
while(true){
if((i__29593__auto___35081 < len__29592__auto___35080)){
args__29599__auto__.push((arguments[i__29593__auto___35081]));

var G__35082 = (i__29593__auto___35081 + (1));
i__29593__auto___35081 = G__35082;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((3) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29600__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35074){
var map__35075 = p__35074;
var map__35075__$1 = ((((!((map__35075 == null)))?((((map__35075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35075):map__35075);
var opts = map__35075__$1;
var statearr_35077_35083 = state;
(statearr_35077_35083[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__35075,map__35075__$1,opts){
return (function (val){
var statearr_35078_35084 = state;
(statearr_35078_35084[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35075,map__35075__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_35079_35085 = state;
(statearr_35079_35085[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35070){
var G__35071 = cljs.core.first.call(null,seq35070);
var seq35070__$1 = cljs.core.next.call(null,seq35070);
var G__35072 = cljs.core.first.call(null,seq35070__$1);
var seq35070__$2 = cljs.core.next.call(null,seq35070__$1);
var G__35073 = cljs.core.first.call(null,seq35070__$2);
var seq35070__$3 = cljs.core.next.call(null,seq35070__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35071,G__35072,G__35073,seq35070__$3);
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
if(typeof cljs.core.async.t_cljs$core$async35086 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35086 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta35087){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta35087 = meta35087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35088,meta35087__$1){
var self__ = this;
var _35088__$1 = this;
return (new cljs.core.async.t_cljs$core$async35086(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta35087__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35086.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35088){
var self__ = this;
var _35088__$1 = this;
return self__.meta35087;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35086.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35086.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35086.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35086.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35086.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35086.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35086.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35086.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async35086.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta35087","meta35087",44104734,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35086.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35086.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35086";

cljs.core.async.t_cljs$core$async35086.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async35086");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35086 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35086(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35087){
return (new cljs.core.async.t_cljs$core$async35086(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35087));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35086(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34205__auto___35250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto___35250,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto___35250,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35190){
var state_val_35191 = (state_35190[(1)]);
if((state_val_35191 === (7))){
var inst_35105 = (state_35190[(2)]);
var state_35190__$1 = state_35190;
var statearr_35192_35251 = state_35190__$1;
(statearr_35192_35251[(2)] = inst_35105);

(statearr_35192_35251[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (20))){
var inst_35117 = (state_35190[(7)]);
var state_35190__$1 = state_35190;
var statearr_35193_35252 = state_35190__$1;
(statearr_35193_35252[(2)] = inst_35117);

(statearr_35193_35252[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (27))){
var state_35190__$1 = state_35190;
var statearr_35194_35253 = state_35190__$1;
(statearr_35194_35253[(2)] = null);

(statearr_35194_35253[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (1))){
var inst_35092 = (state_35190[(8)]);
var inst_35092__$1 = calc_state.call(null);
var inst_35094 = (inst_35092__$1 == null);
var inst_35095 = cljs.core.not.call(null,inst_35094);
var state_35190__$1 = (function (){var statearr_35195 = state_35190;
(statearr_35195[(8)] = inst_35092__$1);

return statearr_35195;
})();
if(inst_35095){
var statearr_35196_35254 = state_35190__$1;
(statearr_35196_35254[(1)] = (2));

} else {
var statearr_35197_35255 = state_35190__$1;
(statearr_35197_35255[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (24))){
var inst_35164 = (state_35190[(9)]);
var inst_35150 = (state_35190[(10)]);
var inst_35141 = (state_35190[(11)]);
var inst_35164__$1 = inst_35141.call(null,inst_35150);
var state_35190__$1 = (function (){var statearr_35198 = state_35190;
(statearr_35198[(9)] = inst_35164__$1);

return statearr_35198;
})();
if(cljs.core.truth_(inst_35164__$1)){
var statearr_35199_35256 = state_35190__$1;
(statearr_35199_35256[(1)] = (29));

} else {
var statearr_35200_35257 = state_35190__$1;
(statearr_35200_35257[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (4))){
var inst_35108 = (state_35190[(2)]);
var state_35190__$1 = state_35190;
if(cljs.core.truth_(inst_35108)){
var statearr_35201_35258 = state_35190__$1;
(statearr_35201_35258[(1)] = (8));

} else {
var statearr_35202_35259 = state_35190__$1;
(statearr_35202_35259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (15))){
var inst_35135 = (state_35190[(2)]);
var state_35190__$1 = state_35190;
if(cljs.core.truth_(inst_35135)){
var statearr_35203_35260 = state_35190__$1;
(statearr_35203_35260[(1)] = (19));

} else {
var statearr_35204_35261 = state_35190__$1;
(statearr_35204_35261[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (21))){
var inst_35140 = (state_35190[(12)]);
var inst_35140__$1 = (state_35190[(2)]);
var inst_35141 = cljs.core.get.call(null,inst_35140__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35142 = cljs.core.get.call(null,inst_35140__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35143 = cljs.core.get.call(null,inst_35140__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35190__$1 = (function (){var statearr_35205 = state_35190;
(statearr_35205[(13)] = inst_35142);

(statearr_35205[(12)] = inst_35140__$1);

(statearr_35205[(11)] = inst_35141);

return statearr_35205;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35190__$1,(22),inst_35143);
} else {
if((state_val_35191 === (31))){
var inst_35172 = (state_35190[(2)]);
var state_35190__$1 = state_35190;
if(cljs.core.truth_(inst_35172)){
var statearr_35206_35262 = state_35190__$1;
(statearr_35206_35262[(1)] = (32));

} else {
var statearr_35207_35263 = state_35190__$1;
(statearr_35207_35263[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (32))){
var inst_35149 = (state_35190[(14)]);
var state_35190__$1 = state_35190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35190__$1,(35),out,inst_35149);
} else {
if((state_val_35191 === (33))){
var inst_35140 = (state_35190[(12)]);
var inst_35117 = inst_35140;
var state_35190__$1 = (function (){var statearr_35208 = state_35190;
(statearr_35208[(7)] = inst_35117);

return statearr_35208;
})();
var statearr_35209_35264 = state_35190__$1;
(statearr_35209_35264[(2)] = null);

(statearr_35209_35264[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (13))){
var inst_35117 = (state_35190[(7)]);
var inst_35124 = inst_35117.cljs$lang$protocol_mask$partition0$;
var inst_35125 = (inst_35124 & (64));
var inst_35126 = inst_35117.cljs$core$ISeq$;
var inst_35127 = (cljs.core.PROTOCOL_SENTINEL === inst_35126);
var inst_35128 = (inst_35125) || (inst_35127);
var state_35190__$1 = state_35190;
if(cljs.core.truth_(inst_35128)){
var statearr_35210_35265 = state_35190__$1;
(statearr_35210_35265[(1)] = (16));

} else {
var statearr_35211_35266 = state_35190__$1;
(statearr_35211_35266[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (22))){
var inst_35149 = (state_35190[(14)]);
var inst_35150 = (state_35190[(10)]);
var inst_35148 = (state_35190[(2)]);
var inst_35149__$1 = cljs.core.nth.call(null,inst_35148,(0),null);
var inst_35150__$1 = cljs.core.nth.call(null,inst_35148,(1),null);
var inst_35151 = (inst_35149__$1 == null);
var inst_35152 = cljs.core._EQ_.call(null,inst_35150__$1,change);
var inst_35153 = (inst_35151) || (inst_35152);
var state_35190__$1 = (function (){var statearr_35212 = state_35190;
(statearr_35212[(14)] = inst_35149__$1);

(statearr_35212[(10)] = inst_35150__$1);

return statearr_35212;
})();
if(cljs.core.truth_(inst_35153)){
var statearr_35213_35267 = state_35190__$1;
(statearr_35213_35267[(1)] = (23));

} else {
var statearr_35214_35268 = state_35190__$1;
(statearr_35214_35268[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (36))){
var inst_35140 = (state_35190[(12)]);
var inst_35117 = inst_35140;
var state_35190__$1 = (function (){var statearr_35215 = state_35190;
(statearr_35215[(7)] = inst_35117);

return statearr_35215;
})();
var statearr_35216_35269 = state_35190__$1;
(statearr_35216_35269[(2)] = null);

(statearr_35216_35269[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (29))){
var inst_35164 = (state_35190[(9)]);
var state_35190__$1 = state_35190;
var statearr_35217_35270 = state_35190__$1;
(statearr_35217_35270[(2)] = inst_35164);

(statearr_35217_35270[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (6))){
var state_35190__$1 = state_35190;
var statearr_35218_35271 = state_35190__$1;
(statearr_35218_35271[(2)] = false);

(statearr_35218_35271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (28))){
var inst_35160 = (state_35190[(2)]);
var inst_35161 = calc_state.call(null);
var inst_35117 = inst_35161;
var state_35190__$1 = (function (){var statearr_35219 = state_35190;
(statearr_35219[(15)] = inst_35160);

(statearr_35219[(7)] = inst_35117);

return statearr_35219;
})();
var statearr_35220_35272 = state_35190__$1;
(statearr_35220_35272[(2)] = null);

(statearr_35220_35272[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (25))){
var inst_35186 = (state_35190[(2)]);
var state_35190__$1 = state_35190;
var statearr_35221_35273 = state_35190__$1;
(statearr_35221_35273[(2)] = inst_35186);

(statearr_35221_35273[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (34))){
var inst_35184 = (state_35190[(2)]);
var state_35190__$1 = state_35190;
var statearr_35222_35274 = state_35190__$1;
(statearr_35222_35274[(2)] = inst_35184);

(statearr_35222_35274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (17))){
var state_35190__$1 = state_35190;
var statearr_35223_35275 = state_35190__$1;
(statearr_35223_35275[(2)] = false);

(statearr_35223_35275[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (3))){
var state_35190__$1 = state_35190;
var statearr_35224_35276 = state_35190__$1;
(statearr_35224_35276[(2)] = false);

(statearr_35224_35276[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (12))){
var inst_35188 = (state_35190[(2)]);
var state_35190__$1 = state_35190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35190__$1,inst_35188);
} else {
if((state_val_35191 === (2))){
var inst_35092 = (state_35190[(8)]);
var inst_35097 = inst_35092.cljs$lang$protocol_mask$partition0$;
var inst_35098 = (inst_35097 & (64));
var inst_35099 = inst_35092.cljs$core$ISeq$;
var inst_35100 = (cljs.core.PROTOCOL_SENTINEL === inst_35099);
var inst_35101 = (inst_35098) || (inst_35100);
var state_35190__$1 = state_35190;
if(cljs.core.truth_(inst_35101)){
var statearr_35225_35277 = state_35190__$1;
(statearr_35225_35277[(1)] = (5));

} else {
var statearr_35226_35278 = state_35190__$1;
(statearr_35226_35278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (23))){
var inst_35149 = (state_35190[(14)]);
var inst_35155 = (inst_35149 == null);
var state_35190__$1 = state_35190;
if(cljs.core.truth_(inst_35155)){
var statearr_35227_35279 = state_35190__$1;
(statearr_35227_35279[(1)] = (26));

} else {
var statearr_35228_35280 = state_35190__$1;
(statearr_35228_35280[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (35))){
var inst_35175 = (state_35190[(2)]);
var state_35190__$1 = state_35190;
if(cljs.core.truth_(inst_35175)){
var statearr_35229_35281 = state_35190__$1;
(statearr_35229_35281[(1)] = (36));

} else {
var statearr_35230_35282 = state_35190__$1;
(statearr_35230_35282[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (19))){
var inst_35117 = (state_35190[(7)]);
var inst_35137 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35117);
var state_35190__$1 = state_35190;
var statearr_35231_35283 = state_35190__$1;
(statearr_35231_35283[(2)] = inst_35137);

(statearr_35231_35283[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (11))){
var inst_35117 = (state_35190[(7)]);
var inst_35121 = (inst_35117 == null);
var inst_35122 = cljs.core.not.call(null,inst_35121);
var state_35190__$1 = state_35190;
if(inst_35122){
var statearr_35232_35284 = state_35190__$1;
(statearr_35232_35284[(1)] = (13));

} else {
var statearr_35233_35285 = state_35190__$1;
(statearr_35233_35285[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (9))){
var inst_35092 = (state_35190[(8)]);
var state_35190__$1 = state_35190;
var statearr_35234_35286 = state_35190__$1;
(statearr_35234_35286[(2)] = inst_35092);

(statearr_35234_35286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (5))){
var state_35190__$1 = state_35190;
var statearr_35235_35287 = state_35190__$1;
(statearr_35235_35287[(2)] = true);

(statearr_35235_35287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (14))){
var state_35190__$1 = state_35190;
var statearr_35236_35288 = state_35190__$1;
(statearr_35236_35288[(2)] = false);

(statearr_35236_35288[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (26))){
var inst_35150 = (state_35190[(10)]);
var inst_35157 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35150);
var state_35190__$1 = state_35190;
var statearr_35237_35289 = state_35190__$1;
(statearr_35237_35289[(2)] = inst_35157);

(statearr_35237_35289[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (16))){
var state_35190__$1 = state_35190;
var statearr_35238_35290 = state_35190__$1;
(statearr_35238_35290[(2)] = true);

(statearr_35238_35290[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (38))){
var inst_35180 = (state_35190[(2)]);
var state_35190__$1 = state_35190;
var statearr_35239_35291 = state_35190__$1;
(statearr_35239_35291[(2)] = inst_35180);

(statearr_35239_35291[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (30))){
var inst_35142 = (state_35190[(13)]);
var inst_35150 = (state_35190[(10)]);
var inst_35141 = (state_35190[(11)]);
var inst_35167 = cljs.core.empty_QMARK_.call(null,inst_35141);
var inst_35168 = inst_35142.call(null,inst_35150);
var inst_35169 = cljs.core.not.call(null,inst_35168);
var inst_35170 = (inst_35167) && (inst_35169);
var state_35190__$1 = state_35190;
var statearr_35240_35292 = state_35190__$1;
(statearr_35240_35292[(2)] = inst_35170);

(statearr_35240_35292[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (10))){
var inst_35092 = (state_35190[(8)]);
var inst_35113 = (state_35190[(2)]);
var inst_35114 = cljs.core.get.call(null,inst_35113,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35115 = cljs.core.get.call(null,inst_35113,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35116 = cljs.core.get.call(null,inst_35113,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35117 = inst_35092;
var state_35190__$1 = (function (){var statearr_35241 = state_35190;
(statearr_35241[(16)] = inst_35116);

(statearr_35241[(17)] = inst_35115);

(statearr_35241[(7)] = inst_35117);

(statearr_35241[(18)] = inst_35114);

return statearr_35241;
})();
var statearr_35242_35293 = state_35190__$1;
(statearr_35242_35293[(2)] = null);

(statearr_35242_35293[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (18))){
var inst_35132 = (state_35190[(2)]);
var state_35190__$1 = state_35190;
var statearr_35243_35294 = state_35190__$1;
(statearr_35243_35294[(2)] = inst_35132);

(statearr_35243_35294[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (37))){
var state_35190__$1 = state_35190;
var statearr_35244_35295 = state_35190__$1;
(statearr_35244_35295[(2)] = null);

(statearr_35244_35295[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (8))){
var inst_35092 = (state_35190[(8)]);
var inst_35110 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35092);
var state_35190__$1 = state_35190;
var statearr_35245_35296 = state_35190__$1;
(statearr_35245_35296[(2)] = inst_35110);

(statearr_35245_35296[(1)] = (10));


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
});})(c__34205__auto___35250,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34117__auto__,c__34205__auto___35250,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34118__auto__ = null;
var cljs$core$async$mix_$_state_machine__34118__auto____0 = (function (){
var statearr_35246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35246[(0)] = cljs$core$async$mix_$_state_machine__34118__auto__);

(statearr_35246[(1)] = (1));

return statearr_35246;
});
var cljs$core$async$mix_$_state_machine__34118__auto____1 = (function (state_35190){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_35190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e35247){if((e35247 instanceof Object)){
var ex__34121__auto__ = e35247;
var statearr_35248_35297 = state_35190;
(statearr_35248_35297[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35298 = state_35190;
state_35190 = G__35298;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34118__auto__ = function(state_35190){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34118__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34118__auto____1.call(this,state_35190);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34118__auto____0;
cljs$core$async$mix_$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34118__auto____1;
return cljs$core$async$mix_$_state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto___35250,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34207__auto__ = (function (){var statearr_35249 = f__34206__auto__.call(null);
(statearr_35249[(6)] = c__34205__auto___35250);

return statearr_35249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto___35250,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__29106__auto__ = (((p == null))?null:p);
var m__29107__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__29107__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__29106__auto__ = (((p == null))?null:p);
var m__29107__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,p,v,ch);
} else {
var m__29107__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35300 = arguments.length;
switch (G__35300) {
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
var x__29106__auto__ = (((p == null))?null:p);
var m__29107__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,p);
} else {
var m__29107__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,p);
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
var x__29106__auto__ = (((p == null))?null:p);
var m__29107__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,p,v);
} else {
var m__29107__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,p,v);
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
var G__35304 = arguments.length;
switch (G__35304) {
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
var or__28423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28423__auto__,mults){
return (function (p1__35302_SHARP_){
if(cljs.core.truth_(p1__35302_SHARP_.call(null,topic))){
return p1__35302_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35302_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28423__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35305 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35305 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35306){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35306 = meta35306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35307,meta35306__$1){
var self__ = this;
var _35307__$1 = this;
return (new cljs.core.async.t_cljs$core$async35305(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35306__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35305.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35307){
var self__ = this;
var _35307__$1 = this;
return self__.meta35306;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35305.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35305.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35305.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35305.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35305.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async35305.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35305.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35305.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35306","meta35306",1262575883,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35305.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35305.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35305";

cljs.core.async.t_cljs$core$async35305.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async35305");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35305 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35305(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35306){
return (new cljs.core.async.t_cljs$core$async35305(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35306));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35305(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34205__auto___35425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto___35425,mults,ensure_mult,p){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto___35425,mults,ensure_mult,p){
return (function (state_35379){
var state_val_35380 = (state_35379[(1)]);
if((state_val_35380 === (7))){
var inst_35375 = (state_35379[(2)]);
var state_35379__$1 = state_35379;
var statearr_35381_35426 = state_35379__$1;
(statearr_35381_35426[(2)] = inst_35375);

(statearr_35381_35426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (20))){
var state_35379__$1 = state_35379;
var statearr_35382_35427 = state_35379__$1;
(statearr_35382_35427[(2)] = null);

(statearr_35382_35427[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (1))){
var state_35379__$1 = state_35379;
var statearr_35383_35428 = state_35379__$1;
(statearr_35383_35428[(2)] = null);

(statearr_35383_35428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (24))){
var inst_35358 = (state_35379[(7)]);
var inst_35367 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35358);
var state_35379__$1 = state_35379;
var statearr_35384_35429 = state_35379__$1;
(statearr_35384_35429[(2)] = inst_35367);

(statearr_35384_35429[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (4))){
var inst_35310 = (state_35379[(8)]);
var inst_35310__$1 = (state_35379[(2)]);
var inst_35311 = (inst_35310__$1 == null);
var state_35379__$1 = (function (){var statearr_35385 = state_35379;
(statearr_35385[(8)] = inst_35310__$1);

return statearr_35385;
})();
if(cljs.core.truth_(inst_35311)){
var statearr_35386_35430 = state_35379__$1;
(statearr_35386_35430[(1)] = (5));

} else {
var statearr_35387_35431 = state_35379__$1;
(statearr_35387_35431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (15))){
var inst_35352 = (state_35379[(2)]);
var state_35379__$1 = state_35379;
var statearr_35388_35432 = state_35379__$1;
(statearr_35388_35432[(2)] = inst_35352);

(statearr_35388_35432[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (21))){
var inst_35372 = (state_35379[(2)]);
var state_35379__$1 = (function (){var statearr_35389 = state_35379;
(statearr_35389[(9)] = inst_35372);

return statearr_35389;
})();
var statearr_35390_35433 = state_35379__$1;
(statearr_35390_35433[(2)] = null);

(statearr_35390_35433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (13))){
var inst_35334 = (state_35379[(10)]);
var inst_35336 = cljs.core.chunked_seq_QMARK_.call(null,inst_35334);
var state_35379__$1 = state_35379;
if(inst_35336){
var statearr_35391_35434 = state_35379__$1;
(statearr_35391_35434[(1)] = (16));

} else {
var statearr_35392_35435 = state_35379__$1;
(statearr_35392_35435[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (22))){
var inst_35364 = (state_35379[(2)]);
var state_35379__$1 = state_35379;
if(cljs.core.truth_(inst_35364)){
var statearr_35393_35436 = state_35379__$1;
(statearr_35393_35436[(1)] = (23));

} else {
var statearr_35394_35437 = state_35379__$1;
(statearr_35394_35437[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (6))){
var inst_35360 = (state_35379[(11)]);
var inst_35310 = (state_35379[(8)]);
var inst_35358 = (state_35379[(7)]);
var inst_35358__$1 = topic_fn.call(null,inst_35310);
var inst_35359 = cljs.core.deref.call(null,mults);
var inst_35360__$1 = cljs.core.get.call(null,inst_35359,inst_35358__$1);
var state_35379__$1 = (function (){var statearr_35395 = state_35379;
(statearr_35395[(11)] = inst_35360__$1);

(statearr_35395[(7)] = inst_35358__$1);

return statearr_35395;
})();
if(cljs.core.truth_(inst_35360__$1)){
var statearr_35396_35438 = state_35379__$1;
(statearr_35396_35438[(1)] = (19));

} else {
var statearr_35397_35439 = state_35379__$1;
(statearr_35397_35439[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (25))){
var inst_35369 = (state_35379[(2)]);
var state_35379__$1 = state_35379;
var statearr_35398_35440 = state_35379__$1;
(statearr_35398_35440[(2)] = inst_35369);

(statearr_35398_35440[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (17))){
var inst_35334 = (state_35379[(10)]);
var inst_35343 = cljs.core.first.call(null,inst_35334);
var inst_35344 = cljs.core.async.muxch_STAR_.call(null,inst_35343);
var inst_35345 = cljs.core.async.close_BANG_.call(null,inst_35344);
var inst_35346 = cljs.core.next.call(null,inst_35334);
var inst_35320 = inst_35346;
var inst_35321 = null;
var inst_35322 = (0);
var inst_35323 = (0);
var state_35379__$1 = (function (){var statearr_35399 = state_35379;
(statearr_35399[(12)] = inst_35320);

(statearr_35399[(13)] = inst_35321);

(statearr_35399[(14)] = inst_35345);

(statearr_35399[(15)] = inst_35323);

(statearr_35399[(16)] = inst_35322);

return statearr_35399;
})();
var statearr_35400_35441 = state_35379__$1;
(statearr_35400_35441[(2)] = null);

(statearr_35400_35441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (3))){
var inst_35377 = (state_35379[(2)]);
var state_35379__$1 = state_35379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35379__$1,inst_35377);
} else {
if((state_val_35380 === (12))){
var inst_35354 = (state_35379[(2)]);
var state_35379__$1 = state_35379;
var statearr_35401_35442 = state_35379__$1;
(statearr_35401_35442[(2)] = inst_35354);

(statearr_35401_35442[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (2))){
var state_35379__$1 = state_35379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35379__$1,(4),ch);
} else {
if((state_val_35380 === (23))){
var state_35379__$1 = state_35379;
var statearr_35402_35443 = state_35379__$1;
(statearr_35402_35443[(2)] = null);

(statearr_35402_35443[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (19))){
var inst_35360 = (state_35379[(11)]);
var inst_35310 = (state_35379[(8)]);
var inst_35362 = cljs.core.async.muxch_STAR_.call(null,inst_35360);
var state_35379__$1 = state_35379;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35379__$1,(22),inst_35362,inst_35310);
} else {
if((state_val_35380 === (11))){
var inst_35334 = (state_35379[(10)]);
var inst_35320 = (state_35379[(12)]);
var inst_35334__$1 = cljs.core.seq.call(null,inst_35320);
var state_35379__$1 = (function (){var statearr_35403 = state_35379;
(statearr_35403[(10)] = inst_35334__$1);

return statearr_35403;
})();
if(inst_35334__$1){
var statearr_35404_35444 = state_35379__$1;
(statearr_35404_35444[(1)] = (13));

} else {
var statearr_35405_35445 = state_35379__$1;
(statearr_35405_35445[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (9))){
var inst_35356 = (state_35379[(2)]);
var state_35379__$1 = state_35379;
var statearr_35406_35446 = state_35379__$1;
(statearr_35406_35446[(2)] = inst_35356);

(statearr_35406_35446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (5))){
var inst_35317 = cljs.core.deref.call(null,mults);
var inst_35318 = cljs.core.vals.call(null,inst_35317);
var inst_35319 = cljs.core.seq.call(null,inst_35318);
var inst_35320 = inst_35319;
var inst_35321 = null;
var inst_35322 = (0);
var inst_35323 = (0);
var state_35379__$1 = (function (){var statearr_35407 = state_35379;
(statearr_35407[(12)] = inst_35320);

(statearr_35407[(13)] = inst_35321);

(statearr_35407[(15)] = inst_35323);

(statearr_35407[(16)] = inst_35322);

return statearr_35407;
})();
var statearr_35408_35447 = state_35379__$1;
(statearr_35408_35447[(2)] = null);

(statearr_35408_35447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (14))){
var state_35379__$1 = state_35379;
var statearr_35412_35448 = state_35379__$1;
(statearr_35412_35448[(2)] = null);

(statearr_35412_35448[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (16))){
var inst_35334 = (state_35379[(10)]);
var inst_35338 = cljs.core.chunk_first.call(null,inst_35334);
var inst_35339 = cljs.core.chunk_rest.call(null,inst_35334);
var inst_35340 = cljs.core.count.call(null,inst_35338);
var inst_35320 = inst_35339;
var inst_35321 = inst_35338;
var inst_35322 = inst_35340;
var inst_35323 = (0);
var state_35379__$1 = (function (){var statearr_35413 = state_35379;
(statearr_35413[(12)] = inst_35320);

(statearr_35413[(13)] = inst_35321);

(statearr_35413[(15)] = inst_35323);

(statearr_35413[(16)] = inst_35322);

return statearr_35413;
})();
var statearr_35414_35449 = state_35379__$1;
(statearr_35414_35449[(2)] = null);

(statearr_35414_35449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (10))){
var inst_35320 = (state_35379[(12)]);
var inst_35321 = (state_35379[(13)]);
var inst_35323 = (state_35379[(15)]);
var inst_35322 = (state_35379[(16)]);
var inst_35328 = cljs.core._nth.call(null,inst_35321,inst_35323);
var inst_35329 = cljs.core.async.muxch_STAR_.call(null,inst_35328);
var inst_35330 = cljs.core.async.close_BANG_.call(null,inst_35329);
var inst_35331 = (inst_35323 + (1));
var tmp35409 = inst_35320;
var tmp35410 = inst_35321;
var tmp35411 = inst_35322;
var inst_35320__$1 = tmp35409;
var inst_35321__$1 = tmp35410;
var inst_35322__$1 = tmp35411;
var inst_35323__$1 = inst_35331;
var state_35379__$1 = (function (){var statearr_35415 = state_35379;
(statearr_35415[(12)] = inst_35320__$1);

(statearr_35415[(13)] = inst_35321__$1);

(statearr_35415[(17)] = inst_35330);

(statearr_35415[(15)] = inst_35323__$1);

(statearr_35415[(16)] = inst_35322__$1);

return statearr_35415;
})();
var statearr_35416_35450 = state_35379__$1;
(statearr_35416_35450[(2)] = null);

(statearr_35416_35450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (18))){
var inst_35349 = (state_35379[(2)]);
var state_35379__$1 = state_35379;
var statearr_35417_35451 = state_35379__$1;
(statearr_35417_35451[(2)] = inst_35349);

(statearr_35417_35451[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (8))){
var inst_35323 = (state_35379[(15)]);
var inst_35322 = (state_35379[(16)]);
var inst_35325 = (inst_35323 < inst_35322);
var inst_35326 = inst_35325;
var state_35379__$1 = state_35379;
if(cljs.core.truth_(inst_35326)){
var statearr_35418_35452 = state_35379__$1;
(statearr_35418_35452[(1)] = (10));

} else {
var statearr_35419_35453 = state_35379__$1;
(statearr_35419_35453[(1)] = (11));

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
});})(c__34205__auto___35425,mults,ensure_mult,p))
;
return ((function (switch__34117__auto__,c__34205__auto___35425,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34118__auto__ = null;
var cljs$core$async$state_machine__34118__auto____0 = (function (){
var statearr_35420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35420[(0)] = cljs$core$async$state_machine__34118__auto__);

(statearr_35420[(1)] = (1));

return statearr_35420;
});
var cljs$core$async$state_machine__34118__auto____1 = (function (state_35379){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_35379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e35421){if((e35421 instanceof Object)){
var ex__34121__auto__ = e35421;
var statearr_35422_35454 = state_35379;
(statearr_35422_35454[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35455 = state_35379;
state_35379 = G__35455;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
cljs$core$async$state_machine__34118__auto__ = function(state_35379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34118__auto____1.call(this,state_35379);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34118__auto____0;
cljs$core$async$state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34118__auto____1;
return cljs$core$async$state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto___35425,mults,ensure_mult,p))
})();
var state__34207__auto__ = (function (){var statearr_35423 = f__34206__auto__.call(null);
(statearr_35423[(6)] = c__34205__auto___35425);

return statearr_35423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto___35425,mults,ensure_mult,p))
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
var G__35457 = arguments.length;
switch (G__35457) {
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
var G__35460 = arguments.length;
switch (G__35460) {
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
var G__35463 = arguments.length;
switch (G__35463) {
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
var c__34205__auto___35530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto___35530,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto___35530,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35502){
var state_val_35503 = (state_35502[(1)]);
if((state_val_35503 === (7))){
var state_35502__$1 = state_35502;
var statearr_35504_35531 = state_35502__$1;
(statearr_35504_35531[(2)] = null);

(statearr_35504_35531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35503 === (1))){
var state_35502__$1 = state_35502;
var statearr_35505_35532 = state_35502__$1;
(statearr_35505_35532[(2)] = null);

(statearr_35505_35532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35503 === (4))){
var inst_35466 = (state_35502[(7)]);
var inst_35468 = (inst_35466 < cnt);
var state_35502__$1 = state_35502;
if(cljs.core.truth_(inst_35468)){
var statearr_35506_35533 = state_35502__$1;
(statearr_35506_35533[(1)] = (6));

} else {
var statearr_35507_35534 = state_35502__$1;
(statearr_35507_35534[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35503 === (15))){
var inst_35498 = (state_35502[(2)]);
var state_35502__$1 = state_35502;
var statearr_35508_35535 = state_35502__$1;
(statearr_35508_35535[(2)] = inst_35498);

(statearr_35508_35535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35503 === (13))){
var inst_35491 = cljs.core.async.close_BANG_.call(null,out);
var state_35502__$1 = state_35502;
var statearr_35509_35536 = state_35502__$1;
(statearr_35509_35536[(2)] = inst_35491);

(statearr_35509_35536[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35503 === (6))){
var state_35502__$1 = state_35502;
var statearr_35510_35537 = state_35502__$1;
(statearr_35510_35537[(2)] = null);

(statearr_35510_35537[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35503 === (3))){
var inst_35500 = (state_35502[(2)]);
var state_35502__$1 = state_35502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35502__$1,inst_35500);
} else {
if((state_val_35503 === (12))){
var inst_35488 = (state_35502[(8)]);
var inst_35488__$1 = (state_35502[(2)]);
var inst_35489 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35488__$1);
var state_35502__$1 = (function (){var statearr_35511 = state_35502;
(statearr_35511[(8)] = inst_35488__$1);

return statearr_35511;
})();
if(cljs.core.truth_(inst_35489)){
var statearr_35512_35538 = state_35502__$1;
(statearr_35512_35538[(1)] = (13));

} else {
var statearr_35513_35539 = state_35502__$1;
(statearr_35513_35539[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35503 === (2))){
var inst_35465 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35466 = (0);
var state_35502__$1 = (function (){var statearr_35514 = state_35502;
(statearr_35514[(9)] = inst_35465);

(statearr_35514[(7)] = inst_35466);

return statearr_35514;
})();
var statearr_35515_35540 = state_35502__$1;
(statearr_35515_35540[(2)] = null);

(statearr_35515_35540[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35503 === (11))){
var inst_35466 = (state_35502[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35502,(10),Object,null,(9));
var inst_35475 = chs__$1.call(null,inst_35466);
var inst_35476 = done.call(null,inst_35466);
var inst_35477 = cljs.core.async.take_BANG_.call(null,inst_35475,inst_35476);
var state_35502__$1 = state_35502;
var statearr_35516_35541 = state_35502__$1;
(statearr_35516_35541[(2)] = inst_35477);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35502__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35503 === (9))){
var inst_35466 = (state_35502[(7)]);
var inst_35479 = (state_35502[(2)]);
var inst_35480 = (inst_35466 + (1));
var inst_35466__$1 = inst_35480;
var state_35502__$1 = (function (){var statearr_35517 = state_35502;
(statearr_35517[(7)] = inst_35466__$1);

(statearr_35517[(10)] = inst_35479);

return statearr_35517;
})();
var statearr_35518_35542 = state_35502__$1;
(statearr_35518_35542[(2)] = null);

(statearr_35518_35542[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35503 === (5))){
var inst_35486 = (state_35502[(2)]);
var state_35502__$1 = (function (){var statearr_35519 = state_35502;
(statearr_35519[(11)] = inst_35486);

return statearr_35519;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35502__$1,(12),dchan);
} else {
if((state_val_35503 === (14))){
var inst_35488 = (state_35502[(8)]);
var inst_35493 = cljs.core.apply.call(null,f,inst_35488);
var state_35502__$1 = state_35502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35502__$1,(16),out,inst_35493);
} else {
if((state_val_35503 === (16))){
var inst_35495 = (state_35502[(2)]);
var state_35502__$1 = (function (){var statearr_35520 = state_35502;
(statearr_35520[(12)] = inst_35495);

return statearr_35520;
})();
var statearr_35521_35543 = state_35502__$1;
(statearr_35521_35543[(2)] = null);

(statearr_35521_35543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35503 === (10))){
var inst_35470 = (state_35502[(2)]);
var inst_35471 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35502__$1 = (function (){var statearr_35522 = state_35502;
(statearr_35522[(13)] = inst_35470);

return statearr_35522;
})();
var statearr_35523_35544 = state_35502__$1;
(statearr_35523_35544[(2)] = inst_35471);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35502__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35503 === (8))){
var inst_35484 = (state_35502[(2)]);
var state_35502__$1 = state_35502;
var statearr_35524_35545 = state_35502__$1;
(statearr_35524_35545[(2)] = inst_35484);

(statearr_35524_35545[(1)] = (5));


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
});})(c__34205__auto___35530,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34117__auto__,c__34205__auto___35530,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34118__auto__ = null;
var cljs$core$async$state_machine__34118__auto____0 = (function (){
var statearr_35525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35525[(0)] = cljs$core$async$state_machine__34118__auto__);

(statearr_35525[(1)] = (1));

return statearr_35525;
});
var cljs$core$async$state_machine__34118__auto____1 = (function (state_35502){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_35502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e35526){if((e35526 instanceof Object)){
var ex__34121__auto__ = e35526;
var statearr_35527_35546 = state_35502;
(statearr_35527_35546[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35547 = state_35502;
state_35502 = G__35547;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
cljs$core$async$state_machine__34118__auto__ = function(state_35502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34118__auto____1.call(this,state_35502);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34118__auto____0;
cljs$core$async$state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34118__auto____1;
return cljs$core$async$state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto___35530,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34207__auto__ = (function (){var statearr_35528 = f__34206__auto__.call(null);
(statearr_35528[(6)] = c__34205__auto___35530);

return statearr_35528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto___35530,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__35550 = arguments.length;
switch (G__35550) {
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
var c__34205__auto___35604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto___35604,out){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto___35604,out){
return (function (state_35582){
var state_val_35583 = (state_35582[(1)]);
if((state_val_35583 === (7))){
var inst_35562 = (state_35582[(7)]);
var inst_35561 = (state_35582[(8)]);
var inst_35561__$1 = (state_35582[(2)]);
var inst_35562__$1 = cljs.core.nth.call(null,inst_35561__$1,(0),null);
var inst_35563 = cljs.core.nth.call(null,inst_35561__$1,(1),null);
var inst_35564 = (inst_35562__$1 == null);
var state_35582__$1 = (function (){var statearr_35584 = state_35582;
(statearr_35584[(7)] = inst_35562__$1);

(statearr_35584[(9)] = inst_35563);

(statearr_35584[(8)] = inst_35561__$1);

return statearr_35584;
})();
if(cljs.core.truth_(inst_35564)){
var statearr_35585_35605 = state_35582__$1;
(statearr_35585_35605[(1)] = (8));

} else {
var statearr_35586_35606 = state_35582__$1;
(statearr_35586_35606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (1))){
var inst_35551 = cljs.core.vec.call(null,chs);
var inst_35552 = inst_35551;
var state_35582__$1 = (function (){var statearr_35587 = state_35582;
(statearr_35587[(10)] = inst_35552);

return statearr_35587;
})();
var statearr_35588_35607 = state_35582__$1;
(statearr_35588_35607[(2)] = null);

(statearr_35588_35607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (4))){
var inst_35552 = (state_35582[(10)]);
var state_35582__$1 = state_35582;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35582__$1,(7),inst_35552);
} else {
if((state_val_35583 === (6))){
var inst_35578 = (state_35582[(2)]);
var state_35582__$1 = state_35582;
var statearr_35589_35608 = state_35582__$1;
(statearr_35589_35608[(2)] = inst_35578);

(statearr_35589_35608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (3))){
var inst_35580 = (state_35582[(2)]);
var state_35582__$1 = state_35582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35582__$1,inst_35580);
} else {
if((state_val_35583 === (2))){
var inst_35552 = (state_35582[(10)]);
var inst_35554 = cljs.core.count.call(null,inst_35552);
var inst_35555 = (inst_35554 > (0));
var state_35582__$1 = state_35582;
if(cljs.core.truth_(inst_35555)){
var statearr_35591_35609 = state_35582__$1;
(statearr_35591_35609[(1)] = (4));

} else {
var statearr_35592_35610 = state_35582__$1;
(statearr_35592_35610[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (11))){
var inst_35552 = (state_35582[(10)]);
var inst_35571 = (state_35582[(2)]);
var tmp35590 = inst_35552;
var inst_35552__$1 = tmp35590;
var state_35582__$1 = (function (){var statearr_35593 = state_35582;
(statearr_35593[(10)] = inst_35552__$1);

(statearr_35593[(11)] = inst_35571);

return statearr_35593;
})();
var statearr_35594_35611 = state_35582__$1;
(statearr_35594_35611[(2)] = null);

(statearr_35594_35611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (9))){
var inst_35562 = (state_35582[(7)]);
var state_35582__$1 = state_35582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35582__$1,(11),out,inst_35562);
} else {
if((state_val_35583 === (5))){
var inst_35576 = cljs.core.async.close_BANG_.call(null,out);
var state_35582__$1 = state_35582;
var statearr_35595_35612 = state_35582__$1;
(statearr_35595_35612[(2)] = inst_35576);

(statearr_35595_35612[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (10))){
var inst_35574 = (state_35582[(2)]);
var state_35582__$1 = state_35582;
var statearr_35596_35613 = state_35582__$1;
(statearr_35596_35613[(2)] = inst_35574);

(statearr_35596_35613[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (8))){
var inst_35552 = (state_35582[(10)]);
var inst_35562 = (state_35582[(7)]);
var inst_35563 = (state_35582[(9)]);
var inst_35561 = (state_35582[(8)]);
var inst_35566 = (function (){var cs = inst_35552;
var vec__35557 = inst_35561;
var v = inst_35562;
var c = inst_35563;
return ((function (cs,vec__35557,v,c,inst_35552,inst_35562,inst_35563,inst_35561,state_val_35583,c__34205__auto___35604,out){
return (function (p1__35548_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35548_SHARP_);
});
;})(cs,vec__35557,v,c,inst_35552,inst_35562,inst_35563,inst_35561,state_val_35583,c__34205__auto___35604,out))
})();
var inst_35567 = cljs.core.filterv.call(null,inst_35566,inst_35552);
var inst_35552__$1 = inst_35567;
var state_35582__$1 = (function (){var statearr_35597 = state_35582;
(statearr_35597[(10)] = inst_35552__$1);

return statearr_35597;
})();
var statearr_35598_35614 = state_35582__$1;
(statearr_35598_35614[(2)] = null);

(statearr_35598_35614[(1)] = (2));


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
});})(c__34205__auto___35604,out))
;
return ((function (switch__34117__auto__,c__34205__auto___35604,out){
return (function() {
var cljs$core$async$state_machine__34118__auto__ = null;
var cljs$core$async$state_machine__34118__auto____0 = (function (){
var statearr_35599 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35599[(0)] = cljs$core$async$state_machine__34118__auto__);

(statearr_35599[(1)] = (1));

return statearr_35599;
});
var cljs$core$async$state_machine__34118__auto____1 = (function (state_35582){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_35582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e35600){if((e35600 instanceof Object)){
var ex__34121__auto__ = e35600;
var statearr_35601_35615 = state_35582;
(statearr_35601_35615[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35616 = state_35582;
state_35582 = G__35616;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
cljs$core$async$state_machine__34118__auto__ = function(state_35582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34118__auto____1.call(this,state_35582);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34118__auto____0;
cljs$core$async$state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34118__auto____1;
return cljs$core$async$state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto___35604,out))
})();
var state__34207__auto__ = (function (){var statearr_35602 = f__34206__auto__.call(null);
(statearr_35602[(6)] = c__34205__auto___35604);

return statearr_35602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto___35604,out))
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
var G__35618 = arguments.length;
switch (G__35618) {
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
var c__34205__auto___35663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto___35663,out){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto___35663,out){
return (function (state_35642){
var state_val_35643 = (state_35642[(1)]);
if((state_val_35643 === (7))){
var inst_35624 = (state_35642[(7)]);
var inst_35624__$1 = (state_35642[(2)]);
var inst_35625 = (inst_35624__$1 == null);
var inst_35626 = cljs.core.not.call(null,inst_35625);
var state_35642__$1 = (function (){var statearr_35644 = state_35642;
(statearr_35644[(7)] = inst_35624__$1);

return statearr_35644;
})();
if(inst_35626){
var statearr_35645_35664 = state_35642__$1;
(statearr_35645_35664[(1)] = (8));

} else {
var statearr_35646_35665 = state_35642__$1;
(statearr_35646_35665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35643 === (1))){
var inst_35619 = (0);
var state_35642__$1 = (function (){var statearr_35647 = state_35642;
(statearr_35647[(8)] = inst_35619);

return statearr_35647;
})();
var statearr_35648_35666 = state_35642__$1;
(statearr_35648_35666[(2)] = null);

(statearr_35648_35666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35643 === (4))){
var state_35642__$1 = state_35642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35642__$1,(7),ch);
} else {
if((state_val_35643 === (6))){
var inst_35637 = (state_35642[(2)]);
var state_35642__$1 = state_35642;
var statearr_35649_35667 = state_35642__$1;
(statearr_35649_35667[(2)] = inst_35637);

(statearr_35649_35667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35643 === (3))){
var inst_35639 = (state_35642[(2)]);
var inst_35640 = cljs.core.async.close_BANG_.call(null,out);
var state_35642__$1 = (function (){var statearr_35650 = state_35642;
(statearr_35650[(9)] = inst_35639);

return statearr_35650;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35642__$1,inst_35640);
} else {
if((state_val_35643 === (2))){
var inst_35619 = (state_35642[(8)]);
var inst_35621 = (inst_35619 < n);
var state_35642__$1 = state_35642;
if(cljs.core.truth_(inst_35621)){
var statearr_35651_35668 = state_35642__$1;
(statearr_35651_35668[(1)] = (4));

} else {
var statearr_35652_35669 = state_35642__$1;
(statearr_35652_35669[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35643 === (11))){
var inst_35619 = (state_35642[(8)]);
var inst_35629 = (state_35642[(2)]);
var inst_35630 = (inst_35619 + (1));
var inst_35619__$1 = inst_35630;
var state_35642__$1 = (function (){var statearr_35653 = state_35642;
(statearr_35653[(10)] = inst_35629);

(statearr_35653[(8)] = inst_35619__$1);

return statearr_35653;
})();
var statearr_35654_35670 = state_35642__$1;
(statearr_35654_35670[(2)] = null);

(statearr_35654_35670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35643 === (9))){
var state_35642__$1 = state_35642;
var statearr_35655_35671 = state_35642__$1;
(statearr_35655_35671[(2)] = null);

(statearr_35655_35671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35643 === (5))){
var state_35642__$1 = state_35642;
var statearr_35656_35672 = state_35642__$1;
(statearr_35656_35672[(2)] = null);

(statearr_35656_35672[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35643 === (10))){
var inst_35634 = (state_35642[(2)]);
var state_35642__$1 = state_35642;
var statearr_35657_35673 = state_35642__$1;
(statearr_35657_35673[(2)] = inst_35634);

(statearr_35657_35673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35643 === (8))){
var inst_35624 = (state_35642[(7)]);
var state_35642__$1 = state_35642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35642__$1,(11),out,inst_35624);
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
});})(c__34205__auto___35663,out))
;
return ((function (switch__34117__auto__,c__34205__auto___35663,out){
return (function() {
var cljs$core$async$state_machine__34118__auto__ = null;
var cljs$core$async$state_machine__34118__auto____0 = (function (){
var statearr_35658 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35658[(0)] = cljs$core$async$state_machine__34118__auto__);

(statearr_35658[(1)] = (1));

return statearr_35658;
});
var cljs$core$async$state_machine__34118__auto____1 = (function (state_35642){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_35642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e35659){if((e35659 instanceof Object)){
var ex__34121__auto__ = e35659;
var statearr_35660_35674 = state_35642;
(statearr_35660_35674[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35675 = state_35642;
state_35642 = G__35675;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
cljs$core$async$state_machine__34118__auto__ = function(state_35642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34118__auto____1.call(this,state_35642);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34118__auto____0;
cljs$core$async$state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34118__auto____1;
return cljs$core$async$state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto___35663,out))
})();
var state__34207__auto__ = (function (){var statearr_35661 = f__34206__auto__.call(null);
(statearr_35661[(6)] = c__34205__auto___35663);

return statearr_35661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto___35663,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35677 = (function (f,ch,meta35678){
this.f = f;
this.ch = ch;
this.meta35678 = meta35678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35679,meta35678__$1){
var self__ = this;
var _35679__$1 = this;
return (new cljs.core.async.t_cljs$core$async35677(self__.f,self__.ch,meta35678__$1));
});

cljs.core.async.t_cljs$core$async35677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35679){
var self__ = this;
var _35679__$1 = this;
return self__.meta35678;
});

cljs.core.async.t_cljs$core$async35677.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35677.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35677.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35677.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35677.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35680 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35680 = (function (f,ch,meta35678,_,fn1,meta35681){
this.f = f;
this.ch = ch;
this.meta35678 = meta35678;
this._ = _;
this.fn1 = fn1;
this.meta35681 = meta35681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35682,meta35681__$1){
var self__ = this;
var _35682__$1 = this;
return (new cljs.core.async.t_cljs$core$async35680(self__.f,self__.ch,self__.meta35678,self__._,self__.fn1,meta35681__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35680.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35682){
var self__ = this;
var _35682__$1 = this;
return self__.meta35681;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35680.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35680.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35680.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35680.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35676_SHARP_){
return f1.call(null,(((p1__35676_SHARP_ == null))?null:self__.f.call(null,p1__35676_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35680.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35678","meta35678",1741408555,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35677","cljs.core.async/t_cljs$core$async35677",927263872,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35681","meta35681",-1347050001,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35680.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35680";

cljs.core.async.t_cljs$core$async35680.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async35680");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35680 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35680(f__$1,ch__$1,meta35678__$1,___$2,fn1__$1,meta35681){
return (new cljs.core.async.t_cljs$core$async35680(f__$1,ch__$1,meta35678__$1,___$2,fn1__$1,meta35681));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35680(self__.f,self__.ch,self__.meta35678,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28411__auto__ = ret;
if(cljs.core.truth_(and__28411__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28411__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35677.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35677.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35678","meta35678",1741408555,null)], null);
});

cljs.core.async.t_cljs$core$async35677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35677";

cljs.core.async.t_cljs$core$async35677.cljs$lang$ctorPrWriter = (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async35677");
});

cljs.core.async.__GT_t_cljs$core$async35677 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35677(f__$1,ch__$1,meta35678){
return (new cljs.core.async.t_cljs$core$async35677(f__$1,ch__$1,meta35678));
});

}

return (new cljs.core.async.t_cljs$core$async35677(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35683 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35683 = (function (f,ch,meta35684){
this.f = f;
this.ch = ch;
this.meta35684 = meta35684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35685,meta35684__$1){
var self__ = this;
var _35685__$1 = this;
return (new cljs.core.async.t_cljs$core$async35683(self__.f,self__.ch,meta35684__$1));
});

cljs.core.async.t_cljs$core$async35683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35685){
var self__ = this;
var _35685__$1 = this;
return self__.meta35684;
});

cljs.core.async.t_cljs$core$async35683.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35683.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35683.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35683.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35683.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35683.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35683.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35684","meta35684",-628361989,null)], null);
});

cljs.core.async.t_cljs$core$async35683.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35683";

cljs.core.async.t_cljs$core$async35683.cljs$lang$ctorPrWriter = (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async35683");
});

cljs.core.async.__GT_t_cljs$core$async35683 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35683(f__$1,ch__$1,meta35684){
return (new cljs.core.async.t_cljs$core$async35683(f__$1,ch__$1,meta35684));
});

}

return (new cljs.core.async.t_cljs$core$async35683(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35686 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35686 = (function (p,ch,meta35687){
this.p = p;
this.ch = ch;
this.meta35687 = meta35687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35688,meta35687__$1){
var self__ = this;
var _35688__$1 = this;
return (new cljs.core.async.t_cljs$core$async35686(self__.p,self__.ch,meta35687__$1));
});

cljs.core.async.t_cljs$core$async35686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35688){
var self__ = this;
var _35688__$1 = this;
return self__.meta35687;
});

cljs.core.async.t_cljs$core$async35686.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35686.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35686.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35686.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35686.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35686.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35686.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35687","meta35687",-251645786,null)], null);
});

cljs.core.async.t_cljs$core$async35686.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35686";

cljs.core.async.t_cljs$core$async35686.cljs$lang$ctorPrWriter = (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async35686");
});

cljs.core.async.__GT_t_cljs$core$async35686 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35686(p__$1,ch__$1,meta35687){
return (new cljs.core.async.t_cljs$core$async35686(p__$1,ch__$1,meta35687));
});

}

return (new cljs.core.async.t_cljs$core$async35686(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35690 = arguments.length;
switch (G__35690) {
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
var c__34205__auto___35730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto___35730,out){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto___35730,out){
return (function (state_35711){
var state_val_35712 = (state_35711[(1)]);
if((state_val_35712 === (7))){
var inst_35707 = (state_35711[(2)]);
var state_35711__$1 = state_35711;
var statearr_35713_35731 = state_35711__$1;
(statearr_35713_35731[(2)] = inst_35707);

(statearr_35713_35731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35712 === (1))){
var state_35711__$1 = state_35711;
var statearr_35714_35732 = state_35711__$1;
(statearr_35714_35732[(2)] = null);

(statearr_35714_35732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35712 === (4))){
var inst_35693 = (state_35711[(7)]);
var inst_35693__$1 = (state_35711[(2)]);
var inst_35694 = (inst_35693__$1 == null);
var state_35711__$1 = (function (){var statearr_35715 = state_35711;
(statearr_35715[(7)] = inst_35693__$1);

return statearr_35715;
})();
if(cljs.core.truth_(inst_35694)){
var statearr_35716_35733 = state_35711__$1;
(statearr_35716_35733[(1)] = (5));

} else {
var statearr_35717_35734 = state_35711__$1;
(statearr_35717_35734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35712 === (6))){
var inst_35693 = (state_35711[(7)]);
var inst_35698 = p.call(null,inst_35693);
var state_35711__$1 = state_35711;
if(cljs.core.truth_(inst_35698)){
var statearr_35718_35735 = state_35711__$1;
(statearr_35718_35735[(1)] = (8));

} else {
var statearr_35719_35736 = state_35711__$1;
(statearr_35719_35736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35712 === (3))){
var inst_35709 = (state_35711[(2)]);
var state_35711__$1 = state_35711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35711__$1,inst_35709);
} else {
if((state_val_35712 === (2))){
var state_35711__$1 = state_35711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35711__$1,(4),ch);
} else {
if((state_val_35712 === (11))){
var inst_35701 = (state_35711[(2)]);
var state_35711__$1 = state_35711;
var statearr_35720_35737 = state_35711__$1;
(statearr_35720_35737[(2)] = inst_35701);

(statearr_35720_35737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35712 === (9))){
var state_35711__$1 = state_35711;
var statearr_35721_35738 = state_35711__$1;
(statearr_35721_35738[(2)] = null);

(statearr_35721_35738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35712 === (5))){
var inst_35696 = cljs.core.async.close_BANG_.call(null,out);
var state_35711__$1 = state_35711;
var statearr_35722_35739 = state_35711__$1;
(statearr_35722_35739[(2)] = inst_35696);

(statearr_35722_35739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35712 === (10))){
var inst_35704 = (state_35711[(2)]);
var state_35711__$1 = (function (){var statearr_35723 = state_35711;
(statearr_35723[(8)] = inst_35704);

return statearr_35723;
})();
var statearr_35724_35740 = state_35711__$1;
(statearr_35724_35740[(2)] = null);

(statearr_35724_35740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35712 === (8))){
var inst_35693 = (state_35711[(7)]);
var state_35711__$1 = state_35711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35711__$1,(11),out,inst_35693);
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
});})(c__34205__auto___35730,out))
;
return ((function (switch__34117__auto__,c__34205__auto___35730,out){
return (function() {
var cljs$core$async$state_machine__34118__auto__ = null;
var cljs$core$async$state_machine__34118__auto____0 = (function (){
var statearr_35725 = [null,null,null,null,null,null,null,null,null];
(statearr_35725[(0)] = cljs$core$async$state_machine__34118__auto__);

(statearr_35725[(1)] = (1));

return statearr_35725;
});
var cljs$core$async$state_machine__34118__auto____1 = (function (state_35711){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_35711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e35726){if((e35726 instanceof Object)){
var ex__34121__auto__ = e35726;
var statearr_35727_35741 = state_35711;
(statearr_35727_35741[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35742 = state_35711;
state_35711 = G__35742;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
cljs$core$async$state_machine__34118__auto__ = function(state_35711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34118__auto____1.call(this,state_35711);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34118__auto____0;
cljs$core$async$state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34118__auto____1;
return cljs$core$async$state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto___35730,out))
})();
var state__34207__auto__ = (function (){var statearr_35728 = f__34206__auto__.call(null);
(statearr_35728[(6)] = c__34205__auto___35730);

return statearr_35728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto___35730,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35744 = arguments.length;
switch (G__35744) {
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
var c__34205__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto__){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto__){
return (function (state_35807){
var state_val_35808 = (state_35807[(1)]);
if((state_val_35808 === (7))){
var inst_35803 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
var statearr_35809_35847 = state_35807__$1;
(statearr_35809_35847[(2)] = inst_35803);

(statearr_35809_35847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (20))){
var inst_35773 = (state_35807[(7)]);
var inst_35784 = (state_35807[(2)]);
var inst_35785 = cljs.core.next.call(null,inst_35773);
var inst_35759 = inst_35785;
var inst_35760 = null;
var inst_35761 = (0);
var inst_35762 = (0);
var state_35807__$1 = (function (){var statearr_35810 = state_35807;
(statearr_35810[(8)] = inst_35762);

(statearr_35810[(9)] = inst_35760);

(statearr_35810[(10)] = inst_35759);

(statearr_35810[(11)] = inst_35761);

(statearr_35810[(12)] = inst_35784);

return statearr_35810;
})();
var statearr_35811_35848 = state_35807__$1;
(statearr_35811_35848[(2)] = null);

(statearr_35811_35848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (1))){
var state_35807__$1 = state_35807;
var statearr_35812_35849 = state_35807__$1;
(statearr_35812_35849[(2)] = null);

(statearr_35812_35849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (4))){
var inst_35748 = (state_35807[(13)]);
var inst_35748__$1 = (state_35807[(2)]);
var inst_35749 = (inst_35748__$1 == null);
var state_35807__$1 = (function (){var statearr_35813 = state_35807;
(statearr_35813[(13)] = inst_35748__$1);

return statearr_35813;
})();
if(cljs.core.truth_(inst_35749)){
var statearr_35814_35850 = state_35807__$1;
(statearr_35814_35850[(1)] = (5));

} else {
var statearr_35815_35851 = state_35807__$1;
(statearr_35815_35851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (15))){
var state_35807__$1 = state_35807;
var statearr_35819_35852 = state_35807__$1;
(statearr_35819_35852[(2)] = null);

(statearr_35819_35852[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (21))){
var state_35807__$1 = state_35807;
var statearr_35820_35853 = state_35807__$1;
(statearr_35820_35853[(2)] = null);

(statearr_35820_35853[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (13))){
var inst_35762 = (state_35807[(8)]);
var inst_35760 = (state_35807[(9)]);
var inst_35759 = (state_35807[(10)]);
var inst_35761 = (state_35807[(11)]);
var inst_35769 = (state_35807[(2)]);
var inst_35770 = (inst_35762 + (1));
var tmp35816 = inst_35760;
var tmp35817 = inst_35759;
var tmp35818 = inst_35761;
var inst_35759__$1 = tmp35817;
var inst_35760__$1 = tmp35816;
var inst_35761__$1 = tmp35818;
var inst_35762__$1 = inst_35770;
var state_35807__$1 = (function (){var statearr_35821 = state_35807;
(statearr_35821[(8)] = inst_35762__$1);

(statearr_35821[(9)] = inst_35760__$1);

(statearr_35821[(14)] = inst_35769);

(statearr_35821[(10)] = inst_35759__$1);

(statearr_35821[(11)] = inst_35761__$1);

return statearr_35821;
})();
var statearr_35822_35854 = state_35807__$1;
(statearr_35822_35854[(2)] = null);

(statearr_35822_35854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (22))){
var state_35807__$1 = state_35807;
var statearr_35823_35855 = state_35807__$1;
(statearr_35823_35855[(2)] = null);

(statearr_35823_35855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (6))){
var inst_35748 = (state_35807[(13)]);
var inst_35757 = f.call(null,inst_35748);
var inst_35758 = cljs.core.seq.call(null,inst_35757);
var inst_35759 = inst_35758;
var inst_35760 = null;
var inst_35761 = (0);
var inst_35762 = (0);
var state_35807__$1 = (function (){var statearr_35824 = state_35807;
(statearr_35824[(8)] = inst_35762);

(statearr_35824[(9)] = inst_35760);

(statearr_35824[(10)] = inst_35759);

(statearr_35824[(11)] = inst_35761);

return statearr_35824;
})();
var statearr_35825_35856 = state_35807__$1;
(statearr_35825_35856[(2)] = null);

(statearr_35825_35856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (17))){
var inst_35773 = (state_35807[(7)]);
var inst_35777 = cljs.core.chunk_first.call(null,inst_35773);
var inst_35778 = cljs.core.chunk_rest.call(null,inst_35773);
var inst_35779 = cljs.core.count.call(null,inst_35777);
var inst_35759 = inst_35778;
var inst_35760 = inst_35777;
var inst_35761 = inst_35779;
var inst_35762 = (0);
var state_35807__$1 = (function (){var statearr_35826 = state_35807;
(statearr_35826[(8)] = inst_35762);

(statearr_35826[(9)] = inst_35760);

(statearr_35826[(10)] = inst_35759);

(statearr_35826[(11)] = inst_35761);

return statearr_35826;
})();
var statearr_35827_35857 = state_35807__$1;
(statearr_35827_35857[(2)] = null);

(statearr_35827_35857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (3))){
var inst_35805 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35807__$1,inst_35805);
} else {
if((state_val_35808 === (12))){
var inst_35793 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
var statearr_35828_35858 = state_35807__$1;
(statearr_35828_35858[(2)] = inst_35793);

(statearr_35828_35858[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (2))){
var state_35807__$1 = state_35807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35807__$1,(4),in$);
} else {
if((state_val_35808 === (23))){
var inst_35801 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
var statearr_35829_35859 = state_35807__$1;
(statearr_35829_35859[(2)] = inst_35801);

(statearr_35829_35859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (19))){
var inst_35788 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
var statearr_35830_35860 = state_35807__$1;
(statearr_35830_35860[(2)] = inst_35788);

(statearr_35830_35860[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (11))){
var inst_35759 = (state_35807[(10)]);
var inst_35773 = (state_35807[(7)]);
var inst_35773__$1 = cljs.core.seq.call(null,inst_35759);
var state_35807__$1 = (function (){var statearr_35831 = state_35807;
(statearr_35831[(7)] = inst_35773__$1);

return statearr_35831;
})();
if(inst_35773__$1){
var statearr_35832_35861 = state_35807__$1;
(statearr_35832_35861[(1)] = (14));

} else {
var statearr_35833_35862 = state_35807__$1;
(statearr_35833_35862[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (9))){
var inst_35795 = (state_35807[(2)]);
var inst_35796 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35807__$1 = (function (){var statearr_35834 = state_35807;
(statearr_35834[(15)] = inst_35795);

return statearr_35834;
})();
if(cljs.core.truth_(inst_35796)){
var statearr_35835_35863 = state_35807__$1;
(statearr_35835_35863[(1)] = (21));

} else {
var statearr_35836_35864 = state_35807__$1;
(statearr_35836_35864[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (5))){
var inst_35751 = cljs.core.async.close_BANG_.call(null,out);
var state_35807__$1 = state_35807;
var statearr_35837_35865 = state_35807__$1;
(statearr_35837_35865[(2)] = inst_35751);

(statearr_35837_35865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (14))){
var inst_35773 = (state_35807[(7)]);
var inst_35775 = cljs.core.chunked_seq_QMARK_.call(null,inst_35773);
var state_35807__$1 = state_35807;
if(inst_35775){
var statearr_35838_35866 = state_35807__$1;
(statearr_35838_35866[(1)] = (17));

} else {
var statearr_35839_35867 = state_35807__$1;
(statearr_35839_35867[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (16))){
var inst_35791 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
var statearr_35840_35868 = state_35807__$1;
(statearr_35840_35868[(2)] = inst_35791);

(statearr_35840_35868[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (10))){
var inst_35762 = (state_35807[(8)]);
var inst_35760 = (state_35807[(9)]);
var inst_35767 = cljs.core._nth.call(null,inst_35760,inst_35762);
var state_35807__$1 = state_35807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35807__$1,(13),out,inst_35767);
} else {
if((state_val_35808 === (18))){
var inst_35773 = (state_35807[(7)]);
var inst_35782 = cljs.core.first.call(null,inst_35773);
var state_35807__$1 = state_35807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35807__$1,(20),out,inst_35782);
} else {
if((state_val_35808 === (8))){
var inst_35762 = (state_35807[(8)]);
var inst_35761 = (state_35807[(11)]);
var inst_35764 = (inst_35762 < inst_35761);
var inst_35765 = inst_35764;
var state_35807__$1 = state_35807;
if(cljs.core.truth_(inst_35765)){
var statearr_35841_35869 = state_35807__$1;
(statearr_35841_35869[(1)] = (10));

} else {
var statearr_35842_35870 = state_35807__$1;
(statearr_35842_35870[(1)] = (11));

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
});})(c__34205__auto__))
;
return ((function (switch__34117__auto__,c__34205__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34118__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34118__auto____0 = (function (){
var statearr_35843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35843[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34118__auto__);

(statearr_35843[(1)] = (1));

return statearr_35843;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34118__auto____1 = (function (state_35807){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_35807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e35844){if((e35844 instanceof Object)){
var ex__34121__auto__ = e35844;
var statearr_35845_35871 = state_35807;
(statearr_35845_35871[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35872 = state_35807;
state_35807 = G__35872;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34118__auto__ = function(state_35807){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34118__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34118__auto____1.call(this,state_35807);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34118__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34118__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto__))
})();
var state__34207__auto__ = (function (){var statearr_35846 = f__34206__auto__.call(null);
(statearr_35846[(6)] = c__34205__auto__);

return statearr_35846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto__))
);

return c__34205__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35874 = arguments.length;
switch (G__35874) {
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
var G__35877 = arguments.length;
switch (G__35877) {
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
var G__35880 = arguments.length;
switch (G__35880) {
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
var c__34205__auto___35927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto___35927,out){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto___35927,out){
return (function (state_35904){
var state_val_35905 = (state_35904[(1)]);
if((state_val_35905 === (7))){
var inst_35899 = (state_35904[(2)]);
var state_35904__$1 = state_35904;
var statearr_35906_35928 = state_35904__$1;
(statearr_35906_35928[(2)] = inst_35899);

(statearr_35906_35928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (1))){
var inst_35881 = null;
var state_35904__$1 = (function (){var statearr_35907 = state_35904;
(statearr_35907[(7)] = inst_35881);

return statearr_35907;
})();
var statearr_35908_35929 = state_35904__$1;
(statearr_35908_35929[(2)] = null);

(statearr_35908_35929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (4))){
var inst_35884 = (state_35904[(8)]);
var inst_35884__$1 = (state_35904[(2)]);
var inst_35885 = (inst_35884__$1 == null);
var inst_35886 = cljs.core.not.call(null,inst_35885);
var state_35904__$1 = (function (){var statearr_35909 = state_35904;
(statearr_35909[(8)] = inst_35884__$1);

return statearr_35909;
})();
if(inst_35886){
var statearr_35910_35930 = state_35904__$1;
(statearr_35910_35930[(1)] = (5));

} else {
var statearr_35911_35931 = state_35904__$1;
(statearr_35911_35931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (6))){
var state_35904__$1 = state_35904;
var statearr_35912_35932 = state_35904__$1;
(statearr_35912_35932[(2)] = null);

(statearr_35912_35932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (3))){
var inst_35901 = (state_35904[(2)]);
var inst_35902 = cljs.core.async.close_BANG_.call(null,out);
var state_35904__$1 = (function (){var statearr_35913 = state_35904;
(statearr_35913[(9)] = inst_35901);

return statearr_35913;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35904__$1,inst_35902);
} else {
if((state_val_35905 === (2))){
var state_35904__$1 = state_35904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35904__$1,(4),ch);
} else {
if((state_val_35905 === (11))){
var inst_35884 = (state_35904[(8)]);
var inst_35893 = (state_35904[(2)]);
var inst_35881 = inst_35884;
var state_35904__$1 = (function (){var statearr_35914 = state_35904;
(statearr_35914[(7)] = inst_35881);

(statearr_35914[(10)] = inst_35893);

return statearr_35914;
})();
var statearr_35915_35933 = state_35904__$1;
(statearr_35915_35933[(2)] = null);

(statearr_35915_35933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (9))){
var inst_35884 = (state_35904[(8)]);
var state_35904__$1 = state_35904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35904__$1,(11),out,inst_35884);
} else {
if((state_val_35905 === (5))){
var inst_35881 = (state_35904[(7)]);
var inst_35884 = (state_35904[(8)]);
var inst_35888 = cljs.core._EQ_.call(null,inst_35884,inst_35881);
var state_35904__$1 = state_35904;
if(inst_35888){
var statearr_35917_35934 = state_35904__$1;
(statearr_35917_35934[(1)] = (8));

} else {
var statearr_35918_35935 = state_35904__$1;
(statearr_35918_35935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (10))){
var inst_35896 = (state_35904[(2)]);
var state_35904__$1 = state_35904;
var statearr_35919_35936 = state_35904__$1;
(statearr_35919_35936[(2)] = inst_35896);

(statearr_35919_35936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (8))){
var inst_35881 = (state_35904[(7)]);
var tmp35916 = inst_35881;
var inst_35881__$1 = tmp35916;
var state_35904__$1 = (function (){var statearr_35920 = state_35904;
(statearr_35920[(7)] = inst_35881__$1);

return statearr_35920;
})();
var statearr_35921_35937 = state_35904__$1;
(statearr_35921_35937[(2)] = null);

(statearr_35921_35937[(1)] = (2));


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
});})(c__34205__auto___35927,out))
;
return ((function (switch__34117__auto__,c__34205__auto___35927,out){
return (function() {
var cljs$core$async$state_machine__34118__auto__ = null;
var cljs$core$async$state_machine__34118__auto____0 = (function (){
var statearr_35922 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35922[(0)] = cljs$core$async$state_machine__34118__auto__);

(statearr_35922[(1)] = (1));

return statearr_35922;
});
var cljs$core$async$state_machine__34118__auto____1 = (function (state_35904){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_35904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e35923){if((e35923 instanceof Object)){
var ex__34121__auto__ = e35923;
var statearr_35924_35938 = state_35904;
(statearr_35924_35938[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35939 = state_35904;
state_35904 = G__35939;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
cljs$core$async$state_machine__34118__auto__ = function(state_35904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34118__auto____1.call(this,state_35904);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34118__auto____0;
cljs$core$async$state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34118__auto____1;
return cljs$core$async$state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto___35927,out))
})();
var state__34207__auto__ = (function (){var statearr_35925 = f__34206__auto__.call(null);
(statearr_35925[(6)] = c__34205__auto___35927);

return statearr_35925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto___35927,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35941 = arguments.length;
switch (G__35941) {
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
var c__34205__auto___36007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto___36007,out){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto___36007,out){
return (function (state_35979){
var state_val_35980 = (state_35979[(1)]);
if((state_val_35980 === (7))){
var inst_35975 = (state_35979[(2)]);
var state_35979__$1 = state_35979;
var statearr_35981_36008 = state_35979__$1;
(statearr_35981_36008[(2)] = inst_35975);

(statearr_35981_36008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (1))){
var inst_35942 = (new Array(n));
var inst_35943 = inst_35942;
var inst_35944 = (0);
var state_35979__$1 = (function (){var statearr_35982 = state_35979;
(statearr_35982[(7)] = inst_35944);

(statearr_35982[(8)] = inst_35943);

return statearr_35982;
})();
var statearr_35983_36009 = state_35979__$1;
(statearr_35983_36009[(2)] = null);

(statearr_35983_36009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (4))){
var inst_35947 = (state_35979[(9)]);
var inst_35947__$1 = (state_35979[(2)]);
var inst_35948 = (inst_35947__$1 == null);
var inst_35949 = cljs.core.not.call(null,inst_35948);
var state_35979__$1 = (function (){var statearr_35984 = state_35979;
(statearr_35984[(9)] = inst_35947__$1);

return statearr_35984;
})();
if(inst_35949){
var statearr_35985_36010 = state_35979__$1;
(statearr_35985_36010[(1)] = (5));

} else {
var statearr_35986_36011 = state_35979__$1;
(statearr_35986_36011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (15))){
var inst_35969 = (state_35979[(2)]);
var state_35979__$1 = state_35979;
var statearr_35987_36012 = state_35979__$1;
(statearr_35987_36012[(2)] = inst_35969);

(statearr_35987_36012[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (13))){
var state_35979__$1 = state_35979;
var statearr_35988_36013 = state_35979__$1;
(statearr_35988_36013[(2)] = null);

(statearr_35988_36013[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (6))){
var inst_35944 = (state_35979[(7)]);
var inst_35965 = (inst_35944 > (0));
var state_35979__$1 = state_35979;
if(cljs.core.truth_(inst_35965)){
var statearr_35989_36014 = state_35979__$1;
(statearr_35989_36014[(1)] = (12));

} else {
var statearr_35990_36015 = state_35979__$1;
(statearr_35990_36015[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (3))){
var inst_35977 = (state_35979[(2)]);
var state_35979__$1 = state_35979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35979__$1,inst_35977);
} else {
if((state_val_35980 === (12))){
var inst_35943 = (state_35979[(8)]);
var inst_35967 = cljs.core.vec.call(null,inst_35943);
var state_35979__$1 = state_35979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35979__$1,(15),out,inst_35967);
} else {
if((state_val_35980 === (2))){
var state_35979__$1 = state_35979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35979__$1,(4),ch);
} else {
if((state_val_35980 === (11))){
var inst_35959 = (state_35979[(2)]);
var inst_35960 = (new Array(n));
var inst_35943 = inst_35960;
var inst_35944 = (0);
var state_35979__$1 = (function (){var statearr_35991 = state_35979;
(statearr_35991[(7)] = inst_35944);

(statearr_35991[(10)] = inst_35959);

(statearr_35991[(8)] = inst_35943);

return statearr_35991;
})();
var statearr_35992_36016 = state_35979__$1;
(statearr_35992_36016[(2)] = null);

(statearr_35992_36016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (9))){
var inst_35943 = (state_35979[(8)]);
var inst_35957 = cljs.core.vec.call(null,inst_35943);
var state_35979__$1 = state_35979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35979__$1,(11),out,inst_35957);
} else {
if((state_val_35980 === (5))){
var inst_35944 = (state_35979[(7)]);
var inst_35952 = (state_35979[(11)]);
var inst_35947 = (state_35979[(9)]);
var inst_35943 = (state_35979[(8)]);
var inst_35951 = (inst_35943[inst_35944] = inst_35947);
var inst_35952__$1 = (inst_35944 + (1));
var inst_35953 = (inst_35952__$1 < n);
var state_35979__$1 = (function (){var statearr_35993 = state_35979;
(statearr_35993[(11)] = inst_35952__$1);

(statearr_35993[(12)] = inst_35951);

return statearr_35993;
})();
if(cljs.core.truth_(inst_35953)){
var statearr_35994_36017 = state_35979__$1;
(statearr_35994_36017[(1)] = (8));

} else {
var statearr_35995_36018 = state_35979__$1;
(statearr_35995_36018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (14))){
var inst_35972 = (state_35979[(2)]);
var inst_35973 = cljs.core.async.close_BANG_.call(null,out);
var state_35979__$1 = (function (){var statearr_35997 = state_35979;
(statearr_35997[(13)] = inst_35972);

return statearr_35997;
})();
var statearr_35998_36019 = state_35979__$1;
(statearr_35998_36019[(2)] = inst_35973);

(statearr_35998_36019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (10))){
var inst_35963 = (state_35979[(2)]);
var state_35979__$1 = state_35979;
var statearr_35999_36020 = state_35979__$1;
(statearr_35999_36020[(2)] = inst_35963);

(statearr_35999_36020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (8))){
var inst_35952 = (state_35979[(11)]);
var inst_35943 = (state_35979[(8)]);
var tmp35996 = inst_35943;
var inst_35943__$1 = tmp35996;
var inst_35944 = inst_35952;
var state_35979__$1 = (function (){var statearr_36000 = state_35979;
(statearr_36000[(7)] = inst_35944);

(statearr_36000[(8)] = inst_35943__$1);

return statearr_36000;
})();
var statearr_36001_36021 = state_35979__$1;
(statearr_36001_36021[(2)] = null);

(statearr_36001_36021[(1)] = (2));


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
});})(c__34205__auto___36007,out))
;
return ((function (switch__34117__auto__,c__34205__auto___36007,out){
return (function() {
var cljs$core$async$state_machine__34118__auto__ = null;
var cljs$core$async$state_machine__34118__auto____0 = (function (){
var statearr_36002 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36002[(0)] = cljs$core$async$state_machine__34118__auto__);

(statearr_36002[(1)] = (1));

return statearr_36002;
});
var cljs$core$async$state_machine__34118__auto____1 = (function (state_35979){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_35979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e36003){if((e36003 instanceof Object)){
var ex__34121__auto__ = e36003;
var statearr_36004_36022 = state_35979;
(statearr_36004_36022[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36023 = state_35979;
state_35979 = G__36023;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
cljs$core$async$state_machine__34118__auto__ = function(state_35979){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34118__auto____1.call(this,state_35979);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34118__auto____0;
cljs$core$async$state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34118__auto____1;
return cljs$core$async$state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto___36007,out))
})();
var state__34207__auto__ = (function (){var statearr_36005 = f__34206__auto__.call(null);
(statearr_36005[(6)] = c__34205__auto___36007);

return statearr_36005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto___36007,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36025 = arguments.length;
switch (G__36025) {
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
var c__34205__auto___36095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto___36095,out){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto___36095,out){
return (function (state_36067){
var state_val_36068 = (state_36067[(1)]);
if((state_val_36068 === (7))){
var inst_36063 = (state_36067[(2)]);
var state_36067__$1 = state_36067;
var statearr_36069_36096 = state_36067__$1;
(statearr_36069_36096[(2)] = inst_36063);

(statearr_36069_36096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36068 === (1))){
var inst_36026 = [];
var inst_36027 = inst_36026;
var inst_36028 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36067__$1 = (function (){var statearr_36070 = state_36067;
(statearr_36070[(7)] = inst_36028);

(statearr_36070[(8)] = inst_36027);

return statearr_36070;
})();
var statearr_36071_36097 = state_36067__$1;
(statearr_36071_36097[(2)] = null);

(statearr_36071_36097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36068 === (4))){
var inst_36031 = (state_36067[(9)]);
var inst_36031__$1 = (state_36067[(2)]);
var inst_36032 = (inst_36031__$1 == null);
var inst_36033 = cljs.core.not.call(null,inst_36032);
var state_36067__$1 = (function (){var statearr_36072 = state_36067;
(statearr_36072[(9)] = inst_36031__$1);

return statearr_36072;
})();
if(inst_36033){
var statearr_36073_36098 = state_36067__$1;
(statearr_36073_36098[(1)] = (5));

} else {
var statearr_36074_36099 = state_36067__$1;
(statearr_36074_36099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36068 === (15))){
var inst_36057 = (state_36067[(2)]);
var state_36067__$1 = state_36067;
var statearr_36075_36100 = state_36067__$1;
(statearr_36075_36100[(2)] = inst_36057);

(statearr_36075_36100[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36068 === (13))){
var state_36067__$1 = state_36067;
var statearr_36076_36101 = state_36067__$1;
(statearr_36076_36101[(2)] = null);

(statearr_36076_36101[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36068 === (6))){
var inst_36027 = (state_36067[(8)]);
var inst_36052 = inst_36027.length;
var inst_36053 = (inst_36052 > (0));
var state_36067__$1 = state_36067;
if(cljs.core.truth_(inst_36053)){
var statearr_36077_36102 = state_36067__$1;
(statearr_36077_36102[(1)] = (12));

} else {
var statearr_36078_36103 = state_36067__$1;
(statearr_36078_36103[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36068 === (3))){
var inst_36065 = (state_36067[(2)]);
var state_36067__$1 = state_36067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36067__$1,inst_36065);
} else {
if((state_val_36068 === (12))){
var inst_36027 = (state_36067[(8)]);
var inst_36055 = cljs.core.vec.call(null,inst_36027);
var state_36067__$1 = state_36067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36067__$1,(15),out,inst_36055);
} else {
if((state_val_36068 === (2))){
var state_36067__$1 = state_36067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36067__$1,(4),ch);
} else {
if((state_val_36068 === (11))){
var inst_36031 = (state_36067[(9)]);
var inst_36035 = (state_36067[(10)]);
var inst_36045 = (state_36067[(2)]);
var inst_36046 = [];
var inst_36047 = inst_36046.push(inst_36031);
var inst_36027 = inst_36046;
var inst_36028 = inst_36035;
var state_36067__$1 = (function (){var statearr_36079 = state_36067;
(statearr_36079[(7)] = inst_36028);

(statearr_36079[(8)] = inst_36027);

(statearr_36079[(11)] = inst_36047);

(statearr_36079[(12)] = inst_36045);

return statearr_36079;
})();
var statearr_36080_36104 = state_36067__$1;
(statearr_36080_36104[(2)] = null);

(statearr_36080_36104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36068 === (9))){
var inst_36027 = (state_36067[(8)]);
var inst_36043 = cljs.core.vec.call(null,inst_36027);
var state_36067__$1 = state_36067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36067__$1,(11),out,inst_36043);
} else {
if((state_val_36068 === (5))){
var inst_36028 = (state_36067[(7)]);
var inst_36031 = (state_36067[(9)]);
var inst_36035 = (state_36067[(10)]);
var inst_36035__$1 = f.call(null,inst_36031);
var inst_36036 = cljs.core._EQ_.call(null,inst_36035__$1,inst_36028);
var inst_36037 = cljs.core.keyword_identical_QMARK_.call(null,inst_36028,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36038 = (inst_36036) || (inst_36037);
var state_36067__$1 = (function (){var statearr_36081 = state_36067;
(statearr_36081[(10)] = inst_36035__$1);

return statearr_36081;
})();
if(cljs.core.truth_(inst_36038)){
var statearr_36082_36105 = state_36067__$1;
(statearr_36082_36105[(1)] = (8));

} else {
var statearr_36083_36106 = state_36067__$1;
(statearr_36083_36106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36068 === (14))){
var inst_36060 = (state_36067[(2)]);
var inst_36061 = cljs.core.async.close_BANG_.call(null,out);
var state_36067__$1 = (function (){var statearr_36085 = state_36067;
(statearr_36085[(13)] = inst_36060);

return statearr_36085;
})();
var statearr_36086_36107 = state_36067__$1;
(statearr_36086_36107[(2)] = inst_36061);

(statearr_36086_36107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36068 === (10))){
var inst_36050 = (state_36067[(2)]);
var state_36067__$1 = state_36067;
var statearr_36087_36108 = state_36067__$1;
(statearr_36087_36108[(2)] = inst_36050);

(statearr_36087_36108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36068 === (8))){
var inst_36031 = (state_36067[(9)]);
var inst_36035 = (state_36067[(10)]);
var inst_36027 = (state_36067[(8)]);
var inst_36040 = inst_36027.push(inst_36031);
var tmp36084 = inst_36027;
var inst_36027__$1 = tmp36084;
var inst_36028 = inst_36035;
var state_36067__$1 = (function (){var statearr_36088 = state_36067;
(statearr_36088[(7)] = inst_36028);

(statearr_36088[(8)] = inst_36027__$1);

(statearr_36088[(14)] = inst_36040);

return statearr_36088;
})();
var statearr_36089_36109 = state_36067__$1;
(statearr_36089_36109[(2)] = null);

(statearr_36089_36109[(1)] = (2));


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
});})(c__34205__auto___36095,out))
;
return ((function (switch__34117__auto__,c__34205__auto___36095,out){
return (function() {
var cljs$core$async$state_machine__34118__auto__ = null;
var cljs$core$async$state_machine__34118__auto____0 = (function (){
var statearr_36090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36090[(0)] = cljs$core$async$state_machine__34118__auto__);

(statearr_36090[(1)] = (1));

return statearr_36090;
});
var cljs$core$async$state_machine__34118__auto____1 = (function (state_36067){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_36067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e36091){if((e36091 instanceof Object)){
var ex__34121__auto__ = e36091;
var statearr_36092_36110 = state_36067;
(statearr_36092_36110[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36111 = state_36067;
state_36067 = G__36111;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
cljs$core$async$state_machine__34118__auto__ = function(state_36067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34118__auto____1.call(this,state_36067);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34118__auto____0;
cljs$core$async$state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34118__auto____1;
return cljs$core$async$state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto___36095,out))
})();
var state__34207__auto__ = (function (){var statearr_36093 = f__34206__auto__.call(null);
(statearr_36093[(6)] = c__34205__auto___36095);

return statearr_36093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto___36095,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1504733875193
