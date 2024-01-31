import { Projects } from '@/containers/projects/projects'

import { render } from '@testing-library/react'

describe('Containers/Projects', () => {
  it('should render correctly', () => {
    const { container } = render(<Projects />)

    expect(container).toMatchSnapshot()
  })
})
