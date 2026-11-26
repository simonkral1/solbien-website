"use client"

import Link from "next/link"
import { ArrowLeft, Check, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FadeIn from "@/components/animations/fade-in"
import SlideUp from "@/components/animations/slide-up"
import StaggeredChildren from "@/components/animations/staggered-children"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { useEffect } from "react"

export default function BiosPage() {
  const { t } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="top" className="bg-green-50 py-16 md:py-24">
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
                    <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">{t("bios.title")}</h1>
                  </SlideUp>
                  <SlideUp delay={0.1}>
                    <p className="mb-4 text-xl text-muted-foreground">{t("bios.subtitle")}</p>
                    <p className="mb-6 text-sm font-semibold text-blue-700">{t("bios.stage_notice")}</p>
                  </SlideUp>
                  <SlideUp delay={0.2}>
                    <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                      <a href="/downloads/SOLBIEN_BIOS_R3_Web_2026-11-27.pdf" target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-5 w-5" />
                        {t("product.download.brochure")}
                      </a>
                    </Button>
                  </SlideUp>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-xl bg-white shadow-xl">
                  <Image
                    src="/images/products/BIOS_R2_concept_2026-11-26.webp"
                    alt="BIOS 80 – proposed vertical reactor, concept visualization"
                    width={1269}
                    height={1495}
                    className="h-full w-full object-contain p-2 md:p-3"
                    unoptimized={true}
                  />
                </div>
                <p className="mt-3 text-center text-sm text-muted-foreground">{t("bios.hero_caption")}</p>
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
                <p className="mx-auto max-w-2xl text-muted-foreground">{t("bios.subtitle")}</p>
              </div>
            </FadeIn>

            <StaggeredChildren className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" itemDelay={0.1}>
              <div className="rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("bios.feature1")}</h3>
                <p className="text-muted-foreground">{t("bios.feature1.desc")}</p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("bios.feature2")}</h3>
                <p className="text-muted-foreground">{t("bios.feature2.desc")}</p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("bios.feature3")}</h3>
                <p className="text-muted-foreground">{t("bios.feature3.desc")}</p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("bios.feature4")}</h3>
                <p className="text-muted-foreground">{t("bios.feature4.desc")}</p>
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
                <p className="mx-auto max-w-2xl text-muted-foreground">{t("bios.subtitle")}</p>
              </div>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-3">
              <FadeIn delay={0.1}>
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold text-center">BIOS 50</h3>
                  <ul className="space-y-4">
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("bios.specs.working_volume")}</span>
                      <span>50 m³</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("bios.specs.height")}</span>
                      <span>7 m</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium max-w-[60%]">{t("bios.specs.footprint")}</span>
                      <span className="shrink-0">5 × 5 m</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium max-w-[52%]">{t("bios.specs.throughput")}</span>
                      <span className="shrink-0 text-right text-sm">{t("bios.specs.bios50")}</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold text-center">BIOS 80</h3>
                  <ul className="space-y-4">
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("bios.specs.working_volume")}</span>
                      <span>80 m³</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("bios.specs.height")}</span>
                      <span>9.5 m</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium max-w-[60%]">{t("bios.specs.footprint")}</span>
                      <span className="shrink-0">5 × 5 m</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium max-w-[52%]">{t("bios.specs.throughput")}</span>
                      <span className="shrink-0 text-right text-sm">{t("bios.specs.bios80")}</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold text-center">BIOS 100</h3>
                  <ul className="space-y-4">
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("bios.specs.working_volume")}</span>
                      <span>100 m³</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("bios.specs.height")}</span>
                      <span>11 m</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium max-w-[60%]">{t("bios.specs.footprint")}</span>
                      <span className="shrink-0">5 × 5 m</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium max-w-[52%]">{t("bios.specs.throughput")}</span>
                      <span className="shrink-0 text-right text-sm">{t("bios.specs.bios100")}</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
            <div className="mx-auto mt-8 max-w-4xl space-y-2 rounded-lg border border-blue-100 bg-white p-5 text-sm text-muted-foreground">
              <p className="font-semibold text-blue-700">{t("bios.stage_notice")}</p>
              <p>{t("bios.specs.note")}</p>
              <p>{t("bios.process_note")}</p>
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
                <SlideUp delay={0.3}>
                  <Button asChild size="lg" className="bg-white text-green-900 hover:bg-green-50">
                    <a href="/downloads/SOLBIEN_BIOS_R3_Web_2026-11-27.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-5 w-5" />
                      {t("product.download.brochure")}
                    </a>
                  </Button>
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
