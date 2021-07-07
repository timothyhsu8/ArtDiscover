import React from 'react'
import Header from '../components/Header'
import { useColorMode, Flex, Box, Grid, Text, Center, Image } from "@chakra-ui/react"
import { ViewIcon } from '@chakra-ui/icons'

export default function ArtResourcesPage() {

    return (
        <Box>
            <Header headerColor="teal.400" currentPage="artresources" weight="thin"/>
            <Box w="50%" h="200" bgColor="gray.100" >
                <Grid h="100%" templateColumns="1fr 4fr">
                    <Box>
                        <Image src="https://yt3.ggpht.com/ytc/AKedOLRnGwXNGf2venRyua3GMD8zfymRCzxzoXd55bvYVw=s88-c-k-c0x00ffffff-no-rj" 
                        paddingTop="30"
                        w="140px"
                        margin="auto"

                        ></Image>
                    </Box>
                    <Box>
                        <Text fontSize="30" fontWeight="semibold">Ethan Becker <ViewIcon color="red"/></Text>
                        <Text fontSize="18" fontWeight="thin">Animator - Avatar, DOTA, Voltron, Invincible </Text>
                    </Box>
                </Grid>
            </Box>
        </Box>
    )
}