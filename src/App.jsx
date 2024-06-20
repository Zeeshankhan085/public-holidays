import { useState } from 'react'
import AvailableCountries from './components/AvailableCountries'
import NextPublicHolidaysWorldwide from './components/NextPublicHolidaysWorldwide'
import {  Flex, Box } from '@chakra-ui/react'
import NextLocalPublicHolidays from './components/NextLocalPublicHolidays'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Flex flexDirection={{base: 'column', xl: 'row'}}>
      <Box w={{base: '100%', xl: '50%'}}>
      <AvailableCountries/>
    <Box mt={8}>
    <NextPublicHolidaysWorldwide/>
    </Box>
      </Box>
      <Box ml={{xl: 8, }} mt={{base: 8, xl: 0}} w={{base: '100%', xl: '50%'}}>
    <NextLocalPublicHolidays />
      </Box>
    </Flex>
 
     
    </>
  )
}

export default App
