import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Property Management Issues',
  tagline: 'Comprehensive documentation of habitability violations and legal claims',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://firstkeyhomes-case.local',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/first-key-homes/',

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
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
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
      title: 'Property Management Issues',
      logo: {
        alt: 'Property Management Issues',
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
              to: '/docs/overview/executive-summary',
            },
            {
              label: 'Legal Framework',
              to: '/docs/legal/violations',
            },
            {
              label: 'Timeline',
              to: '/docs/timeline/detailed-timeline',
            },
          ],
        },
        {
          title: 'Claims & Damages',
          items: [
            {
              label: 'Water Leak Issues',
              to: '/docs/overview/water-leak',
            },
            {
              label: 'Heating Failure',
              to: '/docs/overview/heating-failure',
            },
            {
              label: 'Damages Calculation',
              to: '/docs/damages/calculation',
            },
          ],
        },
        {
          title: 'Action Items',
          items: [
            {
              label: 'Settlement Demands',
              to: '/docs/settlement/demands',
            },
            {
              label: 'Email Templates',
              to: '/docs/resources/email-templates',
            },
            {
              label: 'Legal Resources',
              to: '/docs/resources/legal-contacts',
            },
          ],
        },
      ],
      copyright: `Property Management Issues Legal Case Documentation | Prepared ${new Date().toLocaleDateString()}`,
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
