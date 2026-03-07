import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#7C3AED",
          borderRadius: 6,
          color: "#ffffff",
          fontSize: 11,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: -0.5,
        }}
      >
        LCL
      </div>
    ),
    { ...size }
  );
}
