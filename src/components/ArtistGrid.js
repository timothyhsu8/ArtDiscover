import React from 'react'
import { Grid } from "@chakra-ui/react"
import ArtistThumbnail from './ArtistThumbnail';

export default function ArtistGrid( { artists } ) {

    return (
        <Grid templateColumns="repeat(3, 1fr)">
        {artists.map((data) => {
            return (
               <ArtistThumbnail artistName={data.name} description={data.description} imageURL={data.imageURL} key={data.name}/>
            );
            })}
        </Grid>
    )
}