/** Matches a nav href against the current pathname, treating "/" as exact-only. */
export function isActiveRoute(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
