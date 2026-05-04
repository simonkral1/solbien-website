"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  Phone,
  Mail,
  Recycle,
  Zap,
  Leaf,
  Shield,
  Clock,
  Award,
  Utensils,
  Wheat,
  Flower2,
  Factory,
  Trash2,
  Building2,
  Trees,
  Store,
  Package,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FadeIn from "@/components/animations/fade-in"
import SlideUp from "@/components/animations/slide-up"
import StaggeredChildren from "@/components/animations/staggered-children"
import FeatureCard from "@/components/feature-card"
import ImageModal from "@/components/image-modal"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-white">
        <div className="container mx-auto flex h-12 items-center justify-end px-4 text-sm md:px-6">
          <div className="flex items-center gap-4">
            <a href="tel:+420605902903" className="flex items-center gap-1 text-muted-foreground hover:text-primary">
              <Phone className="h-4 w-4" />
              <span>{t("phone")}</span>
            </a>
            <a
              href="mailto:info@solbien.com"
              className="flex items-center gap-1 text-muted-foreground hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              <span>{t("email")}</span>
            </a>
          </div>
        </div>
      </header>

      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1688068705061-0305b5828e58.jpg-KOgNya4us51GdxXhUNwozMYl87F6YB.jpeg"
              alt="Green meadow with wildflowers under a bright blue sky with white clouds"
              fill
              className="object-cover scale-110 brightness-[0.85] animate-subtle-zoom"
              priority
              unoptimized={true}
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 lg:py-40 md:px-6">
            <FadeIn delay={0.2}>
              <div className="max-w-3xl">
                <SlideUp delay={0.3}>
                  <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                    {t("hero.title")}
                  </h1>
                </SlideUp>
                <SlideUp delay={0.5}>
                  <p className="mb-8 text-xl text-white/90 md:text-2xl">{t("hero.subtitle")}</p>
                </SlideUp>
                <SlideUp delay={0.7}>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Link href="/solutions">
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:translate-y-[-2px]"
                      >
                        {t("hero.cta")}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </SlideUp>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* IFAT Munich Banner */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-green-600 to-green-700">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center gap-8">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ifat-692046222c798-mW38TqyiMAISXAgbmAbiS94Fw6wDg6.png"
                      alt="IFAT Munich Logo"
                      width={180}
                      height={100}
                      className="object-contain"
                      unoptimized={true}
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {t("ifat.title")}
                    </h2>
                    <p className="text-xl md:text-2xl text-white/90 font-semibold mb-1">
                      {t("ifat.date")}
                    </p>
                    <p className="text-lg text-white/80">
                      {t("ifat.stand")} <span className="font-bold text-yellow-300">FM.811/7</span> - {t("ifat.outside")}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                  <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white/20 hover:border-white/40 transition-all duration-300">
                    <ImageModal
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/viber_image_2026-05-04_10-29-33-942-AQ2CdVko8wK8rSlbOUqug4TgZmd0Le.jpg"
                      alt="Solbien booth at IFAT Munich with BEWABOX display"
                      width={450}
                      height={250}
                      className="w-full"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white/20 hover:border-white/40 transition-all duration-300">
                    <ImageModal
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/viber_image_2026-05-03_20-11-15-149-m4wpKy0gcN4EbciZcOixSM3QPtrngC.png"
                      alt="IFAT Munich venue map showing stand FM.811/7"
                      width={350}
                      height={200}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Core Technology Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{t("core.title")}</h2>
              </div>
            </FadeIn>

            <div className="grid gap-12 md:grid-cols-2">
              <FadeIn>
                <div className="rounded-lg border-2 border-green-500 bg-white p-8 shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-40 h-40 -mr-20 -mt-20 bg-green-100 rounded-full opacity-30 transition-transform duration-500 group-hover:scale-110"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 -ml-16 -mb-16 bg-green-200 rounded-full opacity-30 transition-transform duration-500 group-hover:scale-110"></div>

                  <h3 className="mb-6 text-2xl font-bold text-green-700 relative z-10">{t("core.aerobic.title")}</h3>

                  <div className="relative z-10 space-y-4">
                    <p className="text-lg">{t("core.aerobic.text1")}</p>

                    <div className="flex items-center py-3 border-t border-b border-green-100">
                      <div className="bg-green-50 p-3 rounded-full mr-4">
                        <Zap className="h-8 w-8 text-green-600" />
                      </div>
                      <p className="font-medium">{t("core.aerobic.highlight")}</p>
                    </div>

                    <p>{t("core.aerobic.text2")}</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="rounded-lg border-2 border-green-500 bg-white p-8 shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 left-0 w-40 h-40 -ml-20 -mt-20 bg-green-100 rounded-full opacity-30 transition-transform duration-500 group-hover:scale-110"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 -mr-16 -mb-16 bg-green-200 rounded-full opacity-30 transition-transform duration-500 group-hover:scale-110"></div>

                  <h3 className="mb-6 text-2xl font-bold text-green-700 relative z-10">{t("core.municipal.title")}</h3>

                  <div className="relative z-10 space-y-4">
                    <p className="text-lg">{t("core.municipal.text1")}</p>

                    <div className="flex items-center py-3 border-t border-b border-green-100">
                      <div className="bg-green-50 p-3 rounded-full mr-4">
                        <Recycle className="h-8 w-8 text-green-600" />
                      </div>
                      <p className="font-medium">{t("core.municipal.highlight")}</p>
                    </div>

                    <p>{t("core.municipal.text2")}</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Why Choose Solbien Technologies? Section */}
        <section className="py-16 md:py-24 bg-green-50">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{t("why.title")}</h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">{t("why.subtitle")}</p>
              </div>
            </FadeIn>

            <StaggeredChildren className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-16" itemDelay={0.1}>
              <FeatureCard
                icon={<Leaf className="h-10 w-10 text-green-600" />}
                title={t("feature.eco.title")}
                description={t("feature.eco.desc")}
              />
              <FeatureCard
                icon={<Award className="h-10 w-10 text-green-600" />}
                title={t("feature.quality.title")}
                description={t("feature.quality.desc")}
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-green-600" />}
                title={t("feature.cost.title")}
                description={t("feature.cost.desc")}
              />
            </StaggeredChildren>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <FadeIn delay={0.1}>
                <div className="rounded-lg border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                  <div className="flex flex-col items-center mb-4">
                    <div className="bg-green-50 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-700 text-center">{t("feature.rapid.title")}</h3>
                  </div>
                  <p className="text-muted-foreground text-center">{t("feature.rapid.desc")}</p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="rounded-lg border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                  <div className="flex flex-col items-center mb-4">
                    <div className="bg-green-50 p-3 rounded-full mr-4">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-700 text-center">
                      {t("feature.sanitization.title")}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-center">{t("feature.sanitization.desc")}</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Types of Waste Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{t("waste.title")}</h2>
              </div>
            </FadeIn>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <FadeIn delay={0.1}>
                <div className="flex items-center p-4 rounded-lg border bg-white hover:bg-green-50 transition-colors duration-300 hover:shadow-sm">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-4 shrink-0">
                    <Utensils className="h-5 w-5" />
                  </div>
                  <span>{t("waste.food")}</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="flex items-center p-4 rounded-lg border bg-white hover:bg-green-50 transition-colors duration-300 hover:shadow-sm">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-4 shrink-0">
                    <Wheat className="h-5 w-5" />
                  </div>
                  <span>{t("waste.agricultural")}</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="flex items-center p-4 rounded-lg border bg-white hover:bg-green-50 transition-colors duration-300 hover:shadow-sm">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-4 shrink-0">
                    <Flower2 className="h-5 w-5" />
                  </div>
                  <span>{t("waste.green")}</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div className="flex items-center p-4 rounded-lg border bg-white hover:bg-green-50 transition-colors duration-300 hover:shadow-sm">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-4 shrink-0">
                    <Factory className="h-5 w-5" />
                  </div>
                  <span>{t("waste.industrial")}</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex items-center p-4 rounded-lg border bg-white hover:bg-green-50 transition-colors duration-300 hover:shadow-sm">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-4 shrink-0">
                    <Trash2 className="h-5 w-5" />
                  </div>
                  <span>{t("waste.municipal")}</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.35}>
                <div className="flex items-center p-4 rounded-lg border bg-white hover:bg-green-50 transition-colors duration-300 hover:shadow-sm">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-4 shrink-0">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <span>{t("waste.biodegradable")}</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex items-center p-4 rounded-lg border bg-white hover:bg-green-50 transition-colors duration-300 hover:shadow-sm">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-4 shrink-0">
                    <Trees className="h-5 w-5" />
                  </div>
                  <span>{t("waste.wood")}</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.45}>
                <div className="flex items-center p-4 rounded-lg border bg-white hover:bg-green-50 transition-colors duration-300 hover:shadow-sm">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-4 shrink-0">
                    <Store className="h-5 w-5" />
                  </div>
                  <span>{t("waste.supermarket")}</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="flex items-center p-4 rounded-lg border bg-white hover:bg-green-50 transition-colors duration-300 hover:shadow-sm">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-4 shrink-0">
                    <Package className="h-5 w-5" />
                  </div>
                  <span>{t("waste.compostable")}</span>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Products Preview */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{t("products.title")}</h2>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* BIOCON Highlight */}
        <section className="py-16 md:py-24 bg-green-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <FadeIn>
                <div>
                  <SlideUp>
                    <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">{t("biokon.title")}</h2>
                  </SlideUp>
                  <SlideUp delay={0.1}>
                    <p className="mb-6 text-muted-foreground">{t("biokon.subtitle")}</p>
                  </SlideUp>
                  <SlideUp delay={0.2}>
                    <ul className="mb-8 space-y-3">
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
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-green-600" />
                        <span>{t("biokon.feature4")}</span>
                      </li>
                    </ul>
                  </SlideUp>
                  <SlideUp delay={0.3}>
                    <Link href="/products/biocon">
                      <Button className="transition-all duration-300 hover:translate-y-[-2px]">
                        {t("biokon.cta")}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </SlideUp>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-03%20at%2019.33.18-jet3U6YJC8csj5YXVqhC1zZjReHbRg.png"
                    alt="BIOCON container fermenter"
                    style={{ objectPosition: "left center" }}
                    fill
                    className="object-cover scale-110 bg-white"
                    unoptimized={true}
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* EWA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <FadeIn delay={0.3} className="order-2 lg:order-1">
                <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EWA-m0wyYLNMsrnsfNkGAJbV2BNNGvBnZR.png"
                    alt="EWA - Ecological Waste Apparatus"
                    fill
                    className="object-cover scale-110 bg-white"
                    unoptimized={true}
                  />
                </div>
              </FadeIn>
              <FadeIn className="order-1 lg:order-2">
                <div>
                  <SlideUp>
                    <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">{t("ewa.title")}</h2>
                  </SlideUp>
                  <SlideUp delay={0.1}>
                    <p className="mb-6 text-muted-foreground">{t("ewa.subtitle")}</p>
                  </SlideUp>
                  <SlideUp delay={0.2}>
                    <ul className="mb-8 space-y-3">
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
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-green-600" />
                        <span>{t("ewa.feature4")}</span>
                      </li>
                    </ul>
                  </SlideUp>
                  <SlideUp delay={0.3}>
                    <Link href="/products/ewa">
                      <Button className="transition-all duration-300 hover:translate-y-[-2px]">
                        {t("ewa.cta")}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </SlideUp>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* BIOS Section */}
        <section className="py-16 md:py-24 bg-green-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <FadeIn>
                <div>
                  <SlideUp>
                    <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">{t("bios.title")}</h2>
                  </SlideUp>
                  <SlideUp delay={0.1}>
                    <p className="mb-6 text-muted-foreground">{t("bios.subtitle")}</p>
                  </SlideUp>
                  <SlideUp delay={0.2}>
                    <ul className="mb-8 space-y-3">
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
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-green-600" />
                        <span>{t("bios.feature4")}</span>
                      </li>
                    </ul>
                  </SlideUp>
                  <SlideUp delay={0.3}>
                    <Link href="/products/bios#top">
                      <Button className="transition-all duration-300 hover:translate-y-[-2px]">
                        {t("bios.cta")}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </SlideUp>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20March%2019%2C%202025%20-%2010_47AM.png-Vtx9j5mPgofXYWcDx52mlUj7kW6MCp.jpeg"
                    alt="BIOS fermenter unit installed on concrete foundation with agricultural field in background"
                    fill
                    className="object-cover scale-110 bg-white"
                    unoptimized={true}
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* BEWABOX Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <FadeIn delay={0.3} className="order-2 lg:order-1">
                <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-03%20at%2019.28.48-hdEcd7Ld65L45Oy8g8vN5HioTYEaQG.png"
                    alt="BEWABOX tunnel fermenter"
                    fill
                    className="object-cover scale-110 bg-white"
                    unoptimized={true}
                  />
                </div>
              </FadeIn>
              <FadeIn className="order-1 lg:order-2">
                <div>
                  <SlideUp>
                    <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">{t("bewabox.title")}</h2>
                  </SlideUp>
                  <SlideUp delay={0.1}>
                    <p className="mb-6 text-muted-foreground">{t("bewabox.subtitle")}</p>
                  </SlideUp>
                  <SlideUp delay={0.2}>
                    <ul className="mb-8 space-y-3">
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
                  </SlideUp>
                  <SlideUp delay={0.3}>
                    <Link href="/products/bewabox">
                      <Button className="transition-all duration-300 hover:translate-y-[-2px]">
                        {t("bewabox.cta")}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </SlideUp>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <SlideUp>
                  <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{t("cta.title")}</h2>
                </SlideUp>
                <SlideUp delay={0.2}>
                  <p className="mb-8 text-muted-foreground">{t("cta.subtitle")}</p>
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
