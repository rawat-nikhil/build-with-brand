import type { ReactNode } from "react";

import { Footer } from "@/components/organisms/footer";
import { Navbar } from "@/components/organisms/navbar";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/providers/theme-provider";
import "./site-shell.scss";

/** Site-wide chrome shared by every route: theming, header, main region and footer. */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <Navbar />
      <main className="site-shell__main">{children}</main>
      <Footer />
      <Toaster />
    </ThemeProvider>
  );
}
