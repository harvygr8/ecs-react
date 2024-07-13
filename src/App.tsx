import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react'
import ExpOne from './experiments/ExpOne'
import ExpTwo from './experiments/ExpTwo'
import ExpThree from './experiments/ExpThree'

function App() {

  return (
    <ChakraProvider>
      <ExpThree/>
    </ChakraProvider>
  )
}

export default App
