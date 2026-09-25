'use client'

import { Database, Shield, Lock, FileText, Brain, AlertCircle } from 'lucide-react'
import styles from '@/styles/Services.module.css'

const Services = () => {
  const services = [
    {
      icon: Database,
      title: 'Systems Administration',
      description: 'Comprehensive server and infrastructure management, monitoring, and optimization for enterprise environments.',
    },
    {
      icon: Zap,
      title: 'DevOps Automation',
      description: 'CI/CD pipelines, containerization, orchestration, and infrastructure-as-code solutions for rapid deployment.',
    },
    {
      icon: Shield,
      title: 'DevSecOps',
      description: 'Integrated security into your development pipeline with vulnerability scanning, SAST, DAST, and compliance automation.',
    },
    {
      icon: FileText,
      title: 'Notary Services',
      description: 'Content signing and verification solutions ensuring integrity and authenticity of your digital assets.',
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Seamless integration of AI and ML models into your infrastructure and applications for intelligent automation.',
    },
    {
      icon: AlertCircle,
      title: 'AI Security',
      description: 'Advanced threat detection, anomaly detection, and AI-powered security operations for next-generation defense.',
    },
  ]

  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <div className={styles.header}>
          <h2>Our Services</h2>
          <p>Comprehensive IT consulting and managed services</p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Icon size={32} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services

const Zap = AlertCircle
