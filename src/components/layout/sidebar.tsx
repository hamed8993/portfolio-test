"use client";

import { setLangDir } from "@/src/utils/set-lang-dir";
import { Menu, X } from "lucide-react";
import { useLocale } from "next-intl";
import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarsBackground from "../common/stars-background";

export default function Sidebar({ children }: { children: ReactNode }) {
  const [openMenu, setOpenMenu] = useState(false);
  const locale = useLocale();
  const langDir = setLangDir(locale);

  const isLTR = langDir === "ltr";

  return (
    <>
      <Menu
        className="cursor-pointer md:hidden"
        onClick={() => setOpenMenu(true)}
      />

      <AnimatePresence>
        {!!openMenu && (
          <div>
            <motion.div
              className="fixed inset-0 z-40 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenMenu(false)}
            />

            {/* Sidebar */}
            <motion.aside
              className={`
                            fixed inset-0 z-50 bg-main-bg
                            ${isLTR ? "right-0" : "left-0"}
                        `}
              initial={{ x: isLTR ? "100%" : "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: isLTR ? "100%" : "-100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              <StarsBackground className="h-full">
                <div className="flex h-full flex-col">
                  {/* Header */}
                  <div className="shrink-0 p-4">
                    <X
                      className="cursor-pointer"
                      onClick={() => setOpenMenu(false)}
                    />
                  </div>

                  {/* Scrollable Content */}
                  <div className="flex-1 overflow-y-auto p-4">{children}</div>
                </div>
              </StarsBackground>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
