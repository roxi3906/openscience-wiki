export const defaultLocale = 'en';

export const localeConfigs = {
  en: {
    label: 'English',
    htmlLang: 'en',
    direction: 'ltr',
  },
  'zh-Hans': {
    label: '简体中文',
    htmlLang: 'zh-Hans',
    direction: 'ltr',
  },
};

export const locales = Object.keys(localeConfigs);
