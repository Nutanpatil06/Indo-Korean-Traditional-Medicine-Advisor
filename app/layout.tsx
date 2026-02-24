import type React from "react"
import { MedicineSystemProvider } from "@/hooks/use-medicine-system"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MedicineSystemProvider>
          {children}
          <Toaster />
        </MedicineSystemProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
