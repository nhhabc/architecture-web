import { Box, Center, Flex, Text } from '@chakra-ui/react'
import React from 'react'

type HeaderProps = {
  bgImg: string,
  title: string
}

const Header1 = (props: HeaderProps) => {
  return (
    <Box bgImg={props.bgImg}
      bgPos={"center center"} h={"380px"}>
      <Flex py={"40px"}>
        <Center mt={"200px"} p={"10px"} w={"100%"}>
          <Center mx={"27%"} bgColor={"#223B5FD4"} w={"100%"} textAlign={'center'}>
            <Text color={"white"} fontSize={'55px'} fontWeight={600} textTransform={'uppercase'} lineHeight={"80px"}>
              {props.title}
            </Text>
          </Center>
        </Center>
      </Flex>
    </Box>
  )
}

export default Header1