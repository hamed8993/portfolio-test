import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

type UseChangeLocaleReturn = {
  currentLocale: string;
  setLocale: (locale: string) => void;
};

export default function useChangeLocale(): UseChangeLocaleReturn {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const setLocale = (nextLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    router.push(segments.join("/"));
  };
  return { currentLocale, setLocale };
}
