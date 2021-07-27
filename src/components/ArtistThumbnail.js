import React, { useState } from 'react'
import { Text, Center, Button, Box } from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons'
import '../styles/FavButton.css'

export default function ArtistThumbnail( {artistData, showArtistDetails} ) {

    const [isFavorited, setIsFavorited] = useState( localStorage.getItem("favArtists").includes(artistData.name) ? true : false);
    const [showingArtwork, setIsShowingArtwork] = useState(false);


    const addToFavorites = () => {
        let favArtists = localStorage.getItem("favArtists").toString().split(",");  // Get current faved artists and format it into an array
        
        // If user favorites the artist, add artist to the list. If user unfavorites an artist, remove artist from the list
        isFavorited ? favArtists.splice(favArtists.indexOf(artistData.name), 1) :  favArtists.push(artistData.name); 

        localStorage.setItem("favArtists", favArtists);
        setIsFavorited(!isFavorited);
    }

    const renderGallery = () => {
        if(!showingArtwork) return

        // return <Box position="absolute" w="100%" h="300px" bgColor="red"></Box>
    }

    return (
        <Box position="relative">
            
            {renderGallery()}

            <Button h="300" w="100%"
                borderRadius="0"
                bgImage={"linear-gradient(to bottom, rgba(245, 246, 252, 0.10), rgba(30, 30, 30, 0.75)), url('" + artistData.imageURL +  "')"}
                bgSize="cover"
                bgPosition="center" 
                _hover={{
                    opacity:0.7,
                }}
                _active={{opacity:0.5}}
                bgRepeat="no-repeat"
                position="relative"
                onClick={() => showArtistDetails(artistData)}
            >
                <Center><Text bottom="8" position="absolute" as="b" fontSize="40" textColor="white" fontWeight="semibold">{artistData.name}</Text></Center>
                <Center><Text bottom="2" position="absolute" as="i" fontSize="20" textColor="white" fontWeight="thin">{artistData.description}</Text></Center>
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