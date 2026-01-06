import Link from "next/link";
import TelegramIcon from "../ui/icons/telegram.icon";
import InstagramIcon from "../ui/icons/instagram.icon";
import TwitterIcon from "../ui/icons/twitter.icon";

export const socialsList = [
  { id: "telegram", IconElement: TelegramIcon, href: "#home" },
  { id: "inistagrem", IconElement: InstagramIcon, href: "#about-us" },
  { id: "twitter", IconElement: TwitterIcon, href: "#about-us" },
];

export default function SocialNetworks() {
  return (
    <div className="flex gap-x-2 items-center">
      {socialsList.map((social) => (
        <Link className="" key={social.id} href={social.href}>
          <social.IconElement />
        </Link>
      ))}
    </div>
  );
}
