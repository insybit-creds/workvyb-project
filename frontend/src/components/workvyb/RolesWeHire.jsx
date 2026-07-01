import { motion } from 'framer-motion';
import { ROLE_CATEGORIES } from '@/data/workvybData';
import { fadeInUp, staggerContainer, scrollRevealProps } from '@/lib/motion';

const RolesWeHire = () => {
  return (
    <section id="roles-we-hire" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...scrollRevealProps} variants={fadeInUp} className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Roles We Hire For</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Roles We Help You Close
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            From revenue teams to product, tech, marketing, and finance, Workvyb helps companies hire
            across multiple business-critical functions.
          </p>
        </motion.div>

        <motion.div
          {...scrollRevealProps}
          variants={staggerContainer(0.08)}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ROLE_CATEGORIES.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-blue-300"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-violet-50">
                  <category.icon className="h-5 w-5 text-blue-600" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.roles.map((role) => (
                  <li key={role} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="h-1 w-1 flex-shrink-0 rounded-full bg-blue-500" />
                    {role}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RolesWeHire;
