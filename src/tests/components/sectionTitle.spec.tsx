import { render } from '@testing-library/react'

import SectionTitle from '@/components/sectionTitle/sectionTitle'

describe('Component/SectionTitle', () => {
  it('should render correctly', () => {
    const { container } = render(<SectionTitle title="Test" />)
    expect(container).toMatchSnapshot()
  })
})
