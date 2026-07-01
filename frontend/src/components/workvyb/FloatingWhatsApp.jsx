import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '@/data/workvybData';
import { WORKVYB } from '@/constants/testIds/workvyb';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={WORKVYB.floatingWhatsapp}
      aria-label="Chat with Workvyb on WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-20 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 shadow-[0_4px_24px_rgba(16,185,129,0.5)] transition-shadow hover:shadow-[0_4px_32px_rgba(16,185,129,0.7)] sm:bottom-6 sm:right-6"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />
      <MessageCircle className="relative h-7 w-7 text-white" strokeWidth={2} />
      <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block">
        Chat with us
      </span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
