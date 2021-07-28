import React, { useState } from 'react'
import Header from '../components/Header'
import { Box, Grid, Text, Center, Select } from "@chakra-ui/react"
import { artistData } from '../artists';
import YoutubeResource from '../components/YoutubeResource'
import Methods from '../Methods';

export default function ArtResourcesPage() {
    // const [artists, setArtists] = useState(shuffle(artistData));
    const [artists, setArtists] = useState(artistData);

    return (
        <Box>
            <Header headerColor="teal.400" currentPage="artresources" weight="thin"/>

             {/* SORT BY OPTION */}
             <Box bgColor="white" h="10" w="100%" mt={3} mb={3}>
                <Center>
                    <Text fontSize="18" fontWeight="hairline">Sort by: &nbsp;</Text>
                    <Select w={200} h={10} color="teal.800" onChange={(sort) => Methods.reloadImages(sort.target.value, artists, setArtists)}>
                        <option value="sort_random">Random</option>
                        <option value="sort_abc">Alphabetical [A-Z]</option>
                        <option value="sort_zyx">Reverse Alphabetical [Z-A]</option>
                    </Select>
                </Center>
            </Box>

            <Grid templateColumns="1fr 1fr 1fr">
                <YoutubeResource 
                    name="Ethan Becker"
                    pfp="https://yt3.ggpht.com/ytc/AKedOLRnGwXNGf2venRyua3GMD8zfymRCzxzoXd55bvYVw=s88-c-k-c0x00ffffff-no-rj"
                    description="Animator - Avatar, DOTA, Voltron, Invincible"
                    vid1thumbnail="https://i.ytimg.com/vi/FqZhb5hRs5g/maxresdefault.jpg"
                    vid1title="DIGITAL ART: the O̲N̲L̲Y̲ 2 MISTAKES YOU'RE MAKING | NEVER USE PRESSURE OPACITY! EVAR!!! 🦅"
                    vid2thumbnail="https://i.ytimg.com/vi/emcO79uteN4/maxresdefault.jpg"
                    vid2title="DIGITAL ART: the O̲N̲L̲Y̲ 2 MISTAKES YOU'RE MAKING | NEVER USE PRESSURE OPACITY! EVAR!!! 🦅"
                    vid3thumbnail="https://i.ytimg.com/vi/uCwrYiU54ZM/maxresdefault.jpg"
                    vid3title="SAD-ist: 3 secret tips for BEGINNER animators | ALWAYS ONLY DRAW TWO POSES [animator reviews SADIST]"
                    />
                    <YoutubeResource 
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
                    />                    
            </Grid>
        </Box>
    )
}