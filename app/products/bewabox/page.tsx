"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ArrowLeft, Check, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FadeIn from "@/components/animations/fade-in"
import SlideUp from "@/components/animations/slide-up"
import StaggeredChildren from "@/components/animations/staggered-children"
import { useLanguage } from "@/contexts/language-context"
import { useEffect } from "react"

export default function BewaboxPage() {
  const { t } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white py-16 md:py-24">
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
                    <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">{t("bewabox.title")}</h1>
                  </SlideUp>
                  <SlideUp delay={0.1}>
                    <p className="mb-6 text-xl text-muted-foreground">{t("bewabox.subtitle")}</p>
                  </SlideUp>
                  <SlideUp delay={0.2}>
                    <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                      <a href="https://blobs.vusercontent.net/blob/BEWABOX-A4-Ou1sW6hAbZY1i1R4UpMQsSSoAJVxMh.pdf" target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-5 w-5" />
                        {t("product.download.brochure")}
                      </a>
                    </Button>
                  </SlideUp>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl bg-green-100">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-03%20at%2019.28.48-hdEcd7Ld65L45Oy8g8vN5HioTYEaQG.png"
                    alt="BEWABOX tunnel fermenter"
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

        {/* Key Benefits */}
        <section className="py-16 md:py-24 bg-green-50">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{t("product.advantages")}</h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">{t("bewabox.subtitle")}</p>
              </div>
            </FadeIn>

            <StaggeredChildren className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" itemDelay={0.1}>
              <div className="rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("bewabox.feature1.title")}</h3>
                <p className="text-muted-foreground">{t("bewabox.feature1.desc")}</p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("bewabox.feature2.title")}</h3>
                <p className="text-muted-foreground">{t("bewabox.feature2.desc")}</p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("bewabox.feature3.title")}</h3>
                <p className="text-muted-foreground">{t("bewabox.feature3.desc")}</p>
              </div>
            </StaggeredChildren>
          </div>
        </section>

        {/* Technology Description */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{t("bewabox.technology.title")}</h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-lg border bg-white p-8 shadow-md max-w-4xl mx-auto">
                <p className="text-lg text-muted-foreground mb-6">{t("bewabox.technology.desc1")}</p>
                <p className="text-lg text-muted-foreground">{t("bewabox.technology.desc2")}</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Typical Applications */}
        <section className="py-16 md:py-24 bg-green-50">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{t("bewabox.applications.title")}</h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-lg border bg-white p-8 shadow-md">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ChevronRight className="mr-3 h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                    <span>{t("bewabox.app1")}</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-3 h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                    <span>{t("bewabox.app2")}</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-3 h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                    <span>{t("bewabox.app3")}</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-3 h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                    <span>{t("bewabox.app4")}</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-3 h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                    <span>{t("bewabox.app5")}</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-3 h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                    <span>{t("bewabox.app6")}</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{t("product.technical")}</h2>
              </div>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-2">
              <FadeIn delay={0.1}>
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <ul className="space-y-4">
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("bewabox.specs.capacity")}</span>
                      <span>~4,400 t/year</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("bewabox.specs.process")}</span>
                      <span>{t("bewabox.specs.process_value")}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("bewabox.specs.best_fit")}</span>
                      <span>{t("bewabox.specs.best_fit_value")}</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <ul className="space-y-4">
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("bewabox.specs.construction")}</span>
                      <span>{t("bewabox.specs.construction_value")}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("bewabox.specs.aeration")}</span>
                      <span>{t("bewabox.specs.aeration_value")}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("bewabox.specs.scalability")}</span>
                      <span>{t("bewabox.specs.scalability_value")}</span>
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
