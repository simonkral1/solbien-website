"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FadeIn from "@/components/animations/fade-in"
import SlideUp from "@/components/animations/slide-up"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
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
                <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">{t("about.title")}</h1>
                <p className="mx-auto max-w-3xl text-xl text-muted-foreground">{t("about.subtitle")}</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="max-w-3xl mx-auto">
                <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">{t("about.vision.title")}</h2>

                <div className="prose prose-lg max-w-none">
                  <p className="mb-6">{t("about.vision.paragraph1")}</p>
                  <p className="mb-6">{t("about.vision.paragraph2")}</p>
                  <p className="mb-6">{t("about.vision.paragraph3")}</p>
                  <p className="font-medium text-lg text-green-700">{t("about.vision.paragraph4")}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-green-50">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{t("about.team.title")}</h2>
              </div>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Jaroslav Král */}
              <FadeIn delay={0.1}>
                <div className="rounded-lg border bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/solbien-website/images/vaclav-holusa.png"
                      alt="Jaroslav Král"
                      fill
                      className="object-contain bg-white"
                      unoptimized={true}
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-xl font-semibold">Jaroslav Král</h3>
                    <p className="text-green-600">{t("team.ceo")}</p>
                  </div>
                </div>
              </FadeIn>

              {/* Kateřina Elisová */}
              <FadeIn delay={0.2}>
                <div className="rounded-lg border bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/solbien-website/images/katerina-elisova.png"
                      alt="Kateřina Elisová"
                      fill
                      className="object-contain bg-white"
                      unoptimized={true}
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-xl font-semibold">Kateřina Elisová</h3>
                    <p className="text-green-600">{t("team.sales")}</p>
                  </div>
                </div>
              </FadeIn>

              {/* Petr Vaníček */}
              <FadeIn delay={0.3}>
                <div className="rounded-lg border bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/solbien-website/images/jaroslav-kral.png"
                      alt="Petr Vaníček"
                      fill
                      className="object-contain bg-white"
                      unoptimized={true}
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-xl font-semibold">Petr Vaníček</h3>
                    <p className="text-green-600">{t("team.technical")}</p>
                  </div>
                </div>
              </FadeIn>

              {/* Václav Holuša */}
              <FadeIn delay={0.4}>
                <div className="rounded-lg border bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/solbien-website/images/petr-vanicek.png"
                      alt="Václav Holuša"
                      fill
                      className="object-contain bg-white"
                      unoptimized={true}
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-xl font-semibold">Václav Holuša</h3>
                    <p className="text-green-600">{t("team.environmental")}</p>
                  </div>
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
                  <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{t("about.cta.title")}</h2>
                </SlideUp>
                <SlideUp delay={0.2}>
                  <p className="mb-8 text-muted-foreground">{t("about.cta.subtitle")}</p>
                </SlideUp>
                <SlideUp delay={0.4}>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/products">
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:translate-y-[-2px]"
                      >
                        {t("button.exploreproducts")}
                      </Button>
                    </Link>
                    <Link href="/contacts">
                      <Button
                        size="lg"
                        variant="outline"
                        className="transition-all duration-300 hover:translate-y-[-2px]"
                      >
                        {t("button.contactus")}
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
