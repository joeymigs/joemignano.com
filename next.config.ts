import type { NextConfig } from "next"
import type { RuleSetRule } from "webpack"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // SVGR config (converts *.svg imports to React components)
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule: RuleSetRule) => rule.test instanceof RegExp && rule.test.test('.svg')
    )

    if (!fileLoaderRule) throw new Error("File loader rule for .svg not found")

    config.module.rules.push(
      // Convert *.svg?url imports to URLs
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude *.svg?url
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              typescript: true,
              ext: 'tsx',
              dimensions: false, // Don't include width/height attributes (use CSS instead)
            },
          },
        ],
      },
    )
    // Exclude *.svg from the default file loader (now handled by SVGR)
    fileLoaderRule.exclude = /\.svg$/i

    return config
  }
}

export default nextConfig
