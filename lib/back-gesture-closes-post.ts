/** Listen for the Android back gesture event and trigger the close button when viewing a post */
export const backGestureClosesPost = () => {
  // This is captured through the 'popstate' event in the browser

  window.addEventListener("popstate", (event) => {
    event.preventDefault()

    // Find the element with aria-label="Close"
    const closeButton = document.querySelector('[aria-label="Close"]')

    // Check if the close button exists
    if (closeButton) {
      // Prevent the default behavior
      // event.preventDefault()
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

  /**
   * beforeunload event handler to confirm page exit
   * This will trigger for:
   * - Closing the browser/tab
   * - Clicking on external links
   * - Manual URL changes
   * - refresh/reload
   */

  window.addEventListener("beforeunload", (event) => {
    // Check if you want to show the confirmation dialog
    // You can add conditions here based on your app state

    // The standard way to show a confirmation dialog on page exit
    event.preventDefault()

    // Note: You can't know whether the user chose to stay or leave
    // The browser handles that decision internally
  })

  // // Optional: Add this code to prevent the browser from navigating back
  // // when the Android back gesture is detected
  history.pushState(null, "", window.location.href)
}
