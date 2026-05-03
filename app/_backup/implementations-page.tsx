"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FadeIn from "@/components/animations/fade-in"
import SlideUp from "@/components/animations/slide-up"
import { useLanguage } from "@/contexts/language-context"

export default function RealizationsPage() {
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
                <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">{t("implementations.title")}</h1>
                <p className="mx-auto max-w-3xl text-xl text-muted-foreground">{t("implementations.subtitle")}</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{t("implementations.ewa.title")}</h2>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 text-xl font-bold">
                    44
                  </span>
                  <span className="text-xl">{t("implementations.installations")}</span>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 text-xl font-bold">
                    8
                  </span>
                  <span className="text-xl">{t("implementations.countries")}</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative w-full max-w-4xl mx-auto mb-20 overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-[2/1] relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ewa-world.jpg-vsNf7d79Me2BWJFlgw8m01ONs16TTh.jpeg"
                    alt="World map showing EWA installations"
                    fill
                    className="object-cover scale-110 bg-white"
                    unoptimized={true}
                  />
                </div>
              </div>
            </FadeIn>

            <div className="grid gap-20">
              {/* THAILAND */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border">
                <div className="bg-green-800 text-white p-4">
                  <div className="container mx-auto flex items-center">
                    <MapPin className="h-6 w-6 mr-2" />
                    <h3 className="text-2xl font-bold">THAILAND</h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="mb-8">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-green-800 mb-2">{t("implementations.waste")}</h4>
                            <p>Green waste, BDW from municipal waste</p>
                          </div>
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-green-800 mb-2">{t("implementations.product")}</h4>
                            <p>Compost</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <div className="relative rounded-lg shadow-md bg-white">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ewa-thai.jpg-csEuUKLvhH7iyaQleL4RnucZfPEFDm.jpeg"
                          alt="EWA installation in Thailand"
                          width={800}
                          height={600}
                          className="rounded-lg w-full h-auto object-cover scale-105"
                          unoptimized={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other country sections follow the same pattern */}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-green-900 py-16 md:py-24 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <SlideUp>
                  <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                    {t("implementations.cta.title")}
                  </h2>
                </SlideUp>
                <SlideUp delay={0.2}>
                  <p className="mb-8 text-white/80">{t("implementations.cta.subtitle")}</p>
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
