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
}catch (e39134){if((e39134 instanceof Error)){
var e = e39134;
return "Error: Unable to stringify";
} else {
throw e39134;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__39137 = arguments.length;
switch (G__39137) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__39135_SHARP_){
if(typeof p1__39135_SHARP_ === 'string'){
return p1__39135_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__39135_SHARP_);
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
var args__29599__auto__ = [];
var len__29592__auto___39140 = arguments.length;
var i__29593__auto___39141 = (0);
while(true){
if((i__29593__auto___39141 < len__29592__auto___39140)){
args__29599__auto__.push((arguments[i__29593__auto___39141]));

var G__39142 = (i__29593__auto___39141 + (1));
i__29593__auto___39141 = G__39142;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39139){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39139));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29599__auto__ = [];
var len__29592__auto___39144 = arguments.length;
var i__29593__auto___39145 = (0);
while(true){
if((i__29593__auto___39145 < len__29592__auto___39144)){
args__29599__auto__.push((arguments[i__29593__auto___39145]));

var G__39146 = (i__29593__auto___39145 + (1));
i__29593__auto___39145 = G__39146;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39143){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39143));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39147){
var map__39148 = p__39147;
var map__39148__$1 = ((((!((map__39148 == null)))?((((map__39148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39148):map__39148);
var message = cljs.core.get.call(null,map__39148__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39148__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28423__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28411__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28411__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28411__auto__;
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
var c__34205__auto___39227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto___39227,ch){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto___39227,ch){
return (function (state_39199){
var state_val_39200 = (state_39199[(1)]);
if((state_val_39200 === (7))){
var inst_39195 = (state_39199[(2)]);
var state_39199__$1 = state_39199;
var statearr_39201_39228 = state_39199__$1;
(statearr_39201_39228[(2)] = inst_39195);

(statearr_39201_39228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (1))){
var state_39199__$1 = state_39199;
var statearr_39202_39229 = state_39199__$1;
(statearr_39202_39229[(2)] = null);

(statearr_39202_39229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (4))){
var inst_39152 = (state_39199[(7)]);
var inst_39152__$1 = (state_39199[(2)]);
var state_39199__$1 = (function (){var statearr_39203 = state_39199;
(statearr_39203[(7)] = inst_39152__$1);

return statearr_39203;
})();
if(cljs.core.truth_(inst_39152__$1)){
var statearr_39204_39230 = state_39199__$1;
(statearr_39204_39230[(1)] = (5));

} else {
var statearr_39205_39231 = state_39199__$1;
(statearr_39205_39231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (15))){
var inst_39159 = (state_39199[(8)]);
var inst_39174 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39159);
var inst_39175 = cljs.core.first.call(null,inst_39174);
var inst_39176 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39175);
var inst_39177 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39176)].join('');
var inst_39178 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39177);
var state_39199__$1 = state_39199;
var statearr_39206_39232 = state_39199__$1;
(statearr_39206_39232[(2)] = inst_39178);

(statearr_39206_39232[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (13))){
var inst_39183 = (state_39199[(2)]);
var state_39199__$1 = state_39199;
var statearr_39207_39233 = state_39199__$1;
(statearr_39207_39233[(2)] = inst_39183);

(statearr_39207_39233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (6))){
var state_39199__$1 = state_39199;
var statearr_39208_39234 = state_39199__$1;
(statearr_39208_39234[(2)] = null);

(statearr_39208_39234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (17))){
var inst_39181 = (state_39199[(2)]);
var state_39199__$1 = state_39199;
var statearr_39209_39235 = state_39199__$1;
(statearr_39209_39235[(2)] = inst_39181);

(statearr_39209_39235[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (3))){
var inst_39197 = (state_39199[(2)]);
var state_39199__$1 = state_39199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39199__$1,inst_39197);
} else {
if((state_val_39200 === (12))){
var inst_39158 = (state_39199[(9)]);
var inst_39172 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39158,opts);
var state_39199__$1 = state_39199;
if(cljs.core.truth_(inst_39172)){
var statearr_39210_39236 = state_39199__$1;
(statearr_39210_39236[(1)] = (15));

} else {
var statearr_39211_39237 = state_39199__$1;
(statearr_39211_39237[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (2))){
var state_39199__$1 = state_39199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39199__$1,(4),ch);
} else {
if((state_val_39200 === (11))){
var inst_39159 = (state_39199[(8)]);
var inst_39164 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39165 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39159);
var inst_39166 = cljs.core.async.timeout.call(null,(1000));
var inst_39167 = [inst_39165,inst_39166];
var inst_39168 = (new cljs.core.PersistentVector(null,2,(5),inst_39164,inst_39167,null));
var state_39199__$1 = state_39199;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39199__$1,(14),inst_39168);
} else {
if((state_val_39200 === (9))){
var inst_39159 = (state_39199[(8)]);
var inst_39185 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39186 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39159);
var inst_39187 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39186);
var inst_39188 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39187)].join('');
var inst_39189 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39188);
var state_39199__$1 = (function (){var statearr_39212 = state_39199;
(statearr_39212[(10)] = inst_39185);

return statearr_39212;
})();
var statearr_39213_39238 = state_39199__$1;
(statearr_39213_39238[(2)] = inst_39189);

(statearr_39213_39238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (5))){
var inst_39152 = (state_39199[(7)]);
var inst_39154 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39155 = (new cljs.core.PersistentArrayMap(null,2,inst_39154,null));
var inst_39156 = (new cljs.core.PersistentHashSet(null,inst_39155,null));
var inst_39157 = figwheel.client.focus_msgs.call(null,inst_39156,inst_39152);
var inst_39158 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39157);
var inst_39159 = cljs.core.first.call(null,inst_39157);
var inst_39160 = figwheel.client.autoload_QMARK_.call(null);
var state_39199__$1 = (function (){var statearr_39214 = state_39199;
(statearr_39214[(8)] = inst_39159);

(statearr_39214[(9)] = inst_39158);

return statearr_39214;
})();
if(cljs.core.truth_(inst_39160)){
var statearr_39215_39239 = state_39199__$1;
(statearr_39215_39239[(1)] = (8));

} else {
var statearr_39216_39240 = state_39199__$1;
(statearr_39216_39240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (14))){
var inst_39170 = (state_39199[(2)]);
var state_39199__$1 = state_39199;
var statearr_39217_39241 = state_39199__$1;
(statearr_39217_39241[(2)] = inst_39170);

(statearr_39217_39241[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (16))){
var state_39199__$1 = state_39199;
var statearr_39218_39242 = state_39199__$1;
(statearr_39218_39242[(2)] = null);

(statearr_39218_39242[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (10))){
var inst_39191 = (state_39199[(2)]);
var state_39199__$1 = (function (){var statearr_39219 = state_39199;
(statearr_39219[(11)] = inst_39191);

return statearr_39219;
})();
var statearr_39220_39243 = state_39199__$1;
(statearr_39220_39243[(2)] = null);

(statearr_39220_39243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (8))){
var inst_39158 = (state_39199[(9)]);
var inst_39162 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39158,opts);
var state_39199__$1 = state_39199;
if(cljs.core.truth_(inst_39162)){
var statearr_39221_39244 = state_39199__$1;
(statearr_39221_39244[(1)] = (11));

} else {
var statearr_39222_39245 = state_39199__$1;
(statearr_39222_39245[(1)] = (12));

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
});})(c__34205__auto___39227,ch))
;
return ((function (switch__34117__auto__,c__34205__auto___39227,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34118__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34118__auto____0 = (function (){
var statearr_39223 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39223[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34118__auto__);

(statearr_39223[(1)] = (1));

return statearr_39223;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34118__auto____1 = (function (state_39199){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_39199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e39224){if((e39224 instanceof Object)){
var ex__34121__auto__ = e39224;
var statearr_39225_39246 = state_39199;
(statearr_39225_39246[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39247 = state_39199;
state_39199 = G__39247;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34118__auto__ = function(state_39199){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34118__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34118__auto____1.call(this,state_39199);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34118__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34118__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto___39227,ch))
})();
var state__34207__auto__ = (function (){var statearr_39226 = f__34206__auto__.call(null);
(statearr_39226[(6)] = c__34205__auto___39227);

return statearr_39226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto___39227,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39248_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39248_SHARP_));
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
var base_path_39250 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39250){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39249){if((e39249 instanceof Error)){
var e = e39249;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39250], null));
} else {
var e = e39249;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39250))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39251){
var map__39252 = p__39251;
var map__39252__$1 = ((((!((map__39252 == null)))?((((map__39252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39252):map__39252);
var opts = map__39252__$1;
var build_id = cljs.core.get.call(null,map__39252__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39252,map__39252__$1,opts,build_id){
return (function (p__39254){
var vec__39255 = p__39254;
var seq__39256 = cljs.core.seq.call(null,vec__39255);
var first__39257 = cljs.core.first.call(null,seq__39256);
var seq__39256__$1 = cljs.core.next.call(null,seq__39256);
var map__39258 = first__39257;
var map__39258__$1 = ((((!((map__39258 == null)))?((((map__39258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39258.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39258):map__39258);
var msg = map__39258__$1;
var msg_name = cljs.core.get.call(null,map__39258__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39256__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39255,seq__39256,first__39257,seq__39256__$1,map__39258,map__39258__$1,msg,msg_name,_,map__39252,map__39252__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39255,seq__39256,first__39257,seq__39256__$1,map__39258,map__39258__$1,msg,msg_name,_,map__39252,map__39252__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39252,map__39252__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39260){
var vec__39261 = p__39260;
var seq__39262 = cljs.core.seq.call(null,vec__39261);
var first__39263 = cljs.core.first.call(null,seq__39262);
var seq__39262__$1 = cljs.core.next.call(null,seq__39262);
var map__39264 = first__39263;
var map__39264__$1 = ((((!((map__39264 == null)))?((((map__39264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39264):map__39264);
var msg = map__39264__$1;
var msg_name = cljs.core.get.call(null,map__39264__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39262__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39266){
var map__39267 = p__39266;
var map__39267__$1 = ((((!((map__39267 == null)))?((((map__39267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39267.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39267):map__39267);
var on_compile_warning = cljs.core.get.call(null,map__39267__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39267__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39267,map__39267__$1,on_compile_warning,on_compile_fail){
return (function (p__39269){
var vec__39270 = p__39269;
var seq__39271 = cljs.core.seq.call(null,vec__39270);
var first__39272 = cljs.core.first.call(null,seq__39271);
var seq__39271__$1 = cljs.core.next.call(null,seq__39271);
var map__39273 = first__39272;
var map__39273__$1 = ((((!((map__39273 == null)))?((((map__39273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39273):map__39273);
var msg = map__39273__$1;
var msg_name = cljs.core.get.call(null,map__39273__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39271__$1;
var pred__39275 = cljs.core._EQ_;
var expr__39276 = msg_name;
if(cljs.core.truth_(pred__39275.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39276))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39275.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39276))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39267,map__39267__$1,on_compile_warning,on_compile_fail))
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
var c__34205__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto__,msg_hist,msg_names,msg){
return (function (state_39365){
var state_val_39366 = (state_39365[(1)]);
if((state_val_39366 === (7))){
var inst_39285 = (state_39365[(2)]);
var state_39365__$1 = state_39365;
if(cljs.core.truth_(inst_39285)){
var statearr_39367_39414 = state_39365__$1;
(statearr_39367_39414[(1)] = (8));

} else {
var statearr_39368_39415 = state_39365__$1;
(statearr_39368_39415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (20))){
var inst_39359 = (state_39365[(2)]);
var state_39365__$1 = state_39365;
var statearr_39369_39416 = state_39365__$1;
(statearr_39369_39416[(2)] = inst_39359);

(statearr_39369_39416[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (27))){
var inst_39355 = (state_39365[(2)]);
var state_39365__$1 = state_39365;
var statearr_39370_39417 = state_39365__$1;
(statearr_39370_39417[(2)] = inst_39355);

(statearr_39370_39417[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (1))){
var inst_39278 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39365__$1 = state_39365;
if(cljs.core.truth_(inst_39278)){
var statearr_39371_39418 = state_39365__$1;
(statearr_39371_39418[(1)] = (2));

} else {
var statearr_39372_39419 = state_39365__$1;
(statearr_39372_39419[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (24))){
var inst_39357 = (state_39365[(2)]);
var state_39365__$1 = state_39365;
var statearr_39373_39420 = state_39365__$1;
(statearr_39373_39420[(2)] = inst_39357);

(statearr_39373_39420[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (4))){
var inst_39363 = (state_39365[(2)]);
var state_39365__$1 = state_39365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39365__$1,inst_39363);
} else {
if((state_val_39366 === (15))){
var inst_39361 = (state_39365[(2)]);
var state_39365__$1 = state_39365;
var statearr_39374_39421 = state_39365__$1;
(statearr_39374_39421[(2)] = inst_39361);

(statearr_39374_39421[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (21))){
var inst_39314 = (state_39365[(2)]);
var inst_39315 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39316 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39315);
var state_39365__$1 = (function (){var statearr_39375 = state_39365;
(statearr_39375[(7)] = inst_39314);

return statearr_39375;
})();
var statearr_39376_39422 = state_39365__$1;
(statearr_39376_39422[(2)] = inst_39316);

(statearr_39376_39422[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (31))){
var inst_39344 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39365__$1 = state_39365;
if(cljs.core.truth_(inst_39344)){
var statearr_39377_39423 = state_39365__$1;
(statearr_39377_39423[(1)] = (34));

} else {
var statearr_39378_39424 = state_39365__$1;
(statearr_39378_39424[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (32))){
var inst_39353 = (state_39365[(2)]);
var state_39365__$1 = state_39365;
var statearr_39379_39425 = state_39365__$1;
(statearr_39379_39425[(2)] = inst_39353);

(statearr_39379_39425[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (33))){
var inst_39340 = (state_39365[(2)]);
var inst_39341 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39342 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39341);
var state_39365__$1 = (function (){var statearr_39380 = state_39365;
(statearr_39380[(8)] = inst_39340);

return statearr_39380;
})();
var statearr_39381_39426 = state_39365__$1;
(statearr_39381_39426[(2)] = inst_39342);

(statearr_39381_39426[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (13))){
var inst_39299 = figwheel.client.heads_up.clear.call(null);
var state_39365__$1 = state_39365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39365__$1,(16),inst_39299);
} else {
if((state_val_39366 === (22))){
var inst_39320 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39321 = figwheel.client.heads_up.append_warning_message.call(null,inst_39320);
var state_39365__$1 = state_39365;
var statearr_39382_39427 = state_39365__$1;
(statearr_39382_39427[(2)] = inst_39321);

(statearr_39382_39427[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (36))){
var inst_39351 = (state_39365[(2)]);
var state_39365__$1 = state_39365;
var statearr_39383_39428 = state_39365__$1;
(statearr_39383_39428[(2)] = inst_39351);

(statearr_39383_39428[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (29))){
var inst_39331 = (state_39365[(2)]);
var inst_39332 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39333 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39332);
var state_39365__$1 = (function (){var statearr_39384 = state_39365;
(statearr_39384[(9)] = inst_39331);

return statearr_39384;
})();
var statearr_39385_39429 = state_39365__$1;
(statearr_39385_39429[(2)] = inst_39333);

(statearr_39385_39429[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (6))){
var inst_39280 = (state_39365[(10)]);
var state_39365__$1 = state_39365;
var statearr_39386_39430 = state_39365__$1;
(statearr_39386_39430[(2)] = inst_39280);

(statearr_39386_39430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (28))){
var inst_39327 = (state_39365[(2)]);
var inst_39328 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39329 = figwheel.client.heads_up.display_warning.call(null,inst_39328);
var state_39365__$1 = (function (){var statearr_39387 = state_39365;
(statearr_39387[(11)] = inst_39327);

return statearr_39387;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39365__$1,(29),inst_39329);
} else {
if((state_val_39366 === (25))){
var inst_39325 = figwheel.client.heads_up.clear.call(null);
var state_39365__$1 = state_39365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39365__$1,(28),inst_39325);
} else {
if((state_val_39366 === (34))){
var inst_39346 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39365__$1 = state_39365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39365__$1,(37),inst_39346);
} else {
if((state_val_39366 === (17))){
var inst_39305 = (state_39365[(2)]);
var inst_39306 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39307 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39306);
var state_39365__$1 = (function (){var statearr_39388 = state_39365;
(statearr_39388[(12)] = inst_39305);

return statearr_39388;
})();
var statearr_39389_39431 = state_39365__$1;
(statearr_39389_39431[(2)] = inst_39307);

(statearr_39389_39431[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (3))){
var inst_39297 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39365__$1 = state_39365;
if(cljs.core.truth_(inst_39297)){
var statearr_39390_39432 = state_39365__$1;
(statearr_39390_39432[(1)] = (13));

} else {
var statearr_39391_39433 = state_39365__$1;
(statearr_39391_39433[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (12))){
var inst_39293 = (state_39365[(2)]);
var state_39365__$1 = state_39365;
var statearr_39392_39434 = state_39365__$1;
(statearr_39392_39434[(2)] = inst_39293);

(statearr_39392_39434[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (2))){
var inst_39280 = (state_39365[(10)]);
var inst_39280__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39365__$1 = (function (){var statearr_39393 = state_39365;
(statearr_39393[(10)] = inst_39280__$1);

return statearr_39393;
})();
if(cljs.core.truth_(inst_39280__$1)){
var statearr_39394_39435 = state_39365__$1;
(statearr_39394_39435[(1)] = (5));

} else {
var statearr_39395_39436 = state_39365__$1;
(statearr_39395_39436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (23))){
var inst_39323 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39365__$1 = state_39365;
if(cljs.core.truth_(inst_39323)){
var statearr_39396_39437 = state_39365__$1;
(statearr_39396_39437[(1)] = (25));

} else {
var statearr_39397_39438 = state_39365__$1;
(statearr_39397_39438[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (35))){
var state_39365__$1 = state_39365;
var statearr_39398_39439 = state_39365__$1;
(statearr_39398_39439[(2)] = null);

(statearr_39398_39439[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (19))){
var inst_39318 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39365__$1 = state_39365;
if(cljs.core.truth_(inst_39318)){
var statearr_39399_39440 = state_39365__$1;
(statearr_39399_39440[(1)] = (22));

} else {
var statearr_39400_39441 = state_39365__$1;
(statearr_39400_39441[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (11))){
var inst_39289 = (state_39365[(2)]);
var state_39365__$1 = state_39365;
var statearr_39401_39442 = state_39365__$1;
(statearr_39401_39442[(2)] = inst_39289);

(statearr_39401_39442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (9))){
var inst_39291 = figwheel.client.heads_up.clear.call(null);
var state_39365__$1 = state_39365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39365__$1,(12),inst_39291);
} else {
if((state_val_39366 === (5))){
var inst_39282 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39365__$1 = state_39365;
var statearr_39402_39443 = state_39365__$1;
(statearr_39402_39443[(2)] = inst_39282);

(statearr_39402_39443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (14))){
var inst_39309 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39365__$1 = state_39365;
if(cljs.core.truth_(inst_39309)){
var statearr_39403_39444 = state_39365__$1;
(statearr_39403_39444[(1)] = (18));

} else {
var statearr_39404_39445 = state_39365__$1;
(statearr_39404_39445[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (26))){
var inst_39335 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39365__$1 = state_39365;
if(cljs.core.truth_(inst_39335)){
var statearr_39405_39446 = state_39365__$1;
(statearr_39405_39446[(1)] = (30));

} else {
var statearr_39406_39447 = state_39365__$1;
(statearr_39406_39447[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (16))){
var inst_39301 = (state_39365[(2)]);
var inst_39302 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39303 = figwheel.client.heads_up.display_exception.call(null,inst_39302);
var state_39365__$1 = (function (){var statearr_39407 = state_39365;
(statearr_39407[(13)] = inst_39301);

return statearr_39407;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39365__$1,(17),inst_39303);
} else {
if((state_val_39366 === (30))){
var inst_39337 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39338 = figwheel.client.heads_up.display_warning.call(null,inst_39337);
var state_39365__$1 = state_39365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39365__$1,(33),inst_39338);
} else {
if((state_val_39366 === (10))){
var inst_39295 = (state_39365[(2)]);
var state_39365__$1 = state_39365;
var statearr_39408_39448 = state_39365__$1;
(statearr_39408_39448[(2)] = inst_39295);

(statearr_39408_39448[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (18))){
var inst_39311 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39312 = figwheel.client.heads_up.display_exception.call(null,inst_39311);
var state_39365__$1 = state_39365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39365__$1,(21),inst_39312);
} else {
if((state_val_39366 === (37))){
var inst_39348 = (state_39365[(2)]);
var state_39365__$1 = state_39365;
var statearr_39409_39449 = state_39365__$1;
(statearr_39409_39449[(2)] = inst_39348);

(statearr_39409_39449[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (8))){
var inst_39287 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39365__$1 = state_39365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39365__$1,(11),inst_39287);
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
});})(c__34205__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__34117__auto__,c__34205__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34118__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34118__auto____0 = (function (){
var statearr_39410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39410[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34118__auto__);

(statearr_39410[(1)] = (1));

return statearr_39410;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34118__auto____1 = (function (state_39365){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_39365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e39411){if((e39411 instanceof Object)){
var ex__34121__auto__ = e39411;
var statearr_39412_39450 = state_39365;
(statearr_39412_39450[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39451 = state_39365;
state_39365 = G__39451;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34118__auto__ = function(state_39365){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34118__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34118__auto____1.call(this,state_39365);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34118__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34118__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto__,msg_hist,msg_names,msg))
})();
var state__34207__auto__ = (function (){var statearr_39413 = f__34206__auto__.call(null);
(statearr_39413[(6)] = c__34205__auto__);

return statearr_39413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto__,msg_hist,msg_names,msg))
);

return c__34205__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34205__auto___39480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto___39480,ch){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto___39480,ch){
return (function (state_39466){
var state_val_39467 = (state_39466[(1)]);
if((state_val_39467 === (1))){
var state_39466__$1 = state_39466;
var statearr_39468_39481 = state_39466__$1;
(statearr_39468_39481[(2)] = null);

(statearr_39468_39481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (2))){
var state_39466__$1 = state_39466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39466__$1,(4),ch);
} else {
if((state_val_39467 === (3))){
var inst_39464 = (state_39466[(2)]);
var state_39466__$1 = state_39466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39466__$1,inst_39464);
} else {
if((state_val_39467 === (4))){
var inst_39454 = (state_39466[(7)]);
var inst_39454__$1 = (state_39466[(2)]);
var state_39466__$1 = (function (){var statearr_39469 = state_39466;
(statearr_39469[(7)] = inst_39454__$1);

return statearr_39469;
})();
if(cljs.core.truth_(inst_39454__$1)){
var statearr_39470_39482 = state_39466__$1;
(statearr_39470_39482[(1)] = (5));

} else {
var statearr_39471_39483 = state_39466__$1;
(statearr_39471_39483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (5))){
var inst_39454 = (state_39466[(7)]);
var inst_39456 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39454);
var state_39466__$1 = state_39466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39466__$1,(8),inst_39456);
} else {
if((state_val_39467 === (6))){
var state_39466__$1 = state_39466;
var statearr_39472_39484 = state_39466__$1;
(statearr_39472_39484[(2)] = null);

(statearr_39472_39484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (7))){
var inst_39462 = (state_39466[(2)]);
var state_39466__$1 = state_39466;
var statearr_39473_39485 = state_39466__$1;
(statearr_39473_39485[(2)] = inst_39462);

(statearr_39473_39485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (8))){
var inst_39458 = (state_39466[(2)]);
var state_39466__$1 = (function (){var statearr_39474 = state_39466;
(statearr_39474[(8)] = inst_39458);

return statearr_39474;
})();
var statearr_39475_39486 = state_39466__$1;
(statearr_39475_39486[(2)] = null);

(statearr_39475_39486[(1)] = (2));


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
});})(c__34205__auto___39480,ch))
;
return ((function (switch__34117__auto__,c__34205__auto___39480,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34118__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34118__auto____0 = (function (){
var statearr_39476 = [null,null,null,null,null,null,null,null,null];
(statearr_39476[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34118__auto__);

(statearr_39476[(1)] = (1));

return statearr_39476;
});
var figwheel$client$heads_up_plugin_$_state_machine__34118__auto____1 = (function (state_39466){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_39466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e39477){if((e39477 instanceof Object)){
var ex__34121__auto__ = e39477;
var statearr_39478_39487 = state_39466;
(statearr_39478_39487[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39488 = state_39466;
state_39466 = G__39488;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34118__auto__ = function(state_39466){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34118__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34118__auto____1.call(this,state_39466);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34118__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34118__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto___39480,ch))
})();
var state__34207__auto__ = (function (){var statearr_39479 = f__34206__auto__.call(null);
(statearr_39479[(6)] = c__34205__auto___39480);

return statearr_39479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto___39480,ch))
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
var c__34205__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto__){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto__){
return (function (state_39494){
var state_val_39495 = (state_39494[(1)]);
if((state_val_39495 === (1))){
var inst_39489 = cljs.core.async.timeout.call(null,(3000));
var state_39494__$1 = state_39494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39494__$1,(2),inst_39489);
} else {
if((state_val_39495 === (2))){
var inst_39491 = (state_39494[(2)]);
var inst_39492 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39494__$1 = (function (){var statearr_39496 = state_39494;
(statearr_39496[(7)] = inst_39491);

return statearr_39496;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39494__$1,inst_39492);
} else {
return null;
}
}
});})(c__34205__auto__))
;
return ((function (switch__34117__auto__,c__34205__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34118__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34118__auto____0 = (function (){
var statearr_39497 = [null,null,null,null,null,null,null,null];
(statearr_39497[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34118__auto__);

(statearr_39497[(1)] = (1));

return statearr_39497;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34118__auto____1 = (function (state_39494){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_39494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e39498){if((e39498 instanceof Object)){
var ex__34121__auto__ = e39498;
var statearr_39499_39501 = state_39494;
(statearr_39499_39501[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39502 = state_39494;
state_39494 = G__39502;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34118__auto__ = function(state_39494){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34118__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34118__auto____1.call(this,state_39494);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34118__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34118__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto__))
})();
var state__34207__auto__ = (function (){var statearr_39500 = f__34206__auto__.call(null);
(statearr_39500[(6)] = c__34205__auto__);

return statearr_39500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto__))
);

return c__34205__auto__;
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
var c__34205__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34205__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__34206__auto__ = (function (){var switch__34117__auto__ = ((function (c__34205__auto__,figwheel_version,temp__4657__auto__){
return (function (state_39509){
var state_val_39510 = (state_39509[(1)]);
if((state_val_39510 === (1))){
var inst_39503 = cljs.core.async.timeout.call(null,(2000));
var state_39509__$1 = state_39509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39509__$1,(2),inst_39503);
} else {
if((state_val_39510 === (2))){
var inst_39505 = (state_39509[(2)]);
var inst_39506 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39507 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39506);
var state_39509__$1 = (function (){var statearr_39511 = state_39509;
(statearr_39511[(7)] = inst_39505);

return statearr_39511;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39509__$1,inst_39507);
} else {
return null;
}
}
});})(c__34205__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__34117__auto__,c__34205__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34118__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34118__auto____0 = (function (){
var statearr_39512 = [null,null,null,null,null,null,null,null];
(statearr_39512[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34118__auto__);

(statearr_39512[(1)] = (1));

return statearr_39512;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34118__auto____1 = (function (state_39509){
while(true){
var ret_value__34119__auto__ = (function (){try{while(true){
var result__34120__auto__ = switch__34117__auto__.call(null,state_39509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34120__auto__;
}
break;
}
}catch (e39513){if((e39513 instanceof Object)){
var ex__34121__auto__ = e39513;
var statearr_39514_39516 = state_39509;
(statearr_39514_39516[(5)] = ex__34121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39517 = state_39509;
state_39509 = G__39517;
continue;
} else {
return ret_value__34119__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34118__auto__ = function(state_39509){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34118__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34118__auto____1.call(this,state_39509);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34118__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34118__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34118__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34118__auto__;
})()
;})(switch__34117__auto__,c__34205__auto__,figwheel_version,temp__4657__auto__))
})();
var state__34207__auto__ = (function (){var statearr_39515 = f__34206__auto__.call(null);
(statearr_39515[(6)] = c__34205__auto__);

return statearr_39515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34207__auto__);
});})(c__34205__auto__,figwheel_version,temp__4657__auto__))
);

return c__34205__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39518){
var map__39519 = p__39518;
var map__39519__$1 = ((((!((map__39519 == null)))?((((map__39519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39519):map__39519);
var file = cljs.core.get.call(null,map__39519__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39519__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39519__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39521 = "";
var G__39521__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39521),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39521);
var G__39521__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39521__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39521__$1);
if(cljs.core.truth_((function (){var and__28411__auto__ = line;
if(cljs.core.truth_(and__28411__auto__)){
return column;
} else {
return and__28411__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39521__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39521__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39522){
var map__39523 = p__39522;
var map__39523__$1 = ((((!((map__39523 == null)))?((((map__39523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39523):map__39523);
var ed = map__39523__$1;
var formatted_exception = cljs.core.get.call(null,map__39523__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39523__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39523__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39525_39529 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39526_39530 = null;
var count__39527_39531 = (0);
var i__39528_39532 = (0);
while(true){
if((i__39528_39532 < count__39527_39531)){
var msg_39533 = cljs.core._nth.call(null,chunk__39526_39530,i__39528_39532);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39533);

var G__39534 = seq__39525_39529;
var G__39535 = chunk__39526_39530;
var G__39536 = count__39527_39531;
var G__39537 = (i__39528_39532 + (1));
seq__39525_39529 = G__39534;
chunk__39526_39530 = G__39535;
count__39527_39531 = G__39536;
i__39528_39532 = G__39537;
continue;
} else {
var temp__4657__auto___39538 = cljs.core.seq.call(null,seq__39525_39529);
if(temp__4657__auto___39538){
var seq__39525_39539__$1 = temp__4657__auto___39538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39525_39539__$1)){
var c__29262__auto___39540 = cljs.core.chunk_first.call(null,seq__39525_39539__$1);
var G__39541 = cljs.core.chunk_rest.call(null,seq__39525_39539__$1);
var G__39542 = c__29262__auto___39540;
var G__39543 = cljs.core.count.call(null,c__29262__auto___39540);
var G__39544 = (0);
seq__39525_39529 = G__39541;
chunk__39526_39530 = G__39542;
count__39527_39531 = G__39543;
i__39528_39532 = G__39544;
continue;
} else {
var msg_39545 = cljs.core.first.call(null,seq__39525_39539__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39545);

var G__39546 = cljs.core.next.call(null,seq__39525_39539__$1);
var G__39547 = null;
var G__39548 = (0);
var G__39549 = (0);
seq__39525_39529 = G__39546;
chunk__39526_39530 = G__39547;
count__39527_39531 = G__39548;
i__39528_39532 = G__39549;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39550){
var map__39551 = p__39550;
var map__39551__$1 = ((((!((map__39551 == null)))?((((map__39551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39551.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39551):map__39551);
var w = map__39551__$1;
var message = cljs.core.get.call(null,map__39551__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__28411__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28411__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28411__auto__;
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
var seq__39553 = cljs.core.seq.call(null,plugins);
var chunk__39554 = null;
var count__39555 = (0);
var i__39556 = (0);
while(true){
if((i__39556 < count__39555)){
var vec__39557 = cljs.core._nth.call(null,chunk__39554,i__39556);
var k = cljs.core.nth.call(null,vec__39557,(0),null);
var plugin = cljs.core.nth.call(null,vec__39557,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39563 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39553,chunk__39554,count__39555,i__39556,pl_39563,vec__39557,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39563.call(null,msg_hist);
});})(seq__39553,chunk__39554,count__39555,i__39556,pl_39563,vec__39557,k,plugin))
);
} else {
}

var G__39564 = seq__39553;
var G__39565 = chunk__39554;
var G__39566 = count__39555;
var G__39567 = (i__39556 + (1));
seq__39553 = G__39564;
chunk__39554 = G__39565;
count__39555 = G__39566;
i__39556 = G__39567;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39553);
if(temp__4657__auto__){
var seq__39553__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39553__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__39553__$1);
var G__39568 = cljs.core.chunk_rest.call(null,seq__39553__$1);
var G__39569 = c__29262__auto__;
var G__39570 = cljs.core.count.call(null,c__29262__auto__);
var G__39571 = (0);
seq__39553 = G__39568;
chunk__39554 = G__39569;
count__39555 = G__39570;
i__39556 = G__39571;
continue;
} else {
var vec__39560 = cljs.core.first.call(null,seq__39553__$1);
var k = cljs.core.nth.call(null,vec__39560,(0),null);
var plugin = cljs.core.nth.call(null,vec__39560,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39572 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39553,chunk__39554,count__39555,i__39556,pl_39572,vec__39560,k,plugin,seq__39553__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39572.call(null,msg_hist);
});})(seq__39553,chunk__39554,count__39555,i__39556,pl_39572,vec__39560,k,plugin,seq__39553__$1,temp__4657__auto__))
);
} else {
}

var G__39573 = cljs.core.next.call(null,seq__39553__$1);
var G__39574 = null;
var G__39575 = (0);
var G__39576 = (0);
seq__39553 = G__39573;
chunk__39554 = G__39574;
count__39555 = G__39575;
i__39556 = G__39576;
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
var G__39578 = arguments.length;
switch (G__39578) {
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

var seq__39579_39584 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39580_39585 = null;
var count__39581_39586 = (0);
var i__39582_39587 = (0);
while(true){
if((i__39582_39587 < count__39581_39586)){
var msg_39588 = cljs.core._nth.call(null,chunk__39580_39585,i__39582_39587);
figwheel.client.socket.handle_incoming_message.call(null,msg_39588);

var G__39589 = seq__39579_39584;
var G__39590 = chunk__39580_39585;
var G__39591 = count__39581_39586;
var G__39592 = (i__39582_39587 + (1));
seq__39579_39584 = G__39589;
chunk__39580_39585 = G__39590;
count__39581_39586 = G__39591;
i__39582_39587 = G__39592;
continue;
} else {
var temp__4657__auto___39593 = cljs.core.seq.call(null,seq__39579_39584);
if(temp__4657__auto___39593){
var seq__39579_39594__$1 = temp__4657__auto___39593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39579_39594__$1)){
var c__29262__auto___39595 = cljs.core.chunk_first.call(null,seq__39579_39594__$1);
var G__39596 = cljs.core.chunk_rest.call(null,seq__39579_39594__$1);
var G__39597 = c__29262__auto___39595;
var G__39598 = cljs.core.count.call(null,c__29262__auto___39595);
var G__39599 = (0);
seq__39579_39584 = G__39596;
chunk__39580_39585 = G__39597;
count__39581_39586 = G__39598;
i__39582_39587 = G__39599;
continue;
} else {
var msg_39600 = cljs.core.first.call(null,seq__39579_39594__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39600);

var G__39601 = cljs.core.next.call(null,seq__39579_39594__$1);
var G__39602 = null;
var G__39603 = (0);
var G__39604 = (0);
seq__39579_39584 = G__39601;
chunk__39580_39585 = G__39602;
count__39581_39586 = G__39603;
i__39582_39587 = G__39604;
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
var args__29599__auto__ = [];
var len__29592__auto___39609 = arguments.length;
var i__29593__auto___39610 = (0);
while(true){
if((i__29593__auto___39610 < len__29592__auto___39609)){
args__29599__auto__.push((arguments[i__29593__auto___39610]));

var G__39611 = (i__29593__auto___39610 + (1));
i__29593__auto___39610 = G__39611;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39606){
var map__39607 = p__39606;
var map__39607__$1 = ((((!((map__39607 == null)))?((((map__39607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39607.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39607):map__39607);
var opts = map__39607__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39605){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39605));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39612){if((e39612 instanceof Error)){
var e = e39612;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39612;

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
return (function (p__39613){
var map__39614 = p__39613;
var map__39614__$1 = ((((!((map__39614 == null)))?((((map__39614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39614):map__39614);
var msg_name = cljs.core.get.call(null,map__39614__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1504733885849
