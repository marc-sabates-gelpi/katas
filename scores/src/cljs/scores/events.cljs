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
  (fn [db [_ product]]
    (assoc db :current-displayed-product product :add-rating-form false)))

(re-frame/reg-event-db
 :show-add-rating-form
 (fn [db _]
   (assoc db :add-rating-form true)))

(re-frame/reg-event-db
 :hide-add-rating-form
 (fn [db _]
   (assoc db :add-rating-form false)))

(re-frame/reg-event-db
 :submit-rating
 (fn [db [_ product-id rating]]
   (-> db
       (assoc :add-rating-form false)
       (update-in [:products product-id :ratings] conj rating))))
