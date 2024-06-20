import React, {useState, useEffect} from 'react'
import { ButtonGroup, Button, Stack, useBreakpointValue  } from '@chakra-ui/react';
import {useCountryContext} from '../context'
import { useParams } from 'react-router-dom';


function Pagination() {
  const breakpoint = useBreakpointValue({ base: "base", md: "medium", lg: "large" });
  const range = (start, end) => {
    if(breakpoint === 'base') {
      start = start + 3;
      end = end-3
    } else {
      start = start;
      end = end
    }
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };
  const {fetchHolidays, fetchLongWeekends, currentYear, setCurrentYear} = useCountryContext()
  const params = useParams()
  // const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    (async() => {
      fetchHolidays(currentYear, params.code)
      fetchLongWeekends(currentYear, params.code)
    })()
  }, [currentYear])
  return (
    <Stack  spacing={2} direction='row' align='center' justifyContent="center">
      {range(currentYear*1 -5, currentYear*1 + 5).map(year => {
        return (
          <Button w="60px" onClick={(e) => {  setCurrentYear(e.target.id) }} id={year}>{year}</Button>
        )
      })}
    </Stack>
  )
}

export default Pagination

