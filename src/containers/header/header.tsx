import { motion } from 'framer-motion'
import { FaLinkedinIn, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa'

import { email, instagram, linkedin, twitter } from '@/shared/links'
import logo from '@/assets/others/logo.svg'

import { SocialMediaButton } from './socialMediaButton/socialMediaButton'
import Image from 'next/image'

export function Header() {
  return (
    <div className="sticky top-0 z-10">
      <header className="w-72 flex justify-center max-w-7xl mx-auto z-10 p-4 bg-background bg-opacity-50 backdrop-blur-lg border-b border-zinc-500 radius-b-2xl rounded-b-2xl">
        <motion.div className="flex gap-4 flex-1 justify-center md:flex-initial md:justify-start">
          <SocialMediaButton link={linkedin} Icon={FaLinkedinIn} />
          <SocialMediaButton link={instagram} Icon={FaInstagram} />
          <motion.div
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Image
              src={logo}
              alt="Logo"
              priority={true}
              width={40}
              height={40}
              className="w-10 hover:scale-110 transform duration-300 ease-in-out hover:translate-y-1"
            />
          </motion.div>
          <SocialMediaButton link={twitter} Icon={FaTwitter} />
          <SocialMediaButton link={email} Icon={FaEnvelope} />
        </motion.div>
      </header>
    </div>
  )
}
