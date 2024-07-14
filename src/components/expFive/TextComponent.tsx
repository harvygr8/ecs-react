import { Box, Center, Flex, Text } from '@chakra-ui/react'
import useMessageStore from './store'



const TextComponent = () => {

  const message = useMessageStore((state)=>state.message)
  
  return (
    <Box bg={'teal.700'} borderRadius={'6px'} p={2} color={'white'} h='160px' w='250px'>
        <Center>
            <Flex direction={'column'} alignItems={'center'} gap={2}>
                <Text size={'xl'} fontWeight={'bold'}>Text Component</Text>
                <Text>{message}</Text>
            </Flex>
        </Center>
    </Box>
  )
}

export default TextComponent