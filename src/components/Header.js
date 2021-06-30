import React, { useState } from 'react'
import { Box, Spacer, Button, Flex } from "@chakra-ui/react"
import { StarIcon, ViewIcon, QuestionIcon, PlusSquareIcon } from '@chakra-ui/icons'

export default function Header( {headerColor} ) {

    const test = () =>{
        console.log("gamer");
    }

    return (
        <Box bgColor={headerColor} minW="100%" minH="50" borderRadius="3">
            <Flex fontSize="28" textColor="white">
                <Button minW="450" minH="50" ml="50" bgColor={headerColor} borderRadius="3" fontSize="27" onClick={test}  rightIcon={<ViewIcon />}> ARTISTS </Button> 
                <Button minW="450" minH="50" bgColor={headerColor} borderRadius="3" fontSize="27" onClick={test} rightIcon={<PlusSquareIcon />}> ART RESOURCES </Button> 
                <Button minW="450" minH="50" bgColor={headerColor} borderRadius="3" fontSize="27" onClick={test} rightIcon={<StarIcon />}> TOP 10 ARTISTS </Button> 
                <Button minW="450" minH="50" bgColor={headerColor} borderRadius="3" fontSize="27" onClick={test} rightIcon={<QuestionIcon />}> ABOUT </Button> 
            </Flex>
        </Box>
    )
}

