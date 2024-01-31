import { render } from '@testing-library/react'

import { Footer } from '@/components/footer/footer'

describe('Component/Footer', () => {
  it('should render correctly', () => {
    const { container } = render(<Footer />)
    expect(container).toMatchSnapshot()
  })
})
