(ns scores.views
  (:require [re-frame.core :as re-frame]))

;; (defn product-details [product-id]
;;   [:div
;;    {:id "product-details"}
;;    [:h3 "Product details"]
;;    (str "Product details' for product id " product-id)])

;; (defn product-ratings [product-id]
;;   [:div
;;    {:id "product-rating"}
;;    [:h3 "Ratings"]
;;    (str "Customer's ratings for the product id " product-id)])

(defn product []
  (when-let [product-id @(re-frame/subscribe [:current-displayed-product])]
    [:div
     [:div
      {:id "product-details"}
      [:h3 "Product details"]
      (str "Product details' for product id " product-id)]
     [:div
      {:id "product-rating"}
      [:h3 "Ratings"]
      (str "Customer's ratings for the product id " product-id)]]))

;; (defn product-link [product]
;;   (fn []
;;     [:a {:href "#"
;;          :on-click (fn [e]
;;                      (.preventDefault e)
;;                      (re-frame/dispatch [:show-product-details (:id product)]))}
;;      (:name product)]))

(defn product-list []
  [:div 
   {:style {:float "left" :width "200px"}}
   [:ul
    (doall
     (for [product @(re-frame/subscribe [:product-list])]
       [:li {:data-id (:id product) :key (:id product)}
        [:a {:href "#"
             :on-click (fn [e]
                         (.preventDefault e)
                         (re-frame/dispatch [:show-product-details (:id product)]))}
         (:name product)]]))]])

(defn main-panel []
  [:div
   {:style {:width "750px"
            :margin "0 auto"}}
   [:h2 "Product Page"]
   [product-list]
   [product]])
