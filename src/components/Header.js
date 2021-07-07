import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Spacer, Button, Flex, Grid } from "@chakra-ui/react"
import { StarIcon, ViewIcon, QuestionIcon, PlusSquareIcon } from '@chakra-ui/icons'

export default function Header( {headerColor, currentPage, weight} ) {

    const test = () =>{
        return <Link to="gamerville"></Link>
    }
    
    return (
        <Box bgColor={headerColor} minW="100%" minH="50" borderRadius="3">
            <Grid templateColumns="repeat(5, 1fr)" fontSize="28" textColor="white">
                <Link to={'/artists'}>
                    <Button _hover={{
                        color:"gray.700",
                        bgColor:"orange.200"}} 
                        minW="100%" minH="50" bgColor={(currentPage === "artists") ? "blue.400" : headerColor} 
                        borderRadius="3" fontSize="30" onClick={test} fontWeight={weight} rightIcon={<ViewIcon />}> ARTISTS 
                    </Button> 
                </Link>
                <Link to={'/artresources'}>
                    <Button _hover={{
                        color:"gray.700",
                        bgColor:"orange.200"}}
                        minW="100%" minH="50" bgColor={(currentPage === "artresources") ? "blue.400" : headerColor} 
                        borderRadius="3" fontSize="30" onClick={test} fontWeight={weight} rightIcon={<PlusSquareIcon />}> ART RESOURCES 
                    </Button> 
                </Link>
                <Link to={'/favoriteartists'}>
                    <Button _hover={{
                        color:"gray.700",
                        bgColor:"orange.200"}}
                        minW="100%" minH="50" bgColor={(currentPage === "personalfavartists") ? "blue.400" : headerColor} 
                        borderRadius="3" fontSize="30" onClick={test} fontWeight={weight} rightIcon={<StarIcon />}> 
                        PERSONAL FAVORITE ARTISTS 
                    </Button> 
                </Link>
                <Link to={'/suggestions'}>
                    <Button _hover={{
                        color:"gray.700",
                        bgColor:"orange.200"}}
                        minW="100%" minH="50" bgColor={(currentPage === "about") ? "blue.400" : headerColor} 
                        borderRadius="3" fontSize="30" onClick={test} fontWeight={weight} rightIcon={<QuestionIcon />}> SUGGEST ARTISTS 
                    </Button> 
                </Link>
                <Link to={'/about'}>
                    <Button _hover={{
                        color:"gray.700",
                        bgColor:"orange.200"}}
                        minW="100%" minH="50" bgColor={(currentPage === "about") ? "blue.400" : headerColor} 
                        borderRadius="3" fontSize="30" onClick={test} fontWeight={weight} rightIcon={<QuestionIcon />}> ABOUT 
                    </Button> 
                </Link>
            </Grid>
            <Box bgColor="teal.200" minW="100%" minH="2" borderRadius="3" />
        </Box>
    )
}

