'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import styles from '@/styles/Navigation.module.css'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <h1>Arial Consulting</h1>
        </div>

        <button
          className={styles.menuToggle}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#cases">Case Studies</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
