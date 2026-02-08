export default function AuthDivider() {
  return (
    <div className="relative text-center">
      <span className="absolute inset-x-0 top-1/2 h-px bg-border" />
      <span className="relative bg-card px-3 text-xs text-muted-foreground">
        OR CONTINUE WITH
      </span>
    </div>
  )
}
