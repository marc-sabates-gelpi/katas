// Compiled by ClojureScript 1.9.908 {}
goog.provide('scores.views');
goog.require('cljs.core');
goog.require('re_frame.core');
scores.views.product = (function scores$views$product(){
var temp__4657__auto__ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-displayed-product","current-displayed-product",-1795767584)], null)));
if(cljs.core.truth_(temp__4657__auto__)){
var product_id = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"product-details"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Product details"], null),["Product details' for product id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(product_id)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"product-rating"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Ratings"], null),["Customer's ratings for the product id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(product_id)].join('')], null)], null);
} else {
return null;
}
});
scores.views.product_list = (function scores$views$product_list(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"width","width",-384071477),"200px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.doall.call(null,(function (){var iter__29094__auto__ = (function scores$views$product_list_$_iter__42181(s__42182){
return (new cljs.core.LazySeq(null,(function (){
var s__42182__$1 = s__42182;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42182__$1);
if(temp__4657__auto__){
var s__42182__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42182__$2)){
var c__29092__auto__ = cljs.core.chunk_first.call(null,s__42182__$2);
var size__29093__auto__ = cljs.core.count.call(null,c__29092__auto__);
var b__42184 = cljs.core.chunk_buffer.call(null,size__29093__auto__);
if((function (){var i__42183 = (0);
while(true){
if((i__42183 < size__29093__auto__)){
var product = cljs.core._nth.call(null,c__29092__auto__,i__42183);
cljs.core.chunk_append.call(null,b__42184,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-id","data-id",1023855591),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(product),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(product)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42183,product,c__29092__auto__,size__29093__auto__,b__42184,s__42182__$2,temp__4657__auto__){
return (function (e){
e.preventDefault();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-product-details","show-product-details",-1820330652),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(product)], null));
});})(i__42183,product,c__29092__auto__,size__29093__auto__,b__42184,s__42182__$2,temp__4657__auto__))
], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(product)], null)], null));

var G__42185 = (i__42183 + (1));
i__42183 = G__42185;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42184),scores$views$product_list_$_iter__42181.call(null,cljs.core.chunk_rest.call(null,s__42182__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42184),null);
}
} else {
var product = cljs.core.first.call(null,s__42182__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-id","data-id",1023855591),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(product),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(product)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (product,s__42182__$2,temp__4657__auto__){
return (function (e){
e.preventDefault();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-product-details","show-product-details",-1820330652),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(product)], null));
});})(product,s__42182__$2,temp__4657__auto__))
], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(product)], null)], null),scores$views$product_list_$_iter__42181.call(null,cljs.core.rest.call(null,s__42182__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29094__auto__.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"product-list","product-list",-1660071433)], null))));
})())], null)], null);
});
scores.views.main_panel = (function scores$views$main_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"750px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Product Page"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scores.views.product_list], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scores.views.product], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1504468205334
