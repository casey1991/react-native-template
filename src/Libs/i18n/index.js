import i18n from "i18next";
import { AsyncStorage } from "react-native";
import { reactI18nextModule } from "react-i18next";
import { en_US, zh_CN } from "./languages";
import { LANGUAGE_EN_US, LANGUAGE_ZH_CH } from "./constants";

// the translations
const resources = {
  [LANGUAGE_EN_US]: en_US,
  [LANGUAGE_ZH_CH]: zh_CN
};

i18n.use(reactI18nextModule).init({
  resources,
  lng: LANGUAGE_EN_US,
  debug: true,
  interpolation: {
    escapeValue: false
  },
  fallbackLng: LANGUAGE_EN_US
});
AsyncStorage.getItem("currentLanguage").then(language => {
  if (language) i18n.changeLanguage(language);
});
export default i18n;
export { default as Constants } from "./constants";
export const changeLanguage = language => {
  i18n.changeLanguage(language, error => {
    if (!error) {
      // now just persist to storage, may be we should persist it apollo or redux
      AsyncStorage.setItem("currentLanguage", language);
    }
  });
};
