import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Lilac City Labs — Solo-Built Software for Underserved Markets";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090B",
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
              "radial-gradient(ellipse at center, rgba(168,85,247,0.2), rgba(236,72,153,0.1), transparent 70%)",
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
              color: "#FAFAFA",
              letterSpacing: "-0.02em",
              display: "flex",
            }}
          >
            Lilac City Labs
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#A1A1AA",
              fontFamily: "monospace",
              display: "flex",
            }}
          >
            Solo-built software for underserved markets
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
