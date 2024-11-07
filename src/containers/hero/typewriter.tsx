import { Cursor, useTypewriter } from 'react-simple-typewriter'

interface TypeWriterProps {
  words: string[]
}

export function TypeWriter({ words }: TypeWriterProps) {
  const [text] = useTypewriter({
    words: words,
    loop: true,
    delaySpeed: 1000,
  })

  return (
    <>
      <span>{text}</span>
      <Cursor cursorColor="#05edab" />
    </>
  )
}
