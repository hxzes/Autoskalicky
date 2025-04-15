import * as cheerio from "cheerio"
import type { Vehicle } from "./data"

/**
 * Alternative scraper for Autobazar.sk using a different approach
 * This may work better when the main scraper fails
 */
export async function scrapeAutobazarAlternative(dealerUrl: string): Promise<Vehicle[]> {
  try {
    console.log(`Using alternative scraper for: ${dealerUrl}`)

    // Ensure we're using the correct URL format
    const url = new URL(dealerUrl)
    // Some sites load listings with JavaScript, so we might need to use a different URL
    // or parameters to get the raw data
    const scrapingUrl = url.toString()

    const response = await fetch(scrapingUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml",
        "Accept-Language": "sk,en-US;q=0.9,en;q=0.8",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch dealer profile: ${response.status} ${response.statusText}`)
    }

    const html = await response.text()
    const $ = cheerio.load(html)

    // Try to extract the JSON data that might be embedded in the page
    // Many modern websites include their data in a JSON object
    const vehicles: Vehicle[] = []

    // Method 1: Look for JSON data in script tags
    const jsonScripts = $("script:not([src])").filter(function () {
      return (
        $(this).html()?.includes("inzeraty") ||
        $(this).html()?.includes("vehicles") ||
        $(this).html()?.includes("auta") ||
        $(this).html()?.includes("cars")
      )
    })

    if (jsonScripts.length > 0) {
      console.log(`Found ${jsonScripts.length} potential data scripts`)

      let foundVehiclesInScripts = false

      jsonScripts.each((_, script) => {
        try {
          const scriptContent = $(script).html() || ""
          // Try to extract JSON objects from the script
          const jsonMatches = scriptContent.match(/\{[\s\S]*?\}/g)

          if (jsonMatches) {
            for (const jsonStr of jsonMatches) {
              try {
                const data = JSON.parse(jsonStr)

                // Check if this looks like vehicle data
                if (data && typeof data === "object") {
                  // Try to extract vehicle data from various possible structures
                  const extractedVehicles = extractVehiclesFromJson(data)

                  if (extractedVehicles.length > 0) {
                    vehicles.push(...extractedVehicles)
                    foundVehiclesInScripts = true
                    console.log(`Found ${extractedVehicles.length} vehicles in JSON data`)
                    break
                  }
                }
              } catch (e) {
                // Invalid JSON, continue to the next match
              }
            }
          }
        } catch (error) {
          console.error("Error processing script:", error)
        }
      })

      if (foundVehiclesInScripts) {
        return vehicles
      }
    }

    // Method 2: More aggressive HTML parsing approach
    console.log("Using aggressive HTML parsing approach")

    // Look for elements that might contain car listings
    const potentialListingContainers = $(
      '.auto, .cars, .vehicles, .search-results, .catalog, .inzeraty, [class*="listing"]',
    )

    if (potentialListingContainers.length > 0) {
      console.log(`Found ${potentialListingContainers.length} potential listing containers`)

      potentialListingContainers.each((_, container) => {
        // Find candidate elements that might be individual car listings
        $(container)
          .find("> div, > li, > article")
          .each((index, element) => {
            try {
              // Check if this element has the expected vehicle data
              const $el = $(element)

              // Look for a title
              let title = ""
              $el.find('h2, h3, h4, .title, [class*="title"], [class*="name"], [class*="model"]').each((_, titleEl) => {
                const text = $(titleEl).text().trim()
                if (text && text.length > 5 && text.length < 100) {
                  title = text
                  return false // break the each loop
                }
              })

              if (!title) return // Skip if no title found

              // Look for a price
              let priceText = ""
              $el.find('.price, [class*="price"], [class*="cena"]').each((_, priceEl) => {
                const text = $(priceEl).text().trim()
                if ((text && text.includes("€")) || text.includes("EUR")) {
                  priceText = text
                  return false // break the each loop
                }
              })

              const price = priceText ? Number.parseInt(priceText.replace(/\s+/g, "").replace(/[^\d]/g, ""), 10) : 0

              // Find an image
              let imageUrl = ""
              $el.find("img").each((_, img) => {
                const src = $(img).attr("src") || $(img).attr("data-src") || $(img).attr("data-lazy-src")
                if (src && !src.includes("placeholder") && !src.startsWith("data:")) {
                  imageUrl = src
                  return false // break the each loop
                }
              })

              // Find a details URL
              let detailUrl = ""
              $el.find("a").each((_, link) => {
                const href = $(link).attr("href")
                if (href && (href.includes("/inzerat/") || href.includes("/auto/") || href.includes("/details/"))) {
                  detailUrl = href
                  return false // break the each loop
                }
              })

              // Create a vehicle object with the data we have
              const vehicle: Vehicle = {
                id: Date.now() + index,
                title,
                subtitle: "",
                fuel: "Neuvedené", // We may not have this info from the listing
                transmission: "Neuvedené", // We may not have this info from the listing
                mileage: 0, // We may not have this info from the listing
                power: {
                  kw: 0,
                  ps: 0,
                },
                year: 0, // We may not have this info from the listing
                price: {
                  withVat: price,
                },
                date: new Date().toLocaleDateString("sk"),
                image: imageUrl || `/placeholder.svg?height=600&width=800&text=${encodeURIComponent(title)}`,
                images: imageUrl ? [imageUrl] : [],
                detailUrl: detailUrl || "",
              }

              // Add the vehicle to our list
              vehicles.push(vehicle)
            } catch (error) {
              console.error(`Error extracting vehicle at index ${index}:`, error)
            }
          })
      })
    }

    console.log(`Alternative scraper found ${vehicles.length} vehicles`)
    return vehicles
  } catch (error) {
    console.error("Error in alternative scraper:", error)
    throw error
  }
}

/**
 * Attempts to extract vehicle data from a JSON object
 */
function extractVehiclesFromJson(data: any): Vehicle[] {
  const vehicles: Vehicle[] = []

  // Check various possible structures
  const possibleArrays = [
    data.inzeraty,
    data.vehicles,
    data.auta,
    data.cars,
    data.items,
    data.results,
    data.searchResults,
    data.data?.inzeraty,
    data.data?.vehicles,
    data.props?.pageProps?.vehicles,
    data.props?.pageProps?.inzeraty,
    data.props?.initialState?.vehicles,
  ]

  // Find the first array that exists and looks like vehicle data
  let vehiclesArray = null
  for (const arr of possibleArrays) {
    if (Array.isArray(arr) && arr.length > 0) {
      vehiclesArray = arr
      break
    }
  }

  if (!vehiclesArray) {
    // If no array found, check if the object itself is a vehicle
    if (isVehicleObject(data)) {
      vehicles.push(convertToVehicle(data))
    } else {
      // Try to find vehicles recursively in nested objects
      for (const key in data) {
        if (data[key] && typeof data[key] === "object") {
          const nestedVehicles = extractVehiclesFromJson(data[key])
          if (nestedVehicles.length > 0) {
            vehicles.push(...nestedVehicles)
            break
          }
        }
      }
    }
    return vehicles
  }

  // Process each item in the array
  for (const item of vehiclesArray) {
    if (isVehicleObject(item)) {
      vehicles.push(convertToVehicle(item))
    }
  }

  return vehicles
}

/**
 * Checks if an object looks like a vehicle
 */
function isVehicleObject(obj: any): boolean {
  if (!obj || typeof obj !== "object") return false

  // Check for common vehicle properties
  return (
    (obj.title || obj.name || obj.model) &&
    (obj.price !== undefined || obj.cena !== undefined) &&
    (obj.image !== undefined || obj.img !== undefined || obj.photo !== undefined || obj.thumbnail !== undefined)
  )
}

/**
 * Converts a JSON object to our Vehicle type
 */
function convertToVehicle(obj: any): Vehicle {
  // Extract data with fallbacks
  const title = obj.title || obj.name || obj.model || "Neuvedené"

  const priceRaw = obj.price || obj.cena || 0
  const price =
    typeof priceRaw === "number"
      ? priceRaw
      : Number.parseInt(String(priceRaw).replace(/\s+/g, "").replace(/[^\d]/g, ""), 10) || 0

  const imageUrl = obj.image || obj.img || obj.photo || obj.thumbnail || ""

  const detailUrl = obj.url || obj.link || obj.href || ""

  return {
    id: obj.id || Date.now(),
    title,
    subtitle: obj.subtitle || obj.description || "",
    fuel: obj.fuel || obj.palivo || "Neuvedené",
    transmission: obj.transmission || obj.prevodovka || "Neuvedené",
    mileage: obj.mileage || obj.km || 0,
    power: {
      kw: obj.power?.kw || obj.kw || 0,
      ps: obj.power?.ps || obj.ps || obj.hp || 0,
    },
    year: obj.year || obj.rok || 0,
    price: {
      withVat: price,
    },
    date: new Date().toLocaleDateString("sk"),
    image: imageUrl || `/placeholder.svg?height=600&width=800&text=${encodeURIComponent(title)}`,
    images: Array.isArray(obj.images) ? obj.images : imageUrl ? [imageUrl] : [],
    detailUrl,
  }
}
