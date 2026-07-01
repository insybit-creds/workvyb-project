import { motion } from 'framer-motion';
import EnquiryForm from './EnquiryForm';
import { fadeInUp, scrollRevealProps } from '@/lib/motion';

const BottomForm = () => {
  return (
    <section id="contact" className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...scrollRevealProps}
          variants={fadeInUp}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10"
        >
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Get Started</p>
            <h2 className="mt-3 font-heading text-2xl font-bold text-slate-900 sm:text-3xl">
              Tell us who you are hiring for
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Share your hiring requirement and Workvyb will help you shortlist relevant candidates
              faster using AI-powered sourcing and screening.
            </p>
          </div>
          <div className="mt-8">
            <EnquiryForm variant="bottom" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BottomForm;
