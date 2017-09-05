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
}catch (e37469){if((e37469 instanceof Error)){
var e = e37469;
return "Error: Unable to stringify";
} else {
throw e37469;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37472 = arguments.length;
switch (G__37472) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37470_SHARP_){
if(typeof p1__37470_SHARP_ === 'string'){
return p1__37470_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37470_SHARP_);
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
var len__29455__auto___37475 = arguments.length;
var i__29456__auto___37476 = (0);
while(true){
if((i__29456__auto___37476 < len__29455__auto___37475)){
args__29462__auto__.push((arguments[i__29456__auto___37476]));

var G__37477 = (i__29456__auto___37476 + (1));
i__29456__auto___37476 = G__37477;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37474){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37474));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29462__auto__ = [];
var len__29455__auto___37479 = arguments.length;
var i__29456__auto___37480 = (0);
while(true){
if((i__29456__auto___37480 < len__29455__auto___37479)){
args__29462__auto__.push((arguments[i__29456__auto___37480]));

var G__37481 = (i__29456__auto___37480 + (1));
i__29456__auto___37480 = G__37481;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37478){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37478));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37482){
var map__37483 = p__37482;
var map__37483__$1 = ((((!((map__37483 == null)))?((((map__37483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37483):map__37483);
var message = cljs.core.get.call(null,map__37483__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37483__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__32579__auto___37562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto___37562,ch){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto___37562,ch){
return (function (state_37534){
var state_val_37535 = (state_37534[(1)]);
if((state_val_37535 === (7))){
var inst_37530 = (state_37534[(2)]);
var state_37534__$1 = state_37534;
var statearr_37536_37563 = state_37534__$1;
(statearr_37536_37563[(2)] = inst_37530);

(statearr_37536_37563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37535 === (1))){
var state_37534__$1 = state_37534;
var statearr_37537_37564 = state_37534__$1;
(statearr_37537_37564[(2)] = null);

(statearr_37537_37564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37535 === (4))){
var inst_37487 = (state_37534[(7)]);
var inst_37487__$1 = (state_37534[(2)]);
var state_37534__$1 = (function (){var statearr_37538 = state_37534;
(statearr_37538[(7)] = inst_37487__$1);

return statearr_37538;
})();
if(cljs.core.truth_(inst_37487__$1)){
var statearr_37539_37565 = state_37534__$1;
(statearr_37539_37565[(1)] = (5));

} else {
var statearr_37540_37566 = state_37534__$1;
(statearr_37540_37566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37535 === (15))){
var inst_37494 = (state_37534[(8)]);
var inst_37509 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37494);
var inst_37510 = cljs.core.first.call(null,inst_37509);
var inst_37511 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37510);
var inst_37512 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37511)].join('');
var inst_37513 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37512);
var state_37534__$1 = state_37534;
var statearr_37541_37567 = state_37534__$1;
(statearr_37541_37567[(2)] = inst_37513);

(statearr_37541_37567[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37535 === (13))){
var inst_37518 = (state_37534[(2)]);
var state_37534__$1 = state_37534;
var statearr_37542_37568 = state_37534__$1;
(statearr_37542_37568[(2)] = inst_37518);

(statearr_37542_37568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37535 === (6))){
var state_37534__$1 = state_37534;
var statearr_37543_37569 = state_37534__$1;
(statearr_37543_37569[(2)] = null);

(statearr_37543_37569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37535 === (17))){
var inst_37516 = (state_37534[(2)]);
var state_37534__$1 = state_37534;
var statearr_37544_37570 = state_37534__$1;
(statearr_37544_37570[(2)] = inst_37516);

(statearr_37544_37570[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37535 === (3))){
var inst_37532 = (state_37534[(2)]);
var state_37534__$1 = state_37534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37534__$1,inst_37532);
} else {
if((state_val_37535 === (12))){
var inst_37493 = (state_37534[(9)]);
var inst_37507 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37493,opts);
var state_37534__$1 = state_37534;
if(cljs.core.truth_(inst_37507)){
var statearr_37545_37571 = state_37534__$1;
(statearr_37545_37571[(1)] = (15));

} else {
var statearr_37546_37572 = state_37534__$1;
(statearr_37546_37572[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37535 === (2))){
var state_37534__$1 = state_37534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37534__$1,(4),ch);
} else {
if((state_val_37535 === (11))){
var inst_37494 = (state_37534[(8)]);
var inst_37499 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37500 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37494);
var inst_37501 = cljs.core.async.timeout.call(null,(1000));
var inst_37502 = [inst_37500,inst_37501];
var inst_37503 = (new cljs.core.PersistentVector(null,2,(5),inst_37499,inst_37502,null));
var state_37534__$1 = state_37534;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37534__$1,(14),inst_37503);
} else {
if((state_val_37535 === (9))){
var inst_37494 = (state_37534[(8)]);
var inst_37520 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37521 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37494);
var inst_37522 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37521);
var inst_37523 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37522)].join('');
var inst_37524 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37523);
var state_37534__$1 = (function (){var statearr_37547 = state_37534;
(statearr_37547[(10)] = inst_37520);

return statearr_37547;
})();
var statearr_37548_37573 = state_37534__$1;
(statearr_37548_37573[(2)] = inst_37524);

(statearr_37548_37573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37535 === (5))){
var inst_37487 = (state_37534[(7)]);
var inst_37489 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37490 = (new cljs.core.PersistentArrayMap(null,2,inst_37489,null));
var inst_37491 = (new cljs.core.PersistentHashSet(null,inst_37490,null));
var inst_37492 = figwheel.client.focus_msgs.call(null,inst_37491,inst_37487);
var inst_37493 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37492);
var inst_37494 = cljs.core.first.call(null,inst_37492);
var inst_37495 = figwheel.client.autoload_QMARK_.call(null);
var state_37534__$1 = (function (){var statearr_37549 = state_37534;
(statearr_37549[(9)] = inst_37493);

(statearr_37549[(8)] = inst_37494);

return statearr_37549;
})();
if(cljs.core.truth_(inst_37495)){
var statearr_37550_37574 = state_37534__$1;
(statearr_37550_37574[(1)] = (8));

} else {
var statearr_37551_37575 = state_37534__$1;
(statearr_37551_37575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37535 === (14))){
var inst_37505 = (state_37534[(2)]);
var state_37534__$1 = state_37534;
var statearr_37552_37576 = state_37534__$1;
(statearr_37552_37576[(2)] = inst_37505);

(statearr_37552_37576[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37535 === (16))){
var state_37534__$1 = state_37534;
var statearr_37553_37577 = state_37534__$1;
(statearr_37553_37577[(2)] = null);

(statearr_37553_37577[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37535 === (10))){
var inst_37526 = (state_37534[(2)]);
var state_37534__$1 = (function (){var statearr_37554 = state_37534;
(statearr_37554[(11)] = inst_37526);

return statearr_37554;
})();
var statearr_37555_37578 = state_37534__$1;
(statearr_37555_37578[(2)] = null);

(statearr_37555_37578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37535 === (8))){
var inst_37493 = (state_37534[(9)]);
var inst_37497 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37493,opts);
var state_37534__$1 = state_37534;
if(cljs.core.truth_(inst_37497)){
var statearr_37556_37579 = state_37534__$1;
(statearr_37556_37579[(1)] = (11));

} else {
var statearr_37557_37580 = state_37534__$1;
(statearr_37557_37580[(1)] = (12));

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
});})(c__32579__auto___37562,ch))
;
return ((function (switch__32491__auto__,c__32579__auto___37562,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32492__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32492__auto____0 = (function (){
var statearr_37558 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37558[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32492__auto__);

(statearr_37558[(1)] = (1));

return statearr_37558;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32492__auto____1 = (function (state_37534){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_37534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e37559){if((e37559 instanceof Object)){
var ex__32495__auto__ = e37559;
var statearr_37560_37581 = state_37534;
(statearr_37560_37581[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37582 = state_37534;
state_37534 = G__37582;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32492__auto__ = function(state_37534){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32492__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32492__auto____1.call(this,state_37534);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32492__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32492__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto___37562,ch))
})();
var state__32581__auto__ = (function (){var statearr_37561 = f__32580__auto__.call(null);
(statearr_37561[(6)] = c__32579__auto___37562);

return statearr_37561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto___37562,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37583_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37583_SHARP_));
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
var base_path_37585 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37585){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37584){if((e37584 instanceof Error)){
var e = e37584;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37585], null));
} else {
var e = e37584;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37585))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37586){
var map__37587 = p__37586;
var map__37587__$1 = ((((!((map__37587 == null)))?((((map__37587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37587):map__37587);
var opts = map__37587__$1;
var build_id = cljs.core.get.call(null,map__37587__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37587,map__37587__$1,opts,build_id){
return (function (p__37589){
var vec__37590 = p__37589;
var seq__37591 = cljs.core.seq.call(null,vec__37590);
var first__37592 = cljs.core.first.call(null,seq__37591);
var seq__37591__$1 = cljs.core.next.call(null,seq__37591);
var map__37593 = first__37592;
var map__37593__$1 = ((((!((map__37593 == null)))?((((map__37593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37593.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37593):map__37593);
var msg = map__37593__$1;
var msg_name = cljs.core.get.call(null,map__37593__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37591__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37590,seq__37591,first__37592,seq__37591__$1,map__37593,map__37593__$1,msg,msg_name,_,map__37587,map__37587__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37590,seq__37591,first__37592,seq__37591__$1,map__37593,map__37593__$1,msg,msg_name,_,map__37587,map__37587__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37587,map__37587__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37595){
var vec__37596 = p__37595;
var seq__37597 = cljs.core.seq.call(null,vec__37596);
var first__37598 = cljs.core.first.call(null,seq__37597);
var seq__37597__$1 = cljs.core.next.call(null,seq__37597);
var map__37599 = first__37598;
var map__37599__$1 = ((((!((map__37599 == null)))?((((map__37599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37599):map__37599);
var msg = map__37599__$1;
var msg_name = cljs.core.get.call(null,map__37599__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37597__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37601){
var map__37602 = p__37601;
var map__37602__$1 = ((((!((map__37602 == null)))?((((map__37602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37602):map__37602);
var on_compile_warning = cljs.core.get.call(null,map__37602__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37602__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37602,map__37602__$1,on_compile_warning,on_compile_fail){
return (function (p__37604){
var vec__37605 = p__37604;
var seq__37606 = cljs.core.seq.call(null,vec__37605);
var first__37607 = cljs.core.first.call(null,seq__37606);
var seq__37606__$1 = cljs.core.next.call(null,seq__37606);
var map__37608 = first__37607;
var map__37608__$1 = ((((!((map__37608 == null)))?((((map__37608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37608.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37608):map__37608);
var msg = map__37608__$1;
var msg_name = cljs.core.get.call(null,map__37608__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37606__$1;
var pred__37610 = cljs.core._EQ_;
var expr__37611 = msg_name;
if(cljs.core.truth_(pred__37610.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37611))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37610.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37611))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37602,map__37602__$1,on_compile_warning,on_compile_fail))
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
var c__32579__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto__,msg_hist,msg_names,msg){
return (function (state_37700){
var state_val_37701 = (state_37700[(1)]);
if((state_val_37701 === (7))){
var inst_37620 = (state_37700[(2)]);
var state_37700__$1 = state_37700;
if(cljs.core.truth_(inst_37620)){
var statearr_37702_37749 = state_37700__$1;
(statearr_37702_37749[(1)] = (8));

} else {
var statearr_37703_37750 = state_37700__$1;
(statearr_37703_37750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (20))){
var inst_37694 = (state_37700[(2)]);
var state_37700__$1 = state_37700;
var statearr_37704_37751 = state_37700__$1;
(statearr_37704_37751[(2)] = inst_37694);

(statearr_37704_37751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (27))){
var inst_37690 = (state_37700[(2)]);
var state_37700__$1 = state_37700;
var statearr_37705_37752 = state_37700__$1;
(statearr_37705_37752[(2)] = inst_37690);

(statearr_37705_37752[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (1))){
var inst_37613 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37700__$1 = state_37700;
if(cljs.core.truth_(inst_37613)){
var statearr_37706_37753 = state_37700__$1;
(statearr_37706_37753[(1)] = (2));

} else {
var statearr_37707_37754 = state_37700__$1;
(statearr_37707_37754[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (24))){
var inst_37692 = (state_37700[(2)]);
var state_37700__$1 = state_37700;
var statearr_37708_37755 = state_37700__$1;
(statearr_37708_37755[(2)] = inst_37692);

(statearr_37708_37755[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (4))){
var inst_37698 = (state_37700[(2)]);
var state_37700__$1 = state_37700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37700__$1,inst_37698);
} else {
if((state_val_37701 === (15))){
var inst_37696 = (state_37700[(2)]);
var state_37700__$1 = state_37700;
var statearr_37709_37756 = state_37700__$1;
(statearr_37709_37756[(2)] = inst_37696);

(statearr_37709_37756[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (21))){
var inst_37649 = (state_37700[(2)]);
var inst_37650 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37651 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37650);
var state_37700__$1 = (function (){var statearr_37710 = state_37700;
(statearr_37710[(7)] = inst_37649);

return statearr_37710;
})();
var statearr_37711_37757 = state_37700__$1;
(statearr_37711_37757[(2)] = inst_37651);

(statearr_37711_37757[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (31))){
var inst_37679 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37700__$1 = state_37700;
if(cljs.core.truth_(inst_37679)){
var statearr_37712_37758 = state_37700__$1;
(statearr_37712_37758[(1)] = (34));

} else {
var statearr_37713_37759 = state_37700__$1;
(statearr_37713_37759[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (32))){
var inst_37688 = (state_37700[(2)]);
var state_37700__$1 = state_37700;
var statearr_37714_37760 = state_37700__$1;
(statearr_37714_37760[(2)] = inst_37688);

(statearr_37714_37760[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (33))){
var inst_37675 = (state_37700[(2)]);
var inst_37676 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37677 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37676);
var state_37700__$1 = (function (){var statearr_37715 = state_37700;
(statearr_37715[(8)] = inst_37675);

return statearr_37715;
})();
var statearr_37716_37761 = state_37700__$1;
(statearr_37716_37761[(2)] = inst_37677);

(statearr_37716_37761[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (13))){
var inst_37634 = figwheel.client.heads_up.clear.call(null);
var state_37700__$1 = state_37700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37700__$1,(16),inst_37634);
} else {
if((state_val_37701 === (22))){
var inst_37655 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37656 = figwheel.client.heads_up.append_warning_message.call(null,inst_37655);
var state_37700__$1 = state_37700;
var statearr_37717_37762 = state_37700__$1;
(statearr_37717_37762[(2)] = inst_37656);

(statearr_37717_37762[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (36))){
var inst_37686 = (state_37700[(2)]);
var state_37700__$1 = state_37700;
var statearr_37718_37763 = state_37700__$1;
(statearr_37718_37763[(2)] = inst_37686);

(statearr_37718_37763[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (29))){
var inst_37666 = (state_37700[(2)]);
var inst_37667 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37668 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37667);
var state_37700__$1 = (function (){var statearr_37719 = state_37700;
(statearr_37719[(9)] = inst_37666);

return statearr_37719;
})();
var statearr_37720_37764 = state_37700__$1;
(statearr_37720_37764[(2)] = inst_37668);

(statearr_37720_37764[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (6))){
var inst_37615 = (state_37700[(10)]);
var state_37700__$1 = state_37700;
var statearr_37721_37765 = state_37700__$1;
(statearr_37721_37765[(2)] = inst_37615);

(statearr_37721_37765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (28))){
var inst_37662 = (state_37700[(2)]);
var inst_37663 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37664 = figwheel.client.heads_up.display_warning.call(null,inst_37663);
var state_37700__$1 = (function (){var statearr_37722 = state_37700;
(statearr_37722[(11)] = inst_37662);

return statearr_37722;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37700__$1,(29),inst_37664);
} else {
if((state_val_37701 === (25))){
var inst_37660 = figwheel.client.heads_up.clear.call(null);
var state_37700__$1 = state_37700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37700__$1,(28),inst_37660);
} else {
if((state_val_37701 === (34))){
var inst_37681 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37700__$1 = state_37700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37700__$1,(37),inst_37681);
} else {
if((state_val_37701 === (17))){
var inst_37640 = (state_37700[(2)]);
var inst_37641 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37642 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37641);
var state_37700__$1 = (function (){var statearr_37723 = state_37700;
(statearr_37723[(12)] = inst_37640);

return statearr_37723;
})();
var statearr_37724_37766 = state_37700__$1;
(statearr_37724_37766[(2)] = inst_37642);

(statearr_37724_37766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (3))){
var inst_37632 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37700__$1 = state_37700;
if(cljs.core.truth_(inst_37632)){
var statearr_37725_37767 = state_37700__$1;
(statearr_37725_37767[(1)] = (13));

} else {
var statearr_37726_37768 = state_37700__$1;
(statearr_37726_37768[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (12))){
var inst_37628 = (state_37700[(2)]);
var state_37700__$1 = state_37700;
var statearr_37727_37769 = state_37700__$1;
(statearr_37727_37769[(2)] = inst_37628);

(statearr_37727_37769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (2))){
var inst_37615 = (state_37700[(10)]);
var inst_37615__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37700__$1 = (function (){var statearr_37728 = state_37700;
(statearr_37728[(10)] = inst_37615__$1);

return statearr_37728;
})();
if(cljs.core.truth_(inst_37615__$1)){
var statearr_37729_37770 = state_37700__$1;
(statearr_37729_37770[(1)] = (5));

} else {
var statearr_37730_37771 = state_37700__$1;
(statearr_37730_37771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (23))){
var inst_37658 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37700__$1 = state_37700;
if(cljs.core.truth_(inst_37658)){
var statearr_37731_37772 = state_37700__$1;
(statearr_37731_37772[(1)] = (25));

} else {
var statearr_37732_37773 = state_37700__$1;
(statearr_37732_37773[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (35))){
var state_37700__$1 = state_37700;
var statearr_37733_37774 = state_37700__$1;
(statearr_37733_37774[(2)] = null);

(statearr_37733_37774[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (19))){
var inst_37653 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37700__$1 = state_37700;
if(cljs.core.truth_(inst_37653)){
var statearr_37734_37775 = state_37700__$1;
(statearr_37734_37775[(1)] = (22));

} else {
var statearr_37735_37776 = state_37700__$1;
(statearr_37735_37776[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (11))){
var inst_37624 = (state_37700[(2)]);
var state_37700__$1 = state_37700;
var statearr_37736_37777 = state_37700__$1;
(statearr_37736_37777[(2)] = inst_37624);

(statearr_37736_37777[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (9))){
var inst_37626 = figwheel.client.heads_up.clear.call(null);
var state_37700__$1 = state_37700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37700__$1,(12),inst_37626);
} else {
if((state_val_37701 === (5))){
var inst_37617 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37700__$1 = state_37700;
var statearr_37737_37778 = state_37700__$1;
(statearr_37737_37778[(2)] = inst_37617);

(statearr_37737_37778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (14))){
var inst_37644 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37700__$1 = state_37700;
if(cljs.core.truth_(inst_37644)){
var statearr_37738_37779 = state_37700__$1;
(statearr_37738_37779[(1)] = (18));

} else {
var statearr_37739_37780 = state_37700__$1;
(statearr_37739_37780[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (26))){
var inst_37670 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37700__$1 = state_37700;
if(cljs.core.truth_(inst_37670)){
var statearr_37740_37781 = state_37700__$1;
(statearr_37740_37781[(1)] = (30));

} else {
var statearr_37741_37782 = state_37700__$1;
(statearr_37741_37782[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (16))){
var inst_37636 = (state_37700[(2)]);
var inst_37637 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37638 = figwheel.client.heads_up.display_exception.call(null,inst_37637);
var state_37700__$1 = (function (){var statearr_37742 = state_37700;
(statearr_37742[(13)] = inst_37636);

return statearr_37742;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37700__$1,(17),inst_37638);
} else {
if((state_val_37701 === (30))){
var inst_37672 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37673 = figwheel.client.heads_up.display_warning.call(null,inst_37672);
var state_37700__$1 = state_37700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37700__$1,(33),inst_37673);
} else {
if((state_val_37701 === (10))){
var inst_37630 = (state_37700[(2)]);
var state_37700__$1 = state_37700;
var statearr_37743_37783 = state_37700__$1;
(statearr_37743_37783[(2)] = inst_37630);

(statearr_37743_37783[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (18))){
var inst_37646 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37647 = figwheel.client.heads_up.display_exception.call(null,inst_37646);
var state_37700__$1 = state_37700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37700__$1,(21),inst_37647);
} else {
if((state_val_37701 === (37))){
var inst_37683 = (state_37700[(2)]);
var state_37700__$1 = state_37700;
var statearr_37744_37784 = state_37700__$1;
(statearr_37744_37784[(2)] = inst_37683);

(statearr_37744_37784[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37701 === (8))){
var inst_37622 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37700__$1 = state_37700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37700__$1,(11),inst_37622);
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
});})(c__32579__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32491__auto__,c__32579__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32492__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32492__auto____0 = (function (){
var statearr_37745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37745[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32492__auto__);

(statearr_37745[(1)] = (1));

return statearr_37745;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32492__auto____1 = (function (state_37700){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_37700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e37746){if((e37746 instanceof Object)){
var ex__32495__auto__ = e37746;
var statearr_37747_37785 = state_37700;
(statearr_37747_37785[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37786 = state_37700;
state_37700 = G__37786;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32492__auto__ = function(state_37700){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32492__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32492__auto____1.call(this,state_37700);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32492__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32492__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto__,msg_hist,msg_names,msg))
})();
var state__32581__auto__ = (function (){var statearr_37748 = f__32580__auto__.call(null);
(statearr_37748[(6)] = c__32579__auto__);

return statearr_37748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto__,msg_hist,msg_names,msg))
);

return c__32579__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32579__auto___37815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto___37815,ch){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto___37815,ch){
return (function (state_37801){
var state_val_37802 = (state_37801[(1)]);
if((state_val_37802 === (1))){
var state_37801__$1 = state_37801;
var statearr_37803_37816 = state_37801__$1;
(statearr_37803_37816[(2)] = null);

(statearr_37803_37816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (2))){
var state_37801__$1 = state_37801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37801__$1,(4),ch);
} else {
if((state_val_37802 === (3))){
var inst_37799 = (state_37801[(2)]);
var state_37801__$1 = state_37801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37801__$1,inst_37799);
} else {
if((state_val_37802 === (4))){
var inst_37789 = (state_37801[(7)]);
var inst_37789__$1 = (state_37801[(2)]);
var state_37801__$1 = (function (){var statearr_37804 = state_37801;
(statearr_37804[(7)] = inst_37789__$1);

return statearr_37804;
})();
if(cljs.core.truth_(inst_37789__$1)){
var statearr_37805_37817 = state_37801__$1;
(statearr_37805_37817[(1)] = (5));

} else {
var statearr_37806_37818 = state_37801__$1;
(statearr_37806_37818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (5))){
var inst_37789 = (state_37801[(7)]);
var inst_37791 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37789);
var state_37801__$1 = state_37801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37801__$1,(8),inst_37791);
} else {
if((state_val_37802 === (6))){
var state_37801__$1 = state_37801;
var statearr_37807_37819 = state_37801__$1;
(statearr_37807_37819[(2)] = null);

(statearr_37807_37819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (7))){
var inst_37797 = (state_37801[(2)]);
var state_37801__$1 = state_37801;
var statearr_37808_37820 = state_37801__$1;
(statearr_37808_37820[(2)] = inst_37797);

(statearr_37808_37820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (8))){
var inst_37793 = (state_37801[(2)]);
var state_37801__$1 = (function (){var statearr_37809 = state_37801;
(statearr_37809[(8)] = inst_37793);

return statearr_37809;
})();
var statearr_37810_37821 = state_37801__$1;
(statearr_37810_37821[(2)] = null);

(statearr_37810_37821[(1)] = (2));


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
});})(c__32579__auto___37815,ch))
;
return ((function (switch__32491__auto__,c__32579__auto___37815,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32492__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32492__auto____0 = (function (){
var statearr_37811 = [null,null,null,null,null,null,null,null,null];
(statearr_37811[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32492__auto__);

(statearr_37811[(1)] = (1));

return statearr_37811;
});
var figwheel$client$heads_up_plugin_$_state_machine__32492__auto____1 = (function (state_37801){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_37801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e37812){if((e37812 instanceof Object)){
var ex__32495__auto__ = e37812;
var statearr_37813_37822 = state_37801;
(statearr_37813_37822[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37823 = state_37801;
state_37801 = G__37823;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32492__auto__ = function(state_37801){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32492__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32492__auto____1.call(this,state_37801);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32492__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32492__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto___37815,ch))
})();
var state__32581__auto__ = (function (){var statearr_37814 = f__32580__auto__.call(null);
(statearr_37814[(6)] = c__32579__auto___37815);

return statearr_37814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto___37815,ch))
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
var c__32579__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto__){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto__){
return (function (state_37829){
var state_val_37830 = (state_37829[(1)]);
if((state_val_37830 === (1))){
var inst_37824 = cljs.core.async.timeout.call(null,(3000));
var state_37829__$1 = state_37829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37829__$1,(2),inst_37824);
} else {
if((state_val_37830 === (2))){
var inst_37826 = (state_37829[(2)]);
var inst_37827 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37829__$1 = (function (){var statearr_37831 = state_37829;
(statearr_37831[(7)] = inst_37826);

return statearr_37831;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37829__$1,inst_37827);
} else {
return null;
}
}
});})(c__32579__auto__))
;
return ((function (switch__32491__auto__,c__32579__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32492__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32492__auto____0 = (function (){
var statearr_37832 = [null,null,null,null,null,null,null,null];
(statearr_37832[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32492__auto__);

(statearr_37832[(1)] = (1));

return statearr_37832;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32492__auto____1 = (function (state_37829){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_37829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e37833){if((e37833 instanceof Object)){
var ex__32495__auto__ = e37833;
var statearr_37834_37836 = state_37829;
(statearr_37834_37836[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37837 = state_37829;
state_37829 = G__37837;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32492__auto__ = function(state_37829){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32492__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32492__auto____1.call(this,state_37829);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32492__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32492__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto__))
})();
var state__32581__auto__ = (function (){var statearr_37835 = f__32580__auto__.call(null);
(statearr_37835[(6)] = c__32579__auto__);

return statearr_37835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto__))
);

return c__32579__auto__;
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
var c__32579__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32579__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__32580__auto__ = (function (){var switch__32491__auto__ = ((function (c__32579__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37844){
var state_val_37845 = (state_37844[(1)]);
if((state_val_37845 === (1))){
var inst_37838 = cljs.core.async.timeout.call(null,(2000));
var state_37844__$1 = state_37844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37844__$1,(2),inst_37838);
} else {
if((state_val_37845 === (2))){
var inst_37840 = (state_37844[(2)]);
var inst_37841 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37842 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37841);
var state_37844__$1 = (function (){var statearr_37846 = state_37844;
(statearr_37846[(7)] = inst_37840);

return statearr_37846;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37844__$1,inst_37842);
} else {
return null;
}
}
});})(c__32579__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__32491__auto__,c__32579__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32492__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32492__auto____0 = (function (){
var statearr_37847 = [null,null,null,null,null,null,null,null];
(statearr_37847[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32492__auto__);

(statearr_37847[(1)] = (1));

return statearr_37847;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32492__auto____1 = (function (state_37844){
while(true){
var ret_value__32493__auto__ = (function (){try{while(true){
var result__32494__auto__ = switch__32491__auto__.call(null,state_37844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32494__auto__;
}
break;
}
}catch (e37848){if((e37848 instanceof Object)){
var ex__32495__auto__ = e37848;
var statearr_37849_37851 = state_37844;
(statearr_37849_37851[(5)] = ex__32495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37852 = state_37844;
state_37844 = G__37852;
continue;
} else {
return ret_value__32493__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32492__auto__ = function(state_37844){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32492__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32492__auto____1.call(this,state_37844);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32492__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32492__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32492__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32492__auto__;
})()
;})(switch__32491__auto__,c__32579__auto__,figwheel_version,temp__4657__auto__))
})();
var state__32581__auto__ = (function (){var statearr_37850 = f__32580__auto__.call(null);
(statearr_37850[(6)] = c__32579__auto__);

return statearr_37850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32581__auto__);
});})(c__32579__auto__,figwheel_version,temp__4657__auto__))
);

return c__32579__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37853){
var map__37854 = p__37853;
var map__37854__$1 = ((((!((map__37854 == null)))?((((map__37854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37854.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37854):map__37854);
var file = cljs.core.get.call(null,map__37854__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37854__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37854__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37856 = "";
var G__37856__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37856),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37856);
var G__37856__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37856__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37856__$1);
if(cljs.core.truth_((function (){var and__28274__auto__ = line;
if(cljs.core.truth_(and__28274__auto__)){
return column;
} else {
return and__28274__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37856__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37856__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37857){
var map__37858 = p__37857;
var map__37858__$1 = ((((!((map__37858 == null)))?((((map__37858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37858.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37858):map__37858);
var ed = map__37858__$1;
var formatted_exception = cljs.core.get.call(null,map__37858__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37858__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37858__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37860_37864 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37861_37865 = null;
var count__37862_37866 = (0);
var i__37863_37867 = (0);
while(true){
if((i__37863_37867 < count__37862_37866)){
var msg_37868 = cljs.core._nth.call(null,chunk__37861_37865,i__37863_37867);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37868);

var G__37869 = seq__37860_37864;
var G__37870 = chunk__37861_37865;
var G__37871 = count__37862_37866;
var G__37872 = (i__37863_37867 + (1));
seq__37860_37864 = G__37869;
chunk__37861_37865 = G__37870;
count__37862_37866 = G__37871;
i__37863_37867 = G__37872;
continue;
} else {
var temp__4657__auto___37873 = cljs.core.seq.call(null,seq__37860_37864);
if(temp__4657__auto___37873){
var seq__37860_37874__$1 = temp__4657__auto___37873;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37860_37874__$1)){
var c__29125__auto___37875 = cljs.core.chunk_first.call(null,seq__37860_37874__$1);
var G__37876 = cljs.core.chunk_rest.call(null,seq__37860_37874__$1);
var G__37877 = c__29125__auto___37875;
var G__37878 = cljs.core.count.call(null,c__29125__auto___37875);
var G__37879 = (0);
seq__37860_37864 = G__37876;
chunk__37861_37865 = G__37877;
count__37862_37866 = G__37878;
i__37863_37867 = G__37879;
continue;
} else {
var msg_37880 = cljs.core.first.call(null,seq__37860_37874__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37880);

var G__37881 = cljs.core.next.call(null,seq__37860_37874__$1);
var G__37882 = null;
var G__37883 = (0);
var G__37884 = (0);
seq__37860_37864 = G__37881;
chunk__37861_37865 = G__37882;
count__37862_37866 = G__37883;
i__37863_37867 = G__37884;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37885){
var map__37886 = p__37885;
var map__37886__$1 = ((((!((map__37886 == null)))?((((map__37886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37886.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37886):map__37886);
var w = map__37886__$1;
var message = cljs.core.get.call(null,map__37886__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__37888 = cljs.core.seq.call(null,plugins);
var chunk__37889 = null;
var count__37890 = (0);
var i__37891 = (0);
while(true){
if((i__37891 < count__37890)){
var vec__37892 = cljs.core._nth.call(null,chunk__37889,i__37891);
var k = cljs.core.nth.call(null,vec__37892,(0),null);
var plugin = cljs.core.nth.call(null,vec__37892,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37898 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37888,chunk__37889,count__37890,i__37891,pl_37898,vec__37892,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37898.call(null,msg_hist);
});})(seq__37888,chunk__37889,count__37890,i__37891,pl_37898,vec__37892,k,plugin))
);
} else {
}

var G__37899 = seq__37888;
var G__37900 = chunk__37889;
var G__37901 = count__37890;
var G__37902 = (i__37891 + (1));
seq__37888 = G__37899;
chunk__37889 = G__37900;
count__37890 = G__37901;
i__37891 = G__37902;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37888);
if(temp__4657__auto__){
var seq__37888__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37888__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__37888__$1);
var G__37903 = cljs.core.chunk_rest.call(null,seq__37888__$1);
var G__37904 = c__29125__auto__;
var G__37905 = cljs.core.count.call(null,c__29125__auto__);
var G__37906 = (0);
seq__37888 = G__37903;
chunk__37889 = G__37904;
count__37890 = G__37905;
i__37891 = G__37906;
continue;
} else {
var vec__37895 = cljs.core.first.call(null,seq__37888__$1);
var k = cljs.core.nth.call(null,vec__37895,(0),null);
var plugin = cljs.core.nth.call(null,vec__37895,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37907 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37888,chunk__37889,count__37890,i__37891,pl_37907,vec__37895,k,plugin,seq__37888__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37907.call(null,msg_hist);
});})(seq__37888,chunk__37889,count__37890,i__37891,pl_37907,vec__37895,k,plugin,seq__37888__$1,temp__4657__auto__))
);
} else {
}

var G__37908 = cljs.core.next.call(null,seq__37888__$1);
var G__37909 = null;
var G__37910 = (0);
var G__37911 = (0);
seq__37888 = G__37908;
chunk__37889 = G__37909;
count__37890 = G__37910;
i__37891 = G__37911;
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
var G__37913 = arguments.length;
switch (G__37913) {
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

var seq__37914_37919 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37915_37920 = null;
var count__37916_37921 = (0);
var i__37917_37922 = (0);
while(true){
if((i__37917_37922 < count__37916_37921)){
var msg_37923 = cljs.core._nth.call(null,chunk__37915_37920,i__37917_37922);
figwheel.client.socket.handle_incoming_message.call(null,msg_37923);

var G__37924 = seq__37914_37919;
var G__37925 = chunk__37915_37920;
var G__37926 = count__37916_37921;
var G__37927 = (i__37917_37922 + (1));
seq__37914_37919 = G__37924;
chunk__37915_37920 = G__37925;
count__37916_37921 = G__37926;
i__37917_37922 = G__37927;
continue;
} else {
var temp__4657__auto___37928 = cljs.core.seq.call(null,seq__37914_37919);
if(temp__4657__auto___37928){
var seq__37914_37929__$1 = temp__4657__auto___37928;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37914_37929__$1)){
var c__29125__auto___37930 = cljs.core.chunk_first.call(null,seq__37914_37929__$1);
var G__37931 = cljs.core.chunk_rest.call(null,seq__37914_37929__$1);
var G__37932 = c__29125__auto___37930;
var G__37933 = cljs.core.count.call(null,c__29125__auto___37930);
var G__37934 = (0);
seq__37914_37919 = G__37931;
chunk__37915_37920 = G__37932;
count__37916_37921 = G__37933;
i__37917_37922 = G__37934;
continue;
} else {
var msg_37935 = cljs.core.first.call(null,seq__37914_37929__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37935);

var G__37936 = cljs.core.next.call(null,seq__37914_37929__$1);
var G__37937 = null;
var G__37938 = (0);
var G__37939 = (0);
seq__37914_37919 = G__37936;
chunk__37915_37920 = G__37937;
count__37916_37921 = G__37938;
i__37917_37922 = G__37939;
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
var len__29455__auto___37944 = arguments.length;
var i__29456__auto___37945 = (0);
while(true){
if((i__29456__auto___37945 < len__29455__auto___37944)){
args__29462__auto__.push((arguments[i__29456__auto___37945]));

var G__37946 = (i__29456__auto___37945 + (1));
i__29456__auto___37945 = G__37946;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37941){
var map__37942 = p__37941;
var map__37942__$1 = ((((!((map__37942 == null)))?((((map__37942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37942.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37942):map__37942);
var opts = map__37942__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37940){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37940));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37947){if((e37947 instanceof Error)){
var e = e37947;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37947;

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
return (function (p__37948){
var map__37949 = p__37948;
var map__37949__$1 = ((((!((map__37949 == null)))?((((map__37949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37949):map__37949);
var msg_name = cljs.core.get.call(null,map__37949__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1504634402727
