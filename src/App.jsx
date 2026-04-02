import './App.css'
import QR from './QR'
import profile from './assets/profile.jpg'
import { motion } from 'framer-motion'

export default function App() {

  return (
    <div className="container">

      <motion.div 
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        {/* Profile */}
        <img src={profile} className="profile" />

        {/* Name */}
        <h2>Shreyas Vaid</h2>

        {/* Bio */}
        <p className="bio">
          🚀 Developer • 🎓 Student • ☕ Coffee lover  
          <br />
          Building cool stuff & exploring tech
        </p>

        {/* QR */}
        <div className="qr-box">
          <QR />
        </div>

        <p className="scan-text">
          Scan this QR code with your device
        </p>

      </motion.div>

    </div>
  )
}