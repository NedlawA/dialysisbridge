export const module10ReadingContent = {
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
    {
  heading: "Assessment and Cannulation",
  content: `Dialysis technicians are responsible for assessing the vascular access before each treatment. This includes checking for a thrill (a vibration felt over the access) and a bruit (a whooshing sound heard with a stethoscope). Proper cannulation technique is essential to prevent damage to the access and ensure effective dialysis. The rope ladder technique, where new sites are used for each session, can help prolong the life of the access. Alternatively, the buttonhole technique uses the same site for each session, which can reduce pain but may increase infection risk. Regular monitoring and care can help maintain access function and improve patient outcomes.`,
},
    {
      heading: "Caring for a Vascular Access",
      content: `Proper care of vascular access is crucial to prevent complications. Patients should be instructed to:
- Keep the access site clean and dry.
- Avoid heavy lifting or pressure on the access arm.
- Monitor for signs of infection, such as redness, swelling, or discharge.
- Report any changes in the access, such as decreased blood flow or pain, to their healthcare provider immediately.`,
},
  ],
};
export const module10FillInTheBlanks = [
  {
    id: "m10fib1",
    sentence: "The three main types of vascular access are the AV fistula, the AV graft, and the ___.",
    blank: "central venous catheter",
    options: ["central venous catheter", "artery", "dialyzer", "blood pump"],
  },
  {
    id: "m10fib2",
    sentence: "An AV fistula is created by connecting an ___ directly to a vein.",
    blank: "artery",
    options: ["artery", "catheter", "graft", "needle"],
  },
  {
    id: "m10fib3",
    sentence: "The AV fistula is the ___ type of access because it has the lowest risk of infection.",
    blank: "preferred",
    options: ["preferred", "temporary", "weakest", "slowest"],
  },
  {
    id: "m10fib4",
    sentence: "An AV graft uses a soft, flexible ___ placed under the skin.",
    blank: "tube",
    options: ["tube", "needle", "clamp", "filter"],
  },
  {
    id: "m10fib5",
    sentence: "Compared with a fistula, an AV graft has a higher chance of ___ or infection.",
    blank: "clotting",
    options: ["clotting", "maturing", "healing", "measuring"],
  },
  {
    id: "m10fib6",
    sentence: "A central venous catheter is placed into a large ___, usually in the neck or chest.",
    blank: "vein",
    options: ["vein", "artery", "fistula", "graft"],
  },
  {
    id: "m10fib7",
    sentence: "Catheters allow ___ access for dialysis but have the highest risk of infection.",
    blank: "immediate",
    options: ["immediate", "delayed", "limited", "slow"],
  },
  {
    id: "m10fib8",
    sentence: "A catheter is considered a ___ option until a fistula or graft is ready.",
    blank: "temporary",
    options: ["temporary", "permanent", "preferred", "surgical"],
  },
];
export const module10VocabularyPairs = [
  { term: "Cannulation", definition: "The process of inserting a cannula into a blood vessel" },
  { term: "Rope Ladder Technique", definition: "A method where a new sites are created for each dialysis session" },
  { term: "Arteriovenous Fistula (AVF)", definition: "A direct connection between an artery and a vein" },
  { term: "Venous Access Device", definition: "Any device used for access to veins, such as catheters or grafts" },
  { term: "Arteriovenous Graft (AVG)", definition: "A synthetic tube used to connect a vein and an artery" },
  { term: "Buttonhole Technique", definition: "A method where the same sites is used for each dialysis session" },
  { term: "Bruit", definition: "A whooshing sound heard over a vascular access site" },
  { term: "Endovascular AVF", definition: "A type of AVF that is created through a minimally invasive procedure" },
  { term: "Thrombosis", definition: "The formation of a blood clot in a graft or fistula" },
  { term: "Aneurysm", definition: "An abnormal bulging or ballooning of a blood vessel wall" },
  { term: "Palpate", definition: "To feel or touch a body part to assess its condition" },
  { term: "Stenosis", definition: "Narrowing of a blood vessel" },
];

export const module10ComprehensionQuestions = [
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
  1: [
    {
      title: "National Kidney Foundation – Vascular Access for Hemodialysis",
      url: "https://www.kidney.org/kidney-topics/hemodialysis-access",
      description: "Clear explanations of fistulas, grafts, and catheters, including how each access works and how to care for them.",
    },
    {
      title: "DaVita – Understanding Your Vascular Access",
      url: "https://davita.com/treatment-options/articles/planning-for-a-vascular-access/",
      description: "Patient-friendly information on access types, benefits, risks, and everyday care tips.",
    },
    {
      title: "CDC – Hemodialysis Safety: Catheter Care",
      url: "https://www.cdc.gov/dialysis-safety/about/",
      description: "Guidance on preventing infections and staying safe when using a central venous catheter.",
    },
  ],
};
