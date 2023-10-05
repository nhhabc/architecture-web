"use client"
import ArticleDetail from '@/components/detail-product/ArticleDetail'
import RelatedProject from '@/components/detail-product/RelatedProject'
import SliderDetail from '@/components/detail-product/SliderDetail'
import { Flex } from '@chakra-ui/react'
import React from 'react'

const ProductDetail = () => {
  return (
    <Flex flexDir={"column"}>
        <SliderDetail />
        <ArticleDetail />
        <RelatedProject />
    </Flex>
  )
}

export default ProductDetail