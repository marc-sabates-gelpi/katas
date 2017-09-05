// Compiled by ClojureScript 1.9.908 {}
goog.provide('scores.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('scores.events');
goog.require('scores.subs');
goog.require('scores.views');
goog.require('scores.config');
scores.core.dev_setup = (function scores$core$dev_setup(){
if(scores.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
scores.core.mount_root = (function scores$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scores.views.main_panel], null),document.getElementById("app"));
});
scores.core.init = (function scores$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

scores.core.dev_setup.call(null);

return scores.core.mount_root.call(null);
});
goog.exportSymbol('scores.core.init', scores.core.init);

//# sourceMappingURL=core.js.map?rel=1504643950378
