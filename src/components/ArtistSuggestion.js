import React from 'react'
import { Input, Heading, Flex, Button, Text } from "@chakra-ui/react"

export default function ArtistSuggestion() {
    return(
        <Flex alignItems="center" justifyContent="center">
            <Flex w="600px" direction="column" bgColor="gray.200" p={12} rounded={6} fontSize={16}>
                <Heading mb={6} textAlign="center" fontSize="40px" fontWeight="hairline"> Suggest An Artist </Heading>
                <Flex direction="row">
                    <Text fontWeight="medium"> Artist Name</Text>
                    <Text fontWeight="medium" color="red">*</Text> 
                    <Text fontWeight="thin"> &nbsp;(Screen Name or Real Name)</Text>
                </Flex>
                <Input borderColor="gray.400" border="1px" placeholder="Artist Name" variant="filled" mb={3}></Input>
                <Flex direction="row">
                    <Text fontWeight="medium"> Artist Description</Text> 
                    <Text fontWeight="thin" >&nbsp;(Studios worked at/Projects worked on <u>OR</u> Job Title)</Text>
                </Flex>
                <Input borderColor="gray.400" border="1px"  placeholder="Artist Description" variant="filled" mb={3}></Input>
                <Button colorScheme="yellow">Submit</Button>
            </Flex>
        </Flex>        
    )
}