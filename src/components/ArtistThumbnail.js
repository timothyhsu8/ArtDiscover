import React from 'react'
import { Box, Text, Center, Button } from "@chakra-ui/react"

export default function ArtistThumbnail( {artistName, description, imageURL} ) {

    return (
        <Button h="300"
            borderRadius="0"
            bgImage={"linear-gradient(to bottom, rgba(245, 246, 252, 0.10), rgba(30, 30, 30, 0.75)), url('" + imageURL +  "')"}
            bgSize="cover"
            bgPosition="center" 
            _hover={{
                opacity:0.7
              }}
            _active={{opacity:0.5}}
            bgRepeat="no-repeat"
            position="relative"
            >
            <Center><Text bottom="8" position="absolute" as="b" fontSize="40" textColor="white">{artistName}</Text></Center>
            <Center><Text bottom="2" position="absolute" as="i" fontSize="20" textColor="white">{description}</Text></Center>
        </Button>
    )
}