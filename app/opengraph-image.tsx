import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lilac City Labs — Modern CME Management Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAFAFA",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Gradient glow */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(124,58,237,0.1), rgba(124,58,237,0.03), transparent 70%)",
            filter: "blur(60px)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 500,
              color: "#18181B",
              letterSpacing: "-0.02em",
              display: "flex",
            }}
          >
            Lilac City Labs
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#52525B",
              display: "flex",
            }}
          >
            Modern software for continuing medical education
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
