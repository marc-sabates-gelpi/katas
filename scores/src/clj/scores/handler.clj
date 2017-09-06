(ns ratings.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.cors :refer [wrap-cors]]))

(defn update-ratings [product-id request]
  {:status 200
   :headers {"Content-Type" "application/edn; charset=utf-8"}
   :body "OK"})

(defn get-ratings [product-id]
  {:status 200
   :headers {"Content-Type" "application/edn; charset=utf-8"}
   :body (pr-str ["Dummy rating1" "Dummy rating 2"])})

(defroutes app-routes
  (GET "/" [] "Hello World")
  (context "/ratings/:product-id{[0-9]+}" [product-id]
           (POST "/update" request (update-ratings product-id request))
           (GET "/get" [] (get-ratings product-id)))
  (route/not-found "Not Found"))

(def app
  (wrap-cors app-routes
             :access-control-allow-origin [#"http://localhost:3449"]
             :access-control-allow-methods [:get :post]))
