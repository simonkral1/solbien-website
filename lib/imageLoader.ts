import type { ImageLoaderProps } from "next/image"

export default function myImageLoader({ src }: ImageLoaderProps) {
  return src
}
