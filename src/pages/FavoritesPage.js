import React, { useState } from 'react'
import { useColorMode, Box, Grid, Center, Select, Button, Text, Flex, Image, HStack, VStack} from "@chakra-ui/react"
import Header from '../components/Header'
import { artistData } from '../artists';
import ArtistGrid from '../components/ArtistGrid';
import Methods from '../Methods';

export default function FavoritesPage() {
    const [favType, setFavType] = useState("artists");
    const [artists, setArtists] = useState(Methods.shuffle(artistData));

    const changeFavType = ( newFavType ) => {
        setFavType(newFavType);
    }

    const renderFavArtists = () => {
        /* No Artists Favorited */
        if(localStorage.getItem("favArtists") === ""){
            return <Center>
                <VStack spacing="7" textAlign="center">
                    <Text fontSize="26" fontWeight="hairline" mt={30}> You don't have any favorited artists yet </Text>
                    {/* <Image src="images/HowToFavoriteArtists.png" alt="How To Favorite Artists"></Image> */}
                </VStack>
            </Center>
        }
        
        /* Render Favorite Artists */
        else return <ArtistGrid artists={artists.filter(artist => localStorage.getItem("favArtists").includes(artist.name))} />;
    }

    return (
        <Box>
            <Header headerColor="teal.400" currentPage="favorites" weight="thin"/>
            
            {/* SORT BY OPTION */}
            <Box bgColor="white" h="10" w="100%" mt={3} mb={3}>
                <Center>
                    <Text fontSize="18" fontWeight="hairline">Sort by: &nbsp;</Text>
                    <Select w={200} h={10} color="teal.800" onChange={(sort) => Methods.reloadImages(sort.target.value, artists, setArtists)}>
                        <option value="sort_random">Random</option>
                        <option value="sort_abc">Alphabetical [A-Z]</option>
                        <option value="sort_zyx">Reverse Alphabetical [Z-A]</option>
                    </Select>
                    <HStack spacing="10"> 
                        <Box />
                        <Button w="120px" onClick={() => changeFavType("artists")}
                            bgColor={favType === "artists" ? "orange.200" : "gray.150"} 
                            _hover={{
                                opacity:0.8
                            }}> 
                            Artists 
                        </Button>
                        <Button w="120px" onClick={() => changeFavType("resources")} 
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
            {renderFavArtists()}
        </Box>
    )
}