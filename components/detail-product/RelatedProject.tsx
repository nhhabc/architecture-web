import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import villaImg1 from "../../public/images/villa1.jpg";
import villaImg2 from "../../public/images/villa2.jpg";
import villaImg3 from "../../public/images/villa3.jpg";
import villaImg4 from "../../public/images/villa4.jpg";
import villaImg5 from "../../public/images/villa5.jpg";
import villaImg6 from "../../public/images/villa6.jpg";
import villaImg7 from "../../public/images/villa7.jpg";
import villaImg8 from "../../public/images/villa8.jpg";
import villaImg9 from "../../public/images/villa9.jpg";
import ProjectItem from "@/constants/ProjectItem";
import btn_up from "../../public/images/blue-button-up.svg";

const settings = {
  dots: true,
  infinity: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 3000,
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

const RelatedProject = () => {
  return (
    <Box>
      <Text
        textTransform={"uppercase"}
        fontSize={"40px"}
        color={"#000"}
        fontWeight={700}
        ml={5}
      >
        Dự án liên quan
      </Text>
      <Box maxW={"100%"} pos={"relative"} className="introduce-slider">
        <Slider
          {...settings}
          nextArrow={
            <Image
              zIndex={2}
              boxSize={"50px"}
              transform={"rotate(90deg)"}
              pos={"absolute"}
              top={"340px"}
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
              top={"340px"}
              left={"10px"}
              src={btn_up.src}
              alt="gift"
            />
          }
        >
          {productListDummy.map((product, i) => (
            <ProjectItem
              key={i}
              img={product.img}
              location={product.location}
              name={product.name}
              type={product.type}
            />
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default RelatedProject;

export const productListDummy = [
  {
    name: "Cascade Villa",
    type: "Biệt thự",
    location: "Bàu Bàng, Bình Dương",
    img: villaImg1.src,
  },
  {
    name: "X Villa",
    type: "Biệt thự",
    location: "Một khu đất nào đó đáp ứng đủ tiêu chuẩn tại Huế hoặc Đà Nẵng",
    img: villaImg2.src,
  },
  {
    name: "LUONG SON VILLA",
    type: "Biệt thự",
    location: "Lương Sơn, Hòa Bình",
    img: villaImg3.src,
  },
  {
    name: "REBECCA VILLA",
    type: "Biệt thự",
    location: "Đà Lạt, Lâm Đồng",
    img: villaImg4.src,
  },
  {
    name: "Nhà Hướng Nội",
    type: "Biệt thự",
    location: "Tân Phú, Sài Gòn, Việt Nam",
    img: villaImg5.src,
  },
  {
    name: "T.E.O Villa",
    type: "Biệt thự",
    location: "Thủ Dầu Một - Bình Dương",
    img: villaImg6.src,
  },
  {
    name: "HA VILLA",
    type: "Biệt thự",
    location: "Long Biên, Hà Nội",
    img: villaImg7.src,
  },
  {
    name: "Thai Son Villa",
    type: "Biệt thự",
    location: "Dương Kinh, Hải Phòng",
    img: villaImg8.src,
  },
  {
    name: "BWILLA – Lời Thì Thầm Của Đá",
    type: "Biệt thự",
    location: "Cao Bằng",
    img: villaImg9.src,
  },
];
