import ThemeSwitchButton from "@/src/components/button/theme-switch.button";
export default function Page() {
  // console.log(
  //   "theme in SSR - Page>>>>>>",
  //   typeof window == undefined ? "THIS IS A SERVER" : "This is a client"
  // );

  return (
    <>
      blog list....
      <ThemeSwitchButton />
      {/* <img src="/assets/images/logo.png" />
      <Image
        className="dark:invert"
        src="/logo.png"
        alt="Next.js logo"
        width={100}
        height={20}
        priority
      /> */}
    </>
  );
}
