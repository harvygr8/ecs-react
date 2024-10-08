import {Box, Center, Flex, Input, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import useMessageStore from './store';


const InputComponent = () => {
  const inputRef = useRef();
  const setMessage = useMessageStore((state)=>state.setMessage)

  return (
    <Box bg={'teal.700'} borderRadius={'6px'} p={2} color={'white'} h='200px' w='250px'>
        <Center>
          <Flex direction='column' alignItems={'center'} gap={2}>
              <Flex direction={'column'} alignItems={'center'} gap={2}>
                  <Text size={'xl'} fontWeight={'bold'}>Input Component</Text>
                  <Input ref={inputRef.current} onChange={(e)=>setMessage(e.target.value)}></Input>
                  {/* <Button onClick={()=>setMessage(e.target.value)>Send</Button> */}
              </Flex>
          </Flex>
        </Center>
    </Box>
  )
}

export default InputComponent