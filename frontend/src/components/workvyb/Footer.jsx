import { MessageCircle, Mail } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_LINK, WHATSAPP_DISPLAY_NUMBER, CONTACT_EMAIL } from '@/data/workvybData';
import { WORKVYB } from '@/constants/testIds/workvyb';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <span className="font-heading text-2xl font-extrabold tracking-tight text-slate-900">
              Work<span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">vyb</span>
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
              AI-powered recruitment partner for startups and MNCs.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Quick Links</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-testid={`footer-${WORKVYB[link.testKey]}`}
                    className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Contact</p>
            <div className="mt-4 space-y-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={WORKVYB.footerWhatsappLink}
                className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-emerald-600"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp: {WHATSAPP_DISPLAY_NUMBER}
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                data-testid={WORKVYB.footerEmailLink}
                className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-blue-600"
              >
                <Mail className="h-4 w-4" />
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-center">
          <p className="text-xs text-slate-500">© 2026 Workvyb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
