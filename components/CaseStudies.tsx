'use client'

import styles from '@/styles/CaseStudies.module.css'

const CaseStudies = () => {
  const cases = [
    {
      title: 'Enterprise DevOps Transformation',
      client: 'Fortune 500 Tech Company',
      description: 'Reduced deployment time from 2 weeks to 2 hours with automated CI/CD pipelines.',
      results: ['95% reduction in deployment time', '99.99% uptime', '40% cost reduction'],
    },
    {
      title: 'Zero-Trust Security Implementation',
      client: 'Financial Services Organization',
      description: 'Implemented comprehensive DevSecOps and AI-powered threat detection across all systems.',
      results: ['100% threat detection rate', 'Zero breaches in 2 years', 'Full compliance achieved'],
    },
    {
      title: 'AI-Powered Operations Center',
      client: 'Global Manufacturing Firm',
      description: 'Deployed AI anomaly detection for predictive maintenance and automated incident response.',
      results: ['30% reduction in downtime', '45% operational cost savings', 'Real-time threat response'],
    },
  ]

  return (
    <section id="cases" className={styles.caseStudies}>
      <div className="container">
        <div className={styles.header}>
          <h2>Case Studies</h2>
          <p>Real-world results from our enterprise clients</p>
        </div>

        <div className={styles.grid}>
          {cases.map((caseStudy, index) => (
            <div key={index} className={styles.card}>
              <h3>{caseStudy.title}</h3>
              <p className={styles.client}>{caseStudy.client}</p>
              <p className={styles.description}>{caseStudy.description}</p>
              <div className={styles.results}>
                <h4>Key Results:</h4>
                <ul>
                  {caseStudy.results.map((result, idx) => (
                    <li key={idx}>{result}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
