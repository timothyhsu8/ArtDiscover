import React, { useState } from 'react'
import { Box, Center, HStack, Select, Text, Input, VStack } from "@chakra-ui/react"
import Header from '../components/Header'
import { artistData } from '../artists';
import ArtistGrid from '../components/ArtistGrid';
import Methods from '../Methods';
import '../styles.css'
import ArtistsDetails from '../components/ArtistDetails';

export default function ArtistsPage() {
    // const [artists, setArtists] = useState(shuffle(artistData));
    const [artists, setArtists] = useState(artistData);
    const [filteredArtists, setFilteredArtists] = useState(artistData);
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
        setCurrentArtistData(artistData);
        setImageNum(0);
        setIsShowingArtwork(true);
    }

    const renderArtists = () => {
        /* Empty Search */
        if(filteredArtists.length === 0){
            return <Center>
                <VStack spacing="7" textAlign="center">
                    <Text fontSize="26" fontWeight="hairline" mt={30}> No artists found </Text>
                </VStack>
            </Center>
        }
        
        /* Render Favorite Artists */
        else return <ArtistGrid artists={filteredArtists} showArtistDetails={showArtistDetails}/>
    }

    const renderArtistData = () => {
        if(!showingArtwork) return;

        return <ArtistsDetails prevImage={prevImage} nextImage={nextImage} setImageNum={setImageNum} setIsShowingArtwork={setIsShowingArtwork} 
            currentArtistData={currentArtistData} imageNum={imageNum}  />
    }

    return (
        <Box>
            {renderArtistData()}
            <Box>
                <Header headerColor="teal.400" currentPage="artists" weight="thin"/>
                    {/* SORT BY OPTION */}
                    <Center>
                        <HStack spacing="400">
                            <Box bgColor="white" h="10" mt={3} mb={3}>
                                <HStack spacing="2.5">
                                    <Text fontSize="18" fontWeight="hairline">Sort by: </Text>
                                    <Select w={200} h={10} color="teal.800" onChange={(sort) => Methods.reloadImages(sort.target.value, artists, setArtists )}>
                                        <option value="sort_random">Random</option>
                                        <option value="sort_abc">Alphabetical [A-Z]</option>
                                        <option value="sort_zyx">Reverse Alphabetical [Z-A]</option>
                                    </Select>
                                </HStack>
                            </Box>
                            <Box>
                                <HStack spacing="2.5">
                                    <Text fontSize="18" fontWeight="hairline">Search:</Text>
                                    <Input placeholder="Search Artist's Name" w="300px" 
                                        onChange={(event) =>setFilteredArtists(artists.filter(artist => artist.name.toLowerCase().includes(event.target.value.toLowerCase())))}
                                    />
                                </HStack>
                            </Box>
                        </HStack>
                    </Center>
    
                {/* ARTIST GRID */}
                {renderArtists()}
            </Box>
        </Box>
    )
}

