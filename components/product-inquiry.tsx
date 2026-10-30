"use client"

import { Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { company } from "@/lib/company"

interface ProductInquiryProps {
  product: "BIOCON" | "EWA" | "BIOS" | "BEWABOX"
  brochureUrl: string
  onDark?: boolean
}

export default function ProductInquiry({ product, brochureUrl, onDark = false }: ProductInquiryProps) {
  const { t } = useLanguage()
  const subject = `${t("product.inquiry.subject")} ${product}`
  const body = t("product.inquiry.body").replace("{product}", product)
  const inquiryHref = `${company.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  return (
    <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      <Button
        asChild
        size="lg"
        className={onDark ? "bg-white text-green-900 hover:bg-green-50" : "bg-green-700 text-white hover:bg-green-800"}
      >
        <a href={inquiryHref}>
          <Mail aria-hidden="true" className="mr-2 h-5 w-5" />
          {t("product.inquiry.cta")} {product}
        </a>
      </Button>
      <Button
        asChild
        variant="outline"
        size="lg"
        className={onDark ? "border-white/60 bg-transparent text-white hover:bg-white/10 hover:text-white" : "border-green-700 bg-white text-green-800 hover:bg-green-50"}
      >
        <a href={brochureUrl} target="_blank" rel="noopener noreferrer">
          <Download aria-hidden="true" className="mr-2 h-5 w-5" />
          {t("product.download.brochure")}
        </a>
      </Button>
    </div>
  )
}
