import i18n from "i18next"
import { initReactI18next } from "react-i18next"
// import enJSON from "./en.json"
import idJSON from "./id.json"

i18n.use(initReactI18next).init({
    resources: {
        id: { ...idJSON }
    },
    lng: "id",
})