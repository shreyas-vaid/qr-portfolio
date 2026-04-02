import './App.css'
import profile from './assets/profile.jpg'
import QR from './QR'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaGithub, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa'

export default function App() {

  const [dark, setDark] = useState(false)
  const [text, setText] = useState("")
  const fullText = "Hi, I'm Shreyas 👋"

  // Typing effect
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) clearInterval(interval)
    }, 80)
    return () => clearInterval(interval)
  }, [])

  const links = [
    { icon: <FaInstagram />, url: "https://www.instagram.com/rewritten_shreyas?igsh=cHd1anR2cmltMDd2" },
    { icon: <FaGithub />, url: "https://github.com/shreyas-vaid" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/shreyas-vaid-447b20320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }
  ]

  return (
    <div className={dark ? "container dark" : "container"}>

      {/* Theme Toggle */}
      <button className="theme-btn" onClick={() => setDark(!dark)}>
        {dark ? <FaSun /> : <FaMoon />}
      </button>

      <motion.div 
        className="card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >

        {/* Profile */}
        <img src={profile} alt="profile" className="profile" />

        {/* Typing Intro */}
        <h1 className="typing">{text}</h1>

        {/* Bio */}
        <p className="bio">
          🚀 Developer | 🎓 Student | ☕ Coffee lover  
          Building cool stuff & exploring tech
        </p>

        {/* QR Code */}
        <QR />

        {/* Social Links */}
        <div className="links">
          {links.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          ))}
        </div>

        {/* Projects */}
        <div className="section">
          <h3>Projects</h3>
          <p>• Youtube Clone</p>
          <p>• Study Planner</p>
        </div>

      </motion.div>
    </div>
  )
}