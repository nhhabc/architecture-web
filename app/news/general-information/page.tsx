"use client";
import HeaderIntroduce from "@/components/Introduce/HeaderIntroduce";
import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";


const GeneralInfomation = () => {
  return (
    <Flex flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
      <HeaderIntroduce value={"Thông tin chung"} />
      <Flex maxW={["100%", "100%", "100%", "1250px"]} flexDir={"column"}>
        {dataDummy.map((item, i) => (
          <Flex key={i} flexDir={"column"}>
            <Flex justifyContent={"center"} mt={5} mb={5}>
              <Flex
                w={"32px"}
                h={"30px"}
                bgColor={"#1A395B"}
                borderRadius={5}
                justifyContent={"center"}
                alignItems={"center"}
                mr={2}
              >
                <Image w={"22px"} h={"20px"} src={item.logo} alt="gift" />
              </Flex>
              <Text
                textTransform={"uppercase"}
                fontSize={"24px"}
                fontWeight={800}
                color={"global.primary"}
              >
                {item.title}
              </Text>
            </Flex>
            {item?.content?.map((items, i) => (
              <Flex key={i} mb={5} bg={"#fff"} p={"10px 20px"} borderRadius={10} cursor={"pointer"}>
                <Flex w={"25%"} h={"233px"} justifyContent={"center"} alignItems={"center"}>
                  <Image  src={items.src} alt="gift" objectFit={"contain"} />
                </Flex>
                <Flex w={"75%"} flexDir={"column"} ml={5}>
                  <Text fontSize={"19px"} fontWeight={700} color={"global.primary"}>{items.title}</Text>
                  <Text mt={5} fontSize={"15px"}>{items.des}</Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default GeneralInfomation;

const dataDummy = [
  {
    title: "chương trình",
    logo: "/images/infomation_logo.png",
    content: [
      {
        src: "/images/ifm1.jpg",
        title: "NGHỆ THUẬT GIÁC QUAN – MỘT TRẢI NGHIỆM NGHỆ THUẬT CỦA BISCONS",
        des: "Chương trình ưu đãi thiết kế và thi công các điểm chạm giác quan được Biscons tung ra vào cuối năm 2022 đã nhận được hàng trăm cuộc điện thoại gọi đến, hàng chục hợp đồng đã được ký và nhận được ưu đãi trong chỉ hơn nửa tháng diễn ra chương trình này. Năm nay, khi bước vào thời gian cao điểm chuẩn bị khởi công các công trình, rất nhiều khách hàng lại hỏi chúng tôi về gói thiết kế và thi công đó.",
      },
      {
        src: "/images/ifm2.jpg",
        title:
          "BISCONS TUNG CHƯƠNG TRÌNH KHUYẾN MÃI ĐẦU TIÊN SAU 5 NĂM THÀNH LẬP",
        des: "Chúng tôi xuất thân đều là những “kiến trúc sư đi kinh doanh”. Coi việc phát triển sản phẩm có chiều sâu và giàu bản sắc là phương pháp cốt lõi để phát triển mở rộng nguồn khách hàng. Bởi vậy, các chương trình khuyến mãi, giảm giá, kích cầu,…vốn được xem là thứ phù phiếm và gần như chưa từng nằm trong các chiến lược cạnh tranh của Biscons.Cuối năm nay, khi mà chúng tôi thực sự nghĩ rằng, các khách hàng đã tin yêu Biscons cũng xứng đáng nhận được những món quà ý nghĩa nào đó, là lúc chúng tôi bắt đầu tìm kiếm ý tưởng cho chương trình khuyến mãi đầu tiên trong 5 năm kể từ ngày thành lập.",
      },
    ],
  },
  {
    title: "báo chí nó về chúng tôi",
    logo: "/images/infomation_logo.png",
    content: [
      {
        src: "/images/ifm3.png",
        title: "BÁO DÂN TRÍ: ĐƯA KHÔNG GIAN XANH VÀO NHÀ CÙNG VỢ CHỒNG TRẺ",
        des: "Trong bối cảnh ô nhiễm không khí như hiện nay, đem không gian xanh vào nhà ở là giải pháp được rất nhiều gia đình ưa thích. Không chỉ mang lại những lợi ích cho chính gia chủ mà nó còn góp phần cải thiện môi trường quanh ta. Đó là những lý do khiến đưa không gian xanh vào nhà ở được dự đoán sẽ là một xu hướng “bùng nổ” trong năm tới.",
      },
      {
        src: "/images/ifm4.png",
        title: "BÁO VNEXPRESS: CHỒNG XÂY NHÀ TẶNG VỢ ĐỂ TỔ CHỨC ĐÁM CƯỚI",
        des: "Quen nhau từ lớp 10, hai vợ chồng đã sống chung và có ba con nhưng chưa tổ chức đám cưới chính thức.Năm ngoái, họ định tổ chức đám cưới nhưng người vợ không tìm được địa điểm ưng ý. Người chồng nảy ra ý tưởng xây nhà để tổ chức đám cưới và đặt hàng kiến trúc sư căn nhà hai tầng có khuôn viên sân vườn rộng gần 300 m2.",
      },
      {
        src: "/images/ifm5.png",
        title:
          "HAPPYNEST: NHÀ 3 TẦNG TẠI HẢI PHÒNG LÚC NÀO CŨNG SÁNG NHỜ THIẾT KẾ THÔNG TẦNG VÀ CẦU THANG BÊN HÔNG",
        des: "Căn nhà 3 tầng tại Hải Phòng thuộc sở hữu của chị Đỗ Thị Lựu, được thiết kế phục vụ cho mục đích làm căn hộ dịch vụ. Bởi vậy công trình được tối ưu chi phí đầu tư để tăng hiệu quả tài chính cho hoạt động kinh doanh. Bên cạnh đó, căn nhà cũng gây ấn tượng bởi thiết kế hiện đại, thoáng đãng, và gần gũi với thiên nhiên.",
      },
      {
        src: "/images/ifm6.jpg",
        title:
          "AFAMILY: YÊU NHAU TỪ NĂM LỚP 10, CÓ 3 MẶT CON NHƯNG CHỒNG VẪN XÂY NHÀ VƯỜN RỘNG 420M² ĐỂ CẦU HÔN VỢ Ở HẢI PHÒNG",
        des: "Căn nhà 3 tầng tại Hải Phòng thuộc sở hữu của chị Đỗ Thị Lựu, được thiết kế phục vụ cho mục đích làm căn hộ dịch vụ. Bởi vậy công trình được tối ưu chi phí đầu tư để tăng hiệu quả tài chính cho hoạt động kinh doanh. Bên cạnh đó, căn nhà cũng gây ấn tượng bởi thiết kế hiện đại, thoáng đãng, và gần gũi với thiên nhiên.",
      },
      {
        src: "/images/ifm7.png",
        title:
          "AFAMILY: YÊU NHAU TỪ NĂM LỚP 10, CÓ 3 MẶT CON NHƯNG CHỒNG VẪN XÂY NHÀ VƯỜN RỘNG 420M² ĐỂ CẦU HÔN VỢ Ở HẢI PHÒNG",
        des: "Quen nhau từ lớp 10, hai vợ chồng đã sống chung và có ba con nhưng chưa tổ chức đám cưới chính thức.Năm ngoái, họ định tổ chức đám cưới nhưng người vợ không tìm được địa điểm ưng ý. Người chồng nảy ra ý tưởng xây nhà để tổ chức đám cưới và đặt hàng kiến trúc sư căn nhà hai tầng có khuôn viên sân vườn rộng gần 300 m2.",
      },
      {
        src: "/images/ifm8.jpg",
        title: "VTV3: TẬN DỤNG ÁNH SÁNG TỪ THIÊN NHIÊN | KTS BÙI TRƯỜNG AN",
        des: "Quen nhau từ lớp 10, hai vợ chồng đã sống chung và có ba con nhưng chưa tổ chức đám cưới chính thức.Năm ngoái, họ định tổ chức đám cưới nhưng người vợ không tìm được địa điểm ưng ý. Người chồng nảy ra ý tưởng xây nhà để tổ chức đám cưới và đặt hàng kiến trúc sư căn nhà hai tầng có khuôn viên sân vườn rộng gần 300 m2.",
      },
      {
        src: "/images/ifm9.png",
        title: `BÁO THÁI BÌNH: BISCONS VÀ TRIẾT LÝ THIẾT KẾ BIỆT THỰ HIỆN ĐẠI XOAY QUANH "TRẢI NGHIỆM KHÁCH HÀNG"`,
        des: "Quen nhau từ lớp 10, hai vợ chồng đã sống chung và có ba con nhưng chưa tổ chức đám cưới chính thức.Năm ngoái, họ định tổ chức đám cưới nhưng người vợ không tìm được địa điểm ưng ý. Người chồng nảy ra ý tưởng xây nhà để tổ chức đám cưới và đặt hàng kiến trúc sư căn nhà hai tầng có khuôn viên sân vườn rộng gần 300 m2.",
      },
      {
        src: "/images/ifm10.png",
        title:
          "BÁO QUẢNG NAM: BIỆT THỰ BIỂN - BẢN HOÀ CA CỦA NÉT PHÓNG KHOÁNG VÀ HIỆN ĐẠI.",
        des: "Quen nhau từ lớp 10, hai vợ chồng đã sống chung và có ba con nhưng chưa tổ chức đám cưới chính thức.Năm ngoái, họ định tổ chức đám cưới nhưng người vợ không tìm được địa điểm ưng ý. Người chồng nảy ra ý tưởng xây nhà để tổ chức đám cưới và đặt hàng kiến trúc sư căn nhà hai tầng có khuôn viên sân vườn rộng gần 300 m2.",
      },
      {
        src: "/images/ifm11.png",
        title:
          "BÁO HÀ NỘI MỚI: BIỆT THỰ VƯỜN HIỆN ĐẠI - SỐNG THOÁT LY ĐÔ THỊ GIỮA ĐÔ THỊ",
        des: "Quen nhau từ lớp 10, hai vợ chồng đã sống chung và có ba con nhưng chưa tổ chức đám cưới chính thức.Năm ngoái, họ định tổ chức đám cưới nhưng người vợ không tìm được địa điểm ưng ý. Người chồng nảy ra ý tưởng xây nhà để tổ chức đám cưới và đặt hàng kiến trúc sư căn nhà hai tầng có khuôn viên sân vườn rộng gần 300 m2.",
      },
      {
        src: "/images/ifm12.png",
        title: "BÁO VNEXPRESS: CHỒNG XÂY NHÀ TẶNG VỢ ĐỂ TỔ CHỨC ĐÁM CƯỚI",
        des: "Quen nhau từ lớp 10, hai vợ chồng đã sống chung và có ba con nhưng chưa tổ chức đám cưới chính thức.Năm ngoái, họ định tổ chức đám cưới nhưng người vợ không tìm được địa điểm ưng ý. Người chồng nảy ra ý tưởng xây nhà để tổ chức đám cưới và đặt hàng kiến trúc sư căn nhà hai tầng có khuôn viên sân vườn rộng gần 300 m2.",
      },
    ],
  },
];
