import React from 'react'
import { Box, Text, Flex, Icon, Center, Container } from '@chakra-ui/react'
import { FaGithub } from "react-icons/fa";
function Header() {
  return (
    <Box paddingBottom={{base: '100px', '2xl': '160px'}}>
      <Flex alignItems="center" position="absolute" left={0} right={0} top={0}  w="100%" h="80px" background="primary">
   <Container maxW="1800px" padding={{base: 4, xl: 8}}>
   <Flex h="100%" alignItems="center">

   <Flex alignItems="center" justifyContent="space-between" w="100%" h="100%">
    <a href="/">
        <Text color="white">Public.holidays</Text>
      </a>
    </Flex>
    {/* <FaGithub/> */}
    <Box display="flex" alignItems="center" gap={1}>
<Icon color="white" as={FaGithub} w={6} h={6} /> <Text color="white">Github</Text>   </Box>
</Flex>

   </Container>
        
      </Flex>
    </Box>
  )
}

export default Header