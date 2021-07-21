import React, { useState } from 'react'
import Header from '../components/Header'
import { Box, Button, Center, Grid } from "@chakra-ui/react"
import ArtistSuggestion from '../components/ArtistSuggestion';
import ResourceSuggestion from '../components/ResourceSuggestion';
import FeedbackSuggestion from '../components/FeedbackSuggestion';

export default function SuggestionsPage() {

    const [formType, setFormType] = useState("artist");

    const renderForm = () => {
        if(formType === "artist")
            return <ArtistSuggestion />;
        if(formType === "resource")
            return <ResourceSuggestion />;
        if(formType === "feedback")
            return <FeedbackSuggestion />
    }

    return (
        <Box>
            {/* OPTION BUTTONS */}
            <Header headerColor="teal.400" currentPage="suggestions" weight="thin"/>
            <Center>
                <Box w="900px" h="100px">
                    <Grid templateColumns="1fr 1fr 1fr" h="100px" >
                        <Center> 
                            <Button onClick={() => setFormType("artist")} w="250px" h="50px" bgColor={formType === "artist" ? "yellow.300" : "gray.200"} 
                                _hover={{cursor:"pointer", bgColor:"orange.300"}}>
                                Suggest Artist
                            </Button> 
                        </Center>
                        <Center> 
                            <Button onClick={() => setFormType("resource")} w="250px" h="50px" bgColor={formType === "resource" ? "yellow.300" : "gray.200"}
                                _hover={{cursor:"pointer", bgColor:"orange.300"}}>
                                Suggest Art Resource
                            </Button> 
                        </Center>
                        <Center> 
                            <Button onClick={() => setFormType("feedback")} w="250px" h="50px" bgColor={formType === "feedback" ? "yellow.300" : "gray.200"}
                            _hover={{cursor:"pointer", bgColor:"orange.300"}}>
                                Suggest Feedback
                                </Button> 
                        </Center>
                    </Grid>
                </Box>
            </Center>
            
            {/* FORM */}
            {renderForm()}
        </Box>
    )
}