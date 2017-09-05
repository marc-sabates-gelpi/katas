(ns scores.db)

(def default-db
  {:products {1 {:id 1 :name "Drill" :description "It's a bloody drill"}
              2 {:id 2 :name "Saw" :description "Diamond saw to cut the toughest material"}
              3 {:id 3 :name "Hammer" :description "All-in-one hammer to finish your woodwork"}
              4 {:id 4 :name "Nails" :description "Nano-engineered nails that last forever"}
              5 {:id 5 :name "Screws" :description "Lightweight and restistant adamantium screws"}}
   :current-displayed-product nil
   :add-rating-form false})
