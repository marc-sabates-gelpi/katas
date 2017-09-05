(ns scores.views
  (:require [re-frame.core :as re-frame]))

(defn add-rating-button []
  (if-not @(re-frame/subscribe [:add-rating-form])
    [:button {:on-click (fn [e]
                          (re-frame/dispatch [:show-add-rating-form]))}
     "Rate it"]))

(defn add-rating-form [product-id]
  (if @(re-frame/subscribe [:add-rating-form])
    [:form
     [:p
      [:textarea {:id "rating-to-add" :defaultValue "Add rating here" :style {:margin 0 :width "325px" :height "131px"}}]]
     [:p
      [:button {:on-click (fn [e]
                            (.preventDefault e)
                            (re-frame/dispatch [:submit-rating product-id (.-value (.getElementById js/document "rating-to-add"))]))}
       "Submit"]]]))

(defn product-ratings [{:keys [id]}]
  (let [ratings (:ratings (@(re-frame/subscribe [:products]) id))]
    [:div#product-ratings
     [:h3 "Ratings"]
     (if ratings
       [:ul {:style {:list-style-type "none" :margin 0 :padding 0}}
        (doall
         (for [rating ratings]
           ^{:key rating} [:li rating]))]
       (str "There are no customer's ratings for the product yet; be the first one!"))
     [:br]
     [add-rating-button]
     [add-rating-form id]]))

(defn product-details [{:keys [name description]}]
  [:div#product-details
   [:h3 "Product details"]
   [:ul {:style {:list-style-type "none" :margin 0 :padding 0}}
    [:li [:b name]]
    [:li description]]])

(defn product []
  (when-let [product @(re-frame/subscribe [:current-displayed-product])]
    [:div
     [product-details product]
     [product-ratings product]]))

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
     (for [product @(re-frame/subscribe [:products])]
       ^{:key (:id (val product))} [:li
                                    [product-link (val product)]]))]])

(defn main-panel []
  [:div
   {:style {:width "750px"
            :margin "0 auto"}}
   [:h2 "Product Page"]
   [product-list]
   [product]])
