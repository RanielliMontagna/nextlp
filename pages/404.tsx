import { motion } from 'framer-motion'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen py-2 gap-4">
      <motion.img
        src="assets/svgs/404.svg"
        alt="404"
        className="p-8"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
      <div className="text-center gap-1 flex flex-col">
        <motion.h1
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Você está perdido?
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          transition={{ delay: 0.2, duration: 1 }}
          animate={{ opacity: 1, y: 0 }}
        >
          A página que você está procurando não existe ou foi removida.
        </motion.h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        transition={{ delay: 0.4, duration: 1 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button
          className="px-6 py-2 border border-gray-500 rounded-full uppercase text-xs 
                     tracking-widest text-gray-100 transition-all hover:border-accent hover:text-accent"
          onClick={() => (window.location.href = '/')}
        >
          Voltar para a página inicial
        </button>
      </motion.div>
    </div>
  )
}

export default NotFound
