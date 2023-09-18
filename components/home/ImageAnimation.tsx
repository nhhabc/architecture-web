import { Box, Flex, Image } from '@chakra-ui/react'
import image2 from "../../public/images/bietthu2.jpg"
import React, { useRef } from 'react'
import { motion } from "framer-motion"

const ImageAnimation = () => {
  const scrollRef = useRef<any>(null)

  return (
    <Flex pos={"relative"} overflowX={"clip"} >
      <Box w={"50%"} p={"10px"} pl={"60px"}>
        <Box pt={"140px"} pl={"30px"} ref={scrollRef}>
          <motion.div 
            initial={{transform: "translateX(-20%)"}}
            whileInView={{ transform: "translateX(0%)"}}
            >
            <Image src={image1} alt='1' w={"100%"} h={"400px"} objectFit={'cover'} />
          </motion.div>
        </Box>
      </Box>
      <Box w={"50%"}>
          <Flex p={'10px'} mb={"20px"} gap={"20px"} pos={"relative"} w={"100%"}>
            <motion.div
            style={{width: "29%"}}
            initial={{transform: "translateX(-20%)"}}
            whileInView={{ transform: "translateX(0%)"}}>
              <Image alt='2' src={image2.src} height={"180px"} objectFit={"cover"}/>
            </motion.div>
            <motion.div
            style={{width: "70%"}}
            initial={{transform: "translateX(30%)"}}
            whileInView={{ transform: "translateX(0%)"}}
            >
              <Image alt='3' src={image3} h={"700px"} objectFit={"cover"} transform={"translateY(-520px)"} />
            </motion.div>
              
            <Box pos={"absolute"} top={220} w={"100%"}>
              <motion.div
              style={{width: "80%"}}
              initial={{transform: "translateX(30%)"}}
              whileInView={{ transform: "translateX(0%)"}}>
                <Image alt='4' src={image4} height={"380px"} objectFit={'cover'}/>
              </motion.div>
            </Box>
          </Flex>
      </Box>
    </Flex>
  )
}

export default ImageAnimation

const image1 = "https://kientrucbiscons.vn/wp-content/uploads/2022/09/biet-thu-bw2-1024x577.jpg"
const image3 = "https://kientrucbiscons.vn/wp-content/uploads/2022/09/biet-thu-bw1-768x960.jpg"
const image4 = "https://kientrucbiscons.vn/wp-content/uploads/2022/09/biet-thu-bw4-768x549.jpg"