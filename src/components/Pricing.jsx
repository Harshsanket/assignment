import { Cpu, MemoryStick, Microchip, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const [currency, setCurrency] = useState("EUR");
  const exchangeRate = 1.08;

  const plans = [
    {
      name: "1x NVIDIA L40S GPU",
      priceEUR: 2.4,
      features: [
        { icon: Cpu, text: "16vCPU memory" },
        { icon: Microchip, text: "48GB GPU memory" },
        { icon: MemoryStick, text: "232GB RAM" },
        { icon: Sparkles, text: "48-21B parameters" },
      ],
    },
    {
      name: "2x NVIDIA L40S GPU",
      priceEUR: 9.3,
      features: [
        { icon: Cpu, text: "96GB GPU memory" },
        { icon: Microchip, text: "32vCPU" },
        { icon: MemoryStick, text: "464GB RAM" },
        { icon: Sparkles, text: "218-418 parameters" },
      ],
    },
    {
      name: "2x NVIDIA L40S GPU",
      priceEUR: 4.7,
      features: [
        { icon: Cpu, text: "192GB GPU memory " },
        { icon: Microchip, text: "64vCPU " },
        { icon: MemoryStick, text: "928GB RAM" },
        { icon: Sparkles, text: "418-700 parameters" },
      ],
    },
  ];

  const getPrice = (priceEUR) => {
    return currency === "EUR" ? priceEUR : (priceEUR * exchangeRate).toFixed(2);
  };

  return (
    <div
      className="bg-slate-950 text-white"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <span className="w-4xl m-auto text-white text-5xl font-medium title-font mb-2">
            Use dedicated GPUs to scale custom models and production apps
          </span>

          <div className="flex mx-auto border-2 border-indigo-500 rounded-full overflow-hidden mt-6">
            <button
              onClick={() => setCurrency("EUR")}
              className={`py-1 px-4 focus:outline-none transition-colors hover:cursor-pointer ${
                currency === "EUR" ? "bg-indigo-500 text-white" : "text-white"
              }`}
            >
              €
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`py-1 px-4 focus:outline-none transition-colors hover:cursor-pointer ${
                currency === "USD" ? "bg-indigo-500 text-white" : "text-white"
              }`}
            >
              $
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <div key={index} className="p-4 w-full">
              <div className="h-full p-6 rounded-3xl border-2 border-gray-600 flex flex-col">
                <span className="text-base m-auto mb-1 font-medium">
                  {plan.name}
                </span>
                <div className="text-5xl mb-10 items-center m-auto text-white">
                  <span>
                    {currency === "EUR" ? "€" : "$"}
                    {getPrice(plan.priceEUR)}
                  </span>
                  <span className="text-lg ml-1 text-gray-500">/month</span>
                </div>
                {plan.features.map((feature, featureIndex) => (
                  <p
                    key={featureIndex}
                    className="flex items-center text-gray-600 mb-2"
                  >
                    <feature.icon />
                    <span className="ml-2">{feature.text}</span>
                  </p>
                ))}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center mt-10 hover:bg-orange-400 text-white bg-slate-800 border-0 py-2 px-4 m-auto justify-center rounded-full w-48 focus:outline-none"
                >
                  Order now
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
