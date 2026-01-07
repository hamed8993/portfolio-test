import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  defaultLocale: "fa",
  locales: ["en", "fa", "tr", "ar"],
  //   alternateLinks: "",
  //   domains: "",
  //   localeCookie: "",
  localeDetection: false, //??
  // localePrefix: "always", //default
});

export type LocaleType = "en" | "fa" | "tr" | "ar";
