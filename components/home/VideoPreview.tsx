import { Box, Button, Center, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const VideoPreview = () => {
  return (
    <Box bgImage={"https://kientrucbiscons.vn/wp-content/uploads/2022/03/2b47b811f12a3e74673b.jpg"}
      bgPos={"center"} bgRepeat={"no-repeat"} bgSize={"cover"} pt={["110px","110px","140px","140px"]} px={["10px","10px","80px","80px"]} pb={["20px","20px","60px","60px"]}
      pos={"relative"} overflowX={'hidden'}>
      <Box fontSize={"28px"} fontWeight={700} textTransform={'uppercase'} textAlign={'center'} pos={"absolute"}
        top={"40px"} w={"92%"} color={"#2B2727"}>
        Thư viện video
      </Box>
      <Flex flexDir={['column','column','column','row']}>
        <Flex w={["100%","100%","100%","50%"]} p={"10px"} flexDir={'column'}>
          <Flex bgImg={"https://kientrucbiscons.vn/wp-content/uploads/2022/03/Untitled-2-1-min.jpg"} p={"20px"} sx={videoItem}
            minH={"470px"}>
            <Box sx={layout}/>
            <Flex pos={'absolute'} w={"90%"} color={'white'} flexDir={'column'}>
              <Box mb={"20px"} pr={"45%"} fontSize={"26px"} fontWeight={400} textTransform={"uppercase"}>
                <h3>VTV3 NÓI GÌ VỀ CÔNG TRÌNH CỦA BISCONS</h3>
              </Box>
              <Text fontSize={13} fontWeight={500}>08/02/2022</Text>
            </Flex>
          </Flex>
          <Center mt={"20px"}>
          <Link href={"/"}>
            <Button variant={"default"}>
              Xem Tất Cả Video
            </Button>
          </Link>
          </Center>
        </Flex>

        <Flex w={["100%","100%","100%","25%"]} p={"10px"} flexDir={['row','row','row','column']} gap={"20px"}>
          <Flex bgImage={"https://kientrucbiscons.vn/wp-content/uploads/2022/03/Untitled-3-1-min.jpg"} p={"10px"} h={"225px"} sx={videoItem}>
            <Box sx={layout}/>
            <Flex pos={'absolute'} w={"90%"} color={'white'} flexDir={'column'}>
              <Box mb={"5px"} fontSize={"14px"} fontWeight={400} textTransform={"uppercase"}>
                <h3>NGÔI NHÀ HẠNH PHÚC TRÀN NGẬP ÁNH SÁNG</h3>
              </Box>
              <Text fontSize={13} fontWeight={500}>05/01/2022</Text>
            </Flex>
          </Flex>
          <Flex bgImage={"https://kientrucbiscons.vn/wp-content/uploads/2022/03/2ed5de7bc9fb06a55fea-min.jpg"} p={"10px"} h={"225px"} sx={videoItem}>
            <Box sx={layout}/>
            <Flex pos={'absolute'} w={"90%"} color={'white'} flexDir={'column'}>
              <Box mb={"5px"} fontSize={"14px"} fontWeight={400} textTransform={"uppercase"}>
                <h3>QUY TRÌNH BẢO VỆ PHƯƠNG ÁN KTS BISCONS</h3>
              </Box>
              <Text fontSize={13} fontWeight={500}>22/11/2021</Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex w={["100%","100%","100%","25%"]} p={"10px"} flexDir={['row','row','row','column']} gap={"20px"}>
          <Flex bgImage={"https://kientrucbiscons.vn/wp-content/uploads/2022/03/Untitled-4-min.png"} p={"10px"} h={"225px"} sx={videoItem}>
            <Box sx={layout}/>
            <Flex pos={'absolute'} w={"90%"} color={'white'} flexDir={'column'}>
              <Box mb={"5px"} fontSize={"14px"} fontWeight={400} textTransform={"uppercase"}>
                <h3>CHIÊM NGƯỠNG BIỆT THỰ 150 M2 XANH MÁT</h3>
              </Box>
              <Text fontSize={13} fontWeight={500}>08/02/2022</Text>
            </Flex>
          </Flex>
          <Flex bgImage={"https://kientrucbiscons.vn/wp-content/uploads/2022/03/z3278472802409_f410b37bf727f2ff72ef376af885e540-min.jpg"} p={"10px"} h={"225px"} sx={videoItem}>
            <Box sx={layout}/>
            <Flex pos={'absolute'} w={"90%"} color={'white'} flexDir={'column'}>
              <Box mb={"5px"} fontSize={"14px"} fontWeight={400} textTransform={"uppercase"}>
                <h3>CÙNG KHUI HỘP HỒ SƠ THIẾT KẾ CỦA BISCONS: CHIẾC HỘP ĐỰNG GIẤY TRỊ GIÁ 190 TRIỆU!!</h3>
              </Box>
              <Text fontSize={13} fontWeight={500}>10/09/2021</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default VideoPreview

const videoItem = {
  borderRadius: "4px",
  w: "100%",
  bgSize: "cover",
  flexDir: 'column',
  justifyContent: "flex-end",
  pos: "relative",
}

const layout = {
  bgColor: "global.secondary",
  opacity: 0.2,
  pos: "absolute",
  h: "100%",
  w: "100%",
  top: 0,
  left: 0,
}