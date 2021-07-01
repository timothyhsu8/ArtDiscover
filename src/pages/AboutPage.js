import React from 'react'
import Header from '../components/Header'
import { useColorMode, Flex, Box, Grid, Text, Center, Image } from "@chakra-ui/react"

export default function AboutPage() {

    return (
        <Box>
            <Header headerColor="teal.400" currentPage="about"/>
            ABOUT PAGE
        </Box>
    )
}