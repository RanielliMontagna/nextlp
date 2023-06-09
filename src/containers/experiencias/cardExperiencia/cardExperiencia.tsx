import { motion } from 'framer-motion';
import { ExperienciasProps } from '../experiencias.static';

export function CardExperiencia({
  logoUrl,
  cargo,
  empresa,
  empresaUrl,
  periodo,
  descricao,
}: ExperienciasProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="bg-[#272a30] rounded-lg shadow-lg p-12 flex flex-col gap-4  max-w-4xl"
    >
      <div className="flex justify-center">
        <img src={logoUrl} alt={`${empresa}-logo`} className="w-32 h-32" />
      </div>
      <div>
        <motion.h2 className="text-2xl font-semibold text-center text-white">
          {cargo} @{' '}
          <span
            className="text-accent cursor-pointer"
            onClick={() => window.open(empresaUrl, '_blank')}
          >
            {empresa}
          </span>
        </motion.h2>
        <motion.h3 className="text-lg font-semibold text-center text-gray-300">{periodo}</motion.h3>
      </div>
      <div className="flex flex-col gap-2">
        <ul>
          {descricao.map((item, index) => {
            return (
              <motion.li key={index} className="text-lg text-gray-300">
                {item}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}
