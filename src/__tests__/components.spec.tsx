import { act, fireEvent, render, screen } from './test-utils'

import { Card } from '@/components/card/card'
import { Footer } from '@/components/footer/footer'
import { SectionTitle } from '@/components/sectionTitle/sectionTitle'

import { github } from '@/shared/links'

vi.mock('@/hooks/useMediaQuery')

describe('Components', () => {
  describe('Card', () => {
    it('should render the card component', () => {
      render(
        <Card
          description="Card description"
          index={1}
          name="Card title"
          topics={['topic1', 'topic2']}
          githubUrl="example.com"
        />,
      )

      screen.getByText('Card title')
      screen.getByText('Card description')
    })

    it('should render the card component with more than 3 topics', () => {
      render(
        <Card
          description="Card description"
          index={1}
          name="Card title"
          topics={['topic1', 'topic2', 'topic3', 'topic4']}
          githubUrl="example.com"
        />,
      )

      screen.getByText('+1')
    })

    it('should render the card component without github url', () => {
      render(
        <Card
          description="Card description"
          index={1}
          name="Card title"
          topics={['topic1', 'topic2']}
        />,
      )

      screen.getByText('Card title')
      screen.getByText('Card description')
    })

    it('should open the github url when clicked', () => {
      vi.spyOn(window, 'open')

      render(
        <Card
          description="Card description"
          index={1}
          name="Card title"
          topics={['topic1', 'topic2']}
          githubUrl="example.com"
        />,
      )

      act(() => {
        fireEvent.click(screen.getByText('Card title'))
      })

      expect(window.open).toHaveBeenCalledWith('example.com', '_blank')
    })
  })

  describe('Footer', () => {
    it('should render the footer component', () => {
      render(<Footer />)

      screen.getByText('Ranielli Montagna')
    })

    it('should render the footer and open the github url when clicked', () => {
      vi.spyOn(window, 'open')

      render(<Footer />)

      act(() => {
        fireEvent.click(screen.getByText('Ranielli Montagna'))
      })

      expect(window.open).toHaveBeenCalledWith(github, '_blank')
    })
  })

  describe('SectionTitle', () => {
    it('should render the section title component', () => {
      render(<SectionTitle title="Section title" />)

      screen.getByText('Section title')
    })
  })
})
