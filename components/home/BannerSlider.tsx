'use client'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import Slider from "react-slick";

const BannerSlider = () => {
  return (
    <Box position={'relative'} w={"100%"} outline={'none'} height={"100vh"} overflowX={'hidden'} className='home-slider'>
      {imgSlider.length != 0 && 
      <Slider infinite={true} speed={500} slidesToScroll={1} slidesToShow={1} dots={true} arrows={true}
        appendDots={(dots) => (
          <Box pos={"absolute"} top={"94%"}>
            {dots}
          </Box>
        )}
        nextArrow={<ArrowForwardIcon top={"95%"} left={"80px"} boxSize={8} color={'white'} _hover={{color: "white"}} zIndex={10}/>}
        prevArrow={<ArrowBackIcon top={"95%"} left={"30px"} boxSize={8} color={'white'} _hover={{color: "white"}} zIndex={10}/>}
        >
        {imgSlider.map((img, i) => (
          <Box key={i} cursor={"pointer"} outline={"none"}>
            <Image src={img.src} key={i} alt={`img-${i}`} height={"100vh"} w={"100%"} objectFit={"cover"}/>
          </Box>
        ))}
      </Slider>}
    </Box>
  )
}

export default BannerSlider

const imgSlider = [
  {src: "https://kientrucbiscons.vn/wp-content/uploads/2022/09/biet-thu-bw2.jpg"},
  {src: "https://kientrucbiscons.vn/wp-content/uploads/2022/04/thiet-ke-biet-thu-san-vuon-300m2-1.jpg"},
  {src: "https://kientrucbiscons.vn/wp-content/uploads/2023/03/z4146302646554_a2b216473dd6e32478ee075a1c42689b.jpg"},
]