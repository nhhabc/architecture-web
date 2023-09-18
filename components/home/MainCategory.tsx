import { Box, Center, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import maskImg from "../../public/images/mask_group.png"
import cateImg1 from "../../public/images/category1.jpg"
import cateImg2 from "../../public/images/category2.jpg"
import cateImg3 from "../../public/images/category3.jpg"
import Link from 'next/link'

type CategoryItemProps = {
  bgImage: any,
  heading: string,
  description: string
}

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


const CategoryItem = (props: CategoryItemProps) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <Flex w={"33.33%"}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        bgImg={props.bgImage}
        sx={cateItem}>
        <Box sx={cateOverlay}/>
        <Flex sx={cateItemHead}>
          {props.heading}
        </Flex>
        <Box sx={cateItemText} >
          <Text>
          {props.description}
          </Text>
        </Box>
        <Box sx={cateButton}>
          Khám phá thiết kế
        </Box>
    </Flex>
  )
}

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

const cateOverlay = {
  h: "100%",
  w: "100%",
  pos: 'absolute',
  top: 0,
  left: 0,
  bgColor: "transparent",
  bgGradient: "linear(to-b, #00000000, global.secondary)",
  opacity: 0.3,
}

const cateItem = {
  bgPos: "center",
  bgRepeat: "no-repeat",
  bgSize: "cover",
  px: "20px",
  pb: "30px",
  justifyContent: 'flex-end',
  pos: "relative",
  flexDir: "column",
}

const cateItemHead = {
  mb: "20px",
  color: "white",
  fontSize: "28px",
  fontWeight: 700,
  lineHeight: "1.4em",
  textTransform: "uppercase",
  zIndex: 1,
}

const cateItemText = {
  fontSize: 16,
  fontWeight: 400,
  color: 'white',
  zIndex: 1,
  pb: "20px"
}

const cateButton = {
  fontSize: "16px",
  textTransform: "uppercase",
  bgColor: "global.primary",
  fontWeight: 500,
  color: "white",
  w: "fit-content",
  borderRadius: 4,
  padding: "5px 20px",
  transition: "all .3s",
  cursor: "pointer",
  zIndex: 1,
  _hover: {
    bgColor: "white",
    color: "global.primary"
  }
}