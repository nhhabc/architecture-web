import { Box, Flex, Grid, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import bg_header from "../../public/images/category3.jpg";
import group from "../../public/images/Group-14812.png";
import NDC from "../../public/images/NDC8344.jpg";
import biscons_team from "../../public/images/kien-truc-biscons.jpg";
import Slider from "react-slick";
import btn_up from "../../public/images/blue-button-up.svg"
import bg1 from "../../public/images/bg1.png"

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
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
      p={"60px 80px 60px 80px"}
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
      <Flex flexDir={"column"} w={"55%"}>
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
    <Flex flexDir={"column"} p={"40px 80px"}>
      <Grid
        templateColumns={"repeat(2, 1fr)"}
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
      <Grid templateColumns={"repeat(2, 1fr)"} gap={8}>
        <Flex>
          <Image
            src={biscons_team.src}
            maxW={"870px"}
            maxH={"590px"}
            objectFit={"cover"}
            alt="gift"
          />
        </Flex>
        <Flex
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          margin={"auto"}
        >
          <Text
            color={"global.primary"}
            fontSize={"28px"}
            fontWeight={800}
            textTransform={"uppercase"}
            mb={2}
          >
            Giá trị cốt lõi
          </Text>

          <Box bg={"#fff"} w={"653px"} h={"170px"} pos={"relative"}>
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToScroll={1}
              slidesToShow={1}
              nextArrow={
                  <Image boxSize={"50px"} transform={"rotate(90deg)"} pos={"absolute"} top={"180px"} left={14} src={btn_up.src} alt="gift" />
              }
              prevArrow={
                <Image boxSize={"50px"} transform={"rotate(-90deg)"} pos={"absolute"} top={"180px"} left={0} src={btn_up.src} alt="gift" />
              }
            >
              {dataDummy.map((item, i) => (
                <Box key={i} p={"10px"}>
                  <Text
                    color={"global.primary"}
                    fontSize={"24px"}
                    fontWeight={800}
                    textTransform={"uppercase"}
                    letterSpacing={"2.4px"}
                  >
                    {item.title}
                  </Text>
                  <Text>{item.des}</Text>
                </Box>
              ))}
            </Slider>
          </Box>
        </Flex>
      </Grid>
    </Flex>

    <Flex bgImage={bg1.src} bgRepeat={"no-repeat"} bgSize={"cover"} h={"206px"} justifyContent={"center"} alignItems={"center"} mt={10}>
      <Text textTransform={"uppercase"} fontSize={"36pt"} fontWeight={700} color={"#fff"} >Dịch vụ</Text>
    </Flex>

    <Flex bgImage={"./images/O9FI7N.jpg"} bgSize={"cover"} bgRepeat={"no-repeat"} h={"520px"} >
          <Grid templateColumns={"repeat(3, 1ft)"} gap={8} display={"flex"} p={"40px 80px"}>
                {serviceDummy.map((item, i) => (
                  <Flex key={i} flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
                    <Image boxSize={50} src={item.img} alt="gift" />
                    <Text fontSize={"18pt"} color={"global.primary"} fontWeight={700} textTransform={"uppercase"}>{item.title}</Text>
                    <Text textAlign={"center"}>{item.des}</Text>
                  </Flex>
                ))}
          </Grid>

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

const dataDummy = [
  {
    title: "Tâm",
    des: "Sự tử tế. Biscons đối thoại với khách hàng, với đối tác, với nội bộ bằng sự tử tế. Chúng tôi tin rằng không chỉ kinh doanh mà bất kì sự phát triển nào có liên quan đến con người đều cần sự Tử Tế. Đó cũng chính là giá trị cốt lõi và bền vững nhất của Biscons trong lộ trình phát triển dài hạn và gắn bó vĩnh viễn.",
  },
  {
    title: "Chung",
    des: "Hướng đến cộng đồng. Chúng tôi đại diện cho thế hệ kiến trúc sư- doanh nhân mới hướng đến lợi ích chung của xã hội, xây dựng và kiến thiết nước nhà bằng đam mê, hoài bão, tri thức và sự tử tế.",
  },
  {
    title: "Nhân",
    des: "Lấy con người làm tâm phát triển. Chúng tôi luôn đánh giá cao giá trị của mỗi cá thể, khích lệ phát triển nội lực tiềm ẩn trong mỗi con người. Từ tư tưởng cốt lõi đó, mỗi cá nhân phát triển tâm-trí-lực toàn diện và cùng nhau làm nên một tập thể đoàn kết của những con người nội lực mạnh mẽ.",
  },
];
const serviceDummy = [
  {
    img:"./images/design-teamf1.png",
    title:"Tư vấn thiết kế",
    des:"Thiết kế Kiến trúc – Cảnh quan – Nội thất với tất cả sự thấu hiểu nhu cầu, thói quen sinh hoạt, tính cách,… của khách hàng, bên cạnh đó đảm bảo cân bằng giữa yêu cầu công năng với yếu tố thẩm mỹ."
  },
  {
    img:"./images/architectf1.png",
    title:"THIẾT KẾ – THI CÔNG TRỌN GÓI",
    des:"Dịch vụ thi công trọn gói giúp khách hàng tiết kiệm nhiều thời gian và nguồn vốn, tối ưu hóa các nguồn lực và tăng cường kiểm tra giám sát, đảm bảo chất lượng dẫn đầu"
  },
  {
    img:"./images/workersf1.png",
    title:"THI CÔNG XÂY DỰNG",
    des:"Cung cấp giải pháp mang đến sự tối ưu về thời gian thi công và vật liệu xây dựng. Chất lượng hoàn thiện chỉn chu, thi công đúng theo thiết kế."
  },

]
