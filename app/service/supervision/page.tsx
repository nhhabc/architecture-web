"use client";
import Header2 from '@/constants/Header2'
import HeadTitle from '@/constants/service-page/HeadTitle';
import { Box, Flex, Image, List, ListIcon, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react'

const Supervision = () => {
  return (
    <>
      <Header2 bgImg='https://kientrucbiscons.vn/wp-content/uploads/2022/03/pc-1-min-20211103082154-min.jpg'
        title='TƯ VẤN GIÁM SÁT'/>
      <Box className='layout' mb={"30px"}>
        <Image alt='img' src='https://kientrucbiscons.vn/wp-content/uploads/2023/03/z4146302646554_a2b216473dd6e32478ee075a1c42689b.jpg'/>
      </Box>
      <HeadTitle title='QUY TRÌNH THỰC HIỆN'/>
      <Flex className='layout' mb={"20px"}>
        <UnorderedList fontWeight={700} color={'black'} fontSize={18}>
          <ListItem>Bước 1: Tiếp nhận dữ liệu đầu vào. bao gồm: Bản vẽ thiết kế, thông tin địa điểm dự án:</ListItem>
          <ListItem>Bước 2: Tiến hành báo giá. Bảng báo giá gồm:</ListItem>
          <List fontWeight={400}>
            <ListItem>– Đơn giá và tổng giá trị gói tư vấn giám sát</ListItem>
            <ListItem>– Các công tác có trong hợp đồng</ListItem>
          </List>
          <ListItem>Bước 3: Kí kết hợp đồng và tạm ứng đợt 1</ListItem>
          <ListItem>Bước 4: Thực hiện các công tác giám sát theo khối lượng quy định:</ListItem>
            <List fontWeight={400}>
              <ListItem>– Giám sát chất lượng thi công</ListItem>
              <ListItem>– Giám sát chất lượng vật tư</ListItem>
              <ListItem>– Giám sát việc thi công theo chuẩn bản vẽ thiết kế</ListItem>
              <ListItem>– Hướng dẫn biện pháp thi công trong các tình huống nhà thầu thiếu năng lực và kiến thức cho hạng mục đó.</ListItem>
              <ListItem>– Thay chủ đầu tư kí biên bản nghiệm thu từng giai đoạn</ListItem>
            </List>
        </UnorderedList>
      </Flex>
      <HeadTitle title='KHỐI LƯỢNG CÔNG VIỆC'/>
      <Flex className='layout'>
        <table id='default-table'>
          <thead>
            <tr>
              <th>CÔNG VIỆC</th>
              <th>GÓI GIÁM SÁT KHÔNG THƯỜNG TRỰC</th>
              <th>GÓI GIÁM SÁT THƯỜNG TRỰC</th>
            </tr>
          </thead>
          <tbody>  
            {tdItem.map((item, i) => (
              <tr key={i}>
              <td>{item.title1}</td>
              <td>{item.title2}</td>
              <td>{item.title3}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </Flex>
      <HeadTitle title='VÌ SAO CẦN SỬ DỤNG GÓI DỊCH VỤ TƯ VẤN GIÁM SÁT'/>
      <Flex className='layout'>
        <UnorderedList fontSize={"18px"}>
          <ListItem>
            <strong>Đảm bảo tính khách quan và minh bạch trong quá trình thi công: </strong>
            Thay chủ đầu tư kiểm tra và giám sát các vấn đề liên quan đến kỹ thuật, đánh giá chất lượng một cách khách quan.
          </ListItem>
          <ListItem>
            <strong>Kiểm tra năng lực và kiến thức của nhà thầu để thi công các thiết kế khó. </strong>
            Các thiết kế của Biscons thường là các công trình ít trùng lặp trên thị trường, áp dụng các chi tiết cấu tạo phức tạp, các vật liệu và công nghệ mới. Vì vậy các kỹ sư giám sát của Biscons sẽ thay Chủ đầu tư kiểm tra năng lực nhà thầu hoặc hướng dẫn nhà thầu trong quá trình thi công.
          </ListItem>
          <ListItem>
            <strong>Hạn chế các chi phí rủi ro không đáng có, </strong>
            đến từ việc thất thoát vật tư, sai sót phải đập đi làm lại, hoặc sử dụng trà trộn các vật tư kém chất lượng.
          </ListItem>
          <ListItem>
            <strong>Đảm bảo tiến độ: </strong>
            Việc giảm thiểu các sai xót không đáng có cũng như có sự kiểm soát thường xuyên sẽ hạn chế tối đa các rủi ro chậm tiến độ.
          </ListItem>
          <ListItem>
            <strong>Đơn vị thiết kế luôn là những người hiểu rõ bản vẽ thiết kế nhất, </strong>
            chính vì vậy chúng tôi có thể đưa ra những tư vấn cũng như kiểm soát chất lượng phù hợp nhất với công trình.
          </ListItem>
        </UnorderedList>
      </Flex>
    </>
  )
}

export default Supervision

const tdItem = [
  {
    title1: "",
    title2: "Từ 15.000.000 - 20.000.000 VNĐ/tháng (tùy quy mô và mức độ đầu tư công trình)",
    title3: "Từ 35.000.000 - 40.000.000 VNĐ/tháng (tùy quy mô và mức độ đầu tư công trình)"
  },
  {
    title1: "Thời lượng giám sát",
    title2: "Tần suất: 3 lần/tuần. Thời lượng: Mỗi buổi 3-4h tuỳ theo giai đoạn thi công.",
    title3: "Tần suất: Có mặt thường trực trên công trường (trừ ngày nghỉ có xin phép và những ngày không thi công). Thời lượng: Mỗi buổi 8h."
  },
  {
    title1: "Kiểm tra năng lực nhà thầu",
    title2: "Không chịu trách nhiệm kiểm tra.",
    title3: "Kiểm tra nhà thầu gồm các hạng mục: Nhân lực. Số lượng thiết bị. Chất lượng thiết bị. Năng lực nhà thầu: Kiểm tra chất lượng ở các công trình đã làm trước đó của nhà thầu."
  },
  {
    title1: "Kiểm tra vật tư",
    title2: "Kiểm tra chất lượng vật tư: đảm bảo nguồn gốc xuất xứ, tham gia vào quá trình thí nghiệm vật liệu đảm bảo tính chính xác so với hợp đồng.",
    title3: "Kiểm tra chất lượng vật tư: đảm bảo nguồn gốc xuất xứ, tham gia vào quá trình thí nghiệm vật liệu đảm bảo tính chính xác so với hợp đồng. Kiểm tra khối lượng vật tư: trong trường hợp CĐT tự mua vật tư."
  },
  {
    title1: "Chất lượng thi công",
    title2: "Kiểm tra chất lượng công tác thi công đảm bảo tính thẩm mỹ và tính an toàn | Kiểm tra tính chính xác của quá trình thi công so với bản vẽ thiết kế",
    title3: "Kiểm tra chất lượng công tác thi công đảm bảo tính thẩm mỹ và tính an toàn. Kiểm tra tính chính xác của quá trình thi công so với bản vẽ thiết kế. Kiểm tra biện pháp thi công cho nhà thầu, đảm bảo tính khả thi và tính an toàn về kết cấu, con người."
  },
  {
    title1: "An toàn lao động",
    title2: "Không chịu trách nhiệm kiểm tra.",
    title3: "Phê duyệt biện pháp thi công của nhà thầu để đảm bảo an toàn cho con người, tài sản trên công trình. phòng chống cháy nổ."
  },
  {
    title1: "Báo cáo công trình gửi chủ đầu tư",
    title2: "Báo cáo tuần: báo cáo về tình hình triển khai dự án, các vấn đề tồn đọng và tư vấn chủ đầu tư về giải pháp xử lý. Báo cáo tiến độ: Vào ngày đến công trình.",
    title3: "Nhật ký thi công: chụp ảnh báo cáo khối lượng công việc, chất lượng công việc và số lượng nhân công hàng ngày. Báo cáo tuần: báo cáo về tình hình triển khai dự án, các vấn đề tồn đọng và tư vấn chủ đầu tư về giải pháp xử lý."
  },
  {
    title1: "Nghiệm thu",
    title2: "Nghiệm thu chất lượng: theo các giai đoạn trong hợp đồng với từng nhà thầu.",
    title3: "Nghiệm thu khối lượng và chất lượng: theo các giai đoạn trong hợp đồng với từng nhà thầu."
  },
]