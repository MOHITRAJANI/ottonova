import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        vue(), // write this
    ],
    test: {
        globals: true,
        environment: "jsdom",
    },
});