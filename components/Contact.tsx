'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'
import styles from '@/styles/Contact.module.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2>Get In Touch</h2>
        <p>Let's discuss how we can help transform your infrastructure</p>

        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <Mail size={24} />
              <div>
                <h4>Email</h4>
                <p>contact@arialconsulting.com</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <Phone size={24} />
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <MapPin size={24} />
              <div>
                <h4>Address</h4>
                <p>123 Tech Street, San Francisco, CA 94105</p>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a Service</option>
              <option value="systems-admin">Systems Administration</option>
              <option value="devops">DevOps Automation</option>
              <option value="devsecops">DevSecOps</option>
              <option value="notary">Notary Services</option>
              <option value="ai-integration">AI Integration</option>
              <option value="ai-security">AI Security</option>
            </select>
            <textarea
              name="message"
              placeholder="Tell us about your project"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
