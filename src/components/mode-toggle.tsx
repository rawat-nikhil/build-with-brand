"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

function subscribeToClient(): () => void {
  return () => {};
}

function useIsClient(): boolean {
  return React.useSyncExternalStore(
    subscribeToClient,
    () => true,
    () => false
  );
}

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const isClient = useIsClient();

  if (!isClient) {
    return (
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label="Toggle color theme"
        disabled
      />
    );
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label="Toggle color theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="dark:hidden" />
      <Moon className="hidden dark:block" />
    </Button>
  );
}
