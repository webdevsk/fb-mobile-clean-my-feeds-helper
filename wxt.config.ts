import { defineConfig } from "wxt"

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: "chrome",
  modules: ['@wxt-dev/auto-icons'],
  manifest: (cxt) => ({
    name: "FB Mobile Clean My Feeds Helper",
    permissions: ["declarativeNetRequestWithHostAccess"],
    optional_permissions: ["userScripts"],
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
