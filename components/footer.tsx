"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/solbien_logotyp-bila.png"
                alt="Solbien Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
                unoptimized={true}
              />
            </Link>
            <p className="text-white/80 max-w-xs">{t("footer.description")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("footer.quicklinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-white/80 hover:text-white transition-colors">
                  {t("products")}
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-white/80 hover:text-white transition-colors">
                  {t("solutions")}
                </Link>
              </li>
              <li>
                <Link href="/implementations" className="text-white/80 hover:text-white transition-colors">
                  {t("implementations")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  {t("about")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("footer.contactus")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-green-400" />
                <span className="text-white/80">
                  SOLBIEN plc
                  <br />
                  Dvorakova 1041/15
                  <br />
                  702 00 Ostrava - Mor. Ostrava
                  <br />
                  Czech Republic
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 shrink-0 text-green-400" />
                <span className="text-white/80">+420 605 902 903</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 shrink-0 text-green-400" />
                <span className="text-white/80">info@solbien.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Social Media</h3>
            <div className="flex space-x-4">{/* Social media icons would go here */}</div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center text-white/60">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
