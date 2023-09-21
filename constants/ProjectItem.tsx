import { fontBankGothic } from '@/app/fonts'
import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

type ProjectPropsType = {
  name: string,
  type: string,
  location: string,
  img: string
}

const ProjectItem = (props: ProjectPropsType) => {
  return (
        <Flex m={"12.5px"} borderRadius={"6px"} pos={'relative'} minH={"300px"} cursor={'pointer'}>
          <Image alt={props.name} src={props.img} borderRadius={"6px"}/>
          <Flex pos={"absolute"} bottom={0} left={0} p={"20px"} color={"white"} zIndex={1} flexDir={'column'}>
            <Text mb={"5px"} fontSize={"24px"} fontWeight={500} fontFamily={fontBankGothic.style.fontFamily}>{props.name}</Text>
            <Flex fontSize={"13px"} fontWeight={400} textTransform={'uppercase'} gap={2} flexWrap={"wrap"} justifyContent={'flex-start'}>
              <Text>{props.type}</Text>
              <span>|</span>
              <Text>{props.location}</Text>
            </Flex>
          </Flex>
        </Flex>  
  )
}

export default ProjectItem