import { useRef, useState, useEffect, type JSX } from 'react'

/**
 * Prerenders assets that are not visible on the page.
 * 
 * @param assets The assets to prerender, as an array of objects.
 * @param getAsset A function that returns the JSX element for the asset.
 * @param getKey A function that returns a unique key for the asset.
 * 
 * @returns The prerendered assets.
 */
export default function usePrerenderAssets<T>(
  assets: T[],
  getAsset: (asset: T, key: string) => JSX.Element | null | undefined,
  getKey: (asset: T) => string
): JSX.Element[] {
  const renderedAssetsCache = useRef(new Set<string>())
  const [prerenderedAssets, setPrerenderedAssets] = useState<JSX.Element[]>([])

  useEffect(() => {
    const newAssets: JSX.Element[] = []

    assets.forEach((asset) => {
      const key = getKey(asset)

      // If the asset is already rendered or the key is invalid, skip it
      if (!key || !asset || renderedAssetsCache.current.has(key)) return

      renderedAssetsCache.current.add(key)
      const assetElement = getAsset(asset, key)

      if (assetElement)
        newAssets.push(assetElement)
    })

    if (newAssets.length > 0)
      setPrerenderedAssets((prev) => [...prev, ...newAssets])
  }, [assets, getAsset, getKey])

  return prerenderedAssets
}
