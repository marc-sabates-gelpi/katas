// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37170){
var map__37171 = p__37170;
var map__37171__$1 = ((((!((map__37171 == null)))?((((map__37171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37171.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37171):map__37171);
var m = map__37171__$1;
var n = cljs.core.get.call(null,map__37171__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37171__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37173_37195 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37174_37196 = null;
var count__37175_37197 = (0);
var i__37176_37198 = (0);
while(true){
if((i__37176_37198 < count__37175_37197)){
var f_37199 = cljs.core._nth.call(null,chunk__37174_37196,i__37176_37198);
cljs.core.println.call(null,"  ",f_37199);

var G__37200 = seq__37173_37195;
var G__37201 = chunk__37174_37196;
var G__37202 = count__37175_37197;
var G__37203 = (i__37176_37198 + (1));
seq__37173_37195 = G__37200;
chunk__37174_37196 = G__37201;
count__37175_37197 = G__37202;
i__37176_37198 = G__37203;
continue;
} else {
var temp__4657__auto___37204 = cljs.core.seq.call(null,seq__37173_37195);
if(temp__4657__auto___37204){
var seq__37173_37205__$1 = temp__4657__auto___37204;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37173_37205__$1)){
var c__29125__auto___37206 = cljs.core.chunk_first.call(null,seq__37173_37205__$1);
var G__37207 = cljs.core.chunk_rest.call(null,seq__37173_37205__$1);
var G__37208 = c__29125__auto___37206;
var G__37209 = cljs.core.count.call(null,c__29125__auto___37206);
var G__37210 = (0);
seq__37173_37195 = G__37207;
chunk__37174_37196 = G__37208;
count__37175_37197 = G__37209;
i__37176_37198 = G__37210;
continue;
} else {
var f_37211 = cljs.core.first.call(null,seq__37173_37205__$1);
cljs.core.println.call(null,"  ",f_37211);

var G__37212 = cljs.core.next.call(null,seq__37173_37205__$1);
var G__37213 = null;
var G__37214 = (0);
var G__37215 = (0);
seq__37173_37195 = G__37212;
chunk__37174_37196 = G__37213;
count__37175_37197 = G__37214;
i__37176_37198 = G__37215;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37216 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28286__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37216);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37216)))?cljs.core.second.call(null,arglists_37216):arglists_37216));
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
var seq__37177_37217 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37178_37218 = null;
var count__37179_37219 = (0);
var i__37180_37220 = (0);
while(true){
if((i__37180_37220 < count__37179_37219)){
var vec__37181_37221 = cljs.core._nth.call(null,chunk__37178_37218,i__37180_37220);
var name_37222 = cljs.core.nth.call(null,vec__37181_37221,(0),null);
var map__37184_37223 = cljs.core.nth.call(null,vec__37181_37221,(1),null);
var map__37184_37224__$1 = ((((!((map__37184_37223 == null)))?((((map__37184_37223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37184_37223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37184_37223):map__37184_37223);
var doc_37225 = cljs.core.get.call(null,map__37184_37224__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37226 = cljs.core.get.call(null,map__37184_37224__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37222);

cljs.core.println.call(null," ",arglists_37226);

if(cljs.core.truth_(doc_37225)){
cljs.core.println.call(null," ",doc_37225);
} else {
}

var G__37227 = seq__37177_37217;
var G__37228 = chunk__37178_37218;
var G__37229 = count__37179_37219;
var G__37230 = (i__37180_37220 + (1));
seq__37177_37217 = G__37227;
chunk__37178_37218 = G__37228;
count__37179_37219 = G__37229;
i__37180_37220 = G__37230;
continue;
} else {
var temp__4657__auto___37231 = cljs.core.seq.call(null,seq__37177_37217);
if(temp__4657__auto___37231){
var seq__37177_37232__$1 = temp__4657__auto___37231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37177_37232__$1)){
var c__29125__auto___37233 = cljs.core.chunk_first.call(null,seq__37177_37232__$1);
var G__37234 = cljs.core.chunk_rest.call(null,seq__37177_37232__$1);
var G__37235 = c__29125__auto___37233;
var G__37236 = cljs.core.count.call(null,c__29125__auto___37233);
var G__37237 = (0);
seq__37177_37217 = G__37234;
chunk__37178_37218 = G__37235;
count__37179_37219 = G__37236;
i__37180_37220 = G__37237;
continue;
} else {
var vec__37186_37238 = cljs.core.first.call(null,seq__37177_37232__$1);
var name_37239 = cljs.core.nth.call(null,vec__37186_37238,(0),null);
var map__37189_37240 = cljs.core.nth.call(null,vec__37186_37238,(1),null);
var map__37189_37241__$1 = ((((!((map__37189_37240 == null)))?((((map__37189_37240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37189_37240.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37189_37240):map__37189_37240);
var doc_37242 = cljs.core.get.call(null,map__37189_37241__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37243 = cljs.core.get.call(null,map__37189_37241__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37239);

cljs.core.println.call(null," ",arglists_37243);

if(cljs.core.truth_(doc_37242)){
cljs.core.println.call(null," ",doc_37242);
} else {
}

var G__37244 = cljs.core.next.call(null,seq__37177_37232__$1);
var G__37245 = null;
var G__37246 = (0);
var G__37247 = (0);
seq__37177_37217 = G__37244;
chunk__37178_37218 = G__37245;
count__37179_37219 = G__37246;
i__37180_37220 = G__37247;
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

var seq__37191 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37192 = null;
var count__37193 = (0);
var i__37194 = (0);
while(true){
if((i__37194 < count__37193)){
var role = cljs.core._nth.call(null,chunk__37192,i__37194);
var temp__4657__auto___37248__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37248__$1)){
var spec_37249 = temp__4657__auto___37248__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37249));
} else {
}

var G__37250 = seq__37191;
var G__37251 = chunk__37192;
var G__37252 = count__37193;
var G__37253 = (i__37194 + (1));
seq__37191 = G__37250;
chunk__37192 = G__37251;
count__37193 = G__37252;
i__37194 = G__37253;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37191);
if(temp__4657__auto____$1){
var seq__37191__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37191__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__37191__$1);
var G__37254 = cljs.core.chunk_rest.call(null,seq__37191__$1);
var G__37255 = c__29125__auto__;
var G__37256 = cljs.core.count.call(null,c__29125__auto__);
var G__37257 = (0);
seq__37191 = G__37254;
chunk__37192 = G__37255;
count__37193 = G__37256;
i__37194 = G__37257;
continue;
} else {
var role = cljs.core.first.call(null,seq__37191__$1);
var temp__4657__auto___37258__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37258__$2)){
var spec_37259 = temp__4657__auto___37258__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37259));
} else {
}

var G__37260 = cljs.core.next.call(null,seq__37191__$1);
var G__37261 = null;
var G__37262 = (0);
var G__37263 = (0);
seq__37191 = G__37260;
chunk__37192 = G__37261;
count__37193 = G__37262;
i__37194 = G__37263;
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

//# sourceMappingURL=repl.js.map?rel=1504549428161
