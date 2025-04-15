"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, AlertCircle, CheckCircle, ChevronDown, ChevronUp, Copy, Check } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import type { Vehicle } from "@/lib/data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Default dealer URL
const DEFAULT_DEALER_URL = "https://www.autobazar.sk/predajca/autoskalicky/"

export function ImportVehicles() {
  const [isLoading, setIsLoading] = useState(false)
  const [dealerUrl, setDealerUrl] = useState(DEFAULT_DEALER_URL)
  const [scrapeDetails, setScrapeDetails] = useState(true)
  const [generateCode, setGenerateCode] = useState(true)
  const [useAlternative, setUseAlternative] = useState(true)
  const [result, setResult] = useState<{
    success: boolean
    message: string
    count?: number
    vehicles?: Vehicle[]
    sampleVehicle?: Vehicle
    code?: string
    details?: string
  } | null>(null)
  const [error, setError] = useState<{
    message: string
    details?: string
  } | null>(null)
  const [showDetails, setShowDetails] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleImport = async () => {
    setIsLoading(true)
    setResult(null)
    setError(null)
    setCopied(false)

    try {
      // Build the URL with query parameters
      const url = `/api/import-vehicles?url=${encodeURIComponent(dealerUrl)}&details=${scrapeDetails}&code=${generateCode}&alternative=${useAlternative}`

      const response = await fetch(url)
      const data = await response.json()

      if (response.ok) {
        setResult(data)
      } else {
        setError({
          message: data.message || "Failed to import vehicles",
          details: data.error || data.details,
        })
      }
    } catch (err) {
      setError({
        message: "An error occurred while importing vehicles",
        details: err instanceof Error ? err.message : "Unknown error",
      })
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = async () => {
    if (result?.code) {
      try {
        await navigator.clipboard.writeText(result.code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error("Failed to copy code:", err)
      }
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Import Vehicles from Autobazar.sk</CardTitle>
        <CardDescription>Import vehicle data by scraping a dealer's profile on Autobazar.sk</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="dealer-url">Dealer Profile URL</Label>
            <Input
              id="dealer-url"
              value={dealerUrl}
              onChange={(e) => setDealerUrl(e.target.value)}
              placeholder="https://www.autobazar.sk/predajca/your-dealer-name/"
              disabled={isLoading}
            />
            <p className="text-xs text-muted-foreground">Enter the URL of your dealer profile on Autobazar.sk</p>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="scrape-details"
              checked={scrapeDetails}
              onCheckedChange={(checked) => setScrapeDetails(checked === true)}
              disabled={isLoading}
            />
            <Label htmlFor="scrape-details" className="text-sm">
              Scrape additional details and images (slower but more complete)
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="generate-code"
              checked={generateCode}
              onCheckedChange={(checked) => setGenerateCode(checked === true)}
              disabled={isLoading}
            />
            <Label htmlFor="generate-code" className="text-sm">
              Generate code for pasting into your project
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="alternative"
              checked={useAlternative}
              onCheckedChange={(checked) => setUseAlternative(checked === true)}
              disabled={isLoading}
            />
            <Label htmlFor="alternative" className="text-sm">
              Use alternative scraper if main fails (recommended)
            </Label>
          </div>

          {result && (
            <div
              className={`p-4 mt-4 rounded-md ${result.success ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}
            >
              <div className="flex items-start">
                {result.success ? (
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                ) : (
                  <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                )}
                <div>
                  <p className="font-medium">{result.message}</p>
                  {result.count && <p className="mt-1">Imported {result.count} vehicles</p>}
                  {result.details && <p className="mt-1 text-sm">{result.details}</p>}
                </div>
              </div>

              {result.success && (
                <Tabs defaultValue="sample" className="mt-4">
                  <TabsList>
                    <TabsTrigger value="sample">Sample Vehicle</TabsTrigger>
                    {result.code && <TabsTrigger value="code">Generated Code</TabsTrigger>}
                    {result && <TabsTrigger value="debug">Debug Info</TabsTrigger>}
                  </TabsList>

                  <TabsContent value="sample">
                    {result.sampleVehicle && (
                      <div className="bg-white/50 p-3 rounded-md overflow-auto max-h-60 text-xs">
                        <pre>{JSON.stringify(result.sampleVehicle, null, 2)}</pre>
                      </div>
                    )}
                  </TabsContent>

                  {result.code && (
                    <TabsContent value="code">
                      <div className="relative">
                        <div className="absolute top-2 right-2">
                          <Button size="sm" variant="ghost" onClick={copyToClipboard} className="h-8 px-2 text-xs">
                            {copied ? (
                              <>
                                <Check className="h-4 w-4 mr-1" />
                                Copied!
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" />
                                Copy Code
                              </>
                            )}
                          </Button>
                        </div>
                        <div className="bg-white/50 p-3 rounded-md overflow-auto max-h-[400px] text-xs">
                          <pre>{result.code}</pre>
                        </div>
                      </div>
                      <div className="mt-2 text-xs">
                        <p className="font-medium">Instructions:</p>
                        <ol className="list-decimal pl-4 mt-1 space-y-1">
                          <li>Copy the code above</li>
                          <li>
                            Paste it into your <code>data.ts</code> file
                          </li>
                          <li>Merge the imported vehicles with your existing vehicles array</li>
                        </ol>
                      </div>
                    </TabsContent>
                  )}
                  {result && (
                    <TabsContent value="debug">
                      <div className="bg-white/50 p-3 rounded-md overflow-auto max-h-60 text-xs">
                        <h3 className="font-semibold mb-2">Debugging Information</h3>
                        <div className="mb-2">
                          <span className="font-medium">Request URL:</span> {dealerUrl}
                        </div>
                        <div className="mb-2">
                          <span className="font-medium">Scrape Details:</span> {scrapeDetails ? "Yes" : "No"}
                        </div>
                        <div className="mb-2">
                          <span className="font-medium">Generate Code:</span> {generateCode ? "Yes" : "No"}
                        </div>
                        <div className="mb-2">
                          <span className="font-medium">Use Alternative Scraper:</span> {useAlternative ? "Yes" : "No"}
                        </div>
                        <div className="mb-2">
                          <span className="font-medium">Response Status:</span> {result.success ? "Success" : "Failure"}
                        </div>
                        {result.count && (
                          <div className="mb-2">
                            <span className="font-medium">Vehicles Found:</span> {result.count}
                          </div>
                        )}
                        {result.details && (
                          <div className="mb-2">
                            <span className="font-medium">Additional Details:</span> {result.details}
                          </div>
                        )}
                      </div>
                    </TabsContent>
                  )}
                </Tabs>
              )}
            </div>
          )}

          {error && (
            <div className="p-4 mt-4 rounded-md bg-red-50 text-red-800 border border-red-200">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                <div>
                  <p className="font-medium">Error: {error.message}</p>
                  {error.details && (
                    <button
                      className="mt-1 text-sm flex items-center text-red-700"
                      onClick={() => setShowDetails(!showDetails)}
                    >
                      {showDetails ? (
                        <>
                          <ChevronUp className="h-3 w-3 mr-1" />
                          Hide details
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-3 w-3 mr-1" />
                          Show details
                        </>
                      )}
                    </button>
                  )}
                  {showDetails && error.details && (
                    <div className="mt-2 p-2 bg-white/50 rounded text-xs overflow-auto max-h-40">
                      <pre>{error.details}</pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleImport} disabled={isLoading || !dealerUrl} className="w-full">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Importing...
            </>
          ) : (
            "Import Vehicles from Autobazar.sk"
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
