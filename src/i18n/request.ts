import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async (arg) => {
  const localeInRequest = await arg.requestLocale;
  const locale = hasLocale(routing.locales, localeInRequest)
    ? localeInRequest
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`./../../messages/${locale}.json`)).default,
  };
});
