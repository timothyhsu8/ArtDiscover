import React, { useState } from 'react'
import Header from '../components/Header'
import { useColorMode, Flex, Box, Button, Text, Center, Image } from "@chakra-ui/react"
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

export default function MyFavArtistsPage() {

    /* ARTISTS */
    const artistNames = ["Kan Liu", "Atey Ghailan", "Zeronis"];

    const kanliu = ["https://cdnb.artstation.com/p/assets/images/images/033/698/651/4k/kan-liu-666k-xiaoluxiangsmall.jpg?1610351893",
                    "https://cdna.artstation.com/p/assets/images/images/038/984/330/4k/kan-liu-666k-shuiren.jpg?1624612313",
                    "https://cdnb.artstation.com/p/assets/images/images/038/553/153/large/kan-liu-666k-shuiji.jpg?1623401922"];
    
    const ateyghailan = ["https://cdnb.artstation.com/p/assets/images/images/034/366/113/4k/atey-ghailan-59dfd3cf43fc4cbf4f01ef5a.jpg?1612118408",
                    "https://cdna.artstation.com/p/assets/images/images/033/466/576/4k/atey-ghailan-viz-dev.jpg?1609701813",
                    "https://cdnb.artstation.com/p/assets/images/images/026/265/333/4k/atey-ghailan-ashitaka-fanart.jpg?1588321554"];

    const zeronis = ["https://cdna.artstation.com/p/assets/images/images/036/279/964/4k/zeronis-dfe74865-640c-4e5f-ae07-af920857facc.jpg?1617214897",
                    "https://cdnb.artstation.com/p/assets/images/images/018/745/597/large/zeronis-d417b994-c761-4c46-be04-aeefcf7ac408.jpg?1560913342",
                    "https://cdna.artstation.com/p/assets/images/images/013/871/218/4k/zeronis-kda-lineup-concept-front-shot-01.jpg?1541453807"];

    const allArtists = [kanliu, ateyghailan, zeronis];

    /* STATE */
    const [imageNum, setImageNum] = useState(0)
    const [artistNum, setArtistNum] = useState(0)
    const [currentArtist, setCurrentArtist] = useState(kanliu)

    /* METHODS */

    const nextImage = () => {
        (imageNum === currentArtist.length-1) ? setImageNum(0) : setImageNum(imageNum+1);
    }

    const prevImage = () => {
        (imageNum === 0) ? setImageNum(currentArtist.length-1) : setImageNum(imageNum-1);
    }

    const nextArtist = () => {
        setImageNum(0);
        (artistNum === allArtists.length-1) ? setArtistNum(0) : setArtistNum(artistNum+1);
        setCurrentArtist(allArtists[artistNum]);
    }

    return (
        <Box>
            <Header headerColor="teal.400" currentPage="personalfavartists" weight="thin"/>
            
            <Center>
                <Box w="90%" h="650px" pos="relative" bgColor="black">
                    <Image pos="absolute" 
                        src={currentArtist[imageNum]} 
                        w="100%"
                        h="100%"
                        fit="contain"></Image>
                    <Box onClick={prevImage} pos="absolute" minH="100%" w="50px" _hover={{bgGradient:"linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%);", cursor:"pointer"}}>
                        <ChevronLeftIcon color="gray.500" pos="absolute" boxSize="10" top="45%"/>     
                    </Box>
                    <Box onClick={nextImage} pos="relative" float="right" minH="100%" w="50px" 
                        _hover={{bgGradient:"linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%);", cursor:"pointer" }}> 
                        <ChevronRightIcon color="gray.500" pos="absolute" top="45%" boxSize="10" right="0" /> 
                    </Box>
                </Box>
            </Center>
            <Center>
                <Text fontSize="50" fontWeight="bold">
                    {artistNames[artistNum]}
                </Text>
            </Center>
            <Center>
                <Button onClick={nextArtist}> Next Artist </Button>
            </Center>
        </Box>
    )
}