// Test IDs for the Workvyb landing page.

export const WORKVYB = {
  headerLogo: 'header-logo',
  navWhyWorkvyb: 'nav-why-workvyb',
  navRolesWeHire: 'nav-roles-we-hire',
  navRecentClosures: 'nav-recent-closures',
  navProcess: 'nav-process',
  navContact: 'nav-contact',
  headerWhatsappButton: 'header-whatsapp-button',
  mobileMenuToggle: 'mobile-menu-toggle',
  mobileMenuPanel: 'mobile-menu-panel',

  heroPrimaryCta: 'hero-primary-cta-button',
  heroWhatsappCta: 'hero-whatsapp-cta-button',
  heroTrustLine: 'hero-trust-line',

  whyWorkvybCta: 'why-workvyb-cta-button',
  recentClosuresCta: 'recent-closures-cta-button',
  comparisonCta: 'comparison-cta-button',

  finalCtaPrimary: 'final-cta-primary-button',
  finalCtaWhatsapp: 'final-cta-whatsapp-button',

  floatingWhatsapp: 'floating-whatsapp-button',
  footerWhatsappLink: 'footer-whatsapp-link',
  footerEmailLink: 'footer-email-link',
};

export const ENQUIRY_FORM = {
  name: (variant) => `${variant}-form-name-input`,
  mobile: (variant) => `${variant}-form-mobile-input`,
  company: (variant) => `${variant}-form-company-input`,
  roles: (variant) => `${variant}-form-roles-input`,
  submit: (variant) => `${variant}-form-submit-button`,
  success: (variant) => `${variant}-form-success-message`,
  error: (variant, field) => `${variant}-form-${field}-error`,
};
