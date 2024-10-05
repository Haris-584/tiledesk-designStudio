export const BRAND_BASE_INFO: { [key: string]: string | boolean } = {
  COMPANY_NAME: 'ChatRep',
  BRAND_NAME: 'ChatRep',
  COMPANY_SITE_NAME: '#',
  COMPANY_SITE_URL: '#',
  CONTACT_US_EMAIL: '#',
  FAVICON: 'assets/logos/ChatRep-circular-icon.svg',
  META_TITLE: 'Design Studio',
  DOCS: true,
  COMMUNITY_SECTION: true,
  LOGOUT_ENABLED: false,
};

export const LOGOS_ITEMS: {
  [key: string]: { label: string | boolean; icon: string };
} = {
  COMPANY_LOGO: {
    label: BRAND_BASE_INFO.COMPANY_NAME,
    icon: 'assets/logos/ChatRep_logo2.svg',
  },
  COMPANY_LOGO_NO_TEXT: {
    label: BRAND_BASE_INFO.COMPANY_NAME,
    icon: 'assets/logos/ChatRep_logo_no_text.svg',
  },
  BASE_LOGO: {
    label: BRAND_BASE_INFO.BRAND_NAME,
    icon: 'assets/logos/ChatRep_logo2.svg',
  },
  BASE_LOGO_NO_TEXT: {
    label: BRAND_BASE_INFO.BRAND_NAME,
    icon: 'assets/logos/ChatRep_logo_no_text.svg',
  },
  BASE_LOGO_WHITE: {
    label: BRAND_BASE_INFO.BRAND_NAME,
    icon: '"assets/logos/ChatRep-logo-new-white.svg',
  },
  BASE_LOGO_WHITE_NO_TEXT: {
    label: BRAND_BASE_INFO.BRAND_NAME,
    icon: '"assets/logos/ChatRep-logo-new-white.svg',
  },
  BASE_LOGO_GRAY: {
    label: BRAND_BASE_INFO.BRAND_NAME,
    icon: 'https://support-pre.tiledesk.com/dashboard/assets/img/logos/tiledesk-logo_new_gray.svg',
  },
};

export const MEDIA: {
  [key: string]: { src: string; text: string; description: string };
} = {
  RULES: {
    src: 'https://www.youtube.com/embed/p0ux-86Y4_I',
    text: 'CDSSplashScreen.YouHaveNoRules',
    description: 'CDSSplashScreen.LearnAboutAI',
  },
  GLOBALS: { src: '', text: 'CDSGlobals.NoGlobalVariables', description: '' },
};
