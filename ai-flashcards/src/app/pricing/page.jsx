"use client";
import SinglePaymentPlan from "@/components/SinglePaymentPlan";
import Script from "next/script";
import { useState } from "react";
export default function Payments() {
  const [currentPlan, setCurrentPlan] = useState(1);
  return (
    <div className="w-full bg-gray-100 pb-2">
      <Script src="https://js.stripe.com/v3/"></Script>
      <div className="container mx-auto h-screen flex flex-col justify-center rounded-lg ">
        <div className="grid lg:grid-cols-3 max-md:grid-cols-1 lg:gap-0 max-md:gap-4 justify-center lg:mx-16 max-lg:mx-2 overflow-y-auto gap-4">
          <SinglePaymentPlan
            planName={"Basic Plan"}
            cost={0}
            features={"Up to 500 responses per month"}
            description={
              "Start exploring the power of flashcards with our free Basic Plan. Perfect for casual users who want to get a feel for the app’s capabilities. Enjoy essential features without any cost and upgrade anytime if you need more responses."
            }
            itemKey={1}
            currentPlan={currentPlan}
          />
          <SinglePaymentPlan
            planName={"Standard Plan"}
            cost={15}
            features={"Up to 2,000 responses per month"}
            description={
              "Step up your flashcard game with the Standard Plan. Ideal for regular users who need a higher volume of responses. Enjoy a seamless experience with more flexibility and capabilities to match your learning needs."
            }
            itemKey={2}
            currentPlan={currentPlan}
          />
          <SinglePaymentPlan
            planName={"Premium Plan"}
            cost={150}
            features={" Up to 5,000 responses per month"}
            description={
              "Unlock unlimited potential with our Premium Plan. Get lifetime access with a one-time payment and enjoy the highest response limits available. Perfect for dedicated learners and professionals, this plan offers a robust solution without recurring costs."
            }
            itemKey={3}
            currentPlan={currentPlan}
          />
        </div>
      </div>
    </div>
  );
}
