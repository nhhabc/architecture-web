import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Slider from 'react-slick'
import btn_up from "../../public/images/blue-button-up.svg";


const CoreValue = () => {
  return (
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

    <Box
      bg={"#fff"}
      w={["356px", "100%", "653px", "653px"]}
      h={["100%", "100%", "170px", "170px"]}
      pos={"relative"}
    >
      <Slider
        dots={false}
        speed={500}
        infinite={true}
        slidesToScroll={1}
        slidesToShow={1}
        nextArrow={
          <Image
            boxSize={"50px"}
            transform={"rotate(90deg)"}
            pos={"absolute"}
            top={["250px", "250px", "180px", "180px"]}
            left={14}
            src={btn_up.src}
            alt="gift"
          />
        }
        prevArrow={
          <Image
            boxSize={"50px"}
            transform={"rotate(-90deg)"}
            pos={"absolute"}
            top={["250px", "250px", "180px", "180px"]}
            left={0}
            src={btn_up.src}
            alt="gift"
          />
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
  )
}

export default CoreValue
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