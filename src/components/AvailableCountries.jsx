import { Container, Flex, InputLeftElement, Box, Card, CardBody, Text, Input, VStack, InputGroup, HStack, Divider  } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon, SearchIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import { MdPublic } from 'react-icons/md'
import api from '../api'
import CountryItem from './CountryItem'
import Pagination from './Pagination'
function AvailableCountries() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    (async() => {
      const res = await api.get('/AvailableCountries');
      setCountries(res.data)
    })()
  }, [])
  return (
    <Box>
    <Card variant="outline">
      <CardBody p={0}>
       <VStack px={4} py={3} align="start">
       <HStack>
          <MdPublic />
          <Text>Countries</Text>
        </HStack>
        <InputGroup width={300}>
    <InputLeftElement pointerEvents='none'>
      <SearchIcon color='gray.300' />
    </InputLeftElement>
    <Input placeholder='Search' />
  </InputGroup>
       </VStack>
      <VStack align="start" height="350px" overflowY="scroll">
        {countries?.map(country => {
          return (
            <><Divider />
            <CountryItem country={country}/>
            </>
          )
        })}
      </VStack>
      </CardBody>
    </Card>
    </Box>
  )
}

export default AvailableCountries