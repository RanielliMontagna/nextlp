import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  logoUrl: string;
  siteUrl: string;
  duration?: number;
  y?: number;
}

const Card = ({ title, logoUrl, siteUrl, duration = 1, y = 50 }: CardProps) => (
  <motion.div
    initial={{ y, opacity: 0 }}
    transition={{ duration }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <div
      className="flex flex-col items-center mt-4 md:mt-0 md:ml-4 hover:scale-110 transform transition duration-300 cursor-pointer w-20"
      onClick={() => window.open(siteUrl, '_blank')}
    >
      <img src={logoUrl} alt={title} className="w-16 h-16" />
      <p className="text-center mt-2">{title}</p>
    </div>
  </motion.div>
);

export { Card };
