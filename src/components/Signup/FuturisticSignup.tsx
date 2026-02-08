import SignupCard from "./SignupCard"

export default function FuturisticSignup() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      
      {/* Theme-safe glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_60%)]" />

      <SignupCard />
    </div>
  )
}
