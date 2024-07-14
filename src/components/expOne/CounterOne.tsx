import { Box, Button, AbsoluteCenter, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'


//Basic State
const CounterOne = () => { 
    
  const [count,setCount] = useState(0)

  return (
    <Box bg={'teal.700'} borderRadius={'6px'} p={2} color={'white'} h='120px' w='150px'>
        <AbsoluteCenter>
            <Flex direction={'column'} alignItems={'center'} gap={2}>
                <Text size={'xl'} fontWeight={'bold'}>CounterOne</Text>
                <Text size={'4xl'}>{count}</Text>
                <Button size={'xs'} onClick={()=>setCount(count+1)}>
                    Increment
                </Button>
            </Flex>
        </AbsoluteCenter>
    </Box>

  )
}

export default CounterOne