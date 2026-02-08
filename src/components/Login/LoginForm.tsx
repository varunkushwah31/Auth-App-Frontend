import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

export default function LoginForm() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="••••••••" />
      </div>

      <Button className="w-full">
        Sign In
      </Button>
    </form>
  )
}
