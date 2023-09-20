import { NewsTypeEnum } from '@/constants/enum'
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import logo from "../../public/mini-logo.svg"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { clientAction } from '@/redux/client-slice'
import Slider from 'react-slick'
import Link from 'next/link'
import { AddIcon } from '@chakra-ui/icons'

const NewsSection = () => {
  const {currentNewsType} = useSelector((state: RootState) => state.client)
  const dispatch = useDispatch()

  const newsList = useMemo(() => {
    return newsDummy.filter((news) => news.type === currentNewsType)
  }, [currentNewsType])

  return (
    <Box p={"80px"}>
      <Box mb={"20px"} color={"#2F2B2B"} fontSize={"40px"} fontWeight={700} textTransform={'uppercase'}>
        <h2>Tin tức</h2>
      </Box>
      <Flex justifyContent={'flex-end'}>
        <Flex gap={"40px"}>
          {newsType.map((type, i) => (
            <Box key={i} fontSize={"18px"} fontWeight={currentNewsType === type.type ? 700 : 600} textTransform={'uppercase'} bgColor={'white'} p={"8px 15px"}
              cursor={'pointer'} color={"#223B5F"} pos={'relative'}
              onClick={() => dispatch(clientAction.setCurrentNewType(type.type))}>
              {currentNewsType === type.type && <Image src={logo.src} alt='logo' pos={'absolute'} boxSize={"40px"} top={0} left={"-30px"}/>}
              {type.name}
            </Box>
          ))}
        </Flex>
      </Flex>
      <Box p={"10px"} className='news-slider'>
        <Slider infinite={true} slidesToShow={3} swipeToSlide={true} arrows={false} dots={true}>
          {newsList.map((news, i) => (
            <Box key={i} padding={"20px"}>
            <Box boxShadow={"0 0 10px 0 rgba(0,0,0,.1)"} borderRadius={"15px"}>
              <Box cursor={'pointer'}>
                <Image alt={news.title} src={news.img} borderRadius={"15px 15px 0 0"}/>
              </Box>
              <Box p={"30px"} bgColor={"white"} borderRadius={"0 0 15px 15px"}>
                <Link href={"/"}>
                <Text fontSize={"18px"} fontWeight={600} textTransform={'uppercase'}
                  color={"global.secondary"}
                  lineHeight={"1.4em"}
                  transition={".3s"}
                  _hover={{
                    color: "global.primary"
                  }}>
                  {news.title}
                </Text>
                </Link>
                <Text my={"10px"} fontSize={"14px"} color={"global.text"}>{news.date}</Text>
                <Text mb={"10px"} fontSize={"16px"} color={"global.text"} fontWeight={400}>{news.description}</Text>
                <Link href={'/'}>
                  <Flex color={"global.primary"} fontSize={"14px"} fontWeight={600} textTransform={"uppercase"} mt={"10px"} alignItems={'center'}>
                    <Text>Xem thêm</Text>
                    <AddIcon ml={"10px"} boxSize={"15px"}/>
                  </Flex>
                </Link>
              </Box>
            </Box>
            </Box>
          ))}
        </Slider>
      </Box>
      <Box mt={"60px"} textAlign={'center'}>
        <Link href={"/"}>
          <Button variant={"default"}>
            Xem tất cả bài viết
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default NewsSection

const newsType = [
  {name: "Tin tức", type: NewsTypeEnum.NEWS},
  {name: "Hoạt động nội bộ", type: NewsTypeEnum.ACTIVITY},
  {name: "Cẩm nang xây nhà", type: NewsTypeEnum.HANDBOOK},
  {name: "Phong thủy", type: NewsTypeEnum.FENGSHUI},
]

const newsDummy = [
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2022/09/Zalo_ScreenShot_28_9_2022_3394-768x404.png",
    title: "Trải nghiệm của khách hàng về công trình: Bong Bin Zin House",
    description: "Từ bao giờ, nhà ở được coi là những món quà kỉ niệm sang trọng và ý nghĩa. Nhân dịp kỷ niệm 5 năm ngày cưới với người vợ của mình, anh Đôn ở Hải Phòng đã cho chị nhà một bất ngờ lớn bằng ý tưởng lấy nhà ở",
    date: "14/09/2022",
    type: NewsTypeEnum.NEWS
  },
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2022/09/Zalo_ScreenShot_28_9_2022_236622-768x432.png",
    title: "Trải nghiệm của khách hàng về công trình: 3T House",
    description: "Trên bước đường phát triển và thành công của Biscons, chúng tôi luôn luôn nỗ lực để lắng nghe và thấu hiểu những chia sẻ, tâm sự của khách hàng ngay từ những bước đầu tiên bắt đầu dự án. Hoặc những cảm nhận về trải nghiệm, đóng góp chân",
    date: "14/09/2022",
    type: NewsTypeEnum.NEWS
  },
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2022/09/237045838_325481595977192_4254057921833829228_n-768x513.jpg",
    title: "Trải nghiệm của khách hàng về công trình: Bong Bin Zin House",
    description: "2 năm là quãng thời gian không quá dài nhưng lại khiến một nơi tưởng chừng như lạ lẫm lại trở nên thân quen đặc biệt. Giờ đây, trụ sở Roman Plaza không còn chỉ là nơi làm việc mà còn là căn nhà thứ hai của gần 30 thành",
    date: "12/09/2022",
    type: NewsTypeEnum.NEWS
  },
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2022/11/313331815_614831227042226_3398786170316164020_n-768x513.jpg",
    title: "Chính Sách Bảo Hành Bảo Trì Vượt Trội Tại Các Dự Án Của Biscons",
    description: 'Ngoài bộ tiêu chuẩn chất lượng thi công, chính sách bảo hành, bảo trì cũng là một trong những điều tạo nên sự khác biệt trong mỗi dự án mà BISCONS thực hiện. Vậy điều đó có thật sự đúng như lời khẳng định hay không? Và chính sách của',
    date: "11/09/2022",
    type: NewsTypeEnum.NEWS
  },
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2023/03/biet-thu-hien-dai-the-harmony.jpg",
    title: "Quy trình xây dựng nhà bao gồm những gì?",
    description: "Làm nhà là một trong những cột mốc đóng dấu sự trưởng thành của 1 đời người .Dưới đây Biscons Jsc sẽ đưa ra những nguồn tin hữu ích, các bước để xây dựng nhà ở . Lập kế hoạch xây nhà và tìm hiểu mua đất để xây dựng",
    date: "03/07/2023",
    type: NewsTypeEnum.NEWS
  },
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2022/11/313374302_614868940371788_3125992811405163649_n-768x511.jpg",
    title: "Cột Mốc 5 Năm Biscons",
    description: "5 năm là quãng thời gian đủ dài để chứng minh cho sự phát triển một cách chắc chắn và bền vững cho một doanh nghiệp. Chúng ta đã đi qua những sóng gió ngày đầu của quá trình khởi nghiệp, đã từng bước vươn mình để khẳng định tên",
    date: "10/11/2022",
    type: NewsTypeEnum.ACTIVITY
  },
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2022/10/z3697575023129_3ec24efcb9bd44995d57dbb22e1329a3-768x432.jpg",
    title: "Sinh Nhật Biscons 3 Năm Tuổi Tại Quy Nhơn",
    description: "3 năm - 1 chặng đường không phải quá dài nhưng với Biscons, đó là một cuộc hành trình với nhiều trăn trở, nỗ lực và đam mê của tất cả thành viên để theo đuổi sứ mệnh đem đến các công trình tối ưu và mang lại trải nghiệm",
    date: "01/10/2022",
    type: NewsTypeEnum.ACTIVITY
  },
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2022/10/6x9-12-768x432.jpg",
    title: "Biscons – 4 Năm Một Hành Trình",
    description: "5 năm là quãng thời gian đủ dài để chứng minh cho sự phát triển một cách chắc chắn và bền vững cho một doanh nghiệp. Chúng ta đã đi qua những sóng gió ngày đầu của quá trình khởi nghiệp, đã từng bước vươn mình để khẳng định tên",
    date: "01/10/2022",
    type: NewsTypeEnum.ACTIVITY
  },
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2022/09/138318962_3635585763191263_5919628746883928809_n-768x429.jpg",
    title: "Một Hộp Hồ Sơ Biscons Bàn Giao Cho Khách Hàng Gồm Những Gì?",
    description: "Trước khi bàn giao hồ sơ cho khách hàng thì đội ngũ BISCONS đã phải trải qua rất nhiều giai đoạn gian nan. Khi khách hàng đã cầm trên tay hộp hồ sơ dự án thì đó phải là sản phẩm hoàn hảo nhất, chất lượng nhất. Cùng BISCONS khám",
    date: "23/09/2022",
    type: NewsTypeEnum.ACTIVITY
  },
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2022/09/mong-bang-1.jpg",
    title: "Bộ Tiêu Chuẩn Chất Lượng Thi Công – Điều Làm Nên Sự Khác Biệt Của Các Công Trình Biscons",
    description: "Đối với mỗi công trình xây dựng, ngoài nhu cầu về mặt thẩm mỹ, độ chính xác, chi tiết hay tính an toàn cũng là các yếu tố đóng vai trò quan trọng. Thấy rõ được điều đó, BISCONS đã xây dựng nên bộ tiêu chuẩn chất lượng thi công,",
    date: "14/09/2022",
    type: NewsTypeEnum.ACTIVITY
  },
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2022/03/biet-thu-2-tang-chu-L-hien-dai-2-768x432.jpg",
    title: "Phân tích chi tiết chi phí xây dựng nhà 2 tầng",
    description: "Dưới đây là một phân tích về chi phí xây dựng nhà 2 tầng từ Biscons, với mục tiêu cung cấp thông tin tổng quan và hướng dẫn về cách tính chi phí xây dựng mà nhiều người thường áp dụng. Ngoài ra, chúng tôi cũng sẽ đưa ra một",
    date: "17/09/2023",
    type: NewsTypeEnum.HANDBOOK
  },
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2023/08/350132900_185289184482312_7631205328128781599_n-768x432.jpg",
    title: "10 Lưu ý khi xây nhà mà gia chủ cần “đặc biệt” quan tâm",
    description: "Việc xây dựng một căn nhà đóng vai trò quan trọng trong cuộc đời của mọi người. Mong muốn sở hữu một căn nhà đẹp và bền vững theo thời gian đang trở thành khao khát của nhiều người hiện nay. Tuy nhiên, để thực hiện ước mơ này và",
    date: "16/09/2023",
    type: NewsTypeEnum.HANDBOOK
  },
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2023/04/320278207_566345768670824_3263656120623271592_n-768x589.jpg",
    title: "Tìm hiểu chi phí xây nhà 3 tầng đầy đủ và chi tiết nhất",
    description: "Nhìn vào sự phát triển của nền kinh tế, nhu cầu thị trường con người thay đổi không ngừng của nước ta ở thời điểm hiện nay. Tất cả chúng ta không thể không có hứng thú, bày tỏ niềm vui sướng, sự ngạc nhiên ngỡ ngàng trước sự biến",
    date: "09/09/2023",
    type: NewsTypeEnum.HANDBOOK
  },
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2023/04/ho-so-thiet-ke-ky-thuat-thi-cong-768x543.jpg",
    title: "Chia sẻ kinh nghiệm thực tế có nên xây nhà trọn gói không?",
    description: "Trong quá trình thiết kế và xây dựng nhà ở, có nhiều yếu tố và công việc mà gia chủ cần phải quản lý và quan tâm. Nếu không có thời gian và kinh nghiệm thực hiện có thể gây ra nhiều sai sót. Dự toán được khả năng này,",
    date: "17/07/2023",
    type: NewsTypeEnum.HANDBOOK
  },
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2022/09/Trai-nghiem-KH3-768x576.jpg",
    title: "[Chia Sẻ] Làm thế nào để tiết kiệm chi phí xây dựng nhà?",
    description: "Bất kể ai trong đời chúng ta đều có ước mơ tự tay xây dựng ngôi nhà khang trang, sạch đẹp. Và cũng bất kì ai cũng muốn xây nhà đẹp , sang trọng mà lại tiếp kiệm chi phí nhất có thể. Túi tiền được coi là “ Thượng",
    date: "15/07/2023",
    type: NewsTypeEnum.HANDBOOK
  },
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2023/09/tuoi-xay-nha-dep-1.jpg",
    title: "Mượn tuổi làm nhà là gì? Cách tính tuổi để làm nhà",
    description: "“Lấy vợ xem tuổi đàn bà, làm nhà xem tuổi đàn ông” là một câu nói mà các cụ bao đời xưa đã truyền lại cho thế hệ sau này nhằm nhấn mạnh sự quan trọng của việc tuổi tác phù hợp của người đàn ông khi chuẩn bị khởi",
    date: "19/09/2023",
    type: NewsTypeEnum.FENGSHUI
  },
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2023/09/Day-Dien8-768x512.jpg",
    title: "Những điều cấm kỵ khi mua đất xây nhà mà gia chủ cần biết",
    description: "Từ xưa tới nay, con người chúng ta đã có những cách nhìn, kiến thức lựa chọn nơi xây dựng tổ ấm của mình. Một vùng đất an cư lập nghiệp, làm ăn thịnh vượng phát đạt. Bên cạnh những quan niệm tâm linh, tôn giáo và sự huyền bí,",
    date: "18/09/2023",
    type: NewsTypeEnum.FENGSHUI
  },
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2022/10/phong-khach-biet-thu-hien-dai-timeless-3-768x432.jpg",
    title: "Những nguyên tắc trong thiết kế biệt thự theo phong thủy",
    description: "Mọi sinh vật trong đó có chúng ta nếu như bị giới hạn trong một không gian quá chật chội sẽ cảm thấy tù túng, gò bó. Chúng ta sẽ cảm giác khó chịu bởi do cấu trúc của vật thể đó không hợp lý, đặt chúng vào các vị",
    date: "06/09/2023",
    type: NewsTypeEnum.FENGSHUI
  },
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2023/04/biet-thu-hien-dai-chien-chien-1-768x432.jpg",
    title: "Cách chọn vị trí xây dựng biệt thự theo phong thủy",
    description: "Nhà ở hay biệt thự đều là nơi cư trú của mỗi người vậy nên những yếu tố tác động ảnh hưởng tới năng lượng môi trường cũng như tài vận của con người. Để đảm bảo ngôi nhà (Biệt thự) được lựa chọn, đặt trong vị trí tốt đem",
    date: "06/09/2023",
    type: NewsTypeEnum.FENGSHUI
  },
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2023/08/350132900_185289184482312_7631205328128781599_n-768x432.jpg",
    title: "Các yếu tố quan trọng trong phong thủy biệt thự",
    description: "Trong nền kinh tế phát triển xã hội tiên tiến hiện nay, có khá nhiều sự lựa chọn thiết kế riêng cho căn biệt thự của mình. Tầm nhìn xa trông rộng về quan cảnh trong và ngoài sẽ tạo nên ngôi nhà lộng lẫy, không gian thoáng mát lại",
    date: "05/09/2023",
    type: NewsTypeEnum.FENGSHUI
  },
  {
    img: "https://kientrucbiscons.vn/wp-content/uploads/2023/09/huong-nha-tuoi-canh-than-1980-1-768x464.jpg",
    title: "Tuổi canh thân xây nhà năm nào thì tốt?",
    description: "Xây nhà là một việc trọng đại trong cuộc sống của mỗi người, nhất là đối với nam giới. Nó cũng quan trọng giống như việc xây dựng gia đình, cưới vợ gả chồng. Theo quan niệm của ông cha ta ngày xưa việc xây nhà an cư lạc nghiệp",
    date: "04/09/2023",
    type: NewsTypeEnum.FENGSHUI
  },
]