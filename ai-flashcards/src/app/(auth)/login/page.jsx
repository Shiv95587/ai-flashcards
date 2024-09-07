import { SignIn } from "@clerk/clerk-react";
import { SignedOut } from "@clerk/nextjs";

export default function Login() {
  return (
    <SignedOut>
      <div className="flex flex-row justify-center items-center h-screen">
        <SignIn routing="hash" />
      </div>
    </SignedOut>
  );
}
