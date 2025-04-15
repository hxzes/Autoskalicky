import { NextResponse } from "next/server"
import { scrapeVehiclesFromAutobazar, generateVehicleCode } from "@/lib/autobazar-scraper"
import { scrapeAutobazarAlternative } from "@/lib/autobazar-scraper-alternative"

// Dealer profile URL - you can change this to your dealer's profile
const DEALER_URL = "https://www.autobazar.sk/predajca/autoskalicky/"

export async function GET(request: Request) {
  try {
    // Get the dealer URL from the query parameters or use the default
    const url = new URL(request.url)
    const dealerUrl = url.searchParams.get("url") || DEALER_URL
    const scrapeDetails = url.searchParams.get("details") === "true"
    const generateCode = url.searchParams.get("code") === "true"
    const useAlternative = url.searchParams.get("alternative") !== "false" // Default to true

    console.log(
      `Starting import from ${dealerUrl} with details=${scrapeDetails}, code=${generateCode}, alternative=${useAlternative}`,
    )

    // Try the main scraper first
    let importedVehicles = await scrapeVehiclesFromAutobazar(dealerUrl, scrapeDetails)

    // If main scraper finds no vehicles and alternative is enabled, try the alternative scraper
    if (importedVehicles.length === 0 && useAlternative) {
      console.log("Main scraper found no vehicles, trying alternative scraper...")
      try {
        importedVehicles = await scrapeAutobazarAlternative(dealerUrl)
      } catch (alternativeError) {
        console.error("Alternative scraper also failed:", alternativeError)
        // Continue with empty vehicles array, we'll handle this below
      }
    }

    if (importedVehicles.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "No vehicles imported",
          details:
            "The dealer profile was scraped successfully, but no vehicles were found. This could be due to changes in the website structure or empty dealer inventory. Try the alternative approach or check the dealer URL.",
          suggestedFixes: [
            "Verify the dealer URL is correct",
            "Try a different dealer URL to test the scraper",
            "Check if the dealer has any vehicles listed",
            "The website structure might have changed - inspect the page source",
          ],
        },
        { status: 404 },
      )
    }

    // Generate code if requested
    let vehicleCode = ""
    if (generateCode) {
      vehicleCode = generateVehicleCode(importedVehicles)
    }

    return NextResponse.json({
      success: true,
      message: `Successfully imported ${importedVehicles.length} vehicles`,
      count: importedVehicles.length,
      vehicles: importedVehicles.slice(0, 5), // Return only the first 5 vehicles to avoid large responses
      sampleVehicle: importedVehicles[0], // Include a sample vehicle for debugging
      code: vehicleCode, // Include the generated code if requested
    })
  } catch (error) {
    console.error("Error in import API:", error)

    // Provide more detailed error information
    return NextResponse.json(
      {
        success: false,
        message: "Error importing vehicles",
        error: error instanceof Error ? error.message : "Unknown error",
        stack: process.env.NODE_ENV === "development" ? (error instanceof Error ? error.stack : undefined) : undefined,
      },
      { status: 500 },
    )
  }
}
