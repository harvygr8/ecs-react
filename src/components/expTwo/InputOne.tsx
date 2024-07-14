import { AbsoluteCenter, Box, Flex, Input, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import TextOne from './TextOne';



const InputOne = () => {
  const inputRef = useRef();
  const [message,setMessage] = useState<string>("");
  
  return (
    <Box bg={'teal.700'} borderRadius={'6px'} p={2} color={'white'} h='500px' w='650px'>
        <AbsoluteCenter>
          <Flex direction='column' alignItems={'center'} gap={2}>
              <Flex direction={'column'} alignItems={'center'} gap={2}>
                  <Text size={'xl'} fontWeight={'bold'}>InputOne (Parent)</Text>
                  <Input ref={inputRef.current} onChange={(e)=>setMessage(e.target.value)}></Input>
              </Flex>

              <Flex direction={'column'} alignItems={'center'} gap={2}>
                  <TextOne message={message} />
              </Flex>
          </Flex>
        </AbsoluteCenter>
    </Box>
  )
}

export default InputOne