import { Flex, Center, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <Flex w={"100%"} transition={"all .6s"} pos={'fixed'} bgColor={"transparent"} bgGradient={"linear(to-b, #424242BA, #FFFFFF00)"}
      px={"40px"} zIndex={1000}>
      <Flex minW={"70px"} alignItems={'center'} mx={'auto'} w={"100%"}>
        <Flex w={"15%"}>
          <Center p={"10px"} w={"100%"}>
            <Link href="https://kientrucbiscons.vn">
              <Image alt='logo' w={"150px"} h={"58px"} src={"https://kientrucbiscons.vn/wp-content/uploads/2022/02/logo-white.png"}/>
            </Link>
          </Center>
        </Flex>
        <Flex w={"85%"}>
          <Center p={"10px"} w={"100%"} justifyContent={"space-around"}>
              {navItemsDummy.map((item, i) => (
                <Flex key={i} color={"rgba(255,255,255,1)"} px={"10px"} py={"5px"} fontSize={"14px"} fontWeight={600} textTransform={'uppercase'} fontFamily={`"Montserrat",Sans-serif`} transition={".4s"} _hover={{transform: "scale(1.2)"}}>
                  <Link href={item.src}>
                      {item.value}
                  </Link>
                </Flex>
              ))}
          </Center>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Navbar

const navItemsDummy = [
  {value: "Trang chủ", src: "/"},
  {value: "Giới thiệu", src: "/", dropdown: [
    {value: 'Nền móng - con đường'},
    {value: 'Người Biscons'},
    {value: 'CEO Bùi Trường An - "Người đỡ đầu"'},
  ]},
  {value: "Dự án thiết kế", src: "/", dropdown: [
    {value: 'Biệt thự hiện đại'},
    {value: 'Người Biscons'},
    {value: 'CEO Bùi Trường An - "Người đỡ đầu"'},
  ]},
  {value: "Dự án thi công", src: "/"},
  {value: "Dịch vụ", src: "/"},
  {value: "Tin tức", src: "/"},
  {value: "Tuyển dụng", src: "/"},
  {value: "Liên hệ", src: "/"},
]