// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28423__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28423__auto__){
return or__28423__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28423__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
var or__28423__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__28423__auto____$1)){
return or__28423__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37375_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37375_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__37376 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37377 = null;
var count__37378 = (0);
var i__37379 = (0);
while(true){
if((i__37379 < count__37378)){
var n = cljs.core._nth.call(null,chunk__37377,i__37379);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37380 = seq__37376;
var G__37381 = chunk__37377;
var G__37382 = count__37378;
var G__37383 = (i__37379 + (1));
seq__37376 = G__37380;
chunk__37377 = G__37381;
count__37378 = G__37382;
i__37379 = G__37383;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37376);
if(temp__4657__auto__){
var seq__37376__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37376__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__37376__$1);
var G__37384 = cljs.core.chunk_rest.call(null,seq__37376__$1);
var G__37385 = c__29262__auto__;
var G__37386 = cljs.core.count.call(null,c__29262__auto__);
var G__37387 = (0);
seq__37376 = G__37384;
chunk__37377 = G__37385;
count__37378 = G__37386;
i__37379 = G__37387;
continue;
} else {
var n = cljs.core.first.call(null,seq__37376__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37388 = cljs.core.next.call(null,seq__37376__$1);
var G__37389 = null;
var G__37390 = (0);
var G__37391 = (0);
seq__37376 = G__37388;
chunk__37377 = G__37389;
count__37378 = G__37390;
i__37379 = G__37391;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__37401_37409 = cljs.core.seq.call(null,deps);
var chunk__37402_37410 = null;
var count__37403_37411 = (0);
var i__37404_37412 = (0);
while(true){
if((i__37404_37412 < count__37403_37411)){
var dep_37413 = cljs.core._nth.call(null,chunk__37402_37410,i__37404_37412);
topo_sort_helper_STAR_.call(null,dep_37413,(depth + (1)),state);

var G__37414 = seq__37401_37409;
var G__37415 = chunk__37402_37410;
var G__37416 = count__37403_37411;
var G__37417 = (i__37404_37412 + (1));
seq__37401_37409 = G__37414;
chunk__37402_37410 = G__37415;
count__37403_37411 = G__37416;
i__37404_37412 = G__37417;
continue;
} else {
var temp__4657__auto___37418 = cljs.core.seq.call(null,seq__37401_37409);
if(temp__4657__auto___37418){
var seq__37401_37419__$1 = temp__4657__auto___37418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37401_37419__$1)){
var c__29262__auto___37420 = cljs.core.chunk_first.call(null,seq__37401_37419__$1);
var G__37421 = cljs.core.chunk_rest.call(null,seq__37401_37419__$1);
var G__37422 = c__29262__auto___37420;
var G__37423 = cljs.core.count.call(null,c__29262__auto___37420);
var G__37424 = (0);
seq__37401_37409 = G__37421;
chunk__37402_37410 = G__37422;
count__37403_37411 = G__37423;
i__37404_37412 = G__37424;
continue;
} else {
var dep_37425 = cljs.core.first.call(null,seq__37401_37419__$1);
topo_sort_helper_STAR_.call(null,dep_37425,(depth + (1)),state);

var G__37426 = cljs.core.next.call(null,seq__37401_37419__$1);
var G__37427 = null;
var G__37428 = (0);
var G__37429 = (0);
seq__37401_37409 = G__37426;
chunk__37402_37410 = G__37427;
count__37403_37411 = G__37428;
i__37404_37412 = G__37429;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37405){
var vec__37406 = p__37405;
var seq__37407 = cljs.core.seq.call(null,vec__37406);
var first__37408 = cljs.core.first.call(null,seq__37407);
var seq__37407__$1 = cljs.core.next.call(null,seq__37407);
var x = first__37408;
var xs = seq__37407__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37406,seq__37407,first__37408,seq__37407__$1,x,xs,get_deps__$1){
return (function (p1__37392_SHARP_){
return clojure.set.difference.call(null,p1__37392_SHARP_,x);
});})(vec__37406,seq__37407,first__37408,seq__37407__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__37430 = cljs.core.seq.call(null,provides);
var chunk__37431 = null;
var count__37432 = (0);
var i__37433 = (0);
while(true){
if((i__37433 < count__37432)){
var prov = cljs.core._nth.call(null,chunk__37431,i__37433);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37434_37442 = cljs.core.seq.call(null,requires);
var chunk__37435_37443 = null;
var count__37436_37444 = (0);
var i__37437_37445 = (0);
while(true){
if((i__37437_37445 < count__37436_37444)){
var req_37446 = cljs.core._nth.call(null,chunk__37435_37443,i__37437_37445);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37446,prov);

var G__37447 = seq__37434_37442;
var G__37448 = chunk__37435_37443;
var G__37449 = count__37436_37444;
var G__37450 = (i__37437_37445 + (1));
seq__37434_37442 = G__37447;
chunk__37435_37443 = G__37448;
count__37436_37444 = G__37449;
i__37437_37445 = G__37450;
continue;
} else {
var temp__4657__auto___37451 = cljs.core.seq.call(null,seq__37434_37442);
if(temp__4657__auto___37451){
var seq__37434_37452__$1 = temp__4657__auto___37451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37434_37452__$1)){
var c__29262__auto___37453 = cljs.core.chunk_first.call(null,seq__37434_37452__$1);
var G__37454 = cljs.core.chunk_rest.call(null,seq__37434_37452__$1);
var G__37455 = c__29262__auto___37453;
var G__37456 = cljs.core.count.call(null,c__29262__auto___37453);
var G__37457 = (0);
seq__37434_37442 = G__37454;
chunk__37435_37443 = G__37455;
count__37436_37444 = G__37456;
i__37437_37445 = G__37457;
continue;
} else {
var req_37458 = cljs.core.first.call(null,seq__37434_37452__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37458,prov);

var G__37459 = cljs.core.next.call(null,seq__37434_37452__$1);
var G__37460 = null;
var G__37461 = (0);
var G__37462 = (0);
seq__37434_37442 = G__37459;
chunk__37435_37443 = G__37460;
count__37436_37444 = G__37461;
i__37437_37445 = G__37462;
continue;
}
} else {
}
}
break;
}

var G__37463 = seq__37430;
var G__37464 = chunk__37431;
var G__37465 = count__37432;
var G__37466 = (i__37433 + (1));
seq__37430 = G__37463;
chunk__37431 = G__37464;
count__37432 = G__37465;
i__37433 = G__37466;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37430);
if(temp__4657__auto__){
var seq__37430__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37430__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__37430__$1);
var G__37467 = cljs.core.chunk_rest.call(null,seq__37430__$1);
var G__37468 = c__29262__auto__;
var G__37469 = cljs.core.count.call(null,c__29262__auto__);
var G__37470 = (0);
seq__37430 = G__37467;
chunk__37431 = G__37468;
count__37432 = G__37469;
i__37433 = G__37470;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37430__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37438_37471 = cljs.core.seq.call(null,requires);
var chunk__37439_37472 = null;
var count__37440_37473 = (0);
var i__37441_37474 = (0);
while(true){
if((i__37441_37474 < count__37440_37473)){
var req_37475 = cljs.core._nth.call(null,chunk__37439_37472,i__37441_37474);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37475,prov);

var G__37476 = seq__37438_37471;
var G__37477 = chunk__37439_37472;
var G__37478 = count__37440_37473;
var G__37479 = (i__37441_37474 + (1));
seq__37438_37471 = G__37476;
chunk__37439_37472 = G__37477;
count__37440_37473 = G__37478;
i__37441_37474 = G__37479;
continue;
} else {
var temp__4657__auto___37480__$1 = cljs.core.seq.call(null,seq__37438_37471);
if(temp__4657__auto___37480__$1){
var seq__37438_37481__$1 = temp__4657__auto___37480__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37438_37481__$1)){
var c__29262__auto___37482 = cljs.core.chunk_first.call(null,seq__37438_37481__$1);
var G__37483 = cljs.core.chunk_rest.call(null,seq__37438_37481__$1);
var G__37484 = c__29262__auto___37482;
var G__37485 = cljs.core.count.call(null,c__29262__auto___37482);
var G__37486 = (0);
seq__37438_37471 = G__37483;
chunk__37439_37472 = G__37484;
count__37440_37473 = G__37485;
i__37441_37474 = G__37486;
continue;
} else {
var req_37487 = cljs.core.first.call(null,seq__37438_37481__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37487,prov);

var G__37488 = cljs.core.next.call(null,seq__37438_37481__$1);
var G__37489 = null;
var G__37490 = (0);
var G__37491 = (0);
seq__37438_37471 = G__37488;
chunk__37439_37472 = G__37489;
count__37440_37473 = G__37490;
i__37441_37474 = G__37491;
continue;
}
} else {
}
}
break;
}

var G__37492 = cljs.core.next.call(null,seq__37430__$1);
var G__37493 = null;
var G__37494 = (0);
var G__37495 = (0);
seq__37430 = G__37492;
chunk__37431 = G__37493;
count__37432 = G__37494;
i__37433 = G__37495;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__37496_37500 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37497_37501 = null;
var count__37498_37502 = (0);
var i__37499_37503 = (0);
while(true){
if((i__37499_37503 < count__37498_37502)){
var ns_37504 = cljs.core._nth.call(null,chunk__37497_37501,i__37499_37503);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37504);

var G__37505 = seq__37496_37500;
var G__37506 = chunk__37497_37501;
var G__37507 = count__37498_37502;
var G__37508 = (i__37499_37503 + (1));
seq__37496_37500 = G__37505;
chunk__37497_37501 = G__37506;
count__37498_37502 = G__37507;
i__37499_37503 = G__37508;
continue;
} else {
var temp__4657__auto___37509 = cljs.core.seq.call(null,seq__37496_37500);
if(temp__4657__auto___37509){
var seq__37496_37510__$1 = temp__4657__auto___37509;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37496_37510__$1)){
var c__29262__auto___37511 = cljs.core.chunk_first.call(null,seq__37496_37510__$1);
var G__37512 = cljs.core.chunk_rest.call(null,seq__37496_37510__$1);
var G__37513 = c__29262__auto___37511;
var G__37514 = cljs.core.count.call(null,c__29262__auto___37511);
var G__37515 = (0);
seq__37496_37500 = G__37512;
chunk__37497_37501 = G__37513;
count__37498_37502 = G__37514;
i__37499_37503 = G__37515;
continue;
} else {
var ns_37516 = cljs.core.first.call(null,seq__37496_37510__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37516);

var G__37517 = cljs.core.next.call(null,seq__37496_37510__$1);
var G__37518 = null;
var G__37519 = (0);
var G__37520 = (0);
seq__37496_37500 = G__37517;
chunk__37497_37501 = G__37518;
count__37498_37502 = G__37519;
i__37499_37503 = G__37520;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28423__auto__ = goog.require__;
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__37521__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37521 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37522__i = 0, G__37522__a = new Array(arguments.length -  0);
while (G__37522__i < G__37522__a.length) {G__37522__a[G__37522__i] = arguments[G__37522__i + 0]; ++G__37522__i;}
  args = new cljs.core.IndexedSeq(G__37522__a,0,null);
} 
return G__37521__delegate.call(this,args);};
G__37521.cljs$lang$maxFixedArity = 0;
G__37521.cljs$lang$applyTo = (function (arglist__37523){
var args = cljs.core.seq(arglist__37523);
return G__37521__delegate(args);
});
G__37521.cljs$core$IFn$_invoke$arity$variadic = G__37521__delegate;
return G__37521;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37524_SHARP_,p2__37525_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37524_SHARP_)].join('')),p2__37525_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37526_SHARP_,p2__37527_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37526_SHARP_)].join(''),p2__37527_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37528 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37528.addCallback(((function (G__37528){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37528))
);

G__37528.addErrback(((function (G__37528){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37528))
);

return G__37528;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37529 = cljs.core._EQ_;
var expr__37530 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37529.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37530))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__37529,expr__37530){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__37529,expr__37530))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__37529,expr__37530){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37532){if((e37532 instanceof Error)){
var e = e37532;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37532;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__37529,expr__37530))
} else {
if(cljs.core.truth_(pred__37529.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37530))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37529.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__37530))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37529.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37530))){
return ((function (pred__37529,expr__37530){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37533){if((e37533 instanceof Error)){
var e = e37533;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37533;

}
}})());
});
;})(pred__37529,expr__37530))
} else {
return ((function (pred__37529,expr__37530){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37529,expr__37530))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37534,callback){
var map__37535 = p__37534;
var map__37535__$1 = ((((!((map__37535 == null)))?((((map__37535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37535):map__37535);
var file_msg = map__37535__$1;
var request_url = cljs.core.get.call(null,map__37535__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__37535,map__37535__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37535,map__37535__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__34205__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto__){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto__){
return (function (state_37559){
var state_val_37560 = (state_37559[(1)]);
if((state_val_37560 === (7))){
var inst_37555 = (state_37559[(2)]);
var state_37559__$1 = state_37559;
var statearr_37561_37578 = state_37559__$1;
(statearr_37561_37578[(2)] = inst_37555);

(statearr_37561_37578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37560 === (1))){
var state_37559__$1 = state_37559;
var statearr_37562_37579 = state_37559__$1;
(statearr_37562_37579[(2)] = null);

(statearr_37562_37579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37560 === (4))){
var inst_37539 = (state_37559[(7)]);
var inst_37539__$1 = (state_37559[(2)]);
var state_37559__$1 = (function (){var statearr_37563 = state_37559;
(statearr_37563[(7)] = inst_37539__$1);

return statearr_37563;
})();
if(cljs.core.truth_(inst_37539__$1)){
var statearr_37564_37580 = state_37559__$1;
(statearr_37564_37580[(1)] = (5));

} else {
var statearr_37565_37581 = state_37559__$1;
(statearr_37565_37581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37560 === (6))){
var state_37559__$1 = state_37559;
var statearr_37566_37582 = state_37559__$1;
(statearr_37566_37582[(2)] = null);

(statearr_37566_37582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37560 === (3))){
var inst_37557 = (state_37559[(2)]);
var state_37559__$1 = state_37559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37559__$1,inst_37557);
} else {
if((state_val_37560 === (2))){
var state_37559__$1 = state_37559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37559__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37560 === (11))){
var inst_37551 = (state_37559[(2)]);
var state_37559__$1 = (function (){var statearr_37567 = state_37559;
(statearr_37567[(8)] = inst_37551);

return statearr_37567;
})();
var statearr_37568_37583 = state_37559__$1;
(statearr_37568_37583[(2)] = null);

(statearr_37568_37583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37560 === (9))){
var inst_37543 = (state_37559[(9)]);
var inst_37545 = (state_37559[(10)]);
var inst_37547 = inst_37545.call(null,inst_37543);
var state_37559__$1 = state_37559;
var statearr_37569_37584 = state_37559__$1;
(statearr_37569_37584[(2)] = inst_37547);

(statearr_37569_37584[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37560 === (5))){
var inst_37539 = (state_37559[(7)]);
var inst_37541 = figwheel.client.file_reloading.blocking_load.call(null,inst_37539);
var state_37559__$1 = state_37559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37559__$1,(8),inst_37541);
} else {
if((state_val_37560 === (10))){
var inst_37543 = (state_37559[(9)]);
var inst_37549 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37543);
var state_37559__$1 = state_37559;
var statearr_37570_37585 = state_37559__$1;
(statearr_37570_37585[(2)] = inst_37549);

(statearr_37570_37585[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37560 === (8))){
var inst_37539 = (state_37559[(7)]);
var inst_37545 = (state_37559[(10)]);
var inst_37543 = (state_37559[(2)]);
var inst_37544 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37545__$1 = cljs.core.get.call(null,inst_37544,inst_37539);
var state_37559__$1 = (function (){var statearr_37571 = state_37559;
(statearr_37571[(9)] = inst_37543);

(statearr_37571[(10)] = inst_37545__$1);

return statearr_37571;
})();
if(cljs.core.truth_(inst_37545__$1)){
var statearr_37572_37586 = state_37559__$1;
(statearr_37572_37586[(1)] = (9));

} else {
var statearr_37573_37587 = state_37559__$1;
(statearr_37573_37587[(1)] = (10));

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
});})(c__34205__auto__))
;
return ((function (switch__34117__auto__,c__34205__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__34118__auto__ = null;
var figwheel$client$file_reloading$state_machine__34118__auto____0 = (function (){
var statearr_37574 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37574[(0)] = figwheel$client$file_reloading$state_machine__34118__auto__);

(statearr_37574[(1)] = (1));

return statearr_37574;
});
var figwheel$client$file_reloading$state_machine__34118__auto____1 = (function (state_37559){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_37559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e37575){if((e37575 instanceof Object)){
var ex__34121__auto__ = e37575;
var statearr_37576_37588 = state_37559;
(statearr_37576_37588[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37589 = state_37559;
state_37559 = G__37589;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34118__auto__ = function(state_37559){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34118__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34118__auto____1.call(this,state_37559);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34118__auto____0;
figwheel$client$file_reloading$state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34118__auto____1;
return figwheel$client$file_reloading$state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto__))
})();
var state__34207__auto__ = (function (){var statearr_37577 = f__34206__auto__.call(null);
(statearr_37577[(6)] = c__34205__auto__);

return statearr_37577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto__))
);

return c__34205__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37590,callback){
var map__37591 = p__37590;
var map__37591__$1 = ((((!((map__37591 == null)))?((((map__37591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37591.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37591):map__37591);
var file_msg = map__37591__$1;
var namespace = cljs.core.get.call(null,map__37591__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37591,map__37591__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37591,map__37591__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37593){
var map__37594 = p__37593;
var map__37594__$1 = ((((!((map__37594 == null)))?((((map__37594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37594.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37594):map__37594);
var file_msg = map__37594__$1;
var namespace = cljs.core.get.call(null,map__37594__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37596){
var map__37597 = p__37596;
var map__37597__$1 = ((((!((map__37597 == null)))?((((map__37597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37597.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37597):map__37597);
var file_msg = map__37597__$1;
var namespace = cljs.core.get.call(null,map__37597__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28411__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28411__auto__){
var or__28423__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
var or__28423__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28423__auto____$1)){
return or__28423__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28411__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37599,callback){
var map__37600 = p__37599;
var map__37600__$1 = ((((!((map__37600 == null)))?((((map__37600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37600):map__37600);
var file_msg = map__37600__$1;
var request_url = cljs.core.get.call(null,map__37600__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37600__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__34205__auto___37650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto___37650,out){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto___37650,out){
return (function (state_37635){
var state_val_37636 = (state_37635[(1)]);
if((state_val_37636 === (1))){
var inst_37609 = cljs.core.seq.call(null,files);
var inst_37610 = cljs.core.first.call(null,inst_37609);
var inst_37611 = cljs.core.next.call(null,inst_37609);
var inst_37612 = files;
var state_37635__$1 = (function (){var statearr_37637 = state_37635;
(statearr_37637[(7)] = inst_37610);

(statearr_37637[(8)] = inst_37612);

(statearr_37637[(9)] = inst_37611);

return statearr_37637;
})();
var statearr_37638_37651 = state_37635__$1;
(statearr_37638_37651[(2)] = null);

(statearr_37638_37651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37636 === (2))){
var inst_37618 = (state_37635[(10)]);
var inst_37612 = (state_37635[(8)]);
var inst_37617 = cljs.core.seq.call(null,inst_37612);
var inst_37618__$1 = cljs.core.first.call(null,inst_37617);
var inst_37619 = cljs.core.next.call(null,inst_37617);
var inst_37620 = (inst_37618__$1 == null);
var inst_37621 = cljs.core.not.call(null,inst_37620);
var state_37635__$1 = (function (){var statearr_37639 = state_37635;
(statearr_37639[(10)] = inst_37618__$1);

(statearr_37639[(11)] = inst_37619);

return statearr_37639;
})();
if(inst_37621){
var statearr_37640_37652 = state_37635__$1;
(statearr_37640_37652[(1)] = (4));

} else {
var statearr_37641_37653 = state_37635__$1;
(statearr_37641_37653[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37636 === (3))){
var inst_37633 = (state_37635[(2)]);
var state_37635__$1 = state_37635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37635__$1,inst_37633);
} else {
if((state_val_37636 === (4))){
var inst_37618 = (state_37635[(10)]);
var inst_37623 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37618);
var state_37635__$1 = state_37635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37635__$1,(7),inst_37623);
} else {
if((state_val_37636 === (5))){
var inst_37629 = cljs.core.async.close_BANG_.call(null,out);
var state_37635__$1 = state_37635;
var statearr_37642_37654 = state_37635__$1;
(statearr_37642_37654[(2)] = inst_37629);

(statearr_37642_37654[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37636 === (6))){
var inst_37631 = (state_37635[(2)]);
var state_37635__$1 = state_37635;
var statearr_37643_37655 = state_37635__$1;
(statearr_37643_37655[(2)] = inst_37631);

(statearr_37643_37655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37636 === (7))){
var inst_37619 = (state_37635[(11)]);
var inst_37625 = (state_37635[(2)]);
var inst_37626 = cljs.core.async.put_BANG_.call(null,out,inst_37625);
var inst_37612 = inst_37619;
var state_37635__$1 = (function (){var statearr_37644 = state_37635;
(statearr_37644[(8)] = inst_37612);

(statearr_37644[(12)] = inst_37626);

return statearr_37644;
})();
var statearr_37645_37656 = state_37635__$1;
(statearr_37645_37656[(2)] = null);

(statearr_37645_37656[(1)] = (2));


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
});})(c__34205__auto___37650,out))
;
return ((function (switch__34117__auto__,c__34205__auto___37650,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34118__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34118__auto____0 = (function (){
var statearr_37646 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37646[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34118__auto__);

(statearr_37646[(1)] = (1));

return statearr_37646;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34118__auto____1 = (function (state_37635){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_37635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e37647){if((e37647 instanceof Object)){
var ex__34121__auto__ = e37647;
var statearr_37648_37657 = state_37635;
(statearr_37648_37657[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37658 = state_37635;
state_37635 = G__37658;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34118__auto__ = function(state_37635){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34118__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34118__auto____1.call(this,state_37635);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34118__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34118__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto___37650,out))
})();
var state__34207__auto__ = (function (){var statearr_37649 = f__34206__auto__.call(null);
(statearr_37649[(6)] = c__34205__auto___37650);

return statearr_37649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto___37650,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37659,opts){
var map__37660 = p__37659;
var map__37660__$1 = ((((!((map__37660 == null)))?((((map__37660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37660.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37660):map__37660);
var eval_body = cljs.core.get.call(null,map__37660__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37660__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28411__auto__ = eval_body;
if(cljs.core.truth_(and__28411__auto__)){
return typeof eval_body === 'string';
} else {
return and__28411__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37662){var e = e37662;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__37663_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37663_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__37664){
var vec__37665 = p__37664;
var k = cljs.core.nth.call(null,vec__37665,(0),null);
var v = cljs.core.nth.call(null,vec__37665,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37668){
var vec__37669 = p__37668;
var k = cljs.core.nth.call(null,vec__37669,(0),null);
var v = cljs.core.nth.call(null,vec__37669,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37675,p__37676){
var map__37677 = p__37675;
var map__37677__$1 = ((((!((map__37677 == null)))?((((map__37677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37677.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37677):map__37677);
var opts = map__37677__$1;
var before_jsload = cljs.core.get.call(null,map__37677__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37677__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37677__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37678 = p__37676;
var map__37678__$1 = ((((!((map__37678 == null)))?((((map__37678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37678.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37678):map__37678);
var msg = map__37678__$1;
var files = cljs.core.get.call(null,map__37678__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37678__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37678__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34205__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto__,map__37677,map__37677__$1,opts,before_jsload,on_jsload,reload_dependents,map__37678,map__37678__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto__,map__37677,map__37677__$1,opts,before_jsload,on_jsload,reload_dependents,map__37678,map__37678__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37832){
var state_val_37833 = (state_37832[(1)]);
if((state_val_37833 === (7))){
var inst_37692 = (state_37832[(7)]);
var inst_37693 = (state_37832[(8)]);
var inst_37695 = (state_37832[(9)]);
var inst_37694 = (state_37832[(10)]);
var inst_37700 = cljs.core._nth.call(null,inst_37693,inst_37695);
var inst_37701 = figwheel.client.file_reloading.eval_body.call(null,inst_37700,opts);
var inst_37702 = (inst_37695 + (1));
var tmp37834 = inst_37692;
var tmp37835 = inst_37693;
var tmp37836 = inst_37694;
var inst_37692__$1 = tmp37834;
var inst_37693__$1 = tmp37835;
var inst_37694__$1 = tmp37836;
var inst_37695__$1 = inst_37702;
var state_37832__$1 = (function (){var statearr_37837 = state_37832;
(statearr_37837[(7)] = inst_37692__$1);

(statearr_37837[(8)] = inst_37693__$1);

(statearr_37837[(11)] = inst_37701);

(statearr_37837[(9)] = inst_37695__$1);

(statearr_37837[(10)] = inst_37694__$1);

return statearr_37837;
})();
var statearr_37838_37921 = state_37832__$1;
(statearr_37838_37921[(2)] = null);

(statearr_37838_37921[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (20))){
var inst_37735 = (state_37832[(12)]);
var inst_37743 = figwheel.client.file_reloading.sort_files.call(null,inst_37735);
var state_37832__$1 = state_37832;
var statearr_37839_37922 = state_37832__$1;
(statearr_37839_37922[(2)] = inst_37743);

(statearr_37839_37922[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (27))){
var state_37832__$1 = state_37832;
var statearr_37840_37923 = state_37832__$1;
(statearr_37840_37923[(2)] = null);

(statearr_37840_37923[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (1))){
var inst_37684 = (state_37832[(13)]);
var inst_37681 = before_jsload.call(null,files);
var inst_37682 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37683 = (function (){return ((function (inst_37684,inst_37681,inst_37682,state_val_37833,c__34205__auto__,map__37677,map__37677__$1,opts,before_jsload,on_jsload,reload_dependents,map__37678,map__37678__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37672_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37672_SHARP_);
});
;})(inst_37684,inst_37681,inst_37682,state_val_37833,c__34205__auto__,map__37677,map__37677__$1,opts,before_jsload,on_jsload,reload_dependents,map__37678,map__37678__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37684__$1 = cljs.core.filter.call(null,inst_37683,files);
var inst_37685 = cljs.core.not_empty.call(null,inst_37684__$1);
var state_37832__$1 = (function (){var statearr_37841 = state_37832;
(statearr_37841[(14)] = inst_37682);

(statearr_37841[(13)] = inst_37684__$1);

(statearr_37841[(15)] = inst_37681);

return statearr_37841;
})();
if(cljs.core.truth_(inst_37685)){
var statearr_37842_37924 = state_37832__$1;
(statearr_37842_37924[(1)] = (2));

} else {
var statearr_37843_37925 = state_37832__$1;
(statearr_37843_37925[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (24))){
var state_37832__$1 = state_37832;
var statearr_37844_37926 = state_37832__$1;
(statearr_37844_37926[(2)] = null);

(statearr_37844_37926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (39))){
var inst_37785 = (state_37832[(16)]);
var state_37832__$1 = state_37832;
var statearr_37845_37927 = state_37832__$1;
(statearr_37845_37927[(2)] = inst_37785);

(statearr_37845_37927[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (46))){
var inst_37827 = (state_37832[(2)]);
var state_37832__$1 = state_37832;
var statearr_37846_37928 = state_37832__$1;
(statearr_37846_37928[(2)] = inst_37827);

(statearr_37846_37928[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (4))){
var inst_37729 = (state_37832[(2)]);
var inst_37730 = cljs.core.List.EMPTY;
var inst_37731 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37730);
var inst_37732 = (function (){return ((function (inst_37729,inst_37730,inst_37731,state_val_37833,c__34205__auto__,map__37677,map__37677__$1,opts,before_jsload,on_jsload,reload_dependents,map__37678,map__37678__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37673_SHARP_){
var and__28411__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37673_SHARP_);
if(cljs.core.truth_(and__28411__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37673_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37673_SHARP_)));
} else {
return and__28411__auto__;
}
});
;})(inst_37729,inst_37730,inst_37731,state_val_37833,c__34205__auto__,map__37677,map__37677__$1,opts,before_jsload,on_jsload,reload_dependents,map__37678,map__37678__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37733 = cljs.core.filter.call(null,inst_37732,files);
var inst_37734 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37735 = cljs.core.concat.call(null,inst_37733,inst_37734);
var state_37832__$1 = (function (){var statearr_37847 = state_37832;
(statearr_37847[(17)] = inst_37729);

(statearr_37847[(12)] = inst_37735);

(statearr_37847[(18)] = inst_37731);

return statearr_37847;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37848_37929 = state_37832__$1;
(statearr_37848_37929[(1)] = (16));

} else {
var statearr_37849_37930 = state_37832__$1;
(statearr_37849_37930[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (15))){
var inst_37719 = (state_37832[(2)]);
var state_37832__$1 = state_37832;
var statearr_37850_37931 = state_37832__$1;
(statearr_37850_37931[(2)] = inst_37719);

(statearr_37850_37931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (21))){
var inst_37745 = (state_37832[(19)]);
var inst_37745__$1 = (state_37832[(2)]);
var inst_37746 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37745__$1);
var state_37832__$1 = (function (){var statearr_37851 = state_37832;
(statearr_37851[(19)] = inst_37745__$1);

return statearr_37851;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37832__$1,(22),inst_37746);
} else {
if((state_val_37833 === (31))){
var inst_37830 = (state_37832[(2)]);
var state_37832__$1 = state_37832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37832__$1,inst_37830);
} else {
if((state_val_37833 === (32))){
var inst_37785 = (state_37832[(16)]);
var inst_37790 = inst_37785.cljs$lang$protocol_mask$partition0$;
var inst_37791 = (inst_37790 & (64));
var inst_37792 = inst_37785.cljs$core$ISeq$;
var inst_37793 = (cljs.core.PROTOCOL_SENTINEL === inst_37792);
var inst_37794 = (inst_37791) || (inst_37793);
var state_37832__$1 = state_37832;
if(cljs.core.truth_(inst_37794)){
var statearr_37852_37932 = state_37832__$1;
(statearr_37852_37932[(1)] = (35));

} else {
var statearr_37853_37933 = state_37832__$1;
(statearr_37853_37933[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (40))){
var inst_37807 = (state_37832[(20)]);
var inst_37806 = (state_37832[(2)]);
var inst_37807__$1 = cljs.core.get.call(null,inst_37806,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37808 = cljs.core.get.call(null,inst_37806,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37809 = cljs.core.not_empty.call(null,inst_37807__$1);
var state_37832__$1 = (function (){var statearr_37854 = state_37832;
(statearr_37854[(20)] = inst_37807__$1);

(statearr_37854[(21)] = inst_37808);

return statearr_37854;
})();
if(cljs.core.truth_(inst_37809)){
var statearr_37855_37934 = state_37832__$1;
(statearr_37855_37934[(1)] = (41));

} else {
var statearr_37856_37935 = state_37832__$1;
(statearr_37856_37935[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (33))){
var state_37832__$1 = state_37832;
var statearr_37857_37936 = state_37832__$1;
(statearr_37857_37936[(2)] = false);

(statearr_37857_37936[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (13))){
var inst_37705 = (state_37832[(22)]);
var inst_37709 = cljs.core.chunk_first.call(null,inst_37705);
var inst_37710 = cljs.core.chunk_rest.call(null,inst_37705);
var inst_37711 = cljs.core.count.call(null,inst_37709);
var inst_37692 = inst_37710;
var inst_37693 = inst_37709;
var inst_37694 = inst_37711;
var inst_37695 = (0);
var state_37832__$1 = (function (){var statearr_37858 = state_37832;
(statearr_37858[(7)] = inst_37692);

(statearr_37858[(8)] = inst_37693);

(statearr_37858[(9)] = inst_37695);

(statearr_37858[(10)] = inst_37694);

return statearr_37858;
})();
var statearr_37859_37937 = state_37832__$1;
(statearr_37859_37937[(2)] = null);

(statearr_37859_37937[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (22))){
var inst_37748 = (state_37832[(23)]);
var inst_37753 = (state_37832[(24)]);
var inst_37745 = (state_37832[(19)]);
var inst_37749 = (state_37832[(25)]);
var inst_37748__$1 = (state_37832[(2)]);
var inst_37749__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37748__$1);
var inst_37750 = (function (){var all_files = inst_37745;
var res_SINGLEQUOTE_ = inst_37748__$1;
var res = inst_37749__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37748,inst_37753,inst_37745,inst_37749,inst_37748__$1,inst_37749__$1,state_val_37833,c__34205__auto__,map__37677,map__37677__$1,opts,before_jsload,on_jsload,reload_dependents,map__37678,map__37678__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37674_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37674_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37748,inst_37753,inst_37745,inst_37749,inst_37748__$1,inst_37749__$1,state_val_37833,c__34205__auto__,map__37677,map__37677__$1,opts,before_jsload,on_jsload,reload_dependents,map__37678,map__37678__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37751 = cljs.core.filter.call(null,inst_37750,inst_37748__$1);
var inst_37752 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37753__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37752);
var inst_37754 = cljs.core.not_empty.call(null,inst_37753__$1);
var state_37832__$1 = (function (){var statearr_37860 = state_37832;
(statearr_37860[(23)] = inst_37748__$1);

(statearr_37860[(24)] = inst_37753__$1);

(statearr_37860[(26)] = inst_37751);

(statearr_37860[(25)] = inst_37749__$1);

return statearr_37860;
})();
if(cljs.core.truth_(inst_37754)){
var statearr_37861_37938 = state_37832__$1;
(statearr_37861_37938[(1)] = (23));

} else {
var statearr_37862_37939 = state_37832__$1;
(statearr_37862_37939[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (36))){
var state_37832__$1 = state_37832;
var statearr_37863_37940 = state_37832__$1;
(statearr_37863_37940[(2)] = false);

(statearr_37863_37940[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (41))){
var inst_37807 = (state_37832[(20)]);
var inst_37811 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37812 = cljs.core.map.call(null,inst_37811,inst_37807);
var inst_37813 = cljs.core.pr_str.call(null,inst_37812);
var inst_37814 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37813)].join('');
var inst_37815 = figwheel.client.utils.log.call(null,inst_37814);
var state_37832__$1 = state_37832;
var statearr_37864_37941 = state_37832__$1;
(statearr_37864_37941[(2)] = inst_37815);

(statearr_37864_37941[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (43))){
var inst_37808 = (state_37832[(21)]);
var inst_37818 = (state_37832[(2)]);
var inst_37819 = cljs.core.not_empty.call(null,inst_37808);
var state_37832__$1 = (function (){var statearr_37865 = state_37832;
(statearr_37865[(27)] = inst_37818);

return statearr_37865;
})();
if(cljs.core.truth_(inst_37819)){
var statearr_37866_37942 = state_37832__$1;
(statearr_37866_37942[(1)] = (44));

} else {
var statearr_37867_37943 = state_37832__$1;
(statearr_37867_37943[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (29))){
var inst_37748 = (state_37832[(23)]);
var inst_37753 = (state_37832[(24)]);
var inst_37745 = (state_37832[(19)]);
var inst_37751 = (state_37832[(26)]);
var inst_37749 = (state_37832[(25)]);
var inst_37785 = (state_37832[(16)]);
var inst_37781 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37784 = (function (){var all_files = inst_37745;
var res_SINGLEQUOTE_ = inst_37748;
var res = inst_37749;
var files_not_loaded = inst_37751;
var dependencies_that_loaded = inst_37753;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37748,inst_37753,inst_37745,inst_37751,inst_37749,inst_37785,inst_37781,state_val_37833,c__34205__auto__,map__37677,map__37677__$1,opts,before_jsload,on_jsload,reload_dependents,map__37678,map__37678__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37783){
var map__37868 = p__37783;
var map__37868__$1 = ((((!((map__37868 == null)))?((((map__37868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37868):map__37868);
var namespace = cljs.core.get.call(null,map__37868__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37748,inst_37753,inst_37745,inst_37751,inst_37749,inst_37785,inst_37781,state_val_37833,c__34205__auto__,map__37677,map__37677__$1,opts,before_jsload,on_jsload,reload_dependents,map__37678,map__37678__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37785__$1 = cljs.core.group_by.call(null,inst_37784,inst_37751);
var inst_37787 = (inst_37785__$1 == null);
var inst_37788 = cljs.core.not.call(null,inst_37787);
var state_37832__$1 = (function (){var statearr_37870 = state_37832;
(statearr_37870[(28)] = inst_37781);

(statearr_37870[(16)] = inst_37785__$1);

return statearr_37870;
})();
if(inst_37788){
var statearr_37871_37944 = state_37832__$1;
(statearr_37871_37944[(1)] = (32));

} else {
var statearr_37872_37945 = state_37832__$1;
(statearr_37872_37945[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (44))){
var inst_37808 = (state_37832[(21)]);
var inst_37821 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37808);
var inst_37822 = cljs.core.pr_str.call(null,inst_37821);
var inst_37823 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37822)].join('');
var inst_37824 = figwheel.client.utils.log.call(null,inst_37823);
var state_37832__$1 = state_37832;
var statearr_37873_37946 = state_37832__$1;
(statearr_37873_37946[(2)] = inst_37824);

(statearr_37873_37946[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (6))){
var inst_37726 = (state_37832[(2)]);
var state_37832__$1 = state_37832;
var statearr_37874_37947 = state_37832__$1;
(statearr_37874_37947[(2)] = inst_37726);

(statearr_37874_37947[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (28))){
var inst_37751 = (state_37832[(26)]);
var inst_37778 = (state_37832[(2)]);
var inst_37779 = cljs.core.not_empty.call(null,inst_37751);
var state_37832__$1 = (function (){var statearr_37875 = state_37832;
(statearr_37875[(29)] = inst_37778);

return statearr_37875;
})();
if(cljs.core.truth_(inst_37779)){
var statearr_37876_37948 = state_37832__$1;
(statearr_37876_37948[(1)] = (29));

} else {
var statearr_37877_37949 = state_37832__$1;
(statearr_37877_37949[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (25))){
var inst_37749 = (state_37832[(25)]);
var inst_37765 = (state_37832[(2)]);
var inst_37766 = cljs.core.not_empty.call(null,inst_37749);
var state_37832__$1 = (function (){var statearr_37878 = state_37832;
(statearr_37878[(30)] = inst_37765);

return statearr_37878;
})();
if(cljs.core.truth_(inst_37766)){
var statearr_37879_37950 = state_37832__$1;
(statearr_37879_37950[(1)] = (26));

} else {
var statearr_37880_37951 = state_37832__$1;
(statearr_37880_37951[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (34))){
var inst_37801 = (state_37832[(2)]);
var state_37832__$1 = state_37832;
if(cljs.core.truth_(inst_37801)){
var statearr_37881_37952 = state_37832__$1;
(statearr_37881_37952[(1)] = (38));

} else {
var statearr_37882_37953 = state_37832__$1;
(statearr_37882_37953[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (17))){
var state_37832__$1 = state_37832;
var statearr_37883_37954 = state_37832__$1;
(statearr_37883_37954[(2)] = recompile_dependents);

(statearr_37883_37954[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (3))){
var state_37832__$1 = state_37832;
var statearr_37884_37955 = state_37832__$1;
(statearr_37884_37955[(2)] = null);

(statearr_37884_37955[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (12))){
var inst_37722 = (state_37832[(2)]);
var state_37832__$1 = state_37832;
var statearr_37885_37956 = state_37832__$1;
(statearr_37885_37956[(2)] = inst_37722);

(statearr_37885_37956[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (2))){
var inst_37684 = (state_37832[(13)]);
var inst_37691 = cljs.core.seq.call(null,inst_37684);
var inst_37692 = inst_37691;
var inst_37693 = null;
var inst_37694 = (0);
var inst_37695 = (0);
var state_37832__$1 = (function (){var statearr_37886 = state_37832;
(statearr_37886[(7)] = inst_37692);

(statearr_37886[(8)] = inst_37693);

(statearr_37886[(9)] = inst_37695);

(statearr_37886[(10)] = inst_37694);

return statearr_37886;
})();
var statearr_37887_37957 = state_37832__$1;
(statearr_37887_37957[(2)] = null);

(statearr_37887_37957[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (23))){
var inst_37748 = (state_37832[(23)]);
var inst_37753 = (state_37832[(24)]);
var inst_37745 = (state_37832[(19)]);
var inst_37751 = (state_37832[(26)]);
var inst_37749 = (state_37832[(25)]);
var inst_37756 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37758 = (function (){var all_files = inst_37745;
var res_SINGLEQUOTE_ = inst_37748;
var res = inst_37749;
var files_not_loaded = inst_37751;
var dependencies_that_loaded = inst_37753;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37748,inst_37753,inst_37745,inst_37751,inst_37749,inst_37756,state_val_37833,c__34205__auto__,map__37677,map__37677__$1,opts,before_jsload,on_jsload,reload_dependents,map__37678,map__37678__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37757){
var map__37888 = p__37757;
var map__37888__$1 = ((((!((map__37888 == null)))?((((map__37888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37888.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37888):map__37888);
var request_url = cljs.core.get.call(null,map__37888__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37748,inst_37753,inst_37745,inst_37751,inst_37749,inst_37756,state_val_37833,c__34205__auto__,map__37677,map__37677__$1,opts,before_jsload,on_jsload,reload_dependents,map__37678,map__37678__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37759 = cljs.core.reverse.call(null,inst_37753);
var inst_37760 = cljs.core.map.call(null,inst_37758,inst_37759);
var inst_37761 = cljs.core.pr_str.call(null,inst_37760);
var inst_37762 = figwheel.client.utils.log.call(null,inst_37761);
var state_37832__$1 = (function (){var statearr_37890 = state_37832;
(statearr_37890[(31)] = inst_37756);

return statearr_37890;
})();
var statearr_37891_37958 = state_37832__$1;
(statearr_37891_37958[(2)] = inst_37762);

(statearr_37891_37958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (35))){
var state_37832__$1 = state_37832;
var statearr_37892_37959 = state_37832__$1;
(statearr_37892_37959[(2)] = true);

(statearr_37892_37959[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (19))){
var inst_37735 = (state_37832[(12)]);
var inst_37741 = figwheel.client.file_reloading.expand_files.call(null,inst_37735);
var state_37832__$1 = state_37832;
var statearr_37893_37960 = state_37832__$1;
(statearr_37893_37960[(2)] = inst_37741);

(statearr_37893_37960[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (11))){
var state_37832__$1 = state_37832;
var statearr_37894_37961 = state_37832__$1;
(statearr_37894_37961[(2)] = null);

(statearr_37894_37961[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (9))){
var inst_37724 = (state_37832[(2)]);
var state_37832__$1 = state_37832;
var statearr_37895_37962 = state_37832__$1;
(statearr_37895_37962[(2)] = inst_37724);

(statearr_37895_37962[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (5))){
var inst_37695 = (state_37832[(9)]);
var inst_37694 = (state_37832[(10)]);
var inst_37697 = (inst_37695 < inst_37694);
var inst_37698 = inst_37697;
var state_37832__$1 = state_37832;
if(cljs.core.truth_(inst_37698)){
var statearr_37896_37963 = state_37832__$1;
(statearr_37896_37963[(1)] = (7));

} else {
var statearr_37897_37964 = state_37832__$1;
(statearr_37897_37964[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (14))){
var inst_37705 = (state_37832[(22)]);
var inst_37714 = cljs.core.first.call(null,inst_37705);
var inst_37715 = figwheel.client.file_reloading.eval_body.call(null,inst_37714,opts);
var inst_37716 = cljs.core.next.call(null,inst_37705);
var inst_37692 = inst_37716;
var inst_37693 = null;
var inst_37694 = (0);
var inst_37695 = (0);
var state_37832__$1 = (function (){var statearr_37898 = state_37832;
(statearr_37898[(7)] = inst_37692);

(statearr_37898[(8)] = inst_37693);

(statearr_37898[(9)] = inst_37695);

(statearr_37898[(10)] = inst_37694);

(statearr_37898[(32)] = inst_37715);

return statearr_37898;
})();
var statearr_37899_37965 = state_37832__$1;
(statearr_37899_37965[(2)] = null);

(statearr_37899_37965[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (45))){
var state_37832__$1 = state_37832;
var statearr_37900_37966 = state_37832__$1;
(statearr_37900_37966[(2)] = null);

(statearr_37900_37966[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (26))){
var inst_37748 = (state_37832[(23)]);
var inst_37753 = (state_37832[(24)]);
var inst_37745 = (state_37832[(19)]);
var inst_37751 = (state_37832[(26)]);
var inst_37749 = (state_37832[(25)]);
var inst_37768 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37770 = (function (){var all_files = inst_37745;
var res_SINGLEQUOTE_ = inst_37748;
var res = inst_37749;
var files_not_loaded = inst_37751;
var dependencies_that_loaded = inst_37753;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37748,inst_37753,inst_37745,inst_37751,inst_37749,inst_37768,state_val_37833,c__34205__auto__,map__37677,map__37677__$1,opts,before_jsload,on_jsload,reload_dependents,map__37678,map__37678__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37769){
var map__37901 = p__37769;
var map__37901__$1 = ((((!((map__37901 == null)))?((((map__37901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37901):map__37901);
var namespace = cljs.core.get.call(null,map__37901__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37901__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37748,inst_37753,inst_37745,inst_37751,inst_37749,inst_37768,state_val_37833,c__34205__auto__,map__37677,map__37677__$1,opts,before_jsload,on_jsload,reload_dependents,map__37678,map__37678__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37771 = cljs.core.map.call(null,inst_37770,inst_37749);
var inst_37772 = cljs.core.pr_str.call(null,inst_37771);
var inst_37773 = figwheel.client.utils.log.call(null,inst_37772);
var inst_37774 = (function (){var all_files = inst_37745;
var res_SINGLEQUOTE_ = inst_37748;
var res = inst_37749;
var files_not_loaded = inst_37751;
var dependencies_that_loaded = inst_37753;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37748,inst_37753,inst_37745,inst_37751,inst_37749,inst_37768,inst_37770,inst_37771,inst_37772,inst_37773,state_val_37833,c__34205__auto__,map__37677,map__37677__$1,opts,before_jsload,on_jsload,reload_dependents,map__37678,map__37678__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37748,inst_37753,inst_37745,inst_37751,inst_37749,inst_37768,inst_37770,inst_37771,inst_37772,inst_37773,state_val_37833,c__34205__auto__,map__37677,map__37677__$1,opts,before_jsload,on_jsload,reload_dependents,map__37678,map__37678__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37775 = setTimeout(inst_37774,(10));
var state_37832__$1 = (function (){var statearr_37903 = state_37832;
(statearr_37903[(33)] = inst_37773);

(statearr_37903[(34)] = inst_37768);

return statearr_37903;
})();
var statearr_37904_37967 = state_37832__$1;
(statearr_37904_37967[(2)] = inst_37775);

(statearr_37904_37967[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (16))){
var state_37832__$1 = state_37832;
var statearr_37905_37968 = state_37832__$1;
(statearr_37905_37968[(2)] = reload_dependents);

(statearr_37905_37968[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (38))){
var inst_37785 = (state_37832[(16)]);
var inst_37803 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37785);
var state_37832__$1 = state_37832;
var statearr_37906_37969 = state_37832__$1;
(statearr_37906_37969[(2)] = inst_37803);

(statearr_37906_37969[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (30))){
var state_37832__$1 = state_37832;
var statearr_37907_37970 = state_37832__$1;
(statearr_37907_37970[(2)] = null);

(statearr_37907_37970[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (10))){
var inst_37705 = (state_37832[(22)]);
var inst_37707 = cljs.core.chunked_seq_QMARK_.call(null,inst_37705);
var state_37832__$1 = state_37832;
if(inst_37707){
var statearr_37908_37971 = state_37832__$1;
(statearr_37908_37971[(1)] = (13));

} else {
var statearr_37909_37972 = state_37832__$1;
(statearr_37909_37972[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (18))){
var inst_37739 = (state_37832[(2)]);
var state_37832__$1 = state_37832;
if(cljs.core.truth_(inst_37739)){
var statearr_37910_37973 = state_37832__$1;
(statearr_37910_37973[(1)] = (19));

} else {
var statearr_37911_37974 = state_37832__$1;
(statearr_37911_37974[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (42))){
var state_37832__$1 = state_37832;
var statearr_37912_37975 = state_37832__$1;
(statearr_37912_37975[(2)] = null);

(statearr_37912_37975[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (37))){
var inst_37798 = (state_37832[(2)]);
var state_37832__$1 = state_37832;
var statearr_37913_37976 = state_37832__$1;
(statearr_37913_37976[(2)] = inst_37798);

(statearr_37913_37976[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (8))){
var inst_37705 = (state_37832[(22)]);
var inst_37692 = (state_37832[(7)]);
var inst_37705__$1 = cljs.core.seq.call(null,inst_37692);
var state_37832__$1 = (function (){var statearr_37914 = state_37832;
(statearr_37914[(22)] = inst_37705__$1);

return statearr_37914;
})();
if(inst_37705__$1){
var statearr_37915_37977 = state_37832__$1;
(statearr_37915_37977[(1)] = (10));

} else {
var statearr_37916_37978 = state_37832__$1;
(statearr_37916_37978[(1)] = (11));

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
}
});})(c__34205__auto__,map__37677,map__37677__$1,opts,before_jsload,on_jsload,reload_dependents,map__37678,map__37678__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__34117__auto__,c__34205__auto__,map__37677,map__37677__$1,opts,before_jsload,on_jsload,reload_dependents,map__37678,map__37678__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34118__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34118__auto____0 = (function (){
var statearr_37917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37917[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34118__auto__);

(statearr_37917[(1)] = (1));

return statearr_37917;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34118__auto____1 = (function (state_37832){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_37832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e37918){if((e37918 instanceof Object)){
var ex__34121__auto__ = e37918;
var statearr_37919_37979 = state_37832;
(statearr_37919_37979[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37980 = state_37832;
state_37832 = G__37980;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34118__auto__ = function(state_37832){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34118__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34118__auto____1.call(this,state_37832);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34118__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34118__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto__,map__37677,map__37677__$1,opts,before_jsload,on_jsload,reload_dependents,map__37678,map__37678__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34207__auto__ = (function (){var statearr_37920 = f__34206__auto__.call(null);
(statearr_37920[(6)] = c__34205__auto__);

return statearr_37920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto__,map__37677,map__37677__$1,opts,before_jsload,on_jsload,reload_dependents,map__37678,map__37678__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34205__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37983,link){
var map__37984 = p__37983;
var map__37984__$1 = ((((!((map__37984 == null)))?((((map__37984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37984.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37984):map__37984);
var file = cljs.core.get.call(null,map__37984__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37984,map__37984__$1,file){
return (function (p1__37981_SHARP_,p2__37982_SHARP_){
if(cljs.core._EQ_.call(null,p1__37981_SHARP_,p2__37982_SHARP_)){
return p1__37981_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37984,map__37984__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37987){
var map__37988 = p__37987;
var map__37988__$1 = ((((!((map__37988 == null)))?((((map__37988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37988.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37988):map__37988);
var match_length = cljs.core.get.call(null,map__37988__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37988__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37986_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37986_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37990_SHARP_,p2__37991_SHARP_){
return cljs.core.assoc.call(null,p1__37990_SHARP_,cljs.core.get.call(null,p2__37991_SHARP_,key),p2__37991_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_37992 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37992);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37992);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37993,p__37994){
var map__37995 = p__37993;
var map__37995__$1 = ((((!((map__37995 == null)))?((((map__37995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37995.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37995):map__37995);
var on_cssload = cljs.core.get.call(null,map__37995__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37996 = p__37994;
var map__37996__$1 = ((((!((map__37996 == null)))?((((map__37996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37996.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37996):map__37996);
var files_msg = map__37996__$1;
var files = cljs.core.get.call(null,map__37996__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1504733880912
