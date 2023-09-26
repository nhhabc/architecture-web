import { Box, Flex, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

type NewsItemProps = {
  img: string,
  header: string,
  date: string,
  desc: string,
  href: string,
}

const NewsItem = (props: NewsItemProps) => {
  return (
    <Box boxShadow={"1px 1px 10px 1px rgb(0 0 0 / 10%)"} borderRadius={"10px"} transition={"all 0.3s"}
      bgColor={"white"} _hover={{boxShadow: "1px 1px 10px 1px rgb(0 0 0 / 30%)"}} overflow={'hidden'} className='news-item'>
      <Link href={props.href}>
        <Image alt={props.header} src={props.img} borderRadius={"10px 10px 0 0"} transition={".3s"}
          transformOrigin={"center center"} objectFit={'cover'} height={"300px"} w={"100%"}/>
      </Link>
      <Flex p={"15px"} my={"10px"} flexDir={'column'}>
        <Box fontSize={"18px"} fontWeight={600} lineHeight={"1.3em"} textTransform={'uppercase'}
          color={"global.text"} mb={"15px"}>
          <h3>{props.header}</h3>
        </Box>
        <Text fontSize={"16px"} fontWeight={400} lineHeight={"1.5em"} color={"#adadad"} mb={"13px"}>{props.date}</Text>
        <Box mb={"2rem"} fontWeight={400} lineHeight={"1.5em"} fontSize={15} color={"#777"} overflow={"hidden"}>
          <Text className='multiline'>{props.desc}</Text>
        </Box>
        <Link href={props.href}>
          <Text fontSize={"14px"} fontWeight={600} textTransform={'uppercase'} color={"global.primary"}>Xem thêm +</Text>
        </Link>
      </Flex>
    </Box>
  )
}

export default NewsItem