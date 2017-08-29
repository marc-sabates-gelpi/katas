(ns say-hello.core-test
  (:require [clojure.test :refer :all]
            [say-hello.core :refer :all]))

(testing "Testing various inputs"
  (deftest hello-Marc
    (testing (str "- Given the Saying Hello program\n"
                  "- When the user inputs 'Marc\\n'\n"
                  "- Then expected output is 'What is your name? Hello, Marc, nice to meet you!'")
      (binding [*in* (java.io.BufferedReader.
                      (java.io.StringReader. "Marc\n"))
                *out* (java.io.StringWriter.)]
        (-main)
        (is
         (=
          (.toString *out*)
          "What is your name? Hello, Marc, nice to meet you!")))))

  (deftest hello-2-words
    (testing (str "- Given the Saying Hello program\n"
                  "- When the user inputs 'Mr. Smith\\n'\n"
                  "- Then the expected output is 'What is your name? Hello, Mr. Smith, nice to meet you!'")
      (binding [*in* (java.io.BufferedReader.
                      (java.io.StringReader. "Mr. Smith\n"))
                *out* (java.io.StringWriter.)]
        (-main)
        (is
         (=
          (.toString *out*)
          "What is your name? Hello, Mr. Smith, nice to meet you!")))))

  (deftest hello-no-input
    (testing (str "- Given the Saying Hello program\n"
                  "- When the user inputs ''\n"
                  "- Then the expected output is 'What is your name? '")
      (binding [*in* (java.io.BufferedReader.
                      (java.io.StringReader. ""))
                *out* (java.io.StringWriter.)]
        (-main)
        (is
         (=
          (.toString *out*)
          "What is your name? "))))))
