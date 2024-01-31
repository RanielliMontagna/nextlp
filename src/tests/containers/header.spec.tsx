import { Header } from '@/containers/header/header'

import { render } from '@testing-library/react'

describe('Containers/Header', () => {
  it('should render correctly', () => {
    const { container } = render(<Header />)

    expect(container).toMatchSnapshot()
  })
})
