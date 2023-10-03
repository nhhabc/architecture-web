 
import Header1 from "@/constants/Header1";
import { Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import infomation_logo from "../../../public/images/infomation_logo.png";
import NewsItem from "@/constants/NewsItem";
import operation1 from "../../../public/images/operation1.jpg"
import operation2 from "../../../public/images/operation2.jpg"
import operation3 from "../../../public/images/operation3.jpg"
import operation4 from "../../../public/images/operation4.jpg"
import operation5 from "../../../public/images/operation5.jpg"
import operation6 from "../../../public/images/operation6.jpg"

const InternalOperations = () => {
  return (
    <Flex flexDir={"column"}>
      <Header1
        bgImg="https://kientrucbiscons.vn/wp-content/uploads/2022/02/pc-1-min-20211103082154-e1645985934118.jpg"
        title="Hoạt động nội bộ"
      />
      <Flex padding={["40px 10px","40px 10px","40px 10px","40px 80px"]} justifyContent={"center"} flexDir={"column"}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Flex
            w={"32px"}
            h={"30px"}
            bgColor={"#1A395B"}
            borderRadius={5}
            justifyContent={"center"}
            alignItems={"center"}
            mr={2}
          >
            <Image w={"22px"} h={"20px"} src={infomation_logo.src} alt="gift" />
          </Flex>
          <Text
            color={"#000"}
            fontWeight={800}
            fontSize={"24px"}
            textTransform={"uppercase"}
            borderBottom={"5px solid #223b5f"}
            pb={3}
          >
            Hoạt Động Nội Bộ
          </Text>
        </Flex>

        <Grid px={["10px","10px","10px","80px"]} py={"40px"} columnGap={"25px"} rowGap={"30px"} templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']}>
        {operationsDummy.map((item,i) => (
          <NewsItem key={i} date={item.date} 
            desc={item.desc}
            header={item.header}
            img={item.img}
            href='/posts'/>
        ))}
      </Grid>


      </Flex>
    </Flex>
  );
};

export default InternalOperations;

const operationsDummy = [
  {
    img: operation1.src,
    header: "CỘT MỐC 5 NĂM BISCONS",
    date: "10/11/2022",
    desc: "5 năm là quãng thời gian đủ dài để chứng minh cho sự phát triển một cách chắc chắn và bền vững cho một doanh nghiệp. Chúng ta đã đi qua những sóng gió ngày đầu của quá trình khởi nghiệp, đã từng bước vươn mình để khẳng định tên tuổi trên thị trường. Từ những"
  },
  {
    img: operation2.src,
    header: "SINH NHẬT BISCONS 3 NĂM TUỔI TẠI QUY NHƠN",
    date: "01/10/2022",
    desc: "3 năm – 1 chặng đường không phải quá dài nhưng với Biscons, đó là một cuộc hành trình với nhiều trăn trở, nỗ lực và đam mê của tất cả thành viên để theo đuổi sứ mệnh đem đến các công trình tối ưu và mang lại trải nghiệm tốt nhất cho khách hàng với tâm niệm:"
  },
  {
    img: operation3.src,
    header: "BISCONS – 4 NĂM MỘT HÀNH TRÌNH",
    date: "10/11/2022",
    desc: "Chặng đường 4 năm vừa qua, điều làm nên một Biscons luôn luôn tiến lên không ngừng chính là đội ngũ nhân sự nhiệt huyết, năng động, luôn sống và làm việc một cách đầy đam mê. Để kỷ niệm cho ngày trọng đại của tập thể BISCONS, ban lãnh đạo đã tổ chức"
  },
  {
    img: operation4.src,
    header: "MỘT HỘP HỒ SƠ BISCONS BÀN GIAO CHO KHÁCH HÀNG GỒM NHỮNG GÌ?",
    date: "23/09/2022",
    desc: "Trước khi bàn giao hồ sơ cho khách hàng thì đội ngũ BISCONS đã phải trải qua rất nhiều giai đoạn gian nan. Khi khách hàng đã cầm trên tay hộp hồ sơ dự án thì đó phải là sản phẩm hoàn hảo nhất, chất lượng nhất. Cùng BISCONS khám phá xem một hộp hồ sơ khi bàn"
  },
  {
    img: operation5.src,
    header: "BỘ TIÊU CHUẨN CHẤT LƯỢNG THI CÔNG – ĐIỀU LÀM NÊN SỰ KHÁC BIỆT CỦA CÁC CÔNG TRÌNH BISCONS",
    date: "4/09/2022",
    desc: "Đối với mỗi công trình xây dựng, ngoài nhu cầu về mặt thẩm mỹ, độ chính xác, chi tiết hay tính an toàn cũng là các yếu tố đóng vai trò quan trọng. Thấy rõ được điều đó, BISCONS đã xây dựng nên bộ tiêu chuẩn chất lượng thi công, không chỉ đáp ứng đầy đủ các yêu cầu"
  },
  {
    img: operation6.src,
    header: "TRẢI NGHIỆM KHÁCH HÀNG TẠI BISCONS: CHÚNG TÔI XÂY DỰNG HÀNH TRÌNH CỦA SỰ HẠNH PHÚC",
    date: "14/09/2022",
    desc: "Một trong những tiêu chuẩn kinh doanh được các doanh nghiệp chú trọng nhất hiện nay đó là trải nghiệm khách hàng – Customer Experience. Bỏ qua chất lượng và giá cả sản phẩm, trải nghiệm khách hàng là điểm nhấn tạo nên sự khác biệt của thương hiệu. Nắm bắt"
  },
]

