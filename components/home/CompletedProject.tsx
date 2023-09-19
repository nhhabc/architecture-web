import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Slider from 'react-slick'
import done1 from "../../public/images/done1.jpg"
import done2 from "../../public/images/done2.jpg"
import done3 from "../../public/images/done3.jpg"
import done4 from "../../public/images/done4.jpg"
import done5 from "../../public/images/done5.jpg"
import done6 from "../../public/images/done6.jpg"
import { fontBankGothic } from '@/app/fonts'
import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

const CompletedProject = () => {
  return (
    <Box bgColor={"global.primary"} bgPos={"top center"} bgRepeat={"no-repeat"} bgImage={"https://kientrucbiscons.vn/wp-content/uploads/2022/02/Mask-Group-7-e1645985659983.png"}
      pb={"80px"}>
      <Center pt={'60px'} pb={"20px"}>
        <Text color={"white"} fontSize={40} fontWeight={700} textTransform={'uppercase'}>Dự án đã bàn giao</Text>
      </Center>
      <Box mb={"20px"}>
        <Slider infinite={true} slidesToShow={1} centerMode={true} arrows={true}
          prevArrow={<ChevronLeftIcon sx={sliderIco} left={"200px"} />}
          nextArrow={<ChevronRightIcon sx={sliderIco} right={"200px"}/>}>
          {projectDummy.map((project, i) => (
            <Box key={i} padding={"15px"} outline={"none"} pos={"relative"}>
              <Image alt={project.name} src={project.img} minH={"75vh"}  w={"100%"} h={"300px"} objectFit={"cover"} objectPosition={"center"} borderRadius={"8px"}
                cursor={'pointer'}/>
              <Flex pos={"absolute"} bottom={0} left={0} p={"40px"} flexDir={"column"} color={'white'}>
                <Text mb={"5px"} fontSize={"24px"} fontFamily={fontBankGothic.style.fontFamily} lineHeight={"1.3em"} textTransform={'uppercase'}
                fontWeight={500}
                  textShadow={"0 0 10px #000"}>
                  {project.name}
                </Text>
                <Flex fontSize={"13px"} fontWeight={400} textTransform={'uppercase'} gap={2} flexWrap={"wrap"} justifyContent={'flex-start'} textShadow={"0 0 10px #000"}>
                  <Text>{project.type}</Text>
                  <span>|</span>
                  <Text>{project.location}</Text>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Slider>
      </Box>
      <Flex pt={"60px"} bgImage={"https://kientrucbiscons.vn/wp-content/uploads/2022/02/Mask-Group-7-e1645985659983.png"}
        bgPos={"top center"} bgRepeat={"no-repeat"} justifyContent={'center'}>
        <Link href={"/"}>
          <Button variant={"default-revert"}>
            Xem tất cả dự án
          </Button>
        </Link>
      </Flex>
    </Box>
  )
}

export default CompletedProject

const projectDummy = [
  {img: done1.src, name: "Căn Hộ CIPUTRA", type: "Chung Cư", location: "Tòa Shunshine, Ciputra, Hà Nội"},
  {img: done2.src, name: "TRAPEZOID VILLA", type: "Biệt Thự", location: "Khu nghỉ dưỡng Sân Golf Tam Đảo - Vĩnh Phúc."},
  {img: done3.src, name: "Cozrum Gallery Resident", type: "Khách Sạn", location: "Tòa Shunshine, Ciputra, Hà Nội"},
  {img: done4.src, name: "Roman House", type: "Nhà Phố", location: "Quảng Ninh"},
  {img: done5.src, name: "The Harmony House", type: "Nhà Phố", location: "Quảng Ninh"},
  {img: done6.src, name: "The Manor – Bình Thành", type: "Chung Cư", location: "Bình Thạnh, TP Hồ Chí Minh"},
]

const sliderIco = {
  zIndex: 10,
  fontSize: "50px",
  color: 'white',
  bgColor: "#000000A1",
  padding: "10px",
  _hover: {color: "white", bgColor: "#000000A1"}
}