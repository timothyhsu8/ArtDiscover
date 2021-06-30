import React, { useState } from 'react'
import { useColorMode, Flex, Box } from "@chakra-ui/react"
import { MoonIcon } from '@chakra-ui/icons'
import Header from '../components/Header'
import './Homepage.css'

export default function Homepage() {
    const { toggleColorMode } = useColorMode();

    return (
        <Flex bgColor="black">
            {/* <Button onClick={toggleColorMode}> <MoonIcon /> </Button> */}
            <Header headerColor="blue.400"/>
            <Box minW="100%"> WELCOME </Box>
        </Flex>
    )
}

