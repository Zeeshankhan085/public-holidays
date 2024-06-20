import React from 'react'
import { Box, Card, CardBody, Table, Tbody, Tr, Td, TableContainer, Text, VStack, Thead, Th, CardHeader, Heading, Divider } from '@chakra-ui/react'

import useFetchData from '../hooks/fetchData'

function NextPublicHolidaysWorldwide() {
  const {data} = useFetchData('/NextPublicHolidaysWorldwide')
  return (
   <Card variant="outline">
      <CardHeader>
    <Heading size='sm'>Next Public Holidays Worldwide in the next 7 days</Heading>
  </CardHeader>
  <Divider />
    <CardBody padding={0}>
      <TableContainer>
      <Table variant='simple' sx={{whiteSpace: 'wrap'}}>
      <Thead>
      <Tr>
        <Th>Date</Th>
        <Th>Name</Th>
        <Th>Country</Th>
      </Tr>
    </Thead>
    <Tbody>
      {data && data.map(({date, name, countryCode}) => (
        <Tr>
          <Td sx={{whiteSpace: 'nowrap'}}>{date}</Td>
          <Td>{name}</Td>
          <Td>{countryCode}</Td>
        </Tr>
      ))}
      </Tbody>
      </Table>
      </TableContainer>
    </CardBody>
   </Card>
  )
}

export default NextPublicHolidaysWorldwide