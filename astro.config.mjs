import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "Media Pipeline SDK",
      description:
        "Documentation for a TypeScript SDK that processes video into HLS output and uploads playlists to Cloudinary.",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/kishanghosh090/Media-Pipeline-sdk",
        },
      ],
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Start Here",
          items: [
            { label: "Installation", slug: "getting-started/installation" },
            { label: "Quick Start", slug: "getting-started/quick-start" },
          ],
        },
        {
          label: "Guides",
          items: [
            { label: "Local Processing", slug: "guides/local-processing" },
            { label: "Cloudinary Uploads", slug: "guides/cloudinary-upload" },
            { label: "S3 Uploads", slug: "guides/s3-upload" },
            {
              label: "Troubleshooting",
              slug: "guides/troubleshooting",
            },
          ],
        },
        {
          label: "Reference",
          items: [
            { label: "API", slug: "reference/api" },
            { label: "Configuration", slug: "reference/configuration" },
            { label: "Presets", slug: "reference/presets" },
          ],
        },
      ],
    }),
  ],
});
