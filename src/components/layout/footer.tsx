import { quickLinksList } from "@/src/configs/footer-quick-links.config";
import Logo from "../common/logo";
import { useTranslations } from "next-intl";
import Link from "next/link";
import SocialNetworks from "../common/social-networks";
import { Phone } from "lucide-react";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="flex flex-col w-full gap-3 px-4 border-t border-primary-400 pt-2">
      <div className="flex sm:flex-row flex-col justify-between">
        <div className="flex flex-col gap-2 w-full sm:w-1/3">
          <Logo />
          <p className="sm:text-start text-center">{t("footer.footer-description")}</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <h2 className="font-bold">{t("footer.quick-links-title")}</h2>
          <ul>
            {quickLinksList?.map((link) => (
              <li
                key={link.id}
                className={` hover:text-white text-[18px] font-medium cursor-pointer`}
              >
                <Link href={`#${link.id}`}>{t(link.titleTransKey)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <h2 className="font-bold">{t("footer.contact-us-title")}</h2>
          <div className="flex gap-1">
            <Phone />
            <span>09147373374</span> -<span>09149189209</span>
          </div>
          <SocialNetworks />
        </div>
      </div>
      <div className="flex w-fulll justify-between items-center">
        <p>
          ©{new Date().getUTCFullYear()} {t("footer.copy-right")} {}
        </p>
        <p>{t("footer.designed-by")}</p>
      </div>
    </footer>
  );
}
