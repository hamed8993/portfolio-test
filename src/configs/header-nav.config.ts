export interface NavLink {
  id: string;
  titleTransKey: string;
  href: string;
}

export const navLinksList: NavLink[] = [
  { id: "home", titleTransKey: "navbar.home", href: "#home" },
  { id: "about-us", titleTransKey: "navbar.about-us", href: "#about-us" },
  { id: "contact-us", titleTransKey: "navbar.contact-us", href: "#contact-us" },
  { id: "blogs", titleTransKey: "navbar.blogs", href: "blogs" },
  { id: "ai-tech", titleTransKey: "navbar.ai-tech", href: "ai-tech" },
];
