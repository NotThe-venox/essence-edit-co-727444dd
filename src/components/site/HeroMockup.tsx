import { motion } from "motion/react";
import { Play, Scissors, Type, Music, Video } from "lucide-react";

export function HeroMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="relative w-full max-w-xl mx-auto"
    >
      {/* Glow */}
      <div className="absolute -inset-10 rounded-[40px] bg-white/5 blur-3xl" />

      <div className="relative animate-float glass border border-border rounded-2xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
        {/* Preview frame */}
        <div className="aspect-video bg-gradient-to-br from-neutral-900 via-neutral-800 to-black relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_60%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
              <Play className="text-black" size={22} fill="currentColor" />
            </div>
          </div>
          <div className="absolute top-3 left-3 flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
          <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-[10px] text-white/60">
            <span>00:24</span>
            <div className="flex-1 h-0.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-white/80" />
            </div>
            <span>01:12</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-neutral-950/80 p-4 border-t border-border space-y-2">
          {[
            { icon: Video, w: "w-[70%]", label: "V1" },
            { icon: Scissors, w: "w-[45%]", label: "V2" },
            { icon: Type, w: "w-[60%]", label: "T" },
            { icon: Music, w: "w-[85%]", label: "A" },
          ].map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <div className="w-6 text-muted-foreground flex items-center justify-center">
                <row.icon size={12} />
              </div>
              <div className="flex-1 h-6 bg-white/[0.03] rounded relative overflow-hidden">
                <div
                  className={`h-full ${row.w} bg-gradient-to-r from-white/20 to-white/5 rounded flex items-center px-2`}
                >
                  <span className="text-[9px] text-white/60">{row.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating tag */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute -left-6 top-1/4 glass border border-border rounded-xl px-3 py-2 text-xs hidden sm:block"
      >
        <div className="text-muted-foreground">Delivered</div>
        <div className="font-medium">24h turnaround</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute -right-4 bottom-8 glass border border-border rounded-xl px-3 py-2 text-xs hidden sm:block"
      >
        <div className="text-muted-foreground">Views</div>
        <div className="font-medium">+2.4M this month</div>
      </motion.div>
    </motion.div>
  );
}
