import { Box, Center, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import maskImg from "../../public/images/mask_group.png"
import cateImg1 from "../../public/images/category1.jpg"
import cateImg2 from "../../public/images/category2.jpg"
import cateImg3 from "../../public/images/category3.jpg"
import CategoryItem from '@/constants/CategoryItem'

const MainCategory = () => {
  return (
    <>
    <Box bgColor={"global.primary"}
      bgImage={maskImg.src}
      bgPos={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      padding={"60px 10px"}>
      <Center color={"white"} fontSize={"40px"} fontWeight={700}>
        <h2>HẠNG MỤC THIẾT KẾ TRỌNG ĐIỂM</h2>
      </Center>
    </Box>

    <Flex minH={"85vh"}>
      {cateDummy.map((item, i) => (
        <CategoryItem key={i} bgImage={item.bgImg} description={item.description} heading={item.heading}/>
      ))}
    </Flex>
    </>
  )
}

export default MainCategory


const cateDummy = [
  {
    bgImg: cateImg1.src,
    heading: "Nhà phố hiện đại",
    description: "Giải pháp thiết kế tối ưu, đề cao tính cá nhân hóa, Biscons sẽ mang đến cho bạn một công trình đẳng cấp, mang đậm cá tính gia chủ.",
  },
  {
    bgImg: cateImg2.src,
    heading: "Biệt thự hiện đại",
    description: "Với kiến thức chuyên môn cao cùng trải nghiệm phong phú, Biscons sẽ biến ngôi nhà của bạn thành Villa nghỉ dưỡng thực thụ!",
  },
  {
    bgImg: cateImg3.src,
    heading: "Văn phòng",
    description: "Đề cao cá tính doanh nghiệp, từ đó chuyển hóa thành giải pháp sáng tạo và thiết kế trải nghiệm mới trong không gian làm việc.",
  },
]

