import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Create a new product
      const product = await stripe.products.create({
        name: "Starter Subscription",
        description: "$12/Month subscription",
      });

      // Create a price for the product
      const price = await stripe.prices.create({
        unit_amount: 1200, // Amount in cents (e.g., $12.00)
        currency: "usd",
        recurring: {
          interval: "month",
        },
        product: product.id, // Associate this price with the product created
      });

      // Respond with the product and price IDs
      res.status(200).json({
        productId: product.id,
        priceId: price.id,
      });
    } catch (error) {
      console.error("Error creating product or price:", error);
      res.status(500).json({ error: "Error creating product or price" });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
