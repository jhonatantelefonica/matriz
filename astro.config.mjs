// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Matriz de Conocimiento",
      components: {
        Footer: "./src/components/CustomFooter.astro",
      },
      customCss: ["./src/tailwind.css", "./src/styles/colors.css"],
      logo: {
        src: "./src/assets/logo.webp",
        replacesTitle: false,
        alt: "Kaizen",
      },
      social: {
        // github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: "Inicio",
          items: [{ label: "Listado", slug: "inicio" }],
        },
        {
          label: "Biometría",
          autogenerate: { directory: "biometria" },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
