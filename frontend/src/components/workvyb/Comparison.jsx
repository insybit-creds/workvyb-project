import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPARISON_ROWS } from '@/data/workvybData';
import { fadeInUp, scrollRevealProps } from '@/lib/motion';
import { WORKVYB } from '@/constants/testIds/workvyb';

const Comparison = () => {
  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div {...scrollRevealProps} variants={fadeInUp} className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Comparison</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Not Just Another Recruitment Agency
          </h2>
        </motion.div>

        <motion.div
          {...scrollRevealProps}
          variants={fadeInUp}
          className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="grid grid-cols-2">
            <div className="border-b border-r border-slate-200 bg-slate-50 p-4 text-center sm:p-5">
              <p className="text-sm font-bold text-slate-500 sm:text-base">Traditional Agencies</p>
            </div>
            <div className="border-b border-slate-200 bg-blue-50 p-4 text-center sm:p-5">
              <p className="font-heading text-sm font-extrabold text-blue-700 sm:text-base">Workvyb</p>
            </div>
          </div>

          {COMPARISON_ROWS.map((row, i) => (
            <div key={row.traditional} className="grid grid-cols-2">
              <div
                className={`flex items-start gap-2 border-r border-slate-200 bg-white p-4 sm:p-5 ${
                  i !== COMPARISON_ROWS.length - 1 ? 'border-b border-slate-100' : ''
                }`}
              >
                <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" strokeWidth={2} />
                <span className="text-xs text-slate-500 sm:text-sm">{row.traditional}</span>
              </div>
              <div
                className={`flex items-start gap-2 bg-blue-50/60 p-4 sm:p-5 ${
                  i !== COMPARISON_ROWS.length - 1 ? 'border-b border-blue-100' : ''
                }`}
              >
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" strokeWidth={2.5} />
                <span className="text-xs font-medium text-slate-900 sm:text-sm">{row.workvyb}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div {...scrollRevealProps} variants={fadeInUp} className="mt-10 flex flex-col items-center gap-4">
          <p className="text-base font-semibold text-slate-700">Experience a smarter way to hire</p>
          <Button
            onClick={scrollToForm}
            data-testid={WORKVYB.comparisonCta}
            size="lg"
            className="h-12 rounded-lg bg-blue-600 px-6 text-base font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)] transition-all hover:bg-blue-500 hover:shadow-[0_8px_28px_rgba(37,99,235,0.35)]"
          >
            Submit Hiring Requirement
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
