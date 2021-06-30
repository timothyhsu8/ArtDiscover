import React, { useState } from 'react'
import { Box, Spacer, Button, Flex, Grid } from "@chakra-ui/react"
import { StarIcon, ViewIcon, QuestionIcon, PlusSquareIcon } from '@chakra-ui/icons'

export default function Header( {headerColor} ) {

    const test = () =>{
        console.log("gamer");
    }

    return (
        <Box bgColor={headerColor} minW="100%" minH="50" borderRadius="3">
            <Grid templateColumns="repeat(4, 1fr)" fontSize="28" textColor="white">
                <Button _hover={{
                    color:"gray.700",
                    bgColor:"orange.200"}} 
                    minW="450" minH="50" bgColor="blue.400" borderRadius="3" fontSize="27" onClick={test}  rightIcon={<ViewIcon />}> ARTISTS </Button> 
                <Button _hover={{
                    color:"gray.700",
                    bgColor:"orange.200"}}
                 minW="450" minH="50" bgColor={headerColor} borderRadius="3" fontSize="27" onClick={test} rightIcon={<PlusSquareIcon />}> ART RESOURCES </Button> 
                <Button _hover={{
                    color:"gray.700",
                    bgColor:"orange.200"}}
                    minW="450" minH="50" bgColor={headerColor} borderRadius="3" fontSize="27" onClick={test} rightIcon={<StarIcon />}> PERSONAL FAVORITE ARTISTS </Button> 
                <Button _hover={{
                    color:"gray.700",
                    bgColor:"orange.200"}}
                    minW="450" minH="50" bgColor={headerColor} borderRadius="3" fontSize="27" onClick={test} rightIcon={<QuestionIcon />}> ABOUT </Button> 
            </Grid>
            <Box bgColor="teal.200" minW="100%" minH="2" borderRadius="3" />
        </Box>
    )
}

