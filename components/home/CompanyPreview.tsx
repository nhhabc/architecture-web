import { fontBankGothic } from '@/app/fonts'
import { Box, Center, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const CompanyPreview = () => {
  return (
    <Flex py={"60px"} zIndex={2} flexDir={"column"}>
      <Flex pos={'relative'} w={"65%"} pl={["40px","40px","40px","80px"]} flexDir={'column'}>
        <Flex w={"100%"} flexDir={['column','column','column','row']}>
          <Flex w={"40%"} >
            <Center flexDir={['column','column','column','row']}
              alignItems={["flex-start","flex-start","flex-start","flex-start"]}>
              <Box fontFamily={fontBankGothic.style.fontFamily} fontSize={"75px"} fontWeight={400} color={"global.secondary"} mr={"40px"}>
                37
              </Box>
              <Box maxW={"100%"} color={"global.text"} fontSize={14} fontWeight={500} lineHeight={"1.5em"}>
                TỈNH PHỦ SÓNG 
                <br/>CÔNG TRÌNH
              </Box>
            </Center>
          </Flex>
          <Flex w={"60%"}>
            <Center flexDir={['column','column','column','row']}>
              <Box fontFamily={fontBankGothic.style.fontFamily} fontSize={"75px"} fontWeight={400} color={"global.secondary"} mr={"40px"}>
                500+
              </Box>
              <Box maxW={"100%"} color={"global.text"} fontSize={14} fontWeight={500} lineHeight={"1.5em"}>
              CÔNG TRÌNH BIỆT THỰ
              <br/>NHÀ PHỐ CHUYÊN NGHIỆP
              </Box>
            </Center>
          </Flex>
        </Flex>
        <Box my={"60px"} fontSize={"36px"} fontWeight={300} lineHeight={"1.3em"}>
          Với quan điểm của chúng tôi, Kiến trúc là bản tuyên ngôn thể hiện tính cách cũng như phong cách sống của gia chủ.
        </Box>
        <Box mt={"60px"}>
          <Box fontSize={"16px"} fontWeight={500} textTransform={'uppercase'} borderRadius={3} p={"8px 25px"} bgColor={"global.primary"} w={'fit-content'} color={"ast.4"}
            transition={".3s"}
            _hover={{bgColor: "ast.4", color: "global.primary"}}
            cursor={'pointer'}>
            <Link href={"/"}>
              Về Biscon
            </Link>
          </Box>
        </Box>
      </Flex>
    </Flex>
  )
}

export default CompanyPreview