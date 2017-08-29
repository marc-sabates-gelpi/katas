(ns say-hello.core
  (:gen-class))

(def ^:const HELLO_MESSAGE "Hello, %s, nice to meet you!")
(def ^:const PROMPT_MESSAGE "What is your name? ")

(defn -main
  "Return personalised hello world message"
  [& args]
  (print PROMPT_MESSAGE)
  (flush)
  (when-let [name (read-line)]
    (print (clojure.string/replace HELLO_MESSAGE #"%s" name))))
