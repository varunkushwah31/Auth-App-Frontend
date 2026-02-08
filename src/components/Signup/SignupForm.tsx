import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

export default function SignupForm() {
  return (
    <form className="space-y-4">
      
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="John Doe"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
        />
      </div>

      <Button className="w-full">
        Create Account
      </Button>
    </form>
  )
}
