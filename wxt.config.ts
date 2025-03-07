import { defineConfig } from "wxt"

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: "chrome",
  modules: ["@wxt-dev/module-react"],
  // hooks: {
  //   "build:manifestGenerated": (wxt, manifest) => {
  //     manifest.content_scripts ??= []
  //     manifest.content_scripts.push({
  //       css: ["content-scripts/facebook.css"],
  //       matches: ["*://*.facebook.com/*"],
  //     })
  //     // manifest.host_permissions?.push('*://*.facebook.com/*')
  //   },
  // },
  manifest: (cxt) => ({
    name: "FB Mobile Clean My Feeds Helper",
    permissions: ["declarativeNetRequestWithHostAccess"],
    host_permissions: ["*://*.facebook.com/*"],
    declarative_net_request: {
      rule_resources: [
        {
          id: "navigate_to_desktop_version",
          enabled: true,
          path: "redirect-rules.json",
        },
      ],
    },
  }),
})
