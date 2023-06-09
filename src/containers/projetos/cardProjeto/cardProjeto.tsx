import { motion } from 'framer-motion'

import { BsFolder } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'

import { IListaProjetos } from '../projetos.static'

interface ICardProjeto extends IListaProjetos {
  index: number
}

export function CardProjeto({ nome, descricao, github, tecnologias, index }: ICardProjeto) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 + index * 10 }}
      transition={{ duration: 0.5 + index * 0.1 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="flex"
    >
      <motion.div
        initial={{ y: 0 }}
        whileHover={{
          y: -5,
        }}
        className="bg-[#272a30] rounded-lg shadow-lg p-8 flex flex-col space-y-4 relative pb-16 cursor-pointer"
        onClick={() => window.open(github, '_blank')}
      >
        <div className="flex items-center justify-between">
          <BsFolder size={32} className="text-accent" />
          <div>
            <FiGithub
              size={24}
              className="text-white hover:text-accent transform hover:scale-110 transition duration-200"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <h2 className="text-lg font-semibold ">{nome}</h2>
            <p className="text-gray-300">{descricao}</p>
          </div>
          {/* align div in bottom */}
          <div className="flex gap-2 mt-4 flex-wrap absolute bottom-0 pb-4">
            {tecnologias.map((tecnologia, index) => {
              return (
                <div
                  key={index}
                  className="px-2 py-1 bg-[#1e2126] rounded-lg text-gray-300 text-sm"
                >
                  {tecnologia}
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
