"use-client"
import HeaderIntroduce from '@/components/Introduce/HeaderIntroduce'
import { AspectRatio, Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import human1 from "../../../public/images/human1.png"
import human2 from "../../../public/images/human2.jpg"
import human3 from "../../../public/images/human3.png"
import human4 from "../../../public/images/human4.jpg"
import human5 from "../../../public/images/human5.jpg"
import human6 from "../../../public/images/human6.jpg"
import human7 from "../../../public/images/human7.png"
import human8 from "../../../public/images/human8.png"
import human9 from "../../../public/images/human9.png"

const Human = () => {
  return (
    <Flex flexDir={"column"}>
      <HeaderIntroduce value={"người biscons"} />
      <Flex flexDir={"column"} p={["40px 10px","40px 80px","40px 80px","40px 80px"]}>
        <Text textAlign={"center"} textTransform={"uppercase"} color={"global.primary"} fontSize={"29px"} fontWeight={800}>VĂN HÓA DOANH NGHIỆP TẠI BISCONS - NỀN TẢNG VỮNG CHẮC CHO SỰ SÁNG TẠO VÀ TỬ TẾ</Text>
        <Text mt={2} fontWeight={400}>Để có thể có được những sản phẩm chỉn chu và dịch vụ khách hàng chu đáo, tận tâm, đằng sau những hệ thống quy trình, quy định hay hệ thống quản lý tiêu chuẩn sản phẩm, thì nền tảng văn hóa doanh nghiệp đóng vai trò rất quan trọng trong việc định hình nên con người và sản phẩm. Biscons là một đơn vị nổi tiếng trong ngành về một văn hóa doanh nghiệp giàu bản sắc, có cá tính và là nơi làm việc của những con người tuyệt đối chính trực, tử tế.</Text>
        <AspectRatio maxW={["100%","100%","100%",'1230px']} maxH={["100%","100%","100%","692px"]} ratio={1} ml={["0px","0px","0px","250px"]} mt={10}>
          <iframe
            title='trainning văn hóa công ty của Biscons'
            src='https://www.youtube.com/embed/QhBnZ6NPOY0'
            allowFullScreen
          />
        </AspectRatio>
        <Text textAlign={"center"} fontSize={"15px"} mt={5}>Buổi Trainning văn hóa Doanh nghiệp</Text>
      </Flex>
      <Flex p={["40px 10px","40px 80px","40px 80px","40px 80px"]} flexDir={"column"}>
        <Text fontSize={"30px"} fontWeight={700} color={"global.primary"} mb={5}>Một môi trường làm việc giàu cá tính</Text>
        <Text color={"#3a3a3a"} fontSize={"25px"} fontWeight={700}>Làm hết mình sống hết mình</Text>
        <Text >Trong một môi trường đòi hỏi tính sáng tạo và khả năng chịu áp lực cao như mảng thiết kế, thi công. Việc có một môi trường sinh hoạt tinh thần, “ăn chơi” khởi sắc song hành cùng các khía cạnh hoạt động nghiệp vụ là chuyện rất quan trọng, giúp tái tạo năng lượng và nâng cao tinh thần sáng tạo, tinh thần đồng đội. Bạn có thể thấy văn phòng Biscons sáng đèn đến 11-12h đêm mà vẫn tràn ngập tiếng cười, có thể là những ngày anh em quyết liệt chạy tiến độ để dự án về đích đúng hẹn, cũng có thể chỉ là một vài anh em ở lại cụng vài lon bia, xem bóng đá hay ôm đàn hát nghêu ngao.</Text>
      </Flex>
      <Flex justifyContent={"center"} alignItems={"center"} w={"100%"} flexDir={"column"}>
        <Image src={human1.src} alt='gift' objectFit={"contain"} maxW={["100%","100%","100%","1280px"]} maxH={["100%","100%","100%","890px"]} />
        <Text textAlign={"center"} fontSize={"15px"} mt={5}>Không khí trong 1 buổi làm việc</Text>
        <Image mt={5} src={human2.src} alt='gift' objectFit={"contain"} maxW={["100%","100%","100%","1280px"]} maxH={["100%","100%","100%","890px"]} />
        <Text textAlign={"center"} fontSize={"15px"} mt={5}>Hoạt động khai xuân đầu năm trên khu gác bí mật của Biscons</Text>
      </Flex>
      <Flex p={["40px 10px","40px 80px","40px 80px","40px 80px"]} flexDir={"column"}>
        <Text color={"#3a3a3a"} fontSize={"25px"} fontWeight={700}>Tiên phong, không ngại khó khi gặp phải thách thức</Text>
        <Text>Người Biscons nổi tiếng là những người sáng tạo, luôn trong tâm thế chủ động và tiên phong. Không ngại cái mới, không ngại khó khăn và thách thức. Có thể xem đây cũng chính là nguyên nhân khiến cho Biscons liên tục phát triển và tăng trưởng một cách mạnh mẽ. Cải tiến, cập nhật sản phẩm, xu thế liên tục và thích ứng nhanh với mọi thay đổi của thị trường.</Text>
      </Flex>
      <Flex p={["40px 10px","40px 80px","40px 80px","40px 80px"]}>
        <Grid templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)"]} gap={8}>
        <Flex flexDir={"column"} justifyContent={"center"}>
          <Text>Câu khẩu hiệu “Think outside the box” xuất hiện xuyên suốt trong 5 văn phòng của Biscons từ ngày khởi nghiệp nói lên rất rõ tư duy sáng tạo và tư duy giải quyết vấn đề của người Biscons. Luôn nghĩ khác đi và nhìn nhận, giải quyết vấn đề một cách mới mẻ khi mọi thứ có vẻ đi vào bế tắc.</Text>
          <Text mt={5}>Khuynh hướng bài trí văn phòng, cho đến cách thức tổ chức quy trình, quy định và các hoạt động của công ty cũng thể hiện rất rõ tinh thần này. Các hoạt động được tổ chức với những hình thức mới lạ, đôi khi với người ngoài có thể coi là “ngược đời”. Nhưng tại Biscons, mọi thứ nếu “hiệu quả” và “vui” thì đều có thể!</Text>
        </Flex>
        <Flex>
          <Image src={human3.src} alt='gift' />
        </Flex>

        </Grid>
      </Flex>
      <Flex flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
          <Image maxW={["100%","100%","100%","1024px"]} maxH={["100%","100%","100%","768px"]} objectFit={"cover"} src={human4.src} alt='gift' />
          <Text textAlign={"center"} fontSize={"15px"} mt={5}>Buổi họp ban điều hành công bố kế hoạch nằm giữa hồ Đại Lải</Text>
          <Image mt={5} maxW={["100%","100%","100%","1024px"]} maxH={["100%","100%","100%","768px"]} objectFit={"cover"} src={human5.src} alt='gift' />
          <Text textAlign={"center"} fontSize={"15px"} mt={5}>Buổi Test kiến thức đầu ra của một số nhân sự phòng kinh doanh sau thời gian thử việc và hội nhập</Text>
      </Flex>

      <Flex p={["40px 10px","40px 80px","40px 80px","40px 80px"]} flexDir={"column"}>
        <Text fontSize={"30px"} fontWeight={700} color={"global.primary"} mb={5}>Sự tử tế - nền tảng cho mọi hoạt động chuyên môn và hoạt động kinh doanh</Text>
        <Text color={"#3a3a3a"} fontSize={"25px"} fontWeight={700}>Chính trực hoặc là ra đi trong một nốt nhạc!</Text>
        <Text>Một môi trường ngành nghề có thể đâu đó còn tồn tại nhiều tiêu cực như ngành xây dựng – nội thất, nơi mà đôi khi người ta còn quan điểm phải <span style={{fontWeight:700}}>“dẫm đạp lên nhau mà sống”</span>, thì chúng tôi vẫn duy trì một tập thể với quan điểm <span style={{fontWeight:700}}> “giữ gìn đạo đức và sự chính trực”</span> .</Text>
        <Text>Mỗi người Biscons đều tự xem mình là một người quân tử, luôn cư xử phóng khoáng, hào sảng và không đánh đổi đạo đức trong mọi tình huống.</Text>
        <AspectRatio maxW='100%' maxH={"980px"} p={"40px 80px"} ratio={1} mt={10}>
          <iframe
            title='trainning văn hóa công ty của Biscons'
            src='https://www.youtube.com/embed/QhBnZ6NPOY0'
            allowFullScreen
          />
        </AspectRatio>
        <Text mt={5}>Tại Biscons trước đây, khu vực canteen của phòng hành chính nhân sự tổ chức theo hình thức mua bán tự do. phòng nhân sự mua đồ ăn, thức uống về chất đầy tủ, ai đến mua đồ thì tự bỏ tiền vào ống, tự thối tiền. sau này, để tiện hơn trong giao dịch, canteen được chuyển đổi số thu chi bằng phần mềm, nhưng cũng dựa trên nguyên tắc tự giác về nhập liệu, không có người quản lý. Những chi tiết tuy nhỏ như vậy, nhưng được ban lãnh đạo khéo léo lồng vào đời sống hàng ngày của anh em, để tạo một môi trường chính trực, minh bạch và tin tưởng lẫn nhau trong nội bộ Biscons.</Text>
        <Text mt={5}>Tuy nhiên, một tổ chức thì luôn không hoàn hào, cũng từng có những “con sâu làm rầu nồi canh”, lạm dụng chức vụ để đưa quyền lợi tập thể về lợi ích cá nhân, không trung thực với khách hàng và đối tác, cạnh tranh không lành mạnh. Những trường hợp như thế từng có trong lịch sử hoạt động của công ty, và luôn được ban lãnh đạo xử lý một cách mạnh tay, cho “ra đi trong một nốt nhạc” kể cả những vị trí quản lý cấp cao, đền bù những số tiền lớn, thậm chí có trường hợp còn suýt phải hầu tòa. những việc làm quyết liệt đó thể hiện rõ quan điểm không khoan nhượng về sự chính trực, xuyên suốt trong mọi hoạt động kinh doanh và đối nội của Biscons.</Text>
      </Flex>
      <Flex p={["40px 10px","40px 80px","40px 80px","40px 80px"]} flexDir={"column"}>
        <Text color={"#3a3a3a"} fontSize={"25px"} fontWeight={700}>Thẳng và thật.</Text>
        <Text>Môi trường của Biscons hướng đến sự chia sẻ thẳng thắn, cởi mở, với tư duy “Có phản biện mới có sự phát triển”. Mọi thành viên không kể mọi cấp bậc đều có quyền và nghĩa vụ chia sẻ quan điểm, góp ý với những vấn đề của người khác, đồng thời biết lắng nghe từ mọi người. Mỗi cuối quý, chúng tôi có một bản đánh giá môi trường làm việc, đánh giá cấp trên quản lý trực tiếp, nêu ra những vấn đề được và không được. Sau đó, đích thân giám đốc điều hành sẽ chủ trì một buổi talk show để đưa các vấn đề nổi cộm ra giải quyết một cách minh bạch và công khai.</Text>
        <Flex w={"100%"} mt={5} justifyContent={"center"} alignItems={"center"} flexDir={"column"}>
          <Image maxW={["100%","100%","100%","1256px"]} maxH={["100%","100%","100%","956px"]}  src={human6.src} alt='gift' objectFit={"cover"} />
          <Text textAlign={"center"} fontSize={"15px"} mt={5}>Một buổi talkshow đầu tuần tại Biscons</Text>
        </Flex>
      </Flex>
      <Flex p={["40px 10px","40px 80px","40px 80px","40px 80px"]} flexDir={"column"}>
        <Text color={"#3a3a3a"} fontSize={"25px"} fontWeight={700} mb={5}>Gắn kết với nhau thông qua các hoạt động được tổ chức thường niên.</Text>
        <Image maxW={"100%"} maxH={"100%"} src={human7.src} alt='gift' objectFit={"cover"} />
        <Text textAlign={"center"} fontSize={"15px"} mt={5}>Dã ngoại tại Ba Vì</Text>
      </Flex>

      <Flex p={["40px 10px","40px 80px","40px 80px","40px 80px"]}>
        <Grid templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)"]} gap={8}>
        <Flex flexDir={"column"} justifyContent={"center"}>
          <Text>Để hình thành nên một văn hóa doanh nghiệp năng động, thúc đẩy sự sáng tạo và chuyên nghiệp. Sự đoàn kết và cống hiến của những cá nhân và tập thể là không thể nào thiếu được. Các hoạt động gắn kết hàng năm, hàng tháng như: Mừng sinh nhật công ty, các buổi picnic, các chương trình noel, trung thu hay các cuộc thi đôi khi là vô thưởng vô phạt (nhưng vui),….được ban điều hành tổ chức thường xuyên, làm phong phú thêm đời sống tinh thần người Biscons</Text>      
        </Flex>
        <Flex flexDir={"column"}>
          <Image src={human8.src} alt='gift' />
          <Text textAlign={"center"} fontSize={"15px"} mt={5}>Bốc thăm quà vào mỗi dịp Noel. Các thành viên sẽ tự chuẩn bị một món quà và góp vào thùng quà chung để bốc thăm tặng quà ngẫu nhiên</Text>
        </Flex>
        </Grid>
      </Flex>
      <Flex w={"100%"} mt={5} justifyContent={"center"} alignItems={"center"} flexDir={"column"}>
          <Image maxW={["100%","100%","100%","1256px"]} maxH={["100%","100%","100%","956px"]} src={human9.src} alt='gift' objectFit={"cover"} />
          <Text textAlign={"center"} fontSize={"15px"} mt={5}>Những sự kiện mang đậm thương hiệu “kiến trúc sư”</Text>
      </Flex>
      <Flex p={["40px 10px","40px 80px","40px 80px","40px 80px"]} flexDir={"column"}>
        <Text fontSize={"30px"} fontWeight={700} color={"global.primary"} mb={5}>Tổng kết</Text>
        <Text>Những mảnh ghép bên trên tạo nên một văn hóa doanh nghiệp đặc biệt và đầy sắc màu tại Biscons. Một văn hóa “sáng tạo và chính trực” tạo nên những cá thể khác biệt nhưng vượt lên trên đó là một tổng thể nhất quán. Và cũng có lẽ đây chính là động lực thúc đẩy sự tăng trưởng tuy nhanh nhưng rất vững chắc của Biscons trong một thị trường ngày càng nhiều biến động như thời đại hôm nay.</Text>
      </Flex>
    </Flex>
  )
}

export default Human