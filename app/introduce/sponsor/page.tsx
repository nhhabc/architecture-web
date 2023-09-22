"use client"
import HeaderIntroduce from "@/components/Introduce/HeaderIntroduce";
import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import tinhhoa from "../../../public/images/TINHHOA_BISCONS_Gold1.png"


const Sponsor = () => {
  return (
    <Flex flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
      <HeaderIntroduce value={"ceo - bùi trường an"} />
      <Flex flexDir={"column"} maxW={"1250px"}>
        <Text fontSize={"26px"} color={"#273A5E"} fontWeight={700} mt={3}>
          KTS BÙI TRƯỜNG AN - {`"NGƯỜI ĐỠ ĐẦU"`} CHO CÁC DỰ ÁN CỦA TINH HOA
          BISCONS
        </Text>
        <Text mt={5} textAlign={"center"}>Một đặc thù nổi bật của dịch vụ thiết kế cao cấp đến từ Tinh Hoa Biscons, là các dự án đều cho một cái tên đứng đầu: Tổng giám đốc, Kiến Trúc Sư – Bùi Trường An. Anh là người đặt nền móng cho thương hiệu Tinh Hoa Biscons, với một tiêu chuẩn sản phẩm và dịch vụ cao cấp, cũng là “người đỡ đầu” làm nên những dự án tên tuổi của Tinh Hoa Biscons, đồng hành sao sát cùng các dự án của thương hiệu này cho đến bây giờ.</Text>

        <Flex className="biscons_ani" justifyContent={"center"} mt={5}>
          <Image src={tinhhoa.src} alt="gift"/>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sponsor;
