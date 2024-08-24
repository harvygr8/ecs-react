import {create} from 'zustand'
import { useEffect,useState,useCallback } from 'react'
import { AbsoluteCenter, Box, Button,Center,Flex,Text } from '@chakra-ui/react'

interface CounterState {
  count: number
  increment: () => void
  clear: ()=> void
}

const useStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  clear: ()=>set((state)=>({count:0}))
}))

export const CounterOne = ()=> {
    const { count, increment,clear } = useStore()
    const [performanceResult, setPerformanceResult] = useState<string | null>(null)
  
    const runPerformanceTest = useCallback(() => {
      clear()  
      setPerformanceResult(null);  
      const start = performance.now()
      for (let i = 0; i < 1000; i++) {
        increment()
      }
      const end = performance.now()
      setPerformanceResult(`Zustand: ${end - start}ms`)
    }, [increment])
  
    return (
    <Box bg={'teal.700'} borderRadius={'6px'} p={2} color={'white'} h='150px' w='200px'>
        <Flex direction={'column'} gap='2'>
            <Text>Zustand</Text>
            <Text>Count: {count}</Text>
            <Button onClick={runPerformanceTest}>Run Test</Button>
            {performanceResult && <Text>{performanceResult}</Text>}
        </Flex>
    </Box>
    )
  }