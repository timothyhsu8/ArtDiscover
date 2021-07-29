import React from 'react'
import { Box, Image, Text} from "@chakra-ui/react"
import '../styles.css'

export default function IconLink({ siteName, siteURL, logoSrc }) {
    if(siteURL === undefined) return <></>;

    return <a href={siteURL} target="_blank">
        <Box className="iconContainer">
            <figure>
                <Image className="icon" src={logoSrc} alt="Artist's Personal Website Logo" />
                <figcaption>
                    <Text textAlign="center" textColor="white" fontSize="20" fontWeight="hairline">{siteName}</Text>
                </figcaption>
            </figure>
        </Box>
    </a>

}
