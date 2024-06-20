import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'


function CountryItem({country}) {
  return (
    <ChakraLink color="secondary" px={4} py={1} as={ReactRouterLink} to={`/country/${country.countryCode}`}>
    {country.name}
    </ChakraLink>
  )
}

export default CountryItem