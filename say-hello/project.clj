(defproject say-hello "0.1.0-SNAPSHOT"
  :description "Kata 01: Saying Hello"
  :license {:name "GNU General Public License (GPL) version 3"
            :url "https://www.gnu.org/licenses/gpl.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]]
  :main ^:skip-aot say-hello.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
