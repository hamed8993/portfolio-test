export const setLangDir = (locale: string): "rtl" | "ltr" => {
  return locale == "fa" || locale == "ar" ? "rtl" : "ltr";
};
