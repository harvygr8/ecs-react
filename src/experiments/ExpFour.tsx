//using context provider to share state between two states

import React, { useState } from 'react'
import { Center, Flex } from '@chakra-ui/react'
import { MessageProvider } from '../components/expFour/MessageContextProvider'
import InputComponent from '../components/expFour/InputComponent'
import TextComponent from '../components/expFour/TextComponent'

const ExpTwo = () => {
    

  return (
    <Center height={'100vh'}>
        <Flex direction={'column'} gap={4}>
            <MessageProvider>
                <InputComponent/>
                <TextComponent/>
            </MessageProvider>
        </Flex>
    </Center>
  )
}

export default ExpTwo