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
var or__28286__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28286__auto__){
return or__28286__auto__;
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
var or__28286__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
var or__28286__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__28286__auto____$1)){
return or__28286__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35749_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35749_SHARP_));
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
var seq__35750 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35751 = null;
var count__35752 = (0);
var i__35753 = (0);
while(true){
if((i__35753 < count__35752)){
var n = cljs.core._nth.call(null,chunk__35751,i__35753);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35754 = seq__35750;
var G__35755 = chunk__35751;
var G__35756 = count__35752;
var G__35757 = (i__35753 + (1));
seq__35750 = G__35754;
chunk__35751 = G__35755;
count__35752 = G__35756;
i__35753 = G__35757;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35750);
if(temp__4657__auto__){
var seq__35750__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35750__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__35750__$1);
var G__35758 = cljs.core.chunk_rest.call(null,seq__35750__$1);
var G__35759 = c__29125__auto__;
var G__35760 = cljs.core.count.call(null,c__29125__auto__);
var G__35761 = (0);
seq__35750 = G__35758;
chunk__35751 = G__35759;
count__35752 = G__35760;
i__35753 = G__35761;
continue;
} else {
var n = cljs.core.first.call(null,seq__35750__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35762 = cljs.core.next.call(null,seq__35750__$1);
var G__35763 = null;
var G__35764 = (0);
var G__35765 = (0);
seq__35750 = G__35762;
chunk__35751 = G__35763;
count__35752 = G__35764;
i__35753 = G__35765;
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

var seq__35775_35783 = cljs.core.seq.call(null,deps);
var chunk__35776_35784 = null;
var count__35777_35785 = (0);
var i__35778_35786 = (0);
while(true){
if((i__35778_35786 < count__35777_35785)){
var dep_35787 = cljs.core._nth.call(null,chunk__35776_35784,i__35778_35786);
topo_sort_helper_STAR_.call(null,dep_35787,(depth + (1)),state);

var G__35788 = seq__35775_35783;
var G__35789 = chunk__35776_35784;
var G__35790 = count__35777_35785;
var G__35791 = (i__35778_35786 + (1));
seq__35775_35783 = G__35788;
chunk__35776_35784 = G__35789;
count__35777_35785 = G__35790;
i__35778_35786 = G__35791;
continue;
} else {
var temp__4657__auto___35792 = cljs.core.seq.call(null,seq__35775_35783);
if(temp__4657__auto___35792){
var seq__35775_35793__$1 = temp__4657__auto___35792;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35775_35793__$1)){
var c__29125__auto___35794 = cljs.core.chunk_first.call(null,seq__35775_35793__$1);
var G__35795 = cljs.core.chunk_rest.call(null,seq__35775_35793__$1);
var G__35796 = c__29125__auto___35794;
var G__35797 = cljs.core.count.call(null,c__29125__auto___35794);
var G__35798 = (0);
seq__35775_35783 = G__35795;
chunk__35776_35784 = G__35796;
count__35777_35785 = G__35797;
i__35778_35786 = G__35798;
continue;
} else {
var dep_35799 = cljs.core.first.call(null,seq__35775_35793__$1);
topo_sort_helper_STAR_.call(null,dep_35799,(depth + (1)),state);

var G__35800 = cljs.core.next.call(null,seq__35775_35793__$1);
var G__35801 = null;
var G__35802 = (0);
var G__35803 = (0);
seq__35775_35783 = G__35800;
chunk__35776_35784 = G__35801;
count__35777_35785 = G__35802;
i__35778_35786 = G__35803;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35779){
var vec__35780 = p__35779;
var seq__35781 = cljs.core.seq.call(null,vec__35780);
var first__35782 = cljs.core.first.call(null,seq__35781);
var seq__35781__$1 = cljs.core.next.call(null,seq__35781);
var x = first__35782;
var xs = seq__35781__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35780,seq__35781,first__35782,seq__35781__$1,x,xs,get_deps__$1){
return (function (p1__35766_SHARP_){
return clojure.set.difference.call(null,p1__35766_SHARP_,x);
});})(vec__35780,seq__35781,first__35782,seq__35781__$1,x,xs,get_deps__$1))
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
var seq__35804 = cljs.core.seq.call(null,provides);
var chunk__35805 = null;
var count__35806 = (0);
var i__35807 = (0);
while(true){
if((i__35807 < count__35806)){
var prov = cljs.core._nth.call(null,chunk__35805,i__35807);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35808_35816 = cljs.core.seq.call(null,requires);
var chunk__35809_35817 = null;
var count__35810_35818 = (0);
var i__35811_35819 = (0);
while(true){
if((i__35811_35819 < count__35810_35818)){
var req_35820 = cljs.core._nth.call(null,chunk__35809_35817,i__35811_35819);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35820,prov);

var G__35821 = seq__35808_35816;
var G__35822 = chunk__35809_35817;
var G__35823 = count__35810_35818;
var G__35824 = (i__35811_35819 + (1));
seq__35808_35816 = G__35821;
chunk__35809_35817 = G__35822;
count__35810_35818 = G__35823;
i__35811_35819 = G__35824;
continue;
} else {
var temp__4657__auto___35825 = cljs.core.seq.call(null,seq__35808_35816);
if(temp__4657__auto___35825){
var seq__35808_35826__$1 = temp__4657__auto___35825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35808_35826__$1)){
var c__29125__auto___35827 = cljs.core.chunk_first.call(null,seq__35808_35826__$1);
var G__35828 = cljs.core.chunk_rest.call(null,seq__35808_35826__$1);
var G__35829 = c__29125__auto___35827;
var G__35830 = cljs.core.count.call(null,c__29125__auto___35827);
var G__35831 = (0);
seq__35808_35816 = G__35828;
chunk__35809_35817 = G__35829;
count__35810_35818 = G__35830;
i__35811_35819 = G__35831;
continue;
} else {
var req_35832 = cljs.core.first.call(null,seq__35808_35826__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35832,prov);

var G__35833 = cljs.core.next.call(null,seq__35808_35826__$1);
var G__35834 = null;
var G__35835 = (0);
var G__35836 = (0);
seq__35808_35816 = G__35833;
chunk__35809_35817 = G__35834;
count__35810_35818 = G__35835;
i__35811_35819 = G__35836;
continue;
}
} else {
}
}
break;
}

var G__35837 = seq__35804;
var G__35838 = chunk__35805;
var G__35839 = count__35806;
var G__35840 = (i__35807 + (1));
seq__35804 = G__35837;
chunk__35805 = G__35838;
count__35806 = G__35839;
i__35807 = G__35840;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35804);
if(temp__4657__auto__){
var seq__35804__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35804__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__35804__$1);
var G__35841 = cljs.core.chunk_rest.call(null,seq__35804__$1);
var G__35842 = c__29125__auto__;
var G__35843 = cljs.core.count.call(null,c__29125__auto__);
var G__35844 = (0);
seq__35804 = G__35841;
chunk__35805 = G__35842;
count__35806 = G__35843;
i__35807 = G__35844;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35804__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35812_35845 = cljs.core.seq.call(null,requires);
var chunk__35813_35846 = null;
var count__35814_35847 = (0);
var i__35815_35848 = (0);
while(true){
if((i__35815_35848 < count__35814_35847)){
var req_35849 = cljs.core._nth.call(null,chunk__35813_35846,i__35815_35848);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35849,prov);

var G__35850 = seq__35812_35845;
var G__35851 = chunk__35813_35846;
var G__35852 = count__35814_35847;
var G__35853 = (i__35815_35848 + (1));
seq__35812_35845 = G__35850;
chunk__35813_35846 = G__35851;
count__35814_35847 = G__35852;
i__35815_35848 = G__35853;
continue;
} else {
var temp__4657__auto___35854__$1 = cljs.core.seq.call(null,seq__35812_35845);
if(temp__4657__auto___35854__$1){
var seq__35812_35855__$1 = temp__4657__auto___35854__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35812_35855__$1)){
var c__29125__auto___35856 = cljs.core.chunk_first.call(null,seq__35812_35855__$1);
var G__35857 = cljs.core.chunk_rest.call(null,seq__35812_35855__$1);
var G__35858 = c__29125__auto___35856;
var G__35859 = cljs.core.count.call(null,c__29125__auto___35856);
var G__35860 = (0);
seq__35812_35845 = G__35857;
chunk__35813_35846 = G__35858;
count__35814_35847 = G__35859;
i__35815_35848 = G__35860;
continue;
} else {
var req_35861 = cljs.core.first.call(null,seq__35812_35855__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35861,prov);

var G__35862 = cljs.core.next.call(null,seq__35812_35855__$1);
var G__35863 = null;
var G__35864 = (0);
var G__35865 = (0);
seq__35812_35845 = G__35862;
chunk__35813_35846 = G__35863;
count__35814_35847 = G__35864;
i__35815_35848 = G__35865;
continue;
}
} else {
}
}
break;
}

var G__35866 = cljs.core.next.call(null,seq__35804__$1);
var G__35867 = null;
var G__35868 = (0);
var G__35869 = (0);
seq__35804 = G__35866;
chunk__35805 = G__35867;
count__35806 = G__35868;
i__35807 = G__35869;
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
var seq__35870_35874 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35871_35875 = null;
var count__35872_35876 = (0);
var i__35873_35877 = (0);
while(true){
if((i__35873_35877 < count__35872_35876)){
var ns_35878 = cljs.core._nth.call(null,chunk__35871_35875,i__35873_35877);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35878);

var G__35879 = seq__35870_35874;
var G__35880 = chunk__35871_35875;
var G__35881 = count__35872_35876;
var G__35882 = (i__35873_35877 + (1));
seq__35870_35874 = G__35879;
chunk__35871_35875 = G__35880;
count__35872_35876 = G__35881;
i__35873_35877 = G__35882;
continue;
} else {
var temp__4657__auto___35883 = cljs.core.seq.call(null,seq__35870_35874);
if(temp__4657__auto___35883){
var seq__35870_35884__$1 = temp__4657__auto___35883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35870_35884__$1)){
var c__29125__auto___35885 = cljs.core.chunk_first.call(null,seq__35870_35884__$1);
var G__35886 = cljs.core.chunk_rest.call(null,seq__35870_35884__$1);
var G__35887 = c__29125__auto___35885;
var G__35888 = cljs.core.count.call(null,c__29125__auto___35885);
var G__35889 = (0);
seq__35870_35874 = G__35886;
chunk__35871_35875 = G__35887;
count__35872_35876 = G__35888;
i__35873_35877 = G__35889;
continue;
} else {
var ns_35890 = cljs.core.first.call(null,seq__35870_35884__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35890);

var G__35891 = cljs.core.next.call(null,seq__35870_35884__$1);
var G__35892 = null;
var G__35893 = (0);
var G__35894 = (0);
seq__35870_35874 = G__35891;
chunk__35871_35875 = G__35892;
count__35872_35876 = G__35893;
i__35873_35877 = G__35894;
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
goog.require_figwheel_backup_ = (function (){var or__28286__auto__ = goog.require__;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
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
var G__35895__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35895 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35896__i = 0, G__35896__a = new Array(arguments.length -  0);
while (G__35896__i < G__35896__a.length) {G__35896__a[G__35896__i] = arguments[G__35896__i + 0]; ++G__35896__i;}
  args = new cljs.core.IndexedSeq(G__35896__a,0,null);
} 
return G__35895__delegate.call(this,args);};
G__35895.cljs$lang$maxFixedArity = 0;
G__35895.cljs$lang$applyTo = (function (arglist__35897){
var args = cljs.core.seq(arglist__35897);
return G__35895__delegate(args);
});
G__35895.cljs$core$IFn$_invoke$arity$variadic = G__35895__delegate;
return G__35895;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__35898_SHARP_,p2__35899_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35898_SHARP_)].join('')),p2__35899_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__35900_SHARP_,p2__35901_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35900_SHARP_)].join(''),p2__35901_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35902 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35902.addCallback(((function (G__35902){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__35902))
);

G__35902.addErrback(((function (G__35902){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__35902))
);

return G__35902;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35903 = cljs.core._EQ_;
var expr__35904 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35903.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35904))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__35903,expr__35904){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__35903,expr__35904))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__35903,expr__35904){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35906){if((e35906 instanceof Error)){
var e = e35906;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35906;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__35903,expr__35904))
} else {
if(cljs.core.truth_(pred__35903.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35904))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35903.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__35904))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35903.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35904))){
return ((function (pred__35903,expr__35904){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35907){if((e35907 instanceof Error)){
var e = e35907;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35907;

}
}})());
});
;})(pred__35903,expr__35904))
} else {
return ((function (pred__35903,expr__35904){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35903,expr__35904))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35908,callback){
var map__35909 = p__35908;
var map__35909__$1 = ((((!((map__35909 == null)))?((((map__35909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35909):map__35909);
var file_msg = map__35909__$1;
var request_url = cljs.core.get.call(null,map__35909__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35909,map__35909__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35909,map__35909__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__32579__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto__){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto__){
return (function (state_35933){
var state_val_35934 = (state_35933[(1)]);
if((state_val_35934 === (7))){
var inst_35929 = (state_35933[(2)]);
var state_35933__$1 = state_35933;
var statearr_35935_35952 = state_35933__$1;
(statearr_35935_35952[(2)] = inst_35929);

(statearr_35935_35952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35934 === (1))){
var state_35933__$1 = state_35933;
var statearr_35936_35953 = state_35933__$1;
(statearr_35936_35953[(2)] = null);

(statearr_35936_35953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35934 === (4))){
var inst_35913 = (state_35933[(7)]);
var inst_35913__$1 = (state_35933[(2)]);
var state_35933__$1 = (function (){var statearr_35937 = state_35933;
(statearr_35937[(7)] = inst_35913__$1);

return statearr_35937;
})();
if(cljs.core.truth_(inst_35913__$1)){
var statearr_35938_35954 = state_35933__$1;
(statearr_35938_35954[(1)] = (5));

} else {
var statearr_35939_35955 = state_35933__$1;
(statearr_35939_35955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35934 === (6))){
var state_35933__$1 = state_35933;
var statearr_35940_35956 = state_35933__$1;
(statearr_35940_35956[(2)] = null);

(statearr_35940_35956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35934 === (3))){
var inst_35931 = (state_35933[(2)]);
var state_35933__$1 = state_35933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35933__$1,inst_35931);
} else {
if((state_val_35934 === (2))){
var state_35933__$1 = state_35933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35933__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35934 === (11))){
var inst_35925 = (state_35933[(2)]);
var state_35933__$1 = (function (){var statearr_35941 = state_35933;
(statearr_35941[(8)] = inst_35925);

return statearr_35941;
})();
var statearr_35942_35957 = state_35933__$1;
(statearr_35942_35957[(2)] = null);

(statearr_35942_35957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35934 === (9))){
var inst_35917 = (state_35933[(9)]);
var inst_35919 = (state_35933[(10)]);
var inst_35921 = inst_35919.call(null,inst_35917);
var state_35933__$1 = state_35933;
var statearr_35943_35958 = state_35933__$1;
(statearr_35943_35958[(2)] = inst_35921);

(statearr_35943_35958[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35934 === (5))){
var inst_35913 = (state_35933[(7)]);
var inst_35915 = figwheel.client.file_reloading.blocking_load.call(null,inst_35913);
var state_35933__$1 = state_35933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35933__$1,(8),inst_35915);
} else {
if((state_val_35934 === (10))){
var inst_35917 = (state_35933[(9)]);
var inst_35923 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35917);
var state_35933__$1 = state_35933;
var statearr_35944_35959 = state_35933__$1;
(statearr_35944_35959[(2)] = inst_35923);

(statearr_35944_35959[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35934 === (8))){
var inst_35919 = (state_35933[(10)]);
var inst_35913 = (state_35933[(7)]);
var inst_35917 = (state_35933[(2)]);
var inst_35918 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35919__$1 = cljs.core.get.call(null,inst_35918,inst_35913);
var state_35933__$1 = (function (){var statearr_35945 = state_35933;
(statearr_35945[(9)] = inst_35917);

(statearr_35945[(10)] = inst_35919__$1);

return statearr_35945;
})();
if(cljs.core.truth_(inst_35919__$1)){
var statearr_35946_35960 = state_35933__$1;
(statearr_35946_35960[(1)] = (9));

} else {
var statearr_35947_35961 = state_35933__$1;
(statearr_35947_35961[(1)] = (10));

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
});})(c__32579__auto__))
;
return ((function (switch__32491__auto__,c__32579__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32492__auto__ = null;
var figwheel$client$file_reloading$state_machine__32492__auto____0 = (function (){
var statearr_35948 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35948[(0)] = figwheel$client$file_reloading$state_machine__32492__auto__);

(statearr_35948[(1)] = (1));

return statearr_35948;
});
var figwheel$client$file_reloading$state_machine__32492__auto____1 = (function (state_35933){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_35933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e35949){if((e35949 instanceof Object)){
var ex__32495__auto__ = e35949;
var statearr_35950_35962 = state_35933;
(statearr_35950_35962[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35963 = state_35933;
state_35933 = G__35963;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32492__auto__ = function(state_35933){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32492__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32492__auto____1.call(this,state_35933);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32492__auto____0;
figwheel$client$file_reloading$state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32492__auto____1;
return figwheel$client$file_reloading$state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto__))
})();
var state__32581__auto__ = (function (){var statearr_35951 = f__32580__auto__.call(null);
(statearr_35951[(6)] = c__32579__auto__);

return statearr_35951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto__))
);

return c__32579__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35964,callback){
var map__35965 = p__35964;
var map__35965__$1 = ((((!((map__35965 == null)))?((((map__35965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35965):map__35965);
var file_msg = map__35965__$1;
var namespace = cljs.core.get.call(null,map__35965__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35965,map__35965__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35965,map__35965__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35967){
var map__35968 = p__35967;
var map__35968__$1 = ((((!((map__35968 == null)))?((((map__35968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35968):map__35968);
var file_msg = map__35968__$1;
var namespace = cljs.core.get.call(null,map__35968__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35970){
var map__35971 = p__35970;
var map__35971__$1 = ((((!((map__35971 == null)))?((((map__35971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35971.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35971):map__35971);
var file_msg = map__35971__$1;
var namespace = cljs.core.get.call(null,map__35971__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28274__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28274__auto__){
var or__28286__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
var or__28286__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28286__auto____$1)){
return or__28286__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28274__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35973,callback){
var map__35974 = p__35973;
var map__35974__$1 = ((((!((map__35974 == null)))?((((map__35974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35974):map__35974);
var file_msg = map__35974__$1;
var request_url = cljs.core.get.call(null,map__35974__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35974__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__32579__auto___36024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto___36024,out){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto___36024,out){
return (function (state_36009){
var state_val_36010 = (state_36009[(1)]);
if((state_val_36010 === (1))){
var inst_35983 = cljs.core.seq.call(null,files);
var inst_35984 = cljs.core.first.call(null,inst_35983);
var inst_35985 = cljs.core.next.call(null,inst_35983);
var inst_35986 = files;
var state_36009__$1 = (function (){var statearr_36011 = state_36009;
(statearr_36011[(7)] = inst_35984);

(statearr_36011[(8)] = inst_35985);

(statearr_36011[(9)] = inst_35986);

return statearr_36011;
})();
var statearr_36012_36025 = state_36009__$1;
(statearr_36012_36025[(2)] = null);

(statearr_36012_36025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36010 === (2))){
var inst_35992 = (state_36009[(10)]);
var inst_35986 = (state_36009[(9)]);
var inst_35991 = cljs.core.seq.call(null,inst_35986);
var inst_35992__$1 = cljs.core.first.call(null,inst_35991);
var inst_35993 = cljs.core.next.call(null,inst_35991);
var inst_35994 = (inst_35992__$1 == null);
var inst_35995 = cljs.core.not.call(null,inst_35994);
var state_36009__$1 = (function (){var statearr_36013 = state_36009;
(statearr_36013[(10)] = inst_35992__$1);

(statearr_36013[(11)] = inst_35993);

return statearr_36013;
})();
if(inst_35995){
var statearr_36014_36026 = state_36009__$1;
(statearr_36014_36026[(1)] = (4));

} else {
var statearr_36015_36027 = state_36009__$1;
(statearr_36015_36027[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36010 === (3))){
var inst_36007 = (state_36009[(2)]);
var state_36009__$1 = state_36009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36009__$1,inst_36007);
} else {
if((state_val_36010 === (4))){
var inst_35992 = (state_36009[(10)]);
var inst_35997 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35992);
var state_36009__$1 = state_36009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36009__$1,(7),inst_35997);
} else {
if((state_val_36010 === (5))){
var inst_36003 = cljs.core.async.close_BANG_.call(null,out);
var state_36009__$1 = state_36009;
var statearr_36016_36028 = state_36009__$1;
(statearr_36016_36028[(2)] = inst_36003);

(statearr_36016_36028[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36010 === (6))){
var inst_36005 = (state_36009[(2)]);
var state_36009__$1 = state_36009;
var statearr_36017_36029 = state_36009__$1;
(statearr_36017_36029[(2)] = inst_36005);

(statearr_36017_36029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36010 === (7))){
var inst_35993 = (state_36009[(11)]);
var inst_35999 = (state_36009[(2)]);
var inst_36000 = cljs.core.async.put_BANG_.call(null,out,inst_35999);
var inst_35986 = inst_35993;
var state_36009__$1 = (function (){var statearr_36018 = state_36009;
(statearr_36018[(12)] = inst_36000);

(statearr_36018[(9)] = inst_35986);

return statearr_36018;
})();
var statearr_36019_36030 = state_36009__$1;
(statearr_36019_36030[(2)] = null);

(statearr_36019_36030[(1)] = (2));


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
});})(c__32579__auto___36024,out))
;
return ((function (switch__32491__auto__,c__32579__auto___36024,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32492__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32492__auto____0 = (function (){
var statearr_36020 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36020[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32492__auto__);

(statearr_36020[(1)] = (1));

return statearr_36020;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32492__auto____1 = (function (state_36009){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_36009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e36021){if((e36021 instanceof Object)){
var ex__32495__auto__ = e36021;
var statearr_36022_36031 = state_36009;
(statearr_36022_36031[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36032 = state_36009;
state_36009 = G__36032;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32492__auto__ = function(state_36009){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32492__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32492__auto____1.call(this,state_36009);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32492__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32492__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto___36024,out))
})();
var state__32581__auto__ = (function (){var statearr_36023 = f__32580__auto__.call(null);
(statearr_36023[(6)] = c__32579__auto___36024);

return statearr_36023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto___36024,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36033,opts){
var map__36034 = p__36033;
var map__36034__$1 = ((((!((map__36034 == null)))?((((map__36034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36034.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36034):map__36034);
var eval_body = cljs.core.get.call(null,map__36034__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36034__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28274__auto__ = eval_body;
if(cljs.core.truth_(and__28274__auto__)){
return typeof eval_body === 'string';
} else {
return and__28274__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36036){var e = e36036;
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
return (function (p1__36037_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36037_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__36038){
var vec__36039 = p__36038;
var k = cljs.core.nth.call(null,vec__36039,(0),null);
var v = cljs.core.nth.call(null,vec__36039,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36042){
var vec__36043 = p__36042;
var k = cljs.core.nth.call(null,vec__36043,(0),null);
var v = cljs.core.nth.call(null,vec__36043,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36049,p__36050){
var map__36051 = p__36049;
var map__36051__$1 = ((((!((map__36051 == null)))?((((map__36051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36051.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36051):map__36051);
var opts = map__36051__$1;
var before_jsload = cljs.core.get.call(null,map__36051__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36051__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36051__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36052 = p__36050;
var map__36052__$1 = ((((!((map__36052 == null)))?((((map__36052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36052.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36052):map__36052);
var msg = map__36052__$1;
var files = cljs.core.get.call(null,map__36052__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36052__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36052__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32579__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto__,map__36051,map__36051__$1,opts,before_jsload,on_jsload,reload_dependents,map__36052,map__36052__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto__,map__36051,map__36051__$1,opts,before_jsload,on_jsload,reload_dependents,map__36052,map__36052__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36206){
var state_val_36207 = (state_36206[(1)]);
if((state_val_36207 === (7))){
var inst_36069 = (state_36206[(7)]);
var inst_36066 = (state_36206[(8)]);
var inst_36068 = (state_36206[(9)]);
var inst_36067 = (state_36206[(10)]);
var inst_36074 = cljs.core._nth.call(null,inst_36067,inst_36069);
var inst_36075 = figwheel.client.file_reloading.eval_body.call(null,inst_36074,opts);
var inst_36076 = (inst_36069 + (1));
var tmp36208 = inst_36066;
var tmp36209 = inst_36068;
var tmp36210 = inst_36067;
var inst_36066__$1 = tmp36208;
var inst_36067__$1 = tmp36210;
var inst_36068__$1 = tmp36209;
var inst_36069__$1 = inst_36076;
var state_36206__$1 = (function (){var statearr_36211 = state_36206;
(statearr_36211[(7)] = inst_36069__$1);

(statearr_36211[(8)] = inst_36066__$1);

(statearr_36211[(9)] = inst_36068__$1);

(statearr_36211[(11)] = inst_36075);

(statearr_36211[(10)] = inst_36067__$1);

return statearr_36211;
})();
var statearr_36212_36295 = state_36206__$1;
(statearr_36212_36295[(2)] = null);

(statearr_36212_36295[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (20))){
var inst_36109 = (state_36206[(12)]);
var inst_36117 = figwheel.client.file_reloading.sort_files.call(null,inst_36109);
var state_36206__$1 = state_36206;
var statearr_36213_36296 = state_36206__$1;
(statearr_36213_36296[(2)] = inst_36117);

(statearr_36213_36296[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (27))){
var state_36206__$1 = state_36206;
var statearr_36214_36297 = state_36206__$1;
(statearr_36214_36297[(2)] = null);

(statearr_36214_36297[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (1))){
var inst_36058 = (state_36206[(13)]);
var inst_36055 = before_jsload.call(null,files);
var inst_36056 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36057 = (function (){return ((function (inst_36058,inst_36055,inst_36056,state_val_36207,c__32579__auto__,map__36051,map__36051__$1,opts,before_jsload,on_jsload,reload_dependents,map__36052,map__36052__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36046_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36046_SHARP_);
});
;})(inst_36058,inst_36055,inst_36056,state_val_36207,c__32579__auto__,map__36051,map__36051__$1,opts,before_jsload,on_jsload,reload_dependents,map__36052,map__36052__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36058__$1 = cljs.core.filter.call(null,inst_36057,files);
var inst_36059 = cljs.core.not_empty.call(null,inst_36058__$1);
var state_36206__$1 = (function (){var statearr_36215 = state_36206;
(statearr_36215[(13)] = inst_36058__$1);

(statearr_36215[(14)] = inst_36055);

(statearr_36215[(15)] = inst_36056);

return statearr_36215;
})();
if(cljs.core.truth_(inst_36059)){
var statearr_36216_36298 = state_36206__$1;
(statearr_36216_36298[(1)] = (2));

} else {
var statearr_36217_36299 = state_36206__$1;
(statearr_36217_36299[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (24))){
var state_36206__$1 = state_36206;
var statearr_36218_36300 = state_36206__$1;
(statearr_36218_36300[(2)] = null);

(statearr_36218_36300[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (39))){
var inst_36159 = (state_36206[(16)]);
var state_36206__$1 = state_36206;
var statearr_36219_36301 = state_36206__$1;
(statearr_36219_36301[(2)] = inst_36159);

(statearr_36219_36301[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (46))){
var inst_36201 = (state_36206[(2)]);
var state_36206__$1 = state_36206;
var statearr_36220_36302 = state_36206__$1;
(statearr_36220_36302[(2)] = inst_36201);

(statearr_36220_36302[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (4))){
var inst_36103 = (state_36206[(2)]);
var inst_36104 = cljs.core.List.EMPTY;
var inst_36105 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36104);
var inst_36106 = (function (){return ((function (inst_36103,inst_36104,inst_36105,state_val_36207,c__32579__auto__,map__36051,map__36051__$1,opts,before_jsload,on_jsload,reload_dependents,map__36052,map__36052__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36047_SHARP_){
var and__28274__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36047_SHARP_);
if(cljs.core.truth_(and__28274__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36047_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36047_SHARP_)));
} else {
return and__28274__auto__;
}
});
;})(inst_36103,inst_36104,inst_36105,state_val_36207,c__32579__auto__,map__36051,map__36051__$1,opts,before_jsload,on_jsload,reload_dependents,map__36052,map__36052__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36107 = cljs.core.filter.call(null,inst_36106,files);
var inst_36108 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36109 = cljs.core.concat.call(null,inst_36107,inst_36108);
var state_36206__$1 = (function (){var statearr_36221 = state_36206;
(statearr_36221[(12)] = inst_36109);

(statearr_36221[(17)] = inst_36103);

(statearr_36221[(18)] = inst_36105);

return statearr_36221;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36222_36303 = state_36206__$1;
(statearr_36222_36303[(1)] = (16));

} else {
var statearr_36223_36304 = state_36206__$1;
(statearr_36223_36304[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (15))){
var inst_36093 = (state_36206[(2)]);
var state_36206__$1 = state_36206;
var statearr_36224_36305 = state_36206__$1;
(statearr_36224_36305[(2)] = inst_36093);

(statearr_36224_36305[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (21))){
var inst_36119 = (state_36206[(19)]);
var inst_36119__$1 = (state_36206[(2)]);
var inst_36120 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36119__$1);
var state_36206__$1 = (function (){var statearr_36225 = state_36206;
(statearr_36225[(19)] = inst_36119__$1);

return statearr_36225;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36206__$1,(22),inst_36120);
} else {
if((state_val_36207 === (31))){
var inst_36204 = (state_36206[(2)]);
var state_36206__$1 = state_36206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36206__$1,inst_36204);
} else {
if((state_val_36207 === (32))){
var inst_36159 = (state_36206[(16)]);
var inst_36164 = inst_36159.cljs$lang$protocol_mask$partition0$;
var inst_36165 = (inst_36164 & (64));
var inst_36166 = inst_36159.cljs$core$ISeq$;
var inst_36167 = (cljs.core.PROTOCOL_SENTINEL === inst_36166);
var inst_36168 = (inst_36165) || (inst_36167);
var state_36206__$1 = state_36206;
if(cljs.core.truth_(inst_36168)){
var statearr_36226_36306 = state_36206__$1;
(statearr_36226_36306[(1)] = (35));

} else {
var statearr_36227_36307 = state_36206__$1;
(statearr_36227_36307[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (40))){
var inst_36181 = (state_36206[(20)]);
var inst_36180 = (state_36206[(2)]);
var inst_36181__$1 = cljs.core.get.call(null,inst_36180,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36182 = cljs.core.get.call(null,inst_36180,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36183 = cljs.core.not_empty.call(null,inst_36181__$1);
var state_36206__$1 = (function (){var statearr_36228 = state_36206;
(statearr_36228[(21)] = inst_36182);

(statearr_36228[(20)] = inst_36181__$1);

return statearr_36228;
})();
if(cljs.core.truth_(inst_36183)){
var statearr_36229_36308 = state_36206__$1;
(statearr_36229_36308[(1)] = (41));

} else {
var statearr_36230_36309 = state_36206__$1;
(statearr_36230_36309[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (33))){
var state_36206__$1 = state_36206;
var statearr_36231_36310 = state_36206__$1;
(statearr_36231_36310[(2)] = false);

(statearr_36231_36310[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (13))){
var inst_36079 = (state_36206[(22)]);
var inst_36083 = cljs.core.chunk_first.call(null,inst_36079);
var inst_36084 = cljs.core.chunk_rest.call(null,inst_36079);
var inst_36085 = cljs.core.count.call(null,inst_36083);
var inst_36066 = inst_36084;
var inst_36067 = inst_36083;
var inst_36068 = inst_36085;
var inst_36069 = (0);
var state_36206__$1 = (function (){var statearr_36232 = state_36206;
(statearr_36232[(7)] = inst_36069);

(statearr_36232[(8)] = inst_36066);

(statearr_36232[(9)] = inst_36068);

(statearr_36232[(10)] = inst_36067);

return statearr_36232;
})();
var statearr_36233_36311 = state_36206__$1;
(statearr_36233_36311[(2)] = null);

(statearr_36233_36311[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (22))){
var inst_36122 = (state_36206[(23)]);
var inst_36119 = (state_36206[(19)]);
var inst_36127 = (state_36206[(24)]);
var inst_36123 = (state_36206[(25)]);
var inst_36122__$1 = (state_36206[(2)]);
var inst_36123__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36122__$1);
var inst_36124 = (function (){var all_files = inst_36119;
var res_SINGLEQUOTE_ = inst_36122__$1;
var res = inst_36123__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36122,inst_36119,inst_36127,inst_36123,inst_36122__$1,inst_36123__$1,state_val_36207,c__32579__auto__,map__36051,map__36051__$1,opts,before_jsload,on_jsload,reload_dependents,map__36052,map__36052__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36048_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36048_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36122,inst_36119,inst_36127,inst_36123,inst_36122__$1,inst_36123__$1,state_val_36207,c__32579__auto__,map__36051,map__36051__$1,opts,before_jsload,on_jsload,reload_dependents,map__36052,map__36052__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36125 = cljs.core.filter.call(null,inst_36124,inst_36122__$1);
var inst_36126 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36127__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36126);
var inst_36128 = cljs.core.not_empty.call(null,inst_36127__$1);
var state_36206__$1 = (function (){var statearr_36234 = state_36206;
(statearr_36234[(23)] = inst_36122__$1);

(statearr_36234[(26)] = inst_36125);

(statearr_36234[(24)] = inst_36127__$1);

(statearr_36234[(25)] = inst_36123__$1);

return statearr_36234;
})();
if(cljs.core.truth_(inst_36128)){
var statearr_36235_36312 = state_36206__$1;
(statearr_36235_36312[(1)] = (23));

} else {
var statearr_36236_36313 = state_36206__$1;
(statearr_36236_36313[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (36))){
var state_36206__$1 = state_36206;
var statearr_36237_36314 = state_36206__$1;
(statearr_36237_36314[(2)] = false);

(statearr_36237_36314[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (41))){
var inst_36181 = (state_36206[(20)]);
var inst_36185 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36186 = cljs.core.map.call(null,inst_36185,inst_36181);
var inst_36187 = cljs.core.pr_str.call(null,inst_36186);
var inst_36188 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36187)].join('');
var inst_36189 = figwheel.client.utils.log.call(null,inst_36188);
var state_36206__$1 = state_36206;
var statearr_36238_36315 = state_36206__$1;
(statearr_36238_36315[(2)] = inst_36189);

(statearr_36238_36315[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (43))){
var inst_36182 = (state_36206[(21)]);
var inst_36192 = (state_36206[(2)]);
var inst_36193 = cljs.core.not_empty.call(null,inst_36182);
var state_36206__$1 = (function (){var statearr_36239 = state_36206;
(statearr_36239[(27)] = inst_36192);

return statearr_36239;
})();
if(cljs.core.truth_(inst_36193)){
var statearr_36240_36316 = state_36206__$1;
(statearr_36240_36316[(1)] = (44));

} else {
var statearr_36241_36317 = state_36206__$1;
(statearr_36241_36317[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (29))){
var inst_36122 = (state_36206[(23)]);
var inst_36119 = (state_36206[(19)]);
var inst_36125 = (state_36206[(26)]);
var inst_36159 = (state_36206[(16)]);
var inst_36127 = (state_36206[(24)]);
var inst_36123 = (state_36206[(25)]);
var inst_36155 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36158 = (function (){var all_files = inst_36119;
var res_SINGLEQUOTE_ = inst_36122;
var res = inst_36123;
var files_not_loaded = inst_36125;
var dependencies_that_loaded = inst_36127;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36122,inst_36119,inst_36125,inst_36159,inst_36127,inst_36123,inst_36155,state_val_36207,c__32579__auto__,map__36051,map__36051__$1,opts,before_jsload,on_jsload,reload_dependents,map__36052,map__36052__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36157){
var map__36242 = p__36157;
var map__36242__$1 = ((((!((map__36242 == null)))?((((map__36242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36242.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36242):map__36242);
var namespace = cljs.core.get.call(null,map__36242__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36122,inst_36119,inst_36125,inst_36159,inst_36127,inst_36123,inst_36155,state_val_36207,c__32579__auto__,map__36051,map__36051__$1,opts,before_jsload,on_jsload,reload_dependents,map__36052,map__36052__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36159__$1 = cljs.core.group_by.call(null,inst_36158,inst_36125);
var inst_36161 = (inst_36159__$1 == null);
var inst_36162 = cljs.core.not.call(null,inst_36161);
var state_36206__$1 = (function (){var statearr_36244 = state_36206;
(statearr_36244[(28)] = inst_36155);

(statearr_36244[(16)] = inst_36159__$1);

return statearr_36244;
})();
if(inst_36162){
var statearr_36245_36318 = state_36206__$1;
(statearr_36245_36318[(1)] = (32));

} else {
var statearr_36246_36319 = state_36206__$1;
(statearr_36246_36319[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (44))){
var inst_36182 = (state_36206[(21)]);
var inst_36195 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36182);
var inst_36196 = cljs.core.pr_str.call(null,inst_36195);
var inst_36197 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36196)].join('');
var inst_36198 = figwheel.client.utils.log.call(null,inst_36197);
var state_36206__$1 = state_36206;
var statearr_36247_36320 = state_36206__$1;
(statearr_36247_36320[(2)] = inst_36198);

(statearr_36247_36320[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (6))){
var inst_36100 = (state_36206[(2)]);
var state_36206__$1 = state_36206;
var statearr_36248_36321 = state_36206__$1;
(statearr_36248_36321[(2)] = inst_36100);

(statearr_36248_36321[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (28))){
var inst_36125 = (state_36206[(26)]);
var inst_36152 = (state_36206[(2)]);
var inst_36153 = cljs.core.not_empty.call(null,inst_36125);
var state_36206__$1 = (function (){var statearr_36249 = state_36206;
(statearr_36249[(29)] = inst_36152);

return statearr_36249;
})();
if(cljs.core.truth_(inst_36153)){
var statearr_36250_36322 = state_36206__$1;
(statearr_36250_36322[(1)] = (29));

} else {
var statearr_36251_36323 = state_36206__$1;
(statearr_36251_36323[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (25))){
var inst_36123 = (state_36206[(25)]);
var inst_36139 = (state_36206[(2)]);
var inst_36140 = cljs.core.not_empty.call(null,inst_36123);
var state_36206__$1 = (function (){var statearr_36252 = state_36206;
(statearr_36252[(30)] = inst_36139);

return statearr_36252;
})();
if(cljs.core.truth_(inst_36140)){
var statearr_36253_36324 = state_36206__$1;
(statearr_36253_36324[(1)] = (26));

} else {
var statearr_36254_36325 = state_36206__$1;
(statearr_36254_36325[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (34))){
var inst_36175 = (state_36206[(2)]);
var state_36206__$1 = state_36206;
if(cljs.core.truth_(inst_36175)){
var statearr_36255_36326 = state_36206__$1;
(statearr_36255_36326[(1)] = (38));

} else {
var statearr_36256_36327 = state_36206__$1;
(statearr_36256_36327[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (17))){
var state_36206__$1 = state_36206;
var statearr_36257_36328 = state_36206__$1;
(statearr_36257_36328[(2)] = recompile_dependents);

(statearr_36257_36328[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (3))){
var state_36206__$1 = state_36206;
var statearr_36258_36329 = state_36206__$1;
(statearr_36258_36329[(2)] = null);

(statearr_36258_36329[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (12))){
var inst_36096 = (state_36206[(2)]);
var state_36206__$1 = state_36206;
var statearr_36259_36330 = state_36206__$1;
(statearr_36259_36330[(2)] = inst_36096);

(statearr_36259_36330[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (2))){
var inst_36058 = (state_36206[(13)]);
var inst_36065 = cljs.core.seq.call(null,inst_36058);
var inst_36066 = inst_36065;
var inst_36067 = null;
var inst_36068 = (0);
var inst_36069 = (0);
var state_36206__$1 = (function (){var statearr_36260 = state_36206;
(statearr_36260[(7)] = inst_36069);

(statearr_36260[(8)] = inst_36066);

(statearr_36260[(9)] = inst_36068);

(statearr_36260[(10)] = inst_36067);

return statearr_36260;
})();
var statearr_36261_36331 = state_36206__$1;
(statearr_36261_36331[(2)] = null);

(statearr_36261_36331[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (23))){
var inst_36122 = (state_36206[(23)]);
var inst_36119 = (state_36206[(19)]);
var inst_36125 = (state_36206[(26)]);
var inst_36127 = (state_36206[(24)]);
var inst_36123 = (state_36206[(25)]);
var inst_36130 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36132 = (function (){var all_files = inst_36119;
var res_SINGLEQUOTE_ = inst_36122;
var res = inst_36123;
var files_not_loaded = inst_36125;
var dependencies_that_loaded = inst_36127;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36122,inst_36119,inst_36125,inst_36127,inst_36123,inst_36130,state_val_36207,c__32579__auto__,map__36051,map__36051__$1,opts,before_jsload,on_jsload,reload_dependents,map__36052,map__36052__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36131){
var map__36262 = p__36131;
var map__36262__$1 = ((((!((map__36262 == null)))?((((map__36262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36262.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36262):map__36262);
var request_url = cljs.core.get.call(null,map__36262__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36122,inst_36119,inst_36125,inst_36127,inst_36123,inst_36130,state_val_36207,c__32579__auto__,map__36051,map__36051__$1,opts,before_jsload,on_jsload,reload_dependents,map__36052,map__36052__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36133 = cljs.core.reverse.call(null,inst_36127);
var inst_36134 = cljs.core.map.call(null,inst_36132,inst_36133);
var inst_36135 = cljs.core.pr_str.call(null,inst_36134);
var inst_36136 = figwheel.client.utils.log.call(null,inst_36135);
var state_36206__$1 = (function (){var statearr_36264 = state_36206;
(statearr_36264[(31)] = inst_36130);

return statearr_36264;
})();
var statearr_36265_36332 = state_36206__$1;
(statearr_36265_36332[(2)] = inst_36136);

(statearr_36265_36332[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (35))){
var state_36206__$1 = state_36206;
var statearr_36266_36333 = state_36206__$1;
(statearr_36266_36333[(2)] = true);

(statearr_36266_36333[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (19))){
var inst_36109 = (state_36206[(12)]);
var inst_36115 = figwheel.client.file_reloading.expand_files.call(null,inst_36109);
var state_36206__$1 = state_36206;
var statearr_36267_36334 = state_36206__$1;
(statearr_36267_36334[(2)] = inst_36115);

(statearr_36267_36334[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (11))){
var state_36206__$1 = state_36206;
var statearr_36268_36335 = state_36206__$1;
(statearr_36268_36335[(2)] = null);

(statearr_36268_36335[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (9))){
var inst_36098 = (state_36206[(2)]);
var state_36206__$1 = state_36206;
var statearr_36269_36336 = state_36206__$1;
(statearr_36269_36336[(2)] = inst_36098);

(statearr_36269_36336[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (5))){
var inst_36069 = (state_36206[(7)]);
var inst_36068 = (state_36206[(9)]);
var inst_36071 = (inst_36069 < inst_36068);
var inst_36072 = inst_36071;
var state_36206__$1 = state_36206;
if(cljs.core.truth_(inst_36072)){
var statearr_36270_36337 = state_36206__$1;
(statearr_36270_36337[(1)] = (7));

} else {
var statearr_36271_36338 = state_36206__$1;
(statearr_36271_36338[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (14))){
var inst_36079 = (state_36206[(22)]);
var inst_36088 = cljs.core.first.call(null,inst_36079);
var inst_36089 = figwheel.client.file_reloading.eval_body.call(null,inst_36088,opts);
var inst_36090 = cljs.core.next.call(null,inst_36079);
var inst_36066 = inst_36090;
var inst_36067 = null;
var inst_36068 = (0);
var inst_36069 = (0);
var state_36206__$1 = (function (){var statearr_36272 = state_36206;
(statearr_36272[(7)] = inst_36069);

(statearr_36272[(8)] = inst_36066);

(statearr_36272[(9)] = inst_36068);

(statearr_36272[(10)] = inst_36067);

(statearr_36272[(32)] = inst_36089);

return statearr_36272;
})();
var statearr_36273_36339 = state_36206__$1;
(statearr_36273_36339[(2)] = null);

(statearr_36273_36339[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (45))){
var state_36206__$1 = state_36206;
var statearr_36274_36340 = state_36206__$1;
(statearr_36274_36340[(2)] = null);

(statearr_36274_36340[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (26))){
var inst_36122 = (state_36206[(23)]);
var inst_36119 = (state_36206[(19)]);
var inst_36125 = (state_36206[(26)]);
var inst_36127 = (state_36206[(24)]);
var inst_36123 = (state_36206[(25)]);
var inst_36142 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36144 = (function (){var all_files = inst_36119;
var res_SINGLEQUOTE_ = inst_36122;
var res = inst_36123;
var files_not_loaded = inst_36125;
var dependencies_that_loaded = inst_36127;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36122,inst_36119,inst_36125,inst_36127,inst_36123,inst_36142,state_val_36207,c__32579__auto__,map__36051,map__36051__$1,opts,before_jsload,on_jsload,reload_dependents,map__36052,map__36052__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36143){
var map__36275 = p__36143;
var map__36275__$1 = ((((!((map__36275 == null)))?((((map__36275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36275):map__36275);
var namespace = cljs.core.get.call(null,map__36275__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36275__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36122,inst_36119,inst_36125,inst_36127,inst_36123,inst_36142,state_val_36207,c__32579__auto__,map__36051,map__36051__$1,opts,before_jsload,on_jsload,reload_dependents,map__36052,map__36052__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36145 = cljs.core.map.call(null,inst_36144,inst_36123);
var inst_36146 = cljs.core.pr_str.call(null,inst_36145);
var inst_36147 = figwheel.client.utils.log.call(null,inst_36146);
var inst_36148 = (function (){var all_files = inst_36119;
var res_SINGLEQUOTE_ = inst_36122;
var res = inst_36123;
var files_not_loaded = inst_36125;
var dependencies_that_loaded = inst_36127;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36122,inst_36119,inst_36125,inst_36127,inst_36123,inst_36142,inst_36144,inst_36145,inst_36146,inst_36147,state_val_36207,c__32579__auto__,map__36051,map__36051__$1,opts,before_jsload,on_jsload,reload_dependents,map__36052,map__36052__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36122,inst_36119,inst_36125,inst_36127,inst_36123,inst_36142,inst_36144,inst_36145,inst_36146,inst_36147,state_val_36207,c__32579__auto__,map__36051,map__36051__$1,opts,before_jsload,on_jsload,reload_dependents,map__36052,map__36052__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36149 = setTimeout(inst_36148,(10));
var state_36206__$1 = (function (){var statearr_36277 = state_36206;
(statearr_36277[(33)] = inst_36147);

(statearr_36277[(34)] = inst_36142);

return statearr_36277;
})();
var statearr_36278_36341 = state_36206__$1;
(statearr_36278_36341[(2)] = inst_36149);

(statearr_36278_36341[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (16))){
var state_36206__$1 = state_36206;
var statearr_36279_36342 = state_36206__$1;
(statearr_36279_36342[(2)] = reload_dependents);

(statearr_36279_36342[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (38))){
var inst_36159 = (state_36206[(16)]);
var inst_36177 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36159);
var state_36206__$1 = state_36206;
var statearr_36280_36343 = state_36206__$1;
(statearr_36280_36343[(2)] = inst_36177);

(statearr_36280_36343[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (30))){
var state_36206__$1 = state_36206;
var statearr_36281_36344 = state_36206__$1;
(statearr_36281_36344[(2)] = null);

(statearr_36281_36344[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (10))){
var inst_36079 = (state_36206[(22)]);
var inst_36081 = cljs.core.chunked_seq_QMARK_.call(null,inst_36079);
var state_36206__$1 = state_36206;
if(inst_36081){
var statearr_36282_36345 = state_36206__$1;
(statearr_36282_36345[(1)] = (13));

} else {
var statearr_36283_36346 = state_36206__$1;
(statearr_36283_36346[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (18))){
var inst_36113 = (state_36206[(2)]);
var state_36206__$1 = state_36206;
if(cljs.core.truth_(inst_36113)){
var statearr_36284_36347 = state_36206__$1;
(statearr_36284_36347[(1)] = (19));

} else {
var statearr_36285_36348 = state_36206__$1;
(statearr_36285_36348[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (42))){
var state_36206__$1 = state_36206;
var statearr_36286_36349 = state_36206__$1;
(statearr_36286_36349[(2)] = null);

(statearr_36286_36349[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (37))){
var inst_36172 = (state_36206[(2)]);
var state_36206__$1 = state_36206;
var statearr_36287_36350 = state_36206__$1;
(statearr_36287_36350[(2)] = inst_36172);

(statearr_36287_36350[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (8))){
var inst_36066 = (state_36206[(8)]);
var inst_36079 = (state_36206[(22)]);
var inst_36079__$1 = cljs.core.seq.call(null,inst_36066);
var state_36206__$1 = (function (){var statearr_36288 = state_36206;
(statearr_36288[(22)] = inst_36079__$1);

return statearr_36288;
})();
if(inst_36079__$1){
var statearr_36289_36351 = state_36206__$1;
(statearr_36289_36351[(1)] = (10));

} else {
var statearr_36290_36352 = state_36206__$1;
(statearr_36290_36352[(1)] = (11));

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
});})(c__32579__auto__,map__36051,map__36051__$1,opts,before_jsload,on_jsload,reload_dependents,map__36052,map__36052__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32491__auto__,c__32579__auto__,map__36051,map__36051__$1,opts,before_jsload,on_jsload,reload_dependents,map__36052,map__36052__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32492__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32492__auto____0 = (function (){
var statearr_36291 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36291[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32492__auto__);

(statearr_36291[(1)] = (1));

return statearr_36291;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32492__auto____1 = (function (state_36206){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_36206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e36292){if((e36292 instanceof Object)){
var ex__32495__auto__ = e36292;
var statearr_36293_36353 = state_36206;
(statearr_36293_36353[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36354 = state_36206;
state_36206 = G__36354;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32492__auto__ = function(state_36206){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32492__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32492__auto____1.call(this,state_36206);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32492__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32492__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto__,map__36051,map__36051__$1,opts,before_jsload,on_jsload,reload_dependents,map__36052,map__36052__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32581__auto__ = (function (){var statearr_36294 = f__32580__auto__.call(null);
(statearr_36294[(6)] = c__32579__auto__);

return statearr_36294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto__,map__36051,map__36051__$1,opts,before_jsload,on_jsload,reload_dependents,map__36052,map__36052__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32579__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36357,link){
var map__36358 = p__36357;
var map__36358__$1 = ((((!((map__36358 == null)))?((((map__36358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36358):map__36358);
var file = cljs.core.get.call(null,map__36358__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36358,map__36358__$1,file){
return (function (p1__36355_SHARP_,p2__36356_SHARP_){
if(cljs.core._EQ_.call(null,p1__36355_SHARP_,p2__36356_SHARP_)){
return p1__36355_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36358,map__36358__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36361){
var map__36362 = p__36361;
var map__36362__$1 = ((((!((map__36362 == null)))?((((map__36362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36362.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36362):map__36362);
var match_length = cljs.core.get.call(null,map__36362__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36362__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36360_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36360_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36364_SHARP_,p2__36365_SHARP_){
return cljs.core.assoc.call(null,p1__36364_SHARP_,cljs.core.get.call(null,p2__36365_SHARP_,key),p2__36365_SHARP_);
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
var loaded_f_datas_36366 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36366);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36366);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36367,p__36368){
var map__36369 = p__36367;
var map__36369__$1 = ((((!((map__36369 == null)))?((((map__36369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36369):map__36369);
var on_cssload = cljs.core.get.call(null,map__36369__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36370 = p__36368;
var map__36370__$1 = ((((!((map__36370 == null)))?((((map__36370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36370):map__36370);
var files_msg = map__36370__$1;
var files = cljs.core.get.call(null,map__36370__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1504634398171
