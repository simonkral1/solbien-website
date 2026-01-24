"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FadeIn from "@/components/animations/fade-in"
import SlideUp from "@/components/animations/slide-up"
import StaggeredChildren from "@/components/animations/staggered-children"
import { useLanguage } from "@/contexts/language-context"

export default function SolutionsPage() {
  const { t } = useLanguage()

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

            <FadeIn>
              <div className="text-center mb-12">
                <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">{t("solutions.title")}</h1>
                <p className="mx-auto max-w-3xl text-xl text-muted-foreground">{t("solutions.subtitle")}</p>
              </div>
            </FadeIn>

            <div className="grid gap-12 md:grid-cols-2 items-center">
              <FadeIn delay={0.2}>
                <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BIOKON%20web2.jpg-ahOqJnuuV4l7oHngZXSNrS1jP0CaHR.jpeg"
                    alt="Solbien fermenter in operation"
                    width={800}
                    height={600}
                    className="object-cover scale-110 w-full h-full"
                    unoptimized={true}
                  />
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div>
                  <h2 className="mb-4 text-2xl font-bold">{t("solutions.intro.title")}</h2>
                  <p className="mb-6">
                    Our aerobic fermenters are specifically designed for the ecological processing of biodegradable
                    waste, including sewage sludge from wastewater treatment plants and animal by-products. The
                    controlled fermentation process naturally generates heat within the system, eliminating the need for
                    external heat sources.
                  </p>
                  <p>
                    This internally generated heat effectively destroys pathogens, ensuring the resulting compost is
                    hygienically safe and non-infectious. After fermentation, the compost is free from unpleasant odors,
                    leachate, vectors, pathogens, dangerous viruses, bacteria, and parasite eggs or larvae that could
                    otherwise contaminate the soil and pose risks to human health.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Solutions Overview */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{t("solutions.overview.title")}</h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">{t("solutions.overview.subtitle")}</p>
              </div>
            </FadeIn>

            <div className="grid gap-12 lg:grid-cols-2">
              <FadeIn delay={0.1}>
                <div className="rounded-lg border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                  <h3 className="mb-4 text-2xl font-semibold">{t("solutions.municipal.title")}</h3>
                  <p className="mb-6">{t("solutions.municipal.desc")}</p>
                  <ul className="mb-6 space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Processing of green waste from parks and gardens</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Handling of food waste from residential areas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Integration with existing collection systems</span>
                    </li>
                  </ul>
                  <Link href="/products/biokon">
                    <Button className="w-full">
                      {t("biokon.cta")}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="rounded-lg border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                  <h3 className="mb-4 text-2xl font-semibold">{t("solutions.highcapacity.title")}</h3>
                  <p className="mb-6">{t("solutions.highcapacity.desc")}</p>
                  <ul className="mb-6 space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Quickly eliminates pathogens, ensuring safety for energy use</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Optimizes energy recovery from mixed municipal waste</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Reduces disposal and transportation expenses</span>
                    </li>
                  </ul>
                  <Link href="/products/bios">
                    <Button className="w-full">
                      {t("bios.cta")}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="rounded-lg border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                  <h3 className="mb-4 text-2xl font-semibold">{t("solutions.wastewater.title")}</h3>
                  <p className="mb-6">{t("solutions.wastewater.desc")}</p>
                  <ul className="mb-6 space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Processing of wastewater treatment plant sludge</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Reduction of odor and pathogen concerns</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Conversion to safe, usable end products</span>
                    </li>
                  </ul>
                  <Link href="/products/ewa">
                    <Button className="w-full">
                      {t("ewa.cta")}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="rounded-lg border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                  <h3 className="mb-4 text-2xl font-semibold">{t("solutions.agricultural.title")}</h3>
                  <p className="mb-6">{t("solutions.agricultural.desc")}</p>
                  <ul className="mb-6 space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Processing of animal manure and bedding</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Handling of crop residues and agricultural waste</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Production of high-quality soil improvers</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-green-50">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{t("solutions.process.title")}</h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">{t("solutions.process.subtitle")}</p>
              </div>
            </FadeIn>

            <StaggeredChildren className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" itemDelay={0.1}>
              <div className="rounded-lg border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 text-xl font-bold">
                  1
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("solutions.step1.title")}</h3>
                <p className="text-muted-foreground">{t("solutions.step1.desc")}</p>
              </div>

              <div className="rounded-lg border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 text-xl font-bold">
                  2
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("solutions.step2.title")}</h3>
                <p className="text-muted-foreground">{t("solutions.step2.desc")}</p>
              </div>

              <div className="rounded-lg border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 text-xl font-bold">
                  3
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("solutions.step3.title")}</h3>
                <p className="text-muted-foreground">{t("solutions.step3.desc")}</p>
              </div>

              <div className="rounded-lg border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 text-xl font-bold">
                  4
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("solutions.step4.title")}</h3>
                <p className="text-muted-foreground">{t("solutions.step4.desc")}</p>
              </div>
            </StaggeredChildren>
          </div>
        </section>

        {/* End Products Section */}
        <section className="py-16 md:py-24 bg-green-50">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                  {t("solutions.endproducts.title")}
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">{t("solutions.endproducts.subtitle")}</p>
              </div>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-2">
              <FadeIn delay={0.1}>
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold">{t("solutions.soil.title")}</h3>
                  <p className="mb-4">
                    The primary output of our fermentation process is a high-quality soil improver that can be used in
                    agriculture, landscaping, and gardening. This material is:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Free from pathogens and weed seeds</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Rich in organic matter and nutrients</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Beneficial for soil structure and water retention</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Compliant with regulatory standards</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold">{t("solutions.biomass.title")}</h3>
                  <p className="mb-4">
                    In some applications, the output can be further processed into biomass fuel for energy generation.
                    This creates a circular economy approach where waste becomes an energy source. This fuel is:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Renewable and carbon-neutral</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Suitable for various heating and power generation applications</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Reduces dependence on fossil fuels</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Creates additional revenue streams</span>
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
                <SlideUp delay={0.4}>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/contacts">
                      <Button
                        size="lg"
                        className="bg-white text-green-900 hover:bg-white/90 transition-all duration-300 hover:translate-y-[-2px]"
                      >
                        {t("button.contactus")}
                      </Button>
                    </Link>
                    <Link href="/products">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-green-900 bg-white hover:bg-white/90 transition-all duration-300 hover:translate-y-[-2px]"
                      >
                        {t("button.exploreproducts")}
                      </Button>
                    </Link>
                  </div>
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
