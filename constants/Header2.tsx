import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

type HeaderProps = {
  bgImg: string,
  title: string
}

const Header2 = (props: HeaderProps) => {
  return (
    <Box bgImg={props.bgImg}
    bgPos={"center center"} h={"380px"}>
      <Flex p={"10px"} pt={"40px"} alignItems={'center'} flexDir={'column'}>
        <Text fontSize={["28px","28px","55px","55px"]} mt={"200px"} fontWeight={600} color={'white'} textTransform={'uppercase'}>
          {props.title}
        </Text>
        <Box borderTop={"8px solid white"} my={"15px"} w={"100px"}/>
      </Flex>
    </Box>
  )
}

export default Header2