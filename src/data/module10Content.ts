export const module10readingContent = {
  title: "Vascular Access",
  module: "module 10",
  sections: [
    {
      heading: "Types of Vascular Access",
      content: `Vascular access is the way blood leaves and returns to the patient’s body during hemodialysis. Safe and effective treatment depends on a well‑functioning access. There are three main types of vascular access: the arteriovenous (AV) fistula, the arteriovenous (AV) graft, and the central venous catheter.`,
    },
    {
      heading: "Arteriovenous Fistula",
      content: `An AV fistula is created by connecting an artery directly to a vein. This connection makes the vein larger and stronger so it can handle repeated needle insertions. The fistula is the preferred type of access because it has the lowest risk of infection and usually lasts the longest. A fistula may take several weeks or months to mature before it can be used for dialysis.`,
    },
    {
      heading: "Arteriovenous Graft",
      content: `An AV graft is used when a patient’s veins are not suitable for a fistula. A soft, flexible tube is placed under the skin to connect an artery to a vein. The graft provides a reliable site for needle placement, but it has a higher chance of clotting or infection compared with a fistula. Most grafts can be used sooner than fistulas, some even within three days.`,
    },
    {
      heading: "Central Venous Catheter",
      content: `A central venous catheter is a plastic tube placed into a large vein, usually in the neck or chest. Catheters allow immediate access for dialysis, but they carry the highest risk of infection and other complications. Because of these risks, catheters are considered a temporary option until a fistula or graft is ready.`,
    },
  ],
};
export const module10fillInTheBlanks = [
  {
    id: "fib1",
    sentence: "The three main types of vascular access are the AV fistula, the AV graft, and the ___.",
    blank: "central venous catheter",
    options: ["central venous catheter", "artery", "dialyzer", "blood pump"],
  },
  {
    id: "fib2",
    sentence: "An AV fistula is created by connecting an ___ directly to a vein.",
    blank: "artery",
    options: ["artery", "catheter", "graft", "needle"],
  },
  {
    id: "fib3",
    sentence: "The AV fistula is the ___ type of access because it has the lowest risk of infection.",
    blank: "preferred",
    options: ["preferred", "temporary", "weakest", "slowest"],
  },
  {
    id: "fib4",
    sentence: "An AV graft uses a soft, flexible ___ placed under the skin.",
    blank: "tube",
    options: ["tube", "needle", "clamp", "filter"],
  },
  {
    id: "fib5",
    sentence: "Compared with a fistula, an AV graft has a higher chance of ___ or infection.",
    blank: "clotting",
    options: ["clotting", "maturing", "healing", "measuring"],
  },
  {
    id: "fib6",
    sentence: "A central venous catheter is placed into a large ___, usually in the neck or chest.",
    blank: "vein",
    options: ["vein", "artery", "fistula", "graft"],
  },
  {
    id: "fib7",
    sentence: "Catheters allow ___ access for dialysis but have the highest risk of infection.",
    blank: "immediate",
    options: ["immediate", "delayed", "limited", "slow"],
  },
  {
    id: "fib8",
    sentence: "A catheter is considered a ___ option until a fistula or graft is ready.",
    blank: "temporary",
    options: ["temporary", "permanent", "preferred", "surgical"],
  },
];
export const module10comprehensionQuestions = [
  {
    id: "q1",
    question: "Which type of vascular access is considered the preferred option for most patients?",
    options: ["AV fistula", "AV graft", "Central venous catheter", "Peripheral IV"],
    correctIndex: 0,
    explanation: "The AV fistula has the lowest infection risk and usually lasts the longest, making it the preferred access.",
  },
  {
    id: "q2",
    question: "Why does an AV fistula take time before it can be used for dialysis?",
    options: [
      "It must mature and become stronger",
      "It needs to be replaced first",
      "It requires daily flushing",
      "It must be connected to a catheter",
    ],
    correctIndex: 0,
    explanation: "A fistula needs weeks or months to mature so the vein can handle repeated needle insertions.",
  },
  {
    id: "q3",
    question: "What is the main purpose of the soft, flexible tube used in an AV graft?",
    options: [
      "To connect an artery to a vein",
      "To deliver medication",
      "To measure blood pressure",
      "To replace the dialysis machine",
    ],
    correctIndex: 0,
    explanation: "The graft acts as an artificial connection between an artery and a vein when a fistula is not possible.",
  },
  {
    id: "q4",
    question: "Which type of access carries the highest risk of infection?",
    options: ["AV fistula", "AV graft", "Central venous catheter", "None of the above"],
    correctIndex: 2,
    explanation: "Central venous catheters have the highest infection risk and are usually temporary.",
  },
  {
    id: "q5",
    question: "Why are central venous catheters often used only as a temporary access?",
    options: [
      "They are painful to insert",
      "They have a high risk of infection and other complications",
      "They cannot be used for dialysis",
      "They take too long to place",
    ],
    correctIndex: 1,
    explanation: "Catheters allow immediate access but come with significant infection and complication risks.",
  },
];
export const module10Resources = {
  10: [
    {
      title: "National Kidney Foundation – Vascular Access for Hemodialysis",
      url: "https://www.kidney.org/kidney-topics/vascular-access-hemodialysis",
      description: "Clear explanations of fistulas, grafts, and catheters, including how each access works and how to care for them.",
    },
    {
      title: "DaVita – Understanding Your Vascular Access",
      url: "https://www.davita.com/treatment-services/hemodialysis/vascular-access",
      description: "Patient-friendly information on access types, benefits, risks, and everyday care tips.",
    },
    {
      title: "CDC – Hemodialysis Safety: Catheter Care",
      url: "https://www.cdc.gov/dialysis/patient/index.html",
      description: "Guidance on preventing infections and staying safe when using a central venous catheter.",
    },
  ],
};
