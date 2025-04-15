"use client"

import Image from "next/image"

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm z-[9999]">
      <div className="relative w-40 h-40 mb-6">
        <Image
          src="/images/logo.png"
          alt="Auto Skalický"
          width={160}
          height={160}
          className="object-contain animate-pulse"
        />
      </div>

      <div className="relative w-64 h-12 mb-4">
        {/* Road */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></div>

        {/* Car */}
        <div className="absolute bottom-2 left-0 w-10 h-6 animate-[car-move_3s_ease-in-out_infinite]">
          <div className="relative w-full h-full">
            {/* Car body */}
            <div className="absolute bottom-0 w-10 h-3 bg-primary rounded-sm"></div>

            {/* Car top */}
            <div className="absolute bottom-3 left-2 w-6 h-3 bg-primary rounded-t-lg"></div>

            {/* Wheels */}
            <div className="absolute bottom-0 left-1 w-2 h-2 bg-foreground rounded-full animate-[wheel-spin_1s_linear_infinite]"></div>
            <div className="absolute bottom-0 right-1 w-2 h-2 bg-foreground rounded-full animate-[wheel-spin_1s_linear_infinite]"></div>

            {/* Headlight */}
            <div className="absolute bottom-1.5 right-0 w-1 h-1 bg-yellow-300 rounded-full"></div>
          </div>
        </div>
      </div>

      <p className="text-lg font-medium text-primary">Načítavam...</p>
    </div>
  )
}
