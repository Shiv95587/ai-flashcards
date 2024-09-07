import { Stripe, loadStripe } from "@stripe/stripe-js/pure"; // pure at suffix means that stripe will be loaded until the checkout

let stripePromise = null;

// Using this approach stripe will load only on the first render of Checkout Page

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
};

export default getStripe;
