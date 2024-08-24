import React from 'react'
import { CounterOne } from '../components/expSix/CounterOne'
import { CounterTwo }from '../components/expSix/CounterTwo'
import { RecoilRoot } from 'recoil';
import { Provider as JotaiProvider } from 'jotai'
import { CounterThree } from '../components/expSix/CounterThree';
import { Center, Flex } from '@chakra-ui/react';

const ExpSix = () => {
  return (
    <Center h="100vh">
        <Flex direction={'row'} gap='3'>
            <CounterOne/>

            <RecoilRoot>
                <CounterTwo/>
            </RecoilRoot>

            <JotaiProvider>
                <CounterThree/>
            </JotaiProvider>
        </Flex>
    </Center>
  )
}

export default ExpSix