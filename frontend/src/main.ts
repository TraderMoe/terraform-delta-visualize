/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

if (process.argv[2] != null) process.env.JSON_DATA = process.argv[2];

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
