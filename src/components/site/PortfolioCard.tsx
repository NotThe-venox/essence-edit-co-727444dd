import { motion } from "motion/react";
import { Play } from "lucide-react";
import type { Project } from "@/lib/portfolio";

export function PortfolioCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.a
      href="#"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative block rounded-2xl overflow-hidden border border-border bg-card"
      data-cursor="hover"
    >
      <div className={`aspect-video bg-gradient-to-br ${project.tone} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
          <div className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-500">
            <Play size={20} className="text-black" fill="currentColor" />
          </div>
        </div>
        <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700" />
      </div>
      <div className="p-5 flex items-center justify-between">
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-widest">{project.category}</div>
          <div className="mt-1 font-medium">{project.title}</div>
        </div>
        <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">View →</span>
      </div>
    </motion.a>
  );
}
