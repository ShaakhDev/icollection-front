import i18next from 'i18next'
import { initReactI18next } from "react-i18next";


const resources = {
    en: {
        translation: {
            login_btn: "Login",
            signup_btn: 'Sign Up'
        }
    },
    uz: {
        translation: {
            login_btn: "Kirish",
            signup_btn: 'Ro\'yxatdan o\'tish'
        }
    }
}

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18next