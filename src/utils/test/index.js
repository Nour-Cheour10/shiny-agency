import { render as rtlRender } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'
 
function Wrapper({ children }) {
    return <ThemeProvider>{children}</ThemeProvider>
}
 
export function render(ui) {
    rtlRender(ui, { wrapper: Wrapper })
}