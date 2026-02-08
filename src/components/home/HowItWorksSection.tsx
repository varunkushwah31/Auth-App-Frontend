export default function HowItWorksSection() {
  return (
    <section className="
      py-28
      bg-muted/40
      dark:bg-zinc-950
      border-y border-border
    ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">How It Works</h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          <Step number="01" title="Integrate SDK" />
          <Step number="02" title="Configure Policies" />
          <Step number="03" title="Authenticate Users" />
        </div>
      </div>
    </section>
  )
}

function Step({ number, title }: { number: string; title: string }) {
  return (
    <div className="text-center">
      <div className="text-5xl font-bold text-indigo-500">{number}</div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
    </div>
  )
}
