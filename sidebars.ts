import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  caseDocumentation: [
    {
      type: 'category',
      label: '📋 Case Overview',
      items: [
        'intro',
        '01-overview/executive-summary',
        '01-overview/quick-reference',
        '01-overview/water-leak',
        '01-overview/heating-failure',
        '01-overview/tenant-profiles',
      ],
    },
    {
      type: 'category',
      label: '⚖️ Legal Framework',
      items: [
        '02-legal/violations',
        '02-legal/nc-statutes',
        '02-legal/additional-claims',
        '02-legal/building-codes',
      ],
    },
    {
      type: 'category',
      label: '📅 Timeline & Events',
      items: [
        '03-timeline/detailed-timeline',
        '03-timeline/water-leak-timeline',
        '03-timeline/heating-timeline',
        '03-timeline/communication-log',
      ],
    },
    {
      type: 'category',
      label: '💰 Damages & Compensation',
      items: [
        '04-damages/calculation',
        '04-damages/water-damages',
        '04-damages/heating-damages',
        '04-damages/professional-damages',
        '04-damages/child-damages',
        '04-damages/emotional-damages',
        '04-damages/treble-damages',
      ],
    },
    {
      type: 'category',
      label: '🤝 Settlement & Negotiation',
      items: [
        '05-settlement/demands',
        '05-settlement/settlement-options',
        '05-settlement/minimum-terms',
        '05-settlement/negotiation-strategy',
      ],
    },
    {
      type: 'category',
      label: '📚 Resources & Action Items',
      items: [
        '06-resources/action-items',
        '06-resources/email-templates',
        '06-resources/legal-contacts',
        '06-resources/documentation-inventory',
        '06-resources/court-filing-preparation',
      ],
    },
  ],
};

export default sidebars;
