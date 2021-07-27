import React, { useState } from 'react'
import { useColorMode, Box, Grid, Center, Select, Text } from "@chakra-ui/react"
import Header from '../components/Header'
import { artistData } from '../artists';
import ArtistGrid from '../components/ArtistGrid';

export default function ArtistsPage() {
    const [artists, setArtists] = useState(shuffle(artistData));
    const [showingArtwork, setIsShowingArtwork] = useState(false);

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
    }

    return (
        <Box>
            <Box opacity={showingArtwork ? "0.5" : "1.0"} >
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

