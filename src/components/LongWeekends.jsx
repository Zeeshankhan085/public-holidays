import React from 'react'
import { useCountryContext } from '../context'
import { Box, Card, CardBody, Table, Tbody, Tr, Td, TableContainer, Text, VStack, Flex, CardHeader, Heading, Divider } from '@chakra-ui/react'
import { days, months } from '../constants'



const range = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
};
function LongWeekends() {
  const {longWeekends} = useCountryContext()
  const getDisplayDateString = (date) => {
    return (
   <Flex alignItems="center" flexDirection="column"> <Text>{months[new Date(date).getMonth()].slice(0, 3)} </Text>  <Text>{new Date(date).getDate()}</Text></Flex>
   )
  }
  const getDispalyWeekDayString = (date, count) => {
    date = new Date(date)
    // debugger;
    date.setDate(new Date(date).getDate() + count)
    
    return (
      <Flex alignItems="center" flexDirection="column">
      <Text color={days[date.getDay()] === 'Sun' ? 'red' : ''}>{days[date.getDay()]}</Text>
      <Text><strong>{new Date(date).getDate()}</strong></Text>

      </Flex>
    )
  }

  // let maxWeekend
  // if(longWeekends) {

  // maxWeekend = Math.max(...longWeekends.map(weekend => weekend.dayCount))
  // }
  return (
    <Box>
<Card variant="outline">
  <CardHeader>
    <Heading size='sm'>Long Weekends</Heading>
  </CardHeader>
  <Divider />
  <CardBody padding={0}>
  {longWeekends && longWeekends.map((weekend, index) => {
        return (
          <Table variant="simple" sx={{tableLayout: 'fixed', borderCollapse: 'collapse'}}>
        <Tbody>
          
     
              <Tr key={index}>
                <Td width="90px"  px="6" py="2" borderWidth="1px" borderRightWidth={0} borderBottomWidth={0} borderColor="#ddd"><Flex alignItems="center" flexDirection="column"><strong>{weekend.dayCount}</strong> <span>days</span></Flex></Td>
                <Td  display={{base: 'none', 'sm': 'table-cell'}} width="90px" px="6" py="2" borderWidth="1px" borderRightWidth={0} borderBottomWidth={0} borderColor="#ddd">{getDisplayDateString(weekend.startDate)}</Td>
                {range(0, weekend.dayCount-1).map((count, gIndex) => {
                  return (
                    <Td key={gIndex} px="6" py="2" borderWidth="1px" borderRightWidth={0} borderBottomWidth={0} borderColor="#ddd">
                      <VStack>
                      {getDispalyWeekDayString(weekend.startDate ,count )}
                      </VStack>
                      </Td>
                  )
                })}
                <Td  width="90px" display={{base: 'none', 'sm': 'table-cell'}} height="100%" px="6" py="2" borderWidth="1px" borderRightWidth={0} borderBottomWidth={0} borderColor="#ddd">{getDisplayDateString(weekend.endDate)}</Td>

              </Tr>
          
        </Tbody>
      </Table>
        )
      })}
  </CardBody>
</Card>
    </Box>
  )
}

export default LongWeekends