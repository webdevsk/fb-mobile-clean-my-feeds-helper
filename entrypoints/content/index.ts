import "./styles.css"

export default defineContentScript({
  matches: ["*://*.facebook.com/*"],
  runAt: "document_end",
  cssInjectionMode: "manifest",
  main() {
    console.log("Injected")
    /*
     * Listen for the Android back gesture event and trigger the close button when viewing a post
     */
    // This is captured through the 'popstate' event in the browser
    window.addEventListener("popstate", function (event) {
      // Find the element with aria-label="Close"
      const closeButton = document.querySelector('[aria-label="Close"]')

      // Check if the close button exists
      if (closeButton) {
        // Prevent the default behavior
        event.preventDefault()
        console.log("Close button found, clicking it")

        // Create and dispatch a click event
        const clickEvent = new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window,
        })

        // Trigger the click event on the close button
        closeButton.dispatchEvent(clickEvent)
      } else {
        console.log('No element with aria-label="Close" found')
      }
    })

    // Optional: Add this code to prevent the browser from navigating back
    // when the Android back gesture is detected
    history.pushState(null, "", window.location.href)
  },
})
