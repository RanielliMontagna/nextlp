import React from 'react'
import '@testing-library/jest-dom'
import Image from 'next/image'

// Mock i18n
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}))

// useTranslation

// Mock framer-motion
jest.mock('framer-motion', () => ({
  ...jest.requireActual('framer-motion'),
  motion: {
    ...jest.requireActual('framer-motion').motion,
    div: jest.fn().mockImplementation(({ children }) => <div>{children}</div>),
    img: jest
      .fn()
      .mockImplementation(({ src, alt, width, height }) => (
        <Image src={src} alt={alt} width={width} height={height} />
      )),
    h1: jest.fn().mockImplementation(({ children }) => <h1>{children}</h1>),
    h2: jest.fn().mockImplementation(({ children }) => <h2>{children}</h2>),
    h3: jest.fn().mockImplementation(({ children }) => <h3>{children}</h3>),
    h4: jest.fn().mockImplementation(({ children }) => <h4>{children}</h4>),
    h5: jest.fn().mockImplementation(({ children }) => <h5>{children}</h5>),
    h6: jest.fn().mockImplementation(({ children }) => <h6>{children}</h6>),
    p: jest.fn().mockImplementation(({ children }) => <p>{children}</p>),
    li: jest.fn().mockImplementation(({ children }) => <li>{children}</li>),
  },
}))

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})
