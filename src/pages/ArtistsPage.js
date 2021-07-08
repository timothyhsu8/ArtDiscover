import React, { useState } from 'react'
import { useColorMode, Box, Grid, Center, Select, Text } from "@chakra-ui/react"
import Header from '../components/Header'
import ArtistThumbnail from '../components/ArtistThumbnail';
import { artistData } from '../artists';

export default function ArtistsPage() {
    const { toggleColorMode } = useColorMode();
    const [artists, setArtists] = useState(shuffle(artistData));

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
    
    const reloadImages = ( sortType ) =>{
        if(sortType === "sort_random")
            sortArtistsRandom();
        if(sortType === "sort_abc")
            sortArtistsAlphabetical();
        if(sortType === "sort_zyx")
            sortArtistsReverseAlphabetical();
    }

    return (
        <Box>
            <Header headerColor="teal.400" currentPage="artists" weight="thin"/>
            <Box bgColor="white" h="10" w="100%">
                {/* Sort by... */}
                <Center>
                    <Select w={200} h={10} color="teal.800" onChange={(sort) => reloadImages(sort.target.value)}>
                        <option value="sort_random">Random</option>
                        <option value="sort_abc">Alphabetical [A-Z]</option>
                        <option value="sort_zyx">Reverse Alphabetical [Z-A]</option>
                    </Select>
                </Center>
            </Box>

            {/* ARTIST THUMBNAILS */}
            <Grid templateColumns="repeat(3, 1fr)">
            {artists.map((data) => {
                return (
                   <ArtistThumbnail artistName={data.name} description={data.description} imageURL={data.imageURL} key={data.name}/>
                );
                })}
            </Grid>
        </Box>
    )
}

