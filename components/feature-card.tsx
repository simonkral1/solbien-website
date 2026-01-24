import type { ReactNode } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  imageSrc?: string
}

export default function FeatureCard({ icon, title, description, imageSrc }: FeatureCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] h-full">
      <CardContent className="p-6 flex flex-col items-center justify-center h-full">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-green-100 p-3 transition-all duration-300 group-hover:bg-green-200">
            {icon}
          </div>
        </div>
        {imageSrc && (
          <div className="mb-4 relative h-32 w-full overflow-hidden rounded-md">
            <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" unoptimized={true} />
          </div>
        )}
        <h3 className="mb-2 text-center text-xl font-semibold">{title}</h3>
        <p className="text-center text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
