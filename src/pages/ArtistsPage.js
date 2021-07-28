import React, { useState } from 'react'
import { Box, Image, Center, Select, Text } from "@chakra-ui/react"
import Header from '../components/Header'
import { artistData } from '../artists';
import ArtistGrid from '../components/ArtistGrid';
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from '@chakra-ui/icons'
import Methods from '../Methods';

export default function ArtistsPage() {
    // const [artists, setArtists] = useState(shuffle(artistData));
    const [artists, setArtists] = useState(artistData);
    const [showingArtwork, setIsShowingArtwork] = useState(false);
    const [currentArtistData, setCurrentArtistData] = useState();
    const [imageNum, setImageNum] = useState(0);

    const nextImage = () => {
        (imageNum === currentArtistData.imageURL.length-1) ? setImageNum(0) : setImageNum(imageNum+1);
    }

    const prevImage = () => {
        (imageNum === 0) ? setImageNum(currentArtistData.imageURL.length-1) : setImageNum(imageNum-1);
    }

    const showArtistDetails = ( artistData ) => {
        setIsShowingArtwork(true);
        setCurrentArtistData(artistData);
        setImageNum(0);
    }

    const renderArtistData = () => {
        if(!showingArtwork) return;

        return <Box position="absolute" w="100%" h="100vh" zIndex="1" bgColor="rgba(0, 0, 0, 0.9)">
            {/* CLOSE ICON */}
            <Box w="100%" h="5vh" textAlign="center"> 
                <CloseIcon onClick={() => setIsShowingArtwork(false)} _hover={{cursor:"pointer"}} float="right" mt="5" mr="5" boxSize="4" color="gray.400" />
            </Box>

            {/* SLIDESHOW */}
             <Center>
                <Box w="95%" h="75vh" pos="relative" bgColor="black" top="50%">
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
        </Box>
    }

    return (
        <Box>
            {renderArtistData()}

            <Box>
                <Header headerColor="teal.400" currentPage="artists" weight="thin"/>
                
                {/* SORT BY OPTION */}
                <Box bgColor="white" h="10" w="100%" mt={3} mb={3}>
                    <Center>
                        <Text fontSize="18" fontWeight="hairline">Sort by: &nbsp;</Text>
                        <Select w={200} h={10} color="teal.800" onChange={(sort) => Methods.reloadImages(sort.target.value, artists, setArtists )}>
                            <option value="sort_random">Random</option>
                            <option value="sort_abc">Alphabetical [A-Z]</option>
                            <option value="sort_zyx">Reverse Alphabetical [Z-A]</option>
                        </Select>
                    </Center>
                </Box>

                {/* ARTIST GRID */}
                <ArtistGrid artists={artists} showArtistDetails={showArtistDetails}/>
            </Box>
        </Box>
    )
}

