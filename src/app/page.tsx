import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <header className="flex items-center justify-between border-b px-6 py-4">
        <p className="text-sm font-medium text-muted-foreground">
          Build with Brand
        </p>
        <ModeToggle />
      </header>
      <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-16">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Next.js + Tailwind + shadcn</CardTitle>
            <CardDescription>
              App Router, CSS variable theming, and components ready to extend.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <p className="text-sm text-muted-foreground">
              Customize brand colors and radius in{" "}
              <code className="rounded-md bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">
                styles/theme.css
              </code>
              . Tailwind utilities like{" "}
              <code className="rounded-md bg-muted px-1.5 py-0.5 text-xs font-mono">
                bg-primary
              </code>{" "}
              pick up those tokens automatically.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Link
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "default" }))}
              >
                Next.js docs
              </Link>
              <Link
                href="https://ui.shadcn.com"
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                shadcn/ui
              </Link>
            </div>
          </CardContent>
          <CardFooter className="text-xs text-muted-foreground">
            Use the toggle above to verify light and dark themes.
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
