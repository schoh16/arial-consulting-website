'use client'

import styles from '@/styles/Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.section}>
            <h4>Arial Consulting Firm</h4>
            <p>Enterprise IT solutions for modern infrastructure</p>
          </div>
          <div className={styles.section}>
            <h5>Services</h5>
            <ul>
              <li><a href="#services">Systems Administration</a></li>
              <li><a href="#services">DevOps Automation</a></li>
              <li><a href="#services">DevSecOps</a></li>
              <li><a href="#services">AI Integration</a></li>
            </ul>
          </div>
          <div className={styles.section}>
            <h5>Company</h5>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#cases">Case Studies</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className={styles.section}>
            <h5>Legal</h5>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {currentYear} Arial Consulting Firm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
