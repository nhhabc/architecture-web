"use client";
import HeaderIntroduce from "@/components/Introduce/HeaderIntroduce";
import { AspectRatio, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPlay, FaRegPlayCircle } from "react-icons/fa";

const Videos = () => {
  const [isLink, setIsLink] = useState(
    "https://www.youtube.com/embed/J6OrifTnil0"
  );
  const [title, setTitle] = useState(
    "https://www.youtube.com/embed/J6OrifTnil0"
  );

  const handleClickVideos = ( title:any , href: any) => {
    setTitle(title)
    setIsLink(href)
  };
  return (
    <Flex flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
      <HeaderIntroduce value={"video"} />
      <Flex w={["100%","100%","100%","1250px"]} mt={5}>
        <Flex bg={"#fff"} p={"20px"} borderRadius={"20px"} w={"100%"} flexDir={["column-reverse","column","row","row"]} >
          <Flex w={["100%","100%","30%","30%"]} flexDir={"column"}>
            <Flex
              justifyContent={"space-between"}
              p={"10px 10px"}
              borderBottom={"1px solid #e4e4e4"}
            >
              <Text color={"#000"} fontWeight={700}>
                Video nổi bật
              </Text>
              <Text fontSize={"14px"}>5 Videos</Text>
            </Flex>
            <Flex flexDir={"column"} overflowY={"scroll"} maxH={["300px","500px","300px","400px"]}>
              {videoDummy.map((item, i) => (
                <Flex
                  key={i}
                  mb={3}
                  p={"0 10px"}
                  h={"55px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  onClick={() => handleClickVideos(item.title, item.href)}
                  _hover={{ bg: "#d5d8dc", cursor: "pointer" }}
                >
                  <Flex pos={"relative"}>
                    <Flex pos={"absolute"} top={"35%"} left={"45%"} >
                      <FaRegPlayCircle color={"#fff"} />
                    </Flex>
                    <Image
                      w={"100px"}
                      h={"42px"}
                      objectFit={"cover"}
                      src={item.img}
                      alt={item.title}
                    />
                  </Flex>
                  <Tooltip label={item.title} placement="auto">
                    <Text
                      w={"250px"}
                      fontSize={"12px"}
                      overflow={"hidden"}
                      m={"0px 10px"}
                      noOfLines={1}
                    >
                      {item.title}
                    </Text>
                  </Tooltip>
                  <Text fontSize={"12px"}>{item.time}</Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
          <Flex w={["100%","100%","70%","70%"]} ml={[0,0,3,3]}>
            <AspectRatio w={["100%","100%","100%","100%"]} h={["200px","200px","350px","450px"]} ratio={1}>
              <iframe title={title} src={isLink} allowFullScreen/>
            </AspectRatio>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Videos;

const videoDummy = [
  {
    img: "/images/video1.jpg",
    title:
      "TẬP 98: TẬN DỤNG ÁNH SÁNG TỪ THIÊN NHIÊN - KTS BÙI TRƯỜNG AN - PS 30/01/2021",
    time: "12:44",
    href: "https://www.youtube.com/embed/J6OrifTnil0",
  },
  {
    img: "/images/video2.jpg",
    title:
      "Ngôi nhà thoáng rộng nhờ khoảng thông tầng giữa phòng khách cùng hệ vách kính lớn",
    time: "2:58",
    href: "https://www.youtube.com/embed/U-Ta_i3CRgM",
  },
  {
    img: "/images/video3.jpg",
    title: "QUY TRÌNH BẢO VỆ PHƯƠNG ÁN KTS BISCONS",
    time: "3:15",
    href: "https://www.youtube.com/embed/a1_w478lo80",
  },
  {
    img: "/images/video4.jpg",
    title:
      "CÙNG KHUI HỘP HỒ SƠ THIẾT KẾ CỦA BISCONS: CHIẾC HỘP ĐỰNG GIẤY TRỊ GIÁ 190 TRIỆU!!",
    time: "7:39",
    href: "https://www.youtube.com/embed/jRM83Rbc070",
  },
  {
    img: "/images/video5.jpg",
    title: "Chiêm Ngưỡng Biệt Thự 150 M2 Nhà Chị Lựu - Hải Phòng",
    time: "3:05",
    href: "https://www.youtube.com/embed/K7ZgG7_MGag",
  },
  {
    img: "/images/video1.jpg",
    title:
      "TẬP 98: TẬN DỤNG ÁNH SÁNG TỪ THIÊN NHIÊN - KTS BÙI TRƯỜNG AN - PS 30/01/2021",
    time: "12:44",
    href: "https://www.youtube.com/embed/J6OrifTnil0",
  },
  {
    img: "/images/video2.jpg",
    title:
      "Ngôi nhà thoáng rộng nhờ khoảng thông tầng giữa phòng khách cùng hệ vách kính lớn",
    time: "2:58",
    href: "https://www.youtube.com/embed/U-Ta_i3CRgM",
  },
  {
    img: "/images/video3.jpg",
    title: "QUY TRÌNH BẢO VỆ PHƯƠNG ÁN KTS BISCONS",
    time: "3:15",
    href: "https://www.youtube.com/embed/a1_w478lo80",
  },
  {
    img: "/images/video4.jpg",
    title:
      "CÙNG KHUI HỘP HỒ SƠ THIẾT KẾ CỦA BISCONS: CHIẾC HỘP ĐỰNG GIẤY TRỊ GIÁ 190 TRIỆU!!",
    time: "7:39",
    href: "https://www.youtube.com/embed/jRM83Rbc070",
  },
  {
    img: "/images/video5.jpg",
    title: "Chiêm Ngưỡng Biệt Thự 150 M2 Nhà Chị Lựu - Hải Phòng",
    time: "3:05",
    href: "https://www.youtube.com/embed/K7ZgG7_MGag",
  },
];
