import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react'
import ExpOne from './experiments/ExpOne'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <ExpOne/>
    </ChakraProvider>
  )
}

export default App
