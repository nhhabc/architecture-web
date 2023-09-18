import { Box, Flex, Grid, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../../public/images/logo-blue.png";
import logo2 from "../../public/images/dmca.png";
import banner_ft from "../../public/images/pexels-curtis-adams.jpg";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <Flex
      bgColor={"#223b5f"}
      flexDir={"column"}
      position={"relative"}
      w={"100%"}
    >
      <Box
        position={"absolute"}
        transform={"translate(-50%, -50%)"}
        top={["-7%","-15%","-15%","-15%"]}
        left={"50%"}
        bgImage={banner_ft.src}
        w={["95%","95%","95%","80%"]}
        h={"272px"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
      >
        {/* <Box bgColor={"#000"} opacity={".7"} pos={"absolute"} top={0} left={0} w={"100%"} h={"100%"}></Box> */}
        <Flex justifyContent={"space-around"} alignItems={"center"} height={"100%"} flexDir={["column", "column","column","row"]}>
          <Text
            color={"#fff"}
            textTransform={"uppercase"}
            fontSize={["30px","44px","44px","44px"]}
            fontWeight={700}
            lineHeight={"63px"}
            w={["100%","100%","100%","50%"]}
            textAlign={["center","center","center","start"]}
          >
            Nói với chúng tôi về ngồi nhà của bạn
          </Text>
          <Flex
            bg={"#fff"}
            padding={"16px 25px 16px 25px"}
            borderRadius={"3px"}
            borderStyle={"solid"}
            fontSize={"18px"}
            fontWeight={700}
            textTransform={"uppercase"}
            color={"#000"}
            _hover={{
              bg:"#223b5f",
              color:"#fff"
            }}
            cursor={"poi"}
          >
            Liên hệ ngay
          </Flex>
        </Flex>
      </Box>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={8}
        w={"100%"}
        justifyContent={"space-around"}
        p={[
          "180px 10px 80px 10px",
          "180px 10px 80px 10px",
          "180px 10px 80px 10px",
          "180px 80px 80px 80px",
        ]}
      >
        <Flex flexDir={"column"} alignItems={"center"}>
          <Box>
            <Image
              w={"fit-content"}
              mb={"40px"}
              objectFit={"contain"}
              src={logo.src}
              alt="gift"
            />
          </Box>
          <Grid
            templateColumns={[
              "repeat(4, 1fr)",
              "repeat(4, 1fr)",
              "repeat(2, 1fr)",
              "repeat(4, 1fr)",
            ]}
            gap={6}
          >
            <Flex sx={ftIcons}>
              <FaFacebookF color={"#fff"} fontSize={18} />
            </Flex>
            <Flex sx={ftIcons}>
              <FaInstagram color={"#fff"} fontSize={18} />
            </Flex>
            <Flex sx={ftIcons}>
              <FaPinterestP color={"#fff"} fontSize={18} />
            </Flex>
            <Flex sx={ftIcons}>
              <AiOutlineYoutube color={"#fff"} fontSize={18} />
            </Flex>
          </Grid>
        </Flex>
        <Flex flexDir={"column"}>
          <Box borderBottom={"3px solid #13afe5"} w={"fit-content"} pb={"20px"}>
            <Text
              textTransform={"uppercase"}
              fontSize={["20px", "20px", "16px", "20px"]}
              fontWeight={600}
              color={"#fff"}
              lineHeight={1}
            >
              Địa chỉ
            </Text>
          </Box>
          <Flex sx={textStyle} m={"15px 0"}>
            Miền Bắc: Toà B1, Roman Plaza, P. Tố Hữu, Đai Mễ, Nam Từ Liêm, Hà
            Nội
          </Flex>
          <Flex sx={textStyle} mb={5}>
            Miền Nam: 85 Cách Mạng Tháng Tám, Tòa Twins Tower, Phường Bến Thành,
            Quận 1, TP. HCM
          </Flex>
          <Flex sx={textStyle}>Miền Trung: 62 Xuân Thủy, Cẩm Lệ, Đà Nẵng</Flex>
        </Flex>
        <Flex flexDir={"column"}>
          <Box borderBottom={"3px solid #13afe5"} w={"fit-content"} pb={"20px"}>
            <Text
              textTransform={"uppercase"}
              fontSize={["20px", "20px", "16px", "20px"]}
              fontWeight={600}
              color={"#fff"}
              lineHeight={1}
            >
              Liên kết nhanh
            </Text>
          </Box>
          <Flex sx={textStyle} m={"15px 0"}>
            Biệt Thự Hiện Đại
          </Flex>
          <Flex sx={textStyle} mb={5}>
            Nhà Phố Hiện Đại
          </Flex>
          <Flex sx={textStyle} mb={5}>
            Văn Phòng
          </Flex>
          <Flex sx={textStyle}>Cafe - Nhà Hàng - Spa - Khách Sạn</Flex>
        </Flex>
        <Flex flexDir={"column"}>
          <Box borderBottom={"3px solid #13afe5"} w={"fit-content"} pb={"20px"}>
            <Text
              textTransform={"uppercase"}
              fontSize={["20px", "20px", "16px", "20px"]}
              fontWeight={600}
              color={"#fff"}
              lineHeight={1}
            >
              Liên Hệ
            </Text>
          </Box>
          <Flex sx={textStyle} m={"15px 0"}>
            <Text fontWeight={600} mr={2}>
              Hotline:
            </Text>{" "}
            0847466868
          </Flex>
          <Flex sx={textStyle} mb={5}>
            <Text fontWeight={600} mr={2}>
              Email:
            </Text>{" "}
            biscons.jsc@gmail.com
          </Flex>
          <Box>
            <Image src={logo2.src} alt="gift" />
          </Box>
        </Flex>
      </Grid>
      <Flex
        borderTop={"1px solid #fff"}
        color={"#ffffff"}
        justifyContent={"center "}
        fontSize={"14px"}
        fontWeight={400}
        textAlign={"center"}
      >
        Copyright © 2018 Thiết kế và thi công kiến trúc - nội thất Biscons
      </Flex>
    </Flex>
  );
};

export default Footer;
const textStyle = {
  fontSize: "14px",
  fontWeight: 500,
  color: "#fff",
};
const ftIcons = {
  w: "40px",
  h: "40px",
  borderRadius: "50%",
  border: "1px solid #fff",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};
