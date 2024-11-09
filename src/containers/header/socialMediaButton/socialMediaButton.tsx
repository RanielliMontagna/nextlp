import Link from 'next/link'

import { IconType } from 'react-icons'

interface SocialMediaButtonProps {
  /**
   * O ícone do botão de mídia social que será exibido.
   */
  Icon: IconType

  /**
   * Link para onde o botão deve levar o usuário
   */
  link: string
}

export function SocialMediaButton({ Icon, link }: SocialMediaButtonProps) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <Icon
        className="w-6 h-6 fill-zinc-300 hover:fill-accent transition-all first-letter:
      hover:translate-y-1 hover:scale-110 transform duration-300 ease-in-out"
      />
    </Link>
  )
}
