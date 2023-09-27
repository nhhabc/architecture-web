import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Center, Flex, Image, Text } from '@chakra-ui/react'
import menuIco from "../../public/images/menuIco.svg"
import React, { useRef, useState } from 'react'
import { useOutsideClick } from '@/hook/useOutsideHandler'
import { CloseIcon, PhoneIcon, TriangleDownIcon } from '@chakra-ui/icons'
import { navItemsDummy } from './Navbar'
import { useRouter } from 'next/navigation'

const ResponsiveMenu = () => {
  const [isShowMenu, setIsShowMenu] = useState(false)
  const menuRef = useRef(null)
  const router = useRouter()

  const disableShowMenu = () => {
    setIsShowMenu(false)
  }

  useOutsideClick(menuRef, disableShowMenu)

  const navigate = (link: string) => {
    router.push(link)
    disableShowMenu()
  }

  return (
    <>
      <Box bgColor={"#223B5FB8"} pos={"fixed"} px={"12px"} py={"10px"} top={"15px"} right={"15px"} zIndex={1000}
        display={["block","block","block","none"]}>
        <Image alt="menuIco" src={menuIco.src} boxSize={"25px"} zIndex={3} onClick={() => setIsShowMenu(true)}/>
      </Box>
      <Flex pos={"fixed"} right={0} top={0} zIndex={100000} transition={".3s"} ref={menuRef}
        p={"10px"} bgColor={"#FFF"} h={"100%"} flexDir={'column'} maxW={"767px"}
        transform={isShowMenu ? 'translateX(0)' : 'translateX(100%)'} overflow={"auto"}>
        <CloseIcon pos={'absolute'} right={"15px"} top={"15px"} onClick={() => setIsShowMenu(false)}/>
        <Flex p={"10px"} mb={"20px"} h={"fit-content"}>
          <Image alt={"logo-color"} src='https://kientrucbiscons.vn/wp-content/uploads/2022/02/logo-1.png' w={"70%"}
            onClick={() => router.push("/")}/>
        </Flex>
        <Flex p={"10px"} mb={"20px"}>
          <Accordion allowMultiple w={"100%"}>
            {navItemsDummy.map((item, i) => (
              <AccordionItem key={i} w={"100%"} borderTop={i === 0 ? "white" : undefined} borderBottom={i === navItemsDummy.length-1 ? "white" : undefined}>
                <AccordionButton padding={"12px 10px"} color={"global.primary"}>
                  <Flex alignItems={'center'} gap={"8px"}>
                    <Box fontSize={14} textTransform={'uppercase'} fontWeight={500} onClick={() => item.src ? navigate(item.src) : undefined}>{item.value}</Box>
                    {item.dropdown && <TriangleDownIcon fontSize={"10px"}/>}
                  </Flex>
                </AccordionButton>
                {item.dropdown && <AccordionPanel padding={0}>
                  {item.dropdown.map((dropdown, i) => (
                    <Box key={i} textTransform={'uppercase'} padding={"12px 10px"} color={"global.primary"}
                      fontSize={14} fontWeight={500} pl={"20px"} borderBottom={i !== item.dropdown.length-1 ? "1px solid #E2E8F0" : undefined}
                      cursor={'pointer'}
                      w={"270px"} onClick={() => dropdown.src ? navigate(dropdown.src) : undefined}>
                      <Text whiteSpace={"initial"}
                      style={{wordWrap: "break-word"}}>
                        {dropdown.value}
                      </Text>
                    </Box>
                  ))}
                </AccordionPanel>}
              </AccordionItem>
            ))}
          </Accordion>
        </Flex>
        <Flex alignItems={'center'} bgColor={"global.primary"} color={"white"} padding={"16px 28px"} gap={"15px"}>
          <PhoneIcon />
          <Text>084 746 6868</Text>
        </Flex>
      </Flex>
    </>
  )
}

export default ResponsiveMenu