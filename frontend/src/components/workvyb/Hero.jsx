import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroVisual from './HeroVisual';
import EnquiryForm from './EnquiryForm';
import { HERO_BADGES, WHATSAPP_LINK } from '@/data/workvybData';
import { WORKVYB } from '@/constants/testIds/workvyb';

const Hero = () => {
  const scrollToBottomForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-white pb-16 pt-14 sm:pb-24 sm:pt-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-100/60 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-[300px] w-[400px] rounded-full bg-violet-100/50 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-10">
          {/* Left: Copy */}
          <div className="lg:pt-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-600"
            >
              AI-Powered Recruitment Agency
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tighter text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Hire Relevant Candidates Faster with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                AI-Powered Recruitment
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              Workvyb helps startups and MNCs hire across Sales, Marketing, Tech, Finance, Product,
              and GTM roles using AI-led sourcing, smart filtering, and expert recruiter support.
            </motion.p>

            <motion.p
              data-testid={WORKVYB.heroTrustLine}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-4 text-sm font-semibold text-emerald-600"
            >
              ✓ 100+ roles filled across startups and MNCs
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {HERO_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button
                onClick={scrollToBottomForm}
                data-testid={WORKVYB.heroPrimaryCta}
                size="lg"
                className="h-12 rounded-lg bg-blue-600 px-6 text-base font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)] transition-all hover:bg-blue-500 hover:shadow-[0_8px_28px_rgba(37,99,235,0.35)]"
              >
                Submit Hiring Requirement
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                data-testid={WORKVYB.heroWhatsappCta}
                className="h-12 rounded-lg border border-slate-300 bg-white px-6 text-base font-bold text-slate-900 transition-all hover:bg-slate-50"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 text-emerald-600" />
                  Chat on WhatsApp
                </a>
              </Button>
            </motion.div>

            {/* Compact dashboard visual - shown on desktop only, tucked under the CTAs */}
            <div className="mt-12 hidden lg:block">
              <HeroVisual />
            </div>
          </div>

          {/* Right: Hero Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8"
          >
            <h2 className="font-heading text-2xl font-bold text-slate-900">Tell us who you are hiring for</h2>
            <p className="mt-2 text-sm text-slate-600">
              Share your hiring requirement and Workvyb will help you shortlist relevant candidates faster
              using AI-powered sourcing and screening.
            </p>
            <div className="mt-6">
              <EnquiryForm variant="hero" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
