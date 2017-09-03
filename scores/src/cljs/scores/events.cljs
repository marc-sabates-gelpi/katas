(ns scores.events
  (:require [re-frame.core :as re-frame]
            [scores.db :as db]
            [scores.views :as views]
            [reagent.core :as reagent]))

(re-frame/reg-event-db
 :initialize-db
 (fn  [_ _]
   db/default-db))

(re-frame/reg-event-db
  :show-product-details
  (fn [db [_ product-id]]
    (assoc db :current-displayed-product product-id)))

