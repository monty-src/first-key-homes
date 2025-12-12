import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          FirstKey Homes Legal Case
        </Heading>
        <p className="hero__subtitle">
          Comprehensive documentation of habitability violations and legal claims
        </p>
        <div className={styles.keyStats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>5+ months</span>
            <span className={styles.statLabel}>Unresolved Water Leak</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>51+ hours</span>
            <span className={styles.statLabel}>No Heat in Winter</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>$147,210</span>
            <span className={styles.statLabel}>Treble Damages</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>73+ days</span>
            <span className={styles.statLabel}>Case Management</span>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--danger button--lg"
            to="/docs/intro">
            📋 Read Full Documentation
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/overview/executive-summary">
            ⚡ Executive Summary
          </Link>
        </div>
      </div>
    </header>
  );
}

function CaseOverview() {
  return (
    <section className={styles.caseOverview}>
      <div className="container">
        <Heading as="h2">Critical Issues</Heading>
        <div className={styles.issuesGrid}>
          <div className={styles.issueCard}>
            <div className={styles.issueIcon}>💧</div>
            <Heading as="h3">Water Leak Crisis</Heading>
            <p>
              Persistent water leak causing 580% utility bill increase over 5+ months.
              FirstKey promised $1,161 credit but only provided $684, leaving $477.16 outstanding.
            </p>
            <Link to="/docs/overview/water-leak">Learn more →</Link>
          </div>

          <div className={styles.issueCard}>
            <div className={styles.issueIcon}>❄️</div>
            <Heading as="h3">Heating System Failure</Heading>
            <p>
              Complete HVAC failure in December with indoor temperature at 57°F.
              3-year-old child endangered. Vendor confirmed full replacement required.
              FirstKey offered broken portable heaters instead.
            </p>
            <Link to="/docs/overview/heating-failure">Learn more →</Link>
          </div>

          <div className={styles.issueCard}>
            <div className={styles.issueIcon}>📋</div>
            <Heading as="h3">Tenant Profile</Heading>
            <p>
              Perfect 3-year payment history. Senior VP at Bank of America. Software engineer.
              3-year-old daughter. Professional reputation damaged by forced absences.
            </p>
            <Link to="/docs/overview/tenant-profiles">Learn more →</Link>
          </div>

          <div className={styles.issueCard}>
            <div className={styles.issueIcon}>⚠️</div>
            <Heading as="h3">Multiple Violations</Heading>
            <p>
              Violations of N.C.G.S. § 42-42 (Implied Warranty of Habitability),
              § 42-38 (Landlord Duties), and § 75-1.1 (Unfair Trade Practices).
            </p>
            <Link to="/docs/legal/violations">Learn more →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function DamagesOverview() {
  return (
    <section className={styles.damagesSection}>
      <div className="container">
        <Heading as="h2">Damages & Compensation</Heading>
        <div className={styles.damagesGrid}>
          <div className={styles.damageType}>
            <Heading as="h3">Actual Damages</Heading>
            <p className={styles.largeNumber}>$49,070</p>
            <ul>
              <li>Water leak: $5,742</li>
              <li>Heating failure: $2,928</li>
              <li>Professional impact: $9,000</li>
              <li>Child endangerment: $8,500</li>
              <li>Emotional distress: $15,000</li>
              <li>Time & effort: $4,900</li>
              <li>Miscellaneous: $3,000</li>
            </ul>
          </div>

          <div className={styles.damageType}>
            <Heading as="h3">Treble Damages (3x)</Heading>
            <p className={styles.largeNumber}>$147,210</p>
            <p>Applied under N.C.G.S. § 75-1.1 for willful unfair trade practices:</p>
            <ul>
              <li>Pattern of broken promises</li>
              <li>Deliberate delay tactics</li>
              <li>Bad faith customer service</li>
              <li>Knowing child endangerment</li>
              <li>Vendor confirmation ignored</li>
            </ul>
          </div>

          <div className={styles.damageType}>
            <Heading as="h3">With Attorney Fees</Heading>
            <p className={styles.largeNumber}>$160,000+</p>
            <p>Total exposure includes:</p>
            <ul>
              <li>Punitive damages: $10,000-$50,000</li>
              <li>Attorney fees: $7,500-$22,000</li>
              <li>Court costs: $500-$2,000</li>
              <li>Expert witnesses: $2,000-$5,000</li>
              <li>Ongoing daily damage accumulation</li>
            </ul>
          </div>
        </div>
        <div className={styles.damagesAction}>
          <Link className="button button--warning button--lg" to="/docs/damages/calculation">
            📊 Full Damages Breakdown
          </Link>
        </div>
      </div>
    </section>
  );
}

function SettlementSection() {
  return (
    <section className={styles.settlementSection}>
      <div className="container">
        <Heading as="h2">Settlement & Legal Action</Heading>
        <div className={styles.settlementGrid}>
          <div className={styles.settlementOption}>
            <Heading as="h3">🤝 Settlement Demand</Heading>
            <div className={styles.demandBox}>
              <p><strong>Primary Offer:</strong></p>
              <ul>
                <li>Cash payment: $35,000</li>
                <li>Outstanding credit: $477.16</li>
                <li>HVAC replacement timeline</li>
                <li>Lease termination without penalty</li>
                <li>Full deposit return</li>
                <li>Positive reference letter</li>
              </ul>
            </div>
            <Link to="/docs/settlement/demands">View all settlement options →</Link>
          </div>

          <div className={styles.settlementOption}>
            <Heading as="h3">⚖️ Legal Timeline</Heading>
            <div className={styles.timelineBox}>
              <div className={styles.timelineItem}>
                <span className={styles.timelineDate}>Dec 13, 8 PM</span>
                <span>Final settlement deadline</span>
              </div>
              <div className={styles.timelineItem}>
                <span className={styles.timelineDate}>Dec 16</span>
                <span>File lawsuit (if no settlement)</span>
              </div>
              <div className={styles.timelineItem}>
                <span className={styles.timelineDate}>Dec 16+</span>
                <span>Regulatory complaints filed</span>
              </div>
              <div className={styles.timelineItem}>
                <span className={styles.timelineDate}>30-60 days</span>
                <span>Small claims or superior court date</span>
              </div>
            </div>
          </div>

          <div className={styles.settlementOption}>
            <Heading as="h3">📄 Next Steps</Heading>
            <div className={styles.actionBox}>
              <ol>
                <li>Send final demand letter</li>
                <li>Establish rent escrow</li>
                <li>Document all evidence</li>
                <li>Consult with attorney</li>
                <li>File regulatory complaints</li>
                <li>Prepare court filing</li>
              </ol>
            </div>
            <Link to="/docs/resources/action-items">View full action plan →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function DocumentationGuide() {
  return (
    <section className={styles.guideSection}>
      <div className="container">
        <Heading as="h2">Documentation Guide</Heading>
        <div className={styles.guideGrid}>
          <Link to="/docs/intro" className={styles.guideCard}>
            <span className={styles.guideIcon}>📋</span>
            <Heading as="h3">Introduction</Heading>
            <p>Case overview and quick reference guide</p>
          </Link>

          <Link to="/docs/legal/violations" className={styles.guideCard}>
            <span className={styles.guideIcon}>⚖️</span>
            <Heading as="h3">Legal Framework</Heading>
            <p>NC statutes, violations, and legal claims</p>
          </Link>

          <Link to="/docs/timeline/detailed-timeline" className={styles.guideCard}>
            <span className={styles.guideIcon}>📅</span>
            <Heading as="h3">Timeline</Heading>
            <p>Detailed chronology of all events</p>
          </Link>

          <Link to="/docs/damages/calculation" className={styles.guideCard}>
            <span className={styles.guideIcon}>💰</span>
            <Heading as="h3">Damages</Heading>
            <p>Financial impact and compensation calculations</p>
          </Link>

          <Link to="/docs/settlement/demands" className={styles.guideCard}>
            <span className={styles.guideIcon}>🤝</span>
            <Heading as="h3">Settlement</Heading>
            <p>Settlement demands and negotiation strategy</p>
          </Link>

          <Link to="/docs/resources/email-templates" className={styles.guideCard}>
            <span className={styles.guideIcon}>📧</span>
            <Heading as="h3">Resources</Heading>
            <p>Templates, contacts, and action items</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Legal Documentation`}
      description="Comprehensive documentation of FirstKey Homes habitability violations, legal claims, and settlement demands">
      <HomepageHeader />
      <main>
        <CaseOverview />
        <DamagesOverview />
        <SettlementSection />
        <DocumentationGuide />
      </main>
    </Layout>
  );
}
