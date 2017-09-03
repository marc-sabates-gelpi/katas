// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__28969__auto__ = (((value == null))?null:value);
var m__28970__auto__ = (devtools.format._header[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,value);
} else {
var m__28970__auto____$1 = (devtools.format._header["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__28969__auto__ = (((value == null))?null:value);
var m__28970__auto__ = (devtools.format._has_body[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,value);
} else {
var m__28970__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__28969__auto__ = (((value == null))?null:value);
var m__28970__auto__ = (devtools.format._body[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,value);
} else {
var m__28970__auto____$1 = (devtools.format._body["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o38063 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38063["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38064 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38064["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38065 = temp__4655__auto____$2;
return (o38065["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o38066 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38066["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38067 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38067["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38068 = temp__4655__auto____$2;
return (o38068["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o38069 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38069["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38070 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38070["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38071 = temp__4655__auto____$2;
return (o38071["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o38072 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38072["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38073 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38073["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38074 = temp__4655__auto____$2;
return (o38074["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o38075 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38075["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38076 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38076["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38077 = temp__4655__auto____$2;
return (o38077["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o38078 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38078["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38079 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38079["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38080 = temp__4655__auto____$2;
return (o38080["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o38081 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38081["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38082 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38082["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38083 = temp__4655__auto____$2;
return (o38083["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38085 = arguments.length;
var i__29456__auto___38086 = (0);
while(true){
if((i__29456__auto___38086 < len__29455__auto___38085)){
args__29462__auto__.push((arguments[i__29456__auto___38086]));

var G__38087 = (i__29456__auto___38086 + (1));
i__29456__auto___38086 = G__38087;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq38084){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38084));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38089 = arguments.length;
var i__29456__auto___38090 = (0);
while(true){
if((i__29456__auto___38090 < len__29455__auto___38089)){
args__29462__auto__.push((arguments[i__29456__auto___38090]));

var G__38091 = (i__29456__auto___38090 + (1));
i__29456__auto___38090 = G__38091;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq38088){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38088));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38093 = arguments.length;
var i__29456__auto___38094 = (0);
while(true){
if((i__29456__auto___38094 < len__29455__auto___38093)){
args__29462__auto__.push((arguments[i__29456__auto___38094]));

var G__38095 = (i__29456__auto___38094 + (1));
i__29456__auto___38094 = G__38095;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq38092){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38092));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38097 = arguments.length;
var i__29456__auto___38098 = (0);
while(true){
if((i__29456__auto___38098 < len__29455__auto___38097)){
args__29462__auto__.push((arguments[i__29456__auto___38098]));

var G__38099 = (i__29456__auto___38098 + (1));
i__29456__auto___38098 = G__38099;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq38096){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38096));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38101 = arguments.length;
var i__29456__auto___38102 = (0);
while(true){
if((i__29456__auto___38102 < len__29455__auto___38101)){
args__29462__auto__.push((arguments[i__29456__auto___38102]));

var G__38103 = (i__29456__auto___38102 + (1));
i__29456__auto___38102 = G__38103;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq38100){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38100));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38105 = arguments.length;
var i__29456__auto___38106 = (0);
while(true){
if((i__29456__auto___38106 < len__29455__auto___38105)){
args__29462__auto__.push((arguments[i__29456__auto___38106]));

var G__38107 = (i__29456__auto___38106 + (1));
i__29456__auto___38106 = G__38107;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq38104){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38104));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38109 = arguments.length;
var i__29456__auto___38110 = (0);
while(true){
if((i__29456__auto___38110 < len__29455__auto___38109)){
args__29462__auto__.push((arguments[i__29456__auto___38110]));

var G__38111 = (i__29456__auto___38110 + (1));
i__29456__auto___38110 = G__38111;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq38108){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38108));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38119 = arguments.length;
var i__29456__auto___38120 = (0);
while(true){
if((i__29456__auto___38120 < len__29455__auto___38119)){
args__29462__auto__.push((arguments[i__29456__auto___38120]));

var G__38121 = (i__29456__auto___38120 + (1));
i__29456__auto___38120 = G__38121;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__38115){
var vec__38116 = p__38115;
var state_override = cljs.core.nth.call(null,vec__38116,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__38116,state_override){
return (function (p1__38112_SHARP_){
return cljs.core.merge.call(null,p1__38112_SHARP_,state_override);
});})(vec__38116,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq38113){
var G__38114 = cljs.core.first.call(null,seq38113);
var seq38113__$1 = cljs.core.next.call(null,seq38113);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__38114,seq38113__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38123 = arguments.length;
var i__29456__auto___38124 = (0);
while(true){
if((i__29456__auto___38124 < len__29455__auto___38123)){
args__29462__auto__.push((arguments[i__29456__auto___38124]));

var G__38125 = (i__29456__auto___38124 + (1));
i__29456__auto___38124 = G__38125;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq38122){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38122));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38128 = arguments.length;
var i__29456__auto___38129 = (0);
while(true){
if((i__29456__auto___38129 < len__29455__auto___38128)){
args__29462__auto__.push((arguments[i__29456__auto___38129]));

var G__38130 = (i__29456__auto___38129 + (1));
i__29456__auto___38129 = G__38130;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq38126){
var G__38127 = cljs.core.first.call(null,seq38126);
var seq38126__$1 = cljs.core.next.call(null,seq38126);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__38127,seq38126__$1);
});


//# sourceMappingURL=format.js.map?rel=1504451421727
