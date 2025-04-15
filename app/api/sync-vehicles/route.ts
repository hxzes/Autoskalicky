import { NextResponse } from "next/server"
import { syncVehiclesFromAutobazar } from "@/lib/autobazar-integration"

// Tento endpoint môže byť volaný manuálne alebo pomocou CRON jobu
export async function GET() {
  try {
    const vehicles = await syncVehiclesFromAutobazar()

    return NextResponse.json({
      success: true,
      message: `Úspešne synchronizovaných ${vehicles.length} vozidiel`,
      vehicles,
    })
  } catch (error) {
    console.error("Chyba pri synchronizácii vozidiel:", error)

    return NextResponse.json({ success: false, message: "Chyba pri synchronizácii vozidiel" }, { status: 500 })
  }
}
