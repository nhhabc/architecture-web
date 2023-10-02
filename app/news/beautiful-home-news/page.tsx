"use client"
import Header1 from '@/constants/Header1'
import { Flex } from '@chakra-ui/react'
import React from 'react'

const BeautifulHome = () => {
  return (
    <Flex flexDir={"column"}>
      <Header1 bgImg="https://kientrucbiscons.vn/wp-content/uploads/2022/03/pc-1-min-20211103082154-min.jpg" title="Tin tức nhà đẹp"/>
    </Flex>
  )
}

export default BeautifulHome