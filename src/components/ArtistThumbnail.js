import React, { useState } from 'react'
import { Text, Center, Button, Box } from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons'
import '../styles/FavButton.css'

export default function ArtistThumbnail( {artistName, description, imageURL} ) {

    const [isFavorited, setIsFavorited] = useState( localStorage.getItem("favArtists").includes(artistName) ? true : false);

    const addToFavorites = () => {
        let favArtists = localStorage.getItem("favArtists").toString().split(",");  // Get current faved artists and format it into an array
        
        // If user favorites the artist, add artist to the list. If user unfavorites an artist, remove artist from the list
        isFavorited ? favArtists.splice(favArtists.indexOf(artistName), 1) :  favArtists.push(artistName); 

        localStorage.setItem("favArtists", favArtists);
        setIsFavorited(!isFavorited);
    }

    return (
        <Box position="relative">
            <Button h="300" w="100%"
                borderRadius="0"
                bgImage={"linear-gradient(to bottom, rgba(245, 246, 252, 0.10), rgba(30, 30, 30, 0.75)), url('" + imageURL +  "')"}
                bgSize="cover"
                bgPosition="center" 
                _hover={{
                    opacity:0.7,
                }}
                _active={{opacity:0.5}}
                bgRepeat="no-repeat"
                position="relative"
            >
                <Center><Text bottom="8" position="absolute" as="b" fontSize="40" textColor="white" fontWeight="semibold">{artistName}</Text></Center>
                <Center><Text bottom="2" position="absolute" as="i" fontSize="20" textColor="white" fontWeight="thin">{description}</Text></Center>
            </Button>
            <StarIcon className="favButton" onClick={() => addToFavorites()} position="absolute" right={3} top={3} boxSize="6"
                color={ isFavorited ? "yellow.400" : "gray.800" } 
                _hover={{
                    cursor:"pointer",
                    animation:"favme-hover 4s;"
                }}
            />
        </Box>
    )
}