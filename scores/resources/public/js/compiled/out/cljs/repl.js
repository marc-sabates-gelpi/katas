// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37181){
var map__37182 = p__37181;
var map__37182__$1 = ((((!((map__37182 == null)))?((((map__37182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37182.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37182):map__37182);
var m = map__37182__$1;
var n = cljs.core.get.call(null,map__37182__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37182__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37184_37206 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37185_37207 = null;
var count__37186_37208 = (0);
var i__37187_37209 = (0);
while(true){
if((i__37187_37209 < count__37186_37208)){
var f_37210 = cljs.core._nth.call(null,chunk__37185_37207,i__37187_37209);
cljs.core.println.call(null,"  ",f_37210);

var G__37211 = seq__37184_37206;
var G__37212 = chunk__37185_37207;
var G__37213 = count__37186_37208;
var G__37214 = (i__37187_37209 + (1));
seq__37184_37206 = G__37211;
chunk__37185_37207 = G__37212;
count__37186_37208 = G__37213;
i__37187_37209 = G__37214;
continue;
} else {
var temp__4657__auto___37215 = cljs.core.seq.call(null,seq__37184_37206);
if(temp__4657__auto___37215){
var seq__37184_37216__$1 = temp__4657__auto___37215;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37184_37216__$1)){
var c__29125__auto___37217 = cljs.core.chunk_first.call(null,seq__37184_37216__$1);
var G__37218 = cljs.core.chunk_rest.call(null,seq__37184_37216__$1);
var G__37219 = c__29125__auto___37217;
var G__37220 = cljs.core.count.call(null,c__29125__auto___37217);
var G__37221 = (0);
seq__37184_37206 = G__37218;
chunk__37185_37207 = G__37219;
count__37186_37208 = G__37220;
i__37187_37209 = G__37221;
continue;
} else {
var f_37222 = cljs.core.first.call(null,seq__37184_37216__$1);
cljs.core.println.call(null,"  ",f_37222);

var G__37223 = cljs.core.next.call(null,seq__37184_37216__$1);
var G__37224 = null;
var G__37225 = (0);
var G__37226 = (0);
seq__37184_37206 = G__37223;
chunk__37185_37207 = G__37224;
count__37186_37208 = G__37225;
i__37187_37209 = G__37226;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37227 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28286__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37227);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37227)))?cljs.core.second.call(null,arglists_37227):arglists_37227));
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
var seq__37188_37228 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37189_37229 = null;
var count__37190_37230 = (0);
var i__37191_37231 = (0);
while(true){
if((i__37191_37231 < count__37190_37230)){
var vec__37192_37232 = cljs.core._nth.call(null,chunk__37189_37229,i__37191_37231);
var name_37233 = cljs.core.nth.call(null,vec__37192_37232,(0),null);
var map__37195_37234 = cljs.core.nth.call(null,vec__37192_37232,(1),null);
var map__37195_37235__$1 = ((((!((map__37195_37234 == null)))?((((map__37195_37234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37195_37234.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37195_37234):map__37195_37234);
var doc_37236 = cljs.core.get.call(null,map__37195_37235__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37237 = cljs.core.get.call(null,map__37195_37235__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37233);

cljs.core.println.call(null," ",arglists_37237);

if(cljs.core.truth_(doc_37236)){
cljs.core.println.call(null," ",doc_37236);
} else {
}

var G__37238 = seq__37188_37228;
var G__37239 = chunk__37189_37229;
var G__37240 = count__37190_37230;
var G__37241 = (i__37191_37231 + (1));
seq__37188_37228 = G__37238;
chunk__37189_37229 = G__37239;
count__37190_37230 = G__37240;
i__37191_37231 = G__37241;
continue;
} else {
var temp__4657__auto___37242 = cljs.core.seq.call(null,seq__37188_37228);
if(temp__4657__auto___37242){
var seq__37188_37243__$1 = temp__4657__auto___37242;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37188_37243__$1)){
var c__29125__auto___37244 = cljs.core.chunk_first.call(null,seq__37188_37243__$1);
var G__37245 = cljs.core.chunk_rest.call(null,seq__37188_37243__$1);
var G__37246 = c__29125__auto___37244;
var G__37247 = cljs.core.count.call(null,c__29125__auto___37244);
var G__37248 = (0);
seq__37188_37228 = G__37245;
chunk__37189_37229 = G__37246;
count__37190_37230 = G__37247;
i__37191_37231 = G__37248;
continue;
} else {
var vec__37197_37249 = cljs.core.first.call(null,seq__37188_37243__$1);
var name_37250 = cljs.core.nth.call(null,vec__37197_37249,(0),null);
var map__37200_37251 = cljs.core.nth.call(null,vec__37197_37249,(1),null);
var map__37200_37252__$1 = ((((!((map__37200_37251 == null)))?((((map__37200_37251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37200_37251.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37200_37251):map__37200_37251);
var doc_37253 = cljs.core.get.call(null,map__37200_37252__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37254 = cljs.core.get.call(null,map__37200_37252__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37250);

cljs.core.println.call(null," ",arglists_37254);

if(cljs.core.truth_(doc_37253)){
cljs.core.println.call(null," ",doc_37253);
} else {
}

var G__37255 = cljs.core.next.call(null,seq__37188_37243__$1);
var G__37256 = null;
var G__37257 = (0);
var G__37258 = (0);
seq__37188_37228 = G__37255;
chunk__37189_37229 = G__37256;
count__37190_37230 = G__37257;
i__37191_37231 = G__37258;
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

var seq__37202 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37203 = null;
var count__37204 = (0);
var i__37205 = (0);
while(true){
if((i__37205 < count__37204)){
var role = cljs.core._nth.call(null,chunk__37203,i__37205);
var temp__4657__auto___37259__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37259__$1)){
var spec_37260 = temp__4657__auto___37259__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37260));
} else {
}

var G__37261 = seq__37202;
var G__37262 = chunk__37203;
var G__37263 = count__37204;
var G__37264 = (i__37205 + (1));
seq__37202 = G__37261;
chunk__37203 = G__37262;
count__37204 = G__37263;
i__37205 = G__37264;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37202);
if(temp__4657__auto____$1){
var seq__37202__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37202__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__37202__$1);
var G__37265 = cljs.core.chunk_rest.call(null,seq__37202__$1);
var G__37266 = c__29125__auto__;
var G__37267 = cljs.core.count.call(null,c__29125__auto__);
var G__37268 = (0);
seq__37202 = G__37265;
chunk__37203 = G__37266;
count__37204 = G__37267;
i__37205 = G__37268;
continue;
} else {
var role = cljs.core.first.call(null,seq__37202__$1);
var temp__4657__auto___37269__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37269__$2)){
var spec_37270 = temp__4657__auto___37269__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37270));
} else {
}

var G__37271 = cljs.core.next.call(null,seq__37202__$1);
var G__37272 = null;
var G__37273 = (0);
var G__37274 = (0);
seq__37202 = G__37271;
chunk__37203 = G__37272;
count__37204 = G__37273;
i__37205 = G__37274;
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

//# sourceMappingURL=repl.js.map?rel=1504634401587
