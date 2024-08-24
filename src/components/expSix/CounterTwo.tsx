import { atom, useRecoilState } from 'recoil'
import { useEffect,useState,useCallback } from 'react'
import { Box, Flex, Button,Text } from '@chakra-ui/react'

const countState = atom<number>({
  key: 'countState',
  default: 0,
})

export const CounterTwo = () => {
    const [count, setCount] = useRecoilState(countState)
    const [performanceResult, setPerformanceResult] = useState<string | null>(null)
  
    const runPerformanceTest = useCallback(() => {
        
      const start = performance.now()
      for (let i = 0; i < 1000; i++) {
        setCount((prevCount) => prevCount + 1)
      }
      const end = performance.now()
      setPerformanceResult(`Recoil: ${end - start}ms`)
    }, [setCount])
  
    return (
    <Box bg={'teal.700'} borderRadius={'6px'} p={2} color={'white'} h='150px' w='200px'>
        <Flex direction={'column'} gap='2'>
            <Text>Recoil</Text>
            <Text>Count: {count}</Text>
            <Button onClick={runPerformanceTest}>Run Test</Button>
            {performanceResult && <Text>{performanceResult}</Text>}
        </Flex>
    </Box>
    )
  }