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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35738_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35738_SHARP_));
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
var seq__35739 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35740 = null;
var count__35741 = (0);
var i__35742 = (0);
while(true){
if((i__35742 < count__35741)){
var n = cljs.core._nth.call(null,chunk__35740,i__35742);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35743 = seq__35739;
var G__35744 = chunk__35740;
var G__35745 = count__35741;
var G__35746 = (i__35742 + (1));
seq__35739 = G__35743;
chunk__35740 = G__35744;
count__35741 = G__35745;
i__35742 = G__35746;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35739);
if(temp__4657__auto__){
var seq__35739__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35739__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__35739__$1);
var G__35747 = cljs.core.chunk_rest.call(null,seq__35739__$1);
var G__35748 = c__29125__auto__;
var G__35749 = cljs.core.count.call(null,c__29125__auto__);
var G__35750 = (0);
seq__35739 = G__35747;
chunk__35740 = G__35748;
count__35741 = G__35749;
i__35742 = G__35750;
continue;
} else {
var n = cljs.core.first.call(null,seq__35739__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35751 = cljs.core.next.call(null,seq__35739__$1);
var G__35752 = null;
var G__35753 = (0);
var G__35754 = (0);
seq__35739 = G__35751;
chunk__35740 = G__35752;
count__35741 = G__35753;
i__35742 = G__35754;
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

var seq__35764_35772 = cljs.core.seq.call(null,deps);
var chunk__35765_35773 = null;
var count__35766_35774 = (0);
var i__35767_35775 = (0);
while(true){
if((i__35767_35775 < count__35766_35774)){
var dep_35776 = cljs.core._nth.call(null,chunk__35765_35773,i__35767_35775);
topo_sort_helper_STAR_.call(null,dep_35776,(depth + (1)),state);

var G__35777 = seq__35764_35772;
var G__35778 = chunk__35765_35773;
var G__35779 = count__35766_35774;
var G__35780 = (i__35767_35775 + (1));
seq__35764_35772 = G__35777;
chunk__35765_35773 = G__35778;
count__35766_35774 = G__35779;
i__35767_35775 = G__35780;
continue;
} else {
var temp__4657__auto___35781 = cljs.core.seq.call(null,seq__35764_35772);
if(temp__4657__auto___35781){
var seq__35764_35782__$1 = temp__4657__auto___35781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35764_35782__$1)){
var c__29125__auto___35783 = cljs.core.chunk_first.call(null,seq__35764_35782__$1);
var G__35784 = cljs.core.chunk_rest.call(null,seq__35764_35782__$1);
var G__35785 = c__29125__auto___35783;
var G__35786 = cljs.core.count.call(null,c__29125__auto___35783);
var G__35787 = (0);
seq__35764_35772 = G__35784;
chunk__35765_35773 = G__35785;
count__35766_35774 = G__35786;
i__35767_35775 = G__35787;
continue;
} else {
var dep_35788 = cljs.core.first.call(null,seq__35764_35782__$1);
topo_sort_helper_STAR_.call(null,dep_35788,(depth + (1)),state);

var G__35789 = cljs.core.next.call(null,seq__35764_35782__$1);
var G__35790 = null;
var G__35791 = (0);
var G__35792 = (0);
seq__35764_35772 = G__35789;
chunk__35765_35773 = G__35790;
count__35766_35774 = G__35791;
i__35767_35775 = G__35792;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35768){
var vec__35769 = p__35768;
var seq__35770 = cljs.core.seq.call(null,vec__35769);
var first__35771 = cljs.core.first.call(null,seq__35770);
var seq__35770__$1 = cljs.core.next.call(null,seq__35770);
var x = first__35771;
var xs = seq__35770__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35769,seq__35770,first__35771,seq__35770__$1,x,xs,get_deps__$1){
return (function (p1__35755_SHARP_){
return clojure.set.difference.call(null,p1__35755_SHARP_,x);
});})(vec__35769,seq__35770,first__35771,seq__35770__$1,x,xs,get_deps__$1))
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
var seq__35793 = cljs.core.seq.call(null,provides);
var chunk__35794 = null;
var count__35795 = (0);
var i__35796 = (0);
while(true){
if((i__35796 < count__35795)){
var prov = cljs.core._nth.call(null,chunk__35794,i__35796);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35797_35805 = cljs.core.seq.call(null,requires);
var chunk__35798_35806 = null;
var count__35799_35807 = (0);
var i__35800_35808 = (0);
while(true){
if((i__35800_35808 < count__35799_35807)){
var req_35809 = cljs.core._nth.call(null,chunk__35798_35806,i__35800_35808);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35809,prov);

var G__35810 = seq__35797_35805;
var G__35811 = chunk__35798_35806;
var G__35812 = count__35799_35807;
var G__35813 = (i__35800_35808 + (1));
seq__35797_35805 = G__35810;
chunk__35798_35806 = G__35811;
count__35799_35807 = G__35812;
i__35800_35808 = G__35813;
continue;
} else {
var temp__4657__auto___35814 = cljs.core.seq.call(null,seq__35797_35805);
if(temp__4657__auto___35814){
var seq__35797_35815__$1 = temp__4657__auto___35814;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35797_35815__$1)){
var c__29125__auto___35816 = cljs.core.chunk_first.call(null,seq__35797_35815__$1);
var G__35817 = cljs.core.chunk_rest.call(null,seq__35797_35815__$1);
var G__35818 = c__29125__auto___35816;
var G__35819 = cljs.core.count.call(null,c__29125__auto___35816);
var G__35820 = (0);
seq__35797_35805 = G__35817;
chunk__35798_35806 = G__35818;
count__35799_35807 = G__35819;
i__35800_35808 = G__35820;
continue;
} else {
var req_35821 = cljs.core.first.call(null,seq__35797_35815__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35821,prov);

var G__35822 = cljs.core.next.call(null,seq__35797_35815__$1);
var G__35823 = null;
var G__35824 = (0);
var G__35825 = (0);
seq__35797_35805 = G__35822;
chunk__35798_35806 = G__35823;
count__35799_35807 = G__35824;
i__35800_35808 = G__35825;
continue;
}
} else {
}
}
break;
}

var G__35826 = seq__35793;
var G__35827 = chunk__35794;
var G__35828 = count__35795;
var G__35829 = (i__35796 + (1));
seq__35793 = G__35826;
chunk__35794 = G__35827;
count__35795 = G__35828;
i__35796 = G__35829;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35793);
if(temp__4657__auto__){
var seq__35793__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35793__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__35793__$1);
var G__35830 = cljs.core.chunk_rest.call(null,seq__35793__$1);
var G__35831 = c__29125__auto__;
var G__35832 = cljs.core.count.call(null,c__29125__auto__);
var G__35833 = (0);
seq__35793 = G__35830;
chunk__35794 = G__35831;
count__35795 = G__35832;
i__35796 = G__35833;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35793__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35801_35834 = cljs.core.seq.call(null,requires);
var chunk__35802_35835 = null;
var count__35803_35836 = (0);
var i__35804_35837 = (0);
while(true){
if((i__35804_35837 < count__35803_35836)){
var req_35838 = cljs.core._nth.call(null,chunk__35802_35835,i__35804_35837);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35838,prov);

var G__35839 = seq__35801_35834;
var G__35840 = chunk__35802_35835;
var G__35841 = count__35803_35836;
var G__35842 = (i__35804_35837 + (1));
seq__35801_35834 = G__35839;
chunk__35802_35835 = G__35840;
count__35803_35836 = G__35841;
i__35804_35837 = G__35842;
continue;
} else {
var temp__4657__auto___35843__$1 = cljs.core.seq.call(null,seq__35801_35834);
if(temp__4657__auto___35843__$1){
var seq__35801_35844__$1 = temp__4657__auto___35843__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35801_35844__$1)){
var c__29125__auto___35845 = cljs.core.chunk_first.call(null,seq__35801_35844__$1);
var G__35846 = cljs.core.chunk_rest.call(null,seq__35801_35844__$1);
var G__35847 = c__29125__auto___35845;
var G__35848 = cljs.core.count.call(null,c__29125__auto___35845);
var G__35849 = (0);
seq__35801_35834 = G__35846;
chunk__35802_35835 = G__35847;
count__35803_35836 = G__35848;
i__35804_35837 = G__35849;
continue;
} else {
var req_35850 = cljs.core.first.call(null,seq__35801_35844__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35850,prov);

var G__35851 = cljs.core.next.call(null,seq__35801_35844__$1);
var G__35852 = null;
var G__35853 = (0);
var G__35854 = (0);
seq__35801_35834 = G__35851;
chunk__35802_35835 = G__35852;
count__35803_35836 = G__35853;
i__35804_35837 = G__35854;
continue;
}
} else {
}
}
break;
}

var G__35855 = cljs.core.next.call(null,seq__35793__$1);
var G__35856 = null;
var G__35857 = (0);
var G__35858 = (0);
seq__35793 = G__35855;
chunk__35794 = G__35856;
count__35795 = G__35857;
i__35796 = G__35858;
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
var seq__35859_35863 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35860_35864 = null;
var count__35861_35865 = (0);
var i__35862_35866 = (0);
while(true){
if((i__35862_35866 < count__35861_35865)){
var ns_35867 = cljs.core._nth.call(null,chunk__35860_35864,i__35862_35866);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35867);

var G__35868 = seq__35859_35863;
var G__35869 = chunk__35860_35864;
var G__35870 = count__35861_35865;
var G__35871 = (i__35862_35866 + (1));
seq__35859_35863 = G__35868;
chunk__35860_35864 = G__35869;
count__35861_35865 = G__35870;
i__35862_35866 = G__35871;
continue;
} else {
var temp__4657__auto___35872 = cljs.core.seq.call(null,seq__35859_35863);
if(temp__4657__auto___35872){
var seq__35859_35873__$1 = temp__4657__auto___35872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35859_35873__$1)){
var c__29125__auto___35874 = cljs.core.chunk_first.call(null,seq__35859_35873__$1);
var G__35875 = cljs.core.chunk_rest.call(null,seq__35859_35873__$1);
var G__35876 = c__29125__auto___35874;
var G__35877 = cljs.core.count.call(null,c__29125__auto___35874);
var G__35878 = (0);
seq__35859_35863 = G__35875;
chunk__35860_35864 = G__35876;
count__35861_35865 = G__35877;
i__35862_35866 = G__35878;
continue;
} else {
var ns_35879 = cljs.core.first.call(null,seq__35859_35873__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35879);

var G__35880 = cljs.core.next.call(null,seq__35859_35873__$1);
var G__35881 = null;
var G__35882 = (0);
var G__35883 = (0);
seq__35859_35863 = G__35880;
chunk__35860_35864 = G__35881;
count__35861_35865 = G__35882;
i__35862_35866 = G__35883;
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
var G__35884__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35884 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35885__i = 0, G__35885__a = new Array(arguments.length -  0);
while (G__35885__i < G__35885__a.length) {G__35885__a[G__35885__i] = arguments[G__35885__i + 0]; ++G__35885__i;}
  args = new cljs.core.IndexedSeq(G__35885__a,0,null);
} 
return G__35884__delegate.call(this,args);};
G__35884.cljs$lang$maxFixedArity = 0;
G__35884.cljs$lang$applyTo = (function (arglist__35886){
var args = cljs.core.seq(arglist__35886);
return G__35884__delegate(args);
});
G__35884.cljs$core$IFn$_invoke$arity$variadic = G__35884__delegate;
return G__35884;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__35887_SHARP_,p2__35888_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35887_SHARP_)].join('')),p2__35888_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__35889_SHARP_,p2__35890_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35889_SHARP_)].join(''),p2__35890_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35891 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35891.addCallback(((function (G__35891){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__35891))
);

G__35891.addErrback(((function (G__35891){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__35891))
);

return G__35891;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35892 = cljs.core._EQ_;
var expr__35893 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35892.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35893))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__35892,expr__35893){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__35892,expr__35893))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__35892,expr__35893){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35895){if((e35895 instanceof Error)){
var e = e35895;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35895;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__35892,expr__35893))
} else {
if(cljs.core.truth_(pred__35892.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35893))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35892.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__35893))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35892.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35893))){
return ((function (pred__35892,expr__35893){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35896){if((e35896 instanceof Error)){
var e = e35896;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35896;

}
}})());
});
;})(pred__35892,expr__35893))
} else {
return ((function (pred__35892,expr__35893){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35892,expr__35893))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35897,callback){
var map__35898 = p__35897;
var map__35898__$1 = ((((!((map__35898 == null)))?((((map__35898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35898):map__35898);
var file_msg = map__35898__$1;
var request_url = cljs.core.get.call(null,map__35898__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35898,map__35898__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35898,map__35898__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__32568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto__){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto__){
return (function (state_35922){
var state_val_35923 = (state_35922[(1)]);
if((state_val_35923 === (7))){
var inst_35918 = (state_35922[(2)]);
var state_35922__$1 = state_35922;
var statearr_35924_35941 = state_35922__$1;
(statearr_35924_35941[(2)] = inst_35918);

(statearr_35924_35941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35923 === (1))){
var state_35922__$1 = state_35922;
var statearr_35925_35942 = state_35922__$1;
(statearr_35925_35942[(2)] = null);

(statearr_35925_35942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35923 === (4))){
var inst_35902 = (state_35922[(7)]);
var inst_35902__$1 = (state_35922[(2)]);
var state_35922__$1 = (function (){var statearr_35926 = state_35922;
(statearr_35926[(7)] = inst_35902__$1);

return statearr_35926;
})();
if(cljs.core.truth_(inst_35902__$1)){
var statearr_35927_35943 = state_35922__$1;
(statearr_35927_35943[(1)] = (5));

} else {
var statearr_35928_35944 = state_35922__$1;
(statearr_35928_35944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35923 === (6))){
var state_35922__$1 = state_35922;
var statearr_35929_35945 = state_35922__$1;
(statearr_35929_35945[(2)] = null);

(statearr_35929_35945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35923 === (3))){
var inst_35920 = (state_35922[(2)]);
var state_35922__$1 = state_35922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35922__$1,inst_35920);
} else {
if((state_val_35923 === (2))){
var state_35922__$1 = state_35922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35922__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35923 === (11))){
var inst_35914 = (state_35922[(2)]);
var state_35922__$1 = (function (){var statearr_35930 = state_35922;
(statearr_35930[(8)] = inst_35914);

return statearr_35930;
})();
var statearr_35931_35946 = state_35922__$1;
(statearr_35931_35946[(2)] = null);

(statearr_35931_35946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35923 === (9))){
var inst_35908 = (state_35922[(9)]);
var inst_35906 = (state_35922[(10)]);
var inst_35910 = inst_35908.call(null,inst_35906);
var state_35922__$1 = state_35922;
var statearr_35932_35947 = state_35922__$1;
(statearr_35932_35947[(2)] = inst_35910);

(statearr_35932_35947[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35923 === (5))){
var inst_35902 = (state_35922[(7)]);
var inst_35904 = figwheel.client.file_reloading.blocking_load.call(null,inst_35902);
var state_35922__$1 = state_35922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35922__$1,(8),inst_35904);
} else {
if((state_val_35923 === (10))){
var inst_35906 = (state_35922[(10)]);
var inst_35912 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35906);
var state_35922__$1 = state_35922;
var statearr_35933_35948 = state_35922__$1;
(statearr_35933_35948[(2)] = inst_35912);

(statearr_35933_35948[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35923 === (8))){
var inst_35908 = (state_35922[(9)]);
var inst_35902 = (state_35922[(7)]);
var inst_35906 = (state_35922[(2)]);
var inst_35907 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35908__$1 = cljs.core.get.call(null,inst_35907,inst_35902);
var state_35922__$1 = (function (){var statearr_35934 = state_35922;
(statearr_35934[(9)] = inst_35908__$1);

(statearr_35934[(10)] = inst_35906);

return statearr_35934;
})();
if(cljs.core.truth_(inst_35908__$1)){
var statearr_35935_35949 = state_35922__$1;
(statearr_35935_35949[(1)] = (9));

} else {
var statearr_35936_35950 = state_35922__$1;
(statearr_35936_35950[(1)] = (10));

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
});})(c__32568__auto__))
;
return ((function (switch__32480__auto__,c__32568__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32481__auto__ = null;
var figwheel$client$file_reloading$state_machine__32481__auto____0 = (function (){
var statearr_35937 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35937[(0)] = figwheel$client$file_reloading$state_machine__32481__auto__);

(statearr_35937[(1)] = (1));

return statearr_35937;
});
var figwheel$client$file_reloading$state_machine__32481__auto____1 = (function (state_35922){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_35922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e35938){if((e35938 instanceof Object)){
var ex__32484__auto__ = e35938;
var statearr_35939_35951 = state_35922;
(statearr_35939_35951[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35952 = state_35922;
state_35922 = G__35952;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32481__auto__ = function(state_35922){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32481__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32481__auto____1.call(this,state_35922);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32481__auto____0;
figwheel$client$file_reloading$state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32481__auto____1;
return figwheel$client$file_reloading$state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto__))
})();
var state__32570__auto__ = (function (){var statearr_35940 = f__32569__auto__.call(null);
(statearr_35940[(6)] = c__32568__auto__);

return statearr_35940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto__))
);

return c__32568__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35953,callback){
var map__35954 = p__35953;
var map__35954__$1 = ((((!((map__35954 == null)))?((((map__35954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35954.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35954):map__35954);
var file_msg = map__35954__$1;
var namespace = cljs.core.get.call(null,map__35954__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35954,map__35954__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35954,map__35954__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35956){
var map__35957 = p__35956;
var map__35957__$1 = ((((!((map__35957 == null)))?((((map__35957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35957):map__35957);
var file_msg = map__35957__$1;
var namespace = cljs.core.get.call(null,map__35957__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35959){
var map__35960 = p__35959;
var map__35960__$1 = ((((!((map__35960 == null)))?((((map__35960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35960.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35960):map__35960);
var file_msg = map__35960__$1;
var namespace = cljs.core.get.call(null,map__35960__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35962,callback){
var map__35963 = p__35962;
var map__35963__$1 = ((((!((map__35963 == null)))?((((map__35963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35963.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35963):map__35963);
var file_msg = map__35963__$1;
var request_url = cljs.core.get.call(null,map__35963__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35963__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__32568__auto___36013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto___36013,out){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto___36013,out){
return (function (state_35998){
var state_val_35999 = (state_35998[(1)]);
if((state_val_35999 === (1))){
var inst_35972 = cljs.core.seq.call(null,files);
var inst_35973 = cljs.core.first.call(null,inst_35972);
var inst_35974 = cljs.core.next.call(null,inst_35972);
var inst_35975 = files;
var state_35998__$1 = (function (){var statearr_36000 = state_35998;
(statearr_36000[(7)] = inst_35975);

(statearr_36000[(8)] = inst_35973);

(statearr_36000[(9)] = inst_35974);

return statearr_36000;
})();
var statearr_36001_36014 = state_35998__$1;
(statearr_36001_36014[(2)] = null);

(statearr_36001_36014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35999 === (2))){
var inst_35975 = (state_35998[(7)]);
var inst_35981 = (state_35998[(10)]);
var inst_35980 = cljs.core.seq.call(null,inst_35975);
var inst_35981__$1 = cljs.core.first.call(null,inst_35980);
var inst_35982 = cljs.core.next.call(null,inst_35980);
var inst_35983 = (inst_35981__$1 == null);
var inst_35984 = cljs.core.not.call(null,inst_35983);
var state_35998__$1 = (function (){var statearr_36002 = state_35998;
(statearr_36002[(11)] = inst_35982);

(statearr_36002[(10)] = inst_35981__$1);

return statearr_36002;
})();
if(inst_35984){
var statearr_36003_36015 = state_35998__$1;
(statearr_36003_36015[(1)] = (4));

} else {
var statearr_36004_36016 = state_35998__$1;
(statearr_36004_36016[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35999 === (3))){
var inst_35996 = (state_35998[(2)]);
var state_35998__$1 = state_35998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35998__$1,inst_35996);
} else {
if((state_val_35999 === (4))){
var inst_35981 = (state_35998[(10)]);
var inst_35986 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35981);
var state_35998__$1 = state_35998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35998__$1,(7),inst_35986);
} else {
if((state_val_35999 === (5))){
var inst_35992 = cljs.core.async.close_BANG_.call(null,out);
var state_35998__$1 = state_35998;
var statearr_36005_36017 = state_35998__$1;
(statearr_36005_36017[(2)] = inst_35992);

(statearr_36005_36017[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35999 === (6))){
var inst_35994 = (state_35998[(2)]);
var state_35998__$1 = state_35998;
var statearr_36006_36018 = state_35998__$1;
(statearr_36006_36018[(2)] = inst_35994);

(statearr_36006_36018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35999 === (7))){
var inst_35982 = (state_35998[(11)]);
var inst_35988 = (state_35998[(2)]);
var inst_35989 = cljs.core.async.put_BANG_.call(null,out,inst_35988);
var inst_35975 = inst_35982;
var state_35998__$1 = (function (){var statearr_36007 = state_35998;
(statearr_36007[(7)] = inst_35975);

(statearr_36007[(12)] = inst_35989);

return statearr_36007;
})();
var statearr_36008_36019 = state_35998__$1;
(statearr_36008_36019[(2)] = null);

(statearr_36008_36019[(1)] = (2));


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
});})(c__32568__auto___36013,out))
;
return ((function (switch__32480__auto__,c__32568__auto___36013,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32481__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32481__auto____0 = (function (){
var statearr_36009 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36009[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32481__auto__);

(statearr_36009[(1)] = (1));

return statearr_36009;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32481__auto____1 = (function (state_35998){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_35998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e36010){if((e36010 instanceof Object)){
var ex__32484__auto__ = e36010;
var statearr_36011_36020 = state_35998;
(statearr_36011_36020[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36021 = state_35998;
state_35998 = G__36021;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32481__auto__ = function(state_35998){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32481__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32481__auto____1.call(this,state_35998);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32481__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32481__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto___36013,out))
})();
var state__32570__auto__ = (function (){var statearr_36012 = f__32569__auto__.call(null);
(statearr_36012[(6)] = c__32568__auto___36013);

return statearr_36012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto___36013,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36022,opts){
var map__36023 = p__36022;
var map__36023__$1 = ((((!((map__36023 == null)))?((((map__36023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36023.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36023):map__36023);
var eval_body = cljs.core.get.call(null,map__36023__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36023__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e36025){var e = e36025;
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
return (function (p1__36026_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36026_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__36027){
var vec__36028 = p__36027;
var k = cljs.core.nth.call(null,vec__36028,(0),null);
var v = cljs.core.nth.call(null,vec__36028,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36031){
var vec__36032 = p__36031;
var k = cljs.core.nth.call(null,vec__36032,(0),null);
var v = cljs.core.nth.call(null,vec__36032,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36038,p__36039){
var map__36040 = p__36038;
var map__36040__$1 = ((((!((map__36040 == null)))?((((map__36040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36040.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36040):map__36040);
var opts = map__36040__$1;
var before_jsload = cljs.core.get.call(null,map__36040__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36040__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36040__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36041 = p__36039;
var map__36041__$1 = ((((!((map__36041 == null)))?((((map__36041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36041):map__36041);
var msg = map__36041__$1;
var files = cljs.core.get.call(null,map__36041__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36041__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36041__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto__,map__36040,map__36040__$1,opts,before_jsload,on_jsload,reload_dependents,map__36041,map__36041__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto__,map__36040,map__36040__$1,opts,before_jsload,on_jsload,reload_dependents,map__36041,map__36041__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36195){
var state_val_36196 = (state_36195[(1)]);
if((state_val_36196 === (7))){
var inst_36058 = (state_36195[(7)]);
var inst_36055 = (state_36195[(8)]);
var inst_36057 = (state_36195[(9)]);
var inst_36056 = (state_36195[(10)]);
var inst_36063 = cljs.core._nth.call(null,inst_36056,inst_36058);
var inst_36064 = figwheel.client.file_reloading.eval_body.call(null,inst_36063,opts);
var inst_36065 = (inst_36058 + (1));
var tmp36197 = inst_36055;
var tmp36198 = inst_36057;
var tmp36199 = inst_36056;
var inst_36055__$1 = tmp36197;
var inst_36056__$1 = tmp36199;
var inst_36057__$1 = tmp36198;
var inst_36058__$1 = inst_36065;
var state_36195__$1 = (function (){var statearr_36200 = state_36195;
(statearr_36200[(7)] = inst_36058__$1);

(statearr_36200[(11)] = inst_36064);

(statearr_36200[(8)] = inst_36055__$1);

(statearr_36200[(9)] = inst_36057__$1);

(statearr_36200[(10)] = inst_36056__$1);

return statearr_36200;
})();
var statearr_36201_36284 = state_36195__$1;
(statearr_36201_36284[(2)] = null);

(statearr_36201_36284[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (20))){
var inst_36098 = (state_36195[(12)]);
var inst_36106 = figwheel.client.file_reloading.sort_files.call(null,inst_36098);
var state_36195__$1 = state_36195;
var statearr_36202_36285 = state_36195__$1;
(statearr_36202_36285[(2)] = inst_36106);

(statearr_36202_36285[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (27))){
var state_36195__$1 = state_36195;
var statearr_36203_36286 = state_36195__$1;
(statearr_36203_36286[(2)] = null);

(statearr_36203_36286[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (1))){
var inst_36047 = (state_36195[(13)]);
var inst_36044 = before_jsload.call(null,files);
var inst_36045 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36046 = (function (){return ((function (inst_36047,inst_36044,inst_36045,state_val_36196,c__32568__auto__,map__36040,map__36040__$1,opts,before_jsload,on_jsload,reload_dependents,map__36041,map__36041__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36035_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36035_SHARP_);
});
;})(inst_36047,inst_36044,inst_36045,state_val_36196,c__32568__auto__,map__36040,map__36040__$1,opts,before_jsload,on_jsload,reload_dependents,map__36041,map__36041__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36047__$1 = cljs.core.filter.call(null,inst_36046,files);
var inst_36048 = cljs.core.not_empty.call(null,inst_36047__$1);
var state_36195__$1 = (function (){var statearr_36204 = state_36195;
(statearr_36204[(14)] = inst_36044);

(statearr_36204[(13)] = inst_36047__$1);

(statearr_36204[(15)] = inst_36045);

return statearr_36204;
})();
if(cljs.core.truth_(inst_36048)){
var statearr_36205_36287 = state_36195__$1;
(statearr_36205_36287[(1)] = (2));

} else {
var statearr_36206_36288 = state_36195__$1;
(statearr_36206_36288[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (24))){
var state_36195__$1 = state_36195;
var statearr_36207_36289 = state_36195__$1;
(statearr_36207_36289[(2)] = null);

(statearr_36207_36289[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (39))){
var inst_36148 = (state_36195[(16)]);
var state_36195__$1 = state_36195;
var statearr_36208_36290 = state_36195__$1;
(statearr_36208_36290[(2)] = inst_36148);

(statearr_36208_36290[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (46))){
var inst_36190 = (state_36195[(2)]);
var state_36195__$1 = state_36195;
var statearr_36209_36291 = state_36195__$1;
(statearr_36209_36291[(2)] = inst_36190);

(statearr_36209_36291[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (4))){
var inst_36092 = (state_36195[(2)]);
var inst_36093 = cljs.core.List.EMPTY;
var inst_36094 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36093);
var inst_36095 = (function (){return ((function (inst_36092,inst_36093,inst_36094,state_val_36196,c__32568__auto__,map__36040,map__36040__$1,opts,before_jsload,on_jsload,reload_dependents,map__36041,map__36041__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36036_SHARP_){
var and__28274__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36036_SHARP_);
if(cljs.core.truth_(and__28274__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36036_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36036_SHARP_)));
} else {
return and__28274__auto__;
}
});
;})(inst_36092,inst_36093,inst_36094,state_val_36196,c__32568__auto__,map__36040,map__36040__$1,opts,before_jsload,on_jsload,reload_dependents,map__36041,map__36041__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36096 = cljs.core.filter.call(null,inst_36095,files);
var inst_36097 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36098 = cljs.core.concat.call(null,inst_36096,inst_36097);
var state_36195__$1 = (function (){var statearr_36210 = state_36195;
(statearr_36210[(17)] = inst_36092);

(statearr_36210[(12)] = inst_36098);

(statearr_36210[(18)] = inst_36094);

return statearr_36210;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36211_36292 = state_36195__$1;
(statearr_36211_36292[(1)] = (16));

} else {
var statearr_36212_36293 = state_36195__$1;
(statearr_36212_36293[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (15))){
var inst_36082 = (state_36195[(2)]);
var state_36195__$1 = state_36195;
var statearr_36213_36294 = state_36195__$1;
(statearr_36213_36294[(2)] = inst_36082);

(statearr_36213_36294[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (21))){
var inst_36108 = (state_36195[(19)]);
var inst_36108__$1 = (state_36195[(2)]);
var inst_36109 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36108__$1);
var state_36195__$1 = (function (){var statearr_36214 = state_36195;
(statearr_36214[(19)] = inst_36108__$1);

return statearr_36214;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36195__$1,(22),inst_36109);
} else {
if((state_val_36196 === (31))){
var inst_36193 = (state_36195[(2)]);
var state_36195__$1 = state_36195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36195__$1,inst_36193);
} else {
if((state_val_36196 === (32))){
var inst_36148 = (state_36195[(16)]);
var inst_36153 = inst_36148.cljs$lang$protocol_mask$partition0$;
var inst_36154 = (inst_36153 & (64));
var inst_36155 = inst_36148.cljs$core$ISeq$;
var inst_36156 = (cljs.core.PROTOCOL_SENTINEL === inst_36155);
var inst_36157 = (inst_36154) || (inst_36156);
var state_36195__$1 = state_36195;
if(cljs.core.truth_(inst_36157)){
var statearr_36215_36295 = state_36195__$1;
(statearr_36215_36295[(1)] = (35));

} else {
var statearr_36216_36296 = state_36195__$1;
(statearr_36216_36296[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (40))){
var inst_36170 = (state_36195[(20)]);
var inst_36169 = (state_36195[(2)]);
var inst_36170__$1 = cljs.core.get.call(null,inst_36169,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36171 = cljs.core.get.call(null,inst_36169,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36172 = cljs.core.not_empty.call(null,inst_36170__$1);
var state_36195__$1 = (function (){var statearr_36217 = state_36195;
(statearr_36217[(21)] = inst_36171);

(statearr_36217[(20)] = inst_36170__$1);

return statearr_36217;
})();
if(cljs.core.truth_(inst_36172)){
var statearr_36218_36297 = state_36195__$1;
(statearr_36218_36297[(1)] = (41));

} else {
var statearr_36219_36298 = state_36195__$1;
(statearr_36219_36298[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (33))){
var state_36195__$1 = state_36195;
var statearr_36220_36299 = state_36195__$1;
(statearr_36220_36299[(2)] = false);

(statearr_36220_36299[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (13))){
var inst_36068 = (state_36195[(22)]);
var inst_36072 = cljs.core.chunk_first.call(null,inst_36068);
var inst_36073 = cljs.core.chunk_rest.call(null,inst_36068);
var inst_36074 = cljs.core.count.call(null,inst_36072);
var inst_36055 = inst_36073;
var inst_36056 = inst_36072;
var inst_36057 = inst_36074;
var inst_36058 = (0);
var state_36195__$1 = (function (){var statearr_36221 = state_36195;
(statearr_36221[(7)] = inst_36058);

(statearr_36221[(8)] = inst_36055);

(statearr_36221[(9)] = inst_36057);

(statearr_36221[(10)] = inst_36056);

return statearr_36221;
})();
var statearr_36222_36300 = state_36195__$1;
(statearr_36222_36300[(2)] = null);

(statearr_36222_36300[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (22))){
var inst_36112 = (state_36195[(23)]);
var inst_36111 = (state_36195[(24)]);
var inst_36108 = (state_36195[(19)]);
var inst_36116 = (state_36195[(25)]);
var inst_36111__$1 = (state_36195[(2)]);
var inst_36112__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36111__$1);
var inst_36113 = (function (){var all_files = inst_36108;
var res_SINGLEQUOTE_ = inst_36111__$1;
var res = inst_36112__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36112,inst_36111,inst_36108,inst_36116,inst_36111__$1,inst_36112__$1,state_val_36196,c__32568__auto__,map__36040,map__36040__$1,opts,before_jsload,on_jsload,reload_dependents,map__36041,map__36041__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36037_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36037_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36112,inst_36111,inst_36108,inst_36116,inst_36111__$1,inst_36112__$1,state_val_36196,c__32568__auto__,map__36040,map__36040__$1,opts,before_jsload,on_jsload,reload_dependents,map__36041,map__36041__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36114 = cljs.core.filter.call(null,inst_36113,inst_36111__$1);
var inst_36115 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36116__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36115);
var inst_36117 = cljs.core.not_empty.call(null,inst_36116__$1);
var state_36195__$1 = (function (){var statearr_36223 = state_36195;
(statearr_36223[(23)] = inst_36112__$1);

(statearr_36223[(26)] = inst_36114);

(statearr_36223[(24)] = inst_36111__$1);

(statearr_36223[(25)] = inst_36116__$1);

return statearr_36223;
})();
if(cljs.core.truth_(inst_36117)){
var statearr_36224_36301 = state_36195__$1;
(statearr_36224_36301[(1)] = (23));

} else {
var statearr_36225_36302 = state_36195__$1;
(statearr_36225_36302[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (36))){
var state_36195__$1 = state_36195;
var statearr_36226_36303 = state_36195__$1;
(statearr_36226_36303[(2)] = false);

(statearr_36226_36303[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (41))){
var inst_36170 = (state_36195[(20)]);
var inst_36174 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36175 = cljs.core.map.call(null,inst_36174,inst_36170);
var inst_36176 = cljs.core.pr_str.call(null,inst_36175);
var inst_36177 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36176)].join('');
var inst_36178 = figwheel.client.utils.log.call(null,inst_36177);
var state_36195__$1 = state_36195;
var statearr_36227_36304 = state_36195__$1;
(statearr_36227_36304[(2)] = inst_36178);

(statearr_36227_36304[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (43))){
var inst_36171 = (state_36195[(21)]);
var inst_36181 = (state_36195[(2)]);
var inst_36182 = cljs.core.not_empty.call(null,inst_36171);
var state_36195__$1 = (function (){var statearr_36228 = state_36195;
(statearr_36228[(27)] = inst_36181);

return statearr_36228;
})();
if(cljs.core.truth_(inst_36182)){
var statearr_36229_36305 = state_36195__$1;
(statearr_36229_36305[(1)] = (44));

} else {
var statearr_36230_36306 = state_36195__$1;
(statearr_36230_36306[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (29))){
var inst_36112 = (state_36195[(23)]);
var inst_36114 = (state_36195[(26)]);
var inst_36148 = (state_36195[(16)]);
var inst_36111 = (state_36195[(24)]);
var inst_36108 = (state_36195[(19)]);
var inst_36116 = (state_36195[(25)]);
var inst_36144 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36147 = (function (){var all_files = inst_36108;
var res_SINGLEQUOTE_ = inst_36111;
var res = inst_36112;
var files_not_loaded = inst_36114;
var dependencies_that_loaded = inst_36116;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36112,inst_36114,inst_36148,inst_36111,inst_36108,inst_36116,inst_36144,state_val_36196,c__32568__auto__,map__36040,map__36040__$1,opts,before_jsload,on_jsload,reload_dependents,map__36041,map__36041__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36146){
var map__36231 = p__36146;
var map__36231__$1 = ((((!((map__36231 == null)))?((((map__36231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36231):map__36231);
var namespace = cljs.core.get.call(null,map__36231__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36112,inst_36114,inst_36148,inst_36111,inst_36108,inst_36116,inst_36144,state_val_36196,c__32568__auto__,map__36040,map__36040__$1,opts,before_jsload,on_jsload,reload_dependents,map__36041,map__36041__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36148__$1 = cljs.core.group_by.call(null,inst_36147,inst_36114);
var inst_36150 = (inst_36148__$1 == null);
var inst_36151 = cljs.core.not.call(null,inst_36150);
var state_36195__$1 = (function (){var statearr_36233 = state_36195;
(statearr_36233[(16)] = inst_36148__$1);

(statearr_36233[(28)] = inst_36144);

return statearr_36233;
})();
if(inst_36151){
var statearr_36234_36307 = state_36195__$1;
(statearr_36234_36307[(1)] = (32));

} else {
var statearr_36235_36308 = state_36195__$1;
(statearr_36235_36308[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (44))){
var inst_36171 = (state_36195[(21)]);
var inst_36184 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36171);
var inst_36185 = cljs.core.pr_str.call(null,inst_36184);
var inst_36186 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36185)].join('');
var inst_36187 = figwheel.client.utils.log.call(null,inst_36186);
var state_36195__$1 = state_36195;
var statearr_36236_36309 = state_36195__$1;
(statearr_36236_36309[(2)] = inst_36187);

(statearr_36236_36309[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (6))){
var inst_36089 = (state_36195[(2)]);
var state_36195__$1 = state_36195;
var statearr_36237_36310 = state_36195__$1;
(statearr_36237_36310[(2)] = inst_36089);

(statearr_36237_36310[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (28))){
var inst_36114 = (state_36195[(26)]);
var inst_36141 = (state_36195[(2)]);
var inst_36142 = cljs.core.not_empty.call(null,inst_36114);
var state_36195__$1 = (function (){var statearr_36238 = state_36195;
(statearr_36238[(29)] = inst_36141);

return statearr_36238;
})();
if(cljs.core.truth_(inst_36142)){
var statearr_36239_36311 = state_36195__$1;
(statearr_36239_36311[(1)] = (29));

} else {
var statearr_36240_36312 = state_36195__$1;
(statearr_36240_36312[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (25))){
var inst_36112 = (state_36195[(23)]);
var inst_36128 = (state_36195[(2)]);
var inst_36129 = cljs.core.not_empty.call(null,inst_36112);
var state_36195__$1 = (function (){var statearr_36241 = state_36195;
(statearr_36241[(30)] = inst_36128);

return statearr_36241;
})();
if(cljs.core.truth_(inst_36129)){
var statearr_36242_36313 = state_36195__$1;
(statearr_36242_36313[(1)] = (26));

} else {
var statearr_36243_36314 = state_36195__$1;
(statearr_36243_36314[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (34))){
var inst_36164 = (state_36195[(2)]);
var state_36195__$1 = state_36195;
if(cljs.core.truth_(inst_36164)){
var statearr_36244_36315 = state_36195__$1;
(statearr_36244_36315[(1)] = (38));

} else {
var statearr_36245_36316 = state_36195__$1;
(statearr_36245_36316[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (17))){
var state_36195__$1 = state_36195;
var statearr_36246_36317 = state_36195__$1;
(statearr_36246_36317[(2)] = recompile_dependents);

(statearr_36246_36317[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (3))){
var state_36195__$1 = state_36195;
var statearr_36247_36318 = state_36195__$1;
(statearr_36247_36318[(2)] = null);

(statearr_36247_36318[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (12))){
var inst_36085 = (state_36195[(2)]);
var state_36195__$1 = state_36195;
var statearr_36248_36319 = state_36195__$1;
(statearr_36248_36319[(2)] = inst_36085);

(statearr_36248_36319[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (2))){
var inst_36047 = (state_36195[(13)]);
var inst_36054 = cljs.core.seq.call(null,inst_36047);
var inst_36055 = inst_36054;
var inst_36056 = null;
var inst_36057 = (0);
var inst_36058 = (0);
var state_36195__$1 = (function (){var statearr_36249 = state_36195;
(statearr_36249[(7)] = inst_36058);

(statearr_36249[(8)] = inst_36055);

(statearr_36249[(9)] = inst_36057);

(statearr_36249[(10)] = inst_36056);

return statearr_36249;
})();
var statearr_36250_36320 = state_36195__$1;
(statearr_36250_36320[(2)] = null);

(statearr_36250_36320[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (23))){
var inst_36112 = (state_36195[(23)]);
var inst_36114 = (state_36195[(26)]);
var inst_36111 = (state_36195[(24)]);
var inst_36108 = (state_36195[(19)]);
var inst_36116 = (state_36195[(25)]);
var inst_36119 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36121 = (function (){var all_files = inst_36108;
var res_SINGLEQUOTE_ = inst_36111;
var res = inst_36112;
var files_not_loaded = inst_36114;
var dependencies_that_loaded = inst_36116;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36112,inst_36114,inst_36111,inst_36108,inst_36116,inst_36119,state_val_36196,c__32568__auto__,map__36040,map__36040__$1,opts,before_jsload,on_jsload,reload_dependents,map__36041,map__36041__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36120){
var map__36251 = p__36120;
var map__36251__$1 = ((((!((map__36251 == null)))?((((map__36251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36251.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36251):map__36251);
var request_url = cljs.core.get.call(null,map__36251__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36112,inst_36114,inst_36111,inst_36108,inst_36116,inst_36119,state_val_36196,c__32568__auto__,map__36040,map__36040__$1,opts,before_jsload,on_jsload,reload_dependents,map__36041,map__36041__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36122 = cljs.core.reverse.call(null,inst_36116);
var inst_36123 = cljs.core.map.call(null,inst_36121,inst_36122);
var inst_36124 = cljs.core.pr_str.call(null,inst_36123);
var inst_36125 = figwheel.client.utils.log.call(null,inst_36124);
var state_36195__$1 = (function (){var statearr_36253 = state_36195;
(statearr_36253[(31)] = inst_36119);

return statearr_36253;
})();
var statearr_36254_36321 = state_36195__$1;
(statearr_36254_36321[(2)] = inst_36125);

(statearr_36254_36321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (35))){
var state_36195__$1 = state_36195;
var statearr_36255_36322 = state_36195__$1;
(statearr_36255_36322[(2)] = true);

(statearr_36255_36322[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (19))){
var inst_36098 = (state_36195[(12)]);
var inst_36104 = figwheel.client.file_reloading.expand_files.call(null,inst_36098);
var state_36195__$1 = state_36195;
var statearr_36256_36323 = state_36195__$1;
(statearr_36256_36323[(2)] = inst_36104);

(statearr_36256_36323[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (11))){
var state_36195__$1 = state_36195;
var statearr_36257_36324 = state_36195__$1;
(statearr_36257_36324[(2)] = null);

(statearr_36257_36324[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (9))){
var inst_36087 = (state_36195[(2)]);
var state_36195__$1 = state_36195;
var statearr_36258_36325 = state_36195__$1;
(statearr_36258_36325[(2)] = inst_36087);

(statearr_36258_36325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (5))){
var inst_36058 = (state_36195[(7)]);
var inst_36057 = (state_36195[(9)]);
var inst_36060 = (inst_36058 < inst_36057);
var inst_36061 = inst_36060;
var state_36195__$1 = state_36195;
if(cljs.core.truth_(inst_36061)){
var statearr_36259_36326 = state_36195__$1;
(statearr_36259_36326[(1)] = (7));

} else {
var statearr_36260_36327 = state_36195__$1;
(statearr_36260_36327[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (14))){
var inst_36068 = (state_36195[(22)]);
var inst_36077 = cljs.core.first.call(null,inst_36068);
var inst_36078 = figwheel.client.file_reloading.eval_body.call(null,inst_36077,opts);
var inst_36079 = cljs.core.next.call(null,inst_36068);
var inst_36055 = inst_36079;
var inst_36056 = null;
var inst_36057 = (0);
var inst_36058 = (0);
var state_36195__$1 = (function (){var statearr_36261 = state_36195;
(statearr_36261[(7)] = inst_36058);

(statearr_36261[(8)] = inst_36055);

(statearr_36261[(32)] = inst_36078);

(statearr_36261[(9)] = inst_36057);

(statearr_36261[(10)] = inst_36056);

return statearr_36261;
})();
var statearr_36262_36328 = state_36195__$1;
(statearr_36262_36328[(2)] = null);

(statearr_36262_36328[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (45))){
var state_36195__$1 = state_36195;
var statearr_36263_36329 = state_36195__$1;
(statearr_36263_36329[(2)] = null);

(statearr_36263_36329[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (26))){
var inst_36112 = (state_36195[(23)]);
var inst_36114 = (state_36195[(26)]);
var inst_36111 = (state_36195[(24)]);
var inst_36108 = (state_36195[(19)]);
var inst_36116 = (state_36195[(25)]);
var inst_36131 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36133 = (function (){var all_files = inst_36108;
var res_SINGLEQUOTE_ = inst_36111;
var res = inst_36112;
var files_not_loaded = inst_36114;
var dependencies_that_loaded = inst_36116;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36112,inst_36114,inst_36111,inst_36108,inst_36116,inst_36131,state_val_36196,c__32568__auto__,map__36040,map__36040__$1,opts,before_jsload,on_jsload,reload_dependents,map__36041,map__36041__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36132){
var map__36264 = p__36132;
var map__36264__$1 = ((((!((map__36264 == null)))?((((map__36264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36264):map__36264);
var namespace = cljs.core.get.call(null,map__36264__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36264__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36112,inst_36114,inst_36111,inst_36108,inst_36116,inst_36131,state_val_36196,c__32568__auto__,map__36040,map__36040__$1,opts,before_jsload,on_jsload,reload_dependents,map__36041,map__36041__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36134 = cljs.core.map.call(null,inst_36133,inst_36112);
var inst_36135 = cljs.core.pr_str.call(null,inst_36134);
var inst_36136 = figwheel.client.utils.log.call(null,inst_36135);
var inst_36137 = (function (){var all_files = inst_36108;
var res_SINGLEQUOTE_ = inst_36111;
var res = inst_36112;
var files_not_loaded = inst_36114;
var dependencies_that_loaded = inst_36116;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36112,inst_36114,inst_36111,inst_36108,inst_36116,inst_36131,inst_36133,inst_36134,inst_36135,inst_36136,state_val_36196,c__32568__auto__,map__36040,map__36040__$1,opts,before_jsload,on_jsload,reload_dependents,map__36041,map__36041__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36112,inst_36114,inst_36111,inst_36108,inst_36116,inst_36131,inst_36133,inst_36134,inst_36135,inst_36136,state_val_36196,c__32568__auto__,map__36040,map__36040__$1,opts,before_jsload,on_jsload,reload_dependents,map__36041,map__36041__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36138 = setTimeout(inst_36137,(10));
var state_36195__$1 = (function (){var statearr_36266 = state_36195;
(statearr_36266[(33)] = inst_36136);

(statearr_36266[(34)] = inst_36131);

return statearr_36266;
})();
var statearr_36267_36330 = state_36195__$1;
(statearr_36267_36330[(2)] = inst_36138);

(statearr_36267_36330[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (16))){
var state_36195__$1 = state_36195;
var statearr_36268_36331 = state_36195__$1;
(statearr_36268_36331[(2)] = reload_dependents);

(statearr_36268_36331[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (38))){
var inst_36148 = (state_36195[(16)]);
var inst_36166 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36148);
var state_36195__$1 = state_36195;
var statearr_36269_36332 = state_36195__$1;
(statearr_36269_36332[(2)] = inst_36166);

(statearr_36269_36332[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (30))){
var state_36195__$1 = state_36195;
var statearr_36270_36333 = state_36195__$1;
(statearr_36270_36333[(2)] = null);

(statearr_36270_36333[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (10))){
var inst_36068 = (state_36195[(22)]);
var inst_36070 = cljs.core.chunked_seq_QMARK_.call(null,inst_36068);
var state_36195__$1 = state_36195;
if(inst_36070){
var statearr_36271_36334 = state_36195__$1;
(statearr_36271_36334[(1)] = (13));

} else {
var statearr_36272_36335 = state_36195__$1;
(statearr_36272_36335[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (18))){
var inst_36102 = (state_36195[(2)]);
var state_36195__$1 = state_36195;
if(cljs.core.truth_(inst_36102)){
var statearr_36273_36336 = state_36195__$1;
(statearr_36273_36336[(1)] = (19));

} else {
var statearr_36274_36337 = state_36195__$1;
(statearr_36274_36337[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (42))){
var state_36195__$1 = state_36195;
var statearr_36275_36338 = state_36195__$1;
(statearr_36275_36338[(2)] = null);

(statearr_36275_36338[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (37))){
var inst_36161 = (state_36195[(2)]);
var state_36195__$1 = state_36195;
var statearr_36276_36339 = state_36195__$1;
(statearr_36276_36339[(2)] = inst_36161);

(statearr_36276_36339[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (8))){
var inst_36055 = (state_36195[(8)]);
var inst_36068 = (state_36195[(22)]);
var inst_36068__$1 = cljs.core.seq.call(null,inst_36055);
var state_36195__$1 = (function (){var statearr_36277 = state_36195;
(statearr_36277[(22)] = inst_36068__$1);

return statearr_36277;
})();
if(inst_36068__$1){
var statearr_36278_36340 = state_36195__$1;
(statearr_36278_36340[(1)] = (10));

} else {
var statearr_36279_36341 = state_36195__$1;
(statearr_36279_36341[(1)] = (11));

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
});})(c__32568__auto__,map__36040,map__36040__$1,opts,before_jsload,on_jsload,reload_dependents,map__36041,map__36041__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32480__auto__,c__32568__auto__,map__36040,map__36040__$1,opts,before_jsload,on_jsload,reload_dependents,map__36041,map__36041__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32481__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32481__auto____0 = (function (){
var statearr_36280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36280[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32481__auto__);

(statearr_36280[(1)] = (1));

return statearr_36280;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32481__auto____1 = (function (state_36195){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_36195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e36281){if((e36281 instanceof Object)){
var ex__32484__auto__ = e36281;
var statearr_36282_36342 = state_36195;
(statearr_36282_36342[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36343 = state_36195;
state_36195 = G__36343;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32481__auto__ = function(state_36195){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32481__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32481__auto____1.call(this,state_36195);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32481__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32481__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto__,map__36040,map__36040__$1,opts,before_jsload,on_jsload,reload_dependents,map__36041,map__36041__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32570__auto__ = (function (){var statearr_36283 = f__32569__auto__.call(null);
(statearr_36283[(6)] = c__32568__auto__);

return statearr_36283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto__,map__36040,map__36040__$1,opts,before_jsload,on_jsload,reload_dependents,map__36041,map__36041__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32568__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36346,link){
var map__36347 = p__36346;
var map__36347__$1 = ((((!((map__36347 == null)))?((((map__36347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36347.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36347):map__36347);
var file = cljs.core.get.call(null,map__36347__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36347,map__36347__$1,file){
return (function (p1__36344_SHARP_,p2__36345_SHARP_){
if(cljs.core._EQ_.call(null,p1__36344_SHARP_,p2__36345_SHARP_)){
return p1__36344_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36347,map__36347__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36350){
var map__36351 = p__36350;
var map__36351__$1 = ((((!((map__36351 == null)))?((((map__36351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36351):map__36351);
var match_length = cljs.core.get.call(null,map__36351__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36351__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36349_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36349_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36353_SHARP_,p2__36354_SHARP_){
return cljs.core.assoc.call(null,p1__36353_SHARP_,cljs.core.get.call(null,p2__36354_SHARP_,key),p2__36354_SHARP_);
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
var loaded_f_datas_36355 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36355);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36355);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36356,p__36357){
var map__36358 = p__36356;
var map__36358__$1 = ((((!((map__36358 == null)))?((((map__36358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36358):map__36358);
var on_cssload = cljs.core.get.call(null,map__36358__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36359 = p__36357;
var map__36359__$1 = ((((!((map__36359 == null)))?((((map__36359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36359.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36359):map__36359);
var files_msg = map__36359__$1;
var files = cljs.core.get.call(null,map__36359__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1504549425324
