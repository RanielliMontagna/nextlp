import { motion } from 'framer-motion'
import { FaLinkedinIn, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa'

import { email, instagram, linkedin, twitter } from '@/shared/links'
import logo from '@/assets/others/logo.svg'

import { SocialMediaButton } from './socialMediaButton/socialMediaButton'
import Image from 'next/image'

export function Header() {
  return (
    <header className="sticky top-0 flex justify-between max-w-7xl mx-auto z-10 p-4">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="flex gap-4 flex-1 justify-center md:flex-initial md:justify-start"
      >
        <SocialMediaButton link={linkedin} Icon={FaLinkedinIn} />
        <SocialMediaButton link={instagram} Icon={FaInstagram} />
        <SocialMediaButton link={twitter} Icon={FaTwitter} />
        <SocialMediaButton link={email} Icon={FaEnvelope} />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="items-center hidden md:flex cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Image
          src={logo}
          alt="Logo"
          priority={true}
          className="w-10 hover:scale-110 transform duration-300 ease-in-out"
        />
      </motion.div>
    </header>
  )
}
