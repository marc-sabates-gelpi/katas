// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e37449){if((e37449 instanceof Error)){
var e = e37449;
return "Error: Unable to stringify";
} else {
throw e37449;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37452 = arguments.length;
switch (G__37452) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37450_SHARP_){
if(typeof p1__37450_SHARP_ === 'string'){
return p1__37450_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37450_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29462__auto__ = [];
var len__29455__auto___37455 = arguments.length;
var i__29456__auto___37456 = (0);
while(true){
if((i__29456__auto___37456 < len__29455__auto___37455)){
args__29462__auto__.push((arguments[i__29456__auto___37456]));

var G__37457 = (i__29456__auto___37456 + (1));
i__29456__auto___37456 = G__37457;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37454){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37454));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29462__auto__ = [];
var len__29455__auto___37459 = arguments.length;
var i__29456__auto___37460 = (0);
while(true){
if((i__29456__auto___37460 < len__29455__auto___37459)){
args__29462__auto__.push((arguments[i__29456__auto___37460]));

var G__37461 = (i__29456__auto___37460 + (1));
i__29456__auto___37460 = G__37461;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37458){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37458));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37462){
var map__37463 = p__37462;
var map__37463__$1 = ((((!((map__37463 == null)))?((((map__37463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37463):map__37463);
var message = cljs.core.get.call(null,map__37463__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37463__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28286__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28274__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28274__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28274__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__32563__auto___37542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto___37542,ch){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto___37542,ch){
return (function (state_37514){
var state_val_37515 = (state_37514[(1)]);
if((state_val_37515 === (7))){
var inst_37510 = (state_37514[(2)]);
var state_37514__$1 = state_37514;
var statearr_37516_37543 = state_37514__$1;
(statearr_37516_37543[(2)] = inst_37510);

(statearr_37516_37543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (1))){
var state_37514__$1 = state_37514;
var statearr_37517_37544 = state_37514__$1;
(statearr_37517_37544[(2)] = null);

(statearr_37517_37544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (4))){
var inst_37467 = (state_37514[(7)]);
var inst_37467__$1 = (state_37514[(2)]);
var state_37514__$1 = (function (){var statearr_37518 = state_37514;
(statearr_37518[(7)] = inst_37467__$1);

return statearr_37518;
})();
if(cljs.core.truth_(inst_37467__$1)){
var statearr_37519_37545 = state_37514__$1;
(statearr_37519_37545[(1)] = (5));

} else {
var statearr_37520_37546 = state_37514__$1;
(statearr_37520_37546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (15))){
var inst_37474 = (state_37514[(8)]);
var inst_37489 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37474);
var inst_37490 = cljs.core.first.call(null,inst_37489);
var inst_37491 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37490);
var inst_37492 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37491)].join('');
var inst_37493 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37492);
var state_37514__$1 = state_37514;
var statearr_37521_37547 = state_37514__$1;
(statearr_37521_37547[(2)] = inst_37493);

(statearr_37521_37547[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (13))){
var inst_37498 = (state_37514[(2)]);
var state_37514__$1 = state_37514;
var statearr_37522_37548 = state_37514__$1;
(statearr_37522_37548[(2)] = inst_37498);

(statearr_37522_37548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (6))){
var state_37514__$1 = state_37514;
var statearr_37523_37549 = state_37514__$1;
(statearr_37523_37549[(2)] = null);

(statearr_37523_37549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (17))){
var inst_37496 = (state_37514[(2)]);
var state_37514__$1 = state_37514;
var statearr_37524_37550 = state_37514__$1;
(statearr_37524_37550[(2)] = inst_37496);

(statearr_37524_37550[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (3))){
var inst_37512 = (state_37514[(2)]);
var state_37514__$1 = state_37514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37514__$1,inst_37512);
} else {
if((state_val_37515 === (12))){
var inst_37473 = (state_37514[(9)]);
var inst_37487 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37473,opts);
var state_37514__$1 = state_37514;
if(cljs.core.truth_(inst_37487)){
var statearr_37525_37551 = state_37514__$1;
(statearr_37525_37551[(1)] = (15));

} else {
var statearr_37526_37552 = state_37514__$1;
(statearr_37526_37552[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (2))){
var state_37514__$1 = state_37514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37514__$1,(4),ch);
} else {
if((state_val_37515 === (11))){
var inst_37474 = (state_37514[(8)]);
var inst_37479 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37480 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37474);
var inst_37481 = cljs.core.async.timeout.call(null,(1000));
var inst_37482 = [inst_37480,inst_37481];
var inst_37483 = (new cljs.core.PersistentVector(null,2,(5),inst_37479,inst_37482,null));
var state_37514__$1 = state_37514;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37514__$1,(14),inst_37483);
} else {
if((state_val_37515 === (9))){
var inst_37474 = (state_37514[(8)]);
var inst_37500 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37501 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37474);
var inst_37502 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37501);
var inst_37503 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37502)].join('');
var inst_37504 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37503);
var state_37514__$1 = (function (){var statearr_37527 = state_37514;
(statearr_37527[(10)] = inst_37500);

return statearr_37527;
})();
var statearr_37528_37553 = state_37514__$1;
(statearr_37528_37553[(2)] = inst_37504);

(statearr_37528_37553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (5))){
var inst_37467 = (state_37514[(7)]);
var inst_37469 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37470 = (new cljs.core.PersistentArrayMap(null,2,inst_37469,null));
var inst_37471 = (new cljs.core.PersistentHashSet(null,inst_37470,null));
var inst_37472 = figwheel.client.focus_msgs.call(null,inst_37471,inst_37467);
var inst_37473 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37472);
var inst_37474 = cljs.core.first.call(null,inst_37472);
var inst_37475 = figwheel.client.autoload_QMARK_.call(null);
var state_37514__$1 = (function (){var statearr_37529 = state_37514;
(statearr_37529[(9)] = inst_37473);

(statearr_37529[(8)] = inst_37474);

return statearr_37529;
})();
if(cljs.core.truth_(inst_37475)){
var statearr_37530_37554 = state_37514__$1;
(statearr_37530_37554[(1)] = (8));

} else {
var statearr_37531_37555 = state_37514__$1;
(statearr_37531_37555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (14))){
var inst_37485 = (state_37514[(2)]);
var state_37514__$1 = state_37514;
var statearr_37532_37556 = state_37514__$1;
(statearr_37532_37556[(2)] = inst_37485);

(statearr_37532_37556[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (16))){
var state_37514__$1 = state_37514;
var statearr_37533_37557 = state_37514__$1;
(statearr_37533_37557[(2)] = null);

(statearr_37533_37557[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (10))){
var inst_37506 = (state_37514[(2)]);
var state_37514__$1 = (function (){var statearr_37534 = state_37514;
(statearr_37534[(11)] = inst_37506);

return statearr_37534;
})();
var statearr_37535_37558 = state_37514__$1;
(statearr_37535_37558[(2)] = null);

(statearr_37535_37558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (8))){
var inst_37473 = (state_37514[(9)]);
var inst_37477 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37473,opts);
var state_37514__$1 = state_37514;
if(cljs.core.truth_(inst_37477)){
var statearr_37536_37559 = state_37514__$1;
(statearr_37536_37559[(1)] = (11));

} else {
var statearr_37537_37560 = state_37514__$1;
(statearr_37537_37560[(1)] = (12));

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
});})(c__32563__auto___37542,ch))
;
return ((function (switch__32475__auto__,c__32563__auto___37542,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32476__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32476__auto____0 = (function (){
var statearr_37538 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37538[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32476__auto__);

(statearr_37538[(1)] = (1));

return statearr_37538;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32476__auto____1 = (function (state_37514){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_37514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e37539){if((e37539 instanceof Object)){
var ex__32479__auto__ = e37539;
var statearr_37540_37561 = state_37514;
(statearr_37540_37561[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37562 = state_37514;
state_37514 = G__37562;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32476__auto__ = function(state_37514){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32476__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32476__auto____1.call(this,state_37514);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32476__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32476__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto___37542,ch))
})();
var state__32565__auto__ = (function (){var statearr_37541 = f__32564__auto__.call(null);
(statearr_37541[(6)] = c__32563__auto___37542);

return statearr_37541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto___37542,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37563_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37563_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37565 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37565){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37564){if((e37564 instanceof Error)){
var e = e37564;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37565], null));
} else {
var e = e37564;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37565))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37566){
var map__37567 = p__37566;
var map__37567__$1 = ((((!((map__37567 == null)))?((((map__37567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37567.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37567):map__37567);
var opts = map__37567__$1;
var build_id = cljs.core.get.call(null,map__37567__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37567,map__37567__$1,opts,build_id){
return (function (p__37569){
var vec__37570 = p__37569;
var seq__37571 = cljs.core.seq.call(null,vec__37570);
var first__37572 = cljs.core.first.call(null,seq__37571);
var seq__37571__$1 = cljs.core.next.call(null,seq__37571);
var map__37573 = first__37572;
var map__37573__$1 = ((((!((map__37573 == null)))?((((map__37573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37573.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37573):map__37573);
var msg = map__37573__$1;
var msg_name = cljs.core.get.call(null,map__37573__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37571__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37570,seq__37571,first__37572,seq__37571__$1,map__37573,map__37573__$1,msg,msg_name,_,map__37567,map__37567__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37570,seq__37571,first__37572,seq__37571__$1,map__37573,map__37573__$1,msg,msg_name,_,map__37567,map__37567__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37567,map__37567__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37575){
var vec__37576 = p__37575;
var seq__37577 = cljs.core.seq.call(null,vec__37576);
var first__37578 = cljs.core.first.call(null,seq__37577);
var seq__37577__$1 = cljs.core.next.call(null,seq__37577);
var map__37579 = first__37578;
var map__37579__$1 = ((((!((map__37579 == null)))?((((map__37579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37579):map__37579);
var msg = map__37579__$1;
var msg_name = cljs.core.get.call(null,map__37579__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37577__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37581){
var map__37582 = p__37581;
var map__37582__$1 = ((((!((map__37582 == null)))?((((map__37582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37582.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37582):map__37582);
var on_compile_warning = cljs.core.get.call(null,map__37582__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37582__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37582,map__37582__$1,on_compile_warning,on_compile_fail){
return (function (p__37584){
var vec__37585 = p__37584;
var seq__37586 = cljs.core.seq.call(null,vec__37585);
var first__37587 = cljs.core.first.call(null,seq__37586);
var seq__37586__$1 = cljs.core.next.call(null,seq__37586);
var map__37588 = first__37587;
var map__37588__$1 = ((((!((map__37588 == null)))?((((map__37588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37588.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37588):map__37588);
var msg = map__37588__$1;
var msg_name = cljs.core.get.call(null,map__37588__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37586__$1;
var pred__37590 = cljs.core._EQ_;
var expr__37591 = msg_name;
if(cljs.core.truth_(pred__37590.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37591))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37590.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37591))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37582,map__37582__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__32563__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto__,msg_hist,msg_names,msg){
return (function (state_37680){
var state_val_37681 = (state_37680[(1)]);
if((state_val_37681 === (7))){
var inst_37600 = (state_37680[(2)]);
var state_37680__$1 = state_37680;
if(cljs.core.truth_(inst_37600)){
var statearr_37682_37729 = state_37680__$1;
(statearr_37682_37729[(1)] = (8));

} else {
var statearr_37683_37730 = state_37680__$1;
(statearr_37683_37730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (20))){
var inst_37674 = (state_37680[(2)]);
var state_37680__$1 = state_37680;
var statearr_37684_37731 = state_37680__$1;
(statearr_37684_37731[(2)] = inst_37674);

(statearr_37684_37731[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (27))){
var inst_37670 = (state_37680[(2)]);
var state_37680__$1 = state_37680;
var statearr_37685_37732 = state_37680__$1;
(statearr_37685_37732[(2)] = inst_37670);

(statearr_37685_37732[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (1))){
var inst_37593 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37680__$1 = state_37680;
if(cljs.core.truth_(inst_37593)){
var statearr_37686_37733 = state_37680__$1;
(statearr_37686_37733[(1)] = (2));

} else {
var statearr_37687_37734 = state_37680__$1;
(statearr_37687_37734[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (24))){
var inst_37672 = (state_37680[(2)]);
var state_37680__$1 = state_37680;
var statearr_37688_37735 = state_37680__$1;
(statearr_37688_37735[(2)] = inst_37672);

(statearr_37688_37735[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (4))){
var inst_37678 = (state_37680[(2)]);
var state_37680__$1 = state_37680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37680__$1,inst_37678);
} else {
if((state_val_37681 === (15))){
var inst_37676 = (state_37680[(2)]);
var state_37680__$1 = state_37680;
var statearr_37689_37736 = state_37680__$1;
(statearr_37689_37736[(2)] = inst_37676);

(statearr_37689_37736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (21))){
var inst_37629 = (state_37680[(2)]);
var inst_37630 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37631 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37630);
var state_37680__$1 = (function (){var statearr_37690 = state_37680;
(statearr_37690[(7)] = inst_37629);

return statearr_37690;
})();
var statearr_37691_37737 = state_37680__$1;
(statearr_37691_37737[(2)] = inst_37631);

(statearr_37691_37737[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (31))){
var inst_37659 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37680__$1 = state_37680;
if(cljs.core.truth_(inst_37659)){
var statearr_37692_37738 = state_37680__$1;
(statearr_37692_37738[(1)] = (34));

} else {
var statearr_37693_37739 = state_37680__$1;
(statearr_37693_37739[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (32))){
var inst_37668 = (state_37680[(2)]);
var state_37680__$1 = state_37680;
var statearr_37694_37740 = state_37680__$1;
(statearr_37694_37740[(2)] = inst_37668);

(statearr_37694_37740[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (33))){
var inst_37655 = (state_37680[(2)]);
var inst_37656 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37657 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37656);
var state_37680__$1 = (function (){var statearr_37695 = state_37680;
(statearr_37695[(8)] = inst_37655);

return statearr_37695;
})();
var statearr_37696_37741 = state_37680__$1;
(statearr_37696_37741[(2)] = inst_37657);

(statearr_37696_37741[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (13))){
var inst_37614 = figwheel.client.heads_up.clear.call(null);
var state_37680__$1 = state_37680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37680__$1,(16),inst_37614);
} else {
if((state_val_37681 === (22))){
var inst_37635 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37636 = figwheel.client.heads_up.append_warning_message.call(null,inst_37635);
var state_37680__$1 = state_37680;
var statearr_37697_37742 = state_37680__$1;
(statearr_37697_37742[(2)] = inst_37636);

(statearr_37697_37742[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (36))){
var inst_37666 = (state_37680[(2)]);
var state_37680__$1 = state_37680;
var statearr_37698_37743 = state_37680__$1;
(statearr_37698_37743[(2)] = inst_37666);

(statearr_37698_37743[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (29))){
var inst_37646 = (state_37680[(2)]);
var inst_37647 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37648 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37647);
var state_37680__$1 = (function (){var statearr_37699 = state_37680;
(statearr_37699[(9)] = inst_37646);

return statearr_37699;
})();
var statearr_37700_37744 = state_37680__$1;
(statearr_37700_37744[(2)] = inst_37648);

(statearr_37700_37744[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (6))){
var inst_37595 = (state_37680[(10)]);
var state_37680__$1 = state_37680;
var statearr_37701_37745 = state_37680__$1;
(statearr_37701_37745[(2)] = inst_37595);

(statearr_37701_37745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (28))){
var inst_37642 = (state_37680[(2)]);
var inst_37643 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37644 = figwheel.client.heads_up.display_warning.call(null,inst_37643);
var state_37680__$1 = (function (){var statearr_37702 = state_37680;
(statearr_37702[(11)] = inst_37642);

return statearr_37702;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37680__$1,(29),inst_37644);
} else {
if((state_val_37681 === (25))){
var inst_37640 = figwheel.client.heads_up.clear.call(null);
var state_37680__$1 = state_37680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37680__$1,(28),inst_37640);
} else {
if((state_val_37681 === (34))){
var inst_37661 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37680__$1 = state_37680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37680__$1,(37),inst_37661);
} else {
if((state_val_37681 === (17))){
var inst_37620 = (state_37680[(2)]);
var inst_37621 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37622 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37621);
var state_37680__$1 = (function (){var statearr_37703 = state_37680;
(statearr_37703[(12)] = inst_37620);

return statearr_37703;
})();
var statearr_37704_37746 = state_37680__$1;
(statearr_37704_37746[(2)] = inst_37622);

(statearr_37704_37746[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (3))){
var inst_37612 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37680__$1 = state_37680;
if(cljs.core.truth_(inst_37612)){
var statearr_37705_37747 = state_37680__$1;
(statearr_37705_37747[(1)] = (13));

} else {
var statearr_37706_37748 = state_37680__$1;
(statearr_37706_37748[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (12))){
var inst_37608 = (state_37680[(2)]);
var state_37680__$1 = state_37680;
var statearr_37707_37749 = state_37680__$1;
(statearr_37707_37749[(2)] = inst_37608);

(statearr_37707_37749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (2))){
var inst_37595 = (state_37680[(10)]);
var inst_37595__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37680__$1 = (function (){var statearr_37708 = state_37680;
(statearr_37708[(10)] = inst_37595__$1);

return statearr_37708;
})();
if(cljs.core.truth_(inst_37595__$1)){
var statearr_37709_37750 = state_37680__$1;
(statearr_37709_37750[(1)] = (5));

} else {
var statearr_37710_37751 = state_37680__$1;
(statearr_37710_37751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (23))){
var inst_37638 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37680__$1 = state_37680;
if(cljs.core.truth_(inst_37638)){
var statearr_37711_37752 = state_37680__$1;
(statearr_37711_37752[(1)] = (25));

} else {
var statearr_37712_37753 = state_37680__$1;
(statearr_37712_37753[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (35))){
var state_37680__$1 = state_37680;
var statearr_37713_37754 = state_37680__$1;
(statearr_37713_37754[(2)] = null);

(statearr_37713_37754[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (19))){
var inst_37633 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37680__$1 = state_37680;
if(cljs.core.truth_(inst_37633)){
var statearr_37714_37755 = state_37680__$1;
(statearr_37714_37755[(1)] = (22));

} else {
var statearr_37715_37756 = state_37680__$1;
(statearr_37715_37756[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (11))){
var inst_37604 = (state_37680[(2)]);
var state_37680__$1 = state_37680;
var statearr_37716_37757 = state_37680__$1;
(statearr_37716_37757[(2)] = inst_37604);

(statearr_37716_37757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (9))){
var inst_37606 = figwheel.client.heads_up.clear.call(null);
var state_37680__$1 = state_37680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37680__$1,(12),inst_37606);
} else {
if((state_val_37681 === (5))){
var inst_37597 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37680__$1 = state_37680;
var statearr_37717_37758 = state_37680__$1;
(statearr_37717_37758[(2)] = inst_37597);

(statearr_37717_37758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (14))){
var inst_37624 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37680__$1 = state_37680;
if(cljs.core.truth_(inst_37624)){
var statearr_37718_37759 = state_37680__$1;
(statearr_37718_37759[(1)] = (18));

} else {
var statearr_37719_37760 = state_37680__$1;
(statearr_37719_37760[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (26))){
var inst_37650 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37680__$1 = state_37680;
if(cljs.core.truth_(inst_37650)){
var statearr_37720_37761 = state_37680__$1;
(statearr_37720_37761[(1)] = (30));

} else {
var statearr_37721_37762 = state_37680__$1;
(statearr_37721_37762[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (16))){
var inst_37616 = (state_37680[(2)]);
var inst_37617 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37618 = figwheel.client.heads_up.display_exception.call(null,inst_37617);
var state_37680__$1 = (function (){var statearr_37722 = state_37680;
(statearr_37722[(13)] = inst_37616);

return statearr_37722;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37680__$1,(17),inst_37618);
} else {
if((state_val_37681 === (30))){
var inst_37652 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37653 = figwheel.client.heads_up.display_warning.call(null,inst_37652);
var state_37680__$1 = state_37680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37680__$1,(33),inst_37653);
} else {
if((state_val_37681 === (10))){
var inst_37610 = (state_37680[(2)]);
var state_37680__$1 = state_37680;
var statearr_37723_37763 = state_37680__$1;
(statearr_37723_37763[(2)] = inst_37610);

(statearr_37723_37763[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (18))){
var inst_37626 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37627 = figwheel.client.heads_up.display_exception.call(null,inst_37626);
var state_37680__$1 = state_37680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37680__$1,(21),inst_37627);
} else {
if((state_val_37681 === (37))){
var inst_37663 = (state_37680[(2)]);
var state_37680__$1 = state_37680;
var statearr_37724_37764 = state_37680__$1;
(statearr_37724_37764[(2)] = inst_37663);

(statearr_37724_37764[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (8))){
var inst_37602 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37680__$1 = state_37680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37680__$1,(11),inst_37602);
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
});})(c__32563__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32475__auto__,c__32563__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32476__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32476__auto____0 = (function (){
var statearr_37725 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37725[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32476__auto__);

(statearr_37725[(1)] = (1));

return statearr_37725;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32476__auto____1 = (function (state_37680){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_37680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e37726){if((e37726 instanceof Object)){
var ex__32479__auto__ = e37726;
var statearr_37727_37765 = state_37680;
(statearr_37727_37765[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37766 = state_37680;
state_37680 = G__37766;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32476__auto__ = function(state_37680){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32476__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32476__auto____1.call(this,state_37680);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32476__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32476__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto__,msg_hist,msg_names,msg))
})();
var state__32565__auto__ = (function (){var statearr_37728 = f__32564__auto__.call(null);
(statearr_37728[(6)] = c__32563__auto__);

return statearr_37728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto__,msg_hist,msg_names,msg))
);

return c__32563__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32563__auto___37795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto___37795,ch){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto___37795,ch){
return (function (state_37781){
var state_val_37782 = (state_37781[(1)]);
if((state_val_37782 === (1))){
var state_37781__$1 = state_37781;
var statearr_37783_37796 = state_37781__$1;
(statearr_37783_37796[(2)] = null);

(statearr_37783_37796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37782 === (2))){
var state_37781__$1 = state_37781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37781__$1,(4),ch);
} else {
if((state_val_37782 === (3))){
var inst_37779 = (state_37781[(2)]);
var state_37781__$1 = state_37781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37781__$1,inst_37779);
} else {
if((state_val_37782 === (4))){
var inst_37769 = (state_37781[(7)]);
var inst_37769__$1 = (state_37781[(2)]);
var state_37781__$1 = (function (){var statearr_37784 = state_37781;
(statearr_37784[(7)] = inst_37769__$1);

return statearr_37784;
})();
if(cljs.core.truth_(inst_37769__$1)){
var statearr_37785_37797 = state_37781__$1;
(statearr_37785_37797[(1)] = (5));

} else {
var statearr_37786_37798 = state_37781__$1;
(statearr_37786_37798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37782 === (5))){
var inst_37769 = (state_37781[(7)]);
var inst_37771 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37769);
var state_37781__$1 = state_37781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37781__$1,(8),inst_37771);
} else {
if((state_val_37782 === (6))){
var state_37781__$1 = state_37781;
var statearr_37787_37799 = state_37781__$1;
(statearr_37787_37799[(2)] = null);

(statearr_37787_37799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37782 === (7))){
var inst_37777 = (state_37781[(2)]);
var state_37781__$1 = state_37781;
var statearr_37788_37800 = state_37781__$1;
(statearr_37788_37800[(2)] = inst_37777);

(statearr_37788_37800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37782 === (8))){
var inst_37773 = (state_37781[(2)]);
var state_37781__$1 = (function (){var statearr_37789 = state_37781;
(statearr_37789[(8)] = inst_37773);

return statearr_37789;
})();
var statearr_37790_37801 = state_37781__$1;
(statearr_37790_37801[(2)] = null);

(statearr_37790_37801[(1)] = (2));


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
});})(c__32563__auto___37795,ch))
;
return ((function (switch__32475__auto__,c__32563__auto___37795,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32476__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32476__auto____0 = (function (){
var statearr_37791 = [null,null,null,null,null,null,null,null,null];
(statearr_37791[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32476__auto__);

(statearr_37791[(1)] = (1));

return statearr_37791;
});
var figwheel$client$heads_up_plugin_$_state_machine__32476__auto____1 = (function (state_37781){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_37781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e37792){if((e37792 instanceof Object)){
var ex__32479__auto__ = e37792;
var statearr_37793_37802 = state_37781;
(statearr_37793_37802[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37803 = state_37781;
state_37781 = G__37803;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32476__auto__ = function(state_37781){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32476__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32476__auto____1.call(this,state_37781);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32476__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32476__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto___37795,ch))
})();
var state__32565__auto__ = (function (){var statearr_37794 = f__32564__auto__.call(null);
(statearr_37794[(6)] = c__32563__auto___37795);

return statearr_37794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto___37795,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32563__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto__){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto__){
return (function (state_37809){
var state_val_37810 = (state_37809[(1)]);
if((state_val_37810 === (1))){
var inst_37804 = cljs.core.async.timeout.call(null,(3000));
var state_37809__$1 = state_37809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37809__$1,(2),inst_37804);
} else {
if((state_val_37810 === (2))){
var inst_37806 = (state_37809[(2)]);
var inst_37807 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37809__$1 = (function (){var statearr_37811 = state_37809;
(statearr_37811[(7)] = inst_37806);

return statearr_37811;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37809__$1,inst_37807);
} else {
return null;
}
}
});})(c__32563__auto__))
;
return ((function (switch__32475__auto__,c__32563__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32476__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32476__auto____0 = (function (){
var statearr_37812 = [null,null,null,null,null,null,null,null];
(statearr_37812[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32476__auto__);

(statearr_37812[(1)] = (1));

return statearr_37812;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32476__auto____1 = (function (state_37809){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_37809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e37813){if((e37813 instanceof Object)){
var ex__32479__auto__ = e37813;
var statearr_37814_37816 = state_37809;
(statearr_37814_37816[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37817 = state_37809;
state_37809 = G__37817;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32476__auto__ = function(state_37809){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32476__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32476__auto____1.call(this,state_37809);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32476__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32476__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto__))
})();
var state__32565__auto__ = (function (){var statearr_37815 = f__32564__auto__.call(null);
(statearr_37815[(6)] = c__32563__auto__);

return statearr_37815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto__))
);

return c__32563__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32563__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32563__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__32564__auto__ = (function (){var switch__32475__auto__ = ((function (c__32563__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37824){
var state_val_37825 = (state_37824[(1)]);
if((state_val_37825 === (1))){
var inst_37818 = cljs.core.async.timeout.call(null,(2000));
var state_37824__$1 = state_37824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37824__$1,(2),inst_37818);
} else {
if((state_val_37825 === (2))){
var inst_37820 = (state_37824[(2)]);
var inst_37821 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37822 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37821);
var state_37824__$1 = (function (){var statearr_37826 = state_37824;
(statearr_37826[(7)] = inst_37820);

return statearr_37826;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37824__$1,inst_37822);
} else {
return null;
}
}
});})(c__32563__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__32475__auto__,c__32563__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32476__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32476__auto____0 = (function (){
var statearr_37827 = [null,null,null,null,null,null,null,null];
(statearr_37827[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32476__auto__);

(statearr_37827[(1)] = (1));

return statearr_37827;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32476__auto____1 = (function (state_37824){
while(true){
var ret_value__32477__auto__ = (function (){try{while(true){
var result__32478__auto__ = switch__32475__auto__.call(null,state_37824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32478__auto__;
}
break;
}
}catch (e37828){if((e37828 instanceof Object)){
var ex__32479__auto__ = e37828;
var statearr_37829_37831 = state_37824;
(statearr_37829_37831[(5)] = ex__32479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37832 = state_37824;
state_37824 = G__37832;
continue;
} else {
return ret_value__32477__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32476__auto__ = function(state_37824){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32476__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32476__auto____1.call(this,state_37824);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32476__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32476__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32476__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32476__auto__;
})()
;})(switch__32475__auto__,c__32563__auto__,figwheel_version,temp__4657__auto__))
})();
var state__32565__auto__ = (function (){var statearr_37830 = f__32564__auto__.call(null);
(statearr_37830[(6)] = c__32563__auto__);

return statearr_37830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32565__auto__);
});})(c__32563__auto__,figwheel_version,temp__4657__auto__))
);

return c__32563__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37833){
var map__37834 = p__37833;
var map__37834__$1 = ((((!((map__37834 == null)))?((((map__37834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37834):map__37834);
var file = cljs.core.get.call(null,map__37834__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37834__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37834__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37836 = "";
var G__37836__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37836),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37836);
var G__37836__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37836__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37836__$1);
if(cljs.core.truth_((function (){var and__28274__auto__ = line;
if(cljs.core.truth_(and__28274__auto__)){
return column;
} else {
return and__28274__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37836__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37836__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37837){
var map__37838 = p__37837;
var map__37838__$1 = ((((!((map__37838 == null)))?((((map__37838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37838.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37838):map__37838);
var ed = map__37838__$1;
var formatted_exception = cljs.core.get.call(null,map__37838__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37838__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37838__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37840_37844 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37841_37845 = null;
var count__37842_37846 = (0);
var i__37843_37847 = (0);
while(true){
if((i__37843_37847 < count__37842_37846)){
var msg_37848 = cljs.core._nth.call(null,chunk__37841_37845,i__37843_37847);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37848);

var G__37849 = seq__37840_37844;
var G__37850 = chunk__37841_37845;
var G__37851 = count__37842_37846;
var G__37852 = (i__37843_37847 + (1));
seq__37840_37844 = G__37849;
chunk__37841_37845 = G__37850;
count__37842_37846 = G__37851;
i__37843_37847 = G__37852;
continue;
} else {
var temp__4657__auto___37853 = cljs.core.seq.call(null,seq__37840_37844);
if(temp__4657__auto___37853){
var seq__37840_37854__$1 = temp__4657__auto___37853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37840_37854__$1)){
var c__29125__auto___37855 = cljs.core.chunk_first.call(null,seq__37840_37854__$1);
var G__37856 = cljs.core.chunk_rest.call(null,seq__37840_37854__$1);
var G__37857 = c__29125__auto___37855;
var G__37858 = cljs.core.count.call(null,c__29125__auto___37855);
var G__37859 = (0);
seq__37840_37844 = G__37856;
chunk__37841_37845 = G__37857;
count__37842_37846 = G__37858;
i__37843_37847 = G__37859;
continue;
} else {
var msg_37860 = cljs.core.first.call(null,seq__37840_37854__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37860);

var G__37861 = cljs.core.next.call(null,seq__37840_37854__$1);
var G__37862 = null;
var G__37863 = (0);
var G__37864 = (0);
seq__37840_37844 = G__37861;
chunk__37841_37845 = G__37862;
count__37842_37846 = G__37863;
i__37843_37847 = G__37864;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37865){
var map__37866 = p__37865;
var map__37866__$1 = ((((!((map__37866 == null)))?((((map__37866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37866.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37866):map__37866);
var w = map__37866__$1;
var message = cljs.core.get.call(null,map__37866__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28274__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28274__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28274__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37868 = cljs.core.seq.call(null,plugins);
var chunk__37869 = null;
var count__37870 = (0);
var i__37871 = (0);
while(true){
if((i__37871 < count__37870)){
var vec__37872 = cljs.core._nth.call(null,chunk__37869,i__37871);
var k = cljs.core.nth.call(null,vec__37872,(0),null);
var plugin = cljs.core.nth.call(null,vec__37872,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37878 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37868,chunk__37869,count__37870,i__37871,pl_37878,vec__37872,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37878.call(null,msg_hist);
});})(seq__37868,chunk__37869,count__37870,i__37871,pl_37878,vec__37872,k,plugin))
);
} else {
}

var G__37879 = seq__37868;
var G__37880 = chunk__37869;
var G__37881 = count__37870;
var G__37882 = (i__37871 + (1));
seq__37868 = G__37879;
chunk__37869 = G__37880;
count__37870 = G__37881;
i__37871 = G__37882;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37868);
if(temp__4657__auto__){
var seq__37868__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37868__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__37868__$1);
var G__37883 = cljs.core.chunk_rest.call(null,seq__37868__$1);
var G__37884 = c__29125__auto__;
var G__37885 = cljs.core.count.call(null,c__29125__auto__);
var G__37886 = (0);
seq__37868 = G__37883;
chunk__37869 = G__37884;
count__37870 = G__37885;
i__37871 = G__37886;
continue;
} else {
var vec__37875 = cljs.core.first.call(null,seq__37868__$1);
var k = cljs.core.nth.call(null,vec__37875,(0),null);
var plugin = cljs.core.nth.call(null,vec__37875,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37887 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37868,chunk__37869,count__37870,i__37871,pl_37887,vec__37875,k,plugin,seq__37868__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37887.call(null,msg_hist);
});})(seq__37868,chunk__37869,count__37870,i__37871,pl_37887,vec__37875,k,plugin,seq__37868__$1,temp__4657__auto__))
);
} else {
}

var G__37888 = cljs.core.next.call(null,seq__37868__$1);
var G__37889 = null;
var G__37890 = (0);
var G__37891 = (0);
seq__37868 = G__37888;
chunk__37869 = G__37889;
count__37870 = G__37890;
i__37871 = G__37891;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__37893 = arguments.length;
switch (G__37893) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37894_37899 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37895_37900 = null;
var count__37896_37901 = (0);
var i__37897_37902 = (0);
while(true){
if((i__37897_37902 < count__37896_37901)){
var msg_37903 = cljs.core._nth.call(null,chunk__37895_37900,i__37897_37902);
figwheel.client.socket.handle_incoming_message.call(null,msg_37903);

var G__37904 = seq__37894_37899;
var G__37905 = chunk__37895_37900;
var G__37906 = count__37896_37901;
var G__37907 = (i__37897_37902 + (1));
seq__37894_37899 = G__37904;
chunk__37895_37900 = G__37905;
count__37896_37901 = G__37906;
i__37897_37902 = G__37907;
continue;
} else {
var temp__4657__auto___37908 = cljs.core.seq.call(null,seq__37894_37899);
if(temp__4657__auto___37908){
var seq__37894_37909__$1 = temp__4657__auto___37908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37894_37909__$1)){
var c__29125__auto___37910 = cljs.core.chunk_first.call(null,seq__37894_37909__$1);
var G__37911 = cljs.core.chunk_rest.call(null,seq__37894_37909__$1);
var G__37912 = c__29125__auto___37910;
var G__37913 = cljs.core.count.call(null,c__29125__auto___37910);
var G__37914 = (0);
seq__37894_37899 = G__37911;
chunk__37895_37900 = G__37912;
count__37896_37901 = G__37913;
i__37897_37902 = G__37914;
continue;
} else {
var msg_37915 = cljs.core.first.call(null,seq__37894_37909__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37915);

var G__37916 = cljs.core.next.call(null,seq__37894_37909__$1);
var G__37917 = null;
var G__37918 = (0);
var G__37919 = (0);
seq__37894_37899 = G__37916;
chunk__37895_37900 = G__37917;
count__37896_37901 = G__37918;
i__37897_37902 = G__37919;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29462__auto__ = [];
var len__29455__auto___37924 = arguments.length;
var i__29456__auto___37925 = (0);
while(true){
if((i__29456__auto___37925 < len__29455__auto___37924)){
args__29462__auto__.push((arguments[i__29456__auto___37925]));

var G__37926 = (i__29456__auto___37925 + (1));
i__29456__auto___37925 = G__37926;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37921){
var map__37922 = p__37921;
var map__37922__$1 = ((((!((map__37922 == null)))?((((map__37922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37922.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37922):map__37922);
var opts = map__37922__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37920){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37920));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37927){if((e37927 instanceof Error)){
var e = e37927;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37927;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37928){
var map__37929 = p__37928;
var map__37929__$1 = ((((!((map__37929 == null)))?((((map__37929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37929.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37929):map__37929);
var msg_name = cljs.core.get.call(null,map__37929__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1504451420957
