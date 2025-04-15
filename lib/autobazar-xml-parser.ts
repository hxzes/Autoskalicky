import { XMLParser } from "fast-xml-parser"
import type { Vehicle } from "./data"

// The URL of the XML feed
const AUTOBAZAR_XML_URL =
  "http://www.autobazar.sk/api/export/36cd17288887a084df13c53c9eb08f1c00/firmAdvertisements/329705/"

/**
 * Fetches and parses the XML data from Autobazar.sk
 */
export async function fetchAutobazarXml() {
  try {
    // Use server-side fetch to avoid CORS issues
    const response = await fetch(AUTOBAZAR_XML_URL, {
      // Add cache: 'no-store' to always get fresh data
      cache: "no-store",
      // Add any required headers for authentication if needed
      headers: {
        Accept: "application/xml",
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch XML: ${response.status} ${response.statusText}`)
    }

    const xmlText = await response.text()

    // Parse XML to JavaScript object with more flexible options
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
      textNodeName: "#text",
      isArray: (name, jpath, isLeafNode, isAttribute) => {
        // Force certain elements to always be arrays
        // This helps handle cases where there's only one item
        return name === "advertisement" || name === "image"
      },
    })

    const result = parser.parse(xmlText)

    // Log the structure to help debug
    console.log("XML Structure:", JSON.stringify(result, null, 2).substring(0, 500) + "...")

    return result
  } catch (error) {
    console.error("Error fetching or parsing XML:", error)
    throw error
  }
}

/**
 * Extracts vehicle data from the parsed XML
 * This function is designed to be flexible and handle different XML structures
 */
export function extractVehiclesFromXml(parsedXml: any): any[] {
  // Try different possible paths to the vehicle data
  const possiblePaths = [
    parsedXml?.advertisements?.advertisement,
    parsedXml?.data?.advertisements?.advertisement,
    parsedXml?.response?.advertisements?.advertisement,
    parsedXml?.autobazar?.advertisements?.advertisement,
    // Add more possible paths as needed
  ]

  for (const path of possiblePaths) {
    if (Array.isArray(path) && path.length > 0) {
      return path
    }
  }

  // If we can't find the vehicles in the expected paths, log the structure and throw an error
  console.error("Could not find vehicles in XML structure:", parsedXml)
  throw new Error("Could not find vehicles in the XML data")
}

/**
 * Safely extracts a value from a nested object structure
 */
function safeGet(obj: any, path: string, defaultValue: any = ""): any {
  const keys = path.split(".")
  let current = obj

  for (const key of keys) {
    if (current === undefined || current === null) {
      return defaultValue
    }
    current = current[key]
  }

  return current !== undefined && current !== null ? current : defaultValue
}

/**
 * Converts Autobazar vehicle data to our application's Vehicle format
 * This function is designed to be flexible and handle different data structures
 */
export function convertToAppVehicle(autobazarVehicle: any): Vehicle {
  // Try different possible paths for each field
  const id =
    safeGet(autobazarVehicle, "id") ||
    safeGet(autobazarVehicle, "@_id") ||
    safeGet(autobazarVehicle, "ID") ||
    Date.now() // Use timestamp as fallback ID

  const title =
    safeGet(autobazarVehicle, "title") ||
    safeGet(autobazarVehicle, "name") ||
    `${safeGet(autobazarVehicle, "manufacturer")} ${safeGet(autobazarVehicle, "model")}`.trim()

  const subtitle =
    safeGet(autobazarVehicle, "subtitle") ||
    safeGet(autobazarVehicle, "description", "").split(",")[0] ||
    safeGet(autobazarVehicle, "variant") ||
    ""

  const priceStr =
    safeGet(autobazarVehicle, "price") ||
    safeGet(autobazarVehicle, "price.#text") ||
    safeGet(autobazarVehicle, "price_with_vat") ||
    "0"

  const priceWithVat = Number.parseInt(String(priceStr).replace(/\s+/g, "").replace(/[^\d]/g, ""), 10) || 0

  const mileageStr =
    safeGet(autobazarVehicle, "mileage") ||
    safeGet(autobazarVehicle, "km") ||
    safeGet(autobazarVehicle, "tachometer") ||
    "0"

  const mileage = Number.parseInt(String(mileageStr).replace(/\s+/g, "").replace(/[^\d]/g, ""), 10) || 0

  const yearStr =
    safeGet(autobazarVehicle, "year") ||
    safeGet(autobazarVehicle, "year_of_manufacture") ||
    safeGet(autobazarVehicle, "production_date") ||
    "0"

  const year = Number.parseInt(String(yearStr).replace(/\s+/g, "").replace(/[^\d]/g, ""), 10) || 0

  const powerKwStr =
    safeGet(autobazarVehicle, "power_kw") ||
    safeGet(autobazarVehicle, "engine_power") ||
    safeGet(autobazarVehicle, "power") ||
    "0"

  const powerKw = Number.parseInt(String(powerKwStr).replace(/\s+/g, "").replace(/[^\d]/g, ""), 10) || 0

  const powerPsStr =
    safeGet(autobazarVehicle, "power_hp") ||
    safeGet(autobazarVehicle, "power_ps") ||
    safeGet(autobazarVehicle, "engine_power_hp") ||
    "0"

  const powerPs =
    Number.parseInt(String(powerPsStr).replace(/\s+/g, "").replace(/[^\d]/g, ""), 10) || Math.round(powerKw * 1.36)

  const fuel = safeGet(autobazarVehicle, "fuel") || safeGet(autobazarVehicle, "fuel_type") || ""

  const transmission = safeGet(autobazarVehicle, "transmission") || safeGet(autobazarVehicle, "gearbox") || ""

  // Handle images - try different possible structures
  let images: string[] = []
  const imageField =
    safeGet(autobazarVehicle, "image") ||
    safeGet(autobazarVehicle, "images.image") ||
    safeGet(autobazarVehicle, "photos.photo") ||
    safeGet(autobazarVehicle, "image_url")

  if (typeof imageField === "string") {
    images = [imageField]
  } else if (Array.isArray(imageField)) {
    images = imageField.map((img) =>
      typeof img === "string" ? img : safeGet(img, "url") || safeGet(img, "#text") || "",
    )
  } else if (imageField && typeof imageField === "object") {
    const imgUrl = safeGet(imageField, "url") || safeGet(imageField, "#text") || ""
    if (imgUrl) images = [imgUrl]
  }

  // Filter out empty image URLs
  images = images.filter((url) => url && url.trim() !== "")

  // If no images were found, use a placeholder
  if (images.length === 0) {
    images = [`/placeholder.svg?height=600&width=800&text=${encodeURIComponent(title)}`]
  }

  // Map fuel types from Slovak to our format if needed
  const fuelMap: Record<string, string> = {
    benzín: "Benzín",
    benzin: "Benzín",
    diesel: "Diesel",
    nafta: "Diesel",
    hybrid: "Hybrid",
    elektro: "Elektro",
    // Add more mappings as needed
  }

  // Map transmission types from Slovak to our format if needed
  const transmissionMap: Record<string, string> = {
    manuálna: "Manuálna",
    manualna: "Manuálna",
    automatická: "Automatická",
    automaticka: "Automatická",
    // Add more mappings as needed
  }

  // Create a vehicle object in our application's format
  const vehicle: Vehicle = {
    id: typeof id === "number" ? id : Number.parseInt(String(id), 10) || Date.now(),
    title: title || "Neznáme vozidlo",
    subtitle: subtitle,
    fuel: fuelMap[fuel.toLowerCase()] || fuel,
    transmission: transmissionMap[transmission.toLowerCase()] || transmission,
    mileage,
    power: {
      kw: powerKw,
      ps: powerPs,
    },
    year,
    price: {
      withVat: priceWithVat,
      // If price without VAT is available, add it here
    },
    date: new Date().toLocaleDateString("sk"),
    image: images[0],
    images,
  }

  return vehicle
}

/**
 * Fetches vehicles from Autobazar.sk and converts them to our application's format
 */
export async function importVehiclesFromAutobazar(): Promise<Vehicle[]> {
  try {
    const parsedXml = await fetchAutobazarXml()
    const autobazarVehicles = extractVehiclesFromXml(parsedXml)

    // Log the first vehicle to help debug
    if (autobazarVehicles.length > 0) {
      console.log("First vehicle data:", JSON.stringify(autobazarVehicles[0], null, 2))
    }

    return autobazarVehicles.map(convertToAppVehicle)
  } catch (error) {
    console.error("Error importing vehicles from Autobazar:", error)
    throw error
  }
}
