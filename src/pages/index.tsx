import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title"> Property Management Issues </Heading>
        <p className="hero__subtitle">
          I created the following documentation site to clearly outline what we've been experiencing with FirstKey Homes. In a phone call, it's hard to fully explain the scope and sequence of these issues. This resource exists to do what conversations often can't: show the full picture, step by step, in one place. If you have any questions, please contact me at 332-600-9573.
        </p>
        <div className={styles.keyStats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>5+ months</span>
            <span className={styles.statLabel}>Excessive Water Charges</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>181 hours</span>
            <span className={styles.statLabel}>No Heat in Winter</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>75+ days</span>
            <span className={styles.statLabel}>Case Management</span>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/settlement-demand"
          >
            Continue Reading
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
              Persistent water leak causing 580% utility bill increase over 5+
              months.
            </p>
            <Link to="/docs/overview/water-leak">Learn more →</Link>
          </div>

          <div className={styles.issueCard}>
            <div className={styles.issueIcon}>❄️</div>
            <Heading as="h3">Heating System Failure</Heading>
            <p>
              Complete HVAC failure in December with indoor temperature at 44°F.
              3-year-old child. Vendor confirmed full replacement required.
              FirstKey offered broken portable heaters instead.
            </p>
            <Link to="/docs/overview/heating-failure">Learn more →</Link>
          </div>

          <div className={styles.issueCard}>
            <div className={styles.issueIcon}>📋</div>
            <Heading as="h3">Customer Service</Heading>
            <p>
              Ongoing delays, broken promises, and lack of transparency in case
              management.
            </p>
            <Link to="/docs/overview/tenant-profiles">Learn more →</Link>
          </div>

          {/* <div className={styles.issueCard}>
            <div className={styles.issueIcon}>⚠️</div>
            <Heading as="h3">Multiple Violations</Heading>
            <p>
              Violations of N.C.G.S. § 42-42 (Implied Warranty of Habitability),
              § 42-38 (Landlord Duties), and § 75-1.1 (Unfair Trade Practices).
            </p>
            <Link to="/docs/legal/violations">Learn more →</Link>
          </div> */}
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
            <p>
              Applied under N.C.G.S. § 75-1.1 for willful unfair trade
              practices:
            </p>
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
          <Link
            className="button button--warning button--lg"
            to="/docs/damages/calculation"
          >
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
        <Heading as="h2">What My Family is Looking For</Heading>
        <div className={styles.settlementGrid}>
          <div className={styles.settlementOption}>
            <Heading as="h3">Settlement</Heading>
            <div className={styles.demandBox}>
              <ul>
                <li>Cash Payment</li>
                <li>Outstanding Credit</li>
                <li>Full Deposit Return</li>
                <li>Neutral Reference Letter</li>
                <li>Lease Termination Without Penalty</li>
              </ul>
            </div>
            <p>
              We're not <strong>Subject Mater Experts</strong> at law and we're emotional right now. We just want a fair resolution to move on with our lives.
            </p>
          </div>

          {/* <div className={styles.settlementOption}>
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
          </div> */}

          {/* <div className={styles.settlementOption}>
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
            <Link to="/docs/resources/action-items">
              View full action plan →
            </Link>
          </div> */}
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

          <Link
            to="/docs/timeline/detailed-timeline"
            className={styles.guideCard}
          >
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

          <Link
            to="/docs/resources/email-templates"
            className={styles.guideCard}
          >
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
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Legal Documentation`}
      description="Comprehensive documentation of FirstKey Homes habitability violations, legal claims, and settlement demands"
    >
      <HomepageHeader />
      <main>
        <CaseOverview />
        {/* <DamagesOverview /> */}
        <SettlementSection />
        {/* <DocumentationGuide /> */}
      </main>
    </Layout>
  );
}
