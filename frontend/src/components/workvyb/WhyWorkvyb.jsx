import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHY_WORKVYB_POINTS } from '@/data/workvybData';
import { fadeInUp, staggerContainer, scrollRevealProps } from '@/lib/motion';
import { WORKVYB } from '@/constants/testIds/workvyb';

const WhyWorkvyb = () => {
  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="why-workvyb" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...scrollRevealProps} variants={fadeInUp} className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">Why Workvyb</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Why Companies Choose Workvyb
          </h2>
        </motion.div>

        <motion.div
          {...scrollRevealProps}
          variants={staggerContainer(0.06)}
          className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {WHY_WORKVYB_POINTS.map((point) => (
            <motion.div
              key={point.text}
              variants={fadeInUp}
              className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                <point.icon className="h-5 w-5 text-blue-600" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-medium leading-relaxed text-slate-700">{point.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          {...scrollRevealProps}
          variants={fadeInUp}
          className="mx-auto mt-16 flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-violet-50 p-8 text-center"
        >
          <h3 className="font-heading text-xl font-bold text-slate-900 sm:text-2xl">
            Need to close an urgent role?
          </h3>
          <Button
            onClick={scrollToForm}
            data-testid={WORKVYB.whyWorkvybCta}
            size="lg"
            className="h-12 rounded-lg bg-blue-600 px-6 text-base font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)] transition-all hover:bg-blue-500 hover:shadow-[0_8px_28px_rgba(37,99,235,0.35)]"
          >
            Share Your Hiring Requirement
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWorkvyb;
