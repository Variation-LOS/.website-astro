import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import mkcert from 'vite-plugin-mkcert';
import remarkToc from 'remark-toc';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { remarkModifiedTime } from './src/remark-modified-time.mjs';

// https://astro.build/config
export default defineConfig({
    site: "https://astroship.web3templates.com",
    output: 'static',
    integrations: [mdx(), sitemap(), icon()],
    vite: {
        plugins: [tailwindcss(), mkcert()],
    },
    server: {
        host: '0.0.0.0',
        port: 4321,
        https: true
    },
    markdown: {
        shikiConfig: {
            // 从 Shiki 的内置主题中选择 (或者添加你自己的)
            // https://shiki.style/themes
            themes: {
                light: 'github-light',
                dark: 'github-dark',
            },
            // 启用自动换行以防止水平滚动
            wrap: true
        },
        remarkPlugins: [[remarkToc, { heading: 'contents', maxDepth: 3 }], remarkModifiedTime],
        rehypePlugins: [rehypeAccessibleEmojis, rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'append' }]],
    },
});
