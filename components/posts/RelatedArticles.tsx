import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const RelatedArticles = () => {
  return (
    <Flex backgroundColor={"white"} w={"100%"} flexDir={"column"} p={"10px"}>
        <Text bgColor={"global.primary"} textAlign={"center"} fontSize={"16px"} fontWeight={500} color={"white"} textTransform={"uppercase"} p={"10px"}>Bài viết liên quan</Text>
    </Flex>
  )
}

export default RelatedArticles

const postsDummy = [
    {
     src:"./images/post1.jpg",
     date:"18/04/2023"
    },
]