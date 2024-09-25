import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "pokemonList",
      filename: "remoteEntry.js",
      exposes: {
        "./PokemonList": "./src/components/PokemonList",
        "./Pokemon": "./src/atoms/Pokemon.ts",
        "./LoginForm": "./src/components/LoginForm.tsx",
      },
      shared: ["react", "react-dom", "jotai"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});