import { Contact } from '@/containers/contact/contact'

import { render } from '@testing-library/react'

describe('Containers/Contact', () => {
  it('should render correctly', () => {
    const { container } = render(<Contact />)

    expect(container).toMatchSnapshot()
  })
})
