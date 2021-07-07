import React from 'react'
import Header from '../components/Header'
import { useColorMode, Flex, Box, Grid, Text, Center, Image } from "@chakra-ui/react"
import { ViewIcon } from '@chakra-ui/icons'

export default function ArtResourcesPage() {

    return (
        <Box>
            <Header headerColor="teal.400" currentPage="artresources" weight="thin"/>
            <Grid templateColumns="1fr 1fr">
                <Box h="350" bgColor="gray.100" >
                    <Grid h="100%" templateColumns="1fr 5fr">
                        <Box>
                            <Image src="https://yt3.ggpht.com/ytc/AKedOLRnGwXNGf2venRyua3GMD8zfymRCzxzoXd55bvYVw=s88-c-k-c0x00ffffff-no-rj" 
                                paddingTop="2"
                                w="120px"
                                margin="auto"
                                borderRadius="10"
                            ></Image>
                        </Box>
                        <Box>
                            <Grid templateRows="1fr 1fr 5fr" h="100%">
                                <Text fontSize="30" fontWeight="semibold">Ethan Becker <ViewIcon color="red"/></Text>
                                <Text fontSize="20" fontWeight="thin">Animator - Avatar, DOTA, Voltron, Invincible </Text>
                                <Grid templateColumns="1fr 1fr 1fr" fontWeight="medium" textAlign="center">
                                    <figure>
                                        <Image src="https://i.ytimg.com/vi/FqZhb5hRs5g/maxresdefault.jpg" w="98%"></Image>
                                        <figcaption> DIGITAL ART: the O̲N̲L̲Y̲ 2 MISTAKES YOU'RE MAKING | NEVER USE PRESSURE OPACITY! EVAR!!! 🦅 </figcaption>
                                    </figure>
                                    <figure>
                                        <Image src="https://i.ytimg.com/vi/emcO79uteN4/maxresdefault.jpg" w="98%"></Image>
                                        <figcaption> DIGITAL ART: the O̲N̲L̲Y̲ 2 MISTAKES YOU'RE MAKING | NEVER USE PRESSURE OPACITY! EVAR!!! 🦅 </figcaption>
                                    </figure>
                                    <figure>
                                        <Image src="https://i.ytimg.com/vi/uCwrYiU54ZM/maxresdefault.jpg" w="98%"></Image>
                                        <figcaption> SAD-ist: 3 secret tips for BEGINNER animators | ALWAYS ONLY DRAW TWO POSES [animator reviews SADIST] </figcaption>
                                    </figure>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Box>
            </Grid>
        </Box>
    )
}