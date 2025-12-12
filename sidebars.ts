import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  caseDocumentation: [
    {
      type: 'category',
      label: '📋 Case Overview',
      items: [
        'intro',
        'overview/executive-summary',
        'overview/quick-reference',
        'overview/water-leak',
        'overview/heating-failure',
        'overview/tenant-profiles',
      ],
    },
    {
      type: 'category',
      label: '⚖️ Legal Framework',
      items: [
        'legal/violations',
        'legal/nc-statutes',
        'legal/additional-claims',
        'legal/building-codes',
      ],
    },
    {
      type: 'category',
      label: '📅 Timeline & Events',
      items: [
        'timeline/detailed-timeline',
        'timeline/water-leak-timeline',
        'timeline/heating-timeline',
        'timeline/communication-log',
      ],
    },
    {
      type: 'category',
      label: '💰 Damages & Compensation',
      items: [
        'damages/calculation',
        'damages/water-damages',
        'damages/heating-damages',
        'damages/professional-damages',
        'damages/child-damages',
        'damages/emotional-damages',
        'damages/treble-damages',
      ],
    },
    {
      type: 'category',
      label: '🤝 Settlement & Negotiation',
      items: [
        'settlement/demands',
        'settlement/settlement-options',
        'settlement/minimum-terms',
        'settlement/negotiation-strategy',
      ],
    },
    {
      type: 'category',
      label: '📚 Resources & Action Items',
      items: [
        'resources/action-items',
        'resources/email-templates',
        'resources/legal-contacts',
        'resources/documentation-inventory',
        'resources/court-filing-preparation',
      ],
    },
  ],
};

export default sidebars;
