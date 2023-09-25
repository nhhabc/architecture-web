"use client";
import Header1 from '@/constants/Header1';
import { Box, Center, Flex, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react'
import logo from "../../public/mini-logo.svg"

const Recruitment = () => {
  return (
    <Box bgColor={"#F4F4F4"}>
      <Header1 bgImg='https://kientrucbiscons.vn/wp-content/uploads/2022/02/pc-1-min-20211103082154-e1645985934118.jpg'
        title='TUYỂN DỤNG'/>
      <Center pt={"40px"} flexDir={'column'}>
        <Center gap={3}>
          <Image alt='mini-logo' src={logo.src} boxSize={"30px"}/>
          <Text fontSize={"24px"} fontWeight={800} color={'black'}>TUYỂN DỤNG</Text>
        </Center>
        <Box borderTop={"6px solid #223B5F"} w={"200px"} my={"15px"} mt={"20px"}/>
      </Center>
      <Grid px={"80px"} py={"40px"} columnGap={"25px"} rowGap={"30px"}>

      </Grid>
    </Box>
  )
}

export default Recruitment

const recruitmentList = [
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2023/06/z4453183998688_80c1bf736974eb5fe9b741534b15cffa-768x457.jpg",
    header: "TRƯỞNG NHÓM THIẾT KẾ – HCM",
    date: "21/06/2023",
    desc: "1. MÔ TẢ CÔNG VIỆC  Dẫn dắt nhóm thiết kế đạt được các tiêu chí về chất lượng, năng suất thiết kế mà Trưởng phòng đề ra, thông qua việc quản lý dự án  Tiếp nhận công việc từ Trưởng phòng, lên kế hoạch triển khai thiết kế tổng dự án và giao việc cho các thành viên của nhóm   Bao quát quá trình triển khai, đảm bảo các dự án được hoàn thành trong tiến độ cho phép về chất lượng mỹ thuật, kỹ thuật Đảm bảo và chịu trách nhiệm cho bản vẽ cuối cùng trước khi"
  },
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2023/06/z4453183998688_80c1bf736974eb5fe9b741534b15cffa-768x457.jpg",
    header: "TUYỂN DỤNG KIẾN TRÚC SƯ NỘI THẤT/ KIẾN TRÚC KHU VỰC HÀ NỘI/HCM",
    date: "15/06/2023",
    desc: "MÔ TẢ CÔNG VIỆC KTS NỘI THẤT Làm việc trực tiếp với trưởng nhóm thiết kế và nhận công việc theo sự phân công nhân sự trong team Sắp xếp kế hoạch công việc & phản hồi với Trưởng nhóm phụ trách trực tiếp Lên ý tưởng và triển khai dự án Trao đổi và gặp gỡ trực tiếp/hoặc gọi điện thoạt/meet online với khách hàng khai thác đề bài và trình duyệt phương án Báo cáo kết quả công việc, tiến trình dự án qua kênh quản lý hệ thống chung của công ty Điều tiết và phối hợp"
  },
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2023/06/z4436323492920_22ebaf95b9fd08e300872b6bde124409-768x457.jpg",
    header: "TUYỂN DỤNG TƯ VẤN GIÁM SÁT",
    date: "03/06/2023",
    desc: "MÔ TẢ CÔNG VIỆC CỤ THỂ VỊ TRÍ GIÁM SÁT HIỆN TRƯỜNG:  Nhiệm vụ cụ thể Kiểm tra, kiểm soát các công tác thi công trên công trình. Nghiệm thu khối lượng, chất lượng các hạng mục thi công. Đảm bảo tiến độ, chất lượng công trình. Huớng dẫn, đào tạo thầu phụ tuân thủ các quy định của công ty. Quản lý vật tư, vật liệu, nhân công tại công trình. Đầu tuần 10h sáng họp online báo cáo dự án Phối hợp các bộ phận liên quan xử lý các công việc phát sinh dưới công trình. Báo"
  },
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2023/05/z4436321679850_1ab4b32a88086c37e3594fa401c43e00-768x457.jpg",
    header: "TUYỂN DỤNG DIGITAL MARKETING",
    date: "05/05/2023",
    desc: "1.  Nhiệm vụ chính: Thực hiện các chiến dịch quảng cáo thu lead, quảng cáo tăng tương tác với khách hàng mục tiêu trên nền tảng Facebook, Instagram. Quản trị tài nguyên, tài khoản, fanpage hiệu quả. Phối hợp với các bộ phận để sản xuất nội dung, hoàn thành ấn phẩm truyền thông và Marketing trên các nền tảng online phụ trách. Theo dõi, phân tích thống kê số liệu, hiệu chỉnh và tối ưu các chiến dịch quảng cáo. Nghiên cứu các update mới của Facebook, Instagram, Youtube.… thường xuyên để đưa ra các phương pháp chạy ads"
  },
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2023/03/TUYEN-DUNG-MKT-1-768x432.jpg",
    header: "NHÂN VIÊN TRIỂN KHAI MARKETING – MARKETING EXECUTIVE",
    date: "03/03/2023",
    desc: "NHIỆM VỤ CHÍNH – Thực hiện các chiến dịch marketing cho từng đợt tháng/quý/năm và triển khai hoạt động truyền thông liên quan đến việc quảng bá thương hiệu, kinh doanh sản phẩm. – Quản lý chiến dịch quảng cáo đa kênh ( lên nội dung, phối hợp với nội dung Digital Marketing kiểm soát hiệu quả ) – Tổ chức và tham gia các hội thảo và sự kiện truyền thông khác. – Theo dõi và báo cáo kết quả của các hoạt động marketing, quảng cáo, truyền thông. – Quản lý nhà cung cấp dịch vu PR,marketing và"
  },
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2023/03/TUYEN-DUNG-THIET-KE-NOI-THAT-1-768x432.jpg",
    header: "TUYỂN DỤNG VỊ TRÍ NHÂN VIÊN THIẾT KẾ NỘI THẤT – VP SÀI GÒN",
    date: "02/03/2023",
    desc: "MÔ TẢ CÔNG VIỆC:  – Quản lý tiến độ và kiểm soát chất lượng các dự án thiết kế của nhóm. – Điều tiết và phối hợp với bộ phận báo giá để chốt thi công. – Trao đổi và gặp gỡ trực tiếp với  khách hàng. – Nhận nhiệm vụ thiết kế từ TP Thiết kế ; phân công nhân sự trong team, sắp xếp cho phù hợp với kế hoạch công việc. – Chỉ đạo khảo sát trực tiếp lên ý tưởng thực hiện trong 1 số dự án. – Chịu trách nhiệm trước BGĐ về hiệu quả"
  },
  {
    img: "	https://kientrucbiscons.vn/wp-content/uploads/2023/03/SALE-ADMIN-1-768x432.jpg",
    header: "TUYỂN DỤNG VỊ TRÍ NHÂN VIÊN TRỰC PAGE",
    date: "02/03/2023",
    desc: "NHIỆM VỤ CHÍNH – Trực Fanpage, website, trực điện thoại trả lời tin nhắn và tư vấn bán hàng. – Giải đáp thắc mắc và cung cấp sản phẩm của công ty tới khách hàng – Chăm sóc khách hàng cũ – Đảm bảo thực hiện các quy trình bán hàng. – Tương tác với khách hàng Online và Offline. – Quản trị dữ liệu khách hàng. – Báo cáo khách hàng hàng tuần/hàng tháng. YÊU CẦU CÔNG VIỆC – Tốt nghiệp đại học/cao đẳng các chuyên ngành quản trị kinh doanh, marketing, kinh tế… – Không yêu cầu kinh"
  },
  {
    img: "	https://kientrucbiscons.vn/wp-content/uploads/2023/03/SALE-1-768x432.jpg",
    header: "TUYỂN DỤNG VỊ TRÍ NHÂN VIÊN KINH DOANH – HÀ NỘI/ SÀI GÒN",
    date: "02/03/2023",
    desc: "MÔ TẢ CÔNG VIỆC: Tìm kiếm khách hàng thông qua networking, xây dựng thương hiệu cá nhân, hội nhóm Tiếp nhận contact từ bộ phận marketing, tư vấn và thuyết phục khách hàng sử dụng dịch vụ và sản phẩm công ty. Chăm sóc khách hàng trong và sau quá trình bàn giao sản phẩm. Tham gia vào các hoạt động hỗ trợ truyền thông YÊU CẦU ỨNG VIÊN: Kỹ năng giao tiếp, đàm phán, thuyết phục, nắm bắt tâm lý nhu cầu của khách hàng tốt Tinh thần cầu tiến, trách nhiệm cao, nhiệt tình, năng nổ trong công"
  },

]