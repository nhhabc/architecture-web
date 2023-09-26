"use-client";
import Header1 from "@/constants/Header1";
import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import infomation_logo from "../../../public/images/infomation_logo.png";

const InternalOperations = () => {
  return (
    <Flex flexDir={"column"}>
      <Header1
        bgImg="https://kientrucbiscons.vn/wp-content/uploads/2022/02/pc-1-min-20211103082154-e1645985934118.jpg"
        title="Hoạt động nội bộ"
      />
      <Flex padding={"40px 80px"} justifyContent={"center"}>
        <Flex alignItems={"center"}>
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
            
          >
            Hoạt Động Nội Bộ
          </Text>
        </Flex>


      </Flex>
    </Flex>
  );
};

export default InternalOperations;

