import { backGestureClosesPost } from "@/lib/back-gesture-closes-post"
import "./styles.css"
import { injectConsole } from "@/utils/inject-console"
import { fullScreenPWA } from "@/lib/full-screen-pwa"

export default defineContentScript({
  matches: ["*://*.facebook.com/*"],
  runAt: "document_end",
  cssInjectionMode: "manifest",
  main() {
    injectConsole("[FB Mobile - Clean my feeds]\n")
    console.log("Injected")
    backGestureClosesPost()
    fullScreenPWA()
  },
})
