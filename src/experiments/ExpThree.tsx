//Lifting state up to common parent (state sharing between siblings)

import React, { useState } from 'react'
import { Center, Flex } from '@chakra-ui/react'
import InputTwo from '../components/expThree/InputTwo'
import TextTwo from '../components/expThree/TextTwo'

const ExpTwo = () => {
    
  const [message,setMessage] = useState<string>('');

  return (
    <Center height={'100vh'}>
        <Flex direction={'column'} gap={4}>
            <InputTwo text={message} setText={setMessage}/>
            <TextTwo text={message}/>
        </Flex>
    </Center>
  )
}

export default ExpTwo