import React from 'react'
import {useCountryContext} from '../context'
import { Text, Box, Flex } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import useFetchData from '../hooks/fetchData'



function PublicHolidaysHeader() {
  const params = useParams()

  const {data} = useFetchData(`/CountryInfo/${params.code}/`)


  const {holidays, currentYear} = useCountryContext()
  return (
    <Box pb={6}>
      {data && (
        <Flex alignItems={{base: "center", '2xl': "start"}} flexDirection="column">
        <Text fontSize={{base: '2xl', sm: '3xl', xl: '6xl'}}>Public Holidays in {data.commonName} {currentYear}</Text>
        <Text align={{base: 'center', '2xl': 'left'}}>Discover the National Holidays for Greenland and plan your long weekends with our guide. Find all the information you need in one place.</Text>
        </Flex>
      )}
    </Box>
  )
}

export default PublicHolidaysHeader