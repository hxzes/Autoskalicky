import * as cheerio from "cheerio"
import type { Vehicle } from "./data"

/**
 * Scrapes vehicle data from a dealer's profile on Autobazar.sk
 * @param dealerUrl URL of the dealer's profile on Autobazar.sk
 */
export async function scrapeAutobazarDealer(dealerUrl: string): Promise<Vehicle[]> {
  try {
    console.log(`Scraping dealer profile: ${dealerUrl}`)

    // Fetch the dealer's profile page
    const response = await fetch(dealerUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml",
        "Accept-Language": "sk,en-US;q=0.9,en;q=0.8",
      },
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch dealer profile: ${response.status} ${response.statusText}`)
    }

    const html = await response.text()

    // Log a snippet of the HTML for debugging (in development)
    console.log("HTML Snippet:", html.substring(0, 500) + "...")

    // Parse the HTML
    const $ = cheerio.load(html)

    // Find all vehicle listings
    const vehicles: Vehicle[] = []

    // Multiple selector patterns to try for vehicle listings
    const vehicleSelectors = [
      ".car-item",
      ".vehicle-item",
      ".listing-item",
      ".advert-item",
      ".inzeraty_item",
      ".advertisement",
      ".search-result-item",
      ".grid-item",
      ".vehicle-box",
      ".result-box",
      '[id*="inzerat"]',
      '[class*="inzerat"]',
      '[class*="car"]',
      '[class*="vehicle"]',
      '[class*="auto"]',
      "article",
      ".col-md-4",
      ".col-md-6",
      ".col-sm-6",
      ".col-12",
      ".catalog-list-item",
      ".product-list-item",
      ".title-list-item",
      ".listing",
      ".car-list > div",
      ".cars > div",
      ".search-results > div",
    ]

    // Track if we've found any vehicles
    let foundElements = false

    // Try each selector pattern
    for (const selector of vehicleSelectors) {
      const elements = $(selector)
      console.log(`Selector "${selector}" found ${elements.length} elements`)

      if (elements.length > 0) {
        foundElements = true

        elements.each((index, element) => {
          try {
            const vehicle = scrapeVehicleElement($, element, index)
            if (vehicle) {
              vehicles.push(vehicle)
            }
          } catch (error) {
            console.error(`Error scraping vehicle at index ${index}:`, error)
          }
        })

        // If we've found vehicles, no need to try more selectors
        if (vehicles.length > 0) {
          break
        }
      }
    }

    // If no elements were found with specific selectors, try a more general approach
    if (!foundElements || vehicles.length === 0) {
      console.log("Trying general approach to find vehicle listings...")

      // Try to find elements that might be vehicle listings based on content
      const potentialVehicleElements = $("div, article, li").filter(function () {
        const text = $(this).text()
        // Look for common patterns in vehicle listings
        return (
          // Check for price indicators
          (text.includes("€") || text.includes("EUR") || text.includes("cena")) &&
          // Check for common vehicle attributes
          (text.includes("km") ||
            text.includes("ccm") ||
            text.includes("kW") ||
            text.includes("rok") ||
            text.includes("diesel") ||
            text.includes("benzín"))
        )
      })

      console.log(`Found ${potentialVehicleElements.length} potential vehicle elements based on content`)

      potentialVehicleElements.each((index, element) => {
        try {
          const vehicle = scrapeVehicleElement($, element, index)
          if (vehicle) {
            vehicles.push(vehicle)
          }
        } catch (error) {
          console.error(`Error scraping potential vehicle at index ${index}:`, error)
        }
      })
    }

    // Log the result
    if (vehicles.length > 0) {
      console.log(`Scraped ${vehicles.length} vehicles from ${dealerUrl}`)
    } else {
      console.log("No vehicles found. Saving HTML for debugging...")
      // In a real application, you might want to save the HTML to a file for debugging
    }

    return vehicles
  } catch (error) {
    console.error("Error scraping dealer profile:", error)
    throw error
  }
}

// Update the scrapeVehicleElement function to use more flexible selectors
function scrapeVehicleElement($: cheerio.CheerioAPI, element: cheerio.Element, index: number): Vehicle | null {
  const $element = $(element)

  // Try multiple selector patterns for different website layouts
  const titleSelectors = [
    ".title",
    ".car-title",
    ".vehicle-title",
    "h2",
    "h3",
    ".nadpis",
    ".inzeraty_nadpis",
    ".advert-title",
    ".nazov-inzeratu",
    ".auto-title",
    ".ad-title",
  ]

  let title = ""
  for (const selector of titleSelectors) {
    const foundTitle = $element.find(selector).first().text().trim()
    if (foundTitle) {
      title = foundTitle
      break
    }
  }

  // If we still don't have a title, try the element itself if it's an h2 or h3
  if (!title && ($element.is("h2") || $element.is("h3"))) {
    title = $element.text().trim()
  }

  if (!title) {
    console.warn(
      `Skipping vehicle at index ${index}: No title found. HTML structure:\n${$element.html()?.substring(0, 200)}...`,
    )
    return null
  }

  // Extract price with multiple selectors
  const priceSelectors = [
    ".price",
    ".car-price",
    ".vehicle-price",
    ".cena",
    ".inzeraty_cena",
    ".ad-price",
    ".auction-price",
    ".suma",
    ".price-value",
    '[itemprop="price"]',
  ]
  let priceText = ""
  for (const selector of priceSelectors) {
    const foundPrice = $element.find(selector).first().text().trim()
    if (foundPrice) {
      priceText = foundPrice
      break
    }
  }
  const price = Number.parseInt(priceText.replace(/\s+/g, "").replace(/[^\d]/g, ""), 10) || 0

  // Extract year with multiple selectors
  const yearSelectors = [
    ".year",
    ".car-year",
    ".vehicle-year",
    ".rok",
    ".inzeraty_year",
    ".advert-year",
    ".rok-vyroby",
    '[itemprop="modelDate"]',
  ]
  let yearText = ""
  for (const selector of yearSelectors) {
    const foundYear = $element.find(selector).first().text().trim()
    if (foundYear) {
      yearText = foundYear
      break
    }
  }
  const year = Number.parseInt(yearText.replace(/\s+/g, "").replace(/[^\d]/g, ""), 10) || 0

  // Extract mileage with multiple selectors
  const mileageSelectors = [
    ".mileage",
    ".car-mileage",
    ".vehicle-mileage",
    ".km",
    ".najazd",
    ".inzeraty_km",
    ".tachometer",
    ".stav-tachometra",
    '[itemprop="mileageFromOdometer"]',
  ]
  let mileageText = ""
  for (const selector of mileageSelectors) {
    const foundMileage = $element.find(selector).first().text().trim()
    if (foundMileage) {
      mileageText = foundMileage
      break
    }
  }
  const mileage = Number.parseInt(mileageText.replace(/\s+/g, "").replace(/[^\d]/g, ""), 10) || 0

  // Extract fuel type with multiple selectors
  const fuelSelectors = [
    ".fuel",
    ".car-fuel",
    ".vehicle-fuel",
    ".palivo",
    ".inzeraty_fuel",
    ".fuel-type",
    ".typ-paliva",
    '[itemprop="fuelType"]',
  ]
  let fuel = ""
  for (const selector of fuelSelectors) {
    const foundFuel = $element.find(selector).first().text().trim()
    if (foundFuel) {
      fuel = foundFuel
      break
    }
  }

  // Extract transmission with multiple selectors
  const transmissionSelectors = [
    ".transmission",
    ".car-transmission",
    ".vehicle-transmission",
    ".prevodovka",
    ".inzeraty_transmission",
    ".gearbox",
    ".typ-prevodovky",
    '[itemprop="vehicleTransmission"]',
  ]
  let transmission = ""
  for (const selector of transmissionSelectors) {
    const foundTransmission = $element.find(selector).first().text().trim()
    if (foundTransmission) {
      transmission = foundTransmission
      break
    }
  }

  // Extract image URL with multiple approaches
  let imageUrl = ""
  // Try different img selectors
  const imgSelectors = [
    "img",
    ".car-image img",
    ".vehicle-image img",
    ".inzeraty_foto img",
    ".thumbnail img",
    ".image img",
    ".advert-image img",
    ".photo img",
  ]
  for (const selector of imgSelectors) {
    const $img = $element.find(selector).first()
    // Try different attributes
    for (const attr of ["src", "data-src", "data-lazy-src", "data-original"]) {
      const foundUrl = $img.attr(attr)
      if (foundUrl && !foundUrl.includes("placeholder") && !foundUrl.startsWith("data:")) {
        imageUrl = foundUrl
        break
      }
    }
    if (imageUrl) break
  }

  // If no img found, try background images in style attributes
  if (!imageUrl) {
    const $bgElements = $element.find('[style*="background"]')
    $bgElements.each((i, el) => {
      const style = $(el).attr("style") || ""
      const match = style.match(/url$$['"]?(.*?)['"]?$$/i)
      if (match && match[1]) {
        imageUrl = match[1]
        return false // break the each loop
      }
    })
  }

  // Extract link to detail page
  let detailUrl = ""
  // Try the element itself if it's an anchor
  if ($element.is("a")) {
    detailUrl = $element.attr("href") || ""
  }
  // Try finding an anchor
  if (!detailUrl) {
    const $anchors = $element.find("a")
    $anchors.each((i, el) => {
      const href = $(el).attr("href") || ""
      if (href && (href.includes("/inzerat/") || href.includes("/details/") || href.includes("/auto/"))) {
        detailUrl = href
        return false // break the each loop
      }
    })
  }
  // If still not found, take the first anchor
  if (!detailUrl) {
    detailUrl = $element.find("a").first().attr("href") || ""
  }

  // Make sure the URL is absolute
  if (detailUrl && !detailUrl.startsWith("http")) {
    // Handle relative URLs
    if (detailUrl.startsWith("/")) {
      detailUrl = `https://www.autobazar.sk${detailUrl}`
    } else {
      detailUrl = `https://www.autobazar.sk/${detailUrl}`
    }
  }

  // Create vehicle object
  const vehicle: Vehicle = {
    id: Date.now() + index, // Generate a unique ID
    title,
    subtitle: "", // We might not have this information from the listing
    fuel: mapFuelType(fuel),
    transmission: mapTransmissionType(transmission),
    mileage,
    power: {
      kw: 0, // We might not have this information from the listing
      ps: 0, // We might not have this information from the listing
    },
    year,
    price: {
      withVat: price,
    },
    date: new Date().toLocaleDateString("sk"),
    image: imageUrl || `/placeholder.svg?height=600&width=800&text=${encodeURIComponent(title)}`,
    images: imageUrl ? [imageUrl] : [],
    // Store the detail URL for potential future scraping of additional details
    detailUrl,
  }

  return vehicle
}

/**
 * Maps fuel type from Slovak to our format
 */
function mapFuelType(fuel: string): string {
  const fuelLower = fuel.toLowerCase().trim()

  if (fuelLower.includes("benzín") || fuelLower.includes("benzin")) {
    return "Benzín"
  } else if (fuelLower.includes("diesel") || fuelLower.includes("nafta")) {
    return "Diesel"
  } else if (fuelLower.includes("hybrid")) {
    return "Hybrid"
  } else if (fuelLower.includes("elektro")) {
    return "Elektro"
  }

  return fuel || "Neuvedené"
}

/**
 * Maps transmission type from Slovak to our format
 */
function mapTransmissionType(transmission: string): string {
  const transLower = transmission.toLowerCase().trim()

  if (transLower.includes("manuál") || transLower.includes("manual")) {
    return "Manuálna"
  } else if (transLower.includes("automat")) {
    return "Automatická"
  }

  return transmission || "Neuvedené"
}

/**
 * Scrapes additional details for a vehicle from its detail page
 * This is optional and can be used to get more information about a vehicle
 */
export async function scrapeVehicleDetails(detailUrl: string, vehicle: Vehicle): Promise<Vehicle> {
  try {
    console.log(`Scraping vehicle details: ${detailUrl}`)

    // Fetch the vehicle detail page
    const response = await fetch(detailUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml",
        "Accept-Language": "sk,en-US;q=0.9,en;q=0.8",
      },
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch vehicle details: ${response.status} ${response.statusText}`)
    }

    const html = await response.text()

    // Parse the HTML
    const $ = cheerio.load(html)

    // Extract additional details

    // Extract power
    const powerText = $(".power, .engine-power, .vehicle-power, .vykon").first().text().trim()
    const powerKw = Number.parseInt(powerText.match(/(\d+)\s*kW/)?.[1] || "0", 10) || 0
    const powerPs = Number.parseInt(powerText.match(/(\d+)\s*k/)?.[1] || "0", 10) || Math.round(powerKw * 1.36)

    // Extract subtitle/variant
    const subtitle = $(".subtitle, .variant, .version, .model").first().text().trim() || vehicle.subtitle

    // Extract additional images
    const images: string[] = []

    // Try different selectors for image galleries
    $(".gallery img, .carousel img, .slider img, .fotogaleria img, .detail-images img").each((_, img) => {
      const src = $(img).attr("src") || $(img).attr("data-src") || $(img).attr("data-lazy-src") || ""
      if (src && !src.startsWith("data:") && !src.includes("placeholder") && !images.includes(src)) {
        images.push(src)
      }
    })

    // If no images found in gallery, try to find them in other ways
    if (images.length === 0) {
      // Try to find images in data attributes or style attributes
      $('[data-image], [data-img], [data-src], [style*="background-image"]').each((_, el) => {
        const src =
          $(el).attr("data-image") ||
          $(el).attr("data-img") ||
          $(el).attr("data-src") ||
          $(el)
            .attr("style")
            ?.match(/url$$['"]?(.*?)['"]?$$/)?.[1] ||
          ""

        if (src && !src.startsWith("data:") && !src.includes("placeholder") && !images.includes(src)) {
          images.push(src)
        }
      })
    }

    // If still no images found, use the main image
    if (images.length === 0 && vehicle.image) {
      images.push(vehicle.image)
    }

    // Update the vehicle with additional details
    return {
      ...vehicle,
      subtitle: subtitle || vehicle.subtitle,
      power: {
        kw: powerKw || vehicle.power.kw,
        ps: powerPs || vehicle.power.ps,
      },
      images: images.length > 0 ? images : vehicle.images,
    }
  } catch (error) {
    console.error(`Error scraping vehicle details for ${detailUrl}:`, error)
    // Return the original vehicle if there was an error
    return vehicle
  }
}

/**
 * Scrapes vehicles from a dealer's profile and optionally scrapes additional details
 * @param dealerUrl URL of the dealer's profile on Autobazar.sk
 * @param scrapeDetails Whether to scrape additional details for each vehicle
 */
export async function scrapeVehiclesFromAutobazar(dealerUrl: string, scrapeDetails = false): Promise<Vehicle[]> {
  try {
    // Scrape the dealer's profile
    const vehicles = await scrapeAutobazarDealer(dealerUrl)

    // Optionally scrape additional details for each vehicle
    if (scrapeDetails && vehicles.length > 0) {
      console.log(`Scraping additional details for ${vehicles.length} vehicles...`)

      // Scrape details for each vehicle (with a small delay to avoid rate limiting)
      const vehiclesWithDetails: Vehicle[] = []
      for (const vehicle of vehicles) {
        if (vehicle.detailUrl) {
          // Add a small delay between requests to avoid rate limiting
          await new Promise((resolve) => setTimeout(resolve, 500))

          const vehicleWithDetails = await scrapeVehicleDetails(vehicle.detailUrl, vehicle)
          vehiclesWithDetails.push(vehicleWithDetails)
        } else {
          vehiclesWithDetails.push(vehicle)
        }
      }

      return vehiclesWithDetails
    }

    return vehicles
  } catch (error) {
    console.error("Error scraping vehicles from Autobazar:", error)
    throw error
  }
}

/**
 * Generates code that can be pasted into the data.ts file
 * @param vehicles The vehicles to generate code for
 */
export function generateVehicleCode(vehicles: Vehicle[]): string {
  // Start with the array opening
  let code = "export const importedVehicles: Vehicle[] = [\n"

  // Add each vehicle
  vehicles.forEach((vehicle, index) => {
    code += "  {\n"
    code += `    id: ${vehicle.id},\n`
    code += `    title: "${escapeString(vehicle.title)}",\n`

    if (vehicle.subtitle) {
      code += `    subtitle: "${escapeString(vehicle.subtitle)}",\n`
    }

    code += `    fuel: "${escapeString(vehicle.fuel)}",\n`
    code += `    transmission: "${escapeString(vehicle.transmission)}",\n`
    code += `    mileage: ${vehicle.mileage},\n`

    code += "    power: {\n"
    code += `      kw: ${vehicle.power.kw},\n`
    code += `      ps: ${vehicle.power.ps},\n`
    code += "    },\n"

    code += `    year: ${vehicle.year},\n`

    code += "    price: {\n"
    code += `      withVat: ${vehicle.price.withVat},\n`
    if (vehicle.price.withoutVat) {
      code += `      withoutVat: ${vehicle.price.withoutVat},\n`
    }
    code += "    },\n"

    code += `    date: "${new Date().toLocaleDateString("sk")}",\n`

    // Add isNew flag for the first 3 vehicles
    if (index < 3) {
      code += "    isNew: true,\n"
    }

    code += `    image: "${escapeString(vehicle.image)}",\n`

    if (vehicle.images && vehicle.images.length > 0) {
      code += "    images: [\n"
      vehicle.images.forEach((img) => {
        code += `      "${escapeString(img)}",\n`
      })
      code += "    ],\n"
    }

    code += "  },\n"
  })

  // Close the array
  code += "];\n\n"

  // Add instructions for how to use the code
  code += `
// To use these imported vehicles, add them to your existing vehicles array:
// 
// 1. Copy the importedVehicles array above
// 2. Paste it into your data.ts file
// 3. Merge with your existing vehicles array:
//
// export const vehicles: Vehicle[] = [
//   ...existingVehicles,  // Your original vehicles
//   ...importedVehicles   // The newly imported vehicles
// ];
`

  return code
}

/**
 * Escapes special characters in a string for use in JavaScript
 */
function escapeString(str: string): string {
  return str
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n")
    .replace(/\r/g, "\\r")
    .replace(/\t/g, "\\t")
}
