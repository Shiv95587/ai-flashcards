export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Choose Your Plan
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {["Basic Plan", "Pro Plan", "Premium Plan"].map((plan, index) => (
            <div
              key={index}
              className="pricing-card flex flex-col gap-8 p-6 border-y-2 bg-white rounded-lg border-x-2 transition-transform duration-300 ease-in-out hover:scale-105 w-full md:w-1/3"
            >
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
                {plan}
              </h1>
              <div className="flex flex-row gap-2 items-end">
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
                  {plan === "Basic Plan"
                    ? "Free"
                    : plan === "Pro Plan"
                    ? "$9.99"
                    : "$99.99"}
                </h1>
                <span className="font-medium text-base md:text-xl text-gray-700">
                  {plan === "Basic Plan"
                    ? ""
                    : plan === "Pro Plan"
                    ? "/month"
                    : "/lifetime"}
                </span>
              </div>
              <p className="text-base md:text-lg font-medium tracking-wide text-gray-700">
                {plan === "Basic Plan"
                  ? "Access to basic flashcards with limited features."
                  : plan === "Pro Plan"
                  ? "Includes advanced features and priority support."
                  : "All features included with lifetime access and exclusive benefits."}
              </p>
              <p className="text-sm md:text-md tracking-wide font-medium text-gray-700">
                {plan === "Basic Plan"
                  ? "Perfect for casual learners who need basic functionality."
                  : plan === "Pro Plan"
                  ? "Ideal for users needing more advanced features and regular updates."
                  : "Best for dedicated learners looking for a long-term solution with full access."}
              </p>
              <button className="cta-button w-full text-lg font-semibold p-2 rounded-lg">
                Buy Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
