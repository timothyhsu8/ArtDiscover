import React from 'react'
import { useColorMode, Flex, Box, Grid, Text, Center, Image } from "@chakra-ui/react"
import Header from '../components/Header'
import ArtistThumbnail from '../components/ArtistThumbnail';

export default function ArtistsPage() {
    const { toggleColorMode } = useColorMode();

    return (
        <Box>
            {/* <Button onClick={toggleColorMode}> <MoonIcon /> </Button> */}
            <Header posi headerColor="teal.400" currentPage="artists"/>
            <Grid templateColumns="repeat(3, 1fr)">
                <ArtistThumbnail 
                    artistName="Kan Liu" 
                    description="Legends of Runeterra, Riot Games"
                    imageURL="https://cdna.artstation.com/p/assets/images/images/031/342/846/4k/kan-liu-666k-manyue.jpg?1603333242"
                    />
                <ArtistThumbnail 
                    artistName="Atey Ghailan" 
                    description="Riot Games, Founder/Creative Director at ENVAR"
                    imageURL="https://cdna.artstation.com/p/assets/images/images/033/466/576/4k/atey-ghailan-viz-dev.jpg?1609701813"
                    />
                <ArtistThumbnail 
                    artistName="Max Grecke" 
                    description="Legends of Runeterra, Riot Games, Etc."
                    imageURL="https://cdna.artstation.com/p/assets/images/images/033/092/582/large/max-grecke-brooklyn991.jpg?1608381982"
                    />
                <ArtistThumbnail 
                    artistName="Zeronis" 
                    description="Legends of Runeterra, Riot Games, Etc."
                    imageURL="https://cdnb.artstation.com/p/assets/images/images/029/296/321/large/zeronis-863f391e-5d40-46a4-a069-2f6d96b01e34.jpg?1597090726"
                    />
                <ArtistThumbnail 
                    artistName="Krenz Cushart" 
                    description="Illustrator, Teacher"
                    imageURL="https://cdnb.artstation.com/p/assets/images/images/025/666/779/large/krenz-cushart-10.jpg?1586536061"
                    />
                <ArtistThumbnail 
                    artistName="Toni Infante" 
                    description="Marvel, DC, CD Projekt Red, Boom! Studios, Apple"
                    imageURL="https://cdna.artstation.com/p/assets/images/images/018/514/910/large/toni-infante-hiakkimaru-w.jpg?1559667902"
                    />
                <ArtistThumbnail 
                    artistName="ArtOfMaki" 
                    description="League of Legends"
                    imageURL="https://cdnb.artstation.com/p/assets/images/images/031/326/309/large/art-of-maki-sucubus-final.jpg?1603291612"
                    />
                        <ArtistThumbnail 
                    artistName="Krenz Cushart" 
                    description="Illustrator, Teacher"
                    imageURL="https://cdnb.artstation.com/p/assets/images/images/025/666/779/large/krenz-cushart-10.jpg?1586536061"
                    />
                <ArtistThumbnail 
                    artistName="Toni Infante" 
                    description="Marvel, DC, CD Projekt Red, Boom! Studios, Apple"
                    imageURL="https://cdna.artstation.com/p/assets/images/images/018/514/910/large/toni-infante-hiakkimaru-w.jpg?1559667902"
                    />
                <ArtistThumbnail 
                    artistName="ArtOfMaki" 
                    description="League of Legends"
                    imageURL="https://cdnb.artstation.com/p/assets/images/images/031/326/309/large/art-of-maki-sucubus-final.jpg?1603291612"
                    />
                        <ArtistThumbnail 
                    artistName="Krenz Cushart" 
                    description="Illustrator, Teacher"
                    imageURL="https://cdnb.artstation.com/p/assets/images/images/025/666/779/large/krenz-cushart-10.jpg?1586536061"
                    />
                <ArtistThumbnail 
                    artistName="Toni Infante" 
                    description="Marvel, DC, CD Projekt Red, Boom! Studios, Apple"
                    imageURL="https://cdna.artstation.com/p/assets/images/images/018/514/910/large/toni-infante-hiakkimaru-w.jpg?1559667902"
                    />
                <ArtistThumbnail 
                    artistName="ArtOfMaki" 
                    description="League of Legends"
                    imageURL="https://cdnb.artstation.com/p/assets/images/images/031/326/309/large/art-of-maki-sucubus-final.jpg?1603291612"
                    />
                
                
            </Grid>
        </Box>
    )
}

