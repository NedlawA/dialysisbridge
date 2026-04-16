export interface Module {
  id: number;
  title: string;
  description: string;
  abeObjective: string;
  dialysisObjective: string;
  icon: string;
  status: "available" | "coming-soon";
}

export const modules: Module[] = [
  {
    id: 1,
    title: "Kidney Anatomy",
    description: "Exploring kidney anatomy and the connection to the cardiovascular system.",
    abeObjective: "Identify and apply critical thinking skills",
    dialysisObjective: "Discuss the anatomy and physiology of the kidney and the cardiovascular system",
    icon: "🧠",
    status: "available",
  },
  {
    id: 2,
    title: "Text Analysis & The Dialysis Technician",
    description: "Analyze different text types while learning the dialysis technician's role.",
    abeObjective: "Analyze, identify, and differentiate between different types of texts",
    dialysisObjective: "Describe the role of the dialysis technician",
    icon: "📋",
    status: "available",
  },
  {
    id: 3,
    title: "Homeostasis",
    description: "Understanding homeostasis and CKD.",
    abeObjective: "Apply successful approaches to prewriting activities",
    dialysisObjective: "Describe normal homeostasis and symptoms due to loss of homeostasis in chronic kidney disease",
    icon: "⚖️",
    status: "available",
  },
  {
    id: 4,
    title: "Patient Impact of ESKD",
    description: "Locate supporting evidence while exploring how ESKD affects patients.",
    abeObjective: "Locate evidence in a text that supports a claim",
    dialysisObjective: "Compare how ESKD affects the patient physically, psychologically, socially, and emotionally",
    icon: "💬",
    status: "available",
  },
  {
    id: 5,
    title: "Reading Strategies",
    description: "Use specialized reading strategies to understand different types of texts.",
    abeObjective: "Utilize specialized reading strategies for specific types of texts",
    dialysisObjective:"", 
    icon: "📖",
    status: "available",
  },
  {
    id: 6,
    title: "Proofreading & Charting",
    description: "Learn proofreading and charting techniques for accurate documentation.",
    abeObjective: "Employ organizational techniques, proofreading and revision activities",
    dialysisObjective: "Correctly assess the patient's vital signs and weight and identify nutritional needs",
    icon: "🩺",
    status: "coming-soon",
  },
  {
    id: 7,
    title: "Research",
    description: "Learn about research and investigation.",
    abeObjective: "Embark in the research process",
    dialysisObjective: "Discuss why boundaries in healthcare are important",
    icon: "🔬",
    status: "coming-soon",
  },
  {
    id: 8,
    title: "Professional Boundaries",
    description: "Understand the importance of professional boundaries in healthcare.",
    abeObjective: "Apply critical thinking skills to analyze and evaluate information",
    dialysisObjective: "Discuss why boundaries in healthcare are important",
    icon: "🚧",
    status: "coming-soon",
  },
  {
    id: 9,
    title: "Dialysis Blood Tests & Diet",
    description: "Identify the purpose and target ranges for key dialysis blood tests and understand the effects of diet.",
    abeObjective: "",
    dialysisObjective: "Identify the purpose and target ranges for key dialysis blood tests",
    icon: "🧪",
    status: "available",
  },
  {
    id: 10,
    title: "Vascular Access",
    description: "Learn about the 3 types of vascular access for hemodialysis.",
    abeObjective: "",
    dialysisObjective: "Describe the 3 types of vascular access for hemodialysis and how they are used",
    icon: "💉",
    status: "available",
  },
];
