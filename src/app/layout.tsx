import "./globals.css"
import GradientBG from "@/components/GradientBG"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen relative overflow-hidden">
        <GradientBG />

        <main className="relative z-10 max-w-7xl mx-auto p-8">
          {children}
        </main>
      </body>
    </html>
  )
}
