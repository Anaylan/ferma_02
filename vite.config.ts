import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import viteImagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		viteImagemin({
			gifsicle: {
				optimizationLevel: 7,
				interlaced: false,
			},

			webp: {
				preset: "photo",
			},
			svgo: {
				plugins: [
					// set of built-in plugins enabled by default
					"preset-default",

					// enable built-in plugins by name
					"prefixIds",
					{
						name: "removeViewBox",
					},
					{
						name: "removeEmptyAttrs",
						active: false,
					},
					// or by expanded notation which allows to configure plugin
					{
						name: "sortAttrs",
						params: {
							xmlnsOrder: "alphabetical",
						},
					},
				],
			},
		}),
	],
	server: {
		host: "0.0.0.0",
		port: 3096,
	},
});
