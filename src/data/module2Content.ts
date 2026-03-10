export const module2ReadingContent = {
  title: "Text Analysis & The Role of the Dialysis Technician",
  sections: [
    {
      heading: "Understanding Different Types of Texts",
      content: `In healthcare education, you will encounter many different types of texts. Learning to identify and analyze these texts is a critical skill that will help you throughout your career as a dialysis technician.

**Informational texts** present facts and data. Examples include patient charts, lab reports, and medical reference guides. These texts use headings, subheadings, bold terms, and bullet points to organize information clearly.

**Procedural texts** provide step-by-step instructions. In dialysis, you will read procedural texts when learning how to set up a dialysis machine, initiate treatment, or respond to an emergency. These texts use numbered steps, warnings, and diagrams.

**Persuasive texts** aim to convince the reader of a particular viewpoint. You may encounter these in public health campaigns encouraging patients to follow treatment plans or in research articles arguing for a specific treatment approach.

**Narrative texts** tell a story or describe events in sequence. Patient case studies are a form of narrative text commonly used in medical education to illustrate real-world scenarios.`,
    },
    {
      heading: "Text Features and Structures",
      content: `Recognizing text features helps you navigate and comprehend complex medical documents more efficiently.

• **Headings and Subheadings**: Organize content into sections and signal topic changes. In a dialysis manual, headings might include "Pre-Treatment Setup," "During Treatment Monitoring," and "Post-Treatment Procedures."
• **Bold and Italicized Terms**: Highlight key vocabulary or important concepts. When you see a bolded term like **hemodialysis**, it signals a word you should know and understand.
• **Tables and Charts**: Present data in an organized visual format. Lab result charts showing BUN, creatinine, and potassium levels are essential reading for dialysis technicians.
• **Diagrams and Illustrations**: Visual representations of anatomy, equipment, or processes. A diagram of a dialysis circuit shows how blood flows from the patient through the dialyzer and back.
• **Captions and Labels**: Provide context for images and diagrams, helping you understand what you are looking at.
• **Glossaries and Indexes**: Help you locate definitions and specific topics quickly within longer reference materials.`,
    },
    {
      heading: "The Role of the Dialysis Technician",
      content: `The dialysis technician, also known as a patient care technician (PCT) or hemodialysis technician, plays a vital role in the healthcare team. They work under the supervision of registered nurses and nephrologists to provide life-sustaining treatment to patients with kidney failure.

**Core Responsibilities:**

• **Machine Setup and Operation**: Preparing the dialysis machine before each treatment, including priming the dialyzer and bloodlines, setting prescribed treatment parameters, and ensuring all equipment is functioning properly.
• **Patient Preparation**: Greeting patients, taking vital signs (blood pressure, pulse, temperature, weight), and preparing the vascular access site for cannulation.
• **Cannulation**: Inserting needles into the patient's arteriovenous (AV) fistula or graft to connect them to the dialysis machine. This requires skill, precision, and a steady hand.
• **Treatment Monitoring**: Continuously observing the patient and machine during the 3-4 hour treatment session. Technicians monitor blood pressure, flow rates, and watch for signs of complications such as hypotension, muscle cramps, or clotting.
• **Post-Treatment Care**: Removing needles, applying pressure to the access site, recording final vital signs and weight, and documenting the treatment in the patient's medical record.
• **Infection Control**: Following strict protocols to prevent the spread of infections, including proper hand hygiene, wearing personal protective equipment (PPE), and disinfecting equipment and surfaces.
• **Water Treatment**: Monitoring the water purification system that produces the ultrapure water used to make dialysate, the cleaning solution used during treatment.`,
    },
    {
      heading: "Reading Medical Texts as a Dialysis Technician",
      content: `As a dialysis technician, you will regularly read and interpret several types of medical documents:

**Patient Medical Records**: These contain the patient's medical history, current medications, allergies, treatment orders, and progress notes. You must be able to locate and understand relevant information quickly.

**Treatment Orders**: Written by the nephrologist, these specify the type of dialysis, treatment duration, blood flow rate, dialysate composition, target weight (dry weight), and any special instructions.

**Policy and Procedure Manuals**: These outline the standard operating procedures for your dialysis facility, including emergency protocols, infection control procedures, and equipment maintenance schedules.

**Lab Reports**: Understanding lab values is essential. Key tests include BUN (blood urea nitrogen), creatinine, Kt/V (a measure of dialysis adequacy), hemoglobin, potassium, phosphorus, and calcium levels.

Being able to analyze, identify, and differentiate between these text types—and to recognize their unique features and structures—is fundamental to performing your job safely and effectively.`,
    },
  ],
  module: "module2",
};

export const module2FillInTheBlanks = [
  {
    id: "m2fib1",
    sentence: "A dialysis technician works under the supervision of registered nurses and ___.",
    blank: "nephrologists",
    options: ["nephrologists", "cardiologists", "pharmacists", "radiologists"],
  },
  {
    id: "m2fib2",
    sentence: "___ texts provide step-by-step instructions, such as how to set up a dialysis machine.",
    blank: "Procedural",
    options: ["Procedural", "Narrative", "Persuasive", "Descriptive"],
  },
  {
    id: "m2fib3",
    sentence: "Inserting needles into a patient's AV fistula or graft is called ___.",
    blank: "cannulation",
    options: ["cannulation", "catheterization", "intubation", "irrigation"],
  },
  {
    id: "m2fib4",
    sentence: "The cleaning solution used during dialysis treatment is called ___.",
    blank: "dialysate",
    options: ["dialysate", "saline", "plasma", "albumin"],
  },
  {
    id: "m2fib5",
    sentence: "Kt/V is a measure of dialysis ___.",
    blank: "adequacy",
    options: ["adequacy", "frequency", "pressure", "temperature"],
  },
  {
    id: "m2fib6",
    sentence: "___ texts present facts and data, such as patient charts and lab reports.",
    blank: "Informational",
    options: ["Informational", "Persuasive", "Narrative", "Fictional"],
  },
];

export const module2VocabularyPairs = [
  { term: "Hemodialysis", definition: "A treatment that filters blood through a machine to remove waste and excess fluid" },
  { term: "Cannulation", definition: "The process of inserting needles into a vascular access for dialysis" },
  { term: "Dialysate", definition: "The cleansing solution used in the dialysis machine" },
  { term: "AV Fistula", definition: "A surgically created connection between an artery and vein for dialysis access" },
  { term: "Nephrologist", definition: "A doctor who specializes in kidney diseases and their treatment" },
  { term: "BUN", definition: "Blood urea nitrogen — a waste product measured to assess kidney function" },
  { term: "Kt/V", definition: "A formula used to measure the adequacy of a dialysis treatment" },
  { term: "PCT", definition: "Patient care technician — another title for a dialysis technician" },
  { term: "Dialyzer", definition: "The filter in a dialysis machine where blood is cleaned" },
  { term: "PPE", definition: "Personal protective equipment worn to prevent infection transmission" },
];

export const module2ComprehensionQuestions = [
  {
    id: "m2q1",
    question: "Which type of text would you most likely find in a dialysis machine setup guide?",
    options: [
      "Narrative text",
      "Persuasive text",
      "Procedural text",
      "Poetic text",
    ],
    correctIndex: 2,
    explanation: "A setup guide provides step-by-step instructions, which is the defining feature of procedural text.",
  },
  {
    id: "m2q2",
    question: "What is the primary role of a dialysis technician during a treatment session?",
    options: [
      "Prescribing medications to the patient",
      "Performing surgery on the vascular access",
      "Monitoring the patient and machine for complications",
      "Diagnosing the patient's kidney disease",
    ],
    correctIndex: 2,
    explanation: "During treatment, the technician's primary role is continuous monitoring of both the patient's condition and the machine's operation, watching for signs of complications.",
  },
  {
    id: "m2q3",
    question: "Which text feature would be MOST helpful when looking up an unfamiliar medical term in a reference manual?",
    options: [
      "Headings and subheadings",
      "Diagrams and illustrations",
      "Glossary and index",
      "Captions and labels",
    ],
    correctIndex: 2,
    explanation: "A glossary provides definitions of terms, and an index helps you locate specific topics — both are the most efficient tools for finding the meaning of an unfamiliar term.",
  },
  {
    id: "m2q4",
    question: "Why is infection control a critical responsibility for dialysis technicians?",
    options: [
      "It is only required during machine setup",
      "Dialysis patients have compromised immune systems and are at high risk for infections",
      "It only applies to new patients",
      "Infection control is handled entirely by nurses",
    ],
    correctIndex: 1,
    explanation: "Dialysis patients often have weakened immune systems, and the procedure involves direct blood contact, making strict infection control protocols essential to prevent potentially life-threatening infections.",
  },
  {
    id: "m2q5",
    question: "What information would you find in a treatment order from a nephrologist?",
    options: [
      "The patient's insurance information",
      "The facility's visiting hours",
      "Treatment duration, blood flow rate, and dialysate composition",
      "The technician's work schedule",
    ],
    correctIndex: 2,
    explanation: "Treatment orders from the nephrologist specify the clinical parameters for dialysis, including duration, flow rates, dialysate composition, and target weight.",
  },
];
