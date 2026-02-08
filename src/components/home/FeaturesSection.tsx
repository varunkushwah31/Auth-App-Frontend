import { Card,CardContent } from "../ui/card"
import {
  Fingerprint,
  KeyRound,
  ShieldCheck,
  Zap,
  Lock,
} from "lucide-react"

export default function FeaturesSection() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Powerful Authentication Features
        </h2>

        <p className="text-zinc-400 text-center mt-4 max-w-xl mx-auto">
          Everything you need to protect users without sacrificing UX.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature icon={<Fingerprint />} title="Biometric Login" />
          <Feature icon={<KeyRound />} title="Passwordless Auth" />
          <Feature icon={<ShieldCheck />} title="Multi-Factor Security" />
          <Feature icon={<Zap />} title="Fast Integration" />
          <Feature icon={<Lock />} title="End-to-End Encryption" />
          <Feature icon={<ShieldCheck />} title="Compliance Ready" />
        </div>
      </div>
    </section>
  )
}

function Feature({
  icon,
  title,
}: {
  icon: React.ReactNode
  title: string
}) {
  return (
    <Card className="bg-zinc-900 border-white/10">
      <CardContent className="p-6">
        <div className="mb-4 text-indigo-400">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-zinc-400">
          Secure, scalable, and developer-friendly authentication.
        </p>
      </CardContent>
    </Card>
  )
}
