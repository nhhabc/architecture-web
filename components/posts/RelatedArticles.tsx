import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Link,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";

const RelatedArticles = () => {
  return (
    <Flex flexDir={"column"} pos={"relative"}>
      <Flex backgroundColor={"white"} w={"100%"} flexDir={"column"} p={"10px"}>
        <Text
          bgColor={"global.primary"}
          textAlign={"center"}
          fontSize={"16px"}
          fontWeight={500}
          color={"white"}
          textTransform={"uppercase"}
          p={"10px"}
          mb={3}
        >
          Bài viết liên quan
        </Text>
        <Flex flexDir={"column"}>
          {postsDummy.map((item, i) => (
            <Flex key={i} mb={5}>
              <Flex
                w={"40%"}
                justifyContent={"center"}
                alignItems={"center"}
                mr={2}
              >
                <Link href="/">
                  <Image objectFit={"cover"} src={item.src} alt={item.title} />
                </Link>
              </Flex>
              <Flex w={"60%"} flexDir={"column"}>
                <Link _hover={{textDecoration:"none"}} href="/">
                  <Text
                    noOfLines={3}
                    color={"global.primary"}
                    fontSize={"15px"}
                    fontWeight={400}
                    lineHeight={"1.4em"}
                  >
                    {item.title}
                  </Text>
                </Link>
                <Text>{item.date}</Text>
              </Flex>
            </Flex>
          ))}
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
  );
};

export default RelatedArticles;

const postsDummy = [
  {
    src: "./images/post1.jpg",
    date: "18/04/2023",
    title: "NGHỆ THUẬT GIÁC QUAN – MỘT TRẢI NGHIỆM NGHỆ THUẬT CỦA BISCONS",
  },
  {
    src: "./images/post2.jpg",
    date: "18/04/2023",
    title: "BISCONS TUNG CHƯƠNG TRÌNH KHUYẾN MÃI ĐẦU TIÊN SAU 5 NĂM THÀNH LẬP",
  },
  {
    src: "./images/post3.jpg",
    date: "10/11/2022",
    title: "Cột Mốc 5 Năm Biscons",
  },
  {
    src: "./images/post4.jpg",
    date: "01/10/2022",
    title: "Biscons – 4 Năm Một Hành Trình",
  },
];
const input = {
  color: "black",
  borderRadius: "3px",
  fontSize: "14px",
};
