import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://media-pipeline-sdk-docs.vercel.app",
  integrations: [
    starlight({
      title: "Media Pipeline SDK",
      description:
        "Documentation for a TypeScript SDK that processes video into HLS output and uploads playlists to Cloudinary or S3.",
      logo: {
        src: "./src/assets/logo.svg",
        alt: "Media Pipeline SDK logo",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/kishanghosh090/Media-Pipeline-sdk",
        },
      ],
      customCss: ["./src/styles/custom.css"],
      components: {
        Header: "./src/components/internal/Header.astro",
        PageFrame: "./src/components/internal/PageFrame.astro",
        Hero: "./src/components/internal/Hero.astro",
        PageTitle: "./src/components/internal/PageTitle.astro",
        Footer: "./src/components/internal/Footer.astro",
      },
      pagefind: true,
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Overview", link: "/" },
            { label: "Installation", slug: "getting-started/installation" },
            { label: "Quick Start", slug: "getting-started/quick-start" },
          ],
        },
        {
          label: "Core",
          items: [
            { label: "Local Processing", slug: "guides/local-processing" },
            { label: "Configuration", slug: "reference/configuration" },
            { label: "Presets", slug: "reference/presets" },
          ],
        },
        {
          label: "Delivery",
          items: [
            { label: "Cloudinary Uploads", slug: "guides/cloudinary-upload" },
            { label: "S3 Uploads", slug: "guides/s3-upload" },
            { label: "Troubleshooting", slug: "guides/troubleshooting" },
          ],
        },
        {
          label: "Reference",
          items: [{ label: "API Reference", slug: "reference/api" }],
        },
      ],
    }),
  ],
});