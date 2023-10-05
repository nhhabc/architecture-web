import { Box, Button, Flex, Input, Link, Select, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaUser, FaYoutube } from "react-icons/fa";
import { MdArrowDropDown, MdLocationOn } from "react-icons/md";
import { BsBuildingFill } from "react-icons/bs";
import category2 from "../../public/images/category2.jpg";

const ArticleDetail = () => {
  return (
    <Flex p={["40px 10px","40px 10px","40px 10px","40px 80px"]} flexDir={["column","column","row","row"]}>
      <Flex flexDir={"column"} w={["100%","100%","60%","70%"]}>
        <Text
          fontSize={["28px","28px","28px","40px"]}
          fontWeight={700}
          textTransform={"uppercase"}
          lineHeight={"1.4em"}
          mb={5}
          color={"#000"}
        >
          COZRUM HOME RESIDENCE
        </Text>
        <Flex flexDir={["column","column","column","row"]}>
          <Flex flexDir={"column"} w={["100%","100%","100%","300px"]} mb={[5,5,5,0]}>
            <Flex alignItems={"center"}>
              <AiFillHome fontSize={"30px"} />
              <Text sx={text}>Kiểu nhà</Text>
            </Flex>
            <Text sx={title}>Khách sạn</Text>
          </Flex>

          <Flex flexDir={"column"} w={["100%","100%","100%","300px"]} mb={[5,5,5,0]}>
            <Flex>
              <FaUser fontSize={"30px"} />
              <Text sx={text}>Chủ đầu tư</Text>
            </Flex>
            <Text sx={title}></Text>
          </Flex>

          <Flex flexDir={"column"} w={["100%","100%","100%","300px"]} mb={[5,5,5,0]}>
            <Flex>
              <MdLocationOn fontSize={"30px"} />
              <Text sx={text}>Địa điểm</Text>
            </Flex>
            <Text sx={title}>Bình Thạnh, TP.Hồ Chí Minh</Text>
          </Flex>

          <Flex flexDir={"column"} w={["100%","100%","100%","300px"]} mb={[5,5,5,0]}>
            <Flex>
              <BsBuildingFill fontSize={"30px"} />
              <Text sx={text}>Diện tích sàn</Text>
            </Flex>
            <Text sx={title}></Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex w={["100%","100%","40%","30%"]} ml={[0,0,0,10]} flexDir={"column"}>
        <Flex
          w={"100%"}
          h={"260px"}
          mb={"20px"}
          overflow={"hidden"}
          bgImage={category2.src}
          bgPos={"center"}
          bgRepeat={"no-repeat"}
          bgSize={"cover"}
          borderRadius={"6px"}
          pos={"relative"}
        >
          <Flex
            pos={"absolute"}
            top={0}
            left={0}
            w={"100%"}
            h={"100%"}
            bg={"#223b5f"}
            opacity={0.8}
          ></Flex>
          <Flex
            pos={"absolute"}
            flexDirection={"column"}
            alignItems={"center"}
            p={"40px 25px"}
            justifyContent={"center"}
          >
            <Text
              textTransform={"uppercase"}
              color={"white"}
              fontSize={"28px"}
              fontWeight={700}
              lineHeight={"1.3em"}
              mb={"20px"}
              textAlign={"center"}
            >
              Kết nối với biscons
            </Text>
            <Text
              color={"#e8f3f9"}
              fontSize={"14px"}
              fontWeight={400}
              textAlign={"center"}
              mb={"20px"}
            >
              Trải nghiệm ngay giải pháp số 1 Việt Nam về thiết kế và xây dựng
              nhà
            </Text>
            <Flex>
              <Link href="/">
                <Box sx={boxIcon}>
                  <FaFacebook color={"#223B5F"} fontSize={"20px"} />
                </Box>
              </Link>
              <Link href="/">
                <Box sx={boxIcon}>
                  <FaTwitter color={"#223B5F"} fontSize={"20px"} />
                </Box>
              </Link>
              <Link href="/">
                <Box sx={boxIcon}>
                  <FaYoutube color={"#223B5F"} fontSize={"20px"} />
                </Box>
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <Flex
        position={"sticky"}
        top={0}
        flexDir={"column"}
        bg={"#223b5f"}
        borderRadius={"5px"}
        p={"40px 20px"}
        mt={5}
      >
        <Text
          textTransform={"uppercase"}
          fontSize={"28px"}
          fontWeight={700}
          color={"white"}
          lineHeight={"1.2em"}
          textAlign={"center"}
        >
          Yêu cầu tư vấn
        </Text>

        <Flex
          w={["100%", "100%", "100%", "100%"]}
          p={"10px"}
          flexDir={"column"}
          color={"white"}
        >
          <form>
            <Box mb={"12px"}>
              <Text>Họ và tên</Text>
              <Input variant={"default"} sx={input} />
            </Box>
            <Box mb={"12px"}>
              <Text>Số điện thoại</Text>
              <Input variant={"default"} sx={input} />
            </Box>
            <Box mb={"12px"}>
              <Text>Bạn đang quan tâm</Text>
              <Select
                icon={<MdArrowDropDown />}
                iconColor="#000"
                variant={"default"}
                sx={input}
                placeholder="----"
              >
                <option value="option1">Thiết kế kiến trúc</option>
                <option value="option2">Thiết kế nội thất</option>
                <option value="option3">Xây dựng trọn gói</option>
                <option value="option4">Khác</option>
              </Select>
            </Box>
            <Box mb={"12px"}>
              <Text>Mức đầu tư</Text>
              <Select
                icon={<MdArrowDropDown />}
                iconColor="#000"
                variant={"default"}
                sx={input}
                placeholder="----"
              >
                <option value="option1">Dưới 1.5 tỷ</option>
                <option value="option2">Từ 1.5 - 3 tỷ</option>
                <option value="option2">Từ 3 - 6 tỷ</option>
                <option value="option2">Từ 6 - 10 tỷ</option>
                <option value="option3">Trên 10 tỷ</option>
              </Select>
            </Box>
            <Box mb={"12px"}>
              <Text>Yêu cầu tư vấn</Text>
              <Textarea variant={"default"} />
            </Box>
          </form>
          <Button
            variant={"default-revert"}
            mt={"20px"}
            mb={"12px"}
            alignSelf={"center"}
          >
            Liên hệ ngay
          </Button>
        </Flex>
      </Flex>
      </Flex>
    </Flex>
  );
};

export default ArticleDetail;

const text = {
  fontSize: "16px",
  fontWeight: 500,
  ml: 2,
};
const title = {
  fontWeight: 600,
  fontSize: "16px",
  color: "#000",
  mt: 2,
};
const boxIcon = {
  bg: "#fff",
  borderRadius: "10%",
  padding: "15px",
  margin: "0 5px",
};
const input = {
    color: "black",
    borderRadius: "3px",
    fontSize: "14px",
  };
