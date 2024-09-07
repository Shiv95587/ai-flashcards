export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Choose Your Plan
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <ul className="pricing-card flex flex-col gap-8 p-6 border-y-2 bg-white rounded-lg border-x-2 transition-transform duration-300 ease-in-out hover:scale-105 w-full md:w-1/3">
            <li>
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Basic Plan
              </h1>
            </li>
            <li className="flex flex-row gap-2 items-end">
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
                Free
              </h1>
            </li>
            <li className="mb-4">
              <p className="text-base md:text-lg font-medium tracking-wide text-gray-700">
                Access to basic flashcards with limited features.
              </p>
            </li>
            <li>
              <p className="text-sm md:text-md tracking-wide font-medium text-gray-700">
                Perfect for casual learners who need basic functionality.
              </p>
            </li>
            <li className="flex flex-row justify-center items-center h-full">
              <button className="cta-button w-full text-lg font-semibold p-1 rounded-lg">
                Buy Plan
              </button>
            </li>
          </ul>

          <ul className="pricing-card flex flex-col gap-8 p-6 border-y-2 bg-white rounded-lg border-x-2 transition-transform duration-300 ease-in-out hover:scale-105 w-full md:w-1/3">
            <li>
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Pro Plan
              </h1>
            </li>
            <li className="flex flex-row gap-2 items-end">
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
                $9.99
              </h1>
              <span className="font-medium text-base md:text-xl text-gray-700">
                /month
              </span>
            </li>
            <li className="mb-4">
              <p className="text-base md:text-lg font-medium tracking-wide text-gray-700">
                Includes advanced features and priority support.
              </p>
            </li>
            <li>
              <p className="text-sm md:text-md tracking-wide font-medium text-gray-700">
                Ideal for users needing more advanced features and regular
                updates.
              </p>
            </li>
            <li className="flex flex-row justify-center items-center h-full">
              <button className="cta-button w-full text-lg font-semibold p-1 rounded-lg">
                Buy Plan
              </button>
            </li>
          </ul>

          <ul className="pricing-card flex flex-col gap-8 p-6 border-y-2 bg-white rounded-lg border-x-2 transition-transform duration-300 ease-in-out hover:scale-105 w-full md:w-1/3">
            <li>
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Premium Plan
              </h1>
            </li>
            <li className="flex flex-row gap-2 items-end">
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
                $99.99
              </h1>
              <span className="font-medium text-base md:text-xl text-gray-700">
                /lifetime
              </span>
            </li>
            <li className="mb-4">
              <p className="text-base md:text-lg font-medium tracking-wide text-gray-700">
                All features included with lifetime access and exclusive
                benefits.
              </p>
            </li>
            <li>
              <p className="text-sm md:text-md tracking-wide font-medium text-gray-700">
                Best for dedicated learners looking for a long-term solution
                with full access.
              </p>
            </li>
            <li className="flex flex-row justify-center items-center h-full">
              <button className="cta-button w-full text-lg font-semibold p-1 rounded-lg">
                Buy Plan
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
