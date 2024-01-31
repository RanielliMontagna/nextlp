import { Technologies } from '@/containers/technologies/technologies'

import { render } from '@testing-library/react'

describe('Containers/Technologies', () => {
  it('should render correctly', () => {
    const { container } = render(<Technologies />)

    expect(container).toMatchSnapshot()
  })
})
