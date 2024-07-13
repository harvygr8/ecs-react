import { AbsoluteCenter, Box, Button, Center, Flex, Input, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import TextOne from './TextOne';

type Props={
  text: string,
  setText : (message:string)=>void
}

const InputTwo = ({text,setText}:Props) => {
  const inputRef = useRef();

  
  return (
    <Box bg={'teal.700'} borderRadius={'6px'} p={2} color={'white'} h='200px' w='250px'>
        <Center>
          <Flex direction='column' alignItems={'center'} gap={2}>
              <Flex direction={'column'} alignItems={'center'} gap={2}>
                  <Text size={'xl'} fontWeight={'bold'}>InputTwo</Text>
                  <Input ref={inputRef.current} onChange={(e)=>setText(e.target.value)}></Input>
                  {/* <Button onClick={()=>setMessage(e.target.value)>Send</Button> */}
              </Flex>
          </Flex>
        </Center>
    </Box>
  )
}

export default InputTwo