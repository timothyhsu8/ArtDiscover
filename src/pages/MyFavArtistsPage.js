import React from 'react'
import Header from '../components/Header'
import { useColorMode, Flex, Box, Grid, Text, Center, Image } from "@chakra-ui/react"

export default function MyFavArtistsPage() {

    return (
        <Box>
            <Header headerColor="teal.400" currentPage="personalfavartists"/>
            MY FAVORITE ARTISTS PAGE
        </Box>
    )
}