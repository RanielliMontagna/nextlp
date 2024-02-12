import { Card } from '@/components/card/card'
import { render } from '@testing-library/react'

describe('Component/Card', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Card
        name="name"
        description="description"
        index={0}
        topics={['topic1', 'topic2']}
        githubUrl="url"
      />
    )

    expect(container).toMatchSnapshot()
  })

  it('should render correctly without githubUrl', () => {
    const { container } = render(
      <Card name="name" description="description" index={0} topics={['topic1', 'topic2']} />
    )

    expect(container).toMatchSnapshot()
  })
})
