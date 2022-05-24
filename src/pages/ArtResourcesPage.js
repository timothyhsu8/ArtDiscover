import React, { useState } from 'react'
import Header from '../components/Header'
import { Box, Grid, Text, Center, Select, useColorMode, Button, Avatar, VStack, Heading, Icon, Image } from "@chakra-ui/react"
import { artistData } from '../artists';
import { resourceData } from '../artresources'
import YoutubeResource from '../components/YoutubeResource'
import Methods from '../Methods';
import { BsGlobe2 } from "react-icons/bs";

export default function ArtResourcesPage() {
    // const [artists, setArtists] = useState(shuffle(artistData));
    // const [artists, setArtists] = useState(artistData);
    const [resoureces, setResources] = useState(resourceData)
    const { toggleColorMode } = useColorMode()

    console.log(resoureces)
    const items = [1, 2, 3, 4, 5, 6, 7]
    const imageUrl = 'images/resources/backgrounds/cubebrush.png'
    return (
        <Box>
            {/* <Button float="right" variant="ghost" onClick={toggleColorMode} _focus={{}}>CHANGE COLOR MODE</Button> */}
            <Header headerColor="teal.400" currentPage="artresources" weight="thin"/>

             {/* SORT BY OPTION */}
             <Box bgColor="white" h="10" w="100%" mt={3} mb={3}>
                <Center>
                    <Text fontSize="18" fontWeight="hairline">Sort by: &nbsp;</Text>
                    <Select w={200} h={10} color="teal.800" onChange={(sort) => console.log("changed")}>
                        <option value="sort_random">Random</option>
                        <option value="sort_abc">Alphabetical [A-Z]</option>
                        <option value="sort_zyx">Reverse Alphabetical [Z-A]</option>
                    </Select>
                </Center>
            </Box>

            <Grid templateColumns="repeat(auto-fill, minmax(600px, 1fr))">
                {
                    resoureces.map((item) => {
                        return (
                            <a  href={item.url} target="_blank">
                                <VStack borderRadius={5} m={5} h='400' spacing='0' _hover={{cursor:'pointer', opacity:'0.8', transition:'0.15s'}} transition='0.1s' boxShadow='md' bgColor='white' >
                                    <Image src={item.image} w='full' h='200' fit='cover'/>
                                    <Box w='full' h='full' >
                                        <VStack padding={5}>
                                            <Avatar src={item.avatar} size='lg' />
                                            <Heading size='lg'> {item.name} </Heading>
                                            <Text fontSize={20}>
                                                {item.description}
                                            </Text>
                                        </VStack>
                                    </Box>
                                </VStack>
                            </a>
                        )
                    })
                }


                {/* <Box pos='relative' h='350' bgImage={`linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.9)), url('${imageUrl}')`}
                 bgColor='gray.100' bgSize='cover' _hover={{cursor:'pointer', bgColor:'gray.200'}}>
                    <Icon pos='absolute' color='gray.700' right='2' top='2' as={BsGlobe2} boxSize={6} />
                    <VStack padding={5}>
                        <Avatar src='images/resources/cubebrush.png' size='2xl' />
                        <Heading> Cubebrush </Heading>
                        <Text fontSize={20}>
                            Shop for art resources by community members
                        </Text>
                    </VStack>
                </Box> */}
                {/* <YoutubeResource 
                    name="Ethan Becker"
                    pfp="https://yt3.ggpht.com/ytc/AKedOLRnGwXNGf2venRyua3GMD8zfymRCzxzoXd55bvYVw=s88-c-k-c0x00ffffff-no-rj"
                    description="Animator - Avatar, DOTA, Voltron, Invincible"
                    description2="Teaches imperative techniques for breaking down and simplifying professional artwork while also keeping things entertaining."
                    vid1thumbnail="https://i.ytimg.com/vi/FqZhb5hRs5g/maxresdefault.jpg"
                    vid1title="DIGITAL ART: the O̲N̲L̲Y̲ 2 MISTAKES YOU'RE MAKING | NEVER USE PRESSURE OPACITY! EVAR!!! 🦅"
                    vid2thumbnail="https://i.ytimg.com/vi/emcO79uteN4/maxresdefault.jpg"
                    vid2title="DIGITAL ART: the O̲N̲L̲Y̲ 2 MISTAKES YOU'RE MAKING | NEVER USE PRESSURE OPACITY! EVAR!!! 🦅"
                    vid3thumbnail="https://i.ytimg.com/vi/uCwrYiU54ZM/maxresdefault.jpg"
                    vid3title="SAD-ist: 3 secret tips for BEGINNER animators | ALWAYS ONLY DRAW TWO POSES [animator reviews SADIST]"
                    /> */}
                    {/* <YoutubeResource 
                    name="Sinix Design"
                    pfp="https://yt3.ggpht.com/ytc/AKedOLS57tKeriBs9tAB2SJhueYddg-ItkALmxdcRIXd=s176-c-k-c0x00ffffff-no-rj-mo"
                    description="Animator - Avatar, DOTA, Voltron, Invincible"
                    vid1thumbnail="https://i.ytimg.com/vi/FqZhb5hRs5g/maxresdefault.jpg"
                    vid1title="DIGITAL ART: the O̲N̲L̲Y̲ 2 MISTAKES YOU'RE MAKING | NEVER USE PRESSURE OPACITY! EVAR!!! 🦅"
                    vid2thumbnail="https://i.ytimg.com/vi/emcO79uteN4/maxresdefault.jpg"
                    vid2title="DIGITAL ART: the O̲N̲L̲Y̲ 2 MISTAKES YOU'RE MAKING | NEVER USE PRESSURE OPACITY! EVAR!!! 🦅"
                    vid3thumbnail="https://i.ytimg.com/vi/uCwrYiU54ZM/maxresdefault.jpg"
                    vid3title="SAD-ist: 3 secret tips for BEGINNER animators | ALWAYS ONLY DRAW TWO POSES [animator reviews SADIST]"
                    />
                    <YoutubeResource 
                    name="Ahmed Aldoori"
                    pfp="https://yt3.ggpht.com/ytc/AKedOLQiqksKVvVWYx1usC3QCwA3boM4QaaDeeVJJZN-Y6o=s176-c-k-c0x00ffffff-no-rj-mo"
                    description="Animator - Avatar, DOTA, Voltron, Invincible"
                    vid1thumbnail="https://i.ytimg.com/vi/FqZhb5hRs5g/maxresdefault.jpg"
                    vid1title="DIGITAL ART: the O̲N̲L̲Y̲ 2 MISTAKES YOU'RE MAKING | NEVER USE PRESSURE OPACITY! EVAR!!! 🦅"
                    vid2thumbnail="https://i.ytimg.com/vi/emcO79uteN4/maxresdefault.jpg"
                    vid2title="DIGITAL ART: the O̲N̲L̲Y̲ 2 MISTAKES YOU'RE MAKING | NEVER USE PRESSURE OPACITY! EVAR!!! 🦅"
                    vid3thumbnail="https://i.ytimg.com/vi/uCwrYiU54ZM/maxresdefault.jpg"
                    vid3title="SAD-ist: 3 secret tips for BEGINNER animators | ALWAYS ONLY DRAW TWO POSES [animator reviews SADIST]"
                    />
                    <YoutubeResource 
                    name="Marc Brunet"
                    pfp="https://yt3.ggpht.com/ytc/AKedOLTtyFs69uvMOWgMVWBNxlqmKuQvi6BAoSwu6IF9Sg=s176-c-k-c0x00ffffff-no-rj-mo"
                    description="Animator - Avatar, DOTA, Voltron, Invincible"
                    vid1thumbnail="https://i.ytimg.com/vi/FqZhb5hRs5g/maxresdefault.jpg"
                    vid1title="DIGITAL ART: the O̲N̲L̲Y̲ 2 MISTAKES YOU'RE MAKING | NEVER USE PRESSURE OPACITY! EVAR!!! 🦅"
                    vid2thumbnail="https://i.ytimg.com/vi/emcO79uteN4/maxresdefault.jpg"
                    vid2title="DIGITAL ART: the O̲N̲L̲Y̲ 2 MISTAKES YOU'RE MAKING | NEVER USE PRESSURE OPACITY! EVAR!!! 🦅"
                    vid3thumbnail="https://i.ytimg.com/vi/uCwrYiU54ZM/maxresdefault.jpg"
                    vid3title="SAD-ist: 3 secret tips for BEGINNER animators | ALWAYS ONLY DRAW TWO POSES [animator reviews SADIST]"
                    />
                    <YoutubeResource 
                    name="moderndayjames"
                    pfp="https://yt3.ggpht.com/ytc/AKedOLQHADrbZ1bOCeKkq-ViQqxTSJaq39ueCqC8EBv4Xw=s176-c-k-c0x00ffffff-no-rj-mo"
                    description="Animator - Avatar, DOTA, Voltron, Invincible"
                    vid1thumbnail="https://i.ytimg.com/vi/FqZhb5hRs5g/maxresdefault.jpg"
                    vid1title="DIGITAL ART: the O̲N̲L̲Y̲ 2 MISTAKES YOU'RE MAKING | NEVER USE PRESSURE OPACITY! EVAR!!! 🦅"
                    vid2thumbnail="https://i.ytimg.com/vi/emcO79uteN4/maxresdefault.jpg"
                    vid2title="DIGITAL ART: the O̲N̲L̲Y̲ 2 MISTAKES YOU'RE MAKING | NEVER USE PRESSURE OPACITY! EVAR!!! 🦅"
                    vid3thumbnail="https://i.ytimg.com/vi/uCwrYiU54ZM/maxresdefault.jpg"
                    vid3title="SAD-ist: 3 secret tips for BEGINNER animators | ALWAYS ONLY DRAW TWO POSES [animator reviews SADIST]"
                    />                     */}
            </Grid>
        </Box>
    )
}