import { useTranslation } from 'react-i18next'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import indonesiaFlag from "/svgs/id.svg"
import unitedKingdomFlag from "/svgs/gb.svg"

export function I18nToggle() {
  const { i18n } = useTranslation()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline" className="bg-white/25 dark:bg-black/25 hover:bg-white/50 dark:hover:bg-black/50">
          {i18n.language === 'id' ? (
            <img src={indonesiaFlag} width="20" />
          ) : (
            <img src={unitedKingdomFlag} width="20" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="translate-y-3 bg-white/25 dark:bg-black/25 hover:bg-white/50 dark:hover:bg-black/50">
        <DropdownMenuItem 
          onClick={() => i18n.changeLanguage('id')}
        >
          Indonesia
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => i18n.changeLanguage('en')}  
        >
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}