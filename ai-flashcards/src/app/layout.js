export const metadata = {
  title: "AI Flashcards",
  description: "Generated by create next app",
};

import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import Link from "next/link";
import { customAppearance } from "./styles/customAppearance";
import NavBar from "@/components/NavBar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <SignedOut>
            <div className="flex justify-center h-screen items-center">
              <SignIn routing="hash" />
            </div>
          </SignedOut>
          <SignedIn>
            <NavBar />
            {children}
          </SignedIn>
          {/* <div>
              <NavBar />
            </div> */}
          {/* <div className="flex flex-row justify-center items-center h-screen ">
            <SignIn routing="hash" />
          </div> */}
        </ClerkProvider>
      </body>
    </html>
  );
}
