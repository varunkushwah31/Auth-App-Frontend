import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import { NavLink } from "react-router"

export default function FinalCTASection() {
  return (
    <section className="py-32 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-5xl font-bold">Ready to Secure Your App?</h2>

        <p className="mt-6 text-zinc-400">
          Start building with next-gen authentication today.
        </p>

        <NavLink to="/signup">
          <Button size="lg" className="mt-10 gap-2">
            Create Free Account <ArrowRight size={18} />
          </Button>
        </NavLink>
      </div>
    </section>
  )
}
