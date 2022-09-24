import { motion } from 'framer-motion';
import { FaLinkedinIn, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

import { email, instagram, linkedin, twitter } from '../../shared/links';
import { SocialMediaButton } from './socialMediaButton/socialMediaButton';

const Header = () => {
  return (
    <header className="sticky top-0 flex justify-between max-w-7xl mx-auto z-10 p-4">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.3,
        }}
        className="flex gap-4 flex-1 justify-center md:flex-initial md:justify-start"
      >
        <SocialMediaButton link={linkedin} Icon={FaLinkedinIn} alt="Linkedin" />
        <SocialMediaButton link={instagram} Icon={FaInstagram} alt="Instagram" />
        <SocialMediaButton link={twitter} Icon={FaTwitter} alt="Twitter" />
        <SocialMediaButton link={email} Icon={FaEnvelope} alt="Email" />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.3,
        }}
        className="items-center hidden md:flex cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <img
          src="assets/svgs/logo.svg"
          alt="Logo"
          className="w-10 hover:scale-110 transform duration-300 ease-in-out"
        />
      </motion.div>
    </header>
  );
};

export { Header };
