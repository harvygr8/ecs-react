import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react'
import ExpOne from './experiments/ExpOne'
import ExpTwo from './experiments/ExpTwo'

function App() {

  return (
    <ChakraProvider>
      <ExpTwo/>
    </ChakraProvider>
  )
}

export default App
