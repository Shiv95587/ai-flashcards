// src/pages/_app.js
import { ClerkProvider } from "@clerk/nextjs";
import "../styles/globals.css";

const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
