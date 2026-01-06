import {
  ThemeProvider as NextThemeProvider,
  ThemeProviderProps,
} from "next-themes";

export const ThemeProvider = (
  { children, ...props }: ThemeProviderProps
) => {
  return (
    <NextThemeProvider
      defaultTheme="system"
      attribute="class"
      themes={["light", "dark"]}
      storageKey="stalker-theme"
      enableSystem={true}
      disableTransitionOnChange={true}
      enableColorScheme={true}
      {...props}
    >
      {children}
    </NextThemeProvider>
  );
};
