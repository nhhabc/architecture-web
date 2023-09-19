import { useOutsideHover } from '@/hook/useOutsideHandler'
import { Flex, Center, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
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
  // const router = useRouter()
  
  const disableDropdown = () => {
    setIsDropdown(false)
  }

  useOutsideHover(navItemRef , disableDropdown)

  console.log(navItemsDummy);
  


  return (
    <Flex color={"rgba(255,255,255,1)"} px={"10px"} py={"5px"} fontSize={"14px"} fontWeight={600} textTransform={'uppercase'} pos={'relative'} ref={navItemRef}>
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
          <Link key={i} href={item.src}>
          <Flex key={i} py={"10px"} px={"20px"} cursor={'pointer'} _hover={{bgColor: "#000000BA"}} transition={".3s"} fontWeight={400} fontSize={12}>
            {item.value}
          </Flex>
          </Link>
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
  {value: "Giới thiệu", src: "/introduce", dropdown: [
    {value: 'Nền móng - con đường', src:"/introduce/road"},
    {value: 'Người Biscons', src:"/introduce/human"},
    {value: 'CEO Bùi Trường An - "Người đỡ đầu"',  src:"/introduce/sponsor"},
  ]},
  {value: "Dự án thiết kế", src: "/", dropdown: [
    {value: 'Biệt thự hiện đại', src:"/"},
    {value: 'Nhà phố hiện đại', src:"/"},
    {value: 'Văn phòng', src:"/"},
    {value: 'CAFE - SPA - Nhà hàng - Khách sạn', src:"/"},
  ]},
  {value: "Dự án thi công", src: "/", dropdown: [
    {value: 'Biệt thự', src:"/" },
    {value: 'Văn phòng', src:"/"},
    {value: 'CAFE - SPA - Nhà hàng - Khách sạn', src:"/"},
  ]},
  {value: "Dịch vụ", src: "/", dropdown: [
    {value: 'Dịch vụ thiết kế', src:"/"},
    {value: 'Dịch vụ thi công', src:"/"},
    {value: 'Tư vấn giám sát', src:"/"},
  ]},
  {value: "Tin tức", src: "/", dropdown: [
    {value: 'Thông tin chung', src:"/"},
    {value: 'Hoạt động nội bộ', src:"/"},
    {value: 'Cẩm nang xây nhà', src:"/"},
    {value: 'Tin tức nhà đẹp', src:"/"},
    {value: 'Tư vấn phong thủy', src:"/"},
    {value: 'Video', src:"/"},
  ]},
  {value: "Tuyển dụng", src: "/"},
  {value: "Liên hệ", src: "/"},
]