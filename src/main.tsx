import { render } from 'preact'
import { App } from './app.tsx'
import './index.css'
import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter } from 'react-router-dom'
import './i18n/i18n.ts'

render(
    <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('app')!
)
