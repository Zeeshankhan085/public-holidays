import React from 'react'
import useFetchData from '../hooks/fetchData'
import { Link as ReactRouterLink } from 'react-router-dom'

import { Box, Card, CardBody, Table, Tbody, Tr, Td, TableContainer, Text, VStack, Thead, Th, CardHeader, Heading, Divider, Link as ChakraLink } from '@chakra-ui/react'


function NextLocalPublicHolidays() {
  const localCountry = 'US'
  const {data} = useFetchData(`/NextPublicHolidays/${localCountry}/`) 
  return (
    <Box>
          {data && 
      <Card variant="outline">
           <CardHeader>
    <Heading size='sm'>Next Public Holidays in  <ChakraLink sx={{textDecoration: 'none'}} color="secondary" as={ReactRouterLink} to="/country/US" > United States </ChakraLink></Heading>
  </CardHeader>
  <Divider />
      <CardBody padding={0}>
      <TableContainer>
      <Table sx={{whiteSpace: 'wrap'}}>
      <Thead>
      <Tr>
        <Th>Date</Th>
        <Th>Name</Th>
      </Tr>
    </Thead>
    <Tbody>
      {data && data.map(({date, name}) => (
        <Tr>
          <Td sx={{whiteSpace: 'nowrap'}}>{date}</Td>
          <Td>{name}</Td>
        </Tr>
      ))}
      </Tbody>
      </Table>
      </TableContainer>
      </CardBody>
      </Card>
    }
    </Box>
  )
}

export default NextLocalPublicHolidays