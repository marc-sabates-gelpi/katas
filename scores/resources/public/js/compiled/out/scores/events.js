// Compiled by ClojureScript 1.9.908 {}
goog.provide('scores.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('scores.db');
goog.require('scores.views');
goog.require('reagent.core');
goog.require('day8.re_frame.http_fx');
goog.require('ajax.edn');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return scores.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"show-product-details","show-product-details",-1820330652),(function (db,p__42466){
var vec__42467 = p__42466;
var _ = cljs.core.nth.call(null,vec__42467,(0),null);
var product = cljs.core.nth.call(null,vec__42467,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-displayed-product","current-displayed-product",-1795767584),product,new cljs.core.Keyword(null,"add-rating-form","add-rating-form",1147769512),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"show-add-rating-form","show-add-rating-form",-1788304164),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"add-rating-form","add-rating-form",1147769512),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"hide-add-rating-form","hide-add-rating-form",1361699916),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"add-rating-form","add-rating-form",1147769512),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"xhrio-update-success","xhrio-update-success",1639440897),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"xhrio-update-failure","xhrio-update-failure",-329741479),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"xhrio-update-failure","xhrio-update-failure",-329741479),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"xhrio-update-failure","xhrio-update-failure",-329741479),true);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"submit-rating","submit-rating",-554876100),(function (cofx,p__42470){
var vec__42471 = p__42470;
var _ = cljs.core.nth.call(null,vec__42471,(0),null);
var product_id = cljs.core.nth.call(null,vec__42471,(1),null);
var rating = cljs.core.nth.call(null,vec__42471,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"uri","uri",-774711847),["http://localhost:3000/scores/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(product_id),"/update"].join(''),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(10000),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rating","rating",144173662),rating], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.edn.edn_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.edn.edn_response_format.call(null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhrio-update-success","xhrio-update-success",1639440897)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhrio-update-failure","xhrio-update-failure",-329741479)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"add-rating-form","add-rating-form",1147769512),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"products","products",1876973544),product_id,new cljs.core.Keyword(null,"ratings","ratings",2118542621)], null),cljs.core.conj,rating)], null);
}));

//# sourceMappingURL=events.js.map?rel=1504734335659
