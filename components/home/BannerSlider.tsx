import { useBreakpoint } from '@/hook/useBreakpoint';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, Image } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import Slider from "react-slick";

const BannerSlider = () => {
  const breakpoint = useBreakpoint(900)

  const imgSlide = useMemo(() => {
    if (breakpoint) {
      return imgSliderResponsive
    } else {
      return imgSlider
    }
  }, [breakpoint])

  return (
    <Box position={'relative'} w={"100%"} outline={'none'} height={"100vh"} overflowX={'hidden'} className='home-slider'
      overflow={'hidden'}>
      {imgSlider.length != 0 && 
      <Slider infinite={true} speed={500} slidesToScroll={1} slidesToShow={1} dots={true} arrows={true} fade
        appendDots={(dots) => (
          <Box pos={"absolute"} top={"93.4%"}>
            {dots}
          </Box>
        )}
        nextArrow={<ArrowForwardIcon top={"95%"} left={["65px","65px","80px","80px"]} boxSize={8} color={'white'} _hover={{color: "white"}} zIndex={10}/>}
        prevArrow={<ArrowBackIcon top={"95%"} left={"30px"} boxSize={8} color={'white'} _hover={{color: "white"}} zIndex={10}/>}
        >
        {imgSlide.map((img, i) => (
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

const imgSliderResponsive = [
  {src: "https://kientrucbiscons.vn/wp-content/uploads/2022/03/hic-3-768x1532.jpg"},
  {src: "https://kientrucbiscons.vn/wp-content/uploads/2022/03/pc-1-min-20211103082154-min-768x432.jpg"},
]