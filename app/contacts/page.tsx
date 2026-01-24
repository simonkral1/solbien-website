"use client"

import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FadeIn from "@/components/animations/fade-in"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
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
                <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">{t("contact.title")}</h1>
                <p className="mx-auto max-w-3xl text-xl text-muted-foreground">{t("contact.subtitle")}</p>
              </div>
            </FadeIn>

            <div className="flex justify-center">
              <FadeIn delay={0.3}>
                <div className="rounded-lg border bg-white p-8 shadow-sm max-w-3xl w-full">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="mt-1 h-6 w-6 text-green-600" />
                      <div>
                        <h3 className="font-medium">{t("contact.address")}</h3>
                        <p className="mt-1">
                          SOLBIEN plc
                          <br />
                          Dvorakova 1041/15
                          <br />
                          702 00 Ostrava - Mor. Ostrava
                          <br />
                          Czech Republic
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="mt-1 h-6 w-6 text-green-600" />
                      <div>
                        <h3 className="font-medium">{t("contact.phone")}</h3>
                        <p className="mt-1">+420 605 902 903</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="mt-1 h-6 w-6 text-green-600" />
                      <div>
                        <h3 className="font-medium">{t("contact.email")}</h3>
                        <p className="mt-1">info@solbien.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t">
                    <h3 className="mb-4 text-xl font-medium">{t("contact.person")}</h3>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold">Katerina Elisova</p>
                      <p className="text-muted-foreground">{t("contact.salesmanager")}</p>
                      <p className="mt-2">
                        <span className="font-medium">{t("contact.phone")}:</span> +420 605 902 903
                      </p>
                      <p>
                        <span className="font-medium">{t("contact.email")}:</span> info@solbien.com
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
