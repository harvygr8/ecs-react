//using zustand for state management

import React, { useState } from 'react'
import { Center, Flex } from '@chakra-ui/react'
import InputComponent from '../components/expFive/InputComponent'
import TextComponent from '../components/expFive/TextComponent'

const ExpFive = () => {
  return (
    <Center height={'100vh'}>
        <Flex direction={'column'} gap={4}>
            <InputComponent/>
            <TextComponent/>
        </Flex>
    </Center>
  )
}

export default ExpFive