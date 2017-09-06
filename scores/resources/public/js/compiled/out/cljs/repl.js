// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38846){
var map__38847 = p__38846;
var map__38847__$1 = ((((!((map__38847 == null)))?((((map__38847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38847.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38847):map__38847);
var m = map__38847__$1;
var n = cljs.core.get.call(null,map__38847__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38847__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38849_38871 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38850_38872 = null;
var count__38851_38873 = (0);
var i__38852_38874 = (0);
while(true){
if((i__38852_38874 < count__38851_38873)){
var f_38875 = cljs.core._nth.call(null,chunk__38850_38872,i__38852_38874);
cljs.core.println.call(null,"  ",f_38875);

var G__38876 = seq__38849_38871;
var G__38877 = chunk__38850_38872;
var G__38878 = count__38851_38873;
var G__38879 = (i__38852_38874 + (1));
seq__38849_38871 = G__38876;
chunk__38850_38872 = G__38877;
count__38851_38873 = G__38878;
i__38852_38874 = G__38879;
continue;
} else {
var temp__4657__auto___38880 = cljs.core.seq.call(null,seq__38849_38871);
if(temp__4657__auto___38880){
var seq__38849_38881__$1 = temp__4657__auto___38880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38849_38881__$1)){
var c__29262__auto___38882 = cljs.core.chunk_first.call(null,seq__38849_38881__$1);
var G__38883 = cljs.core.chunk_rest.call(null,seq__38849_38881__$1);
var G__38884 = c__29262__auto___38882;
var G__38885 = cljs.core.count.call(null,c__29262__auto___38882);
var G__38886 = (0);
seq__38849_38871 = G__38883;
chunk__38850_38872 = G__38884;
count__38851_38873 = G__38885;
i__38852_38874 = G__38886;
continue;
} else {
var f_38887 = cljs.core.first.call(null,seq__38849_38881__$1);
cljs.core.println.call(null,"  ",f_38887);

var G__38888 = cljs.core.next.call(null,seq__38849_38881__$1);
var G__38889 = null;
var G__38890 = (0);
var G__38891 = (0);
seq__38849_38871 = G__38888;
chunk__38850_38872 = G__38889;
count__38851_38873 = G__38890;
i__38852_38874 = G__38891;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38892 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28423__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38892);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38892)))?cljs.core.second.call(null,arglists_38892):arglists_38892));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38853_38893 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38854_38894 = null;
var count__38855_38895 = (0);
var i__38856_38896 = (0);
while(true){
if((i__38856_38896 < count__38855_38895)){
var vec__38857_38897 = cljs.core._nth.call(null,chunk__38854_38894,i__38856_38896);
var name_38898 = cljs.core.nth.call(null,vec__38857_38897,(0),null);
var map__38860_38899 = cljs.core.nth.call(null,vec__38857_38897,(1),null);
var map__38860_38900__$1 = ((((!((map__38860_38899 == null)))?((((map__38860_38899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38860_38899.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38860_38899):map__38860_38899);
var doc_38901 = cljs.core.get.call(null,map__38860_38900__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38902 = cljs.core.get.call(null,map__38860_38900__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38898);

cljs.core.println.call(null," ",arglists_38902);

if(cljs.core.truth_(doc_38901)){
cljs.core.println.call(null," ",doc_38901);
} else {
}

var G__38903 = seq__38853_38893;
var G__38904 = chunk__38854_38894;
var G__38905 = count__38855_38895;
var G__38906 = (i__38856_38896 + (1));
seq__38853_38893 = G__38903;
chunk__38854_38894 = G__38904;
count__38855_38895 = G__38905;
i__38856_38896 = G__38906;
continue;
} else {
var temp__4657__auto___38907 = cljs.core.seq.call(null,seq__38853_38893);
if(temp__4657__auto___38907){
var seq__38853_38908__$1 = temp__4657__auto___38907;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38853_38908__$1)){
var c__29262__auto___38909 = cljs.core.chunk_first.call(null,seq__38853_38908__$1);
var G__38910 = cljs.core.chunk_rest.call(null,seq__38853_38908__$1);
var G__38911 = c__29262__auto___38909;
var G__38912 = cljs.core.count.call(null,c__29262__auto___38909);
var G__38913 = (0);
seq__38853_38893 = G__38910;
chunk__38854_38894 = G__38911;
count__38855_38895 = G__38912;
i__38856_38896 = G__38913;
continue;
} else {
var vec__38862_38914 = cljs.core.first.call(null,seq__38853_38908__$1);
var name_38915 = cljs.core.nth.call(null,vec__38862_38914,(0),null);
var map__38865_38916 = cljs.core.nth.call(null,vec__38862_38914,(1),null);
var map__38865_38917__$1 = ((((!((map__38865_38916 == null)))?((((map__38865_38916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38865_38916.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38865_38916):map__38865_38916);
var doc_38918 = cljs.core.get.call(null,map__38865_38917__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38919 = cljs.core.get.call(null,map__38865_38917__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38915);

cljs.core.println.call(null," ",arglists_38919);

if(cljs.core.truth_(doc_38918)){
cljs.core.println.call(null," ",doc_38918);
} else {
}

var G__38920 = cljs.core.next.call(null,seq__38853_38908__$1);
var G__38921 = null;
var G__38922 = (0);
var G__38923 = (0);
seq__38853_38893 = G__38920;
chunk__38854_38894 = G__38921;
count__38855_38895 = G__38922;
i__38856_38896 = G__38923;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__38867 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38868 = null;
var count__38869 = (0);
var i__38870 = (0);
while(true){
if((i__38870 < count__38869)){
var role = cljs.core._nth.call(null,chunk__38868,i__38870);
var temp__4657__auto___38924__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38924__$1)){
var spec_38925 = temp__4657__auto___38924__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38925));
} else {
}

var G__38926 = seq__38867;
var G__38927 = chunk__38868;
var G__38928 = count__38869;
var G__38929 = (i__38870 + (1));
seq__38867 = G__38926;
chunk__38868 = G__38927;
count__38869 = G__38928;
i__38870 = G__38929;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__38867);
if(temp__4657__auto____$1){
var seq__38867__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38867__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__38867__$1);
var G__38930 = cljs.core.chunk_rest.call(null,seq__38867__$1);
var G__38931 = c__29262__auto__;
var G__38932 = cljs.core.count.call(null,c__29262__auto__);
var G__38933 = (0);
seq__38867 = G__38930;
chunk__38868 = G__38931;
count__38869 = G__38932;
i__38870 = G__38933;
continue;
} else {
var role = cljs.core.first.call(null,seq__38867__$1);
var temp__4657__auto___38934__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38934__$2)){
var spec_38935 = temp__4657__auto___38934__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38935));
} else {
}

var G__38936 = cljs.core.next.call(null,seq__38867__$1);
var G__38937 = null;
var G__38938 = (0);
var G__38939 = (0);
seq__38867 = G__38936;
chunk__38868 = G__38937;
count__38869 = G__38938;
i__38870 = G__38939;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1504733884661
