// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('scores.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__42204__delegate = function (x){
if(cljs.core.truth_(scores.core.mount_root)){
return cljs.core.apply.call(null,scores.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'scores.core/mount-root' is missing");
}
};
var G__42204 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__42205__i = 0, G__42205__a = new Array(arguments.length -  0);
while (G__42205__i < G__42205__a.length) {G__42205__a[G__42205__i] = arguments[G__42205__i + 0]; ++G__42205__i;}
  x = new cljs.core.IndexedSeq(G__42205__a,0,null);
} 
return G__42204__delegate.call(this,x);};
G__42204.cljs$lang$maxFixedArity = 0;
G__42204.cljs$lang$applyTo = (function (arglist__42206){
var x = cljs.core.seq(arglist__42206);
return G__42204__delegate(x);
});
G__42204.cljs$core$IFn$_invoke$arity$variadic = G__42204__delegate;
return G__42204;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1504468303326
