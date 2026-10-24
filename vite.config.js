import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuração do Vite: só precisamos ativar o plugin do React.
export default defineConfig({
  plugins: [react()],
});
