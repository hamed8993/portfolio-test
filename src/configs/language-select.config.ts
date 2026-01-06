import { routing } from "../i18n/routing";

export type LocaleType = (typeof routing.locales)[number];

export const LanguagesList: {
  label: string;
  flagClass: string;
  localeKey: LocaleType;
}[] = [
  {
    label: "فارسی",
    flagClass: "ir",
    localeKey: "fa",
  },
  {
    label: "English",
    flagClass: "gb",
    localeKey: "en",
  },
  {
    label: "Türkçe",
    flagClass: "tr",
    localeKey: "tr",
  },
];
