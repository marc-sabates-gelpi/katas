(ns scores.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [scores.core-test]))

(doo-tests 'scores.core-test)
