(ns scores.views
  (:require [re-frame.core :as re-frame]))

(defn product-details [{:keys [id name description]}]
  [:div#product-details
   [:h3 "Product details"]
   [:ul {:style {:list-style-type "none" :margin 0 :padding 0}}
    [:li [:b name]]
    [:li description]]])

(defn product-ratings [{:keys [id ratings]}]
  [:div#product-ratings
   [:h3 "Ratings"]
   (if ratings
     [:ul {:style {:list-style-type "none" :margin 0 :padding 0}}
      (doall
       (for [rating ratings]
         [:li rating]))]
     (str "There are no customer's ratings for the product yet; be the first one!"))
   [:br]
   [:button {:on-click (fn [e]
                         (.log js/console "I don't do anything yet!"))}
    "Rate it"]])

(defn product []
  (when-let [product-id @(re-frame/subscribe [:current-displayed-product])]
    [:div
     [product-details product-id]
     [product-ratings product-id]]))

(defn product-link [product]
  (fn []
    [:a {:href "#"
         :on-click (fn [e]
                     (.preventDefault e)
                     (re-frame/dispatch [:show-product-details product]))}
     (:name product)]))

(defn product-list []
  [:div 
   {:style {:float "left" :width "200px" :height "700px"}}
   [:ul
    (doall
     (for [product @(re-frame/subscribe [:product-list])]
       ^{:key (:id product)} [:li {:data-id (:id product)}
            [product-link product]]))]])

(defn main-panel []
  [:div
   {:style {:width "750px"
            :margin "0 auto"}}
   [:h2 "Product Page"]
   [product-list]
   [product]])
