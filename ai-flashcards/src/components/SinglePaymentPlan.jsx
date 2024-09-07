export default function SinglePaymentPlan({
  planName,
  cost,
  features,
  description,
  itemKey,
  currentPlan,
}) {
  console.log(itemKey);

  return (
    <ul
      className={`flex flex-col gap-8 p-6 border-y-2 flex-grow-0 bg-slate-50 ${
        itemKey === 1
          ? "rounded-l-lg border-x-2"
          : itemKey === 3
          ? "rounded-r-lg border-x-2"
          : ""
      } 
      ${currentPlan === itemKey ? "bg-custom-gradient" : ""}
      max-lg:rounded-lg`}
    >
      <li>
        <h1
          className={`text-3xl font-semibold ${
            currentPlan == itemKey ? "text-slate-50" : "text-gray-900"
          }`}
        >
          {planName}
        </h1>
      </li>
      <li className={`flex flex-row gap-2 items-end `}>
        <h1
          className={`text-4xl font-semibold  ${
            currentPlan == itemKey ? "text-slate-50" : "text-gray-900"
          }`}
        >
          {cost === 0 ? "Free" : `$${cost}`}
        </h1>
        {cost !== 0 && (
          <span
            className={`font-medium text-xl  ${
              currentPlan == itemKey ? "text-slate-100" : "text-slate-700 "
            }`}
          >
            {itemKey === 3 ? "/lifetime" : "/month"}
          </span>
        )}
      </li>
      <li className="mb-4">
        <p
          className={`text-lg  font-medium tracking-wide ${
            currentPlan == itemKey ? "text-white" : "text-slate-700 "
          }`}
        >
          {/* text-gray-800 */}
          {features}
        </p>
      </li>
      <li>
        <p
          className={`text-md tracking-wide font-medium ${
            currentPlan == itemKey ? "text-white" : "text-slate-700 "
          }`}
        >
          {description}
        </p>
      </li>

      {itemKey !== 1 && itemKey !== currentPlan && (
        <li className="flex flex-row justify-center items-center h-full">
          <button
            className={`mt-auto hover:transition-all hover:bg-blue-600 ${
              currentPlan == itemKey
                ? "bg-white text-gray-700"
                : "bg-blue-500 text-slate-700"
            } w-full text-white text-xl font-semibold p-1 rounded-lg
           `}
          >
            Buy Plan
          </button>
        </li>
      )}
    </ul>
  );
}
