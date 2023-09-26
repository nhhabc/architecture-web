"use client";
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import locateIco from "../../public/images/locationIco.png";
import fbIco from "../../public/images/facebook.svg";
import phoneIco from "../../public/images/phone_ico.png";
import mailIco from "../../public/images/mail_ico.png";
import React from 'react'

const Contact = () => {
  return (
    <Box>
      <Box bgImage={"https://kientrucbiscons.vn/wp-content/uploads/2022/02/pc-1-min-20211103082154-e1645985934118.jpg"}
        bgPos={"center center"} bgRepeat={"no-repeat"} bgSize={'cover'} pos={'relative'} minH={"680px"} >
        <Box bgColor={"#000"} opacity={"0.5"} pos={"absolute"} h={"100%"} w={"100%"} top={0} left={0}/>
      </Box>
      <Box mt={"-350px"} px={"60px"}>
        <Flex p={"10px"} alignItems={'center'} flexDir={'column'}>
          <Box sx={text} fontSize={"40px"} fontWeight={600} zIndex={1}
            mb={"20px"}>
            <h1>Liên hệ với biscons</h1>
          </Box>
          <Text sx={text} zIndex={1} mb={"20px"} fontSize={16} fontWeight={400}>TRẢI NGHIỆM GIẢI PHÁP SỐ 1 VIỆT NAM VỀ THIẾT KẾ VÀ XÂY DỰNG NHÀ</Text>
          <Flex mt={"40px"} bgColor={"global.primary"} padding={"60px 80px 20px 80px"} zIndex={1} w={"100%"}>
            <Flex w={"100%"}>
              <Flex w={"50%"} p={"10px"} flexDir={'column'}>
                <Text sx={text} fontSize={30} fontWeight={700} mb={"20px"}>BISCONS</Text>
                <Text sx={text} mb={"20px"}>CÔNG TY KIẾN TRÚC VÀ NỘI THẤT HÀNG ĐẦU VIỆT NAM</Text>
                <Flex>
                  <Box p={"40px 60px 20px 0"} w={"50%"}>
                    <Image alt='location' src={locateIco.src} w={"15%"} mb={"15px"}/>
                    <Text sx={text} mb={"5px"} fontWeight={700} fontSize={"18px"}>ĐỊA CHỈ</Text>
                    <Text color={'white'} fontSize={"16px"} lineHeight={"1.5em"}>
                      <strong>Miền Bắc</strong>: Toà B1, Roman Plaza, P. Tố Hữu, Đai Mễ, Nam Từ Liêm, Hà Nội
                      <br/>
                      <strong>Miền Nam</strong>: 85 Cách Mạng Tháng Tám, Tòa Twins Tower, Phường Bến Thành, Quận 1, TP. HCM
                      <br/>
                      <strong>Miền Trung</strong>: 62 Xuân Thủy, Cẩm Lệ, Đà Nẵng
                    </Text>
                  </Box>
                  <Box p={"40px 60px 20px 0"} w={"50%"}> 
                    <Image alt='fb' src={fbIco.src} w={"40px"} mb={"15px"}/>
                    <Text sx={text} mb={"5px"} fontWeight={700} fontSize={"18px"}>FANPAGE</Text>
                    <Text color={'white'} fontSize={"16px"} lineHeight={"1.5em"}>Biscons Eco - Kiến Trúc Xanh</Text>
                  </Box>
                </Flex>
                <Flex>
                  
                </Flex>
              </Flex>
              <Flex w={"50%"}>

              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default Contact

const text = {
  textTransform:'uppercase',
  lineHeight:"1.3em",
  color:"white",
}