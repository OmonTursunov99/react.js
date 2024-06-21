import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default ({mode}) => {
  const env = loadEnv(mode, process.cwd(), "");

  return defineConfig({
    server: {
      port: env.VITE_PORT,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    define: {
      "process.env": env,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/assets/style/variables.scss";`
        }
      }
    },
    preview: {
      port: 8080,
    },
    plugins: [react()],
  })
}
