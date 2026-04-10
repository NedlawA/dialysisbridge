export const module9readingContent = {
  title: "Dialysis Blood Tests & The Dialysis Diet: What Technicians Need to Know",
  module: "module2",
  sections: [
    {
      heading: "Why Blood Tests Matter in Dialysis",
      content: `Dialysis patients rely on regular blood tests to monitor how well their treatment is working and to detect complications early. Because the kidneys can no longer filter waste effectively, blood levels of toxins, electrolytes, and nutrients can change quickly. Understanding these lab values helps dialysis technicians recognize when something is off.

Key blood tests include:
- **BUN (Blood Urea Nitrogen)**: Measures urea levels, a waste product from protein metabolism.
- **Creatinine**: Another waste product that indicates kidney function.
- **Potassium**: High levels can cause dangerous heart rhythm problems.
- **Phosphorus**: Often elevated in kidney failure and linked to bone and heart complications.
- **Hemoglobin**: Indicates anemia, which is common in dialysis patients.
- **Albumin**: A marker of nutrition and inflammation.

These tests guide treatment decisions, including dialysis adequacy, medication adjustments, and dietary recommendations.`,
    },
    {
      heading: "Understanding the Dialysis Diet",
      content: `The dialysis diet is designed to reduce the buildup of waste products and maintain safe electrolyte levels. Because dialysis cannot fully replace kidney function, patients must carefully manage what they eat and drink.

Core principles of the dialysis diet include:
• **Controlling Potassium**: Foods like bananas, oranges, potatoes, and tomatoes are high in potassium and may need to be limited.
• **Managing Phosphorus**: Dairy, nuts, beans, and whole grains contain phosphorus, which can accumulate and weaken bones.
• **Limiting Sodium**: Reduces thirst and prevents fluid overload.
• **Monitoring Fluid Intake**: Helps prevent swelling, high blood pressure, and heart strain.
• **Ensuring Adequate Protein**: Dialysis removes protein waste but also some protein itself, so patients often need more high-quality protein.

Technicians should understand these dietary guidelines to reinforce patient education and recognize when diet may be affecting lab results.`,
    },
    {
      heading: "Connecting Lab Values to Patient Care",
      content: `Blood test results and diet are closely linked. For example:
- High potassium may indicate excessive intake of high-potassium foods or missed dialysis.
- Low albumin often suggests poor nutrition or inflammation.
- High phosphorus may mean the patient is not taking phosphate binders or is eating too many phosphorus-rich foods.

Dialysis technicians play a key role in observing trends, communicating concerns to the care team, and supporting patients in understanding how their choices affect their health.`,
    },
  ],
};

export const module9fillInTheBlanks = [
  {
    id: "fib1",
    sentence: "High levels of ___ can cause dangerous heart rhythm problems in dialysis patients.",
    blank: "potassium",
    options: ["potassium", "sodium", "calcium", "glucose"],
  },
  {
    id: "fib2",
    sentence: "___ is a waste product measured in the blood to assess kidney function and dialysis adequacy.",
    blank: "creatinine",
    options: ["creatinine", "insulin", "hemoglobin", "albumin"],
  },
  {
    id: "fib3",
    sentence: "The dialysis diet often limits foods high in ___, such as dairy and nuts.",
    blank: "phosphorus",
    options: ["phosphorus", "iron", "vitamin C", "fiber"],
  },
  {
    id: "fib4",
    sentence: "Low levels of ___ may indicate poor nutrition or inflammation.",
    blank: "albumin",
    options: ["albumin", "potassium", "urea", "phosphate"],
  },
  {
    id: "fib5",
    sentence: "Dialysis patients must monitor their ___ intake to prevent fluid overload.",
    blank: "fluid",
    options: ["fluid", "protein", "sugar", "fiber"],
  },
];

export const module9vocabularyPairs = [
  { term: "BUN", definition: "A measure of urea levels in the blood" },
  { term: "Creatinine", definition: "A waste product used to assess kidney function" },
  { term: "Potassium", definition: "An electrolyte that affects heart rhythm" },
  { term: "Phosphorus", definition: "A mineral that can build up in kidney failure and harm bones" },
  { term: "Albumin", definition: "A blood protein that reflects nutrition and inflammation" },
  { term: "Phosphate Binders", definition: "Medications that reduce phosphorus absorption from food" },
  { term: "Fluid Overload", definition: "Excess fluid in the body that strains the heart and lungs" },
  { term: "Dialysis Diet", definition: "A specialized eating plan to manage electrolytes and waste buildup" },
];

export const module9comprehensionQuestions = [
  {
    id: "q1",
    question: "Which blood test is used to evaluate protein nutrition status in dialysis patients?",
    options: ["Albumin", "Potassium", "Creatinine", "BUN"],
    correctIndex: 0,
    explanation: "Albumin reflects nutritional status and inflammation, making it a key marker in dialysis care.",
  },
  {
    id: "q2",
    question: "Why must dialysis patients limit high-potassium foods?",
    options: [
      "Potassium causes dehydration",
      "High potassium can lead to dangerous heart rhythm problems",
      "Potassium increases blood sugar",
      "Potassium reduces protein levels",
    ],
    correctIndex: 1,
    explanation: "Elevated potassium can cause life-threatening arrhythmias, so intake must be controlled.",
  },
  {
    id: "q3",
    question: "What does a high phosphorus level typically indicate?",
    options: [
      "The patient is drinking too much water",
      "The patient is eating too many high-phosphorus foods or missing binders",
      "The patient has low blood pressure",
      "The patient is consuming too much protein",
    ],
    correctIndex: 1,
    explanation: "High phosphorus often results from dietary intake or not taking phosphate binders as prescribed.",
  },
  {
    id: "q4",
    question: "Which nutrient often needs to be increased in the dialysis diet?",
    options: ["Protein", "Sodium", "Phosphorus", "Sugar"],
    correctIndex: 0,
    explanation: "Dialysis removes some protein, so patients typically need more high-quality protein.",
  },
  {
    id: "q5",
    question: "How do blood tests support dialysis treatment?",
    options: [
      "They replace the need for dialysis",
      "They help monitor treatment effectiveness and detect complications",
      "They determine the patient's insurance coverage",
      "They are only used for research purposes",
    ],
    correctIndex: 1,
    explanation: "Blood tests guide clinical decisions and help ensure safe, effective dialysis care.",
  },
];

export const module9Resources = {
  2: [
    {
      title: "National Kidney Foundation – Understanding Your Lab Values",
      url: "https://www.kidney.org/kidney-topics/understanding-your-lab-values",
      description: "A patient-friendly guide to common blood tests used in kidney disease and dialysis.",
    },
    {
      title: "DaVita – The Kidney Diet",
      url: "https://www.davita.com/diet-nutrition",
      description: "Educational articles and recipes tailored to the dialysis diet.",
    },
  ],
};
