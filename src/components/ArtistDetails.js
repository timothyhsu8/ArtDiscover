import React from 'react'
import { Box, Image, Center, Text, HStack } from "@chakra-ui/react"
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from '@chakra-ui/icons'
import '../styles.css'

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
            <Box w="100%" mt="8" >
                <HStack justifyContent="center" spacing="10">
                    <a href="https://youtube.com" target="_blank"><Image className="icon" src="images/icons/personalwebsite.png" alt="Artist's Personal Website Logo"></Image></a>
                    <a href="https://youtube.com" target="_blank"><Image className="icon" src="images/icons/artstation.png" alt="ArtStation Logo"></Image></a>
                    <a href="https://youtube.com" target="_blank"><Image className="icon" src="images/icons/deviantart.png" alt="DeviantArt Logo"></Image></a>
                    <a href="https://youtube.com" target="_blank"><Image className="icon" src="images/icons/twitter.png" alt="Twitter Logo"></Image></a>
                    <a href="https://youtube.com" target="_blank"><Image className="icon" src="images/icons/youtube.png" alt="Youtube Logo"></Image></a>
                </HStack>
            </Box>
        </Center>
    </Box>
}