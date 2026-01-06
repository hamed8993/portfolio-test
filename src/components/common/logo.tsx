"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  const t = useTranslations();

  const handleScroll = () => {
    //  setActive("");
    window.scrollTo(0, 0);
  };

  return (
    <Link href="/" className="flex items-center gap-2" onClick={handleScroll}>
      <Image
        src="/assets/images/logo.png"
        alt="logo"
        className="w-9 h-9 object-contain"
        width={36}
        height={36}
      />
      <p className="text-white text-[18px] font-bold cursor-pointer flex">
        {t("stalkerfy")} &nbsp;
        <span className="sm:block hidden"> | {t("slogan")}</span>
      </p>
    </Link>
  );
}
