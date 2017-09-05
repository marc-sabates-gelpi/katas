(ns scores.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 :products
 (fn [db _]
   (:products db)))

(re-frame/reg-sub
 :current-displayed-product
 (fn [db _]
   (:current-displayed-product db)))

(re-frame/reg-sub
 :add-rating-form
 (fn [db _]
   (:add-rating-form db)))
