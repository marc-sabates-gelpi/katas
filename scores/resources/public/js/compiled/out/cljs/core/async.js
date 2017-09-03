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
var G__32609 = arguments.length;
switch (G__32609) {
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
if(typeof cljs.core.async.t_cljs$core$async32610 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32610 = (function (f,blockable,meta32611){
this.f = f;
this.blockable = blockable;
this.meta32611 = meta32611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32612,meta32611__$1){
var self__ = this;
var _32612__$1 = this;
return (new cljs.core.async.t_cljs$core$async32610(self__.f,self__.blockable,meta32611__$1));
});

cljs.core.async.t_cljs$core$async32610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32612){
var self__ = this;
var _32612__$1 = this;
return self__.meta32611;
});

cljs.core.async.t_cljs$core$async32610.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32610.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32610.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32610.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32610.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32611","meta32611",409941320,null)], null);
});

cljs.core.async.t_cljs$core$async32610.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32610.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32610";

cljs.core.async.t_cljs$core$async32610.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async32610");
});

cljs.core.async.__GT_t_cljs$core$async32610 = (function cljs$core$async$__GT_t_cljs$core$async32610(f__$1,blockable__$1,meta32611){
return (new cljs.core.async.t_cljs$core$async32610(f__$1,blockable__$1,meta32611));
});

}

return (new cljs.core.async.t_cljs$core$async32610(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32616 = arguments.length;
switch (G__32616) {
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
var G__32619 = arguments.length;
switch (G__32619) {
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
var G__32622 = arguments.length;
switch (G__32622) {
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
var val_32624 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32624);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32624,ret){
return (function (){
return fn1.call(null,val_32624);
});})(val_32624,ret))
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
var G__32626 = arguments.length;
switch (G__32626) {
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
var n__29231__auto___32628 = n;
var x_32629 = (0);
while(true){
if((x_32629 < n__29231__auto___32628)){
(a[x_32629] = (0));

var G__32630 = (x_32629 + (1));
x_32629 = G__32630;
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

var G__32631 = (i + (1));
i = G__32631;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32632 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32632 = (function (flag,meta32633){
this.flag = flag;
this.meta32633 = meta32633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32634,meta32633__$1){
var self__ = this;
var _32634__$1 = this;
return (new cljs.core.async.t_cljs$core$async32632(self__.flag,meta32633__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32632.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32634){
var self__ = this;
var _32634__$1 = this;
return self__.meta32633;
});})(flag))
;

cljs.core.async.t_cljs$core$async32632.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32632.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32632.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32632.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32632.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32633","meta32633",-1020882125,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32632.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32632.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32632";

cljs.core.async.t_cljs$core$async32632.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async32632");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32632 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32632(flag__$1,meta32633){
return (new cljs.core.async.t_cljs$core$async32632(flag__$1,meta32633));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32632(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32635 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32635 = (function (flag,cb,meta32636){
this.flag = flag;
this.cb = cb;
this.meta32636 = meta32636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32637,meta32636__$1){
var self__ = this;
var _32637__$1 = this;
return (new cljs.core.async.t_cljs$core$async32635(self__.flag,self__.cb,meta32636__$1));
});

cljs.core.async.t_cljs$core$async32635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32637){
var self__ = this;
var _32637__$1 = this;
return self__.meta32636;
});

cljs.core.async.t_cljs$core$async32635.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32635.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32635.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32635.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32635.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32636","meta32636",1563328481,null)], null);
});

cljs.core.async.t_cljs$core$async32635.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32635.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32635";

cljs.core.async.t_cljs$core$async32635.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async32635");
});

cljs.core.async.__GT_t_cljs$core$async32635 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32635(flag__$1,cb__$1,meta32636){
return (new cljs.core.async.t_cljs$core$async32635(flag__$1,cb__$1,meta32636));
});

}

return (new cljs.core.async.t_cljs$core$async32635(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32638_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32638_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32639_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32639_SHARP_,port], null));
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
var G__32640 = (i + (1));
i = G__32640;
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
var len__29455__auto___32646 = arguments.length;
var i__29456__auto___32647 = (0);
while(true){
if((i__29456__auto___32647 < len__29455__auto___32646)){
args__29462__auto__.push((arguments[i__29456__auto___32647]));

var G__32648 = (i__29456__auto___32647 + (1));
i__29456__auto___32647 = G__32648;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32643){
var map__32644 = p__32643;
var map__32644__$1 = ((((!((map__32644 == null)))?((((map__32644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32644.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32644):map__32644);
var opts = map__32644__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32641){
var G__32642 = cljs.core.first.call(null,seq32641);
var seq32641__$1 = cljs.core.next.call(null,seq32641);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32642,seq32641__$1);
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
var G__32650 = arguments.length;
switch (G__32650) {
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
var c__32563__auto___32696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto___32696){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto___32696){
return (function (state_32674){
var state_val_32675 = (state_32674[(1)]);
if((state_val_32675 === (7))){
var inst_32670 = (state_32674[(2)]);
var state_32674__$1 = state_32674;
var statearr_32676_32697 = state_32674__$1;
(statearr_32676_32697[(2)] = inst_32670);

(statearr_32676_32697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32675 === (1))){
var state_32674__$1 = state_32674;
var statearr_32677_32698 = state_32674__$1;
(statearr_32677_32698[(2)] = null);

(statearr_32677_32698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32675 === (4))){
var inst_32653 = (state_32674[(7)]);
var inst_32653__$1 = (state_32674[(2)]);
var inst_32654 = (inst_32653__$1 == null);
var state_32674__$1 = (function (){var statearr_32678 = state_32674;
(statearr_32678[(7)] = inst_32653__$1);

return statearr_32678;
})();
if(cljs.core.truth_(inst_32654)){
var statearr_32679_32699 = state_32674__$1;
(statearr_32679_32699[(1)] = (5));

} else {
var statearr_32680_32700 = state_32674__$1;
(statearr_32680_32700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32675 === (13))){
var state_32674__$1 = state_32674;
var statearr_32681_32701 = state_32674__$1;
(statearr_32681_32701[(2)] = null);

(statearr_32681_32701[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32675 === (6))){
var inst_32653 = (state_32674[(7)]);
var state_32674__$1 = state_32674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32674__$1,(11),to,inst_32653);
} else {
if((state_val_32675 === (3))){
var inst_32672 = (state_32674[(2)]);
var state_32674__$1 = state_32674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32674__$1,inst_32672);
} else {
if((state_val_32675 === (12))){
var state_32674__$1 = state_32674;
var statearr_32682_32702 = state_32674__$1;
(statearr_32682_32702[(2)] = null);

(statearr_32682_32702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32675 === (2))){
var state_32674__$1 = state_32674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32674__$1,(4),from);
} else {
if((state_val_32675 === (11))){
var inst_32663 = (state_32674[(2)]);
var state_32674__$1 = state_32674;
if(cljs.core.truth_(inst_32663)){
var statearr_32683_32703 = state_32674__$1;
(statearr_32683_32703[(1)] = (12));

} else {
var statearr_32684_32704 = state_32674__$1;
(statearr_32684_32704[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32675 === (9))){
var state_32674__$1 = state_32674;
var statearr_32685_32705 = state_32674__$1;
(statearr_32685_32705[(2)] = null);

(statearr_32685_32705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32675 === (5))){
var state_32674__$1 = state_32674;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32686_32706 = state_32674__$1;
(statearr_32686_32706[(1)] = (8));

} else {
var statearr_32687_32707 = state_32674__$1;
(statearr_32687_32707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32675 === (14))){
var inst_32668 = (state_32674[(2)]);
var state_32674__$1 = state_32674;
var statearr_32688_32708 = state_32674__$1;
(statearr_32688_32708[(2)] = inst_32668);

(statearr_32688_32708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32675 === (10))){
var inst_32660 = (state_32674[(2)]);
var state_32674__$1 = state_32674;
var statearr_32689_32709 = state_32674__$1;
(statearr_32689_32709[(2)] = inst_32660);

(statearr_32689_32709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32675 === (8))){
var inst_32657 = cljs.core.async.close_BANG_.call(null,to);
var state_32674__$1 = state_32674;
var statearr_32690_32710 = state_32674__$1;
(statearr_32690_32710[(2)] = inst_32657);

(statearr_32690_32710[(1)] = (10));


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
});})(c__32563__auto___32696))
;
return ((function (switch__32475__auto__,c__32563__auto___32696){
return (function() {
var cljs$core$async$state_machine__32476__auto__ = null;
var cljs$core$async$state_machine__32476__auto____0 = (function (){
var statearr_32691 = [null,null,null,null,null,null,null,null];
(statearr_32691[(0)] = cljs$core$async$state_machine__32476__auto__);

(statearr_32691[(1)] = (1));

return statearr_32691;
});
var cljs$core$async$state_machine__32476__auto____1 = (function (state_32674){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_32674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e32692){if((e32692 instanceof Object)){
var ex__32479__auto__ = e32692;
var statearr_32693_32711 = state_32674;
(statearr_32693_32711[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32712 = state_32674;
state_32674 = G__32712;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
cljs$core$async$state_machine__32476__auto__ = function(state_32674){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32476__auto____1.call(this,state_32674);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32476__auto____0;
cljs$core$async$state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32476__auto____1;
return cljs$core$async$state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto___32696))
})();
var state__32565__auto__ = (function (){var statearr_32694 = f__32564__auto__.call(null);
(statearr_32694[(6)] = c__32563__auto___32696);

return statearr_32694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto___32696))
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
return (function (p__32713){
var vec__32714 = p__32713;
var v = cljs.core.nth.call(null,vec__32714,(0),null);
var p = cljs.core.nth.call(null,vec__32714,(1),null);
var job = vec__32714;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32563__auto___32885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto___32885,res,vec__32714,v,p,job,jobs,results){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto___32885,res,vec__32714,v,p,job,jobs,results){
return (function (state_32721){
var state_val_32722 = (state_32721[(1)]);
if((state_val_32722 === (1))){
var state_32721__$1 = state_32721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32721__$1,(2),res,v);
} else {
if((state_val_32722 === (2))){
var inst_32718 = (state_32721[(2)]);
var inst_32719 = cljs.core.async.close_BANG_.call(null,res);
var state_32721__$1 = (function (){var statearr_32723 = state_32721;
(statearr_32723[(7)] = inst_32718);

return statearr_32723;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32721__$1,inst_32719);
} else {
return null;
}
}
});})(c__32563__auto___32885,res,vec__32714,v,p,job,jobs,results))
;
return ((function (switch__32475__auto__,c__32563__auto___32885,res,vec__32714,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____0 = (function (){
var statearr_32724 = [null,null,null,null,null,null,null,null];
(statearr_32724[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__);

(statearr_32724[(1)] = (1));

return statearr_32724;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____1 = (function (state_32721){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_32721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e32725){if((e32725 instanceof Object)){
var ex__32479__auto__ = e32725;
var statearr_32726_32886 = state_32721;
(statearr_32726_32886[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32887 = state_32721;
state_32721 = G__32887;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__ = function(state_32721){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____1.call(this,state_32721);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto___32885,res,vec__32714,v,p,job,jobs,results))
})();
var state__32565__auto__ = (function (){var statearr_32727 = f__32564__auto__.call(null);
(statearr_32727[(6)] = c__32563__auto___32885);

return statearr_32727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto___32885,res,vec__32714,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32728){
var vec__32729 = p__32728;
var v = cljs.core.nth.call(null,vec__32729,(0),null);
var p = cljs.core.nth.call(null,vec__32729,(1),null);
var job = vec__32729;
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
var n__29231__auto___32888 = n;
var __32889 = (0);
while(true){
if((__32889 < n__29231__auto___32888)){
var G__32732_32890 = type;
var G__32732_32891__$1 = (((G__32732_32890 instanceof cljs.core.Keyword))?G__32732_32890.fqn:null);
switch (G__32732_32891__$1) {
case "compute":
var c__32563__auto___32893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32889,c__32563__auto___32893,G__32732_32890,G__32732_32891__$1,n__29231__auto___32888,jobs,results,process,async){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (__32889,c__32563__auto___32893,G__32732_32890,G__32732_32891__$1,n__29231__auto___32888,jobs,results,process,async){
return (function (state_32745){
var state_val_32746 = (state_32745[(1)]);
if((state_val_32746 === (1))){
var state_32745__$1 = state_32745;
var statearr_32747_32894 = state_32745__$1;
(statearr_32747_32894[(2)] = null);

(statearr_32747_32894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (2))){
var state_32745__$1 = state_32745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32745__$1,(4),jobs);
} else {
if((state_val_32746 === (3))){
var inst_32743 = (state_32745[(2)]);
var state_32745__$1 = state_32745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32745__$1,inst_32743);
} else {
if((state_val_32746 === (4))){
var inst_32735 = (state_32745[(2)]);
var inst_32736 = process.call(null,inst_32735);
var state_32745__$1 = state_32745;
if(cljs.core.truth_(inst_32736)){
var statearr_32748_32895 = state_32745__$1;
(statearr_32748_32895[(1)] = (5));

} else {
var statearr_32749_32896 = state_32745__$1;
(statearr_32749_32896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (5))){
var state_32745__$1 = state_32745;
var statearr_32750_32897 = state_32745__$1;
(statearr_32750_32897[(2)] = null);

(statearr_32750_32897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (6))){
var state_32745__$1 = state_32745;
var statearr_32751_32898 = state_32745__$1;
(statearr_32751_32898[(2)] = null);

(statearr_32751_32898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (7))){
var inst_32741 = (state_32745[(2)]);
var state_32745__$1 = state_32745;
var statearr_32752_32899 = state_32745__$1;
(statearr_32752_32899[(2)] = inst_32741);

(statearr_32752_32899[(1)] = (3));


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
});})(__32889,c__32563__auto___32893,G__32732_32890,G__32732_32891__$1,n__29231__auto___32888,jobs,results,process,async))
;
return ((function (__32889,switch__32475__auto__,c__32563__auto___32893,G__32732_32890,G__32732_32891__$1,n__29231__auto___32888,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____0 = (function (){
var statearr_32753 = [null,null,null,null,null,null,null];
(statearr_32753[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__);

(statearr_32753[(1)] = (1));

return statearr_32753;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____1 = (function (state_32745){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_32745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e32754){if((e32754 instanceof Object)){
var ex__32479__auto__ = e32754;
var statearr_32755_32900 = state_32745;
(statearr_32755_32900[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32901 = state_32745;
state_32745 = G__32901;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__ = function(state_32745){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____1.call(this,state_32745);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__;
})()
;})(__32889,switch__32475__auto__,c__32563__auto___32893,G__32732_32890,G__32732_32891__$1,n__29231__auto___32888,jobs,results,process,async))
})();
var state__32565__auto__ = (function (){var statearr_32756 = f__32564__auto__.call(null);
(statearr_32756[(6)] = c__32563__auto___32893);

return statearr_32756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(__32889,c__32563__auto___32893,G__32732_32890,G__32732_32891__$1,n__29231__auto___32888,jobs,results,process,async))
);


break;
case "async":
var c__32563__auto___32902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32889,c__32563__auto___32902,G__32732_32890,G__32732_32891__$1,n__29231__auto___32888,jobs,results,process,async){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (__32889,c__32563__auto___32902,G__32732_32890,G__32732_32891__$1,n__29231__auto___32888,jobs,results,process,async){
return (function (state_32769){
var state_val_32770 = (state_32769[(1)]);
if((state_val_32770 === (1))){
var state_32769__$1 = state_32769;
var statearr_32771_32903 = state_32769__$1;
(statearr_32771_32903[(2)] = null);

(statearr_32771_32903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32770 === (2))){
var state_32769__$1 = state_32769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32769__$1,(4),jobs);
} else {
if((state_val_32770 === (3))){
var inst_32767 = (state_32769[(2)]);
var state_32769__$1 = state_32769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32769__$1,inst_32767);
} else {
if((state_val_32770 === (4))){
var inst_32759 = (state_32769[(2)]);
var inst_32760 = async.call(null,inst_32759);
var state_32769__$1 = state_32769;
if(cljs.core.truth_(inst_32760)){
var statearr_32772_32904 = state_32769__$1;
(statearr_32772_32904[(1)] = (5));

} else {
var statearr_32773_32905 = state_32769__$1;
(statearr_32773_32905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32770 === (5))){
var state_32769__$1 = state_32769;
var statearr_32774_32906 = state_32769__$1;
(statearr_32774_32906[(2)] = null);

(statearr_32774_32906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32770 === (6))){
var state_32769__$1 = state_32769;
var statearr_32775_32907 = state_32769__$1;
(statearr_32775_32907[(2)] = null);

(statearr_32775_32907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32770 === (7))){
var inst_32765 = (state_32769[(2)]);
var state_32769__$1 = state_32769;
var statearr_32776_32908 = state_32769__$1;
(statearr_32776_32908[(2)] = inst_32765);

(statearr_32776_32908[(1)] = (3));


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
});})(__32889,c__32563__auto___32902,G__32732_32890,G__32732_32891__$1,n__29231__auto___32888,jobs,results,process,async))
;
return ((function (__32889,switch__32475__auto__,c__32563__auto___32902,G__32732_32890,G__32732_32891__$1,n__29231__auto___32888,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____0 = (function (){
var statearr_32777 = [null,null,null,null,null,null,null];
(statearr_32777[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__);

(statearr_32777[(1)] = (1));

return statearr_32777;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____1 = (function (state_32769){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_32769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e32778){if((e32778 instanceof Object)){
var ex__32479__auto__ = e32778;
var statearr_32779_32909 = state_32769;
(statearr_32779_32909[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32910 = state_32769;
state_32769 = G__32910;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__ = function(state_32769){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____1.call(this,state_32769);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__;
})()
;})(__32889,switch__32475__auto__,c__32563__auto___32902,G__32732_32890,G__32732_32891__$1,n__29231__auto___32888,jobs,results,process,async))
})();
var state__32565__auto__ = (function (){var statearr_32780 = f__32564__auto__.call(null);
(statearr_32780[(6)] = c__32563__auto___32902);

return statearr_32780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(__32889,c__32563__auto___32902,G__32732_32890,G__32732_32891__$1,n__29231__auto___32888,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32732_32891__$1)].join('')));

}

var G__32911 = (__32889 + (1));
__32889 = G__32911;
continue;
} else {
}
break;
}

var c__32563__auto___32912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto___32912,jobs,results,process,async){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto___32912,jobs,results,process,async){
return (function (state_32802){
var state_val_32803 = (state_32802[(1)]);
if((state_val_32803 === (1))){
var state_32802__$1 = state_32802;
var statearr_32804_32913 = state_32802__$1;
(statearr_32804_32913[(2)] = null);

(statearr_32804_32913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (2))){
var state_32802__$1 = state_32802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32802__$1,(4),from);
} else {
if((state_val_32803 === (3))){
var inst_32800 = (state_32802[(2)]);
var state_32802__$1 = state_32802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32802__$1,inst_32800);
} else {
if((state_val_32803 === (4))){
var inst_32783 = (state_32802[(7)]);
var inst_32783__$1 = (state_32802[(2)]);
var inst_32784 = (inst_32783__$1 == null);
var state_32802__$1 = (function (){var statearr_32805 = state_32802;
(statearr_32805[(7)] = inst_32783__$1);

return statearr_32805;
})();
if(cljs.core.truth_(inst_32784)){
var statearr_32806_32914 = state_32802__$1;
(statearr_32806_32914[(1)] = (5));

} else {
var statearr_32807_32915 = state_32802__$1;
(statearr_32807_32915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (5))){
var inst_32786 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32802__$1 = state_32802;
var statearr_32808_32916 = state_32802__$1;
(statearr_32808_32916[(2)] = inst_32786);

(statearr_32808_32916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (6))){
var inst_32783 = (state_32802[(7)]);
var inst_32788 = (state_32802[(8)]);
var inst_32788__$1 = cljs.core.async.chan.call(null,(1));
var inst_32789 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32790 = [inst_32783,inst_32788__$1];
var inst_32791 = (new cljs.core.PersistentVector(null,2,(5),inst_32789,inst_32790,null));
var state_32802__$1 = (function (){var statearr_32809 = state_32802;
(statearr_32809[(8)] = inst_32788__$1);

return statearr_32809;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32802__$1,(8),jobs,inst_32791);
} else {
if((state_val_32803 === (7))){
var inst_32798 = (state_32802[(2)]);
var state_32802__$1 = state_32802;
var statearr_32810_32917 = state_32802__$1;
(statearr_32810_32917[(2)] = inst_32798);

(statearr_32810_32917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (8))){
var inst_32788 = (state_32802[(8)]);
var inst_32793 = (state_32802[(2)]);
var state_32802__$1 = (function (){var statearr_32811 = state_32802;
(statearr_32811[(9)] = inst_32793);

return statearr_32811;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32802__$1,(9),results,inst_32788);
} else {
if((state_val_32803 === (9))){
var inst_32795 = (state_32802[(2)]);
var state_32802__$1 = (function (){var statearr_32812 = state_32802;
(statearr_32812[(10)] = inst_32795);

return statearr_32812;
})();
var statearr_32813_32918 = state_32802__$1;
(statearr_32813_32918[(2)] = null);

(statearr_32813_32918[(1)] = (2));


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
});})(c__32563__auto___32912,jobs,results,process,async))
;
return ((function (switch__32475__auto__,c__32563__auto___32912,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____0 = (function (){
var statearr_32814 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32814[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__);

(statearr_32814[(1)] = (1));

return statearr_32814;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____1 = (function (state_32802){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_32802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e32815){if((e32815 instanceof Object)){
var ex__32479__auto__ = e32815;
var statearr_32816_32919 = state_32802;
(statearr_32816_32919[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32920 = state_32802;
state_32802 = G__32920;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__ = function(state_32802){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____1.call(this,state_32802);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto___32912,jobs,results,process,async))
})();
var state__32565__auto__ = (function (){var statearr_32817 = f__32564__auto__.call(null);
(statearr_32817[(6)] = c__32563__auto___32912);

return statearr_32817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto___32912,jobs,results,process,async))
);


var c__32563__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto__,jobs,results,process,async){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto__,jobs,results,process,async){
return (function (state_32855){
var state_val_32856 = (state_32855[(1)]);
if((state_val_32856 === (7))){
var inst_32851 = (state_32855[(2)]);
var state_32855__$1 = state_32855;
var statearr_32857_32921 = state_32855__$1;
(statearr_32857_32921[(2)] = inst_32851);

(statearr_32857_32921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32856 === (20))){
var state_32855__$1 = state_32855;
var statearr_32858_32922 = state_32855__$1;
(statearr_32858_32922[(2)] = null);

(statearr_32858_32922[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32856 === (1))){
var state_32855__$1 = state_32855;
var statearr_32859_32923 = state_32855__$1;
(statearr_32859_32923[(2)] = null);

(statearr_32859_32923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32856 === (4))){
var inst_32820 = (state_32855[(7)]);
var inst_32820__$1 = (state_32855[(2)]);
var inst_32821 = (inst_32820__$1 == null);
var state_32855__$1 = (function (){var statearr_32860 = state_32855;
(statearr_32860[(7)] = inst_32820__$1);

return statearr_32860;
})();
if(cljs.core.truth_(inst_32821)){
var statearr_32861_32924 = state_32855__$1;
(statearr_32861_32924[(1)] = (5));

} else {
var statearr_32862_32925 = state_32855__$1;
(statearr_32862_32925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32856 === (15))){
var inst_32833 = (state_32855[(8)]);
var state_32855__$1 = state_32855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32855__$1,(18),to,inst_32833);
} else {
if((state_val_32856 === (21))){
var inst_32846 = (state_32855[(2)]);
var state_32855__$1 = state_32855;
var statearr_32863_32926 = state_32855__$1;
(statearr_32863_32926[(2)] = inst_32846);

(statearr_32863_32926[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32856 === (13))){
var inst_32848 = (state_32855[(2)]);
var state_32855__$1 = (function (){var statearr_32864 = state_32855;
(statearr_32864[(9)] = inst_32848);

return statearr_32864;
})();
var statearr_32865_32927 = state_32855__$1;
(statearr_32865_32927[(2)] = null);

(statearr_32865_32927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32856 === (6))){
var inst_32820 = (state_32855[(7)]);
var state_32855__$1 = state_32855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32855__$1,(11),inst_32820);
} else {
if((state_val_32856 === (17))){
var inst_32841 = (state_32855[(2)]);
var state_32855__$1 = state_32855;
if(cljs.core.truth_(inst_32841)){
var statearr_32866_32928 = state_32855__$1;
(statearr_32866_32928[(1)] = (19));

} else {
var statearr_32867_32929 = state_32855__$1;
(statearr_32867_32929[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32856 === (3))){
var inst_32853 = (state_32855[(2)]);
var state_32855__$1 = state_32855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32855__$1,inst_32853);
} else {
if((state_val_32856 === (12))){
var inst_32830 = (state_32855[(10)]);
var state_32855__$1 = state_32855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32855__$1,(14),inst_32830);
} else {
if((state_val_32856 === (2))){
var state_32855__$1 = state_32855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32855__$1,(4),results);
} else {
if((state_val_32856 === (19))){
var state_32855__$1 = state_32855;
var statearr_32868_32930 = state_32855__$1;
(statearr_32868_32930[(2)] = null);

(statearr_32868_32930[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32856 === (11))){
var inst_32830 = (state_32855[(2)]);
var state_32855__$1 = (function (){var statearr_32869 = state_32855;
(statearr_32869[(10)] = inst_32830);

return statearr_32869;
})();
var statearr_32870_32931 = state_32855__$1;
(statearr_32870_32931[(2)] = null);

(statearr_32870_32931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32856 === (9))){
var state_32855__$1 = state_32855;
var statearr_32871_32932 = state_32855__$1;
(statearr_32871_32932[(2)] = null);

(statearr_32871_32932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32856 === (5))){
var state_32855__$1 = state_32855;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32872_32933 = state_32855__$1;
(statearr_32872_32933[(1)] = (8));

} else {
var statearr_32873_32934 = state_32855__$1;
(statearr_32873_32934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32856 === (14))){
var inst_32835 = (state_32855[(11)]);
var inst_32833 = (state_32855[(8)]);
var inst_32833__$1 = (state_32855[(2)]);
var inst_32834 = (inst_32833__$1 == null);
var inst_32835__$1 = cljs.core.not.call(null,inst_32834);
var state_32855__$1 = (function (){var statearr_32874 = state_32855;
(statearr_32874[(11)] = inst_32835__$1);

(statearr_32874[(8)] = inst_32833__$1);

return statearr_32874;
})();
if(inst_32835__$1){
var statearr_32875_32935 = state_32855__$1;
(statearr_32875_32935[(1)] = (15));

} else {
var statearr_32876_32936 = state_32855__$1;
(statearr_32876_32936[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32856 === (16))){
var inst_32835 = (state_32855[(11)]);
var state_32855__$1 = state_32855;
var statearr_32877_32937 = state_32855__$1;
(statearr_32877_32937[(2)] = inst_32835);

(statearr_32877_32937[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32856 === (10))){
var inst_32827 = (state_32855[(2)]);
var state_32855__$1 = state_32855;
var statearr_32878_32938 = state_32855__$1;
(statearr_32878_32938[(2)] = inst_32827);

(statearr_32878_32938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32856 === (18))){
var inst_32838 = (state_32855[(2)]);
var state_32855__$1 = state_32855;
var statearr_32879_32939 = state_32855__$1;
(statearr_32879_32939[(2)] = inst_32838);

(statearr_32879_32939[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32856 === (8))){
var inst_32824 = cljs.core.async.close_BANG_.call(null,to);
var state_32855__$1 = state_32855;
var statearr_32880_32940 = state_32855__$1;
(statearr_32880_32940[(2)] = inst_32824);

(statearr_32880_32940[(1)] = (10));


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
});})(c__32563__auto__,jobs,results,process,async))
;
return ((function (switch__32475__auto__,c__32563__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____0 = (function (){
var statearr_32881 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32881[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__);

(statearr_32881[(1)] = (1));

return statearr_32881;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____1 = (function (state_32855){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_32855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e32882){if((e32882 instanceof Object)){
var ex__32479__auto__ = e32882;
var statearr_32883_32941 = state_32855;
(statearr_32883_32941[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32942 = state_32855;
state_32855 = G__32942;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__ = function(state_32855){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____1.call(this,state_32855);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32476__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto__,jobs,results,process,async))
})();
var state__32565__auto__ = (function (){var statearr_32884 = f__32564__auto__.call(null);
(statearr_32884[(6)] = c__32563__auto__);

return statearr_32884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto__,jobs,results,process,async))
);

return c__32563__auto__;
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
var G__32944 = arguments.length;
switch (G__32944) {
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
var G__32947 = arguments.length;
switch (G__32947) {
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
var G__32950 = arguments.length;
switch (G__32950) {
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
var c__32563__auto___32999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto___32999,tc,fc){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto___32999,tc,fc){
return (function (state_32976){
var state_val_32977 = (state_32976[(1)]);
if((state_val_32977 === (7))){
var inst_32972 = (state_32976[(2)]);
var state_32976__$1 = state_32976;
var statearr_32978_33000 = state_32976__$1;
(statearr_32978_33000[(2)] = inst_32972);

(statearr_32978_33000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32977 === (1))){
var state_32976__$1 = state_32976;
var statearr_32979_33001 = state_32976__$1;
(statearr_32979_33001[(2)] = null);

(statearr_32979_33001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32977 === (4))){
var inst_32953 = (state_32976[(7)]);
var inst_32953__$1 = (state_32976[(2)]);
var inst_32954 = (inst_32953__$1 == null);
var state_32976__$1 = (function (){var statearr_32980 = state_32976;
(statearr_32980[(7)] = inst_32953__$1);

return statearr_32980;
})();
if(cljs.core.truth_(inst_32954)){
var statearr_32981_33002 = state_32976__$1;
(statearr_32981_33002[(1)] = (5));

} else {
var statearr_32982_33003 = state_32976__$1;
(statearr_32982_33003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32977 === (13))){
var state_32976__$1 = state_32976;
var statearr_32983_33004 = state_32976__$1;
(statearr_32983_33004[(2)] = null);

(statearr_32983_33004[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32977 === (6))){
var inst_32953 = (state_32976[(7)]);
var inst_32959 = p.call(null,inst_32953);
var state_32976__$1 = state_32976;
if(cljs.core.truth_(inst_32959)){
var statearr_32984_33005 = state_32976__$1;
(statearr_32984_33005[(1)] = (9));

} else {
var statearr_32985_33006 = state_32976__$1;
(statearr_32985_33006[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32977 === (3))){
var inst_32974 = (state_32976[(2)]);
var state_32976__$1 = state_32976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32976__$1,inst_32974);
} else {
if((state_val_32977 === (12))){
var state_32976__$1 = state_32976;
var statearr_32986_33007 = state_32976__$1;
(statearr_32986_33007[(2)] = null);

(statearr_32986_33007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32977 === (2))){
var state_32976__$1 = state_32976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32976__$1,(4),ch);
} else {
if((state_val_32977 === (11))){
var inst_32953 = (state_32976[(7)]);
var inst_32963 = (state_32976[(2)]);
var state_32976__$1 = state_32976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32976__$1,(8),inst_32963,inst_32953);
} else {
if((state_val_32977 === (9))){
var state_32976__$1 = state_32976;
var statearr_32987_33008 = state_32976__$1;
(statearr_32987_33008[(2)] = tc);

(statearr_32987_33008[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32977 === (5))){
var inst_32956 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32957 = cljs.core.async.close_BANG_.call(null,fc);
var state_32976__$1 = (function (){var statearr_32988 = state_32976;
(statearr_32988[(8)] = inst_32956);

return statearr_32988;
})();
var statearr_32989_33009 = state_32976__$1;
(statearr_32989_33009[(2)] = inst_32957);

(statearr_32989_33009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32977 === (14))){
var inst_32970 = (state_32976[(2)]);
var state_32976__$1 = state_32976;
var statearr_32990_33010 = state_32976__$1;
(statearr_32990_33010[(2)] = inst_32970);

(statearr_32990_33010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32977 === (10))){
var state_32976__$1 = state_32976;
var statearr_32991_33011 = state_32976__$1;
(statearr_32991_33011[(2)] = fc);

(statearr_32991_33011[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32977 === (8))){
var inst_32965 = (state_32976[(2)]);
var state_32976__$1 = state_32976;
if(cljs.core.truth_(inst_32965)){
var statearr_32992_33012 = state_32976__$1;
(statearr_32992_33012[(1)] = (12));

} else {
var statearr_32993_33013 = state_32976__$1;
(statearr_32993_33013[(1)] = (13));

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
});})(c__32563__auto___32999,tc,fc))
;
return ((function (switch__32475__auto__,c__32563__auto___32999,tc,fc){
return (function() {
var cljs$core$async$state_machine__32476__auto__ = null;
var cljs$core$async$state_machine__32476__auto____0 = (function (){
var statearr_32994 = [null,null,null,null,null,null,null,null,null];
(statearr_32994[(0)] = cljs$core$async$state_machine__32476__auto__);

(statearr_32994[(1)] = (1));

return statearr_32994;
});
var cljs$core$async$state_machine__32476__auto____1 = (function (state_32976){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_32976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e32995){if((e32995 instanceof Object)){
var ex__32479__auto__ = e32995;
var statearr_32996_33014 = state_32976;
(statearr_32996_33014[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33015 = state_32976;
state_32976 = G__33015;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
cljs$core$async$state_machine__32476__auto__ = function(state_32976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32476__auto____1.call(this,state_32976);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32476__auto____0;
cljs$core$async$state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32476__auto____1;
return cljs$core$async$state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto___32999,tc,fc))
})();
var state__32565__auto__ = (function (){var statearr_32997 = f__32564__auto__.call(null);
(statearr_32997[(6)] = c__32563__auto___32999);

return statearr_32997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto___32999,tc,fc))
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
var c__32563__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto__){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto__){
return (function (state_33036){
var state_val_33037 = (state_33036[(1)]);
if((state_val_33037 === (7))){
var inst_33032 = (state_33036[(2)]);
var state_33036__$1 = state_33036;
var statearr_33038_33056 = state_33036__$1;
(statearr_33038_33056[(2)] = inst_33032);

(statearr_33038_33056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33037 === (1))){
var inst_33016 = init;
var state_33036__$1 = (function (){var statearr_33039 = state_33036;
(statearr_33039[(7)] = inst_33016);

return statearr_33039;
})();
var statearr_33040_33057 = state_33036__$1;
(statearr_33040_33057[(2)] = null);

(statearr_33040_33057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33037 === (4))){
var inst_33019 = (state_33036[(8)]);
var inst_33019__$1 = (state_33036[(2)]);
var inst_33020 = (inst_33019__$1 == null);
var state_33036__$1 = (function (){var statearr_33041 = state_33036;
(statearr_33041[(8)] = inst_33019__$1);

return statearr_33041;
})();
if(cljs.core.truth_(inst_33020)){
var statearr_33042_33058 = state_33036__$1;
(statearr_33042_33058[(1)] = (5));

} else {
var statearr_33043_33059 = state_33036__$1;
(statearr_33043_33059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33037 === (6))){
var inst_33019 = (state_33036[(8)]);
var inst_33016 = (state_33036[(7)]);
var inst_33023 = (state_33036[(9)]);
var inst_33023__$1 = f.call(null,inst_33016,inst_33019);
var inst_33024 = cljs.core.reduced_QMARK_.call(null,inst_33023__$1);
var state_33036__$1 = (function (){var statearr_33044 = state_33036;
(statearr_33044[(9)] = inst_33023__$1);

return statearr_33044;
})();
if(inst_33024){
var statearr_33045_33060 = state_33036__$1;
(statearr_33045_33060[(1)] = (8));

} else {
var statearr_33046_33061 = state_33036__$1;
(statearr_33046_33061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33037 === (3))){
var inst_33034 = (state_33036[(2)]);
var state_33036__$1 = state_33036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33036__$1,inst_33034);
} else {
if((state_val_33037 === (2))){
var state_33036__$1 = state_33036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33036__$1,(4),ch);
} else {
if((state_val_33037 === (9))){
var inst_33023 = (state_33036[(9)]);
var inst_33016 = inst_33023;
var state_33036__$1 = (function (){var statearr_33047 = state_33036;
(statearr_33047[(7)] = inst_33016);

return statearr_33047;
})();
var statearr_33048_33062 = state_33036__$1;
(statearr_33048_33062[(2)] = null);

(statearr_33048_33062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33037 === (5))){
var inst_33016 = (state_33036[(7)]);
var state_33036__$1 = state_33036;
var statearr_33049_33063 = state_33036__$1;
(statearr_33049_33063[(2)] = inst_33016);

(statearr_33049_33063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33037 === (10))){
var inst_33030 = (state_33036[(2)]);
var state_33036__$1 = state_33036;
var statearr_33050_33064 = state_33036__$1;
(statearr_33050_33064[(2)] = inst_33030);

(statearr_33050_33064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33037 === (8))){
var inst_33023 = (state_33036[(9)]);
var inst_33026 = cljs.core.deref.call(null,inst_33023);
var state_33036__$1 = state_33036;
var statearr_33051_33065 = state_33036__$1;
(statearr_33051_33065[(2)] = inst_33026);

(statearr_33051_33065[(1)] = (10));


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
});})(c__32563__auto__))
;
return ((function (switch__32475__auto__,c__32563__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32476__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32476__auto____0 = (function (){
var statearr_33052 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33052[(0)] = cljs$core$async$reduce_$_state_machine__32476__auto__);

(statearr_33052[(1)] = (1));

return statearr_33052;
});
var cljs$core$async$reduce_$_state_machine__32476__auto____1 = (function (state_33036){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_33036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e33053){if((e33053 instanceof Object)){
var ex__32479__auto__ = e33053;
var statearr_33054_33066 = state_33036;
(statearr_33054_33066[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33067 = state_33036;
state_33036 = G__33067;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32476__auto__ = function(state_33036){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32476__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32476__auto____1.call(this,state_33036);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32476__auto____0;
cljs$core$async$reduce_$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32476__auto____1;
return cljs$core$async$reduce_$_state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto__))
})();
var state__32565__auto__ = (function (){var statearr_33055 = f__32564__auto__.call(null);
(statearr_33055[(6)] = c__32563__auto__);

return statearr_33055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto__))
);

return c__32563__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32563__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto__,f__$1){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto__,f__$1){
return (function (state_33073){
var state_val_33074 = (state_33073[(1)]);
if((state_val_33074 === (1))){
var inst_33068 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33073__$1 = state_33073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33073__$1,(2),inst_33068);
} else {
if((state_val_33074 === (2))){
var inst_33070 = (state_33073[(2)]);
var inst_33071 = f__$1.call(null,inst_33070);
var state_33073__$1 = state_33073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33073__$1,inst_33071);
} else {
return null;
}
}
});})(c__32563__auto__,f__$1))
;
return ((function (switch__32475__auto__,c__32563__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32476__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32476__auto____0 = (function (){
var statearr_33075 = [null,null,null,null,null,null,null];
(statearr_33075[(0)] = cljs$core$async$transduce_$_state_machine__32476__auto__);

(statearr_33075[(1)] = (1));

return statearr_33075;
});
var cljs$core$async$transduce_$_state_machine__32476__auto____1 = (function (state_33073){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_33073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e33076){if((e33076 instanceof Object)){
var ex__32479__auto__ = e33076;
var statearr_33077_33079 = state_33073;
(statearr_33077_33079[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33080 = state_33073;
state_33073 = G__33080;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32476__auto__ = function(state_33073){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32476__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32476__auto____1.call(this,state_33073);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32476__auto____0;
cljs$core$async$transduce_$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32476__auto____1;
return cljs$core$async$transduce_$_state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto__,f__$1))
})();
var state__32565__auto__ = (function (){var statearr_33078 = f__32564__auto__.call(null);
(statearr_33078[(6)] = c__32563__auto__);

return statearr_33078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto__,f__$1))
);

return c__32563__auto__;
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
var G__33082 = arguments.length;
switch (G__33082) {
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
var c__32563__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto__){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto__){
return (function (state_33107){
var state_val_33108 = (state_33107[(1)]);
if((state_val_33108 === (7))){
var inst_33089 = (state_33107[(2)]);
var state_33107__$1 = state_33107;
var statearr_33109_33130 = state_33107__$1;
(statearr_33109_33130[(2)] = inst_33089);

(statearr_33109_33130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (1))){
var inst_33083 = cljs.core.seq.call(null,coll);
var inst_33084 = inst_33083;
var state_33107__$1 = (function (){var statearr_33110 = state_33107;
(statearr_33110[(7)] = inst_33084);

return statearr_33110;
})();
var statearr_33111_33131 = state_33107__$1;
(statearr_33111_33131[(2)] = null);

(statearr_33111_33131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (4))){
var inst_33084 = (state_33107[(7)]);
var inst_33087 = cljs.core.first.call(null,inst_33084);
var state_33107__$1 = state_33107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33107__$1,(7),ch,inst_33087);
} else {
if((state_val_33108 === (13))){
var inst_33101 = (state_33107[(2)]);
var state_33107__$1 = state_33107;
var statearr_33112_33132 = state_33107__$1;
(statearr_33112_33132[(2)] = inst_33101);

(statearr_33112_33132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (6))){
var inst_33092 = (state_33107[(2)]);
var state_33107__$1 = state_33107;
if(cljs.core.truth_(inst_33092)){
var statearr_33113_33133 = state_33107__$1;
(statearr_33113_33133[(1)] = (8));

} else {
var statearr_33114_33134 = state_33107__$1;
(statearr_33114_33134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (3))){
var inst_33105 = (state_33107[(2)]);
var state_33107__$1 = state_33107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33107__$1,inst_33105);
} else {
if((state_val_33108 === (12))){
var state_33107__$1 = state_33107;
var statearr_33115_33135 = state_33107__$1;
(statearr_33115_33135[(2)] = null);

(statearr_33115_33135[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (2))){
var inst_33084 = (state_33107[(7)]);
var state_33107__$1 = state_33107;
if(cljs.core.truth_(inst_33084)){
var statearr_33116_33136 = state_33107__$1;
(statearr_33116_33136[(1)] = (4));

} else {
var statearr_33117_33137 = state_33107__$1;
(statearr_33117_33137[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (11))){
var inst_33098 = cljs.core.async.close_BANG_.call(null,ch);
var state_33107__$1 = state_33107;
var statearr_33118_33138 = state_33107__$1;
(statearr_33118_33138[(2)] = inst_33098);

(statearr_33118_33138[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (9))){
var state_33107__$1 = state_33107;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33119_33139 = state_33107__$1;
(statearr_33119_33139[(1)] = (11));

} else {
var statearr_33120_33140 = state_33107__$1;
(statearr_33120_33140[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (5))){
var inst_33084 = (state_33107[(7)]);
var state_33107__$1 = state_33107;
var statearr_33121_33141 = state_33107__$1;
(statearr_33121_33141[(2)] = inst_33084);

(statearr_33121_33141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (10))){
var inst_33103 = (state_33107[(2)]);
var state_33107__$1 = state_33107;
var statearr_33122_33142 = state_33107__$1;
(statearr_33122_33142[(2)] = inst_33103);

(statearr_33122_33142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (8))){
var inst_33084 = (state_33107[(7)]);
var inst_33094 = cljs.core.next.call(null,inst_33084);
var inst_33084__$1 = inst_33094;
var state_33107__$1 = (function (){var statearr_33123 = state_33107;
(statearr_33123[(7)] = inst_33084__$1);

return statearr_33123;
})();
var statearr_33124_33143 = state_33107__$1;
(statearr_33124_33143[(2)] = null);

(statearr_33124_33143[(1)] = (2));


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
});})(c__32563__auto__))
;
return ((function (switch__32475__auto__,c__32563__auto__){
return (function() {
var cljs$core$async$state_machine__32476__auto__ = null;
var cljs$core$async$state_machine__32476__auto____0 = (function (){
var statearr_33125 = [null,null,null,null,null,null,null,null];
(statearr_33125[(0)] = cljs$core$async$state_machine__32476__auto__);

(statearr_33125[(1)] = (1));

return statearr_33125;
});
var cljs$core$async$state_machine__32476__auto____1 = (function (state_33107){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_33107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e33126){if((e33126 instanceof Object)){
var ex__32479__auto__ = e33126;
var statearr_33127_33144 = state_33107;
(statearr_33127_33144[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33145 = state_33107;
state_33107 = G__33145;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
cljs$core$async$state_machine__32476__auto__ = function(state_33107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32476__auto____1.call(this,state_33107);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32476__auto____0;
cljs$core$async$state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32476__auto____1;
return cljs$core$async$state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto__))
})();
var state__32565__auto__ = (function (){var statearr_33128 = f__32564__auto__.call(null);
(statearr_33128[(6)] = c__32563__auto__);

return statearr_33128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto__))
);

return c__32563__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async33146 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33146 = (function (ch,cs,meta33147){
this.ch = ch;
this.cs = cs;
this.meta33147 = meta33147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33148,meta33147__$1){
var self__ = this;
var _33148__$1 = this;
return (new cljs.core.async.t_cljs$core$async33146(self__.ch,self__.cs,meta33147__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33146.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33148){
var self__ = this;
var _33148__$1 = this;
return self__.meta33147;
});})(cs))
;

cljs.core.async.t_cljs$core$async33146.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33146.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33146.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33146.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33146.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33146.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33146.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33147","meta33147",1715278262,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33146.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33146";

cljs.core.async.t_cljs$core$async33146.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async33146");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33146 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33146(ch__$1,cs__$1,meta33147){
return (new cljs.core.async.t_cljs$core$async33146(ch__$1,cs__$1,meta33147));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33146(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32563__auto___33368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto___33368,cs,m,dchan,dctr,done){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto___33368,cs,m,dchan,dctr,done){
return (function (state_33283){
var state_val_33284 = (state_33283[(1)]);
if((state_val_33284 === (7))){
var inst_33279 = (state_33283[(2)]);
var state_33283__$1 = state_33283;
var statearr_33285_33369 = state_33283__$1;
(statearr_33285_33369[(2)] = inst_33279);

(statearr_33285_33369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (20))){
var inst_33182 = (state_33283[(7)]);
var inst_33194 = cljs.core.first.call(null,inst_33182);
var inst_33195 = cljs.core.nth.call(null,inst_33194,(0),null);
var inst_33196 = cljs.core.nth.call(null,inst_33194,(1),null);
var state_33283__$1 = (function (){var statearr_33286 = state_33283;
(statearr_33286[(8)] = inst_33195);

return statearr_33286;
})();
if(cljs.core.truth_(inst_33196)){
var statearr_33287_33370 = state_33283__$1;
(statearr_33287_33370[(1)] = (22));

} else {
var statearr_33288_33371 = state_33283__$1;
(statearr_33288_33371[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (27))){
var inst_33224 = (state_33283[(9)]);
var inst_33226 = (state_33283[(10)]);
var inst_33231 = (state_33283[(11)]);
var inst_33151 = (state_33283[(12)]);
var inst_33231__$1 = cljs.core._nth.call(null,inst_33224,inst_33226);
var inst_33232 = cljs.core.async.put_BANG_.call(null,inst_33231__$1,inst_33151,done);
var state_33283__$1 = (function (){var statearr_33289 = state_33283;
(statearr_33289[(11)] = inst_33231__$1);

return statearr_33289;
})();
if(cljs.core.truth_(inst_33232)){
var statearr_33290_33372 = state_33283__$1;
(statearr_33290_33372[(1)] = (30));

} else {
var statearr_33291_33373 = state_33283__$1;
(statearr_33291_33373[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (1))){
var state_33283__$1 = state_33283;
var statearr_33292_33374 = state_33283__$1;
(statearr_33292_33374[(2)] = null);

(statearr_33292_33374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (24))){
var inst_33182 = (state_33283[(7)]);
var inst_33201 = (state_33283[(2)]);
var inst_33202 = cljs.core.next.call(null,inst_33182);
var inst_33160 = inst_33202;
var inst_33161 = null;
var inst_33162 = (0);
var inst_33163 = (0);
var state_33283__$1 = (function (){var statearr_33293 = state_33283;
(statearr_33293[(13)] = inst_33201);

(statearr_33293[(14)] = inst_33160);

(statearr_33293[(15)] = inst_33163);

(statearr_33293[(16)] = inst_33162);

(statearr_33293[(17)] = inst_33161);

return statearr_33293;
})();
var statearr_33294_33375 = state_33283__$1;
(statearr_33294_33375[(2)] = null);

(statearr_33294_33375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (39))){
var state_33283__$1 = state_33283;
var statearr_33298_33376 = state_33283__$1;
(statearr_33298_33376[(2)] = null);

(statearr_33298_33376[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (4))){
var inst_33151 = (state_33283[(12)]);
var inst_33151__$1 = (state_33283[(2)]);
var inst_33152 = (inst_33151__$1 == null);
var state_33283__$1 = (function (){var statearr_33299 = state_33283;
(statearr_33299[(12)] = inst_33151__$1);

return statearr_33299;
})();
if(cljs.core.truth_(inst_33152)){
var statearr_33300_33377 = state_33283__$1;
(statearr_33300_33377[(1)] = (5));

} else {
var statearr_33301_33378 = state_33283__$1;
(statearr_33301_33378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (15))){
var inst_33160 = (state_33283[(14)]);
var inst_33163 = (state_33283[(15)]);
var inst_33162 = (state_33283[(16)]);
var inst_33161 = (state_33283[(17)]);
var inst_33178 = (state_33283[(2)]);
var inst_33179 = (inst_33163 + (1));
var tmp33295 = inst_33160;
var tmp33296 = inst_33162;
var tmp33297 = inst_33161;
var inst_33160__$1 = tmp33295;
var inst_33161__$1 = tmp33297;
var inst_33162__$1 = tmp33296;
var inst_33163__$1 = inst_33179;
var state_33283__$1 = (function (){var statearr_33302 = state_33283;
(statearr_33302[(18)] = inst_33178);

(statearr_33302[(14)] = inst_33160__$1);

(statearr_33302[(15)] = inst_33163__$1);

(statearr_33302[(16)] = inst_33162__$1);

(statearr_33302[(17)] = inst_33161__$1);

return statearr_33302;
})();
var statearr_33303_33379 = state_33283__$1;
(statearr_33303_33379[(2)] = null);

(statearr_33303_33379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (21))){
var inst_33205 = (state_33283[(2)]);
var state_33283__$1 = state_33283;
var statearr_33307_33380 = state_33283__$1;
(statearr_33307_33380[(2)] = inst_33205);

(statearr_33307_33380[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (31))){
var inst_33231 = (state_33283[(11)]);
var inst_33235 = done.call(null,null);
var inst_33236 = cljs.core.async.untap_STAR_.call(null,m,inst_33231);
var state_33283__$1 = (function (){var statearr_33308 = state_33283;
(statearr_33308[(19)] = inst_33235);

return statearr_33308;
})();
var statearr_33309_33381 = state_33283__$1;
(statearr_33309_33381[(2)] = inst_33236);

(statearr_33309_33381[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (32))){
var inst_33225 = (state_33283[(20)]);
var inst_33224 = (state_33283[(9)]);
var inst_33226 = (state_33283[(10)]);
var inst_33223 = (state_33283[(21)]);
var inst_33238 = (state_33283[(2)]);
var inst_33239 = (inst_33226 + (1));
var tmp33304 = inst_33225;
var tmp33305 = inst_33224;
var tmp33306 = inst_33223;
var inst_33223__$1 = tmp33306;
var inst_33224__$1 = tmp33305;
var inst_33225__$1 = tmp33304;
var inst_33226__$1 = inst_33239;
var state_33283__$1 = (function (){var statearr_33310 = state_33283;
(statearr_33310[(20)] = inst_33225__$1);

(statearr_33310[(9)] = inst_33224__$1);

(statearr_33310[(10)] = inst_33226__$1);

(statearr_33310[(21)] = inst_33223__$1);

(statearr_33310[(22)] = inst_33238);

return statearr_33310;
})();
var statearr_33311_33382 = state_33283__$1;
(statearr_33311_33382[(2)] = null);

(statearr_33311_33382[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (40))){
var inst_33251 = (state_33283[(23)]);
var inst_33255 = done.call(null,null);
var inst_33256 = cljs.core.async.untap_STAR_.call(null,m,inst_33251);
var state_33283__$1 = (function (){var statearr_33312 = state_33283;
(statearr_33312[(24)] = inst_33255);

return statearr_33312;
})();
var statearr_33313_33383 = state_33283__$1;
(statearr_33313_33383[(2)] = inst_33256);

(statearr_33313_33383[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (33))){
var inst_33242 = (state_33283[(25)]);
var inst_33244 = cljs.core.chunked_seq_QMARK_.call(null,inst_33242);
var state_33283__$1 = state_33283;
if(inst_33244){
var statearr_33314_33384 = state_33283__$1;
(statearr_33314_33384[(1)] = (36));

} else {
var statearr_33315_33385 = state_33283__$1;
(statearr_33315_33385[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (13))){
var inst_33172 = (state_33283[(26)]);
var inst_33175 = cljs.core.async.close_BANG_.call(null,inst_33172);
var state_33283__$1 = state_33283;
var statearr_33316_33386 = state_33283__$1;
(statearr_33316_33386[(2)] = inst_33175);

(statearr_33316_33386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (22))){
var inst_33195 = (state_33283[(8)]);
var inst_33198 = cljs.core.async.close_BANG_.call(null,inst_33195);
var state_33283__$1 = state_33283;
var statearr_33317_33387 = state_33283__$1;
(statearr_33317_33387[(2)] = inst_33198);

(statearr_33317_33387[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (36))){
var inst_33242 = (state_33283[(25)]);
var inst_33246 = cljs.core.chunk_first.call(null,inst_33242);
var inst_33247 = cljs.core.chunk_rest.call(null,inst_33242);
var inst_33248 = cljs.core.count.call(null,inst_33246);
var inst_33223 = inst_33247;
var inst_33224 = inst_33246;
var inst_33225 = inst_33248;
var inst_33226 = (0);
var state_33283__$1 = (function (){var statearr_33318 = state_33283;
(statearr_33318[(20)] = inst_33225);

(statearr_33318[(9)] = inst_33224);

(statearr_33318[(10)] = inst_33226);

(statearr_33318[(21)] = inst_33223);

return statearr_33318;
})();
var statearr_33319_33388 = state_33283__$1;
(statearr_33319_33388[(2)] = null);

(statearr_33319_33388[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (41))){
var inst_33242 = (state_33283[(25)]);
var inst_33258 = (state_33283[(2)]);
var inst_33259 = cljs.core.next.call(null,inst_33242);
var inst_33223 = inst_33259;
var inst_33224 = null;
var inst_33225 = (0);
var inst_33226 = (0);
var state_33283__$1 = (function (){var statearr_33320 = state_33283;
(statearr_33320[(20)] = inst_33225);

(statearr_33320[(9)] = inst_33224);

(statearr_33320[(10)] = inst_33226);

(statearr_33320[(21)] = inst_33223);

(statearr_33320[(27)] = inst_33258);

return statearr_33320;
})();
var statearr_33321_33389 = state_33283__$1;
(statearr_33321_33389[(2)] = null);

(statearr_33321_33389[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (43))){
var state_33283__$1 = state_33283;
var statearr_33322_33390 = state_33283__$1;
(statearr_33322_33390[(2)] = null);

(statearr_33322_33390[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (29))){
var inst_33267 = (state_33283[(2)]);
var state_33283__$1 = state_33283;
var statearr_33323_33391 = state_33283__$1;
(statearr_33323_33391[(2)] = inst_33267);

(statearr_33323_33391[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (44))){
var inst_33276 = (state_33283[(2)]);
var state_33283__$1 = (function (){var statearr_33324 = state_33283;
(statearr_33324[(28)] = inst_33276);

return statearr_33324;
})();
var statearr_33325_33392 = state_33283__$1;
(statearr_33325_33392[(2)] = null);

(statearr_33325_33392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (6))){
var inst_33215 = (state_33283[(29)]);
var inst_33214 = cljs.core.deref.call(null,cs);
var inst_33215__$1 = cljs.core.keys.call(null,inst_33214);
var inst_33216 = cljs.core.count.call(null,inst_33215__$1);
var inst_33217 = cljs.core.reset_BANG_.call(null,dctr,inst_33216);
var inst_33222 = cljs.core.seq.call(null,inst_33215__$1);
var inst_33223 = inst_33222;
var inst_33224 = null;
var inst_33225 = (0);
var inst_33226 = (0);
var state_33283__$1 = (function (){var statearr_33326 = state_33283;
(statearr_33326[(20)] = inst_33225);

(statearr_33326[(9)] = inst_33224);

(statearr_33326[(29)] = inst_33215__$1);

(statearr_33326[(30)] = inst_33217);

(statearr_33326[(10)] = inst_33226);

(statearr_33326[(21)] = inst_33223);

return statearr_33326;
})();
var statearr_33327_33393 = state_33283__$1;
(statearr_33327_33393[(2)] = null);

(statearr_33327_33393[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (28))){
var inst_33223 = (state_33283[(21)]);
var inst_33242 = (state_33283[(25)]);
var inst_33242__$1 = cljs.core.seq.call(null,inst_33223);
var state_33283__$1 = (function (){var statearr_33328 = state_33283;
(statearr_33328[(25)] = inst_33242__$1);

return statearr_33328;
})();
if(inst_33242__$1){
var statearr_33329_33394 = state_33283__$1;
(statearr_33329_33394[(1)] = (33));

} else {
var statearr_33330_33395 = state_33283__$1;
(statearr_33330_33395[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (25))){
var inst_33225 = (state_33283[(20)]);
var inst_33226 = (state_33283[(10)]);
var inst_33228 = (inst_33226 < inst_33225);
var inst_33229 = inst_33228;
var state_33283__$1 = state_33283;
if(cljs.core.truth_(inst_33229)){
var statearr_33331_33396 = state_33283__$1;
(statearr_33331_33396[(1)] = (27));

} else {
var statearr_33332_33397 = state_33283__$1;
(statearr_33332_33397[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (34))){
var state_33283__$1 = state_33283;
var statearr_33333_33398 = state_33283__$1;
(statearr_33333_33398[(2)] = null);

(statearr_33333_33398[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (17))){
var state_33283__$1 = state_33283;
var statearr_33334_33399 = state_33283__$1;
(statearr_33334_33399[(2)] = null);

(statearr_33334_33399[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (3))){
var inst_33281 = (state_33283[(2)]);
var state_33283__$1 = state_33283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33283__$1,inst_33281);
} else {
if((state_val_33284 === (12))){
var inst_33210 = (state_33283[(2)]);
var state_33283__$1 = state_33283;
var statearr_33335_33400 = state_33283__$1;
(statearr_33335_33400[(2)] = inst_33210);

(statearr_33335_33400[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (2))){
var state_33283__$1 = state_33283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33283__$1,(4),ch);
} else {
if((state_val_33284 === (23))){
var state_33283__$1 = state_33283;
var statearr_33336_33401 = state_33283__$1;
(statearr_33336_33401[(2)] = null);

(statearr_33336_33401[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (35))){
var inst_33265 = (state_33283[(2)]);
var state_33283__$1 = state_33283;
var statearr_33337_33402 = state_33283__$1;
(statearr_33337_33402[(2)] = inst_33265);

(statearr_33337_33402[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (19))){
var inst_33182 = (state_33283[(7)]);
var inst_33186 = cljs.core.chunk_first.call(null,inst_33182);
var inst_33187 = cljs.core.chunk_rest.call(null,inst_33182);
var inst_33188 = cljs.core.count.call(null,inst_33186);
var inst_33160 = inst_33187;
var inst_33161 = inst_33186;
var inst_33162 = inst_33188;
var inst_33163 = (0);
var state_33283__$1 = (function (){var statearr_33338 = state_33283;
(statearr_33338[(14)] = inst_33160);

(statearr_33338[(15)] = inst_33163);

(statearr_33338[(16)] = inst_33162);

(statearr_33338[(17)] = inst_33161);

return statearr_33338;
})();
var statearr_33339_33403 = state_33283__$1;
(statearr_33339_33403[(2)] = null);

(statearr_33339_33403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (11))){
var inst_33182 = (state_33283[(7)]);
var inst_33160 = (state_33283[(14)]);
var inst_33182__$1 = cljs.core.seq.call(null,inst_33160);
var state_33283__$1 = (function (){var statearr_33340 = state_33283;
(statearr_33340[(7)] = inst_33182__$1);

return statearr_33340;
})();
if(inst_33182__$1){
var statearr_33341_33404 = state_33283__$1;
(statearr_33341_33404[(1)] = (16));

} else {
var statearr_33342_33405 = state_33283__$1;
(statearr_33342_33405[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (9))){
var inst_33212 = (state_33283[(2)]);
var state_33283__$1 = state_33283;
var statearr_33343_33406 = state_33283__$1;
(statearr_33343_33406[(2)] = inst_33212);

(statearr_33343_33406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (5))){
var inst_33158 = cljs.core.deref.call(null,cs);
var inst_33159 = cljs.core.seq.call(null,inst_33158);
var inst_33160 = inst_33159;
var inst_33161 = null;
var inst_33162 = (0);
var inst_33163 = (0);
var state_33283__$1 = (function (){var statearr_33344 = state_33283;
(statearr_33344[(14)] = inst_33160);

(statearr_33344[(15)] = inst_33163);

(statearr_33344[(16)] = inst_33162);

(statearr_33344[(17)] = inst_33161);

return statearr_33344;
})();
var statearr_33345_33407 = state_33283__$1;
(statearr_33345_33407[(2)] = null);

(statearr_33345_33407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (14))){
var state_33283__$1 = state_33283;
var statearr_33346_33408 = state_33283__$1;
(statearr_33346_33408[(2)] = null);

(statearr_33346_33408[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (45))){
var inst_33273 = (state_33283[(2)]);
var state_33283__$1 = state_33283;
var statearr_33347_33409 = state_33283__$1;
(statearr_33347_33409[(2)] = inst_33273);

(statearr_33347_33409[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (26))){
var inst_33215 = (state_33283[(29)]);
var inst_33269 = (state_33283[(2)]);
var inst_33270 = cljs.core.seq.call(null,inst_33215);
var state_33283__$1 = (function (){var statearr_33348 = state_33283;
(statearr_33348[(31)] = inst_33269);

return statearr_33348;
})();
if(inst_33270){
var statearr_33349_33410 = state_33283__$1;
(statearr_33349_33410[(1)] = (42));

} else {
var statearr_33350_33411 = state_33283__$1;
(statearr_33350_33411[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (16))){
var inst_33182 = (state_33283[(7)]);
var inst_33184 = cljs.core.chunked_seq_QMARK_.call(null,inst_33182);
var state_33283__$1 = state_33283;
if(inst_33184){
var statearr_33351_33412 = state_33283__$1;
(statearr_33351_33412[(1)] = (19));

} else {
var statearr_33352_33413 = state_33283__$1;
(statearr_33352_33413[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (38))){
var inst_33262 = (state_33283[(2)]);
var state_33283__$1 = state_33283;
var statearr_33353_33414 = state_33283__$1;
(statearr_33353_33414[(2)] = inst_33262);

(statearr_33353_33414[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (30))){
var state_33283__$1 = state_33283;
var statearr_33354_33415 = state_33283__$1;
(statearr_33354_33415[(2)] = null);

(statearr_33354_33415[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (10))){
var inst_33163 = (state_33283[(15)]);
var inst_33161 = (state_33283[(17)]);
var inst_33171 = cljs.core._nth.call(null,inst_33161,inst_33163);
var inst_33172 = cljs.core.nth.call(null,inst_33171,(0),null);
var inst_33173 = cljs.core.nth.call(null,inst_33171,(1),null);
var state_33283__$1 = (function (){var statearr_33355 = state_33283;
(statearr_33355[(26)] = inst_33172);

return statearr_33355;
})();
if(cljs.core.truth_(inst_33173)){
var statearr_33356_33416 = state_33283__$1;
(statearr_33356_33416[(1)] = (13));

} else {
var statearr_33357_33417 = state_33283__$1;
(statearr_33357_33417[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (18))){
var inst_33208 = (state_33283[(2)]);
var state_33283__$1 = state_33283;
var statearr_33358_33418 = state_33283__$1;
(statearr_33358_33418[(2)] = inst_33208);

(statearr_33358_33418[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (42))){
var state_33283__$1 = state_33283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33283__$1,(45),dchan);
} else {
if((state_val_33284 === (37))){
var inst_33251 = (state_33283[(23)]);
var inst_33151 = (state_33283[(12)]);
var inst_33242 = (state_33283[(25)]);
var inst_33251__$1 = cljs.core.first.call(null,inst_33242);
var inst_33252 = cljs.core.async.put_BANG_.call(null,inst_33251__$1,inst_33151,done);
var state_33283__$1 = (function (){var statearr_33359 = state_33283;
(statearr_33359[(23)] = inst_33251__$1);

return statearr_33359;
})();
if(cljs.core.truth_(inst_33252)){
var statearr_33360_33419 = state_33283__$1;
(statearr_33360_33419[(1)] = (39));

} else {
var statearr_33361_33420 = state_33283__$1;
(statearr_33361_33420[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (8))){
var inst_33163 = (state_33283[(15)]);
var inst_33162 = (state_33283[(16)]);
var inst_33165 = (inst_33163 < inst_33162);
var inst_33166 = inst_33165;
var state_33283__$1 = state_33283;
if(cljs.core.truth_(inst_33166)){
var statearr_33362_33421 = state_33283__$1;
(statearr_33362_33421[(1)] = (10));

} else {
var statearr_33363_33422 = state_33283__$1;
(statearr_33363_33422[(1)] = (11));

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
});})(c__32563__auto___33368,cs,m,dchan,dctr,done))
;
return ((function (switch__32475__auto__,c__32563__auto___33368,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32476__auto__ = null;
var cljs$core$async$mult_$_state_machine__32476__auto____0 = (function (){
var statearr_33364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33364[(0)] = cljs$core$async$mult_$_state_machine__32476__auto__);

(statearr_33364[(1)] = (1));

return statearr_33364;
});
var cljs$core$async$mult_$_state_machine__32476__auto____1 = (function (state_33283){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_33283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e33365){if((e33365 instanceof Object)){
var ex__32479__auto__ = e33365;
var statearr_33366_33423 = state_33283;
(statearr_33366_33423[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33424 = state_33283;
state_33283 = G__33424;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32476__auto__ = function(state_33283){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32476__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32476__auto____1.call(this,state_33283);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32476__auto____0;
cljs$core$async$mult_$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32476__auto____1;
return cljs$core$async$mult_$_state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto___33368,cs,m,dchan,dctr,done))
})();
var state__32565__auto__ = (function (){var statearr_33367 = f__32564__auto__.call(null);
(statearr_33367[(6)] = c__32563__auto___33368);

return statearr_33367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto___33368,cs,m,dchan,dctr,done))
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
var G__33426 = arguments.length;
switch (G__33426) {
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
var len__29455__auto___33438 = arguments.length;
var i__29456__auto___33439 = (0);
while(true){
if((i__29456__auto___33439 < len__29455__auto___33438)){
args__29462__auto__.push((arguments[i__29456__auto___33439]));

var G__33440 = (i__29456__auto___33439 + (1));
i__29456__auto___33439 = G__33440;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((3) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29463__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33432){
var map__33433 = p__33432;
var map__33433__$1 = ((((!((map__33433 == null)))?((((map__33433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33433.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33433):map__33433);
var opts = map__33433__$1;
var statearr_33435_33441 = state;
(statearr_33435_33441[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__33433,map__33433__$1,opts){
return (function (val){
var statearr_33436_33442 = state;
(statearr_33436_33442[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33433,map__33433__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_33437_33443 = state;
(statearr_33437_33443[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33428){
var G__33429 = cljs.core.first.call(null,seq33428);
var seq33428__$1 = cljs.core.next.call(null,seq33428);
var G__33430 = cljs.core.first.call(null,seq33428__$1);
var seq33428__$2 = cljs.core.next.call(null,seq33428__$1);
var G__33431 = cljs.core.first.call(null,seq33428__$2);
var seq33428__$3 = cljs.core.next.call(null,seq33428__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33429,G__33430,G__33431,seq33428__$3);
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
if(typeof cljs.core.async.t_cljs$core$async33444 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33444 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta33445){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta33445 = meta33445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33446,meta33445__$1){
var self__ = this;
var _33446__$1 = this;
return (new cljs.core.async.t_cljs$core$async33444(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta33445__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33444.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33446){
var self__ = this;
var _33446__$1 = this;
return self__.meta33445;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33444.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33444.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33444.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33444.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33444.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33444.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33444.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33444.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async33444.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta33445","meta33445",2006734188,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33444.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33444.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33444";

cljs.core.async.t_cljs$core$async33444.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async33444");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33444 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33444(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33445){
return (new cljs.core.async.t_cljs$core$async33444(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33445));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33444(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32563__auto___33608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto___33608,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto___33608,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33548){
var state_val_33549 = (state_33548[(1)]);
if((state_val_33549 === (7))){
var inst_33463 = (state_33548[(2)]);
var state_33548__$1 = state_33548;
var statearr_33550_33609 = state_33548__$1;
(statearr_33550_33609[(2)] = inst_33463);

(statearr_33550_33609[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (20))){
var inst_33475 = (state_33548[(7)]);
var state_33548__$1 = state_33548;
var statearr_33551_33610 = state_33548__$1;
(statearr_33551_33610[(2)] = inst_33475);

(statearr_33551_33610[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (27))){
var state_33548__$1 = state_33548;
var statearr_33552_33611 = state_33548__$1;
(statearr_33552_33611[(2)] = null);

(statearr_33552_33611[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (1))){
var inst_33450 = (state_33548[(8)]);
var inst_33450__$1 = calc_state.call(null);
var inst_33452 = (inst_33450__$1 == null);
var inst_33453 = cljs.core.not.call(null,inst_33452);
var state_33548__$1 = (function (){var statearr_33553 = state_33548;
(statearr_33553[(8)] = inst_33450__$1);

return statearr_33553;
})();
if(inst_33453){
var statearr_33554_33612 = state_33548__$1;
(statearr_33554_33612[(1)] = (2));

} else {
var statearr_33555_33613 = state_33548__$1;
(statearr_33555_33613[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (24))){
var inst_33508 = (state_33548[(9)]);
var inst_33499 = (state_33548[(10)]);
var inst_33522 = (state_33548[(11)]);
var inst_33522__$1 = inst_33499.call(null,inst_33508);
var state_33548__$1 = (function (){var statearr_33556 = state_33548;
(statearr_33556[(11)] = inst_33522__$1);

return statearr_33556;
})();
if(cljs.core.truth_(inst_33522__$1)){
var statearr_33557_33614 = state_33548__$1;
(statearr_33557_33614[(1)] = (29));

} else {
var statearr_33558_33615 = state_33548__$1;
(statearr_33558_33615[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (4))){
var inst_33466 = (state_33548[(2)]);
var state_33548__$1 = state_33548;
if(cljs.core.truth_(inst_33466)){
var statearr_33559_33616 = state_33548__$1;
(statearr_33559_33616[(1)] = (8));

} else {
var statearr_33560_33617 = state_33548__$1;
(statearr_33560_33617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (15))){
var inst_33493 = (state_33548[(2)]);
var state_33548__$1 = state_33548;
if(cljs.core.truth_(inst_33493)){
var statearr_33561_33618 = state_33548__$1;
(statearr_33561_33618[(1)] = (19));

} else {
var statearr_33562_33619 = state_33548__$1;
(statearr_33562_33619[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (21))){
var inst_33498 = (state_33548[(12)]);
var inst_33498__$1 = (state_33548[(2)]);
var inst_33499 = cljs.core.get.call(null,inst_33498__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33500 = cljs.core.get.call(null,inst_33498__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33501 = cljs.core.get.call(null,inst_33498__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33548__$1 = (function (){var statearr_33563 = state_33548;
(statearr_33563[(13)] = inst_33500);

(statearr_33563[(10)] = inst_33499);

(statearr_33563[(12)] = inst_33498__$1);

return statearr_33563;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33548__$1,(22),inst_33501);
} else {
if((state_val_33549 === (31))){
var inst_33530 = (state_33548[(2)]);
var state_33548__$1 = state_33548;
if(cljs.core.truth_(inst_33530)){
var statearr_33564_33620 = state_33548__$1;
(statearr_33564_33620[(1)] = (32));

} else {
var statearr_33565_33621 = state_33548__$1;
(statearr_33565_33621[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (32))){
var inst_33507 = (state_33548[(14)]);
var state_33548__$1 = state_33548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33548__$1,(35),out,inst_33507);
} else {
if((state_val_33549 === (33))){
var inst_33498 = (state_33548[(12)]);
var inst_33475 = inst_33498;
var state_33548__$1 = (function (){var statearr_33566 = state_33548;
(statearr_33566[(7)] = inst_33475);

return statearr_33566;
})();
var statearr_33567_33622 = state_33548__$1;
(statearr_33567_33622[(2)] = null);

(statearr_33567_33622[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (13))){
var inst_33475 = (state_33548[(7)]);
var inst_33482 = inst_33475.cljs$lang$protocol_mask$partition0$;
var inst_33483 = (inst_33482 & (64));
var inst_33484 = inst_33475.cljs$core$ISeq$;
var inst_33485 = (cljs.core.PROTOCOL_SENTINEL === inst_33484);
var inst_33486 = (inst_33483) || (inst_33485);
var state_33548__$1 = state_33548;
if(cljs.core.truth_(inst_33486)){
var statearr_33568_33623 = state_33548__$1;
(statearr_33568_33623[(1)] = (16));

} else {
var statearr_33569_33624 = state_33548__$1;
(statearr_33569_33624[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (22))){
var inst_33507 = (state_33548[(14)]);
var inst_33508 = (state_33548[(9)]);
var inst_33506 = (state_33548[(2)]);
var inst_33507__$1 = cljs.core.nth.call(null,inst_33506,(0),null);
var inst_33508__$1 = cljs.core.nth.call(null,inst_33506,(1),null);
var inst_33509 = (inst_33507__$1 == null);
var inst_33510 = cljs.core._EQ_.call(null,inst_33508__$1,change);
var inst_33511 = (inst_33509) || (inst_33510);
var state_33548__$1 = (function (){var statearr_33570 = state_33548;
(statearr_33570[(14)] = inst_33507__$1);

(statearr_33570[(9)] = inst_33508__$1);

return statearr_33570;
})();
if(cljs.core.truth_(inst_33511)){
var statearr_33571_33625 = state_33548__$1;
(statearr_33571_33625[(1)] = (23));

} else {
var statearr_33572_33626 = state_33548__$1;
(statearr_33572_33626[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (36))){
var inst_33498 = (state_33548[(12)]);
var inst_33475 = inst_33498;
var state_33548__$1 = (function (){var statearr_33573 = state_33548;
(statearr_33573[(7)] = inst_33475);

return statearr_33573;
})();
var statearr_33574_33627 = state_33548__$1;
(statearr_33574_33627[(2)] = null);

(statearr_33574_33627[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (29))){
var inst_33522 = (state_33548[(11)]);
var state_33548__$1 = state_33548;
var statearr_33575_33628 = state_33548__$1;
(statearr_33575_33628[(2)] = inst_33522);

(statearr_33575_33628[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (6))){
var state_33548__$1 = state_33548;
var statearr_33576_33629 = state_33548__$1;
(statearr_33576_33629[(2)] = false);

(statearr_33576_33629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (28))){
var inst_33518 = (state_33548[(2)]);
var inst_33519 = calc_state.call(null);
var inst_33475 = inst_33519;
var state_33548__$1 = (function (){var statearr_33577 = state_33548;
(statearr_33577[(15)] = inst_33518);

(statearr_33577[(7)] = inst_33475);

return statearr_33577;
})();
var statearr_33578_33630 = state_33548__$1;
(statearr_33578_33630[(2)] = null);

(statearr_33578_33630[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (25))){
var inst_33544 = (state_33548[(2)]);
var state_33548__$1 = state_33548;
var statearr_33579_33631 = state_33548__$1;
(statearr_33579_33631[(2)] = inst_33544);

(statearr_33579_33631[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (34))){
var inst_33542 = (state_33548[(2)]);
var state_33548__$1 = state_33548;
var statearr_33580_33632 = state_33548__$1;
(statearr_33580_33632[(2)] = inst_33542);

(statearr_33580_33632[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (17))){
var state_33548__$1 = state_33548;
var statearr_33581_33633 = state_33548__$1;
(statearr_33581_33633[(2)] = false);

(statearr_33581_33633[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (3))){
var state_33548__$1 = state_33548;
var statearr_33582_33634 = state_33548__$1;
(statearr_33582_33634[(2)] = false);

(statearr_33582_33634[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (12))){
var inst_33546 = (state_33548[(2)]);
var state_33548__$1 = state_33548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33548__$1,inst_33546);
} else {
if((state_val_33549 === (2))){
var inst_33450 = (state_33548[(8)]);
var inst_33455 = inst_33450.cljs$lang$protocol_mask$partition0$;
var inst_33456 = (inst_33455 & (64));
var inst_33457 = inst_33450.cljs$core$ISeq$;
var inst_33458 = (cljs.core.PROTOCOL_SENTINEL === inst_33457);
var inst_33459 = (inst_33456) || (inst_33458);
var state_33548__$1 = state_33548;
if(cljs.core.truth_(inst_33459)){
var statearr_33583_33635 = state_33548__$1;
(statearr_33583_33635[(1)] = (5));

} else {
var statearr_33584_33636 = state_33548__$1;
(statearr_33584_33636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (23))){
var inst_33507 = (state_33548[(14)]);
var inst_33513 = (inst_33507 == null);
var state_33548__$1 = state_33548;
if(cljs.core.truth_(inst_33513)){
var statearr_33585_33637 = state_33548__$1;
(statearr_33585_33637[(1)] = (26));

} else {
var statearr_33586_33638 = state_33548__$1;
(statearr_33586_33638[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (35))){
var inst_33533 = (state_33548[(2)]);
var state_33548__$1 = state_33548;
if(cljs.core.truth_(inst_33533)){
var statearr_33587_33639 = state_33548__$1;
(statearr_33587_33639[(1)] = (36));

} else {
var statearr_33588_33640 = state_33548__$1;
(statearr_33588_33640[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (19))){
var inst_33475 = (state_33548[(7)]);
var inst_33495 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33475);
var state_33548__$1 = state_33548;
var statearr_33589_33641 = state_33548__$1;
(statearr_33589_33641[(2)] = inst_33495);

(statearr_33589_33641[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (11))){
var inst_33475 = (state_33548[(7)]);
var inst_33479 = (inst_33475 == null);
var inst_33480 = cljs.core.not.call(null,inst_33479);
var state_33548__$1 = state_33548;
if(inst_33480){
var statearr_33590_33642 = state_33548__$1;
(statearr_33590_33642[(1)] = (13));

} else {
var statearr_33591_33643 = state_33548__$1;
(statearr_33591_33643[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (9))){
var inst_33450 = (state_33548[(8)]);
var state_33548__$1 = state_33548;
var statearr_33592_33644 = state_33548__$1;
(statearr_33592_33644[(2)] = inst_33450);

(statearr_33592_33644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (5))){
var state_33548__$1 = state_33548;
var statearr_33593_33645 = state_33548__$1;
(statearr_33593_33645[(2)] = true);

(statearr_33593_33645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (14))){
var state_33548__$1 = state_33548;
var statearr_33594_33646 = state_33548__$1;
(statearr_33594_33646[(2)] = false);

(statearr_33594_33646[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (26))){
var inst_33508 = (state_33548[(9)]);
var inst_33515 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33508);
var state_33548__$1 = state_33548;
var statearr_33595_33647 = state_33548__$1;
(statearr_33595_33647[(2)] = inst_33515);

(statearr_33595_33647[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (16))){
var state_33548__$1 = state_33548;
var statearr_33596_33648 = state_33548__$1;
(statearr_33596_33648[(2)] = true);

(statearr_33596_33648[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (38))){
var inst_33538 = (state_33548[(2)]);
var state_33548__$1 = state_33548;
var statearr_33597_33649 = state_33548__$1;
(statearr_33597_33649[(2)] = inst_33538);

(statearr_33597_33649[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (30))){
var inst_33508 = (state_33548[(9)]);
var inst_33500 = (state_33548[(13)]);
var inst_33499 = (state_33548[(10)]);
var inst_33525 = cljs.core.empty_QMARK_.call(null,inst_33499);
var inst_33526 = inst_33500.call(null,inst_33508);
var inst_33527 = cljs.core.not.call(null,inst_33526);
var inst_33528 = (inst_33525) && (inst_33527);
var state_33548__$1 = state_33548;
var statearr_33598_33650 = state_33548__$1;
(statearr_33598_33650[(2)] = inst_33528);

(statearr_33598_33650[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (10))){
var inst_33450 = (state_33548[(8)]);
var inst_33471 = (state_33548[(2)]);
var inst_33472 = cljs.core.get.call(null,inst_33471,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33473 = cljs.core.get.call(null,inst_33471,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33474 = cljs.core.get.call(null,inst_33471,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33475 = inst_33450;
var state_33548__$1 = (function (){var statearr_33599 = state_33548;
(statearr_33599[(16)] = inst_33474);

(statearr_33599[(17)] = inst_33472);

(statearr_33599[(7)] = inst_33475);

(statearr_33599[(18)] = inst_33473);

return statearr_33599;
})();
var statearr_33600_33651 = state_33548__$1;
(statearr_33600_33651[(2)] = null);

(statearr_33600_33651[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (18))){
var inst_33490 = (state_33548[(2)]);
var state_33548__$1 = state_33548;
var statearr_33601_33652 = state_33548__$1;
(statearr_33601_33652[(2)] = inst_33490);

(statearr_33601_33652[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (37))){
var state_33548__$1 = state_33548;
var statearr_33602_33653 = state_33548__$1;
(statearr_33602_33653[(2)] = null);

(statearr_33602_33653[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (8))){
var inst_33450 = (state_33548[(8)]);
var inst_33468 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33450);
var state_33548__$1 = state_33548;
var statearr_33603_33654 = state_33548__$1;
(statearr_33603_33654[(2)] = inst_33468);

(statearr_33603_33654[(1)] = (10));


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
});})(c__32563__auto___33608,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32475__auto__,c__32563__auto___33608,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32476__auto__ = null;
var cljs$core$async$mix_$_state_machine__32476__auto____0 = (function (){
var statearr_33604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33604[(0)] = cljs$core$async$mix_$_state_machine__32476__auto__);

(statearr_33604[(1)] = (1));

return statearr_33604;
});
var cljs$core$async$mix_$_state_machine__32476__auto____1 = (function (state_33548){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_33548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e33605){if((e33605 instanceof Object)){
var ex__32479__auto__ = e33605;
var statearr_33606_33655 = state_33548;
(statearr_33606_33655[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33656 = state_33548;
state_33548 = G__33656;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32476__auto__ = function(state_33548){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32476__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32476__auto____1.call(this,state_33548);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32476__auto____0;
cljs$core$async$mix_$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32476__auto____1;
return cljs$core$async$mix_$_state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto___33608,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32565__auto__ = (function (){var statearr_33607 = f__32564__auto__.call(null);
(statearr_33607[(6)] = c__32563__auto___33608);

return statearr_33607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto___33608,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__33658 = arguments.length;
switch (G__33658) {
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
var G__33662 = arguments.length;
switch (G__33662) {
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
return (function (p1__33660_SHARP_){
if(cljs.core.truth_(p1__33660_SHARP_.call(null,topic))){
return p1__33660_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33660_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28286__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33663 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33663 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33664){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33664 = meta33664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33665,meta33664__$1){
var self__ = this;
var _33665__$1 = this;
return (new cljs.core.async.t_cljs$core$async33663(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33664__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33663.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33665){
var self__ = this;
var _33665__$1 = this;
return self__.meta33664;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33663.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33663.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33663.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33663.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33663.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async33663.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33663.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33663.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33664","meta33664",1839370582,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33663.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33663";

cljs.core.async.t_cljs$core$async33663.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async33663");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33663 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33663(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33664){
return (new cljs.core.async.t_cljs$core$async33663(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33664));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33663(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32563__auto___33783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto___33783,mults,ensure_mult,p){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto___33783,mults,ensure_mult,p){
return (function (state_33737){
var state_val_33738 = (state_33737[(1)]);
if((state_val_33738 === (7))){
var inst_33733 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
var statearr_33739_33784 = state_33737__$1;
(statearr_33739_33784[(2)] = inst_33733);

(statearr_33739_33784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (20))){
var state_33737__$1 = state_33737;
var statearr_33740_33785 = state_33737__$1;
(statearr_33740_33785[(2)] = null);

(statearr_33740_33785[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (1))){
var state_33737__$1 = state_33737;
var statearr_33741_33786 = state_33737__$1;
(statearr_33741_33786[(2)] = null);

(statearr_33741_33786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (24))){
var inst_33716 = (state_33737[(7)]);
var inst_33725 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33716);
var state_33737__$1 = state_33737;
var statearr_33742_33787 = state_33737__$1;
(statearr_33742_33787[(2)] = inst_33725);

(statearr_33742_33787[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (4))){
var inst_33668 = (state_33737[(8)]);
var inst_33668__$1 = (state_33737[(2)]);
var inst_33669 = (inst_33668__$1 == null);
var state_33737__$1 = (function (){var statearr_33743 = state_33737;
(statearr_33743[(8)] = inst_33668__$1);

return statearr_33743;
})();
if(cljs.core.truth_(inst_33669)){
var statearr_33744_33788 = state_33737__$1;
(statearr_33744_33788[(1)] = (5));

} else {
var statearr_33745_33789 = state_33737__$1;
(statearr_33745_33789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (15))){
var inst_33710 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
var statearr_33746_33790 = state_33737__$1;
(statearr_33746_33790[(2)] = inst_33710);

(statearr_33746_33790[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (21))){
var inst_33730 = (state_33737[(2)]);
var state_33737__$1 = (function (){var statearr_33747 = state_33737;
(statearr_33747[(9)] = inst_33730);

return statearr_33747;
})();
var statearr_33748_33791 = state_33737__$1;
(statearr_33748_33791[(2)] = null);

(statearr_33748_33791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (13))){
var inst_33692 = (state_33737[(10)]);
var inst_33694 = cljs.core.chunked_seq_QMARK_.call(null,inst_33692);
var state_33737__$1 = state_33737;
if(inst_33694){
var statearr_33749_33792 = state_33737__$1;
(statearr_33749_33792[(1)] = (16));

} else {
var statearr_33750_33793 = state_33737__$1;
(statearr_33750_33793[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (22))){
var inst_33722 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
if(cljs.core.truth_(inst_33722)){
var statearr_33751_33794 = state_33737__$1;
(statearr_33751_33794[(1)] = (23));

} else {
var statearr_33752_33795 = state_33737__$1;
(statearr_33752_33795[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (6))){
var inst_33716 = (state_33737[(7)]);
var inst_33668 = (state_33737[(8)]);
var inst_33718 = (state_33737[(11)]);
var inst_33716__$1 = topic_fn.call(null,inst_33668);
var inst_33717 = cljs.core.deref.call(null,mults);
var inst_33718__$1 = cljs.core.get.call(null,inst_33717,inst_33716__$1);
var state_33737__$1 = (function (){var statearr_33753 = state_33737;
(statearr_33753[(7)] = inst_33716__$1);

(statearr_33753[(11)] = inst_33718__$1);

return statearr_33753;
})();
if(cljs.core.truth_(inst_33718__$1)){
var statearr_33754_33796 = state_33737__$1;
(statearr_33754_33796[(1)] = (19));

} else {
var statearr_33755_33797 = state_33737__$1;
(statearr_33755_33797[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (25))){
var inst_33727 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
var statearr_33756_33798 = state_33737__$1;
(statearr_33756_33798[(2)] = inst_33727);

(statearr_33756_33798[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (17))){
var inst_33692 = (state_33737[(10)]);
var inst_33701 = cljs.core.first.call(null,inst_33692);
var inst_33702 = cljs.core.async.muxch_STAR_.call(null,inst_33701);
var inst_33703 = cljs.core.async.close_BANG_.call(null,inst_33702);
var inst_33704 = cljs.core.next.call(null,inst_33692);
var inst_33678 = inst_33704;
var inst_33679 = null;
var inst_33680 = (0);
var inst_33681 = (0);
var state_33737__$1 = (function (){var statearr_33757 = state_33737;
(statearr_33757[(12)] = inst_33681);

(statearr_33757[(13)] = inst_33679);

(statearr_33757[(14)] = inst_33678);

(statearr_33757[(15)] = inst_33703);

(statearr_33757[(16)] = inst_33680);

return statearr_33757;
})();
var statearr_33758_33799 = state_33737__$1;
(statearr_33758_33799[(2)] = null);

(statearr_33758_33799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (3))){
var inst_33735 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33737__$1,inst_33735);
} else {
if((state_val_33738 === (12))){
var inst_33712 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
var statearr_33759_33800 = state_33737__$1;
(statearr_33759_33800[(2)] = inst_33712);

(statearr_33759_33800[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (2))){
var state_33737__$1 = state_33737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33737__$1,(4),ch);
} else {
if((state_val_33738 === (23))){
var state_33737__$1 = state_33737;
var statearr_33760_33801 = state_33737__$1;
(statearr_33760_33801[(2)] = null);

(statearr_33760_33801[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (19))){
var inst_33668 = (state_33737[(8)]);
var inst_33718 = (state_33737[(11)]);
var inst_33720 = cljs.core.async.muxch_STAR_.call(null,inst_33718);
var state_33737__$1 = state_33737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33737__$1,(22),inst_33720,inst_33668);
} else {
if((state_val_33738 === (11))){
var inst_33678 = (state_33737[(14)]);
var inst_33692 = (state_33737[(10)]);
var inst_33692__$1 = cljs.core.seq.call(null,inst_33678);
var state_33737__$1 = (function (){var statearr_33761 = state_33737;
(statearr_33761[(10)] = inst_33692__$1);

return statearr_33761;
})();
if(inst_33692__$1){
var statearr_33762_33802 = state_33737__$1;
(statearr_33762_33802[(1)] = (13));

} else {
var statearr_33763_33803 = state_33737__$1;
(statearr_33763_33803[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (9))){
var inst_33714 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
var statearr_33764_33804 = state_33737__$1;
(statearr_33764_33804[(2)] = inst_33714);

(statearr_33764_33804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (5))){
var inst_33675 = cljs.core.deref.call(null,mults);
var inst_33676 = cljs.core.vals.call(null,inst_33675);
var inst_33677 = cljs.core.seq.call(null,inst_33676);
var inst_33678 = inst_33677;
var inst_33679 = null;
var inst_33680 = (0);
var inst_33681 = (0);
var state_33737__$1 = (function (){var statearr_33765 = state_33737;
(statearr_33765[(12)] = inst_33681);

(statearr_33765[(13)] = inst_33679);

(statearr_33765[(14)] = inst_33678);

(statearr_33765[(16)] = inst_33680);

return statearr_33765;
})();
var statearr_33766_33805 = state_33737__$1;
(statearr_33766_33805[(2)] = null);

(statearr_33766_33805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (14))){
var state_33737__$1 = state_33737;
var statearr_33770_33806 = state_33737__$1;
(statearr_33770_33806[(2)] = null);

(statearr_33770_33806[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (16))){
var inst_33692 = (state_33737[(10)]);
var inst_33696 = cljs.core.chunk_first.call(null,inst_33692);
var inst_33697 = cljs.core.chunk_rest.call(null,inst_33692);
var inst_33698 = cljs.core.count.call(null,inst_33696);
var inst_33678 = inst_33697;
var inst_33679 = inst_33696;
var inst_33680 = inst_33698;
var inst_33681 = (0);
var state_33737__$1 = (function (){var statearr_33771 = state_33737;
(statearr_33771[(12)] = inst_33681);

(statearr_33771[(13)] = inst_33679);

(statearr_33771[(14)] = inst_33678);

(statearr_33771[(16)] = inst_33680);

return statearr_33771;
})();
var statearr_33772_33807 = state_33737__$1;
(statearr_33772_33807[(2)] = null);

(statearr_33772_33807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (10))){
var inst_33681 = (state_33737[(12)]);
var inst_33679 = (state_33737[(13)]);
var inst_33678 = (state_33737[(14)]);
var inst_33680 = (state_33737[(16)]);
var inst_33686 = cljs.core._nth.call(null,inst_33679,inst_33681);
var inst_33687 = cljs.core.async.muxch_STAR_.call(null,inst_33686);
var inst_33688 = cljs.core.async.close_BANG_.call(null,inst_33687);
var inst_33689 = (inst_33681 + (1));
var tmp33767 = inst_33679;
var tmp33768 = inst_33678;
var tmp33769 = inst_33680;
var inst_33678__$1 = tmp33768;
var inst_33679__$1 = tmp33767;
var inst_33680__$1 = tmp33769;
var inst_33681__$1 = inst_33689;
var state_33737__$1 = (function (){var statearr_33773 = state_33737;
(statearr_33773[(12)] = inst_33681__$1);

(statearr_33773[(13)] = inst_33679__$1);

(statearr_33773[(17)] = inst_33688);

(statearr_33773[(14)] = inst_33678__$1);

(statearr_33773[(16)] = inst_33680__$1);

return statearr_33773;
})();
var statearr_33774_33808 = state_33737__$1;
(statearr_33774_33808[(2)] = null);

(statearr_33774_33808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (18))){
var inst_33707 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
var statearr_33775_33809 = state_33737__$1;
(statearr_33775_33809[(2)] = inst_33707);

(statearr_33775_33809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (8))){
var inst_33681 = (state_33737[(12)]);
var inst_33680 = (state_33737[(16)]);
var inst_33683 = (inst_33681 < inst_33680);
var inst_33684 = inst_33683;
var state_33737__$1 = state_33737;
if(cljs.core.truth_(inst_33684)){
var statearr_33776_33810 = state_33737__$1;
(statearr_33776_33810[(1)] = (10));

} else {
var statearr_33777_33811 = state_33737__$1;
(statearr_33777_33811[(1)] = (11));

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
});})(c__32563__auto___33783,mults,ensure_mult,p))
;
return ((function (switch__32475__auto__,c__32563__auto___33783,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32476__auto__ = null;
var cljs$core$async$state_machine__32476__auto____0 = (function (){
var statearr_33778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33778[(0)] = cljs$core$async$state_machine__32476__auto__);

(statearr_33778[(1)] = (1));

return statearr_33778;
});
var cljs$core$async$state_machine__32476__auto____1 = (function (state_33737){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_33737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e33779){if((e33779 instanceof Object)){
var ex__32479__auto__ = e33779;
var statearr_33780_33812 = state_33737;
(statearr_33780_33812[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33813 = state_33737;
state_33737 = G__33813;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
cljs$core$async$state_machine__32476__auto__ = function(state_33737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32476__auto____1.call(this,state_33737);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32476__auto____0;
cljs$core$async$state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32476__auto____1;
return cljs$core$async$state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto___33783,mults,ensure_mult,p))
})();
var state__32565__auto__ = (function (){var statearr_33781 = f__32564__auto__.call(null);
(statearr_33781[(6)] = c__32563__auto___33783);

return statearr_33781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto___33783,mults,ensure_mult,p))
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
var G__33815 = arguments.length;
switch (G__33815) {
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
var G__33818 = arguments.length;
switch (G__33818) {
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
var G__33821 = arguments.length;
switch (G__33821) {
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
var c__32563__auto___33888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto___33888,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto___33888,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33860){
var state_val_33861 = (state_33860[(1)]);
if((state_val_33861 === (7))){
var state_33860__$1 = state_33860;
var statearr_33862_33889 = state_33860__$1;
(statearr_33862_33889[(2)] = null);

(statearr_33862_33889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (1))){
var state_33860__$1 = state_33860;
var statearr_33863_33890 = state_33860__$1;
(statearr_33863_33890[(2)] = null);

(statearr_33863_33890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (4))){
var inst_33824 = (state_33860[(7)]);
var inst_33826 = (inst_33824 < cnt);
var state_33860__$1 = state_33860;
if(cljs.core.truth_(inst_33826)){
var statearr_33864_33891 = state_33860__$1;
(statearr_33864_33891[(1)] = (6));

} else {
var statearr_33865_33892 = state_33860__$1;
(statearr_33865_33892[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (15))){
var inst_33856 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33866_33893 = state_33860__$1;
(statearr_33866_33893[(2)] = inst_33856);

(statearr_33866_33893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (13))){
var inst_33849 = cljs.core.async.close_BANG_.call(null,out);
var state_33860__$1 = state_33860;
var statearr_33867_33894 = state_33860__$1;
(statearr_33867_33894[(2)] = inst_33849);

(statearr_33867_33894[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (6))){
var state_33860__$1 = state_33860;
var statearr_33868_33895 = state_33860__$1;
(statearr_33868_33895[(2)] = null);

(statearr_33868_33895[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (3))){
var inst_33858 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33860__$1,inst_33858);
} else {
if((state_val_33861 === (12))){
var inst_33846 = (state_33860[(8)]);
var inst_33846__$1 = (state_33860[(2)]);
var inst_33847 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33846__$1);
var state_33860__$1 = (function (){var statearr_33869 = state_33860;
(statearr_33869[(8)] = inst_33846__$1);

return statearr_33869;
})();
if(cljs.core.truth_(inst_33847)){
var statearr_33870_33896 = state_33860__$1;
(statearr_33870_33896[(1)] = (13));

} else {
var statearr_33871_33897 = state_33860__$1;
(statearr_33871_33897[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (2))){
var inst_33823 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33824 = (0);
var state_33860__$1 = (function (){var statearr_33872 = state_33860;
(statearr_33872[(7)] = inst_33824);

(statearr_33872[(9)] = inst_33823);

return statearr_33872;
})();
var statearr_33873_33898 = state_33860__$1;
(statearr_33873_33898[(2)] = null);

(statearr_33873_33898[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (11))){
var inst_33824 = (state_33860[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33860,(10),Object,null,(9));
var inst_33833 = chs__$1.call(null,inst_33824);
var inst_33834 = done.call(null,inst_33824);
var inst_33835 = cljs.core.async.take_BANG_.call(null,inst_33833,inst_33834);
var state_33860__$1 = state_33860;
var statearr_33874_33899 = state_33860__$1;
(statearr_33874_33899[(2)] = inst_33835);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33860__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (9))){
var inst_33824 = (state_33860[(7)]);
var inst_33837 = (state_33860[(2)]);
var inst_33838 = (inst_33824 + (1));
var inst_33824__$1 = inst_33838;
var state_33860__$1 = (function (){var statearr_33875 = state_33860;
(statearr_33875[(7)] = inst_33824__$1);

(statearr_33875[(10)] = inst_33837);

return statearr_33875;
})();
var statearr_33876_33900 = state_33860__$1;
(statearr_33876_33900[(2)] = null);

(statearr_33876_33900[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (5))){
var inst_33844 = (state_33860[(2)]);
var state_33860__$1 = (function (){var statearr_33877 = state_33860;
(statearr_33877[(11)] = inst_33844);

return statearr_33877;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33860__$1,(12),dchan);
} else {
if((state_val_33861 === (14))){
var inst_33846 = (state_33860[(8)]);
var inst_33851 = cljs.core.apply.call(null,f,inst_33846);
var state_33860__$1 = state_33860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33860__$1,(16),out,inst_33851);
} else {
if((state_val_33861 === (16))){
var inst_33853 = (state_33860[(2)]);
var state_33860__$1 = (function (){var statearr_33878 = state_33860;
(statearr_33878[(12)] = inst_33853);

return statearr_33878;
})();
var statearr_33879_33901 = state_33860__$1;
(statearr_33879_33901[(2)] = null);

(statearr_33879_33901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (10))){
var inst_33828 = (state_33860[(2)]);
var inst_33829 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33860__$1 = (function (){var statearr_33880 = state_33860;
(statearr_33880[(13)] = inst_33828);

return statearr_33880;
})();
var statearr_33881_33902 = state_33860__$1;
(statearr_33881_33902[(2)] = inst_33829);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33860__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (8))){
var inst_33842 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33882_33903 = state_33860__$1;
(statearr_33882_33903[(2)] = inst_33842);

(statearr_33882_33903[(1)] = (5));


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
});})(c__32563__auto___33888,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32475__auto__,c__32563__auto___33888,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32476__auto__ = null;
var cljs$core$async$state_machine__32476__auto____0 = (function (){
var statearr_33883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33883[(0)] = cljs$core$async$state_machine__32476__auto__);

(statearr_33883[(1)] = (1));

return statearr_33883;
});
var cljs$core$async$state_machine__32476__auto____1 = (function (state_33860){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_33860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e33884){if((e33884 instanceof Object)){
var ex__32479__auto__ = e33884;
var statearr_33885_33904 = state_33860;
(statearr_33885_33904[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33905 = state_33860;
state_33860 = G__33905;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
cljs$core$async$state_machine__32476__auto__ = function(state_33860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32476__auto____1.call(this,state_33860);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32476__auto____0;
cljs$core$async$state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32476__auto____1;
return cljs$core$async$state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto___33888,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32565__auto__ = (function (){var statearr_33886 = f__32564__auto__.call(null);
(statearr_33886[(6)] = c__32563__auto___33888);

return statearr_33886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto___33888,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__33908 = arguments.length;
switch (G__33908) {
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
var c__32563__auto___33962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto___33962,out){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto___33962,out){
return (function (state_33940){
var state_val_33941 = (state_33940[(1)]);
if((state_val_33941 === (7))){
var inst_33920 = (state_33940[(7)]);
var inst_33919 = (state_33940[(8)]);
var inst_33919__$1 = (state_33940[(2)]);
var inst_33920__$1 = cljs.core.nth.call(null,inst_33919__$1,(0),null);
var inst_33921 = cljs.core.nth.call(null,inst_33919__$1,(1),null);
var inst_33922 = (inst_33920__$1 == null);
var state_33940__$1 = (function (){var statearr_33942 = state_33940;
(statearr_33942[(7)] = inst_33920__$1);

(statearr_33942[(9)] = inst_33921);

(statearr_33942[(8)] = inst_33919__$1);

return statearr_33942;
})();
if(cljs.core.truth_(inst_33922)){
var statearr_33943_33963 = state_33940__$1;
(statearr_33943_33963[(1)] = (8));

} else {
var statearr_33944_33964 = state_33940__$1;
(statearr_33944_33964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33941 === (1))){
var inst_33909 = cljs.core.vec.call(null,chs);
var inst_33910 = inst_33909;
var state_33940__$1 = (function (){var statearr_33945 = state_33940;
(statearr_33945[(10)] = inst_33910);

return statearr_33945;
})();
var statearr_33946_33965 = state_33940__$1;
(statearr_33946_33965[(2)] = null);

(statearr_33946_33965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33941 === (4))){
var inst_33910 = (state_33940[(10)]);
var state_33940__$1 = state_33940;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33940__$1,(7),inst_33910);
} else {
if((state_val_33941 === (6))){
var inst_33936 = (state_33940[(2)]);
var state_33940__$1 = state_33940;
var statearr_33947_33966 = state_33940__$1;
(statearr_33947_33966[(2)] = inst_33936);

(statearr_33947_33966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33941 === (3))){
var inst_33938 = (state_33940[(2)]);
var state_33940__$1 = state_33940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33940__$1,inst_33938);
} else {
if((state_val_33941 === (2))){
var inst_33910 = (state_33940[(10)]);
var inst_33912 = cljs.core.count.call(null,inst_33910);
var inst_33913 = (inst_33912 > (0));
var state_33940__$1 = state_33940;
if(cljs.core.truth_(inst_33913)){
var statearr_33949_33967 = state_33940__$1;
(statearr_33949_33967[(1)] = (4));

} else {
var statearr_33950_33968 = state_33940__$1;
(statearr_33950_33968[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33941 === (11))){
var inst_33910 = (state_33940[(10)]);
var inst_33929 = (state_33940[(2)]);
var tmp33948 = inst_33910;
var inst_33910__$1 = tmp33948;
var state_33940__$1 = (function (){var statearr_33951 = state_33940;
(statearr_33951[(11)] = inst_33929);

(statearr_33951[(10)] = inst_33910__$1);

return statearr_33951;
})();
var statearr_33952_33969 = state_33940__$1;
(statearr_33952_33969[(2)] = null);

(statearr_33952_33969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33941 === (9))){
var inst_33920 = (state_33940[(7)]);
var state_33940__$1 = state_33940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33940__$1,(11),out,inst_33920);
} else {
if((state_val_33941 === (5))){
var inst_33934 = cljs.core.async.close_BANG_.call(null,out);
var state_33940__$1 = state_33940;
var statearr_33953_33970 = state_33940__$1;
(statearr_33953_33970[(2)] = inst_33934);

(statearr_33953_33970[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33941 === (10))){
var inst_33932 = (state_33940[(2)]);
var state_33940__$1 = state_33940;
var statearr_33954_33971 = state_33940__$1;
(statearr_33954_33971[(2)] = inst_33932);

(statearr_33954_33971[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33941 === (8))){
var inst_33920 = (state_33940[(7)]);
var inst_33921 = (state_33940[(9)]);
var inst_33919 = (state_33940[(8)]);
var inst_33910 = (state_33940[(10)]);
var inst_33924 = (function (){var cs = inst_33910;
var vec__33915 = inst_33919;
var v = inst_33920;
var c = inst_33921;
return ((function (cs,vec__33915,v,c,inst_33920,inst_33921,inst_33919,inst_33910,state_val_33941,c__32563__auto___33962,out){
return (function (p1__33906_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33906_SHARP_);
});
;})(cs,vec__33915,v,c,inst_33920,inst_33921,inst_33919,inst_33910,state_val_33941,c__32563__auto___33962,out))
})();
var inst_33925 = cljs.core.filterv.call(null,inst_33924,inst_33910);
var inst_33910__$1 = inst_33925;
var state_33940__$1 = (function (){var statearr_33955 = state_33940;
(statearr_33955[(10)] = inst_33910__$1);

return statearr_33955;
})();
var statearr_33956_33972 = state_33940__$1;
(statearr_33956_33972[(2)] = null);

(statearr_33956_33972[(1)] = (2));


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
});})(c__32563__auto___33962,out))
;
return ((function (switch__32475__auto__,c__32563__auto___33962,out){
return (function() {
var cljs$core$async$state_machine__32476__auto__ = null;
var cljs$core$async$state_machine__32476__auto____0 = (function (){
var statearr_33957 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33957[(0)] = cljs$core$async$state_machine__32476__auto__);

(statearr_33957[(1)] = (1));

return statearr_33957;
});
var cljs$core$async$state_machine__32476__auto____1 = (function (state_33940){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_33940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e33958){if((e33958 instanceof Object)){
var ex__32479__auto__ = e33958;
var statearr_33959_33973 = state_33940;
(statearr_33959_33973[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33974 = state_33940;
state_33940 = G__33974;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
cljs$core$async$state_machine__32476__auto__ = function(state_33940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32476__auto____1.call(this,state_33940);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32476__auto____0;
cljs$core$async$state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32476__auto____1;
return cljs$core$async$state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto___33962,out))
})();
var state__32565__auto__ = (function (){var statearr_33960 = f__32564__auto__.call(null);
(statearr_33960[(6)] = c__32563__auto___33962);

return statearr_33960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto___33962,out))
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
var G__33976 = arguments.length;
switch (G__33976) {
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
var c__32563__auto___34021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto___34021,out){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto___34021,out){
return (function (state_34000){
var state_val_34001 = (state_34000[(1)]);
if((state_val_34001 === (7))){
var inst_33982 = (state_34000[(7)]);
var inst_33982__$1 = (state_34000[(2)]);
var inst_33983 = (inst_33982__$1 == null);
var inst_33984 = cljs.core.not.call(null,inst_33983);
var state_34000__$1 = (function (){var statearr_34002 = state_34000;
(statearr_34002[(7)] = inst_33982__$1);

return statearr_34002;
})();
if(inst_33984){
var statearr_34003_34022 = state_34000__$1;
(statearr_34003_34022[(1)] = (8));

} else {
var statearr_34004_34023 = state_34000__$1;
(statearr_34004_34023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (1))){
var inst_33977 = (0);
var state_34000__$1 = (function (){var statearr_34005 = state_34000;
(statearr_34005[(8)] = inst_33977);

return statearr_34005;
})();
var statearr_34006_34024 = state_34000__$1;
(statearr_34006_34024[(2)] = null);

(statearr_34006_34024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (4))){
var state_34000__$1 = state_34000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34000__$1,(7),ch);
} else {
if((state_val_34001 === (6))){
var inst_33995 = (state_34000[(2)]);
var state_34000__$1 = state_34000;
var statearr_34007_34025 = state_34000__$1;
(statearr_34007_34025[(2)] = inst_33995);

(statearr_34007_34025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (3))){
var inst_33997 = (state_34000[(2)]);
var inst_33998 = cljs.core.async.close_BANG_.call(null,out);
var state_34000__$1 = (function (){var statearr_34008 = state_34000;
(statearr_34008[(9)] = inst_33997);

return statearr_34008;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34000__$1,inst_33998);
} else {
if((state_val_34001 === (2))){
var inst_33977 = (state_34000[(8)]);
var inst_33979 = (inst_33977 < n);
var state_34000__$1 = state_34000;
if(cljs.core.truth_(inst_33979)){
var statearr_34009_34026 = state_34000__$1;
(statearr_34009_34026[(1)] = (4));

} else {
var statearr_34010_34027 = state_34000__$1;
(statearr_34010_34027[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (11))){
var inst_33977 = (state_34000[(8)]);
var inst_33987 = (state_34000[(2)]);
var inst_33988 = (inst_33977 + (1));
var inst_33977__$1 = inst_33988;
var state_34000__$1 = (function (){var statearr_34011 = state_34000;
(statearr_34011[(10)] = inst_33987);

(statearr_34011[(8)] = inst_33977__$1);

return statearr_34011;
})();
var statearr_34012_34028 = state_34000__$1;
(statearr_34012_34028[(2)] = null);

(statearr_34012_34028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (9))){
var state_34000__$1 = state_34000;
var statearr_34013_34029 = state_34000__$1;
(statearr_34013_34029[(2)] = null);

(statearr_34013_34029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (5))){
var state_34000__$1 = state_34000;
var statearr_34014_34030 = state_34000__$1;
(statearr_34014_34030[(2)] = null);

(statearr_34014_34030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (10))){
var inst_33992 = (state_34000[(2)]);
var state_34000__$1 = state_34000;
var statearr_34015_34031 = state_34000__$1;
(statearr_34015_34031[(2)] = inst_33992);

(statearr_34015_34031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (8))){
var inst_33982 = (state_34000[(7)]);
var state_34000__$1 = state_34000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34000__$1,(11),out,inst_33982);
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
});})(c__32563__auto___34021,out))
;
return ((function (switch__32475__auto__,c__32563__auto___34021,out){
return (function() {
var cljs$core$async$state_machine__32476__auto__ = null;
var cljs$core$async$state_machine__32476__auto____0 = (function (){
var statearr_34016 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34016[(0)] = cljs$core$async$state_machine__32476__auto__);

(statearr_34016[(1)] = (1));

return statearr_34016;
});
var cljs$core$async$state_machine__32476__auto____1 = (function (state_34000){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_34000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e34017){if((e34017 instanceof Object)){
var ex__32479__auto__ = e34017;
var statearr_34018_34032 = state_34000;
(statearr_34018_34032[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34033 = state_34000;
state_34000 = G__34033;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
cljs$core$async$state_machine__32476__auto__ = function(state_34000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32476__auto____1.call(this,state_34000);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32476__auto____0;
cljs$core$async$state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32476__auto____1;
return cljs$core$async$state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto___34021,out))
})();
var state__32565__auto__ = (function (){var statearr_34019 = f__32564__auto__.call(null);
(statearr_34019[(6)] = c__32563__auto___34021);

return statearr_34019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto___34021,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34035 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34035 = (function (f,ch,meta34036){
this.f = f;
this.ch = ch;
this.meta34036 = meta34036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34037,meta34036__$1){
var self__ = this;
var _34037__$1 = this;
return (new cljs.core.async.t_cljs$core$async34035(self__.f,self__.ch,meta34036__$1));
});

cljs.core.async.t_cljs$core$async34035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34037){
var self__ = this;
var _34037__$1 = this;
return self__.meta34036;
});

cljs.core.async.t_cljs$core$async34035.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34035.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34035.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34035.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34035.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34038 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34038 = (function (f,ch,meta34036,_,fn1,meta34039){
this.f = f;
this.ch = ch;
this.meta34036 = meta34036;
this._ = _;
this.fn1 = fn1;
this.meta34039 = meta34039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34040,meta34039__$1){
var self__ = this;
var _34040__$1 = this;
return (new cljs.core.async.t_cljs$core$async34038(self__.f,self__.ch,self__.meta34036,self__._,self__.fn1,meta34039__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34038.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34040){
var self__ = this;
var _34040__$1 = this;
return self__.meta34039;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34038.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34038.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34038.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34038.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34034_SHARP_){
return f1.call(null,(((p1__34034_SHARP_ == null))?null:self__.f.call(null,p1__34034_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34038.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34036","meta34036",-925309629,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34035","cljs.core.async/t_cljs$core$async34035",-321244072,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34039","meta34039",-221063598,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34038.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34038";

cljs.core.async.t_cljs$core$async34038.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async34038");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34038 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34038(f__$1,ch__$1,meta34036__$1,___$2,fn1__$1,meta34039){
return (new cljs.core.async.t_cljs$core$async34038(f__$1,ch__$1,meta34036__$1,___$2,fn1__$1,meta34039));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34038(self__.f,self__.ch,self__.meta34036,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async34035.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34035.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34035.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34036","meta34036",-925309629,null)], null);
});

cljs.core.async.t_cljs$core$async34035.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34035.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34035";

cljs.core.async.t_cljs$core$async34035.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async34035");
});

cljs.core.async.__GT_t_cljs$core$async34035 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34035(f__$1,ch__$1,meta34036){
return (new cljs.core.async.t_cljs$core$async34035(f__$1,ch__$1,meta34036));
});

}

return (new cljs.core.async.t_cljs$core$async34035(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34041 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34041 = (function (f,ch,meta34042){
this.f = f;
this.ch = ch;
this.meta34042 = meta34042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34043,meta34042__$1){
var self__ = this;
var _34043__$1 = this;
return (new cljs.core.async.t_cljs$core$async34041(self__.f,self__.ch,meta34042__$1));
});

cljs.core.async.t_cljs$core$async34041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34043){
var self__ = this;
var _34043__$1 = this;
return self__.meta34042;
});

cljs.core.async.t_cljs$core$async34041.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34041.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34041.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34041.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34041.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34041.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34041.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34042","meta34042",1391956996,null)], null);
});

cljs.core.async.t_cljs$core$async34041.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34041";

cljs.core.async.t_cljs$core$async34041.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async34041");
});

cljs.core.async.__GT_t_cljs$core$async34041 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34041(f__$1,ch__$1,meta34042){
return (new cljs.core.async.t_cljs$core$async34041(f__$1,ch__$1,meta34042));
});

}

return (new cljs.core.async.t_cljs$core$async34041(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34044 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34044 = (function (p,ch,meta34045){
this.p = p;
this.ch = ch;
this.meta34045 = meta34045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34046,meta34045__$1){
var self__ = this;
var _34046__$1 = this;
return (new cljs.core.async.t_cljs$core$async34044(self__.p,self__.ch,meta34045__$1));
});

cljs.core.async.t_cljs$core$async34044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34046){
var self__ = this;
var _34046__$1 = this;
return self__.meta34045;
});

cljs.core.async.t_cljs$core$async34044.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34044.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34044.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34044.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34044.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34044.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34044.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34045","meta34045",-44691008,null)], null);
});

cljs.core.async.t_cljs$core$async34044.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34044";

cljs.core.async.t_cljs$core$async34044.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async34044");
});

cljs.core.async.__GT_t_cljs$core$async34044 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34044(p__$1,ch__$1,meta34045){
return (new cljs.core.async.t_cljs$core$async34044(p__$1,ch__$1,meta34045));
});

}

return (new cljs.core.async.t_cljs$core$async34044(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34048 = arguments.length;
switch (G__34048) {
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
var c__32563__auto___34088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto___34088,out){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto___34088,out){
return (function (state_34069){
var state_val_34070 = (state_34069[(1)]);
if((state_val_34070 === (7))){
var inst_34065 = (state_34069[(2)]);
var state_34069__$1 = state_34069;
var statearr_34071_34089 = state_34069__$1;
(statearr_34071_34089[(2)] = inst_34065);

(statearr_34071_34089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34070 === (1))){
var state_34069__$1 = state_34069;
var statearr_34072_34090 = state_34069__$1;
(statearr_34072_34090[(2)] = null);

(statearr_34072_34090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34070 === (4))){
var inst_34051 = (state_34069[(7)]);
var inst_34051__$1 = (state_34069[(2)]);
var inst_34052 = (inst_34051__$1 == null);
var state_34069__$1 = (function (){var statearr_34073 = state_34069;
(statearr_34073[(7)] = inst_34051__$1);

return statearr_34073;
})();
if(cljs.core.truth_(inst_34052)){
var statearr_34074_34091 = state_34069__$1;
(statearr_34074_34091[(1)] = (5));

} else {
var statearr_34075_34092 = state_34069__$1;
(statearr_34075_34092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34070 === (6))){
var inst_34051 = (state_34069[(7)]);
var inst_34056 = p.call(null,inst_34051);
var state_34069__$1 = state_34069;
if(cljs.core.truth_(inst_34056)){
var statearr_34076_34093 = state_34069__$1;
(statearr_34076_34093[(1)] = (8));

} else {
var statearr_34077_34094 = state_34069__$1;
(statearr_34077_34094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34070 === (3))){
var inst_34067 = (state_34069[(2)]);
var state_34069__$1 = state_34069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34069__$1,inst_34067);
} else {
if((state_val_34070 === (2))){
var state_34069__$1 = state_34069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34069__$1,(4),ch);
} else {
if((state_val_34070 === (11))){
var inst_34059 = (state_34069[(2)]);
var state_34069__$1 = state_34069;
var statearr_34078_34095 = state_34069__$1;
(statearr_34078_34095[(2)] = inst_34059);

(statearr_34078_34095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34070 === (9))){
var state_34069__$1 = state_34069;
var statearr_34079_34096 = state_34069__$1;
(statearr_34079_34096[(2)] = null);

(statearr_34079_34096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34070 === (5))){
var inst_34054 = cljs.core.async.close_BANG_.call(null,out);
var state_34069__$1 = state_34069;
var statearr_34080_34097 = state_34069__$1;
(statearr_34080_34097[(2)] = inst_34054);

(statearr_34080_34097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34070 === (10))){
var inst_34062 = (state_34069[(2)]);
var state_34069__$1 = (function (){var statearr_34081 = state_34069;
(statearr_34081[(8)] = inst_34062);

return statearr_34081;
})();
var statearr_34082_34098 = state_34069__$1;
(statearr_34082_34098[(2)] = null);

(statearr_34082_34098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34070 === (8))){
var inst_34051 = (state_34069[(7)]);
var state_34069__$1 = state_34069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34069__$1,(11),out,inst_34051);
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
});})(c__32563__auto___34088,out))
;
return ((function (switch__32475__auto__,c__32563__auto___34088,out){
return (function() {
var cljs$core$async$state_machine__32476__auto__ = null;
var cljs$core$async$state_machine__32476__auto____0 = (function (){
var statearr_34083 = [null,null,null,null,null,null,null,null,null];
(statearr_34083[(0)] = cljs$core$async$state_machine__32476__auto__);

(statearr_34083[(1)] = (1));

return statearr_34083;
});
var cljs$core$async$state_machine__32476__auto____1 = (function (state_34069){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_34069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e34084){if((e34084 instanceof Object)){
var ex__32479__auto__ = e34084;
var statearr_34085_34099 = state_34069;
(statearr_34085_34099[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34100 = state_34069;
state_34069 = G__34100;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
cljs$core$async$state_machine__32476__auto__ = function(state_34069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32476__auto____1.call(this,state_34069);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32476__auto____0;
cljs$core$async$state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32476__auto____1;
return cljs$core$async$state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto___34088,out))
})();
var state__32565__auto__ = (function (){var statearr_34086 = f__32564__auto__.call(null);
(statearr_34086[(6)] = c__32563__auto___34088);

return statearr_34086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto___34088,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34102 = arguments.length;
switch (G__34102) {
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
var c__32563__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto__){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto__){
return (function (state_34165){
var state_val_34166 = (state_34165[(1)]);
if((state_val_34166 === (7))){
var inst_34161 = (state_34165[(2)]);
var state_34165__$1 = state_34165;
var statearr_34167_34205 = state_34165__$1;
(statearr_34167_34205[(2)] = inst_34161);

(statearr_34167_34205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34166 === (20))){
var inst_34131 = (state_34165[(7)]);
var inst_34142 = (state_34165[(2)]);
var inst_34143 = cljs.core.next.call(null,inst_34131);
var inst_34117 = inst_34143;
var inst_34118 = null;
var inst_34119 = (0);
var inst_34120 = (0);
var state_34165__$1 = (function (){var statearr_34168 = state_34165;
(statearr_34168[(8)] = inst_34142);

(statearr_34168[(9)] = inst_34118);

(statearr_34168[(10)] = inst_34117);

(statearr_34168[(11)] = inst_34119);

(statearr_34168[(12)] = inst_34120);

return statearr_34168;
})();
var statearr_34169_34206 = state_34165__$1;
(statearr_34169_34206[(2)] = null);

(statearr_34169_34206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34166 === (1))){
var state_34165__$1 = state_34165;
var statearr_34170_34207 = state_34165__$1;
(statearr_34170_34207[(2)] = null);

(statearr_34170_34207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34166 === (4))){
var inst_34106 = (state_34165[(13)]);
var inst_34106__$1 = (state_34165[(2)]);
var inst_34107 = (inst_34106__$1 == null);
var state_34165__$1 = (function (){var statearr_34171 = state_34165;
(statearr_34171[(13)] = inst_34106__$1);

return statearr_34171;
})();
if(cljs.core.truth_(inst_34107)){
var statearr_34172_34208 = state_34165__$1;
(statearr_34172_34208[(1)] = (5));

} else {
var statearr_34173_34209 = state_34165__$1;
(statearr_34173_34209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34166 === (15))){
var state_34165__$1 = state_34165;
var statearr_34177_34210 = state_34165__$1;
(statearr_34177_34210[(2)] = null);

(statearr_34177_34210[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34166 === (21))){
var state_34165__$1 = state_34165;
var statearr_34178_34211 = state_34165__$1;
(statearr_34178_34211[(2)] = null);

(statearr_34178_34211[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34166 === (13))){
var inst_34118 = (state_34165[(9)]);
var inst_34117 = (state_34165[(10)]);
var inst_34119 = (state_34165[(11)]);
var inst_34120 = (state_34165[(12)]);
var inst_34127 = (state_34165[(2)]);
var inst_34128 = (inst_34120 + (1));
var tmp34174 = inst_34118;
var tmp34175 = inst_34117;
var tmp34176 = inst_34119;
var inst_34117__$1 = tmp34175;
var inst_34118__$1 = tmp34174;
var inst_34119__$1 = tmp34176;
var inst_34120__$1 = inst_34128;
var state_34165__$1 = (function (){var statearr_34179 = state_34165;
(statearr_34179[(14)] = inst_34127);

(statearr_34179[(9)] = inst_34118__$1);

(statearr_34179[(10)] = inst_34117__$1);

(statearr_34179[(11)] = inst_34119__$1);

(statearr_34179[(12)] = inst_34120__$1);

return statearr_34179;
})();
var statearr_34180_34212 = state_34165__$1;
(statearr_34180_34212[(2)] = null);

(statearr_34180_34212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34166 === (22))){
var state_34165__$1 = state_34165;
var statearr_34181_34213 = state_34165__$1;
(statearr_34181_34213[(2)] = null);

(statearr_34181_34213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34166 === (6))){
var inst_34106 = (state_34165[(13)]);
var inst_34115 = f.call(null,inst_34106);
var inst_34116 = cljs.core.seq.call(null,inst_34115);
var inst_34117 = inst_34116;
var inst_34118 = null;
var inst_34119 = (0);
var inst_34120 = (0);
var state_34165__$1 = (function (){var statearr_34182 = state_34165;
(statearr_34182[(9)] = inst_34118);

(statearr_34182[(10)] = inst_34117);

(statearr_34182[(11)] = inst_34119);

(statearr_34182[(12)] = inst_34120);

return statearr_34182;
})();
var statearr_34183_34214 = state_34165__$1;
(statearr_34183_34214[(2)] = null);

(statearr_34183_34214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34166 === (17))){
var inst_34131 = (state_34165[(7)]);
var inst_34135 = cljs.core.chunk_first.call(null,inst_34131);
var inst_34136 = cljs.core.chunk_rest.call(null,inst_34131);
var inst_34137 = cljs.core.count.call(null,inst_34135);
var inst_34117 = inst_34136;
var inst_34118 = inst_34135;
var inst_34119 = inst_34137;
var inst_34120 = (0);
var state_34165__$1 = (function (){var statearr_34184 = state_34165;
(statearr_34184[(9)] = inst_34118);

(statearr_34184[(10)] = inst_34117);

(statearr_34184[(11)] = inst_34119);

(statearr_34184[(12)] = inst_34120);

return statearr_34184;
})();
var statearr_34185_34215 = state_34165__$1;
(statearr_34185_34215[(2)] = null);

(statearr_34185_34215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34166 === (3))){
var inst_34163 = (state_34165[(2)]);
var state_34165__$1 = state_34165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34165__$1,inst_34163);
} else {
if((state_val_34166 === (12))){
var inst_34151 = (state_34165[(2)]);
var state_34165__$1 = state_34165;
var statearr_34186_34216 = state_34165__$1;
(statearr_34186_34216[(2)] = inst_34151);

(statearr_34186_34216[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34166 === (2))){
var state_34165__$1 = state_34165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34165__$1,(4),in$);
} else {
if((state_val_34166 === (23))){
var inst_34159 = (state_34165[(2)]);
var state_34165__$1 = state_34165;
var statearr_34187_34217 = state_34165__$1;
(statearr_34187_34217[(2)] = inst_34159);

(statearr_34187_34217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34166 === (19))){
var inst_34146 = (state_34165[(2)]);
var state_34165__$1 = state_34165;
var statearr_34188_34218 = state_34165__$1;
(statearr_34188_34218[(2)] = inst_34146);

(statearr_34188_34218[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34166 === (11))){
var inst_34131 = (state_34165[(7)]);
var inst_34117 = (state_34165[(10)]);
var inst_34131__$1 = cljs.core.seq.call(null,inst_34117);
var state_34165__$1 = (function (){var statearr_34189 = state_34165;
(statearr_34189[(7)] = inst_34131__$1);

return statearr_34189;
})();
if(inst_34131__$1){
var statearr_34190_34219 = state_34165__$1;
(statearr_34190_34219[(1)] = (14));

} else {
var statearr_34191_34220 = state_34165__$1;
(statearr_34191_34220[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34166 === (9))){
var inst_34153 = (state_34165[(2)]);
var inst_34154 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34165__$1 = (function (){var statearr_34192 = state_34165;
(statearr_34192[(15)] = inst_34153);

return statearr_34192;
})();
if(cljs.core.truth_(inst_34154)){
var statearr_34193_34221 = state_34165__$1;
(statearr_34193_34221[(1)] = (21));

} else {
var statearr_34194_34222 = state_34165__$1;
(statearr_34194_34222[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34166 === (5))){
var inst_34109 = cljs.core.async.close_BANG_.call(null,out);
var state_34165__$1 = state_34165;
var statearr_34195_34223 = state_34165__$1;
(statearr_34195_34223[(2)] = inst_34109);

(statearr_34195_34223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34166 === (14))){
var inst_34131 = (state_34165[(7)]);
var inst_34133 = cljs.core.chunked_seq_QMARK_.call(null,inst_34131);
var state_34165__$1 = state_34165;
if(inst_34133){
var statearr_34196_34224 = state_34165__$1;
(statearr_34196_34224[(1)] = (17));

} else {
var statearr_34197_34225 = state_34165__$1;
(statearr_34197_34225[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34166 === (16))){
var inst_34149 = (state_34165[(2)]);
var state_34165__$1 = state_34165;
var statearr_34198_34226 = state_34165__$1;
(statearr_34198_34226[(2)] = inst_34149);

(statearr_34198_34226[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34166 === (10))){
var inst_34118 = (state_34165[(9)]);
var inst_34120 = (state_34165[(12)]);
var inst_34125 = cljs.core._nth.call(null,inst_34118,inst_34120);
var state_34165__$1 = state_34165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34165__$1,(13),out,inst_34125);
} else {
if((state_val_34166 === (18))){
var inst_34131 = (state_34165[(7)]);
var inst_34140 = cljs.core.first.call(null,inst_34131);
var state_34165__$1 = state_34165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34165__$1,(20),out,inst_34140);
} else {
if((state_val_34166 === (8))){
var inst_34119 = (state_34165[(11)]);
var inst_34120 = (state_34165[(12)]);
var inst_34122 = (inst_34120 < inst_34119);
var inst_34123 = inst_34122;
var state_34165__$1 = state_34165;
if(cljs.core.truth_(inst_34123)){
var statearr_34199_34227 = state_34165__$1;
(statearr_34199_34227[(1)] = (10));

} else {
var statearr_34200_34228 = state_34165__$1;
(statearr_34200_34228[(1)] = (11));

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
});})(c__32563__auto__))
;
return ((function (switch__32475__auto__,c__32563__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32476__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32476__auto____0 = (function (){
var statearr_34201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34201[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32476__auto__);

(statearr_34201[(1)] = (1));

return statearr_34201;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32476__auto____1 = (function (state_34165){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_34165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e34202){if((e34202 instanceof Object)){
var ex__32479__auto__ = e34202;
var statearr_34203_34229 = state_34165;
(statearr_34203_34229[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34230 = state_34165;
state_34165 = G__34230;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32476__auto__ = function(state_34165){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32476__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32476__auto____1.call(this,state_34165);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32476__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32476__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto__))
})();
var state__32565__auto__ = (function (){var statearr_34204 = f__32564__auto__.call(null);
(statearr_34204[(6)] = c__32563__auto__);

return statearr_34204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto__))
);

return c__32563__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34232 = arguments.length;
switch (G__34232) {
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
var G__34235 = arguments.length;
switch (G__34235) {
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
var G__34238 = arguments.length;
switch (G__34238) {
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
var c__32563__auto___34285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto___34285,out){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto___34285,out){
return (function (state_34262){
var state_val_34263 = (state_34262[(1)]);
if((state_val_34263 === (7))){
var inst_34257 = (state_34262[(2)]);
var state_34262__$1 = state_34262;
var statearr_34264_34286 = state_34262__$1;
(statearr_34264_34286[(2)] = inst_34257);

(statearr_34264_34286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34263 === (1))){
var inst_34239 = null;
var state_34262__$1 = (function (){var statearr_34265 = state_34262;
(statearr_34265[(7)] = inst_34239);

return statearr_34265;
})();
var statearr_34266_34287 = state_34262__$1;
(statearr_34266_34287[(2)] = null);

(statearr_34266_34287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34263 === (4))){
var inst_34242 = (state_34262[(8)]);
var inst_34242__$1 = (state_34262[(2)]);
var inst_34243 = (inst_34242__$1 == null);
var inst_34244 = cljs.core.not.call(null,inst_34243);
var state_34262__$1 = (function (){var statearr_34267 = state_34262;
(statearr_34267[(8)] = inst_34242__$1);

return statearr_34267;
})();
if(inst_34244){
var statearr_34268_34288 = state_34262__$1;
(statearr_34268_34288[(1)] = (5));

} else {
var statearr_34269_34289 = state_34262__$1;
(statearr_34269_34289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34263 === (6))){
var state_34262__$1 = state_34262;
var statearr_34270_34290 = state_34262__$1;
(statearr_34270_34290[(2)] = null);

(statearr_34270_34290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34263 === (3))){
var inst_34259 = (state_34262[(2)]);
var inst_34260 = cljs.core.async.close_BANG_.call(null,out);
var state_34262__$1 = (function (){var statearr_34271 = state_34262;
(statearr_34271[(9)] = inst_34259);

return statearr_34271;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34262__$1,inst_34260);
} else {
if((state_val_34263 === (2))){
var state_34262__$1 = state_34262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34262__$1,(4),ch);
} else {
if((state_val_34263 === (11))){
var inst_34242 = (state_34262[(8)]);
var inst_34251 = (state_34262[(2)]);
var inst_34239 = inst_34242;
var state_34262__$1 = (function (){var statearr_34272 = state_34262;
(statearr_34272[(10)] = inst_34251);

(statearr_34272[(7)] = inst_34239);

return statearr_34272;
})();
var statearr_34273_34291 = state_34262__$1;
(statearr_34273_34291[(2)] = null);

(statearr_34273_34291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34263 === (9))){
var inst_34242 = (state_34262[(8)]);
var state_34262__$1 = state_34262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34262__$1,(11),out,inst_34242);
} else {
if((state_val_34263 === (5))){
var inst_34242 = (state_34262[(8)]);
var inst_34239 = (state_34262[(7)]);
var inst_34246 = cljs.core._EQ_.call(null,inst_34242,inst_34239);
var state_34262__$1 = state_34262;
if(inst_34246){
var statearr_34275_34292 = state_34262__$1;
(statearr_34275_34292[(1)] = (8));

} else {
var statearr_34276_34293 = state_34262__$1;
(statearr_34276_34293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34263 === (10))){
var inst_34254 = (state_34262[(2)]);
var state_34262__$1 = state_34262;
var statearr_34277_34294 = state_34262__$1;
(statearr_34277_34294[(2)] = inst_34254);

(statearr_34277_34294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34263 === (8))){
var inst_34239 = (state_34262[(7)]);
var tmp34274 = inst_34239;
var inst_34239__$1 = tmp34274;
var state_34262__$1 = (function (){var statearr_34278 = state_34262;
(statearr_34278[(7)] = inst_34239__$1);

return statearr_34278;
})();
var statearr_34279_34295 = state_34262__$1;
(statearr_34279_34295[(2)] = null);

(statearr_34279_34295[(1)] = (2));


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
});})(c__32563__auto___34285,out))
;
return ((function (switch__32475__auto__,c__32563__auto___34285,out){
return (function() {
var cljs$core$async$state_machine__32476__auto__ = null;
var cljs$core$async$state_machine__32476__auto____0 = (function (){
var statearr_34280 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34280[(0)] = cljs$core$async$state_machine__32476__auto__);

(statearr_34280[(1)] = (1));

return statearr_34280;
});
var cljs$core$async$state_machine__32476__auto____1 = (function (state_34262){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_34262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e34281){if((e34281 instanceof Object)){
var ex__32479__auto__ = e34281;
var statearr_34282_34296 = state_34262;
(statearr_34282_34296[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34297 = state_34262;
state_34262 = G__34297;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
cljs$core$async$state_machine__32476__auto__ = function(state_34262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32476__auto____1.call(this,state_34262);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32476__auto____0;
cljs$core$async$state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32476__auto____1;
return cljs$core$async$state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto___34285,out))
})();
var state__32565__auto__ = (function (){var statearr_34283 = f__32564__auto__.call(null);
(statearr_34283[(6)] = c__32563__auto___34285);

return statearr_34283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto___34285,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34299 = arguments.length;
switch (G__34299) {
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
var c__32563__auto___34365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto___34365,out){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto___34365,out){
return (function (state_34337){
var state_val_34338 = (state_34337[(1)]);
if((state_val_34338 === (7))){
var inst_34333 = (state_34337[(2)]);
var state_34337__$1 = state_34337;
var statearr_34339_34366 = state_34337__$1;
(statearr_34339_34366[(2)] = inst_34333);

(statearr_34339_34366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (1))){
var inst_34300 = (new Array(n));
var inst_34301 = inst_34300;
var inst_34302 = (0);
var state_34337__$1 = (function (){var statearr_34340 = state_34337;
(statearr_34340[(7)] = inst_34301);

(statearr_34340[(8)] = inst_34302);

return statearr_34340;
})();
var statearr_34341_34367 = state_34337__$1;
(statearr_34341_34367[(2)] = null);

(statearr_34341_34367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (4))){
var inst_34305 = (state_34337[(9)]);
var inst_34305__$1 = (state_34337[(2)]);
var inst_34306 = (inst_34305__$1 == null);
var inst_34307 = cljs.core.not.call(null,inst_34306);
var state_34337__$1 = (function (){var statearr_34342 = state_34337;
(statearr_34342[(9)] = inst_34305__$1);

return statearr_34342;
})();
if(inst_34307){
var statearr_34343_34368 = state_34337__$1;
(statearr_34343_34368[(1)] = (5));

} else {
var statearr_34344_34369 = state_34337__$1;
(statearr_34344_34369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (15))){
var inst_34327 = (state_34337[(2)]);
var state_34337__$1 = state_34337;
var statearr_34345_34370 = state_34337__$1;
(statearr_34345_34370[(2)] = inst_34327);

(statearr_34345_34370[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (13))){
var state_34337__$1 = state_34337;
var statearr_34346_34371 = state_34337__$1;
(statearr_34346_34371[(2)] = null);

(statearr_34346_34371[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (6))){
var inst_34302 = (state_34337[(8)]);
var inst_34323 = (inst_34302 > (0));
var state_34337__$1 = state_34337;
if(cljs.core.truth_(inst_34323)){
var statearr_34347_34372 = state_34337__$1;
(statearr_34347_34372[(1)] = (12));

} else {
var statearr_34348_34373 = state_34337__$1;
(statearr_34348_34373[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (3))){
var inst_34335 = (state_34337[(2)]);
var state_34337__$1 = state_34337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34337__$1,inst_34335);
} else {
if((state_val_34338 === (12))){
var inst_34301 = (state_34337[(7)]);
var inst_34325 = cljs.core.vec.call(null,inst_34301);
var state_34337__$1 = state_34337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34337__$1,(15),out,inst_34325);
} else {
if((state_val_34338 === (2))){
var state_34337__$1 = state_34337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34337__$1,(4),ch);
} else {
if((state_val_34338 === (11))){
var inst_34317 = (state_34337[(2)]);
var inst_34318 = (new Array(n));
var inst_34301 = inst_34318;
var inst_34302 = (0);
var state_34337__$1 = (function (){var statearr_34349 = state_34337;
(statearr_34349[(7)] = inst_34301);

(statearr_34349[(10)] = inst_34317);

(statearr_34349[(8)] = inst_34302);

return statearr_34349;
})();
var statearr_34350_34374 = state_34337__$1;
(statearr_34350_34374[(2)] = null);

(statearr_34350_34374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (9))){
var inst_34301 = (state_34337[(7)]);
var inst_34315 = cljs.core.vec.call(null,inst_34301);
var state_34337__$1 = state_34337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34337__$1,(11),out,inst_34315);
} else {
if((state_val_34338 === (5))){
var inst_34301 = (state_34337[(7)]);
var inst_34305 = (state_34337[(9)]);
var inst_34310 = (state_34337[(11)]);
var inst_34302 = (state_34337[(8)]);
var inst_34309 = (inst_34301[inst_34302] = inst_34305);
var inst_34310__$1 = (inst_34302 + (1));
var inst_34311 = (inst_34310__$1 < n);
var state_34337__$1 = (function (){var statearr_34351 = state_34337;
(statearr_34351[(11)] = inst_34310__$1);

(statearr_34351[(12)] = inst_34309);

return statearr_34351;
})();
if(cljs.core.truth_(inst_34311)){
var statearr_34352_34375 = state_34337__$1;
(statearr_34352_34375[(1)] = (8));

} else {
var statearr_34353_34376 = state_34337__$1;
(statearr_34353_34376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (14))){
var inst_34330 = (state_34337[(2)]);
var inst_34331 = cljs.core.async.close_BANG_.call(null,out);
var state_34337__$1 = (function (){var statearr_34355 = state_34337;
(statearr_34355[(13)] = inst_34330);

return statearr_34355;
})();
var statearr_34356_34377 = state_34337__$1;
(statearr_34356_34377[(2)] = inst_34331);

(statearr_34356_34377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (10))){
var inst_34321 = (state_34337[(2)]);
var state_34337__$1 = state_34337;
var statearr_34357_34378 = state_34337__$1;
(statearr_34357_34378[(2)] = inst_34321);

(statearr_34357_34378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (8))){
var inst_34301 = (state_34337[(7)]);
var inst_34310 = (state_34337[(11)]);
var tmp34354 = inst_34301;
var inst_34301__$1 = tmp34354;
var inst_34302 = inst_34310;
var state_34337__$1 = (function (){var statearr_34358 = state_34337;
(statearr_34358[(7)] = inst_34301__$1);

(statearr_34358[(8)] = inst_34302);

return statearr_34358;
})();
var statearr_34359_34379 = state_34337__$1;
(statearr_34359_34379[(2)] = null);

(statearr_34359_34379[(1)] = (2));


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
});})(c__32563__auto___34365,out))
;
return ((function (switch__32475__auto__,c__32563__auto___34365,out){
return (function() {
var cljs$core$async$state_machine__32476__auto__ = null;
var cljs$core$async$state_machine__32476__auto____0 = (function (){
var statearr_34360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34360[(0)] = cljs$core$async$state_machine__32476__auto__);

(statearr_34360[(1)] = (1));

return statearr_34360;
});
var cljs$core$async$state_machine__32476__auto____1 = (function (state_34337){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_34337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e34361){if((e34361 instanceof Object)){
var ex__32479__auto__ = e34361;
var statearr_34362_34380 = state_34337;
(statearr_34362_34380[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34381 = state_34337;
state_34337 = G__34381;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
cljs$core$async$state_machine__32476__auto__ = function(state_34337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32476__auto____1.call(this,state_34337);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32476__auto____0;
cljs$core$async$state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32476__auto____1;
return cljs$core$async$state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto___34365,out))
})();
var state__32565__auto__ = (function (){var statearr_34363 = f__32564__auto__.call(null);
(statearr_34363[(6)] = c__32563__auto___34365);

return statearr_34363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto___34365,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34383 = arguments.length;
switch (G__34383) {
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
var c__32563__auto___34453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto___34453,out){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto___34453,out){
return (function (state_34425){
var state_val_34426 = (state_34425[(1)]);
if((state_val_34426 === (7))){
var inst_34421 = (state_34425[(2)]);
var state_34425__$1 = state_34425;
var statearr_34427_34454 = state_34425__$1;
(statearr_34427_34454[(2)] = inst_34421);

(statearr_34427_34454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34426 === (1))){
var inst_34384 = [];
var inst_34385 = inst_34384;
var inst_34386 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34425__$1 = (function (){var statearr_34428 = state_34425;
(statearr_34428[(7)] = inst_34385);

(statearr_34428[(8)] = inst_34386);

return statearr_34428;
})();
var statearr_34429_34455 = state_34425__$1;
(statearr_34429_34455[(2)] = null);

(statearr_34429_34455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34426 === (4))){
var inst_34389 = (state_34425[(9)]);
var inst_34389__$1 = (state_34425[(2)]);
var inst_34390 = (inst_34389__$1 == null);
var inst_34391 = cljs.core.not.call(null,inst_34390);
var state_34425__$1 = (function (){var statearr_34430 = state_34425;
(statearr_34430[(9)] = inst_34389__$1);

return statearr_34430;
})();
if(inst_34391){
var statearr_34431_34456 = state_34425__$1;
(statearr_34431_34456[(1)] = (5));

} else {
var statearr_34432_34457 = state_34425__$1;
(statearr_34432_34457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34426 === (15))){
var inst_34415 = (state_34425[(2)]);
var state_34425__$1 = state_34425;
var statearr_34433_34458 = state_34425__$1;
(statearr_34433_34458[(2)] = inst_34415);

(statearr_34433_34458[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34426 === (13))){
var state_34425__$1 = state_34425;
var statearr_34434_34459 = state_34425__$1;
(statearr_34434_34459[(2)] = null);

(statearr_34434_34459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34426 === (6))){
var inst_34385 = (state_34425[(7)]);
var inst_34410 = inst_34385.length;
var inst_34411 = (inst_34410 > (0));
var state_34425__$1 = state_34425;
if(cljs.core.truth_(inst_34411)){
var statearr_34435_34460 = state_34425__$1;
(statearr_34435_34460[(1)] = (12));

} else {
var statearr_34436_34461 = state_34425__$1;
(statearr_34436_34461[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34426 === (3))){
var inst_34423 = (state_34425[(2)]);
var state_34425__$1 = state_34425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34425__$1,inst_34423);
} else {
if((state_val_34426 === (12))){
var inst_34385 = (state_34425[(7)]);
var inst_34413 = cljs.core.vec.call(null,inst_34385);
var state_34425__$1 = state_34425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34425__$1,(15),out,inst_34413);
} else {
if((state_val_34426 === (2))){
var state_34425__$1 = state_34425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34425__$1,(4),ch);
} else {
if((state_val_34426 === (11))){
var inst_34393 = (state_34425[(10)]);
var inst_34389 = (state_34425[(9)]);
var inst_34403 = (state_34425[(2)]);
var inst_34404 = [];
var inst_34405 = inst_34404.push(inst_34389);
var inst_34385 = inst_34404;
var inst_34386 = inst_34393;
var state_34425__$1 = (function (){var statearr_34437 = state_34425;
(statearr_34437[(11)] = inst_34405);

(statearr_34437[(7)] = inst_34385);

(statearr_34437[(12)] = inst_34403);

(statearr_34437[(8)] = inst_34386);

return statearr_34437;
})();
var statearr_34438_34462 = state_34425__$1;
(statearr_34438_34462[(2)] = null);

(statearr_34438_34462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34426 === (9))){
var inst_34385 = (state_34425[(7)]);
var inst_34401 = cljs.core.vec.call(null,inst_34385);
var state_34425__$1 = state_34425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34425__$1,(11),out,inst_34401);
} else {
if((state_val_34426 === (5))){
var inst_34393 = (state_34425[(10)]);
var inst_34389 = (state_34425[(9)]);
var inst_34386 = (state_34425[(8)]);
var inst_34393__$1 = f.call(null,inst_34389);
var inst_34394 = cljs.core._EQ_.call(null,inst_34393__$1,inst_34386);
var inst_34395 = cljs.core.keyword_identical_QMARK_.call(null,inst_34386,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34396 = (inst_34394) || (inst_34395);
var state_34425__$1 = (function (){var statearr_34439 = state_34425;
(statearr_34439[(10)] = inst_34393__$1);

return statearr_34439;
})();
if(cljs.core.truth_(inst_34396)){
var statearr_34440_34463 = state_34425__$1;
(statearr_34440_34463[(1)] = (8));

} else {
var statearr_34441_34464 = state_34425__$1;
(statearr_34441_34464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34426 === (14))){
var inst_34418 = (state_34425[(2)]);
var inst_34419 = cljs.core.async.close_BANG_.call(null,out);
var state_34425__$1 = (function (){var statearr_34443 = state_34425;
(statearr_34443[(13)] = inst_34418);

return statearr_34443;
})();
var statearr_34444_34465 = state_34425__$1;
(statearr_34444_34465[(2)] = inst_34419);

(statearr_34444_34465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34426 === (10))){
var inst_34408 = (state_34425[(2)]);
var state_34425__$1 = state_34425;
var statearr_34445_34466 = state_34425__$1;
(statearr_34445_34466[(2)] = inst_34408);

(statearr_34445_34466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34426 === (8))){
var inst_34393 = (state_34425[(10)]);
var inst_34389 = (state_34425[(9)]);
var inst_34385 = (state_34425[(7)]);
var inst_34398 = inst_34385.push(inst_34389);
var tmp34442 = inst_34385;
var inst_34385__$1 = tmp34442;
var inst_34386 = inst_34393;
var state_34425__$1 = (function (){var statearr_34446 = state_34425;
(statearr_34446[(14)] = inst_34398);

(statearr_34446[(7)] = inst_34385__$1);

(statearr_34446[(8)] = inst_34386);

return statearr_34446;
})();
var statearr_34447_34467 = state_34425__$1;
(statearr_34447_34467[(2)] = null);

(statearr_34447_34467[(1)] = (2));


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
});})(c__32563__auto___34453,out))
;
return ((function (switch__32475__auto__,c__32563__auto___34453,out){
return (function() {
var cljs$core$async$state_machine__32476__auto__ = null;
var cljs$core$async$state_machine__32476__auto____0 = (function (){
var statearr_34448 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34448[(0)] = cljs$core$async$state_machine__32476__auto__);

(statearr_34448[(1)] = (1));

return statearr_34448;
});
var cljs$core$async$state_machine__32476__auto____1 = (function (state_34425){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_34425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e34449){if((e34449 instanceof Object)){
var ex__32479__auto__ = e34449;
var statearr_34450_34468 = state_34425;
(statearr_34450_34468[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34469 = state_34425;
state_34425 = G__34469;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
cljs$core$async$state_machine__32476__auto__ = function(state_34425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32476__auto____1.call(this,state_34425);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32476__auto____0;
cljs$core$async$state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32476__auto____1;
return cljs$core$async$state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto___34453,out))
})();
var state__32565__auto__ = (function (){var statearr_34451 = f__32564__auto__.call(null);
(statearr_34451[(6)] = c__32563__auto___34453);

return statearr_34451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto___34453,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1504451411765
