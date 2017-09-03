// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37161){
var map__37162 = p__37161;
var map__37162__$1 = ((((!((map__37162 == null)))?((((map__37162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37162.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37162):map__37162);
var m = map__37162__$1;
var n = cljs.core.get.call(null,map__37162__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37162__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37164_37186 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37165_37187 = null;
var count__37166_37188 = (0);
var i__37167_37189 = (0);
while(true){
if((i__37167_37189 < count__37166_37188)){
var f_37190 = cljs.core._nth.call(null,chunk__37165_37187,i__37167_37189);
cljs.core.println.call(null,"  ",f_37190);

var G__37191 = seq__37164_37186;
var G__37192 = chunk__37165_37187;
var G__37193 = count__37166_37188;
var G__37194 = (i__37167_37189 + (1));
seq__37164_37186 = G__37191;
chunk__37165_37187 = G__37192;
count__37166_37188 = G__37193;
i__37167_37189 = G__37194;
continue;
} else {
var temp__4657__auto___37195 = cljs.core.seq.call(null,seq__37164_37186);
if(temp__4657__auto___37195){
var seq__37164_37196__$1 = temp__4657__auto___37195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37164_37196__$1)){
var c__29125__auto___37197 = cljs.core.chunk_first.call(null,seq__37164_37196__$1);
var G__37198 = cljs.core.chunk_rest.call(null,seq__37164_37196__$1);
var G__37199 = c__29125__auto___37197;
var G__37200 = cljs.core.count.call(null,c__29125__auto___37197);
var G__37201 = (0);
seq__37164_37186 = G__37198;
chunk__37165_37187 = G__37199;
count__37166_37188 = G__37200;
i__37167_37189 = G__37201;
continue;
} else {
var f_37202 = cljs.core.first.call(null,seq__37164_37196__$1);
cljs.core.println.call(null,"  ",f_37202);

var G__37203 = cljs.core.next.call(null,seq__37164_37196__$1);
var G__37204 = null;
var G__37205 = (0);
var G__37206 = (0);
seq__37164_37186 = G__37203;
chunk__37165_37187 = G__37204;
count__37166_37188 = G__37205;
i__37167_37189 = G__37206;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37207 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28286__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37207);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37207)))?cljs.core.second.call(null,arglists_37207):arglists_37207));
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
var seq__37168_37208 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37169_37209 = null;
var count__37170_37210 = (0);
var i__37171_37211 = (0);
while(true){
if((i__37171_37211 < count__37170_37210)){
var vec__37172_37212 = cljs.core._nth.call(null,chunk__37169_37209,i__37171_37211);
var name_37213 = cljs.core.nth.call(null,vec__37172_37212,(0),null);
var map__37175_37214 = cljs.core.nth.call(null,vec__37172_37212,(1),null);
var map__37175_37215__$1 = ((((!((map__37175_37214 == null)))?((((map__37175_37214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37175_37214.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37175_37214):map__37175_37214);
var doc_37216 = cljs.core.get.call(null,map__37175_37215__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37217 = cljs.core.get.call(null,map__37175_37215__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37213);

cljs.core.println.call(null," ",arglists_37217);

if(cljs.core.truth_(doc_37216)){
cljs.core.println.call(null," ",doc_37216);
} else {
}

var G__37218 = seq__37168_37208;
var G__37219 = chunk__37169_37209;
var G__37220 = count__37170_37210;
var G__37221 = (i__37171_37211 + (1));
seq__37168_37208 = G__37218;
chunk__37169_37209 = G__37219;
count__37170_37210 = G__37220;
i__37171_37211 = G__37221;
continue;
} else {
var temp__4657__auto___37222 = cljs.core.seq.call(null,seq__37168_37208);
if(temp__4657__auto___37222){
var seq__37168_37223__$1 = temp__4657__auto___37222;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37168_37223__$1)){
var c__29125__auto___37224 = cljs.core.chunk_first.call(null,seq__37168_37223__$1);
var G__37225 = cljs.core.chunk_rest.call(null,seq__37168_37223__$1);
var G__37226 = c__29125__auto___37224;
var G__37227 = cljs.core.count.call(null,c__29125__auto___37224);
var G__37228 = (0);
seq__37168_37208 = G__37225;
chunk__37169_37209 = G__37226;
count__37170_37210 = G__37227;
i__37171_37211 = G__37228;
continue;
} else {
var vec__37177_37229 = cljs.core.first.call(null,seq__37168_37223__$1);
var name_37230 = cljs.core.nth.call(null,vec__37177_37229,(0),null);
var map__37180_37231 = cljs.core.nth.call(null,vec__37177_37229,(1),null);
var map__37180_37232__$1 = ((((!((map__37180_37231 == null)))?((((map__37180_37231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37180_37231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37180_37231):map__37180_37231);
var doc_37233 = cljs.core.get.call(null,map__37180_37232__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37234 = cljs.core.get.call(null,map__37180_37232__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37230);

cljs.core.println.call(null," ",arglists_37234);

if(cljs.core.truth_(doc_37233)){
cljs.core.println.call(null," ",doc_37233);
} else {
}

var G__37235 = cljs.core.next.call(null,seq__37168_37223__$1);
var G__37236 = null;
var G__37237 = (0);
var G__37238 = (0);
seq__37168_37208 = G__37235;
chunk__37169_37209 = G__37236;
count__37170_37210 = G__37237;
i__37171_37211 = G__37238;
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

var seq__37182 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37183 = null;
var count__37184 = (0);
var i__37185 = (0);
while(true){
if((i__37185 < count__37184)){
var role = cljs.core._nth.call(null,chunk__37183,i__37185);
var temp__4657__auto___37239__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37239__$1)){
var spec_37240 = temp__4657__auto___37239__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37240));
} else {
}

var G__37241 = seq__37182;
var G__37242 = chunk__37183;
var G__37243 = count__37184;
var G__37244 = (i__37185 + (1));
seq__37182 = G__37241;
chunk__37183 = G__37242;
count__37184 = G__37243;
i__37185 = G__37244;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37182);
if(temp__4657__auto____$1){
var seq__37182__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37182__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__37182__$1);
var G__37245 = cljs.core.chunk_rest.call(null,seq__37182__$1);
var G__37246 = c__29125__auto__;
var G__37247 = cljs.core.count.call(null,c__29125__auto__);
var G__37248 = (0);
seq__37182 = G__37245;
chunk__37183 = G__37246;
count__37184 = G__37247;
i__37185 = G__37248;
continue;
} else {
var role = cljs.core.first.call(null,seq__37182__$1);
var temp__4657__auto___37249__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37249__$2)){
var spec_37250 = temp__4657__auto___37249__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37250));
} else {
}

var G__37251 = cljs.core.next.call(null,seq__37182__$1);
var G__37252 = null;
var G__37253 = (0);
var G__37254 = (0);
seq__37182 = G__37251;
chunk__37183 = G__37252;
count__37184 = G__37253;
i__37185 = G__37254;
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

//# sourceMappingURL=repl.js.map?rel=1504451419841
