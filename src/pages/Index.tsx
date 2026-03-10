import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Brain, FlaskConical, GraduationCap, Heart } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import Header from "@/components/Header";

const features = [
  { icon: BookOpen, title: "Interactive Readings", desc: "Engaging medical content with highlighted key terms" },
  { icon: Brain, title: "Fill-in-the-Blank", desc: "Drag & drop exercises to reinforce vocabulary" },
  { icon: FlaskConical, title: "Vocab Matching", desc: "Match terms to definitions in timed challenges" },
  { icon: GraduationCap, title: "Comprehension Quizzes", desc: "Test your understanding with instant feedback" },
];

const stats = [
  { value: "10", label: "Learning Modules" },
  { value: "50+", label: "Interactive Exercises" },
  { value: "100+", label: "Key Vocabulary Terms" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="Kidney anatomy illustration" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 gradient-navy opacity-90" />
        </div>
        <div className="relative container py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-primary-foreground/90 text-xs font-semibold mb-6">
              <Heart className="w-3.5 h-3.5" />
              Adult Basic Education — Dialysis Bridge Program
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-foreground leading-tight mb-5">
              Your Bridge to Becoming a{" "}
              <span className="gradient-text">Dialysis Technician</span>
            </h1>
            <p className="text-lg text-navy-foreground/70 leading-relaxed mb-8 max-w-xl">
              Master kidney anatomy, patient care, and critical thinking through interactive lessons designed for aspiring healthcare professionals.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/module/1"
                className="gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
              >
                Start Learning <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/modules"
                className="bg-navy-foreground/10 text-navy-foreground border border-navy-foreground/20 px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:bg-navy-foreground/20 transition-colors"
              >
                View All Modules
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="container -mt-8 relative z-10">
        <div className="grid grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-5 text-center"
            >
              <div className="font-display text-2xl md:text-3xl font-bold gradient-text">{s.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl font-bold mb-3">Interactive Learning Tools</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Each module combines reading, practice, and assessment to build your knowledge and skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="interactive-card p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>DialysisProAcademy — Adult Basic Education Dialysis Technician Program</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
