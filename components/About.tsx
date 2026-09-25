'use client'

import styles from '@/styles/About.module.css'

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2>About Arial Consulting Firm</h2>
            <p>
              Arial Consulting Firm is a leading provider of enterprise IT solutions, specializing in infrastructure automation, security integration, and artificial intelligence deployment.
            </p>
            <p>
              With deep expertise in Systems Administration, DevOps, DevSecOps, Notary services, AI Integration, and AI Security, we help organizations modernize their infrastructure while maintaining the highest security standards.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <h4>500+</h4>
                <p>Projects Completed</p>
              </div>
              <div className={styles.stat}>
                <h4>50+</h4>
                <p>Enterprise Clients</p>
              </div>
              <div className={styles.stat}>
                <h4>15+</h4>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.placeholder}>
              <p>Team Building & Expertise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
