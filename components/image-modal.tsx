"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface ImageModalProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export default function ImageModal({ src, alt, className, width = 800, height = 600 }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={`cursor-pointer relative overflow-hidden ${className || ""}`} onClick={() => setIsOpen(true)}>
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className="transition-transform duration-500 hover:scale-105"
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <span className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 font-medium">
            Click to enlarge
          </span>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 md:p-8"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-8 w-8" />
              <span className="sr-only">Close</span>
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <Image
                src={src || "/placeholder.svg"}
                alt={alt}
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
