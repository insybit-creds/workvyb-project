import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Timer, UserCheck2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RECENT_CLOSURES } from '@/data/workvybData';
import { fadeInUp, staggerContainer, scrollRevealProps } from '@/lib/motion';
import { WORKVYB } from '@/constants/testIds/workvyb';

const RecentClosures = () => {
  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="recent-closures" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...scrollRevealProps} variants={fadeInUp} className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Proof, Not Promises</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Recent Roles We Helped Companies Close
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            From AI SaaS and cybersecurity startups to D2C brands, marketing agencies, and financial
            consulting firms, Workvyb has helped companies close critical roles with faster
            shortlisting and quality candidate filtering.
          </p>
        </motion.div>

        <motion.div
          {...scrollRevealProps}
          variants={staggerContainer(0.06)}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {RECENT_CLOSURES.map((closure, i) => (
            <motion.div
              key={closure.role}
              data-testid={`recent-closure-card-${i}`}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-heading text-base font-bold text-slate-900 sm:text-lg">{closure.role}</h3>
                <span className="whitespace-nowrap rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
                  {closure.shortlist}
                </span>
              </div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                {closure.companyType}
              </p>
              <div className="mt-1 flex flex-col gap-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-blue-600" /> {closure.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Timer className="h-3.5 w-3.5 text-blue-600" /> Shortlist in {closure.shortlist}
                </span>
                <span className="flex items-center gap-1.5">
                  <UserCheck2 className="h-3.5 w-3.5 text-blue-600" /> {closure.onboarding}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          {...scrollRevealProps}
          variants={fadeInUp}
          className="mx-auto mt-12 max-w-2xl text-center text-lg font-bold text-slate-900 sm:text-xl"
        >
          Critical roles shortlisted in{' '}
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            as fast as 4 days.
          </span>
        </motion.p>

        <motion.div {...scrollRevealProps} variants={fadeInUp} className="mt-8 flex flex-col items-center gap-4">
          <p className="text-base font-semibold text-slate-700">Need to close a similar role?</p>
          <Button
            onClick={scrollToForm}
            data-testid={WORKVYB.recentClosuresCta}
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

export default RecentClosures;
