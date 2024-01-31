import { About } from '@/containers/about/about'

import { render } from '@testing-library/react'

describe('Containers/About', () => {
  it('should render correctly', () => {
    const { container } = render(<About />)

    expect(container).toMatchSnapshot()
  })
})
