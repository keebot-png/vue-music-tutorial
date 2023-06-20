import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import af from "@/locales/af.json";

export default createI18n({
    locale: "af",
    fallbackLocale: "en",
    messages: {
        en,
        af
    },
    numberFormats: {
        en: {
            currency: {
                style: "currency", currency: "USD"
            }
        },
        af: {
            currency: {
                style: "currency", currency: "ZAR"
            }
        }
    }
})