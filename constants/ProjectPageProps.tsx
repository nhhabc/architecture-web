import { productListDummy } from '@/components/home/ProductPreview'
import Header1 from '@/components/project/Header1'
import { Box, Center, Grid } from '@chakra-ui/react'
import React from 'react'
import ProjectItem from './ProjectItem'
import Pagination from './pagination/Pagination'

type ProjectPagePropsType = {
  headerImg: string,
  title: string,
  project: any[],
  currentPage: number,
  onPageChange?: (page: number) => void
  totalCount: number
}

const ProjectPageProps = (props: ProjectPagePropsType) => {

  return (
    <>
      <Header1 bgImg={props.headerImg} title={props.title}/>
      <Box pt={"80px"} px={"80px"} pb={"40px"} >
        <Grid alignContent={'flex-start'} 
          templateColumns='repeat(3, 1fr)' mb={"20px"}>
          {props?.project && props.project.map((product, i) => (
            <ProjectItem key={i} img={product.img}
            location={product.location}
            name={product.name}
            type={product.type}/>
            ))}
        </Grid>
        <Center mb={"20px"}>
          <Box mt={"40px"} w={"20%"} border={"2px solid #223B5F"}/>
        </Center>
        <Center mb={"40px"}>
          <Pagination currentPage={props.currentPage}
            onPageChange={() => props.onPageChange}
            pageSize={9}
            totalCount={props.totalCount}/>
        </Center>
      </Box>
    </>
  )
}

export default ProjectPageProps