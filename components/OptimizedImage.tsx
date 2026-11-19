"use client"

import Image, { type ImageProps } from "next/image"
import imageLoader from "../lib/imageLoader"

export default function OptimizedImage(props: ImageProps) {
  return <Image {...props} loader={imageLoader} unoptimized={true} />
}
