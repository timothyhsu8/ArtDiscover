import React from 'react'
import { Grid } from "@chakra-ui/react"
import ArtistThumbnail from './ArtistThumbnail';

export default function ArtistGrid( { artists, showArtistDetails } ) {

    return (
        <Grid templateColumns="repeat(3, 1fr)">
        {artists.map((data) => {
            return (
               <ArtistThumbnail artistData={data} key={data.name} showArtistDetails={showArtistDetails}/>
            );
            })}
        </Grid>
    )
}