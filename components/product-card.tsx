"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface ProductCardProps {
  title: string
  description: string
  imageSrc: string
  isPrimary?: boolean
  href?: string
}

export default function ProductCard({ title, description, imageSrc, isPrimary = false, href = "#" }: ProductCardProps) {
  const { t } = useLanguage()

  return (
    <Card
      className={`overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] ${isPrimary ? "border-green-500 shadow-md" : ""}`}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover scale-110"
          unoptimized={true}
        />
        {isPrimary && (
          <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-sm font-medium">
            Main Product
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <Link href={href}>
          <Button variant="outline" className="w-full group">
            {t("button.learnmore")}
            <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
