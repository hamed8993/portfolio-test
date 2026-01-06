import createMiddleware from "next-intl/middleware";
import { routing } from "../i18n/routing";
import { NextRequest, NextResponse } from "next/server";

export const i18nMiddleware: 
        (request: NextRequest) => NextResponse<unknown> =
            createMiddleware(routing);
