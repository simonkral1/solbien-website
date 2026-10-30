"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <>
      <Button
        variant={language === "EN" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("EN")}
        aria-pressed={language === "EN"}
        lang="en"
        className="px-2 py-1 h-auto text-xs"
      >
        EN
      </Button>
      <Button
        variant={language === "CS" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("CS")}
        aria-pressed={language === "CS"}
        lang="cs"
        className="px-2 py-1 h-auto text-xs"
      >
        CS
      </Button>
    </>
  )
}
