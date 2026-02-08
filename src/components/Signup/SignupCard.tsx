import { Card,CardContent } from "../ui/card"
import SignupHeader from "./SignupHeader"
import SignupForm from "./SignupForm"
import AuthDivider from "./AuthDivider"
import SocialSignupButtons from "./SocialSignupButtons"

export default function SignupCard() {
  return (
    <Card className="relative w-full max-w-md bg-card border-border backdrop-blur">
      <CardContent className="space-y-6 py-8">
        <SignupHeader />
        <SignupForm />
        <AuthDivider />
        <SocialSignupButtons />

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <span className="text-primary hover:underline cursor-pointer">
            Sign in
          </span>
        </p>
      </CardContent>
    </Card>
  )
}
