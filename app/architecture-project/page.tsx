"use client";

import { productListDummy } from "@/components/home/ProductPreview";
import Header1 from "@/components/project/Header1";
import CategoryItem from "@/constants/CategoryItem";
import ProjectItem from "@/constants/ProjectItem";
import Pagination from "@/constants/pagination/Pagination";
import { Box, Center, Flex, Grid } from "@chakra-ui/react";

export default function Architecture () {
  return <>
    <Header1 bgImg="https://kientrucbiscons.vn/wp-content/uploads/2022/03/pc-1-min-20211103082154-min.jpg" title="Dự án kiến trúc"/>
    <Flex minH={"85vh"} mt={"40px"}>
      {cateDummy.map((cate, i) => (
        <CategoryItem key={i} bgImage={cate.bgImg} description={cate.description} heading={cate.heading}/>
      ))}
    </Flex>
    <Box pt={"80px"} px={"80px"} pb={"40px"} >
    <Grid alignContent={'flex-start'} 
      templateColumns='repeat(3, 1fr)' mb={"20px"}>
      {productListDummy.map((product, i) => (
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
      <Pagination currentPage={1}
        onPageChange={() => null}
        pageSize={9}
        totalCount={99}/>
    </Center>
    </Box>
  </>
}

const cateDummy = [
  {
    bgImg: "https://kientrucbiscons.vn/wp-content/uploads/2022/02/xxxx-20211230103734-2.jpg",
    heading: "Villa nghỉ dưỡng",
    description: "Với kiến thức chuyên môn cao cùng trải nghiệm phong phú, Biscons sẽ biến ngôi nhà của bạn thành Villa nghỉ dưỡng thực thụ!",
  },
  {
    bgImg: "https://kientrucbiscons.vn/wp-content/uploads/2022/02/d5d4e50a4ea5b8fbe1b4-20211231092738-1.jpg",
    heading: "Biệt thự hiện đại",
    description: "Giải pháp thiết kế tối ưu, đề cao tính cá nhân hóa, Biscons sẽ mang đến cho bạn một công trình đẳng cấp, mang đậm cá tính gia chủ.",
  },
  {
    bgImg: "https://kientrucbiscons.vn/wp-content/uploads/2022/02/55cb30739bdc6d8234cd-20211231092925-1.jpg",
    heading: "Biệt thự sân vườn",
    description: "Biệt thự sân vườn đang trở thành loại hình nhà ở biệt thự được yêu thích nhất thì hiện nay. Biscons đã đảm nhận vô số công trình biệt thự kiểu nhà vườn cao cấp, đáp ứng trọn vẹn những yêu cầu khắt khe mà khách hàng đặt ra.",
  },
]