import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';

const AVATARS = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&q=85&w=100&h=100',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=srgb&fm=jpg&q=85&w=100&h=100',
  'https://images.unsplash.com/photo-1607503873903-c5e95f80d7b9?crop=entropy&cs=srgb&fm=jpg&q=85&w=100&h=100',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&q=85&w=100&h=100',
];

const PIPELINE = [
  { label: 'Sourced', value: 128 },
  { label: 'Screened', value: 64 },
  { label: 'Shortlisted', value: 18 },
  { label: 'Interview', value: 6 },
];

/**
 * Custom-built "AI recruitment pipeline" dashboard visual for the hero section.
 * Deliberately avoids stock photography — composed entirely from glass cards,
 * gradients and floating motion to communicate AI-powered hiring.
 */
const HeroVisual = () => {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Ambient glow */}
      <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-blue-200/50 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-violet-200/50 blur-3xl" />

      {/* Main dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-2xl backdrop-blur-2xl"
      >
        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Open Roles</p>
            <p className="text-2xl font-extrabold text-white">24 Active</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-400">
            <Sparkles className="h-3.5 w-3.5" />
            AI Matching Live
          </span>
        </div>

        {/* Pipeline bars */}
        <div className="mt-4 space-y-3">
          {PIPELINE.map((stage, i) => (
            <div key={stage.label}>
              <div className="mb-1 flex items-center justify-between text-xs">
                <span className="font-medium text-slate-400">{stage.label}</span>
                <span className="font-bold text-white">{stage.value}</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${100 - i * 22}%` }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Shortlisted avatars */}
        <div className="mt-5 flex items-center justify-between rounded-xl border border-white/5 bg-slate-950/60 p-3">
          <div className="flex -space-x-2">
            {AVATARS.map((src) => (
              <img
                key={src}
                src={src}
                alt="Shortlisted candidate"
                className="h-8 w-8 rounded-full border-2 border-slate-900 object-cover"
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-slate-400">Shortlisted profiles</span>
        </div>
      </motion.div>

      {/* Floating AI match score card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-10 -top-8 hidden rounded-xl border border-emerald-500/30 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block"
      >
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-emerald-400" />
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">AI Match Score</p>
            <p className="text-lg font-extrabold text-emerald-400">96%</p>
          </div>
        </div>
      </motion.div>

      {/* Floating offer accepted card */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -bottom-6 -right-4 hidden rounded-xl border border-blue-500/30 bg-slate-900/80 px-4 py-3 shadow-xl backdrop-blur-xl sm:block"
      >
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-blue-400" />
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">Offer Accepted</p>
            <p className="text-sm font-bold text-white">Product Manager</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroVisual;
