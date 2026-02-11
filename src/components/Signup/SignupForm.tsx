import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import toast from "react-hot-toast"

interface registerData {
  name: string
  email: string
  password: string
}

export default function SignupForm() {
  const [data, setData] = useState<registerData>({
    name: "",
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setData((value) => ({
      ...value,
      [event.target.name]: event.target.value,
    }))
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(data)
    if(data.name.trim() === "" || data.email.trim() === "" || data.password.trim() === "") {
      toast.error("Please fill in all fields")
      return
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleFormSubmit}>
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="John Doe"
          name="name"
          value={data.name}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          name="email"
          value={data.email}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          name="password"
          value={data.password}
          onChange={handleInputChange}
        />
      </div>

      <Button className="w-full">
        Create Account
      </Button>
    </form>
  )
}
