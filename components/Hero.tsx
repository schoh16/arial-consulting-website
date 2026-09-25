'use client'

import { ArrowRight, Shield, Zap } from 'lucide-react'
import styles from '@/styles/Hero.module.css'

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={`${styles.content} container`}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Enterprise IT Solutions for <span className="gradient-text">Modern Infrastructure</span>
          </h1>
          <p className={styles.subtitle}>
            From DevOps automation to AI security, we deliver comprehensive IT consulting services that scale with your business.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>
              Get Started <ArrowRight size={20} />
            </button>
            <button className={styles.secondaryBtn}>
              Learn More
            </button>
          </div>
        </div>
        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <Shield size={32} className={styles.icon} />
            <h3>Security First</h3>
            <p>Enterprise-grade security in every solution</p>
          </div>
          <div className={styles.feature}>
            <Zap size={32} className={styles.icon} />
            <h3>High Performance</h3>
            <p>Optimized for speed and reliability</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
