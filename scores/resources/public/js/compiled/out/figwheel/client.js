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
}catch (e37458){if((e37458 instanceof Error)){
var e = e37458;
return "Error: Unable to stringify";
} else {
throw e37458;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37461 = arguments.length;
switch (G__37461) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37459_SHARP_){
if(typeof p1__37459_SHARP_ === 'string'){
return p1__37459_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37459_SHARP_);
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
var len__29455__auto___37464 = arguments.length;
var i__29456__auto___37465 = (0);
while(true){
if((i__29456__auto___37465 < len__29455__auto___37464)){
args__29462__auto__.push((arguments[i__29456__auto___37465]));

var G__37466 = (i__29456__auto___37465 + (1));
i__29456__auto___37465 = G__37466;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37463){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37463));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29462__auto__ = [];
var len__29455__auto___37468 = arguments.length;
var i__29456__auto___37469 = (0);
while(true){
if((i__29456__auto___37469 < len__29455__auto___37468)){
args__29462__auto__.push((arguments[i__29456__auto___37469]));

var G__37470 = (i__29456__auto___37469 + (1));
i__29456__auto___37469 = G__37470;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37467){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37467));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37471){
var map__37472 = p__37471;
var map__37472__$1 = ((((!((map__37472 == null)))?((((map__37472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37472.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37472):map__37472);
var message = cljs.core.get.call(null,map__37472__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37472__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__32568__auto___37551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto___37551,ch){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto___37551,ch){
return (function (state_37523){
var state_val_37524 = (state_37523[(1)]);
if((state_val_37524 === (7))){
var inst_37519 = (state_37523[(2)]);
var state_37523__$1 = state_37523;
var statearr_37525_37552 = state_37523__$1;
(statearr_37525_37552[(2)] = inst_37519);

(statearr_37525_37552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (1))){
var state_37523__$1 = state_37523;
var statearr_37526_37553 = state_37523__$1;
(statearr_37526_37553[(2)] = null);

(statearr_37526_37553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (4))){
var inst_37476 = (state_37523[(7)]);
var inst_37476__$1 = (state_37523[(2)]);
var state_37523__$1 = (function (){var statearr_37527 = state_37523;
(statearr_37527[(7)] = inst_37476__$1);

return statearr_37527;
})();
if(cljs.core.truth_(inst_37476__$1)){
var statearr_37528_37554 = state_37523__$1;
(statearr_37528_37554[(1)] = (5));

} else {
var statearr_37529_37555 = state_37523__$1;
(statearr_37529_37555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (15))){
var inst_37483 = (state_37523[(8)]);
var inst_37498 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37483);
var inst_37499 = cljs.core.first.call(null,inst_37498);
var inst_37500 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37499);
var inst_37501 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37500)].join('');
var inst_37502 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37501);
var state_37523__$1 = state_37523;
var statearr_37530_37556 = state_37523__$1;
(statearr_37530_37556[(2)] = inst_37502);

(statearr_37530_37556[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (13))){
var inst_37507 = (state_37523[(2)]);
var state_37523__$1 = state_37523;
var statearr_37531_37557 = state_37523__$1;
(statearr_37531_37557[(2)] = inst_37507);

(statearr_37531_37557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (6))){
var state_37523__$1 = state_37523;
var statearr_37532_37558 = state_37523__$1;
(statearr_37532_37558[(2)] = null);

(statearr_37532_37558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (17))){
var inst_37505 = (state_37523[(2)]);
var state_37523__$1 = state_37523;
var statearr_37533_37559 = state_37523__$1;
(statearr_37533_37559[(2)] = inst_37505);

(statearr_37533_37559[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (3))){
var inst_37521 = (state_37523[(2)]);
var state_37523__$1 = state_37523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37523__$1,inst_37521);
} else {
if((state_val_37524 === (12))){
var inst_37482 = (state_37523[(9)]);
var inst_37496 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37482,opts);
var state_37523__$1 = state_37523;
if(cljs.core.truth_(inst_37496)){
var statearr_37534_37560 = state_37523__$1;
(statearr_37534_37560[(1)] = (15));

} else {
var statearr_37535_37561 = state_37523__$1;
(statearr_37535_37561[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (2))){
var state_37523__$1 = state_37523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37523__$1,(4),ch);
} else {
if((state_val_37524 === (11))){
var inst_37483 = (state_37523[(8)]);
var inst_37488 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37489 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37483);
var inst_37490 = cljs.core.async.timeout.call(null,(1000));
var inst_37491 = [inst_37489,inst_37490];
var inst_37492 = (new cljs.core.PersistentVector(null,2,(5),inst_37488,inst_37491,null));
var state_37523__$1 = state_37523;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37523__$1,(14),inst_37492);
} else {
if((state_val_37524 === (9))){
var inst_37483 = (state_37523[(8)]);
var inst_37509 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37510 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37483);
var inst_37511 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37510);
var inst_37512 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37511)].join('');
var inst_37513 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37512);
var state_37523__$1 = (function (){var statearr_37536 = state_37523;
(statearr_37536[(10)] = inst_37509);

return statearr_37536;
})();
var statearr_37537_37562 = state_37523__$1;
(statearr_37537_37562[(2)] = inst_37513);

(statearr_37537_37562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (5))){
var inst_37476 = (state_37523[(7)]);
var inst_37478 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37479 = (new cljs.core.PersistentArrayMap(null,2,inst_37478,null));
var inst_37480 = (new cljs.core.PersistentHashSet(null,inst_37479,null));
var inst_37481 = figwheel.client.focus_msgs.call(null,inst_37480,inst_37476);
var inst_37482 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37481);
var inst_37483 = cljs.core.first.call(null,inst_37481);
var inst_37484 = figwheel.client.autoload_QMARK_.call(null);
var state_37523__$1 = (function (){var statearr_37538 = state_37523;
(statearr_37538[(9)] = inst_37482);

(statearr_37538[(8)] = inst_37483);

return statearr_37538;
})();
if(cljs.core.truth_(inst_37484)){
var statearr_37539_37563 = state_37523__$1;
(statearr_37539_37563[(1)] = (8));

} else {
var statearr_37540_37564 = state_37523__$1;
(statearr_37540_37564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (14))){
var inst_37494 = (state_37523[(2)]);
var state_37523__$1 = state_37523;
var statearr_37541_37565 = state_37523__$1;
(statearr_37541_37565[(2)] = inst_37494);

(statearr_37541_37565[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (16))){
var state_37523__$1 = state_37523;
var statearr_37542_37566 = state_37523__$1;
(statearr_37542_37566[(2)] = null);

(statearr_37542_37566[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (10))){
var inst_37515 = (state_37523[(2)]);
var state_37523__$1 = (function (){var statearr_37543 = state_37523;
(statearr_37543[(11)] = inst_37515);

return statearr_37543;
})();
var statearr_37544_37567 = state_37523__$1;
(statearr_37544_37567[(2)] = null);

(statearr_37544_37567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (8))){
var inst_37482 = (state_37523[(9)]);
var inst_37486 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37482,opts);
var state_37523__$1 = state_37523;
if(cljs.core.truth_(inst_37486)){
var statearr_37545_37568 = state_37523__$1;
(statearr_37545_37568[(1)] = (11));

} else {
var statearr_37546_37569 = state_37523__$1;
(statearr_37546_37569[(1)] = (12));

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
});})(c__32568__auto___37551,ch))
;
return ((function (switch__32480__auto__,c__32568__auto___37551,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32481__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32481__auto____0 = (function (){
var statearr_37547 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37547[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32481__auto__);

(statearr_37547[(1)] = (1));

return statearr_37547;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32481__auto____1 = (function (state_37523){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_37523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e37548){if((e37548 instanceof Object)){
var ex__32484__auto__ = e37548;
var statearr_37549_37570 = state_37523;
(statearr_37549_37570[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37571 = state_37523;
state_37523 = G__37571;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32481__auto__ = function(state_37523){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32481__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32481__auto____1.call(this,state_37523);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32481__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32481__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto___37551,ch))
})();
var state__32570__auto__ = (function (){var statearr_37550 = f__32569__auto__.call(null);
(statearr_37550[(6)] = c__32568__auto___37551);

return statearr_37550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto___37551,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37572_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37572_SHARP_));
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
var base_path_37574 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37574){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37573){if((e37573 instanceof Error)){
var e = e37573;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37574], null));
} else {
var e = e37573;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37574))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37575){
var map__37576 = p__37575;
var map__37576__$1 = ((((!((map__37576 == null)))?((((map__37576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37576.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37576):map__37576);
var opts = map__37576__$1;
var build_id = cljs.core.get.call(null,map__37576__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37576,map__37576__$1,opts,build_id){
return (function (p__37578){
var vec__37579 = p__37578;
var seq__37580 = cljs.core.seq.call(null,vec__37579);
var first__37581 = cljs.core.first.call(null,seq__37580);
var seq__37580__$1 = cljs.core.next.call(null,seq__37580);
var map__37582 = first__37581;
var map__37582__$1 = ((((!((map__37582 == null)))?((((map__37582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37582.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37582):map__37582);
var msg = map__37582__$1;
var msg_name = cljs.core.get.call(null,map__37582__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37580__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37579,seq__37580,first__37581,seq__37580__$1,map__37582,map__37582__$1,msg,msg_name,_,map__37576,map__37576__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37579,seq__37580,first__37581,seq__37580__$1,map__37582,map__37582__$1,msg,msg_name,_,map__37576,map__37576__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37576,map__37576__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
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
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37590){
var map__37591 = p__37590;
var map__37591__$1 = ((((!((map__37591 == null)))?((((map__37591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37591.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37591):map__37591);
var on_compile_warning = cljs.core.get.call(null,map__37591__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37591__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37591,map__37591__$1,on_compile_warning,on_compile_fail){
return (function (p__37593){
var vec__37594 = p__37593;
var seq__37595 = cljs.core.seq.call(null,vec__37594);
var first__37596 = cljs.core.first.call(null,seq__37595);
var seq__37595__$1 = cljs.core.next.call(null,seq__37595);
var map__37597 = first__37596;
var map__37597__$1 = ((((!((map__37597 == null)))?((((map__37597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37597.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37597):map__37597);
var msg = map__37597__$1;
var msg_name = cljs.core.get.call(null,map__37597__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37595__$1;
var pred__37599 = cljs.core._EQ_;
var expr__37600 = msg_name;
if(cljs.core.truth_(pred__37599.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37600))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37599.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37600))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37591,map__37591__$1,on_compile_warning,on_compile_fail))
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
var c__32568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto__,msg_hist,msg_names,msg){
return (function (state_37689){
var state_val_37690 = (state_37689[(1)]);
if((state_val_37690 === (7))){
var inst_37609 = (state_37689[(2)]);
var state_37689__$1 = state_37689;
if(cljs.core.truth_(inst_37609)){
var statearr_37691_37738 = state_37689__$1;
(statearr_37691_37738[(1)] = (8));

} else {
var statearr_37692_37739 = state_37689__$1;
(statearr_37692_37739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (20))){
var inst_37683 = (state_37689[(2)]);
var state_37689__$1 = state_37689;
var statearr_37693_37740 = state_37689__$1;
(statearr_37693_37740[(2)] = inst_37683);

(statearr_37693_37740[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (27))){
var inst_37679 = (state_37689[(2)]);
var state_37689__$1 = state_37689;
var statearr_37694_37741 = state_37689__$1;
(statearr_37694_37741[(2)] = inst_37679);

(statearr_37694_37741[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (1))){
var inst_37602 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37689__$1 = state_37689;
if(cljs.core.truth_(inst_37602)){
var statearr_37695_37742 = state_37689__$1;
(statearr_37695_37742[(1)] = (2));

} else {
var statearr_37696_37743 = state_37689__$1;
(statearr_37696_37743[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (24))){
var inst_37681 = (state_37689[(2)]);
var state_37689__$1 = state_37689;
var statearr_37697_37744 = state_37689__$1;
(statearr_37697_37744[(2)] = inst_37681);

(statearr_37697_37744[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (4))){
var inst_37687 = (state_37689[(2)]);
var state_37689__$1 = state_37689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37689__$1,inst_37687);
} else {
if((state_val_37690 === (15))){
var inst_37685 = (state_37689[(2)]);
var state_37689__$1 = state_37689;
var statearr_37698_37745 = state_37689__$1;
(statearr_37698_37745[(2)] = inst_37685);

(statearr_37698_37745[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (21))){
var inst_37638 = (state_37689[(2)]);
var inst_37639 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37640 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37639);
var state_37689__$1 = (function (){var statearr_37699 = state_37689;
(statearr_37699[(7)] = inst_37638);

return statearr_37699;
})();
var statearr_37700_37746 = state_37689__$1;
(statearr_37700_37746[(2)] = inst_37640);

(statearr_37700_37746[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (31))){
var inst_37668 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37689__$1 = state_37689;
if(cljs.core.truth_(inst_37668)){
var statearr_37701_37747 = state_37689__$1;
(statearr_37701_37747[(1)] = (34));

} else {
var statearr_37702_37748 = state_37689__$1;
(statearr_37702_37748[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (32))){
var inst_37677 = (state_37689[(2)]);
var state_37689__$1 = state_37689;
var statearr_37703_37749 = state_37689__$1;
(statearr_37703_37749[(2)] = inst_37677);

(statearr_37703_37749[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (33))){
var inst_37664 = (state_37689[(2)]);
var inst_37665 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37666 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37665);
var state_37689__$1 = (function (){var statearr_37704 = state_37689;
(statearr_37704[(8)] = inst_37664);

return statearr_37704;
})();
var statearr_37705_37750 = state_37689__$1;
(statearr_37705_37750[(2)] = inst_37666);

(statearr_37705_37750[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (13))){
var inst_37623 = figwheel.client.heads_up.clear.call(null);
var state_37689__$1 = state_37689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37689__$1,(16),inst_37623);
} else {
if((state_val_37690 === (22))){
var inst_37644 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37645 = figwheel.client.heads_up.append_warning_message.call(null,inst_37644);
var state_37689__$1 = state_37689;
var statearr_37706_37751 = state_37689__$1;
(statearr_37706_37751[(2)] = inst_37645);

(statearr_37706_37751[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (36))){
var inst_37675 = (state_37689[(2)]);
var state_37689__$1 = state_37689;
var statearr_37707_37752 = state_37689__$1;
(statearr_37707_37752[(2)] = inst_37675);

(statearr_37707_37752[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (29))){
var inst_37655 = (state_37689[(2)]);
var inst_37656 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37657 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37656);
var state_37689__$1 = (function (){var statearr_37708 = state_37689;
(statearr_37708[(9)] = inst_37655);

return statearr_37708;
})();
var statearr_37709_37753 = state_37689__$1;
(statearr_37709_37753[(2)] = inst_37657);

(statearr_37709_37753[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (6))){
var inst_37604 = (state_37689[(10)]);
var state_37689__$1 = state_37689;
var statearr_37710_37754 = state_37689__$1;
(statearr_37710_37754[(2)] = inst_37604);

(statearr_37710_37754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (28))){
var inst_37651 = (state_37689[(2)]);
var inst_37652 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37653 = figwheel.client.heads_up.display_warning.call(null,inst_37652);
var state_37689__$1 = (function (){var statearr_37711 = state_37689;
(statearr_37711[(11)] = inst_37651);

return statearr_37711;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37689__$1,(29),inst_37653);
} else {
if((state_val_37690 === (25))){
var inst_37649 = figwheel.client.heads_up.clear.call(null);
var state_37689__$1 = state_37689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37689__$1,(28),inst_37649);
} else {
if((state_val_37690 === (34))){
var inst_37670 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37689__$1 = state_37689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37689__$1,(37),inst_37670);
} else {
if((state_val_37690 === (17))){
var inst_37629 = (state_37689[(2)]);
var inst_37630 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37631 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37630);
var state_37689__$1 = (function (){var statearr_37712 = state_37689;
(statearr_37712[(12)] = inst_37629);

return statearr_37712;
})();
var statearr_37713_37755 = state_37689__$1;
(statearr_37713_37755[(2)] = inst_37631);

(statearr_37713_37755[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (3))){
var inst_37621 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37689__$1 = state_37689;
if(cljs.core.truth_(inst_37621)){
var statearr_37714_37756 = state_37689__$1;
(statearr_37714_37756[(1)] = (13));

} else {
var statearr_37715_37757 = state_37689__$1;
(statearr_37715_37757[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (12))){
var inst_37617 = (state_37689[(2)]);
var state_37689__$1 = state_37689;
var statearr_37716_37758 = state_37689__$1;
(statearr_37716_37758[(2)] = inst_37617);

(statearr_37716_37758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (2))){
var inst_37604 = (state_37689[(10)]);
var inst_37604__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37689__$1 = (function (){var statearr_37717 = state_37689;
(statearr_37717[(10)] = inst_37604__$1);

return statearr_37717;
})();
if(cljs.core.truth_(inst_37604__$1)){
var statearr_37718_37759 = state_37689__$1;
(statearr_37718_37759[(1)] = (5));

} else {
var statearr_37719_37760 = state_37689__$1;
(statearr_37719_37760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (23))){
var inst_37647 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37689__$1 = state_37689;
if(cljs.core.truth_(inst_37647)){
var statearr_37720_37761 = state_37689__$1;
(statearr_37720_37761[(1)] = (25));

} else {
var statearr_37721_37762 = state_37689__$1;
(statearr_37721_37762[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (35))){
var state_37689__$1 = state_37689;
var statearr_37722_37763 = state_37689__$1;
(statearr_37722_37763[(2)] = null);

(statearr_37722_37763[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (19))){
var inst_37642 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37689__$1 = state_37689;
if(cljs.core.truth_(inst_37642)){
var statearr_37723_37764 = state_37689__$1;
(statearr_37723_37764[(1)] = (22));

} else {
var statearr_37724_37765 = state_37689__$1;
(statearr_37724_37765[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (11))){
var inst_37613 = (state_37689[(2)]);
var state_37689__$1 = state_37689;
var statearr_37725_37766 = state_37689__$1;
(statearr_37725_37766[(2)] = inst_37613);

(statearr_37725_37766[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (9))){
var inst_37615 = figwheel.client.heads_up.clear.call(null);
var state_37689__$1 = state_37689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37689__$1,(12),inst_37615);
} else {
if((state_val_37690 === (5))){
var inst_37606 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37689__$1 = state_37689;
var statearr_37726_37767 = state_37689__$1;
(statearr_37726_37767[(2)] = inst_37606);

(statearr_37726_37767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (14))){
var inst_37633 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37689__$1 = state_37689;
if(cljs.core.truth_(inst_37633)){
var statearr_37727_37768 = state_37689__$1;
(statearr_37727_37768[(1)] = (18));

} else {
var statearr_37728_37769 = state_37689__$1;
(statearr_37728_37769[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (26))){
var inst_37659 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37689__$1 = state_37689;
if(cljs.core.truth_(inst_37659)){
var statearr_37729_37770 = state_37689__$1;
(statearr_37729_37770[(1)] = (30));

} else {
var statearr_37730_37771 = state_37689__$1;
(statearr_37730_37771[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (16))){
var inst_37625 = (state_37689[(2)]);
var inst_37626 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37627 = figwheel.client.heads_up.display_exception.call(null,inst_37626);
var state_37689__$1 = (function (){var statearr_37731 = state_37689;
(statearr_37731[(13)] = inst_37625);

return statearr_37731;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37689__$1,(17),inst_37627);
} else {
if((state_val_37690 === (30))){
var inst_37661 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37662 = figwheel.client.heads_up.display_warning.call(null,inst_37661);
var state_37689__$1 = state_37689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37689__$1,(33),inst_37662);
} else {
if((state_val_37690 === (10))){
var inst_37619 = (state_37689[(2)]);
var state_37689__$1 = state_37689;
var statearr_37732_37772 = state_37689__$1;
(statearr_37732_37772[(2)] = inst_37619);

(statearr_37732_37772[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (18))){
var inst_37635 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37636 = figwheel.client.heads_up.display_exception.call(null,inst_37635);
var state_37689__$1 = state_37689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37689__$1,(21),inst_37636);
} else {
if((state_val_37690 === (37))){
var inst_37672 = (state_37689[(2)]);
var state_37689__$1 = state_37689;
var statearr_37733_37773 = state_37689__$1;
(statearr_37733_37773[(2)] = inst_37672);

(statearr_37733_37773[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (8))){
var inst_37611 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37689__$1 = state_37689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37689__$1,(11),inst_37611);
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
});})(c__32568__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32480__auto__,c__32568__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32481__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32481__auto____0 = (function (){
var statearr_37734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37734[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32481__auto__);

(statearr_37734[(1)] = (1));

return statearr_37734;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32481__auto____1 = (function (state_37689){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_37689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e37735){if((e37735 instanceof Object)){
var ex__32484__auto__ = e37735;
var statearr_37736_37774 = state_37689;
(statearr_37736_37774[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37775 = state_37689;
state_37689 = G__37775;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32481__auto__ = function(state_37689){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32481__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32481__auto____1.call(this,state_37689);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32481__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32481__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto__,msg_hist,msg_names,msg))
})();
var state__32570__auto__ = (function (){var statearr_37737 = f__32569__auto__.call(null);
(statearr_37737[(6)] = c__32568__auto__);

return statearr_37737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto__,msg_hist,msg_names,msg))
);

return c__32568__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32568__auto___37804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto___37804,ch){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto___37804,ch){
return (function (state_37790){
var state_val_37791 = (state_37790[(1)]);
if((state_val_37791 === (1))){
var state_37790__$1 = state_37790;
var statearr_37792_37805 = state_37790__$1;
(statearr_37792_37805[(2)] = null);

(statearr_37792_37805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (2))){
var state_37790__$1 = state_37790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37790__$1,(4),ch);
} else {
if((state_val_37791 === (3))){
var inst_37788 = (state_37790[(2)]);
var state_37790__$1 = state_37790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37790__$1,inst_37788);
} else {
if((state_val_37791 === (4))){
var inst_37778 = (state_37790[(7)]);
var inst_37778__$1 = (state_37790[(2)]);
var state_37790__$1 = (function (){var statearr_37793 = state_37790;
(statearr_37793[(7)] = inst_37778__$1);

return statearr_37793;
})();
if(cljs.core.truth_(inst_37778__$1)){
var statearr_37794_37806 = state_37790__$1;
(statearr_37794_37806[(1)] = (5));

} else {
var statearr_37795_37807 = state_37790__$1;
(statearr_37795_37807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (5))){
var inst_37778 = (state_37790[(7)]);
var inst_37780 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37778);
var state_37790__$1 = state_37790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37790__$1,(8),inst_37780);
} else {
if((state_val_37791 === (6))){
var state_37790__$1 = state_37790;
var statearr_37796_37808 = state_37790__$1;
(statearr_37796_37808[(2)] = null);

(statearr_37796_37808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (7))){
var inst_37786 = (state_37790[(2)]);
var state_37790__$1 = state_37790;
var statearr_37797_37809 = state_37790__$1;
(statearr_37797_37809[(2)] = inst_37786);

(statearr_37797_37809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (8))){
var inst_37782 = (state_37790[(2)]);
var state_37790__$1 = (function (){var statearr_37798 = state_37790;
(statearr_37798[(8)] = inst_37782);

return statearr_37798;
})();
var statearr_37799_37810 = state_37790__$1;
(statearr_37799_37810[(2)] = null);

(statearr_37799_37810[(1)] = (2));


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
});})(c__32568__auto___37804,ch))
;
return ((function (switch__32480__auto__,c__32568__auto___37804,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32481__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32481__auto____0 = (function (){
var statearr_37800 = [null,null,null,null,null,null,null,null,null];
(statearr_37800[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32481__auto__);

(statearr_37800[(1)] = (1));

return statearr_37800;
});
var figwheel$client$heads_up_plugin_$_state_machine__32481__auto____1 = (function (state_37790){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_37790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e37801){if((e37801 instanceof Object)){
var ex__32484__auto__ = e37801;
var statearr_37802_37811 = state_37790;
(statearr_37802_37811[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37812 = state_37790;
state_37790 = G__37812;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32481__auto__ = function(state_37790){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32481__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32481__auto____1.call(this,state_37790);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32481__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32481__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto___37804,ch))
})();
var state__32570__auto__ = (function (){var statearr_37803 = f__32569__auto__.call(null);
(statearr_37803[(6)] = c__32568__auto___37804);

return statearr_37803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto___37804,ch))
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
var c__32568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto__){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto__){
return (function (state_37818){
var state_val_37819 = (state_37818[(1)]);
if((state_val_37819 === (1))){
var inst_37813 = cljs.core.async.timeout.call(null,(3000));
var state_37818__$1 = state_37818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37818__$1,(2),inst_37813);
} else {
if((state_val_37819 === (2))){
var inst_37815 = (state_37818[(2)]);
var inst_37816 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37818__$1 = (function (){var statearr_37820 = state_37818;
(statearr_37820[(7)] = inst_37815);

return statearr_37820;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37818__$1,inst_37816);
} else {
return null;
}
}
});})(c__32568__auto__))
;
return ((function (switch__32480__auto__,c__32568__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32481__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32481__auto____0 = (function (){
var statearr_37821 = [null,null,null,null,null,null,null,null];
(statearr_37821[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32481__auto__);

(statearr_37821[(1)] = (1));

return statearr_37821;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32481__auto____1 = (function (state_37818){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_37818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e37822){if((e37822 instanceof Object)){
var ex__32484__auto__ = e37822;
var statearr_37823_37825 = state_37818;
(statearr_37823_37825[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37826 = state_37818;
state_37818 = G__37826;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32481__auto__ = function(state_37818){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32481__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32481__auto____1.call(this,state_37818);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32481__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32481__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto__))
})();
var state__32570__auto__ = (function (){var statearr_37824 = f__32569__auto__.call(null);
(statearr_37824[(6)] = c__32568__auto__);

return statearr_37824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto__))
);

return c__32568__auto__;
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
var c__32568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32568__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__32569__auto__ = (function (){var switch__32480__auto__ = ((function (c__32568__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37833){
var state_val_37834 = (state_37833[(1)]);
if((state_val_37834 === (1))){
var inst_37827 = cljs.core.async.timeout.call(null,(2000));
var state_37833__$1 = state_37833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37833__$1,(2),inst_37827);
} else {
if((state_val_37834 === (2))){
var inst_37829 = (state_37833[(2)]);
var inst_37830 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37831 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37830);
var state_37833__$1 = (function (){var statearr_37835 = state_37833;
(statearr_37835[(7)] = inst_37829);

return statearr_37835;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37833__$1,inst_37831);
} else {
return null;
}
}
});})(c__32568__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__32480__auto__,c__32568__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32481__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32481__auto____0 = (function (){
var statearr_37836 = [null,null,null,null,null,null,null,null];
(statearr_37836[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32481__auto__);

(statearr_37836[(1)] = (1));

return statearr_37836;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32481__auto____1 = (function (state_37833){
while(true){
var ret_value__32482__auto__ = (function (){try{while(true){
var result__32483__auto__ = switch__32480__auto__.call(null,state_37833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32483__auto__;
}
break;
}
}catch (e37837){if((e37837 instanceof Object)){
var ex__32484__auto__ = e37837;
var statearr_37838_37840 = state_37833;
(statearr_37838_37840[(5)] = ex__32484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37841 = state_37833;
state_37833 = G__37841;
continue;
} else {
return ret_value__32482__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32481__auto__ = function(state_37833){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32481__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32481__auto____1.call(this,state_37833);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32481__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32481__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32481__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32481__auto__;
})()
;})(switch__32480__auto__,c__32568__auto__,figwheel_version,temp__4657__auto__))
})();
var state__32570__auto__ = (function (){var statearr_37839 = f__32569__auto__.call(null);
(statearr_37839[(6)] = c__32568__auto__);

return statearr_37839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32570__auto__);
});})(c__32568__auto__,figwheel_version,temp__4657__auto__))
);

return c__32568__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37842){
var map__37843 = p__37842;
var map__37843__$1 = ((((!((map__37843 == null)))?((((map__37843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37843.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37843):map__37843);
var file = cljs.core.get.call(null,map__37843__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37843__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37843__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37845 = "";
var G__37845__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37845),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37845);
var G__37845__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37845__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37845__$1);
if(cljs.core.truth_((function (){var and__28274__auto__ = line;
if(cljs.core.truth_(and__28274__auto__)){
return column;
} else {
return and__28274__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37845__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37845__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37846){
var map__37847 = p__37846;
var map__37847__$1 = ((((!((map__37847 == null)))?((((map__37847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37847.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37847):map__37847);
var ed = map__37847__$1;
var formatted_exception = cljs.core.get.call(null,map__37847__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37847__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37847__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37849_37853 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37850_37854 = null;
var count__37851_37855 = (0);
var i__37852_37856 = (0);
while(true){
if((i__37852_37856 < count__37851_37855)){
var msg_37857 = cljs.core._nth.call(null,chunk__37850_37854,i__37852_37856);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37857);

var G__37858 = seq__37849_37853;
var G__37859 = chunk__37850_37854;
var G__37860 = count__37851_37855;
var G__37861 = (i__37852_37856 + (1));
seq__37849_37853 = G__37858;
chunk__37850_37854 = G__37859;
count__37851_37855 = G__37860;
i__37852_37856 = G__37861;
continue;
} else {
var temp__4657__auto___37862 = cljs.core.seq.call(null,seq__37849_37853);
if(temp__4657__auto___37862){
var seq__37849_37863__$1 = temp__4657__auto___37862;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37849_37863__$1)){
var c__29125__auto___37864 = cljs.core.chunk_first.call(null,seq__37849_37863__$1);
var G__37865 = cljs.core.chunk_rest.call(null,seq__37849_37863__$1);
var G__37866 = c__29125__auto___37864;
var G__37867 = cljs.core.count.call(null,c__29125__auto___37864);
var G__37868 = (0);
seq__37849_37853 = G__37865;
chunk__37850_37854 = G__37866;
count__37851_37855 = G__37867;
i__37852_37856 = G__37868;
continue;
} else {
var msg_37869 = cljs.core.first.call(null,seq__37849_37863__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37869);

var G__37870 = cljs.core.next.call(null,seq__37849_37863__$1);
var G__37871 = null;
var G__37872 = (0);
var G__37873 = (0);
seq__37849_37853 = G__37870;
chunk__37850_37854 = G__37871;
count__37851_37855 = G__37872;
i__37852_37856 = G__37873;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37874){
var map__37875 = p__37874;
var map__37875__$1 = ((((!((map__37875 == null)))?((((map__37875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37875.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37875):map__37875);
var w = map__37875__$1;
var message = cljs.core.get.call(null,map__37875__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__37877 = cljs.core.seq.call(null,plugins);
var chunk__37878 = null;
var count__37879 = (0);
var i__37880 = (0);
while(true){
if((i__37880 < count__37879)){
var vec__37881 = cljs.core._nth.call(null,chunk__37878,i__37880);
var k = cljs.core.nth.call(null,vec__37881,(0),null);
var plugin = cljs.core.nth.call(null,vec__37881,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37887 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37877,chunk__37878,count__37879,i__37880,pl_37887,vec__37881,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37887.call(null,msg_hist);
});})(seq__37877,chunk__37878,count__37879,i__37880,pl_37887,vec__37881,k,plugin))
);
} else {
}

var G__37888 = seq__37877;
var G__37889 = chunk__37878;
var G__37890 = count__37879;
var G__37891 = (i__37880 + (1));
seq__37877 = G__37888;
chunk__37878 = G__37889;
count__37879 = G__37890;
i__37880 = G__37891;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37877);
if(temp__4657__auto__){
var seq__37877__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37877__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__37877__$1);
var G__37892 = cljs.core.chunk_rest.call(null,seq__37877__$1);
var G__37893 = c__29125__auto__;
var G__37894 = cljs.core.count.call(null,c__29125__auto__);
var G__37895 = (0);
seq__37877 = G__37892;
chunk__37878 = G__37893;
count__37879 = G__37894;
i__37880 = G__37895;
continue;
} else {
var vec__37884 = cljs.core.first.call(null,seq__37877__$1);
var k = cljs.core.nth.call(null,vec__37884,(0),null);
var plugin = cljs.core.nth.call(null,vec__37884,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37896 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37877,chunk__37878,count__37879,i__37880,pl_37896,vec__37884,k,plugin,seq__37877__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37896.call(null,msg_hist);
});})(seq__37877,chunk__37878,count__37879,i__37880,pl_37896,vec__37884,k,plugin,seq__37877__$1,temp__4657__auto__))
);
} else {
}

var G__37897 = cljs.core.next.call(null,seq__37877__$1);
var G__37898 = null;
var G__37899 = (0);
var G__37900 = (0);
seq__37877 = G__37897;
chunk__37878 = G__37898;
count__37879 = G__37899;
i__37880 = G__37900;
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
var G__37902 = arguments.length;
switch (G__37902) {
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

var seq__37903_37908 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37904_37909 = null;
var count__37905_37910 = (0);
var i__37906_37911 = (0);
while(true){
if((i__37906_37911 < count__37905_37910)){
var msg_37912 = cljs.core._nth.call(null,chunk__37904_37909,i__37906_37911);
figwheel.client.socket.handle_incoming_message.call(null,msg_37912);

var G__37913 = seq__37903_37908;
var G__37914 = chunk__37904_37909;
var G__37915 = count__37905_37910;
var G__37916 = (i__37906_37911 + (1));
seq__37903_37908 = G__37913;
chunk__37904_37909 = G__37914;
count__37905_37910 = G__37915;
i__37906_37911 = G__37916;
continue;
} else {
var temp__4657__auto___37917 = cljs.core.seq.call(null,seq__37903_37908);
if(temp__4657__auto___37917){
var seq__37903_37918__$1 = temp__4657__auto___37917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37903_37918__$1)){
var c__29125__auto___37919 = cljs.core.chunk_first.call(null,seq__37903_37918__$1);
var G__37920 = cljs.core.chunk_rest.call(null,seq__37903_37918__$1);
var G__37921 = c__29125__auto___37919;
var G__37922 = cljs.core.count.call(null,c__29125__auto___37919);
var G__37923 = (0);
seq__37903_37908 = G__37920;
chunk__37904_37909 = G__37921;
count__37905_37910 = G__37922;
i__37906_37911 = G__37923;
continue;
} else {
var msg_37924 = cljs.core.first.call(null,seq__37903_37918__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37924);

var G__37925 = cljs.core.next.call(null,seq__37903_37918__$1);
var G__37926 = null;
var G__37927 = (0);
var G__37928 = (0);
seq__37903_37908 = G__37925;
chunk__37904_37909 = G__37926;
count__37905_37910 = G__37927;
i__37906_37911 = G__37928;
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
var len__29455__auto___37933 = arguments.length;
var i__29456__auto___37934 = (0);
while(true){
if((i__29456__auto___37934 < len__29455__auto___37933)){
args__29462__auto__.push((arguments[i__29456__auto___37934]));

var G__37935 = (i__29456__auto___37934 + (1));
i__29456__auto___37934 = G__37935;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37930){
var map__37931 = p__37930;
var map__37931__$1 = ((((!((map__37931 == null)))?((((map__37931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37931.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37931):map__37931);
var opts = map__37931__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37929){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37929));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37936){if((e37936 instanceof Error)){
var e = e37936;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37936;

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
return (function (p__37937){
var map__37938 = p__37937;
var map__37938__$1 = ((((!((map__37938 == null)))?((((map__37938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37938.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37938):map__37938);
var msg_name = cljs.core.get.call(null,map__37938__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1504549429180
