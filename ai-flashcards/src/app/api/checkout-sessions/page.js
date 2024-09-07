const params = {
  submit_type: "subscription",
  payment_method_types: ["card"],
  line_items: [
    {
      name: name,
      amount: formatAmountForStripe(amount, CURRENCY),
      currency: CURRENCY,
      quantity: 1,
    },
  ],
  success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
  cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
};
