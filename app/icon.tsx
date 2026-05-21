import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
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
          fontSize: 320,
          fontWeight: 700,
          color: "#ffffff",
          background:
            "radial-gradient(circle at 30% 25%, #334155 0%, #0a0a0a 70%)",
        }}
      >
        C
      </div>
    ),
    { ...size },
  );
}
