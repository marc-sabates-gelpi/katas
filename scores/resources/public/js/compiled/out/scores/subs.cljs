(ns scores.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 :product-list
 (fn [db _]
   (:product-list db)))

(re-frame/reg-sub
 :current-displayed-product
 (fn [db _]
   (:current-displayed-product db)))
