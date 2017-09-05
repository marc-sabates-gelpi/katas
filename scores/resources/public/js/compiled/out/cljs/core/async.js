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
var G__32625 = arguments.length;
switch (G__32625) {
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
if(typeof cljs.core.async.t_cljs$core$async32626 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32626 = (function (f,blockable,meta32627){
this.f = f;
this.blockable = blockable;
this.meta32627 = meta32627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32628,meta32627__$1){
var self__ = this;
var _32628__$1 = this;
return (new cljs.core.async.t_cljs$core$async32626(self__.f,self__.blockable,meta32627__$1));
});

cljs.core.async.t_cljs$core$async32626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32628){
var self__ = this;
var _32628__$1 = this;
return self__.meta32627;
});

cljs.core.async.t_cljs$core$async32626.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32626.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32626.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32626.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32626.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32627","meta32627",116620474,null)], null);
});

cljs.core.async.t_cljs$core$async32626.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32626.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32626";

cljs.core.async.t_cljs$core$async32626.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async32626");
});

cljs.core.async.__GT_t_cljs$core$async32626 = (function cljs$core$async$__GT_t_cljs$core$async32626(f__$1,blockable__$1,meta32627){
return (new cljs.core.async.t_cljs$core$async32626(f__$1,blockable__$1,meta32627));
});

}

return (new cljs.core.async.t_cljs$core$async32626(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32632 = arguments.length;
switch (G__32632) {
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
var G__32635 = arguments.length;
switch (G__32635) {
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
var G__32638 = arguments.length;
switch (G__32638) {
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
var val_32640 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32640);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32640,ret){
return (function (){
return fn1.call(null,val_32640);
});})(val_32640,ret))
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
var G__32642 = arguments.length;
switch (G__32642) {
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
var n__29231__auto___32644 = n;
var x_32645 = (0);
while(true){
if((x_32645 < n__29231__auto___32644)){
(a[x_32645] = (0));

var G__32646 = (x_32645 + (1));
x_32645 = G__32646;
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

var G__32647 = (i + (1));
i = G__32647;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32648 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32648 = (function (flag,meta32649){
this.flag = flag;
this.meta32649 = meta32649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32650,meta32649__$1){
var self__ = this;
var _32650__$1 = this;
return (new cljs.core.async.t_cljs$core$async32648(self__.flag,meta32649__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32648.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32650){
var self__ = this;
var _32650__$1 = this;
return self__.meta32649;
});})(flag))
;

cljs.core.async.t_cljs$core$async32648.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32648.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32648.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32648.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32648.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32649","meta32649",-510881765,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32648.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32648";

cljs.core.async.t_cljs$core$async32648.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async32648");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32648 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32648(flag__$1,meta32649){
return (new cljs.core.async.t_cljs$core$async32648(flag__$1,meta32649));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32648(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32651 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32651 = (function (flag,cb,meta32652){
this.flag = flag;
this.cb = cb;
this.meta32652 = meta32652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32653,meta32652__$1){
var self__ = this;
var _32653__$1 = this;
return (new cljs.core.async.t_cljs$core$async32651(self__.flag,self__.cb,meta32652__$1));
});

cljs.core.async.t_cljs$core$async32651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32653){
var self__ = this;
var _32653__$1 = this;
return self__.meta32652;
});

cljs.core.async.t_cljs$core$async32651.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32651.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32651.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32651.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32651.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32652","meta32652",-1494184648,null)], null);
});

cljs.core.async.t_cljs$core$async32651.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32651.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32651";

cljs.core.async.t_cljs$core$async32651.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async32651");
});

cljs.core.async.__GT_t_cljs$core$async32651 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32651(flag__$1,cb__$1,meta32652){
return (new cljs.core.async.t_cljs$core$async32651(flag__$1,cb__$1,meta32652));
});

}

return (new cljs.core.async.t_cljs$core$async32651(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32654_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32654_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32655_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32655_SHARP_,port], null));
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
var G__32656 = (i + (1));
i = G__32656;
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
var len__29455__auto___32662 = arguments.length;
var i__29456__auto___32663 = (0);
while(true){
if((i__29456__auto___32663 < len__29455__auto___32662)){
args__29462__auto__.push((arguments[i__29456__auto___32663]));

var G__32664 = (i__29456__auto___32663 + (1));
i__29456__auto___32663 = G__32664;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32659){
var map__32660 = p__32659;
var map__32660__$1 = ((((!((map__32660 == null)))?((((map__32660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32660.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32660):map__32660);
var opts = map__32660__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32657){
var G__32658 = cljs.core.first.call(null,seq32657);
var seq32657__$1 = cljs.core.next.call(null,seq32657);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32658,seq32657__$1);
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
var G__32666 = arguments.length;
switch (G__32666) {
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
var c__32579__auto___32712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto___32712){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto___32712){
return (function (state_32690){
var state_val_32691 = (state_32690[(1)]);
if((state_val_32691 === (7))){
var inst_32686 = (state_32690[(2)]);
var state_32690__$1 = state_32690;
var statearr_32692_32713 = state_32690__$1;
(statearr_32692_32713[(2)] = inst_32686);

(statearr_32692_32713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (1))){
var state_32690__$1 = state_32690;
var statearr_32693_32714 = state_32690__$1;
(statearr_32693_32714[(2)] = null);

(statearr_32693_32714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (4))){
var inst_32669 = (state_32690[(7)]);
var inst_32669__$1 = (state_32690[(2)]);
var inst_32670 = (inst_32669__$1 == null);
var state_32690__$1 = (function (){var statearr_32694 = state_32690;
(statearr_32694[(7)] = inst_32669__$1);

return statearr_32694;
})();
if(cljs.core.truth_(inst_32670)){
var statearr_32695_32715 = state_32690__$1;
(statearr_32695_32715[(1)] = (5));

} else {
var statearr_32696_32716 = state_32690__$1;
(statearr_32696_32716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (13))){
var state_32690__$1 = state_32690;
var statearr_32697_32717 = state_32690__$1;
(statearr_32697_32717[(2)] = null);

(statearr_32697_32717[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (6))){
var inst_32669 = (state_32690[(7)]);
var state_32690__$1 = state_32690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32690__$1,(11),to,inst_32669);
} else {
if((state_val_32691 === (3))){
var inst_32688 = (state_32690[(2)]);
var state_32690__$1 = state_32690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32690__$1,inst_32688);
} else {
if((state_val_32691 === (12))){
var state_32690__$1 = state_32690;
var statearr_32698_32718 = state_32690__$1;
(statearr_32698_32718[(2)] = null);

(statearr_32698_32718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (2))){
var state_32690__$1 = state_32690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32690__$1,(4),from);
} else {
if((state_val_32691 === (11))){
var inst_32679 = (state_32690[(2)]);
var state_32690__$1 = state_32690;
if(cljs.core.truth_(inst_32679)){
var statearr_32699_32719 = state_32690__$1;
(statearr_32699_32719[(1)] = (12));

} else {
var statearr_32700_32720 = state_32690__$1;
(statearr_32700_32720[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (9))){
var state_32690__$1 = state_32690;
var statearr_32701_32721 = state_32690__$1;
(statearr_32701_32721[(2)] = null);

(statearr_32701_32721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (5))){
var state_32690__$1 = state_32690;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32702_32722 = state_32690__$1;
(statearr_32702_32722[(1)] = (8));

} else {
var statearr_32703_32723 = state_32690__$1;
(statearr_32703_32723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (14))){
var inst_32684 = (state_32690[(2)]);
var state_32690__$1 = state_32690;
var statearr_32704_32724 = state_32690__$1;
(statearr_32704_32724[(2)] = inst_32684);

(statearr_32704_32724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (10))){
var inst_32676 = (state_32690[(2)]);
var state_32690__$1 = state_32690;
var statearr_32705_32725 = state_32690__$1;
(statearr_32705_32725[(2)] = inst_32676);

(statearr_32705_32725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (8))){
var inst_32673 = cljs.core.async.close_BANG_.call(null,to);
var state_32690__$1 = state_32690;
var statearr_32706_32726 = state_32690__$1;
(statearr_32706_32726[(2)] = inst_32673);

(statearr_32706_32726[(1)] = (10));


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
});})(c__32579__auto___32712))
;
return ((function (switch__32491__auto__,c__32579__auto___32712){
return (function() {
var cljs$core$async$state_machine__32492__auto__ = null;
var cljs$core$async$state_machine__32492__auto____0 = (function (){
var statearr_32707 = [null,null,null,null,null,null,null,null];
(statearr_32707[(0)] = cljs$core$async$state_machine__32492__auto__);

(statearr_32707[(1)] = (1));

return statearr_32707;
});
var cljs$core$async$state_machine__32492__auto____1 = (function (state_32690){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_32690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e32708){if((e32708 instanceof Object)){
var ex__32495__auto__ = e32708;
var statearr_32709_32727 = state_32690;
(statearr_32709_32727[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32728 = state_32690;
state_32690 = G__32728;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
cljs$core$async$state_machine__32492__auto__ = function(state_32690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32492__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32492__auto____1.call(this,state_32690);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32492__auto____0;
cljs$core$async$state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32492__auto____1;
return cljs$core$async$state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto___32712))
})();
var state__32581__auto__ = (function (){var statearr_32710 = f__32580__auto__.call(null);
(statearr_32710[(6)] = c__32579__auto___32712);

return statearr_32710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto___32712))
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
return (function (p__32729){
var vec__32730 = p__32729;
var v = cljs.core.nth.call(null,vec__32730,(0),null);
var p = cljs.core.nth.call(null,vec__32730,(1),null);
var job = vec__32730;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32579__auto___32901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto___32901,res,vec__32730,v,p,job,jobs,results){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto___32901,res,vec__32730,v,p,job,jobs,results){
return (function (state_32737){
var state_val_32738 = (state_32737[(1)]);
if((state_val_32738 === (1))){
var state_32737__$1 = state_32737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32737__$1,(2),res,v);
} else {
if((state_val_32738 === (2))){
var inst_32734 = (state_32737[(2)]);
var inst_32735 = cljs.core.async.close_BANG_.call(null,res);
var state_32737__$1 = (function (){var statearr_32739 = state_32737;
(statearr_32739[(7)] = inst_32734);

return statearr_32739;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32737__$1,inst_32735);
} else {
return null;
}
}
});})(c__32579__auto___32901,res,vec__32730,v,p,job,jobs,results))
;
return ((function (switch__32491__auto__,c__32579__auto___32901,res,vec__32730,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____0 = (function (){
var statearr_32740 = [null,null,null,null,null,null,null,null];
(statearr_32740[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__);

(statearr_32740[(1)] = (1));

return statearr_32740;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____1 = (function (state_32737){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_32737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e32741){if((e32741 instanceof Object)){
var ex__32495__auto__ = e32741;
var statearr_32742_32902 = state_32737;
(statearr_32742_32902[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32903 = state_32737;
state_32737 = G__32903;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__ = function(state_32737){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____1.call(this,state_32737);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto___32901,res,vec__32730,v,p,job,jobs,results))
})();
var state__32581__auto__ = (function (){var statearr_32743 = f__32580__auto__.call(null);
(statearr_32743[(6)] = c__32579__auto___32901);

return statearr_32743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto___32901,res,vec__32730,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32744){
var vec__32745 = p__32744;
var v = cljs.core.nth.call(null,vec__32745,(0),null);
var p = cljs.core.nth.call(null,vec__32745,(1),null);
var job = vec__32745;
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
var n__29231__auto___32904 = n;
var __32905 = (0);
while(true){
if((__32905 < n__29231__auto___32904)){
var G__32748_32906 = type;
var G__32748_32907__$1 = (((G__32748_32906 instanceof cljs.core.Keyword))?G__32748_32906.fqn:null);
switch (G__32748_32907__$1) {
case "compute":
var c__32579__auto___32909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32905,c__32579__auto___32909,G__32748_32906,G__32748_32907__$1,n__29231__auto___32904,jobs,results,process,async){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (__32905,c__32579__auto___32909,G__32748_32906,G__32748_32907__$1,n__29231__auto___32904,jobs,results,process,async){
return (function (state_32761){
var state_val_32762 = (state_32761[(1)]);
if((state_val_32762 === (1))){
var state_32761__$1 = state_32761;
var statearr_32763_32910 = state_32761__$1;
(statearr_32763_32910[(2)] = null);

(statearr_32763_32910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32762 === (2))){
var state_32761__$1 = state_32761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32761__$1,(4),jobs);
} else {
if((state_val_32762 === (3))){
var inst_32759 = (state_32761[(2)]);
var state_32761__$1 = state_32761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32761__$1,inst_32759);
} else {
if((state_val_32762 === (4))){
var inst_32751 = (state_32761[(2)]);
var inst_32752 = process.call(null,inst_32751);
var state_32761__$1 = state_32761;
if(cljs.core.truth_(inst_32752)){
var statearr_32764_32911 = state_32761__$1;
(statearr_32764_32911[(1)] = (5));

} else {
var statearr_32765_32912 = state_32761__$1;
(statearr_32765_32912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32762 === (5))){
var state_32761__$1 = state_32761;
var statearr_32766_32913 = state_32761__$1;
(statearr_32766_32913[(2)] = null);

(statearr_32766_32913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32762 === (6))){
var state_32761__$1 = state_32761;
var statearr_32767_32914 = state_32761__$1;
(statearr_32767_32914[(2)] = null);

(statearr_32767_32914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32762 === (7))){
var inst_32757 = (state_32761[(2)]);
var state_32761__$1 = state_32761;
var statearr_32768_32915 = state_32761__$1;
(statearr_32768_32915[(2)] = inst_32757);

(statearr_32768_32915[(1)] = (3));


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
});})(__32905,c__32579__auto___32909,G__32748_32906,G__32748_32907__$1,n__29231__auto___32904,jobs,results,process,async))
;
return ((function (__32905,switch__32491__auto__,c__32579__auto___32909,G__32748_32906,G__32748_32907__$1,n__29231__auto___32904,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____0 = (function (){
var statearr_32769 = [null,null,null,null,null,null,null];
(statearr_32769[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__);

(statearr_32769[(1)] = (1));

return statearr_32769;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____1 = (function (state_32761){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_32761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e32770){if((e32770 instanceof Object)){
var ex__32495__auto__ = e32770;
var statearr_32771_32916 = state_32761;
(statearr_32771_32916[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32917 = state_32761;
state_32761 = G__32917;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__ = function(state_32761){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____1.call(this,state_32761);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__;
})()
;})(__32905,switch__32491__auto__,c__32579__auto___32909,G__32748_32906,G__32748_32907__$1,n__29231__auto___32904,jobs,results,process,async))
})();
var state__32581__auto__ = (function (){var statearr_32772 = f__32580__auto__.call(null);
(statearr_32772[(6)] = c__32579__auto___32909);

return statearr_32772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(__32905,c__32579__auto___32909,G__32748_32906,G__32748_32907__$1,n__29231__auto___32904,jobs,results,process,async))
);


break;
case "async":
var c__32579__auto___32918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32905,c__32579__auto___32918,G__32748_32906,G__32748_32907__$1,n__29231__auto___32904,jobs,results,process,async){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (__32905,c__32579__auto___32918,G__32748_32906,G__32748_32907__$1,n__29231__auto___32904,jobs,results,process,async){
return (function (state_32785){
var state_val_32786 = (state_32785[(1)]);
if((state_val_32786 === (1))){
var state_32785__$1 = state_32785;
var statearr_32787_32919 = state_32785__$1;
(statearr_32787_32919[(2)] = null);

(statearr_32787_32919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (2))){
var state_32785__$1 = state_32785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32785__$1,(4),jobs);
} else {
if((state_val_32786 === (3))){
var inst_32783 = (state_32785[(2)]);
var state_32785__$1 = state_32785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32785__$1,inst_32783);
} else {
if((state_val_32786 === (4))){
var inst_32775 = (state_32785[(2)]);
var inst_32776 = async.call(null,inst_32775);
var state_32785__$1 = state_32785;
if(cljs.core.truth_(inst_32776)){
var statearr_32788_32920 = state_32785__$1;
(statearr_32788_32920[(1)] = (5));

} else {
var statearr_32789_32921 = state_32785__$1;
(statearr_32789_32921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (5))){
var state_32785__$1 = state_32785;
var statearr_32790_32922 = state_32785__$1;
(statearr_32790_32922[(2)] = null);

(statearr_32790_32922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (6))){
var state_32785__$1 = state_32785;
var statearr_32791_32923 = state_32785__$1;
(statearr_32791_32923[(2)] = null);

(statearr_32791_32923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (7))){
var inst_32781 = (state_32785[(2)]);
var state_32785__$1 = state_32785;
var statearr_32792_32924 = state_32785__$1;
(statearr_32792_32924[(2)] = inst_32781);

(statearr_32792_32924[(1)] = (3));


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
});})(__32905,c__32579__auto___32918,G__32748_32906,G__32748_32907__$1,n__29231__auto___32904,jobs,results,process,async))
;
return ((function (__32905,switch__32491__auto__,c__32579__auto___32918,G__32748_32906,G__32748_32907__$1,n__29231__auto___32904,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____0 = (function (){
var statearr_32793 = [null,null,null,null,null,null,null];
(statearr_32793[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__);

(statearr_32793[(1)] = (1));

return statearr_32793;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____1 = (function (state_32785){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_32785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e32794){if((e32794 instanceof Object)){
var ex__32495__auto__ = e32794;
var statearr_32795_32925 = state_32785;
(statearr_32795_32925[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32926 = state_32785;
state_32785 = G__32926;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__ = function(state_32785){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____1.call(this,state_32785);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__;
})()
;})(__32905,switch__32491__auto__,c__32579__auto___32918,G__32748_32906,G__32748_32907__$1,n__29231__auto___32904,jobs,results,process,async))
})();
var state__32581__auto__ = (function (){var statearr_32796 = f__32580__auto__.call(null);
(statearr_32796[(6)] = c__32579__auto___32918);

return statearr_32796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(__32905,c__32579__auto___32918,G__32748_32906,G__32748_32907__$1,n__29231__auto___32904,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32748_32907__$1)].join('')));

}

var G__32927 = (__32905 + (1));
__32905 = G__32927;
continue;
} else {
}
break;
}

var c__32579__auto___32928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto___32928,jobs,results,process,async){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto___32928,jobs,results,process,async){
return (function (state_32818){
var state_val_32819 = (state_32818[(1)]);
if((state_val_32819 === (1))){
var state_32818__$1 = state_32818;
var statearr_32820_32929 = state_32818__$1;
(statearr_32820_32929[(2)] = null);

(statearr_32820_32929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (2))){
var state_32818__$1 = state_32818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32818__$1,(4),from);
} else {
if((state_val_32819 === (3))){
var inst_32816 = (state_32818[(2)]);
var state_32818__$1 = state_32818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32818__$1,inst_32816);
} else {
if((state_val_32819 === (4))){
var inst_32799 = (state_32818[(7)]);
var inst_32799__$1 = (state_32818[(2)]);
var inst_32800 = (inst_32799__$1 == null);
var state_32818__$1 = (function (){var statearr_32821 = state_32818;
(statearr_32821[(7)] = inst_32799__$1);

return statearr_32821;
})();
if(cljs.core.truth_(inst_32800)){
var statearr_32822_32930 = state_32818__$1;
(statearr_32822_32930[(1)] = (5));

} else {
var statearr_32823_32931 = state_32818__$1;
(statearr_32823_32931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (5))){
var inst_32802 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32818__$1 = state_32818;
var statearr_32824_32932 = state_32818__$1;
(statearr_32824_32932[(2)] = inst_32802);

(statearr_32824_32932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (6))){
var inst_32799 = (state_32818[(7)]);
var inst_32804 = (state_32818[(8)]);
var inst_32804__$1 = cljs.core.async.chan.call(null,(1));
var inst_32805 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32806 = [inst_32799,inst_32804__$1];
var inst_32807 = (new cljs.core.PersistentVector(null,2,(5),inst_32805,inst_32806,null));
var state_32818__$1 = (function (){var statearr_32825 = state_32818;
(statearr_32825[(8)] = inst_32804__$1);

return statearr_32825;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32818__$1,(8),jobs,inst_32807);
} else {
if((state_val_32819 === (7))){
var inst_32814 = (state_32818[(2)]);
var state_32818__$1 = state_32818;
var statearr_32826_32933 = state_32818__$1;
(statearr_32826_32933[(2)] = inst_32814);

(statearr_32826_32933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (8))){
var inst_32804 = (state_32818[(8)]);
var inst_32809 = (state_32818[(2)]);
var state_32818__$1 = (function (){var statearr_32827 = state_32818;
(statearr_32827[(9)] = inst_32809);

return statearr_32827;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32818__$1,(9),results,inst_32804);
} else {
if((state_val_32819 === (9))){
var inst_32811 = (state_32818[(2)]);
var state_32818__$1 = (function (){var statearr_32828 = state_32818;
(statearr_32828[(10)] = inst_32811);

return statearr_32828;
})();
var statearr_32829_32934 = state_32818__$1;
(statearr_32829_32934[(2)] = null);

(statearr_32829_32934[(1)] = (2));


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
});})(c__32579__auto___32928,jobs,results,process,async))
;
return ((function (switch__32491__auto__,c__32579__auto___32928,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____0 = (function (){
var statearr_32830 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32830[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__);

(statearr_32830[(1)] = (1));

return statearr_32830;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____1 = (function (state_32818){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_32818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e32831){if((e32831 instanceof Object)){
var ex__32495__auto__ = e32831;
var statearr_32832_32935 = state_32818;
(statearr_32832_32935[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32936 = state_32818;
state_32818 = G__32936;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__ = function(state_32818){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____1.call(this,state_32818);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto___32928,jobs,results,process,async))
})();
var state__32581__auto__ = (function (){var statearr_32833 = f__32580__auto__.call(null);
(statearr_32833[(6)] = c__32579__auto___32928);

return statearr_32833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto___32928,jobs,results,process,async))
);


var c__32579__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto__,jobs,results,process,async){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto__,jobs,results,process,async){
return (function (state_32871){
var state_val_32872 = (state_32871[(1)]);
if((state_val_32872 === (7))){
var inst_32867 = (state_32871[(2)]);
var state_32871__$1 = state_32871;
var statearr_32873_32937 = state_32871__$1;
(statearr_32873_32937[(2)] = inst_32867);

(statearr_32873_32937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (20))){
var state_32871__$1 = state_32871;
var statearr_32874_32938 = state_32871__$1;
(statearr_32874_32938[(2)] = null);

(statearr_32874_32938[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (1))){
var state_32871__$1 = state_32871;
var statearr_32875_32939 = state_32871__$1;
(statearr_32875_32939[(2)] = null);

(statearr_32875_32939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (4))){
var inst_32836 = (state_32871[(7)]);
var inst_32836__$1 = (state_32871[(2)]);
var inst_32837 = (inst_32836__$1 == null);
var state_32871__$1 = (function (){var statearr_32876 = state_32871;
(statearr_32876[(7)] = inst_32836__$1);

return statearr_32876;
})();
if(cljs.core.truth_(inst_32837)){
var statearr_32877_32940 = state_32871__$1;
(statearr_32877_32940[(1)] = (5));

} else {
var statearr_32878_32941 = state_32871__$1;
(statearr_32878_32941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (15))){
var inst_32849 = (state_32871[(8)]);
var state_32871__$1 = state_32871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32871__$1,(18),to,inst_32849);
} else {
if((state_val_32872 === (21))){
var inst_32862 = (state_32871[(2)]);
var state_32871__$1 = state_32871;
var statearr_32879_32942 = state_32871__$1;
(statearr_32879_32942[(2)] = inst_32862);

(statearr_32879_32942[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (13))){
var inst_32864 = (state_32871[(2)]);
var state_32871__$1 = (function (){var statearr_32880 = state_32871;
(statearr_32880[(9)] = inst_32864);

return statearr_32880;
})();
var statearr_32881_32943 = state_32871__$1;
(statearr_32881_32943[(2)] = null);

(statearr_32881_32943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (6))){
var inst_32836 = (state_32871[(7)]);
var state_32871__$1 = state_32871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32871__$1,(11),inst_32836);
} else {
if((state_val_32872 === (17))){
var inst_32857 = (state_32871[(2)]);
var state_32871__$1 = state_32871;
if(cljs.core.truth_(inst_32857)){
var statearr_32882_32944 = state_32871__$1;
(statearr_32882_32944[(1)] = (19));

} else {
var statearr_32883_32945 = state_32871__$1;
(statearr_32883_32945[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (3))){
var inst_32869 = (state_32871[(2)]);
var state_32871__$1 = state_32871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32871__$1,inst_32869);
} else {
if((state_val_32872 === (12))){
var inst_32846 = (state_32871[(10)]);
var state_32871__$1 = state_32871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32871__$1,(14),inst_32846);
} else {
if((state_val_32872 === (2))){
var state_32871__$1 = state_32871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32871__$1,(4),results);
} else {
if((state_val_32872 === (19))){
var state_32871__$1 = state_32871;
var statearr_32884_32946 = state_32871__$1;
(statearr_32884_32946[(2)] = null);

(statearr_32884_32946[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (11))){
var inst_32846 = (state_32871[(2)]);
var state_32871__$1 = (function (){var statearr_32885 = state_32871;
(statearr_32885[(10)] = inst_32846);

return statearr_32885;
})();
var statearr_32886_32947 = state_32871__$1;
(statearr_32886_32947[(2)] = null);

(statearr_32886_32947[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (9))){
var state_32871__$1 = state_32871;
var statearr_32887_32948 = state_32871__$1;
(statearr_32887_32948[(2)] = null);

(statearr_32887_32948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (5))){
var state_32871__$1 = state_32871;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32888_32949 = state_32871__$1;
(statearr_32888_32949[(1)] = (8));

} else {
var statearr_32889_32950 = state_32871__$1;
(statearr_32889_32950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (14))){
var inst_32849 = (state_32871[(8)]);
var inst_32851 = (state_32871[(11)]);
var inst_32849__$1 = (state_32871[(2)]);
var inst_32850 = (inst_32849__$1 == null);
var inst_32851__$1 = cljs.core.not.call(null,inst_32850);
var state_32871__$1 = (function (){var statearr_32890 = state_32871;
(statearr_32890[(8)] = inst_32849__$1);

(statearr_32890[(11)] = inst_32851__$1);

return statearr_32890;
})();
if(inst_32851__$1){
var statearr_32891_32951 = state_32871__$1;
(statearr_32891_32951[(1)] = (15));

} else {
var statearr_32892_32952 = state_32871__$1;
(statearr_32892_32952[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (16))){
var inst_32851 = (state_32871[(11)]);
var state_32871__$1 = state_32871;
var statearr_32893_32953 = state_32871__$1;
(statearr_32893_32953[(2)] = inst_32851);

(statearr_32893_32953[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (10))){
var inst_32843 = (state_32871[(2)]);
var state_32871__$1 = state_32871;
var statearr_32894_32954 = state_32871__$1;
(statearr_32894_32954[(2)] = inst_32843);

(statearr_32894_32954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (18))){
var inst_32854 = (state_32871[(2)]);
var state_32871__$1 = state_32871;
var statearr_32895_32955 = state_32871__$1;
(statearr_32895_32955[(2)] = inst_32854);

(statearr_32895_32955[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (8))){
var inst_32840 = cljs.core.async.close_BANG_.call(null,to);
var state_32871__$1 = state_32871;
var statearr_32896_32956 = state_32871__$1;
(statearr_32896_32956[(2)] = inst_32840);

(statearr_32896_32956[(1)] = (10));


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
});})(c__32579__auto__,jobs,results,process,async))
;
return ((function (switch__32491__auto__,c__32579__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____0 = (function (){
var statearr_32897 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32897[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__);

(statearr_32897[(1)] = (1));

return statearr_32897;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____1 = (function (state_32871){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_32871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e32898){if((e32898 instanceof Object)){
var ex__32495__auto__ = e32898;
var statearr_32899_32957 = state_32871;
(statearr_32899_32957[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32958 = state_32871;
state_32871 = G__32958;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__ = function(state_32871){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____1.call(this,state_32871);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32492__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto__,jobs,results,process,async))
})();
var state__32581__auto__ = (function (){var statearr_32900 = f__32580__auto__.call(null);
(statearr_32900[(6)] = c__32579__auto__);

return statearr_32900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto__,jobs,results,process,async))
);

return c__32579__auto__;
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
var G__32960 = arguments.length;
switch (G__32960) {
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
var G__32963 = arguments.length;
switch (G__32963) {
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
var G__32966 = arguments.length;
switch (G__32966) {
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
var c__32579__auto___33015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto___33015,tc,fc){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto___33015,tc,fc){
return (function (state_32992){
var state_val_32993 = (state_32992[(1)]);
if((state_val_32993 === (7))){
var inst_32988 = (state_32992[(2)]);
var state_32992__$1 = state_32992;
var statearr_32994_33016 = state_32992__$1;
(statearr_32994_33016[(2)] = inst_32988);

(statearr_32994_33016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32993 === (1))){
var state_32992__$1 = state_32992;
var statearr_32995_33017 = state_32992__$1;
(statearr_32995_33017[(2)] = null);

(statearr_32995_33017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32993 === (4))){
var inst_32969 = (state_32992[(7)]);
var inst_32969__$1 = (state_32992[(2)]);
var inst_32970 = (inst_32969__$1 == null);
var state_32992__$1 = (function (){var statearr_32996 = state_32992;
(statearr_32996[(7)] = inst_32969__$1);

return statearr_32996;
})();
if(cljs.core.truth_(inst_32970)){
var statearr_32997_33018 = state_32992__$1;
(statearr_32997_33018[(1)] = (5));

} else {
var statearr_32998_33019 = state_32992__$1;
(statearr_32998_33019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32993 === (13))){
var state_32992__$1 = state_32992;
var statearr_32999_33020 = state_32992__$1;
(statearr_32999_33020[(2)] = null);

(statearr_32999_33020[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32993 === (6))){
var inst_32969 = (state_32992[(7)]);
var inst_32975 = p.call(null,inst_32969);
var state_32992__$1 = state_32992;
if(cljs.core.truth_(inst_32975)){
var statearr_33000_33021 = state_32992__$1;
(statearr_33000_33021[(1)] = (9));

} else {
var statearr_33001_33022 = state_32992__$1;
(statearr_33001_33022[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32993 === (3))){
var inst_32990 = (state_32992[(2)]);
var state_32992__$1 = state_32992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32992__$1,inst_32990);
} else {
if((state_val_32993 === (12))){
var state_32992__$1 = state_32992;
var statearr_33002_33023 = state_32992__$1;
(statearr_33002_33023[(2)] = null);

(statearr_33002_33023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32993 === (2))){
var state_32992__$1 = state_32992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32992__$1,(4),ch);
} else {
if((state_val_32993 === (11))){
var inst_32969 = (state_32992[(7)]);
var inst_32979 = (state_32992[(2)]);
var state_32992__$1 = state_32992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32992__$1,(8),inst_32979,inst_32969);
} else {
if((state_val_32993 === (9))){
var state_32992__$1 = state_32992;
var statearr_33003_33024 = state_32992__$1;
(statearr_33003_33024[(2)] = tc);

(statearr_33003_33024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32993 === (5))){
var inst_32972 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32973 = cljs.core.async.close_BANG_.call(null,fc);
var state_32992__$1 = (function (){var statearr_33004 = state_32992;
(statearr_33004[(8)] = inst_32972);

return statearr_33004;
})();
var statearr_33005_33025 = state_32992__$1;
(statearr_33005_33025[(2)] = inst_32973);

(statearr_33005_33025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32993 === (14))){
var inst_32986 = (state_32992[(2)]);
var state_32992__$1 = state_32992;
var statearr_33006_33026 = state_32992__$1;
(statearr_33006_33026[(2)] = inst_32986);

(statearr_33006_33026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32993 === (10))){
var state_32992__$1 = state_32992;
var statearr_33007_33027 = state_32992__$1;
(statearr_33007_33027[(2)] = fc);

(statearr_33007_33027[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32993 === (8))){
var inst_32981 = (state_32992[(2)]);
var state_32992__$1 = state_32992;
if(cljs.core.truth_(inst_32981)){
var statearr_33008_33028 = state_32992__$1;
(statearr_33008_33028[(1)] = (12));

} else {
var statearr_33009_33029 = state_32992__$1;
(statearr_33009_33029[(1)] = (13));

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
});})(c__32579__auto___33015,tc,fc))
;
return ((function (switch__32491__auto__,c__32579__auto___33015,tc,fc){
return (function() {
var cljs$core$async$state_machine__32492__auto__ = null;
var cljs$core$async$state_machine__32492__auto____0 = (function (){
var statearr_33010 = [null,null,null,null,null,null,null,null,null];
(statearr_33010[(0)] = cljs$core$async$state_machine__32492__auto__);

(statearr_33010[(1)] = (1));

return statearr_33010;
});
var cljs$core$async$state_machine__32492__auto____1 = (function (state_32992){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_32992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e33011){if((e33011 instanceof Object)){
var ex__32495__auto__ = e33011;
var statearr_33012_33030 = state_32992;
(statearr_33012_33030[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33031 = state_32992;
state_32992 = G__33031;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
cljs$core$async$state_machine__32492__auto__ = function(state_32992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32492__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32492__auto____1.call(this,state_32992);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32492__auto____0;
cljs$core$async$state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32492__auto____1;
return cljs$core$async$state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto___33015,tc,fc))
})();
var state__32581__auto__ = (function (){var statearr_33013 = f__32580__auto__.call(null);
(statearr_33013[(6)] = c__32579__auto___33015);

return statearr_33013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto___33015,tc,fc))
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
var c__32579__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto__){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto__){
return (function (state_33052){
var state_val_33053 = (state_33052[(1)]);
if((state_val_33053 === (7))){
var inst_33048 = (state_33052[(2)]);
var state_33052__$1 = state_33052;
var statearr_33054_33072 = state_33052__$1;
(statearr_33054_33072[(2)] = inst_33048);

(statearr_33054_33072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33053 === (1))){
var inst_33032 = init;
var state_33052__$1 = (function (){var statearr_33055 = state_33052;
(statearr_33055[(7)] = inst_33032);

return statearr_33055;
})();
var statearr_33056_33073 = state_33052__$1;
(statearr_33056_33073[(2)] = null);

(statearr_33056_33073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33053 === (4))){
var inst_33035 = (state_33052[(8)]);
var inst_33035__$1 = (state_33052[(2)]);
var inst_33036 = (inst_33035__$1 == null);
var state_33052__$1 = (function (){var statearr_33057 = state_33052;
(statearr_33057[(8)] = inst_33035__$1);

return statearr_33057;
})();
if(cljs.core.truth_(inst_33036)){
var statearr_33058_33074 = state_33052__$1;
(statearr_33058_33074[(1)] = (5));

} else {
var statearr_33059_33075 = state_33052__$1;
(statearr_33059_33075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33053 === (6))){
var inst_33032 = (state_33052[(7)]);
var inst_33035 = (state_33052[(8)]);
var inst_33039 = (state_33052[(9)]);
var inst_33039__$1 = f.call(null,inst_33032,inst_33035);
var inst_33040 = cljs.core.reduced_QMARK_.call(null,inst_33039__$1);
var state_33052__$1 = (function (){var statearr_33060 = state_33052;
(statearr_33060[(9)] = inst_33039__$1);

return statearr_33060;
})();
if(inst_33040){
var statearr_33061_33076 = state_33052__$1;
(statearr_33061_33076[(1)] = (8));

} else {
var statearr_33062_33077 = state_33052__$1;
(statearr_33062_33077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33053 === (3))){
var inst_33050 = (state_33052[(2)]);
var state_33052__$1 = state_33052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33052__$1,inst_33050);
} else {
if((state_val_33053 === (2))){
var state_33052__$1 = state_33052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33052__$1,(4),ch);
} else {
if((state_val_33053 === (9))){
var inst_33039 = (state_33052[(9)]);
var inst_33032 = inst_33039;
var state_33052__$1 = (function (){var statearr_33063 = state_33052;
(statearr_33063[(7)] = inst_33032);

return statearr_33063;
})();
var statearr_33064_33078 = state_33052__$1;
(statearr_33064_33078[(2)] = null);

(statearr_33064_33078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33053 === (5))){
var inst_33032 = (state_33052[(7)]);
var state_33052__$1 = state_33052;
var statearr_33065_33079 = state_33052__$1;
(statearr_33065_33079[(2)] = inst_33032);

(statearr_33065_33079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33053 === (10))){
var inst_33046 = (state_33052[(2)]);
var state_33052__$1 = state_33052;
var statearr_33066_33080 = state_33052__$1;
(statearr_33066_33080[(2)] = inst_33046);

(statearr_33066_33080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33053 === (8))){
var inst_33039 = (state_33052[(9)]);
var inst_33042 = cljs.core.deref.call(null,inst_33039);
var state_33052__$1 = state_33052;
var statearr_33067_33081 = state_33052__$1;
(statearr_33067_33081[(2)] = inst_33042);

(statearr_33067_33081[(1)] = (10));


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
});})(c__32579__auto__))
;
return ((function (switch__32491__auto__,c__32579__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32492__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32492__auto____0 = (function (){
var statearr_33068 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33068[(0)] = cljs$core$async$reduce_$_state_machine__32492__auto__);

(statearr_33068[(1)] = (1));

return statearr_33068;
});
var cljs$core$async$reduce_$_state_machine__32492__auto____1 = (function (state_33052){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_33052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e33069){if((e33069 instanceof Object)){
var ex__32495__auto__ = e33069;
var statearr_33070_33082 = state_33052;
(statearr_33070_33082[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33083 = state_33052;
state_33052 = G__33083;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32492__auto__ = function(state_33052){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32492__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32492__auto____1.call(this,state_33052);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32492__auto____0;
cljs$core$async$reduce_$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32492__auto____1;
return cljs$core$async$reduce_$_state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto__))
})();
var state__32581__auto__ = (function (){var statearr_33071 = f__32580__auto__.call(null);
(statearr_33071[(6)] = c__32579__auto__);

return statearr_33071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto__))
);

return c__32579__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32579__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto__,f__$1){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto__,f__$1){
return (function (state_33089){
var state_val_33090 = (state_33089[(1)]);
if((state_val_33090 === (1))){
var inst_33084 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33089__$1 = state_33089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33089__$1,(2),inst_33084);
} else {
if((state_val_33090 === (2))){
var inst_33086 = (state_33089[(2)]);
var inst_33087 = f__$1.call(null,inst_33086);
var state_33089__$1 = state_33089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33089__$1,inst_33087);
} else {
return null;
}
}
});})(c__32579__auto__,f__$1))
;
return ((function (switch__32491__auto__,c__32579__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32492__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32492__auto____0 = (function (){
var statearr_33091 = [null,null,null,null,null,null,null];
(statearr_33091[(0)] = cljs$core$async$transduce_$_state_machine__32492__auto__);

(statearr_33091[(1)] = (1));

return statearr_33091;
});
var cljs$core$async$transduce_$_state_machine__32492__auto____1 = (function (state_33089){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_33089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e33092){if((e33092 instanceof Object)){
var ex__32495__auto__ = e33092;
var statearr_33093_33095 = state_33089;
(statearr_33093_33095[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33096 = state_33089;
state_33089 = G__33096;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32492__auto__ = function(state_33089){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32492__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32492__auto____1.call(this,state_33089);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32492__auto____0;
cljs$core$async$transduce_$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32492__auto____1;
return cljs$core$async$transduce_$_state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto__,f__$1))
})();
var state__32581__auto__ = (function (){var statearr_33094 = f__32580__auto__.call(null);
(statearr_33094[(6)] = c__32579__auto__);

return statearr_33094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto__,f__$1))
);

return c__32579__auto__;
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
var G__33098 = arguments.length;
switch (G__33098) {
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
var c__32579__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto__){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto__){
return (function (state_33123){
var state_val_33124 = (state_33123[(1)]);
if((state_val_33124 === (7))){
var inst_33105 = (state_33123[(2)]);
var state_33123__$1 = state_33123;
var statearr_33125_33146 = state_33123__$1;
(statearr_33125_33146[(2)] = inst_33105);

(statearr_33125_33146[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (1))){
var inst_33099 = cljs.core.seq.call(null,coll);
var inst_33100 = inst_33099;
var state_33123__$1 = (function (){var statearr_33126 = state_33123;
(statearr_33126[(7)] = inst_33100);

return statearr_33126;
})();
var statearr_33127_33147 = state_33123__$1;
(statearr_33127_33147[(2)] = null);

(statearr_33127_33147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (4))){
var inst_33100 = (state_33123[(7)]);
var inst_33103 = cljs.core.first.call(null,inst_33100);
var state_33123__$1 = state_33123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33123__$1,(7),ch,inst_33103);
} else {
if((state_val_33124 === (13))){
var inst_33117 = (state_33123[(2)]);
var state_33123__$1 = state_33123;
var statearr_33128_33148 = state_33123__$1;
(statearr_33128_33148[(2)] = inst_33117);

(statearr_33128_33148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (6))){
var inst_33108 = (state_33123[(2)]);
var state_33123__$1 = state_33123;
if(cljs.core.truth_(inst_33108)){
var statearr_33129_33149 = state_33123__$1;
(statearr_33129_33149[(1)] = (8));

} else {
var statearr_33130_33150 = state_33123__$1;
(statearr_33130_33150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (3))){
var inst_33121 = (state_33123[(2)]);
var state_33123__$1 = state_33123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33123__$1,inst_33121);
} else {
if((state_val_33124 === (12))){
var state_33123__$1 = state_33123;
var statearr_33131_33151 = state_33123__$1;
(statearr_33131_33151[(2)] = null);

(statearr_33131_33151[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (2))){
var inst_33100 = (state_33123[(7)]);
var state_33123__$1 = state_33123;
if(cljs.core.truth_(inst_33100)){
var statearr_33132_33152 = state_33123__$1;
(statearr_33132_33152[(1)] = (4));

} else {
var statearr_33133_33153 = state_33123__$1;
(statearr_33133_33153[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (11))){
var inst_33114 = cljs.core.async.close_BANG_.call(null,ch);
var state_33123__$1 = state_33123;
var statearr_33134_33154 = state_33123__$1;
(statearr_33134_33154[(2)] = inst_33114);

(statearr_33134_33154[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (9))){
var state_33123__$1 = state_33123;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33135_33155 = state_33123__$1;
(statearr_33135_33155[(1)] = (11));

} else {
var statearr_33136_33156 = state_33123__$1;
(statearr_33136_33156[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (5))){
var inst_33100 = (state_33123[(7)]);
var state_33123__$1 = state_33123;
var statearr_33137_33157 = state_33123__$1;
(statearr_33137_33157[(2)] = inst_33100);

(statearr_33137_33157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (10))){
var inst_33119 = (state_33123[(2)]);
var state_33123__$1 = state_33123;
var statearr_33138_33158 = state_33123__$1;
(statearr_33138_33158[(2)] = inst_33119);

(statearr_33138_33158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (8))){
var inst_33100 = (state_33123[(7)]);
var inst_33110 = cljs.core.next.call(null,inst_33100);
var inst_33100__$1 = inst_33110;
var state_33123__$1 = (function (){var statearr_33139 = state_33123;
(statearr_33139[(7)] = inst_33100__$1);

return statearr_33139;
})();
var statearr_33140_33159 = state_33123__$1;
(statearr_33140_33159[(2)] = null);

(statearr_33140_33159[(1)] = (2));


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
});})(c__32579__auto__))
;
return ((function (switch__32491__auto__,c__32579__auto__){
return (function() {
var cljs$core$async$state_machine__32492__auto__ = null;
var cljs$core$async$state_machine__32492__auto____0 = (function (){
var statearr_33141 = [null,null,null,null,null,null,null,null];
(statearr_33141[(0)] = cljs$core$async$state_machine__32492__auto__);

(statearr_33141[(1)] = (1));

return statearr_33141;
});
var cljs$core$async$state_machine__32492__auto____1 = (function (state_33123){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_33123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e33142){if((e33142 instanceof Object)){
var ex__32495__auto__ = e33142;
var statearr_33143_33160 = state_33123;
(statearr_33143_33160[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33161 = state_33123;
state_33123 = G__33161;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
cljs$core$async$state_machine__32492__auto__ = function(state_33123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32492__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32492__auto____1.call(this,state_33123);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32492__auto____0;
cljs$core$async$state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32492__auto____1;
return cljs$core$async$state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto__))
})();
var state__32581__auto__ = (function (){var statearr_33144 = f__32580__auto__.call(null);
(statearr_33144[(6)] = c__32579__auto__);

return statearr_33144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto__))
);

return c__32579__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async33162 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33162 = (function (ch,cs,meta33163){
this.ch = ch;
this.cs = cs;
this.meta33163 = meta33163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33164,meta33163__$1){
var self__ = this;
var _33164__$1 = this;
return (new cljs.core.async.t_cljs$core$async33162(self__.ch,self__.cs,meta33163__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33162.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33164){
var self__ = this;
var _33164__$1 = this;
return self__.meta33163;
});})(cs))
;

cljs.core.async.t_cljs$core$async33162.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33162.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33162.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33162.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33162.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33162.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33162.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33163","meta33163",1095577440,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33162.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33162";

cljs.core.async.t_cljs$core$async33162.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async33162");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33162 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33162(ch__$1,cs__$1,meta33163){
return (new cljs.core.async.t_cljs$core$async33162(ch__$1,cs__$1,meta33163));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33162(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32579__auto___33384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto___33384,cs,m,dchan,dctr,done){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto___33384,cs,m,dchan,dctr,done){
return (function (state_33299){
var state_val_33300 = (state_33299[(1)]);
if((state_val_33300 === (7))){
var inst_33295 = (state_33299[(2)]);
var state_33299__$1 = state_33299;
var statearr_33301_33385 = state_33299__$1;
(statearr_33301_33385[(2)] = inst_33295);

(statearr_33301_33385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (20))){
var inst_33198 = (state_33299[(7)]);
var inst_33210 = cljs.core.first.call(null,inst_33198);
var inst_33211 = cljs.core.nth.call(null,inst_33210,(0),null);
var inst_33212 = cljs.core.nth.call(null,inst_33210,(1),null);
var state_33299__$1 = (function (){var statearr_33302 = state_33299;
(statearr_33302[(8)] = inst_33211);

return statearr_33302;
})();
if(cljs.core.truth_(inst_33212)){
var statearr_33303_33386 = state_33299__$1;
(statearr_33303_33386[(1)] = (22));

} else {
var statearr_33304_33387 = state_33299__$1;
(statearr_33304_33387[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (27))){
var inst_33167 = (state_33299[(9)]);
var inst_33247 = (state_33299[(10)]);
var inst_33240 = (state_33299[(11)]);
var inst_33242 = (state_33299[(12)]);
var inst_33247__$1 = cljs.core._nth.call(null,inst_33240,inst_33242);
var inst_33248 = cljs.core.async.put_BANG_.call(null,inst_33247__$1,inst_33167,done);
var state_33299__$1 = (function (){var statearr_33305 = state_33299;
(statearr_33305[(10)] = inst_33247__$1);

return statearr_33305;
})();
if(cljs.core.truth_(inst_33248)){
var statearr_33306_33388 = state_33299__$1;
(statearr_33306_33388[(1)] = (30));

} else {
var statearr_33307_33389 = state_33299__$1;
(statearr_33307_33389[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (1))){
var state_33299__$1 = state_33299;
var statearr_33308_33390 = state_33299__$1;
(statearr_33308_33390[(2)] = null);

(statearr_33308_33390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (24))){
var inst_33198 = (state_33299[(7)]);
var inst_33217 = (state_33299[(2)]);
var inst_33218 = cljs.core.next.call(null,inst_33198);
var inst_33176 = inst_33218;
var inst_33177 = null;
var inst_33178 = (0);
var inst_33179 = (0);
var state_33299__$1 = (function (){var statearr_33309 = state_33299;
(statearr_33309[(13)] = inst_33177);

(statearr_33309[(14)] = inst_33179);

(statearr_33309[(15)] = inst_33176);

(statearr_33309[(16)] = inst_33178);

(statearr_33309[(17)] = inst_33217);

return statearr_33309;
})();
var statearr_33310_33391 = state_33299__$1;
(statearr_33310_33391[(2)] = null);

(statearr_33310_33391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (39))){
var state_33299__$1 = state_33299;
var statearr_33314_33392 = state_33299__$1;
(statearr_33314_33392[(2)] = null);

(statearr_33314_33392[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (4))){
var inst_33167 = (state_33299[(9)]);
var inst_33167__$1 = (state_33299[(2)]);
var inst_33168 = (inst_33167__$1 == null);
var state_33299__$1 = (function (){var statearr_33315 = state_33299;
(statearr_33315[(9)] = inst_33167__$1);

return statearr_33315;
})();
if(cljs.core.truth_(inst_33168)){
var statearr_33316_33393 = state_33299__$1;
(statearr_33316_33393[(1)] = (5));

} else {
var statearr_33317_33394 = state_33299__$1;
(statearr_33317_33394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (15))){
var inst_33177 = (state_33299[(13)]);
var inst_33179 = (state_33299[(14)]);
var inst_33176 = (state_33299[(15)]);
var inst_33178 = (state_33299[(16)]);
var inst_33194 = (state_33299[(2)]);
var inst_33195 = (inst_33179 + (1));
var tmp33311 = inst_33177;
var tmp33312 = inst_33176;
var tmp33313 = inst_33178;
var inst_33176__$1 = tmp33312;
var inst_33177__$1 = tmp33311;
var inst_33178__$1 = tmp33313;
var inst_33179__$1 = inst_33195;
var state_33299__$1 = (function (){var statearr_33318 = state_33299;
(statearr_33318[(13)] = inst_33177__$1);

(statearr_33318[(14)] = inst_33179__$1);

(statearr_33318[(15)] = inst_33176__$1);

(statearr_33318[(16)] = inst_33178__$1);

(statearr_33318[(18)] = inst_33194);

return statearr_33318;
})();
var statearr_33319_33395 = state_33299__$1;
(statearr_33319_33395[(2)] = null);

(statearr_33319_33395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (21))){
var inst_33221 = (state_33299[(2)]);
var state_33299__$1 = state_33299;
var statearr_33323_33396 = state_33299__$1;
(statearr_33323_33396[(2)] = inst_33221);

(statearr_33323_33396[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (31))){
var inst_33247 = (state_33299[(10)]);
var inst_33251 = done.call(null,null);
var inst_33252 = cljs.core.async.untap_STAR_.call(null,m,inst_33247);
var state_33299__$1 = (function (){var statearr_33324 = state_33299;
(statearr_33324[(19)] = inst_33251);

return statearr_33324;
})();
var statearr_33325_33397 = state_33299__$1;
(statearr_33325_33397[(2)] = inst_33252);

(statearr_33325_33397[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (32))){
var inst_33239 = (state_33299[(20)]);
var inst_33240 = (state_33299[(11)]);
var inst_33241 = (state_33299[(21)]);
var inst_33242 = (state_33299[(12)]);
var inst_33254 = (state_33299[(2)]);
var inst_33255 = (inst_33242 + (1));
var tmp33320 = inst_33239;
var tmp33321 = inst_33240;
var tmp33322 = inst_33241;
var inst_33239__$1 = tmp33320;
var inst_33240__$1 = tmp33321;
var inst_33241__$1 = tmp33322;
var inst_33242__$1 = inst_33255;
var state_33299__$1 = (function (){var statearr_33326 = state_33299;
(statearr_33326[(22)] = inst_33254);

(statearr_33326[(20)] = inst_33239__$1);

(statearr_33326[(11)] = inst_33240__$1);

(statearr_33326[(21)] = inst_33241__$1);

(statearr_33326[(12)] = inst_33242__$1);

return statearr_33326;
})();
var statearr_33327_33398 = state_33299__$1;
(statearr_33327_33398[(2)] = null);

(statearr_33327_33398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (40))){
var inst_33267 = (state_33299[(23)]);
var inst_33271 = done.call(null,null);
var inst_33272 = cljs.core.async.untap_STAR_.call(null,m,inst_33267);
var state_33299__$1 = (function (){var statearr_33328 = state_33299;
(statearr_33328[(24)] = inst_33271);

return statearr_33328;
})();
var statearr_33329_33399 = state_33299__$1;
(statearr_33329_33399[(2)] = inst_33272);

(statearr_33329_33399[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (33))){
var inst_33258 = (state_33299[(25)]);
var inst_33260 = cljs.core.chunked_seq_QMARK_.call(null,inst_33258);
var state_33299__$1 = state_33299;
if(inst_33260){
var statearr_33330_33400 = state_33299__$1;
(statearr_33330_33400[(1)] = (36));

} else {
var statearr_33331_33401 = state_33299__$1;
(statearr_33331_33401[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (13))){
var inst_33188 = (state_33299[(26)]);
var inst_33191 = cljs.core.async.close_BANG_.call(null,inst_33188);
var state_33299__$1 = state_33299;
var statearr_33332_33402 = state_33299__$1;
(statearr_33332_33402[(2)] = inst_33191);

(statearr_33332_33402[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (22))){
var inst_33211 = (state_33299[(8)]);
var inst_33214 = cljs.core.async.close_BANG_.call(null,inst_33211);
var state_33299__$1 = state_33299;
var statearr_33333_33403 = state_33299__$1;
(statearr_33333_33403[(2)] = inst_33214);

(statearr_33333_33403[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (36))){
var inst_33258 = (state_33299[(25)]);
var inst_33262 = cljs.core.chunk_first.call(null,inst_33258);
var inst_33263 = cljs.core.chunk_rest.call(null,inst_33258);
var inst_33264 = cljs.core.count.call(null,inst_33262);
var inst_33239 = inst_33263;
var inst_33240 = inst_33262;
var inst_33241 = inst_33264;
var inst_33242 = (0);
var state_33299__$1 = (function (){var statearr_33334 = state_33299;
(statearr_33334[(20)] = inst_33239);

(statearr_33334[(11)] = inst_33240);

(statearr_33334[(21)] = inst_33241);

(statearr_33334[(12)] = inst_33242);

return statearr_33334;
})();
var statearr_33335_33404 = state_33299__$1;
(statearr_33335_33404[(2)] = null);

(statearr_33335_33404[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (41))){
var inst_33258 = (state_33299[(25)]);
var inst_33274 = (state_33299[(2)]);
var inst_33275 = cljs.core.next.call(null,inst_33258);
var inst_33239 = inst_33275;
var inst_33240 = null;
var inst_33241 = (0);
var inst_33242 = (0);
var state_33299__$1 = (function (){var statearr_33336 = state_33299;
(statearr_33336[(27)] = inst_33274);

(statearr_33336[(20)] = inst_33239);

(statearr_33336[(11)] = inst_33240);

(statearr_33336[(21)] = inst_33241);

(statearr_33336[(12)] = inst_33242);

return statearr_33336;
})();
var statearr_33337_33405 = state_33299__$1;
(statearr_33337_33405[(2)] = null);

(statearr_33337_33405[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (43))){
var state_33299__$1 = state_33299;
var statearr_33338_33406 = state_33299__$1;
(statearr_33338_33406[(2)] = null);

(statearr_33338_33406[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (29))){
var inst_33283 = (state_33299[(2)]);
var state_33299__$1 = state_33299;
var statearr_33339_33407 = state_33299__$1;
(statearr_33339_33407[(2)] = inst_33283);

(statearr_33339_33407[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (44))){
var inst_33292 = (state_33299[(2)]);
var state_33299__$1 = (function (){var statearr_33340 = state_33299;
(statearr_33340[(28)] = inst_33292);

return statearr_33340;
})();
var statearr_33341_33408 = state_33299__$1;
(statearr_33341_33408[(2)] = null);

(statearr_33341_33408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (6))){
var inst_33231 = (state_33299[(29)]);
var inst_33230 = cljs.core.deref.call(null,cs);
var inst_33231__$1 = cljs.core.keys.call(null,inst_33230);
var inst_33232 = cljs.core.count.call(null,inst_33231__$1);
var inst_33233 = cljs.core.reset_BANG_.call(null,dctr,inst_33232);
var inst_33238 = cljs.core.seq.call(null,inst_33231__$1);
var inst_33239 = inst_33238;
var inst_33240 = null;
var inst_33241 = (0);
var inst_33242 = (0);
var state_33299__$1 = (function (){var statearr_33342 = state_33299;
(statearr_33342[(29)] = inst_33231__$1);

(statearr_33342[(30)] = inst_33233);

(statearr_33342[(20)] = inst_33239);

(statearr_33342[(11)] = inst_33240);

(statearr_33342[(21)] = inst_33241);

(statearr_33342[(12)] = inst_33242);

return statearr_33342;
})();
var statearr_33343_33409 = state_33299__$1;
(statearr_33343_33409[(2)] = null);

(statearr_33343_33409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (28))){
var inst_33258 = (state_33299[(25)]);
var inst_33239 = (state_33299[(20)]);
var inst_33258__$1 = cljs.core.seq.call(null,inst_33239);
var state_33299__$1 = (function (){var statearr_33344 = state_33299;
(statearr_33344[(25)] = inst_33258__$1);

return statearr_33344;
})();
if(inst_33258__$1){
var statearr_33345_33410 = state_33299__$1;
(statearr_33345_33410[(1)] = (33));

} else {
var statearr_33346_33411 = state_33299__$1;
(statearr_33346_33411[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (25))){
var inst_33241 = (state_33299[(21)]);
var inst_33242 = (state_33299[(12)]);
var inst_33244 = (inst_33242 < inst_33241);
var inst_33245 = inst_33244;
var state_33299__$1 = state_33299;
if(cljs.core.truth_(inst_33245)){
var statearr_33347_33412 = state_33299__$1;
(statearr_33347_33412[(1)] = (27));

} else {
var statearr_33348_33413 = state_33299__$1;
(statearr_33348_33413[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (34))){
var state_33299__$1 = state_33299;
var statearr_33349_33414 = state_33299__$1;
(statearr_33349_33414[(2)] = null);

(statearr_33349_33414[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (17))){
var state_33299__$1 = state_33299;
var statearr_33350_33415 = state_33299__$1;
(statearr_33350_33415[(2)] = null);

(statearr_33350_33415[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (3))){
var inst_33297 = (state_33299[(2)]);
var state_33299__$1 = state_33299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33299__$1,inst_33297);
} else {
if((state_val_33300 === (12))){
var inst_33226 = (state_33299[(2)]);
var state_33299__$1 = state_33299;
var statearr_33351_33416 = state_33299__$1;
(statearr_33351_33416[(2)] = inst_33226);

(statearr_33351_33416[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (2))){
var state_33299__$1 = state_33299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33299__$1,(4),ch);
} else {
if((state_val_33300 === (23))){
var state_33299__$1 = state_33299;
var statearr_33352_33417 = state_33299__$1;
(statearr_33352_33417[(2)] = null);

(statearr_33352_33417[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (35))){
var inst_33281 = (state_33299[(2)]);
var state_33299__$1 = state_33299;
var statearr_33353_33418 = state_33299__$1;
(statearr_33353_33418[(2)] = inst_33281);

(statearr_33353_33418[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (19))){
var inst_33198 = (state_33299[(7)]);
var inst_33202 = cljs.core.chunk_first.call(null,inst_33198);
var inst_33203 = cljs.core.chunk_rest.call(null,inst_33198);
var inst_33204 = cljs.core.count.call(null,inst_33202);
var inst_33176 = inst_33203;
var inst_33177 = inst_33202;
var inst_33178 = inst_33204;
var inst_33179 = (0);
var state_33299__$1 = (function (){var statearr_33354 = state_33299;
(statearr_33354[(13)] = inst_33177);

(statearr_33354[(14)] = inst_33179);

(statearr_33354[(15)] = inst_33176);

(statearr_33354[(16)] = inst_33178);

return statearr_33354;
})();
var statearr_33355_33419 = state_33299__$1;
(statearr_33355_33419[(2)] = null);

(statearr_33355_33419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (11))){
var inst_33176 = (state_33299[(15)]);
var inst_33198 = (state_33299[(7)]);
var inst_33198__$1 = cljs.core.seq.call(null,inst_33176);
var state_33299__$1 = (function (){var statearr_33356 = state_33299;
(statearr_33356[(7)] = inst_33198__$1);

return statearr_33356;
})();
if(inst_33198__$1){
var statearr_33357_33420 = state_33299__$1;
(statearr_33357_33420[(1)] = (16));

} else {
var statearr_33358_33421 = state_33299__$1;
(statearr_33358_33421[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (9))){
var inst_33228 = (state_33299[(2)]);
var state_33299__$1 = state_33299;
var statearr_33359_33422 = state_33299__$1;
(statearr_33359_33422[(2)] = inst_33228);

(statearr_33359_33422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (5))){
var inst_33174 = cljs.core.deref.call(null,cs);
var inst_33175 = cljs.core.seq.call(null,inst_33174);
var inst_33176 = inst_33175;
var inst_33177 = null;
var inst_33178 = (0);
var inst_33179 = (0);
var state_33299__$1 = (function (){var statearr_33360 = state_33299;
(statearr_33360[(13)] = inst_33177);

(statearr_33360[(14)] = inst_33179);

(statearr_33360[(15)] = inst_33176);

(statearr_33360[(16)] = inst_33178);

return statearr_33360;
})();
var statearr_33361_33423 = state_33299__$1;
(statearr_33361_33423[(2)] = null);

(statearr_33361_33423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (14))){
var state_33299__$1 = state_33299;
var statearr_33362_33424 = state_33299__$1;
(statearr_33362_33424[(2)] = null);

(statearr_33362_33424[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (45))){
var inst_33289 = (state_33299[(2)]);
var state_33299__$1 = state_33299;
var statearr_33363_33425 = state_33299__$1;
(statearr_33363_33425[(2)] = inst_33289);

(statearr_33363_33425[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (26))){
var inst_33231 = (state_33299[(29)]);
var inst_33285 = (state_33299[(2)]);
var inst_33286 = cljs.core.seq.call(null,inst_33231);
var state_33299__$1 = (function (){var statearr_33364 = state_33299;
(statearr_33364[(31)] = inst_33285);

return statearr_33364;
})();
if(inst_33286){
var statearr_33365_33426 = state_33299__$1;
(statearr_33365_33426[(1)] = (42));

} else {
var statearr_33366_33427 = state_33299__$1;
(statearr_33366_33427[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (16))){
var inst_33198 = (state_33299[(7)]);
var inst_33200 = cljs.core.chunked_seq_QMARK_.call(null,inst_33198);
var state_33299__$1 = state_33299;
if(inst_33200){
var statearr_33367_33428 = state_33299__$1;
(statearr_33367_33428[(1)] = (19));

} else {
var statearr_33368_33429 = state_33299__$1;
(statearr_33368_33429[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (38))){
var inst_33278 = (state_33299[(2)]);
var state_33299__$1 = state_33299;
var statearr_33369_33430 = state_33299__$1;
(statearr_33369_33430[(2)] = inst_33278);

(statearr_33369_33430[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (30))){
var state_33299__$1 = state_33299;
var statearr_33370_33431 = state_33299__$1;
(statearr_33370_33431[(2)] = null);

(statearr_33370_33431[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (10))){
var inst_33177 = (state_33299[(13)]);
var inst_33179 = (state_33299[(14)]);
var inst_33187 = cljs.core._nth.call(null,inst_33177,inst_33179);
var inst_33188 = cljs.core.nth.call(null,inst_33187,(0),null);
var inst_33189 = cljs.core.nth.call(null,inst_33187,(1),null);
var state_33299__$1 = (function (){var statearr_33371 = state_33299;
(statearr_33371[(26)] = inst_33188);

return statearr_33371;
})();
if(cljs.core.truth_(inst_33189)){
var statearr_33372_33432 = state_33299__$1;
(statearr_33372_33432[(1)] = (13));

} else {
var statearr_33373_33433 = state_33299__$1;
(statearr_33373_33433[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (18))){
var inst_33224 = (state_33299[(2)]);
var state_33299__$1 = state_33299;
var statearr_33374_33434 = state_33299__$1;
(statearr_33374_33434[(2)] = inst_33224);

(statearr_33374_33434[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (42))){
var state_33299__$1 = state_33299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33299__$1,(45),dchan);
} else {
if((state_val_33300 === (37))){
var inst_33267 = (state_33299[(23)]);
var inst_33167 = (state_33299[(9)]);
var inst_33258 = (state_33299[(25)]);
var inst_33267__$1 = cljs.core.first.call(null,inst_33258);
var inst_33268 = cljs.core.async.put_BANG_.call(null,inst_33267__$1,inst_33167,done);
var state_33299__$1 = (function (){var statearr_33375 = state_33299;
(statearr_33375[(23)] = inst_33267__$1);

return statearr_33375;
})();
if(cljs.core.truth_(inst_33268)){
var statearr_33376_33435 = state_33299__$1;
(statearr_33376_33435[(1)] = (39));

} else {
var statearr_33377_33436 = state_33299__$1;
(statearr_33377_33436[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33300 === (8))){
var inst_33179 = (state_33299[(14)]);
var inst_33178 = (state_33299[(16)]);
var inst_33181 = (inst_33179 < inst_33178);
var inst_33182 = inst_33181;
var state_33299__$1 = state_33299;
if(cljs.core.truth_(inst_33182)){
var statearr_33378_33437 = state_33299__$1;
(statearr_33378_33437[(1)] = (10));

} else {
var statearr_33379_33438 = state_33299__$1;
(statearr_33379_33438[(1)] = (11));

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
});})(c__32579__auto___33384,cs,m,dchan,dctr,done))
;
return ((function (switch__32491__auto__,c__32579__auto___33384,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32492__auto__ = null;
var cljs$core$async$mult_$_state_machine__32492__auto____0 = (function (){
var statearr_33380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33380[(0)] = cljs$core$async$mult_$_state_machine__32492__auto__);

(statearr_33380[(1)] = (1));

return statearr_33380;
});
var cljs$core$async$mult_$_state_machine__32492__auto____1 = (function (state_33299){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_33299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e33381){if((e33381 instanceof Object)){
var ex__32495__auto__ = e33381;
var statearr_33382_33439 = state_33299;
(statearr_33382_33439[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33440 = state_33299;
state_33299 = G__33440;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32492__auto__ = function(state_33299){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32492__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32492__auto____1.call(this,state_33299);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32492__auto____0;
cljs$core$async$mult_$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32492__auto____1;
return cljs$core$async$mult_$_state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto___33384,cs,m,dchan,dctr,done))
})();
var state__32581__auto__ = (function (){var statearr_33383 = f__32580__auto__.call(null);
(statearr_33383[(6)] = c__32579__auto___33384);

return statearr_33383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto___33384,cs,m,dchan,dctr,done))
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
var G__33442 = arguments.length;
switch (G__33442) {
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
var len__29455__auto___33454 = arguments.length;
var i__29456__auto___33455 = (0);
while(true){
if((i__29456__auto___33455 < len__29455__auto___33454)){
args__29462__auto__.push((arguments[i__29456__auto___33455]));

var G__33456 = (i__29456__auto___33455 + (1));
i__29456__auto___33455 = G__33456;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((3) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29463__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33448){
var map__33449 = p__33448;
var map__33449__$1 = ((((!((map__33449 == null)))?((((map__33449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33449.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33449):map__33449);
var opts = map__33449__$1;
var statearr_33451_33457 = state;
(statearr_33451_33457[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__33449,map__33449__$1,opts){
return (function (val){
var statearr_33452_33458 = state;
(statearr_33452_33458[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33449,map__33449__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_33453_33459 = state;
(statearr_33453_33459[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33444){
var G__33445 = cljs.core.first.call(null,seq33444);
var seq33444__$1 = cljs.core.next.call(null,seq33444);
var G__33446 = cljs.core.first.call(null,seq33444__$1);
var seq33444__$2 = cljs.core.next.call(null,seq33444__$1);
var G__33447 = cljs.core.first.call(null,seq33444__$2);
var seq33444__$3 = cljs.core.next.call(null,seq33444__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33445,G__33446,G__33447,seq33444__$3);
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
if(typeof cljs.core.async.t_cljs$core$async33460 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33460 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta33461){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta33461 = meta33461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33462,meta33461__$1){
var self__ = this;
var _33462__$1 = this;
return (new cljs.core.async.t_cljs$core$async33460(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta33461__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33460.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33462){
var self__ = this;
var _33462__$1 = this;
return self__.meta33461;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33460.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33460.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33460.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33460.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33460.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33460.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33460.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33460.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async33460.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta33461","meta33461",-2075065594,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33460.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33460";

cljs.core.async.t_cljs$core$async33460.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async33460");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33460 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33460(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33461){
return (new cljs.core.async.t_cljs$core$async33460(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33461));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33460(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32579__auto___33624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto___33624,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto___33624,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33564){
var state_val_33565 = (state_33564[(1)]);
if((state_val_33565 === (7))){
var inst_33479 = (state_33564[(2)]);
var state_33564__$1 = state_33564;
var statearr_33566_33625 = state_33564__$1;
(statearr_33566_33625[(2)] = inst_33479);

(statearr_33566_33625[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (20))){
var inst_33491 = (state_33564[(7)]);
var state_33564__$1 = state_33564;
var statearr_33567_33626 = state_33564__$1;
(statearr_33567_33626[(2)] = inst_33491);

(statearr_33567_33626[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (27))){
var state_33564__$1 = state_33564;
var statearr_33568_33627 = state_33564__$1;
(statearr_33568_33627[(2)] = null);

(statearr_33568_33627[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (1))){
var inst_33466 = (state_33564[(8)]);
var inst_33466__$1 = calc_state.call(null);
var inst_33468 = (inst_33466__$1 == null);
var inst_33469 = cljs.core.not.call(null,inst_33468);
var state_33564__$1 = (function (){var statearr_33569 = state_33564;
(statearr_33569[(8)] = inst_33466__$1);

return statearr_33569;
})();
if(inst_33469){
var statearr_33570_33628 = state_33564__$1;
(statearr_33570_33628[(1)] = (2));

} else {
var statearr_33571_33629 = state_33564__$1;
(statearr_33571_33629[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (24))){
var inst_33524 = (state_33564[(9)]);
var inst_33538 = (state_33564[(10)]);
var inst_33515 = (state_33564[(11)]);
var inst_33538__$1 = inst_33515.call(null,inst_33524);
var state_33564__$1 = (function (){var statearr_33572 = state_33564;
(statearr_33572[(10)] = inst_33538__$1);

return statearr_33572;
})();
if(cljs.core.truth_(inst_33538__$1)){
var statearr_33573_33630 = state_33564__$1;
(statearr_33573_33630[(1)] = (29));

} else {
var statearr_33574_33631 = state_33564__$1;
(statearr_33574_33631[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (4))){
var inst_33482 = (state_33564[(2)]);
var state_33564__$1 = state_33564;
if(cljs.core.truth_(inst_33482)){
var statearr_33575_33632 = state_33564__$1;
(statearr_33575_33632[(1)] = (8));

} else {
var statearr_33576_33633 = state_33564__$1;
(statearr_33576_33633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (15))){
var inst_33509 = (state_33564[(2)]);
var state_33564__$1 = state_33564;
if(cljs.core.truth_(inst_33509)){
var statearr_33577_33634 = state_33564__$1;
(statearr_33577_33634[(1)] = (19));

} else {
var statearr_33578_33635 = state_33564__$1;
(statearr_33578_33635[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (21))){
var inst_33514 = (state_33564[(12)]);
var inst_33514__$1 = (state_33564[(2)]);
var inst_33515 = cljs.core.get.call(null,inst_33514__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33516 = cljs.core.get.call(null,inst_33514__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33517 = cljs.core.get.call(null,inst_33514__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33564__$1 = (function (){var statearr_33579 = state_33564;
(statearr_33579[(12)] = inst_33514__$1);

(statearr_33579[(11)] = inst_33515);

(statearr_33579[(13)] = inst_33516);

return statearr_33579;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33564__$1,(22),inst_33517);
} else {
if((state_val_33565 === (31))){
var inst_33546 = (state_33564[(2)]);
var state_33564__$1 = state_33564;
if(cljs.core.truth_(inst_33546)){
var statearr_33580_33636 = state_33564__$1;
(statearr_33580_33636[(1)] = (32));

} else {
var statearr_33581_33637 = state_33564__$1;
(statearr_33581_33637[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (32))){
var inst_33523 = (state_33564[(14)]);
var state_33564__$1 = state_33564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33564__$1,(35),out,inst_33523);
} else {
if((state_val_33565 === (33))){
var inst_33514 = (state_33564[(12)]);
var inst_33491 = inst_33514;
var state_33564__$1 = (function (){var statearr_33582 = state_33564;
(statearr_33582[(7)] = inst_33491);

return statearr_33582;
})();
var statearr_33583_33638 = state_33564__$1;
(statearr_33583_33638[(2)] = null);

(statearr_33583_33638[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (13))){
var inst_33491 = (state_33564[(7)]);
var inst_33498 = inst_33491.cljs$lang$protocol_mask$partition0$;
var inst_33499 = (inst_33498 & (64));
var inst_33500 = inst_33491.cljs$core$ISeq$;
var inst_33501 = (cljs.core.PROTOCOL_SENTINEL === inst_33500);
var inst_33502 = (inst_33499) || (inst_33501);
var state_33564__$1 = state_33564;
if(cljs.core.truth_(inst_33502)){
var statearr_33584_33639 = state_33564__$1;
(statearr_33584_33639[(1)] = (16));

} else {
var statearr_33585_33640 = state_33564__$1;
(statearr_33585_33640[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (22))){
var inst_33524 = (state_33564[(9)]);
var inst_33523 = (state_33564[(14)]);
var inst_33522 = (state_33564[(2)]);
var inst_33523__$1 = cljs.core.nth.call(null,inst_33522,(0),null);
var inst_33524__$1 = cljs.core.nth.call(null,inst_33522,(1),null);
var inst_33525 = (inst_33523__$1 == null);
var inst_33526 = cljs.core._EQ_.call(null,inst_33524__$1,change);
var inst_33527 = (inst_33525) || (inst_33526);
var state_33564__$1 = (function (){var statearr_33586 = state_33564;
(statearr_33586[(9)] = inst_33524__$1);

(statearr_33586[(14)] = inst_33523__$1);

return statearr_33586;
})();
if(cljs.core.truth_(inst_33527)){
var statearr_33587_33641 = state_33564__$1;
(statearr_33587_33641[(1)] = (23));

} else {
var statearr_33588_33642 = state_33564__$1;
(statearr_33588_33642[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (36))){
var inst_33514 = (state_33564[(12)]);
var inst_33491 = inst_33514;
var state_33564__$1 = (function (){var statearr_33589 = state_33564;
(statearr_33589[(7)] = inst_33491);

return statearr_33589;
})();
var statearr_33590_33643 = state_33564__$1;
(statearr_33590_33643[(2)] = null);

(statearr_33590_33643[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (29))){
var inst_33538 = (state_33564[(10)]);
var state_33564__$1 = state_33564;
var statearr_33591_33644 = state_33564__$1;
(statearr_33591_33644[(2)] = inst_33538);

(statearr_33591_33644[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (6))){
var state_33564__$1 = state_33564;
var statearr_33592_33645 = state_33564__$1;
(statearr_33592_33645[(2)] = false);

(statearr_33592_33645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (28))){
var inst_33534 = (state_33564[(2)]);
var inst_33535 = calc_state.call(null);
var inst_33491 = inst_33535;
var state_33564__$1 = (function (){var statearr_33593 = state_33564;
(statearr_33593[(7)] = inst_33491);

(statearr_33593[(15)] = inst_33534);

return statearr_33593;
})();
var statearr_33594_33646 = state_33564__$1;
(statearr_33594_33646[(2)] = null);

(statearr_33594_33646[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (25))){
var inst_33560 = (state_33564[(2)]);
var state_33564__$1 = state_33564;
var statearr_33595_33647 = state_33564__$1;
(statearr_33595_33647[(2)] = inst_33560);

(statearr_33595_33647[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (34))){
var inst_33558 = (state_33564[(2)]);
var state_33564__$1 = state_33564;
var statearr_33596_33648 = state_33564__$1;
(statearr_33596_33648[(2)] = inst_33558);

(statearr_33596_33648[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (17))){
var state_33564__$1 = state_33564;
var statearr_33597_33649 = state_33564__$1;
(statearr_33597_33649[(2)] = false);

(statearr_33597_33649[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (3))){
var state_33564__$1 = state_33564;
var statearr_33598_33650 = state_33564__$1;
(statearr_33598_33650[(2)] = false);

(statearr_33598_33650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (12))){
var inst_33562 = (state_33564[(2)]);
var state_33564__$1 = state_33564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33564__$1,inst_33562);
} else {
if((state_val_33565 === (2))){
var inst_33466 = (state_33564[(8)]);
var inst_33471 = inst_33466.cljs$lang$protocol_mask$partition0$;
var inst_33472 = (inst_33471 & (64));
var inst_33473 = inst_33466.cljs$core$ISeq$;
var inst_33474 = (cljs.core.PROTOCOL_SENTINEL === inst_33473);
var inst_33475 = (inst_33472) || (inst_33474);
var state_33564__$1 = state_33564;
if(cljs.core.truth_(inst_33475)){
var statearr_33599_33651 = state_33564__$1;
(statearr_33599_33651[(1)] = (5));

} else {
var statearr_33600_33652 = state_33564__$1;
(statearr_33600_33652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (23))){
var inst_33523 = (state_33564[(14)]);
var inst_33529 = (inst_33523 == null);
var state_33564__$1 = state_33564;
if(cljs.core.truth_(inst_33529)){
var statearr_33601_33653 = state_33564__$1;
(statearr_33601_33653[(1)] = (26));

} else {
var statearr_33602_33654 = state_33564__$1;
(statearr_33602_33654[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (35))){
var inst_33549 = (state_33564[(2)]);
var state_33564__$1 = state_33564;
if(cljs.core.truth_(inst_33549)){
var statearr_33603_33655 = state_33564__$1;
(statearr_33603_33655[(1)] = (36));

} else {
var statearr_33604_33656 = state_33564__$1;
(statearr_33604_33656[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (19))){
var inst_33491 = (state_33564[(7)]);
var inst_33511 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33491);
var state_33564__$1 = state_33564;
var statearr_33605_33657 = state_33564__$1;
(statearr_33605_33657[(2)] = inst_33511);

(statearr_33605_33657[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (11))){
var inst_33491 = (state_33564[(7)]);
var inst_33495 = (inst_33491 == null);
var inst_33496 = cljs.core.not.call(null,inst_33495);
var state_33564__$1 = state_33564;
if(inst_33496){
var statearr_33606_33658 = state_33564__$1;
(statearr_33606_33658[(1)] = (13));

} else {
var statearr_33607_33659 = state_33564__$1;
(statearr_33607_33659[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (9))){
var inst_33466 = (state_33564[(8)]);
var state_33564__$1 = state_33564;
var statearr_33608_33660 = state_33564__$1;
(statearr_33608_33660[(2)] = inst_33466);

(statearr_33608_33660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (5))){
var state_33564__$1 = state_33564;
var statearr_33609_33661 = state_33564__$1;
(statearr_33609_33661[(2)] = true);

(statearr_33609_33661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (14))){
var state_33564__$1 = state_33564;
var statearr_33610_33662 = state_33564__$1;
(statearr_33610_33662[(2)] = false);

(statearr_33610_33662[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (26))){
var inst_33524 = (state_33564[(9)]);
var inst_33531 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33524);
var state_33564__$1 = state_33564;
var statearr_33611_33663 = state_33564__$1;
(statearr_33611_33663[(2)] = inst_33531);

(statearr_33611_33663[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (16))){
var state_33564__$1 = state_33564;
var statearr_33612_33664 = state_33564__$1;
(statearr_33612_33664[(2)] = true);

(statearr_33612_33664[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (38))){
var inst_33554 = (state_33564[(2)]);
var state_33564__$1 = state_33564;
var statearr_33613_33665 = state_33564__$1;
(statearr_33613_33665[(2)] = inst_33554);

(statearr_33613_33665[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (30))){
var inst_33524 = (state_33564[(9)]);
var inst_33515 = (state_33564[(11)]);
var inst_33516 = (state_33564[(13)]);
var inst_33541 = cljs.core.empty_QMARK_.call(null,inst_33515);
var inst_33542 = inst_33516.call(null,inst_33524);
var inst_33543 = cljs.core.not.call(null,inst_33542);
var inst_33544 = (inst_33541) && (inst_33543);
var state_33564__$1 = state_33564;
var statearr_33614_33666 = state_33564__$1;
(statearr_33614_33666[(2)] = inst_33544);

(statearr_33614_33666[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (10))){
var inst_33466 = (state_33564[(8)]);
var inst_33487 = (state_33564[(2)]);
var inst_33488 = cljs.core.get.call(null,inst_33487,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33489 = cljs.core.get.call(null,inst_33487,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33490 = cljs.core.get.call(null,inst_33487,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33491 = inst_33466;
var state_33564__$1 = (function (){var statearr_33615 = state_33564;
(statearr_33615[(16)] = inst_33488);

(statearr_33615[(17)] = inst_33489);

(statearr_33615[(7)] = inst_33491);

(statearr_33615[(18)] = inst_33490);

return statearr_33615;
})();
var statearr_33616_33667 = state_33564__$1;
(statearr_33616_33667[(2)] = null);

(statearr_33616_33667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (18))){
var inst_33506 = (state_33564[(2)]);
var state_33564__$1 = state_33564;
var statearr_33617_33668 = state_33564__$1;
(statearr_33617_33668[(2)] = inst_33506);

(statearr_33617_33668[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (37))){
var state_33564__$1 = state_33564;
var statearr_33618_33669 = state_33564__$1;
(statearr_33618_33669[(2)] = null);

(statearr_33618_33669[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (8))){
var inst_33466 = (state_33564[(8)]);
var inst_33484 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33466);
var state_33564__$1 = state_33564;
var statearr_33619_33670 = state_33564__$1;
(statearr_33619_33670[(2)] = inst_33484);

(statearr_33619_33670[(1)] = (10));


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
});})(c__32579__auto___33624,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32491__auto__,c__32579__auto___33624,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32492__auto__ = null;
var cljs$core$async$mix_$_state_machine__32492__auto____0 = (function (){
var statearr_33620 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33620[(0)] = cljs$core$async$mix_$_state_machine__32492__auto__);

(statearr_33620[(1)] = (1));

return statearr_33620;
});
var cljs$core$async$mix_$_state_machine__32492__auto____1 = (function (state_33564){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_33564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e33621){if((e33621 instanceof Object)){
var ex__32495__auto__ = e33621;
var statearr_33622_33671 = state_33564;
(statearr_33622_33671[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33672 = state_33564;
state_33564 = G__33672;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32492__auto__ = function(state_33564){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32492__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32492__auto____1.call(this,state_33564);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32492__auto____0;
cljs$core$async$mix_$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32492__auto____1;
return cljs$core$async$mix_$_state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto___33624,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32581__auto__ = (function (){var statearr_33623 = f__32580__auto__.call(null);
(statearr_33623[(6)] = c__32579__auto___33624);

return statearr_33623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto___33624,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__33674 = arguments.length;
switch (G__33674) {
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
var G__33678 = arguments.length;
switch (G__33678) {
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
return (function (p1__33676_SHARP_){
if(cljs.core.truth_(p1__33676_SHARP_.call(null,topic))){
return p1__33676_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33676_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28286__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33679 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33679 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33680){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33680 = meta33680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33681,meta33680__$1){
var self__ = this;
var _33681__$1 = this;
return (new cljs.core.async.t_cljs$core$async33679(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33680__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33681){
var self__ = this;
var _33681__$1 = this;
return self__.meta33680;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33679.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33680","meta33680",-1267985446,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33679.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33679";

cljs.core.async.t_cljs$core$async33679.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async33679");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33679 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33679(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33680){
return (new cljs.core.async.t_cljs$core$async33679(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33680));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33679(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32579__auto___33799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto___33799,mults,ensure_mult,p){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto___33799,mults,ensure_mult,p){
return (function (state_33753){
var state_val_33754 = (state_33753[(1)]);
if((state_val_33754 === (7))){
var inst_33749 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
var statearr_33755_33800 = state_33753__$1;
(statearr_33755_33800[(2)] = inst_33749);

(statearr_33755_33800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (20))){
var state_33753__$1 = state_33753;
var statearr_33756_33801 = state_33753__$1;
(statearr_33756_33801[(2)] = null);

(statearr_33756_33801[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (1))){
var state_33753__$1 = state_33753;
var statearr_33757_33802 = state_33753__$1;
(statearr_33757_33802[(2)] = null);

(statearr_33757_33802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (24))){
var inst_33732 = (state_33753[(7)]);
var inst_33741 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33732);
var state_33753__$1 = state_33753;
var statearr_33758_33803 = state_33753__$1;
(statearr_33758_33803[(2)] = inst_33741);

(statearr_33758_33803[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (4))){
var inst_33684 = (state_33753[(8)]);
var inst_33684__$1 = (state_33753[(2)]);
var inst_33685 = (inst_33684__$1 == null);
var state_33753__$1 = (function (){var statearr_33759 = state_33753;
(statearr_33759[(8)] = inst_33684__$1);

return statearr_33759;
})();
if(cljs.core.truth_(inst_33685)){
var statearr_33760_33804 = state_33753__$1;
(statearr_33760_33804[(1)] = (5));

} else {
var statearr_33761_33805 = state_33753__$1;
(statearr_33761_33805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (15))){
var inst_33726 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
var statearr_33762_33806 = state_33753__$1;
(statearr_33762_33806[(2)] = inst_33726);

(statearr_33762_33806[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (21))){
var inst_33746 = (state_33753[(2)]);
var state_33753__$1 = (function (){var statearr_33763 = state_33753;
(statearr_33763[(9)] = inst_33746);

return statearr_33763;
})();
var statearr_33764_33807 = state_33753__$1;
(statearr_33764_33807[(2)] = null);

(statearr_33764_33807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (13))){
var inst_33708 = (state_33753[(10)]);
var inst_33710 = cljs.core.chunked_seq_QMARK_.call(null,inst_33708);
var state_33753__$1 = state_33753;
if(inst_33710){
var statearr_33765_33808 = state_33753__$1;
(statearr_33765_33808[(1)] = (16));

} else {
var statearr_33766_33809 = state_33753__$1;
(statearr_33766_33809[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (22))){
var inst_33738 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
if(cljs.core.truth_(inst_33738)){
var statearr_33767_33810 = state_33753__$1;
(statearr_33767_33810[(1)] = (23));

} else {
var statearr_33768_33811 = state_33753__$1;
(statearr_33768_33811[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (6))){
var inst_33734 = (state_33753[(11)]);
var inst_33732 = (state_33753[(7)]);
var inst_33684 = (state_33753[(8)]);
var inst_33732__$1 = topic_fn.call(null,inst_33684);
var inst_33733 = cljs.core.deref.call(null,mults);
var inst_33734__$1 = cljs.core.get.call(null,inst_33733,inst_33732__$1);
var state_33753__$1 = (function (){var statearr_33769 = state_33753;
(statearr_33769[(11)] = inst_33734__$1);

(statearr_33769[(7)] = inst_33732__$1);

return statearr_33769;
})();
if(cljs.core.truth_(inst_33734__$1)){
var statearr_33770_33812 = state_33753__$1;
(statearr_33770_33812[(1)] = (19));

} else {
var statearr_33771_33813 = state_33753__$1;
(statearr_33771_33813[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (25))){
var inst_33743 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
var statearr_33772_33814 = state_33753__$1;
(statearr_33772_33814[(2)] = inst_33743);

(statearr_33772_33814[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (17))){
var inst_33708 = (state_33753[(10)]);
var inst_33717 = cljs.core.first.call(null,inst_33708);
var inst_33718 = cljs.core.async.muxch_STAR_.call(null,inst_33717);
var inst_33719 = cljs.core.async.close_BANG_.call(null,inst_33718);
var inst_33720 = cljs.core.next.call(null,inst_33708);
var inst_33694 = inst_33720;
var inst_33695 = null;
var inst_33696 = (0);
var inst_33697 = (0);
var state_33753__$1 = (function (){var statearr_33773 = state_33753;
(statearr_33773[(12)] = inst_33719);

(statearr_33773[(13)] = inst_33695);

(statearr_33773[(14)] = inst_33696);

(statearr_33773[(15)] = inst_33697);

(statearr_33773[(16)] = inst_33694);

return statearr_33773;
})();
var statearr_33774_33815 = state_33753__$1;
(statearr_33774_33815[(2)] = null);

(statearr_33774_33815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (3))){
var inst_33751 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33753__$1,inst_33751);
} else {
if((state_val_33754 === (12))){
var inst_33728 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
var statearr_33775_33816 = state_33753__$1;
(statearr_33775_33816[(2)] = inst_33728);

(statearr_33775_33816[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (2))){
var state_33753__$1 = state_33753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33753__$1,(4),ch);
} else {
if((state_val_33754 === (23))){
var state_33753__$1 = state_33753;
var statearr_33776_33817 = state_33753__$1;
(statearr_33776_33817[(2)] = null);

(statearr_33776_33817[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (19))){
var inst_33734 = (state_33753[(11)]);
var inst_33684 = (state_33753[(8)]);
var inst_33736 = cljs.core.async.muxch_STAR_.call(null,inst_33734);
var state_33753__$1 = state_33753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33753__$1,(22),inst_33736,inst_33684);
} else {
if((state_val_33754 === (11))){
var inst_33708 = (state_33753[(10)]);
var inst_33694 = (state_33753[(16)]);
var inst_33708__$1 = cljs.core.seq.call(null,inst_33694);
var state_33753__$1 = (function (){var statearr_33777 = state_33753;
(statearr_33777[(10)] = inst_33708__$1);

return statearr_33777;
})();
if(inst_33708__$1){
var statearr_33778_33818 = state_33753__$1;
(statearr_33778_33818[(1)] = (13));

} else {
var statearr_33779_33819 = state_33753__$1;
(statearr_33779_33819[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (9))){
var inst_33730 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
var statearr_33780_33820 = state_33753__$1;
(statearr_33780_33820[(2)] = inst_33730);

(statearr_33780_33820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (5))){
var inst_33691 = cljs.core.deref.call(null,mults);
var inst_33692 = cljs.core.vals.call(null,inst_33691);
var inst_33693 = cljs.core.seq.call(null,inst_33692);
var inst_33694 = inst_33693;
var inst_33695 = null;
var inst_33696 = (0);
var inst_33697 = (0);
var state_33753__$1 = (function (){var statearr_33781 = state_33753;
(statearr_33781[(13)] = inst_33695);

(statearr_33781[(14)] = inst_33696);

(statearr_33781[(15)] = inst_33697);

(statearr_33781[(16)] = inst_33694);

return statearr_33781;
})();
var statearr_33782_33821 = state_33753__$1;
(statearr_33782_33821[(2)] = null);

(statearr_33782_33821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (14))){
var state_33753__$1 = state_33753;
var statearr_33786_33822 = state_33753__$1;
(statearr_33786_33822[(2)] = null);

(statearr_33786_33822[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (16))){
var inst_33708 = (state_33753[(10)]);
var inst_33712 = cljs.core.chunk_first.call(null,inst_33708);
var inst_33713 = cljs.core.chunk_rest.call(null,inst_33708);
var inst_33714 = cljs.core.count.call(null,inst_33712);
var inst_33694 = inst_33713;
var inst_33695 = inst_33712;
var inst_33696 = inst_33714;
var inst_33697 = (0);
var state_33753__$1 = (function (){var statearr_33787 = state_33753;
(statearr_33787[(13)] = inst_33695);

(statearr_33787[(14)] = inst_33696);

(statearr_33787[(15)] = inst_33697);

(statearr_33787[(16)] = inst_33694);

return statearr_33787;
})();
var statearr_33788_33823 = state_33753__$1;
(statearr_33788_33823[(2)] = null);

(statearr_33788_33823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (10))){
var inst_33695 = (state_33753[(13)]);
var inst_33696 = (state_33753[(14)]);
var inst_33697 = (state_33753[(15)]);
var inst_33694 = (state_33753[(16)]);
var inst_33702 = cljs.core._nth.call(null,inst_33695,inst_33697);
var inst_33703 = cljs.core.async.muxch_STAR_.call(null,inst_33702);
var inst_33704 = cljs.core.async.close_BANG_.call(null,inst_33703);
var inst_33705 = (inst_33697 + (1));
var tmp33783 = inst_33695;
var tmp33784 = inst_33696;
var tmp33785 = inst_33694;
var inst_33694__$1 = tmp33785;
var inst_33695__$1 = tmp33783;
var inst_33696__$1 = tmp33784;
var inst_33697__$1 = inst_33705;
var state_33753__$1 = (function (){var statearr_33789 = state_33753;
(statearr_33789[(17)] = inst_33704);

(statearr_33789[(13)] = inst_33695__$1);

(statearr_33789[(14)] = inst_33696__$1);

(statearr_33789[(15)] = inst_33697__$1);

(statearr_33789[(16)] = inst_33694__$1);

return statearr_33789;
})();
var statearr_33790_33824 = state_33753__$1;
(statearr_33790_33824[(2)] = null);

(statearr_33790_33824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (18))){
var inst_33723 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
var statearr_33791_33825 = state_33753__$1;
(statearr_33791_33825[(2)] = inst_33723);

(statearr_33791_33825[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (8))){
var inst_33696 = (state_33753[(14)]);
var inst_33697 = (state_33753[(15)]);
var inst_33699 = (inst_33697 < inst_33696);
var inst_33700 = inst_33699;
var state_33753__$1 = state_33753;
if(cljs.core.truth_(inst_33700)){
var statearr_33792_33826 = state_33753__$1;
(statearr_33792_33826[(1)] = (10));

} else {
var statearr_33793_33827 = state_33753__$1;
(statearr_33793_33827[(1)] = (11));

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
});})(c__32579__auto___33799,mults,ensure_mult,p))
;
return ((function (switch__32491__auto__,c__32579__auto___33799,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32492__auto__ = null;
var cljs$core$async$state_machine__32492__auto____0 = (function (){
var statearr_33794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33794[(0)] = cljs$core$async$state_machine__32492__auto__);

(statearr_33794[(1)] = (1));

return statearr_33794;
});
var cljs$core$async$state_machine__32492__auto____1 = (function (state_33753){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_33753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e33795){if((e33795 instanceof Object)){
var ex__32495__auto__ = e33795;
var statearr_33796_33828 = state_33753;
(statearr_33796_33828[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33829 = state_33753;
state_33753 = G__33829;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
cljs$core$async$state_machine__32492__auto__ = function(state_33753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32492__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32492__auto____1.call(this,state_33753);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32492__auto____0;
cljs$core$async$state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32492__auto____1;
return cljs$core$async$state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto___33799,mults,ensure_mult,p))
})();
var state__32581__auto__ = (function (){var statearr_33797 = f__32580__auto__.call(null);
(statearr_33797[(6)] = c__32579__auto___33799);

return statearr_33797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto___33799,mults,ensure_mult,p))
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
var G__33831 = arguments.length;
switch (G__33831) {
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
var G__33834 = arguments.length;
switch (G__33834) {
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
var G__33837 = arguments.length;
switch (G__33837) {
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
var c__32579__auto___33904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto___33904,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto___33904,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33876){
var state_val_33877 = (state_33876[(1)]);
if((state_val_33877 === (7))){
var state_33876__$1 = state_33876;
var statearr_33878_33905 = state_33876__$1;
(statearr_33878_33905[(2)] = null);

(statearr_33878_33905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33877 === (1))){
var state_33876__$1 = state_33876;
var statearr_33879_33906 = state_33876__$1;
(statearr_33879_33906[(2)] = null);

(statearr_33879_33906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33877 === (4))){
var inst_33840 = (state_33876[(7)]);
var inst_33842 = (inst_33840 < cnt);
var state_33876__$1 = state_33876;
if(cljs.core.truth_(inst_33842)){
var statearr_33880_33907 = state_33876__$1;
(statearr_33880_33907[(1)] = (6));

} else {
var statearr_33881_33908 = state_33876__$1;
(statearr_33881_33908[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33877 === (15))){
var inst_33872 = (state_33876[(2)]);
var state_33876__$1 = state_33876;
var statearr_33882_33909 = state_33876__$1;
(statearr_33882_33909[(2)] = inst_33872);

(statearr_33882_33909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33877 === (13))){
var inst_33865 = cljs.core.async.close_BANG_.call(null,out);
var state_33876__$1 = state_33876;
var statearr_33883_33910 = state_33876__$1;
(statearr_33883_33910[(2)] = inst_33865);

(statearr_33883_33910[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33877 === (6))){
var state_33876__$1 = state_33876;
var statearr_33884_33911 = state_33876__$1;
(statearr_33884_33911[(2)] = null);

(statearr_33884_33911[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33877 === (3))){
var inst_33874 = (state_33876[(2)]);
var state_33876__$1 = state_33876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33876__$1,inst_33874);
} else {
if((state_val_33877 === (12))){
var inst_33862 = (state_33876[(8)]);
var inst_33862__$1 = (state_33876[(2)]);
var inst_33863 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33862__$1);
var state_33876__$1 = (function (){var statearr_33885 = state_33876;
(statearr_33885[(8)] = inst_33862__$1);

return statearr_33885;
})();
if(cljs.core.truth_(inst_33863)){
var statearr_33886_33912 = state_33876__$1;
(statearr_33886_33912[(1)] = (13));

} else {
var statearr_33887_33913 = state_33876__$1;
(statearr_33887_33913[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33877 === (2))){
var inst_33839 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33840 = (0);
var state_33876__$1 = (function (){var statearr_33888 = state_33876;
(statearr_33888[(9)] = inst_33839);

(statearr_33888[(7)] = inst_33840);

return statearr_33888;
})();
var statearr_33889_33914 = state_33876__$1;
(statearr_33889_33914[(2)] = null);

(statearr_33889_33914[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33877 === (11))){
var inst_33840 = (state_33876[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33876,(10),Object,null,(9));
var inst_33849 = chs__$1.call(null,inst_33840);
var inst_33850 = done.call(null,inst_33840);
var inst_33851 = cljs.core.async.take_BANG_.call(null,inst_33849,inst_33850);
var state_33876__$1 = state_33876;
var statearr_33890_33915 = state_33876__$1;
(statearr_33890_33915[(2)] = inst_33851);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33876__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33877 === (9))){
var inst_33840 = (state_33876[(7)]);
var inst_33853 = (state_33876[(2)]);
var inst_33854 = (inst_33840 + (1));
var inst_33840__$1 = inst_33854;
var state_33876__$1 = (function (){var statearr_33891 = state_33876;
(statearr_33891[(7)] = inst_33840__$1);

(statearr_33891[(10)] = inst_33853);

return statearr_33891;
})();
var statearr_33892_33916 = state_33876__$1;
(statearr_33892_33916[(2)] = null);

(statearr_33892_33916[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33877 === (5))){
var inst_33860 = (state_33876[(2)]);
var state_33876__$1 = (function (){var statearr_33893 = state_33876;
(statearr_33893[(11)] = inst_33860);

return statearr_33893;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33876__$1,(12),dchan);
} else {
if((state_val_33877 === (14))){
var inst_33862 = (state_33876[(8)]);
var inst_33867 = cljs.core.apply.call(null,f,inst_33862);
var state_33876__$1 = state_33876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33876__$1,(16),out,inst_33867);
} else {
if((state_val_33877 === (16))){
var inst_33869 = (state_33876[(2)]);
var state_33876__$1 = (function (){var statearr_33894 = state_33876;
(statearr_33894[(12)] = inst_33869);

return statearr_33894;
})();
var statearr_33895_33917 = state_33876__$1;
(statearr_33895_33917[(2)] = null);

(statearr_33895_33917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33877 === (10))){
var inst_33844 = (state_33876[(2)]);
var inst_33845 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33876__$1 = (function (){var statearr_33896 = state_33876;
(statearr_33896[(13)] = inst_33844);

return statearr_33896;
})();
var statearr_33897_33918 = state_33876__$1;
(statearr_33897_33918[(2)] = inst_33845);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33876__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33877 === (8))){
var inst_33858 = (state_33876[(2)]);
var state_33876__$1 = state_33876;
var statearr_33898_33919 = state_33876__$1;
(statearr_33898_33919[(2)] = inst_33858);

(statearr_33898_33919[(1)] = (5));


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
});})(c__32579__auto___33904,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32491__auto__,c__32579__auto___33904,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32492__auto__ = null;
var cljs$core$async$state_machine__32492__auto____0 = (function (){
var statearr_33899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33899[(0)] = cljs$core$async$state_machine__32492__auto__);

(statearr_33899[(1)] = (1));

return statearr_33899;
});
var cljs$core$async$state_machine__32492__auto____1 = (function (state_33876){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_33876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e33900){if((e33900 instanceof Object)){
var ex__32495__auto__ = e33900;
var statearr_33901_33920 = state_33876;
(statearr_33901_33920[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33921 = state_33876;
state_33876 = G__33921;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
cljs$core$async$state_machine__32492__auto__ = function(state_33876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32492__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32492__auto____1.call(this,state_33876);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32492__auto____0;
cljs$core$async$state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32492__auto____1;
return cljs$core$async$state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto___33904,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32581__auto__ = (function (){var statearr_33902 = f__32580__auto__.call(null);
(statearr_33902[(6)] = c__32579__auto___33904);

return statearr_33902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto___33904,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__33924 = arguments.length;
switch (G__33924) {
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
var c__32579__auto___33978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto___33978,out){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto___33978,out){
return (function (state_33956){
var state_val_33957 = (state_33956[(1)]);
if((state_val_33957 === (7))){
var inst_33935 = (state_33956[(7)]);
var inst_33936 = (state_33956[(8)]);
var inst_33935__$1 = (state_33956[(2)]);
var inst_33936__$1 = cljs.core.nth.call(null,inst_33935__$1,(0),null);
var inst_33937 = cljs.core.nth.call(null,inst_33935__$1,(1),null);
var inst_33938 = (inst_33936__$1 == null);
var state_33956__$1 = (function (){var statearr_33958 = state_33956;
(statearr_33958[(9)] = inst_33937);

(statearr_33958[(7)] = inst_33935__$1);

(statearr_33958[(8)] = inst_33936__$1);

return statearr_33958;
})();
if(cljs.core.truth_(inst_33938)){
var statearr_33959_33979 = state_33956__$1;
(statearr_33959_33979[(1)] = (8));

} else {
var statearr_33960_33980 = state_33956__$1;
(statearr_33960_33980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33957 === (1))){
var inst_33925 = cljs.core.vec.call(null,chs);
var inst_33926 = inst_33925;
var state_33956__$1 = (function (){var statearr_33961 = state_33956;
(statearr_33961[(10)] = inst_33926);

return statearr_33961;
})();
var statearr_33962_33981 = state_33956__$1;
(statearr_33962_33981[(2)] = null);

(statearr_33962_33981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33957 === (4))){
var inst_33926 = (state_33956[(10)]);
var state_33956__$1 = state_33956;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33956__$1,(7),inst_33926);
} else {
if((state_val_33957 === (6))){
var inst_33952 = (state_33956[(2)]);
var state_33956__$1 = state_33956;
var statearr_33963_33982 = state_33956__$1;
(statearr_33963_33982[(2)] = inst_33952);

(statearr_33963_33982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33957 === (3))){
var inst_33954 = (state_33956[(2)]);
var state_33956__$1 = state_33956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33956__$1,inst_33954);
} else {
if((state_val_33957 === (2))){
var inst_33926 = (state_33956[(10)]);
var inst_33928 = cljs.core.count.call(null,inst_33926);
var inst_33929 = (inst_33928 > (0));
var state_33956__$1 = state_33956;
if(cljs.core.truth_(inst_33929)){
var statearr_33965_33983 = state_33956__$1;
(statearr_33965_33983[(1)] = (4));

} else {
var statearr_33966_33984 = state_33956__$1;
(statearr_33966_33984[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33957 === (11))){
var inst_33926 = (state_33956[(10)]);
var inst_33945 = (state_33956[(2)]);
var tmp33964 = inst_33926;
var inst_33926__$1 = tmp33964;
var state_33956__$1 = (function (){var statearr_33967 = state_33956;
(statearr_33967[(10)] = inst_33926__$1);

(statearr_33967[(11)] = inst_33945);

return statearr_33967;
})();
var statearr_33968_33985 = state_33956__$1;
(statearr_33968_33985[(2)] = null);

(statearr_33968_33985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33957 === (9))){
var inst_33936 = (state_33956[(8)]);
var state_33956__$1 = state_33956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33956__$1,(11),out,inst_33936);
} else {
if((state_val_33957 === (5))){
var inst_33950 = cljs.core.async.close_BANG_.call(null,out);
var state_33956__$1 = state_33956;
var statearr_33969_33986 = state_33956__$1;
(statearr_33969_33986[(2)] = inst_33950);

(statearr_33969_33986[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33957 === (10))){
var inst_33948 = (state_33956[(2)]);
var state_33956__$1 = state_33956;
var statearr_33970_33987 = state_33956__$1;
(statearr_33970_33987[(2)] = inst_33948);

(statearr_33970_33987[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33957 === (8))){
var inst_33937 = (state_33956[(9)]);
var inst_33926 = (state_33956[(10)]);
var inst_33935 = (state_33956[(7)]);
var inst_33936 = (state_33956[(8)]);
var inst_33940 = (function (){var cs = inst_33926;
var vec__33931 = inst_33935;
var v = inst_33936;
var c = inst_33937;
return ((function (cs,vec__33931,v,c,inst_33937,inst_33926,inst_33935,inst_33936,state_val_33957,c__32579__auto___33978,out){
return (function (p1__33922_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33922_SHARP_);
});
;})(cs,vec__33931,v,c,inst_33937,inst_33926,inst_33935,inst_33936,state_val_33957,c__32579__auto___33978,out))
})();
var inst_33941 = cljs.core.filterv.call(null,inst_33940,inst_33926);
var inst_33926__$1 = inst_33941;
var state_33956__$1 = (function (){var statearr_33971 = state_33956;
(statearr_33971[(10)] = inst_33926__$1);

return statearr_33971;
})();
var statearr_33972_33988 = state_33956__$1;
(statearr_33972_33988[(2)] = null);

(statearr_33972_33988[(1)] = (2));


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
});})(c__32579__auto___33978,out))
;
return ((function (switch__32491__auto__,c__32579__auto___33978,out){
return (function() {
var cljs$core$async$state_machine__32492__auto__ = null;
var cljs$core$async$state_machine__32492__auto____0 = (function (){
var statearr_33973 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33973[(0)] = cljs$core$async$state_machine__32492__auto__);

(statearr_33973[(1)] = (1));

return statearr_33973;
});
var cljs$core$async$state_machine__32492__auto____1 = (function (state_33956){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_33956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e33974){if((e33974 instanceof Object)){
var ex__32495__auto__ = e33974;
var statearr_33975_33989 = state_33956;
(statearr_33975_33989[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33990 = state_33956;
state_33956 = G__33990;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
cljs$core$async$state_machine__32492__auto__ = function(state_33956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32492__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32492__auto____1.call(this,state_33956);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32492__auto____0;
cljs$core$async$state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32492__auto____1;
return cljs$core$async$state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto___33978,out))
})();
var state__32581__auto__ = (function (){var statearr_33976 = f__32580__auto__.call(null);
(statearr_33976[(6)] = c__32579__auto___33978);

return statearr_33976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto___33978,out))
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
var G__33992 = arguments.length;
switch (G__33992) {
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
var c__32579__auto___34037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto___34037,out){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto___34037,out){
return (function (state_34016){
var state_val_34017 = (state_34016[(1)]);
if((state_val_34017 === (7))){
var inst_33998 = (state_34016[(7)]);
var inst_33998__$1 = (state_34016[(2)]);
var inst_33999 = (inst_33998__$1 == null);
var inst_34000 = cljs.core.not.call(null,inst_33999);
var state_34016__$1 = (function (){var statearr_34018 = state_34016;
(statearr_34018[(7)] = inst_33998__$1);

return statearr_34018;
})();
if(inst_34000){
var statearr_34019_34038 = state_34016__$1;
(statearr_34019_34038[(1)] = (8));

} else {
var statearr_34020_34039 = state_34016__$1;
(statearr_34020_34039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (1))){
var inst_33993 = (0);
var state_34016__$1 = (function (){var statearr_34021 = state_34016;
(statearr_34021[(8)] = inst_33993);

return statearr_34021;
})();
var statearr_34022_34040 = state_34016__$1;
(statearr_34022_34040[(2)] = null);

(statearr_34022_34040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (4))){
var state_34016__$1 = state_34016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34016__$1,(7),ch);
} else {
if((state_val_34017 === (6))){
var inst_34011 = (state_34016[(2)]);
var state_34016__$1 = state_34016;
var statearr_34023_34041 = state_34016__$1;
(statearr_34023_34041[(2)] = inst_34011);

(statearr_34023_34041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (3))){
var inst_34013 = (state_34016[(2)]);
var inst_34014 = cljs.core.async.close_BANG_.call(null,out);
var state_34016__$1 = (function (){var statearr_34024 = state_34016;
(statearr_34024[(9)] = inst_34013);

return statearr_34024;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34016__$1,inst_34014);
} else {
if((state_val_34017 === (2))){
var inst_33993 = (state_34016[(8)]);
var inst_33995 = (inst_33993 < n);
var state_34016__$1 = state_34016;
if(cljs.core.truth_(inst_33995)){
var statearr_34025_34042 = state_34016__$1;
(statearr_34025_34042[(1)] = (4));

} else {
var statearr_34026_34043 = state_34016__$1;
(statearr_34026_34043[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (11))){
var inst_33993 = (state_34016[(8)]);
var inst_34003 = (state_34016[(2)]);
var inst_34004 = (inst_33993 + (1));
var inst_33993__$1 = inst_34004;
var state_34016__$1 = (function (){var statearr_34027 = state_34016;
(statearr_34027[(10)] = inst_34003);

(statearr_34027[(8)] = inst_33993__$1);

return statearr_34027;
})();
var statearr_34028_34044 = state_34016__$1;
(statearr_34028_34044[(2)] = null);

(statearr_34028_34044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (9))){
var state_34016__$1 = state_34016;
var statearr_34029_34045 = state_34016__$1;
(statearr_34029_34045[(2)] = null);

(statearr_34029_34045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (5))){
var state_34016__$1 = state_34016;
var statearr_34030_34046 = state_34016__$1;
(statearr_34030_34046[(2)] = null);

(statearr_34030_34046[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (10))){
var inst_34008 = (state_34016[(2)]);
var state_34016__$1 = state_34016;
var statearr_34031_34047 = state_34016__$1;
(statearr_34031_34047[(2)] = inst_34008);

(statearr_34031_34047[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (8))){
var inst_33998 = (state_34016[(7)]);
var state_34016__$1 = state_34016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34016__$1,(11),out,inst_33998);
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
});})(c__32579__auto___34037,out))
;
return ((function (switch__32491__auto__,c__32579__auto___34037,out){
return (function() {
var cljs$core$async$state_machine__32492__auto__ = null;
var cljs$core$async$state_machine__32492__auto____0 = (function (){
var statearr_34032 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34032[(0)] = cljs$core$async$state_machine__32492__auto__);

(statearr_34032[(1)] = (1));

return statearr_34032;
});
var cljs$core$async$state_machine__32492__auto____1 = (function (state_34016){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_34016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e34033){if((e34033 instanceof Object)){
var ex__32495__auto__ = e34033;
var statearr_34034_34048 = state_34016;
(statearr_34034_34048[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34049 = state_34016;
state_34016 = G__34049;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
cljs$core$async$state_machine__32492__auto__ = function(state_34016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32492__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32492__auto____1.call(this,state_34016);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32492__auto____0;
cljs$core$async$state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32492__auto____1;
return cljs$core$async$state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto___34037,out))
})();
var state__32581__auto__ = (function (){var statearr_34035 = f__32580__auto__.call(null);
(statearr_34035[(6)] = c__32579__auto___34037);

return statearr_34035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto___34037,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34051 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34051 = (function (f,ch,meta34052){
this.f = f;
this.ch = ch;
this.meta34052 = meta34052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34053,meta34052__$1){
var self__ = this;
var _34053__$1 = this;
return (new cljs.core.async.t_cljs$core$async34051(self__.f,self__.ch,meta34052__$1));
});

cljs.core.async.t_cljs$core$async34051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34053){
var self__ = this;
var _34053__$1 = this;
return self__.meta34052;
});

cljs.core.async.t_cljs$core$async34051.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34051.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34051.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34051.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34051.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34054 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34054 = (function (f,ch,meta34052,_,fn1,meta34055){
this.f = f;
this.ch = ch;
this.meta34052 = meta34052;
this._ = _;
this.fn1 = fn1;
this.meta34055 = meta34055;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34056,meta34055__$1){
var self__ = this;
var _34056__$1 = this;
return (new cljs.core.async.t_cljs$core$async34054(self__.f,self__.ch,self__.meta34052,self__._,self__.fn1,meta34055__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34054.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34056){
var self__ = this;
var _34056__$1 = this;
return self__.meta34055;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34054.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34054.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34054.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34054.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34050_SHARP_){
return f1.call(null,(((p1__34050_SHARP_ == null))?null:self__.f.call(null,p1__34050_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34054.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34052","meta34052",1306445307,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34051","cljs.core.async/t_cljs$core$async34051",-1220834987,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34055","meta34055",-1181964345,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34054.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34054.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34054";

cljs.core.async.t_cljs$core$async34054.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async34054");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34054 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34054(f__$1,ch__$1,meta34052__$1,___$2,fn1__$1,meta34055){
return (new cljs.core.async.t_cljs$core$async34054(f__$1,ch__$1,meta34052__$1,___$2,fn1__$1,meta34055));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34054(self__.f,self__.ch,self__.meta34052,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async34051.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34051.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34051.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34052","meta34052",1306445307,null)], null);
});

cljs.core.async.t_cljs$core$async34051.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34051";

cljs.core.async.t_cljs$core$async34051.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async34051");
});

cljs.core.async.__GT_t_cljs$core$async34051 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34051(f__$1,ch__$1,meta34052){
return (new cljs.core.async.t_cljs$core$async34051(f__$1,ch__$1,meta34052));
});

}

return (new cljs.core.async.t_cljs$core$async34051(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34057 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34057 = (function (f,ch,meta34058){
this.f = f;
this.ch = ch;
this.meta34058 = meta34058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34059,meta34058__$1){
var self__ = this;
var _34059__$1 = this;
return (new cljs.core.async.t_cljs$core$async34057(self__.f,self__.ch,meta34058__$1));
});

cljs.core.async.t_cljs$core$async34057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34059){
var self__ = this;
var _34059__$1 = this;
return self__.meta34058;
});

cljs.core.async.t_cljs$core$async34057.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34057.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34057.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34057.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34057.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34057.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34057.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34058","meta34058",1845233630,null)], null);
});

cljs.core.async.t_cljs$core$async34057.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34057.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34057";

cljs.core.async.t_cljs$core$async34057.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async34057");
});

cljs.core.async.__GT_t_cljs$core$async34057 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34057(f__$1,ch__$1,meta34058){
return (new cljs.core.async.t_cljs$core$async34057(f__$1,ch__$1,meta34058));
});

}

return (new cljs.core.async.t_cljs$core$async34057(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34060 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34060 = (function (p,ch,meta34061){
this.p = p;
this.ch = ch;
this.meta34061 = meta34061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34062,meta34061__$1){
var self__ = this;
var _34062__$1 = this;
return (new cljs.core.async.t_cljs$core$async34060(self__.p,self__.ch,meta34061__$1));
});

cljs.core.async.t_cljs$core$async34060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34062){
var self__ = this;
var _34062__$1 = this;
return self__.meta34061;
});

cljs.core.async.t_cljs$core$async34060.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34060.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34060.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34060.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34060.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34060.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34060.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34060.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34061","meta34061",277551069,null)], null);
});

cljs.core.async.t_cljs$core$async34060.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34060.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34060";

cljs.core.async.t_cljs$core$async34060.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async34060");
});

cljs.core.async.__GT_t_cljs$core$async34060 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34060(p__$1,ch__$1,meta34061){
return (new cljs.core.async.t_cljs$core$async34060(p__$1,ch__$1,meta34061));
});

}

return (new cljs.core.async.t_cljs$core$async34060(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34064 = arguments.length;
switch (G__34064) {
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
var c__32579__auto___34104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto___34104,out){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto___34104,out){
return (function (state_34085){
var state_val_34086 = (state_34085[(1)]);
if((state_val_34086 === (7))){
var inst_34081 = (state_34085[(2)]);
var state_34085__$1 = state_34085;
var statearr_34087_34105 = state_34085__$1;
(statearr_34087_34105[(2)] = inst_34081);

(statearr_34087_34105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (1))){
var state_34085__$1 = state_34085;
var statearr_34088_34106 = state_34085__$1;
(statearr_34088_34106[(2)] = null);

(statearr_34088_34106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (4))){
var inst_34067 = (state_34085[(7)]);
var inst_34067__$1 = (state_34085[(2)]);
var inst_34068 = (inst_34067__$1 == null);
var state_34085__$1 = (function (){var statearr_34089 = state_34085;
(statearr_34089[(7)] = inst_34067__$1);

return statearr_34089;
})();
if(cljs.core.truth_(inst_34068)){
var statearr_34090_34107 = state_34085__$1;
(statearr_34090_34107[(1)] = (5));

} else {
var statearr_34091_34108 = state_34085__$1;
(statearr_34091_34108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (6))){
var inst_34067 = (state_34085[(7)]);
var inst_34072 = p.call(null,inst_34067);
var state_34085__$1 = state_34085;
if(cljs.core.truth_(inst_34072)){
var statearr_34092_34109 = state_34085__$1;
(statearr_34092_34109[(1)] = (8));

} else {
var statearr_34093_34110 = state_34085__$1;
(statearr_34093_34110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (3))){
var inst_34083 = (state_34085[(2)]);
var state_34085__$1 = state_34085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34085__$1,inst_34083);
} else {
if((state_val_34086 === (2))){
var state_34085__$1 = state_34085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34085__$1,(4),ch);
} else {
if((state_val_34086 === (11))){
var inst_34075 = (state_34085[(2)]);
var state_34085__$1 = state_34085;
var statearr_34094_34111 = state_34085__$1;
(statearr_34094_34111[(2)] = inst_34075);

(statearr_34094_34111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (9))){
var state_34085__$1 = state_34085;
var statearr_34095_34112 = state_34085__$1;
(statearr_34095_34112[(2)] = null);

(statearr_34095_34112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (5))){
var inst_34070 = cljs.core.async.close_BANG_.call(null,out);
var state_34085__$1 = state_34085;
var statearr_34096_34113 = state_34085__$1;
(statearr_34096_34113[(2)] = inst_34070);

(statearr_34096_34113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (10))){
var inst_34078 = (state_34085[(2)]);
var state_34085__$1 = (function (){var statearr_34097 = state_34085;
(statearr_34097[(8)] = inst_34078);

return statearr_34097;
})();
var statearr_34098_34114 = state_34085__$1;
(statearr_34098_34114[(2)] = null);

(statearr_34098_34114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (8))){
var inst_34067 = (state_34085[(7)]);
var state_34085__$1 = state_34085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34085__$1,(11),out,inst_34067);
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
});})(c__32579__auto___34104,out))
;
return ((function (switch__32491__auto__,c__32579__auto___34104,out){
return (function() {
var cljs$core$async$state_machine__32492__auto__ = null;
var cljs$core$async$state_machine__32492__auto____0 = (function (){
var statearr_34099 = [null,null,null,null,null,null,null,null,null];
(statearr_34099[(0)] = cljs$core$async$state_machine__32492__auto__);

(statearr_34099[(1)] = (1));

return statearr_34099;
});
var cljs$core$async$state_machine__32492__auto____1 = (function (state_34085){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_34085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e34100){if((e34100 instanceof Object)){
var ex__32495__auto__ = e34100;
var statearr_34101_34115 = state_34085;
(statearr_34101_34115[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34116 = state_34085;
state_34085 = G__34116;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
cljs$core$async$state_machine__32492__auto__ = function(state_34085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32492__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32492__auto____1.call(this,state_34085);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32492__auto____0;
cljs$core$async$state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32492__auto____1;
return cljs$core$async$state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto___34104,out))
})();
var state__32581__auto__ = (function (){var statearr_34102 = f__32580__auto__.call(null);
(statearr_34102[(6)] = c__32579__auto___34104);

return statearr_34102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto___34104,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34118 = arguments.length;
switch (G__34118) {
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
var c__32579__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto__){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto__){
return (function (state_34181){
var state_val_34182 = (state_34181[(1)]);
if((state_val_34182 === (7))){
var inst_34177 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
var statearr_34183_34221 = state_34181__$1;
(statearr_34183_34221[(2)] = inst_34177);

(statearr_34183_34221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (20))){
var inst_34147 = (state_34181[(7)]);
var inst_34158 = (state_34181[(2)]);
var inst_34159 = cljs.core.next.call(null,inst_34147);
var inst_34133 = inst_34159;
var inst_34134 = null;
var inst_34135 = (0);
var inst_34136 = (0);
var state_34181__$1 = (function (){var statearr_34184 = state_34181;
(statearr_34184[(8)] = inst_34158);

(statearr_34184[(9)] = inst_34136);

(statearr_34184[(10)] = inst_34135);

(statearr_34184[(11)] = inst_34134);

(statearr_34184[(12)] = inst_34133);

return statearr_34184;
})();
var statearr_34185_34222 = state_34181__$1;
(statearr_34185_34222[(2)] = null);

(statearr_34185_34222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (1))){
var state_34181__$1 = state_34181;
var statearr_34186_34223 = state_34181__$1;
(statearr_34186_34223[(2)] = null);

(statearr_34186_34223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (4))){
var inst_34122 = (state_34181[(13)]);
var inst_34122__$1 = (state_34181[(2)]);
var inst_34123 = (inst_34122__$1 == null);
var state_34181__$1 = (function (){var statearr_34187 = state_34181;
(statearr_34187[(13)] = inst_34122__$1);

return statearr_34187;
})();
if(cljs.core.truth_(inst_34123)){
var statearr_34188_34224 = state_34181__$1;
(statearr_34188_34224[(1)] = (5));

} else {
var statearr_34189_34225 = state_34181__$1;
(statearr_34189_34225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (15))){
var state_34181__$1 = state_34181;
var statearr_34193_34226 = state_34181__$1;
(statearr_34193_34226[(2)] = null);

(statearr_34193_34226[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (21))){
var state_34181__$1 = state_34181;
var statearr_34194_34227 = state_34181__$1;
(statearr_34194_34227[(2)] = null);

(statearr_34194_34227[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (13))){
var inst_34136 = (state_34181[(9)]);
var inst_34135 = (state_34181[(10)]);
var inst_34134 = (state_34181[(11)]);
var inst_34133 = (state_34181[(12)]);
var inst_34143 = (state_34181[(2)]);
var inst_34144 = (inst_34136 + (1));
var tmp34190 = inst_34135;
var tmp34191 = inst_34134;
var tmp34192 = inst_34133;
var inst_34133__$1 = tmp34192;
var inst_34134__$1 = tmp34191;
var inst_34135__$1 = tmp34190;
var inst_34136__$1 = inst_34144;
var state_34181__$1 = (function (){var statearr_34195 = state_34181;
(statearr_34195[(9)] = inst_34136__$1);

(statearr_34195[(10)] = inst_34135__$1);

(statearr_34195[(11)] = inst_34134__$1);

(statearr_34195[(12)] = inst_34133__$1);

(statearr_34195[(14)] = inst_34143);

return statearr_34195;
})();
var statearr_34196_34228 = state_34181__$1;
(statearr_34196_34228[(2)] = null);

(statearr_34196_34228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (22))){
var state_34181__$1 = state_34181;
var statearr_34197_34229 = state_34181__$1;
(statearr_34197_34229[(2)] = null);

(statearr_34197_34229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (6))){
var inst_34122 = (state_34181[(13)]);
var inst_34131 = f.call(null,inst_34122);
var inst_34132 = cljs.core.seq.call(null,inst_34131);
var inst_34133 = inst_34132;
var inst_34134 = null;
var inst_34135 = (0);
var inst_34136 = (0);
var state_34181__$1 = (function (){var statearr_34198 = state_34181;
(statearr_34198[(9)] = inst_34136);

(statearr_34198[(10)] = inst_34135);

(statearr_34198[(11)] = inst_34134);

(statearr_34198[(12)] = inst_34133);

return statearr_34198;
})();
var statearr_34199_34230 = state_34181__$1;
(statearr_34199_34230[(2)] = null);

(statearr_34199_34230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (17))){
var inst_34147 = (state_34181[(7)]);
var inst_34151 = cljs.core.chunk_first.call(null,inst_34147);
var inst_34152 = cljs.core.chunk_rest.call(null,inst_34147);
var inst_34153 = cljs.core.count.call(null,inst_34151);
var inst_34133 = inst_34152;
var inst_34134 = inst_34151;
var inst_34135 = inst_34153;
var inst_34136 = (0);
var state_34181__$1 = (function (){var statearr_34200 = state_34181;
(statearr_34200[(9)] = inst_34136);

(statearr_34200[(10)] = inst_34135);

(statearr_34200[(11)] = inst_34134);

(statearr_34200[(12)] = inst_34133);

return statearr_34200;
})();
var statearr_34201_34231 = state_34181__$1;
(statearr_34201_34231[(2)] = null);

(statearr_34201_34231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (3))){
var inst_34179 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34181__$1,inst_34179);
} else {
if((state_val_34182 === (12))){
var inst_34167 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
var statearr_34202_34232 = state_34181__$1;
(statearr_34202_34232[(2)] = inst_34167);

(statearr_34202_34232[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (2))){
var state_34181__$1 = state_34181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34181__$1,(4),in$);
} else {
if((state_val_34182 === (23))){
var inst_34175 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
var statearr_34203_34233 = state_34181__$1;
(statearr_34203_34233[(2)] = inst_34175);

(statearr_34203_34233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (19))){
var inst_34162 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
var statearr_34204_34234 = state_34181__$1;
(statearr_34204_34234[(2)] = inst_34162);

(statearr_34204_34234[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (11))){
var inst_34147 = (state_34181[(7)]);
var inst_34133 = (state_34181[(12)]);
var inst_34147__$1 = cljs.core.seq.call(null,inst_34133);
var state_34181__$1 = (function (){var statearr_34205 = state_34181;
(statearr_34205[(7)] = inst_34147__$1);

return statearr_34205;
})();
if(inst_34147__$1){
var statearr_34206_34235 = state_34181__$1;
(statearr_34206_34235[(1)] = (14));

} else {
var statearr_34207_34236 = state_34181__$1;
(statearr_34207_34236[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (9))){
var inst_34169 = (state_34181[(2)]);
var inst_34170 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34181__$1 = (function (){var statearr_34208 = state_34181;
(statearr_34208[(15)] = inst_34169);

return statearr_34208;
})();
if(cljs.core.truth_(inst_34170)){
var statearr_34209_34237 = state_34181__$1;
(statearr_34209_34237[(1)] = (21));

} else {
var statearr_34210_34238 = state_34181__$1;
(statearr_34210_34238[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (5))){
var inst_34125 = cljs.core.async.close_BANG_.call(null,out);
var state_34181__$1 = state_34181;
var statearr_34211_34239 = state_34181__$1;
(statearr_34211_34239[(2)] = inst_34125);

(statearr_34211_34239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (14))){
var inst_34147 = (state_34181[(7)]);
var inst_34149 = cljs.core.chunked_seq_QMARK_.call(null,inst_34147);
var state_34181__$1 = state_34181;
if(inst_34149){
var statearr_34212_34240 = state_34181__$1;
(statearr_34212_34240[(1)] = (17));

} else {
var statearr_34213_34241 = state_34181__$1;
(statearr_34213_34241[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (16))){
var inst_34165 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
var statearr_34214_34242 = state_34181__$1;
(statearr_34214_34242[(2)] = inst_34165);

(statearr_34214_34242[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (10))){
var inst_34136 = (state_34181[(9)]);
var inst_34134 = (state_34181[(11)]);
var inst_34141 = cljs.core._nth.call(null,inst_34134,inst_34136);
var state_34181__$1 = state_34181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34181__$1,(13),out,inst_34141);
} else {
if((state_val_34182 === (18))){
var inst_34147 = (state_34181[(7)]);
var inst_34156 = cljs.core.first.call(null,inst_34147);
var state_34181__$1 = state_34181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34181__$1,(20),out,inst_34156);
} else {
if((state_val_34182 === (8))){
var inst_34136 = (state_34181[(9)]);
var inst_34135 = (state_34181[(10)]);
var inst_34138 = (inst_34136 < inst_34135);
var inst_34139 = inst_34138;
var state_34181__$1 = state_34181;
if(cljs.core.truth_(inst_34139)){
var statearr_34215_34243 = state_34181__$1;
(statearr_34215_34243[(1)] = (10));

} else {
var statearr_34216_34244 = state_34181__$1;
(statearr_34216_34244[(1)] = (11));

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
});})(c__32579__auto__))
;
return ((function (switch__32491__auto__,c__32579__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32492__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32492__auto____0 = (function (){
var statearr_34217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34217[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32492__auto__);

(statearr_34217[(1)] = (1));

return statearr_34217;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32492__auto____1 = (function (state_34181){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_34181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e34218){if((e34218 instanceof Object)){
var ex__32495__auto__ = e34218;
var statearr_34219_34245 = state_34181;
(statearr_34219_34245[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34246 = state_34181;
state_34181 = G__34246;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32492__auto__ = function(state_34181){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32492__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32492__auto____1.call(this,state_34181);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32492__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32492__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto__))
})();
var state__32581__auto__ = (function (){var statearr_34220 = f__32580__auto__.call(null);
(statearr_34220[(6)] = c__32579__auto__);

return statearr_34220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto__))
);

return c__32579__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34248 = arguments.length;
switch (G__34248) {
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
var G__34251 = arguments.length;
switch (G__34251) {
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
var G__34254 = arguments.length;
switch (G__34254) {
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
var c__32579__auto___34301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto___34301,out){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto___34301,out){
return (function (state_34278){
var state_val_34279 = (state_34278[(1)]);
if((state_val_34279 === (7))){
var inst_34273 = (state_34278[(2)]);
var state_34278__$1 = state_34278;
var statearr_34280_34302 = state_34278__$1;
(statearr_34280_34302[(2)] = inst_34273);

(statearr_34280_34302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34279 === (1))){
var inst_34255 = null;
var state_34278__$1 = (function (){var statearr_34281 = state_34278;
(statearr_34281[(7)] = inst_34255);

return statearr_34281;
})();
var statearr_34282_34303 = state_34278__$1;
(statearr_34282_34303[(2)] = null);

(statearr_34282_34303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34279 === (4))){
var inst_34258 = (state_34278[(8)]);
var inst_34258__$1 = (state_34278[(2)]);
var inst_34259 = (inst_34258__$1 == null);
var inst_34260 = cljs.core.not.call(null,inst_34259);
var state_34278__$1 = (function (){var statearr_34283 = state_34278;
(statearr_34283[(8)] = inst_34258__$1);

return statearr_34283;
})();
if(inst_34260){
var statearr_34284_34304 = state_34278__$1;
(statearr_34284_34304[(1)] = (5));

} else {
var statearr_34285_34305 = state_34278__$1;
(statearr_34285_34305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34279 === (6))){
var state_34278__$1 = state_34278;
var statearr_34286_34306 = state_34278__$1;
(statearr_34286_34306[(2)] = null);

(statearr_34286_34306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34279 === (3))){
var inst_34275 = (state_34278[(2)]);
var inst_34276 = cljs.core.async.close_BANG_.call(null,out);
var state_34278__$1 = (function (){var statearr_34287 = state_34278;
(statearr_34287[(9)] = inst_34275);

return statearr_34287;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34278__$1,inst_34276);
} else {
if((state_val_34279 === (2))){
var state_34278__$1 = state_34278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34278__$1,(4),ch);
} else {
if((state_val_34279 === (11))){
var inst_34258 = (state_34278[(8)]);
var inst_34267 = (state_34278[(2)]);
var inst_34255 = inst_34258;
var state_34278__$1 = (function (){var statearr_34288 = state_34278;
(statearr_34288[(10)] = inst_34267);

(statearr_34288[(7)] = inst_34255);

return statearr_34288;
})();
var statearr_34289_34307 = state_34278__$1;
(statearr_34289_34307[(2)] = null);

(statearr_34289_34307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34279 === (9))){
var inst_34258 = (state_34278[(8)]);
var state_34278__$1 = state_34278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34278__$1,(11),out,inst_34258);
} else {
if((state_val_34279 === (5))){
var inst_34258 = (state_34278[(8)]);
var inst_34255 = (state_34278[(7)]);
var inst_34262 = cljs.core._EQ_.call(null,inst_34258,inst_34255);
var state_34278__$1 = state_34278;
if(inst_34262){
var statearr_34291_34308 = state_34278__$1;
(statearr_34291_34308[(1)] = (8));

} else {
var statearr_34292_34309 = state_34278__$1;
(statearr_34292_34309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34279 === (10))){
var inst_34270 = (state_34278[(2)]);
var state_34278__$1 = state_34278;
var statearr_34293_34310 = state_34278__$1;
(statearr_34293_34310[(2)] = inst_34270);

(statearr_34293_34310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34279 === (8))){
var inst_34255 = (state_34278[(7)]);
var tmp34290 = inst_34255;
var inst_34255__$1 = tmp34290;
var state_34278__$1 = (function (){var statearr_34294 = state_34278;
(statearr_34294[(7)] = inst_34255__$1);

return statearr_34294;
})();
var statearr_34295_34311 = state_34278__$1;
(statearr_34295_34311[(2)] = null);

(statearr_34295_34311[(1)] = (2));


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
});})(c__32579__auto___34301,out))
;
return ((function (switch__32491__auto__,c__32579__auto___34301,out){
return (function() {
var cljs$core$async$state_machine__32492__auto__ = null;
var cljs$core$async$state_machine__32492__auto____0 = (function (){
var statearr_34296 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34296[(0)] = cljs$core$async$state_machine__32492__auto__);

(statearr_34296[(1)] = (1));

return statearr_34296;
});
var cljs$core$async$state_machine__32492__auto____1 = (function (state_34278){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_34278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e34297){if((e34297 instanceof Object)){
var ex__32495__auto__ = e34297;
var statearr_34298_34312 = state_34278;
(statearr_34298_34312[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34313 = state_34278;
state_34278 = G__34313;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
cljs$core$async$state_machine__32492__auto__ = function(state_34278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32492__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32492__auto____1.call(this,state_34278);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32492__auto____0;
cljs$core$async$state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32492__auto____1;
return cljs$core$async$state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto___34301,out))
})();
var state__32581__auto__ = (function (){var statearr_34299 = f__32580__auto__.call(null);
(statearr_34299[(6)] = c__32579__auto___34301);

return statearr_34299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto___34301,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34315 = arguments.length;
switch (G__34315) {
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
var c__32579__auto___34381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto___34381,out){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto___34381,out){
return (function (state_34353){
var state_val_34354 = (state_34353[(1)]);
if((state_val_34354 === (7))){
var inst_34349 = (state_34353[(2)]);
var state_34353__$1 = state_34353;
var statearr_34355_34382 = state_34353__$1;
(statearr_34355_34382[(2)] = inst_34349);

(statearr_34355_34382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34354 === (1))){
var inst_34316 = (new Array(n));
var inst_34317 = inst_34316;
var inst_34318 = (0);
var state_34353__$1 = (function (){var statearr_34356 = state_34353;
(statearr_34356[(7)] = inst_34317);

(statearr_34356[(8)] = inst_34318);

return statearr_34356;
})();
var statearr_34357_34383 = state_34353__$1;
(statearr_34357_34383[(2)] = null);

(statearr_34357_34383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34354 === (4))){
var inst_34321 = (state_34353[(9)]);
var inst_34321__$1 = (state_34353[(2)]);
var inst_34322 = (inst_34321__$1 == null);
var inst_34323 = cljs.core.not.call(null,inst_34322);
var state_34353__$1 = (function (){var statearr_34358 = state_34353;
(statearr_34358[(9)] = inst_34321__$1);

return statearr_34358;
})();
if(inst_34323){
var statearr_34359_34384 = state_34353__$1;
(statearr_34359_34384[(1)] = (5));

} else {
var statearr_34360_34385 = state_34353__$1;
(statearr_34360_34385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34354 === (15))){
var inst_34343 = (state_34353[(2)]);
var state_34353__$1 = state_34353;
var statearr_34361_34386 = state_34353__$1;
(statearr_34361_34386[(2)] = inst_34343);

(statearr_34361_34386[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34354 === (13))){
var state_34353__$1 = state_34353;
var statearr_34362_34387 = state_34353__$1;
(statearr_34362_34387[(2)] = null);

(statearr_34362_34387[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34354 === (6))){
var inst_34318 = (state_34353[(8)]);
var inst_34339 = (inst_34318 > (0));
var state_34353__$1 = state_34353;
if(cljs.core.truth_(inst_34339)){
var statearr_34363_34388 = state_34353__$1;
(statearr_34363_34388[(1)] = (12));

} else {
var statearr_34364_34389 = state_34353__$1;
(statearr_34364_34389[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34354 === (3))){
var inst_34351 = (state_34353[(2)]);
var state_34353__$1 = state_34353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34353__$1,inst_34351);
} else {
if((state_val_34354 === (12))){
var inst_34317 = (state_34353[(7)]);
var inst_34341 = cljs.core.vec.call(null,inst_34317);
var state_34353__$1 = state_34353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34353__$1,(15),out,inst_34341);
} else {
if((state_val_34354 === (2))){
var state_34353__$1 = state_34353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34353__$1,(4),ch);
} else {
if((state_val_34354 === (11))){
var inst_34333 = (state_34353[(2)]);
var inst_34334 = (new Array(n));
var inst_34317 = inst_34334;
var inst_34318 = (0);
var state_34353__$1 = (function (){var statearr_34365 = state_34353;
(statearr_34365[(7)] = inst_34317);

(statearr_34365[(8)] = inst_34318);

(statearr_34365[(10)] = inst_34333);

return statearr_34365;
})();
var statearr_34366_34390 = state_34353__$1;
(statearr_34366_34390[(2)] = null);

(statearr_34366_34390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34354 === (9))){
var inst_34317 = (state_34353[(7)]);
var inst_34331 = cljs.core.vec.call(null,inst_34317);
var state_34353__$1 = state_34353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34353__$1,(11),out,inst_34331);
} else {
if((state_val_34354 === (5))){
var inst_34317 = (state_34353[(7)]);
var inst_34318 = (state_34353[(8)]);
var inst_34321 = (state_34353[(9)]);
var inst_34326 = (state_34353[(11)]);
var inst_34325 = (inst_34317[inst_34318] = inst_34321);
var inst_34326__$1 = (inst_34318 + (1));
var inst_34327 = (inst_34326__$1 < n);
var state_34353__$1 = (function (){var statearr_34367 = state_34353;
(statearr_34367[(12)] = inst_34325);

(statearr_34367[(11)] = inst_34326__$1);

return statearr_34367;
})();
if(cljs.core.truth_(inst_34327)){
var statearr_34368_34391 = state_34353__$1;
(statearr_34368_34391[(1)] = (8));

} else {
var statearr_34369_34392 = state_34353__$1;
(statearr_34369_34392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34354 === (14))){
var inst_34346 = (state_34353[(2)]);
var inst_34347 = cljs.core.async.close_BANG_.call(null,out);
var state_34353__$1 = (function (){var statearr_34371 = state_34353;
(statearr_34371[(13)] = inst_34346);

return statearr_34371;
})();
var statearr_34372_34393 = state_34353__$1;
(statearr_34372_34393[(2)] = inst_34347);

(statearr_34372_34393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34354 === (10))){
var inst_34337 = (state_34353[(2)]);
var state_34353__$1 = state_34353;
var statearr_34373_34394 = state_34353__$1;
(statearr_34373_34394[(2)] = inst_34337);

(statearr_34373_34394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34354 === (8))){
var inst_34317 = (state_34353[(7)]);
var inst_34326 = (state_34353[(11)]);
var tmp34370 = inst_34317;
var inst_34317__$1 = tmp34370;
var inst_34318 = inst_34326;
var state_34353__$1 = (function (){var statearr_34374 = state_34353;
(statearr_34374[(7)] = inst_34317__$1);

(statearr_34374[(8)] = inst_34318);

return statearr_34374;
})();
var statearr_34375_34395 = state_34353__$1;
(statearr_34375_34395[(2)] = null);

(statearr_34375_34395[(1)] = (2));


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
});})(c__32579__auto___34381,out))
;
return ((function (switch__32491__auto__,c__32579__auto___34381,out){
return (function() {
var cljs$core$async$state_machine__32492__auto__ = null;
var cljs$core$async$state_machine__32492__auto____0 = (function (){
var statearr_34376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34376[(0)] = cljs$core$async$state_machine__32492__auto__);

(statearr_34376[(1)] = (1));

return statearr_34376;
});
var cljs$core$async$state_machine__32492__auto____1 = (function (state_34353){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_34353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e34377){if((e34377 instanceof Object)){
var ex__32495__auto__ = e34377;
var statearr_34378_34396 = state_34353;
(statearr_34378_34396[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34397 = state_34353;
state_34353 = G__34397;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
cljs$core$async$state_machine__32492__auto__ = function(state_34353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32492__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32492__auto____1.call(this,state_34353);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32492__auto____0;
cljs$core$async$state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32492__auto____1;
return cljs$core$async$state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto___34381,out))
})();
var state__32581__auto__ = (function (){var statearr_34379 = f__32580__auto__.call(null);
(statearr_34379[(6)] = c__32579__auto___34381);

return statearr_34379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto___34381,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34399 = arguments.length;
switch (G__34399) {
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
var c__32579__auto___34469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto___34469,out){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto___34469,out){
return (function (state_34441){
var state_val_34442 = (state_34441[(1)]);
if((state_val_34442 === (7))){
var inst_34437 = (state_34441[(2)]);
var state_34441__$1 = state_34441;
var statearr_34443_34470 = state_34441__$1;
(statearr_34443_34470[(2)] = inst_34437);

(statearr_34443_34470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34442 === (1))){
var inst_34400 = [];
var inst_34401 = inst_34400;
var inst_34402 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34441__$1 = (function (){var statearr_34444 = state_34441;
(statearr_34444[(7)] = inst_34402);

(statearr_34444[(8)] = inst_34401);

return statearr_34444;
})();
var statearr_34445_34471 = state_34441__$1;
(statearr_34445_34471[(2)] = null);

(statearr_34445_34471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34442 === (4))){
var inst_34405 = (state_34441[(9)]);
var inst_34405__$1 = (state_34441[(2)]);
var inst_34406 = (inst_34405__$1 == null);
var inst_34407 = cljs.core.not.call(null,inst_34406);
var state_34441__$1 = (function (){var statearr_34446 = state_34441;
(statearr_34446[(9)] = inst_34405__$1);

return statearr_34446;
})();
if(inst_34407){
var statearr_34447_34472 = state_34441__$1;
(statearr_34447_34472[(1)] = (5));

} else {
var statearr_34448_34473 = state_34441__$1;
(statearr_34448_34473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34442 === (15))){
var inst_34431 = (state_34441[(2)]);
var state_34441__$1 = state_34441;
var statearr_34449_34474 = state_34441__$1;
(statearr_34449_34474[(2)] = inst_34431);

(statearr_34449_34474[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34442 === (13))){
var state_34441__$1 = state_34441;
var statearr_34450_34475 = state_34441__$1;
(statearr_34450_34475[(2)] = null);

(statearr_34450_34475[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34442 === (6))){
var inst_34401 = (state_34441[(8)]);
var inst_34426 = inst_34401.length;
var inst_34427 = (inst_34426 > (0));
var state_34441__$1 = state_34441;
if(cljs.core.truth_(inst_34427)){
var statearr_34451_34476 = state_34441__$1;
(statearr_34451_34476[(1)] = (12));

} else {
var statearr_34452_34477 = state_34441__$1;
(statearr_34452_34477[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34442 === (3))){
var inst_34439 = (state_34441[(2)]);
var state_34441__$1 = state_34441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34441__$1,inst_34439);
} else {
if((state_val_34442 === (12))){
var inst_34401 = (state_34441[(8)]);
var inst_34429 = cljs.core.vec.call(null,inst_34401);
var state_34441__$1 = state_34441;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34441__$1,(15),out,inst_34429);
} else {
if((state_val_34442 === (2))){
var state_34441__$1 = state_34441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34441__$1,(4),ch);
} else {
if((state_val_34442 === (11))){
var inst_34409 = (state_34441[(10)]);
var inst_34405 = (state_34441[(9)]);
var inst_34419 = (state_34441[(2)]);
var inst_34420 = [];
var inst_34421 = inst_34420.push(inst_34405);
var inst_34401 = inst_34420;
var inst_34402 = inst_34409;
var state_34441__$1 = (function (){var statearr_34453 = state_34441;
(statearr_34453[(7)] = inst_34402);

(statearr_34453[(11)] = inst_34421);

(statearr_34453[(8)] = inst_34401);

(statearr_34453[(12)] = inst_34419);

return statearr_34453;
})();
var statearr_34454_34478 = state_34441__$1;
(statearr_34454_34478[(2)] = null);

(statearr_34454_34478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34442 === (9))){
var inst_34401 = (state_34441[(8)]);
var inst_34417 = cljs.core.vec.call(null,inst_34401);
var state_34441__$1 = state_34441;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34441__$1,(11),out,inst_34417);
} else {
if((state_val_34442 === (5))){
var inst_34402 = (state_34441[(7)]);
var inst_34409 = (state_34441[(10)]);
var inst_34405 = (state_34441[(9)]);
var inst_34409__$1 = f.call(null,inst_34405);
var inst_34410 = cljs.core._EQ_.call(null,inst_34409__$1,inst_34402);
var inst_34411 = cljs.core.keyword_identical_QMARK_.call(null,inst_34402,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34412 = (inst_34410) || (inst_34411);
var state_34441__$1 = (function (){var statearr_34455 = state_34441;
(statearr_34455[(10)] = inst_34409__$1);

return statearr_34455;
})();
if(cljs.core.truth_(inst_34412)){
var statearr_34456_34479 = state_34441__$1;
(statearr_34456_34479[(1)] = (8));

} else {
var statearr_34457_34480 = state_34441__$1;
(statearr_34457_34480[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34442 === (14))){
var inst_34434 = (state_34441[(2)]);
var inst_34435 = cljs.core.async.close_BANG_.call(null,out);
var state_34441__$1 = (function (){var statearr_34459 = state_34441;
(statearr_34459[(13)] = inst_34434);

return statearr_34459;
})();
var statearr_34460_34481 = state_34441__$1;
(statearr_34460_34481[(2)] = inst_34435);

(statearr_34460_34481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34442 === (10))){
var inst_34424 = (state_34441[(2)]);
var state_34441__$1 = state_34441;
var statearr_34461_34482 = state_34441__$1;
(statearr_34461_34482[(2)] = inst_34424);

(statearr_34461_34482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34442 === (8))){
var inst_34409 = (state_34441[(10)]);
var inst_34405 = (state_34441[(9)]);
var inst_34401 = (state_34441[(8)]);
var inst_34414 = inst_34401.push(inst_34405);
var tmp34458 = inst_34401;
var inst_34401__$1 = tmp34458;
var inst_34402 = inst_34409;
var state_34441__$1 = (function (){var statearr_34462 = state_34441;
(statearr_34462[(7)] = inst_34402);

(statearr_34462[(8)] = inst_34401__$1);

(statearr_34462[(14)] = inst_34414);

return statearr_34462;
})();
var statearr_34463_34483 = state_34441__$1;
(statearr_34463_34483[(2)] = null);

(statearr_34463_34483[(1)] = (2));


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
});})(c__32579__auto___34469,out))
;
return ((function (switch__32491__auto__,c__32579__auto___34469,out){
return (function() {
var cljs$core$async$state_machine__32492__auto__ = null;
var cljs$core$async$state_machine__32492__auto____0 = (function (){
var statearr_34464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34464[(0)] = cljs$core$async$state_machine__32492__auto__);

(statearr_34464[(1)] = (1));

return statearr_34464;
});
var cljs$core$async$state_machine__32492__auto____1 = (function (state_34441){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_34441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e34465){if((e34465 instanceof Object)){
var ex__32495__auto__ = e34465;
var statearr_34466_34484 = state_34441;
(statearr_34466_34484[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34485 = state_34441;
state_34441 = G__34485;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
cljs$core$async$state_machine__32492__auto__ = function(state_34441){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32492__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32492__auto____1.call(this,state_34441);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32492__auto____0;
cljs$core$async$state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32492__auto____1;
return cljs$core$async$state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto___34469,out))
})();
var state__32581__auto__ = (function (){var statearr_34467 = f__32580__auto__.call(null);
(statearr_34467[(6)] = c__32579__auto___34469);

return statearr_34467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto___34469,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1504634391845
