import React, { useState } from 'react'
import { Box, Image, Center, Select, Text } from "@chakra-ui/react"
import Header from '../components/Header'
import { artistData } from '../artists';
import ArtistGrid from '../components/ArtistGrid';
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from '@chakra-ui/icons'

export default function ArtistsPage() {
    // const [artists, setArtists] = useState(shuffle(artistData));
    const [artists, setArtists] = useState(artistData);
    const [showingArtwork, setIsShowingArtwork] = useState(false);
    const [currentArtistData, setCurrentArtistData] = useState();

    function shuffle(array) {
        var currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

    const sortArtistsRandom = () => {
        setArtists((artists) =>
            artists.sort((a, b) => Math.random() > 0.5 ? 1 : -1)
            .map((artist)=>{
                return artist;
            })
        )
    }

    const sortArtistsAlphabetical = () => {
        setArtists((artists) =>
            artists.sort((a, b) => a.name > b.name ? 1 : -1)
            .map((artist)=>{
                return artist;
            })
        )
    }

    const sortArtistsReverseAlphabetical = () => {
        setArtists((artists) =>
            artists.sort((a, b) => a.name < b.name ? 1 : -1)
            .map((artist)=>{
                return artist;
        })
        )
    }
    
    const reloadImages = ( sortType ) => {
        if(sortType === "sort_random")
            sortArtistsRandom();
        if(sortType === "sort_abc")
            sortArtistsAlphabetical();
        if(sortType === "sort_zyx")
            sortArtistsReverseAlphabetical();
    }

    const showArtistDetails = ( artistData ) => {
        setIsShowingArtwork(true);
        setCurrentArtistData(artistData);
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
                <Box w="90%" h="70vh" pos="relative" bgColor="black" top="50%">
                    <Image pos="absolute" 
                        src={currentArtistData.imageURL} 
                        w="100%"
                        h="100%"
                        fit="contain"></Image>
                    <Box pos="absolute" minH="100%" w="50px" _hover={{bgGradient:"linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%);", cursor:"pointer"}}>
                        <ChevronLeftIcon color="gray.500" pos="absolute" boxSize="10" top="45%"/>     
                    </Box>
                    <Box pos="relative" float="right" minH="100%" w="50px" 
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
                        <Select w={200} h={10} color="teal.800" onChange={(sort) => reloadImages(sort.target.value)}>
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

