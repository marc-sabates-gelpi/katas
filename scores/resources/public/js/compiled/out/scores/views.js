// Compiled by ClojureScript 1.9.908 {}
goog.provide('scores.views');
goog.require('cljs.core');
goog.require('re_frame.core');
scores.views.add_rating_button = (function scores$views$add_rating_button(){
if(cljs.core.not.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-rating-form","add-rating-form",1147769512)], null))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-add-rating-form","show-add-rating-form",-1788304164)], null));
})], null),"Rate it"], null);
} else {
return null;
}
});
scores.views.add_rating_form = (function scores$views$add_rating_form(product_id){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-rating-form","add-rating-form",1147769512)], null))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"rating-to-add",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),"Add rating here",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"width","width",-384071477),"325px",new cljs.core.Keyword(null,"height","height",1025178622),"131px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submit-rating","submit-rating",-554876100),product_id,document.getElementById("rating-to-add").value], null));
})], null),"Submit"], null)], null)], null);
} else {
return null;
}
});
scores.views.product_ratings = (function scores$views$product_ratings(p__42069){
var map__42070 = p__42069;
var map__42070__$1 = ((((!((map__42070 == null)))?((((map__42070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42070.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42070):map__42070);
var id = cljs.core.get.call(null,map__42070__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ratings = new cljs.core.Keyword(null,"ratings","ratings",2118542621).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"products","products",1876973544)], null))).call(null,id));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#product-ratings","div#product-ratings",1928139153),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Ratings"], null),(cljs.core.truth_(ratings)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null)], null),cljs.core.doall.call(null,(function (){var iter__29094__auto__ = ((function (ratings,map__42070,map__42070__$1,id){
return (function scores$views$product_ratings_$_iter__42072(s__42073){
return (new cljs.core.LazySeq(null,((function (ratings,map__42070,map__42070__$1,id){
return (function (){
var s__42073__$1 = s__42073;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42073__$1);
if(temp__4657__auto__){
var s__42073__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42073__$2)){
var c__29092__auto__ = cljs.core.chunk_first.call(null,s__42073__$2);
var size__29093__auto__ = cljs.core.count.call(null,c__29092__auto__);
var b__42075 = cljs.core.chunk_buffer.call(null,size__29093__auto__);
if((function (){var i__42074 = (0);
while(true){
if((i__42074 < size__29093__auto__)){
var rating = cljs.core._nth.call(null,c__29092__auto__,i__42074);
cljs.core.chunk_append.call(null,b__42075,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),rating], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),rating], null)));

var G__42076 = (i__42074 + (1));
i__42074 = G__42076;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42075),scores$views$product_ratings_$_iter__42072.call(null,cljs.core.chunk_rest.call(null,s__42073__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42075),null);
}
} else {
var rating = cljs.core.first.call(null,s__42073__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),rating], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),rating], null)),scores$views$product_ratings_$_iter__42072.call(null,cljs.core.rest.call(null,s__42073__$2)));
}
} else {
return null;
}
break;
}
});})(ratings,map__42070,map__42070__$1,id))
,null,null));
});})(ratings,map__42070,map__42070__$1,id))
;
return iter__29094__auto__.call(null,ratings);
})())], null):["There are no customer's ratings for the product yet; be the first one!"].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scores.views.add_rating_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scores.views.add_rating_form,id], null)], null);
});
scores.views.product_details = (function scores$views$product_details(p__42077){
var map__42078 = p__42077;
var map__42078__$1 = ((((!((map__42078 == null)))?((((map__42078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42078.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42078):map__42078);
var name = cljs.core.get.call(null,map__42078__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__42078__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#product-details","div#product-details",1837523652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Product details"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),description], null)], null)], null);
});
scores.views.product = (function scores$views$product(){
var temp__4657__auto__ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-displayed-product","current-displayed-product",-1795767584)], null)));
if(cljs.core.truth_(temp__4657__auto__)){
var product = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scores.views.product_details,product], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scores.views.product_ratings,product], null)], null);
} else {
return null;
}
});
scores.views.product_link = (function scores$views$product_link(product){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-product-details","show-product-details",-1820330652),product], null));
})], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(product)], null);
});
});
scores.views.product_list = (function scores$views$product_list(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"height","height",1025178622),"700px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.doall.call(null,(function (){var iter__29094__auto__ = (function scores$views$product_list_$_iter__42080(s__42081){
return (new cljs.core.LazySeq(null,(function (){
var s__42081__$1 = s__42081;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42081__$1);
if(temp__4657__auto__){
var s__42081__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42081__$2)){
var c__29092__auto__ = cljs.core.chunk_first.call(null,s__42081__$2);
var size__29093__auto__ = cljs.core.count.call(null,c__29092__auto__);
var b__42083 = cljs.core.chunk_buffer.call(null,size__29093__auto__);
if((function (){var i__42082 = (0);
while(true){
if((i__42082 < size__29093__auto__)){
var product = cljs.core._nth.call(null,c__29092__auto__,i__42082);
cljs.core.chunk_append.call(null,b__42083,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scores.views.product_link,cljs.core.val.call(null,product)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,product))], null)));

var G__42084 = (i__42082 + (1));
i__42082 = G__42084;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42083),scores$views$product_list_$_iter__42080.call(null,cljs.core.chunk_rest.call(null,s__42081__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42083),null);
}
} else {
var product = cljs.core.first.call(null,s__42081__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scores.views.product_link,cljs.core.val.call(null,product)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,product))], null)),scores$views$product_list_$_iter__42080.call(null,cljs.core.rest.call(null,s__42081__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29094__auto__.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"products","products",1876973544)], null))));
})())], null)], null);
});
scores.views.main_panel = (function scores$views$main_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"750px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Product Page"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scores.views.product_list], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scores.views.product], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1504643950249
