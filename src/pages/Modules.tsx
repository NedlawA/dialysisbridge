import { motion } from "framer-motion";
import Header from "@/components/Header";
import ModuleCard from "@/components/ModuleCard";
import { modules } from "@/data/modules";

const Modules = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">Course Modules</h1>
          <p className="text-muted-foreground max-w-2xl">
            10 integrated modules combining Adult Basic Education literacy skills with dialysis technician competencies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((m, i) => (
            <ModuleCard key={m.id} module={m} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modules;
