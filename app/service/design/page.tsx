"use client";
import Header2 from '@/constants/Header2'
import HeadTitle from '@/constants/service-page/HeadTitle';
import { Box, Flex, Image, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react'
import Slider from 'react-slick';

const Design = () => {
  return (
    <>
      <Header2 bgImg='https://kientrucbiscons.vn/wp-content/uploads/2022/03/pc-1-min-20211103082154-min.jpg'
        title='Quy trình thiết kế'/>
      <Box h={"30px"}/>
      <HeadTitle title='CÁC SẢN PHẨM BÀN GIAO'/>
      <Flex className={"layout"}>
        <UnorderedList mb={"20px"}>
          <ListItem>BẢN HỒ SƠ THIẾT KẾ CƠ SỞ</ListItem>
          <ListItem>HỒ SƠ THIẾT KẾ KỸ THUẬT THI CÔNG XÂY DỰNG</ListItem>
          <ListItem>HỒ SƠ THIẾT KẾ KỸ THUẬT THI CÔNG NỘI THẤT</ListItem>
          <ListItem>ẤN PHẨM NOTEBOOK DỰ ÁN, GỒM CÁC HÌNH ẢNH 3D, VÀ DIỄN GIẢI Ý TƯỞNG THIẾT KẾ</ListItem>
        </UnorderedList>
        <Flex gap={2} mb={"30px"}>
          <strong>Tham khảo:</strong>
          <Link href='https://kientrucbiscons.vn/mot-hop-ho-so-biscons-ban-giao-cho-khach-hang-gom-nhung-gi/'
            color={"#0170B9"} fontWeight={700} _hover={{color: "#4B4F58"}}>
            Một hộp hồ sơ Biscons bàn giao cho khách hàng có gì?
          </Link>
        </Flex>
      </Flex>
      <HeadTitle title='CÁC BƯỚC THỰC HIỆN'/>
      <Box p={"10px"}>
        <Image alt='step' src='https://kientrucbiscons.vn/wp-content/uploads/2023/03/Artboard-1.jpg'/>
      </Box>
      <Box maxW={"1250px"} mx={'auto'} mb={"30px"}>
        <Box p={"10px"}>
          <Slider infinite={true} slidesToShow={3} dots={true} swipeToSlide={true}>
            {sliderImg.map((img, i) => (
              <Image key={i} alt={`${i}`} src={img.src} />
            ))}
          </Slider>
        </Box>
      </Box>
      <HeadTitle title='THẾ MẠNH CỦA BISCONS'/>
      <Flex className={"layout"}>
        <UnorderedList mb={"20px"} fontSize={15}>
          <ListItem><strong>Các công đoạn thiết kế của Biscons được chia nhỏ và thực hiện tỉ mỉ</strong> trong từng bước, để đảm bả một bản thiết kế có chiều sâu và có tính chính xác cao</ListItem>
          <ListItem><strong>Ngay từ bước tiếp cận dự án, và khai thác đề bài, quy trình của chúng tôi đã tạo ra sự khác biệt</strong>, phản ánh tư duy làm nghề: khâu khai thác thông tin được làm rất kỹ từ yêu cầu công năng chi tiết, nếp sống, nếp sinh hoạt của gia chủ, bối cảnh văn hoá và bối cảnh địa lý môi trường của dự án. Việc khai thác một đề bài chi tiết và có chiều sâu giúp cho thiết kế đưa ra bám sát theo câu chuyện của mỗi gia đình, mỗi bối cảnh riêng, và đảm bảo tính duy nhất – khó trùng lặp của mỗi công trình</ListItem>
        </UnorderedList>
        <Image alt="form" src='https://kientrucbiscons.vn/wp-content/uploads/2022/09/Screen-Shot-2022-09-07-at-11.17.20-AM.png'
          w={"555px"} alignSelf={'center'}/>
        <Text fontStyle={'italic'} alignSelf={'center'} my={"10px"}>Một phần trong bản dữ liệu đề bài thiết kế trong một dự án của Biscons</Text>
        <UnorderedList my={"30px"} fontSize={15}>
          <ListItem><strong>Khâu tương tác và trình bày ý tưởng với chủ đầu tư được diễn ra trực quan, dễ hiểu</strong>. Thường qua các cuộc họp online hoặc họp trực tiếp tại văn phòng Biscons, chúng tôi sẽ show các bản thiết kế từ trong ra ngoài công trình trên màn hình máy tính, chủ đầu tư có thể dễ dàng hình dung từng ngóc ngách của dự án. Khách hàng cũng có thể xem file thiết kế 3D của dự án, xoay, zoom và xem dữ liệu kích thước trên điện thoại thông qua công nghệ A360</ListItem>
        </UnorderedList>
      </Flex>
      <Flex maxW={"1250px"} mx={"auto"} p={"10px"} flexDir={"row"}>
        <Box w={"50%"} p={"10px"}>
          <Image alt='asd' src='https://kientrucbiscons.vn/wp-content/uploads/2022/09/275863018_1194147758004226_3871421806848809308_n.jpeg'/>
        </Box>
        <Box w={"50%"} p={"10px"} fontSize={15}>
          <Box mt={"110px"}>
            <UnorderedList mb={"20px"}>
              <ListItem><strong>Ý tưởng thiết kế cần được qua sự phản biện và phê duyệt nghiêm ngặt</strong> từ phía hội đồng thiết kế. Quá trình lên concept cho dự án, các kiến trúc sư thực hiện ngoài việc bảo vệ ý tưởng trước chủ trì dự án, thì cần trình bày trước hội đồng thiết kế, gồm các chủ trì khác cùng trưởng phòng thiết kế, để chọn ra phương án tốt nhất, và đảm bảo được các tính toán đưa ra là tối ưu nhất, trước khi trình bày phương án thiết kế với chủ đầu tư.
              </ListItem>
            </UnorderedList>
            <Text>Các ý tưởng cần trình bày rõ các yếu tố về công năng, thẩm mỹ, thông gió chiếu sáng, phong thuỷ, và mức độ hiệu quả về kinh tế</Text>
          </Box>
        </Box>
      </Flex>
      <Flex className={"layout"} fontSize={15}>
        <UnorderedList mb={"40px"}>
          <ListItem><strong>Sự đồng bộ và check kiểm hồ sơ kỹ thuật chặt chẽ:</strong> Việc sai sót, thiếu đồng bộ trong bản vẽ kỹ thuật là một vấn đề nhức nhối trong ngành xây dựng, nội thất từ các công ty xây dựng nhà ở đến các tập đoàn xây dựng lớn. Bản thân Biscons qua nhiều năm phát triển, cũng đã chịu nhiều “trái đắng” đến từ vấn đề này, và phải trả giá bằng tiền của, thời gian trên công trường, chưa nói đến cái giá đắt nhất đó là sự uy tín của một đơn vị tư vấn thiết kế. Bởi vậy, quy trình kiểm duyệt hồ sơ của Biscons cực kỳ chặt chẽ và cẩn thận, qua 3 lớp check kiểm, đảm bảo loại trừ tối đa các sai sót dù là nhỏ nhất trong hệ thống bản vẽ kỹ thuật
          </ListItem>
        </UnorderedList>
        <Box>
          <Image alt='asdqwe' src='https://kientrucbiscons.vn/wp-content/uploads/2022/09/Screen-Shot-2022-09-07-at-11.19.52-AM.png'/>
        </Box>
        <Text fontStyle={"italic"} my={"10px"} textAlign={'center'}>Timeline triển khai một dự án của Biscons, có thể thấy quy trình check kiểm chất lượng được đan xen trong từng bước với tần suất dày đặc</Text>
      </Flex>
      <HeadTitle title='BẢNG GIÁ DỊCH VỤ THIẾT KẾ BISCONS'/>
      <Flex className={"layout"}>
        <Image alt="qweqwe" src='https://kientrucbiscons.vn/wp-content/uploads/2023/02/bao-gia-2@150x-100-2048x1205.jpg' mt={"30px"}/>
      </Flex>
    </>
  )
}

export default Design

const sliderImg = [
  {src: "https://kientrucbiscons.vn/wp-content/uploads/2023/03/Artboard-4-1.jpg"},
  {src: "https://kientrucbiscons.vn/wp-content/uploads/2023/03/Artboard-5-1.jpg"},
  {src: "https://kientrucbiscons.vn/wp-content/uploads/2023/03/Artboard-6-1.jpg"},
  {src: "https://kientrucbiscons.vn/wp-content/uploads/2023/03/Artboard-7-1.jpg"},
  {src: "https://kientrucbiscons.vn/wp-content/uploads/2023/03/Artboard-8-1.jpg"},
  {src: "https://kientrucbiscons.vn/wp-content/uploads/2023/03/Artboard-9-1.jpg"},
  {src: "https://kientrucbiscons.vn/wp-content/uploads/2023/03/Artboard-10-1.jpg"},
]