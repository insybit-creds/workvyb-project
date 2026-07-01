import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/workvybData';
import { fadeInUp, staggerContainer, scrollRevealProps } from '@/lib/motion';

const Testimonials = () => {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...scrollRevealProps} variants={fadeInUp} className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Client Voices</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            What Companies Say About Workvyb
          </h2>
        </motion.div>

        <motion.div
          {...scrollRevealProps}
          variants={staggerContainer(0.1)}
          className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={i}
              data-testid={`testimonial-card-${i}`}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <Quote className="h-6 w-6 flex-shrink-0 text-blue-200" strokeWidth={1.5} fill="currentColor" />
              <p className="mt-4 flex-1 text-sm italic leading-relaxed text-slate-700 sm:text-base">
                “{testimonial.quote}”
              </p>
              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-sm font-bold text-slate-900">{testimonial.author}</p>
                <p className="text-xs text-slate-500">{testimonial.context}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
