"use client";
import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import CoreValue from '@/components/Introduce/CoreValue'
import HistoryBegins from '@/components/Introduce/HistoryBegins'
import NDC8369 from "../../../public/images/NDC8369.jpg"
import HeaderIntroduce from '@/components/Introduce/HeaderIntroduce';


const Road = () => {
  return (
      <Flex flexDir={"column"}>
        <HeaderIntroduce value={"Nền móng & con đường"} />
        <Flex flexDir={["column","column","row","row"]} p={["40px 10px","40px 80px","40px 80px","40px 80px"]}>
            <Flex flexDir={"column"} w={["100%","50%","50%","50%"]} pr={10} justify={"center"} >
              <Text fontSize={"40px"} fontWeight={600} color={"#000"} textTransform={"uppercase"}>Con đường</Text>
              <Text mt={5}>Viễn cảnh BISCONS sẽ trở thành đơn vị tư vấn thiết kế, thi công trọn gói có danh tiếng. Khẳng định sự uy tín và lan rộng tầm ảnh hưởng tại thị trường Việt Nam và Quốc Tế. Mục tiêu đến năm 2025 BISCONS sẽ hoàn thành kế hoạch mở rộng thêm các mảng phân phối, bán lẻ nội thất, vật liệu xây dựng. Hoàn thiện chuỗi cung ứng khép kín.</Text>
              <Text mt={5}>Đem tới những công trình không chỉ đầy tính sáng tạo, độc đáo về ý tưởng mà còn bền đẹp vĩnh cửu với thời gian, nhằm nâng cao đời sống và đem đến cho mọi người những trải nghiệm trọn vẹn, giàu xúc cảm.</Text>
            </Flex>
            <Flex w={["100%","50%","50%","50%"]}>
              <Image src={NDC8369.src} alt='gift' objectFit={"contain"} />
            </Flex>
        </Flex>
        <CoreValue />
        <HistoryBegins />
      </Flex>
  )
}

export default Road