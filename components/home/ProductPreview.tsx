import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import villaImg1 from "../../public/images/villa1.jpg"
import villaImg2 from "../../public/images/villa2.jpg"
import villaImg3 from "../../public/images/villa3.jpg"
import villaImg4 from "../../public/images/villa4.jpg"
import villaImg5 from "../../public/images/villa5.jpg"
import villaImg6 from "../../public/images/villa6.jpg"
import villaImg7 from "../../public/images/villa7.jpg"
import villaImg8 from "../../public/images/villa8.jpg"
import villaImg9 from "../../public/images/villa9.jpg"
import { fontBankGothic } from '@/app/fonts'

const ProductPreview = () => {
  return (
    <Grid pt={"80px"} px={"80px"} pb={"40px"} flexWrap={"wrap"} alignContent={'flex-start'} 
      templateColumns='repeat(3, 1fr)'>
      {productListDummy.map((product, i) => (
        <Flex key={i} m={"12.5px"} borderRadius={"6px"} pos={'relative'} minH={"300px"} cursor={'pointer'}>
          {/* <Box sx={layoutItem}/> */}
          <Image alt={product.name} src={product.img} borderRadius={"6px"}/>
          <Flex pos={"absolute"} bottom={0} left={0} p={"20px"} color={"white"} zIndex={1} flexDir={'column'}>
            <Text mb={"5px"} fontSize={"24px"} fontWeight={500} fontFamily={fontBankGothic.style.fontFamily}>{product.name}</Text>
            <Flex fontSize={"13px"} fontWeight={400} textTransform={'uppercase'} gap={2} flexWrap={"wrap"} justifyContent={'flex-start'}>
              <Text>{product.type}</Text>
              <span>|</span>
              <Text>{product.location}</Text>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Grid>
  )
}

export default ProductPreview

const productListDummy = [
  {name: "Cascade Villa", type: "Biệt thự", location: "Bàu Bàng, Bình Dương", img: villaImg1.src},
  {name: "X Villa", type: "Biệt thự", location: "Một khu đất nào đó đáp ứng đủ tiêu chuẩn tại Huế hoặc Đà Nẵng", img: villaImg2.src},
  {name: "LUONG SON VILLA", type: "Biệt thự", location: "Lương Sơn, Hòa Bình", img: villaImg3.src},
  {name: "REBECCA VILLA", type: "Biệt thự", location: "Đà Lạt, Lâm Đồng",img: villaImg4.src},
  {name: "Nhà Hướng Nội", type: "Biệt thự", location: "Tân Phú, Sài Gòn, Việt Nam", img: villaImg5.src},
  {name: "T.E.O Villa", type: "Biệt thự", location: "Thủ Dầu Một - Bình Dương", img: villaImg6.src},
  {name: "HA VILLA", type: "Biệt thự", location: "Long Biên, Hà Nội", img: villaImg7.src},
  {name: "Thai Son Villa", type: "Biệt thự", location: "Dương Kinh, Hải Phòng", img: villaImg8.src},
  {name: "BWILLA – Lời Thì Thầm Của Đá", type: "Biệt thự", location: "Cao Bằng", img: villaImg9.src},
]

const layoutItem = {
  pos:'absolute',
  top:0,
  left:0,
  h:"100%",
  w:"100%",
  bgColor:"transparent",
  bgGradient:"linear(to-b, #00000000 50%,#000000 100%)",
  opacity:0.7,
  borderRadius: "6px"
}