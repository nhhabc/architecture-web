import { useOutsideHover } from '@/hook/useOutsideHandler'
import { Flex, Center, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useRef, useState } from 'react'

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
                <NavItem data={item} key={i}/>
              ))}
          </Center>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Navbar

const NavItem = ({data}: NavProps) => {
  const navItemRef = useRef(null)
  const [isDropdown, setIsDropdown] = useState(false);
  
  const disableDropdown = () => {
    setIsDropdown(false)
  }

  useOutsideHover(navItemRef , disableDropdown)


  return (
    <Flex color={"rgba(255,255,255,1)"} px={"10px"} py={"5px"} fontSize={"14px"} fontWeight={600} textTransform={'uppercase'} fontFamily={`"Montserrat",Sans-serif`} pos={'relative'} ref={navItemRef}>
      <Link href={data.src}>
        <Text transition={".4s"} _hover={{transform: "scale(1.2)"}} onMouseEnter={() => {
          setTimeout(() => {
            setIsDropdown(true)
          }, 300)
        }}>
          {data.value}
        </Text>
      </Link>
      {data?.dropdown && 
      <Flex pos={'absolute'} w={"fit-content"} top={"100%"} left={"-1px"} bgColor={"rgba(0,0,0,0.85)"} flexDir={'column'} whiteSpace={'nowrap'} display={isDropdown ? 'block' : "none"}>
        {data.dropdown.map((item: any, i: string) => (
          <Flex key={i} py={"10px"} px={"20px"} cursor={'pointer'} _hover={{bgColor: "#000000BA"}} transition={".3s"} fontWeight={400} fontSize={12}>
            {item.value}
          </Flex>
        ))}
      </Flex>}
    </Flex>
  )
}

type NavProps = {
  data: any
}

const navItemsDummy = [
  {value: "Trang chủ", src: "/"},
  {value: "Giới thiệu", src: "/", dropdown: [
    {value: 'Nền móng - con đường'},
    {value: 'Người Biscons'},
    {value: 'CEO Bùi Trường An - "Người đỡ đầu"'},
  ]},
  {value: "Dự án thiết kế", src: "/", dropdown: [
    {value: 'Biệt thự hiện đại'},
    {value: 'Nhà phố hiện đại'},
    {value: 'Văn phòng'},
    {value: 'CAFE - SPA - Nhà hàng - Khách sạn'},
  ]},
  {value: "Dự án thi công", src: "/", dropdown: [
    {value: 'Biệt thự'},
    {value: 'Nhà phố'},
    {value: 'Văn phòng'},
    {value: 'CAFE - SPA - Nhà hàng - Khách sạn'},
  ]},
  {value: "Dịch vụ", src: "/", dropdown: [
    {value: 'Dịch vụ thiết kế'},
    {value: 'Dịch vụ thi công'},
    {value: 'Tư vấn giám sát'},
  ]},
  {value: "Tin tức", src: "/", dropdown: [
    {value: 'Thông tin chung'},
    {value: 'Hoạt động nội bộ'},
    {value: 'Cẩm nang xây nhà'},
    {value: 'Tin tức nhà đẹp'},
    {value: 'Tư vấn phong thủy'},
    {value: 'Video'},
  ]},
  {value: "Tuyển dụng", src: "/"},
  {value: "Liên hệ", src: "/"},
]