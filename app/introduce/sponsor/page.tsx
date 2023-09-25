"use client";
import HeaderIntroduce from "@/components/Introduce/HeaderIntroduce";
import { Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import tinhhoa from "../../../public/images/TINHHOA_BISCONS_Gold1.png";
import sponsor1 from "../../../public/images/sponsor1.jpg";
import sponsor2 from "../../../public/images/sponsor2.jpg";
import sponsor3 from "../../../public/images/sponsor3.jpg";
import sponsor4 from "../../../public/images/sponsor4.jpg";
import sponsor5 from "../../../public/images/sponsor5.jpg";
import sponsor6 from "../../../public/images/sponsor6.jpg";
import sponsor7 from "../../../public/images/sponsor7.jpg";
import sponsor8 from "../../../public/images/villa8.jpg";
import introduce10 from "../../../public/images/introduce10.jpg";
import bwilla from "../../../public/images/bwilla.jpg";

const Sponsor = () => {
  return (
    <Flex flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
      <HeaderIntroduce value={"ceo - bùi trường an"} />
      <Flex flexDir={"column"} maxW={"1250px"} p={["0 10px","0 10px","0 10px","0 0px"]}>
        <Text fontSize={"26px"} color={"#273A5E"} textAlign={"center"} fontWeight={700} mt={3}>
          KTS BÙI TRƯỜNG AN - {`"NGƯỜI ĐỠ ĐẦU"`} CHO CÁC DỰ ÁN CỦA TINH HOA
          BISCONS
        </Text>
        <Text mt={5} textAlign={"center"}>
          Một đặc thù nổi bật của dịch vụ thiết kế cao cấp đến từ Tinh Hoa
          Biscons, là các dự án đều cho một cái tên đứng đầu: Tổng giám đốc,
          Kiến Trúc Sư – Bùi Trường An. Anh là người đặt nền móng cho thương
          hiệu Tinh Hoa Biscons, với một tiêu chuẩn sản phẩm và dịch vụ cao cấp,
          cũng là “người đỡ đầu” làm nên những dự án tên tuổi của Tinh Hoa
          Biscons, đồng hành sao sát cùng các dự án của thương hiệu này cho đến
          bây giờ.
        </Text>

        <Flex className="biscons_ani" justifyContent={"center"} mt={5}>
          <Image src={tinhhoa.src} alt="gift" />
        </Flex>

        <Flex flexDir={"column"} mt={3}>
          <Text sx={titleStyle}>
            Người doanh nhân tự nhận không thể thoát khỏi cái bóng Kiến Trúc Sư
          </Text>
          <Text mt={5} sx={tstyle}>
            Nghề và nghiệp
          </Text>
          <Text>
            Sinh ra trong một gia đình có bố làm nhà thầu xây dựng hơn 20 năm,
            từ nhỏ An sớm tiếp xúc với nghề, ra công trường cùng bố và thích vui
            chơi bên những đống cát hơn là trên những sân chơi cho trẻ em.
          </Text>
          <Text mt={5}>
            Cùng với đam mê và năng khiếu hội họa bẩm sinh, cậu bé xứ Nghệ dấn
            thân vào con đường kiến trúc như một mối lương duyên và sứ mệnh của
            cuộc đời. Trong quá trình theo học trường ĐH Kiến Trúc Hà Nội, anh
            sớm khẳng định cái duyên với nghề, khi theo các thầy, các đàn anh
            trong trường, trong ngành để hành nghề từ khi còn là cậu sinh viên
            năm 2. Công trình đầu tiên mà anh được giao trọng trách chủ trì quản
            lý dự án, một tòa Service Arpartment 7 tầng, ngay từ thời điểm An
            vừa kết thúc năm đại học thứ 3.
          </Text>
          <Text mt={5}>
            Năm 2017, với một hoài bão “làm kiến trúc một cách chuyên nghiệp và
            khẳng định có thể tạo dựng một công ty giàu mạnh từ nghề”, anh thành
            lập Kiến Trúc Biscons, đồng thời là trung tâm đào tạo phần mềm
            chuyên ngành Biscons RTC.
          </Text>
          <Image mt={5} src={sponsor1.src} alt="gift" />
          <Text textAlign={"center"} fontSize={"15px"} mt={2}>
            CEO. KTS Bùi Trường An - Trong một buổi chia sẻ với các KTS trẻ
          </Text>

          <Flex flexDir={["column", "column", "column", "row"]} mt={5}>
            <Flex w={["100%", "100%", "100%", "50%"]} flexDir={"column"} mr={5}>
              <Text sx={tstyle}>“Một món nghiện khó bỏ”</Text>
              <Text>
                Với một chiến lược kinh doanh và khả năng vận hành quản trị vượt
                trội, Biscons phát triển rất nhanh ngay từ những năm đầu. Công
                việc chiến lược, điều hành ngày càng nhiều với những đòi hỏi
                ngày càng cao, khiến thời gian của An trở nên bận rộn. Với mô
                hình và hệ thống đã được hình thành khá ổn định, cùng với một
                đội ngũ KTS giỏi chuyên môn, giàu nhiệt huyết đồng hành, thực tế
                việc An phải tham dự vào công tác chuyên môn đã không còn quá
                cần thiết. Đã có những lúc, anh suy nghĩ có nên gác lại đam mê
                làm nghề của mình, để lại hoàn toàn sân chơi kiến trúc cho các
                anh em, để tập trung vào việc quản trị, thúc đẩy tăng trưởng cho
                công ty đi xa hơn và nhanh hơn.
              </Text>
              <Text mt={8}>
                Thế nhưng, nghề chọn người chứ đôi khi không phải người chọn
                nghề. Người doanh nhân “ham vui” vẫn không thể ngừng trăn trở và
                suy tư cho những dự án của công ty. Mỗi khi có một đề bài thiết
                kế thú vị, đủ hấp dẫn, dù là to hay nhỏ, anh thường “xin” phòng
                thiết kế để được lên phương án concept cùng, nghiên cứu, ngẫm
                nghĩ đến mức nhiều lúc anh tâm sự còn xao nhãng cả công việc của
                một giám đốc điều hành. Và đa phần các dự án đó, trong các cuộc
                bình bầu đánh giá từ ban chuyên môn, phương án của ông “doanh
                nhân kiến trúc” thường là bản ý tưởng được chọn với tính đột phá
                và yếu tố chuyên môn chuyên sâu.{" "}
              </Text>
              <Text mt={5}>
                Với An, kiến trúc đã trở thành “thú chơi và món nghiện khó bỏ”.
                Anh tâm sự ước mơ giản đơn: “sau này, khi công ty đã phát triển
                tầm cỡ và đạt được sự bền vững ổn định, anh sẽ rút khỏi vị trí
                tổng giám đốc, nộp CV vào phòng thiết kế để được làm một kiến
                trúc sư bình thường, được sống với nghề, sống với đam mê”
              </Text>
            </Flex>
            <Flex className="animate-slow" w={["100%", "100%", "100%", "50%"]}>
              <Image src={introduce10.src} alt="gift" />
            </Flex>
          </Flex>

          <Flex flexDir={"column"} mt={5}>
            <Text sx={titleStyle}>Gây dựng Tinh Hoa Biscons</Text>
            <Image mt={5} src={bwilla.src} alt="gift" />
            <Text textAlign={"center"} fontSize={"15px"} mt={2}>
              Demo ảnh bìa Album một dự án của Tinh Hoa Biscons tại Cao Bằng
            </Text>

            <Text mt={5} sx={tstyle}>
              Quan điểm “chọn khách mà chơi – chọn nơi mà vẽ”
            </Text>
            <Text>
              Xã hội ngày càng phát triển, thu nhập, nhận thức và nhu cầu về
              kiến trúc ngày càng cao. Nhà giờ đây không chỉ là nơi để ở, để trở
              về, mà với một bộ phận khách hàng, đã được nâng tầm lên thành “tác
              phẩm kiến trúc”. Các tiêu chí đi kèm cao và đòi hỏi về tính cá
              nhân hóa cũng trở nên cấp thiết. Nắm được xu thế đó, CEO Trường
              An, cùng đội ngũ KTS hàng đầu của công ty, thành lập thương hiệu
              Tinh Hoa Biscons – phục vụ cho các dự án cao cấp của Biscons, đồng
              thời thỏa mãn đam mê một cách “thú tính” của anh em KTS đã thề
              “sống chết với nghề và chỉ chấp nhận giàu lên bằng nghề”
            </Text>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              mt={5}
              flexDir={"column"}
            >
              <Image w={"300px"} h={"225px"} src={tinhhoa.src} alt="gift" />
              <Text textAlign={"center"} fontSize={"15px"} mt={2}>
                Logo của thương hiệu lấy cảm hứng từ những viên ngọc thô - tinh
                túy và chọn lọc
              </Text>
              <Text mt={5}>
                Để đáp ứng được tiêu chí tạo ra một “tác phẩm kiến trúc” đúng
                nghĩa, ngoài việc khẩn trương xây dựng bộ tiêu chí chất lượng,
                quy trình thiết kế riêng và một hệ thống dịch vụ chuẩn mực, An
                cũng chủ trương nhận dự án một cách chọn lọc. Quan điểm của anh,
                một tác phẩm chỉ có thể được tạo nên khi cả 2 bên, chủ đầu tư và
                đơn vị nhà thầu thiết kế thi công có sự đồng điệu cao. Các dự án
                là các công trình biệt thự hiện đại, đồng nghĩa với việc đội ngũ
                không nhận các dự án có quy mô nhỏ, và các phong cách thiết kế
                cổ điển, tân cổ điển, mái thái…Các dự án nhỏ tuy cũng đáng trân
                trọng, nhưng thực sự khó có đủ đất diễn cho KTS. Các dự án lệch
                lạc về phong cách thì khó có thể tìm được tiếng nói chung giữa
                chủ đầu tư và người thiết kế. Ngoài ra, các tiêu chí như tổng
                mức đầu tư, chiều sâu của đề bài thiết kế, sự văn minh và tôn
                trọng cần thiết dành cho nhau trong quá trình làm việc,…cũng là
                các tiêu chí An cùng các cộng sự quan tâm.
              </Text>
            </Flex>
            <Flex flexDir={["column", "column", "column", "row"]} mt={7}>
              <Flex
                w={["100%", "100%", "100%", "50%"]}
                flexDir={"column"}
                mr={5}
              >
                <Text sx={tstyle}>
                  Đồng hành cùng từng dự án của Tinh Hoa Biscons
                </Text>
                <Text>
                  Để đảm bảo các dự án được hoàn thành với chất lượng cao nhất,
                  mang lại sự đột phá trong thiết kế và tính cá nhân hóa mạnh
                  mẽ. Vị giám đốc điều hành theo sát tiến trình thiết kế của tất
                  cả các dự án Tinh Hoa Biscons, từ những bước nhỏ nhất như tiếp
                  cận dự án, phân tích đề bài, cho đến đầu ra của các bản vẽ kỹ
                  thuật. Anh là người trực tiếp lên ý tưởng cho các dự án trọng
                  điểm của thương hiệu, cũng như là người kiểm soát, phê duyệt
                  từng giai đoạn của việc lên ý tưởng.
                </Text>
              </Flex>
              <Flex w={["100%", "100%", "100%", "50%"]} flexDir={"column"}>
                <Image src={sponsor2.src} alt="gift" />
                <Text textAlign={"center"} fontSize={"15px"} mt={2}>
                  Một buổi họp tiền dự án của Tinh Hoa Biscons. Trong các buổi
                  này, nhóm thiết kế sẽ trao đổi về định hướng tiếp cận dự án
                </Text>
              </Flex>
            </Flex>
            <Text mt={5}>
              Có sự sao sát, kiểm soát chất lượng, truyền cảm hứng và những ý
              tưởng vượt trội từ người đứng đầu, các dự án của Tinh Hoa Biscons
              mang một màu sắc rất riêng, định hình được rõ nét bảng sắc thiết
              kế. Các bản thiết kế mang nặng tính độc bản và gần như không thể
              thấy bóng dáng của những thiết kế đó lặp lại ở bất kỳ công trình
              nào khác.
            </Text>
            <Flex flexDir={"column"} mt={5}>
              <Text textAlign={"center"} sx={tstyle}>
                Một số công trình điểm nhấn của KTS Trường An cùng Tinh Hoa
                Biscons
              </Text>
              <UnorderedList>
                <ListItem mt={5} sx={headTitle}>Biệt Thự Hiện Đại Age Villa</ListItem>
              </UnorderedList>
              <Flex mt={8} flexDir={"column"}>
                <Image src={sponsor3.src} alt="gift" />
                <Text textAlign={"center"} fontSize={"15px"} mt={2}>
                  AGE VILLA là công trình khoác lên mình một màu sắc thiết kế
                  riêng, bằng một cấu trúc không gian và cách tạo hình đầy ngẫu
                  hứng, mạnh mẽ và dứt khoát.
                </Text>
              </Flex>
              <Flex mt={5}>
                <Flex w={["100%", "100%", "100%", "50%"]} mr={5}>
                  <Image src={sponsor4.src} alt="gift" />
                </Flex>
                <Flex w={["100%", "100%", "100%", "50%"]}>
                  <Image src={sponsor5.src} alt="gift" />
                </Flex>
              </Flex>
              <UnorderedList>
                <ListItem mt={5} sx={headTitle}>Biệt Thự Nghỉ Dưỡng Ha Villa</ListItem>
              </UnorderedList>
              <Flex mt={8} flexDir={"column"}>
                <Image src={sponsor6.src} alt="gift" />
                <Text textAlign={"center"} fontSize={"15px"} mt={2}>
                HA VILLA - Giấc Mơ Dang Dở Để Lại Bên Bờ Sông Hồng
                </Text>
              </Flex>
              <UnorderedList>
                <ListItem mt={5} sx={headTitle}>BW Villa</ListItem>
              </UnorderedList>
              <Flex mt={8} flexDir={"column"}>
                <Image src={sponsor7.src} alt="gift" />
                <Text textAlign={"center"} fontSize={"15px"} mt={2}>
                Dự án được đặt trong bối cảnh núi đá hùng vĩ và trầm mặc của tỉnh Cao Bằng. Để tìm được sự hòa hợp với cảnh quan xung quanh, đội ngũ thiết kế sử dụng tone màu lạnh, theo khuynh hướng Black & White, với các mảng đá tự nhiên lớn làm điểm nhấn.
                </Text>
              </Flex>
              <UnorderedList>
                <ListItem mt={5} sx={headTitle}>THÁI SƠN VILLA</ListItem>
              </UnorderedList>
              <Flex mt={8} flexDir={"column"}>
                <Image src={sponsor8.src} alt="gift" />
                <Text textAlign={"center"} fontSize={"15px"} mt={2}>
                Một căn nhà mang màu sắc của sự lãn mạn và nhẹ nhàng như tính cách của chàng chủ nhà trẻ tuổi.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sponsor;
const titleStyle = {
  fontSize: "22px",
  color: "#223B5F",
  fontWeight: 700,
};
const tstyle = {
  color: "#3a3a3a",
  fontSize: "14pt",
  fontWeight: 600,
};
const headTitle = {
  color: "#000",
  fontSize: ["12pt","12pt","14pt","14pt"],
  fontWeight: 700,
}
