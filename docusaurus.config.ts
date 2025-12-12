import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'FirstKey Homes Legal Case Documentation',
  tagline: 'Comprehensive documentation of habitability violations and legal claims',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://firstkeyhomes-case.local',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  onBrokenLinks: 'warn',

  // Internationalization
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    'docusaurus-lunr-search',
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'FirstKey Homes Case',
      logo: {
        alt: 'FirstKey Homes Legal Case',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'caseDocumentation',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: '#contact',
          label: 'Contact',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Case Documentation',
          items: [
            {
              label: 'Executive Summary',
              to: '/docs/01-overview/executive-summary',
            },
            {
              label: 'Legal Framework',
              to: '/docs/02-legal/violations',
            },
            {
              label: 'Timeline',
              to: '/docs/03-timeline/detailed-timeline',
            },
          ],
        },
        {
          title: 'Claims & Damages',
          items: [
            {
              label: 'Water Leak Issues',
              to: '/docs/01-overview/water-leak',
            },
            {
              label: 'Heating Failure',
              to: '/docs/01-overview/heating-failure',
            },
            {
              label: 'Damages Calculation',
              to: '/docs/04-damages/calculation',
            },
          ],
        },
        {
          title: 'Action Items',
          items: [
            {
              label: 'Settlement Demands',
              to: '/docs/05-settlement/demands',
            },
            {
              label: 'Email Templates',
              to: '/docs/06-resources/email-templates',
            },
            {
              label: 'Legal Resources',
              to: '/docs/06-resources/legal-contacts',
            },
          ],
        },
      ],
      copyright: `FirstKey Homes Legal Case Documentation | Prepared ${new Date().toLocaleDateString()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript', 'javascript'],
    },
    mermaid: {
      theme: {
        light: 'default',
        dark: 'dark',
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
