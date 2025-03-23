/**
 * Helper functions for working with Vercel Blob Storage
 */

// Default placeholder image if the actual image isn't available
export function getPlaceholderImage(text: string, width = 800, height = 600) {
  // Use the built-in placeholder.svg from Next.js for development
  return `/placeholder.svg?height=${height}&width=${width}&text=${encodeURIComponent(text)}`
}

// Function to get a vehicle image with fallback
export function getVehicleImage(vehicleImage: string | undefined, vehicleTitle: string) {
  if (!vehicleImage || vehicleImage.startsWith("/placeholder.svg")) {
    return getPlaceholderImage(vehicleTitle)
  }
  return vehicleImage
}

// Function to get logo with fallback
export function getLogoImage(size: "small" | "medium" | "large" = "medium") {
  const dimensions = {
    small: { width: 50, height: 50 },
    medium: { width: 100, height: 100 },
    large: { width: 200, height: 200 },
  }

  const { width, height } = dimensions[size]
  return getPlaceholderImage("Logo", width, height)
}

