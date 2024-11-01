import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Itinerary from "./Itinerary";

const Notes = (props) => {
  const [notes, setNotes] = useState([
    {
      title: "Giá tour bao gồm",
      description:
        "Xe đưa đón tham quan tùy theo số lượng khách suốt chương trình.\nHướng dẫn viên tiếng Việt\nKhách sạn tiêu chuẩn 3 sao và 4 sao\nĂn theo chương trình\nVé tham quan theo chương trình\nBảo hiểm du lịch với mức bồi thường cao nhất 120.000.000đ/vụ.\nNước suối: 02 chai 0,5L/ ngày/ khách.\nNón Vietravel",
    },
    {
      title: "Lưu ý về chuyển hoặc huỷ tour",
      description:
        "- Sau khi đóng tiền, nếu Quý khách muốn chuyển/huỷ tour xin vui lòng mang Vé Du Lịch đến văn phòng đăng ký tour để làm thủ tục chuyển/huỷ tour và chịu mất phí theo quy định của Vietravel. Không giải quyết các trường hợp liên hệ chuyển/huỷ tour qua điện thoại.",
    },
    {
      title: "Giá tour không bao gồm",
      description: "Chi phí cá nhân, chi phí tham quan ngoài chương trình",
    },
    {
      title: "Điều kiện hủy tour đối với ngày thường",
      description: "Tạm thời không có thông tin liên quan",
    },
    {
      title: "Lưu ý giá trẻ em",
      description:
        "Trẻ em dưới 5 tuổi: được miễn phí vé dịch vụ (ăn chung, ngủ chung với cha mẹ). Hai người lớn chỉ được kèm 1 trẻ em dưới 5 tuổi, em thứ hai trở lên phải mua ½ vé.\nTrẻ em từ 5 - dưới 11 tuổi phải mua 50% vé dịch vụ (ăn riêng, ngủ chung với cha mẹ). Hai người lớn chỉ được kèm 1 trẻ em từ 5 - dưới 11 tuổi, em thứ hai trở lên phải mua 1 suất giường đơn.\nTrẻ em 11 tuổi trở lên phải mua một vé.",
    },
    {
      title: "Điều kiện hủy tour đối với ngày lễ, tết",
      description: "Tạm thời không có thông tin liên quan",
    },
    {
      title: "Điều kiện thanh toán",
      description: "Tạm thời không có thông tin liên quan",
    },
    {
      title: "Trường hợp lý do bất khả kháng",
      description:
        "- Nếu chương trình du lịch bị hủy bỏ hoặc thay đổi bởi một trong hai bên vì lý do bất khả kháng (hỏa hoạn, thời tiết, tai nạn, thiên tai, chiến tranh, dịch bệnh, hoãn, dời, và hủy chuyến hoặc thay đổi khác của các phương tiện vận chuyển công cộng hoặc các sự việc bất khả kháng khác theo quy định pháp luật…), thì hai bên sẽ không chịu bất kỳ nghĩa vụ bồi hoàn các tổn thất đã xảy ra và không chịu bất kỳ trách nhiệm pháp lý nào. Tuy nhiên mỗi bên có trách nhiệm cố gắng tối đa để giúp đỡ bên bị thiệt hại nhằm giảm thiểu các tổn thất gây ra vì lý do bất khả kháng.",
    },
    {
      title: "Điều kiện đăng ký",
      description:
        "- Đối với Khách Quốc tịch Việt Nam: Khi đi tour Trẻ em từ 14 tuổi trở lên và người lớn cần đem theo CMND/Passport (Hộ chiếu) bản chính còn hạn sử dụng, hình ảnh rõ (CMND có thời hạn sử dụng không quá 15 năm, tính từ ngày cấp)/ Giấy khai sinh bản chính (trẻ em dưới 14 tuổi), trẻ em trên 14 tuổi bắt buộc phải có CMND hoặc Passport làm thủ tục lên máy bay.\n- Đối với khách Nước ngoài/Việt Kiều: Khi đi tour phải mang theo đầy đủ Passport (Hộ Chiếu) bản chính còn hạn sử dụng hoặc thẻ xanh kèm theo Visa và giấy tái xuất nhập Việt Nam làm thủ tục lên máy bay.\n- Khi đăng ký tour Quý khách vui lòng mang theo CMND/Passport bản chính hoặc cung cấp tên chính xác đầy đủ, đúng từng ký tự trên CMND/ Passport (Hộ chiếu)/Giấy khai sinh (trẻ em dưới 14 tuổi) theo thứ tự: Họ/tên lót/tên. Quý khách khi đăng ký cung cấp tên theo giấy tờ tùy thân nào, khi đi tour phải mang theo giấy tờ tùy thân đó theo qui định hãng hàng không\n- Trong trường hợp Quý khách cung cấp tên sai, đến trễ giờ bay, vui lòng chịu phí đổi vé hoặc mua lại vé mới theo quy định của Hãng Hàng Không (nếu chuyến bay còn chỗ).\n- Trong trường hợp Quý khách bay hãng hàng không Vietjet và Jetstar, vé không hoàn, không dời, đổi, huỷ, sai tên mất 100% theo qui định hãng hàng không. Giá vé máy bay trẻ em bằng 100% người lớn.\n- Trong trường hợp Quý khách bay hãng hàng không Vietnam Air. Vé máy bay khuyến mãi không hoàn, không đổi, hủy, sai tên mất 100% theo qui định hãng hàng không. vé Vietnam Airlines không bay chặng đi, tự động hủy chặng về. Giá vé máy bay trẻ em bằng 90% vé người lớn.\n- Giá vé, giờ bay có thể thay đổi theo Hãng Hàng Không (Vietnam Airlines, Vietjet, Jetstar) không thể báo trước.\n- Do các chuyến bay phụ thuộc vào các hãng Hàng Không nên trong một số trường hợp giờ bay có thể thay đổi mà không được báo trước. Tùy vào tình hình thực tế, Chương trình và điểm tham quan có thể linh động thay đổi thứ tự các điểm phù hợp điều kiện giờ bay và thời tiết thực tế. Vietravel sẽ không chịu trách nhiệm bảo đảm các điểm tham quan trong trường hợp:\n+ Xảy ra thiên tai: bão lụt, hạn hán, động đất, dịch bệnh,…\n+ Sự cố về an ninh: khủng bố, biểu tình\n+ Sự cố về hàng không: trục trặc kỹ thuật, an ninh, dời, hủy, hoãn chuyến bay.\n- Nếu những trường hợp trên xảy ra, Vietravel sẽ xem xét để hoàn trả chi phí không tham quan cho khách trong điều kiện có thể (sau khi đã trừ lại các dịch vụ đã thực hiện….và không chịu trách nhiệm bồi thường thêm bất kỳ chi phí nào khác).\n- Sau khi Quý khách đã làm thủ tục Hàng Không và nhận thẻ lên máy bay, đề nghị Quý khách giữ cẩn thận và lưu ý lên máy bay đúng giờ. Vietravel không chịu trách nhiệm trong trường hợp khách làm mất thẻ lên máy bay và không lên máy bay đúng theo giờ quy định của Hàng Không.\n- Giờ nhận phòng khách sạn: sau 14:00 giờ và trả phòng trước 12:00 giờ\n- Phòng khách sạn/resort có thể xảy ra trường hợp phòng không gần nhau, không cùng tầng, loại phòng một giường đôi hoặc hai giường đơn không theo yêu cầu, tùy tình hình thực tế từng khách sạn/Resort.\n- Trường hợp quý khách tham gia tour 01 khách, bắt buộc đóng thêm tiền phụ thu phòng đơn để ở riêng 01 phòng. Trường hợp trong đoàn cũng có khách đi 01 mình, cùng giới tính và có nhu cầu muốn ghép cùng phòng với quý khách thì Vietravel sẽ hoàn lại tiền phụ thu phòng đơn cho quý khách.\n- Trường hợp quý khách đi nhóm 03 khách, Vietravel sẽ cung cấp 01 phòng dành cho 03 khách là 01 giường lớn 1m6 và 01 giường phụ di động từ 0.8 - 1,2m (extrabed) hoặc 01 nệm đơn tùy từng khách sạn/Resort. Trong trường quý khách có nhu cầu ở riêng, vui lòng đóng thêm tiền phụ thu phòng đơn theo qui định\n- Thông tin hành lý khi đi tour : Xách tay dưới 7kg/1khách - Kích thước không quá: 56cm x 36cm x 23 cm, chất lỏng với thể tích không quá 100ml. Ký gửi: 20kg/1khách - Kích thước không quá: 119cm x 119cm x 81cm. Các vật phẩm không được chấp nhận dưới dạng hành lý ký gởi hoặc vận chuyển trong hành lý theo qui định hàng không\n- Quý khách dưới 18 tuổi khi đi tour phải có Bố Mẹ hoặc người thân trên 18 tuổi đi cùng. Trường hợp đi một mình phải được Bố Mẹ ủy quyền (có xác nhận của chính quyền địa phương) cho Vietravel\n- Khách nữ từ 55 tuổi trở lên và khách nam từ 60 trở lên: nên có người thân dưới 55 tuổi (đầy đủ sức khỏe) đi cùng. Riêng khách từ 70 tuổi trở lên: Bắt buộc phải có người thân dưới 55 tuổi (đầy đủ sức khỏe) đi cùng . Vì lý do an toàn Quý khách hạn chế và không nhận khách từ 80 tuổi trở lên. Khách trên 80 tuổi không có chế độ bảo hiểm.\n- Quý khách đang mang thai vui lòng báo cho nhân viên bán tour ngay tại thời điểm đăng ký. Lưu ý phải có ý kiến của bác sĩ trước khi đi tour. Cam kết tự chịu trách nhiệm về sức khỏe của mình và thai nhi trong suốt thời gian tham gia chương trình du lịch\n- Đây là chương trình du lịch trọn gói, Vietravel không có trách nhiệm hoàn trả chi phí chênh lệch cho các khách hàng thuộc diện miễn giảm hoặc đối tượng ưu tiên như trẻ nhỏ, người lớn tuổi, người có công với cách mạng… Chính sách miễn giảm, ưu tiên (nếu có) chỉ dành cho khách lẻ của các điểm tham quan.\n- Quý khách có nhu cầu cần xuất hóa đơn vui lòng cung cấp thông tin xuất hóa đơn cho nhân viên bán tour khi ngay khi đăng ký, không nhận xuất hóa đơn sau khi tour đã kết thúc.\n- Quý khách vui lòng tham khảo kỹ các Điều Kiện Bán Vé trước khi đăng ký chuyến du lịch. Trong trường hợp không trực tiếp đăng ký, nhờ người thân đăng ký hộ vui lòng cập nhật thông tin từ người đăng ký.",
    },
    {
      title: "Liên hệ",
      description:
        "PHÒNG KHÁCH LẺ - KHỐI DU LỊCH TRONG NƯỚC\nHotline: 0905 070 544 ( Thành.Mr )",
    },
  ]);
  return (
    <>
    <h1 className="text-center font-medium text-2xl">NHỮNG THÔNG TIN CẦN LƯU Ý</h1>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {notes.map((note, index) => {
          return (
            <div key={index}>
              <Itinerary itinerary={note}></Itinerary>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Notes;
