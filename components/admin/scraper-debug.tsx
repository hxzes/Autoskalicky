"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, Copy, Check, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import * as cheerio from "cheerio"

export function ScraperDebug() {
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [htmlContent, setHtmlContent] = useState("")
  const [debugResults, setDebugResults] = useState<any>(null)
  const [selector, setSelector] = useState("")
  const [copied, setCopied] = useState(false)

  const fetchHtml = async () => {
    if (!url) return

    setIsLoading(true)
    setHtmlContent("")
    setDebugResults(null)

    try {
      // For security reasons, we'll use a proxy or backend endpoint
      // In a real application, you would call your own backend endpoint
      const response = await fetch(`/api/fetch-html?url=${encodeURIComponent(url)}`)

      if (!response.ok) {
        throw new Error(`Failed to fetch HTML: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      setHtmlContent(data.html)

      // Run some basic analysis
      analyzeHtml(data.html)
    } catch (error) {
      console.error("Error fetching HTML:", error)
      setDebugResults({
        error: error instanceof Error ? error.message : "Failed to fetch HTML",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const analyzeHtml = (html: string) => {
    try {
      const $ = cheerio.load(html)

      // Look for common vehicle listing elements
      const selectors = [
        ".car-item",
        ".vehicle-item",
        ".listing-item",
        ".advert-item",
        ".inzeraty_item",
        ".advertisement",
        ".search-result-item",
        ".grid-item",
        ".vehicle-box",
        '[id*="inzerat"]',
        '[class*="inzerat"]',
        '[class*="car"]',
        '[class*="vehicle"]',
      ]

      const selectorResults: Record<string, number> = {}

      for (const sel of selectors) {
        const count = $(sel).length
        if (count > 0) {
          selectorResults[sel] = count
        }
      }

      // Look for scripts that might contain data
      const dataScripts = $("script").filter(function () {
        const content = $(this).html() || ""
        return (
          content.includes("inzeraty") ||
          content.includes("vehicles") ||
          content.includes("auta") ||
          content.includes("cars")
        )
      }).length

      // Find potential vehicle elements based on content
      const potentialVehicleElements = $("div, article, li").filter(function () {
        const text = $(this).text()
        return (
          (text.includes("€") || text.includes("EUR")) &&
          (text.includes("km") || text.includes("ccm") || text.includes("kW"))
        )
      }).length

      setDebugResults({
        pageTitle: $("title").text(),
        totalElements: $("*").length,
        selectorResults,
        dataScripts,
        potentialVehicleElements,
        metaTags: $("meta").length,
        links: $("a").length,
        images: $("img").length,
      })
    } catch (error) {
      console.error("Error analyzing HTML:", error)
      setDebugResults({
        error: "Failed to analyze HTML",
        details: error instanceof Error ? error.message : String(error),
      })
    }
  }

  const testSelector = () => {
    if (!htmlContent || !selector) return

    try {
      const $ = cheerio.load(htmlContent)
      const elements = $(selector)

      setDebugResults({
        ...debugResults,
        selectorTest: {
          selector,
          count: elements.length,
          firstElementHtml: elements.length > 0 ? elements.first().html() : null,
          firstElementText: elements.length > 0 ? elements.first().text() : null,
        },
      })
    } catch (error) {
      console.error("Error testing selector:", error)
      setDebugResults({
        ...debugResults,
        selectorTest: {
          error: error instanceof Error ? error.message : String(error),
        },
      })
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(htmlContent)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy HTML:", err)
    }
  }

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Scraper Debug Utility</CardTitle>
        <CardDescription>
          Advanced tool to help troubleshoot scraping issues by fetching and analyzing HTML
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="url">URL to Debug</Label>
          <div className="flex space-x-2">
            <Input
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://www.autobazar.sk/predajca/your-dealer/"
              disabled={isLoading}
            />
            <Button onClick={fetchHtml} disabled={isLoading || !url}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Fetching...
                </>
              ) : (
                "Fetch HTML"
              )}
            </Button>
          </div>
        </div>

        {debugResults && !debugResults.error && (
          <div className="p-4 rounded-md bg-green-50 border border-green-200">
            <h3 className="font-medium mb-2 text-green-800">Page Analysis</h3>
            <div className="space-y-1 text-sm text-green-700">
              <p>
                <span className="font-semibold">Page Title:</span> {debugResults.pageTitle}
              </p>
              <p>
                <span className="font-semibold">Total Elements:</span> {debugResults.totalElements}
              </p>
              <p>
                <span className="font-semibold">Meta Tags:</span> {debugResults.metaTags}
              </p>
              <p>
                <span className="font-semibold">Links:</span> {debugResults.links}
              </p>
              <p>
                <span className="font-semibold">Images:</span> {debugResults.images}
              </p>
              <p>
                <span className="font-semibold">Data Scripts:</span> {debugResults.dataScripts}
              </p>
              <p>
                <span className="font-semibold">Potential Vehicle Elements:</span>{" "}
                {debugResults.potentialVehicleElements}
              </p>

              <div className="mt-4">
                <p className="font-semibold mb-1">Selector Results:</p>
                {Object.keys(debugResults.selectorResults).length > 0 ? (
                  <ul className="list-disc pl-5">
                    {Object.entries(debugResults.selectorResults).map(([selector, count]) => (
                      <li key={selector}>
                        <code>{selector}</code>: {count} elements
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No common vehicle selectors found</p>
                )}
              </div>
            </div>
          </div>
        )}

        {debugResults && debugResults.error && (
          <div className="p-4 rounded-md bg-red-50 border border-red-200 text-red-800">
            <h3 className="font-medium mb-2">Error</h3>
            <p>{debugResults.error}</p>
            {debugResults.details && <p className="mt-1 text-sm">{debugResults.details}</p>}
          </div>
        )}

        {htmlContent && (
          <>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="selector">Test CSS Selector</Label>
                <Button size="sm" variant="outline" onClick={testSelector} disabled={!selector}>
                  <Search className="mr-2 h-4 w-4" />
                  Test
                </Button>
              </div>
              <Input
                id="selector"
                value={selector}
                onChange={(e) => setSelector(e.target.value)}
                placeholder=".vehicle-item, .listing-item"
              />
            </div>

            {debugResults && debugResults.selectorTest && (
              <div className="p-4 rounded-md bg-blue-50 border border-blue-200">
                <h3 className="font-medium mb-2 text-blue-800">Selector Test Results</h3>
                {debugResults.selectorTest.error ? (
                  <p className="text-red-600">{debugResults.selectorTest.error}</p>
                ) : (
                  <div className="space-y-2 text-sm text-blue-700">
                    <p>
                      <span className="font-semibold">Selector:</span> {debugResults.selectorTest.selector}
                    </p>
                    <p>
                      <span className="font-semibold">Elements Found:</span> {debugResults.selectorTest.count}
                    </p>
                    {debugResults.selectorTest.count > 0 && (
                      <>
                        <div>
                          <p className="font-semibold mb-1">First Element Text:</p>
                          <div className="bg-white/70 p-2 rounded border border-blue-100 overflow-auto max-h-20">
                            {debugResults.selectorTest.firstElementText}
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">First Element HTML:</p>
                          <div className="bg-white/70 p-2 rounded border border-blue-100 overflow-auto max-h-40">
                            <pre className="text-xs">{debugResults.selectorTest.firstElementHtml}</pre>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="html-content">HTML Content</Label>
                <Button size="sm" variant="outline" onClick={copyToClipboard}>
                  {copied ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy HTML
                    </>
                  )}
                </Button>
              </div>
              <Textarea id="html-content" value={htmlContent} readOnly className="font-mono text-xs h-[300px]" />
            </div>
          </>
        )}
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">
          This utility helps diagnose scraping issues by fetching and analyzing HTML directly in the browser. Use the
          selector test to check if specific elements can be found in the page.
        </p>
      </CardFooter>
    </Card>
  )
}
