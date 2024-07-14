import { AbsoluteCenter, Box, Flex, Input, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'


type Props = {
    message: string
};

const TextOne = ({message} : Props) => {
  
  return (
    <Box bg={'teal.700'} borderRadius={'6px'} p={2} color={'white'} h='160px' w='250px'>
        <AbsoluteCenter>
            <Flex direction={'column'} alignItems={'center'} gap={2}>
                <Text size={'xl'} fontWeight={'bold'}>TextOne</Text>
                <Text>{message}</Text>
            </Flex>
        </AbsoluteCenter>
    </Box>
  )
}

export default TextOne