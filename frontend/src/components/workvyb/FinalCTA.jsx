import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_LINK } from '@/data/workvybData';
import { fadeInUp, scrollRevealProps } from '@/lib/motion';
import { WORKVYB } from '@/constants/testIds/workvyb';

const FinalCTA = () => {
  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-violet-600 py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-white/10 blur-[120px]" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div {...scrollRevealProps} variants={fadeInUp}>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Hire Smarter and Faster?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-blue-50 sm:text-lg">
            Share your hiring requirement and let Workvyb help you find relevant, pre-screened
            candidates using AI-powered recruitment.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              onClick={scrollToForm}
              data-testid={WORKVYB.finalCtaPrimary}
              size="lg"
              className="h-12 rounded-lg bg-white px-6 text-base font-bold text-blue-700 shadow-lg transition-all hover:bg-blue-50"
            >
              Submit Hiring Requirement
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              data-testid={WORKVYB.finalCtaWhatsapp}
              className="h-12 rounded-lg border border-white/30 bg-white/10 px-6 text-base font-bold text-white transition-all hover:bg-white/20"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
