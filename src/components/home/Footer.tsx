export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-muted-foreground text-sm">
      © {new Date().getFullYear()} AuthX. All rights reserved.
    </footer>
  )
}
