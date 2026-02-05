"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="group rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:border-teal/20 hover:shadow-lg hover:shadow-teal/5"
        >
          <button
            onClick={() => toggle(index)}
            className="flex w-full items-center justify-between gap-4 p-6 text-left"
          >
            <span className="text-base font-semibold text-foreground transition-colors duration-300 group-hover:text-teal">
              {item.question}
            </span>
            <div
              className={`flex size-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                openIndex === index
                  ? "bg-accent text-white rotate-180"
                  : "bg-teal-light text-teal group-hover:bg-teal group-hover:text-white"
              }`}
            >
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </button>

          <div
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              maxHeight: openIndex === index ? "500px" : "0px",
              opacity: openIndex === index ? 1 : 0,
            }}
          >
            <div className="border-t border-gray-100 px-6 pb-6 pt-4">
              <p className="text-sm leading-relaxed text-gray-600">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
