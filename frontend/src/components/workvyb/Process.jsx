import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '@/data/workvybData';
import { fadeInUp, staggerContainer, scrollRevealProps } from '@/lib/motion';

const Process = () => {
  return (
    <section id="process" className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...scrollRevealProps} variants={fadeInUp} className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Our Process</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            How Workvyb Helps You Hire
          </h2>
        </motion.div>

        {/* Desktop horizontal timeline */}
        <motion.div
          {...scrollRevealProps}
          variants={staggerContainer(0.12)}
          className="relative mt-20 hidden lg:grid lg:grid-cols-4 lg:gap-6"
        >
          <div className="absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-blue-100 via-blue-400 to-violet-200" />
          {PROCESS_STEPS.map((step, i) => (
            <motion.div key={step.title} variants={fadeInUp} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-500 bg-white shadow-[0_4px_16px_rgba(59,130,246,0.25)]">
                <step.icon className="h-5 w-5 text-blue-600" strokeWidth={1.5} />
              </div>
              <span className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                Step {i + 1}
              </span>
              <h3 className="mt-2 font-heading text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile vertical timeline */}
        <motion.div
          {...scrollRevealProps}
          variants={staggerContainer(0.1)}
          className="relative mt-14 space-y-8 lg:hidden"
        >
          <div className="absolute bottom-0 left-6 top-2 w-px bg-gradient-to-b from-blue-400 to-violet-200" />
          {PROCESS_STEPS.map((step, i) => (
            <motion.div key={step.title} variants={fadeInUp} className="relative flex gap-5 pl-0">
              <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-blue-500 bg-white shadow-[0_4px_16px_rgba(59,130,246,0.2)]">
                <step.icon className="h-5 w-5 text-blue-600" strokeWidth={1.5} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Step {i + 1}
                </span>
                <h3 className="mt-1 font-heading text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
