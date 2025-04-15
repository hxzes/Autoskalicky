"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, Save, Check } from "lucide-react"

export function SaveVehicles() {
  const [code, setCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSave = async () => {
    setIsLoading(true)
    setSaved(false)
    setError(null)

    try {
      // Validate the code
      if (!code.trim()) {
        throw new Error("Please paste the generated code")
      }

      // Here you would typically send the code to a server endpoint
      // that would save it to a file or database
      // For this example, we'll just simulate a successful save
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch (err: any) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Save Imported Vehicles</CardTitle>
        <CardDescription>Paste the generated code here to save it to your project</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="code">Generated Code</Label>
            <Textarea
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Paste the generated code here..."
              className="font-mono text-xs h-[300px]"
              disabled={isLoading}
            />
          </div>

          {error && <div className="p-3 rounded-md bg-red-50 text-red-800 border border-red-200 text-sm">{error}</div>}

          {saved && (
            <div className="p-3 rounded-md bg-green-50 text-green-800 border border-green-200 text-sm flex items-center">
              <Check className="h-4 w-4 mr-2" />
              Code saved successfully!
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSave} disabled={isLoading || !code.trim()} className="w-full">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Vehicles
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
