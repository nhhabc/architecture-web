import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import bs1 from "../../public/images/introduce1.png";
import bs2 from "../../public/images/introduce2.png";
import bs3 from "../../public/images/introduce3.jpg";
import bs4 from "../../public/images/introduce4.jpg";
import bs5 from "../../public/images/introduce5.jpg";
import bs6 from "../../public/images/introduce6.jpg";
import bs7 from "../../public/images/introduce7.jpg";
import bs8 from "../../public/images/introduce8.jpg";
import bs9 from "../../public/images/introduce9.jpg";
import btn_up from "../../public/images/blue-button-up.svg";
import biscons_team from "../../public/images/kien-truc-biscons.jpg";
import NDC from "../../public/images/NDC8344.jpg";

const HistoryBegins = () => {
  return (
    <Flex
      justifyContent={"center"}
      flexDir={"column"}
      p={["20px 10px", "20px 40px", "20px 40px", "20px 80px"]}
    >
      <Text
        p={["40px 10px 20px","40px 80px 20px","40px 80px 20px","40px 80px 20px"]}
        textAlign={"center"}
        textTransform={"uppercase"}
        fontSize={["28px","40px","40px","40px"]}
        fontWeight={600}
        color={"#000"}
      >
        Lịch sử hình thành
      </Text>
      <Flex>
        <Flex w={"20%"} display={["none", "flex","flex","flex"]}>
          <Flex flexDir={"column"} alignItems={"center"}>
            <Text transform={"rotate(90deg)"} mb={5}>
              01/03
            </Text>
            <Box
              className="timeline__line"
              pos={"relative"}
              h={"50vh"}
              w={"2px"}
              backgroundColor={"rgba(0,0,0,.2)"}
              mb={2}
            ></Box>
            <Image
              mb={2}
              boxSize={"50px"}
              transform={"rotate(0deg)"}
              src={btn_up.src}
              alt="gift"
            />
            <Image
              boxSize={"50px"}
              transform={"rotate(180deg)"}
              src={btn_up.src}
              alt="gift"
            />
          </Flex>
          <Flex flexDir={"column"} mt={20}>
            <Text mb={"30px"} color={"#000"} fontWeight={600}>
              Khởi điểm
            </Text>
            <Text mb={"30px"} color={"#ccc"} fontWeight={600}>
              Phát triển
            </Text>
            <Text color={"#ccc"} fontWeight={600}>
              Hiện tại
            </Text>
          </Flex>
        </Flex>
        <Flex w={["100%","80%","80%","80%"]} flexDir={"column"}>
          <Flex flexDir={"column"}>
            <Text sx={headStyle}>Khởi điểm</Text>
            <Text color={"global.text"} ml={5} mt={5}>
              Tháng 4 năm 2017, Nền móng đầu tiên của Biscons được hình thành
              với tiền thân là một dự án khởi nghiệp với mô hình văn phòng thiết
              kế, kết hợp đào tạo phần mềm kiến trúc. Văn phòng đầu tiên được
              đặt tại một căn hộ nhỏ vỏn vẹn 50m2 Khu đô thị Xala – Hà Nội.
            </Text>
            <Image
              mt={5}
              w={"100%"}
              h={"100%"}
              objectFit={"contain"}
              src={bs1.src}
              alt="gift"
            />
            <Image
              mt={5}
              w={"100%"}
              h={"100%"}
              objectFit={"contain"}
              src={bs2.src}
              alt="gift"
            />
            <Text color={"global.text"} ml={5} mt={5}>
              Các dự án của công ty lúc bấy giờ chỉ là thiết kế các căn chung cư
              nhỏ, với nòng cốt là đội ngũ thiết kế được đào tạo từ trung tâm
              phần mềm Biscons. Sau 1 năm thành lập và trải qua không ít biến cố
              và khó khăn, công ty chuyển trụ sở về P.306 – Tòa nhà FLC 418
              Quang Trung, Hà Đông, đây chính là cột mốc đánh dấu những bước
              ngoặt, thay đổi to lớn của công ty về sau.
            </Text>
          </Flex>
          <Flex flexDir={"column"}>
            <Text sx={headStyle}>Phát triển</Text>
            <Flex ml={5} mt={5} flexDir={"column"}>
              <Text>
                6 năm phát triển vừa qua, tuy là một chặng đường không quá dài
                để đánh giá, tuy nhiên công ty cũng đã đạt được không ít thành
                tựu và cột mốc mới trong quá trình phát triển:
              </Text>
              <Text mt={5}>
                {" "}
                <span style={{ color: "#000", fontWeight: 700 }}>
                  Năm 2019:
                </span>{" "}
                bắt đầu triển khai mảng thi công xây dựng. Trong năm này, tốc độ
                tăng trưởng đạt 700%.
              </Text>
              <Text>
                <span style={{ color: "#000", fontWeight: 700 }}>10/2019:</span>{" "}
                Công ty bắt đầu khai thác thị trường miền Nam vời các dự án đầu
                tiên thiết kế thi công nội thất cho chuỗi khách sạn Cozrum.
              </Text>
            </Flex>
            <Image
              mt={5}
              w={"100%"}
              h={"100%"}
              objectFit={"contain"}
              src={bs3.src}
              alt="gift"
            />
            <Image
              mt={5}
              w={"100%"}
              h={"100%"}
              objectFit={"contain"}
              src={bs4.src}
              alt="gift"
            />
            <Image
              mt={5}
              w={"100%"}
              h={"100%"}
              objectFit={"contain"}
              src={bs5.src}
              alt="gift"
            />
            <Image
              mt={5}
              w={"100%"}
              h={"100%"}
              objectFit={"contain"}
              src={bs6.src}
              alt="gift"
            />

            <Flex flexDir={"column"} ml={5} mt={10}>
              <Text>
                <span style={{ color: "#000", fontWeight: 700 }}>
                  Năm 2020:
                </span>{" "}
                Biscons chuyển sang không gian làm việc mới với hơn 50 nhân sự
                cùng quan điểm xây dựng một doanh nghiệp hàng đầu về lĩnh vực
                thiết kế và thi công Kiến trúc-Nội thất.
              </Text>
              <Text mt={5}>
                <span style={{ color: "#000", fontWeight: 700 }}>
                  Năm 2021:
                </span>{" "}
                mở rộng chi nhánh tại Đà Nẵng, đặt dấu mốc cho việc khai thác
                thị trường toàn quốc.
              </Text>
              <Text mt={5}>
                <span style={{ color: "#000", fontWeight: 700 }}>01/2022:</span>{" "}
                Tinh Hoa Biscons ra đời. Bước đầu thành công trong việc khẳng
                định tên tuổi với phân khúc khách hàng cao cấp.
              </Text>
            </Flex>
          </Flex>
          <Flex flexDir={"column"} mt={5}>
            <Text sx={headStyle}>Phát triển</Text>
            <Text mt={5} ml={5}>
              Hiện tại, Biscons đã khẳng định được sự uy tín và vị thế của mình
              trên thị trường. Định hướng trong tương lai của chúng tôi là mở
              rộng thêm các mảng phân phối bán lẻ nội thất, vật liệu xây dựng để
              hoàn thiện chuỗi cung ứng khép kín.
            </Text>
            <Image
              mt={5}
              w={"100%"}
              h={"100%"}
              objectFit={"contain"}
              src={bs7.src}
              alt="gift"
            />
            <Image
              mt={5}
              w={"100%"}
              h={"100%"}
              objectFit={"contain"}
              src={bs8.src}
              alt="gift"
            />
            <Image
              mt={5}
              w={"100%"}
              h={"100%"}
              objectFit={"contain"}
              src={bs9.src}
              alt="gift"
            />
            <Image
              mt={5}
              w={"100%"}
              h={"100%"}
              objectFit={"contain"}
              src={NDC.src}
              alt="gift"
            />
            <Image
              mt={5}
              w={"100%"}
              h={"100%"}
              objectFit={"contain"}
              src={biscons_team.src}
              alt="gift"
            />
            <Text mt={5} ml={5}>
              Bằng quy trình nghiên cứu và tìm hiểu sâu tâm lý khách hàng cũng
              như đặc thù và văn hóa doanh nghiệp, chúng tôi luôn đồng hành để
              gia tăng tính kết nối và sự hài lòng với mỗi khách hàng và doanh
              nghiệp, bên cạnh đó chúng tôi vẫn không quên chuyên nghiệp hóa
              hình ảnh của mình trong mắt khách hàng và đối tác.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default HistoryBegins
const headStyle = {
    fontSize: ["26px","36px","36px","36px"],
    fontWeight: 600,
    color: "#000",
    // textTransform:"uppercase"
  };