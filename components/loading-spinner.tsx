import Image from "next/image"

export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative w-32 h-32 mb-4">
        <Image
          src="/images/logo.png"
          alt="Auto Skalický"
          width={128}
          height={128}
          className="object-contain animate-pulse"
        />
      </div>

      <div className="relative w-48 h-10 mb-4">
        {/* Road */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></div>

        {/* Car */}
        <div className="absolute bottom-2 left-0 w-8 h-5 animate-[car-move_3s_ease-in-out_infinite]">
          <div className="relative w-full h-full">
            {/* Car body */}
            <div className="absolute bottom-0 w-8 h-2.5 bg-primary rounded-sm"></div>

            {/* Car top */}
            <div className="absolute bottom-2.5 left-1.5 w-5 h-2.5 bg-primary rounded-t-lg"></div>

            {/* Wheels */}
            <div className="absolute bottom-0 left-1 w-1.5 h-1.5 bg-foreground rounded-full animate-[wheel-spin_1s_linear_infinite]"></div>
            <div className="absolute bottom-0 right-1 w-1.5 h-1.5 bg-foreground rounded-full animate-[wheel-spin_1s_linear_infinite]"></div>

            {/* Headlight */}
            <div className="absolute bottom-1 right-0 w-0.5 h-0.5 bg-yellow-300 rounded-full"></div>
          </div>
        </div>
      </div>

      <p className="text-sm font-medium text-primary">Načítavam...</p>
    </div>
  )
}
