import LanguageEngIcon from "@/assets/language-eng.svg"
import LanguageTCIcon from "@/assets/language-tc.svg"
import LanguageSCIcon from "@/assets/language-sc.svg"
import localeEnum from "@/enums/locale"

export default [
  { value: localeEnum.EN_US, label: "ENG", Icon: LanguageEngIcon },
  { value: localeEnum.ZH_HK, label: "繁體", Icon: LanguageTCIcon },
  { value: localeEnum.ZH_CN, label: "简体", Icon: LanguageSCIcon },
]
