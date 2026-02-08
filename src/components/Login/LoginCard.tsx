import { Card,CardContent } from "../ui/card"
import LoginHeader from "./LoginHeader"
import LoginForm from "./LoginForm"
import AuthDivider from "./AuthDivider"
import SocialLoginButtons from "./SocialLoginButtons"

export default function LoginCard() {
  return (
    <Card className="relative w-full max-w-md bg-card border-border backdrop-blur">
      <CardContent className="space-y-6 py-8">
        <LoginHeader />
        <LoginForm />
        <AuthDivider />
        <SocialLoginButtons />

        <p className="text-center text-sm text-muted-foreground">
          Don’t have an account?{" "}
          <span className="text-primary hover:underline cursor-pointer">
            Sign up
          </span>
        </p>
      </CardContent>
    </Card>
  )
}
