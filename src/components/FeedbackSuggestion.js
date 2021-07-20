import React from 'react'
import { Input, Heading, Flex, Button, Text, Textarea } from "@chakra-ui/react"

export default function FeedbackSuggestion() {
    return(
        <Flex alignItems="center" justifyContent="center">
            <Flex w="600px" direction="column" bgColor="gray.200" p={12} rounded={6}>
                <Heading mb={6} textAlign="center" fontSize="40px"> Suggest Feedback </Heading>
                <Text fontSize={16} fontWeight="medium"> Feedback </Text>
                <Textarea borderColor="gray.400" border="1px" placeholder="" variant="filled" mb={3} h={300}>
                    
                </Textarea>
                <Button colorScheme="yellow"> Submit </Button>
            </Flex>
        </Flex>        
    )
}