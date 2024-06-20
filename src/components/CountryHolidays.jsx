import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Card, CardBody, Text, Box, Flex, CardHeader, Heading, Divider
} from '@chakra-ui/react'
import { months, days } from '../constants'
import {useCountryContext} from '../context'

import Pagination from './Pagination'
function CountryHolidays() {
  const {holidays} = useCountryContext()
  return (
    <Flex flexDirection="column" alignItems="center">
   <Box alignSelf="stretch">
   <Card variant="outline">
      <CardBody padding={0}>
      <CardHeader>
    <Heading size='sm'>Public Holidays</Heading>
  </CardHeader>
  <Divider />
      <TableContainer>
  <Table variant='simple' sx={{whiteSpace: 'wrap'}}>
    <Thead>
      <Tr>
        <Th>Date</Th>
        <Th>Local name</Th>
        <Th>Name</Th>
      </Tr>
    </Thead>
    <Tbody>
   
    {holidays && Object.entries(holidays).map(([key, value]) => (
      <>
       <Tr><Td fontWeight='bold' key={key} colSpan="4">{months[new Date(key).getMonth()]}</Td></Tr>
      

   
            {value.map((item, index) => (
              <Tr key={index}>
              <Td sx={{whiteSpace: 'nowrap'}}>{days[new Date(item.date).getDay()].slice(0,3)} {item.date}</Td>
              <Td><Text>{item.localName}</Text></Td>
              <Td><Text>{item.name}</Text></Td>
            </Tr>
            ))}
        </>
      ))}

    </Tbody>

  </Table>
</TableContainer>
      </CardBody>
    </Card>
   </Box>
    <Box mt={6}>
    <Pagination/>
    </Box>

    </Flex>
  )
}

export default CountryHolidays