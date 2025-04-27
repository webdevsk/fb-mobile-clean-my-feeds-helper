/** Makes the page Installable PWA compatible */
export const fullScreenPWA = async () => {
  const manifestNode = document.querySelector<HTMLLinkElement>('link[rel="manifest"]')
  if (!manifestNode) return console.error("Manifest node not found")
  const manifestRaw = await fetch(manifestNode.href)
  const manifest = await manifestRaw.json()
  console.log(manifest)

  Object.assign(manifest, {
    display: "standalone",
    background_color: "#000000",
    // theme_color: "#242526",
    theme_color: "#252728",
  })

  const blob = new Blob([JSON.stringify(manifest)], { type: "application/json" })
  const manifestURL = URL.createObjectURL(blob)
  manifestNode.remove()
  document.head.insertAdjacentHTML(
    "beforeend",
    `<link id="injectedManifest" rel="manifest" href="${manifestURL}></link`
  )

  // Open external links in a browser
  document.addEventListener("click", (event) => {
    const { target } = event
    if (
      target == null ||
      !(target instanceof HTMLAnchorElement) ||
      !target.matches('a[href^="https://l.facebook.com/"]')
    )
      return
    event.preventDefault()
    window.open(target.href.replace(/http(s?):/, "browser:"), "_blank")
  })
}
