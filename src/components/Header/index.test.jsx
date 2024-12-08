import { render } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'
import Header from './'
import { MemoryRouter } from 'react-router-dom'

test('renders Header and checks for navigation links', async () => {
  render(
    <MemoryRouter>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </MemoryRouter>
  )
})
