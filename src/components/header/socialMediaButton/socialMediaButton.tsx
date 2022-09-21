import { IconType } from 'react-icons';

interface SocialMediaButtonProps {
  Icon: IconType;
  link: string;
}

const SocialMediaButton = ({ Icon, link }: SocialMediaButtonProps) => {
  return (
    <button onClick={() => window.open(link)}>
      <Icon className="w-6 h-6 fill-zinc-500 md:hover:fill-text transition-all bg-transparent" />
    </button>
  );
};

export { SocialMediaButton };
