import React, { useState } from 'react'
import { Box, Center, Select, Text } from "@chakra-ui/react"
import Header from '../components/Header'
import { artistData } from '../artists';
import ArtistGrid from '../components/ArtistGrid';
import Methods from '../Methods';
import '../styles.css'
import ArtistsDetails from '../components/ArtistDetails';

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
        setCurrentArtistData(artistData);
        setImageNum(0);
        setIsShowingArtwork(true);
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

