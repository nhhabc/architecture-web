"use client"
import { useOutsideHover } from '@/hook/useOutsideHandler'
import { Flex, Center, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [changeStyle, setChangeStyle] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }

      if (window.scrollY > 250 ) {
        setChangeStyle(true)
      }else{
        setChangeStyle(false)
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);



  return (
    <Flex w={"100%"} transition={"all .6s"} pos={'fixed'} bgColor={changeStyle ? "#0000004d" : "transparent"} bgGradient={"linear(to-b, #424242BA, #FFFFFF00)"}
      px={"40px"} zIndex={1000} backdropFilter={changeStyle ? "blur(15px)" : undefined} transform={show ? "translateY(0)" : "translateY(-100%)"}
      display={["none","none","none","flex"]}>
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
  const router = useRouter()
  
  const disableDropdown = () => {
    setIsDropdown(false)
  }

  useOutsideHover(navItemRef , disableDropdown)

  return (
    <Flex color={"rgba(255,255,255,1)"} px={"10px"} py={"5px"} fontSize={"14px"} fontWeight={600} textTransform={'uppercase'} pos={'relative'} ref={navItemRef}>
      <Text transition={".4s"} _hover={{transform: "scale(1.2)"}} cursor={data?.src ? 'pointer' : undefined}
      onClick={() => data?.src && router.push(data.src)}
      onMouseEnter={() => {
        setTimeout(() => {
          setIsDropdown(true)
        }, 300)
      }}>
        {data.value}
      </Text>
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

export const navItemsDummy = [
  {value: "Trang chủ", src: "/"},
  {value: "Giới thiệu", src: "/introduce", dropdown: [
    {value: 'Nền móng - con đường', src:"/introduce/road"},
    {value: 'Người Biscons', src:"/introduce/human"},
    {value: 'CEO Bùi Trường An - "Người đỡ đầu"',  src:"/introduce/sponsor"},
  ]},
  {value: "Dự án thiết kế", src: "/architecture-project", dropdown: [
    {value: 'Biệt thự hiện đại', src:"/architecture-project/model-villa"},
    {value: 'Nhà phố hiện đại', src:"/architecture-project/model-house"},
    {value: 'Văn phòng', src:"/architecture-project/office"},
    {value: 'CAFE - SPA - Nhà hàng - Khách sạn', src:"/architecture-project/cafe-spa-restaurant-hotel"},
  ]},
  {value: "Dự án thi công", src: "/construction-project", dropdown: [
    {value: 'Biệt thự', src:"/construction-project/villa" },
    {value: 'Nhà phố', src:"/construction-project/house" },
    {value: 'Văn phòng', src:"/construction-project/office"},
    {value: 'CAFE - SPA - Nhà hàng - Khách sạn', src:"/construction-project/cafe-spa-restaurant-hotel"},
  ]},
  {value: "Dịch vụ", dropdown: [
    {value: 'Dịch vụ thiết kế', src:"/service/design"},
    {value: 'Dịch vụ thi công', src:"/service/construction"},
    {value: 'Tư vấn giám sát', src:"/service/supervision"},
  ]},
  {value: "Tin tức", dropdown: [
    {value: 'Thông tin chung', src:"/news/general-information"},
    {value: 'Hoạt động nội bộ', src:"/news/internal-operations"},
    {value: 'Cẩm nang xây nhà', src:"/news/house-building"},
    {value: 'Tin tức nhà đẹp', src:"/news/beautiful-home-news"},
    {value: 'Tư vấn phong thủy', src:"/news/home-consultation"},
    {value: 'Video', src:"/news/videos"},
  ]},
  {value: "Tuyển dụng", src: "/recruitment"},
  {value: "Liên hệ", src: "/contact"},
]