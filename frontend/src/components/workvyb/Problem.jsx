import { motion } from 'framer-motion';
import { PROBLEM_POINTS } from '@/data/workvybData';
import { fadeInUp, staggerContainer, scrollRevealProps } from '@/lib/motion';

const Problem = () => {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div {...scrollRevealProps} variants={fadeInUp} className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">The Problem</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Hiring Shouldn&apos;t Feel Like Searching for a Needle in a Haystack
          </h2>
        </motion.div>

        <motion.div
          {...scrollRevealProps}
          variants={staggerContainer(0.08)}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {PROBLEM_POINTS.map((point) => (
            <motion.div
              key={point.text}
              variants={fadeInUp}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <point.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-rose-500" strokeWidth={1.5} />
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">{point.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          {...scrollRevealProps}
          variants={fadeInUp}
          className="mx-auto mt-14 max-w-2xl text-center text-lg font-semibold leading-relaxed text-slate-900 sm:text-xl"
        >
          Most companies do not just need more candidates. They need{' '}
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            relevant candidates
          </span>{' '}
          who match the role, salary range, location, urgency, and business context.
        </motion.p>
      </div>
    </section>
  );
};

export default Problem;
