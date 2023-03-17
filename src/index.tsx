import { createTheme, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import SignIn from './components/SignIn'
import App from './containers/App'
import Dashboard from './routes/Dashboard'
import Services from './routes/Services'

const router = createBrowserRouter([
  {
    path: '/signin',
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/services',
        element: <Services />,
      },
    ],
  },
])

const theme = createTheme({
  palette: {
    primary: {
      main: '#363740',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
