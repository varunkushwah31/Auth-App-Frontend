export default function StatsSection() {
  return (
    <section className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <Stat title="99.99%" desc="Uptime Guarantee" />
        <Stat title="10M+" desc="Auth Requests / Day" />
        <Stat title="Enterprise" desc="Security Grade" />
      </div>
    </section>
  )
}

function Stat({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h3 className="text-4xl font-bold">{title}</h3>
      <p className="text-muted-foreground mt-2">{desc}</p>
    </div>
  )
}
