import LoginCard from "./LoginCard"

export default function FuturisticLogin() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      
      {/* Glow works in both themes */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_60%)]" />

      <LoginCard />
    </div>
  )
}
