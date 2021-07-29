import React from 'react'
import { Box, Image, Center, Text, HStack } from "@chakra-ui/react"
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from '@chakra-ui/icons'
import '../styles.css'
import IconLink from './IconLink'

export default function ArtistsDetails({ prevImage, nextImage, setIsShowingArtwork, currentArtistData, imageNum }) {
    return <Box className="slideshow" position="absolute" w="100%" h="100vh" zIndex="1" bgColor="rgba(0, 0, 0, 0.9)">
        {/* CLOSE ICON */}
        <Box w="100%" h="5vh" textAlign="center"> 
            <CloseIcon onClick={() => setIsShowingArtwork(false)} _hover={{cursor:"pointer"}} float="right" mt="5" mr="5" boxSize="4" color="gray.400" />
        </Box>

        {/* SLIDESHOW */}
        <Center>
            <Box w="95%" h="70vh" pos="relative" bgColor="black" top="50%">
                <Image pos="absolute" 
                    src={currentArtistData.imageURL[imageNum]} 
                    w="100%"
                    h="100%"
                    fit="contain"></Image>
                <Box onClick={() => prevImage()} pos="absolute" minH="100%" w="50px" _hover={{bgGradient:"linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%);", cursor:"pointer"}}>
                    <ChevronLeftIcon color="gray.500" pos="absolute" boxSize="10" top="45%"/>     
                </Box>
                <Box onClick={() => nextImage()} pos="relative" float="right" minH="100%" w="50px" 
                    _hover={{bgGradient:"linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 100%);", cursor:"pointer" }}> 
                    <ChevronRightIcon color="gray.500" pos="absolute" top="45%" boxSize="10" right="0" /> 
                </Box>
            </Box>
        </Center>

        {/* ARTIST INFORMATION */}
        <Box w="100%" h="70px" textAlign="center">
            <Text fontSize="50" textColor="white" fontWeight="normal">
                {currentArtistData.name}
            </Text>
        </Box>

        <Center>
            <Box w="100%" mt="4" >
                <HStack justifyContent="center" spacing="14">
                    <IconLink siteName="Website" siteURL="https://youtube.com" logoSrc="images/icons/personalwebsite.png"/>
                    <IconLink siteName="ArtStation" siteURL="https://youtube.com" logoSrc="images/icons/artstation.png"/>
                    <IconLink siteName="DeviantArt" siteURL="https://youtube.com" logoSrc="images/icons/deviantart.png"/>
                    <IconLink siteName="Twitter" siteURL="https://youtube.com" logoSrc="images/icons/twitter.png"/>
                    <IconLink siteName="Youtube" siteURL="https://youtube.com" logoSrc="images/icons/youtube.png"/>
                </HStack>
            </Box>
        </Center>
    </Box>
}