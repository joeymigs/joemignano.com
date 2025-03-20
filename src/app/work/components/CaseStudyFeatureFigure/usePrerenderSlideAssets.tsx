import type { StaticImageData } from 'next/image'
import type { CaseStudyFeatureSlide } from "@/types"

import { getPrevIndex, getNextIndex } from "@/util/getIndex"

import usePrerenderAssets from "@/hooks/usePrerenderAssets"

import Video from "@/components/Video"
import Image from "next/image"

type PrerenderAsset = string | StaticImageData

const renderAsset = (asset: PrerenderAsset, key: string) =>
  typeof asset === 'string'
    ? <Video key={key} src={asset} />
    : <Image key={key} src={asset} alt="" loading="eager" />

const getAssetKey = (asset: PrerenderAsset) =>
  typeof asset === 'string' ? asset : asset.src

const getPreloadAssets = (slide: CaseStudyFeatureSlide) =>
  [slide.preloadBgImage, slide.preloadMainAsset].filter((asset) => asset !== undefined)

export default function usePrerenderSlideAssets(
  slides: CaseStudyFeatureSlide[],
  currentIndex: number
) {
  const prevSlide = slides[getPrevIndex(currentIndex, slides)]
  const nextSlide = slides[getNextIndex(currentIndex, slides)]

  const prerenderAssets = [
    ...getPreloadAssets(prevSlide),
    ...getPreloadAssets(nextSlide)
  ]

  return usePrerenderAssets(prerenderAssets, renderAsset, getAssetKey)
}