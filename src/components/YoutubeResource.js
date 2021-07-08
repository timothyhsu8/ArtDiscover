import React from 'react'
import { Box, Grid, Text, Image } from "@chakra-ui/react"
import { ViewIcon } from '@chakra-ui/icons'

export default function YoutubeResource( { name, pfp, description, vid1thumbnail, vid2thumbnail, vid3thumbnail, vid1title, vid2title, vid3title } ) {
    return(
        <Box h="350" bgColor="gray.100" _hover={{
            opacity:0.7,
            cursor:"pointer"
          }}
          _active={{opacity:0.5}}
          >
            <Grid h="100%" templateColumns="1fr 5fr">
                <Box>
                    <Image src={pfp} 
                        paddingTop="2"
                        w="100px"
                        margin="auto"
                        borderRadius="10"
                    ></Image>
                </Box>
                <Box>
                    <Grid templateRows="1fr 1fr 5fr" h="100%">
                        <Text fontSize="30" fontWeight="semibold"> {name} <ViewIcon color="red"/></Text>
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