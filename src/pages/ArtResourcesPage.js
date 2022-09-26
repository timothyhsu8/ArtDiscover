import React, { useState } from 'react'
import Header from '../components/Header'
import { Box, Grid, Text, Center, Select, useColorMode, Button, Avatar, VStack, Heading, Icon, Image, Tag } from "@chakra-ui/react"
import { artistData } from '../artists';
import { resourceData } from '../artresources'
import YoutubeResource from '../components/YoutubeResource'
import Methods from '../Methods';
import { BsGlobe2 } from "react-icons/bs";

export default function ArtResourcesPage() {
    // const [artists, setArtists] = useState(shuffle(artistData));
    // const [artists, setArtists] = useState(artistData);
    const [resources, setResources] = useState(resourceData)
    const { toggleColorMode } = useColorMode()


    return (
        <Box>
            {/* <Button float="right" variant="ghost" onClick={toggleColorMode} _focus={{}}>CHANGE COLOR MODE</Button> */}
            <Header headerColor="teal.400" currentPage="artresources" weight="thin"/>

             {/* SORT BY OPTION */}
             <Box bgColor="white" h="10" w="100%" mt={3} mb={3}>
                {/* <Center>
                    <Text fontSize="18" fontWeight="hairline">Sort by: &nbsp;</Text>
                    <Select w={200} h={10} color="teal.800" onChange={(sort) => console.log("changed")}>
                        <option value="sort_random">Random</option>
                        <option value="sort_abc">Alphabetical [A-Z]</option>
                        <option value="sort_zyx">Reverse Alphabetical [Z-A]</option>
                    </Select>
                </Center> */}
            </Box>

            <Grid templateColumns="repeat(auto-fill, minmax(600px, 1fr))">
                {
                    resources.map((item) => {
                        let costInfo
                        if (item.tags.includes("paid"))
                            costInfo = {"text": "Paid", "color": "blue"}
                        if (item.tags.includes("free"))
                            costInfo = {"text": "Free", "color": "green"}
                        if (item.tags.includes("mix"))
                            costInfo = {"text": "Mix", "color": "yellow"}

                        return (
                            <Box borderRadius={5} m={5} minH='350' spacing='0' _hover={{cursor:'pointer', opacity:'0.8', transition:'0.15s'}} transition='0.1s' boxShadow='md' bgColor='gray.100'>
                                <a href={item.url} target="_blank">
                                <Image src={item.image} w='full' h='200' fit='cover'/>
                                <VStack pos='relative'>
                                    <Tag pos='absolute' size='md' colorScheme={costInfo.color} right='3' top='3' variant='solid'> {costInfo.text} </Tag>
                                    <Box w='full' h='full' >
                                        <VStack spacing={1} padding={5}>
                                            <Avatar src={item.avatar} size='lg' />
                                            <Text fontSize={20} fontWeight="medium" textAlign='center'> { item.name } </Text>
                                            <Text fontSize={16} textAlign='center'>
                                                {item.description}
                                            </Text>
                                        </VStack>
                                    </Box>
                                </VStack>
                                </a>
                            </Box>
                        )
                    })
                }
            </Grid>
        </Box>
    )
}