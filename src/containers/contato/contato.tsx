import { motion } from 'framer-motion';
import { SectionTitle } from '../../components/sectionTitle/sectionTitle';
import { email } from '../../shared/links';

const Contato = () => {
  return (
    <div className="py-16 max-w-7xl flex flex-col items-center text-center mx-auto p-8">
      <SectionTitle title="Contato" />
      <motion.p
        initial={{ x: 500, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="max-w-4xl text-center text-lg"
      >
        Embora eu não esteja atualmente procurando novas oportunidades, minha caixa de entrada está
        sempre aberta. Se você tiver alguma dúvida ou quiser apenas dizer oi, não hesite em me
        enviar um e-mail. <br /> Eu vou responder o mais rápido possível!
      </motion.p>
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <button
          className="mt-4 px-6 py-2 border border-accent text-accent rounded-full
          hover:bg-emerald-900 transition duration-300 ease-in-out font-semibold"
          onClick={() => window.open(email)}
        >
          Clique aqui para enviar um e-mail
        </button>
      </motion.div>
    </div>
  );
};

export { Contato };
