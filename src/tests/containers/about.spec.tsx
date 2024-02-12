import { About } from '@/containers/about/about'

import { render } from '@testing-library/react'

import useMediaQuery from '@/hooks/useMediaQuery'

jest.mock('@/hooks/useMediaQuery')

const mockUseMediaQuery = useMediaQuery as jest.Mock

describe('Containers/About', () => {
  it('should render correctly', () => {
    mockUseMediaQuery.mockReturnValue(false)

    const { container } = render(<About />)

    expect(container).toMatchSnapshot()
  })

  it('should render correctly on mobile', () => {
    mockUseMediaQuery.mockReturnValue(true)

    const { container } = render(<About />)

    expect(container).toMatchSnapshot()
  })
})
