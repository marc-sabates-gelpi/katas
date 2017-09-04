// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__30015__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30015 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30016__i = 0, G__30016__a = new Array(arguments.length -  0);
while (G__30016__i < G__30016__a.length) {G__30016__a[G__30016__i] = arguments[G__30016__i + 0]; ++G__30016__i;}
  args = new cljs.core.IndexedSeq(G__30016__a,0,null);
} 
return G__30015__delegate.call(this,args);};
G__30015.cljs$lang$maxFixedArity = 0;
G__30015.cljs$lang$applyTo = (function (arglist__30017){
var args = cljs.core.seq(arglist__30017);
return G__30015__delegate(args);
});
G__30015.cljs$core$IFn$_invoke$arity$variadic = G__30015__delegate;
return G__30015;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__30018__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30018 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30019__i = 0, G__30019__a = new Array(arguments.length -  0);
while (G__30019__i < G__30019__a.length) {G__30019__a[G__30019__i] = arguments[G__30019__i + 0]; ++G__30019__i;}
  args = new cljs.core.IndexedSeq(G__30019__a,0,null);
} 
return G__30018__delegate.call(this,args);};
G__30018.cljs$lang$maxFixedArity = 0;
G__30018.cljs$lang$applyTo = (function (arglist__30020){
var args = cljs.core.seq(arglist__30020);
return G__30018__delegate(args);
});
G__30018.cljs$core$IFn$_invoke$arity$variadic = G__30018__delegate;
return G__30018;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1504549412302
