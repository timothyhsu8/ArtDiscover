import React from 'react'
import { useColorMode, Flex, Box, Grid, Text, Center, Image } from "@chakra-ui/react"
import Header from '../components/Header'
import ArtistThumbnail from '../components/ArtistThumbnail';
import { artistData } from '../artists';

export default function ArtistsPage() {
    const { toggleColorMode } = useColorMode();

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

    return (
        <Box>
            {/* <Button onClick={toggleColorMode}> <MoonIcon /> </Button> */}
            <Header headerColor="teal.400" currentPage="artists" weight="thin"/>
            <Grid templateColumns="repeat(3, 1fr)">
            {shuffle(artistData).map((data) => {
                return (
                   <ArtistThumbnail artistName={data.name} description={data.description} imageURL={data.imageURL}/>
                );
                })}
            </Grid>
        </Box>
    )
}

