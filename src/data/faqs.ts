export type FAQ = { id: string; question: string; answer: string; };

export const faqs: FAQ[] = [
  {
    id: "checkin",
    question: "What time is check‑in?",
    answer: "Rooms are available from 3 pm. Let us know if you\\u2019ll arrive earlier and we\\u2019ll do our best to accommodate you.",
  },
  {
    id: "checkout",
    question: "What time is check‑out?",
    answer: "Check‑out is by 11 am, but feel free to linger over breakfast.",
  },
  {
    id: "parking",
    question: "Is parking available?",
    answer: "Yes, we have limited on‑site parking. Please let us know ahead of time to reserve your space.",
  },
  {
    id: "children",
    question: "Do you welcome children?",
    answer: "We do — extra beds and travel cots can be arranged in some rooms. Please contact us to discuss your requirements.",
  },
  {
    id: "pets",
    question: "Do you allow pets?",
    answer: "Unfortunately, we cannot accommodate pets in our rooms.",
  },
];
