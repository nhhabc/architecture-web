import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

type CategoryItemProps = {
  bgImage: any,
  heading: string,
  description: string
}

const CategoryItem = (props: CategoryItemProps) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <Flex w={["100%","100%","33.33%","33.33%"]}
      minH={"300px"}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        bgImg={props.bgImage}
        sx={cateItem}>
        <Box sx={cateOverlay} opacity={isHover ? 0.6 : 0.3}/>
        <Flex sx={cateItemHead}>
          {props.heading}
        </Flex>
        <Box sx={cateItemText} display={['none','none','block','block']} >
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

export default CategoryItem

const cateOverlay = {
  h: "100%",
  w: "100%",
  pos: 'absolute',
  top: 0,
  left: 0,
  transition: "all .3s",
  bgColor: "transparent",
  bgGradient: "linear(to-b, #00000000, global.secondary)",
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
  fontSize: ["18px","18px","28px","28px"],
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