import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import bannerTopProduct from "../../public/images/bannerTopProduct.jpg"
import Link from 'next/link'

const TopProductSection = () => {
  return (
    <Box mt={"40px"} mx={"80px"} mb={"80px"}>
      <Box bgImg={bannerTopProduct.src} bgPos={"center"} bgRepeat={"no-repeat"} bgSize={"cover"} pos={"relative"}
        p={"60px 40px"} h={"220px"}>
      <Box sx={layout}/>
        <Flex pos={"absolute"} justifyContent={'space-between'} w={"100%"}>
          <Text color={"white"} fontSize={40} fontWeight={600} textTransform={'uppercase'} lineHeight={"1.3em"}>
            Tổng hợp các mẫu
            <br/>
            thiết kế biệt thự đẹp nhất
          </Text>
          <Link href={"/"}>
            <Button variant={"default-revert"} mr={"80px"} mt={"40px"}>
              Tìm hiểu thêm
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  )
}

export default TopProductSection

const layout = {
  bgColor: "global.secondary",
  opacity: 0.7,
  pos: "absolute",
  h: "100%",
  w: "100%",
  top: 0,
  left: 0,
}