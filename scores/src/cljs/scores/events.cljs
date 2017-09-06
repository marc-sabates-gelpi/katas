(ns scores.events
  (:require [re-frame.core :as re-frame]
            [scores.db :as db]
            [scores.views :as views]
            [reagent.core :as reagent]
            [day8.re-frame.http-fx]
            [ajax.edn]))

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
 :xhrio-update-success
 (fn [db _]
   (assoc db :xhrio-update-failure false)))

(re-frame/reg-event-db
 :xhrio-update-failure
 (fn [db _]
   (assoc db :xhrio-update-failure true)))

(re-frame/reg-event-fx
 :submit-rating
 (fn [cofx [_ product-id rating]]
   {:http-xhrio {:uri (str "http://localhost:3000/ratings/" product-id "/update")
                 :method :post
                 :timeout 10000
                 :params {:rating rating}
                 :format (ajax.edn/edn-request-format)
                 :response-format (ajax.edn/edn-response-format)
                 :on-success [:xhrio-update-success]
                 :on-failure [:xhrio-update-failure]}
    :db (-> cofx
            (:db)
            (assoc :add-rating-form false)
            (update-in [:products product-id :ratings] conj rating))}))
