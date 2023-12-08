/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from "./vuetify";
import pinia from "../store";
import router from "../router";

// Vue Diff
import vueDiff from "vue-diff";
import "vue-diff/dist/index.css";
import json from "highlight.js/lib/languages/json";
vueDiff.hljs.registerLanguage("json", json);

// Types
import type { App } from "vue";

export function registerPlugins(app: App) {
  app.use(vuetify).use(router).use(pinia).use(vueDiff);
}
