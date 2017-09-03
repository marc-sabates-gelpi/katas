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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"show-product-details","show-product-details",-1820330652),(function (db,p__42188){
var vec__42189 = p__42188;
var _ = cljs.core.nth.call(null,vec__42189,(0),null);
var product_id = cljs.core.nth.call(null,vec__42189,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-displayed-product","current-displayed-product",-1795767584),product_id);
}));

//# sourceMappingURL=events.js.map?rel=1504468205348
