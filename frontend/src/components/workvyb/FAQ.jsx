import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FAQS } from '@/data/workvybData';
import { fadeInUp, scrollRevealProps } from '@/lib/motion';

const FAQ = () => {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div {...scrollRevealProps} variants={fadeInUp} className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">FAQ</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div {...scrollRevealProps} variants={fadeInUp} className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`item-${i}`}
                className="border-b border-slate-200"
              >
                <AccordionTrigger
                  data-testid={`faq-question-${i}`}
                  className="text-left text-base font-semibold text-slate-900 hover:no-underline sm:text-lg"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent data-testid={`faq-answer-${i}`} className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
