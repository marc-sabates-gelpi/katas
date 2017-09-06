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
var x__29106__auto__ = (((value == null))?null:value);
var m__29107__auto__ = (devtools.format._header[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,value);
} else {
var m__29107__auto____$1 = (devtools.format._header["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,value);
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
var x__29106__auto__ = (((value == null))?null:value);
var m__29107__auto__ = (devtools.format._has_body[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,value);
} else {
var m__29107__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,value);
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
var x__29106__auto__ = (((value == null))?null:value);
var m__29107__auto__ = (devtools.format._body[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,value);
} else {
var m__29107__auto____$1 = (devtools.format._body["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,value);
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
var o39748 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39748["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39749 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39749["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39750 = temp__4655__auto____$2;
return (o39750["make_template"]);
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
var o39751 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39751["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39752 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39752["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39753 = temp__4655__auto____$2;
return (o39753["make_group"]);
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
var o39754 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39754["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39755 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39755["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39756 = temp__4655__auto____$2;
return (o39756["make_reference"]);
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
var o39757 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39757["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39758 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39758["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39759 = temp__4655__auto____$2;
return (o39759["make_surrogate"]);
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
var o39760 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39760["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39761 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39761["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39762 = temp__4655__auto____$2;
return (o39762["render_markup"]);
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
var o39763 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39763["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39764 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39764["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39765 = temp__4655__auto____$2;
return (o39765["_LT_header_GT_"]);
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
var o39766 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39766["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39767 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39767["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39768 = temp__4655__auto____$2;
return (o39768["_LT_standard_body_GT_"]);
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
var args__29599__auto__ = [];
var len__29592__auto___39770 = arguments.length;
var i__29593__auto___39771 = (0);
while(true){
if((i__29593__auto___39771 < len__29592__auto___39770)){
args__29599__auto__.push((arguments[i__29593__auto___39771]));

var G__39772 = (i__29593__auto___39771 + (1));
i__29593__auto___39771 = G__39772;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq39769){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39769));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__29599__auto__ = [];
var len__29592__auto___39774 = arguments.length;
var i__29593__auto___39775 = (0);
while(true){
if((i__29593__auto___39775 < len__29592__auto___39774)){
args__29599__auto__.push((arguments[i__29593__auto___39775]));

var G__39776 = (i__29593__auto___39775 + (1));
i__29593__auto___39775 = G__39776;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq39773){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39773));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__29599__auto__ = [];
var len__29592__auto___39778 = arguments.length;
var i__29593__auto___39779 = (0);
while(true){
if((i__29593__auto___39779 < len__29592__auto___39778)){
args__29599__auto__.push((arguments[i__29593__auto___39779]));

var G__39780 = (i__29593__auto___39779 + (1));
i__29593__auto___39779 = G__39780;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq39777){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39777));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__29599__auto__ = [];
var len__29592__auto___39782 = arguments.length;
var i__29593__auto___39783 = (0);
while(true){
if((i__29593__auto___39783 < len__29592__auto___39782)){
args__29599__auto__.push((arguments[i__29593__auto___39783]));

var G__39784 = (i__29593__auto___39783 + (1));
i__29593__auto___39783 = G__39784;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq39781){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39781));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__29599__auto__ = [];
var len__29592__auto___39786 = arguments.length;
var i__29593__auto___39787 = (0);
while(true){
if((i__29593__auto___39787 < len__29592__auto___39786)){
args__29599__auto__.push((arguments[i__29593__auto___39787]));

var G__39788 = (i__29593__auto___39787 + (1));
i__29593__auto___39787 = G__39788;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq39785){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39785));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__29599__auto__ = [];
var len__29592__auto___39790 = arguments.length;
var i__29593__auto___39791 = (0);
while(true){
if((i__29593__auto___39791 < len__29592__auto___39790)){
args__29599__auto__.push((arguments[i__29593__auto___39791]));

var G__39792 = (i__29593__auto___39791 + (1));
i__29593__auto___39791 = G__39792;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq39789){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39789));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__29599__auto__ = [];
var len__29592__auto___39794 = arguments.length;
var i__29593__auto___39795 = (0);
while(true){
if((i__29593__auto___39795 < len__29592__auto___39794)){
args__29599__auto__.push((arguments[i__29593__auto___39795]));

var G__39796 = (i__29593__auto___39795 + (1));
i__29593__auto___39795 = G__39796;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq39793){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39793));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__29599__auto__ = [];
var len__29592__auto___39804 = arguments.length;
var i__29593__auto___39805 = (0);
while(true){
if((i__29593__auto___39805 < len__29592__auto___39804)){
args__29599__auto__.push((arguments[i__29593__auto___39805]));

var G__39806 = (i__29593__auto___39805 + (1));
i__29593__auto___39805 = G__39806;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((1) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29600__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__39800){
var vec__39801 = p__39800;
var state_override = cljs.core.nth.call(null,vec__39801,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__39801,state_override){
return (function (p1__39797_SHARP_){
return cljs.core.merge.call(null,p1__39797_SHARP_,state_override);
});})(vec__39801,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq39798){
var G__39799 = cljs.core.first.call(null,seq39798);
var seq39798__$1 = cljs.core.next.call(null,seq39798);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__39799,seq39798__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__29599__auto__ = [];
var len__29592__auto___39808 = arguments.length;
var i__29593__auto___39809 = (0);
while(true){
if((i__29593__auto___39809 < len__29592__auto___39808)){
args__29599__auto__.push((arguments[i__29593__auto___39809]));

var G__39810 = (i__29593__auto___39809 + (1));
i__29593__auto___39809 = G__39810;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq39807){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39807));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__29599__auto__ = [];
var len__29592__auto___39813 = arguments.length;
var i__29593__auto___39814 = (0);
while(true){
if((i__29593__auto___39814 < len__29592__auto___39813)){
args__29599__auto__.push((arguments[i__29593__auto___39814]));

var G__39815 = (i__29593__auto___39814 + (1));
i__29593__auto___39814 = G__39815;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((1) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29600__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq39811){
var G__39812 = cljs.core.first.call(null,seq39811);
var seq39811__$1 = cljs.core.next.call(null,seq39811);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__39812,seq39811__$1);
});


//# sourceMappingURL=format.js.map?rel=1504733886810
