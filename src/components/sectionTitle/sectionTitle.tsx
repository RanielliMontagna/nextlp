import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="flex justify-center pb-16 "
    >
      <h3 className="top-24 uppercase tracking-[15px] text-2xl fill-text">{title}</h3>
    </motion.div>
  );
}
