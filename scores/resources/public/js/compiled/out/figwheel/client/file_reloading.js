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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35733_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35733_SHARP_));
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
var seq__35734 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35735 = null;
var count__35736 = (0);
var i__35737 = (0);
while(true){
if((i__35737 < count__35736)){
var n = cljs.core._nth.call(null,chunk__35735,i__35737);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35738 = seq__35734;
var G__35739 = chunk__35735;
var G__35740 = count__35736;
var G__35741 = (i__35737 + (1));
seq__35734 = G__35738;
chunk__35735 = G__35739;
count__35736 = G__35740;
i__35737 = G__35741;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35734);
if(temp__4657__auto__){
var seq__35734__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35734__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__35734__$1);
var G__35742 = cljs.core.chunk_rest.call(null,seq__35734__$1);
var G__35743 = c__29125__auto__;
var G__35744 = cljs.core.count.call(null,c__29125__auto__);
var G__35745 = (0);
seq__35734 = G__35742;
chunk__35735 = G__35743;
count__35736 = G__35744;
i__35737 = G__35745;
continue;
} else {
var n = cljs.core.first.call(null,seq__35734__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35746 = cljs.core.next.call(null,seq__35734__$1);
var G__35747 = null;
var G__35748 = (0);
var G__35749 = (0);
seq__35734 = G__35746;
chunk__35735 = G__35747;
count__35736 = G__35748;
i__35737 = G__35749;
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

var seq__35759_35767 = cljs.core.seq.call(null,deps);
var chunk__35760_35768 = null;
var count__35761_35769 = (0);
var i__35762_35770 = (0);
while(true){
if((i__35762_35770 < count__35761_35769)){
var dep_35771 = cljs.core._nth.call(null,chunk__35760_35768,i__35762_35770);
topo_sort_helper_STAR_.call(null,dep_35771,(depth + (1)),state);

var G__35772 = seq__35759_35767;
var G__35773 = chunk__35760_35768;
var G__35774 = count__35761_35769;
var G__35775 = (i__35762_35770 + (1));
seq__35759_35767 = G__35772;
chunk__35760_35768 = G__35773;
count__35761_35769 = G__35774;
i__35762_35770 = G__35775;
continue;
} else {
var temp__4657__auto___35776 = cljs.core.seq.call(null,seq__35759_35767);
if(temp__4657__auto___35776){
var seq__35759_35777__$1 = temp__4657__auto___35776;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35759_35777__$1)){
var c__29125__auto___35778 = cljs.core.chunk_first.call(null,seq__35759_35777__$1);
var G__35779 = cljs.core.chunk_rest.call(null,seq__35759_35777__$1);
var G__35780 = c__29125__auto___35778;
var G__35781 = cljs.core.count.call(null,c__29125__auto___35778);
var G__35782 = (0);
seq__35759_35767 = G__35779;
chunk__35760_35768 = G__35780;
count__35761_35769 = G__35781;
i__35762_35770 = G__35782;
continue;
} else {
var dep_35783 = cljs.core.first.call(null,seq__35759_35777__$1);
topo_sort_helper_STAR_.call(null,dep_35783,(depth + (1)),state);

var G__35784 = cljs.core.next.call(null,seq__35759_35777__$1);
var G__35785 = null;
var G__35786 = (0);
var G__35787 = (0);
seq__35759_35767 = G__35784;
chunk__35760_35768 = G__35785;
count__35761_35769 = G__35786;
i__35762_35770 = G__35787;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35763){
var vec__35764 = p__35763;
var seq__35765 = cljs.core.seq.call(null,vec__35764);
var first__35766 = cljs.core.first.call(null,seq__35765);
var seq__35765__$1 = cljs.core.next.call(null,seq__35765);
var x = first__35766;
var xs = seq__35765__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35764,seq__35765,first__35766,seq__35765__$1,x,xs,get_deps__$1){
return (function (p1__35750_SHARP_){
return clojure.set.difference.call(null,p1__35750_SHARP_,x);
});})(vec__35764,seq__35765,first__35766,seq__35765__$1,x,xs,get_deps__$1))
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
var seq__35788 = cljs.core.seq.call(null,provides);
var chunk__35789 = null;
var count__35790 = (0);
var i__35791 = (0);
while(true){
if((i__35791 < count__35790)){
var prov = cljs.core._nth.call(null,chunk__35789,i__35791);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35792_35800 = cljs.core.seq.call(null,requires);
var chunk__35793_35801 = null;
var count__35794_35802 = (0);
var i__35795_35803 = (0);
while(true){
if((i__35795_35803 < count__35794_35802)){
var req_35804 = cljs.core._nth.call(null,chunk__35793_35801,i__35795_35803);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35804,prov);

var G__35805 = seq__35792_35800;
var G__35806 = chunk__35793_35801;
var G__35807 = count__35794_35802;
var G__35808 = (i__35795_35803 + (1));
seq__35792_35800 = G__35805;
chunk__35793_35801 = G__35806;
count__35794_35802 = G__35807;
i__35795_35803 = G__35808;
continue;
} else {
var temp__4657__auto___35809 = cljs.core.seq.call(null,seq__35792_35800);
if(temp__4657__auto___35809){
var seq__35792_35810__$1 = temp__4657__auto___35809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35792_35810__$1)){
var c__29125__auto___35811 = cljs.core.chunk_first.call(null,seq__35792_35810__$1);
var G__35812 = cljs.core.chunk_rest.call(null,seq__35792_35810__$1);
var G__35813 = c__29125__auto___35811;
var G__35814 = cljs.core.count.call(null,c__29125__auto___35811);
var G__35815 = (0);
seq__35792_35800 = G__35812;
chunk__35793_35801 = G__35813;
count__35794_35802 = G__35814;
i__35795_35803 = G__35815;
continue;
} else {
var req_35816 = cljs.core.first.call(null,seq__35792_35810__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35816,prov);

var G__35817 = cljs.core.next.call(null,seq__35792_35810__$1);
var G__35818 = null;
var G__35819 = (0);
var G__35820 = (0);
seq__35792_35800 = G__35817;
chunk__35793_35801 = G__35818;
count__35794_35802 = G__35819;
i__35795_35803 = G__35820;
continue;
}
} else {
}
}
break;
}

var G__35821 = seq__35788;
var G__35822 = chunk__35789;
var G__35823 = count__35790;
var G__35824 = (i__35791 + (1));
seq__35788 = G__35821;
chunk__35789 = G__35822;
count__35790 = G__35823;
i__35791 = G__35824;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35788);
if(temp__4657__auto__){
var seq__35788__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35788__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__35788__$1);
var G__35825 = cljs.core.chunk_rest.call(null,seq__35788__$1);
var G__35826 = c__29125__auto__;
var G__35827 = cljs.core.count.call(null,c__29125__auto__);
var G__35828 = (0);
seq__35788 = G__35825;
chunk__35789 = G__35826;
count__35790 = G__35827;
i__35791 = G__35828;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35788__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35796_35829 = cljs.core.seq.call(null,requires);
var chunk__35797_35830 = null;
var count__35798_35831 = (0);
var i__35799_35832 = (0);
while(true){
if((i__35799_35832 < count__35798_35831)){
var req_35833 = cljs.core._nth.call(null,chunk__35797_35830,i__35799_35832);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35833,prov);

var G__35834 = seq__35796_35829;
var G__35835 = chunk__35797_35830;
var G__35836 = count__35798_35831;
var G__35837 = (i__35799_35832 + (1));
seq__35796_35829 = G__35834;
chunk__35797_35830 = G__35835;
count__35798_35831 = G__35836;
i__35799_35832 = G__35837;
continue;
} else {
var temp__4657__auto___35838__$1 = cljs.core.seq.call(null,seq__35796_35829);
if(temp__4657__auto___35838__$1){
var seq__35796_35839__$1 = temp__4657__auto___35838__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35796_35839__$1)){
var c__29125__auto___35840 = cljs.core.chunk_first.call(null,seq__35796_35839__$1);
var G__35841 = cljs.core.chunk_rest.call(null,seq__35796_35839__$1);
var G__35842 = c__29125__auto___35840;
var G__35843 = cljs.core.count.call(null,c__29125__auto___35840);
var G__35844 = (0);
seq__35796_35829 = G__35841;
chunk__35797_35830 = G__35842;
count__35798_35831 = G__35843;
i__35799_35832 = G__35844;
continue;
} else {
var req_35845 = cljs.core.first.call(null,seq__35796_35839__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35845,prov);

var G__35846 = cljs.core.next.call(null,seq__35796_35839__$1);
var G__35847 = null;
var G__35848 = (0);
var G__35849 = (0);
seq__35796_35829 = G__35846;
chunk__35797_35830 = G__35847;
count__35798_35831 = G__35848;
i__35799_35832 = G__35849;
continue;
}
} else {
}
}
break;
}

var G__35850 = cljs.core.next.call(null,seq__35788__$1);
var G__35851 = null;
var G__35852 = (0);
var G__35853 = (0);
seq__35788 = G__35850;
chunk__35789 = G__35851;
count__35790 = G__35852;
i__35791 = G__35853;
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
var seq__35854_35858 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35855_35859 = null;
var count__35856_35860 = (0);
var i__35857_35861 = (0);
while(true){
if((i__35857_35861 < count__35856_35860)){
var ns_35862 = cljs.core._nth.call(null,chunk__35855_35859,i__35857_35861);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35862);

var G__35863 = seq__35854_35858;
var G__35864 = chunk__35855_35859;
var G__35865 = count__35856_35860;
var G__35866 = (i__35857_35861 + (1));
seq__35854_35858 = G__35863;
chunk__35855_35859 = G__35864;
count__35856_35860 = G__35865;
i__35857_35861 = G__35866;
continue;
} else {
var temp__4657__auto___35867 = cljs.core.seq.call(null,seq__35854_35858);
if(temp__4657__auto___35867){
var seq__35854_35868__$1 = temp__4657__auto___35867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35854_35868__$1)){
var c__29125__auto___35869 = cljs.core.chunk_first.call(null,seq__35854_35868__$1);
var G__35870 = cljs.core.chunk_rest.call(null,seq__35854_35868__$1);
var G__35871 = c__29125__auto___35869;
var G__35872 = cljs.core.count.call(null,c__29125__auto___35869);
var G__35873 = (0);
seq__35854_35858 = G__35870;
chunk__35855_35859 = G__35871;
count__35856_35860 = G__35872;
i__35857_35861 = G__35873;
continue;
} else {
var ns_35874 = cljs.core.first.call(null,seq__35854_35868__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35874);

var G__35875 = cljs.core.next.call(null,seq__35854_35868__$1);
var G__35876 = null;
var G__35877 = (0);
var G__35878 = (0);
seq__35854_35858 = G__35875;
chunk__35855_35859 = G__35876;
count__35856_35860 = G__35877;
i__35857_35861 = G__35878;
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
var G__35879__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35879 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35880__i = 0, G__35880__a = new Array(arguments.length -  0);
while (G__35880__i < G__35880__a.length) {G__35880__a[G__35880__i] = arguments[G__35880__i + 0]; ++G__35880__i;}
  args = new cljs.core.IndexedSeq(G__35880__a,0,null);
} 
return G__35879__delegate.call(this,args);};
G__35879.cljs$lang$maxFixedArity = 0;
G__35879.cljs$lang$applyTo = (function (arglist__35881){
var args = cljs.core.seq(arglist__35881);
return G__35879__delegate(args);
});
G__35879.cljs$core$IFn$_invoke$arity$variadic = G__35879__delegate;
return G__35879;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__35882_SHARP_,p2__35883_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35882_SHARP_)].join('')),p2__35883_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__35884_SHARP_,p2__35885_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35884_SHARP_)].join(''),p2__35885_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35886 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35886.addCallback(((function (G__35886){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__35886))
);

G__35886.addErrback(((function (G__35886){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__35886))
);

return G__35886;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35887 = cljs.core._EQ_;
var expr__35888 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35887.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35888))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__35887,expr__35888){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__35887,expr__35888))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__35887,expr__35888){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35890){if((e35890 instanceof Error)){
var e = e35890;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35890;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__35887,expr__35888))
} else {
if(cljs.core.truth_(pred__35887.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35888))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35887.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__35888))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35887.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35888))){
return ((function (pred__35887,expr__35888){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35891){if((e35891 instanceof Error)){
var e = e35891;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35891;

}
}})());
});
;})(pred__35887,expr__35888))
} else {
return ((function (pred__35887,expr__35888){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35887,expr__35888))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35892,callback){
var map__35893 = p__35892;
var map__35893__$1 = ((((!((map__35893 == null)))?((((map__35893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35893):map__35893);
var file_msg = map__35893__$1;
var request_url = cljs.core.get.call(null,map__35893__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35893,map__35893__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35893,map__35893__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__32563__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto__){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto__){
return (function (state_35917){
var state_val_35918 = (state_35917[(1)]);
if((state_val_35918 === (7))){
var inst_35913 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
var statearr_35919_35936 = state_35917__$1;
(statearr_35919_35936[(2)] = inst_35913);

(statearr_35919_35936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (1))){
var state_35917__$1 = state_35917;
var statearr_35920_35937 = state_35917__$1;
(statearr_35920_35937[(2)] = null);

(statearr_35920_35937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (4))){
var inst_35897 = (state_35917[(7)]);
var inst_35897__$1 = (state_35917[(2)]);
var state_35917__$1 = (function (){var statearr_35921 = state_35917;
(statearr_35921[(7)] = inst_35897__$1);

return statearr_35921;
})();
if(cljs.core.truth_(inst_35897__$1)){
var statearr_35922_35938 = state_35917__$1;
(statearr_35922_35938[(1)] = (5));

} else {
var statearr_35923_35939 = state_35917__$1;
(statearr_35923_35939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (6))){
var state_35917__$1 = state_35917;
var statearr_35924_35940 = state_35917__$1;
(statearr_35924_35940[(2)] = null);

(statearr_35924_35940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (3))){
var inst_35915 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35917__$1,inst_35915);
} else {
if((state_val_35918 === (2))){
var state_35917__$1 = state_35917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35917__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35918 === (11))){
var inst_35909 = (state_35917[(2)]);
var state_35917__$1 = (function (){var statearr_35925 = state_35917;
(statearr_35925[(8)] = inst_35909);

return statearr_35925;
})();
var statearr_35926_35941 = state_35917__$1;
(statearr_35926_35941[(2)] = null);

(statearr_35926_35941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (9))){
var inst_35901 = (state_35917[(9)]);
var inst_35903 = (state_35917[(10)]);
var inst_35905 = inst_35903.call(null,inst_35901);
var state_35917__$1 = state_35917;
var statearr_35927_35942 = state_35917__$1;
(statearr_35927_35942[(2)] = inst_35905);

(statearr_35927_35942[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (5))){
var inst_35897 = (state_35917[(7)]);
var inst_35899 = figwheel.client.file_reloading.blocking_load.call(null,inst_35897);
var state_35917__$1 = state_35917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35917__$1,(8),inst_35899);
} else {
if((state_val_35918 === (10))){
var inst_35901 = (state_35917[(9)]);
var inst_35907 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35901);
var state_35917__$1 = state_35917;
var statearr_35928_35943 = state_35917__$1;
(statearr_35928_35943[(2)] = inst_35907);

(statearr_35928_35943[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (8))){
var inst_35903 = (state_35917[(10)]);
var inst_35897 = (state_35917[(7)]);
var inst_35901 = (state_35917[(2)]);
var inst_35902 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35903__$1 = cljs.core.get.call(null,inst_35902,inst_35897);
var state_35917__$1 = (function (){var statearr_35929 = state_35917;
(statearr_35929[(9)] = inst_35901);

(statearr_35929[(10)] = inst_35903__$1);

return statearr_35929;
})();
if(cljs.core.truth_(inst_35903__$1)){
var statearr_35930_35944 = state_35917__$1;
(statearr_35930_35944[(1)] = (9));

} else {
var statearr_35931_35945 = state_35917__$1;
(statearr_35931_35945[(1)] = (10));

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
});})(c__32563__auto__))
;
return ((function (switch__32475__auto__,c__32563__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32476__auto__ = null;
var figwheel$client$file_reloading$state_machine__32476__auto____0 = (function (){
var statearr_35932 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35932[(0)] = figwheel$client$file_reloading$state_machine__32476__auto__);

(statearr_35932[(1)] = (1));

return statearr_35932;
});
var figwheel$client$file_reloading$state_machine__32476__auto____1 = (function (state_35917){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_35917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e35933){if((e35933 instanceof Object)){
var ex__32479__auto__ = e35933;
var statearr_35934_35946 = state_35917;
(statearr_35934_35946[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35947 = state_35917;
state_35917 = G__35947;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32476__auto__ = function(state_35917){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32476__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32476__auto____1.call(this,state_35917);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32476__auto____0;
figwheel$client$file_reloading$state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32476__auto____1;
return figwheel$client$file_reloading$state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto__))
})();
var state__32565__auto__ = (function (){var statearr_35935 = f__32564__auto__.call(null);
(statearr_35935[(6)] = c__32563__auto__);

return statearr_35935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto__))
);

return c__32563__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35948,callback){
var map__35949 = p__35948;
var map__35949__$1 = ((((!((map__35949 == null)))?((((map__35949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35949):map__35949);
var file_msg = map__35949__$1;
var namespace = cljs.core.get.call(null,map__35949__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35949,map__35949__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35949,map__35949__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35951){
var map__35952 = p__35951;
var map__35952__$1 = ((((!((map__35952 == null)))?((((map__35952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35952.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35952):map__35952);
var file_msg = map__35952__$1;
var namespace = cljs.core.get.call(null,map__35952__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35954){
var map__35955 = p__35954;
var map__35955__$1 = ((((!((map__35955 == null)))?((((map__35955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35955):map__35955);
var file_msg = map__35955__$1;
var namespace = cljs.core.get.call(null,map__35955__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35957,callback){
var map__35958 = p__35957;
var map__35958__$1 = ((((!((map__35958 == null)))?((((map__35958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35958.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35958):map__35958);
var file_msg = map__35958__$1;
var request_url = cljs.core.get.call(null,map__35958__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35958__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__32563__auto___36008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto___36008,out){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto___36008,out){
return (function (state_35993){
var state_val_35994 = (state_35993[(1)]);
if((state_val_35994 === (1))){
var inst_35967 = cljs.core.seq.call(null,files);
var inst_35968 = cljs.core.first.call(null,inst_35967);
var inst_35969 = cljs.core.next.call(null,inst_35967);
var inst_35970 = files;
var state_35993__$1 = (function (){var statearr_35995 = state_35993;
(statearr_35995[(7)] = inst_35969);

(statearr_35995[(8)] = inst_35968);

(statearr_35995[(9)] = inst_35970);

return statearr_35995;
})();
var statearr_35996_36009 = state_35993__$1;
(statearr_35996_36009[(2)] = null);

(statearr_35996_36009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (2))){
var inst_35976 = (state_35993[(10)]);
var inst_35970 = (state_35993[(9)]);
var inst_35975 = cljs.core.seq.call(null,inst_35970);
var inst_35976__$1 = cljs.core.first.call(null,inst_35975);
var inst_35977 = cljs.core.next.call(null,inst_35975);
var inst_35978 = (inst_35976__$1 == null);
var inst_35979 = cljs.core.not.call(null,inst_35978);
var state_35993__$1 = (function (){var statearr_35997 = state_35993;
(statearr_35997[(10)] = inst_35976__$1);

(statearr_35997[(11)] = inst_35977);

return statearr_35997;
})();
if(inst_35979){
var statearr_35998_36010 = state_35993__$1;
(statearr_35998_36010[(1)] = (4));

} else {
var statearr_35999_36011 = state_35993__$1;
(statearr_35999_36011[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (3))){
var inst_35991 = (state_35993[(2)]);
var state_35993__$1 = state_35993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35993__$1,inst_35991);
} else {
if((state_val_35994 === (4))){
var inst_35976 = (state_35993[(10)]);
var inst_35981 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35976);
var state_35993__$1 = state_35993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35993__$1,(7),inst_35981);
} else {
if((state_val_35994 === (5))){
var inst_35987 = cljs.core.async.close_BANG_.call(null,out);
var state_35993__$1 = state_35993;
var statearr_36000_36012 = state_35993__$1;
(statearr_36000_36012[(2)] = inst_35987);

(statearr_36000_36012[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (6))){
var inst_35989 = (state_35993[(2)]);
var state_35993__$1 = state_35993;
var statearr_36001_36013 = state_35993__$1;
(statearr_36001_36013[(2)] = inst_35989);

(statearr_36001_36013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (7))){
var inst_35977 = (state_35993[(11)]);
var inst_35983 = (state_35993[(2)]);
var inst_35984 = cljs.core.async.put_BANG_.call(null,out,inst_35983);
var inst_35970 = inst_35977;
var state_35993__$1 = (function (){var statearr_36002 = state_35993;
(statearr_36002[(12)] = inst_35984);

(statearr_36002[(9)] = inst_35970);

return statearr_36002;
})();
var statearr_36003_36014 = state_35993__$1;
(statearr_36003_36014[(2)] = null);

(statearr_36003_36014[(1)] = (2));


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
});})(c__32563__auto___36008,out))
;
return ((function (switch__32475__auto__,c__32563__auto___36008,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32476__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32476__auto____0 = (function (){
var statearr_36004 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36004[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32476__auto__);

(statearr_36004[(1)] = (1));

return statearr_36004;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32476__auto____1 = (function (state_35993){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_35993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e36005){if((e36005 instanceof Object)){
var ex__32479__auto__ = e36005;
var statearr_36006_36015 = state_35993;
(statearr_36006_36015[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36016 = state_35993;
state_35993 = G__36016;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32476__auto__ = function(state_35993){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32476__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32476__auto____1.call(this,state_35993);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32476__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32476__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto___36008,out))
})();
var state__32565__auto__ = (function (){var statearr_36007 = f__32564__auto__.call(null);
(statearr_36007[(6)] = c__32563__auto___36008);

return statearr_36007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto___36008,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36017,opts){
var map__36018 = p__36017;
var map__36018__$1 = ((((!((map__36018 == null)))?((((map__36018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36018):map__36018);
var eval_body = cljs.core.get.call(null,map__36018__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36018__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e36020){var e = e36020;
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
return (function (p1__36021_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36021_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__36022){
var vec__36023 = p__36022;
var k = cljs.core.nth.call(null,vec__36023,(0),null);
var v = cljs.core.nth.call(null,vec__36023,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36026){
var vec__36027 = p__36026;
var k = cljs.core.nth.call(null,vec__36027,(0),null);
var v = cljs.core.nth.call(null,vec__36027,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36033,p__36034){
var map__36035 = p__36033;
var map__36035__$1 = ((((!((map__36035 == null)))?((((map__36035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36035):map__36035);
var opts = map__36035__$1;
var before_jsload = cljs.core.get.call(null,map__36035__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36035__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36035__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36036 = p__36034;
var map__36036__$1 = ((((!((map__36036 == null)))?((((map__36036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36036):map__36036);
var msg = map__36036__$1;
var files = cljs.core.get.call(null,map__36036__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36036__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36036__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32563__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto__,map__36035,map__36035__$1,opts,before_jsload,on_jsload,reload_dependents,map__36036,map__36036__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto__,map__36035,map__36035__$1,opts,before_jsload,on_jsload,reload_dependents,map__36036,map__36036__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36190){
var state_val_36191 = (state_36190[(1)]);
if((state_val_36191 === (7))){
var inst_36050 = (state_36190[(7)]);
var inst_36051 = (state_36190[(8)]);
var inst_36052 = (state_36190[(9)]);
var inst_36053 = (state_36190[(10)]);
var inst_36058 = cljs.core._nth.call(null,inst_36051,inst_36053);
var inst_36059 = figwheel.client.file_reloading.eval_body.call(null,inst_36058,opts);
var inst_36060 = (inst_36053 + (1));
var tmp36192 = inst_36050;
var tmp36193 = inst_36051;
var tmp36194 = inst_36052;
var inst_36050__$1 = tmp36192;
var inst_36051__$1 = tmp36193;
var inst_36052__$1 = tmp36194;
var inst_36053__$1 = inst_36060;
var state_36190__$1 = (function (){var statearr_36195 = state_36190;
(statearr_36195[(11)] = inst_36059);

(statearr_36195[(7)] = inst_36050__$1);

(statearr_36195[(8)] = inst_36051__$1);

(statearr_36195[(9)] = inst_36052__$1);

(statearr_36195[(10)] = inst_36053__$1);

return statearr_36195;
})();
var statearr_36196_36279 = state_36190__$1;
(statearr_36196_36279[(2)] = null);

(statearr_36196_36279[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (20))){
var inst_36093 = (state_36190[(12)]);
var inst_36101 = figwheel.client.file_reloading.sort_files.call(null,inst_36093);
var state_36190__$1 = state_36190;
var statearr_36197_36280 = state_36190__$1;
(statearr_36197_36280[(2)] = inst_36101);

(statearr_36197_36280[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (27))){
var state_36190__$1 = state_36190;
var statearr_36198_36281 = state_36190__$1;
(statearr_36198_36281[(2)] = null);

(statearr_36198_36281[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (1))){
var inst_36042 = (state_36190[(13)]);
var inst_36039 = before_jsload.call(null,files);
var inst_36040 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36041 = (function (){return ((function (inst_36042,inst_36039,inst_36040,state_val_36191,c__32563__auto__,map__36035,map__36035__$1,opts,before_jsload,on_jsload,reload_dependents,map__36036,map__36036__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36030_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36030_SHARP_);
});
;})(inst_36042,inst_36039,inst_36040,state_val_36191,c__32563__auto__,map__36035,map__36035__$1,opts,before_jsload,on_jsload,reload_dependents,map__36036,map__36036__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36042__$1 = cljs.core.filter.call(null,inst_36041,files);
var inst_36043 = cljs.core.not_empty.call(null,inst_36042__$1);
var state_36190__$1 = (function (){var statearr_36199 = state_36190;
(statearr_36199[(13)] = inst_36042__$1);

(statearr_36199[(14)] = inst_36039);

(statearr_36199[(15)] = inst_36040);

return statearr_36199;
})();
if(cljs.core.truth_(inst_36043)){
var statearr_36200_36282 = state_36190__$1;
(statearr_36200_36282[(1)] = (2));

} else {
var statearr_36201_36283 = state_36190__$1;
(statearr_36201_36283[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (24))){
var state_36190__$1 = state_36190;
var statearr_36202_36284 = state_36190__$1;
(statearr_36202_36284[(2)] = null);

(statearr_36202_36284[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (39))){
var inst_36143 = (state_36190[(16)]);
var state_36190__$1 = state_36190;
var statearr_36203_36285 = state_36190__$1;
(statearr_36203_36285[(2)] = inst_36143);

(statearr_36203_36285[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (46))){
var inst_36185 = (state_36190[(2)]);
var state_36190__$1 = state_36190;
var statearr_36204_36286 = state_36190__$1;
(statearr_36204_36286[(2)] = inst_36185);

(statearr_36204_36286[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (4))){
var inst_36087 = (state_36190[(2)]);
var inst_36088 = cljs.core.List.EMPTY;
var inst_36089 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36088);
var inst_36090 = (function (){return ((function (inst_36087,inst_36088,inst_36089,state_val_36191,c__32563__auto__,map__36035,map__36035__$1,opts,before_jsload,on_jsload,reload_dependents,map__36036,map__36036__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36031_SHARP_){
var and__28274__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36031_SHARP_);
if(cljs.core.truth_(and__28274__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36031_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36031_SHARP_)));
} else {
return and__28274__auto__;
}
});
;})(inst_36087,inst_36088,inst_36089,state_val_36191,c__32563__auto__,map__36035,map__36035__$1,opts,before_jsload,on_jsload,reload_dependents,map__36036,map__36036__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36091 = cljs.core.filter.call(null,inst_36090,files);
var inst_36092 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36093 = cljs.core.concat.call(null,inst_36091,inst_36092);
var state_36190__$1 = (function (){var statearr_36205 = state_36190;
(statearr_36205[(17)] = inst_36087);

(statearr_36205[(12)] = inst_36093);

(statearr_36205[(18)] = inst_36089);

return statearr_36205;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36206_36287 = state_36190__$1;
(statearr_36206_36287[(1)] = (16));

} else {
var statearr_36207_36288 = state_36190__$1;
(statearr_36207_36288[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (15))){
var inst_36077 = (state_36190[(2)]);
var state_36190__$1 = state_36190;
var statearr_36208_36289 = state_36190__$1;
(statearr_36208_36289[(2)] = inst_36077);

(statearr_36208_36289[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (21))){
var inst_36103 = (state_36190[(19)]);
var inst_36103__$1 = (state_36190[(2)]);
var inst_36104 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36103__$1);
var state_36190__$1 = (function (){var statearr_36209 = state_36190;
(statearr_36209[(19)] = inst_36103__$1);

return statearr_36209;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36190__$1,(22),inst_36104);
} else {
if((state_val_36191 === (31))){
var inst_36188 = (state_36190[(2)]);
var state_36190__$1 = state_36190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36190__$1,inst_36188);
} else {
if((state_val_36191 === (32))){
var inst_36143 = (state_36190[(16)]);
var inst_36148 = inst_36143.cljs$lang$protocol_mask$partition0$;
var inst_36149 = (inst_36148 & (64));
var inst_36150 = inst_36143.cljs$core$ISeq$;
var inst_36151 = (cljs.core.PROTOCOL_SENTINEL === inst_36150);
var inst_36152 = (inst_36149) || (inst_36151);
var state_36190__$1 = state_36190;
if(cljs.core.truth_(inst_36152)){
var statearr_36210_36290 = state_36190__$1;
(statearr_36210_36290[(1)] = (35));

} else {
var statearr_36211_36291 = state_36190__$1;
(statearr_36211_36291[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (40))){
var inst_36165 = (state_36190[(20)]);
var inst_36164 = (state_36190[(2)]);
var inst_36165__$1 = cljs.core.get.call(null,inst_36164,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36166 = cljs.core.get.call(null,inst_36164,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36167 = cljs.core.not_empty.call(null,inst_36165__$1);
var state_36190__$1 = (function (){var statearr_36212 = state_36190;
(statearr_36212[(21)] = inst_36166);

(statearr_36212[(20)] = inst_36165__$1);

return statearr_36212;
})();
if(cljs.core.truth_(inst_36167)){
var statearr_36213_36292 = state_36190__$1;
(statearr_36213_36292[(1)] = (41));

} else {
var statearr_36214_36293 = state_36190__$1;
(statearr_36214_36293[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (33))){
var state_36190__$1 = state_36190;
var statearr_36215_36294 = state_36190__$1;
(statearr_36215_36294[(2)] = false);

(statearr_36215_36294[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (13))){
var inst_36063 = (state_36190[(22)]);
var inst_36067 = cljs.core.chunk_first.call(null,inst_36063);
var inst_36068 = cljs.core.chunk_rest.call(null,inst_36063);
var inst_36069 = cljs.core.count.call(null,inst_36067);
var inst_36050 = inst_36068;
var inst_36051 = inst_36067;
var inst_36052 = inst_36069;
var inst_36053 = (0);
var state_36190__$1 = (function (){var statearr_36216 = state_36190;
(statearr_36216[(7)] = inst_36050);

(statearr_36216[(8)] = inst_36051);

(statearr_36216[(9)] = inst_36052);

(statearr_36216[(10)] = inst_36053);

return statearr_36216;
})();
var statearr_36217_36295 = state_36190__$1;
(statearr_36217_36295[(2)] = null);

(statearr_36217_36295[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (22))){
var inst_36103 = (state_36190[(19)]);
var inst_36106 = (state_36190[(23)]);
var inst_36107 = (state_36190[(24)]);
var inst_36111 = (state_36190[(25)]);
var inst_36106__$1 = (state_36190[(2)]);
var inst_36107__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36106__$1);
var inst_36108 = (function (){var all_files = inst_36103;
var res_SINGLEQUOTE_ = inst_36106__$1;
var res = inst_36107__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36103,inst_36106,inst_36107,inst_36111,inst_36106__$1,inst_36107__$1,state_val_36191,c__32563__auto__,map__36035,map__36035__$1,opts,before_jsload,on_jsload,reload_dependents,map__36036,map__36036__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36032_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36032_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36103,inst_36106,inst_36107,inst_36111,inst_36106__$1,inst_36107__$1,state_val_36191,c__32563__auto__,map__36035,map__36035__$1,opts,before_jsload,on_jsload,reload_dependents,map__36036,map__36036__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36109 = cljs.core.filter.call(null,inst_36108,inst_36106__$1);
var inst_36110 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36111__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36110);
var inst_36112 = cljs.core.not_empty.call(null,inst_36111__$1);
var state_36190__$1 = (function (){var statearr_36218 = state_36190;
(statearr_36218[(26)] = inst_36109);

(statearr_36218[(23)] = inst_36106__$1);

(statearr_36218[(24)] = inst_36107__$1);

(statearr_36218[(25)] = inst_36111__$1);

return statearr_36218;
})();
if(cljs.core.truth_(inst_36112)){
var statearr_36219_36296 = state_36190__$1;
(statearr_36219_36296[(1)] = (23));

} else {
var statearr_36220_36297 = state_36190__$1;
(statearr_36220_36297[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (36))){
var state_36190__$1 = state_36190;
var statearr_36221_36298 = state_36190__$1;
(statearr_36221_36298[(2)] = false);

(statearr_36221_36298[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (41))){
var inst_36165 = (state_36190[(20)]);
var inst_36169 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36170 = cljs.core.map.call(null,inst_36169,inst_36165);
var inst_36171 = cljs.core.pr_str.call(null,inst_36170);
var inst_36172 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36171)].join('');
var inst_36173 = figwheel.client.utils.log.call(null,inst_36172);
var state_36190__$1 = state_36190;
var statearr_36222_36299 = state_36190__$1;
(statearr_36222_36299[(2)] = inst_36173);

(statearr_36222_36299[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (43))){
var inst_36166 = (state_36190[(21)]);
var inst_36176 = (state_36190[(2)]);
var inst_36177 = cljs.core.not_empty.call(null,inst_36166);
var state_36190__$1 = (function (){var statearr_36223 = state_36190;
(statearr_36223[(27)] = inst_36176);

return statearr_36223;
})();
if(cljs.core.truth_(inst_36177)){
var statearr_36224_36300 = state_36190__$1;
(statearr_36224_36300[(1)] = (44));

} else {
var statearr_36225_36301 = state_36190__$1;
(statearr_36225_36301[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (29))){
var inst_36109 = (state_36190[(26)]);
var inst_36103 = (state_36190[(19)]);
var inst_36143 = (state_36190[(16)]);
var inst_36106 = (state_36190[(23)]);
var inst_36107 = (state_36190[(24)]);
var inst_36111 = (state_36190[(25)]);
var inst_36139 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36142 = (function (){var all_files = inst_36103;
var res_SINGLEQUOTE_ = inst_36106;
var res = inst_36107;
var files_not_loaded = inst_36109;
var dependencies_that_loaded = inst_36111;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36109,inst_36103,inst_36143,inst_36106,inst_36107,inst_36111,inst_36139,state_val_36191,c__32563__auto__,map__36035,map__36035__$1,opts,before_jsload,on_jsload,reload_dependents,map__36036,map__36036__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36141){
var map__36226 = p__36141;
var map__36226__$1 = ((((!((map__36226 == null)))?((((map__36226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36226):map__36226);
var namespace = cljs.core.get.call(null,map__36226__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36109,inst_36103,inst_36143,inst_36106,inst_36107,inst_36111,inst_36139,state_val_36191,c__32563__auto__,map__36035,map__36035__$1,opts,before_jsload,on_jsload,reload_dependents,map__36036,map__36036__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36143__$1 = cljs.core.group_by.call(null,inst_36142,inst_36109);
var inst_36145 = (inst_36143__$1 == null);
var inst_36146 = cljs.core.not.call(null,inst_36145);
var state_36190__$1 = (function (){var statearr_36228 = state_36190;
(statearr_36228[(28)] = inst_36139);

(statearr_36228[(16)] = inst_36143__$1);

return statearr_36228;
})();
if(inst_36146){
var statearr_36229_36302 = state_36190__$1;
(statearr_36229_36302[(1)] = (32));

} else {
var statearr_36230_36303 = state_36190__$1;
(statearr_36230_36303[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (44))){
var inst_36166 = (state_36190[(21)]);
var inst_36179 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36166);
var inst_36180 = cljs.core.pr_str.call(null,inst_36179);
var inst_36181 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36180)].join('');
var inst_36182 = figwheel.client.utils.log.call(null,inst_36181);
var state_36190__$1 = state_36190;
var statearr_36231_36304 = state_36190__$1;
(statearr_36231_36304[(2)] = inst_36182);

(statearr_36231_36304[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (6))){
var inst_36084 = (state_36190[(2)]);
var state_36190__$1 = state_36190;
var statearr_36232_36305 = state_36190__$1;
(statearr_36232_36305[(2)] = inst_36084);

(statearr_36232_36305[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (28))){
var inst_36109 = (state_36190[(26)]);
var inst_36136 = (state_36190[(2)]);
var inst_36137 = cljs.core.not_empty.call(null,inst_36109);
var state_36190__$1 = (function (){var statearr_36233 = state_36190;
(statearr_36233[(29)] = inst_36136);

return statearr_36233;
})();
if(cljs.core.truth_(inst_36137)){
var statearr_36234_36306 = state_36190__$1;
(statearr_36234_36306[(1)] = (29));

} else {
var statearr_36235_36307 = state_36190__$1;
(statearr_36235_36307[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (25))){
var inst_36107 = (state_36190[(24)]);
var inst_36123 = (state_36190[(2)]);
var inst_36124 = cljs.core.not_empty.call(null,inst_36107);
var state_36190__$1 = (function (){var statearr_36236 = state_36190;
(statearr_36236[(30)] = inst_36123);

return statearr_36236;
})();
if(cljs.core.truth_(inst_36124)){
var statearr_36237_36308 = state_36190__$1;
(statearr_36237_36308[(1)] = (26));

} else {
var statearr_36238_36309 = state_36190__$1;
(statearr_36238_36309[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (34))){
var inst_36159 = (state_36190[(2)]);
var state_36190__$1 = state_36190;
if(cljs.core.truth_(inst_36159)){
var statearr_36239_36310 = state_36190__$1;
(statearr_36239_36310[(1)] = (38));

} else {
var statearr_36240_36311 = state_36190__$1;
(statearr_36240_36311[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (17))){
var state_36190__$1 = state_36190;
var statearr_36241_36312 = state_36190__$1;
(statearr_36241_36312[(2)] = recompile_dependents);

(statearr_36241_36312[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (3))){
var state_36190__$1 = state_36190;
var statearr_36242_36313 = state_36190__$1;
(statearr_36242_36313[(2)] = null);

(statearr_36242_36313[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (12))){
var inst_36080 = (state_36190[(2)]);
var state_36190__$1 = state_36190;
var statearr_36243_36314 = state_36190__$1;
(statearr_36243_36314[(2)] = inst_36080);

(statearr_36243_36314[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (2))){
var inst_36042 = (state_36190[(13)]);
var inst_36049 = cljs.core.seq.call(null,inst_36042);
var inst_36050 = inst_36049;
var inst_36051 = null;
var inst_36052 = (0);
var inst_36053 = (0);
var state_36190__$1 = (function (){var statearr_36244 = state_36190;
(statearr_36244[(7)] = inst_36050);

(statearr_36244[(8)] = inst_36051);

(statearr_36244[(9)] = inst_36052);

(statearr_36244[(10)] = inst_36053);

return statearr_36244;
})();
var statearr_36245_36315 = state_36190__$1;
(statearr_36245_36315[(2)] = null);

(statearr_36245_36315[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (23))){
var inst_36109 = (state_36190[(26)]);
var inst_36103 = (state_36190[(19)]);
var inst_36106 = (state_36190[(23)]);
var inst_36107 = (state_36190[(24)]);
var inst_36111 = (state_36190[(25)]);
var inst_36114 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36116 = (function (){var all_files = inst_36103;
var res_SINGLEQUOTE_ = inst_36106;
var res = inst_36107;
var files_not_loaded = inst_36109;
var dependencies_that_loaded = inst_36111;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36109,inst_36103,inst_36106,inst_36107,inst_36111,inst_36114,state_val_36191,c__32563__auto__,map__36035,map__36035__$1,opts,before_jsload,on_jsload,reload_dependents,map__36036,map__36036__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36115){
var map__36246 = p__36115;
var map__36246__$1 = ((((!((map__36246 == null)))?((((map__36246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36246.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36246):map__36246);
var request_url = cljs.core.get.call(null,map__36246__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36109,inst_36103,inst_36106,inst_36107,inst_36111,inst_36114,state_val_36191,c__32563__auto__,map__36035,map__36035__$1,opts,before_jsload,on_jsload,reload_dependents,map__36036,map__36036__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36117 = cljs.core.reverse.call(null,inst_36111);
var inst_36118 = cljs.core.map.call(null,inst_36116,inst_36117);
var inst_36119 = cljs.core.pr_str.call(null,inst_36118);
var inst_36120 = figwheel.client.utils.log.call(null,inst_36119);
var state_36190__$1 = (function (){var statearr_36248 = state_36190;
(statearr_36248[(31)] = inst_36114);

return statearr_36248;
})();
var statearr_36249_36316 = state_36190__$1;
(statearr_36249_36316[(2)] = inst_36120);

(statearr_36249_36316[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (35))){
var state_36190__$1 = state_36190;
var statearr_36250_36317 = state_36190__$1;
(statearr_36250_36317[(2)] = true);

(statearr_36250_36317[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (19))){
var inst_36093 = (state_36190[(12)]);
var inst_36099 = figwheel.client.file_reloading.expand_files.call(null,inst_36093);
var state_36190__$1 = state_36190;
var statearr_36251_36318 = state_36190__$1;
(statearr_36251_36318[(2)] = inst_36099);

(statearr_36251_36318[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (11))){
var state_36190__$1 = state_36190;
var statearr_36252_36319 = state_36190__$1;
(statearr_36252_36319[(2)] = null);

(statearr_36252_36319[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (9))){
var inst_36082 = (state_36190[(2)]);
var state_36190__$1 = state_36190;
var statearr_36253_36320 = state_36190__$1;
(statearr_36253_36320[(2)] = inst_36082);

(statearr_36253_36320[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (5))){
var inst_36052 = (state_36190[(9)]);
var inst_36053 = (state_36190[(10)]);
var inst_36055 = (inst_36053 < inst_36052);
var inst_36056 = inst_36055;
var state_36190__$1 = state_36190;
if(cljs.core.truth_(inst_36056)){
var statearr_36254_36321 = state_36190__$1;
(statearr_36254_36321[(1)] = (7));

} else {
var statearr_36255_36322 = state_36190__$1;
(statearr_36255_36322[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (14))){
var inst_36063 = (state_36190[(22)]);
var inst_36072 = cljs.core.first.call(null,inst_36063);
var inst_36073 = figwheel.client.file_reloading.eval_body.call(null,inst_36072,opts);
var inst_36074 = cljs.core.next.call(null,inst_36063);
var inst_36050 = inst_36074;
var inst_36051 = null;
var inst_36052 = (0);
var inst_36053 = (0);
var state_36190__$1 = (function (){var statearr_36256 = state_36190;
(statearr_36256[(7)] = inst_36050);

(statearr_36256[(32)] = inst_36073);

(statearr_36256[(8)] = inst_36051);

(statearr_36256[(9)] = inst_36052);

(statearr_36256[(10)] = inst_36053);

return statearr_36256;
})();
var statearr_36257_36323 = state_36190__$1;
(statearr_36257_36323[(2)] = null);

(statearr_36257_36323[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (45))){
var state_36190__$1 = state_36190;
var statearr_36258_36324 = state_36190__$1;
(statearr_36258_36324[(2)] = null);

(statearr_36258_36324[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (26))){
var inst_36109 = (state_36190[(26)]);
var inst_36103 = (state_36190[(19)]);
var inst_36106 = (state_36190[(23)]);
var inst_36107 = (state_36190[(24)]);
var inst_36111 = (state_36190[(25)]);
var inst_36126 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36128 = (function (){var all_files = inst_36103;
var res_SINGLEQUOTE_ = inst_36106;
var res = inst_36107;
var files_not_loaded = inst_36109;
var dependencies_that_loaded = inst_36111;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36109,inst_36103,inst_36106,inst_36107,inst_36111,inst_36126,state_val_36191,c__32563__auto__,map__36035,map__36035__$1,opts,before_jsload,on_jsload,reload_dependents,map__36036,map__36036__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36127){
var map__36259 = p__36127;
var map__36259__$1 = ((((!((map__36259 == null)))?((((map__36259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36259.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36259):map__36259);
var namespace = cljs.core.get.call(null,map__36259__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36259__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36109,inst_36103,inst_36106,inst_36107,inst_36111,inst_36126,state_val_36191,c__32563__auto__,map__36035,map__36035__$1,opts,before_jsload,on_jsload,reload_dependents,map__36036,map__36036__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36129 = cljs.core.map.call(null,inst_36128,inst_36107);
var inst_36130 = cljs.core.pr_str.call(null,inst_36129);
var inst_36131 = figwheel.client.utils.log.call(null,inst_36130);
var inst_36132 = (function (){var all_files = inst_36103;
var res_SINGLEQUOTE_ = inst_36106;
var res = inst_36107;
var files_not_loaded = inst_36109;
var dependencies_that_loaded = inst_36111;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36109,inst_36103,inst_36106,inst_36107,inst_36111,inst_36126,inst_36128,inst_36129,inst_36130,inst_36131,state_val_36191,c__32563__auto__,map__36035,map__36035__$1,opts,before_jsload,on_jsload,reload_dependents,map__36036,map__36036__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36109,inst_36103,inst_36106,inst_36107,inst_36111,inst_36126,inst_36128,inst_36129,inst_36130,inst_36131,state_val_36191,c__32563__auto__,map__36035,map__36035__$1,opts,before_jsload,on_jsload,reload_dependents,map__36036,map__36036__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36133 = setTimeout(inst_36132,(10));
var state_36190__$1 = (function (){var statearr_36261 = state_36190;
(statearr_36261[(33)] = inst_36126);

(statearr_36261[(34)] = inst_36131);

return statearr_36261;
})();
var statearr_36262_36325 = state_36190__$1;
(statearr_36262_36325[(2)] = inst_36133);

(statearr_36262_36325[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (16))){
var state_36190__$1 = state_36190;
var statearr_36263_36326 = state_36190__$1;
(statearr_36263_36326[(2)] = reload_dependents);

(statearr_36263_36326[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (38))){
var inst_36143 = (state_36190[(16)]);
var inst_36161 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36143);
var state_36190__$1 = state_36190;
var statearr_36264_36327 = state_36190__$1;
(statearr_36264_36327[(2)] = inst_36161);

(statearr_36264_36327[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (30))){
var state_36190__$1 = state_36190;
var statearr_36265_36328 = state_36190__$1;
(statearr_36265_36328[(2)] = null);

(statearr_36265_36328[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (10))){
var inst_36063 = (state_36190[(22)]);
var inst_36065 = cljs.core.chunked_seq_QMARK_.call(null,inst_36063);
var state_36190__$1 = state_36190;
if(inst_36065){
var statearr_36266_36329 = state_36190__$1;
(statearr_36266_36329[(1)] = (13));

} else {
var statearr_36267_36330 = state_36190__$1;
(statearr_36267_36330[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (18))){
var inst_36097 = (state_36190[(2)]);
var state_36190__$1 = state_36190;
if(cljs.core.truth_(inst_36097)){
var statearr_36268_36331 = state_36190__$1;
(statearr_36268_36331[(1)] = (19));

} else {
var statearr_36269_36332 = state_36190__$1;
(statearr_36269_36332[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (42))){
var state_36190__$1 = state_36190;
var statearr_36270_36333 = state_36190__$1;
(statearr_36270_36333[(2)] = null);

(statearr_36270_36333[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (37))){
var inst_36156 = (state_36190[(2)]);
var state_36190__$1 = state_36190;
var statearr_36271_36334 = state_36190__$1;
(statearr_36271_36334[(2)] = inst_36156);

(statearr_36271_36334[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (8))){
var inst_36050 = (state_36190[(7)]);
var inst_36063 = (state_36190[(22)]);
var inst_36063__$1 = cljs.core.seq.call(null,inst_36050);
var state_36190__$1 = (function (){var statearr_36272 = state_36190;
(statearr_36272[(22)] = inst_36063__$1);

return statearr_36272;
})();
if(inst_36063__$1){
var statearr_36273_36335 = state_36190__$1;
(statearr_36273_36335[(1)] = (10));

} else {
var statearr_36274_36336 = state_36190__$1;
(statearr_36274_36336[(1)] = (11));

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
});})(c__32563__auto__,map__36035,map__36035__$1,opts,before_jsload,on_jsload,reload_dependents,map__36036,map__36036__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32475__auto__,c__32563__auto__,map__36035,map__36035__$1,opts,before_jsload,on_jsload,reload_dependents,map__36036,map__36036__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32476__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32476__auto____0 = (function (){
var statearr_36275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36275[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32476__auto__);

(statearr_36275[(1)] = (1));

return statearr_36275;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32476__auto____1 = (function (state_36190){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_36190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e36276){if((e36276 instanceof Object)){
var ex__32479__auto__ = e36276;
var statearr_36277_36337 = state_36190;
(statearr_36277_36337[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36338 = state_36190;
state_36190 = G__36338;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32476__auto__ = function(state_36190){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32476__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32476__auto____1.call(this,state_36190);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32476__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32476__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto__,map__36035,map__36035__$1,opts,before_jsload,on_jsload,reload_dependents,map__36036,map__36036__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32565__auto__ = (function (){var statearr_36278 = f__32564__auto__.call(null);
(statearr_36278[(6)] = c__32563__auto__);

return statearr_36278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto__,map__36035,map__36035__$1,opts,before_jsload,on_jsload,reload_dependents,map__36036,map__36036__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32563__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36341,link){
var map__36342 = p__36341;
var map__36342__$1 = ((((!((map__36342 == null)))?((((map__36342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36342.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36342):map__36342);
var file = cljs.core.get.call(null,map__36342__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36342,map__36342__$1,file){
return (function (p1__36339_SHARP_,p2__36340_SHARP_){
if(cljs.core._EQ_.call(null,p1__36339_SHARP_,p2__36340_SHARP_)){
return p1__36339_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36342,map__36342__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36345){
var map__36346 = p__36345;
var map__36346__$1 = ((((!((map__36346 == null)))?((((map__36346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36346.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36346):map__36346);
var match_length = cljs.core.get.call(null,map__36346__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36346__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36344_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36344_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36348_SHARP_,p2__36349_SHARP_){
return cljs.core.assoc.call(null,p1__36348_SHARP_,cljs.core.get.call(null,p2__36349_SHARP_,key),p2__36349_SHARP_);
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
var loaded_f_datas_36350 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36350);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36350);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36351,p__36352){
var map__36353 = p__36351;
var map__36353__$1 = ((((!((map__36353 == null)))?((((map__36353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36353):map__36353);
var on_cssload = cljs.core.get.call(null,map__36353__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36354 = p__36352;
var map__36354__$1 = ((((!((map__36354 == null)))?((((map__36354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36354):map__36354);
var files_msg = map__36354__$1;
var files = cljs.core.get.call(null,map__36354__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1504451416738
