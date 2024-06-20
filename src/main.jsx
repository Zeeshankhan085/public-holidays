import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'; 
import { ChakraProvider, Container, extendTheme } from '@chakra-ui/react'
import { CountryProvider } from './context.jsx';
import PublicHolidays from './components/PublicHolidays.jsx';
import Header from './components/Header.jsx';

function Main() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [{
      path: '',
      element: <App/>,
    },
    {
      path: "/country/:code",
      element: <PublicHolidays/>,
    },
  ]
    
  },

]);



const theme = extendTheme({
  colors: {
      primary: '#2C5282', 
    secondary: '#4299E1'
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CountryProvider>
 <Container maxWidth="1800px" padding={{base: 2, xl: 8}} paddingTop={{base: 0, xl: 0}}>
 <RouterProvider router={router}>

</RouterProvider>
 </Container>
    </CountryProvider>

    </ChakraProvider>

  </React.StrictMode>,
)
