import React, { useState } from 'react'
import { useColorMode, Box, Grid, Center, Select, Button, Text, HStack} from "@chakra-ui/react"
import Header from '../components/Header'
import { artistData } from '../artists';
import ArtistGrid from '../components/ArtistGrid';
export default function FavoritesPage() {

    const [favType, setFavType] = useState("artists");
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
    
    const reloadImages = ( sortType ) => {  
        if(sortType === "sort_random")
            sortArtistsRandom();
        if(sortType === "sort_abc")
            sortArtistsAlphabetical();
        if(sortType === "sort_zyx")
            sortArtistsReverseAlphabetical();
    }

    const changeFavType = ( newFavType ) => {
        setFavType(newFavType);
    }

    return (
        <Box>
            <Header headerColor="teal.400" currentPage="favorites" weight="thin"/>
            
            {/* SORT BY OPTION */}
            <Box bgColor="white" h="10" w="100%" m={3}>
                <Center>
                    <Text fontSize="18" fontWeight="hairline">Sort by: &nbsp;</Text>
                    <Select w={200} h={10} color="teal.800" onChange={(sort) => reloadImages(sort.target.value)}>
                        <option value="sort_random">Random</option>
                        <option value="sort_abc">Alphabetical [A-Z]</option>
                        <option value="sort_zyx">Reverse Alphabetical [Z-A]</option>
                    </Select>
                    <HStack spacing="10"> 
                        <Box />
                        <Button onClick={() => changeFavType("artists")}
                            bgColor={favType === "artists" ? "orange.200" : "gray.150"} 
                            _hover={{
                                opacity:0.8
                            }}> 
                            Artists 
                        </Button>
                        <Button onClick={() => changeFavType("resources")} 
                            bgColor={favType === "resources" ? "orange.200" : "gray.150"}
                            _hover={{
                                opacity:0.8
                            }}> 
                            Resources 
                        </Button>
                    </HStack>
                </Center>
            </Box>

            {/* ARTIST/RESOURCES GRID */}
            <ArtistGrid artists={artists.filter(artist => localStorage.getItem("favArtists").includes(artist.name))} />
        </Box>
    )
}