import { Container, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import HeaderIntroduce from "../Introduce/HeaderIntroduce";
import RelatedArticles from "./RelatedArticles";
import { AiFillCalendar } from "react-icons/ai";
import { FaRegClock } from "react-icons/fa";
import cotmoc from "../../public/images/tue.jpg"

const PostsPage = () => {
  return (
    <Flex flexDir={"column"}>
      <HeaderIntroduce value={"bài viết"} />
      <Container maxW={"1250px"} display={"flex"} flexDir={["column","column","row","row"]} p={"40px 0"}>
        <Flex
          bg={"white"}
          p={"30px 20px"}
          w={["100%","100%","70%","75%"]}
          h={"100%"}
          mr={5}
          flexDir={"column"}
        >
          <Text
            color={"global.primary"}
            fontWeight={600}
            fontSize={"24px"}
            textTransform={"uppercase"}
          >
            Cột mốc 5 năm biscons
          </Text>
          <Flex alignItems={"center"} mt={5}>
            <AiFillCalendar color={"#223b5f"} />{" "}
            <Text ml={2} mr={5}>Tháng Mười Một 10, 2022</Text>
            <FaRegClock color={"#223b5f"}  /> <Text ml={2}>11:23 chiều</Text>
          </Flex>
          <Flex flexDir={"column"}>
            <Image mt={5} src={cotmoc.src} objectFit={"cover"} alt="gift" />
            <Text mt={5}>5 năm là quãng thời gian đủ dài để chứng minh cho sự phát triển một cách chắc chắn và bền vững cho một doanh nghiệp. Chúng ta đã đi qua những sóng gió ngày đầu của quá trình khởi nghiệp, đã từng bước vươn mình để khẳng định tên tuổi trên thị trường.</Text>
            <Text mt={5}>Từ những ngày đầu thành lập, với hơn nửa thời gian là dịch bệnh Covid nhưng với chiến lược lấy tôn chỉ phát triển sản phẩm làm kim chỉ nam cho năng lực cạnh tranh, với trau chuốt, sáng tạo và khác biệt trong cách làm sản phẩm, các công trình mang ngôn ngữ thiết kế đặc trưng đã làm nên Biscons ngày hôm nay.</Text>
            <Text mt={5}>Và sự thành công của Biscons trong suốt chặng đường 5 năm vừa qua không thể không kể đến những sự gắn bó ngay từ những ngày đầu của đội ngũ Cán bộ Nhân viên. Nhân kỷ niệm 5 tuổi, Biscons tổ chức chương trình đặc biệt dành cho toàn bộ nhân sự kỳ nghỉ dưỡng tại Resort Sol by Mélia Phú Quốc. Sau những giờ làm việc miệt mài để cùng phát triển, chuyến đi này cũng sẽ như một thành quả, một món quà mà công ty dành tặng cho toàn bộ nhân sự. Đây cũng là dịp đặc biệt mang lại sự gắn kết giữa các cá nhân, các phòng ban, giữa ban lãnh đạo và nhân viên công ty .</Text>
            <Text mt={5}>Chặng đường tiếp theo, Biscons bằng sức mạnh của tuổi trẻ, sức mạnh của đam mê, sức mạnh của tập thể sẽ nỗ lực hết mình, giữ vững niềm tin & khát vọng vươn xa, luôn thay đổi đón đầu cơ hội mới nhưng vẫn luôn giữ được giá trị cốt lõi là sự chính trực và tử tế của bậc quân tử.</Text>
            <Text mt={5}>Biscons – hành trình 5 năm – một chặng đường đáng nhớ !</Text>
            <Text mt={10} fontWeight={600} fontSize={"18px"} color={"global.text"}>Tham khảo các bài viết có thể bạn quan tâm:</Text>
          </Flex>
        </Flex>
        <Flex w={["100%","100%","30%","25%"]}>
          <Flex w={"100%"}>
            <RelatedArticles />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default PostsPage;
