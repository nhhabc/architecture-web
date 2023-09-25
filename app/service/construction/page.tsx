"use client";
import Header2 from '@/constants/Header2';
import HeadTitle from '@/constants/service-page/HeadTitle';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Image, ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react'

const Construction = () => {
  return (
    <>
      <Header2 bgImg='https://kientrucbiscons.vn/wp-content/uploads/2022/03/pc-1-min-20211103082154-min.jpg'
        title='QUY TRÌNH THI CÔNG'/>
      <Box h={"30px"}/>
      <HeadTitle title='QUY TRÌNH THỰC HIỆN'/>
      <Flex className={"layout"}>
        <UnorderedList>
          <ListItem mb={"20px"}>
            <Text><strong>Bước 1:  Tiếp nhận dữ liệu đầu vào.</strong> bao gồm: Bản vẽ thiết kế, nhu cầu đầu tư, khảo sát hiện trạng dự án. Các thông tin hiện trạng có thể ảnh hưởng đến đơn giá thi công:</Text>
            <br/>
            <Text>– Sự thuận lợi về giao thông tiếp cận</Text>
            <Text>– Địa điểm tập kết vật liệu</Text>
            <Text>– Mức độ phức tạp của bối cảnh xung quanh, các nhà hàng xóm</Text>
            <Text>– Các quy định trong quá trình xây dựng ở địa phương (giờ giấc, vận chuyển vật tư,…)</Text>
            <Text>– Địa chất công trình</Text>
          </ListItem>
          <ListItem mb={"20px"}>
            <Text><strong>Bước 2: Tiến hành báo giá.</strong> Bảng báo giá gồm:</Text>
            <br/>
            <Text>– Đơn giá, cách thức tính đơn giá và tổng giá trị hợp đồng</Text>
            <Text>– Các công tác có trong hợp đồng</Text>
            <Text>– Các công tác không có trong hợp đồng</Text>
            <Text>– Bảng vật liệu đi kèm</Text>
          </ListItem>
          <ListItem mb={"20px"}>
            <Text><strong>Bước 3: Kí kết hợp đồng và tạm ứng đợt 1</strong></Text>
          </ListItem>
          <ListItem mb={"20px"}>
            <Text><strong>Bước 4: Công tác chuẩn bị</strong> (Trước khi vào thi công 5 ngày):</Text>
            <Text>– Chuẩn bị hiện trạng, rào chắn công trình, đấu nối nguồn điện nước</Text>
            <Text>– Xử lý các vấn đề về mặt cam kết với các công trình lân cận</Text>
            <Text>– Gửi bảng tiến độ thi công chi tiết cho chủ đầu tư</Text>
          </ListItem>
          <ListItem mb={"30px"}>
            <Text><strong>Bước 5: Tiến hành thi công công trình.</strong></Text>
            <Text>– Thi công công trình theo từng giai đoạn trong bảng tiến độ, thanh toán bám theo từng giai đoạn thi công</Text>
            <Text>– Nghiệm thu giai đoạn theo bảng tiêu chuẩn chất lượng dự án đi kèm, nghiệm thu xong giai đoạn này mới được thi công tiếp giai đoạn kế tiếp</Text>
            <Text>– Nghiệm thu bàn giao công trình, kí cam kết bảo hành</Text>
          </ListItem>
        </UnorderedList>
      </Flex>
      <HeadTitle title='KHỐI LƯỢNG CÔNG VIỆC'/>
      <Flex className={"layout"}>
        <Accordion allowToggle={true} border={"2px solid #2B395D"} bgColor={"white"}>
          {workingList.map((item, i) => (
            <AccordionItem key={i}>
              {({ isExpanded }) => (
              <>
                <AccordionButton p={"15px 20px"} fontWeight={700} cursor={'pointer'} color={isExpanded ? "#13AFE5" : "global.primary"}>
                {isExpanded ? (
                  <MinusIcon fontSize='12px' />
                ) : (
                  <AddIcon fontSize='12px' />
                )}
                <Text ml={2}>
                  {item.title}
                </Text>
                </AccordionButton>
                <AccordionPanel>
                <OrderedList>
                  {item.step.map((step, i) => (
                    <ListItem key={i}>
                      {step.desc}
                    </ListItem>
                  ))}
                </OrderedList>
                </AccordionPanel>
              </>
            )}
            </AccordionItem>
          ))}
        </Accordion>
      </Flex>
      <HeadTitle title='THẾ MẠNH CỦA BISCONS'/>
      <Flex className={"layout"}>
        <UnorderedList fontSize={15} mb={"20px"}>
          <ListItem><strong>Hoàn thiện thực tế luôn bám sát 3D trên 95%, </strong>Với chúng tôi, việc tuân thủ thiết kế, và hiện thực hóa bản vẽ ra công trường một cách chính xác luôn là yêu cầu được đặt lên hàng đầu. Bởi luôn coi mỗi bản thiết kế, mỗi công trình là một đứa con tinh thần của toàn bộ đội ngũ Biscons, chúng tôi hiểu và để tâm đến từng chi tiết nhỏ ở trong bản vẽ, hiểu ý đồ thiết kế của từng ngóc ngách ở trong ngôi nhà. Đó cũng là lý do vì sao chúng tôi rất ít khi nhận thi công các dự án không phải do mình thiết kế, và cũng không lấy làm yên tâm khi các dự án “con ruột” của mình được giao cho 1 bên khác thi công
          </ListItem>
        </UnorderedList>
      </Flex>
      <Flex maxW={"1250px"} mx={'auto'}>
        <Image alt={"service"} p={"10px"} w={"50%"} src='https://kientrucbiscons.vn/wp-content/uploads/2022/09/nha-pho-hien-dai-hp-1-1.jpg'/>
        <Image alt={"service"} p={"10px"} w={"50%"} src='https://kientrucbiscons.vn/wp-content/uploads/2022/09/Untitled-2-1.jpg'/>
      </Flex>
      <Flex className={"layout"}>
        <Text fontStyle={"italic"} textAlign={'center'} mb={"40px"}>Gần như không có sự khác biệt giữa thực tế và 3D</Text>
        <UnorderedList>
          <ListItem fontWeight={'bold'} fontSize={15}>Quy trình thi công chuyên nghiệp, hướng đến trải nghiệm khách hàng</ListItem>
        </UnorderedList>
      </Flex>
      <Flex maxW={"1250px"} mx={'auto'}>
        <Flex w={"44%"} flexDir={'column'} p={"10px"} gap={"20px"}>
          <Text style={{wordSpacing: "7px"}}>Tại Biscons, chúng tôi xây dựng một bộ quy trình tiêu chuẩn kỹ lưỡng, tỉ mỉ để làm “ngôn ngữ làm việc chung” với khách hàng và các nhà thầu phụ, nhân sự kỹ thuật, công nhân, và đảm bảo tính đồng đều về chất lượng – dịch vụ giữa các công trình. Bộ tiêu chuẩn này được xây dựng dựa trên đúc kết kinh nghiệm triển khai dự án trên hàng trăm công trình qua nhiều năm, thấu hiểu tâm lý của khách hàng, các vấn đề trục trặc có thể gặp phải. các tiêu chuẩn về biện pháp thi công và thẩm định đều hướng đến những chuẩn mực cao, đảm bảo tính an toàn, thẩm mỹ trong quá trình thi công. Đây chính điều tạo nên sự khác biệt về chất lượng dự án thi công của Biscons so với mặt bằng chung của thị trường</Text>
          <Box>
            <Image alt="service" src='https://kientrucbiscons.vn/wp-content/uploads/2022/09/301811301_574821151043234_2121650132927564739_n.jpg'/>
            <Text fontStyle={"italic"} textAlign={'center'} my={"12px"} fontSize={15}>
              100% các công trình thi công sử dụng ván cốp pha phủ phim, đảm bảo tính thẩm mỹ và chống rỗ, chống thấm của bề mặt bê tông
            </Text>
          </Box>
          <Box>
            <Image alt='service' src='https://kientrucbiscons.vn/wp-content/uploads/2022/09/304931978_574821164376566_3093049524082221496_n.jpg'/>
            <Text fontStyle={"italic"} textAlign={'center'} my={"12px"} fontSize={15}>
              Hệ thống giáo chống sắt áp dụng bắt buộc, giúp đẩy nhanh tốc độ thi công và tăng tính an toàn, ổn định cho giàn giáo chống
            </Text>
          </Box>
        </Flex>
        <Flex w={"56%"} flexDir={'column'} p={"10px"} gap={"20px"}>
          <Box>
            <Image alt="service" src='https://kientrucbiscons.vn/wp-content/uploads/2022/09/301014513_574821114376571_2555818890106952665_n.jpg'/>
          </Box>
          <Box>
            <Image alt="service" src='https://kientrucbiscons.vn/wp-content/uploads/2022/11/z3842629678571_8fdd48809a92e15611209ea052684b6a-1024x1024.jpg'/>
            <Text fontStyle={"italic"} textAlign={'center'} my={"12px"} fontSize={15}>
              Hệ thống giáo chống sắt áp dụng bắt buộc, giúp đẩy nhanh tốc độ thi công và tăng tính an toàn, ổn định cho giàn giáo chống
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex maxW={"1250px"} mx={'auto'}>
        <Image p={"10px"} alt='service' w={"50%"} src='https://kientrucbiscons.vn/wp-content/uploads/2022/11/z3842616919789_25e3a181dd40e7e54fe00cc8449eb388-767x1024.jpg'/>
        <Image p={"10px"} alt='service' w={"50%"} src='https://kientrucbiscons.vn/wp-content/uploads/2022/11/z3842616906342_62fa525ba63d768733c8fbb1bb4f00c5-767x1024.jpg'/>
      </Flex>
      <Text fontStyle={"italic"} textAlign={'center'} my={"12px"} fontSize={15}>Lắp đặt hộp kiểm tra điện trở trước khi đấu nối hệ thống chống sét</Text>
      <Flex className={"layout"} fontSize={15}>
        <UnorderedList mb={"30px"}>
          <ListItem fontWeight={'bold'}>Chế độ bảo hành bảo trì vượt trội</ListItem>
        </UnorderedList>
        <Text mb={"30px"}>Chúng tôi tự tin đưa ra cơ chế bảo hành chất lượng công trình gấp đôi so với thị trường:</Text>
        <UnorderedList mb={"20px"} fontWeight={'bold'}>
          <ListItem>Bảo hành phần thô 10 năm</ListItem>
          <ListItem>Bảo hành phần hoàn thiện 2 năm</ListItem>
          <ListItem>Bảo hành đồ gỗ 5 năm</ListItem>
          <ListItem>Bảo hành trang thiết bị theo bảo hành của hãng sản xuất</ListItem>
        </UnorderedList>
        <Text mb={"30px"}>Đương nhiên, với tinh thần trách nhiệm và sự tâm huyết cho các dự án “con đẻ” của mình, chúng tôi luôn sẵn sàng có mặt mỗi khi khách hàng yêu cầu kể cả ngoài thời gian bảo hành. Ngoài thời gian này, Các chi phí xử lý không đáng kể thường chúng tôi sẽ không tính chi phí sửa chữa cho khách hàng. Chế độ bảo trì dự án cũng là một điểm khác biệt mà Biscons đang là đơn vị đi tiên phong trên thị trường: Các kỹ sư của chúng tôi sẽ có mặt và kiểm tra công trình mỗi 6 tháng một lần (trong 2 năm đầu) sau khi chủ nhà đưa công trình vào sử dụng, để đảm bảo có thể phát hiện và kiểm tra mọi vấn đề dù là nhỏ nhất, thay từng cái bản lề, con ốc dù chủ nhà không đưa ra yêu cầu.</Text>
        <UnorderedList mb={"30px"}>
          <ListItem fontWeight={'bold'}>Minh bạch, cam kết tuyệt đối về vật tư vật liệu</ListItem>
        </UnorderedList>
        <Text mb={"30px"}>Việc bị các nhà thầu sử dụng các vật liệu nhái, “hàng loại 2” – hay nói trắng ra là hàng kém chất lượng trong quá trình thi công là vấn đề nhức nhối đối với nhiều chủ nhà, nhất là khi chủ đầu tư sử dụng các nhà thầu nhỏ lẻ, không có tên tuổi và uy tín trên thị trường.</Text>
        <Text mb={"30px"}>Tại Biscons, chúng tôi kê khai rõ ràng và cụ thể về tất cả các loại vật tư sử dụng trong hợp đồng, và trong quá trình thi công, bất kỳ lúc nào khách hàng cũng có thể kiểm tra đột xuất và yêu cầu xuất trình CO – CQ (giấy tờ chứng minh nguồn gốc) của các vật tư sử dụng trên công trình. Nếu phát hiện ra việc sử dụng vật tư nhái, hoặc sai với hợp đồng, chúng tôi cam kết đền gấp 5 lần giá trị hạng mục đó.</Text>
        <Text mb={"30px"}>Chính sách trên thể hiện tinh thần hướng đến việc kinh doanh đường dài, dựa trên cốt lõi là sự chính trực và uy tín mà tập thể Biscons luôn tuân thủ một cách nghiêm ngặt.</Text>
      </Flex>
    </>
  )
}

export default Construction

const layout = {
  p:"10px",
  maxW:"1250px",
  mx:"auto",
  flexDir:'column',
}

const workingList = [
  {
    title: "PHẦN XÂY DỰNG CƠ BẢN",
    step: [
      {desc: "Tổ chức công trường , quản lý giám sát hiện trường, làm lán trại công nhân (nếu mặt bằng cho phép)"},
      {desc: "Vệ sinh mặt bằng thi công, định vị tim móng, cột, đào đắp vận chuyển móng"},
      {desc: "Thi công đập đầu cọc, làm coffa, cốt thép, đổ bê tống, dầm sàn cột… Theo bản vẽ thiết kế"},
      {desc: "Xây tường gạch theo bản vẽ thiết kế, tô trát đúng quy chuẩn, trát trần những phần không làm thạch cao"},
      {desc: "Thi công chống thấm sàn mái, sàn vệ sinh, ban công, hố pít (nếu có)."},
      {desc: "Cán nền các sàn, mái, nhà vệ sinh"},
      {desc: "Lắp đặt hệ thống đường cấp thoát nước nóng lạnh (nếu có)"},
      {desc: "Lắp đặt hệ thống đường dây điện chiếu sáng cơ bản, đế âm, hộp nối"},
    ]
  },
  {
    title: "PHẦN HOÀN THIỆN",
    step: [
      {desc: "Ốp lát gạch, sàn toàn bộ nhà, ốp tường vệ sinh, len chân tường theo bản vẽ thiết kế"},
      {desc: "Ốp mặt bậc, cổ bậc, len chân tường cầu thang theo bản vẽ thiết kế"},
      {desc: "Ốp gạch, đá trang trí theo bản vẽ thiết kế (nếu có)"},
      {desc: "Lắp dựng trần thạch cao theo thiết kế, sơn bả trong nhà, ngoài nhà không bả sơn lót 01 lớp, sơn phủ 02 lớp"},
      {desc: "Lắp đặt hệ thống điện chống sét, đèn chiếu sáng cơ bản: công tắc, ổ cắm, bóng đèn."},
      {desc: "Lắp đặt thiết bị vệ sinh: bàn cầu, lavabo, vòi nước, bồn nước, bình nóng lạnh"},
      {desc: "Lắp dựng cửa đi, cửa sổ, vách kính theo bản vẽ"},
      {desc: "Lắp dựng lan can cầu thang, lan can ban công, hành lang, mặt tiền."},
      {desc: "Vệ sinh rác thải trong quá trình thi công."},
    ]
  },
  {
    title: "PHẦN XÂY DỰNG CƠ BẢN",
    step: [
      {desc: "Hệ thống điện 3 pha, hệ thống đường ống và điều hòa trung tâm, điều hòa cục  bộ, camera"},
      {desc: "Phần phào chỉ: gồm phào trang trí trần thạch cao, phào cổ trần, phào gắn tường, rèm cửa"},
      {desc: "Phần tiểu cảnh cây cối, đá cảnh quan, nội thất, quạt trần, gương WC."},
      {desc: "Hệ Bàn đá lavabo, giấy dán tường trang trí trần, tường trong nhà"},
      {desc: "Các hạng mục chống thấm đặc biệt khác, hệ thống tưới cây tự động, chống nóng trên mái (mái tôn,…)"},
      {desc: "Lắp đặt các loại đèn chùm trang trí , mạng LAN cho văn phòng, vệ sinh công nghiệp toàn bộ nhà"},
      {desc: "Các hạng mục khác không có trong thiết kế và các chi phí phát sinh thực tế khác…."},
    ]
  },
]