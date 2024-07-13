import { AbsoluteCenter, Box, Center, Flex, Input, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'


type Props = {
    text: string
};

const TextTwo = ({text} : Props) => {
  
  return (
    <Box bg={'teal.700'} borderRadius={'6px'} p={2} color={'white'} h='160px' w='250px'>
        <Center>
            <Flex direction={'column'} alignItems={'center'} gap={2}>
                <Text size={'xl'} fontWeight={'bold'}>TextTwo</Text>
                <Text>{text}</Text>
            </Flex>
        </Center>
    </Box>
  )
}

export default TextTwo