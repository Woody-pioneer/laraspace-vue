import VueI18n from 'vue-i18n'
import langs from '../lang'
import Ls from "../services/ls";


export function loadLanguageAsync(i18, lang) {
    let locale = 'en'
    let locale2 = Ls.get('locale')
    if (locale2) {
        let locale3=(l)=>JSON.parse(l).folder
        locale=locale3(locale2)
    }
    return import(`../lang/${locale}/${lang}`).then(msgs => {
        i18.locale = locale
        i18.setLocaleMessage(locale, msgs.default)
    })
}

export async function createI18n(locale) {

    const {default: localeMessages} = await import(`../lang/${locale}/home`)
    const messages = {
        [locale]: localeMessages,
    }
    const i18n = new VueI18n({
        locale,
        messages,
    })
    return i18n
}

export function getAutoLang() {

    let locale = 'en'
    let locale2 = Ls.get('locale')
    if (locale2) {
        let locale3=(l)=>JSON.parse(l).folder
        return locale3(locale2)
    }else {
        let result = navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage)
        if (result) {
            result = result.substr(0, 2)
        }
        if (langs.indexOf(result) === -1) {
            return 'en'
        } else {
            return result
        }
    }
    return locale

}
