(ns figwheel.connect.build-dev (:require [scores.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/scores.core.mount-root (apply js/scores.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'scores.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

