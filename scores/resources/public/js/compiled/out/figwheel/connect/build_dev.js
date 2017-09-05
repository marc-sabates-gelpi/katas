// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('scores.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__42099__delegate = function (x){
if(cljs.core.truth_(scores.core.mount_root)){
return cljs.core.apply.call(null,scores.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'scores.core/mount-root' is missing");
}
};
var G__42099 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__42100__i = 0, G__42100__a = new Array(arguments.length -  0);
while (G__42100__i < G__42100__a.length) {G__42100__a[G__42100__i] = arguments[G__42100__i + 0]; ++G__42100__i;}
  x = new cljs.core.IndexedSeq(G__42100__a,0,null);
} 
return G__42099__delegate.call(this,x);};
G__42099.cljs$lang$maxFixedArity = 0;
G__42099.cljs$lang$applyTo = (function (arglist__42101){
var x = cljs.core.seq(arglist__42101);
return G__42099__delegate(x);
});
G__42099.cljs$core$IFn$_invoke$arity$variadic = G__42099__delegate;
return G__42099;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1504643950421
