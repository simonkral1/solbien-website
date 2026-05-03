"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FadeIn from "@/components/animations/fade-in"
import SlideUp from "@/components/animations/slide-up"
import StaggeredChildren from "@/components/animations/staggered-children"
import { useLanguage } from "@/contexts/language-context"

export default function ProductsPage() {
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
                <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">{t("products.page.title")}</h1>
                <p className="mx-auto max-w-3xl text-xl text-muted-foreground">{t("products.page.subtitle")}</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <StaggeredChildren className="grid gap-12" itemDelay={0.2}>
              {/* BIOCON */}
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-03%20at%2019.33.18-jet3U6YJC8csj5YXVqhC1zZjReHbRg.png"
                    alt="BIOCON container fermenter"
                    style={{ objectPosition: "left center" }}
                    fill
                    className="object-cover scale-110"
                    unoptimized={true}
                  />
                </div>
                <div>
                  <h2 className="mb-4 text-3xl font-bold">{t("biokon.title")}</h2>
                  <p className="mb-6 text-muted-foreground">{t("biokon.subtitle")}</p>
                  <p className="mb-6">{t("biokon.description")}</p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-green-600" />
                      <span>{t("biokon.feature1")}</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-green-600" />
                      <span>{t("biokon.feature2")}</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-green-600" />
                      <span>{t("biokon.feature3")}</span>
                    </li>
                  </ul>
                  <Link href="/products/biocon" scroll={true}>
                    <Button className="transition-all duration-300 hover:translate-y-[-2px]">
                      {t("biokon.cta")}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* EWA */}
              <div className="grid items-center gap-8 md:grid-cols-2 bg-green-50 py-8 px-4 md:px-8 rounded-xl">
                <div className="order-1 md:order-2">
                  <h2 className="mb-4 text-3xl font-bold">{t("ewa.title")}</h2>
                  <p className="mb-6 text-muted-foreground">{t("ewa.subtitle")}</p>
                  <p className="mb-6">{t("ewa.description")}</p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-green-600" />
                      <span>{t("ewa.feature1")}</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-green-600" />
                      <span>{t("ewa.feature2")}</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-green-600" />
                      <span>{t("ewa.feature3")}</span>
                    </li>
                  </ul>
                  <Link href="/products/ewa" scroll={true}>
                    <Button className="transition-all duration-300 hover:translate-y-[-2px]">
                      {t("ewa.cta")}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl order-2 md:order-1">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EWA-m0wyYLNMsrnsfNkGAJbV2BNNGvBnZR.png"
                    alt="EWA - Ecological Waste Apparatus"
                    fill
                    className="object-cover scale-110"
                    unoptimized={true}
                  />
                </div>
              </div>

              {/* BIOS */}
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20March%2019%2C%202025%20-%2010_47AM.png-Vtx9j5mPgofXYWcDx52mlUj7kW6MCp.jpeg"
                    alt="BIOS fermenter unit installed on concrete foundation with agricultural field in background"
                    fill
                    className="object-cover scale-110"
                    unoptimized={true}
                  />
                </div>
                <div>
                  <h2 className="mb-4 text-3xl font-bold">{t("bios.title")}</h2>
                  <p className="mb-6 text-muted-foreground">{t("bios.subtitle")}</p>
                  <p className="mb-6">{t("bios.description")}</p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-green-600" />
                      <span>{t("bios.feature1")}</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-green-600" />
                      <span>{t("bios.feature2")}</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-green-600" />
                      <span>{t("bios.feature3")}</span>
                    </li>
                  </ul>
                  <Link href="/products/bios" scroll={true}>
                    <Button className="transition-all duration-300 hover:translate-y-[-2px]">
                      {t("bios.cta")}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* BEWABOX */}
              <div className="grid items-center gap-8 md:grid-cols-2 bg-green-50 py-8 px-4 md:px-8 rounded-xl">
                <div className="order-1 md:order-2">
                  <h2 className="mb-4 text-3xl font-bold">{t("bewabox.title")}</h2>
                  <p className="mb-6 text-muted-foreground">{t("bewabox.subtitle")}</p>
                  <p className="mb-6">{t("bewabox.description")}</p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-green-600" />
                      <span>{t("bewabox.feature1.title")}</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-green-600" />
                      <span>{t("bewabox.feature2.title")}</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-green-600" />
                      <span>{t("bewabox.feature3.title")}</span>
                    </li>
                  </ul>
                  <Link href="/products/bewabox" scroll={true}>
                    <Button className="transition-all duration-300 hover:translate-y-[-2px]">
                      {t("bewabox.cta")}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl order-2 md:order-1 bg-green-100">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-03%20at%2019.28.48-hdEcd7Ld65L45Oy8g8vN5HioTYEaQG.png"
                    alt="BEWABOX tunnel fermenter"
                    fill
                    className="object-cover scale-110"
                    unoptimized={true}
                  />
                </div>
              </div>
            </StaggeredChildren>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-green-50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <SlideUp>
                  <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{t("products.cta.title")}</h2>
                </SlideUp>
                <SlideUp delay={0.2}>
                  <p className="mb-8 text-muted-foreground">{t("products.cta.subtitle")}</p>
                </SlideUp>
                <SlideUp delay={0.4}>
                  <Link href="/contacts">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:translate-y-[-2px]"
                    >
                      {t("cta.button")}
                    </Button>
                  </Link>
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
