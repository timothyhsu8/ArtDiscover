import React from 'react'
import { Input, Heading, Flex, Button, Text } from "@chakra-ui/react"

export default function ResourceSuggestion() {
    return(
        <Flex alignItems="center" justifyContent="center">
            <Flex w="600px" direction="column" bgColor="gray.200" p={12} rounded={6}>
                <Heading mb={6} textAlign="center" fontSize="40px"> Suggest An Art Resource </Heading>
                <Flex direction="row">
                    <Text fontSize={16} fontWeight="medium"> Website Name</Text> 
                    <Text fontSize={16} fontWeight="thin" >&nbsp;(Youtube, Instagram, Schoolism, etc.) </Text>
                </Flex>
                <Input borderColor="gray.400" border="1px" placeholder="Website Name" variant="filled" mb={3}></Input>                    
                <Flex direction="row">
                    <Text fontSize={16} fontWeight="medium"> Artist Name</Text> 
                    <Text fontSize={16} fontWeight="thin" >&nbsp;(If Applicable) </Text>
                </Flex>
                <Input borderColor="gray.400" border="1px"  placeholder="Job Title, Notable Works, Etc." variant="filled" mb={3}></Input>
                <Button colorScheme="yellow">Submit</Button>
            </Flex>
        </Flex>        
    )
}