import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Auto Skalický - Predaj a servis vozidiel"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        fontSize: 48,
        background: "white",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 48,
      }}
    >
      <img
        src={`https://autoskalicky.sk/images/logo.png`}
        alt="Auto Skalický Logo"
        width={500}
        height={250}
        style={{ marginBottom: 40 }}
      />
      <div style={{ fontSize: 36, color: "#666", marginTop: 24 }}>Predaj a servis vozidiel</div>
      <div style={{ fontSize: 24, color: "#9abb40", marginTop: 16 }}>
        Kvalitné vozidlá s kompletnou servisnou históriou
      </div>
    </div>,
    { ...size },
  )
}
