import { Error } from '@/containers/error/error'

import { render } from '@testing-library/react'

describe('Containers/Error', () => {
  it('should render correctly with 404', () => {
    const { container } = render(<Error type="404" />)

    expect(container).toMatchSnapshot()
  })

  it('should render correctly with 500', () => {
    const { container } = render(<Error type="500" />)

    expect(container).toMatchSnapshot()
  })
})
