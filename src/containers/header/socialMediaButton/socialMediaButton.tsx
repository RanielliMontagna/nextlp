import { IconType } from 'react-icons';

interface SocialMediaButtonProps {
  /**
   * O ícone do botão de mídia social que será exibido.
   */
  Icon: IconType;

  /**
   * Link para onde o botão deve levar o usuário
   */
  link: string;

  /**
   * @description Texto alternativo para o botão de mídia social (ex: "Linkedin")
   */
  alt?: string;
}

const SocialMediaButton = ({ Icon, link, alt }: SocialMediaButtonProps) => {
  return (
    <button onClick={() => window.open(link)} aria-label={alt}>
      <Icon className="w-6 h-6 fill-zinc-500 md:hover:fill-text transition-all bg-transparent" />
    </button>
  );
};

export { SocialMediaButton };
