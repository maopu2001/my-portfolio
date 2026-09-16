import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

export const alt = `${profile.name} — ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fffcf3",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "9999px",
              backgroundColor: "#ff4d00",
            }}
          />
          <div style={{ fontSize: "26px", color: "#4b5563" }}>
            maopu.com.bd
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 700,
              color: "#b84300",
              letterSpacing: "-2px",
            }}
          >
            {`${profile.name}.`}
          </div>
          <div style={{ fontSize: "40px", color: "#1a2332", maxWidth: "900px" }}>
            {profile.headline}
          </div>
        </div>

        <div style={{ fontSize: "28px", color: "#6b7280" }}>
          Computer Vision · Machine Learning · Web Engineering — RMSTU, Bangladesh
        </div>
      </div>
    ),
    size
  );
}
