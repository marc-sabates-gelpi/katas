// Compiled by ClojureScript 1.9.908 {}
goog.provide('scores.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('scores.db');
goog.require('scores.views');
goog.require('reagent.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return scores.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"show-product-details","show-product-details",-1820330652),(function (db,p__42087){
var vec__42088 = p__42087;
var _ = cljs.core.nth.call(null,vec__42088,(0),null);
var product = cljs.core.nth.call(null,vec__42088,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-displayed-product","current-displayed-product",-1795767584),product,new cljs.core.Keyword(null,"add-rating-form","add-rating-form",1147769512),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"show-add-rating-form","show-add-rating-form",-1788304164),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"add-rating-form","add-rating-form",1147769512),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"hide-add-rating-form","hide-add-rating-form",1361699916),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"add-rating-form","add-rating-form",1147769512),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"submit-rating","submit-rating",-554876100),(function (db,p__42091){
var vec__42092 = p__42091;
var _ = cljs.core.nth.call(null,vec__42092,(0),null);
var product_id = cljs.core.nth.call(null,vec__42092,(1),null);
var rating = cljs.core.nth.call(null,vec__42092,(2),null);
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"add-rating-form","add-rating-form",1147769512),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"products","products",1876973544),product_id,new cljs.core.Keyword(null,"ratings","ratings",2118542621)], null),cljs.core.conj,rating);
}));

//# sourceMappingURL=events.js.map?rel=1504643950275
