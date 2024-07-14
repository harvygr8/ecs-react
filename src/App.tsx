import { ChakraProvider } from '@chakra-ui/react'
import ExpOne from './experiments/ExpOne'
import ExpTwo from './experiments/ExpTwo'
import ExpThree from './experiments/ExpThree'
import ExpFour from './experiments/ExpFour'
import ExpFive from './experiments/ExpFive'

function App() {

  return (
    <ChakraProvider>
      <ExpFive/>
    </ChakraProvider>
  )
}

export default App
