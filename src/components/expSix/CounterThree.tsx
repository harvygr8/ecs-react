import { Box, Flex,Text,Button } from '@chakra-ui/react'
import { atom, useAtom } from 'jotai'
import { useEffect,useState,useCallback } from 'react'

const countAtom = atom(0)

export const CounterThree=()=> {
    const [count, setCount] = useAtom(countAtom)
    const [performanceResult, setPerformanceResult] = useState<string | null>(null)
  
    const runPerformanceTest = useCallback(() => {
      const start = performance.now()
      for (let i = 0; i < 1000; i++) {
        setCount((prevCount) => prevCount + 1)
      }
      const end = performance.now()
      setPerformanceResult(`Jotai: ${end - start}ms`)
    }, [setCount])
  
    return (
    <Box bg={'teal.700'} borderRadius={'6px'} p={2} color={'white'} h='150px' w='200px'>
        <Flex direction={'column'} gap='2'>
            <Text>Jotai</Text>
            <Text>Count: {count}</Text>
            <Button onClick={runPerformanceTest}>Run Test</Button>
            {performanceResult && <Text>{performanceResult}</Text>}
        </Flex>
    </Box>
    )
  }
