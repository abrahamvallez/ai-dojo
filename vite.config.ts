import { defineConfig } from 'vite';
import { apiPlugin } from './server/api-plugin.ts';

export default defineConfig({
  plugins: [apiPlugin()],
});
