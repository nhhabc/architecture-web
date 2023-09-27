"use client";
import { Box, Button, Flex, Image, Input, Select, Text, Textarea } from '@chakra-ui/react';
import locateIco from "../../public/images/locationIco.png";
import fbIco from "../../public/images/facebook.svg";
import phoneIco from "../../public/images/phone_ico.png";
import mailIco from "../../public/images/mail_ico.png";
import instaIco from "../../public/images/instaIco.svg";
import pIco from "../../public/images/pIco.svg";
import uTubeIco from "../../public/images/utubeIco.svg";
import React from 'react'

const Contact = () => {
  return (
    <Box>
      <Box bgImage={"https://kientrucbiscons.vn/wp-content/uploads/2022/02/pc-1-min-20211103082154-e1645985934118.jpg"}
        bgPos={"center center"} bgRepeat={"no-repeat"} bgSize={'cover'} pos={'relative'} minH={"680px"} >
        <Box bgColor={"#000"} opacity={"0.5"} pos={"absolute"} h={"100%"} w={"100%"} top={0} left={0}/>
      </Box>
      <Box mt={"-350px"} px={"60px"}>
        <Flex p={"10px"} alignItems={'center'} flexDir={'column'}>
          <Box sx={text} fontSize={"40px"} fontWeight={600} zIndex={1}
            mb={"20px"}>
            <h1>Liên hệ với biscons</h1>
          </Box>
          <Text sx={text} zIndex={1} mb={"20px"} fontSize={16} fontWeight={400}>TRẢI NGHIỆM GIẢI PHÁP SỐ 1 VIỆT NAM VỀ THIẾT KẾ VÀ XÂY DỰNG NHÀ</Text>
          <Flex mt={"40px"} bgColor={"global.primary"} padding={"60px 80px 20px 80px"} zIndex={1} w={"100%"}>
            <Flex w={"100%"}>
              <Flex w={"50%"} p={"10px"} flexDir={'column'}>
                <Text sx={text} fontSize={30} fontWeight={700} mb={"20px"}>BISCONS</Text>
                <Text sx={text} mb={"20px"}>CÔNG TY KIẾN TRÚC VÀ NỘI THẤT HÀNG ĐẦU VIỆT NAM</Text>
                <Flex>
                  <Box sx={contactContainer}>
                    <Image alt='location' src={locateIco.src} w={"15%"} mb={"15px"}/>
                    <Text sx={text} mb={"5px"} fontWeight={700} fontSize={"18px"}>ĐỊA CHỈ</Text>
                    <Text sx={contactText}>
                      <strong>Miền Bắc</strong>: Toà B1, Roman Plaza, P. Tố Hữu, Đai Mễ, Nam Từ Liêm, Hà Nội
                      <br/>
                      <strong>Miền Nam</strong>: 85 Cách Mạng Tháng Tám, Tòa Twins Tower, Phường Bến Thành, Quận 1, TP. HCM
                      <br/>
                      <strong>Miền Trung</strong>: 62 Xuân Thủy, Cẩm Lệ, Đà Nẵng
                    </Text>
                  </Box>
                  <Box sx={contactContainer}> 
                    <Image alt='fb' src={fbIco.src} w={"40px"} mb={"15px"}/>
                    <Text sx={text} mb={"5px"} fontWeight={700} fontSize={"18px"}>FANPAGE</Text>
                    <Text sx={contactText}>Biscons Eco - Kiến Trúc Xanh</Text>
                  </Box>
                </Flex>
                <Flex>
                  <Box sx={contactContainer}>
                    <Image src={mailIco.src} alt='mail-ico' w={"20%"} mb={"15px"}/>
                    <Text sx={text} mb={"5px"} fontWeight={700} fontSize={"18px"}>EMAIL</Text>
                    <Text sx={contactText}>biscons.jsc@gmail.com</Text>
                  </Box>
                  <Box sx={contactContainer}>
                    <Image src={phoneIco.src} alt='mail-ico' w={"20%"} mb={"15px"}/>
                    <Text sx={text} mb={"5px"} fontWeight={700} fontSize={"18px"}>HOTLINE</Text>
                    <Text sx={contactText}>Hotline Hà Nội: 0847466868</Text>
                  </Box>
                </Flex>
                <Box my={"20px"} sx={text} fontSize={"30px"} fontWeight={700}>
                  THEO DÕI BISCONS
                </Box>
                <Text color={'white'} mb={"20px"}>Cùng cập nhật những thiết kế kiến trúc mới nhất, xu hướng và phong cách sống đẳng cấp</Text>
                <Flex gap={"20px"}>
                  <Image alt='fbIco' src={fbIco.src} boxSize={"30px"}/>
                  <Image alt='instaIco' src={instaIco.src} boxSize={"30px"}/>
                  <Image alt='pIco' src={pIco.src} boxSize={"30px"}/>
                  <Image alt='youtube-ico' src={uTubeIco.src} boxSize={"30px"}/>
                </Flex>
              </Flex>
              <Flex w={"50%"} p={"10px"} flexDir={'column'} color={'white'}>
                <Text mb={"20px"} fontSize={"30px"} fontWeight={700}>ĐẶT LỊCH TƯ VẤN</Text>
                <Text mb={"20px"}>ĐĂNG KÝ THÔNG TIN NGAY ĐỂ ĐƯỢC TƯ VẤN SỚM NHẤT BỞI ĐỘI NGŨ KIẾN TRÚC SƯ CỦA BISCONS</Text>
                <form>
                  <Box mb={"12px"}>
                    <Text>Họ và tên</Text>
                    <Input variant={"default"} sx={input}/>
                  </Box>
                  <Box mb={"12px"}>
                    <Text>Số điện thoại</Text>
                    <Input variant={"default"} sx={input}/>
                  </Box>
                  <Box mb={"12px"}>
                    <Text>Bạn đang quan tâm</Text>
                    <Select variant={"default"} sx={input} placeholder='----'>
                      <option value='option1'>Thiết kế kiến trúc</option>
                      <option value='option2'>Thiết kế nội thất</option>
                      <option value='option3'>Xây dựng trọn gói</option>
                      <option value='option4'>Khác</option>
                    </Select>
                  </Box>
                  <Box mb={"12px"}>
                    <Text>Mức đầu tư</Text>
                    <Select variant={"default"} sx={input} placeholder='----'>
                      <option value='option1'>Dưới 1.5 tỷ</option>
                      <option value='option2'>Từ 1.5 - 3 tỷ</option>
                      <option value='option2'>Từ 3 - 6 tỷ</option>
                      <option value='option2'>Từ 6 - 10 tỷ</option>
                      <option value='option3'>Trên 10 tỷ</option>
                    </Select>
                  </Box>
                  <Box mb={"12px"}>
                    <Text>Yêu cầu tư vấn</Text>
                    <Textarea variant={"default"}/>
                  </Box>
                </form>
                <Button variant={"default-revert"} mt={"20px"} mb={"12px"} alignSelf={'center'}>Liên hệ ngay</Button>
              </Flex>
            </Flex>
          </Flex>
          
        </Flex>
      </Box>
      <Flex className='layout'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3237540706536!2d105.7801477114787!3d21.019727988006697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab25a58d0e57%3A0xcf9c66a2a4531e66!2sVinhomes%20Skylake%20S3!5e0!3m2!1svi!2suk!4v1695786881902!5m2!1svi!2suk" width="100%" height="450" loading="lazy"></iframe>
      </Flex>
    </Box>
  )
}

export default Contact

const text = {
  textTransform:'uppercase',
  lineHeight:"1.3em",
  color:"white",
}

const contactText = {
  color:'white',
  fontSize:"16px",
  lineHeight:"1.5em",
}

const contactContainer = {
  p: "40px 60px 20px 0",
  w: "50%",
}

const input = {
  color: "black",
  borderRadius: "3px",
  fontSize: "14px"
}