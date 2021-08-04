import React from 'react'
import { Box, Grid, Text, Image, HStack, VStack } from "@chakra-ui/react"

export default function YoutubeResource( { name, pfp, description, description2, vid1thumbnail, vid2thumbnail, vid3thumbnail, vid1title, vid2title, vid3title } ) {
    return(
        <Box h="350" bgColor="gray.100" _hover={{cursor:"pointer"}} _active={{opacity:0.5}} className="resource disable-select">
            <Box>
                <HStack>
                    <Image src={pfp} mt="2" ml="2" w="100px" borderRadius="10" />
                    <VStack>
                        <HStack w="100%">
                            <Text bgColor="yellow.400" borderRight="2px" borderLeft="2px" borderColor="yellow.400" borderRadius="10" fontSize="30" fontWeight="semibold"> {name} </Text>
                            <Image boxSize="35" src="images/icons/youtube.png"></Image>
                            <Text as="i"> 670,561 Subscribers </Text>
                        </HStack>
                        <Text fontSize="20" fontWeight="normal" as="i"> {description} </Text>
                    </VStack>
                </HStack>
            </Box>
            <Grid templateRows="1fr 1fr 5fr" h="100%" mt="2">
                <Grid templateColumns="1fr 1fr 1fr" fontWeight="normal" textAlign="center">
                    <figure>
                        <Image src={vid1thumbnail} w="96%" ml="2"></Image>
                        <figcaption> {vid1title} </figcaption>
                    </figure>
                    <figure>
                        <Image src={vid2thumbnail} w="96%"></Image>
                        <figcaption> {vid2title} </figcaption>
                    </figure>
                    <figure>
                        <Image src={vid3thumbnail} w="96%" mr="2"></Image>
                        <figcaption> {vid3title} </figcaption>
                    </figure>
                </Grid>
            </Grid>
        </Box>
    )
}