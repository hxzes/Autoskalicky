import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const targetUrl = url.searchParams.get("url")

    if (!targetUrl) {
      return NextResponse.json({ error: "URL parameter is required" }, { status: 400 })
    }

    // Validate URL
    try {
      new URL(targetUrl)
    } catch (e) {
      return NextResponse.json({ error: "Invalid URL provided" }, { status: 400 })
    }

    // Only allow certain domains for security
    const allowedDomains = ["autobazar.sk", "autobazar.eu", "auto.sk"]
    const hostname = new URL(targetUrl).hostname
    const isDomainAllowed = allowedDomains.some((domain) => hostname.includes(domain))

    if (!isDomainAllowed) {
      return NextResponse.json({ error: "Domain not allowed for security reasons" }, { status: 403 })
    }

    // Fetch the HTML content
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml",
        "Accept-Language": "sk,en-US;q=0.9,en;q=0.8",
      },
    })

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "Failed to fetch the URL",
          status: response.status,
          statusText: response.statusText,
        },
        { status: response.status },
      )
    }

    const html = await response.text()

    return NextResponse.json({
      html,
      url: targetUrl,
      contentType: response.headers.get("content-type"),
      contentLength: html.length,
    })
  } catch (error) {
    console.error("Error in fetch-html API:", error)

    return NextResponse.json(
      {
        error: "Error fetching HTML",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
