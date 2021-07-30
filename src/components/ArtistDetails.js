import React, { useState } from 'react'
import { Box, Image, Center, Text, HStack } from "@chakra-ui/react"
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon, StarIcon } from '@chakra-ui/icons'
import '../styles.css'
import IconLink from './IconLink'

export default function ArtistsDetails({ prevImage, nextImage, setImageNum, setIsShowingArtwork, currentArtistData, imageNum }) {
    const [activeDot, setActiveDot] = useState(0);

    const prevDot = () => {
        (activeDot === 0 ? setActiveDot(currentArtistData.imageURL.length-1) : setActiveDot(activeDot-1));
        prevImage();
    }

    const nextDot = () => {
        (activeDot === currentArtistData.imageURL.length-1 ? setActiveDot(0) : setActiveDot(activeDot+1));
        nextImage();
    }

    const setDot = (num) => {
        setActiveDot(num);
        setImageNum(num);
    }

    const renderDots = () => {
        let dots = [];
        for(let i = 0 ; i < currentArtistData.imageURL.length ; i++)
            dots.push(<span className={activeDot === i ? "dot active" : "dot"} onClick={() => setDot(i)}></span>);
        return dots;
    }

    return <Box className="slideshow" position="fixed" w="100%" h="100vh" zIndex="1" bgColor="rgba(0, 0, 0, 0.9)">
        {/* CLOSE ICON */}
        <Box w="100%" h="5vh" textAlign="center"> 
            <CloseIcon onClick={() => setIsShowingArtwork(false)} _hover={{cursor:"pointer"}} float="right" mt="5" mr="5" boxSize="4" color="gray.400" />
        </Box>

        {/* SLIDESHOW */}
        <Center>
            <Box w="95%" h="70vh" pos="relative" bgColor="black" top="50%">
                <Image className="fade" pos="absolute" 
                    src={currentArtistData.imageURL[imageNum]} 
                    w="100%"
                    h="100%"
                    fit="contain"></Image>
                <Box onClick={() => prevDot()} pos="absolute" minH="100%" w="50px" transition="0.3s ease" bgGradient="linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%);" 
                     opacity="0" _hover={{cursor:"pointer", opacity:"0.8"}}></Box>
                <ChevronLeftIcon onClick={() => prevDot()} _hover={{cursor:"pointer", opacity:"0.8"}} color="gray.500" pos="absolute" boxSize="10" top="45%"/>
                
                <Box onClick={() => nextDot()} pos="relative" float="right" minH="100%" w="50px" transition="0.3s ease" 
                    opacity="0" bgGradient="linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 100%);"
                    _hover={{cursor:"pointer", opacity:"0.8"}}> 
                </Box>
                <ChevronRightIcon onClick={() => nextDot()} _hover={{cursor:"pointer", opacity:"0.8"}} color="gray.500" pos="absolute" top="45%" boxSize="10" right="0" /> 
            </Box>
        </Center>

        <Center>
            <Box w="100%" mt="4" >
                <HStack justifyContent="center" spacing="3">
                    {renderDots()}
                </HStack>
            </Box>
        </Center>

        {/* ARTIST INFORMATION */}
        <Box w="100%" h="70px" textAlign="center">
            <Text fontSize="50" textColor="white" fontWeight="normal">
                {currentArtistData.name}
            </Text>
            {/* <Center><Image pos="absolute" w="90px" right="700px" top="715px"
             borderRadius="50%" src="https://pbs.twimg.com/profile_images/1377451456584802306/otVumsPO_400x400.jpg"></Image></Center> */}
        </Box>

        <Center>
            <Box w="100%" mt="4" >
                <HStack justifyContent="center" spacing="14">
                    <IconLink siteName="Website" siteURL={currentArtistData.websiteURL} logoSrc="images/icons/personalwebsite.png"/>
                    <IconLink siteName="ArtStation" siteURL={currentArtistData.artstationURL} logoSrc="images/icons/artstation.png"/>
                    <IconLink siteName="DeviantArt" siteURL={currentArtistData.deviantartURL} logoSrc="images/icons/deviantart.png"/>
                    <IconLink siteName="Twitter" siteURL={currentArtistData.twitterURL} logoSrc="images/icons/twitter.png"/>
                    <IconLink siteName="Instagram" siteURL={currentArtistData.instagramURL} logoSrc="images/icons/instagram.png"/>
                    <IconLink siteName="Youtube" siteURL={currentArtistData.youtubeURL} logoSrc="images/icons/youtube.png"/>
                    <IconLink siteName="Twitch" siteURL={currentArtistData.twitchURL} logoSrc="images/icons/twitch.png"/>
                    <IconLink siteName="Patreon" siteURL={currentArtistData.patreonURL} logoSrc="images/icons/patreon.png"/>
                </HStack>
            </Box>
        </Center>
    </Box>
}