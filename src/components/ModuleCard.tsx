import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, ArrowRight } from "lucide-react";
import type { Module } from "@/data/modules";

const ModuleCard = ({ module, index }: { module: Module; index: number }) => {
  const isAvailable = module.status === "available";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      viewport={{ once: true }}
    >
      {isAvailable ? (
        <Link to={`/module/${module.id}`} className="block interactive-card p-6 h-full">
          <CardInner module={module} isAvailable={isAvailable} />
        </Link>
      ) : (
        <div className="interactive-card p-6 h-full opacity-60 cursor-not-allowed">
          <CardInner module={module} isAvailable={isAvailable} />
        </div>
      )}
    </motion.div>
  );
};

const CardInner = ({ module, isAvailable }: { module: Module; isAvailable: boolean }) => (
  <>
    <div className="flex items-start justify-between mb-3">
      <span className="text-3xl">{module.icon}</span>
      {isAvailable ? (
        <span className="module-badge bg-success/10 text-success">
          <span className="w-1.5 h-1.5 rounded-full bg-success" />
          Available
        </span>
      ) : (
        <span className="module-badge bg-muted text-muted-foreground">
          <Lock className="w-3 h-3" />
          Coming Soon
        </span>
      )}
    </div>
    <h3 className="font-display font-semibold text-lg text-card-foreground mb-2">
      Module {module.id}: {module.title}
    </h3>
    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{module.description}</p>
    {isAvailable && (
      <div className="flex items-center gap-1.5 text-sm font-medium text-primary">
        Start Module <ArrowRight className="w-4 h-4" />
      </div>
    )}
  </>
);

export default ModuleCard;
