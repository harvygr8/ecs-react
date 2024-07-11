//prop passing parent to child

import React from 'react'
import InputOne from '../components/InputOne'
import { Center } from '@chakra-ui/react'

const ExpTwo = () => {
  return (
    <Center height={'100vh'}>
        <InputOne/>{/* parent component , see definition to check child */}
    </Center>
  )
}

export default ExpTwo