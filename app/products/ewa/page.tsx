"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FadeIn from "@/components/animations/fade-in"
import SlideUp from "@/components/animations/slide-up"
import StaggeredChildren from "@/components/animations/staggered-children"
import { useLanguage } from "@/contexts/language-context"
import { useEffect } from "react"

export default function EwaPage() {
  const { t } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-green-50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-6">
              <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("back.home")}
              </Link>
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-2">
              <FadeIn>
                <div>
                  <SlideUp>
                    <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">{t("ewa.title")}</h1>
                  </SlideUp>
                  <SlideUp delay={0.1}>
                    <p className="mb-6 text-xl text-muted-foreground">{t("ewa.subtitle")}</p>
                  </SlideUp>
                  <SlideUp delay={0.2}>
                    <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                      <a href="https://blobs.vusercontent.net/blob/EWA-A4b-opt-zQY0iw7fcYDb0uS9Ng4DKtsZoUhPtB.pdf" target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-5 w-5" />
                        {t("product.download.brochure")}
                      </a>
                    </Button>
                  </SlideUp>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EWA-m0wyYLNMsrnsfNkGAJbV2BNNGvBnZR.png"
                    alt="EWA - Ecological Waste Apparatus"
                    width={800}
                    height={600}
                    className="object-cover scale-110 w-full h-full"
                    unoptimized={true}
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{t("product.advantages")}</h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">{t("ewa.subtitle")}</p>
              </div>
            </FadeIn>

            <StaggeredChildren className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" itemDelay={0.1}>
              <div className="rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("ewa.feature1")}</h3>
                <p className="text-muted-foreground">{t("ewa.feature1")}</p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("ewa.feature2")}</h3>
                <p className="text-muted-foreground">{t("ewa.feature2")}</p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("ewa.feature3")}</h3>
                <p className="text-muted-foreground">{t("ewa.feature3")}</p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("ewa.feature4")}</h3>
                <p className="text-muted-foreground">{t("ewa.feature4")}</p>
              </div>
            </StaggeredChildren>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 md:py-24 bg-green-50">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{t("product.technical")}</h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">{t("ewa.subtitle")}</p>
              </div>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-2">
              <FadeIn delay={0.1}>
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <ul className="space-y-4">
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("ewa.specs.functional_volume")}</span>
                      <span>36 m³</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("ewa.specs.processing_capacity")}</span>
                      <span>1500 t/year</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("ewa.specs.container_type")}</span>
                      <span>{t("ewa.specs.container_type_value")}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("ewa.specs.length")}</span>
                      <span>12192 mm</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("ewa.specs.width")}</span>
                      <span>2438 mm</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("ewa.specs.height")}</span>
                      <span>2896 mm</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <ul className="space-y-4">
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("ewa.specs.power_supply")}</span>
                      <span>230 / 400 V</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("ewa.specs.power_consumption_standby")}</span>
                      <span>50 W</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("ewa.specs.power_consumption_operation")}</span>
                      <span>100-150 W</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("ewa.specs.sanitization_temperature")}</span>
                      <span>{t("ewa.specs.sanitization_temperature_value")}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("ewa.specs.process_duration")}</span>
                      <span>48-72 {t("ewa.specs.hours")}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("ewa.specs.certifications")}</span>
                      <span>{t("ewa.specs.certifications_value")}</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-green-900 py-16 md:py-24 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <SlideUp>
                  <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{t("solutions.cta.title")}</h2>
                </SlideUp>
                <SlideUp delay={0.2}>
                  <p className="mb-8 text-white/80">{t("solutions.cta.subtitle")}</p>
                </SlideUp>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
