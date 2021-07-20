import React from 'react'
import { Input, Heading, Flex, Button, Text } from "@chakra-ui/react"

export default function ArtistSuggestion() {
    return(
        <Flex alignItems="center" justifyContent="center">
            <Flex w="600px" direction="column" bgColor="gray.200" p={12} rounded={6}>
                <Heading mb={6} textAlign="center" fontSize="40px"> Suggest An Artist </Heading>
                <Flex direction="row">
                    <Text fontSize={16} fontWeight="medium"> Artist Name</Text> 
                    <Text fontSize={16} fontWeight="thin" >&nbsp;(Screen Name or Real Name)</Text>
                </Flex>
                <Input borderColor="gray.400" border="1px" placeholder="Artist Name" variant="filled" mb={3}></Input>
                <Flex direction="row">
                    <Text fontSize={16} fontWeight="medium"> Artist Description</Text> 
                    <Text fontSize={16} fontWeight="thin" >&nbsp;(Studios worked at/Projects worked on <u>OR</u> Job Title)</Text>
                </Flex>
                <Input borderColor="gray.400" border="1px"  placeholder="Artist Description" variant="filled" mb={3}></Input>
                <Button colorScheme="yellow">Submit</Button>
            </Flex>
        </Flex>        
    )
}