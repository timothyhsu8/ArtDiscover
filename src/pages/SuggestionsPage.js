import React from 'react'
import Header from '../components/Header'
import { useColorMode, Flex, Box, Grid, Text, Center, Image } from "@chakra-ui/react"

export default function SuggestionsPage() {

    return (
        <Box>
            <Header headerColor="teal.400" currentPage="suggestions" weight="thin"/>
            SUGGESTIONS PAGE
        </Box>
    )
}