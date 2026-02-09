import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      
      {/* Glow – dark mode only */}
      <div className="
        absolute inset-0
        bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_60%)]
        opacity-0 dark:opacity-100
        transition-opacity
      " />

      {/* Soft gradient for light mode */}
      <div className="
        absolute inset-0
        bg-linear-to-b
        from-indigo-50 via-background to-background
        dark:from-transparent
      " />

      <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Secure Authentication
          <span className="
            block
            bg-linear-to-r
            from-indigo-500 to-cyan-500
            bg-clip-text text-transparent
          ">
            Built for the Future
          </span>
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Passwordless, multi-factor, and biometric authentication — designed
          to scale securely with your application.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button size="lg" className="gap-2 cursor-pointer">
            Get Started <ArrowRight size={18} />
          </Button>

          <Button size="lg" variant="outline" className="cursor-pointer">
            View Docs
          </Button>
        </div>
      </div>
    </section>
  )
}
