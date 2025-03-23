import { ImageResponse } from "next/og"
import { vehicles } from "@/lib/data"

export const runtime = "edge"

export const alt = "Auto Skalický - Predaj a servis vozidiel"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image({ params }: { params: { id: string } }) {
  const vehicleId = Number.parseInt(params.id)
  const vehicle = vehicles.find((v) => v.id === vehicleId)

  // If vehicle not found, use default OG image
  if (!vehicle) {
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
          width={400}
          height={200}
          style={{ marginBottom: 40 }}
        />
        <div style={{ fontSize: 36, color: "#666", marginTop: 24 }}>Predaj a servis vozidiel</div>
      </div>,
      { ...size },
    )
  }

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        fontSize: 48,
        background: "white",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 48,
      }}
    >
      <img
        src={`https://autoskalicky.sk/images/logo.png`}
        alt="Auto Skalický Logo"
        width={300}
        height={150}
        style={{ marginBottom: 40 }}
      />
      <div style={{ fontSize: 42, fontWeight: "bold", marginBottom: 16 }}>{vehicle.title}</div>
      {vehicle.subtitle && <div style={{ fontSize: 32, color: "#666", marginBottom: 24 }}>{vehicle.subtitle}</div>}
      <div style={{ display: "flex", justifyContent: "space-between", width: "80%", marginTop: 24 }}>
        <div style={{ fontSize: 24, color: "#666" }}>Rok: {vehicle.year}</div>
        <div style={{ fontSize: 24, color: "#666" }}>Palivo: {vehicle.fuel}</div>
        <div style={{ fontSize: 24, color: "#666" }}>{vehicle.mileage.toLocaleString("sk")} km</div>
      </div>
      <div style={{ fontSize: 36, fontWeight: "bold", color: "#9abb40", marginTop: 40 }}>
        {vehicle.price.withVat.toLocaleString("sk")} €
      </div>
    </div>,
    { ...size },
  )
}

