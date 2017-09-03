(ns scores.db)

(def default-db
  {:product-list '({:id 1 :name "Drill" :description "It's a bloody drill"}
                   {:id 2 :name "Saw" :description "Diamond saw to cut the toughest material"}
                   {:id 3 :name "Hammer" :description "All-in-one hammer to finish your woodwork"}
                   {:id 4 :name "Nails" :description "Nails that last forever"}
                   {:id 5 :name "Screws" :description "Adamantum lighweiht and restistant screws"})
   :current-displayed-product nil})
