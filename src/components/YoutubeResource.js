import React from 'react'
import { Box, Grid, Text, Image, HStack } from "@chakra-ui/react"

export default function YoutubeResource( { name, pfp, description, vid1thumbnail, vid2thumbnail, vid3thumbnail, vid1title, vid2title, vid3title } ) {
    return(
        <Box h="350" bgColor="gray.100" _hover={{cursor:"pointer"}} _active={{opacity:0.5}} className="resource disable-select">
            <Grid h="100%" templateColumns="1fr 5fr">
                <Box>
                    <Image src={pfp} paddingTop="2" w="100px" margin="auto" borderRadius="10" />
                </Box>
                <Box>
                    <Grid templateRows="1fr 1fr 5fr" h="100%">
                        <HStack><Text fontSize="30" fontWeight="semibold"> {name} </Text><Image boxSize="35" src="images/icons/youtube.png"></Image></HStack>
                        <Text fontSize="20" fontWeight="normal" as="i"> {description} </Text>
                        <Grid templateColumns="1fr 1fr 1fr" fontWeight="normal" textAlign="center">
                            <figure>
                                <Image src={vid1thumbnail} w="98%"></Image>
                                <figcaption> {vid1title} </figcaption>
                            </figure>
                            <figure>
                                <Image src={vid2thumbnail} w="98%"></Image>
                                <figcaption> {vid2title} </figcaption>
                            </figure>
                            <figure>
                                <Image src={vid3thumbnail} w="98%"></Image>
                                <figcaption> {vid3title} </figcaption>
                            </figure>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Box>
    )
}