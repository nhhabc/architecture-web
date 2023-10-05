import { Box, Container, Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import detail1 from "../../public/images/detail1.jpg";
import detail2 from "../../public/images/detail2.jpg";
import detail3 from "../../public/images/detail3.jpg";
import detail4 from "../../public/images/detail4.jpg";
import detail5 from "../../public/images/detail5.jpg";
import detail6 from "../../public/images/detail6.jpg";
import detail7 from "../../public/images/detail7.jpg";
import detail8 from "../../public/images/detail8.jpg";
import detail9 from "../../public/images/detail9.jpg";
import detail10 from "../../public/images/detail10.jpg";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const settings = {
  dots: false,
  infinity:true,
  arrows: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const settingsSelect = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: false,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        dots: false,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        slidesToShow: 2,
      },
    },
  ],
};

const SliderDetail = () => {
  const [nav1, setNav1] = useState<any>();
  const [nav2, setNav2] = useState<any>();
  return (
    <Container maxW={"1250px"} mt={"100px"}>
      <Box className="slider-nav" pos={"relative"}>
        <Slider
          {...settings}
          ref={(slider1) => setNav1(slider1)}
          asNavFor={nav2}
          nextArrow={<Box><MdKeyboardArrowLeft /></Box>}
          prevArrow={<Box><MdKeyboardArrowRight /></Box>}
        >
          {imgDummy.map((item: any, i: any) => (
            <Box key={i}>
              <Box>
                <Image
                  w={"100%"}
                  h={"617px"}
                  src={item.img}
                  alt="gift"
                  objectFit={"cover"}
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
      <Box className="slider-for">
        <Slider
          {...settingsSelect}
          ref={(slider2) => setNav2(slider2)}
          asNavFor={nav1}
        >
          {imgDummy2.map((item: any, i: any) => (
            <Box key={i} p={"0 5px"}>
              <Box>
                <Image
                  w={"100%"}
                  h={"122px"}
                  src={item.img}
                  alt="gift"
                  objectFit={"cover"}
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default SliderDetail;

const imgDummy = [
  {
    img: detail1.src,
  },
  {
    img: detail2.src,
  },
  {
    img: detail3.src,
  },
  {
    img: detail4.src,
  },
  {
    img: detail5.src,
  },
  {
    img: detail6.src,
  },
  {
    img: detail7.src,
  },
  {
    img: detail8.src,
  },
  {
    img: detail9.src,
  },
  {
    img: detail10.src,
  },
];
const imgDummy2 = [
  {
    img: detail1.src,
  },
  {
    img: detail2.src,
  },
  {
    img: detail3.src,
  },
  {
    img: detail4.src,
  },
  {
    img: detail5.src,
  },
  {
    img: detail6.src,
  },
  {
    img: detail7.src,
  },
  {
    img: detail8.src,
  },
  {
    img: detail9.src,
  },
  {
    img: detail10.src,
  },
];
