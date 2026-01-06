import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18nMiddleware } from "./middlewares/i18n.middleware";
import { authMiddleware } from "./middlewares/auth.middleware";

export default function proxy(request: NextRequest) {
  const i18nfiedRequest: NextResponse = i18nMiddleware(request);

  const { nextUrl: requestUrl } = request;
  if (
    requestUrl.pathname.includes("/auth") ||
    requestUrl.pathname.includes("/profile")
  ) {
    return authMiddleware(request);
  }
  return i18nfiedRequest;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|_next/public|_next/assets|assets|favicon.ico|sw.js).*)",
  ],
};
