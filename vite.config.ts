import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"tailwind.config.js": path.resolve(__dirname, "tailwind.config.js"),
		},
	},
	optimizeDeps: {
		include: ["tailwind.config.js"],
	},
	build: {
		commonjsOptions: {
			include: ["tailwind.config.js", "node_modules/**"],
		},
	},
});
