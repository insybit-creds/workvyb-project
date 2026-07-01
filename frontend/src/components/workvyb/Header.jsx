import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_LINKS, WHATSAPP_LINK } from '@/data/workvybData';
import { WORKVYB } from '@/constants/testIds/workvyb';

const Logo = () => (
  <a href="#hero" data-testid={WORKVYB.headerLogo} className="flex items-center gap-1.5 select-none">
    <span className="font-heading text-2xl font-extrabold tracking-tight text-slate-900">
      Work<span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">vyb</span>
    </span>
    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
  </a>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={WORKVYB[link.testKey]}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            data-testid={WORKVYB.headerWhatsappButton}
            className="rounded-lg bg-emerald-600 font-bold text-white transition-all hover:bg-emerald-500 hover:shadow-[0_4px_20px_rgba(16,185,129,0.35)]"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>

        <button
          type="button"
          data-testid={WORKVYB.mobileMenuToggle}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-lg border border-slate-200 p-2 text-slate-900 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div
          data-testid={WORKVYB.mobileMenuPanel}
          className="border-t border-slate-200 bg-white px-4 pb-6 pt-2 md:hidden"
        >
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-testid={`mobile-${WORKVYB[link.testKey]}`}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button
            asChild
            className="mt-3 w-full rounded-lg bg-emerald-600 font-bold text-white hover:bg-emerald-500"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
