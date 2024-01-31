import { Experiences } from '@/containers/experiences/experiences'
import { CardExperiencia } from '@/containers/experiences/experienceCard/experienceCard'

import { render } from '@testing-library/react'

describe('Containers/Experiences', () => {
  it('should render correctly', () => {
    const { container } = render(<Experiences />)

    expect(container).toMatchSnapshot()
  })

  it('should render correctly in mobile experience', () => {
    const { container } = render(<Experiences />)

    expect(container).toMatchSnapshot()
  })

  it('should render correctly card experience', () => {
    const { container } = render(
      <CardExperiencia
        company="company"
        companyLink="companyLink"
        description="description"
        logoUrl="logoUrl"
        period="period"
        title="title"
      />
    )

    expect(container).toMatchSnapshot()
  })
})
