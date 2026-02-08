import { Button } from "../ui/button"
import { Github } from "lucide-react"

export default function SocialLoginButtons() {
  return (
    <div className="grid gap-3">
      <Button variant="outline" className="gap-2">
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="h-5 w-5"
        />
        Continue with Google
      </Button>

      <Button variant="outline" className="gap-2">
        <Github size={18} />
        Continue with GitHub
      </Button>
    </div>
  )
}
