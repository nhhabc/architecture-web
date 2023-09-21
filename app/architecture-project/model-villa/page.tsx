"use client";
import { productListDummy } from '@/components/home/ProductPreview'
import ProjectPageProps from '@/constants/ProjectPageProps';
import React from 'react'

const ModelVilla = () => {
  return (
    <>
      <ProjectPageProps
        currentPage={1}
        headerImg='https://kientrucbiscons.vn/wp-content/uploads/2022/02/pc-1-min-20211103082154-e1645985934118.jpg'
        title='Biệt thự hiện đại'
        project={productListDummy}
        totalCount={99}
        onPageChange={() => null}/>
    </>
  )
}

export default ModelVilla