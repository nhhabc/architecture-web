import { Box, Flex, Grid, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import bg_header from "../../public/images/category3.jpg";
import group from "../../public/images/Group-14812.png";
import NDC from "../../public/images/NDC8344.jpg";
import biscons_team from "../../public/images/kien-truc-biscons.jpg";
import Slider from "react-slick";
import btn_up from "../../public/images/blue-button-up.svg";
import bg1 from "../../public/images/bg1.png";
import bs10 from "../../public/images/introduce10.jpg";
import { FaCaretDown } from "react-icons/fa";
import CoreValue from "./CoreValue";
import HistoryBegins from "./HistoryBegins";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        dots: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        slidesToShow: 1,
      },
    },
  ],
};

const IntroducePage = () => (
  <Flex flexDir={"column"}>
    <Flex
      bgImage={bg_header.src}
      bgRepeat={"no-repeat"}
      w={"100%"}
      h={"100vh"}
      bgSize={"cover"}
      position={"relative"}
    >
      <Box
        pos={"absolute"}
        bgColor={"#00000063"}
        opacity={0.5}
        h={"100%"}
        w={"100%"}
        top={0}
        left={0}
      ></Box>
      <Box pos={"absolute"} left={"18%"} bottom={"30%"}>
        <Text
          textTransform={"uppercase"}
          color={"#fff"}
          fontSize={"36pt"}
          fontWeight={700}
        >
          Giới thiệu
        </Text>
        <Box borderBottom={"5px solid #fff"} w={"80px"}></Box>
      </Box>
    </Flex>
    <Flex
      w={"100%"}
      h={"470px"}
      pos={"relative"}
      p={["60px 10px", "60px 10px", "60px 40px", "60px 80px"]}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        bgImage={group.src}
        bgRepeat={"no-repeat"}
        bgSize={"contain"}
        w={"100%"}
        h={"200px"}
        pos={"absolute"}
        top={0}
        left={0}
      ></Box>
      <Flex flexDir={"column"} w={["100%", "100%", "100%", "55%"]}>
        <Text
          textTransform={"uppercase"}
          fontSize={"40px"}
          fontWeight={700}
          color={"#000"}
        >
          Về chúng tôi
        </Text>
        <Box borderBottom={"6px solid #274871"} w={"60px"} mt={2}></Box>
        <Text color={"#231f20"} textAlign={"left"} mt={5}>
          BISCONS JSC là đơn vị cung cấp dịch vụ thiết kế và thi công biệt thự
          hiện đại trọn gói chuyên nghiệp trên toàn quốc. Với nhiều năm kinh
          nghiệm trong lĩnh vực xây dựng{" "}
          <Link href="#" color={"#0170b9"} textDecoration={"underline"}>
            thiết kế biệt thự
          </Link>{" "}
          cùng lối thiết kế mang xu hướng hiện đại, chúng tôi đang từng ngày
          phát triển và không ngừng nghiên cứu, sáng tạo để trao tặng đến quý
          khách hàng những ngôi nhà ấn tượng và mang đậm dấu ấn cá nhân của gia
          chủ.
        </Text>
        <Text textAlign={"left"} mt={5}>
          Đơn vị chúng tôi đi vào hoạt động từ năm 2017 với trụ sở đầu tiên tại
          Hà Nội và đến nay đã có tổng cộng 3 chi nhánh trên toàn quốc tại các
          thành phố Hà Nội, Hồ Chí Minh, Đà Nẵng
        </Text>
      </Flex>
    </Flex>
    <Flex
      flexDir={"column"}
      p={["40px 10px", "40px 80px", "40px 40px", "40px 80px"]}
    >
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
        ]}
        gap={8}
        alignItems={"center"}
        mb={"100px"}
      >
        <Flex flexDir={"column"} justifyContent={"center"}>
          <Flex flexDir={"column"} maxW={"700px"} mb={20}>
            <Text sx={textStyle} mb={5}>
              Tầm nhìn
            </Text>
            <Text mb={5}>
              Biscons định hướng trở thành công ty có thị phần hàng đầu Việt Nam
              về lĩnh vực thiết kế thi công nhà ở trọn gói và là công ty đầu
              tiên thương mại hoá được sản phẩm xây dựng biệt thự, nhà ở.
            </Text>
            <Text mb={5}>
              Biscons hướng đến một bộ máy có khả năng đảm nhiệm đồng thời số
              lượng lớn dự án hoạt động trên quy mô toàn quốc, với chất lượng và
              quy trình chặt chẽ nhất.
            </Text>
            <Text mb={5}>
              Bên cạnh đó, việc đảm bảo được tính cá nhân hoá tại từng công
              trình khi lắp ráp vào mô hình quản trị có tính hệ thống luôn là
              yếu tố quan trọng nhất cho tầm nhìn dài hạn.
            </Text>
          </Flex>
          <Flex flexDir={"column"} maxW={"700px"}>
            <Text sx={textStyle} mb={5}>
              Sứ Mệnh
            </Text>
            <Text mb={5}>
              Xây dựng nhà ở trước nay là một công việc trước nay được xem là
              một công việc gây nhiều áp lực và tốn kém thời gian, tinh thần cho
              gia chủ. Đặc biệt với nhiều gia đình không am hiểu về lĩnh vực xây
              dựng, việc xây nhà thường đi kèm với các rủi ro do phát sinh tiến
              độ, phát sinh chi phí đầu tư,…
            </Text>
            <Text mb={5}>
              Nắm bắt được tình trạng đó, Biscons với sản phẩm lõi là dịch vụ
              thiết kế- thi công trọn gói nhà ở, mang sứ mệnh cho người Việt có
              thể có được ngôi nhà đẹp và hợp lý về công năng, tiết kiệm thời
              gian, công sức quản lý, tối ưu về chi phí đầu tư cho chủ nhà.
            </Text>
          </Flex>
        </Flex>
        <Flex justifyContent={"center"}>
          <Image src={NDC.src} alt={"gift"} />
        </Flex>
      </Grid>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
        ]}
        gap={8}
      >
        <Flex>
          <Image
            src={biscons_team.src}
            w={["100%", "100%", "100%", "870px"]}
            h={["100%", "100%", "590px", "590px"]}
            objectFit={"cover"}
            alt="gift"
          />
        </Flex>
        <CoreValue />
        
      </Grid>
    </Flex>
    <Flex
      bgImage={bg1.src}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      h={"206px"}
      justifyContent={"center"}
      alignItems={"center"}
      mt={10}
    >
      <Text
        textTransform={"uppercase"}
        fontSize={"36pt"}
        fontWeight={700}
        color={"#fff"}
      >
        Dịch vụ
      </Text>
    </Flex>
    <Flex
      bgImage={"./images/O9FI7N.jpg"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      h={["fit-content", "fit-content", "520px", "520px"]}
      justifyContent={"center"}
      pos={"relative"}
    >
      {/* <Box bgColor={"#fff"} opacity={.2} pos={"absolute"} top={0} left={0} w={"100%"} h={"100%"}></Box> */}
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={8}
        p={["40px 10px","40px 80px","40px 80px","40px 80px"]}
      >
        {serviceDummy.map((item, i) => (
          <Flex
            key={i}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            maxW={"435px"}
          >
            <Image maxW={"150px"} h={"150px"} src={item.img} alt="gift" />
            <Text
              fontSize={"18pt"}
              color={"global.primary"}
              fontWeight={700}
              textTransform={"uppercase"}
              mt={3}
              textAlign={"center"}
            >
              {item.title}
            </Text>
            <Text textAlign={"center"} mt={5} color={"global.text"}>
              {item.des}
            </Text>
          </Flex>
        ))}
      </Grid>
    </Flex>
    
    <HistoryBegins />

    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      mt={10}
    >
      <Text
        fontSize={["26pt","36pt","36pt","36pt"]}
        color={"#000"}
        fontWeight={700}
        textTransform={"uppercase"}
      >
        meet our team
      </Text>
      <Flex>
        <FaCaretDown fontSize={"123px"} color={"#223b5f"} />
      </Flex>
      <Flex bg={"#fff"} w={"100%"} justifyContent={"center"}>
        <Flex
          maxW={"1250px"}
          borderRadius={"15px"}
          boxShadow={"0 0 10px 0 rgba(0,0,0,.5);"}
          p={"10px"}
          flexDir={["column","column","row","row"]}
        >
          <Flex w={["100%","45%","45%","45%"]}>
            <Image
              w={["100%","595px","595px","595px"]}
              h={["100%","794px","794px","794px"]}
              objectFit={"cover"}
              src={bs10.src}
              alt="gift"
            />
          </Flex>
          <Flex flexDir={"column"} w={["100%","55%","55%","55%"]} p={"40px"}>
            <Text sx={titleStyle}> + founder</Text>
            <Text
              color={"#000"}
              fontSize={"28px"}
              fontWeight={700}
              textTransform={"uppercase"}
            >
              {" "}
              Bùi trường an
            </Text>

            <Text sx={titleStyle} mt={10}>
              {" "}
              + bio
            </Text>
            <Text fontWeight={700} color={"#000"}>
              Hanoi Architectural University
            </Text>
            <Text mt={5} fontWeight={700} color={"#000"}>
              Languages: Vietnamese – English
            </Text>
            <Flex flexDir={"column"} mt={10}>
              <Text>
                <span style={{ color: "#000", fontWeight: 700 }}>04/2017:</span>{" "}
                Khởi nghiệp với mô hình văn phòng thiết kế, kết hợp đào tạo phần
                mềm kiến trúc.
              </Text>
              <Text mt={5}>
                <span style={{ color: "#000", fontWeight: 700 }}>2018:</span>{" "}
                Sáng lập Biscons – Thương hiệu thiết kế và thi công trọn gói
                thuộc Công ty cổ phần thiết kế và xây dựng Biscons Việt Nam
              </Text>
              <Text mt={5}>
                <span style={{ color: "#000", fontWeight: 700 }}>01/2022:</span>{" "}
                Sáng lập Tinh Hoa Biscons – Thương hiệu thiết kế kiến trúc và
                nội thất sang trọng thuộc Công ty cổ phần thiết kế và xây dựng
                Biscons Việt Nam
              </Text>
            </Flex>
            <Flex justifyContent={"center"} mt={10}>
              <Text
                w={"fit-content"}
                p={"10px 20px"}
                bgColor={"#223b5f"}
                color={"#fff"}
                cursor={"pointer"}
              >
                Bùi Trường An
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex justifyContent={"center"} mt={10}>
        <Box
          maxW={["380px", "100%", "800px", "1250px"]}
          pos={"relative"}
          className="introduce-slider"
        >
          <Slider
            {...settings}
            nextArrow={
              <Image
                zIndex={2}
                boxSize={"50px"}
                transform={"rotate(90deg)"}
                pos={"absolute"}
                top={"570px"}
                left={"65px"}
                src={btn_up.src}
                alt="gift"
              />
            }
            prevArrow={
              <Image
                zIndex={2}
                boxSize={"50px"}
                transform={"rotate(-90deg)"}
                pos={"absolute"}
                top={"570px"}
                left={"10px"}
                src={btn_up.src}
                alt="gift"
              />
            }
          >
            {slideDummy.map((item, i) => (
              <Flex key={i} flexDir={"column"} p={"0 10px"}>
                <Image
                  src={item.img}
                  w={"100%"}
                  maxH={"439px"}
                  objectFit={"cover"}
                  alt={item.name}
                />
                <Flex
                  h={"143px"}
                  bg={"#fff"}
                  flexDir={"column"}
                  p={"20px 0"}
                  alignItems={"center"}
                >
                  <Text
                    color={"#6D7882"}
                    textTransform={"uppercase"}
                    fontWeight={300}
                    fontSize={"14px"}
                  >
                    {item.pos !== null ? item.pos : ""}
                  </Text>
                  <Text color={"#0d0925"} fontWeight={700} fontSize={"20px"}>
                    {item.name}
                  </Text>
                  <Text
                    color={"#6D7882"}
                    textTransform={"uppercase"}
                    fontSize={"15px"}
                  >
                    {item.profession}
                  </Text>
                  <Text
                    color={"#3b3f42"}
                    fontSize={"14px"}
                    fontWeight={700}
                    mt={3}
                  >
                    {item.read_more !== null ? item.read_more : ""}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Slider>
        </Box>
      </Flex>
    </Flex>
  </Flex>
);

export default IntroducePage;
const textStyle = {
  fontSize: "40px",
  fontWeight: 600,
  textTransform: "uppercase",
  lineHeight: "1.25em",
  color: "#000",
};

const titleStyle = {
  fontSize: "14pt",
  fontWeight: 700,
  color: "#0f1e5d",
  textTransform: "uppercase",
};


const serviceDummy = [
  {
    img: "./images/design-teamf1.png",
    title: "Tư vấn thiết kế",
    des: "Thiết kế Kiến trúc – Cảnh quan – Nội thất với tất cả sự thấu hiểu nhu cầu, thói quen sinh hoạt, tính cách,… của khách hàng, bên cạnh đó đảm bảo cân bằng giữa yêu cầu công năng với yếu tố thẩm mỹ.",
  },
  {
    img: "./images/architectf1.png",
    title: "THIẾT KẾ – THI CÔNG TRỌN GÓI",
    des: "Dịch vụ thi công trọn gói giúp khách hàng tiết kiệm nhiều thời gian và nguồn vốn, tối ưu hóa các nguồn lực và tăng cường kiểm tra giám sát, đảm bảo chất lượng dẫn đầu",
  },
  {
    img: "./images/workersf1.png",
    title: "THI CÔNG XÂY DỰNG",
    des: "Cung cấp giải pháp mang đến sự tối ưu về thời gian thi công và vật liệu xây dựng. Chất lượng hoàn thiện chỉn chu, thi công đúng theo thiết kế.",
  },
];
const slideDummy = [
  {
    img: "./images/canphuong.jpg",
    pos: "manager",
    name: "Vũ Văn Phương",
    profession: "Kiến trúc sư concept",
    read_more: "Read More",
  },
  {
    img: "./images/caoquy.jpg",
    pos: null,
    name: "Cao Quý",
    profession: "Kiến trúc sư concept",
    read_more: "Read More",
  },
  {
    img: "./images/thuynguyen.jpg",
    pos: null,
    name: "Thùy Nguyễn",
    profession: "Kiến trúc sư concept",
    read_more: "Read More",
  },
  {
    img: "./images/minhtoan.jpg",
    pos: null,
    name: "Minh Toàn",
    profession: "Kiến trúc sư cảnh quan",
    read_more: "Read More",
  },
  {
    img: "./images/quannguyen.jpg",
    pos: "manager",
    name: "Quân Nguyễn",
    profession: "Chủ trì kiến trúc",
    read_more: null,
  },
  {
    img: "./images/oanhnguyen.jpg",
    pos: "manager",
    name: "Oanh Nguyễn",
    profession: "Chủ trì kiến trúc",
    read_more: "Read More",
  },
  {
    img: "./images/quocluan.jpg",
    pos: "manager",
    name: "Trần Quốc Luân",
    profession: "Trưởng Phòng Thi Công",
    read_more: "Read More",
  },
];
