"use client"

import * as React from "react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { useTranslation } from "react-i18next"
import { accomodations } from "@/data/accomodations"
import { articles } from "@/data/articles"

interface SearchProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function Search({open, setOpen}: SearchProps) {
  // const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])
  const { t } = useTranslation()
  return (
    <>
      <p className="hidden lg:inline text-sm text-muted-foreground">
        {" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">CTRL + J</span>
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={() => setOpen((open) => !open)}>
        <CommandInput placeholder={t("What are you looking for...")} />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading={t("Articles")}>
            {articles.map((value) => (
              <a href={`/articles/${value.slug}`}>
                <CommandItem>
                <img
                  src={value.imgURL}
                  className="h-10 w-20 rounded-sm object-cover mr-6"
                />
                <span>{value.title}</span>
              </CommandItem>
              </a>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading={t("Lodging & Accommodations")}>
          {accomodations.map((value) => (
              <a href="/accomodations">
                <CommandItem>
                <img
                  src={value.imgURL[0]}
                  className="h-10 w-20 rounded-sm object-cover mr-6"
                />
                <span>{value.title}</span>
              </CommandItem>
              </a>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
