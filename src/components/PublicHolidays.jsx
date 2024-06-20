import React from 'react'
import CountryHolidays from './CountryHolidays'
import { Flex, Box, Spacer } from '@chakra-ui/react'
import LongWeekends from './LongWeekends'
import PublicHolidaysHeader from './PublicHolidaysHeader'

function PublicHolidays() {
  return (
   <Box>
    <PublicHolidaysHeader/>
     <Flex direction={{base: 'column', xl: 'row'}} gap='4'>
      <Box width={{base: '100%', xl: '54%'}}>
    <CountryHolidays/>
    <Spacer />
      </Box>
      <Box width={{base: '100%', xl: '42%'}}>
    <LongWeekends/>
      </Box>
    </Flex>
   </Box>
  )
}

export default PublicHolidays