// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('scores.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__41184__delegate = function (x){
if(cljs.core.truth_(scores.core.mount_root)){
return cljs.core.apply.call(null,scores.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'scores.core/mount-root' is missing");
}
};
var G__41184 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__41185__i = 0, G__41185__a = new Array(arguments.length -  0);
while (G__41185__i < G__41185__a.length) {G__41185__a[G__41185__i] = arguments[G__41185__i + 0]; ++G__41185__i;}
  x = new cljs.core.IndexedSeq(G__41185__a,0,null);
} 
return G__41184__delegate.call(this,x);};
G__41184.cljs$lang$maxFixedArity = 0;
G__41184.cljs$lang$applyTo = (function (arglist__41186){
var x = cljs.core.seq(arglist__41186);
return G__41184__delegate(x);
});
G__41184.cljs$core$IFn$_invoke$arity$variadic = G__41184__delegate;
return G__41184;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1504557907293
