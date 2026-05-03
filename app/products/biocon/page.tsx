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

export default function BioconPage() {
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
                    <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">{t("biokon.title")}</h1>
                  </SlideUp>
                  <SlideUp delay={0.1}>
                    <p className="mb-6 text-xl text-muted-foreground">{t("biokon.subtitle")}</p>
                  </SlideUp>
                  <SlideUp delay={0.2}>
                    <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                      <a href="https://blobs.vusercontent.net/blob/BIOCON-A4-L2L1FZSCz8wQI55Ha8vX65XIadPitU.pdf" target="_blank" rel="noopener noreferrer">
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
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-03%20at%2019.33.18-jet3U6YJC8csj5YXVqhC1zZjReHbRg.png"
                    alt="BIOCON container fermenter"
                    style={{ objectPosition: "left center" }}
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
        <section className="py-16 md:py-24 bg-green-50">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{t("product.advantages")}</h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">{t("biokon.subtitle")}</p>
              </div>
            </FadeIn>

            <StaggeredChildren className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" itemDelay={0.1}>
              <div className="rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("biokon.feature1")}</h3>
                <p className="text-muted-foreground">{t("biokon.feature1")}</p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("biokon.feature2")}</h3>
                <p className="text-muted-foreground">{t("biokon.feature2")}</p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("biokon.feature3")}</h3>
                <p className="text-muted-foreground">{t("biokon.feature3")}</p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("biokon.feature4")}</h3>
                <p className="text-muted-foreground">{t("biokon.feature4")}</p>
              </div>
            </StaggeredChildren>
          </div>
        </section>

        {/* Optional Features */}
        <section className="py-16 md:py-24 bg-green-50">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{t("product.optional")}</h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">{t("biokon.subtitle")}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-lg border bg-white p-8 shadow-md">
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <ChevronRight className="mr-3 h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-lg text-green-800">
                        {t("biokon.optional.title.photovoltaic")}
                      </span>
                      <p className="mt-1">{t("biokon.optional.photovoltaic")}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-3 h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-lg text-green-800">
                        {t("biokon.optional.title.preheating")}
                      </span>
                      <p className="mt-1">{t("biokon.optional.preheating")}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-3 h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-lg text-green-800">
                        {t("biokon.optional.title.biofilter")}
                      </span>
                      <p className="mt-1">{t("biokon.optional.biofilter")}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-3 h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-lg text-green-800">
                        {t("biokon.optional.title.customizable")}
                      </span>
                      <p className="mt-1">{t("biokon.optional.customizable")}</p>
                    </div>
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
                <p className="mx-auto max-w-2xl text-muted-foreground">{t("biokon.subtitle")}</p>
              </div>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-2">
              <FadeIn delay={0.1}>
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <ul className="space-y-4">
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("biokon.specs.capacity")}</span>
                      <span>30 m³</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("biokon.specs.weight")}</span>
                      <span>3.5 t</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("biokon.specs.max_batch_weight")}</span>
                      <span>17 t</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("biokon.specs.length")}</span>
                      <span>6500 mm</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("biokon.specs.width")}</span>
                      <span>2480 mm</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("biokon.specs.height")}</span>
                      <span>2650 mm</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <ul className="space-y-4">
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("biokon.specs.power_supply")}</span>
                      <span>230 / 400 V</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("biokon.specs.power_consumption_standby")}</span>
                      <span>30 W</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("biokon.specs.power_consumption_aeration")}</span>
                      <span>80 W</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("biokon.specs.power_consumption_preheating")}</span>
                      <span>2 to 6 kW</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("biokon.specs.frame_hook_lift")}</span>
                      <span>{t("biokon.specs.frame_hook_lift_value")}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">{t("biokon.specs.processing_capacity")}</span>
                      <span>1000 t/year</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-green-50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <SlideUp>
                  <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{t("solutions.cta.title")}</h2>
                </SlideUp>
                <SlideUp delay={0.2}>
                  <p className="mb-8 text-muted-foreground">{t("solutions.cta.subtitle")}</p>
                </SlideUp>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* EU Funding Acknowledgment */}
        <section className="py-12 bg-white border-t">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center">
                <Image
                  src="/images/eu-funding-banner.png"
                  alt="Financováno Evropskou unií - Projekt inovace kontejnerového fermentoru BIOKON"
                  width={800}
                  height={200}
                  className="max-w-full h-auto"
                />
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
