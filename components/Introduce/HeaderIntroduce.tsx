import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import nenmongconduong from "../../public/images/nenmongconduong.jpg"


const HeaderIntroduce = ({value}:any) => {
  return (
    <Flex minH={"380px"} pt={["200px","150px","150px","150px"]} w={"100%"} bgImage={nenmongconduong.src} bgRepeat={"no-repeat"} bgSize={"cover"} bgPos={"center center"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} >
            <Text textAlign={"center"} fontSize={["28px","55px","40px","55px"]} fontWeight={600} color={"#fff"} textTransform={"uppercase"}>{value}</Text>
            <Box w={"100px"} h={"7px"} bgColor={"#FFF"}></Box>
    </Flex>
  )
}

export default HeaderIntroduce