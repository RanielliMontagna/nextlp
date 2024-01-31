import { Hero } from '@/containers/hero/hero'

import { render } from '@testing-library/react'

describe('Containers/Hero', () => {
  it('should render correctly', () => {
    const { container } = render(<Hero />)

    expect(container).toMatchSnapshot()
  })
})
