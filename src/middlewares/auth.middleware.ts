import { NextRequest, NextResponse } from "next/server";
import { LocaleType, routing } from "../i18n/routing";

export const authMiddleware = async (request: NextRequest) => {
  const { nextUrl: requestUrl, cookies } = request;
  const baseUrl = requestUrl.origin;
  //baseUrl => http://localhost:3000
  //requestUrl.pathname => /fa/auth

  const urlLocale: LocaleType | string = baseUrl.split("/")[1];
  const lng = routing.locales.includes(urlLocale as LocaleType)
    ? urlLocale
    : routing.defaultLocale;

  const token = cookies.get("TOKEN")?.value;

  if (requestUrl.pathname.includes("/auth") && token) {
    return NextResponse.redirect(new URL(`/${lng}/profile`, baseUrl));
  }

  if (requestUrl.pathname.includes("/profile") && !token) {
    return NextResponse.redirect(new URL(`/${lng}/auth`, baseUrl));
  }

  return NextResponse.next();
};
