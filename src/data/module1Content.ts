export const readingContent = {
  title: "The Kidneys: Structure, Function & the Cardiovascular Connection",
  module: "module1",
  sections: [
    {
      heading: "What Are the Kidneys?",
      content: `The kidneys are two bean-shaped organs, each about the size of a fist, located on either side of the spine just below the rib cage. Despite their small size, they are vital organs that perform several critical functions necessary for maintaining life and health.

Each kidney contains approximately one million tiny filtering units called **nephrons**. The nephron is the functional unit of the kidney and consists of two main parts: the **glomerulus** (a cluster of tiny blood vessels) and the **tubule** (a small tube that collects fluid). Blood enters the glomerulus under pressure, where waste products, excess water, and electrolytes are filtered out. The remaining clean blood returns to circulation, while the filtered waste becomes urine.`,
    },
    {
      heading: "Functions of the Kidneys",
      content: `The kidneys perform several essential functions:

• **Waste Removal**: They filter approximately 200 liters of blood daily, removing toxins like urea, creatinine, and uric acid.
• **Fluid Balance**: They regulate the body's water content by adjusting the volume of urine produced.
• **Electrolyte Balance**: They maintain proper levels of sodium, potassium, calcium, and phosphorus.
• **Blood Pressure Regulation**: Through the renin-angiotensin-aldosterone system (RAAS), the kidneys help control blood pressure.
• **Red Blood Cell Production**: They produce erythropoietin (EPO), a hormone that stimulates red blood cell production in bone marrow.
• **Vitamin D Activation**: They convert vitamin D into its active form, which helps maintain healthy bones.`,
    },
    {
      heading: "The Cardiovascular Connection",
      content: `The kidneys and the cardiovascular system are deeply interconnected. The heart pumps about 20-25% of its total cardiac output directly to the kidneys through the renal arteries. This rich blood supply is essential for the kidneys' filtration function.

When the kidneys are damaged, this relationship becomes disrupted. Failing kidneys cannot properly regulate fluid balance, leading to fluid overload that strains the heart. They also cannot adequately control blood pressure, contributing to hypertension—the most common cardiovascular complication of kidney disease.

Understanding this kidney-heart connection is critical for dialysis technicians, as many dialysis patients also have cardiovascular conditions that must be monitored during treatment.`,
    },
  ],
};

export const fillInTheBlanks = [
  {
    id: "fib1",
    sentence: "Each kidney contains approximately one million tiny filtering units called ___.",
    blank: "nephrons",
    options: ["nephrons", "neurons", "neutrons", "nuclei"],
  },
  {
    id: "fib2",
    sentence: "The ___ is a cluster of tiny blood vessels inside the nephron where filtration begins.",
    blank: "glomerulus",
    options: ["glomerulus", "tubule", "cortex", "medulla"],
  },
  {
    id: "fib3",
    sentence: "The kidneys produce ___, a hormone that stimulates red blood cell production.",
    blank: "erythropoietin",
    options: ["erythropoietin", "insulin", "adrenaline", "melatonin"],
  },
  {
    id: "fib4",
    sentence: "The heart pumps about ___% of its cardiac output to the kidneys through the renal arteries.",
    blank: "20-25",
    options: ["20-25", "5-10", "50-60", "40-45"],
  },
  {
    id: "fib5",
    sentence: "The kidneys help control blood pressure through the ___-angiotensin-aldosterone system.",
    blank: "renin",
    options: ["renin", "pepsin", "trypsin", "lipase"],
  },
];

export const vocabularyPairs = [
  { term: "Nephron", definition: "The functional filtering unit of the kidney" },
  { term: "Glomerulus", definition: "A cluster of tiny blood vessels where blood filtration begins" },
  { term: "Erythropoietin", definition: "A hormone that stimulates red blood cell production" },
  { term: "Urea", definition: "A waste product formed from protein breakdown" },
  { term: "Creatinine", definition: "A waste product from normal muscle metabolism" },
  { term: "RAAS", definition: "A system that helps regulate blood pressure and fluid balance" },
  { term: "Renal Artery", definition: "The blood vessel that carries blood to the kidney" },
  { term: "Electrolytes", definition: "Minerals like sodium and potassium that carry electrical charges" },
];

export const comprehensionQuestions = [
  {
    id: "q1",
    question: "Which of the following is NOT a function of the kidneys?",
    options: [
      "Filtering waste products from the blood",
      "Producing digestive enzymes",
      "Regulating blood pressure",
      "Activating vitamin D",
    ],
    correctIndex: 1,
    explanation: "The kidneys do not produce digestive enzymes. That is a function of the pancreas and other digestive organs.",
  },
  {
    id: "q2",
    question: "Why is the cardiovascular system closely linked to kidney function?",
    options: [
      "The kidneys are located inside the heart",
      "The heart pumps 20-25% of its output to the kidneys for filtration",
      "The kidneys pump blood throughout the body",
      "The cardiovascular system has no connection to kidney function",
    ],
    correctIndex: 1,
    explanation: "The heart sends a large portion (20-25%) of its cardiac output to the kidneys through the renal arteries, making them highly dependent on cardiovascular health.",
  },
  {
    id: "q3",
    question: "What happens when the kidneys can no longer properly regulate fluid balance?",
    options: [
      "The patient loses weight rapidly",
      "The body produces more vitamin D",
      "Fluid overload occurs, which strains the heart",
      "Blood pressure decreases significantly",
    ],
    correctIndex: 2,
    explanation: "When kidneys fail to regulate fluids, excess fluid builds up in the body (fluid overload), which puts extra strain on the heart and can lead to heart failure.",
  },
  {
    id: "q4",
    question: "How many liters of blood do the kidneys filter approximately per day?",
    options: ["50 liters", "100 liters", "200 liters", "500 liters"],
    correctIndex: 2,
    explanation: "The kidneys filter approximately 200 liters of blood daily, an impressive feat for organs that are only about the size of a fist.",
  },
  {
    id: "q5",
    question: "What is the role of critical thinking in a dialysis technician's work?",
    options: [
      "It is not relevant to dialysis care",
      "It helps technicians follow instructions without questioning",
      "It enables technicians to assess situations, identify problems, and make informed decisions",
      "It only applies to administrative tasks",
    ],
    correctIndex: 2,
    explanation: "Critical thinking is essential for dialysis technicians to evaluate patient conditions, recognize complications, and make informed decisions during treatment.",
  },
];

export const moduleResources: Record<
  number,
  { title: string; url: string; description?: string }[]
> = {
  1: [
    {
      title: "Khan Academy – Kidney Function and Anatomy",
      url: "https://youtu.be/ctGkLYuUCvU?si=_0b-DeHC9nTzMAME",
      description: "A short video overview of kidney function and anatomy.",
    },
    {
      title: "Get Body Smart - Kidney Anatomy",
      url: "https://www.getbodysmart.com/urinary-system/kidney-external-anatomy/",
      description: "An illustrated guide to kidney anatomy and function.",
    },
  ],
};
