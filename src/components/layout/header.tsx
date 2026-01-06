"use client";
import { useState } from "react";

import { navLinksList } from "./../../configs/header-nav.config";
import Link from "next/link";
import useScrollToPosition from "@/src/hooks/use-scrolls-to-position";
import { useTranslations } from "next-intl";
import ThemeSwitchButton from "../button/theme-switch.button";
import { DropdownMenu } from "../ui/dropdown-menu";
import LanguageSelect from "../dropdown/language-select";
import Image from "next/image";
import Logo from "../common/logo";
import Sidebar from "./sidebar";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const scrollToPosition = useScrollToPosition(100);

  const t = useTranslations();

  return (
    <header className="relative">
      <nav
        className={`container w-full flex items-center py-5 fixed top-0 z-20 ${
          scrollToPosition ? "bg-main-bg" : "bg-transparent"
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Logo />
          <div className="flex items-center gap-6">
            <ul className="list-none hidden sm:flex flex-row gap-6">
              {navLinksList.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.id ? "text-white" : "text-neutral-300"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(nav.id)}
                >
                  <Link href={`#${nav.id}`}>{t(nav.titleTransKey)}</Link>
                </li>
              ))}
            </ul>
            <div className="hidden sm:flex items-center gap-6">
              <ThemeSwitchButton />
              <LanguageSelect />
            </div>
          </div>

          <Sidebar>
            <div className="h-full flex flex-col justify-between">
              <ul className="list-none flex flex-col gap-6">
                {navLinksList.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.id ? "text-white" : "text-neutral-300"
                    } hover:text-white text-[18px] font-medium cursor-pointer`}
                    onClick={() => setActive(nav.id)}
                  >
                    <Link href={`#${nav.id}`}>{t(nav.titleTransKey)}</Link>
                  </li>
                ))}
              </ul>
              <div className="w-full flex flex-row justify-between">
                <ThemeSwitchButton />
                <LanguageSelect />
              </div>
            </div>
          </Sidebar>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
