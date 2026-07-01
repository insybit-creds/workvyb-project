import { motion } from 'framer-motion';
import { SOLUTION_CARDS } from '@/data/workvybData';
import { fadeInUp, staggerContainer, scrollRevealProps } from '@/lib/motion';

const Solution = () => {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...scrollRevealProps} variants={fadeInUp} className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">The Solution</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Workvyb Combines AI + Human Hiring Expertise
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            We use AI-powered sourcing and smart candidate filtering, backed by experienced recruiters
            who understand business-critical roles across functions.
          </p>
        </motion.div>

        <motion.div
          {...scrollRevealProps}
          variants={staggerContainer(0.1)}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SOLUTION_CARDS.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:border-blue-300 hover:shadow-lg ${card.span}`}
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                <card.icon className="h-5 w-5 text-blue-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900 sm:text-xl">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
