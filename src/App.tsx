import { ChakraProvider } from '@chakra-ui/react'
import ExpOne from './experiments/ExpOne'
import ExpTwo from './experiments/ExpTwo'
import ExpThree from './experiments/ExpThree'
import ExpFour from './experiments/ExpFour'
import ExpFive from './experiments/ExpFive'
import ExpSix from './experiments/ExpSix'

function App() {

  return (
    <ChakraProvider>
      <ExpSix/>
    </ChakraProvider>
  )
}

export default App
