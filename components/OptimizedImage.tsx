"use client"

import Image from "next/image"
import imageLoader from "../lib/imageLoader"

export default function OptimizedImage(props) {
  return <Image {...props} loader={imageLoader} unoptimized={true} />
}
