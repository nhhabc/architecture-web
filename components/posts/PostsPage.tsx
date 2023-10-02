import { Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import HeaderIntroduce from '../Introduce/HeaderIntroduce'
import RelatedArticles from './RelatedArticles'

const PostsPage = () => {
  return (
    <Flex flexDir={"column"}>
        <HeaderIntroduce value={"bài viết"} />
        <Container maxW={"1250px"} display={"flex"}>
            <Flex bg={"white"} p={"20px 10px"} w={"80%"} h={"100%"}>
                <Text color={"global.primary"} fontWeight={600} fontSize={"24px"} textTransform={"uppercase"}> 
                    Cột mốc 5 năm biscons
                </Text>
            </Flex>
            <Flex  w={"20%"} h={"100%"}>
                <Flex w={"100%"}>
                    <RelatedArticles />
                </Flex>
                <Flex></Flex>
            </Flex>
        </Container>
    </Flex>
  )
}

export default PostsPage