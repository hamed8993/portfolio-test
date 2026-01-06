import { createNavigation } from "next-intl/navigation";

import { routing } from "./routing";

export const {
  Link: LinkIntl,
  getPathname: getPathnameIntl,
  permanentRedirect: permanentRedirectIntl,
  redirect: redirectIntl,
  usePathname: usePathnameIntl,
  useRouter: useRouterIntl,
} = createNavigation(routing);
