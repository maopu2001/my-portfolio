const RAW_CDN_URL = process.env.NEXT_PUBLIC_CDN_URL || "";

// Trim any trailing slashes from the base CDN URL
const CDN_BASE_URL = RAW_CDN_URL.replace(/\/+$/, "");

export function getCdnUrl(assetPath?: string | null): string {
  if (!assetPath) return "";

  const trimmed = assetPath.trim();
  if (!trimmed) return "";

  // Return as-is if already an absolute or protocol-relative URL
  if (/^(?:https?:|\/\/|data:|blob:)/i.test(trimmed)) {
    return trimmed;
  }

  // If in development mode and CDN is not forced, serve local asset
  if (
    process.env.NODE_ENV === "development" &&
    !process.env.NEXT_PUBLIC_CDN_IN_DEV
  ) {
    return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  }

  // If no CDN is configured, fallback to local path
  if (!CDN_BASE_URL) {
    return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  }

  // Strip leading slashes to prevent double-slashing with CDN base
  const cleanPath = trimmed.replace(/^\/+/, "");
  return `${CDN_BASE_URL}/${cleanPath}`;
}
