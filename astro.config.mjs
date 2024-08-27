import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

const SERVER_PORT = 4000

const LIVE_URL = 'https://edisonYrossis.github.io'

// https://astro.build/config
export default defineConfig({
  server: {port: SERVER_PORT},
  site: LIVE_URL,
  integrations: [tailwind()]
});