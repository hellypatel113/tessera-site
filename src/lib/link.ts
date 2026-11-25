/**
 * Prefixes a site path with the deploy base, so the site works both at a
 * domain's root and under a sub-path such as GitHub Pages' /tessera-site/.
 */
export function link(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
}
